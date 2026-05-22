---
title: "Model Merging & FrankenMoE"
category: "Language Models"
order: 30
lang: "en"
slug: "model-merging"
---

# Model Merging & FrankenMoE

## What Is It

**Model Merging** is the process of combining two or more pre-trained LLMs into a single model without requiring additional training or significant compute. This is typically done by interpolating the weights of models that share the same architecture (e.g., merging two Llama-3-8B fine-tunes).

**FrankenMoE** (or "Sparse Upcycling") is a specific type of merging where multiple dense models are combined into a [[mixture-of-experts|Mixture-of-Experts (MoE)]] structure. Instead of averaging weights, the layers of different models are used as experts, and a router is added (often initialized with some heuristic) to select between them.

## Merging Techniques

The most common tool for this is **MergeKit**, which implements several sophisticated algorithms:

### 1. SLERP (Spherical Linear Interpolation)
Used to merge two models while preserving the geometric properties of the weight space. Unlike simple linear averaging, SLERP interpolates along the arc of the hypersphere.
$$W_{merged} = \frac{\sin((1-t)\theta)}{\sin\theta} W_1 + \frac{\sin(t\theta)}{\sin\theta} W_2$$
where $\theta = \arccos(\frac{W_1 \cdot W_2}{\|W_1\| \|W_2\|})$ and $t$ is the interpolation factor.

### 2. TIES-Merging
Designed to resolve interference between multiple fine-tunes. It works in three steps:
1.  **Reset**: Zero out small weight changes.
2.  **Resolve signs**: Determine the dominant sign for each parameter across models.
3.  **Merge**: Average only the changes that align with the dominant sign.

### 3. DARE (Drop And REscale)
DARE reduces redundancy by randomly dropping fine-tuned weights (setting them to zero) and rescaling the remaining ones to maintain the expected value of the weights. This allows merging many models without the "washed out" effect of simple averaging.
$$W_{DARE} = \frac{1}{1-p} \text{mask} \odot (W_{FT} - W_{base}) + W_{base}$$

## FrankenMoE: Creating Sparse Models

To create a FrankenMoE, one typically:
1.  Takes a **Base Model** (e.g., Mistral-7B).
2.  Takes several **Expert Models** (fine-tunes of the same base).
3.  Initializes a new MoE model where each FFN block is replaced by a MoE layer containing the FFNs from the experts.
4.  Initializes the **Gate/Router** weights (often using cheap proxy tasks or simply random initialization).

This allows for a model with many parameters but the inference cost of a smaller model, leveraging the specialized knowledge of each expert.

## Advantages and Limitations

| Feature | Advantage | Limitation |
|---|---|---|
| **Compute** | Extremely low (minutes on CPU/GPU). | No "new" knowledge is created; only existing knowledge is combined. |
| **Performance** | Often beats individual models on benchmarks. | Can lead to "catastrophic interference" if models are too different. |
| **Flexibility** | Mix and match specialized fine-tunes (code, math, chat). | Requires models to share the same base architecture and dimensionality. |

## Related Topics

[[mixture-of-experts]] — the architecture used by FrankenMoEs  
[[fine-tuning]] — the source of the models being merged  
[[llm]] — the general class of models these techniques apply to

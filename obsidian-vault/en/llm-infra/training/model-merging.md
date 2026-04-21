---
title: "Model Merging"
category: "LLM Infrastructure"
order: 16
lang: "en"
slug: "model-merging"
---

# Model Merging

Model Merging is an emerging technique that allows combining multiple fine-tuned Large Language Models into a single model without any additional training or expensive compute. This is particularly useful for creating "multi-talented" models that combine the strengths of different specialized versions (e.g., a coding expert and a creative writing expert).

## Why Merge?

Traditional ways to combine capabilities (like Multi-task learning or MoE) require training from scratch or large amounts of [[inference-serving|GPU]] memory. Merging happens at the **parameter level** and takes seconds on a CPU.

## Key Techniques

### 1. SLERP (Spherical Linear Interpolation)
Standard linear averaging of weights often leads to "blurred" features and poor performance. SLERP interpolates between two weight vectors along a spherical path, preserving the geometric properties (magnitude and angle) of the high-dimensional space.
- **Best for**: Merging two models that are close in weight space.

### 2. TIES-Merging (Trimming, Isotropy, and Sign-merging)
TIES-merging (Yadav et al., 2023) addresses the problem of **interference** between conflicting updates:
1.  **Reset**: Only keep the most significant changes (top-k%).
2.  **Resolve Sign Conflicts**: For each parameter, check if most models want to increase or decrease it.
3.  **Merge**: Average only the updates that agree with the dominant sign.

### 3. DARE (Drop and Rescale)
DARE (Yu et al., 2023) takes an extreme approach: it randomly drops 90% or even 99% of the fine-tuned delta-weights and rescales the remaining ones. Surprisingly, this often maintains the model's performance while making it much easier to merge with others.

## Visualization: Capability Fusion

```chart
{
  "type": "bar",
  "xAxis": "capability",
  "data": [
    {"capability": "Coding", "model_A": 85, "model_B": 10, "merged": 82},
    {"capability": "Creative", "model_A": 20, "model_B": 90, "merged": 88},
    {"capability": "Logic", "model_A": 70, "model_B": 70, "merged": 75}
  ],
  "lines": [
    {"dataKey": "merged", "stroke": "#8b5cf6", "name": "Merged Model (DARE/TIES)"}
  ]
}
```
*A successful merge creates a model that retains the peak performance of both specialists while sometimes even improving on shared tasks (Logic) due to the ensembling effect.*

## Popular Tools and Community

- **MergeKit**: The de-facto standard library for merging LLMs.
- **Frankenmerging**: A slang term for merging models with different architectures or very aggressive layer-stacking.

## Related Topics

[[fine-tuning]] — the source of the models to be merged  
[[mixture-of-experts]] — a more complex way to combine models  
[[training-dynamics]] — explaining why weight-space interpolation works
---

---
title: "LoRA and PEFT"
category: "LLM Infrastructure"
order: 22
lang: "en"
slug: "lora-peft"
---

# LoRA and Parameter-Efficient Fine-Tuning (PEFT)

**LoRA** (Low-Rank Adaptation) is the most popular technique for **Parameter-Efficient Fine-Tuning (PEFT)**. It allows adapting a giant model (e.g., Llama 70B) to a specific task by training only a tiny fraction (often <1%) of its parameters, while keeping the original weights frozen.

## The Mathematical Intuition

When we fine-tune a model, we update its weight matrices $W$. The update can be written as $W_{new} = W_{base} + \Delta W$. 
The key insight of LoRA (Hu et al., 2021) is that the update matrix $\Delta W$ has a **low intrinsic rank**. 

Instead of training all $d \times d$ elements of $\Delta W$, we decompose it into two low-rank matrices $A$ and $B$:
$$\Delta W = B \cdot A$$
where $B \in \mathbb{R}^{d \times r}$ and $A \in \mathbb{R}^{r \times d}$ with **rank $r \ll d$**.

## Advantages of LoRA

1.  **VRAM Savings**: We only need to store gradients and optimizer states for the tiny $A$ and $B$ matrices.
2.  **Zero Inference Latency**: At deployment, the learned matrices can be merged back into the base weights: $W_{merged} = W_{base} + BA$. The model remains a standard Transformer.
3.  **Portability**: A "LoRA adapter" for a 7B model is typically only 10MB-100MB, compared to 14GB for a full checkpoint.
4.  **Multi-tenancy**: You can keep one copy of the base model in memory and swap tiny adapters for different users or tasks instantly.

## Other PEFT Techniques

- **Prefix Tuning**: Adding learnable "virtual tokens" to the beginning of the sequence.
- **Prompt Tuning**: Similar to prefix tuning but only at the input layer.
- **IA3**: Scaling internal activations by learnable vectors.
- **QLoRA**: Combining LoRA with 4-bit quantization (NF4) to fine-tune 70B models on a single consumer GPU (24GB VRAM).

## Visualization: Rank vs. Parameters

```chart
{
  "type": "line",
  "xAxis": "rank",
  "data": [
    {"rank": 1, "params_pct": 0.01, "accuracy": 85},
    {"rank": 4, "params_pct": 0.05, "accuracy": 92},
    {"rank": 8, "params_pct": 0.10, "accuracy": 94},
    {"rank": 16, "params_pct": 0.21, "accuracy": 95},
    {"rank": 32, "params_pct": 0.42, "accuracy": 95.5}
  ],
  "lines": [
    {"dataKey": "accuracy", "stroke": "#3b82f6", "name": "Performance (%)"},
    {"dataKey": "params_pct", "stroke": "#ef4444", "name": "Trainable Params (%)"}
  ]
}
```
*Performance often saturates at very low ranks (8 or 16). Increasing the rank beyond that adds millions of parameters but yields diminishing returns in accuracy.*

## Related Topics

[[fine-tuning]] — the general process LoRA optimizes  
[[quantization]] — QLoRA merges these two concepts  
[[tensor-decompositions]] — the mathematical theory of low-rank matrices
---

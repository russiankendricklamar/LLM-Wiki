---
title: "RoPE Scaling & Long Context"
category: "Language Models"
order: 14
lang: "en"
slug: "rope-scaling"
---

# RoPE Scaling and Long Context

## What Is It

**RoPE Scaling** refers to the techniques used to extend the context window of a [[transformer-architecture|Transformer]] model beyond its training length without retraining from scratch. While [[positional-encodings|RoPE]] (Rotary Positional Embeddings) has some natural extrapolation ability, it fails when the context is increased by orders of magnitude (e.g., from 4k to 128k).

The challenge is to "stretch" or "interpolate" the positional information so the model can still attend to tokens that are much further apart than anything it saw during training.

## Techniques

### 1. Linear Interpolation
The simplest method: just scale the position indices by a factor $k = L_{new} / L_{old}$.
$$pos' = pos / k$$
This effectively "squeezes" the new context into the old range. However, it causes the model to lose resolution for nearby tokens, leading to a drop in performance.

### 2. NTK-aware Scaling
Based on Neural Tangent Kernel theory, this method rescales the **base frequency** $\theta$ of the RoPE rotations instead of the position indices.
$$\theta_{base}' = \theta_{base} \cdot k^{\frac{d}{d-2}}$$
This preserves high-frequency information (for local structure) while stretching low-frequency information (for global structure).

### 3. YaRN (Yet another RoPE extensioN)
YaRN improves upon NTK-aware scaling by applying different scaling factors to different dimensions of the embedding. It "interpolates" the dimensions that can't extrapolate and "extrapolates" those that can, while also applying a "temperature" correction to the [[attention-mechanisms|attention]] scores to keep them stable.

## Visualization: Perplexity vs. Context Length

```chart
{
  "type": "line",
  "xAxis": "length",
  "data": [
    {"length": 4096, "linear": 5.2, "ntk": 5.2, "yarn": 5.2},
    {"length": 8192, "linear": 6.8, "ntk": 5.4, "yarn": 5.3},
    {"length": 16384, "linear": 12.5, "ntk": 5.8, "yarn": 5.5},
    {"length": 32768, "linear": 25.0, "ntk": 6.5, "yarn": 5.7},
    {"length": 65536, "linear": 40.0, "ntk": 8.2, "yarn": 6.0}
  ],
  "lines": [
    {"dataKey": "linear", "stroke": "#ef4444", "name": "Linear Interpolation"},
    {"dataKey": "ntk", "stroke": "#3b82f6", "name": "NTK-aware"},
    {"dataKey": "yarn", "stroke": "#10b981", "name": "YaRN"}
  ]
}
```
*YaRN and NTK-aware methods maintain much lower perplexity as the context window grows.*

## Practical Constraints: Memory and Compute

Even if the positional encodings work, long context is limited by:
- **KV-Cache**: Memory usage grows $O(L)$. Solutions: [[inference-serving|PagedAttention]], [[mla|MLA]].
- **Quadratic [[attention-mechanisms|Attention]]**: Computation grows $O(L^2)$. Solutions: [[flash-attention|FlashAttention]], **Ring Attention**.

## Related Topics

[[positional-encodings]] — the foundation (RoPE)  
[[flash-attention]] — enabling the compute for long context  
[[inference-serving]] — managing the memory (KV-cache)

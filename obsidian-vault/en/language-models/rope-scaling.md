---
title: "RoPE Scaling & YaRN"
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
The simplest method: just scale the position indices by a factor $s = L_{new} / L_{old}$.
$$pos' = pos / s$$
This effectively "squeezes" the new context into the old range. However, it causes the model to lose resolution for nearby tokens, leading to a significant drop in performance (perplexity spikes).

### 2. NTK-aware Scaling
Based on Neural Tangent Kernel theory, this method rescales the **base frequency** $\theta$ of the RoPE rotations instead of the position indices.
$$\theta_{base}' = \theta_{base} \cdot s^{\frac{d}{d-2}}$$
where $d$ is the hidden dimension. This preserves high-frequency information (for local structure) while stretching low-frequency information (for global structure). It works because high-frequency dimensions rotate many times within the original context, while low-frequency ones haven't even finished a single rotation.

### 3. YaRN (Yet another RoPE extensioN)
YaRN is the current state-of-the-art for context extension (up to 128k+). It addresses two issues in NTK-aware scaling:
1.  **Dimension Sensitivity**: It applies different scaling to different frequency bands. It uses a ramp function to interpolate between dimensions that need interpolation and those that can extrapolate.
2.  **[[attention-mechanisms|Attention]] Logit Decay**: Scaling RoPE changes the distribution of the dot products in [[attention-mechanisms|attention]]. YaRN applies a temperature $T$ to the attention logits to restore the original distribution:
    $$\text{Attn}(Q, K) = \text{softmax}\left(\frac{QK^T}{T \sqrt{d_k}}\right)$$

## Comparison of Methods

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

## Practical Constraints

Even with RoPE scaling, long context is limited by:
- **Memory**: The KV-cache grows linearly with sequence length. Techniques like [[mla|Multi-Head Latent Attention (MLA)]] and **PagedAttention** are required.
- **Compute**: Standard attention is $O(L^2)$. **FlashAttention-2** and **Ring Attention** (distributing the sequence across multiple GPUs) are necessary for 1M+ contexts.
- **Retrieval Accuracy**: The "Lost in the Middle" phenomenon shows that models often struggle to retrieve information from the middle of a very long prompt, regardless of whether the positional encoding works.

## Related Topics

[[positional-encodings]] — the foundation (RoPE)  
[[flash-attention]] — enabling the compute for long context  
[[mla]] — DeepSeek's efficient attention variant  
[[inference-serving]] — managing the memory (KV-cache)

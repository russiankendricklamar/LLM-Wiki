---
title: "Positional Encodings"
category: "Language Models"
order: 7
lang: "en"
slug: "positional-encodings"
growth: "seedling"
---

# Positional Encodings

Attention is permutation-equivariant by design: without positional information, the transformer cannot distinguish "the cat sat on the mat" from any permutation of those tokens. **Positional encodings** inject sequence order into the model. The choice of encoding profoundly affects context length extrapolation, training efficiency, and downstream performance.

## Absolute Positional Encodings

**Sinusoidal (Vaswani et al. 2017).** The original transformer uses fixed sinusoidal encodings added to token embeddings before the first layer:

$$
\text{PE}(pos, 2i) = \sin\!\left(\frac{pos}{10000^{2i/d}}\right), \quad \text{PE}(pos, 2i+1) = \cos\!\left(\frac{pos}{10000^{2i/d}}\right).
$$

Properties: no learned parameters; relative positions encodable as linear functions; but attention patterns don't generalise well beyond training length.

**Learned absolute.** BERT, GPT-2: position embeddings $P \in \mathbb{R}^{T_\text{max} \times d}$ learned end-to-end. Simple and effective but hard-limited to $T_\text{max}$.

## Relative Positional Encodings

Relative encodings make attention scores depend on the *relative offset* $i-j$ rather than absolute positions $i$ and $j$.

**T5 Relative Bias.** Add a learned scalar bias $b_{i-j}$ to each attention score before softmax:

$$
e_{ij} = \frac{(x_i W_Q)(x_j W_K)^\top}{\sqrt{d_k}} + b_{i-j}.
$$

The bias is shared across heads and clipped beyond a maximum offset. Enables length generalisation up to ~2× training length.

**ALiBi (Press et al. 2022).** Instead of a learned bias, use a fixed linear penalty proportional to distance:

$$
e_{ij} = (x_i W_Q)(x_j W_K)^\top - m \cdot (i - j), \quad m \text{ head-specific slope}.
$$

The linear penalty makes the model "prefer" recent tokens, naturally enabling length extrapolation.

## RoPE: Rotary Position Embedding

**RoPE** (Su et al. 2021) is the dominant approach in modern LLMs (LLaMA, Mistral, Qwen, Gemma, GPT-4). Instead of adding positional encodings, RoPE *rotates* query and key vectors before computing attention:

$$
(R_m q)^\top (R_n k) = q^\top R_m^\top R_n k = q^\top R_{n-m} k,
$$

where $R_\theta$ is a block-diagonal rotation matrix with angle $\theta$. The dot product depends only on the relative position $n-m$ — a clean inductive bias.

Concretely, for a 2D subspace with angle $\theta_i = 10000^{-2i/d}$:

$$
R_m = \begin{pmatrix} \cos m\theta_i & -\sin m\theta_i \\ \sin m\theta_i & \cos m\theta_i \end{pmatrix}.
$$

Different frequency bands $\theta_i$ encode positions at different granularities — analogous to sinusoidal PE but applied multiplicatively in attention.

## Extrapolation Beyond Training Length

```chart
{
  "type": "line",
  "xAxis": "context_length",
  "data": [
    {"context_length": 512, "absolute": 5.2, "alibi": 5.2, "rope": 5.2},
    {"context_length": 1024, "absolute": 5.8, "alibi": 5.3, "rope": 5.4},
    {"context_length": 2048, "absolute": 7.5, "alibi": 5.5, "rope": 5.6},
    {"context_length": 4096, "absolute": 12.0, "alibi": 5.8, "rope": 5.9},
    {"context_length": 8192, "absolute": 25.0, "alibi": 6.2, "rope": 6.8}
  ],
  "lines": [
    {"dataKey": "absolute", "stroke": "#f59e0b", "name": "Absolute (learned)"},
    {"dataKey": "alibi", "stroke": "#3b82f6", "name": "ALiBi"},
    {"dataKey": "rope", "stroke": "#10b981", "name": "RoPE"}
  ]
}
```

Perplexity (lower is better) when model is trained on 2048 tokens and evaluated at longer lengths. Absolute encodings degrade sharply; ALiBi and RoPE extrapolate gracefully.

## Context Extension: YaRN

**YaRN** (Peng et al. 2023) extends RoPE-trained models to longer contexts by rescaling the rotation frequencies. The key insight: high-frequency RoPE dimensions can't extrapolate but low-frequency ones can. YaRN applies different scaling to different frequency bands and includes an attention temperature correction.

With YaRN, LLaMA-2 (trained on 4096 tokens) extends to 128K tokens with minimal fine-tuning.

## Comparison Summary

| Method | Type | Extrapolation | Parameters | Used in |
|--------|------|--------------|------------|---------|
| Sinusoidal | Absolute | Poor | 0 | Original Transformer |
| Learned | Absolute | None | $T_\text{max} \times d$ | BERT, GPT-2 |
| T5 Bias | Relative | Moderate | Small | T5, mT5 |
| ALiBi | Relative | Good | 0 | BLOOM, MPT |
| RoPE | Relative | Good | 0 | LLaMA, Mistral, GPT-4 |

## Related Topics

- [[large-language-models]] — overview of LLM architectures
- [[transformer-architecture]] — full attention mechanism
- [[attention-mechanisms]] — self-attention derivation
- [[scaling-laws]] — how context length interacts with compute scaling

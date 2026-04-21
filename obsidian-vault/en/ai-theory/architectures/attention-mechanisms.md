---
title: "Attention Mechanisms"
category: "AI Theory"
order: 1
lang: "en"
slug: "attention-mechanisms"
---

# Attention Mechanisms: The Engine of Modern AI

The Attention Mechanism, popularized by the paper **"Attention Is All You Need"** (2017), allows neural networks to focus on specific parts of an input sequence, regardless of their distance. This solved the "long-memory" problem that plagued RNNs and LSTMs.

## 1. Scaled Dot-Product Attention

The core formula for attention is:
$$\text{Attention}(Q, K, V) = \text{Softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V$$
Where:
- **Queries ($Q$)**: What the current token is looking for.
- **Keys ($K$)**: What each past token contains.
- **Values ($V$)**: The information to be extracted.
- **$\sqrt{d_k}$**: Scaling factor to prevent gradient vanishing in the Softmax.

## 2. Multi-Head Attention (MHA)

Instead of one giant attention operation, MHA runs multiple "heads" in parallel.
- Each head can learn a different relationship (e.g., one head for grammar, another for factual links).
- *Analogy*: Instead of one flashlight, you have 12 flashlights pointing at different parts of the dark room simultaneously.

## 3. Efficient Variants (LLM Optimization)

As models scale to 100k+ tokens, standard MHA becomes too slow because the KV cache grows too large for VRAM.

### A. Multi-Query Attention (MQA)
All Query heads share a **single pair of Key and Value heads**. 
- *Benefit*: Reduces KV cache size by $12\times - 96\times$.
- *Trade-off*: Small loss in model capacity/intelligence.

### B. Grouped-Query Attention (GQA)
A middle ground used by **Llama 3**. Query heads are divided into groups, and each group shares one KV head.
- This provides the speed of MQA with the intelligence of MHA.

## 4. Hardware Optimization: FlashAttention

Standard attention is **Memory-Bound**. Most time is spent moving the $QK^\top$ matrix (which is $N^2$) between GPU HBM and SRAM.
**FlashAttention** (Dao et al., 2022) uses **Tiling** and **Recomputation**:
1. It breaks the large matrix into small blocks that fit in fast SRAM.
2. It computes attention block-by-block without ever storing the giant $N^2$ matrix.
3. This allows training on contexts of 1M+ tokens.

## Visualization: Attention Matrix

```chart
{
  "type": "scatter",
  "xAxis": "query_pos",
  "data": [
    {"query_pos": 1, "key_pos": 1, "weight": 0.8},
    {"query_pos": 2, "key_pos": 1, "weight": 0.5},
    {"query_pos": 2, "key_pos": 2, "weight": 0.9},
    {"query_pos": 10, "key_pos": 1, "weight": 0.7},
    {"query_pos": 10, "key_pos": 9, "weight": 0.4}
  ],
  "lines": [
    {"dataKey": "weight", "stroke": "#3b82f6", "name": "Attention Score"}
  ]
}
```
*Notice how Query 10 can "attend" to Token 1 directly, even if they are 9 steps apart. This instant connectivity is what makes Transformers superior to RNNs.*

## Related Topics

[[transformer-architecture]] — the house for attention  
[[flash-attention]] — hardware-level deep dive  
[[paged-attention]] — managing the KV cache in VRAM
---

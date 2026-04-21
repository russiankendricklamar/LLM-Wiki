---
title: "Multi-Head Latent Attention (MLA)"
category: "Language Models"
order: 15
lang: "en"
slug: "mla"
---

# Multi-Head Latent [[attention-mechanisms|Attention]] (MLA)

## What Is It

**Multi-Head Latent Attention (MLA)** is a novel attention mechanism introduced by **DeepSeek (V2/V3)** designed to solve the "KV-cache bottleneck." 

In standard Multi-Head Attention (MHA), the memory required to store the KV-cache grows linearly with the number of heads and layers, becoming a massive cost during inference. Earlier solutions like **Grouped-Query Attention (GQA)** reduced the cache size but sacrificed model capacity. MLA achieves **better compression than GQA** while maintaining (or exceeding) the performance of full MHA.

## The Architecture: Low-Rank Compression

The core idea of MLA is to compress the Keys (K) and Values (V) into a small, shared **latent vector** $c_{KV}$ before expanding them back into multiple heads.

### 1. Compression
Instead of storing $N_{heads} \times d_{head}$ vectors for K and V, we project the hidden state $h$ into a low-rank latent space:
$$c_{KV} = h W_{DKV}$$
where $d_{latent} \ll N_{heads} \times d_{head}$. Only $c_{KV}$ needs to be stored in the KV-cache.

### 2. Expansion
During attention, we expand $c_{KV}$ back to the required dimensions for each head:
$$k = c_{KV} W_{UK}, \quad v = c_{KV} W_{UV}$$
Because $W_{UK}$ and $W_{UV}$ can be absorbed into the Query projection matrix $W_Q$, the expansion doesn't even need to happen explicitly in memory!

## Decoupled Rotary Positional Embeddings

A major challenge with low-rank compression is that **RoPE** (Rotary Positional Embeddings) is not compatible with matrix absorption. To solve this, MLA "decouples" the attention:
- **Content Part**: Uses the compressed latent vectors (no RoPE).
- **Position Part**: Uses a small, separate set of vectors specifically for RoPE.

$$Score = \text{Content\_Score} + \text{Position\_Score}$$

## Comparison: KV-Cache Per Token

| Method | Cache Elements per Layer | Relative Cache Size |
|---|---|---|
| **MHA** (Multi-Head) | $2 \cdot n_{heads} \cdot d_{head}$ | 100% |
| **GQA** (Grouped-Query) | $2 \cdot n_{groups} \cdot d_{head}$ | 12.5% (for group=8) |
| **MLA** (DeepSeek) | $d_{latent} + d_{rope}$ | **~5% - 10%** |

## Visualization: Memory Efficiency

```chart
{
  "type": "bar",
  "xAxis": "method",
  "data": [
    {"method": "MHA", "memory": 100},
    {"method": "GQA", "memory": 12.5},
    {"method": "MLA", "memory": 6.2}
  ],
  "lines": [
    {"dataKey": "memory", "stroke": "#3b82f6", "name": "KV-Cache Memory Usage (%)"}
  ]
}
```

## Why It Matters

MLA allows DeepSeek models (like DeepSeek-V3) to use **large-scale MoE** (Mixture of Experts) with massive parameter counts while still being incredibly cheap to serve. It effectively "decouples" the model's knowledge capacity from its inference cost.

## Related Topics

[[attention-mechanisms]] — the foundation  
[[inference-serving]] — why KV-cache management is critical  
[[mixture-of-experts]] — how MLA enables giant sparse models

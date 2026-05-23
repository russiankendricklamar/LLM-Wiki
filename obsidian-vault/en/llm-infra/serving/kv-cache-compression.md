---
title: "KV Cache Compression"
category: "LLM Infrastructure"
order: 18
lang: "en"
slug: "kv-cache-compression"
---

# KV Cache Compression

KV Cache Compression refers to a set of techniques designed to reduce the memory footprint of the Key-Value (KV) cache in [[llm|Large Language Models]]. As context windows grow to hundreds of thousands or even millions of tokens, the KV cache becomes the primary bottleneck for both memory capacity and inference throughput.

## The Problem: The KV Cache Explosion

In the [[transformer-architecture|Transformer]] architecture, the KV cache stores the $K$ and $V$ vectors for all previous tokens to avoid recomputing them during autoregressive generation. The size of this cache scales linearly with:
- **Sequence Length** ($N$)
- **Batch Size** ($B$)
- **Model Hidden Dimension** ($D$)
- **Number of Layers** ($L$)

For a Llama-3 70B model with a 128k context, the KV cache can exceed **100 GB**, making it impossible to fit long-context sessions on a single [[inference-serving|GPU]].

## Compression Techniques

### 1. Structural Methods: GQA and MLA
Before applying post-training compression, architectural changes can reduce the cache size from the start:
- **Grouped-Query [[attention-mechanisms|Attention]] (GQA)**: Instead of each query head having its own K and V heads, multiple query heads share a single KV head. This reduces the KV cache size by a factor of 8x or more (e.g., in Llama-3).
- **Multi-Head Latent Attention (MLA)**: Introduced by **DeepSeek-V2**, this technique compresses KV vectors into a low-rank latent vector, drastically reducing the storage requirements while maintaining high performance.

### 2. KV Cache [[quantization]]
Just as model weights are quantized, KV cache activations can be stored in lower precision:
- **INT8/FP8**: Standard in many serving frameworks (vLLM, TensorRT-[[llm]]), providing a 2x reduction with minimal quality loss.
- **INT4**: More aggressive quantization that requires careful scaling factors (per-channel or per-token) to maintain accuracy.

### 3. Eviction Policies (Sparsification)
Not all tokens are equally important for predicting the next token. Eviction policies identify and remove "useless" tokens from the cache:
- **H2O (Heavy Hitter Oracle)**: Keeps tokens that frequently receive high attention scores ("heavy hitters") and the most recent tokens, discarding the rest.
- **StreamingLLM**: Observes that "attention sinks" (the first few tokens of a sequence) and the most recent tokens are sufficient for stable generation in very long streams.
- **Scissorhands**: Uses the persistence of attention patterns to prune tokens that are unlikely to be attended to in the future.

### 4. Token Merging and Pooling
Instead of deleting tokens, some methods merge similar KV vectors:
- **D2O**: Dynamically merges redundant tokens in the cache based on their similarity in the latent space.

## Comparison of Methods

| Method | Complexity | Quality Loss | Memory Reduction |
|---|---|---|---|
| **GQA** | Architectural | Minimal | 4x–8x |
| **Quantization (INT8)** | Low | Near-zero | 2x |
| **H2O Eviction** | Medium | Low to Moderate | Up to 10x |
| **MLA** | High (Training required) | Minimal | 4x–6x |

## Related Topics

[[llm-infra/serving/paged-attention]] — managing the KV cache in memory  
[[attention-mechanisms]] — the math behind Keys and Values  
[[llm-infra/serving/context-length]] — why we need long context  
[[flash-attention]] — optimizing the computation of attention

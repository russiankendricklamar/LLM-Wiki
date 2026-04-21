---
title: "Attention Mechanisms"
category: "AI Theory"
order: 6
lang: "en"
slug: "/ai-theory/attention-mechanisms"
growth: "seedling"
---

# Attention Mechanisms

**Attention mechanisms** are the fundamental computational primitive in modern deep learning, especially [[transformer-architecture|Transformers]]. They allow neural networks to dynamically select and weight parts of an input based on learned relevance, enabling both parallelism and the ability to capture long-range dependencies that plagued RNNs. The key insight — that any token can directly "attend to" any other in a single step — has driven the rise of LLMs and large-scale generative models.

## Scaled Dot-Product Attention

The core operation is **scaled dot-product attention**. Given:
- Query vectors $Q \in \mathbb{R}^{n \times d_k}$
- Key vectors $K \in \mathbb{R}^{n \times d_k}$  
- Value vectors $V \in \mathbb{R}^{n \times d_v}$

The output is:

$$
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
$$

The algorithm proceeds in three steps:

1. **Scoring**: Compute dot products $QK^\top$, producing an $n \times n$ attention matrix. Each entry $(i,j)$ measures how much token $i$'s query aligns with token $j$'s key.
2. **Scaling**: Divide by $\sqrt{d_k}$ to stabilize gradients. Large dot products cause softmax to saturate (all probability on one token); scaling prevents this. The variance of a dot product of unit random vectors is $d_k$, so dividing by $\sqrt{d_k}$ ensures the dot products stay in a well-behaved range.
3. **Softmax and aggregation**: Apply softmax to get attention weights (row-stochastic), then aggregate values: $\sum_j \text{softmax}(QK^\top/\sqrt{d_k})_j V_j$.

**Interpretation**: Attention is a content-based soft lookup. The query asks "what information do I need?", keys answer "how relevant am I?", and values carry the actual information. This is more flexible than fixed recurrent hidden states.

## Multi-Head Attention

A single attention head is constrained: it learns one fixed relevance pattern. **Multi-head attention** runs $h$ parallel attention mechanisms with different learned projections:

$$
\text{MultiHead}(Q, K, V) = [\text{head}_1; \ldots; \text{head}_h] W^O
$$

where $\text{head}_i = \text{Attention}(QW_i^Q, KW_i^K, VW_i^V)$. The projections $W_i^Q, W_i^K, W_i^V$ map input to subspaces of dimension $d_k = d/h$ (or keep larger subspaces depending on config). The output projection $W^O$ fuses all heads.

**Benefits**: Different heads specialize in different relations:
- Some detect syntactic dependencies (subject-verb, article-noun).
- Others track semantic similarity or coreference.
- Long-range dependencies and local context can coexist.

With 8–16 heads per layer, the model learns complementary attention patterns that together provide richer contextual understanding than a single head alone.

## Self-Attention vs. Cross-Attention

**Self-attention** attends within the same sequence: $Q, K, V$ all come from the same source. Used in encoder layers and autoregressive decoders.

**Cross-attention** attends across sequences: $Q$ comes from the output of the decoder, while $K$ and $V$ come from the encoder output. Used in encoder-decoder models (machine translation, summarization) and in diffusion models, where cross-attention allows a text prompt to guide image generation.

In practice, [[transformer-architecture|Transformers]] stack both: each decoder layer has self-attention (for intra-token reasoning), cross-attention (to the encoder), and feed-forward networks. Modern decoder-only [[llm|LLMs]] use only self-attention.

## Positional Encoding

Self-attention is **permutation-invariant**: without positional information, the [[transformer-architecture|Transformer]] treats input as a set, not a sequence. Four main strategies add position:

### Sinusoidal Positional Encoding
The original 2017 approach uses:

$$
PE(pos, 2i) = \sin(pos / 10000^{2i/d}), \quad PE(pos, 2i+1) = \cos(pos / 10000^{2i/d})
$$

where $pos$ is position and $i$ indexes dimensions. The frequencies are spaced logarithmically. **Advantage**: interpolates naturally to sequences longer than training length (though with slight quality loss).

### Learned Positional Embeddings
BERT, GPT-2, and many modern models use learnable position embeddings—just vectors in the embedding table indexed by position. **Advantage**: exact fit to training. **Disadvantage**: extrapolation to longer sequences is weak.

### Rotary Position Embeddings (RoPE)
LLaMA and more recent models use **RoPE** (Su et al., 2021). The key idea: encode position as a rotation in the complex plane. For each dimension pair $(2i, 2i+1)$, multiply the query and key vectors by rotation matrices parameterized by position. This gives excellent interpolation and extrapolation properties without the complexity of sinusoidal components. RoPE is now standard in modern LLMs.

### Attention with Linear Biases (ALiBi)
Press et al. (2022) proposed adding a simple bias to the attention logits that depends only on relative distance, not position:

$$
\text{Attention}(Q, K, V) = \text{softmax}(QK^\top / \sqrt{d_k} + \text{bias}_{rel}) V
$$

The bias decreases as relative distance increases. This is extremely simple and extrapolates perfectly to longer sequences.

## Causal Masking for Autoregressive Generation

In a language model that generates one token at a time, the model must not "cheat" by attending to future tokens during training. **Causal masking** sets attention weights to zero for all future positions, enforcing autoregressive behavior:

$$
\text{Attention}(Q, K, V) = \text{softmax}(QK^\top / \sqrt{d_k} + M) V
$$

where $M$ is a lower-triangular mask: $M_{ij} = 0$ if $i \geq j$ and $M_{ij} = -\infty$ if $i < j$. After softmax, future positions have zero weight.

During inference, [[inference-serving|tokens are generated sequentially]]; causal masking is built into the computation. This enables the "autoregressive loop": feed in the previous tokens, sample the next token, cache it, repeat.

## Complexity and Efficient Variants

The fundamental bottleneck of attention is its $O(n^2 d)$ complexity in time and memory, where $n$ is sequence length and $d$ is dimension. For modern long-context models (n = 100K–1M tokens), this is prohibitive.

### Standard (Quadratic) Attention
The na\u00efve implementation materializes the full $n \times n$ attention matrix, requiring $O(n^2)$ memory. For $n = 100K$, that is ~40 GB of memory.

### Flash Attention
Dao et al. (2022) observed that standard implementations are IO-bound, not compute-bound. By carefully blocking the computation to maximize cache locality on [[inference-serving|GPU]], **FlashAttention** reduces memory movement while performing the same FLOPs. Result: 2–4$\times$ wall-clock speedup with zero accuracy loss. **FlashAttention-2** and **FlashAttention-3** improve further.

### Sparse Attention
Replace the dense attention matrix with a sparsity pattern:
- **Local attention** (Longformer, BigBird): each position attends to a fixed window of neighbors.
- **Global tokens**: a few tokens attend to all positions, and all positions attend to global tokens.
- **Strided attention**: attend to positions at intervals.

Reduces complexity from $O(n^2)$ to $O(n \cdot w)$ where $w$ is window size, or $O(n \cdot \sqrt{n})$ with careful construction. Trade-off: potentially less expressive, but critical for very long contexts.

### Linear Attention
Reformulate attention using kernels. Let $\phi$ be a feature map:

$$
\text{LinearAttn}(Q, K, V) = \phi(Q) \left( \phi(K)^\top V \right) \bigg/ (\phi(Q) \mathbf{1})
$$

where $\phi$ could be exponential, RBF, or even simple functions like $\phi(x) = \operatorname{elu}(x) + 1$. This is the dual form: compute $\phi(K)^\top V$ in $O(n d^2)$, then apply to $\phi(Q)$ in $O(n)$. Achieves $O(n d)$ or $O(n)$ complexity.

### State Space Models
[[state-space-models|Mamba]] and other SSMs sidestep attention entirely, using a recurrent state with $O(n)$ cost and learned gating. The trade-off is one-dimensional vs. two-dimensional (all-to-all) interactions.

## Induction Heads and In-Context Learning

Recent mechanistic interpretability work (Olah et al., Todd et al.) has revealed specific attention head types that are crucial to [[llm]] behavior:

- **Induction heads**: pattern-matching heads that look for repeated tokens. Once a sequence like (A, B, ..., A) appears, an induction head at position of the second A attends back to the first instance of A, propagating the token after the first A (B) to the current position. This is fundamental to [[in-context-learning|in-context learning]].
- **Copying heads**: transfer information directly from context.
- **Deletion heads**: suppress irrelevant information.

These emerge naturally during training without explicit supervision, suggesting attention is a learnable "search engine" discovering which computations are useful.

## Key-Value Cache in Inference

During autoregressive generation, naively recomputing attention on all previous tokens plus the new token wastes computation. Instead, we cache key and value vectors:

```
Initial: KV_cache = empty
For each new token:
  Compute Q_new from current token
  new_K = Linear(token_embedding)
  new_V = Linear(token_embedding)
  Append (new_K, new_V) to KV_cache
  Compute Attention(Q_new, KV_cache.K, KV_cache.V)
  Output logits for next token
```

This reduces per-token cost from $O(n^2 d)$ to $O(n d)$ (only computing attention between new query and all cached keys/values). The memory footprint is still $O(n d)$ per token, which is why long-context inference is challenging. Techniques like multi-query attention (fewer KV heads) and prompt compression reduce KV cache size.

## Attention in Modern LLMs

Modern large language models stack many attention layers (60+ for GPT-4 scale), each performing a different computation:
- Early layers: surface syntax, byte-level patterns.
- Middle layers: semantic relationships, entities, abstract concepts.
- Late layers: task-specific reasoning and output formatting.

Attention has proven flexible enough to subsume convolution, gating, and even some forms of implicit reasoning. [[neural-scaling-laws|Scaling laws]] show that throwing more parameters and data at a Transformer-based LLM leads to predictable improvements across tasks, making attention-based architectures the substrate of the modern AI.

## Related Topics

- [[transformer-architecture]] — full architecture stack built on attention
- [[flash-attention]] — IO-optimal GPU implementation
- [[mla]] — Multi-head Latent Attention (MLA)
- [[attention-kernel]] — kernel-based interpretation of attention
- [[in-context-learning]] — how induction heads enable few-shot learning
- [[state-space-models]] — alternatives to attention with linear complexity
- [[neural-scaling-laws]] — empirical laws governing Transformer scaling
- [[inference-serving]] — deploying large models with KV caching and batching

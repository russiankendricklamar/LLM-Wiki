---
title: "Context Length Extension"
category: "LLM Infrastructure"
order: 12
lang: "en"
slug: "context-length"
growth: "seedling"
---

# Context Length Extension

The ability to process longer sequences is a fundamental scaling axis for [[llm|LLMs]], directly enabling complex reasoning, code understanding, and document retrieval. Yet vanilla [[transformer-architecture|transformer]] architectures, which rely on fixed absolute positional encodings learned during training, exhibit sharp performance degradation when sequence length exceeds training length. Context extension research addresses this gap through rotational embeddings, relative position biasing, and architectural modifications that preserve [[attention-mechanisms|attention]] accuracy while reducing memory and compute cost.

## The Sinusoidal Baseline and Its Limits

The original [[transformer-architecture|Transformer]] (Vaswani et al. 2017) uses fixed sinusoidal positional encodings:

$$PE_{pos,2i} = \sin\left(\frac{pos}{10000^{2i/d}}\right), \quad PE_{pos,2i+1} = \cos\left(\frac{pos}{10000^{2i/d}}\right)$$

These encodings inject position information directly into embeddings: $\mathbf{x}_t' = \mathbf{x}_t + PE_t$. The approach is elegant—position is encoded at multiple frequency scales—but it has a critical flaw: the encoding assumes positions fall within a training-defined range. Attempting to evaluate the model at longer sequences forces the attention mechanism to operate in an unseen regime where distance metrics break down. Models trained at 2K tokens typically collapse in quality beyond 4K tokens, regardless of architectural capacity. The sinusoidal formula does extrapolate mathematically, but learned attention patterns don't generalize to extrapolated positions.

## RoPE: Rotary Position Embedding

RoPE (Su et al. 2021), adopted in [[llm|LLaMA]], [[llm|Gemma]], and [[llm|Mistral]], solves extrapolation through a subtle change: encode position via rotation rather than addition. Apply a rotation matrix $R_m(\theta)$ to the query and key vectors directly:

$$\mathbf{q}_m' = R_m(\theta) \mathbf{q}_m, \quad \mathbf{k}_n' = R_n(\theta) \mathbf{k}_n$$

where the rotation depends on position index and frequency dimension:

$$R_m(\theta) = \begin{pmatrix} \cos m\theta_i & -\sin m\theta_i \\ \sin m\theta_i & \cos m\theta_i \end{pmatrix}$$

and $\theta_i = 10000^{-2i/d}$ (mirroring sinusoidal frequencies). The critical insight: the attention dot product becomes

$$\mathbf{q}_m'^T \mathbf{k}_n' = f(\mathbf{q}, \mathbf{k}, m - n)$$

The score depends **only on relative position** $m - n$, not absolute positions. This property is intrinsic to rotation: rotational distance is invariant to absolute offset. The model never needs to learn what positions 50K look like in absolute terms—only what $\Delta = 50$ relative positions mean.

### RoPE Scaling

To extend RoPE beyond training length $L$ to length $L'$, scale the position indices:

$$\theta_i^{(\text{scaled})} = \theta_i \cdot \left(\frac{L'}{L}\right)^{2i/d}$$

Alternatively, use "yarn" interpolation: divide the position index by the scaling factor $s = L' / L$:

$$m_{\text{interp}} = \frac{m}{s}, \quad n_{\text{interp}} = \frac{n}{s}$$

This compresses the relative position space so that training-length distances remain stable. Empirically, scaling enables extrapolation to $2–4\times$ training length with minimal perplexity increase and modest [[fine-tuning]].

## ALiBi: Attention with Linear Biases

ALiBi (Press et al. 2022) takes a different approach: eliminate positional embeddings entirely and inject position through attention bias. The attention score becomes:

$$\text{Attn}(i,j) = \text{softmax}\left(\frac{\mathbf{Q}_i \mathbf{K}_j^T}{\sqrt{d}} - m \cdot |i - j|\right)$$

where $m$ is a learnable or fixed **head-specific slope**. Each attention head gets its own slope $m_h$, typically $m_h = 1 / 2^h$ or similar. The linear bias penalizes distant positions smoothly and **requires no retraining to extend context**—only adjust the bias term at inference. Models trained at 1K tokens on ALiBi generalize to $2L$ context essentially for free.

The trade-off: ALiBi assumes global relative position distance matters uniformly. In sequences with strong long-range dependencies (e.g., long documents), ALiBi may underperform RoPE because it doesn't adapt bias to the content. RoPE, via rotation, allows learned patterns to adapt across different relative distances.

## Sliding Window Attention

Exact quadratic attention becomes infeasible beyond ~100K tokens. Sliding window (or local) attention restricts each token to attend only to a window of $W$ preceding tokens:

$$\text{Attn}(i,j) = \begin{cases} \text{softmax}(\mathbf{Q}_i \mathbf{K}_j^T / \sqrt{d}) & j \in [i-W, i] \\ -\infty & \text{otherwise} \end{cases}$$

This reduces complexity to $O(L \cdot W)$. [[llm|Mistral]] uses $W = 4096$; for sequences of 32K tokens, a single pass is $\sim 8\times$ faster than full attention. The cost: tokens lose direct access to context beyond $W$ steps back. Critical information in early paragraphs becomes invisible to later generation. Hybrid schemes combine sliding windows with sparse global tokens (a small set attend to all positions) to preserve long-range connectivity.

## FlashAttention and Memory-Efficient Long Context

[[inference-serving|Inference serving]] long contexts bottlenecks on memory bandwidth, not compute. FlashAttention (Dao et al. 2022) reorganizes the attention computation to respect [[inference-serving|GPU]] memory hierarchy: compute block-wise, materialize softmax incrementally, avoid materializing the full $L \times L$ attention matrix. This cuts memory from $O(L^2)$ to $O(L)$ while keeping computation $O(L^2)$.

For 100K+ token sequences, FlashAttention is essential—without it, even a single forward pass runs out of GPU memory.

## Retrieval-Augmented Context

Rather than extend the attention window directly, use [[rag|retrieval-augmented generation]] to dynamically inject relevant context. A small, fast retrieval system (vector database search, [[vector-databases|vector embeddings]]) fetches relevant chunks, which are inserted into the context window. This trades quadratic cost for retrieval latency: the model window stays small (4K–32K), but effective context grows to document corpus scale. Accurate retrieval is critical; noise or missing context degrades generation quality.

## The "Lost in the Middle" Problem

Even with long context, models struggle. Recent work shows that information in the **middle** of long contexts (positions ~25–75% through the sequence) is harder to retrieve than information at the boundaries. This is partly attention bias (boundary tokens interact more), partly optimization (models learn boundaries are sticky), and partly a fundamental challenge in maintaining global coherence across many tokens. No architectural fix has fully solved this; it remains an active frontier.

## Current Landscape

Production models now reach:
- **Gemini 1.5**: 1M tokens (~200 page documents)
- **Claude 3**: 200K tokens (~150 pages)
- **GPT-4**: 128K tokens (~100 pages)
- **Llama 3**: 8K tokens (base)

Most use RoPE with scaling or ALiBi, combined with [[speculative-decoding|speculative decoding]] or [[inference-serving|batched inference]] for practical latency. Future research explores [[state-space-models|SSM]] layers (which avoid quadratic cost entirely) and hybrid architectures that mix local and global attention.

The frontier is less about theoretical context length and more about maintaining quality, retrieval accuracy, and inference cost in the billion-token regime.

---
title: "Transformer Architecture"
category: "AI Theory"
order: 13
lang: "en"
slug: "transformer-architecture"
---

# Transformer Architecture

The **Transformer** (Vaswani et al. 2017, "Attention is All You Need") is a neural architecture built entirely on the **attention** mechanism, without convolutions or recurrences. In the five years following its publication, it displaced RNNs and LSTMs from most sequence-processing tasks, became the basis of [[llm|large language models]], and spread to vision (ViT), audio, generative models, and time series. The Transformer is now the single most widely used architecture in modern ML.

## Why Not RNNs

Classical recurrent networks process sequences one token at a time while maintaining a hidden state. This limits:

- **Parallelism**: training cannot be effectively vectorised — each step depends on the previous.
- **Long-range dependencies**: gradients vanish or explode on long sequences.
- **Memory**: LSTM and GRU partially solve the gradient problem, but a fixed-size hidden state is a bottleneck.

The Transformer solves all three via self-attention.

## Self-Attention

Given a sequence of $n$ tokens with representations $X \in \mathbb{R}^{n \times d}$, define three linear projections:

$$
Q = XW^Q, \quad K = XW^K, \quad V = XW^V,
$$

called **query, key, value**. The scaled dot-product attention mechanism is:

$$
\text{Attention}(Q, K, V) = \text{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right) V.
$$

Every token simultaneously "looks at" all others through a weighted sum of their values, where weights come from the dot product of a query with keys. The $\sqrt{d_k}$ normalisation prevents the softmax from saturating at large $d_k$.

Stochastic interpretation: attention is a soft content-based lookup. A query token asks a question, key tokens assign relevance, and values carry the information to fetch.

## Multi-Head Attention

A single attention head is limited: it can learn only one kind of relation. **Multi-head attention** runs $h$ parallel attention mechanisms with different projections and concatenates the results:

$$
\text{MultiHead}(Q, K, V) = [\text{head}_1, \ldots, \text{head}_h] W^O,
$$

where $\text{head}_i = \text{Attention}(QW_i^Q, KW_i^K, VW_i^V)$. This lets the network learn several relations at once: syntactic links, coreference, local and long-range dependencies.

## Positional Encoding

Self-attention is **order-invariant** — without a positional signal, the Transformer treats a sequence as a bag of tokens. Positional embeddings encode order:

- **Sinusoidal** (original 2017): $PE(pos, 2i) = \sin(pos/10000^{2i/d})$, giving smooth interpolation to longer sequences.
- **Learned** (BERT, GPT-2): positional embedding as an ordinary parameter.
- **RoPE (Rotary Position Embedding)**: rotates queries and keys in a complex plane; used in LLaMA.
- **ALiBi**: linear attention biases that extrapolate extremely well.

## Encoder-Decoder Architecture

The original Transformer consisted of an **encoder** and a **decoder**:

- **Encoder** — a stack of $N$ layers of self-attention + feed-forward + residual + layer norm. Maps the input sequence to a contextual representation.
- **Decoder** — a similar stack with **masked** self-attention (future tokens are hidden) and **cross-attention** to the encoder output.

Modern variants:

- **Encoder-only** (BERT, RoBERTa): for language-understanding tasks.
- **Decoder-only** (GPT, LLaMA): for generation; [[llm|modern LLMs]] are mostly decoder-only.
- **Encoder-decoder** (T5, BART): for seq2seq tasks — translation, summarisation.

## Feed-Forward and Normalisation

Every layer is complemented with:

- **Feed-forward network (FFN)** — an MLP of two linear layers with a non-linearity (usually GeLU or SwiGLU in modern LLMs). Applied independently per token.
- **Residual connections** — $x + \text{Sublayer}(x)$, easing gradient flow in deep stacks.
- **Layer normalisation** — stabilises activations. Modern models use pre-LN (normalisation before attention/FFN) instead of post-LN.

## Scaling and Complexity

Self-attention has $O(n^2 d)$ complexity in the sequence length $n$, which is the main limit. For $n = 100K$ tokens, quadratic cost is prohibitive. Strategies:

- **Flash Attention** (Dao et al. 2022) — an IO-optimal GPU implementation; $2\text{-}4\times$ speedup with no loss in accuracy.
- **Sliding Window / Sparse Attention** (Longformer, BigBird) — local attention plus separate global tokens.
- **Linear Attention** — a kernel re-formulation: $\text{Att}(Q, K, V) \approx \phi(Q)(\phi(K)^\top V)$, giving $O(n)$.
- **State Space Models (Mamba)** — an alternative to Transformers with linear cost and similar expressiveness.
- **Mixture of Experts ([[mixture-of-experts]])** — scaling parameter count without scaling FLOPs.

These [[neural-scaling-laws|scaling laws]] drive the modern race: bigger $N$ (parameters) and $D$ (training tokens) under the Chinchilla ratio.

## Variants Beyond NLP

- **Vision Transformer (ViT, Dosovitskiy et al. 2020)** — splits images into 16×16 patches and processes them as a sequence. Beats CNNs on large data.
- **Audio Spectrogram Transformer (AST)** — applied to audio spectrograms.
- **Decision Transformer** — RL as a seq2seq prediction of actions.
- **Graphormer** — a Transformer on graphs with a Laplacian positional encoding.
- **[[temporal-fusion-transformer]]** — specialised Transformer for multi-horizon time-series forecasting.

## Applications

- **Language models.** GPT-4, Claude, LLaMA, Gemini — all decoder-only Transformers.
- **Machine translation.** Google Translate, DeepL use encoder-decoder Transformers.
- **Computer vision.** ViT, DETR, Swin Transformer; Stable Diffusion uses a Transformer inside its U-Net.
- **Finance.** Time series — [[temporal-fusion-transformer|TFT]], TimesFM; alpha discovery and market making via Transformer backbones.
- **Science.** AlphaFold2 (proteins), ESM (bioinformatics), GraphCast (weather).

## Related Topics

- [[temporal-fusion-transformer]] — a specialised Transformer for financial time series
- [[llm]] — large language models built on Transformers
- [[mixture-of-experts]] — scaling Transformers through sparse activation
- [[mechanistic-interpretability]] — studying what attention heads actually learn
- [[neural-scaling-laws]] — empirical laws for Transformers

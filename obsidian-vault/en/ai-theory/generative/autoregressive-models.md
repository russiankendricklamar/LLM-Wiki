---
title: 'Generative Models: Autoregressive Math'
category: AI Theory
order: 163
lang: en
slug: autoregressive-models
---

Autoregressive models factorize the joint probability of a sequence into a product of conditional probabilities using the chain rule of probability.

### Factorization
For a sequence $x = (x_1, \dots, x_T)$:
$p(x) = \prod_{t=1}^T p(x_t | x_{<t})$
This formulation allows exact likelihood calculation, making it straightforward to optimize via maximum likelihood estimation (MLE).

### Masked Architectures
To parallelize training, models use masking.
- **Masked Convolutions (PixelCNN):** Kernels are zeroed out for future pixels.
- **Causal Attention (Transformers):** Self-attention layers use a lower-triangular mask to prevent positions from attending to future tokens.
While exact and stable, sequence generation is intrinsically sequential and therefore slow, taking $O(T)$ steps.

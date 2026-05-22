---
title: Universal Approximation Theory
category: Math Foundations
order: 41
lang: en
slug: universal-approximation-theory
---

# Universal Approximation Theory

The Universal Approximation Theorem (UAT) constitutes the mathematical bedrock justifying the use of artificial neural networks as function approximators. The original theorems by Cybenko (1989) and Hornik (1991) established that multilayer feedforward networks can approximate any continuous function on a compact subset of $\mathbb{R}^n$.

## Classical Formulation

Let $I_n = [0, 1]^n$ be the $n$-dimensional unit hypercube. The space of continuous functions on $I_n$ is denoted as $C(I_n)$. The classical UAT for a single hidden layer can be stated as follows:

Let $\sigma: \mathbb{R} 	o \mathbb{R}$ be a non-constant, bounded, and continuous strictly monotonically increasing function (an activation function). Let $C(X)$ denote the space of continuous functions on a compact set $X \subset \mathbb{R}^n$. Then for any $\epsilon > 0$ and any $f \in C(X)$, there exists an integer $N \in \mathbb{N}$, real constants $v_i, b_i \in \mathbb{R}$ and real vectors $w_i \in \mathbb{R}^n$ such that the function $F(x)$ defined by:

$$
F(x) = \sum_{i=1}^{N} v_i \sigma(w_i^T x + b_i)
$$

satisfies:

$$
\sup_{x \in X} |F(x) - f(x)| < \epsilon
$$

### Barron's Theorem

Barron's Theorem (1993) extends UAT by providing approximation bounds. If $f$ possesses a certain degree of smoothness—specifically, if its Fourier transform $	ilde{f}(\omega)$ satisfies:

$$
C_f = \int_{\mathbb{R}^n} |\omega| |	ilde{f}(\omega)| d\omega < \infty
$$

Then there exists a feedforward network with one hidden layer of size $N$ that achieves a mean squared error bounded by:

$$
\int_{B} \left( f(x) - F(x) ight)^2 \mu(dx) \leq rac{(2 C_f)^2}{N}
$$

where $\mu$ is an arbitrary probability measure on the domain $B$.

## Extension to Deep Networks

While shallow networks require an exponentially wide hidden layer to approximate complex functions, deep networks achieve the same approximation power with significantly fewer parameters.

For ReLU networks, the number of linear regions grows as $\mathcal{O}(W^L)$, where $W$ is the width and $L$ is the depth.

## Approximation by Transformers

More recently, UAT has been extended to [[transformer-architectures|Transformers]]. A sequence-to-sequence function $f: (\mathbb{R}^d)^N 	o (\mathbb{R}^d)^N$ is permutation-equivariant if it commutes with the action of the symmetric group $S_N$. Yun et al. (2020) proved that self-attention layers with position encodings can universally approximate any continuous permutation-equivariant sequence-to-sequence function defined on a compact domain.

$$
	ext{SelfAttention}(X) = 	ext{softmax}\left( rac{X W_Q W_K^T X^T}{\sqrt{d_k}} ight) X W_V
$$

With an arbitrary number of heads and layers, the class of Transformer networks is dense in the space of continuous functions with respect to the $L^p$ metric.

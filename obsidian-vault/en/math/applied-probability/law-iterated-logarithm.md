---
title: "Law of Iterated Logarithm"
category: "Applied Probability"
order: 42
lang: "en"
slug: "law-iterated-logarithm"
---

# Law of Iterated Logarithm (LIL)

The Law of Iterated Logarithm (LIL) describes the magnitude of the fluctuations of a random walk. It provides a much tighter bound on the convergence of the sample mean than the [[lln-clt|Law of Large Numbers]].

## 1. Formal Statement

Let $X_1, X_2, \dots$ be i.i.d. random variables with $\mathbb{E}[X_i] = 0$ and $\text{Var}(X_i) = \sigma^2$. Let $S_n = \sum_{i=1}^n X_i$. The LIL states that:
$$\limsup_{n \to \infty} \frac{S_n}{\sqrt{2\sigma^2 n \log \log n}} = 1 \quad \text{a.s.}$$
And by symmetry:
$$\liminf_{n \to \infty} \frac{S_n}{\sqrt{2\sigma^2 n \log \log n}} = -1 \quad \text{a.s.}$$

## 2. Interpretation

- **LLN**: Tells us that $S_n/n \to 0$.
- **CLT**: Tells us that $S_n/\sqrt{n}$ converges in distribution to $\mathcal{N}(0, \sigma^2)$.
- **LIL**: Tells us precisely how large the "peaks" of $S_n$ can be. The fluctuations are of order $\sqrt{n \log \log n}$.

This means that while the average is zero, the sum will infinitely often exceed any bound smaller than $\sqrt{2\sigma^2 n \log \log n}$.

## 3. Role in Stochastic Processes

In the context of **[[brownian-motion|Brownian Motion]]** $W(t)$, the law takes the form:
$$\limsup_{t \to \infty} \frac{W(t)}{\sqrt{2t \log \log t}} = 1 \quad \text{a.s.}$$
It also applies to the local behavior near zero:
$$\limsup_{t \to 0} \frac{W(t)}{\sqrt{2t \log \log (1/t)}} = 1 \quad \text{a.s.}$$

## Related Topics
[[lln-clt]]
[[brownian-motion]]
[[stochastic-processes]]

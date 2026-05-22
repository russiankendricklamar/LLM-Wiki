---
title: 'Probability: Law of Large Numbers'
category: Math Foundations
order: 78
lang: en
slug: lln-proofs
---

The Law of Large Numbers (LLN) describes the result of performing the same experiment a large number of times. Let $\overline{X}_n = \frac{1}{n}\sum X_i$ be the sample mean of i.i.d. variables with expected value $\mu$.

### Weak LLN
The sample mean converges in probability to $\mu$:
$\lim_{n \to \infty} P(|\overline{X}_n - \mu| > \epsilon) = 0$
This is typically proven using Markov's or Chebyshev's inequalities.

### Strong LLN
The sample mean converges almost surely to $\mu$:
$P\left(\lim_{n \to \infty} \overline{X}_n = \mu\right) = 1$
The SLLN implies the WLLN but its [[formal-proof-techniques|Formal Proof]] is more rigorous, often involving Kolmogorov's maximal inequality. The LLN is foundational for [[random-walks|Random Walks]].

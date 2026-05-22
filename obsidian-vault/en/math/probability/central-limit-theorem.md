---
title: Central Limit Theorem
category: Probability
order: 124
lang: en
slug: central-limit-theorem
---

## Overview
The Central Limit Theorem (CLT) establishes that the sum of independent random variables tends toward a normal distribution, regardless of the variables' original distribution.

## Mathematical Formulation
Let $X_1, X_2, \dots, X_n$ be i.i.d. variables with mean $\mu$ and variance $\sigma^2$. The standardized sample mean converges in distribution to the standard normal $\mathcal{N}(0,1)$:
$$ \lim_{n \to \infty} P\left( \frac{\bar{X}_n - \mu}{\sigma / \sqrt{n}} \le z \right) = \Phi(z) $$
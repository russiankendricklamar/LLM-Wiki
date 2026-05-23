---
title: Small Ball Probabilities for Stochastic Processes
category: Stochastic Processes
order: 155
lang: en
slug: small-ball-probabilities
---

# Small Ball Probabilities for Stochastic Processes

Small ball probabilities characterize the asymptotic behavior of the probability that a stochastic process $X$ remains closely bound to a target trajectory (often zero) in a given norm.

## Asymptotic Definition

Let $X_t$ be a centered Gaussian process (e.g., fractional Brownian motion). The small ball problem investigates:
$$ \mathbb{P} \left( \sup_{t \in [0,T]} |X_t| \le \epsilon \right) \text{ as } \epsilon \to 0 $$
By scaling properties, this is often equivalent to studying the behavior as $T \to \infty$.

## Connection to Entropy and Spectra

The small ball probability is deeply linked to the metric entropy of the reproducing kernel Hilbert space (RKHS) associated with $X$, and the spectral asymptotics of the corresponding covariance operator.
For a standard Brownian motion $W$, classical results state:
$$ \mathbb{P} \left( \sup_{0 \le t \le 1} |W_t| \le \epsilon \right) \sim \frac{4}{\pi} \exp\left( - \frac{\pi^2}{8 \epsilon^2} \right) $$

## Applications

Small ball estimates are crucial for proving laws of the iterated logarithm (LIL) via Borel-Cantelli lemmas, studying the packing measure of sample paths, and analyzing approximation rates in quantization and [[machine-learning]] algorithms applied to functional data.

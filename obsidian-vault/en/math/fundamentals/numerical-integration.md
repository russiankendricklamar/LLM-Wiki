---
title: "Numerical Integration"
category: "Math Foundations"
order: 59
lang: "en"
slug: "numerical-integration"
---

# Numerical Integration

Numerical integration (quadrature) involves approximating the definite integral of a function. In ML and Finance, high-dimensional integrals appear in Bayesian inference and expected value calculations.

## Gaussian Quadrature
Unlike Newton-Cotes formulas (which use equally spaced points), Gaussian quadrature selects optimal evaluation points $x_i$ and weights $w_i$ to exactly integrate polynomials of highest possible degree.
$$ \int_{-1}^{1} f(x) dx \approx \sum_{i=1}^n w_i f(x_i) $$
An $n$-point Gaussian quadrature rule integrates polynomials of degree up to $2n-1$ exactly. The points $x_i$ are roots of orthogonal polynomials (e.g., Legendre polynomials).

## Monte Carlo Integration
For high-dimensional integrals, standard grid-based quadrature suffers from the **Curse of Dimensionality** (cost grows exponentially with dimensions). Monte Carlo integration scales much better.
To evaluate $\mathbb{E}_{p(x)}[f(x)] = \int f(x) p(x) dx$, we sample $x_i \sim p(x)$ and compute the sample mean:
$$ I \approx \frac{1}{N} \sum_{i=1}^N f(x_i) $$
By the Law of Large Numbers, this converges to the true integral. By the Central Limit Theorem, the standard error decreases as $1/\sqrt{N}$, strictly independent of the dimension of $x$.

## Importance Sampling
When $p(x)$ is difficult to sample from, we use a proposal distribution $q(x)$:
$$ \int f(x) p(x) dx = \int f(x) \frac{p(x)}{q(x)} q(x) dx \approx \frac{1}{N} \sum_{x_i \sim q} f(x_i) \frac{p(x_i)}{q(x_i)} $$
The ratio $w_i = \frac{p(x_i)}{q(x_i)}$ is the importance weight.

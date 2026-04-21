---
title: "Entropy Pooling (Meucci)"
category: "Portfolio Management"
order: 20
lang: "en"
slug: "entropy-pooling"
---

# Entropy Pooling: Advanced Portfolio Construction

The [[bayesian-black-litterman|Black-Litterman]] model revolutionized portfolio construction by combining a market prior with subjective investor views. However, it assumes that all returns are **normally distributed** and that all views are **linear** expressions of expected returns.

**Entropy Pooling**, introduced by Attilio Meucci (2008), is a profound generalization that solves these limitations using Information Theory. It allows quantitative funds to process *any* distribution (fat tails, skewness) and *any* type of view (e.g., "The 99% VaR of sector A will not exceed 5%").

## The Core Concept: Minimum Relative Entropy

Imagine you have a highly complex, non-normal joint distribution of 10,000 assets. This is your **Prior**. It is usually represented non-parametrically as a massive matrix of Monte Carlo scenarios, with each scenario having an initial probability (weight) $p_i$.

Now, a proprietary Alpha model generates a "View" (e.g., "The correlation between Tech and Oil will be zero").
The goal of Entropy Pooling is to find a new set of probabilities (the **Posterior** $q_i$) for those scenarios such that:
1.  The new probabilities $q_i$ exactly satisfy the Alpha model's views.
2.  The new probabilities are "as close as possible" to the prior $p_i$.

"Closeness" is measured using the **Kullback-Leibler (KL) Divergence** (Relative Entropy):
$$D_{KL}(q \parallel p) = \sum_i q_i \ln\left(\frac{q_i}{p_i}\right)$$

## The Optimization Problem

The portfolio manager minimizes the KL Divergence subject to the constraints imposed by the views:
$$\min_{q} \sum q_i \ln\left(\frac{q_i}{p_i}\right)$$
Subject to:
- $\sum q_i = 1$ (Probabilities sum to 1)
- $V \cdot q \leq c$ (The linear or non-linear views on the scenarios)

This is a **Convex Optimization** problem. The beauty is that it guarantees a unique solution and can be solved incredibly fast, even for millions of scenarios.

## Why Tier-1 Funds Use It

1.  **Options and Non-Linearities**: You can express views on options (which have asymmetric payoffs) directly. Black-Litterman cannot handle options.
2.  **Stress Testing**: You can say, "What if the market drops 20%?" The algorithm will smoothly shift the probabilities of all other assets to reflect this stress scenario, based entirely on the historical joint distribution, without assuming a covariance matrix.
3.  **Ranking Signals**: If an ML model simply outputs a ranking ("Stock A > Stock B > Stock C"), Entropy Pooling can translate this ordinal ranking into a strict mathematical posterior distribution.

## Visualization: Shifting the Distribution

```chart
{
  "type": "line",
  "xAxis": "return",
  "data": [
    {"return": -10, "prior": 0.02, "posterior": 0.01},
    {"return": -5,  "prior": 0.10, "posterior": 0.05},
    {"return": 0,   "prior": 0.40, "posterior": 0.30},
    {"return": 5,   "prior": 0.30, "posterior": 0.45},
    {"return": 10,  "prior": 0.08, "posterior": 0.15},
    {"return": 15,  "prior": 0.01, "posterior": 0.04}
  ],
  "lines": [
    {"dataKey": "prior", "stroke": "#94a3b8", "name": "Prior Distribution (Neutral)"},
    {"dataKey": "posterior", "stroke": "#10b981", "name": "Posterior (View: 'Return > 0')"}
  ]
}
```
*When the manager inputs a view (e.g., "The expected return is positive"), Entropy Pooling does not just shift the mean; it optimally distorts the entire shape of the distribution (green) while remaining as faithful as possible to the original market structure (grey).*

## Related Topics

[[bayesian-black-litterman]] — the linear, Gaussian predecessor  
[[convex-optimization-trading]] — the math used to solve the KL divergence  
[[shannon-entropy]] — the foundation of KL divergence  
[[financial-entropy]] — using info-theory for market regimes
---

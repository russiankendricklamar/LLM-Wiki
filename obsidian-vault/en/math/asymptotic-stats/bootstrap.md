---
title: "Resampling: Bootstrap and Jackknife"
category: "Asymptotic Statistics"
order: 7
lang: "en"
slug: "bootstrap"
---

# Resampling: Bootstrap and Jackknife

Resampling methods are non-parametric techniques used to estimate the precision (standard errors, confidence intervals) of sample statistics. They rely on the data itself to simulate the underlying distribution, making them incredibly powerful when the true distribution is unknown or mathematically complex.

## 1. The Bootstrap

Introduced by **Bradley Efron** in 1979, the Bootstrap is based on the idea of **sampling with replacement**.

### The Procedure
Given a dataset $X = \{x_1, \dots, x_n\}$:
1.  Generate $B$ "bootstrap samples" $X^*$, each of size $n$, by picking elements from $X$ with replacement. (Some elements will appear multiple times, some not at all).
2.  For each sample, calculate the statistic of interest $\hat{\theta}^*_b$.
3.  The distribution of $\{\hat{\theta}^*_1, \dots, \hat{\theta}^*_B\}$ approximates the sampling distribution of $\hat{\theta}$.

### Why it works: The "Plug-in" Principle
The Bootstrap treats the observed sample as if it were the entire population. As $n \to \infty$, the relationship between the sample and the population is mirrored by the relationship between the bootstrap samples and the original sample.

## 2. The Jackknife

An older technique (Quenouille, 1949) that uses **Leave-one-out** sampling.

### The Procedure
1.  Create $n$ new datasets, each missing exactly one observation from the original sample.
2.  Calculate the statistic $\hat{\theta}_i$ for each "jackknifed" dataset.
3.  Use the variance of these $\hat{\theta}_i$ to estimate the standard error of the original estimate.

The Jackknife is primarily used for **bias correction** and estimating variance, but it is less robust than the Bootstrap for non-smooth statistics (like the median).

## Visualization: Resampling Distribution

```chart
{
  "type": "line",
  "xAxis": "value",
  "data": [
    {"value": 10, "freq": 1},
    {"value": 11, "freq": 5},
    {"value": 12, "freq": 15},
    {"value": 13, "freq": 25},
    {"value": 14, "freq": 18},
    {"value": 15, "freq": 6},
    {"value": 16, "freq": 1}
  ],
  "lines": [
    {"dataKey": "freq", "stroke": "#3b82f6", "name": "Bootstrap Distribution of Mean"}
  ]
}
```
*The histogram of bootstrap estimates provides an empirical way to build confidence intervals without assuming the data is Gaussian.*

## When to Use Which?

| Feature | Bootstrap | Jackknife |
|---|---|---|
| **Sampling** | With replacement | Leave-one-out |
| **Complexity** | $O(B \cdot n)$ (High) | $O(n^2)$ (Lower) |
| **Robustness** | Excellent for most stats | Fails for non-smooth stats (median) |
| **Main Use** | Confidence Intervals | Bias estimation |

## Related Topics

[[central-limit-theorem]] — the parametric alternative  
[[monte-carlo-method|Monte Carlo methods]] — the broader family of simulation techniques  
asymptotic-stats — theoretical properties of resampling
---

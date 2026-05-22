---
title: "Resampling Methods: Bootstrap & Jackknife"
category: "Applied Probability"
order: 40
lang: "en"
slug: "bootstrap-jackknife"
---

# Resampling Methods: Bootstrap & Jackknife

Resampling methods are non-parametric techniques used to estimate the sampling distribution of a statistic, typically to calculate standard errors, confidence intervals, and bias.

## 1. The Jackknife

The Jackknife is a leave-one-out technique. For a sample of size $n$, we create $n$ sub-samples by removing one observation at a time.

### Variance Estimation
Let $\hat{\theta}_{(-i)}$ be the estimate calculated without the $i$-th observation. The Jackknife estimate of variance is:
$$\text{Var}_{jack} = \frac{n-1}{n} \sum_{i=1}^n (\hat{\theta}_{(-i)} - \bar{\theta}_{jack})^2$$
where $\bar{\theta}_{jack}$ is the average of the $n$ estimates.
The Jackknife is particularly useful for reducing bias in estimators.

## 2. The Bootstrap

The Bootstrap involves drawing samples of size $n$ from the original data **with replacement**.

### The Bootstrap Principle
The empirical distribution $\hat{F}$ is used as a proxy for the true population distribution $F$. By repeatedly sampling from $\hat{F}$, we simulate the sampling process from $F$.

### Procedure
1. Draw $B$ bootstrap samples $X^*_1, ..., X^*_B$.
2. Calculate the statistic $\hat{\theta}^*_b$ for each sample.
3. Estimate the standard error as the sample standard deviation of $\hat{\theta}^*_1, ..., \hat{\theta}^*_B$.

## 3. Comparison

| Feature | Jackknife | Bootstrap |
| :--- | :--- | :--- |
| **Method** | Deterministic (leave-one-out) | Stochastic (sampling with replacement) |
| **Computations** | $n$ iterations | $B$ (usually 1000+) iterations |
| **Main Use** | Bias reduction, variance estimation | Confidence intervals, distribution shape |
| **Limitation** | Fails for non-smooth statistics (e.g., median) | More computationally intensive |

## Related Topics
[[statistical-inference]]
[[estimator-properties]]
[[monte-carlo-integration]]

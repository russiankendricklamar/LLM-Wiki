---
title: "Sufficient Statistics"
category: "Asymptotic Statistics"
order: 6
lang: "en"
slug: "sufficient-statistics"
---

# Sufficient Statistics

A **Sufficient Statistic** is a function of the data that captures all the information necessary to estimate a parameter. Once you know the value of a sufficient statistic, the raw data provides no additional information about the parameter. This concept is fundamental for **data compression** and efficient estimation.

## Formal Definition

A statistic $T(X)$ is sufficient for a parameter $\theta$ if the conditional distribution of the data $X$, given $T(X)$, does not depend on $\theta$:
$$p(X \mid T(X), \theta) = p(X \mid T(X))$$

In other words, given $T(X)$, the data $X$ is just noise as far as $\theta$ is concerned.

## The Fisher-Neyman Factorization Theorem

This theorem provides a practical way to find sufficient statistics. A statistic $T(X)$ is sufficient if and only if the likelihood function can be factored into two parts:
$$\mathcal{L}(\theta; X) = h(X) \cdot g(\theta, T(X))$$
- $h(X)$ depends only on the data, not on $\theta$.
- $g(\theta, T(X))$ depends on $\theta$ only through the statistic $T(X)$.

## Minimal Sufficiency

A **Minimal Sufficient Statistic** is one that achieves the maximum possible data compression. It is a sufficient statistic that is a function of any other sufficient statistic. 

## Examples

1.  **Bernoulli Distribution**: For $n$ coin flips with probability $p$, the total number of heads $T(X) = \sum X_i$ is a sufficient statistic. You don't need to know the exact sequence of flips to estimate $p$.
2.  **Normal Distribution**: If $X \sim \mathcal{N}(\mu, \sigma^2)$, the pair $(\sum X_i, \sum X_i^2)$ is jointly sufficient for $(\mu, \sigma^2)$.

## Connection to Information Theory

Sufficient statistics are related to the **Data Processing Inequality**. They represent the "bottleneck" through which information about the parameter flows from the data. In Deep Learning, the **Information Bottleneck** principle attempts to find representations that are "almost sufficient" for the task while being as compressed as possible.

## Visualization: Data Compression

```chart
{
  "type": "bar",
  "xAxis": "state",
  "data": [
    {"state": "Raw Data (N samples)", "info": 100, "size": 100},
    {"state": "Sufficient Statistic", "info": 100, "size": 5},
    {"state": "Non-Sufficient Stat", "info": 65, "size": 2}
  ],
  "lines": [
    {"dataKey": "info", "stroke": "#10b981", "name": "Information about θ (%)"},
    {"dataKey": "size", "stroke": "#ef4444", "name": "Data Size"}
  ]
}
```
*A sufficient statistic drastically reduces the data size (dimensionality) while preserving 100% of the information relevant to the parameter $\theta$.*

## Related Topics

[[fisher-information]] — measures the quality of the information  
[[exponential-families]] — where sufficient statistics are easy to find  
[[mle]] — MLE always depends on sufficient statistics
---

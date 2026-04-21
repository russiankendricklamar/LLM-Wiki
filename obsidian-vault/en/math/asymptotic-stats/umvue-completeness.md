---
title: "UMVUE and Completeness"
category: "Asymptotic Statistics"
order: 18
lang: "en"
slug: "umvue-completeness"
---

# UMVUE and the Lehmann-Scheffé Theorem

In statistical estimation, the **Uniformly Minimum Variance Unbiased Estimator (UMVUE)** is the "perfect" unbiased estimator. It is the estimator that has the lowest possible variance for *all* possible values of the parameter $\theta$.

## The Quest for Optimality

A good estimator should be unbiased ($\mathbb{E}[\hat{\theta}] = \theta$) and have low variance. While the [[fisher-information|Cramér-Rao Bound]] gives a lower limit on variance, not all models have an estimator that reaches it. UMVUE is the best we can do within the class of unbiased rules.

## Completeness

A sufficient statistic $T(X)$ is **Complete** if the only function of $T$ that is always zero in expectation is the zero function itself:
$$\mathbb{E}_\theta[g(T)] = 0 \quad \forall \theta \implies g(T) = 0 \text{ almost surely}$$
Completeness ensures that there is only **one** way to create an unbiased estimator using that statistic.

## The Lehmann-Scheffé Theorem

This theorem provides the "recipe" for finding the UMVUE:
1.  Find a **Sufficient** and **Complete** statistic $T(X)$.
2.  Find any **Unbiased** estimator $h(X)$ for $\theta$.
3.  Compute the conditional expectation: $\hat{\theta}_{UMVUE} = \mathbb{E}[h(X) \mid T(X)]$.

The resulting estimator is the unique UMVUE. The process of taking an unbiased estimator and conditioning it on a sufficient statistic is called **Rao-Blackwellization**.

## Example: The Poisson Mean

Suppose $X_i \sim \text{Poisson}(\lambda)$.
- The statistic $T = \sum X_i$ is sufficient and complete for $\lambda$.
- A simple unbiased estimator is the first observation: $h(X) = X_1$.
- Rao-Blackwellization: $\mathbb{E}[X_1 \mid \sum X_i = t] = \frac{1}{n} \sum X_i = \bar{X}$.
- Therefore, the sample mean $\bar{X}$ is the UMVUE for $\lambda$.

## Visualization: Variance Reduction

```chart
{
  "type": "bar",
  "xAxis": "estimator",
  "data": [
    {"estimator": "Raw Unbiased (h)", "variance": 100},
    {"estimator": "Rao-Blackwellized", "variance": 45},
    {"estimator": "UMVUE (Optimal)", "variance": 45}
  ],
  "lines": [
    {"dataKey": "variance", "stroke": "#10b981", "name": "Variance Level"}
  ]
}
```
*Conditioning an unbiased estimator on a sufficient statistic (Rao-Blackwellization) never increases variance and almost always decreases it, pushing the estimator toward the theoretical optimum.*

## Related Topics

[[sufficient-statistics]] — the input for the theorem  
[[fisher-information]] — the lower bound on UMVUE variance  
[[asymptotic-stats]] — how UMVUEs behave as $n \to \infty$
---

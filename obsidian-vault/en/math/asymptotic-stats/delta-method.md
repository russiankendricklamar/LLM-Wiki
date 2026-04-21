---
title: "The Delta Method"
category: "Asymptotic Statistics"
order: 12
lang: "en"
slug: "delta-method"
---

# The Delta Method

The Delta Method is a result in asymptotic statistics that allows one to find the limiting distribution of a function of an estimator, provided the estimator itself is asymptotically normal. It is essentially an application of the **Taylor expansion** to random variables.

## The Core Theorem

Let $\hat{\theta}_n$ be a sequence of random variables (estimators) such that:
$$\sqrt{n}(\hat{\theta}_n - \theta) \xrightarrow{d} \mathcal{N}(0, \sigma^2)$$

If $g$ is a function that is differentiable at $\theta$ with $g'(\theta) \neq 0$, then:
$$\sqrt{n}(g(\hat{\theta}_n) - g(\theta)) \xrightarrow{d} \mathcal{N}(0, \sigma^2 [g'(\theta)]^2)$$

In simple terms: if you know the variance of your estimator, the Delta Method tells you the variance of any (smooth) function of that estimator.

## Multivariate Delta Method

If $\hat{\theta}_n$ is a vector in $\mathbb{R}^k$ and $\sqrt{n}(\hat{\theta}_n - \theta) \xrightarrow{d} \mathcal{N}(0, \Sigma)$, then for a differentiable function $g: \mathbb{R}^k \to \mathbb{R}^m$:
$$\sqrt{n}(g(\hat{\theta}_n) - g(\theta)) \xrightarrow{d} \mathcal{N}(0, \nabla g(\theta)^\top \Sigma \nabla g(\theta))$$
where $\nabla g(\theta)$ is the Jacobian matrix.

## Why It Matters

1.  **Confidence Intervals**: If you have a confidence interval for the log-odds (from logistic regression), the Delta Method allows you to build a valid confidence interval for the actual probability $p = \sigma(logit)$.
2.  **Complex Statistics**: Many statistics are ratios or nonlinear combinations of means (e.g., the Coefficient of Variation $\sigma/\mu$). The Delta Method provides the only way to calculate their standard errors analytically.
3.  **Econometrics**: Used extensively to find the distribution of elasticities or marginal effects.

## Second-Order Delta Method

If $g'(\theta) = 0$ (a critical point), the first-order approximation vanishes. In this case, we use the second-order Taylor expansion, which leads to a **Chi-square distribution** limit rather than a Normal one.

## Visualization: Error Propagation

```chart
{
  "type": "line",
  "xAxis": "theta",
  "data": [
    {"theta": 1, "g_theta": 1, "variance": 1},
    {"theta": 2, "g_theta": 4, "variance": 4},
    {"theta": 3, "g_theta": 9, "variance": 9},
    {"theta": 4, "g_theta": 16, "variance": 16}
  ],
  "lines": [
    {"dataKey": "variance", "stroke": "#ef4444", "name": "Variance of g(θ) ~ (g')²"}
  ]
}
```
*If $g(\theta) = \theta^2$, the uncertainty in the output grows quadratically with $\theta$ because the slope $g'(\theta) = 2\theta$ is increasing. The Delta Method captures this "stretching" of the error bars.*

## Related Topics

[[central-limit-theorem]] — provides the initial normality  
[[mle]] — where we get our initial estimators  
[[asymptotic-stats]] — the broader context of limiting distributions
---

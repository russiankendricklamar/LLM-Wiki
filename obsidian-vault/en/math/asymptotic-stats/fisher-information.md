---
title: "Fisher Information and Cramér-Rao Bound"
category: "Asymptotic Statistics"
order: 3
lang: "en"
slug: "fisher-information"
---

# Fisher Information and Cramér-Rao Bound

Fisher Information measures the amount of information that an observable random variable $X$ carries about an unknown parameter $\theta$. It quantifies the "curvature" of the log-likelihood function and sets a fundamental limit on how precisely we can estimate parameters.

## Fisher Information ($I(\theta)$)

The Fisher Information is defined as the variance of the **Score function** $s(\theta) = \nabla_\theta \ell(\theta)$:

$$I(\theta) = \mathbb{E} \left[ \left( \frac{\partial}{\partial \theta} \log p(X; \theta) \right)^2 \right]$$

Equivalently, under regularity conditions, it is the negative expected value of the **Hessian** of the log-likelihood:

$$I(\theta) = -\mathbb{E} \left[ \frac{\partial^2}{\partial \theta^2} \log p(X; \theta) \right]$$

- **High Information**: The log-likelihood has a sharp peak. Small changes in $\theta$ lead to big changes in the probability of data.
- **Low Information**: The log-likelihood is flat. The data doesn't help much in distinguishing between different $\theta$ values.

## The Cramér-Rao Lower Bound (CRLB)

The Cramér-Rao inequality states that the variance of any **unbiased estimator** $\hat{\theta}$ is bounded from below by the inverse of the Fisher Information:

$$\text{Var}(\hat{\theta}) \geq \frac{1}{I(\theta)}$$

This is one of the most important results in statistics. It tells us that no matter how clever our algorithm is, we cannot beat this precision limit for a given sample size. An estimator that achieves this bound is called **Efficient**.

## Connection to Machine Learning

1.  **Optimization**: The Fisher Information Matrix (FIM) is used in **Natural Gradient Descent** to adjust the step size based on the curvature of the statistical manifold.
2.  **Model Selection**: The MDL (Minimum Description Length) principle uses the log-determinant of the FIM to penalize model complexity.
3.  **Hessian in Deep Learning**: The FIM is a common approximation for the Hessian matrix of the loss function, helping us understand the "flatness" of minima.

## Visualization: Curvature and Precision

```chart
{
  "type": "line",
  "xAxis": "theta",
  "data": [
    {"theta": -2, "flat": 0.10, "sharp": 0.01},
    {"theta": -1, "flat": 0.25, "sharp": 0.05},
    {"theta": 0,  "flat": 0.40, "sharp": 2.50},
    {"theta": 1,  "flat": 0.25, "sharp": 0.05},
    {"theta": 2,  "flat": 0.10, "sharp": 0.01}
  ],
  "lines": [
    {"dataKey": "flat", "stroke": "#94a3b8", "name": "Low Fisher Info (Flat)"},
    {"dataKey": "sharp", "stroke": "#ef4444", "name": "High Fisher Info (Sharp)"}
  ]
}
```
*A "sharp" likelihood function (high Fisher info) means the data points strongly to a specific parameter value, enabling high-precision estimation.*

## Related Topics

[[mle]] — MLE asymptotically reaches the CRLB  
[[information-geometry]] — the metric defined by Fisher Info  
[[asymptotic-stats]] — properties of estimators at scale
---

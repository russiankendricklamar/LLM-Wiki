---
title: "Exponential Families"
category: "Asymptotic Statistics"
order: 8
lang: "en"
slug: "exponential-families"
---

# Exponential Families

Exponential families are a class of probability distributions that share a common mathematical form. This class includes many of the most important distributions in statistics, such as the **Normal**, **Bernoulli**, **Poisson**, **Gamma**, and **Dirichlet**. They are the foundation of **Generalized Linear Models (GLMs)** and are central to the theory of [[sufficient-statistics|Sufficient Statistics]].

## The Standard Form

A family of distributions $\{p(x \mid \eta)\}$ is an exponential family if the density can be written as:
$$p(x \mid \eta) = h(x) \exp\left( \eta^\top T(x) - A(\eta) \right)$$

- **$T(x)$ (Sufficient Statistic)**: Encapsulates all data needed to estimate the parameters.
- **$\eta$ (Natural Parameter)**: The canonical parameter of the distribution.
- **$A(\eta)$ (Log-Partition Function)**: A normalization constant that ensures the total probability is 1.
- **$h(x)$ (Base Measure)**: A factor that doesn't depend on $\eta$.

## Why They Are Important

### 1. Moments and Derivatives
The derivatives of the log-partition function $A(\eta)$ have a direct statistical meaning:
- $\nabla_\eta A(\eta) = \mathbb{E}[T(X)]$ (The Mean)
- $\nabla_\eta^2 A(\eta) = \text{Var}(T(X))$ (The Variance/Covariance)

This makes calculating moments extremely easy compared to manual integration.

### 2. Maximum Entropy
Exponential families are the solutions to **Maximum Entropy** problems. If you want to find a distribution that satisfies certain constraints (like a fixed mean and variance) while being as "random" as possible, you will always get an exponential family.

### 3. Conjugate Priors
In [[bayesian-inference]], if the likelihood is in an exponential family, there is always a corresponding conjugate prior family, making Bayesian updates simple algebraic additions of the sufficient statistics.

## Examples

| Distribution | Natural Parameter ($\eta$) | Sufficient Statistic $T(x)$ |
|---|---|---|
| **Bernoulli** | $\log(\frac{p}{1-p})$ | $x$ |
| **Poisson** | $\log(\lambda)$ | $x$ |
| **Gaussian** | $(\frac{\mu}{\sigma^2}, -\frac{1}{2\sigma^2})$ | $(x, x^2)$ |

## Visualization: Mean Mapping

```chart
{
  "type": "line",
  "xAxis": "eta",
  "data": [
    {"eta": -3, "mean": 0.05},
    {"eta": -1, "mean": 0.27},
    {"eta": 0,  "mean": 0.50},
    {"eta": 1,  "mean": 0.73},
    {"eta": 3,  "mean": 0.95}
  ],
  "lines": [
    {"dataKey": "mean", "stroke": "#8b5cf6", "name": "E[T(X)] = A'(η)"}
  ]
}
```
*The relationship between the natural parameter and the expected value is always monotonic and smooth in exponential families, enabling stable optimization.*

## Related Topics

[[sufficient-statistics]] — the core data reduction  
[[information-geometry]] — studying exponential families as flat manifolds  
[[mle]] — MLE for exponential families is always a convex optimization problem
---

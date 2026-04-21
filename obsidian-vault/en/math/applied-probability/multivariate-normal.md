---
title: "Multivariate Normal Distribution"
category: "Applied Probability"
order: 44
lang: "en"
slug: "multivariate-normal"
---

# Multivariate Normal Distribution

The Multivariate Normal (MVN) distribution is the generalization of the one-dimensional normal distribution to higher dimensions. It is the most important multivariate distribution because of the **Multivariate Central Limit Theorem** and its unique geometric and algebraic properties.

## Definition

A random vector $\mathbf{X} = [X_1, \dots, X_k]^\top$ follows a multivariate normal distribution $\mathcal{N}(\boldsymbol{\mu}, \mathbf{\Sigma})$ if its joint probability density function is:

$$f(\mathbf{x}) = \frac{1}{\sqrt{(2\pi)^k |\mathbf{\Sigma}|}} \exp\left( -\frac{1}{2} (\mathbf{x} - \boldsymbol{\mu})^\top \mathbf{\Sigma}^{-1} (\mathbf{x} - \boldsymbol{\mu}) \right)$$

Where:
- $\boldsymbol{\mu}$ is the **mean vector** (location).
- $\mathbf{\Sigma}$ is the $k \times k$ **covariance matrix** (shape and orientation). It must be symmetric and positive semi-definite.

## Key Geometric Property: Mahalanobis Distance

The term in the exponent, $D_M = \sqrt{(\mathbf{x} - \boldsymbol{\mu})^\top \mathbf{\Sigma}^{-1} (\mathbf{x} - \boldsymbol{\mu})}$, is called the **Mahalanobis Distance**. 
- The contours of equal probability are **ellipsoids** centered at $\boldsymbol{\mu}$.
- The axes of these ellipsoids are determined by the **eigenvectors** of $\mathbf{\Sigma}$, and their lengths by the square roots of the **eigenvalues**.

## Algebraic Properties

1.  **Linear Combinations**: If $\mathbf{X} \sim \mathcal{N}(\boldsymbol{\mu}, \mathbf{\Sigma})$, then any linear combination $\mathbf{AX} + \mathbf{b}$ is also multivariate normal. This is why Gaussians are so stable in neural networks and physical systems.
2.  **Marginal Distributions**: Any subset of the components of $\mathbf{X}$ is also multivariate normal.
3.  **Conditional Distributions**: If we partition $\mathbf{X}$ into $(\mathbf{X}_1, \mathbf{X}_2)$, then the distribution of $\mathbf{X}_1$ given $\mathbf{X}_2$ is also normal! The mean of this conditional distribution is a linear function of $\mathbf{X}_2$:
    $$\boldsymbol{\mu}_{1 \mid 2} = \boldsymbol{\mu}_1 + \mathbf{\Sigma}_{12} \mathbf{\Sigma}_{22}^{-1} (\mathbf{x}_2 - \boldsymbol{\mu}_2)$$
    This is the mathematical basis for **Gaussian Process Regression** and **Linear Kalman Filters**.

## Visualization: Covariance and Contours

```chart
{
  "type": "scatter",
  "xAxis": "x",
  "data": [
    {"x": -2, "y": -2, "type": "low_prob"},
    {"x": -1, "y": -1, "type": "med_prob"},
    {"x": 0,  "y": 0,  "type": "peak"},
    {"x": 1,  "y": 1,  "type": "med_prob"},
    {"x": 2,  "y": 2,  "type": "low_prob"}
  ],
  "lines": [
    {"dataKey": "y", "stroke": "#3b82f6", "name": "Principal Axis (Correlation)"}
  ]
}
```
*In 2D, if the covariance $\sigma_{12}$ is positive, the probability "cloud" is stretched along the diagonal. The Mahalanobis distance accounts for this stretch, making points along the diagonal "closer" than points off-diagonal.*

## Related Topics

[[linear-algebra]] — eigenvectors define the Gaussian shape  
[[gaussian-processes]] — infinite-dimensional MVNs  
[[pca]] — finding the axes of the MVN ellipsoid
---

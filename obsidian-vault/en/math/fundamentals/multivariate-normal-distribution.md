---
title: "Multivariate Normal Distribution"
category: "Math Foundations"
order: 60
lang: "en"
slug: "multivariate-normal-distribution"
---

# Multivariate Normal Distribution

A random vector $x \in \mathbb{R}^k$ follows a multivariate normal (Gaussian) distribution, denoted $\mathcal{N}(\mu, \Sigma)$, if every linear combination of its components has a univariate normal distribution.

## Density Function
For a [[positive-definite-matrices|positive definite]] covariance matrix $\Sigma$, the Probability Density Function (PDF) is:
$$ p(x) = (2\pi)^{-k/2} \det(\Sigma)^{-1/2} \exp\left( -\frac{1}{2} (x-\mu)^T \Sigma^{-1} (x-\mu) \right) $$

## Mahalanobis Distance
The term in the exponent is the squared Mahalanobis distance:
$$ \Delta^2 = (x-\mu)^T \Sigma^{-1} (x-\mu) $$
It measures the distance of $x$ from the mean $\mu$, scaled by the variance along the principal axes. Surfaces of constant density are ellipsoids centered at $\mu$.

## Marginals and Conditionals
One of the most powerful properties of the multivariate normal is that both marginal and conditional distributions are also normal.
Partition $x$, $\mu$, and $\Sigma$ as:
$$ x = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}, \quad \mu = \begin{bmatrix} \mu_1 \\ \mu_2 \end{bmatrix}, \quad \Sigma = \begin{bmatrix} \Sigma_{11} & \Sigma_{12} \\ \Sigma_{21} & \Sigma_{22} \end{bmatrix} $$

**Marginal Distribution:**
$x_1 \sim \mathcal{N}(\mu_1, \Sigma_{11})$

**Conditional Distribution:**
The distribution of $x_1$ given $x_2$ is $\mathcal{N}(\mu_{1|2}, \Sigma_{1|2})$, where:
$$ \mu_{1|2} = \mu_1 + \Sigma_{12} \Sigma_{22}^{-1} (x_2 - \mu_2) $$
$$ \Sigma_{1|2} = \Sigma_{11} - \Sigma_{12} \Sigma_{22}^{-1} \Sigma_{21} $$
These conditional update formulas form the mathematical basis of the [[kalman-filter|Kalman Filter]] and Gaussian Processes.

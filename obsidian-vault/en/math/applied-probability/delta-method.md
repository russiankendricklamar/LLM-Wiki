---
title: "Delta Method"
category: "Applied Probability"
order: 38
lang: "en"
slug: "delta-method"
---

# Delta Method

The Delta Method is a technique used to find the asymptotic distribution of a function of an asymptotically normal estimator. It is essentially a probabilistic version of the Taylor expansion.

## 1. Formal Statement

Suppose a sequence of random variables $X_n$ satisfies:
$$\sqrt{n}(X_n - \theta) \xrightarrow{d} \mathcal{N}(0, \sigma^2)$$
If $g$ is a function such that $g'(\theta)$ exists and is non-zero, then:
$$\sqrt{n}(g(X_n) - g(\theta)) \xrightarrow{d} \mathcal{N}(0, \sigma^2 [g'(\theta)]^2)$$

### Multivariate Delta Method
For a vector of parameters $\theta$ and a vector-valued function $g$:
$$\sqrt{n}(g(X_n) - g(\theta)) \xrightarrow{d} \mathcal{N}(0, \nabla g(\theta)^T \Sigma \nabla g(\theta))$$
where $\Sigma$ is the covariance matrix of the limiting distribution of $X_n$.

## 2. Derivation Idea

The method uses a first-order Taylor expansion of $g(X_n)$ around $\theta$:
$$g(X_n) \approx g(\theta) + g'(\theta)(X_n - \theta)$$
Multiplying by $\sqrt{n}$:
$$\sqrt{n}(g(X_n) - g(\theta)) \approx g'(\theta) \sqrt{n}(X_n - \theta)$$
Since $\sqrt{n}(X_n - \theta)$ converges to $\mathcal{N}(0, \sigma^2)$, the linear transformation $g'(\theta)$ results in a variance of $\sigma^2 [g'(\theta)]^2$.

## 3. Applications

- **Standard Errors**: Calculating the standard error of the odds ratio or the logarithm of a mean.
- **MLE Functions**: Finding the distribution of $g(\hat{\theta}_{MLE})$ when the distribution of $\hat{\theta}_{MLE}$ is known.

## Related Topics
[[lln-clt]]
[[mle-estimation]]
[[statistical-inference]]

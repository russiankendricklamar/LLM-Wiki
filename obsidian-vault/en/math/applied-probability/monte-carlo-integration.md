---
title: "Monte Carlo Integration"
category: "Applied Probability"
order: 36
lang: "en"
slug: "monte-carlo-integration"
---

# Monte Carlo Integration and Importance Sampling

Monte Carlo integration is a numerical technique for estimating the value of a definite integral using random sampling. It becomes the only viable method for computing integrals in **high-dimensional spaces** (like in Bayesian inference or statistical mechanics), where traditional grid-based methods (like the trapezoidal rule) suffer from the "curse of dimensionality."

## The Core Concept

Suppose we want to evaluate the integral of a function $f(x)$ over a domain $D$. We can express this integral as an expected value with respect to a uniform probability density function $p(x) = 1/V(D)$:

$$I = \int_D f(x) dx = V(D) \int_D f(x) p(x) dx = V(D) \mathbb{E}_{x \sim p}[f(X)]$$

The Monte Carlo estimator approximates this expectation by drawing $N$ independent random samples $X_i$ from $p(x)$:
$$I \approx I_N = \frac{V(D)}{N} \sum_{i=1}^N f(X_i)$$

By the **Law of Large Numbers**, $I_N \xrightarrow{p} I$ as $N \to \infty$. By the **Central Limit Theorem**, the standard error of this estimate converges at a rate of $\mathcal{O}(1/\sqrt{N})$, completely independent of the dimension of the space $D$.

## Importance Sampling

The basic Monte Carlo estimator is highly inefficient if $f(x)$ is mostly zero except in small "important" regions. If we sample uniformly, most of our samples will hit areas where $f(x) \approx 0$, wasting computation.

**Importance Sampling** solves this by sampling from a different distribution $q(x)$ that more closely matches the shape of $f(x)$. To keep the estimate unbiased, we multiply the sample by an **importance weight** $p(x)/q(x)$:

$$I = \int f(x) \frac{p(x)}{q(x)} q(x) dx = \mathbb{E}_{x \sim q} \left[ f(X) \frac{p(X)}{q(X)} \right]$$

The estimator becomes:
$$I_N = \frac{1}{N} \sum_{i=1}^N f(X_i) \frac{p(X_i)}{q(X_i)}, \quad X_i \sim q$$

If $q(x)$ is chosen such that $q(x) \propto |f(x)p(x)|$, the variance of the estimator drops drastically.

## Rejection Sampling

Another way to sample from a difficult distribution $p(x)$ using an easy proposal distribution $q(x)$ is Rejection Sampling. 
Find a constant $M$ such that $p(x) \leq M q(x)$ for all $x$.
1. Sample $x \sim q$.
2. Sample $u \sim \text{Uniform}(0, 1)$.
3. If $u < \frac{p(x)}{M q(x)}$, accept $x$. Otherwise, reject it and try again.

## Visualization: Convergence Rate

```chart
{
  "type": "line",
  "xAxis": "N",
  "data": [
    {"N": 10, "error": 31.6},
    {"N": 100, "error": 10.0},
    {"N": 1000, "error": 3.16},
    {"N": 10000, "error": 1.0},
    {"N": 100000, "error": 0.31}
  ],
  "lines": [
    {"dataKey": "error", "stroke": "#ef4444", "name": "MC Standard Error (~ 1/√N)"}
  ]
}
```
*The error of Monte Carlo integration drops at a slow $1/\sqrt{N}$ rate. Getting 10x more accuracy requires 100x more samples. Variance reduction techniques like Importance Sampling are critical to lowering the absolute value of the error.*

## Related Topics

[[mcmc]] — when we can't even sample from $q(x)$ directly  
[[law-of-large-numbers]] — the theoretical guarantee of convergence  
[[variational-inference]] — an optimization alternative to MC integration
---

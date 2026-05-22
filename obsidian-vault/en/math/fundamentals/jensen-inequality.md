---
title: "Jensen's Inequality"
category: "Math Foundations"
order: 32
lang: "en"
slug: "jensen-inequality"
---

# Jensen's Inequality

Jensen's Inequality relates the value of a convex function of an integral to the integral of the convex function. It is a fundamental tool in probability, information theory, and machine learning.

## 1. Formal Statement

If $f$ is a convex function and $X$ is a random variable, then:
$$f(\mathbb{E}[X]) \leq \mathbb{E}[f(X)]$$
If $f$ is concave, the inequality is reversed:
$$f(\mathbb{E}[X]) \geq \mathbb{E}[f(X)]$$

## 2. Geometric Proof

The proof relies on the definition of convexity. For a convex function $f$, there exists a supporting line at the point $(\mathbb{E}[X], f(\mathbb{E}[X]))$. Let this line be $L(x) = a + bx$.
By convexity, $f(x) \geq L(x)$ for all $x$.
Since the line passes through $(\mathbb{E}[X], f(\mathbb{E}[X]))$, we have $L(\mathbb{E}[X]) = f(\mathbb{E}[X])$.
Taking expectations:
$$\mathbb{E}[f(X)] \geq \mathbb{E}[L(X)] = \mathbb{E}[a + bX] = a + b\mathbb{E}[X] = L(\mathbb{E}[X]) = f(\mathbb{E}[X])$$

## 3. Applications

### A. Information Theory
Jensen's inequality proves that [[shannon-entropy|Kullback-Leibler Divergence]] is always non-negative:
$$D_{KL}(P || Q) = \mathbb{E}_P[\log \frac{P(X)}{Q(X)}] = -\mathbb{E}_P[\log \frac{Q(X)}{P(X)}] \geq -\log \mathbb{E}_P[\frac{Q(X)}{P(X)}] = -\log 1 = 0$$

### B. Machine Learning: ELBO and EM-Algorithm
In variational inference, we maximize the **Evidence Lower Bound (ELBO)**. Using Jensen's on the log-likelihood:
$$\log p(x) = \log \int p(x, z) dz = \log \int q(z) \frac{p(x, z)}{q(z)} dz \geq \int q(z) \log \frac{p(x, z)}{q(z)} dz$$
The RHS is the ELBO. This inequality is the foundation of the **[[expectation-maximization|EM algorithm]]**.

## Related Topics
[[convexity]]
[[information-theory-basics]]
[[expectation-maximization]]

---
title: "Jensen's Inequality"
category: "Foundations"
order: 5
lang: "en"
slug: "jensens-inequality"
---

# Jensen's Inequality: The Geometry of Averages

Jensen's Inequality is a fundamental result in convex analysis that relates the value of a convex function of an integral to the integral of the convex function. In simpler terms, it describes how the "average of a function" compares to the "function of an average." It is a cornerstone of **Information Theory**, **Statistical Physics**, and **Deep Learning**.

## 1. The Mathematical Statement

For a convex function $f$ and a random variable $X$:
$$f(\mathbb{E}[X]) \leq \mathbb{E}[f(X)]$$

- **Convex Case**: The function of the average is less than or equal to the average of the function.
- **Concave Case**: If $f$ is concave (like $\ln(x)$), the inequality reverses: $f(\mathbb{E}[X]) \geq \mathbb{E}[f(X)]$.
- **Equality Condition**: Equality holds if and only if either $X$ is constant or $f$ is linear on the range of $X$.

## 2. Geometric Intuition

Imagine a bowl-shaped (convex) curve. Pick two points on the curve and draw a chord (a straight line) between them. Every point on the chord lies **above** the curve.
- The "average of the function" corresponds to a point on the chord.
- The "function of the average" corresponds to a point on the curve.
Since the chord is above the curve, the average of the function is greater.

## 3. Critical Applications

### A. Information Theory (Gibbs' Inequality)
Jensen's inequality is used to prove that the **Kullback-Leibler (KL) Divergence** is always non-negative:
$$D_{KL}(P \parallel Q) = \mathbb{E}_P \left[ \ln \frac{P(X)}{Q(X)} \right] \geq 0$$
By applying Jensen to the concave $\ln(x)$ function, we prove that the "distance" between any two probability distributions is at least zero, which is the foundation of all [[shannon-entropy|entropy]]-based loss functions in AI.

### B. Variational Inference and VAEs
In machine learning, we often cannot calculate the true log-likelihood of data $\ln P(x)$. Using Jensen's inequality on the logarithm, we derive the **Evidence Lower Bound (ELBO)**:
$$\ln P(x) = \ln \int P(x, z) dz \geq \mathbb{E}_{q(z)} \left[ \ln \frac{P(x, z)}{q(z)} \right]$$
Maximizing the ELBO (which is "easy") guarantees that we are pushing up the true likelihood (which is "hard").

### C. Finance: The Volatility Tax
Jensen's inequality explains why a portfolio that fluctuates wildly has a lower compound growth rate than a steady one, even if their arithmetic average returns are the same. Because the exponential growth function is non-linear, volatility "drags" down the realized returns.

## 4. Generalizations

- **Finite Version**: $f\left(\sum \lambda_i x_i\right) \leq \sum \lambda_i f(x_i)$ for $\sum \lambda_i = 1$.
- **Integral Version**: $f\left(\frac{1}{b-a} \int_a^b g(x) dx\right) \leq \frac{1}{b-a} \int_a^b f(g(x)) dx$.

## Related Topics

[[convexity]] — the property that makes the inequality work  
[[variational-autoencoders]] — primary application in deep learning  
[[shannon-entropy]] — derived using Jensen
---
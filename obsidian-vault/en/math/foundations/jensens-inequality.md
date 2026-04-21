---
title: "Jensen's Inequality"
category: "Foundations"
order: 23
lang: "en"
slug: "jensens-inequality"
---

# Jensen's Inequality

Jensen's inequality is a fundamental result relating the value of a **convex function** of an integral (or expectation) to the integral of the convex function itself. It is the mathematical cornerstone of Bayesian inference, information theory, and the training of generative models.

## The Statement

For a convex function $f$ and a random variable $X$:

$$f(\mathbb{E}[X]) \leq \mathbb{E}[f(X)]$$

Conversely, if $f$ is **concave** (like the logarithm function), the inequality is reversed:

$$f(\mathbb{E}[X]) \geq \mathbb{E}[f(X)]$$

## Visual Intuition

A convex function "bends upward." If you take two points on the curve, the chord connecting them lies *above* the curve. The expected value $\mathbb{E}[X]$ is a point between the values, and the average of the function $\mathbb{E}[f(X)]$ lies on the chord, while the function of the average $f(\mathbb{E}[X])$ lies on the curve.

## Critical Applications in AI

### 1. Variational Inference and the ELBO
The most famous use of Jensen's inequality in Machine Learning is deriving the **Evidence Lower Bound (ELBO)** for VAEs. We use the concavity of the log:
$$\log P(x) = \log \int P(x, z) dz = \log \mathbb{E}_q \left[ \frac{P(x, z)}{Q(z)} \right] \geq \mathbb{E}_q \left[ \log \frac{P(x, z)}{Q(z)} \right]$$
Without Jensen's inequality, we couldn't turn the difficult log-integral into a tractable expectation.

### 2. Information Theory (Gibbs' Inequality)
Jensen's inequality proves that the Kullback-Leibler (KL) divergence is always non-negative:
$$\mathbb{D}_{KL}(P \| Q) = \mathbb{E}_P [ -\log(Q/P) ] \geq -\log \mathbb{E}_P [ Q/P ] = -\log(1) = 0$$
This ensures that "information distance" makes physical sense.

### 3. EM Algorithm
The convergence of the [[expectation-maximization|EM algorithm]] is proven by showing that the M-step maximizes a lower bound created via Jensen's inequality.

## Visualization: Convexity

```chart
{
  "type": "line",
  "xAxis": "x",
  "data": [
    {"x": 0.5, "f_x": 0.25, "chord": 1.25},
    {"x": 1.0, "f_x": 1.00, "chord": 1.75},
    {"x": 1.5, "f_x": 2.25, "chord": 2.25},
    {"x": 2.0, "f_x": 4.00, "chord": 2.75}
  ],
  "lines": [
    {"dataKey": "f_x", "stroke": "#3b82f6", "name": "Convex Function f(x) = x²"},
    {"dataKey": "chord", "stroke": "#ef4444", "name": "Chord (E[f(X)])"}
  ]
}
```
*For any point between the edges, the red line (average of the function) is always higher than the blue line (function of the average), illustrating $f(\mathbb{E}[X]) \leq \mathbb{E}[f(X)]$.*

## Related Topics

[[variational-inference]] — uses Jensen to create the ELBO  
[[expectation-maximization]] — uses Jensen for convergence  
[[kullback-leibler-divergence]] — non-negativity proven by Jensen
---

---
title: "Multivariable Taylor Series"
category: "Math Foundations"
order: 58
lang: "en"
slug: "multivariable-taylor-series"
---

# Multivariable Taylor Series

The Taylor series provides a polynomial approximation of a sufficiently smooth function around a specific point. For functions of multiple variables $f: \mathbb{R}^n \to \mathbb{R}$, this involves gradients and [[positive-definite-matrices|Hessians]].

## The Taylor Expansion
For a point $x$ near $x_0$, let $\Delta x = x - x_0$. The expansion up to the second order is:
$$ f(x) \approx f(x_0) + \nabla f(x_0)^T \Delta x + \frac{1}{2} \Delta x^T \nabla^2 f(x_0) \Delta x $$
- $\nabla f(x_0) \in \mathbb{R}^n$ is the **Gradient** (vector of first partial derivatives).
- $\nabla^2 f(x_0) \in \mathbb{R}^{n \times n}$ is the **Hessian** (matrix of second partial derivatives).

## Hessian Properties and Optimization
By analyzing the second-order term $\frac{1}{2} \Delta x^T H \Delta x$ (where $H = \nabla^2 f(x_0)$), we can classify critical points (where $\nabla f(x_0) = 0$):
- **Local Minimum:** $H$ is [[positive-definite-matrices|Positive Definite]] ($H \succ 0$). All [[spectral-theory-operators|eigenvalues]] are strictly positive.
- **Local Maximum:** $H$ is Negative Definite ($H \prec 0$). All eigenvalues are strictly negative.
- **Saddle Point:** $H$ is Indefinite (has both positive and negative eigenvalues).

## Newton's Method
In numerical optimization, minimizing the second-order Taylor approximation leads to Newton's update step:
$$ \Delta x = -[\nabla^2 f(x_0)]^{-1} \nabla f(x_0) $$
While highly efficient for convex problems, it requires inverting the Hessian, which costs $O(n^3)$ operations. This motivates quasi-Newton methods like BFGS.

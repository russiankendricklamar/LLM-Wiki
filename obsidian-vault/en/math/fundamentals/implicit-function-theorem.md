---
title: Implicit & Inverse Function Theorems
category: Math Foundations
order: 76
lang: en
slug: implicit-function-theorem
---

These theorems are central to multivariable calculus and manifold theory.

### Inverse Function Theorem
If a function $f: \mathbb{R}^n \to \mathbb{R}^n$ is continuously differentiable and its [[coordinate-systems|Jacobian determinant]] is non-zero at a point $a$, then $f$ is locally invertible near $a$.

### Implicit Function Theorem
This theorem answers whether an equation $F(x, y) = 0$ can be locally solved as $y = f(x)$. 
If $F(a, b) = 0$ and the partial derivative $\frac{\partial F}{\partial y}$ at $(a, b)$ is non-zero (or invertible, for systems), then $y$ can be expressed as a function of $x$ in a neighborhood of $a$.

These provide the rigorous foundation for defining tangent spaces of implicit surfaces and constraints in [[convex-sets-functions|Optimization]].

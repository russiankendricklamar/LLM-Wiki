---
title: 'Optimization: Convex Sets & Functions'
category: Math Foundations
order: 77
lang: en
slug: convex-sets-functions
---

Convexity guarantees that any local minimum is a global minimum, a highly desirable property in optimization.

### Convex Sets
A set $C$ is **convex** if the line segment between any two points in $C$ lies entirely within $C$:
$\lambda x + (1-\lambda) y \in C \quad \forall \lambda \in [0, 1]$

### Convex Functions
A function $f: C \to \mathbb{R}$ is convex if:
$f(\lambda x + (1-\lambda) y) \leq \lambda f(x) + (1-\lambda) f(y)$
If the inequality is strict for $x \neq y$ and $\lambda \in (0, 1)$, $f$ is **strictly convex**.

Operations that preserve convexity include non-negative weighted sums, pointwise supremum, and composition with affine mappings. Convexity heavily utilizes [[implicit-function-theorem|Implicit Functions]] for constrained optimization.

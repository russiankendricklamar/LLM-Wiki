---
title: "Proximal Algorithms & ADMM"
category: "Advanced Analysis"
order: 105
lang: "en"
slug: "proximal-algorithms-admm"
---

# Proximal Algorithms & ADMM

## What Is It

Proximal algorithms are a class of optimization methods for solving non-smooth, constrained, or large-scale problems. They rely on the **proximal operator**, which generalizes the notion of a projection onto a set. The **Alternating Direction Method of Multipliers (ADMM)** is a powerful algorithm that combines the benefits of dual decomposition and augmented Lagrangian methods, allowing for the parallelizable solution of problems with separable objectives.

## The Proximal Operator

For a closed proper convex function $f$, the proximal operator $\text{prox}_{\lambda f}: \mathbb{R}^n \to \mathbb{R}^n$ is defined as:
$$\text{prox}_{\lambda f}(v) = \arg\min_x \left( f(x) + \frac{1}{2\lambda} \|x - v\|_2^2 \right)$$
where $\lambda > 0$ is a parameter. 
- If $f$ is the indicator function of a set $C$, the proximal operator is the projection $\Pi_C(v)$.
- If $f(x) = \|x\|_1$, the proximal operator is the **soft-thresholding** operator: $S_{\lambda}(v)_i = \text{sign}(v_i)\max(|v_i|-\lambda, 0)$.

## ADMM: Alternating Direction Method of Multipliers

ADMM solves problems of the form:
$$\min f(x) + g(z) \quad \text{subject to } Ax + Bz = c$$
where $f$ and $g$ are convex.

The **Augmented Lagrangian** is:
$$L_\rho(x, z, y) = f(x) + g(z) + y^T(Ax + Bz - c) + \frac{\rho}{2}\|Ax + Bz - c\|_2^2$$
where $y$ is the dual variable (Lagrange multiplier) and $\rho > 0$ is the penalty parameter.

The ADMM updates are:
1. $x^{k+1} = \arg\min_x L_\rho(x, z^k, y^k)$
2. $z^{k+1} = \arg\min_z L_\rho(x^{k+1}, z, y^k)$
3. $y^{k+1} = y^k + \rho(Ax^{k+1} + Bz^{k+1} - c)$

The "alternating" nature allows $x$ and $z$ to be updated sequentially, which is often much easier than joint optimization.

## Proximal Gradient Method

For problems of the form $\min f(x) + g(x)$ where $f$ is differentiable and $g$ is non-smooth (but has a known prox), the update is:
$$x^{k+1} = \text{prox}_{\lambda g}(x^k - \lambda \nabla f(x^k))$$
This is the foundation of algorithms like ISTA (Iterative Soft-Thresholding Algorithm) for Lasso.

## Convergence

ADMM is guaranteed to converge for convex functions $f$ and $g$ with a linear constraint. It converges to the optimal value at a rate of $O(1/k)$, though it can be much faster in practice. It is particularly robust for problems with large-scale data and non-differentiable regularizers.

## DERIVATION: Proximal Operator of the $L_1$ Norm

Let $f(x) = \|x\|_1$. The proximal operator is:
$$\text{prox}_{\lambda \|\cdot\|_1}(v) = \arg\min_x \left( \sum_i |x_i| + \frac{1}{2\lambda} \sum_i (x_i - v_i)^2 \right)$$
The objective is separable, so we minimize for each $x_i$:
$h(x_i) = |x_i| + \frac{1}{2\lambda} (x_i - v_i)^2$.
The subgradient condition is $0 \in \partial |x_i| + \frac{1}{\lambda}(x_i - v_i)$.
1. If $x_i > 0$: $1 + \frac{1}{\lambda}(x_i - v_i) = 0 \implies x_i = v_i - \lambda$ (requires $v_i > \lambda$).
2. If $x_i < 0$: $-1 + \frac{1}{\lambda}(x_i - v_i) = 0 \implies x_i = v_i + \lambda$ (requires $v_i < -\lambda$).
3. If $x_i = 0$: $|v_i| \le \lambda$.
This gives the soft-thresholding operator $S_\lambda(v)$.

## Related Topics
[[convex-optimization|Convex Optimization]] — the general class of problems  
[[coordinate-descent|Coordinate Descent]] — another splitting strategy  
[[lasso-regression|Lasso Regression]] — a primary use case  
[[dual-ascent|Dual Ascent]] — the dual decomposition origin  
[[fixed-point-theorems|Fixed Point Theorems]] — for proving convergence

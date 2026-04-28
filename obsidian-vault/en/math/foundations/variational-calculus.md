---
title: "Variational Calculus"
category: "Foundations"
order: 14
lang: "en"
slug: "/math/variational-calculus"
aliases:
  - Euler-Lagrange
---

# Variational Calculus

Variational calculus deals with finding functions that minimize or maximize specific quantities (**functionals**). It is the foundation of classical mechanics, physics-informed neural networks, and Bayesian inference.

## The Core Problem

We seek a function $y(x)$ that extremizes a functional $J[y]$:
$$J[y] = \int_a^b F(x, y(x), y'(x))\,dx$$
where $F$ is the **Lagrangian**. The necessary condition for an extremum is the **Euler–Lagrange Equation**:

$$\frac{\partial F}{\partial y} - \frac{d}{dx}\frac{\partial F}{\partial y'} = 0$$

## Classical Examples

1. **Brachistochrone:** The curve of fastest descent under gravity (revealed to be a cycloid).
2. **Geodesics:** The shortest paths on curved surfaces or manifolds.
3. **Hamilton's Principle:** In physics, systems follow trajectories that minimize the **Action** $S = \int (T - V) dt$.

## Variational Principles in AI

### 1. Physics-Informed Neural Networks (PINNs)
Neural networks are trained to minimize the residual of the Euler-Lagrange equation (or other PDEs), embedding physical laws directly into the loss function.

### 2. Variational Inference
Finding an approximating distribution $q_\theta(z)$ that minimizes the KL-divergence from the true posterior. This is equivalent to maximizing the **ELBO** (Evidence Lower Bound), a cornerstone of VAEs and Bayesian deep learning.

## Noether's Theorem

Links **symmetries to conservation laws**:
- Time invariance → **Energy** conservation.
- Translation invariance → **Momentum** conservation.
- Rotation invariance → **Angular Momentum** conservation.

## Related Topics
[[lagrangian-mechanics|Lagrangian Mechanics]] | [[variational-inference|Variational Inference]] | [[noether-theorem|Noether's Theorem]]

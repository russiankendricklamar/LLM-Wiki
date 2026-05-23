---
title: Semimartingales on Manifolds
category: Stochastic Calculus
order: 155
lang: en
slug: semimartingales-on-manifolds
---

# Semimartingales on Manifolds

Stochastic analysis on smooth manifolds blends [[differential-geometry]] with Itô calculus, allowing the definition of Brownian motion and general semimartingales on curved spaces.

## Stratonovich Calculus

When transforming coordinates on a manifold $M$, Itô integrals lack the standard chain rule due to the second-order term. Stratonovich integrals, denoted by $\circ dX_t$, obey classical calculus rules, making them geometrically intrinsic:
$$ f(X_t) - f(X_0) = \int_0^t \nabla f(X_s) \circ dX_s $$
A semimartingale $X$ on $M$ is typically driven by a Stratonovich SDE $dX_t = \sum_{i=1}^m V_i(X_t) \circ dW_t^i + V_0(X_t) dt$.

## Eells-Elworthy-Malliavin Construction

Brownian motion on a Riemannian manifold $(M, g)$ cannot be directly defined via independent increments. Instead, it is constructed using the orthonormal frame bundle $O(M)$. We solve a canonical SDE for the frame $U_t$:
$$ dU_t = \sum_{i=1}^d H_i(U_t) \circ dW_t^i $$
where $H_i$ are the standard horizontal vector fields corresponding to the Levi-Civita connection. The projection $X_t = \pi(U_t)$ down to $M$ is the Riemannian Brownian motion, whose generator is exactly $\frac{1}{2}\Delta_M$ (the Laplace-Beltrami operator).

## Stochastic Development and Parallel Transport

This construction effectively "rolls" the manifold $M$ along a standard Brownian path in $\mathbb{R}^d$ without slipping. The process $U_t$ acts as a stochastic parallel transport, an essential tool for defining covariant derivatives of stochastic flows and proving Bismut-type formulas in geometric [[stochastic-analysis]].

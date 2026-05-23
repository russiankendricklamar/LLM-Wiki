---
title: Backward Stochastic Differential Equations (BSDEs) & Nonlinear PDEs
category: Stochastic Calculus
order: 155
lang: en
slug: bsdes-nonlinear-pdes
---

# Backward Stochastic Differential Equations (BSDEs) & Nonlinear PDEs

BSDEs are differential equations where the terminal condition is given, and the solution must be adapted to the underlying filtration. They provide a probabilistic representation for solutions to quasi-linear and fully non-linear PDEs.

## Standard Form

A BSDE takes the form:
$$ -dY_t = f(t, X_t, Y_t, Z_t) dt - Z_t dW_t, \quad Y_T = \xi $$
The solution is a pair of adapted processes $(Y, Z)$. The process $Z_t dW_t$ acts as a martingale representation term to ensure that $Y_t$ remains measurable with respect to the past, $\mathcal{F}_t$.

## Nonlinear Feynman-Kac Formula

If the terminal condition $\xi = g(X_T)$ and $f$ depend on a forward diffusion $X_t$, then $Y_t = u(t, X_t)$ and $Z_t = \nabla u(t, X_t) \sigma(t, X_t)$, where $u(t,x)$ solves the semilinear PDE:
$$ \partial_t u + \mathcal{L}u + f(t, x, u, \nabla u \sigma) = 0, \quad u(T, x) = g(x) $$
This generalizes the classical [[feynman-kac-formula]] to non-linear source terms.

## Applications

BSDEs are ubiquitous in finance for pricing options in imperfect markets (e.g., borrowing constraints, default risk) where the pricing PDE is non-linear, linking deep [[mathematical-finance]] with PDE theory.

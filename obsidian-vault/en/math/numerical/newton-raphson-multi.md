---
title: Newton-Raphson (Multivariate)
category: Numerical Methods
order: 98
lang: en
slug: newton-raphson-multi
---

## Overview
The Newton-Raphson method extends to finding roots of systems of non-linear equations $\mathbf{F}(\mathbf{x}) = \mathbf{0}$.

## Iteration
Given a current guess $\mathbf{x}_n$, the next guess is:
$$ \mathbf{x}_{n+1} = \mathbf{x}_n - J^{-1}(\mathbf{x}_n) \mathbf{F}(\mathbf{x}_n) $$
where $J$ is the Jacobian matrix:
$$ J_{i,j} = \frac{\partial F_i}{\partial x_j} $$
This converges quadratically but requires computing and inverting the Jacobian.
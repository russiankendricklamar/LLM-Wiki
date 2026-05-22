---
title: Conjugate Gradient Method
category: Numerical Methods
order: 99
lang: en
slug: conjugate-gradient
---

## Overview
The Conjugate Gradient (CG) method is an algorithm for the numerical solution of systems of linear equations $Ax = b$, where $A$ is symmetric and positive-definite.

## Mechanism
Instead of following the local gradient like steepest descent, CG moves along a set of mutually conjugate directions with respect to $A$:
$$ p_k^T A p_j = 0 \quad \text{for } k \neq j $$
This guarantees exact convergence in at most $n$ steps (for an $n \times n$ matrix) in exact arithmetic.
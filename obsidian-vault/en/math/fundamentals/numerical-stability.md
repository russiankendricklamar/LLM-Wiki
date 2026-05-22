---
title: Numerical Stability & Floating Point Math
category: Math Foundations
order: 81
lang: en
slug: numerical-stability
---

Computers represent real numbers using discrete **floating-point** formats (like IEEE 754), leading to round-off errors.

### Machine Epsilon
**Machine epsilon** ($\epsilon$) is the upper bound on the relative error due to rounding. In double precision, $\epsilon \approx 10^{-16}$.

### Condition Number
A problem's **condition number** $\kappa$ measures how sensitive the output is to small changes in the input. For a matrix $A$:
$\kappa(A) = ||A|| \cdot ||A^{-1}||$
If $\kappa$ is large, the matrix is ill-conditioned, and small rounding errors can cause massive errors in the solution. 
Algorithms must be **numerically stable** to avoid error amplification, which is vital when working with [[sparse-matrices|Sparse Matrices]].

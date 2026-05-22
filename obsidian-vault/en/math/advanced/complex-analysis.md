---
title: 'Complex Analysis: Contour Integration'
category: Advanced Theory
order: 149
lang: en
slug: complex-analysis
---

Functions of a complex variable that are complex differentiable are called **analytic** or **holomorphic**. They satisfy the Cauchy-Riemann equations.

### Cauchy's Integral Formula
If $f(z)$ is holomorphic inside and on a simple closed contour $\gamma$, and $a$ is interior to $\gamma$:
$f^{(n)}(a) = \frac{n!}{2\pi i} \oint_\gamma \frac{f(z)}{(z-a)^{n+1}} dz$
This implies that a holomorphic function is infinitely differentiable and equal to its Taylor series.

### Residue Theorem
For a function meromorphic in a domain $D$ containing $\gamma$:
$\oint_\gamma f(z) dz = 2\pi i \sum_{k=1}^n \text{Res}(f, a_k)$
where $a_k$ are the isolated singularities inside $\gamma$. The residue $\text{Res}(f, a_k)$ is the coefficient $c_{-1}$ in the Laurent series expansion. This theorem powerfully evaluates improper real integrals.

---
title: 'Optimization: Dual Decomposition'
category: Advanced Math and Stats
order: 188
lang: en
slug: dual-decomposition
---

Dual decomposition breaks large, loosely coupled optimization problems into smaller independent subproblems.

### The Lagrangian Relaxation
Consider minimizing $f_1(x_1) + f_2(x_2)$ subject to a coupling constraint $A x_1 + B x_2 = c$. 
We form the partial Lagrangian by dualizing the coupling constraint:
$L(x_1, x_2, \lambda) = f_1(x_1) + f_2(x_2) + \lambda^T(A x_1 + B x_2 - c)$

### Iterative Updates
The Lagrangian separates into two independent minimization problems over $x_1$ and $x_2$ for a fixed $\lambda$. 
1. **Primal update (parallelizable):**
$x_1^{(k+1)} = \arg\min_{x_1} \left( f_1(x_1) + \lambda^{(k)T} A x_1 \right)$
$x_2^{(k+1)} = \arg\min_{x_2} \left( f_2(x_2) + \lambda^{(k)T} B x_2 \right)$
2. **Dual update (gradient ascent):**
$\lambda^{(k+1)} = \lambda^{(k)} + \alpha (A x_1^{(k+1)} + B x_2^{(k+1)} - c)$
While highly parallelizable, the dual subgradient method converges slowly and requires strict convexity for primal recovery.

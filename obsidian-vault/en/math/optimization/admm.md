---
title: 'Optimization: Alternating Direction Method of Multipliers (ADMM)'
category: Advanced Math and Stats
order: 189
lang: en
slug: admm
---

ADMM blends the decomposability of Dual Decomposition with the superior convergence properties of the Method of Multipliers.

### Augmented Lagrangian
To solve $\min f(x) + g(z)$ subject to $Ax + Bz = c$, ADMM uses the Augmented Lagrangian (which adds a quadratic penalty $\rho$):
$L_\rho(x, z, \lambda) = f(x) + g(z) + \lambda^T(Ax + Bz - c) + \frac{\rho}{2}\|Ax + Bz - c\|_2^2$
The quadratic term breaks separability, so ADMM alternates the minimization.

### ADMM Updates
1. $x$-update: $x^{(k+1)} = \arg\min_x L_\rho(x, z^{(k)}, \lambda^{(k)})$
2. $z$-update: $z^{(k+1)} = \arg\min_z L_\rho(x^{(k+1)}, z, \lambda^{(k)})$
3. Dual update: $\lambda^{(k+1)} = \lambda^{(k)} + \rho(Ax^{(k+1)} + Bz^{(k+1)} - c)$
ADMM converges for any $\rho > 0$ under mild conditions and is heavily used in distributed machine learning (e.g., consensus optimization, Lasso).

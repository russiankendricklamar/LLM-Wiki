---
title: 'Optimization: Interior Point Methods'
category: Advanced Math and Stats
order: 187
lang: en
slug: interior-point-methods
---

Interior Point Methods (IPMs) solve linear and non-linear convex optimization problems by traversing the interior of the feasible region, unlike the Simplex method which walks on the boundary.

### Barrier Functions
To solve $\min f(x)$ subject to $g_i(x) \le 0$, we construct an unconstrained barrier problem:
$B(x, \mu) = f(x) - \mu \sum_{i=1}^m \log(-g_i(x))$
As the barrier parameter $\mu \to 0$, the sequence of minimizers $x^*(\mu)$ (the "central path") converges to the optimal solution.

### Primal-Dual Methods
The most efficient IPMs update both primal variables $x$ and dual variables $\lambda$ simultaneously using a modified Newton-Raphson step on the Karush-Kuhn-Tucker (KKT) conditions:
$\begin{pmatrix} \nabla^2 f(x) & J_g(x)^T \\ \Lambda J_g(x) & G(x) \end{pmatrix} \begin{pmatrix} \Delta x \\ \Delta \lambda \end{pmatrix} = - \begin{pmatrix} \nabla f(x) + J_g(x)^T \lambda \\ \Lambda g(x) + \mu \mathbf{1} \end{pmatrix}$
where $\Lambda = \text{diag}(\lambda)$ and $G(x) = \text{diag}(g(x))$. This approach achieves polynomial time complexity for linear programming.

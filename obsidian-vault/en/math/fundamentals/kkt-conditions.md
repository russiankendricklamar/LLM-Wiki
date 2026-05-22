---
title: "Lagrange Multipliers & KKT Conditions"
category: "Math Foundations"
order: 56
lang: "en"
slug: "kkt-conditions"
---

# Lagrange Multipliers & KKT Conditions

The method of Lagrange multipliers is a strategy for finding the local maxima and minima of a function subject to equality constraints. The **Karush-Kuhn-Tucker (KKT)** conditions generalize this to include inequality constraints.

## Lagrange Multipliers (Equality Constraints)
To minimize $f(x)$ subject to $h_i(x) = 0$ for $i=1,\dots,p$:
We define the Lagrangian:
$$ \mathcal{L}(x, \nu) = f(x) + \sum_{i=1}^p \nu_i h_i(x) $$
At a local minimum $x^*$, there exist multipliers $\nu^*$ such that $\nabla_x \mathcal{L}(x^*, \nu^*) = 0$.

## KKT Conditions (Inequality Constraints)
To minimize $f(x)$ subject to $g_j(x) \le 0$ ($j=1,\dots,m$) and $h_i(x) = 0$ ($i=1,\dots,p$):
The generalized Lagrangian is:
$$ \mathcal{L}(x, \lambda, \nu) = f(x) + \sum_{j=1}^m \lambda_j g_j(x) + \sum_{i=1}^p \nu_i h_i(x) $$

If $x^*$ is a local minimum, under certain regularity conditions (e.g., Slater's condition), there exist unique multipliers $\lambda^*$ and $\nu^*$ satisfying the KKT conditions:
1. **Stationarity:** $\nabla f(x^*) + \sum \lambda_j^* \nabla g_j(x^*) + \sum \nu_i^* \nabla h_i(x^*) = 0$
2. **Primal Feasibility:** $g_j(x^*) \le 0$, $h_i(x^*) = 0$
3. **Dual Feasibility:** $\lambda_j^* \ge 0$
4. **Complementary Slackness:** $\lambda_j^* g_j(x^*) = 0$ for all $j$.

Complementary slackness implies that if an inequality constraint is not active ($g_j(x^*) < 0$), its corresponding multiplier must be zero ($\lambda_j^* = 0$). This is the foundation of Support Vector Machines (SVMs).

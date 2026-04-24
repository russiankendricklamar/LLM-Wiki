---
title: "Convex Optimization"
category: "Foundations"
order: 17
lang: "en"
slug: "convex-optimization"
growth: "seedling"
---

# Convex Optimization

Convex optimization is the study of minimizing convex functions over convex sets. It is a highly tractable field where local minima are guaranteed to be global minima, enabling efficient algorithms with provable convergence.

## Convex Sets and Functions

A set $C \subseteq \mathbb{R}^n$ is convex if for any $x, y \in C$ and $\theta \in [0, 1]$:
$$\theta x + (1-\theta) y \in C.$$

A function $f: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}$ is convex if:
$$f(\theta x + (1-\theta)y) \leq \theta f(x) + (1-\theta)f(y)$$
for all $x, y$ and $\theta \in [0, 1]$.

## Subdifferential

For non-smooth convex functions, the **subgradient** $g$ at $x$ satisfies:
$$f(y) \geq f(x) + \langle g, y - x \rangle \quad \forall y$$

The set of all subgradients is the **subdifferential** $\partial f(x)$. A point $x^*$ is a global minimizer if and only if $0 \in \partial f(x^*)$.

## Duality and KKT Conditions

The **Lagrangian** of a constrained problem combines the objective and constraints using multipliers:
$$L(x, \lambda, \nu) = f_0(x) + \sum \lambda_i f_i(x) + \sum \nu_j h_j(x)$$

The **dual function** $g(\lambda, \nu) = \inf_x L(x, \lambda, \nu)$ provides a lower bound on the optimal value. **Strong duality** holds (Primal = Dual) under Slater's condition.

**KKT Conditions** (necessary and sufficient for convex problems):
1. Stationarity ($0 \in \partial_x L$)
2. Primal feasibility
3. Dual feasibility ($\lambda \geq 0$)
4. Complementary slackness ($\lambda_i f_i = 0$)

## Conjugate Function

The **convex conjugate** (Legendre-Fenchel transform) is defined as:
$$f^*(y) = \sup_x \left(\langle y, x \rangle - f(x)\right)$$
$f^*$ is always convex, and $f^{**} = f$ for closed convex functions.

## Algorithms

- **Gradient Descent**: $x^+ = x - \eta \nabla f(x)$. Converges at $O(1/k)$ for smooth functions.
- **Proximal Gradient**: $x^+ = \mathrm{prox}_{t g}(x - t \nabla f(x))$, used for $f(x) + g(x)$ where $g$ is non-smooth (e.g., LASSO).
- **ADMM**: Decomposes complex problems into smaller, proximal steps, ideal for distributed optimization.

## Applications

- **LASSO**: Sparse regression using $\ell_1$ penalty.
- **Support Vector Machines (SVM)**: Max-margin classification as a quadratic program.
- **Portfolio Optimization**: Markowitz mean-variance optimization.

## Related Topics

- [[functional-analysis]] — the infinite-dimensional setting
- stochastic-processes — optimization in stochastic environments
- [[high-dimensional-statistics]] — sparse recovery and LASSO

---
title: "Convex Analysis"
category: "Mathematical Foundations"
order: 10
lang: "en"
slug: "convex-analysis"
growth: "seedling"
---

Convex analysis is a foundational branch of mathematics unifying optimization, geometry, and functional analysis. Its theorems provide the theoretical bedrock for applications in finance, machine learning, and control theory.

## Convex sets and functions

A set $C \subseteq \mathbb{R}^n$ is convex if for any $x, y \in C$ and $\lambda \in [0,1]$:
$$\lambda x + (1-\lambda)y \in C$$

A function $f: C \to \mathbb{R}$ on a convex set $C$ is convex if:
$$f(\lambda x + (1-\lambda)y) \leq \lambda f(x) + (1-\lambda)f(y) \quad \forall x, y \in C, \, \lambda \in [0,1]$$

An equivalent characterization uses the epigraph: $f$ is convex if and only if $\text{epi}(f) = \{(x,t) : x \in C, \, f(x) \leq t\}$ is a convex set in $\mathbb{R}^{n+1}$.

Convexity ensures that any local minimum is a global minimum — a property essential for reliable optimization.

## The subdifferential

For a convex function $f$, the subdifferential at $x$ is the set:
$$\partial f(x) = \left\{ g \in \mathbb{R}^n : f(y) \geq f(x) + \langle g, y - x \rangle \quad \forall y \in \text{dom}(f) \right\}$$

Each element $g \in \partial f(x)$ is a subgradient. Geometrically, subgradients are normals to supporting hyperplanes of the graph of $f$ at $(x, f(x))$.

Key properties:
- $\partial f(x)$ is nonempty, convex, and compact for a convex function
- At points of differentiability: $\partial f(x) = \{\nabla f(x)\}$
- Optimality condition: $x^*$ minimizes $f$ if and only if $0 \in \partial f(x^*)$

The subdifferential generalizes gradients to non-smooth functions. For instance, for $f(x) = |x|$ at $x = 0$: $\partial f(0) = [-1, 1]$, an entire interval of subgradients.

## Conjugate functions and duality

The conjugate (dual) function in the Legendre-Fenchel sense is:
$$f^*(y) = \sup_{x \in \mathbb{R}^n} \left\{ \langle x, y \rangle - f(x) \right\}$$

The conjugate is always convex, even if $f$ is non-convex. The Fenchel-Moreau theorem states that for a proper, lower-semicontinuous convex function:
$$f^{**}(x) = f(x)$$

This makes conjugation an involution on the class of convex functions.

Conjugacy naturally induces duality in optimization. For the primal problem:
$$\min_x \{ f(x) + g(Ax) \}$$

the dual problem is:
$$\max_y \{ -f^*(A^T y) - g^*(-y) \}$$

Under Slater's condition — existence of a point in the relative interior of the domain — strong duality holds: the optimal values of primal and dual coincide.

## KKT conditions and optimality

For the constrained optimization problem:
$$\min_{x} f(x) \quad \text{s.t.} \quad g_i(x) \leq 0, \, h_j(x) = 0$$

where $f$ and $g_i$ are convex, form the Lagrangian:
$$L(x, \mu, \lambda) = f(x) + \sum_i \mu_i g_i(x) + \sum_j \lambda_j h_j(x)$$

The Karush-Kuhn-Tucker (KKT) conditions are necessary for local optimality and sufficient for global optimality in the convex case:

1. **Stationarity**: $0 \in \partial f(x^*) + \sum_i \mu_i^* \partial g_i(x^*) + \sum_j \lambda_j^* \partial h_j(x^*)$
2. **Complementary slackness**: $\mu_i^* g_i(x^*) = 0$ for all $i$
3. **Primal feasibility**: $g_i(x^*) \leq 0, \, h_j(x^*) = 0$
4. **Dual feasibility**: $\mu_i^* \geq 0$

These conditions elegantly unify first-order optimality with feasibility, enabling duality-based algorithms.

## Proximal operators and algorithms

The proximal operator of $f$ with stepsize $\alpha > 0$ is:
$$\text{prox}_{\alpha f}(x) = \arg\min_y \left\{ f(y) + \frac{1}{2\alpha}\|y - x\|^2 \right\}$$

Proximal [[convex-optimization|gradient descent]] applies to composite problems $\min_x f(x) + g(x)$ where $f$ is smooth and $g$ may be non-smooth:
$$x_{k+1} = \text{prox}_{\alpha g}(x_k - \alpha \nabla f(x_k))$$

This method is invaluable for problems with L1-regularization ([[convex-optimization-trading]]), nuclear norms, or other non-smooth penalties. The proximal operator decouples handling of the smooth and non-smooth parts, enabling efficient first-order algorithms.

## Applications across domains

Convex analysis permeates modern applied modeling:

- **LASSO and sparsification**: L1-penalty $\lambda\|w\|_1$ enforces sparsity through the subdifferential
- **Portfolio optimization** ([[markowitz-mean-variance]]): quadratic program with linear constraints; convexity guarantees global optimality
- **Optimal transport** ([[optimal-transport|Wasserstein duality]]): Kantorovich's dual formulation reveals structure of transport plans
- **Variational methods in control** ([[stochastic-control]]): maximum principle via conjugate variables
- **Information geometry** ([[information-geometry]]): divergences arise as conjugate functions

Beyond these anchors, convex analysis underpins automatic differentiation ([[automatic-differentiation]]), enabling reverse-mode computation of subgradients. It also appears in the foundations of probability ([[kolmogorov-probability-axioms]]) through duality in risk measures.

Convexity is not merely mathematical convenience but a fundamental organizing principle: it ensures algorithms terminate, duality bounds yield certificates, and solutions are robust to perturbation. This is why convex optimization remains the gold standard in high-stakes applications.

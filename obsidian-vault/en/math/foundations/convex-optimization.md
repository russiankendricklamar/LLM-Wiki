---
title: "Convex Optimization"
category: "Foundations"
order: 17
lang: "en"
slug: "convex-optimization"
growth: "seedling"
---

# Convex Optimization

Convex optimization is a subfield of mathematical optimization that focuses on minimizing convex functions over convex sets. It is an exceptionally productive area where local minima coincide with global ones, allowing for the development of efficient algorithms with provable convergence guarantees. From machine learning to stochastic control, convex optimization permeates modern engineering.

## Convex Sets and Functions

A set $C \subseteq \mathbb{R}^n$ is convex if for any $x, y \in C$ and $\theta \in [0, 1]$:
$$\theta x + (1-\theta) y \in C.$$

In other words, any line segment connecting two points in the set lies entirely within the set. Convex sets inherit noble properties: the intersection of convex sets is convex, as is the convex combination of a finite number of points.

A function $f: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}$ is convex if:
$$f(\theta x + (1-\theta)y) \leq \theta f(x) + (1-\theta)f(y)$$
for all $x, y$ in its domain and $\theta \in [0, 1]$. This is **Jensen's inequality**, which geometrically states that the function's graph lies above any tangent line (the epigraph is convex).

The **epigraph** of a function is defined as:
$$\mathrm{epi}(f) = \{(x, t) \in \mathbb{R}^n \times \mathbb{R} : f(x) \leq t\}.$$
A function is convex if and only if its epigraph is a convex set. This key observation allows for the transformation of functional questions into geometric ones.

**Convexity-preserving operations:**
- Non-negative weighted sums of convex functions are convex.
- The supremum of a family of convex functions is convex: $f(x) = \sup_i f_i(x)$.
- Composition: if $f$ is convex and non-decreasing in each argument, and $g_i$ are convex, then $f(g_1(x), \ldots, g_m(x))$ is convex.
- Perspective transformation: $(x, t) \mapsto tf(x/t)$ preserves convexity.

These closure properties allow for the synthesis of new convex functions from known building blocks.

## Subdifferential

For smooth functions, the gradient $\nabla f(x)$ encodes the direction of steepest ascent. However, convex functions are often non-smooth (e.g., $|x|$ at zero). The subdifferential generalizes the gradient to the non-smooth case.

A vector $g \in \mathbb{R}^n$ is called a **subgradient** of function $f$ at point $x$ (denoted $g \in \partial f(x)$) if:
$$f(y) \geq f(x) + \langle g, y - x \rangle$$
for all $y \in \mathbb{R}^n$.

Geometrically, a subgradient defines a supporting hyperplane to the epigraph at point $(x, f(x))$. The **subdifferential** $\partial f(x)$ is the set of all subgradients at point $x$. For a convex function, the subdifferential is always non-empty (within its domain), convex, and closed.

**First-order optimality condition:** $x^*$ minimizes $f$ if and only if:
$$0 \in \partial f(x^*).$$

This is a direct generalization of the $\nabla f(x^*) = 0$ condition for smooth functions. For example, $|x|$ has $\partial |x| = \{1\}$ for $x > 0$, $\partial |x| = \{-1\}$ for $x < 0$, and $\partial |0| = [-1, 1]$ — the entire unit mass at zero.

## Duality and KKT Conditions

Consider a standard optimization problem:
$$\min_x f_0(x) \quad \text{s.t.} \quad f_i(x) \leq 0, \, i = 1, \ldots, m; \quad h_j(x) = 0, \, j = 1, \ldots, p,$$
where $f_0, f_i$ are convex and $h_j$ are affine.

The **Lagrangian** is defined as:
$$L(x, \lambda, \nu) = f_0(x) + \sum_{i=1}^m \lambda_i f_i(x) + \sum_{j=1}^p \nu_j h_j(x),$$
where $\lambda_i, \nu_j$ are Lagrange multipliers.

The **dual function** is defined as:
$$g(\lambda, \nu) = \inf_x L(x, \lambda, \nu).$$

By construction, for any feasible $x$ and $\lambda \geq 0, \nu$, we have $g(\lambda, \nu) \leq f_0(x^*)$. This provides a lower bound on the optimal value.

The **dual problem** maximizes this bound:
$$\max_{\lambda, \nu} g(\lambda, \nu) \quad \text{s.t.} \quad \lambda \geq 0.$$

**Weak duality** guarantees $g(\lambda^*, \nu^*) \leq f_0(x^*)$ for any feasible $x^*$.

**Strong duality** claims equality: $\max_{\lambda, \nu} g(\lambda, \nu) = f_0(x^*)$. This holds if the primal problem is convex and **Slater's condition** is satisfied: there exists a point $\tilde{x}$ such that $f_i(\tilde{x}) < 0$ for all $i$ and $h_j(\tilde{x}) = 0$ for all $j$ (constraint qualification).

The **KKT conditions** (Karush–Kuhn–Tucker) unify the first-order necessary conditions for convex problems:

1. **Stationarity:** $\nabla_x L(x^*, \lambda^*, \nu^*) = 0$ (or $0 \in \partial_x L$ for non-smooth $f_i$).
2. **Primal feasibility:** $f_i(x^*) \leq 0$, $h_j(x^*) = 0$.
3. **Dual feasibility:** $\lambda^*_i \geq 0$.
4. **Complementary slackness:** $\lambda^*_i f_i(x^*) = 0$ for all $i$.

Under convexity and strong duality, the KKT conditions are both necessary and sufficient for optimality.

## Conjugate Function

The **conjugate function** (or Legendre–Fenchel transform) provides a dual description of a function:
$$f^*(y) = \sup_x \left(\langle y, x \rangle - f(x)\right).$$

The conjugate function is always convex, even if the original $f$ is not. Double conjugation $f^{**}$ recovers $f$ if $f$ is convex and closed (proper).

**Fenchel's inequality** links a function and its conjugate:
$$\langle y, x \rangle \leq f(x) + f^*(y).$$

This inequality becomes an equality at $y \in \partial f(x)$ (or equivalently $x \in \partial f^*(y)$).

For example, if $f(x) = \frac{1}{2}\|x\|^2$, then $f^*(y) = \frac{1}{2}\|y\|^2$ (self-conjugacy). For a norm $f(x) = \|x\|$, the conjugate is $f^*(y) = 0$ if $\|y\|_* \leq 1$ and $+\infty$ otherwise (indicator of the dual ball).

## Proximal Operator

The **proximal operator** of function $f$ at point $v$ is defined as:
$$\mathrm{prox}_f(v) = \arg\min_x \left(f(x) + \frac{1}{2}\|x - v\|^2\right).$$

This is a penalized minimization that shifts $v$ towards the minimizer of $f$ with quadratic regularization. Under the condition that $f$ is proper, the operator is unique and Lipschitz.

**Examples:**
- $\mathrm{prox}_{\lambda \|\cdot\|_1}(v)_i = \mathrm{sign}(v_i) \max(|v_i| - \lambda, 0)$ (soft thresholding).
- $\mathrm{prox}_{\lambda \|\cdot\|_2}(v) = \left(1 - \frac{\lambda}{\|v\|}\right)_+ v$ (norm-based scaling).
- $\mathrm{prox}_{\iota_C}(v) = \arg\min_{x \in C} \|x - v\|^2$ (projection onto $C$).

The proximal operator plays a central role in designing algorithms for non-smooth problems.

## Algorithms

### Gradient Descent

For a smooth convex function $f$ with an $L$-Lipschitz gradient, the iteration:
$$x^{(k+1)} = x^{(k)} - \frac{1}{L} \nabla f(x^{(k)})$$
converges at a rate of $O(1/k)$: $f(x^{(k)}) - f^* \leq O(1/k)$.

If $f$ is additionally $\mu$-strongly convex (i.e., $f(x) \geq f(x^*) + \nabla f(x^*)(x - x^*) + \frac{\mu}{2}\|x - x^*\|^2$), the convergence is linear with rate $\kappa = L/\mu$ (condition number): $\|x^{(k)} - x^*\|^2 \leq (1 - \mu/L)^k \|x^{(0)} - x^*\|^2$.

### Proximal Gradient (ISTA/FISTA)

For problems of the form $\min_x f(x) + g(x)$, where $f$ is smooth and $g$ is non-smooth but proximally solvable:
$$x^{(k+1)} = \mathrm{prox}_{t g}(x^{(k)} - t \nabla f(x^{(k)})).$$

**FISTA** (Fast Iterative Shrinkage-Thresholding Algorithm) adds momentum:
$$y^{(k)} = x^{(k)} + \frac{t^{(k)} - 1}{t^{(k+1)}}(x^{(k)} - x^{(k-1)}), \quad x^{(k+1)} = \mathrm{prox}_{t g}(y^{(k)} - t \nabla f(y^{(k)})).$$
This achieves an $O(1/k^2)$ convergence rate.

### ADMM

The **Alternating Direction Method of Multipliers** (ADMM) solves problems of the form:
$$\min_{x, z} f(x) + g(z) \quad \text{s.t.} \quad Ax + Bz = c.$$

Iterations:
$$x^{(k+1)} = \arg\min_x \left(f(x) + \frac{\rho}{2}\|Ax + Bz^{(k)} - c + y^{(k)}/\rho\|^2\right),$$
$$z^{(k+1)} = \arg\min_z \left(g(z) + \frac{\rho}{2}\|Ax^{(k+1)} + Bz - c + y^{(k)}/\rho\|^2\right),$$
$$y^{(k+1)} = y^{(k)} + \rho(Ax^{(k+1)} + Bz^{(k+1)} - c).$$

ADMM decomposes the problem into subproblems and is well-suited for distributed and large-scale applications.

## Convergence Rates

Convergence analysis of optimization methods is often expressed in terms of the number of iterations required to reach $\varepsilon$-optimality ($f(x^{(k)}) - f^* \leq \varepsilon$):

- **Gradient Descent (convex, smooth):** $O(1/\varepsilon)$ iterations.
- **Nesterov Accelerated Method:** $O(1/\sqrt{\varepsilon})$ iterations.
- **Strongly Convex Smooth:** linear rate $O(\log(1/\varepsilon))$.
- **Proximal Method:** $O(1/\varepsilon)$ without smoothness.

These rates are often interpreted as lower complexity bounds for function classes, confirming the optimality of the methods.

## Applications

**LASSO** (Least Absolute Shrinkage and Selection Operator):
$$\min_\beta \|y - X\beta\|_2^2 + \lambda \|\beta\|_1.$$
The $\|\cdot\|_1$ penalty induces sparsity. It is solved using proximal gradient with soft thresholding.

**SVM (Support Vector Machine):** The dual formulation of the convex quadratic programming problem allows for the use of the kernel trick for non-linear classification.

**Portfolio Optimization:** Markowitz minimizes risk (variance) for a given expected return — a convex problem (and strongly convex if the covariance matrix is positive definite).

**Stochastic Control:** The Bellman equation is often linearized around a point of linearization as a convex problem, allowing for approximate solutions to HJB equations through convex optimization.

---

**Key relations:** [[variational-calculus]], functional-analysis, [[m-estimators]], high-dimensional-statistics, [[stochastic-control]], [[information-theory]]

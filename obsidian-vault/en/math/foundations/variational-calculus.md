---
title: "Calculus of Variations"
category: "Mathematical Foundations"
order: 14
lang: "en"
slug: "/math/variational-calculus"
growth: "seedling"
---

# Calculus of Variations

Calculus of variations is the mathematical framework for finding functions that extremize (minimize or maximize) functionals—mappings from function spaces to real numbers. It underpins mechanics, optimization, and differential geometry.

## The Fundamental Problem

The central object is a **functional**:

$$J[y] = \int_a^b F(x, y(x), y'(x))\,dx$$

where $F$ is the **Lagrangian**, $y(x)$ is the unknown function, and $y' = dy/dx$. We seek the function $y$ that extremizes $J$ subject to fixed boundary conditions $y(a) = y_0$ and $y(b) = y_1$.

## Euler–Lagrange Equation

The cornerstone result is the **Euler–Lagrange equation**:

$$\frac{\partial F}{\partial y} - \frac{d}{dx}\frac{\partial F}{\partial y'} = 0$$

This is a necessary condition for $y$ to be an extremizer. Expanding the total derivative:

$$\frac{\partial F}{\partial y} - \frac{\partial^2 F}{\partial x \partial y'} - \frac{\partial^2 F}{\partial y \partial y'} y' - \frac{\partial^2 F}{\partial y'^2} y'' = 0$$

The equation typically becomes a second-order ODE whose general solution has two arbitrary constants, fixed by boundary conditions.

### Derivation via First Variation

Consider a perturbation $y(x) + \epsilon \eta(x)$ where $\eta(a) = \eta(b) = 0$ (vanishing boundary perturbations). The **first variation** is:

$$\delta J = \frac{d}{d\epsilon}\Big|_{\epsilon=0} J[y + \epsilon\eta] = \int_a^b \left(\frac{\partial F}{\partial y}\eta + \frac{\partial F}{\partial y'}\eta'\right)\,dx$$

Integrating the second term by parts and using $\eta(a) = \eta(b) = 0$:

$$\delta J = \int_a^b \left(\frac{\partial F}{\partial y} - \frac{d}{dx}\frac{\partial F}{\partial y'}\right)\eta\,dx$$

For $\delta J = 0$ for all admissible $\eta$, the integrand must vanish, yielding the Euler–Lagrange equation.

## Natural Boundary Conditions

When boundary values are not fixed—e.g., $y(b)$ is free—the boundary terms from integration by parts no longer vanish identically. Instead, we obtain the **natural boundary condition**:

$$\frac{\partial F}{\partial y'}\bigg|_{x=b} = 0$$

Similarly, if $y(a)$ is free, $\frac{\partial F}{\partial y'}\big|_{x=a} = 0$. These emerge naturally from the variational principle without explicit assumption.

## Second Variation and Legendre Condition

To distinguish minima from maxima and saddle points, examine the **second variation**:

$$\delta^2 J = \frac{1}{2}\int_a^b \left(P(x)\eta^2 + Q(x)\eta'^2\right)\,dx$$

where $P = \frac{\partial^2 F}{\partial y^2} - \frac{d}{dx}\frac{\partial^2 F}{\partial y \partial y'}$ and $Q = \frac{\partial^2 F}{\partial y'^2}$.

For a minimum, we require $\delta^2 J \geq 0$ for all $\eta$. A **sufficient condition** is the **Legendre condition**:

$$\frac{\partial^2 F}{\partial y'^2} > 0 \quad \text{(or } < 0 \text{ for a maximum)}$$

This ensures the quadratic form is positive-definite (in the strong sense, combined with conditions on $P$).

## The Beltrami Identity

When $F$ has no explicit dependence on $x$—$F = F(y, y')$—a useful conservation law emerges. The **Beltrami identity** states:

$$F - y'\frac{\partial F}{\partial y'} = C \quad \text{(constant along extremals)}$$

This reduces the Euler–Lagrange equation from second to first order, simplifying computation significantly.

## Classical Problems

### Brachistochrone

The curve of fastest descent under gravity. Here $F = \sqrt{\frac{1+y'^2}{2gy}}$, and the solution is a **cycloid**—the curve traced by a point on a rolling circle.

### Geodesics

Shortest paths on a Riemannian [[manifold-learning|manifold]]. In flat space, $F = \sqrt{1 + y'^2}$ yields $y'' = 0$ (straight lines). On a curved surface, the Euler–Lagrange equations define geodesic differential equations.

### Minimal Surfaces

Surfaces of minimum area spanned by a closed curve. The Lagrangian is $F = \sqrt{1 + u_x^2 + u_y^2}$ (in the two-dimensional case); solutions satisfy the **minimal surface equation**.

### Isoperimetric Problem

Maximize area enclosed by a curve of fixed perimeter. Here, $J[y]$ is area and $G[y]$ is arc length, and we impose a constraint: $G[y] = L$. Using **Lagrange multipliers**, we incorporate the constraint into an augmented functional:

$$\tilde{J}[y] = J[y] - \lambda G[y]$$

and solve the Euler–Lagrange equations for the augmented functional.

## Hamilton's Principle and Mechanics

In classical mechanics, the action is:

$$S[q] = \int_{t_1}^{t_2} L(t, q(t), \dot{q}(t))\,dt$$

where $L = T - V$ is the Lagrangian (kinetic minus potential energy). **Hamilton's principle** states that the true trajectory extremizes $S$. The Euler–Lagrange equations become **Lagrange's equations of motion**:

$$\frac{d}{dt}\frac{\partial L}{\partial \dot{q}_i} - \frac{\partial L}{\partial q_i} = Q_i$$

where $Q_i$ are generalized forces from non-conservative sources.

## Hamiltonian Formulation

The Lagrangian $L(q, \dot{q})$ can be transformed to a Hamiltonian via **Legendre transformation**. Define the **canonical momentum**:

$$p_i = \frac{\partial L}{\partial \dot{q}_i}$$

The **Hamiltonian** is:

$$H(q, p) = \sum_i p_i \dot{q}_i - L(q, \dot{q})$$

expressed in terms of $q$ and $p$. The equations of motion become **canonical equations**:

$$\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i}$$

This formalism is manifestly symplectic and underpins [[quantization]] and statistical mechanics.

## Noether's Theorem

**Noether's theorem** links **symmetries to conservation laws**. If the Lagrangian is invariant under a smooth family of transformations (e.g., time translation, rotation, gauge transformation), then a corresponding quantity is conserved.

Precisely: if $L(t, q(t), \dot{q}(t))$ is invariant under $q \to q + \epsilon \phi(q)$, then:

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}} \cdot \phi(q)\right) = 0$$

Examples:
- **Spatial translation invariance** → conservation of **momentum**
- **Rotation invariance** → conservation of **angular momentum**
- **Time translation invariance** → conservation of **energy**

This profound principle connects geometry and physics at a fundamental level.

## Direct Methods and Existence

Rather than solve the Euler–Lagrange equation explicitly, **direct methods** establish existence of minimizers by minimizing $J$ over a suitable function space (typically a [[sobolev-spaces|Sobolev space]]).

A key result: if $F$ is **lower semicontinuous** and **coercive** (grows fast enough as $|y'| \to \infty$), then $J$ attains its minimum on a weakly compact subset via the **Bolzano–Weierstrass theorem** in reflexive spaces.

This approach extends to non-smooth Lagrangians and handles cases where classical extremals don't exist.

## Connections to Optimal Control

**Pontryagin's maximum principle** extends calculus of variations to optimal control. Given:

$$J[u] = \int_0^T L(t, x(t), u(t))\,dt$$

subject to $\dot{x} = f(t, x, u)$, the optimal control satisfies a necessary condition involving the **costate** $\lambda(t)$:

$$H(t, x^*, u^*, \lambda^*) = \max_u H(t, x^*, u, \lambda^*)$$

where $H = L + \lambda \cdot f$ is the Hamiltonian. The adjoint equations for $\lambda$ mirror the canonical equations.

## Convex Duality

[[convex-analysis|Convex duality]] provides another lens: the conjugate functional (Legendre-Fenchel transform) relates the primal problem (minimizing $J$) to a dual problem. Weak and strong duality results characterize when primal and dual objectives coincide, with applications to relaxation and approximation.

## See Also

- [[functional-analysis]] — infinite-dimensional analysis framework
- [[lagrangian-mechanics]] — applications to classical mechanics
- [[hamiltonian-mechanics]] — alternative formulation of dynamics
- [[noether-theorem]] — symmetry and conservation laws
- [[sobolev-spaces]] — function spaces for existence theory
- [[convex-analysis]] — duality and optimization
- [[stochastic-control]] — stochastic generalization

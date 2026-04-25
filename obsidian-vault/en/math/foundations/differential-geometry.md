---
title: "Differential Geometry"
category: "Mathematical Foundations"
order: 13
lang: "en"
slug: "/math/differential-geometry"
growth: "seedling"
---

# Differential Geometry

Differential geometry is the study of smooth manifolds equipped with geometric structures—principally Riemannian metrics—and the tools that measure curvature, parallel transport, and geodesic flow. It bridges analysis, topology, and algebra, providing the mathematical framework for Einstein's general relativity, information theory, and modern machine learning.

## Smooth Manifolds and Charts

A **smooth [[manifold-learning|manifold]]** $M$ of dimension $n$ is a topological space locally diffeomorphic to $\mathbb{R}^n$. We formalize this via an **atlas**: a collection of **charts** $\{(U_\alpha, \phi_\alpha)\}$ where $U_\alpha \subseteq M$ is an open set and $\phi_\alpha: U_\alpha \to \mathbb{R}^n$ is a homeomorphism. On overlaps $U_\alpha \cap U_\beta$, the transition maps $\phi_\beta \circ \phi_\alpha^{-1}$ must be smooth (infinitely differentiable).

**Local coordinates** $(x^1, \ldots, x^n)$ on a chart $U$ provide a way to express functions, vector fields, and differential forms. A smooth map $f: M \to N$ between manifolds has a differential: the **pushforward** or **Jacobian** $df_p: T_p M \to T_{f(p)} N$.

## Tangent and Cotangent Spaces

At each point $p \in M$, the **tangent space** $T_p M$ is an $n$-dimensional real vector space of equivalence classes of curves through $p$. In local coordinates $(x^i)$, it admits a basis $\{\partial_1|_p, \ldots, \partial_n|_p\}$ where $\partial_i|_p$ represents the directional derivative along the $i$-th coordinate axis.

The **cotangent space** $T_p^* M$ is the dual space; its elements are linear functionals on $T_p M$, called **covectors** or **1-forms**. It has a natural basis $\{dx^1|_p, \ldots, dx^n|_p\}$ dual to the coordinate basis: $dx^i(\partial_j) = \delta^i_j$.

The **tangent bundle** is $TM = \bigsqcup_{p \in M} T_p M$, and similarly for the **cotangent bundle** $T^*M$. A vector field $X$ on $M$ assigns to each $p$ a tangent vector $X_p \in T_p M$, smoothly; in coordinates, $X = X^i(x) \partial_i$.

## Riemannian Metrics

A **Riemannian metric** on $M$ is a smooth, symmetric, positive-definite tensor field $g$ that assigns to each $p \in M$ an inner product $g_p: T_p M \times T_p M \to \mathbb{R}$.

In local coordinates, the metric is expressed as:

$$g = g_{ij}(x) \, dx^i \otimes dx^j$$

where the **metric components** $g_{ij}(x)$ satisfy $g_{ij} = g_{ji}$ and the matrix $(g_{ij})$ is positive definite.

For tangent vectors $X = X^i \partial_i$ and $Y = Y^j \partial_j$, the inner product is:

$$\langle X, Y \rangle = g_{ij} X^i Y^j$$

The **length** of a tangent vector is $\|X\| = \sqrt{g_{ij} X^i X^j}$.

The **arc length** of a curve $\gamma: [a,b] \to M$ is:

$$\text{Length}(\gamma) = \int_a^b \sqrt{g_{ij}(\gamma(t)) \dot{\gamma}^i(t) \dot{\gamma}^j(t)} \, dt$$

The **volume form** on a Riemannian [[manifold-learning|manifold]] is $dV = \sqrt{\det(g_{ij})} \, dx^1 \wedge \cdots \wedge dx^n$, enabling integration:

$$\int_M f \, dV$$

## Connections and the Covariant Derivative

A **connection** $\nabla$ on the tangent bundle is a rule for differentiating vector fields. For vector fields $X, Y$ on $M$, the **covariant derivative** $\nabla_X Y$ is a vector field satisfying linearity and the Leibniz rule:

$$\nabla_X (fY) = (Xf) Y + f \nabla_X Y$$

In local coordinates, a connection is encoded by **Christoffel symbols** $\Gamma^k_{ij}$:

$$\nabla_{\partial_i} \partial_j = \Gamma^k_{ij} \partial_k$$

For a Riemannian manifold, the unique metric-compatible, torsion-free connection is the **Levi-Civita connection**, whose Christoffel symbols are:

$$\Gamma^k_{ij} = \frac{1}{2} g^{kl} \left( \frac{\partial g_{lj}}{\partial x^i} + \frac{\partial g_{il}}{\partial x^j} - \frac{\partial g_{ij}}{\partial x^l} \right)$$

where $g^{kl}$ are components of the inverse metric tensor.

For a curve $\gamma(t)$ with velocity $\dot{\gamma}(t)$, the **acceleration** is:

$$\nabla_{\dot{\gamma}} \dot{\gamma} = \ddot{\gamma}^k + \Gamma^k_{ij} \dot{\gamma}^i \dot{\gamma}^j \, \partial_k$$

## Geodesics and the Exponential Map

A **geodesic** $\gamma$ is a curve satisfying the geodesic equation:

$$\nabla_{\dot{\gamma}} \dot{\gamma} = 0$$

Equivalently, in coordinates:

$$\ddot{\gamma}^k(t) + \Gamma^k_{ij}(\gamma(t)) \dot{\gamma}^i(t) \dot{\gamma}^j(t) = 0$$

This is a second-order ODE; existence and uniqueness follow from the Picard–Lindelöf theorem.

The **exponential map** at $p \in M$ is:

$$\exp_p: T_p M \to M, \quad \exp_p(v) = \gamma_v(1)$$

where $\gamma_v$ is the unique geodesic starting at $p$ with initial velocity $v$. For small enough $v$, $\exp_p$ is a diffeomorphism onto a neighborhood of $p$, called a **normal neighborhood**.

A manifold is **geodesically complete** if every geodesic extends indefinitely: $\exp_p$ is defined on all of $T_p M$ for all $p$. The **Hopf–Rinow theorem** states that for a Riemannian manifold, geodesic completeness is equivalent to metric completeness and compactness implies completeness.

## Curvature and the Riemann Tensor

The **Riemann curvature tensor** measures the failure of covariant derivatives to commute. For vector fields $X, Y, Z$:

$$R(X, Y) Z = \nabla_X \nabla_Y Z - \nabla_Y \nabla_X Z - \nabla_{[X,Y]} Z$$

In local coordinates:

$$R^l_{kij} = \frac{\partial \Gamma^l_{kj}}{\partial x^i} - \frac{\partial \Gamma^l_{ki}}{\partial x^j} + \Gamma^l_{im} \Gamma^m_{kj} - \Gamma^l_{jm} \Gamma^m_{ki}$$

The **Ricci tensor** is the trace:

$$\text{Ric}_{ij} = R^k_{ikj} = \frac{\partial \Gamma^k_{ik}}{\partial x^j} - \frac{\partial \Gamma^k_{ij}}{\partial x^k} + \Gamma^k_{im} \Gamma^m_{kj} - \Gamma^k_{jm} \Gamma^m_{ki}$$

The **scalar curvature** is:

$$R = g^{ij} \text{Ric}_{ij}$$

For a 2-dimensional surface, the scalar curvature relates directly to the **Gaussian curvature** $K$ by $R = 2K$.

## Sectional Curvature and Space Forms

The **sectional curvature** of a 2-plane $\sigma \subset T_p M$ spanned by orthonormal vectors $X, Y$ is:

$$K(X, Y) = \langle R(X, Y) Y, X \rangle$$

This is a key invariant. A space of **constant sectional curvature** $K$ is called a **space form**.

- **Flat spaces** ($K = 0$): $\mathbb{R}^n$ with the Euclidean metric
- **Spherical spaces** ($K = 1$): The unit sphere $S^n = \{x \in \mathbb{R}^{n+1} : \|x\| = 1\}$ with the induced metric
- **Hyperbolic spaces** ($K = -1$): $\mathbb{H}^n$, e.g., the upper half-space model $\{(x^1, \ldots, x^n) \in \mathbb{R}^n : x^n > 0\}$ with metric $g_{ij} = \delta_{ij} / (x^n)^2$

These three provide the local geometry for all constant-curvature spaces.

## Parallel Transport and Holonomy

**Parallel transport** along a curve $\gamma$ solves the covariant derivative equation:

$$\nabla_{\dot{\gamma}} V = 0$$

Given an initial tangent vector $V_0 \in T_{\gamma(0)} M$, this ODE yields a unique vector field $V(t)$ along $\gamma$ with $V(0) = V_0$.

The **holonomy group** $\text{Hol}_p$ is the set of linear maps $T_p M \to T_p M$ obtained by parallel transport along all closed curves through $p$. It is a Lie subgroup of $O(T_p M) \cong O(n)$ and encodes global geometric constraints. On a simply-connected space form, the holonomy group is either $O(n)$, $SO(n)$, or a subgroup thereof.

## The Gauss-Bonnet Theorem

The **Gauss-Bonnet theorem** is a classical result linking local curvature to global topology for surfaces:

$$\int_M K \, dA = 2\pi \chi(M)$$

where $K$ is Gaussian curvature, $dA$ is the area element, and $\chi(M)$ is the Euler characteristic.

For a compact orientable surface $M$ of genus $g$, we have $\chi(M) = 2 - 2g$. The theorem implies that the integral of curvature is a topological invariant, independent of the specific metric.

Higher-dimensional generalizations (e.g., Chern-Gauss-Bonnet) relate the top-degree differential form on the curvature to the Euler number.

## Applications and Extensions

**Information Geometry**: [[information-geometry|In information theory]], probability distributions form manifolds with natural metrics. The **Fisher metric** is:

$$g_{ij} = \mathbb{E}_{p(x|\theta)} \left[ \frac{\partial \log p(x|\theta)}{\partial \theta^i} \frac{\partial \log p(x|\theta)}{\partial \theta^j} \right]$$

This makes the space of distributions a Riemannian manifold, enabling natural [[convex-optimization|gradient descent]] and divergence measures.

**Stochastic Differential Geometry**: Stochastic differential equations on manifolds require careful handling of covariant derivatives; [[variational-calculus|variational methods]] applied to random curves yield insights into brownian motion on curved spaces.

**General Relativity**: [[non-euclidean-geometry|Spacetime geometry]] is a pseudo-Riemannian manifold with metric signature $(-,+,+,+)$. The Ricci tensor encodes matter and energy via the Einstein field equations $\text{Ric}_{ij} - \frac{1}{2}R g_{ij} = 8\pi G T_{ij}$.

**Topological Applications**: [[algebraic-topology|Algebraic topology]] leverages [[complex-analysis|complex structures]] and [[functional-analysis|functional analysis]] to study manifolds. The de Rham cohomology, Hodge theory, and characteristic classes all emerge naturally from Riemannian geometry.

**Machine Learning**: Modern deep learning increasingly uses manifold-valued parameters and geodesic-aware optimization on matrix Lie groups, Grassmannians, and symmetric spaces.

## References and Further Study

Classical texts like O'Neill's *Semi-Riemannian Geometry* and Do Carmo's *Differential Geometry of Curves and Surfaces* provide foundational material. Advanced treatments include Spivak's comprehensive *Differential Geometry* series and Jost's *Riemannian Geometry and Geometric Analysis*. For [[complex-analysis|complex geometry]], [[topology-basics|topology]], and applications to physics, consult Chern's *Lectures on Differential Geometry* and Wald's *General Relativity*.

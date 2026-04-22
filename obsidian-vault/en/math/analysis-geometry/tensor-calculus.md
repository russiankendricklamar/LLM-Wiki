---
title: "Tensor Calculus on Manifolds"
category: "Analysis & Geometry"
order: 10
lang: "en"
slug: "tensor-calculus"
---

# Tensor Calculus on Manifolds

**Tensor Calculus** is the mathematical language of differential geometry, general relativity, and continuum mechanics. It provides a systematic way to describe geometric and physical quantities that remain invariant (independent) of the chosen coordinate system on a **smooth manifold**.

## 1. Vectors and Dual Vectors (Covectors)

Before understanding tensors, we must distinguish between two fundamental geometric objects that live at a point $p$ on a manifold $M$:

### A. Tangent Vectors (Contravariant)
A tangent vector $v \in T_p M$ represents a "direction" and a "magnitude" (e.g., velocity). When you change coordinates, its components transform **contravariantly** (opposite to the basis vectors).
- **Notation**: Written with an upper index: $v^\mu$.

### B. Covectors / 1-Forms (Covariant)
A covector $\omega \in T_p^* M$ belongs to the dual space. Geometrically, it can be visualized as a set of parallel planes. It is a linear map that eats a vector and outputs a scalar: $\omega(v) \in \mathbb{R}$. When you change coordinates, its components transform **covariantly** (the same way as the basis vectors).
- **Notation**: Written with a lower index: $\omega_\mu$.
- **Example**: The gradient of a scalar function $df$ is a covector, not a vector.

## 2. What is a Tensor?

A **Tensor of type $(r, s)$** at point $p$ is a multilinear map that takes $r$ covectors and $s$ vectors and outputs a real number. 
Alternatively, it can be seen as an object with $r$ upper (contravariant) indices and $s$ lower (covariant) indices: $T^{\mu_1 \dots \mu_r}_{\nu_1 \dots \nu_s}$.

- **Type $(0, 0)$**: A scalar (invariant number, e.g., mass or temperature).
- **Type $(1, 0)$**: A vector $v^\mu$.
- **Type $(0, 1)$**: A covector $\omega_\mu$.
- **Type $(2, 0)$**: E.g., the stress-energy tensor $T^{\mu\nu}$ in physics.
- **Type $(0, 2)$**: E.g., the **Metric Tensor** $g_{\mu\nu}$, which defines distances and angles.

## 3. The Metric Tensor ($g_{\mu\nu}$)

The metric tensor is the most important $(0,2)$-tensor in Riemannian geometry. It defines the inner product of two vectors:
$$ \langle u, v \rangle = g_{\mu\nu} u^\mu v^\nu $$
The metric tensor provides the notions of:
1.  **Length**: $|v| = \sqrt{g_{\mu\nu} v^\mu v^\nu}$
2.  **Angle**: $\cos \theta = \frac{\langle u, v \rangle}{|u||v|}$

### Raising and Lowering Indices
The metric tensor acts as an isomorphism between the tangent space and the cotangent (dual) space. It allows us to "lower" a vector index to create a covector, or "raise" a covector index using its inverse $g^{\mu\nu}$:
- Lowering: $v_\mu = g_{\mu\nu} v^\nu$
- Raising: $\omega^\mu = g^{\mu\nu} \omega_\nu$

## 4. Tensor Contraction (The Einstein Summation Convention)

To simplify equations, Albert Einstein introduced a convention: **whenever an index is repeated once as an upper index and once as a lower index, a summation over all spatial/spacetime dimensions is implied**.

For example, the dot product (contraction of a covector and a vector) is written as:
$$ \omega(v) = \omega_\mu v^\mu = \sum_{\mu=0}^{D} \omega_\mu v^\mu $$
This creates a scalar (a $(0,0)$ tensor).

## 5. Why Do We Need Tensors?

In physics (like General Relativity) and advanced AI (like [[information-geometry|Information Geometry]]), the underlying "space" is curved. 
- In flat space (Euclidean), the distinction between vectors and covectors is often ignored because the metric is the identity matrix ($g_{\mu\nu} = \delta_{\mu\nu}$).
- In curved space, the metric changes from point to point. Tensors guarantee that if an equation like $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$ holds true in one coordinate system, it remains true in **all** possible coordinate systems.

## Related Topics

[[manifold-learning]] — mapping data to curved manifolds  
[[connections-curvature]] — how to take derivatives of tensors  
[[information-geometry]] — the Fisher Information Matrix as a metric tensor
---

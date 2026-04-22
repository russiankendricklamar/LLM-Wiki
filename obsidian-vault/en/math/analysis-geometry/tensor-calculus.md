---
title: "Tensor Calculus on Manifolds"
category: "Analysis & Geometry"
order: 10
lang: "en"
slug: "tensor-calculus"
---

# Tensor Calculus: Invariant Descriptions of Curvature and Flow

**Tensor Calculus** provides the formal language to describe geometric and physical quantities that are independent of coordinate choice on a **Smooth Manifold** $M$. It generalizes linear algebra to the case where the basis changes from point to point, requiring a precise distinction between vectors, covectors, and their higher-order combinations.

## 1. Multilinear Algebra and Tensor Spaces

At each point $p \in M$, we have a tangent space $T_p M$ and its dual, the cotangent space $T_p^* M$.
- A **Tensor of type $(r, s)$** is a multilinear map:
  $$ T: \underbrace{T_p^* M \times \dots \times T_p^* M}_{r} \times \underbrace{T_p M \times \dots \times T_p M}_{s} \to \mathbb{R} $$
- Its components transform under a coordinate change $x \to x'$ as:
  $$ T'^{\mu_1 \dots \mu_r}_{\nu_1 \dots \nu_s} = \frac{\partial x'^{\mu_1}}{\partial x^{\alpha_1}} \dots \frac{\partial x^{\beta_s}}{\partial x'^{\nu_s}} T^{\alpha_1 \dots \alpha_r}_{\beta_1 \dots \beta_s} $$

## 2. Exterior Algebra and Differential Forms

A special class of tensors are **Antisymmetric Tensors**, which form the basis of **Calculus on Manifolds**.
- **Wedge Product ($\wedge$)**: Combines two forms into a higher-order form. $dx \wedge dy = -dy \wedge dx$. This captures the notion of oriented area and volume.
- **Exterior Derivative ($d$)**: The only natural derivative that maps $k$-forms to $(k+1)$-forms without needing a metric. It generalizes gradient, curl, and divergence.
  - **Property**: $d^2 = 0$ (the boundary of a boundary is empty). This is the topological core of Maxwell's Equations and Stokes' Theorem.

## 3. The Metric Tensor and the Levi-Civita Symbol

The **Metric Tensor** $g_{\mu\nu}$ defines the geometry (distance, angle). 
- **Determinant and Volume**: The volume element is given by $dV = \sqrt{|g|} d^n x$.
- **Levi-Civita Symbol ($\epsilon_{\mu\nu\rho\sigma}$)**: A totally antisymmetric pseudo-tensor used to define cross products and the **Hodge Dual** ($*$). The Hodge star allows us to relate $k$-forms to $(n-k)$-forms, which is essential for defining the Laplacian operator on curved spaces.

## 4. The Lie Derivative ($\mathcal{L}_X$)

While the covariant derivative depends on a connection, the **Lie Derivative** measures the change of a tensor field along the flow of a vector field $X$.
- Geometrically: You drag the tensor along the "integral curves" of $X$ and compare it with the local value.
- **Killing's Equation**: If $\mathcal{L}_X g_{\mu\nu} = 0$, then $X$ is a **Killing Vector Field**, representing a symmetry of the geometry (e.g., rotation or translation).

## 5. Advanced Applications

### A. General Relativity
The Stress-Energy Tensor $T_{\mu\nu}$ describes the distribution of matter and energy. It is a $(0,2)$ symmetric tensor. Gravity is the curvature of the metric $g_{\mu\nu}$ induced by $T_{\mu\nu}$.

### B. Fluid Dynamics (Navier-Stokes on Manifolds)
Tensors describe the stress and strain within a fluid. In curved space (e.g., atmosphere of a planet), the standard derivatives are replaced by covariant derivatives, and the viscosity is modeled as a rank-4 tensor.

### C. Differential Geometric ML
In **Geometric Deep Learning**, we use the Lie Derivative to define operators that are invariant to specific symmetries (e.g., SE(3) equivariance). This allows neural networks to process 3D structures (proteins, point clouds) with much fewer parameters.

## Related Topics

[[connections-curvature]] — how tensors "interact" with the manifold  
[[geometric-deep-learning]] — implementation of tensor symmetries  
[[hodge-theory]] — the calculus of differential forms
---

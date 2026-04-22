---
title: "Connections and Covariant Derivatives"
category: "Analysis & Geometry"
order: 11
lang: "en"
slug: "connections-curvature"
---

# Connections, Covariant Derivatives, and Curvature

In standard calculus, taking a derivative is straightforward because the underlying space is flat (Euclidean). On a curved manifold, taking the derivative of a vector field is highly non-trivial because tangent spaces at different points are completely separate vector spaces. To compare a vector at point $p$ with a vector at a nearby point $q$, we need a rule to "connect" them. This rule is called an **Affine Connection**.

## 1. The Covariant Derivative ($\nabla$)

The standard partial derivative $\partial_\mu v^\nu$ of a vector field is **not a tensor**. If you change coordinates, extra terms appear due to the curvature of the grid. 

To fix this, we introduce the **Covariant Derivative** $\nabla_\mu$, which differentiates a tensor while preserving its tensor nature (it transforms correctly under coordinate changes). For a vector $v^\nu$, it is defined as:
$$ \nabla_\mu v^\nu = \partial_\mu v^\nu + \Gamma^\nu_{\mu\lambda} v^\lambda $$

- The first term ($\partial_\mu v^\nu$) measures how the vector's components change.
- The second term ($\Gamma^\nu_{\mu\lambda} v^\lambda$) measures how the **basis vectors themselves** twist and turn as you move along the manifold.

## 2. Christoffel Symbols ($\Gamma^\nu_{\mu\lambda}$)

The objects $\Gamma^\nu_{\mu\lambda}$ are called **Christoffel Symbols** (or connection coefficients). 
*Crucially, they are not tensors!* They are mathematical correction factors that precisely cancel out the non-tensor parts of the partial derivative.

If the manifold is equipped with a metric tensor $g_{\mu\nu}$ (a Riemannian manifold), there is a unique connection that is "torsion-free" and preserves the metric ($\nabla_\rho g_{\mu\nu} = 0$). This is the **Levi-Civita Connection**. Its Christoffel symbols are calculated purely from the derivatives of the metric:
$$ \Gamma^\sigma_{\mu\nu} = \frac{1}{2} g^{\sigma\rho} (\partial_\mu g_{\nu\rho} + \partial_\nu g_{\rho\mu} - \partial_\rho g_{\mu\nu}) $$

## 3. Parallel Transport and Geodesics

Using the connection, we can define what it means to move a vector along a curve without changing it—this is **Parallel Transport**. A vector field $v$ is parallel transported along a curve $\gamma(t)$ if its covariant derivative along the curve is zero:
$$ \nabla_{\dot{\gamma}} v = 0 $$

A **Geodesic** is the straightest possible path on a curved manifold. It is a curve that parallel transports its own tangent vector (i.e., it doesn't accelerate locally). The geodesic equation is:
$$ \frac{d^2 x^\mu}{dt^2} + \Gamma^\mu_{\rho\sigma} \frac{dx^\rho}{dt} \frac{dx^\sigma}{dt} = 0 $$
In General Relativity, this equation describes how planets orbit stars: they are simply following straight lines (geodesics) in curved spacetime.

## 4. The Riemann Curvature Tensor ($R^\rho_{\sigma\mu\nu}$)

How do we quantify "curvature"? If you take a vector and parallel transport it around a tiny closed loop on a sphere, it will come back pointing in a different direction. In flat space, it comes back unchanged.

The **Riemann Curvature Tensor** measures this exact failure of parallel transport to commute. It is defined as the commutator of covariant derivatives:
$$ [\nabla_\mu, \nabla_\nu] v^\rho = R^\rho_{\sigma\mu\nu} v^\sigma $$

From the Riemann tensor, we can derive two simpler measures of curvature:
1.  **Ricci Tensor ($R_{\mu\nu}$)**: A trace of the Riemann tensor. It measures how volumes deform in curved space.
2.  **Scalar Curvature ($R$)**: The trace of the Ricci tensor. A single number at each point describing the overall curvature.

These quantities form the left-hand side of Einstein's Field Equations, dictating how gravity warps spacetime: $R_{\mu\nu} - \frac{1}{2}R g_{\mu\nu} = 8\pi G T_{\mu\nu}$.

## Related Topics

[[tensor-calculus]] — the prerequisite math of vectors and covectors  
[[information-geometry]] — using connections to optimize neural networks  
[[ricci-flow]] — how to deform metrics to smooth out curvature
---

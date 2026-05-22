---
title: "The Deep Ritz Method"
category: "Advanced Analysis"
order: 103
lang: "en"
slug: "deep-ritz-method"
---

# The Deep Ritz Method

## What Is It

The Deep Ritz Method is a deep learning framework for solving partial differential equations (PDEs) based on the **variational principle**. Unlike Physics-Informed Neural Networks (PINNs) which minimize the residual of the PDE (the "strong" form), Deep Ritz minimizes the energy functional associated with the "weak" or variational form of the equation. This makes it particularly effective for problems where the solution naturally minimizes a physical energy, such as in solid mechanics or electrostatics.

## The Variational Principle

Many elliptic PDEs can be reformulated as the minimization of a functional $J(u)$. For example, the Poisson equation $-\Delta u = f$ with Dirichlet boundary conditions $u=0$ on $\partial \Omega$ corresponds to:
$$J(u) = \int_{\Omega} \left( \frac{1}{2} |\nabla u(x)|^2 - f(x)u(x) \right) dx$$
The solution $u^*$ is the function in a suitable Sobolev space $H_0^1(\Omega)$ that minimizes $J(u)$.

## Deep Ritz Framework

In the Deep Ritz Method, we approximate $u(x)$ with a neural network $u_\theta(x)$. The training objective is the discretized version of the energy functional:
$$\mathcal{L}(\theta) = \sum_{i=1}^N \left( \frac{1}{2} |\nabla u_\theta(x_i)|^2 - f(x_i)u_\theta(x_i) \right) \Delta x + \lambda \mathcal{B}(\theta)$$
where $\{x_i\}$ are integration points (sampled from the domain $\Omega$), and $\mathcal{B}(\theta)$ is a penalty term for boundary conditions.

### Architecture: Residual Networks
Standard feed-forward networks often struggle with the high-frequency components of PDE solutions. Deep Ritz typically employs **Residual Networks (ResNets)** to facilitate the learning of identity mappings and improve gradient flow:
$$x_{l+1} = x_l + \phi(W_l x_l + b_l)$$

## Advantages and High Dimensions

1. **Curse of Dimensionality:** Unlike Finite Element Methods (FEM), which require a mesh that scales exponentially with dimension $d$, Deep Ritz uses Monte Carlo integration. This allows it to solve PDEs in hundreds of dimensions (e.g., Schrödinger equation, Fokker-Planck).
2. **Mesh-free:** There is no need for complex triangulation of irregular domains.
3. **Smoothness:** The neural network provides a continuous, differentiable representation of the solution.

## Handling Boundary Conditions

Boundary conditions are often handled via the **Penalty Method**:
$$\mathcal{B}(\theta) = \int_{\partial \Omega} |u_\theta(x) - g(x)|^2 ds$$
Alternatively, one can use an ansatz $u_\theta(x) = A(x) \mathcal{NN}(x) + G(x)$, where $A(x)$ is a distance function that vanishes on the boundary, forcing the BCs by construction.

## DERIVATION: Ritz Method for the Heat Equation

Consider the steady-state heat equation in a domain with thermal conductivity $\kappa(x)$:
$$-\nabla \cdot (\kappa(x) \nabla u) = f$$
The corresponding energy functional is:
$$J(u) = \int_{\Omega} \left( \frac{1}{2} \kappa(x) |\nabla u|^2 - fu \right) dx$$
Taking the variation $\delta J = 0$:
$$\int_{\Omega} (\kappa \nabla u \cdot \nabla \delta u - f \delta u) dx = 0$$
Using Green's first identity (integration by parts):
$$\int_{\Omega} (-\nabla \cdot (\kappa \nabla u) - f) \delta u dx + \int_{\partial \Omega} \kappa \frac{\partial u}{\partial n} \delta u ds = 0$$
For this to hold for all $\delta u$, we recover the original PDE. Deep Ritz optimizes this directly without the need for the strong form derivatives.

## Related Topics
[[pinns|Physics-Informed Neural Networks]] — the strong-form alternative  
[[calculus-of-variations|Calculus of Variations]] — the mathematical foundation  
[[sobolev-spaces|Sobolev Spaces]] — the function spaces for solutions  
[[monte-carlo-integration|Monte Carlo Integration]] — the high-dimensional integration tool  
[[deep-galerkin|Deep Galerkin Method]] — a related projection-based approach

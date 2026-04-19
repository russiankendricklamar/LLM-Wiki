---
title: "Partial Differential Equations"
category: "Physics"
order: 22
lang: "en"
slug: "partial-differential-equations"
---

# Partial Differential Equations

**Partial differential equations (PDEs)** are the mathematical language in which classical and quantum physics are written. From diffusion and acoustics to the [[schrodinger-equation|Schrödinger equation]] and general relativity — almost every fundamental physical field obeys some PDE. They relate a field's local-in-space-and-time change to its spatial structure, which makes them a natural description of fields: thermal, electromagnetic, wave-like, and probabilistic.

## Second-order classification

A scalar linear second-order PDE

$$
A u_{xx} + 2B u_{xy} + C u_{yy} + \dots = 0
$$

splits into three canonical types by the sign of the discriminant $B^2 - AC$:

| Type | Discriminant | Prototype | Physics |
|------|--------------|-----------|---------|
| **Elliptic** | $B^2 - AC < 0$ | $\nabla^2 u = 0$ (Laplace) | Stationary potentials, electrostatics |
| **Parabolic** | $B^2 - AC = 0$ | $u_t = \alpha \nabla^2 u$ (heat) | Diffusion, heat conduction, Brownian motion |
| **Hyperbolic** | $B^2 - AC > 0$ | $u_{tt} = c^2 \nabla^2 u$ (wave) | Sound, light, gravitational waves |

The type determines well-posedness: elliptic problems need boundary data on the entire boundary, hyperbolic ones need initial data on a time-like surface, and parabolic ones need initial data on one time slice plus lateral boundary conditions.

## Canonical equations of physics

**Heat equation** $u_t = \alpha \nabla^2 u$ describes how temperature smooths out via molecular diffusion. Solutions smooth over time; high-frequency modes decay as $\exp(-\alpha k^2 t)$.

**Wave equation** $u_{tt} = c^2 \nabla^2 u$ describes elastic, acoustic, and electromagnetic waves. Unlike heat, waves conserve energy and propagate at finite speed $c$.

**Navier-Stokes** $\rho(\partial_t \mathbf{u} + (\mathbf{u}\cdot\nabla)\mathbf{u}) = -\nabla p + \mu \nabla^2 \mathbf{u}$ is the nonlinear vector PDE of fluid dynamics. Existence of smooth 3D solutions is one of the Millennium Prize problems.

**Schrödinger equation** $i\hbar \partial_t \psi = \hat H \psi$ — the foundational PDE of quantum mechanics, covered in detail in [[schrodinger-equation]].

**Einstein equations** $G_{\mu\nu} = 8\pi G T_{\mu\nu}$ are ten coupled nonlinear PDEs for the metric tensor. They describe gravity as spacetime curvature.

**Fokker-Planck equation** $\partial_t p = -\nabla\cdot(\mathbf{v} p) + D \nabla^2 p$ governs the probability density of stochastic systems. A generalised version, [[fractional-fokker-planck]], is used for anomalous diffusion and financial modelling.

## Boundary and initial conditions

Unique solvability of a PDE requires boundary data:

- **Dirichlet** — value of the field on the boundary: $u|_{\partial\Omega} = g$.
- **Neumann** — normal derivative: $\partial_n u|_{\partial\Omega} = h$.
- **Robin / mixed** — combination: $\alpha u + \beta \partial_n u = k$.
- **Initial conditions** — value (and derivative for hyperbolic) of the field at $t = 0$.

## Solution methods

**Analytic.** Separation of variables, Fourier transform, Green's functions, and the method of characteristics (for hyperbolic). Work for simple geometries and linear operators.

**Finite differences (FDM).** Discretise derivatives on a regular grid: $u_{xx} \approx (u_{i+1} - 2u_i + u_{i-1})/h^2$. Simple to implement but awkward for complex geometries.

**Finite elements (FEM).** Variational formulation: seek $u$ minimising an integral functional. Splits the domain into elements of arbitrary shape, naturally handles complex boundaries.

**Spectral methods.** Expand the solution in a global basis (Fourier, Chebyshev): exponential convergence for smooth solutions.

**Mesh-based vs mesh-free.** All of the above require building a mesh. A modern alternative — [[pinns|physics-informed neural networks]] — solves PDEs mesh-free, approximating the solution with a neural network and embedding the PDE into the loss via [[automatic-differentiation]].

## Stiffness and multiscale structure

Many physical PDEs are **stiff**: their solutions mix processes on widely separated timescales. Examples:

- **Reaction-diffusion systems:** fast chemical kinetics plus slow diffusion.
- **Navier-Stokes boundary layers:** thin regions with sharp gradients near walls.
- **Spectral bias in PINNs:** neural networks struggle to learn high-frequency solutions.

For stiff PDEs, standard explicit schemes are unstable; implicit integrators or specialised architectures are required.

## Inverse problems

Often physicists care not about the forward solution but about **identifying** parameters or sources from observations:

- Reconstructing a potential $V(x)$ from measurements of the wave function in the [[schrodinger-equation|Schrödinger equation]].
- Determining heat conductivity in a heterogeneous medium from temperature sensors.
- Tomographic reconstruction of density from projections.

Inverse problems are ill-posed (small data perturbations cause large solution changes); Tikhonov regularisation, Bayesian priors, and differentiable solvers are standard tools.

## Related Topics

- [[schrodinger-equation]] — the fundamental PDE of quantum mechanics
- [[fractional-fokker-planck]] — generalisation of Fokker-Planck with fractional derivatives
- [[pinns]] — deep learning for PDE solving
- [[automatic-differentiation]] — the core of modern differentiable solvers
- [[brownian-motion]] — stochastic dual of Fokker-Planck

---
title: "Physics-Informed Neural Networks (PINNs)"
category: "Scientific ML"
order: 1
lang: "en"
slug: "pinns"
---

# Physics-Informed Neural Networks (PINNs)

## Overview

Physics-Informed Neural Networks (PINNs) embed physical laws directly into the training objective of a neural network. Rather than learning purely from data, a PINN simultaneously satisfies a governing partial differential equation (PDE), boundary conditions, and any available observations. The result is a mesh-free, differentiable PDE solver that generalises well even with sparse data.

Introduced by Raissi, Perdikaris, and Karniadakis (2019), PINNs have since become one of the most influential intersections of deep learning and scientific computing. They are especially attractive when experimental data is expensive, when the domain geometry is complex, or when one needs a differentiable forward model inside an optimisation loop.

## Mathematical Framework

Let $u(\mathbf{x}, t)$ be the solution field governed by a PDE operator $\mathcal{N}$:

$$\mathcal{N}[u](\mathbf{x}, t) = 0, \quad (\mathbf{x}, t) \in \Omega \times [0, T]$$

with boundary conditions $\mathcal{B}[u] = 0$ on $\partial\Omega$ and initial condition $u(\mathbf{x}, 0) = u_0(\mathbf{x})$.

A PINN approximates $u$ with a neural network $u_\theta(\mathbf{x}, t)$. The total loss is:

$$\mathcal{L}(\theta) = \mathcal{L}_{\text{PDE}} + \mathcal{L}_{\text{BC}} + \mathcal{L}_{\text{data}}$$

where

$$\mathcal{L}_{\text{PDE}} = \frac{1}{N_r}\sum_{i=1}^{N_r} \left|\mathcal{N}[u_\theta](\mathbf{x}_i^r, t_i^r)\right|^2$$

$$\mathcal{L}_{\text{BC}} = \frac{1}{N_b}\sum_{j=1}^{N_b} \left|\mathcal{B}[u_\theta](\mathbf{x}_j^b)\right|^2$$

$$\mathcal{L}_{\text{data}} = \frac{1}{N_d}\sum_{k=1}^{N_d} \left|u_\theta(\mathbf{x}_k^d, t_k^d) - u_k^{\text{obs}}\right|^2$$

All PDE residuals are computed via automatic differentiation through $u_\theta$, so no finite-difference stencil is needed.

## Visualization

```chart
{
  "type": "line",
  "xAxis": "x",
  "data": [
    {"x": 0.0, "PINN": 0.000, "Analytical": 0.000},
    {"x": 0.1, "PINN": 0.294, "Analytical": 0.295},
    {"x": 0.2, "PINN": 0.559, "Analytical": 0.559},
    {"x": 0.3, "PINN": 0.770, "Analytical": 0.769},
    {"x": 0.4, "PINN": 0.907, "Analytical": 0.906},
    {"x": 0.5, "PINN": 0.965, "Analytical": 0.966},
    {"x": 0.6, "PINN": 0.907, "Analytical": 0.906},
    {"x": 0.7, "PINN": 0.771, "Analytical": 0.769},
    {"x": 0.8, "PINN": 0.558, "Analytical": 0.559},
    {"x": 0.9, "PINN": 0.294, "Analytical": 0.295},
    {"x": 1.0, "PINN": 0.000, "Analytical": 0.000}
  ],
  "lines": [
    {"dataKey": "PINN", "stroke": "#3b82f6", "name": "PINN solution u(x, t=0.1)"},
    {"dataKey": "Analytical", "stroke": "#f59e0b", "name": "Analytical: sin(πx)·exp(−απ²t)"}
  ]
}
```

## How It Works

**Collocation sampling.** Residual points $\{(\mathbf{x}_i^r, t_i^r)\}$ are sampled randomly (or quasi-randomly via Latin hypercube, Sobol sequences) inside the domain. Dense near-boundary sampling often improves accuracy.

**Automatic differentiation.** Spatial and temporal derivatives of $u_\theta$ are obtained exactly with [[automatic-differentiation|backpropagation]]. For the 1D heat equation $u_t = \alpha u_{xx}$, one computes $\partial u_\theta / \partial t$ and $\partial^2 u_\theta / \partial x^2$ as computation-graph operations.

**Architecture choice.** Standard choices are fully-connected networks with tanh or sin activations (smooth activations matter for higher-order derivatives). Modified architectures include:
- Fourier feature embeddings to reduce spectral bias
- Highway networks to ease gradient flow
- Domain decomposition (XPINNs) for large domains

**Adaptive loss weighting.** The PDE, BC, and data losses often operate on different scales. Self-adaptive weights, NTK-based balancing, or uncertainty weighting are used to stabilise training.

## Python Implementation

```python
import torch
import torch.nn as nn
import numpy as np

# Simple PINN for 1D heat equation: u_t = alpha * u_xx
# Domain: x in [0,1], t in [0,1], alpha=0.01
# BC: u(0,t) = u(1,t) = 0;  IC: u(x,0) = sin(pi*x)

ALPHA = 0.01

class PINN(nn.Module):
    def __init__(self, hidden=64, layers=4):
        super().__init__()
        dims = [2] + [hidden] * layers + [1]
        self.net = nn.Sequential(
            *[
                nn.Sequential(nn.Linear(dims[i], dims[i + 1]), nn.Tanh())
                for i in range(len(dims) - 2)
            ],
            nn.Linear(dims[-2], dims[-1]),
        )

    def forward(self, x, t):
        inputs = torch.cat([x, t], dim=1)
        return self.net(inputs)


def pde_residual(model, x, t):
    x = x.requires_grad_(True)
    t = t.requires_grad_(True)
    u = model(x, t)
    u_t = torch.autograd.grad(u.sum(), t, create_graph=True)[0]
    u_x = torch.autograd.grad(u.sum(), x, create_graph=True)[0]
    u_xx = torch.autograd.grad(u_x.sum(), x, create_graph=True)[0]
    return u_t - ALPHA * u_xx


model = PINN()
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)

for step in range(5000):
    optimizer.zero_grad()

    # Collocation points (interior)
    xr = torch.rand(1000, 1)
    tr = torch.rand(1000, 1)
    res = pde_residual(model, xr, tr)
    loss_pde = (res ** 2).mean()

    # Boundary conditions
    tb = torch.rand(200, 1)
    x0 = torch.zeros(200, 1)
    x1 = torch.ones(200, 1)
    loss_bc = (model(x0, tb) ** 2 + model(x1, tb) ** 2).mean()

    # Initial condition
    xi = torch.rand(200, 1)
    ti = torch.zeros(200, 1)
    u_ic = model(xi, ti)
    u_true = torch.sin(torch.pi * xi)
    loss_ic = ((u_ic - u_true) ** 2).mean()

    loss = loss_pde + 10 * loss_bc + 10 * loss_ic
    loss.backward()
    optimizer.step()

    if step % 1000 == 0:
        print(f"Step {step}: loss={loss.item():.4e}")
```

## Key Results & Properties

- **Mesh-free:** Works on irregular domains without a mesh; complexity scales with collocation point count, not mesh resolution.
- **Data assimilation:** The data term allows inverse problems — inferring unknown PDE parameters from observations.
- **Analytical exactness:** Derivatives are computed to machine precision via AD, unlike finite difference stencils.
- **Convergence theory:** Under sufficient network capacity and collocation density, PINNs converge to the true solution (Mishra & Molinaro, 2022).
- **Benchmark PDEs:** Navier-Stokes, Burgers' equation, Helmholtz, [[schrodinger-equation]], Black-Scholes all solved successfully.

## Limitations

**Spectral bias.** Neural networks preferentially learn low-frequency components. High-frequency solutions (e.g., turbulent flows) require Fourier feature embeddings or multi-scale architectures.

**Stiff PDEs.** When the PDE has widely separated time scales (e.g., reaction-diffusion with fast reactions), standard PINNs fail to converge. Causal training (Wang et al. 2022) enforces temporal causality and mitigates this.

**Scalability.** For large 3D problems, PINNs are substantially slower than optimised finite element solvers. Parallelisation across collocation points only partially compensates.

**Pathological loss landscapes.** Poor conditioning of the PINN loss is common; NTK analysis shows the PDE, BC, and data components can have eigenvalue spectra spanning several orders of magnitude.

**Requires known PDE.** If the governing equation is unknown, one cannot construct $\mathcal{L}_{\text{PDE}}$. Neural ODEs or SINDy are alternatives in the data-driven regime.

## Applications

- **Fluid dynamics:** Solving incompressible Navier-Stokes in complex geometries; inferring velocity fields from sparse pressure sensors.
- **Quantum mechanics:** Solving the time-independent [[schrodinger-equation]] for potential wells; electronic structure problems.
- **Finance:** Pricing options via the [[black-scholes]] PDE without Monte Carlo sampling; fitting local volatility surfaces.
- **Heat transfer:** Thermal management in electronics; inverse problems for thermal conductivity estimation.
- **Anomalous diffusion:** Solving fractional PDEs like the [[fractional-fokker-planck]] equation where integer-order FDM struggles.
- **Geophysics:** Seismic wave propagation; subsurface flow modelling.

## The two sides of a PINN

A PINN is the meeting point of two large topics, each with its own standalone article:

- **Physics:** [[partial-differential-equations]] — classification, canonical equations (heat, wave, Schrödinger, Navier-Stokes), boundary conditions, solution methods.
- **AI:** [[automatic-differentiation]] — how modern frameworks compute exact derivatives of arbitrary functions on a computational graph; the thing without which a PDE residual could never enter a loss.

## Related Topics

- [[partial-differential-equations]] — the PDE theory that PINNs solve
- [[automatic-differentiation]] — the AI core making the PDE residual differentiable
- [[schrodinger-equation]] — canonical quantum PDE solvable with PINNs
- [[black-scholes]] — financial PDE application
- [[fractional-fokker-planck]] — fractional PDE application
- [[hamiltonian-nn]] — alternative physics-constrained architecture
- [[kan]] — alternative architecture for equation discovery
- [[equivariant-nn]] — symmetry-preserving networks for physical systems

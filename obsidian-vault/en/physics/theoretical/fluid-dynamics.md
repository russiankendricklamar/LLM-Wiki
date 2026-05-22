---
title: 'Fluid Dynamics: Navier-Stokes Foundations'
category: Advanced Theory
order: 142
lang: en
slug: fluid-dynamics
---

The Navier-Stokes equations describe the motion of viscous fluid substances, derived from the conservation of mass, momentum, and energy.

### Conservation of Mass (Continuity)
$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{u}) = 0$
For an incompressible fluid, $\nabla \cdot \mathbf{u} = 0$.

### Momentum Equation
Applying Newton's second law to a fluid parcel yields:
$\rho \left( \frac{\partial \mathbf{u}}{\partial t} + \mathbf{u} \cdot \nabla \mathbf{u} \right) = -\nabla p + \nabla \cdot \boldsymbol{\tau} + \rho \mathbf{g}$
where $\mathbf{u}$ is the flow velocity, $p$ is pressure, and $\boldsymbol{\tau}$ is the deviatoric stress tensor. 
For a Newtonian fluid, $\boldsymbol{\tau} = \mu \left( \nabla \mathbf{u} + (\nabla \mathbf{u})^T - \frac{2}{3}(\nabla \cdot \mathbf{u})\mathbf{I} \right)$.
Assuming incompressibility and constant viscosity $\mu$, we get the classic incompressible Navier-Stokes equation:
$\rho \left( \frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla) \mathbf{u} \right) = -\nabla p + \mu \nabla^2 \mathbf{u} + \rho \mathbf{g}$
Proving the existence and smoothness of solutions in 3D is a Millennium Prize problem.

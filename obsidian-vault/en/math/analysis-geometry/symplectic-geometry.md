---
title: "Symplectic Geometry"
category: "Analysis & Geometry"
order: 8
lang: "en"
slug: "symplectic-geometry"
---

# Symplectic Geometry

Symplectic geometry is the mathematical framework underlying **Hamiltonian Mechanics**. While Riemannian geometry studies distances (metrics), symplectic geometry studies **areas** (symplectic forms) and the volume-preserving dynamics of physical systems.

## The Symplectic Form ($\omega$)

A symplectic manifold is a smooth manifold $M$ equipped with a closed, non-degenerate 2-form $\omega$.
- **Closed**: $d\omega = 0$.
- **Non-degenerate**: For every non-zero tangent vector $X$, there is a vector $Y$ such that $\omega(X, Y) \neq 0$.

In local coordinates $(q_1, \dots, q_n, p_1, \dots, p_n)$, where $q$ is position and $p$ is momentum, the standard symplectic form is:
$$\omega = \sum_{i=1}^n dq_i \wedge dp_i$$

## Hamiltonian Vector Fields

Given a smooth function $H: M \to \mathbb{R}$ (the energy or **Hamiltonian**), there is a unique vector field $X_H$ such that:
$$\iota_{X_H} \omega = dH$$
The flow of this vector field gives the equations of motion:
$$\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i}$$

## Liouville's Theorem

A fundamental result of symplectic geometry is that Hamiltonian flows preserve the symplectic form $\omega$, and consequently, they preserve **phase space volume**. This is Liouville's theorem, which is central to statistical mechanics.

## Darboux's Theorem

Unlike Riemannian manifolds, which can have curvature and vary locally, all symplectic manifolds of the same dimension look locally the same. There are no "local invariants" like the Riemann curvature tensor in symplectic geometry.

## Applications in AI: Hamiltonian Neural Networks (HNN)

Hamiltonian Neural Networks parameterize the right-hand side of a [[neural-odes|Neural ODE]] as a symplectic gradient of a learned Hamiltonian function:
$$\frac{dz}{dt} = \mathbf{J} \nabla H_\theta(z), \quad \mathbf{J} = \begin{bmatrix} 0 & I \\ -I & 0 \end{bmatrix}$$
By construction, these networks obey the laws of physics (conservation of energy) and can predict planetary orbits or pendulum motions over long horizons without drifting.

## Visualization: Phase Space Conservation

```chart
{
  "type": "scatter",
  "xAxis": "q",
  "data": [
    {"q": -1, "p": 0, "type": "initial"},
    {"q": 0,  "p": 1, "type": "initial"},
    {"q": 1,  "p": 0, "type": "initial"},
    {"q": 0,  "p": -1, "type": "initial"},
    {"q": -0.7, "p": 0.7, "type": "final"},
    {"q": 0.7,  "p": 0.7, "type": "final"},
    {"q": 0.7,  "p": -0.7, "type": "final"},
    {"q": -0.7, "p": -0.7, "type": "final"}
  ],
  "lines": [
    {"dataKey": "p", "stroke": "#3b82f6", "name": "Symplectic Area Invariant"}
  ]
}
```
*In a symplectic flow, the shape of a region in phase space may deform (from a square to a tilted diamond), but its area remains perfectly constant.*

## Related Topics

[[hamiltonian-nn]] — AI application  
[[differential-geometry]] — the smooth manifold context  
[[stochastic-games]] — games in phase spaces
---

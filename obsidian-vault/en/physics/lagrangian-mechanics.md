---
title: "Lagrangian Mechanics"
category: "Physics"
order: 24
lang: "en"
slug: "lagrangian-mechanics"
---

# Lagrangian Mechanics

**Lagrangian mechanics** is a reformulation of classical mechanics built around a single scalar function — the **Lagrangian** $L(q, \dot q, t)$ — and the **principle of stationary action**. Developed by Lagrange in the 1780s as a generalisation of Newtonian mechanics, it sidesteps vector forces and reference frames in favour of energies and generalised coordinates, and gives the most natural language for describing symmetries, constraints, and field theories.

## The principle of stationary action

A classical trajectory between two fixed endpoints $q(t_1)$ and $q(t_2)$ is the one that extremises the **action**

$$
S[q] = \int_{t_1}^{t_2} L(q, \dot q, t) \, dt.
$$

Requiring $\delta S = 0$ under variations $\delta q$ that vanish at the endpoints yields the **Euler-Lagrange equations**:

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot q_i} - \frac{\partial L}{\partial q_i} = 0.
$$

For $L = T - V$ (kinetic minus potential energy) these reproduce Newton's second law, but without any commitment to Cartesian coordinates or inertial frames.

## Generalised coordinates and constraints

The power of the formalism is that $q_i$ can be *any* set of independent coordinates adapted to the problem — angles for a pendulum, bond lengths for a molecule, arc length along a wire. **Holonomic constraints** of the form $f(q, t) = 0$ are absorbed by reducing the number of coordinates; **non-holonomic** constraints are handled by Lagrange multipliers.

No free-body diagrams, no constraint forces to guess: only the scalar $L$ in the coordinates that fit the geometry.

## Examples

**Free particle.** $L = \tfrac{1}{2} m \dot{\mathbf x}^2$ gives $\ddot{\mathbf x} = 0$.

**Harmonic oscillator.** $L = \tfrac{1}{2} m \dot q^2 - \tfrac{1}{2} k q^2$ gives $\ddot q = -(k/m) q$.

**Pendulum.** Using the angle $\theta$ as coordinate, $L = \tfrac{1}{2} m l^2 \dot\theta^2 + m g l \cos\theta$, and the Euler-Lagrange equation is $\ddot\theta = -(g/l)\sin\theta$.

**Charged particle in an electromagnetic field.** $L = \tfrac{1}{2} m \dot{\mathbf x}^2 - q\,\phi(\mathbf x, t) + q\,\dot{\mathbf x}\cdot \mathbf A(\mathbf x, t)$. The Euler-Lagrange equations reproduce the Lorentz force law — gauge potentials enter the action directly.

## Symmetries and conservation laws

If $L$ does not depend on a coordinate $q_i$ (a **cyclic coordinate**), then

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot q_i} = 0,
$$

so the conjugate momentum $p_i = \partial L / \partial \dot q_i$ is conserved. More generally, **every continuous symmetry of the action corresponds to a conservation law** — this is [[noether-theorem|Noether's theorem]], and it is the reason Lagrangian mechanics generalises so cleanly to field theory.

## From Lagrangian to Hamiltonian

Defining $p_i = \partial L / \partial \dot q_i$ and performing a **Legendre transform**

$$
H(q, p, t) = \sum_i p_i \dot q_i - L(q, \dot q, t)
$$

converts the $n$ second-order Euler-Lagrange equations into $2n$ first-order [[hamiltonian-mechanics|Hamilton's equations]]. The two formulations are equivalent for regular systems, but they emphasise different structure: Lagrangian = variational and covariant, Hamiltonian = symplectic and phase-space.

## Field theory

In field theory the coordinates $q_i(t)$ are replaced by fields $\phi(x^\mu)$ and the action becomes an integral of a **Lagrangian density** $\mathcal L(\phi, \partial_\mu \phi)$ over spacetime:

$$
S[\phi] = \int d^4 x \, \mathcal L.
$$

Stationarity yields the field-theory Euler-Lagrange equations

$$
\partial_\mu \frac{\partial \mathcal L}{\partial(\partial_\mu \phi)} - \frac{\partial \mathcal L}{\partial \phi} = 0.
$$

All of modern physics — general relativity (Einstein-Hilbert action), the Standard Model ([[qft-basic|QFT]] with gauge invariance), string theory — is defined by writing down a Lagrangian density and applying this rule. Lagrangian mechanics is not just a prettier way to do classical dynamics; it is the grammar of fundamental physics.

## Related Topics

- [[hamiltonian-mechanics]] — conjugate reformulation via Legendre transform
- [[noether-theorem]] — symmetries of $L$ generate conserved currents
- [[partial-differential-equations]] — Euler-Lagrange equations as PDEs in field theory
- [[qft-basic]] — Lagrangian densities as the starting point of QFT
- [[gravitational-waves-gr]] — the Einstein-Hilbert action

---
title: Wave Function & Schrodinger Equation
category: physics
lang: en
order: 202
slug: schrodinger-equation
---

# Wave Function & Schrodinger Equation

## Theoretical Foundation
The wave function, typically denoted as $\Psi(\mathbf{r}, t)$, is a complex-valued probability amplitude describing the quantum state of a system. It resides in an infinite-dimensional Hilbert space $L^2$. The time evolution of this state is governed by unitary evolution, preserving probability. The Schrödinger equation is the fundamental equation of motion in non-relativistic quantum mechanics, dictating how the wave function propagates deterministically over time before any measurement-induced [[superposition-collapse|collapse]] occurs.

## Mathematical Formulation
The time-dependent Schrödinger equation is given by:
$$ i\hbar \frac{\partial}{\partial t} |\Psi(t)\rangle = \hat{H} |\Psi(t)\rangle $$
where $\hat{H}$ is the Hamiltonian operator of the system. In the position basis, for a single particle in a potential $V(\mathbf{r}, t)$, this takes the form:
$$ i\hbar \frac{\partial}{\partial t} \Psi(\mathbf{r}, t) = \left[ -\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r}, t) \right] \Psi(\mathbf{r}, t) $$

## Physical Significance & Holography
The Schrödinger equation enforces unitary evolution, a concept critical to the Black Hole Information Paradox. If pure states evolve into mixed states via Hawking radiation, unitarity is violated. In the context of AdS/CFT and holography, the boundary CFT undergoes standard unitary Schrödinger evolution, implying that the bulk quantum gravity theory must also preserve information, ensuring that the fundamental laws of quantum information processing remain unbroken even in strong gravitational regimes.

## See Also
* [[wave-particle-duality]]
* [[superposition-collapse]]

---
title: Wave Function & Schrodinger Equation
category: physics
lang: en
order: 202
slug: schrodinger-equation
---

# Wave Function & Schrodinger Equation

## Theoretical Foundation
The wave function, typically denoted $\Psi(\mathbf{r}, t)$, is a complex-valued probability amplitude that encodes the complete quantum state of a system. It resides in an infinite-dimensional Hilbert space $L^2(\mathbb{R}^3)$, the space of square-integrable functions. Erwin Schrödinger proposed his equation in 1926 as the quantum analog of the classical Hamilton-Jacobi equation, motivated by de Broglie's wave hypothesis. The equation governs how the wave function evolves deterministically in time — between measurements — via unitary evolution that preserves the total probability $\int |\Psi|^2 d^3r = 1$.

The Born rule connects the wave function to physical reality: $|\Psi(\mathbf{r},t)|^2 d^3r$ is the probability of finding the particle in volume $d^3r$ at position $\mathbf{r}$ at time $t$. This probabilistic interpretation, initially controversial, is now foundational to all of quantum mechanics. The Schrödinger equation is the non-relativistic limit of quantum field theory and remains the workhorse for atomic physics, chemistry, and condensed matter physics.

A key feature is that unitary time evolution preserves the inner product $\langle\psi|\phi\rangle$ — information is never destroyed. This unitarity is in direct tension with the apparent non-unitary collapse of the wave function upon measurement, forming the core of the quantum measurement problem and the black hole information paradox.

## Mathematical Formulation
The time-dependent Schrödinger equation (TDSE) in abstract form is:
$$ i\hbar \frac{\partial}{\partial t} |\Psi(t)\rangle = \hat{H} |\Psi(t)\rangle $$
The formal solution is given by the unitary time-evolution operator:
$$ |\Psi(t)\rangle = \hat{U}(t,t_0)|\Psi(t_0)\rangle = e^{-i\hat{H}(t-t_0)/\hbar}|\Psi(t_0)\rangle $$
In the position basis, for a single particle of mass $m$ in potential $V(\mathbf{r},t)$:
$$ i\hbar \frac{\partial \Psi}{\partial t} = \left[-\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r},t)\right]\Psi(\mathbf{r},t) $$
For time-independent potentials, separating $\Psi(\mathbf{r},t) = \psi(\mathbf{r})e^{-iEt/\hbar}$ yields the time-independent Schrödinger equation (TISE):
$$ \hat{H}\psi(\mathbf{r}) = E\psi(\mathbf{r}) $$
This is an eigenvalue problem whose solutions give the allowed energy levels. For the hydrogen atom with Coulomb potential $V = -e^2/(4\pi\epsilon_0 r)$, the energy eigenvalues are:
$$ E_n = -\frac{m_e e^4}{2\hbar^2(4\pi\epsilon_0)^2 n^2} = -\frac{13.6 \text{ eV}}{n^2}, \quad n = 1, 2, 3, \ldots $$

## Key Properties
- **Linearity**: The superposition principle holds — if $\Psi_1$ and $\Psi_2$ are solutions, so is $c_1\Psi_1 + c_2\Psi_2$. This is the origin of quantum interference.
- **Unitarity**: Time evolution is unitary: $\hat{U}^\dagger\hat{U} = \mathbf{1}$, preserving probabilities and inner products.
- **Continuity equation**: $\frac{\partial \rho}{\partial t} + \nabla \cdot \mathbf{j} = 0$ where $\rho = |\Psi|^2$ and $\mathbf{j} = \frac{\hbar}{2mi}(\Psi^*\nabla\Psi - \Psi\nabla\Psi^*)$ — probability is locally conserved.
- **Ehrenfest's theorem**: Expectation values of position and momentum satisfy classical equations of motion: $\frac{d\langle\hat{x}\rangle}{dt} = \frac{\langle\hat{p}\rangle}{m}$, $\frac{d\langle\hat{p}\rangle}{dt} = -\langle\nabla V\rangle$.
- **Tunneling**: Classically forbidden regions (where $V > E$) allow exponentially decaying wave function penetration, enabling quantum tunneling through barriers.

## Physical Interpretation
The wave function is not a classical wave in physical space but an abstract probability amplitude in configuration space. For an $N$-particle system, $\Psi$ lives in a $3N$-dimensional space — it describes the collective quantum state, not individual trajectories. This non-locality of the wave function is the mathematical source of quantum entanglement.

The double-slit experiment is the canonical illustration: an electron passes through both slits simultaneously (as a wave), producing an interference pattern. Placing a detector at either slit to observe which-path information destroys the interference — the act of gaining information changes the wave function. This perfectly illustrates the complementarity at the heart of quantum mechanics.

For macroscopic objects, decoherence rapidly suppresses interference between macroscopically distinct states (superpositions like Schrödinger's cat), explaining why classical behavior emerges from quantum mechanics without any collapse postulate.

## Connections to Information Theory & Holography
Unitary Schrödinger evolution is a central axiom of quantum information theory: information is never destroyed, only scrambled. This principle is the content of the black hole information paradox — if a black hole can form from a pure state and evaporate entirely via Hawking radiation into a mixed state, unitarity is violated. In the AdS/CFT framework, the boundary CFT evolves unitarily under its own Schrödinger equation, implying that the bulk quantum gravity must also preserve information, even in the presence of black holes.

The path integral formulation of quantum mechanics, $\langle x_f | e^{-i\hat{H}T/\hbar} | x_i \rangle = \int \mathcal{D}x \, e^{iS[x]/\hbar}$, is the bridge to quantum field theory and provides the foundation for the holographic partition function $Z_{CFT} = Z_{gravity}$ in AdS/CFT.

## See Also
* [[wave-particle-duality]]
* [[superposition-collapse]]
* [[brownian-motion]]
* [[quantum-entanglement]]

---
title: QFT: Basic Level
category: Theoretical Physics
lang: en
order: 221
slug: qft-basic
---

# Quantum Field Theory (QFT): Basic Level

## Introduction
Quantum Field Theory (QFT) provides the theoretical framework for combining quantum mechanics and special relativity. It treats particles as excitations of underlying fields.

## Lagrangian Formalism
The dynamics of a field $\phi(x)$ are governed by the Lagrangian density $\mathcal{L}(\phi, \partial_\mu \phi)$. The equations of motion are derived from the action $S = \int d^4x \mathcal{L}$ using the Euler-Lagrange equations:
$$ \partial_\mu \left( \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)} \right) - \frac{\partial \mathcal{L}}{\partial \phi} = 0 $$

## Canonical Quantization
In the canonical approach, fields are promoted to operators satisfying equal-time commutation relations:
$$ [\phi(\mathbf{x}, t), \pi(\mathbf{y}, t)] = i \delta^{(3)}(\mathbf{x} - \mathbf{y}) $$
where $\pi = \partial \mathcal{L} / \partial \dot{\phi}$ is the conjugate momentum.

## Second Quantization and Particles
Fields are expanded in terms of creation ($a^\dagger_\mathbf{k}$) and annihilation ($a_\mathbf{k}$) operators:
$$ \phi(x) = \int \frac{d^3k}{(2\pi)^3 \sqrt{2\omega_\mathbf{k}}} (a_\mathbf{k} e^{-ik \cdot x} + a^\dagger_\mathbf{k} e^{ik \cdot x}) $$
This "second quantization" allows for the description of multi-particle states in Fock space: $\lvert \mathbf{k}_1, \mathbf{k}_2, \dots \rangle$.

## Feynman Diagrams
Perturbative calculations of the S-matrix are performed using Feynman diagrams, where lines represent propagators and vertices represent interactions defined by the Hamiltonian $H_{int}$.

## See Also
* [[schrodinger-equation]]
* [[scattering-amplitudes]]
* [[pauli-exclusion-quantization]]
* [[monte-carlo-method]]

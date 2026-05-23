---
title: "Quantum Mechanics"
category: "Quantum Physics"
order: 1
lang: "en"
slug: "quantum-mechanics"
growth: "budding"
---
# Quantum Mechanics

## Overview

Quantum Mechanics (QM) is the fundamental theory in physics that describes the physical properties of nature at the scale of atoms and subatomic particles. It is the foundation of all quantum physics, including quantum chemistry, quantum field theory, quantum technology, and quantum information science.

Classical physics, which was sufficient for describing nature at ordinary scales, fails to explain phenomena at the atomic scale, such as the stability of atoms, the blackbody radiation spectrum, and the photoelectric effect.

## Key Principles

### Wave-Particle Duality
Every particle or quantum entity may be described as either a particle or a wave. It expresses the inability of the classical concepts "particle" or "wave" to fully describe the behavior of quantum-scale objects.

### Superposition
A physical system—such as an electron—exists partly in all its theoretically possible states simultaneously; but, when measured, it gives a result corresponding to only one of the possible configurations.

### Uncertainty Principle
Formulated by Werner Heisenberg, it states that it is impossible to simultaneously measure the exact position and exact momentum of a particle with infinite precision.
$$ \Delta x \Delta p \geq \frac{\hbar}{2} $$

### Entanglement
A physical phenomenon that occurs when pairs or groups of particles are generated, interact, or share spatial proximity in ways such that the quantum state of each particle cannot be described independently of the state of the others. See [[quantum-entanglement]].

## Mathematical Formalism

### The Wave Function
The state of a quantum mechanical system is described by a wave function $\psi(x, t)$, which is a complex-valued probability amplitude.

### The Schrödinger Equation
The evolution of the wave function over time is governed by the Schrödinger equation:
$$ i\hbar \frac{\partial}{\partial t} \psi(\mathbf{r}, t) = \hat{H} \psi(\mathbf{r}, t) $$
where $\hat{H}$ is the Hamiltonian operator, representing the total energy of the system. See [[schrodinger-equation]].

### Born's Rule
The probability density of finding a particle at a specific point is given by the square of the magnitude of the wave function:
$$ P(x, t) = |\psi(x, t)|^2 $$

### Operators and Observables
In QM, physical quantities (observables) are represented by linear Hermitian operators acting on the Hilbert space of states. The possible results of a measurement are the [[spectral-theory-operators|eigenvalues]] of these operators.

## Interpretation of Quantum Mechanics

- **Copenhagen Interpretation**: The most common view, stating that quantum mechanics does not yield a description of an objective reality, but only deals with probabilities of observing, or measuring, various aspects of energy quanta.
- **Many-Worlds Interpretation**: Suggests that all possible alternate histories and futures are real, each representing an actual "world" (or universe).
- **Quantum Decoherence**: Explains how quantum systems interact with their environments to give the appearance of wave function collapse.

## Applications

- **Semiconductors**: The basis of modern electronics and transistors.
- **Lasers**: Operating on the principle of stimulated emission.
- **MRI**: Utilizing nuclear magnetic resonance.
- **Quantum Computing**: Leveraging superposition and entanglement for computation ([[quantum-computation]]).

## Related Topics
- [[schrodinger-equation]] — the fundamental equation of motion
- [[quantum-entanglement]] — non-local correlations
- [[quantum-information-entropy]] — information theory in QM
- [[qft-basic]] — extending QM to fields
- [[physics/quantum/effective-field-theory]] — approximation methods in QM/QFT
- [[quantum-computation]] — applications in information processing

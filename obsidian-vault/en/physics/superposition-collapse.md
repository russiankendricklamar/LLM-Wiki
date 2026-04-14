---
title: Superposition & Collapse
category: physics
lang: en
order: 204
slug: superposition-collapse
---

# Superposition & Collapse

## Theoretical Foundation
Quantum superposition posits that any two or more quantum states can be added together and the result will be another valid quantum state. This is a direct consequence of the linearity of the Hilbert space and the Schrödinger equation. The principle was experimentally confirmed by Young's double-slit experiment for light and later for electrons, neutrons, and even large molecules such as buckminsterfullerene C$_{60}$.

Wave function collapse — the transition from a superposition of eigenstates to a single eigenstate upon measurement — represents the most controversial aspect of quantum mechanics. This non-unitary, instantaneous process is postulated in the Copenhagen interpretation but has no derivation from first principles within standard quantum theory. The tension between deterministic, unitary Schrödinger evolution and stochastic, non-unitary collapse forms the measurement problem, one of the deepest unresolved conceptual issues in physics.

Alternative interpretations resolve this tension in different ways: the Many-Worlds interpretation (Everett, 1957) denies collapse entirely, holding that all branches coexist; decoherence theory (Zeh, Zurek) explains the appearance of collapse through entanglement with environmental degrees of freedom; and objective collapse theories (GRW, Penrose) propose physical collapse mechanisms triggered by gravity or particle number.

## Mathematical Formulation
A general state vector $|\psi\rangle$ is expanded in the orthonormal eigenbasis $\{|a_i\rangle\}$ of observable $\hat{A}$:
$$ |\psi\rangle = \sum_i c_i |a_i\rangle, \qquad \sum_i |c_i|^2 = 1 $$
The Born rule gives the probability of outcome $a_k$:
$$ P(a_k) = |c_k|^2 = |\langle a_k|\psi\rangle|^2 $$
Upon measurement yielding outcome $a_k$, the state undergoes the projection:
$$ |\psi\rangle \xrightarrow{\text{measurement}} \frac{\hat{P}_k |\psi\rangle}{\sqrt{\langle\psi|\hat{P}_k|\psi\rangle}} = |a_k\rangle $$
where $\hat{P}_k = |a_k\rangle\langle a_k|$ is the projection operator.

Decoherence is described through the reduced density matrix. Tracing over environmental degrees of freedom $\mathcal{E}$:
$$ \rho_S = \text{Tr}_\mathcal{E}(|\Psi_{SE}\rangle\langle\Psi_{SE}|) \longrightarrow \sum_i |c_i|^2 |a_i\rangle\langle a_i| $$
The off-diagonal (coherence) terms decay exponentially as the system entangles with the environment, on timescale $\tau_D \sim \tau_r (\lambda_{dB}/\Delta x)^2$ where $\lambda_{dB}$ is the thermal de Broglie wavelength and $\Delta x$ is the separation of pointer states.

## Key Properties
- **Linearity**: Superposition is a mathematical consequence of the vector space structure of Hilbert space; it holds exactly in the absence of measurement.
- **Pointer states**: Decoherence selects preferred "classical" states (pointer states) that are robust against environmental monitoring — typically position eigenstates for macroscopic objects.
- **Quantum Zeno effect**: Frequent measurements can freeze quantum evolution; a continuously monitored unstable particle never decays, because each measurement projects back to the undecayed state.
- **Macroscopic superpositions**: SQUID experiments have demonstrated superpositions of macroscopic current directions (billions of electrons), probing the boundary between quantum and classical.
- **No-cloning theorem**: An unknown quantum state in superposition cannot be perfectly copied — a direct consequence of linearity that underlies quantum cryptography.

## Physical Interpretation
The Schrödinger's cat thought experiment illustrates the measurement problem at its starkest: a cat's fate (alive or dead) is entangled with a quantum event (radioactive decay), placing the cat in a superposition of alive and dead. The Copenhagen interpretation holds that the state is undefined until observed; the Many-Worlds interpretation holds both outcomes occur in different branches; decoherence explains why we never observe the superposition — environmental entanglement makes the two branches effectively orthogonal and non-interfering on all practical timescales.

The key physical insight from decoherence is that collapse is not a fundamental process but an emergent one: the quantum coherence is not destroyed but becomes inaccessible, diluted into the vast degrees of freedom of the environment. What appears as collapse to a local observer is global unitary evolution.

## Connections to Information Theory & Holography
The tension between unitary evolution and collapse is central to the black hole information paradox. If Hawking radiation results in a genuinely mixed state from an initial pure state, unitarity is violated. In holographic duality, the boundary CFT evolves unitarily, so collapse cannot be fundamental — it must be emergent from decoherence, consistent with the Page curve calculation showing information eventually returns in late Hawking radiation.

Quantum error correction provides the modern framework: the logical information is encoded non-locally in superpositions across many physical qubits. Decoherence destroys local coherences but the logical information survives if the error correction threshold is not exceeded, directly analogous to how holographic bulk reconstruction protects information even as local geometry breaks down near a black hole singularity.

## See Also
* [[schrodinger-equation]]
* [[quantum-entanglement]]

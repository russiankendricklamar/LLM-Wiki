---
title: Quantum Entanglement
category: "Physics"
lang: en
order: 6
slug: quantum-entanglement
---

# Quantum Entanglement

## Theoretical Foundation
Quantum entanglement is a physical phenomenon where the quantum states of two or more objects cannot be described independently of the state of the others, even when the objects are separated by a large distance. First recognized as problematic by Einstein, Podolsky, and Rosen in their 1935 EPR paper, entanglement was initially viewed as evidence of incompleteness in quantum mechanics. Bell's 1964 theorem and subsequent experiments by Aspect et al. (1982) conclusively demonstrated that entanglement is a genuine, non-classical feature of nature — not explainable by any local hidden-variable theory.

The state of an entangled bipartite system resides in the tensor product Hilbert space $\mathcal{H}_A \otimes \mathcal{H}_B$. Entangled states represent non-local correlations that cannot be reproduced by any classical strategy. The degree of entanglement is a measurable resource, quantified by entanglement entropy, concurrence, and negativity, and it fuels quantum computing, cryptography, and — in modern theoretical physics — is conjectured to underlie the very fabric of spacetime.

Entanglement is also central to the measurement problem: when a quantum system interacts with its environment, entanglement spreads to environmental degrees of freedom, producing the apparent classical world through decoherence. Understanding how entanglement is created, distributed, and destroyed in strongly-coupled systems and near black holes is one of the central open problems of theoretical physics.

## Mathematical Formulation
A bipartite pure state $|\psi\rangle \in \mathcal{H}_A \otimes \mathcal{H}_B$ is entangled if it cannot be written as a product state:
$$ |\psi\rangle \neq |\phi_A\rangle \otimes |\phi_B\rangle $$
The canonical example is the Bell state:
$$ |\Phi^+\rangle = \frac{1}{\sqrt{2}}\left(|00\rangle + |11\rangle\right) $$
The Schmidt decomposition guarantees that any bipartite pure state can be written as:
$$ |\psi\rangle = \sum_i \sqrt{\lambda_i} |e_i\rangle_A \otimes |f_i\rangle_B $$
where $\lambda_i \geq 0$, $\sum_i \lambda_i = 1$, and the Schmidt number (number of non-zero $\lambda_i$) equals 1 if and only if the state is separable.

The von Neumann entanglement entropy is defined via the reduced density matrix $\rho_A = \text{Tr}_B(|\psi\rangle\langle\psi|)$:
$$ S_E = - \text{Tr}(\rho_A \ln \rho_A) = -\sum_i \lambda_i \ln \lambda_i $$
It vanishes for product states and is maximal ($\ln d$) for maximally entangled states of local dimension $d$.

Bell's CHSH inequality provides an experimentally testable bound: for local hidden variables, the CHSH parameter $\mathcal{S}$ satisfies $|\mathcal{S}| \leq 2$, while quantum mechanics allows $|\mathcal{S}| \leq 2\sqrt{2}$ (Tsirelson's bound), with the Bell state saturating this bound.

## Key Properties
- **Non-locality**: Entanglement produces correlations that cannot be explained by shared classical information, yet cannot be used to transmit information faster than light (no-signaling theorem).
- **Monogamy**: If $A$ and $B$ are maximally entangled, $A$ cannot be entangled with any third party $C$ — a constraint central to black hole firewall arguments.
- **Entanglement as resource**: Entanglement enables quantum teleportation (transmission of an unknown qubit using two classical bits and one Bell pair) and superdense coding.
- **Entanglement distillation**: Multiple partially-entangled copies can be concentrated into fewer maximally entangled pairs using local operations and classical communication (LOCC).
- **Area law**: In ground states of gapped local Hamiltonians, entanglement entropy satisfies an area law $S \propto |\partial A|$, much like the Bekenstein-Hawking entropy of a black hole horizon.

## Physical Interpretation
The key physical insight is that entanglement is not about particles "communicating" — it is about the structure of the joint quantum state. Before measurement, there is no fact about the individual subsystems; the correlations are inherent in the global state. When one particle is measured, the other's state is instantaneously determined — but this determination carries no information because the outcomes are random.

A vivid thought experiment: place two electrons in a singlet state $|\psi^-\rangle = (|01\rangle - |10\rangle)/\sqrt{2}$ and send them to opposite sides of the galaxy. Measuring spin-up on one guarantees spin-down on the other, regardless of the spatial separation. Bell's theorem rules out any pre-arranged answer (hidden variable) that could reproduce all measurement correlations simultaneously.

Quantum teleportation operationalizes entanglement: Alice holds one half of a Bell pair and an unknown qubit $|\chi\rangle$. She performs a Bell-basis measurement on her two particles, sending 2 classical bits to Bob, who applies a corresponding unitary to reconstruct $|\chi\rangle$ — without the state ever traversing the space between them.

## Connections to Information Theory & Holography
Entanglement entropy is the central quantity in quantum information theory. The Ryu-Takayanagi formula in AdS/CFT directly identifies the entanglement entropy of a boundary region $A$ with the area of the minimal bulk surface $\gamma_A$:
$$ S_E(A) = \frac{\text{Area}(\gamma_A)}{4G_N\hbar} $$
This formula translates quantum information into spacetime geometry, suggesting that spacetime itself may be built from entanglement.

The ER=EPR conjecture (Maldacena and Susskind, 2013) proposes that entangled particles are connected by microscopic Einstein-Rosen bridges. Separating two entangled black holes by a large distance does not destroy their Einstein-Rosen bridge — a radical identification of quantum correlations with wormhole geometry.

Entanglement is also the key quantity in quantum error correction, which underlies holographic bulk reconstruction: the logical qubit of a bulk field is encoded redundantly in boundary degrees of freedom, with the Ryu-Takayanagi surface playing the role of the logical operator's support.

## See Also
* [[superposition-collapse]]
* [[black-hole-soft-hair]]
* [[random-matrix-theory]]
* [[shannon-entropy]]
* [[schrodinger-equation]]

---
title: QFT: Basic Level
category: "Physics"
lang: en
order: 8
slug: qft-basic
---

# Quantum Field Theory (QFT): Basic Level

## Prerequisites

[[wave-particle-duality]], [[schrodinger-equation]], [[group-theory]]

## Theoretical Foundation
Quantum Field Theory provides the theoretical framework for combining quantum mechanics and special relativity. It treats particles not as fundamental objects but as localized excitations of underlying quantum fields that permeate all of spacetime. This shift from a particle picture to a field picture resolves the tension between quantum mechanics (which treats particle number as fixed) and special relativity (which allows particle creation and annihilation via $E = mc^2$).

The need for QFT was recognized in the late 1920s: Dirac's equation predicted antiparticles, and the interaction of quantized matter with the electromagnetic field (quantum electrodynamics, QED) required dealing with an infinite number of degrees of freedom. The modern formulation — developed by Feynman, Schwinger, Tomonaga, and Dyson — handles the infinities through renormalization, producing predictions (anomalous magnetic moment of the electron: agreement to 12 significant figures) that are among the most precise in all of science.

QFT underlies the entire Standard Model of particle physics: the electromagnetic field is the photon field, the weak force is mediated by $W^\pm$ and $Z$ bosons, and the strong force by gluons — all arising from gauge symmetry principles applied to quantized fields.

## Mathematical Formulation
The dynamics of a field $\phi(x)$ are governed by the Lagrangian density $\mathcal{L}(\phi, \partial_\mu\phi)$. The action is $S = \int d^4x\,\mathcal{L}$, and equations of motion follow from the Euler-Lagrange equations:
$$ \partial_\mu\left(\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\right) - \frac{\partial\mathcal{L}}{\partial\phi} = 0 $$
For the free real scalar field with mass $m$, $\mathcal{L} = \frac{1}{2}(\partial_\mu\phi)^2 - \frac{1}{2}m^2\phi^2$, giving the Klein-Gordon equation:
$$ (\Box + m^2)\phi = 0, \qquad \Box = \partial_t^2 - \nabla^2 $$

Canonical quantization promotes $\phi(\mathbf{x},t)$ to an operator satisfying equal-time commutation relations:
$$ [\phi(\mathbf{x},t), \pi(\mathbf{y},t)] = i\hbar\,\delta^{(3)}(\mathbf{x}-\mathbf{y}) $$
where $\pi = \partial\mathcal{L}/\partial\dot\phi$ is the conjugate momentum. Expanding in Fourier modes:
$$ \phi(x) = \int\frac{d^3k}{(2\pi)^3\sqrt{2\omega_\mathbf{k}}}\left(a_\mathbf{k}\,e^{-ik\cdot x} + a_\mathbf{k}^\dagger\,e^{ik\cdot x}\right) $$
with $\omega_\mathbf{k} = \sqrt{|\mathbf{k}|^2 + m^2}$. The creation operator $a_\mathbf{k}^\dagger$ adds a particle with momentum $\mathbf{k}$; the Fock space basis is $|n_{\mathbf{k}_1}, n_{\mathbf{k}_2},\ldots\rangle$.

The S-matrix element (transition amplitude) between initial state $|i\rangle$ and final state $|f\rangle$ is computed perturbatively using the interaction picture:
$$ S_{fi} = \langle f | T\exp\left(-i\int d^4x\,\mathcal{H}_{\rm int}(x)\right) | i\rangle $$
Expanding in powers of the coupling and applying Wick's theorem generates Feynman diagrams, with propagators $\Delta_F(x-y) = \langle 0|T\phi(x)\phi(y)|0\rangle$ for internal lines.

## Key Properties
- **Crossing symmetry**: Particles in the initial state correspond to antiparticles in the final state; an amplitude for $A + B \to C + D$ is related by analytic continuation to $A + \bar{C} \to \bar{B} + D$.
- **Renormalization**: Divergent loop integrals are handled by regularization (dimensional: $d = 4-\epsilon$) and renormalization (absorbing divergences into redefined couplings), giving running coupling constants that depend on energy scale via the renormalization group.
- **Optical theorem**: The imaginary part of the forward scattering amplitude equals the total cross-section: ${\rm Im}\,\mathcal{M}(i\to i) = 2E_{\rm cm}p_{\rm cm}\sigma_{\rm tot}$, a consequence of unitarity.
- **CPT theorem**: Every local Lorentz-invariant QFT is invariant under the combined operation of charge conjugation $C$, parity $P$, and time reversal $T$.
- **Spontaneous symmetry breaking**: If the Lagrangian has a symmetry but the vacuum does not, Goldstone bosons appear (massless scalars for global symmetries) or gauge bosons acquire mass via the Higgs mechanism (for local symmetries).

## Physical Interpretation
The key conceptual shift from quantum mechanics to QFT is that the wave function $\psi(\mathbf{r})$ is replaced by a quantum field $\phi(\mathbf{x})$ — a field operator at every point in spacetime. A "particle" is not a fundamental ingredient but an excitation: the electron is a localized ripple in the electron field, the photon in the electromagnetic field. Particle creation and annihilation are simply excitations being added to or removed from the field.

Feynman diagrams are not just calculational tools but a visual language: an internal line represents a propagating virtual quantum, a vertex an interaction, and the diagram as a whole a contribution to the probability amplitude. The perturbative expansion in coupling constant maps each diagram to a definite mathematical expression, enabling systematic calculations to any desired order.

## Connections to Information Theory & Holography
QFT is the foundation of all holographic dualities. In AdS/CFT, the boundary CFT is a specific QFT (large-$N$ gauge theory), and the bulk physics is reconstructed from its correlation functions. The path integral $Z = \int\mathcal{D}\phi\,e^{iS[\phi]}$ is the fundamental object: in holography, $Z_{\rm CFT} = Z_{\rm gravity}$.

In [[celestial-holography]], the 4D S-matrix computed in QFT is mapped to correlators of a 2D celestial CFT. The Feynman diagram expansion translates into a loop expansion of celestial amplitudes, with UV divergences in the bulk corresponding to short-distance singularities in the celestial OPE.

## See Also
* [[schrodinger-equation]]
* [[scattering-amplitudes]]
* [[pauli-exclusion-quantization]]
* [[monte-carlo-method]]

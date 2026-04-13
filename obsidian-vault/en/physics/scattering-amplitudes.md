---
title: Scattering Amplitudes & S-matrix
category: physics
lang: en
order: 213
slug: scattering-amplitudes
---

# Scattering Amplitudes & S-matrix

## Theoretical Foundation
The S-matrix (scattering matrix) is the fundamental object in quantum field theory that relates the initial "in" states of a physical system to the final "out" states. Scattering amplitudes are the elements of this matrix, representing the probability amplitudes for various transitions. In modern computational physics, the "S-matrix program" seeks to determine these amplitudes using consistency requirements like unitarity, analyticity, and crossing symmetry, often bypassing the need for traditional Feynman diagrams.

## Mathematical Formulation
The S-matrix operator $\hat{S}$ is defined such that:
$$ |\text{out}\rangle = \hat{S} |\text{in}\rangle $$
The transition amplitude $\mathcal{M}$ is related to the S-matrix by:
$$ S_{fi} = \delta_{fi} + i (2\pi)^4 \delta^{(4)}(P_f - P_i) \mathcal{M} $$
Unitarity of the S-matrix, $\hat{S}^\dagger \hat{S} = I$, implies the Optical Theorem, which relates the imaginary part of the forward scattering amplitude to the total cross-section:
$$ \text{Im} \mathcal{M}(i \to i) = 2 E_{cm} p_{cm} \sigma_{tot} $$

## Physical Significance & Holography
Scattering amplitudes are the "observables" in [[celestial-holography]]. By performing a Mellin transform on 4D S-matrix elements, they are mapped to correlation functions in a 2D Conformal Field Theory on the celestial sphere. This transform changes the basis from momentum eigenstates to "conformal primary" states, revealing hidden symmetries and providing a path to understanding quantum gravity in asymptotically flat spacetimes through the lens of lower-dimensional holography.

## See Also
* [[soft-theorems]]
* [[celestial-holography]]
* [[asymptotic-spacetime]]

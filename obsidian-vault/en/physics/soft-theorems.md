---
title: Soft Theorems
category: physics
lang: en
order: 210
slug: soft-theorems
---

# Soft Theorems

## Theoretical Foundation
Soft theorems describe the behavior of scattering amplitudes when the energy of one of the external particles (a photon or graviton) goes to zero (the "soft limit"). Originally discovered by Weinberg, these theorems state that the amplitude for a process with an additional soft particle is proportional to the amplitude without it, multiplied by a universal "soft factor." These are not just approximations but exact relations derived from gauge invariance and the infrared structure of the theory.

## Mathematical Formulation
Weinberg's Soft Graviton Theorem for a scattering amplitude $\mathcal{M}_{n+1}$ with $n$ hard particles and one soft graviton with momentum $q$ is:
$$ \lim_{q \to 0} \mathcal{M}_{n+1}(q, p_1, \dots, p_n) = \left( \sum_{i=1}^n \frac{\kappa}{2} \frac{\epsilon_{\mu\nu} p_i^\mu p_i^\nu}{p_i \cdot q} \right) \mathcal{M}_n(p_1, \dots, p_n) $$
where $\epsilon_{\mu\nu}$ is the polarization tensor and $\kappa = \sqrt{32\pi G}$. The $1/q$ pole indicates an infrared divergence that must be carefully handled via the Bloch-Nordsieck or Kulish-Faddeev prescriptions.

## Physical Significance & Information Theory
Soft theorems are the Ward identities of [[asymptotic-symmetries]]. In gravity, the leading soft theorem corresponds to supertranslations, while the sub-leading soft theorem corresponds to superrotations. From an information perspective, soft theorems ensure that the S-matrix is consistent with the infinite set of conservation laws at null infinity. They are a critical component of [[pasterski-triangle]] and the foundation for understanding how information is distributed in the infrared sector of quantum gravity.

## See Also
* [[pasterski-triangle]]
* [[scattering-amplitudes]]
* [[asymptotic-symmetries]]

---
title: Soft Theorems
category: "Physics"
lang: en
order: 12
slug: soft-theorems
---

# Soft Theorems

## Prerequisites

[[scattering-amplitudes]], [[asymptotic-symmetries]]

## Theoretical Foundation
Soft theorems describe the universal behavior of scattering amplitudes when the energy of one external particle — a photon, gluon, or graviton — goes to zero (the "soft limit"). Originally discovered by Low (1958) for photons and Weinberg (1965) for gravitons, these theorems state that the amplitude for emitting an additional zero-energy particle factorizes into a universal soft factor multiplied by the amplitude without that particle. They are exact statements, not approximations, following from gauge invariance and Lorentz symmetry.

For decades, soft theorems were treated as technical tools for managing infrared divergences in perturbative calculations. The modern understanding, established by Strominger (2014) and collaborators, is far more profound: soft theorems are the Ward identities of asymptotic symmetries. The leading soft graviton theorem is the Ward identity of BMS supertranslations; the subleading theorem corresponds to superrotations; and a sub-subleading theorem corresponds to $w_{1+\infty}$ symmetry. This identification makes soft theorems the bridge between the infrared structure of amplitudes and the symmetry structure of spacetime at infinity.

The universality of soft theorems — that they hold for any hard process — is a direct consequence of gauge invariance. It means that zero-energy quanta remember everything about the scattering process, and their correlations encode an infinite set of conserved charges that constrain the S-matrix.

## Mathematical Formulation
Weinberg's leading soft graviton theorem states that when a graviton with momentum $q^\mu$ and polarization $\epsilon_{\mu\nu}$ is added to an $n$-particle amplitude:
$$ \mathcal{M}_{n+1}(q, p_1,\ldots,p_n) \xrightarrow{q\to 0} S^{(0)}\,\mathcal{M}_n(p_1,\ldots,p_n) + \mathcal{O}(q^0) $$
where the leading soft factor is:
$$ S^{(0)} = \frac{\kappa}{2}\sum_{i=1}^n \frac{\epsilon_{\mu\nu}p_i^\mu p_i^\nu}{p_i\cdot q} $$
with $\kappa = \sqrt{32\pi G}$. The $1/q$ pole signals an infrared divergence; the residue is universal.

The subleading soft graviton theorem (Cachazo-He, 2014; Strominger, 2014) gives:
$$ \mathcal{M}_{n+1} = \left(S^{(0)} + S^{(1)} + \mathcal{O}(q)\right)\mathcal{M}_n $$
where the subleading factor involves angular momentum operators acting on the hard particles:
$$ S^{(1)} = -\frac{i\kappa}{2}\sum_{i=1}^n \frac{\epsilon_{\mu\nu}p_i^\mu q_\lambda J_i^{\nu\lambda}}{p_i\cdot q} $$
with $J_i^{\mu\nu} = p_i^\mu\partial_{p_{i\nu}} - p_i^\nu\partial_{p_{i\mu}} + \Sigma_i^{\mu\nu}$ including orbital and spin angular momentum.

For the soft photon, the Low-Burnett-Kroll theorem gives:
$$ \mathcal{M}_{n+1}^{\rm em}(q, p_i) \xrightarrow{q\to 0} \left(\sum_{i=1}^n e_i\frac{\epsilon\cdot p_i}{p_i\cdot q}\right)\mathcal{M}_n + \mathcal{O}(q^0) $$

The Ward identity statement: inserting a soft graviton is equivalent to acting with the BMS supertranslation charge:
$$ \langle{\rm out}|a_{\rm soft}(q)\hat{S}|{\rm in}\rangle = \langle{\rm out}|(Q_f^+ - Q_f^-)\hat{S}|{\rm in}\rangle $$
where $f(z,\bar{z})$ is the supertranslation parameter related to the graviton mode by a spherical harmonic expansion.

## Key Properties
- **Universality**: Soft factors depend only on the momenta, charges, and spins of the hard particles — not on the details of their interactions.
- **Infrared divergences**: In loop amplitudes, soft theorems govern the structure of IR divergences; the Bloch-Nordsieck and Kulish-Faddeev theorems use soft factors to organize and cancel these divergences in inclusive cross sections.
- **Soft photon vs. graviton**: The soft photon factor goes as $1/q$; the soft graviton factor also goes as $1/q$ but involves two powers of polarization $\epsilon_{\mu\nu}$, reflecting the spin-2 nature of the graviton.
- **Quantum corrections**: At loop level, the leading soft graviton theorem receives $\log\omega$ corrections beginning at one loop; the subleading theorem is corrected at one loop by terms involving the $\beta$-function.
- **Color**: In QCD, the soft gluon theorem involves color generators $T^a_i$ acting on the hard partons; the color-ordered partial amplitudes have simpler soft limits.

## Physical Interpretation
The soft theorem is nature's way of encoding conservation laws in the S-matrix. Each zero-energy graviton mode corresponds to a conserved BMS charge, and the soft theorem states that this charge is conserved across any scattering process. The infinite number of soft charges — one for each angular mode on the sphere — provides an infinite set of selection rules constraining which initial states can evolve into which final states.

Physically: if a hard scattering process occurs, the infrared (zero-energy) gravitons emitted into the far field carry a definite "soft imprint" of the interaction. This imprint is fixed by the momenta and quantum numbers of the hard particles, universally and exactly. The soft gravitons are, in a precise sense, memories of the scattering event.

## Connections to Information Theory & Holography
Soft theorems are the Ward identities of the symmetry algebra of the [[celestial-holography|celestial CFT]]. In the Mellin-transformed basis, the soft graviton becomes a Kac-Moody current $P(z,\bar{z})$, and the Ward identity of the soft theorem becomes the standard current algebra OPE of the 2D theory.

From an information-theoretic perspective, soft theorems ensure that the S-matrix respects an infinite set of conservation laws. These conserved quantities — soft charges — are the proposed carriers of information in black hole evaporation: as matter falls into a black hole, it excites soft modes on the horizon, and the soft theorem guarantees that these modes carry definite charges visible to an asymptotic observer.

## See Also
* [[pasterski-triangle]]
* [[scattering-amplitudes]]
* [[asymptotic-symmetries]]

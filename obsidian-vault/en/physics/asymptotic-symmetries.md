---
title: Asymptotic Symmetries
category: "Physics"
lang: en
order: 13
slug: asymptotic-symmetries
---

# Asymptotic Symmetries

## Theoretical Foundation
Asymptotic symmetries are the symmetries of a spacetime that persist at its boundary — null infinity $\mathcal{I}$ for asymptotically flat spacetimes. Unlike local gauge transformations, which are redundant descriptions of the same physical state, asymptotic symmetries are "large" gauge transformations that act non-trivially on the physical Hilbert space. They map physically distinct states into one another and generate conserved charges with genuine physical content.

The discovery of asymptotic symmetries in gravity dates to Bondi, van der Burg, Metzner (1962) and Sachs (1962), who showed that the symmetry group of asymptotically flat spacetimes is not the finite-dimensional Poincaré group but the infinite-dimensional BMS group. This was initially seen as an embarrassment — an unwanted infinite degeneracy — but is now understood as a profound feature encoding the vacuum structure and soft physics of gravity.

The modern renaissance, driven by work of Strominger, Campiglia, Laddha, and others, has extended asymptotic symmetries to include superrotations (infinite-dimensional extensions of Lorentz transformations), w-algebra symmetries, and higher-spin generalizations. Each new symmetry comes with associated conserved charges, soft theorems, and memory effects, building out the full infrared structure of gauge theories and gravity.

## Mathematical Formulation
An asymptotic symmetry is a diffeomorphism $\xi^\mu$ that preserves the asymptotic form of the metric. In Bondi-Sachs gauge, the falloff conditions near $\mathcal{I}^+$ require:
$$ \mathcal{L}_\xi g_{\mu\nu} = \mathcal{O}(\text{prescribed falloff rates}) $$
The general solution has the form:
$$ \xi^u = f(z,\bar{z}) + \frac{u}{2}(D_z Y^z + D_{\bar{z}} Y^{\bar{z}}) + \cdots $$
$$ \xi^z = Y^z(z) + \cdots $$
where $f(z,\bar{z})$ is any smooth function on $S^2$ (generating supertranslations) and $Y^z(z)$ is a holomorphic vector field on the sphere (generating superrotations).

The associated conserved charges are computed via the covariant phase space formalism. For a supertranslation $f$:
$$ Q_f = \frac{1}{4\pi G} \int_{S^2} d^2z\, \gamma_{z\bar{z}}\, f\, m_B $$
where $m_B$ is the Bondi mass aspect. The charge is conserved: $\partial_u Q_f = 0$ in the absence of radiation, and satisfies the flux-balance law $\partial_u Q_f = -T_f^{\rm flux}$ when radiation is present.

The algebra of charges is:
$$ \{Q_f, Q_{f'}\} = Q_{\{f,f'\}_{\rm BMS}} $$
recovering the BMS algebra at the level of Poisson brackets.

## Key Properties
- **Large vs. small gauge transformations**: Small gauge transformations vanish at the boundary and generate zero charge; large ones are non-trivial at the boundary and generate non-zero conserved charges.
- **Infinite vacuum degeneracy**: Each vacuum is labeled by a function $C_{zz}^{(0)}(z,\bar{z})$ on $S^2$; supertranslations shift this function, mapping one vacuum to another with the same energy.
- **Matching conditions**: Antipodal matching between $\mathcal{I}^+_-$ (the far past of future null infinity) and $\mathcal{I}^-_+$ (the far future of past null infinity) is required for overall charge conservation across a scattering process.
- **Superrotation charges**: Unlike supertranslation charges which are finite for any smooth $f$, superrotation charges can diverge for generic $Y^z$, requiring careful regularization.
- **Electromagnetic analogy**: In QED, large gauge transformations generate an infinite set of soft photon charges; the leading soft photon theorem is their Ward identity.

## Physical Interpretation
The physical content of asymptotic symmetries is that they label physically distinct vacua of the theory. Two spacetimes related by a BMS supertranslation are distinguishable by soft graviton detectors — they have different integrated flux correlations. In scattering language: an $n$-particle amplitude and the same amplitude with an additional zero-energy graviton are related by the supertranslation Ward identity, which is exactly Weinberg's soft graviton theorem.

Concretely, imagine a spacetime before and after a gravitational wave burst passes. The transition is not back to the original vacuum but to a BMS-rotated vacuum — a permanent "memory" of the radiation event. This is the gravitational memory effect, directly observable in principle by monitoring test masses.

## Connections to Information Theory & Holography
Asymptotic symmetries provide the symmetry group for the boundary theory in [[celestial-holography]]. The infinite-dimensional BMS group acts as the global symmetry of the celestial CFT, with supertranslation charges becoming the Kac-Moody currents of the 2D theory.

These symmetries are essential for the conservation of soft charges, which are proposed to encode the information of infalling matter in the black hole context. The infinite number of conservation laws from asymptotic symmetries provides the mechanism by which information is imprinted on outgoing radiation, addressing the foundations of the black hole information paradox.

## See Also
* [[bms-group]]
* [[celestial-holography]]
* [[soft-theorems]]

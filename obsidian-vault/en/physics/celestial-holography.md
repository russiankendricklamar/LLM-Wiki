---
title: Celestial Holography
category: "Physics"
lang: en
order: 21
slug: celestial-holography
---

# Celestial Holography

## Prerequisites

[[conformal-field-theory]], [[bms-group]], [[scattering-amplitudes]]

## Theoretical Foundation
Celestial holography is a proposed dual description of quantum gravity in 4D asymptotically flat spacetimes in terms of a 2D Conformal Field Theory (CFT) living on the celestial sphere at null infinity. Pioneered by Strominger, Pasterski, and collaborators in the 2010s, it aims to extend the holographic principle — so far most concretely realized in AdS/CFT — to flat spacetime and thus to the real universe.

The central idea is that the 4D S-matrix, which encodes all scattering processes in flat space, is equivalent to the correlation functions of a 2D CFT on the sphere $S^2 \cong \mathbb{CP}^1$ at $\mathcal{I}$. The Lorentz group $SL(2,\mathbb{C})$ acts on the celestial sphere as the global conformal group, so bulk particles with definite 4-momentum map to local operators with definite conformal dimension in the boundary theory — the "celestial amplitudes."

Unlike AdS/CFT, where the dictionary is well-understood and the boundary theory is often an ordinary QFT, the celestial CFT is exotic: it is non-unitary (because Lorentz boosts are non-compact), its operator spectrum includes a continuous series of conformal dimensions, and the stress tensor and current algebras have unusual properties. Nevertheless, the framework has yielded concrete results: soft theorems become Ward identities, collinear limits become OPEs, and loop corrections produce Kac-Moody and w-algebra structures.

## Mathematical Formulation
The core of the celestial dictionary is the Mellin transform, which maps the energy $\omega$ of a bulk particle to the conformal dimension $\Delta$ of a celestial operator:
$$ \widetilde{\mathcal{M}}(\Delta_i, z_i, \bar{z}_i) = \prod_i \int_0^\infty d\omega_i\, \omega_i^{\Delta_i - 1} \mathcal{M}(\omega_i, z_i, \bar{z}_i) $$
This converts plane-wave scattering amplitudes to "conformal primary amplitudes" that transform as CFT correlators under $SL(2,\mathbb{C})$:
$$ \widetilde{\mathcal{M}} \to \prod_i \left(\frac{\partial z_i'}{\partial z_i}\right)^{h_i}\left(\frac{\partial \bar{z}_i'}{\partial \bar{z}_i}\right)^{\bar{h}_i} \widetilde{\mathcal{M}} $$
where $h_i = (\Delta_i + J_i)/2$, $\bar{h}_i = (\Delta_i - J_i)/2$, and $J_i$ is the helicity.

The soft graviton operator $P(z,\bar{z})$ at $\mathcal{I}^+$ inserts a supertranslation charge; its OPE with a hard operator $\mathcal{O}_\Delta$ is:
$$ P(z)\, \mathcal{O}_\Delta(w,\bar{w}) \sim \frac{1}{z-w}\,\partial_{\bar{w}}\mathcal{O}_\Delta(w,\bar{w}) + \cdots $$
reflecting the action of the supertranslation on the conformal primary. The collinear limit $z_1 \to z_2$ of two celestial operators produces the celestial OPE:
$$ \mathcal{O}_{\Delta_1}(z_1)\mathcal{O}_{\Delta_2}(z_2) \sim \sum_k C_{\Delta_1\Delta_2}^{\Delta_k} (z_1-z_2)^{\Delta_k - \Delta_1 - \Delta_2} \mathcal{O}_{\Delta_k}(z_2) $$

## Key Properties
- **Lorentz = global conformal group**: The four-dimensional Lorentz group $SL(2,\mathbb{C})$ acts exactly as the 2D global conformal group on the celestial sphere, fixing the transformation law of celestial amplitudes.
- **Soft theorems as Ward identities**: Leading, subleading, and sub-subleading soft graviton theorems are the Ward identities for BMS supertranslations, superrotations, and $w_{1+\infty}$ symmetry respectively.
- **$w_{1+\infty}$ symmetry**: The full symmetry algebra of tree-level graviton scattering in flat space contains a $w_{1+\infty}$ algebra, discovered by Strominger and Guevara et al., which extends the Virasoro symmetry and constrains all graviton amplitudes.
- **Continuous spectrum**: Celestial operators have conformal dimension on the principal continuous series $\Delta = 1 + i\lambda$, $\lambda \in \mathbb{R}$, rather than discrete dimensions as in unitary 2D CFTs.
- **Loop corrections**: One-loop corrections introduce Kac-Moody level shifts and anomalous dimensions, encoding the running of gravitational couplings in the celestial CFT.

## Physical Interpretation
The celestial sphere is the sky — the $S^2$ that a cosmological observer sees when looking out at the universe. Every null geodesic from the interior punctures the celestial sphere at a point $(z, \bar{z})$, so a particle's direction of travel corresponds to a point on the boundary. The Mellin transform replaces the energy label of a particle with a conformal dimension, converting momentum-eigenstate scattering to operator insertions in a 2D correlation function.

This makes the S-matrix — the object encoding all particle physics and gravitational scattering — into a CFT observable. Infrared divergences, which plague perturbative calculations in flat space, become short-distance singularities in the celestial CFT, handled by standard 2D renormalization group techniques.

## Connections to Information Theory & Holography
Celestial holography provides a flat-space realization of the holographic principle: all the physics of a 4D universe, including quantum gravity, is encoded in a 2D theory on the celestial sphere. The information content of the S-matrix — including how black holes form and evaporate — is in principle accessible through celestial CFT correlators.

The Ryu-Takayanagi formula does not directly apply in flat space, but analogs are being developed: the area of surfaces in the bulk corresponds to entanglement entropy of regions on the celestial sphere, with the BMS symmetry playing the role of conformal symmetry in organizing the entanglement structure.

## See Also
* [[asymptotic-symmetries]]
* [[bms-group]]
* [[scattering-amplitudes]]

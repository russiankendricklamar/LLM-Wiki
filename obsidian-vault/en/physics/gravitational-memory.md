---
title: Gravitational Memory
category: physics
lang: en
order: 11
slug: gravitational-memory
---

# Gravitational Memory

## Prerequisites

[[gravitational-waves-gr]], [[soft-theorems]]

## Theoretical Foundation
Gravitational memory is a permanent, non-oscillatory change in the relative displacement of test masses following the passage of a gravitational wave burst. First identified by Zel'dovich and Polnarev (1974) in the linear approximation and later by Christodoulou (1991) in full nonlinear general relativity, the effect represents a genuine transition between two distinct vacua of the gravitational field — two physically inequivalent flat spacetimes related by a BMS supertranslation.

The Christodoulou memory — also called nonlinear or null memory — arises from the energy carried to null infinity by the gravitational waves themselves, not just from the changing mass quadrupole of the source. It is a cumulative effect: as the waves propagate outward, they carry energy-momentum that sources additional gravitational radiation, and the total integrated effect produces a permanent metric shift. This nonlinear memory is in principle detectable by pulsar timing arrays and next-generation space-based detectors such as LISA.

The significance of gravitational memory extends beyond observational gravity: it is one corner of the Pasterski triangle, alongside soft theorems and asymptotic symmetries. The three phenomena are related by Fourier transform and symplectic structure maps, revealing that memory is the physical manifestation of the infinite vacuum degeneracy of general relativity.

## Mathematical Formulation
The memory effect is the permanent change in the transverse-traceless metric perturbation:
$$ \Delta h_{ij}^{\rm TT} = \lim_{u \to +\infty} h_{ij}^{\rm TT}(u) - \lim_{u \to -\infty} h_{ij}^{\rm TT}(u) $$
The linear (ordinary) memory is sourced by the change in the mass quadrupole moment:
$$ \Delta h_{ij}^{\rm TT} = \frac{2G}{r}\Delta \ddot{Q}_{ij}^{\rm TT} $$
The nonlinear Christodoulou memory is sourced by the integrated energy flux to $\mathcal{I}^+$:
$$ \Delta h_{ij}^{\rm TT}(\hat{n}) = \frac{4G}{r} \int_{-\infty}^{+\infty} du \int \frac{d^2\hat{n}'}{4\pi} \frac{\dot{h}_{kl}^{\rm TT}(\hat{n}') \dot{h}^{kl\,\rm TT}(\hat{n}')}{1 - \hat{n}\cdot\hat{n}'} \bigg|^{\rm TT}_{\hat{n}} $$
In Bondi coordinates, the memory corresponds to the jump in the Bondi shear tensor $C_{zz}$ between early and late retarded times:
$$ \Delta C_{zz} = C_{zz}(u \to +\infty) - C_{zz}(u \to -\infty) $$
This is directly related to the action of a BMS supertranslation with parameter $f(z,\bar{z})$ satisfying:
$$ \Delta C_{zz} = -2D_z^2 f $$

## Key Properties
- **DC offset**: Memory is a zero-frequency ("DC") component of the gravitational wave signal — it does not oscillate but rather steps permanently from one value to another.
- **Two types**: Ordinary (linear) memory comes from unbound mass ejecta; Christodoulou (nonlinear) memory comes from the energy carried by the gravitational waves themselves. Both contribute at the same post-Newtonian order for realistic sources.
- **Detectable**: For a binary black hole merger at $\sim 400$ Mpc (like GW150914), the memory amplitude is $\Delta h \sim 10^{-21}$, comparable to the oscillatory signal. LISA and pulsar timing arrays aim to detect it.
- **Supertranslation transition**: The memory effect is equivalent to a BMS supertranslation of the spacetime vacuum — before and after the wave burst, the spacetime is flat but in different BMS frames.
- **Spin memory**: The subleading memory effect (spin memory) involves angular momentum flux and is related to superrotations rather than supertranslations.

## Physical Interpretation
Imagine two free-floating test masses in space, initially at rest relative to each other. A gravitational wave burst passes between them. During the burst, the masses oscillate. After the burst passes completely, the masses do not return to their original separation — they are permanently displaced. This displacement is the gravitational memory.

The physical mechanism is energy conservation: the gravitational wave carries energy-momentum to infinity. By the equivalence principle, this flux sources additional curvature, leading to a net change in the local geometry. The permanent displacement is the geodesic deviation integrated over all time.

In the language of gauge theory: before the burst, the spacetime is in vacuum $|0_-\rangle$; after, it is in vacuum $|0_+\rangle$. These vacua are related by a BMS supertranslation — they are physically distinct states of the gravitational field, even though both are locally flat.

## Connections to Information Theory & Holography
Gravitational memory is one vertex of the [[pasterski-triangle]]: it is related to soft theorems by a Fourier transform (the memory integrand is the zero-frequency limit of the gravitational wave spectrum) and to asymptotic symmetries by the identification of memory with BMS vacuum transitions.

In holographic terms, each gravitational memory event corresponds to a specific BMS charge transition encoded on the celestial sphere. The celestial CFT correlators encode all memory events across the history of the universe, and the total memory integrated over all directions provides the soft graviton charge that is proposed to preserve information in black hole evaporation.

## See Also
* [[pasterski-triangle]]
* [[soft-theorems]]
* [[memory-effects]]

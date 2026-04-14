---
title: Spin Memory
category: "Physics"
lang: en
order: 17
slug: spin-memory
---

# Spin Memory

## Prerequisites

[[memory-effects]], [[gravitational-memory]]

## Theoretical Foundation
Spin memory is a subleading gravitational memory effect, distinct from the leading displacement memory. While the displacement (ordinary) memory causes a permanent change in the relative position of test masses after a gravitational wave burst, the spin memory effect causes a permanent change in the relative timing or rotational phase of test masses arranged in a circular orbit. It was identified by Pasterski, Strominger, and Zhiboedov (2016) as the third vertex in a subleading Pasterski triangle, alongside the subleading soft graviton theorem and superrotation asymptotic symmetries.

The name "spin memory" reflects that it carries information about the angular momentum radiated to null infinity. While displacement memory is sourced by the energy flux (changes in the mass aspect $m_B$), spin memory is sourced by the angular momentum flux — the integrated flux of the angular momentum aspect $\mathcal{N}_z$ associated with gravitational wave emission from rotating systems such as binary mergers.

The physical setup for detecting spin memory is a ring of freely falling test masses arranged in a circle. After a gravitational wave burst passes, the masses return to their original radial positions (no displacement memory in this symmetric arrangement) but are permanently shifted in their orbital phase — they have collectively rotated by a small angle $\Delta\phi$. This rotation encodes the total angular momentum carried off by the gravitational waves.

## Mathematical Formulation
The spin memory $\Sigma(z,\bar{z})$ is defined as the time-integral of the angular momentum flux to $\mathcal{I}^+$. In terms of the Bondi-Sachs formalism, it is given by:
$$ \Sigma(z,\bar{z}) = \int_{-\infty}^{+\infty} du\, \mathcal{N}(u, z, \bar{z}) $$
where $\mathcal{N}$ is the angular momentum aspect, related to the Bondi news $N_{zz} = \partial_u C_{zz}$ by:
$$ \partial_u \mathcal{N}_z = -\frac{1}{4}D_z^3 m_B + \frac{1}{4}D_{\bar{z}}(N_{zz}N^{zz}) - u\partial_u\partial_z m_B + \ldots $$
The rotation of test masses on a circle of radius $R$ at angle $\theta_0$ is:
$$ \Delta\phi = \frac{1}{R^2}\int_{\mathcal{I}^+} du\,\epsilon^{AB}\partial_A C_{BC}\,\hat{n}^C $$
where $\epsilon^{AB}$ is the Levi-Civita tensor on the sphere and $\hat{n}^C$ is the unit normal to the circle.

In terms of the Pasterski triangle correspondence, spin memory is related to the subleading soft graviton theorem via a Fourier transform:
$$ \Delta\Sigma(z,\bar{z}) = \lim_{\omega\to 0}\partial_\omega\left[\omega\,\tilde{h}^{\rm TT}_{zz}(\omega, z,\bar{z})\right] $$
and to superrotations as a Ward identity: the action of a superrotation with vector field $Y^z(z)$ on the vacuum shifts $\Sigma$ by:
$$ \Delta_Y \Sigma = D_{\bar{z}}Y^z $$

## Key Properties
- **Subleading order**: Spin memory arises at subleading order in the $1/r$ expansion of the gravitational field, compared to the leading displacement memory.
- **Angular momentum signature**: It measures the angular momentum content of the gravitational wave burst; for a symmetric (equal-mass, non-spinning) binary, the spin memory vanishes to leading order.
- **Circular orbit detection**: Unlike displacement memory (detected by monitoring separation between free masses), spin memory requires a circular arrangement of test masses, making it experimentally more challenging.
- **Superrotation Ward identity**: The subleading soft graviton theorem is the Ward identity for superrotation symmetry, and spin memory is the corresponding physical observable — completing the subleading Pasterski triangle.
- **Amplitude**: For a binary black hole merger, the spin memory amplitude is $\Delta\phi \sim G J_{\rm rad}/(c^3 R^2)$ where $J_{\rm rad}$ is the total angular momentum radiated. For GW150914, $\Delta\phi \sim 10^{-20}$ rad — far below current detector sensitivity but potentially within reach of future space-based detectors.

## Physical Interpretation
The physical intuition for spin memory is the following: gravitational waves carry angular momentum as well as energy. After a binary star merger, the radiated angular momentum has left the system and traveled to null infinity. The test masses that "feel" this radiation are not just displaced — they are given a permanent net rotation. This rotation is the geometric imprint of the departed angular momentum.

An analogy: imagine a spinning top ejecting material as it slows down. The ejected material carries angular momentum, and a measuring device that absorbs this material would be set into rotation. Spin memory is the gravitational-wave version: the waves carry angular momentum, and a ring of test masses acts as the measuring device, acquiring a net rotation equal to the received angular momentum divided by the ring's moment of inertia.

The connection to superrotations deepens the interpretation: superrotations are the angle-dependent generalizations of rotations on the celestial sphere. Spin memory is the physical manifestation of a superrotation transition between gravitational vacua — completely analogous to how displacement memory corresponds to a supertranslation vacuum transition.

## Connections to Information Theory & Holography
Spin memory, like displacement memory, is a physical observable that probes the vacuum structure of gravity. In [[celestial-holography]], spin memory corresponds to a specific class of operator insertions in the celestial CFT — those associated with the Virasoro (superrotation) current algebra rather than the Kac-Moody (supertranslation) algebra.

The superrotation charges measured by spin memory are the angular momentum analogs of the energy charges measured by displacement memory. Together they form the complete set of BMS charges that are proposed to encode the information of black hole microstates in the [[black-hole-soft-hair]] picture: displacement memory encodes the energy distribution of infalling matter, while spin memory encodes its angular momentum distribution.

## See Also
* [[memory-effects]]
* [[gravitational-memory]]
* [[bms-group]]

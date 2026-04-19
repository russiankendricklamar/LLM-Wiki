---
title: BMS Group
category: "Physics"
lang: en
order: 14
slug: bms-group
---

# BMS Group

## Prerequisites

[[asymptotic-symmetries]], [[group-theory]]

## Theoretical Foundation
The BMS (Bondi-Metzner-Sachs) group is the asymptotic symmetry group of asymptotically flat spacetimes at null infinity. Discovered independently by Bondi, van der Burg, and Metzner and by Sachs in 1962, it was originally expected to reduce to the ten-parameter Poincaré group — translations and Lorentz transformations — but turned out to be vastly larger: an infinite-dimensional group containing an infinite family of angle-dependent time translations called supertranslations.

For decades the BMS group was regarded as an anomaly requiring gauge-fixing. The modern perspective, developed especially by Strominger and collaborators in the 2010s, inverts this: the infinite dimensionality is a feature, not a bug. The BMS group encodes an infinite number of conserved charges that label the soft degrees of freedom of the gravitational vacuum. These charges are the key to understanding the infrared structure of gravity, the soft graviton theorem, gravitational memory, and ultimately the black hole information paradox.

Extensions of the BMS group to include superrotations — infinite-dimensional generalizations of Lorentz transformations corresponding to arbitrary conformal transformations on the celestial sphere — further enlarge the symmetry to the full Virasoro $\times$ Virasoro algebra, connecting the BMS group to 2D conformal field theory and providing the kinematic foundation for [[celestial-holography]].

## Visualization

```chart
{
  "type": "bar",
  "xAxis": "harmonic",
  "data": [
    {"harmonic": "ℓ=0 (time transl.)", "power": 0.0},
    {"harmonic": "ℓ=1 (space transl.)", "power": 0.0},
    {"harmonic": "ℓ=2", "power": 5.8},
    {"harmonic": "ℓ=3", "power": 3.9},
    {"harmonic": "ℓ=4", "power": 2.6},
    {"harmonic": "ℓ=5", "power": 1.7},
    {"harmonic": "ℓ=6", "power": 1.1},
    {"harmonic": "ℓ=7", "power": 0.7}
  ],
  "lines": [
    {"dataKey": "power", "stroke": "#10b981", "name": "Radiated power per supertranslation mode (arb. units)"}
  ]
}
```

## Mathematical Formulation
The BMS group is the semi-direct product of the Lorentz group (or its Virasoro extension) with the abelian group of supertranslations $\mathcal{S}$:
$$ G_{\rm BMS} = \text{Lorentz} \ltimes \mathcal{S} $$
A supertranslation generator $\xi_f$ is parametrized by a smooth function $f(z,\bar{z})$ on the celestial sphere $S^2$:
$$ \xi_f = f(z,\bar{z})\,\partial_u $$
Expanding $f$ in spherical harmonics $Y_{\ell m}$, the $\ell = 0$ mode is a time translation, the $\ell = 1$ modes are spatial translations, and all $\ell \geq 2$ modes are genuine supertranslations with no classical analog.

The commutation relations of the BMS algebra are:
$$ [T_f, T_{f'}] = 0, \qquad [L_Y, T_f] = T_{\mathcal{L}_Y f}, \qquad [L_Y, L_{Y'}] = L_{[Y,Y']} $$
where $T_f$ are supertranslation generators, $L_Y$ are Lorentz (or superrotation) generators, and $\mathcal{L}_Y f$ is the Lie derivative of $f$ along the sphere vector field $Y^z$.

With superrotations included (Barnich-Troessaert extension), the algebra becomes:
$$ [L_m, L_n] = (m-n)L_{m+n} + \frac{c_L}{12}m(m^2-1)\delta_{m+n,0} $$
recovering the Virasoro algebra with a central charge $c_L$ related to the gravitational anomaly.

The BMS charge associated to a supertranslation $f$ is:
$$ Q_f^+ = \frac{1}{4\pi G}\int_{S^2} d^2z\,\gamma_{z\bar{z}}\,f\,m_B^+, \qquad Q_f^- = \frac{1}{4\pi G}\int_{S^2} d^2z\,\gamma_{z\bar{z}}\,f\,m_B^- $$
Charge conservation across a scattering process requires $Q_f^+ = Q_f^-$ after accounting for radiation flux, which is precisely Weinberg's soft graviton theorem.

## Key Properties
- **Infinite vacuum degeneracy**: Supertranslations map one Minkowski vacuum to a physically distinct vacuum with a shifted Bondi news; each vacuum is labeled by a function $C_{zz}^{(0)}(z,\bar{z})$.
- **Goldstone interpretation**: Supertranslation symmetry is spontaneously broken by any vacuum choice; the resulting Goldstone bosons are soft gravitons.
- **Ward identity = Soft theorem**: The Ward identity of BMS supertranslations is Weinberg's leading soft graviton theorem; superrotation Ward identity gives the subleading soft theorem.
- **Celestial sphere action**: The Lorentz group $SL(2,\mathbb{C})$ acts as the global conformal group on the celestial sphere $S^2 \cong \mathbb{CP}^1$, making the BMS group the symmetry of a putative 2D CFT.
- **Memory effect**: A BMS supertranslation physically manifests as the gravitational displacement memory effect — a permanent shift in test-mass positions after a gravitational wave burst passes.

## Physical Interpretation
The BMS group can be understood through an analogy with spontaneous symmetry breaking. Just as the Poincaré group is spontaneously broken to the little group by any particle state, the BMS group is spontaneously broken by any scattering vacuum. The infinite tower of Goldstone bosons (soft gravitons) carries the information about which vacuum the system is in.

A gravitational wave burst that passes through a detector does not return spacetime to its original vacuum — it shifts the vacuum by a BMS supertranslation, leaving a permanent imprint: the memory effect. Different ingoing and outgoing vacuum states are connected by the BMS transformation, and the amplitude for this transition is controlled by the soft graviton factor in the S-matrix.

## Connections to Information Theory & Holography
The BMS group is the symmetry group of the [[celestial-holography|celestial CFT]]. In the celestial basis, scattering amplitudes are mapped to CFT correlators on the celestial sphere, and BMS generators become the stress tensor and current algebra operators of the dual 2D theory. The central charge of the Virasoro extension encodes the gravitational anomaly.

The infinite conserved BMS charges provide the mechanism for black hole information storage: as infalling matter crosses the horizon, it excites supertranslation hair (soft gravitons on the horizon), which can in principle be decoded from the outgoing Hawking radiation.

## See Also
* [[asymptotic-symmetries]]
* [[pasterski-triangle]]
* [[celestial-holography]]

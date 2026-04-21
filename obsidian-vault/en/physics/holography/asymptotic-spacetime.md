---
title: Asymptotic Spacetime
category: "Physics"
lang: en
order: 19
slug: asymptotic-spacetime
---

# Asymptotic Spacetime

## Theoretical Foundation
Asymptotic spacetime refers to the geometry of a [[differential-geometry|manifold]] far from any localized sources of mass or energy. The most common case is asymptotically flat spacetime, which approaches the Minkowski metric at large distances. Understanding the structure of spacetime at infinity is crucial for defining physical quantities like total energy (ADM mass), momentum, and the radiation that escapes the system.

The formal study was revolutionized by Roger Penrose's conformal compactification technique (1963), which maps the entire infinite spacetime into a finite diagram by applying a conformal rescaling $\tilde{g}_{\mu\nu} = \Omega^2 g_{\mu\nu}$. This adds a well-defined boundary to spacetime — the Penrose diagram — making infinities geometrically accessible. The boundary consists of several distinct regions: past and future timelike infinity ($i^-$, $i^+$), spacelike infinity ($i^0$), and past and future null infinity ($\mathcal{I}^-$, $\mathcal{I}^+$, pronounced "scri-minus" and "scri-plus").

Null infinity $\mathcal{I}^\pm$ is particularly important: it is the region reached by massless radiation (gravitational waves, photons) and is topologically $\mathbb{R} \times S^2$. The retarded time coordinate $u$ parametrizes $\mathcal{I}^+$, while advanced time $v$ parametrizes $\mathcal{I}^-$. All the physics of gravitational wave emission and the infrared structure of gravity is encoded in the behavior of fields near $\mathcal{I}^\pm$.

## Visualization

```chart
{
  "type": "line",
  "xAxis": "u",
  "data": [
    {"u": -5.0, "M_B": 10.00},
    {"u": -4.0, "M_B": 9.98},
    {"u": -3.0, "M_B": 9.93},
    {"u": -2.0, "M_B": 9.82},
    {"u": -1.0, "M_B": 9.60},
    {"u": 0.0,  "M_B": 9.20},
    {"u": 1.0,  "M_B": 8.65},
    {"u": 2.0,  "M_B": 8.05},
    {"u": 3.0,  "M_B": 7.55},
    {"u": 4.0,  "M_B": 7.20},
    {"u": 5.0,  "M_B": 7.05},
    {"u": 6.0,  "M_B": 7.01},
    {"u": 7.0,  "M_B": 7.00}
  ],
  "lines": [
    {"dataKey": "M_B", "stroke": "#3b82f6", "name": "Bondi mass M_B(u)"}
  ]
}
```

## Mathematical Formulation
A spacetime $(M, g)$ is asymptotically flat if there exists a conformal factor $\Omega$ such that $\tilde{g}_{\mu\nu} = \Omega^2 g_{\mu\nu}$ extends smoothly to the boundary $\mathcal{I}$ where $\Omega = 0$ and $d\Omega \neq 0$. In Bondi-Sachs coordinates $(u, r, z, \bar{z})$, the metric near $\mathcal{I}^+$ takes the asymptotic expansion:
$$ ds^2 = -du^2 - 2\,du\,dr + r^2 \gamma_{z\bar{z}}\,dz\,d\bar{z} + \frac{2m_B}{r}du^2 + r C_{zz}\,dz^2 + r C_{\bar{z}\bar{z}}\,d\bar{z}^2 + \cdots $$
where $m_B(u, z, \bar{z})$ is the Bondi mass aspect (encoding energy distribution on the sphere), $C_{zz}(u, z, \bar{z})$ is the Bondi news tensor describing gravitational radiation, and $\gamma_{z\bar{z}} = 2/(1+z\bar{z})^2$ is the round metric on $S^2$.

The Bondi mass $M_B(u)$ is obtained by integrating the mass aspect:
$$ M_B(u) = \frac{1}{4\pi} \int d^2z\, \gamma_{z\bar{z}}\, m_B(u,z,\bar{z}) $$
The Bondi mass loss formula shows that gravitational radiation carries positive energy to infinity:
$$ \frac{dM_B}{du} = -\frac{1}{32\pi} \int d^2z\, \gamma_{z\bar{z}}\, N_{zz} N^{zz} \leq 0 $$
where $N_{zz} = \partial_u C_{zz}$ is the Bondi news tensor.

## Key Properties
- **ADM mass**: For spacelike infinity $i^0$, the ADM mass is the total conserved energy of an isolated gravitational system, computed as a surface integral at spatial infinity.
- **Peeling property**: Near $\mathcal{I}^+$, the Weyl tensor components fall off as $r^{-1}, r^{-2}, r^{-3}, r^{-4}, r^{-5}$ respectively, corresponding to outgoing radiation and Coulomb-type fields.
- **Bondi-Sachs mass loss**: Radiation carries positive energy to null infinity, so the Bondi mass monotonically decreases — a precise statement of energy conservation in GR.
- **Vacuum degeneracy**: The space of vacua at $\mathcal{I}^+$ is degenerate: distinct vacua are related by BMS supertranslations, each corresponding to a different value of $C_{zz}$ at $u \to \pm\infty$.
- **Conformal structure**: The conformal boundary $\mathcal{I}$ has the intrinsic geometry of a cylinder $\mathbb{R} \times S^2$ with a degenerate metric, carrying only its conformal class.

## Physical Interpretation
The key intuition is that $\mathcal{I}^+$ is where detectors at cosmological distances receive gravitational waves. Every gravitational wave signal (from binary mergers, supernovae, cosmological sources) arrives at $\mathcal{I}^+$, where its energy, momentum, and angular momentum content can be precisely defined. The Penrose diagram makes this tangible: a binary black hole merger maps to a localized region in the interior, and the outgoing waves spread outward until they reach the null boundary.

The vacuum degeneracy is physically important: two spacetimes that are related by a BMS supertranslation are physically distinct (they have different transition amplitudes for soft gravitons) even though they have the same ADM mass. This infinite-dimensional vacuum degeneracy is the gravitational analog of the Goldstone phenomenon and is the origin of the infinite soft charge conservation laws.

## Connections to Information Theory & Holography
Asymptotic spacetime is the holographic screen for [[celestial-holography]]. Unlike AdS/CFT where the screen is a timelike boundary, here it is null — $\mathcal{I}^+$ — presenting distinct technical challenges. The celestial sphere $S^2$ at $\mathcal{I}^+$ is where the dual 2D CFT lives, and the Bondi coordinates provide the natural parametrization for the Mellin transform that maps bulk scattering amplitudes to boundary CFT correlators.

The structure of the asymptotic metric encodes the soft charges that are proposed to resolve the black hole information paradox through the soft hair mechanism.

## See Also
* [[asymptotic-symmetries]]
* [[celestial-holography]]
* [[bms-group]]

---
title: "Hawking Radiation"
category: "Physics"
order: 5
lang: "en"
slug: "hawking-radiation"
growth: "seedling"
---

# Hawking Radiation

In 1974 Stephen Hawking showed that black holes are not truly black: quantum mechanics near the event horizon causes them to radiate thermally, lose mass, and eventually evaporate. The calculation is one of the most significant results in theoretical physics — it combined [[general-relativity]], quantum field theory, and thermodynamics into a single formula, and the puzzle it created (the information paradox) has driven foundational research ever since.

## Virtual Pair Production Near the Horizon

The intuitive picture — often called the "pair creation" story — runs as follows. The quantum vacuum is populated by virtual particle-antiparticle pairs continuously being created and annihilated. Near the event horizon, tidal forces can separate a pair before it reannihilates: one partner falls inward (negative energy relative to infinity, allowed inside the ergosphere), while the other escapes to infinity as real radiation. The black hole loses mass equal to the energy carried away.

This picture is heuristically useful but not the actual derivation. The correct argument uses Bogoliubov transformations.

## The Bogoliubov Transformation

Consider a massless scalar field $\hat\phi$ propagating on the Schwarzschild spacetime of a collapsing star. Define two complete sets of mode functions:

- **In-modes** $\{u_i^\text{in}\}$: positive-frequency modes at past null infinity $\mathscr{I}^-$, corresponding to the vacuum state $|0_\text{in}\rangle$ of an observer in the distant past before collapse.
- **Out-modes** $\{u_i^\text{out}\}$: positive-frequency modes at future null infinity $\mathscr{I}^+$, corresponding to the vacuum $|0_\text{out}\rangle$ of an asymptotic future observer.

Because the spacetime is not stationary during collapse, the two mode decompositions are related by a **Bogoliubov transformation**:

$$
u_i^\text{out} = \sum_j \left( \alpha_{ij}\, u_j^\text{in} + \beta_{ij}\, u_j^{\text{in}*} \right).
$$

The key quantity is $|\beta_{ij}|^2$: it measures how many out-mode quanta are present in the in-vacuum. Hawking computed these coefficients by tracing the out-modes back through the collapsing geometry to $\mathscr{I}^-$. The result:

$$
|\beta_{\omega\omega'}|^2 \propto \frac{1}{e^{\omega/T_H} - 1},
\qquad T_H = \frac{\hbar\,\kappa}{2\pi\, c\, k_B},
$$

a **Planck spectrum** at temperature $T_H$. The out-vacuum is a thermal state with respect to the in-vacuum — the black hole radiates exactly like a black body.

## Hawking Temperature

For a Schwarzschild black hole of mass $M$, the surface gravity is $\kappa = c^4/(4GM)$, giving

$$
\boxed{T_H = \frac{\hbar\, c^3}{8\pi\, G\, M\, k_B}}.
$$

Numerically, for $M = M_\odot \approx 2\times 10^{30}$ kg:

$$
T_H \approx 60\,\text{nK},
$$

utterly undetectable against the CMB ($2.725\,\text{K}$). Primordial black holes with mass $M \lesssim 5\times 10^{14}$ g would reach CMB temperature today and are a dark-matter candidate. The formula is exact in the semi-classical limit ($M \gg M_P$).

## Black Hole Evaporation

Since $T_H \propto 1/M$, radiating energy reduces $M$, which raises $T_H$, which increases the luminosity — a runaway. The Stefan-Boltzmann power radiated is

$$
\frac{dM\,c^2}{dt} = -\frac{\sigma_\text{eff}\, A\, T_H^4}{c^2} \propto -\frac{\hbar\, c^4}{G^2 M^2}.
$$

Integrating gives the **evaporation timescale**:

$$
t_\text{evap} \sim \frac{G^2 M^3}{\hbar\, c^4} \approx 5120\pi\,\frac{G^2 M^3}{\hbar\, c^4}.
$$

For a solar-mass black hole, $t_\text{evap} \sim 2\times 10^{74}$ years. For a primordial black hole to evaporate today, $M_\text{init} \approx 5\times 10^{14}$ g.

```chart
{
  "type": "line",
  "xAxis": "time_frac",
  "data": [
    {"time_frac": 0.0, "mass_frac": 1.000},
    {"time_frac": 0.1, "mass_frac": 0.965},
    {"time_frac": 0.2, "mass_frac": 0.928},
    {"time_frac": 0.3, "mass_frac": 0.888},
    {"time_frac": 0.4, "mass_frac": 0.843},
    {"time_frac": 0.5, "mass_frac": 0.794},
    {"time_frac": 0.6, "mass_frac": 0.737},
    {"time_frac": 0.7, "mass_frac": 0.669},
    {"time_frac": 0.8, "mass_frac": 0.585},
    {"time_frac": 0.9, "mass_frac": 0.464},
    {"time_frac": 0.95, "mass_frac": 0.368},
    {"time_frac": 1.0, "mass_frac": 0.0}
  ],
  "lines": [
    {"dataKey": "mass_frac", "stroke": "#8b5cf6", "name": "M(t)/M₀ (evaporation curve)"}
  ]
}
```

The curve follows $M(t)/M_0 = (1 - t/t_\text{evap})^{1/3}$, with the final stages ($M \to M_P$) entering strong quantum gravity.

## The Trans-Planckian Problem

Tracing the out-modes back to $\mathscr{I}^-$ via the collapsing geometry, the modes get exponentially blueshifted near the horizon. Modes observed at frequency $\omega$ at late times originated at frequencies

$$
\omega_\text{in} \sim \omega\, e^{\kappa\, t / \hbar},
$$

which quickly exceed the Planck frequency $E_P/\hbar$ for $t$ of order the scrambling time. Hawking's calculation relies on physics at trans-Planckian scales — energies where quantum gravity is unknown. This is the **trans-Planckian problem**: the prediction $T_H$ may be contaminated by Planck-scale physics.

Evidence from various models (Unruh's sonic analogue, modified dispersion relations) suggests the thermal spectrum is robust to trans-Planckian modifications, but no proof exists in full quantum gravity.

## Connection to the Unruh Effect

The **Unruh effect** (1976) is the flat-space analogue: a uniformly accelerating observer with proper acceleration $a$ sees the Minkowski vacuum as a thermal bath at temperature

$$
T_U = \frac{\hbar\, a}{2\pi\, c\, k_B}.
$$

The Hawking effect and Unruh effect are related by the equivalence principle: near the horizon, the black hole geometry looks locally like Rindler spacetime, and the surface gravity $\kappa$ plays the role of the proper acceleration. Both arise from the same mathematical mechanism — the Bogoliubov transformation between accelerated and inertial observer modes, or equivalently the non-trivial relationship between Rindler and Minkowski vacua.

The Unruh effect has been detected in particle accelerators at the level of the Sokolov-Ternov polarization rate, providing indirect evidence that the underlying physics is correct.

## Why This Matters

Hawking radiation is the meeting point of three otherwise incompatible frameworks. Semi-classically, it is consistent and robust. But it produces the information paradox: the radiation is exactly thermal, carrying no information about the initial state. If the black hole evaporates completely, unitarity appears violated. This drives the entire modern programme of quantum gravity — the island formula, replica wormholes, holographic entanglement [[gravitational-entropy|entropy]], and [[ads-cft]] all grew out of attempts to resolve what Hawking's 1974 paper revealed.

## Related Topics

- [[general-relativity]] — the background spacetime for the calculation
- [[black-hole-thermodynamics]] — the thermodynamic laws Hawking radiation validates
- [[gravitational-entropy]] — entropy bounds and the holographic resolution
- [[ads-cft]] — where information is manifestly preserved on the boundary
- [[information-paradox]] — the central open problem Hawking radiation creates
- [[gravitational-waves]] — complementary observational probes of black holes

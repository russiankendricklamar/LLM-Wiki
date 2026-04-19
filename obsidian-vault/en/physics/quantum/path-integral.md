---
title: "Path Integral Formulation"
category: "Physics"
order: 28
lang: "en"
slug: "path-integral"
---

# Path Integral Formulation

The **path integral formulation** of quantum mechanics, due to Feynman (1948), expresses the amplitude for a particle to go from one point to another as a sum over *all* possible paths connecting them, each weighted by the complex exponential of its classical action. It is equivalent to the canonical operator formulation but is vastly more natural for field theory, gauge symmetry, and statistical mechanics — it is the language in which modern [[qft-basic|QFT]], lattice gauge theory, and Monte Carlo simulations of quantum systems are written.

## The basic idea

In the Hamiltonian formulation, a quantum state evolves via a single unitary operator $\hat U = e^{-i\hat H t / \hbar}$. Feynman's question: what does the transition amplitude

$$
\langle x_f, t_f | x_i, t_i \rangle
$$

look like if you break the evolution into infinitesimal slices and insert complete sets of position eigenstates at each step? The answer, in the continuum limit, is

$$
\langle x_f, t_f | x_i, t_i \rangle = \int \mathcal{D}x(t)\,\exp\!\left(\frac{i}{\hbar}\,S[x(t)]\right),
$$

where the integral is over all trajectories $x(t)$ with $x(t_i) = x_i$ and $x(t_f) = x_f$, and $S[x(t)] = \int L\, dt$ is the [[lagrangian-mechanics|classical action]].

## The classical limit

In the limit $\hbar \to 0$, paths for which $S$ is not stationary produce wildly oscillating phases that cancel by stationary-phase arguments. Only the path where $\delta S = 0$ — the **classical trajectory** — contributes coherently. The classical equations of motion fall out of the path integral automatically, which is the most direct derivation of the principle of stationary action in all of physics.

## Euclidean path integral and statistical mechanics

A Wick rotation $t \to -i\tau$ turns the oscillating Minkowski integral into an exponentially suppressed one:

$$
Z = \int \mathcal{D}x\,e^{-S_E[x]/\hbar},
$$

which is mathematically a probability measure. In this form the path integral is indistinguishable from the **partition function** of a statistical mechanical system with "energy" $S_E/\hbar$ and temperature $\hbar$. Instanton physics, thermal field theory, and Euclidean quantum gravity all live here; and it is what makes **lattice QFT** numerically tractable via Monte Carlo sampling.

## Field theory

The generalisation to fields is almost notationally trivial:

$$
Z[J] = \int \mathcal{D}\phi\,\exp\!\left(\frac{i}{\hbar}\int d^4x\,\big[\mathcal L(\phi, \partial_\mu\phi) + J\phi\big]\right).
$$

All correlation functions follow from differentiating with respect to the source $J$:

$$
\langle T\,\phi(x_1)\cdots\phi(x_n)\rangle = \frac{1}{Z[0]}\frac{(-i\hbar)^n\,\delta^n Z[J]}{\delta J(x_1)\cdots \delta J(x_n)}\bigg|_{J=0}.
$$

Expanding the interaction part perturbatively produces **Feynman diagrams** as a combinatorial enumeration of Wick contractions — every propagator, vertex, and loop has a direct geometric meaning in the path integral.

## Gauge theories and the Faddeev-Popov trick

Naïve path integration over gauge fields $A_\mu$ overcounts physically equivalent configurations related by gauge transformations. The **Faddeev-Popov procedure** inserts a gauge-fixing delta function and a compensating determinant, which — when exponentiated — introduces anticommuting **ghost fields**. These ghosts are the signature of the gauge redundancy in the path integral and are indispensable for the quantisation of Yang-Mills theories.

This is where gauge theory, BRST symmetry, and the consistency of the Standard Model all find their cleanest formulation.

## Why the path integral

Reasons it has displaced the canonical formulation as the everyday tool of theoretical physics:

1. **Manifest Lorentz invariance.** No need to pick a time direction and build Hamiltonians.
2. **Symmetries are transparent.** Invariances of the action are invariances of the measure (usually), so [[noether-theorem|Noether-like arguments]] give exact quantum identities — the **Ward identities**.
3. **Gauge theories.** The Faddeev-Popov procedure has no clean operator analogue.
4. **Non-perturbative physics.** Instantons, solitons, and tunnelling are encoded as saddle points that are invisible to perturbation theory around the vacuum.
5. **Numerical computation.** After Wick rotation, lattice simulations become large high-dimensional integrals amenable to Monte Carlo.
6. **Quantum gravity.** Formal path integrals over metrics (Euclidean quantum gravity, Regge calculus, spin foams) are one of the few frameworks in which gravity can be treated quantum-mechanically at all.

## Caveats

The path integral is not rigorously defined as a measure on the space of paths in more than one dimension (outside special cases like free fields). In practice one works on the lattice, or formally manipulates Gaussian integrals and uses dimensional regularisation. Making the path integral mathematically rigorous — as "constructive QFT" does for $\phi^4$ in 2 and 3 dimensions — is one of the Clay Millennium problems in the form of the Yang-Mills mass gap.

## Related Topics

- [[lagrangian-mechanics]] — the action that weights each path
- [[hamiltonian-mechanics]] — the canonical formulation being reorganised
- [[qft-basic]] — the natural home of the path integral
- [[scattering-amplitudes]] — computed from the path integral via LSZ and Feynman rules
- [[noether-theorem]] — symmetries in the path-integral language become Ward identities

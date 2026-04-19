---
title: "Hawking Radiation & Black Hole Thermodynamics"
category: "Physics"
order: 36
lang: "en"
slug: "hawking-radiation"
---

# Hawking Radiation & Black Hole Thermodynamics

In 1974 Stephen Hawking showed, by treating quantum fields on the curved background of a collapsing star, that black holes are not black: they radiate thermally at a temperature set by their surface gravity, slowly lose mass, and eventually evaporate. This single calculation joined together [[general-relativity|general relativity]], [[qft-basic|quantum field theory]], and thermodynamics into one sentence — $T = \hbar\kappa / (2\pi c k_B)$ — and created the puzzle that has driven almost all foundational work in quantum gravity since: the **information paradox**.

## The four laws of black hole mechanics

In 1973, before Hawking's calculation, Bardeen, Carter, and Hawking proved four theorems about stationary black holes in general relativity that bore a suspicious resemblance to the laws of thermodynamics:

| Thermodynamics | Black holes |
|---|---|
| 0th: $T$ uniform in equilibrium | $\kappa$ (surface gravity) uniform over the horizon |
| 1st: $dE = T\,dS + \ldots$ | $dM = \frac{\kappa}{8\pi G}\,dA + \Omega\,dJ + \Phi\,dQ$ |
| 2nd: $dS \ge 0$ | $dA \ge 0$ (Hawking's area theorem) |
| 3rd: $T \to 0$ unreachable | $\kappa \to 0$ unreachable (extremal BHs) |

The analogy was striking but taken to be formal — $\kappa$ playing the role of temperature, $A/4$ the role of entropy. Bekenstein insisted, against strong opposition, that black holes *really do* have entropy equal to $A/(4\ell_P^2)$, because otherwise a black hole could be used to violate the second law by swallowing entropy without tracking it.

Hawking's 1974 calculation vindicated Bekenstein exactly.

## Hawking's calculation

Quantise a scalar field on the background of a collapsing spherical star. Modes that start as plain outgoing waves at past null infinity are propagated through the collapse and extracted as *in* states at future null infinity. The Bogoliubov coefficients relating the two are nontrivial: the vacuum of an observer at infinity in the far future contains a thermal population of particles at temperature

$$
T_H = \frac{\hbar\, \kappa}{2\pi c\, k_B} = \frac{\hbar c^3}{8\pi G M k_B}
$$

for a Schwarzschild black hole of mass $M$. Solar-mass black holes radiate at $\sim 10^{-7}$ K — utterly undetectable, but the *existence* of the effect is conceptually seismic.

Equating thermodynamics-style identity $dM = T\,dS$ with the first-law identity $dM = (\kappa/8\pi G)\,dA$ fixes the black-hole entropy to

$$
S_\text{BH} = \frac{k_B\, A}{4\, \ell_P^2}, \qquad \ell_P = \sqrt{\hbar G / c^3}.
$$

The **Bekenstein-Hawking entropy** — proportional to *area*, not volume, and enormous: a solar-mass black hole has $S \sim 10^{77} k_B$, vastly larger than that of any ordinary object of the same size.

## Why area, not volume

This area scaling is not a quirk. It is the first hint of the **holographic principle** (see [[holographic-principle]]): the degrees of freedom inside any region are bounded by the area of its boundary, not its volume, and a black hole saturates that bound. Ordinary local QFT would predict $S \propto V$; gravity somehow reduces this to $S \propto A$. Explaining this microscopically — counting the states that give $S_\text{BH}$ — is one of the main successes of string theory (Strominger-Vafa, 1996, for extremal BHs) and one of the sharpest questions in quantum gravity.

## Evaporation and lifetime

Since a black hole has temperature $T_H \propto 1/M$, radiating it away *decreases* its mass further and *raises* its temperature. The evaporation runs away, with total lifetime

$$
\tau \sim \frac{G^2 M^3}{\hbar c^4} \sim 10^{67}\,\text{years}\;\times\;(M/M_\odot)^3.
$$

Astrophysical black holes take vastly longer than the age of the universe to evaporate; primordial black holes of mass $\sim 10^{15}$ g would be exploding in the current era and are a dark-matter candidate.

The final stages, as $M \to M_P$, are in a regime of strong quantum gravity where Hawking's semi-classical calculation breaks down.

## The information paradox in one sentence

Hawking radiation is *thermal*: it depends on the black hole only through its mass, charge, and angular momentum (the "no-hair" parameters). If a pure state collapses to a black hole, the black hole evaporates completely, and all that comes out is thermal radiation, then the final state is mixed. Unitarity of quantum mechanics — a pure state evolving to a pure state — is violated.

This is the [[information-paradox|information paradox]], and resolving it is the main open problem at the intersection of quantum mechanics and gravity.

## Black hole entropy as the rosetta stone

$S_\text{BH} = A/4$ is now the central identity of modern theoretical physics. It is:

- The **area law** that the [[holographic-principle]] generalises.
- The boundary **entanglement entropy** in [[ads-cft|AdS/CFT]], via Ryu-Takayanagi.
- The seat of [[black-hole-soft-hair|soft hair]] — candidate "extra" degrees of freedom that might store the information a Hawking-evaporating BH seems to lose.
- The thermodynamic input that connects black-hole horizons to ordinary [[noether-theorem|Noether charges]] of asymptotic symmetries via the first law.

Hawking's calculation was a semi-classical back-of-the-envelope exercise. Everything it revealed has turned out to be precisely the thing that a theory of quantum gravity has to explain.

## Related Topics

- [[general-relativity]] — the background on which the calculation is done
- [[qft-basic]] — quantum fields on that background
- [[information-paradox]] — the consequence of unitarity being violated
- [[holographic-principle]] — the area scaling of $S_\text{BH}$ generalised
- [[ads-cft]] — the best-understood concrete realisation of holography
- [[black-hole-soft-hair]] — candidate microstates at the horizon
- [[celestial-holography]] — asymptotic-symmetry approach to holography in flat space

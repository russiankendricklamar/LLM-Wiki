---
title: "Effective Field Theory (EFT)"
category: "Quantum Physics"
order: 15
lang: "en"
slug: "effective-field-theory"
growth: "seedling"
---

# Effective Field Theory (EFT)

**Effective Field Theory (EFT)** is the modern standard for thinking in physics. It acknowledges that any description of nature is scale-dependent: rather than searching for a "Theory of Everything" that explains all phenomena at once, EFT provides a rigorous recipe for building a "theory of something" that is exact within a specific energy window.

## Core idea

For a given experiment we operate at a characteristic energy $E$. EFT assumes there exists a higher cutoff scale $\Lambda \gg E$ above which new physics may live. The Lagrangian is expanded in inverse powers of $\Lambda$:

$$
\mathcal{L}_{\text{EFT}} = \mathcal{L}_{\text{renormalisable}} + \sum_{n \geq 1} \frac{c_n}{\Lambda^n}\, \mathcal{O}_n,
$$

where $\mathcal{O}_n$ are local operators allowed by the symmetries of the system and $c_n$ are dimensionless Wilson coefficients. The leading term is renormalisable; higher-dimensional operators are suppressed by $(E/\Lambda)^n$.

## Examples

- **Fermi theory of weak interactions** — the four-fermion interaction is the EFT of the Standard Model below the W/Z mass scale.
- **Chiral perturbation theory** — pions and nucleons as the EFT of QCD below the GeV scale.
- **NRQED / NRQCD** — non-relativistic EFTs for bound states like positronium and quarkonium.
- **General relativity** itself is widely interpreted as the low-energy EFT of an unknown UV-complete quantum theory of gravity.

## Why it matters

1. **Predictive power without a UV theory** — you can compute observables to fixed accuracy without knowing the deep physics.
2. **Naturalness** — EFTs make explicit which couplings are "natural" and which require fine-tuning.
3. **Renormalisation** — non-renormalisable terms are not pathological; they are simply suppressed contributions.

## Related topics

- [[quantum-field-theory|Quantum field theory]] — the full framework that EFTs approximate.
- [[renormalization-group|Renormalisation group]] — how Wilson coefficients flow with scale.
- [[standard-model|Standard Model]] — itself an EFT below some unknown UV scale.

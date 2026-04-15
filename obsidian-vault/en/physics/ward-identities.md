---
title: "Ward Identities"
category: "Physics"
order: 29
lang: "en"
slug: "ward-identities"
---

# Ward Identities

**Ward identities** (originally Ward, 1950; generalised by Takahashi, 1957) are the exact relations that a continuous symmetry of a quantum field theory imposes on its correlation functions. They are the quantum fingerprint of [[noether-theorem|Noether's theorem]]: every conserved current $j^\mu$ with $\partial_\mu j^\mu = 0$ in the classical theory becomes, in the quantum theory, an *operator identity* that every Green's function must satisfy to all orders in perturbation theory.

They are what makes QED and the Standard Model renormalisable, and — when the symmetry lives at null infinity — they are *literally the same statement* as the soft theorems of scattering amplitudes.

## The basic identity

Consider a QFT with a global symmetry $\phi \to \phi + \epsilon\,\delta\phi$ and the associated Noether current $j^\mu$. The invariance of the [[path-integral|path integral]] measure under the same transformation (applied locally, with $\epsilon \to \epsilon(x)$) gives, after integrating by parts,

$$
\partial_\mu \langle j^\mu(x)\,\phi(x_1)\cdots\phi(x_n)\rangle = -i \sum_{k=1}^n \delta^4(x - x_k)\,\langle \phi(x_1)\cdots\delta\phi(x_k)\cdots\phi(x_n)\rangle.
$$

Away from contact terms ($x \ne x_k$), the current is conserved inside correlators: $\partial_\mu j^\mu = 0$ *as an operator identity*. At coincident points, the divergence produces a delta function that remembers how the inserted fields transform.

## QED Ward-Takahashi identity

The most famous instance is for QED, where the global symmetry is the $U(1)$ phase rotation of the electron. The identity relates the electron self-energy $\Sigma(p)$ and the vertex function $\Gamma^\mu(p, p')$:

$$
(p - p')_\mu\,\Gamma^\mu(p, p') = \Sigma(p') - \Sigma(p).
$$

Two things follow:

1. **$Z_1 = Z_2$** — the vertex and self-energy renormalisations are equal, so the renormalised electric charge $e$ does not depend on the species of charged particle it couples to. Electrons and muons have exactly the same charge because of this identity, not coincidence.
2. **Unphysical polarisations of the photon decouple.** The identity enforces that the longitudinal and timelike photons cancel in amplitudes, keeping the theory unitary even though the gauge-fixed Lagrangian has four polarisations.

Both are essential to the consistency and renormalisability of QED.

## From classical conservation to exact quantum identities

Classically, $\partial_\mu j^\mu = 0$ is just the Euler-Lagrange equation of the symmetry. Quantum-mechanically, it could in principle fail by $\hbar$-loop effects (anomalies). If the symmetry is non-anomalous, the Ward identity is exact — it holds at every order in perturbation theory and non-perturbatively. It is not a statement about tree-level Feynman diagrams; it is a statement about the full quantum theory.

This is why Ward identities are so constraining: they tell you the answer to questions before you compute anything.

## Ward identities for gauge symmetries: Slavnov-Taylor

For non-abelian gauge theories (Yang-Mills, QCD, electroweak), the Faddeev-Popov procedure introduces ghost fields, and the resulting BRST symmetry generates **Slavnov-Taylor identities** — the generalisation of Ward-Takahashi to non-abelian gauge theories. They are the technical machinery behind the proof of renormalisability of Yang-Mills (Veltman and 't Hooft, Nobel 1999).

## Anomalies

Sometimes a classical Ward identity fails at one loop because the path-integral measure is *not* invariant under the symmetry, even though the action is. This is an **anomaly**. Famous examples:

- **Chiral anomaly** ($U(1)_A$ in QCD): $\partial_\mu j^\mu_A \propto F_{\mu\nu}\tilde F^{\mu\nu}$, which explains the $\pi^0 \to 2\gamma$ decay rate.
- **Conformal / trace anomaly**: breaks exact scale invariance at the quantum level and underlies the running of coupling constants.
- **Gauge anomalies**: must cancel between species, which is why the Standard Model has exactly three generations with specific hypercharge assignments.

Ward identities and their failure are arguably the most powerful constraints in particle physics.

## Asymptotic symmetries and soft theorems

The modern and most beautiful reinterpretation: **every soft theorem in scattering is a Ward identity of an asymptotic symmetry**. Strominger and collaborators showed that

- **Weinberg's soft-photon theorem** $\Leftrightarrow$ Ward identity of large $U(1)$ gauge transformations at null infinity.
- **Weinberg's soft-graviton theorem** $\Leftrightarrow$ Ward identity of supertranslations ([[bms-group|BMS]]).
- **Subleading soft-graviton theorem** $\Leftrightarrow$ Ward identity of superrotations.

The familiar Ward identities of QFT and the infrared structure of amplitudes are thus literally the same objects, viewed from different ends. This equivalence is one vertex of the [[pasterski-triangle|Pasterski-Strominger-Zhiboedov triangle]], and the reason that "asymptotic symmetries = soft theorems = memory effects" is not a metaphor but a theorem.

## Related Topics

- [[noether-theorem]] — the classical statement Ward identities quantise
- [[path-integral]] — the formalism in which Ward identities are derived
- [[qft-basic]] — the quantum field theory context
- [[soft-theorems]] — Ward identities of asymptotic symmetries
- [[asymptotic-symmetries]] — the symmetries whose Ward identities these are
- [[pasterski-triangle]] — Ward identities as one vertex of the IR triangle

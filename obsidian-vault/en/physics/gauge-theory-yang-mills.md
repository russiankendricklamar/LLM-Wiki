---
title: "Gauge Theory & Yang-Mills"
category: "Physics"
order: 33
lang: "en"
slug: "gauge-theory-yang-mills"
---

# Gauge Theory & Yang-Mills

**Gauge theories** are the class of quantum field theories in which a continuous internal symmetry is imposed *locally* — that is, the symmetry parameter is allowed to depend on spacetime — and the consistency of that requirement forces the existence of spin-1 force carriers. Every known fundamental interaction except gravity is described by a gauge theory: electromagnetism ($U(1)$), the weak interaction ($SU(2)$), and the strong interaction ($SU(3)$). The non-abelian generalisation was written down by Yang and Mills in 1954, and completing it into a renormalisable quantum theory (Veltman-'t Hooft) was rewarded with the 1999 Nobel Prize.

## From global to local symmetry

[[maxwell-electromagnetism|QED]] can be built by starting with a free [[dirac-equation|Dirac]] Lagrangian

$$
\mathcal L_0 = \bar\psi\,(i\gamma^\mu\partial_\mu - m)\,\psi,
$$

which is invariant under the **global** $U(1)$ rotation $\psi \to e^{i\alpha}\psi$. If we demand that $\alpha = \alpha(x)$ be a *local* function, the derivative term is no longer invariant: $\partial_\mu\psi$ picks up an extra piece $i(\partial_\mu\alpha)\psi$. The fix is to introduce a new field $A_\mu$ and replace $\partial_\mu$ with the **covariant derivative**

$$
D_\mu = \partial_\mu + ieA_\mu, \qquad A_\mu \to A_\mu - \tfrac{1}{e}\partial_\mu\alpha.
$$

Invariance is restored, and $A_\mu$ — which had to be introduced — is the photon. Gauge invariance *predicts* electromagnetism. The kinetic term $-\tfrac{1}{4}F_{\mu\nu}F^{\mu\nu}$ is the unique gauge-invariant, Lorentz-invariant, power-counting-renormalisable term you can build from $A_\mu$.

## Non-abelian case: Yang-Mills

What if the internal symmetry group is larger than $U(1)$? Yang and Mills asked this for $SU(2)$ (isospin); the construction works for any compact Lie group $G$ with generators $T^a$ satisfying $[T^a, T^b] = if^{abc}T^c$.

The gauge field becomes matrix-valued, $A_\mu = A_\mu^a\,T^a$, and the covariant derivative

$$
D_\mu = \partial_\mu - igA_\mu
$$

acts on fields in a representation of $G$. The field strength is

$$
F_{\mu\nu}^a = \partial_\mu A_\nu^a - \partial_\nu A_\mu^a + g f^{abc} A_\mu^b A_\nu^c.
$$

The crucial new feature — the $f^{abc}$ term — means that $F$ itself transforms nontrivially under the group, and therefore **gauge bosons are charged under the gauge symmetry and interact with each other**. Unlike photons, gluons see gluons.

The Yang-Mills Lagrangian is

$$
\mathcal L_\text{YM} = -\tfrac{1}{4}\, F_{\mu\nu}^a F^{a\,\mu\nu},
$$

and its cubic and quartic self-interactions are responsible for almost everything non-trivial in modern particle physics.

## The three forces of the Standard Model

| Group | Force | Gauge bosons | Coupling |
|---|---|---|---|
| $U(1)_Y$ | Hypercharge | $B_\mu$ (mixes into $\gamma, Z$) | $g'$ |
| $SU(2)_L$ | Weak isospin | $W^1, W^2, W^3$ (mix into $W^\pm, Z$) | $g$ |
| $SU(3)_C$ | Strong (QCD) | 8 gluons | $g_s$ |

The electroweak $SU(2)_L \times U(1)_Y$ is spontaneously broken to $U(1)_\text{em}$ by the Higgs mechanism, giving $W^\pm, Z$ their masses while leaving the photon massless (see [[goldstone-modes]]). $SU(3)_C$ is unbroken but *confining*: only colour-singlet states can exist in isolation, which is why we see hadrons and never free quarks.

## Asymptotic freedom and confinement

The most striking feature of non-abelian gauge theory was discovered by Gross, Wilczek, and Politzer (Nobel 2004): the coupling $g_s$ of QCD *decreases* at high energies. Quarks at very small distances are nearly free — **asymptotic freedom** — which is exactly the opposite of QED, where the effective charge grows at short distances.

Qualitatively, this is because gluons antiscreen colour: the self-interaction term in $F_{\mu\nu}^a$ works in the opposite direction from the fermion loops. The running of $g_s$ follows from the [[renormalization-group]] and gives the famous beta function

$$
\beta(g_s) = -\frac{g_s^3}{16\pi^2}\left(\frac{11}{3}N_c - \frac{2}{3}N_f\right),
$$

which is negative when the number of colours dominates the number of active quark flavours — a coincidence on which all of QCD rests.

At low energies the coupling grows, becomes strong, and the theory **confines**: quarks and gluons are bound into hadrons, and the field-theoretic description stops being perturbative. Showing analytically that Yang-Mills has a mass gap is one of the Clay Millennium Problems.

## Quantisation: Faddeev-Popov and BRST

Quantising a gauge theory with the [[path-integral]] requires fixing the gauge to avoid integrating over gauge-equivalent copies. The Faddeev-Popov procedure introduces auxiliary anticommuting **ghost fields** whose role is to cancel unphysical gauge-field polarisations in loops. The resulting gauge-fixed action is not invariant under the original gauge symmetry but under a global fermionic symmetry — **BRST symmetry** — whose Ward identities ([[ward-identities|Slavnov-Taylor]]) guarantee unitarity, renormalisability, and decoupling of ghosts from physical amplitudes.

That BRST works, and that it reproduces exactly the right set of physical states on shell, is why non-abelian gauge theory is a consistent quantum theory at all.

## Why gauge theory is inevitable

Two essentially unique facts make gauge theory the backbone of fundamental physics:

1. **Massless spin-1 particles must couple through a conserved current.** Any theory of a massless spin-1 particle that is not gauge-invariant has negative-norm states and violates unitarity.
2. **Renormalisability.** Interacting theories of spin-1 particles are renormalisable if and only if they are gauge theories. Every attempt to describe the weak interaction as a Fermi four-fermion contact term failed at high energies; replacing it with a Yang-Mills $SU(2)_L$ structure, broken by the Higgs, produced a finite and predictive theory.

Put differently: the Standard Model was not found by guessing a Lagrangian. It was found by asking which *consistent* Lagrangians of spin-$\tfrac{1}{2}$ matter and spin-1 forces are possible, and gauge theory supplied the answer.

## Related Topics

- [[maxwell-electromagnetism]] — the abelian case
- [[dirac-equation]] — matter coupled to gauge fields
- [[noether-theorem]] — the global symmetry before it is gauged
- [[ward-identities]] — Slavnov-Taylor identities of non-abelian gauge theory
- [[renormalization-group]] — running of $g_s$ and asymptotic freedom
- [[goldstone-modes]] — Higgs mechanism for electroweak $SU(2) \times U(1)$
- [[qft-basic]] — broader QFT context

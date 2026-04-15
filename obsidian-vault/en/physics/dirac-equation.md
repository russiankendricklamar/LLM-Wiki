---
title: "Dirac Equation"
category: "Physics"
order: 32
lang: "en"
slug: "dirac-equation"
---

# Dirac Equation

The **Dirac equation** (Dirac, 1928) is the relativistic wave equation for a spin-$\tfrac{1}{2}$ particle. It was written down by demanding a linear, Lorentz-invariant equation whose squared version reproduces the Klein-Gordon equation — and the cost of that demand was the introduction of $4\times 4$ matrices, spinors, and ultimately antimatter. It explains electron spin, the gyromagnetic ratio $g \approx 2$, the fine structure of hydrogen, and predicts the positron three years before its discovery.

## Dirac's problem

The [[schrodinger-equation]] is non-relativistic. The obvious relativistic replacement — the Klein-Gordon equation $(\Box + m^2)\phi = 0$ — is second-order in time and admits negative-energy and negative-probability solutions. Dirac insisted on a first-order equation of the form

$$
(i\gamma^\mu \partial_\mu - m)\psi = 0
$$

and asked what the coefficients $\gamma^\mu$ must be so that squaring it gives Klein-Gordon. The answer: they cannot be numbers. They must be matrices satisfying the **Clifford algebra**

$$
\{\gamma^\mu, \gamma^\nu\} = 2\eta^{\mu\nu}\,\mathbb{1}.
$$

The smallest matrices that work are $4\times 4$, and $\psi$ is therefore a 4-component object — a **Dirac spinor**.

## Spinors and Lorentz transformations

Dirac spinors are *not* four-vectors. Under a Lorentz transformation $\Lambda$, they transform as

$$
\psi(x) \to S(\Lambda)\,\psi(\Lambda^{-1} x),
$$

where $S(\Lambda)$ is a specific $4\times 4$ matrix built from the $\gamma^\mu$. Two full rotations are needed to return a spinor to itself — spinors are the double cover representation of the Lorentz group, and this "half-integer" behaviour is exactly what encodes spin-$\tfrac{1}{2}$.

The Dirac spinor decomposes into **left-handed** and **right-handed** Weyl spinors:

$$
\psi = \begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix}, \qquad \gamma^5 \psi_{L,R} = \mp \psi_{L,R},
$$

which are swapped by parity. In the Standard Model only $\psi_L$ couples to $W$ bosons, which is why the weak interaction violates parity.

## Predictions

**Spin $\tfrac{1}{2}$.** The equation automatically describes a particle with intrinsic angular momentum $\hbar/2$ — no need to put spin in by hand.

**Gyromagnetic ratio $g = 2$.** Coupling the Dirac equation to an electromagnetic field via the minimal substitution $\partial_\mu \to \partial_\mu + ieA_\mu$ and taking the non-relativistic limit gives the Pauli equation with a magnetic moment $\mu = (e\hbar/2m)\,\mathbf\sigma$, exactly twice what a classical charged rotating sphere would produce. The experimental value is $g \approx 2.002319\ldots$, with the anomalous $0.002319$ computed to 12 decimal places by QED — one of the most precise agreements between theory and experiment in all of science.

**Fine structure of hydrogen.** Solving the Dirac equation in a Coulomb potential exactly reproduces the observed splittings of the hydrogen spectrum to $O(\alpha^2)$ — including the degeneracy $2S_{1/2} = 2P_{1/2}$ that is later lifted by the QED Lamb shift.

**Antimatter.** The Dirac equation has negative-energy solutions. Dirac interpreted these as a filled "sea" of negative-energy electrons, with holes appearing as positive-energy **positrons**. When Anderson detected the positron in 1932, it was the first experimental discovery directly predicted by a quantum field equation.

## As a field theory

The correct modern interpretation: $\psi$ is not a wavefunction but a **quantum field**, an anticommuting operator-valued spinor. The Dirac Lagrangian density is

$$
\mathcal L = \bar\psi\,(i\gamma^\mu \partial_\mu - m)\,\psi, \qquad \bar\psi \equiv \psi^\dagger \gamma^0.
$$

Euler-Lagrange reproduces the Dirac equation; quantisation with anticommutators (not commutators) enforces [[pauli-exclusion-quantization|Pauli exclusion]] and the spin-statistics theorem. Negative-energy solutions are reinterpreted as antiparticles propagating forward in time.

## Coupling to gauge fields

The Dirac field couples to [[maxwell-electromagnetism|electromagnetism]] via the minimal coupling $\partial_\mu \to D_\mu = \partial_\mu + ieA_\mu$, giving the QED Lagrangian

$$
\mathcal L_\text{QED} = \bar\psi\,(i\gamma^\mu D_\mu - m)\,\psi - \tfrac{1}{4} F_{\mu\nu}F^{\mu\nu}.
$$

Replacing $A_\mu$ with the non-abelian gauge field of [[gauge-theory-yang-mills|Yang-Mills]] generalises to QCD and the electroweak theory. Every matter fermion in the Standard Model — all 6 quarks and 6 leptons — is a Dirac (or Weyl or Majorana) spinor coupled to gauge fields this way.

## Chirality and the Standard Model

Because left- and right-handed components can be split by $\gamma^5$ and transform independently under the Lorentz group, one can build theories in which they couple differently to gauge fields. The Standard Model does exactly this: $SU(2)_L$ couples only to left-handed fermions. Mass terms $m\bar\psi\psi = m(\bar\psi_L \psi_R + \bar\psi_R \psi_L)$ mix the two chiralities, so Standard Model fermion masses must come from the Higgs mechanism rather than bare Lagrangian masses.

The Dirac equation is therefore not just a relativistic wave equation — it is the organising framework for all known matter fields in the universe.

## Related Topics

- [[schrodinger-equation]] — the non-relativistic limit
- [[special-relativity]] — the Lorentz covariance Dirac built in
- [[maxwell-electromagnetism]] — what the Dirac field couples to in QED
- [[gauge-theory-yang-mills]] — non-abelian generalisation
- [[pauli-exclusion-quantization]] — spin-statistics connection
- [[qft-basic]] — the field-theoretic reinterpretation

---
title: "Maxwell's Electromagnetism"
category: "Physics"
order: 31
lang: "en"
slug: "maxwell-electromagnetism"
---

# Maxwell's Electromagnetism

**Maxwell's equations** (Maxwell, 1861–1865) are the four classical field equations that unify electricity, magnetism, and light into a single theory of an electromagnetic field. They were the first relativistic field theory written down, predicted electromagnetic waves travelling at the speed of light years before they were detected, and — together with the Lorentz force law — contain all of classical electromagnetism. Every subsequent gauge theory (QED, Yang-Mills, the Standard Model) is built by analogy with this one.

## The equations

In SI units and vector form, in the presence of charge density $\rho$ and current density $\mathbf J$:

$$
\nabla \cdot \mathbf E = \rho/\epsilon_0, \qquad \nabla \cdot \mathbf B = 0,
$$

$$
\nabla \times \mathbf E = -\frac{\partial \mathbf B}{\partial t}, \qquad \nabla \times \mathbf B = \mu_0 \mathbf J + \mu_0 \epsilon_0 \frac{\partial \mathbf E}{\partial t}.
$$

The first pair (Gauss's laws) describe sources; the second pair (Faraday and Ampère-Maxwell) describe how the fields evolve. The final term in Ampère's law — the **displacement current** — was Maxwell's decisive addition and the reason electromagnetic waves exist.

Charged particles feel the **Lorentz force**

$$
\mathbf F = q\,(\mathbf E + \mathbf v \times \mathbf B).
$$

## Potentials and gauge invariance

The homogeneous equations ($\nabla \cdot \mathbf B = 0$ and Faraday) are automatically satisfied if

$$
\mathbf B = \nabla \times \mathbf A, \qquad \mathbf E = -\nabla \phi - \frac{\partial \mathbf A}{\partial t}.
$$

The scalar potential $\phi$ and vector potential $\mathbf A$ are not unique: under

$$
\phi \to \phi - \partial_t \chi, \qquad \mathbf A \to \mathbf A + \nabla \chi,
$$

for any function $\chi(\mathbf x, t)$, the physical fields $\mathbf E$ and $\mathbf B$ are unchanged. This is the **$U(1)$ gauge symmetry** of electromagnetism, the seed from which every modern gauge theory grows.

## Covariant formulation

In the language of [[special-relativity]], the potentials combine into a four-vector $A^\mu = (\phi/c, \mathbf A)$ and the fields into an antisymmetric field strength tensor

$$
F^{\mu\nu} = \partial^\mu A^\nu - \partial^\nu A^\mu.
$$

Maxwell's equations collapse to two manifestly Lorentz-covariant statements:

$$
\partial_\mu F^{\mu\nu} = \mu_0 j^\nu, \qquad \partial_{[\mu} F_{\nu\rho]} = 0.
$$

The homogeneous pair is an identity (the **Bianchi identity**); the inhomogeneous pair is the dynamical equation. Gauge transformations become $A^\mu \to A^\mu + \partial^\mu \chi$, leaving $F^{\mu\nu}$ invariant.

## Lagrangian

The [[lagrangian-mechanics|Lagrangian density]] for the free electromagnetic field is

$$
\mathcal L = -\tfrac{1}{4}\, F_{\mu\nu} F^{\mu\nu} - j^\mu A_\mu.
$$

Euler-Lagrange applied to $A^\nu$ reproduces the inhomogeneous Maxwell equations. The action is manifestly gauge-invariant (up to a boundary term from the source coupling, which is fine if the current is conserved, $\partial_\mu j^\mu = 0$). Current conservation is not an extra assumption — it is forced by gauge invariance, an early instance of the [[noether-theorem|Noether]] / [[ward-identities|Ward]] logic.

## Electromagnetic waves

In vacuum, Maxwell's equations imply

$$
\left(\frac{1}{c^2}\partial_t^2 - \nabla^2\right)\mathbf E = 0, \qquad c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}.
$$

That $c$ is determined by static electric and magnetic constants measured in a lab — and turns out to equal the speed of light — was Maxwell's revolutionary insight: light is an electromagnetic wave. This single fact is the historical foundation of relativity.

Plane-wave solutions are transverse: $\mathbf E \perp \mathbf B \perp \mathbf k$, with two physical polarisations. The longitudinal and time-like polarisations carried by $A^\mu$ are pure gauge and decoupled by the Ward identity — this is why a massless spin-1 particle has 2, not 4, physical states.

## Energy, momentum, and radiation

The energy density and Poynting flux of the field are

$$
u = \tfrac{1}{2}\epsilon_0 |\mathbf E|^2 + \tfrac{1}{2\mu_0}|\mathbf B|^2, \qquad \mathbf S = \tfrac{1}{\mu_0}\mathbf E \times \mathbf B.
$$

Accelerated charges radiate with **Larmor power** $P = q^2 a^2 / (6\pi\epsilon_0 c^3)$, and the resulting retarded **Liénard-Wiechert potentials** describe the field of a moving point charge. Radiation reaction, synchrotron emission, antenna theory, and the classical analogue of [[scattering-amplitudes]] all live here.

## From Maxwell to QED

Quantising the free Maxwell field gives photons — massless spin-1 bosons with two polarisations. Coupling to the [[dirac-equation|Dirac electron]] via the minimal substitution $\partial_\mu \to \partial_\mu + ieA_\mu$ produces **quantum electrodynamics (QED)**. The gauge invariance of the classical theory becomes the $U(1)$ gauge symmetry of QED, and its [[ward-identities]] are the direct quantum descendants of the classical identity $\partial_\mu j^\mu = 0$.

Every fact in this article has a quantum analogue. Every gauge theory of the Standard Model is a generalisation. Maxwell's four lines are the simplest member of the family of all relativistic field theories humans have ever written down.

## Related Topics

- [[special-relativity]] — Maxwell's equations were the first manifestly Lorentz-invariant laws
- [[lagrangian-mechanics]] — the Lagrangian formulation
- [[gauge-theory-yang-mills]] — non-abelian generalisation
- [[dirac-equation]] — relativistic matter coupled to $A_\mu$
- [[qft-basic]] — the quantised version is QED
- [[soft-theorems]] — soft photons are the infrared face of Maxwell theory

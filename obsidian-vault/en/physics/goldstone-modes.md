---
title: "Goldstone Modes"
category: "Physics"
order: 30
lang: "en"
slug: "goldstone-modes"
---

# Goldstone Modes

**Goldstone's theorem** (Nambu 1960, Goldstone 1961) states that whenever a continuous global symmetry is *spontaneously broken* — the Lagrangian has it but the ground state does not — the spectrum must contain a massless, spin-0 boson for each broken generator. These **Nambu-Goldstone bosons** are the universal low-energy excitations of any symmetry-broken phase, from a ferromagnet to the pion triplet in QCD to the Higgs mechanism in the Standard Model.

Their modern reinterpretation ties them directly to [[ward-identities]], [[asymptotic-symmetries]], and [[soft-theorems]], and makes them one of the most load-bearing ideas in all of physics.

## Spontaneous symmetry breaking

A symmetry is **spontaneously broken** when the Hamiltonian (or action) is invariant under a transformation $G$, but the ground state $|0\rangle$ is not: there is some generator $Q$ with

$$
[Q, H] = 0, \qquad Q|0\rangle \ne 0.
$$

The ground state is then not unique — acting with $Q$ produces a degenerate ground state, and the true vacuum is one point in a continuous family of equivalent vacua (the **vacuum manifold** $G/H$, where $H$ is the unbroken subgroup).

**Example.** A complex scalar $\phi$ with Mexican-hat potential $V(\phi) = -\mu^2 |\phi|^2 + \lambda |\phi|^4$. The Lagrangian is $U(1)$ invariant under $\phi \to e^{i\alpha}\phi$, but the vacuum satisfies $|\phi| = v \ne 0$ and picks one phase. The $U(1)$ is spontaneously broken; the circle $|\phi| = v$ is the vacuum manifold.

## Goldstone's theorem

Under very mild assumptions (Lorentz invariance, locality, positivity), spontaneous breaking of a continuous global symmetry implies that the low-energy spectrum contains **massless modes** — one for each independent broken generator.

**Sketch of the proof.** The Ward identity for the broken current $j^\mu$, evaluated on the vacuum with an order parameter $\phi$ having nonzero $\langle \delta\phi \rangle$, reads

$$
\partial_\mu \langle 0 | T\, j^\mu(x)\,\phi(0)|0\rangle \propto \delta^4(x)\,\langle 0|\delta\phi(0)|0\rangle \ne 0.
$$

In momentum space this forces the correlator $\langle j^\mu \phi\rangle$ to have a pole at $p^2 = 0$. A pole in a two-point function at zero momentum *is* a massless particle — the Goldstone boson.

In the Mexican-hat example, the radial mode $|\phi| - v$ is massive; the angular mode — the phase $\theta$ — is the Goldstone, and the potential is exactly flat along it.

## Physical examples

| System | Broken symmetry | Goldstone |
|---|---|---|
| Ferromagnet | Rotations $SO(3) \to SO(2)$ | Spin waves (magnons) |
| Crystal lattice | Spatial translations | Phonons |
| Superfluid $^4$He | Particle number $U(1)$ | Sound (second sound) |
| QCD ($m_q = 0$) | Chiral $SU(2)_L \times SU(2)_R \to SU(2)_V$ | Pions (near-massless) |
| Standard Model Higgs | $SU(2)_L \times U(1)_Y \to U(1)_\text{em}$ | "Eaten" by $W^\pm, Z$ |

The pion masses being so much smaller than the proton mass (about $140$ vs $940$ MeV) is a direct experimental signature of chiral symmetry breaking in QCD — pions are **pseudo-Goldstone bosons** acquiring a small mass only because quark masses explicitly break the symmetry.

## The Higgs mechanism: eating Goldstones

When the broken symmetry is **gauged** rather than global, Goldstone's theorem has a twist. The would-be Goldstone boson is absorbed into the longitudinal polarisation of the gauge field, which acquires a mass:

$$
\text{massless gauge + massless Goldstone} \;\longrightarrow\; \text{massive gauge}.
$$

Degree-of-freedom counting is conserved: a massless spin-1 has 2 polarisations, a massive spin-1 has 3. The Goldstone "is eaten." This is the mechanism giving $W^\pm$ and $Z$ their masses in the Standard Model (Brout-Englert-Higgs, Nobel 2013), and it is why the photon, whose $U(1)_\text{em}$ remains unbroken, stays massless.

## Effective field theory of Goldstones

Because Goldstones are massless, they dominate the low-energy behaviour of any spontaneously broken phase. Their dynamics is governed by an **effective Lagrangian** on the vacuum manifold $G/H$:

$$
\mathcal L_\text{eff} = \frac{f^2}{2}\,\text{Tr}\!\left(\partial_\mu U\,\partial^\mu U^{-1}\right) + \cdots,
$$

the **non-linear sigma model**. Chiral perturbation theory for QCD, spin-wave theory for magnets, the low-energy theory of Bose-Einstein condensates — all instances of the same structure. The coupling $f$ (the pion decay constant in QCD) sets the scale of symmetry breaking, and Goldstone scattering amplitudes are *forced* to vanish at low energy (the **soft-pion theorem**) by the same Ward-identity argument that proves the theorem.

## Soft theorems and the asymptotic connection

The soft-pion theorem has a cousin much deeper in: the **Weinberg soft theorems** for photons and gravitons in scattering amplitudes. In each case an emitted massless particle with vanishing momentum produces a universal factor independent of the rest of the process. Strominger's programme has shown that soft photons and soft gravitons are precisely the **Goldstone modes of spontaneously broken large gauge transformations and BMS supertranslations** at null infinity — and the [[ward-identities]] of those asymptotic symmetries are exactly the [[soft-theorems]].

Goldstone's theorem is not just a theorem about condensed matter and particle physics; it is the universal connection between symmetry breaking, masslessness, and the infrared structure of scattering. That is one of the vertices of the [[pasterski-triangle|Pasterski triangle]] — and one of the deepest threads in theoretical physics.

## Related Topics

- [[noether-theorem]] — currents of the broken symmetry create Goldstones
- [[ward-identities]] — the Ward identity whose pole is the Goldstone boson
- [[soft-theorems]] — soft photons and gravitons as Goldstones of asymptotic symmetries
- [[asymptotic-symmetries]] — large gauge and BMS whose breaking produces soft bosons
- [[qft-basic]] — the field theory setting
- [[pasterski-triangle]] — Goldstones at null infinity as one vertex of the IR triangle

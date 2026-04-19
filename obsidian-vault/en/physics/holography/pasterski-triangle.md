---
title: Pasterski's Triangle Theory
category: "Physics"
lang: en
order: 20
slug: pasterski-triangle
---

# Pasterski's Triangle Theory

## Prerequisites

[[soft-theorems]], [[scattering-amplitudes]], [[bms-group]]

## Theoretical Foundation
Pasterski's Triangle is a profound synthesis in theoretical physics establishing a three-way equivalence between soft theorems, asymptotic symmetries, and memory effects in gauge theories and gravity. Assembled through work of Strominger, Pasterski, He, Mitra, Zhiboedov, and others from 2014 onward, the triangle demonstrates that the infrared structure of scattering — long considered a technical nuisance of divergent soft factors — is in fact a window into the deep symmetry structure of quantum field theory and gravity.

Each vertex of the triangle represents a distinct physical phenomenon that initially appears unrelated to the others. Soft theorems (Weinberg 1965, Low 1958) are exact statements about scattering amplitudes in the limit of zero-energy particle emission. Asymptotic symmetries (Bondi-Metzner-Sachs 1962) are large gauge transformations that act non-trivially at null infinity. Memory effects (Zel'dovich-Polnarev 1974, Christodoulou 1991) are permanent physical changes to detectors after radiation passes. The triangle reveals that these three phenomena are simply three different descriptions of the same underlying physics: the infinite vacuum degeneracy of gauge theories.

The triangle holds in every gauge theory: there is an electromagnetic triangle (soft photon theorem — large $U(1)$ gauge transformations — electromagnetic memory), a color triangle (soft gluon theorem — large Yang-Mills gauge transformations — color memory), and a gravitational triangle (soft graviton theorem — BMS supertranslations — displacement memory). At subleading order, a second triangle exists involving sub-leading soft theorems, superrotations, and spin memory.

## Mathematical Formulation
The three identities constituting the triangle are:

**Leg 1 — Soft Theorems $\leftrightarrow$ Asymptotic Symmetries (Ward identities):**
The Ward identity for a BMS supertranslation with parameter $f$ states:
$$ \langle {\rm out}| Q_f^+ - Q_f^- |{\rm in}\rangle = 0 $$
Inserting the charge expressions and decomposing in Fourier modes directly yields Weinberg's leading soft graviton theorem:
$$ \lim_{\omega\to 0}\omega\mathcal{M}_{n+1}(\omega q; p_i) = \sum_{i=1}^n \frac{\kappa}{2}\frac{\epsilon_{\mu\nu}p_i^\mu p_i^\nu}{p_i\cdot q}\,\mathcal{M}_n(p_i) $$

**Leg 2 — Asymptotic Symmetries $\leftrightarrow$ Memory Effects (vacuum transitions):**
A BMS supertranslation with parameter $f(z,\bar{z})$ shifts the vacuum Bondi shear:
$$ C_{zz} \to C_{zz} - 2D_z^2 f $$
A gravitational memory event with $\Delta C_{zz}(z,\bar{z})$ is therefore equivalent to performing a supertranslation with $f$ solving $\Delta C_{zz} = -2D_z^2 f$.

**Leg 3 — Memory Effects $\leftrightarrow$ Soft Theorems (Fourier transform):**
The gravitational memory $\Delta h_{ij}^{\rm TT}$ is the zero-frequency limit of the gravitational wave strain spectrum:
$$ \Delta h_{ij}^{\rm TT} = \lim_{\omega\to 0} \tilde{h}_{ij}^{\rm TT}(\omega) $$
The soft graviton theorem controls this zero-frequency amplitude, closing the triangle.

## Key Properties
- **Universal**: The triangle structure holds for spin-1 (electromagnetism, Yang-Mills) and spin-2 (gravity) at both leading and subleading order.
- **Subleading triangle**: The subleading soft graviton theorem corresponds to superrotations (Virasoro generators), and the associated memory effect is [[spin-memory]] — a permanent rotation of test masses rather than displacement.
- **Sub-subleading**: A third triangle at sub-subleading order involves $w_{1+\infty}$ symmetry, the sub-subleading soft graviton theorem, and center-of-mass memory effects.
- **Quantum level**: The triangle holds at tree level; loop corrections introduce anomalies and modifications, but the overall structure persists.
- **Cross-theory**: The triangle can be extended to relate the gravitational soft theorems to the collinear limits of QCD amplitudes via the double-copy (BCJ) relations.

## Physical Interpretation
The triangle is best understood as follows: the three vertices describe the same physical information — the soft degrees of freedom of the vacuum — in three different experimental languages. A gravitational wave astronomer sees memory effects (permanent displacements of test masses). A particle physicist calculates soft theorems (universal factors in S-matrix elements involving soft gravitons). A mathematical physicist studies asymptotic symmetries (BMS charges and Ward identities). All three are talking about the same thing.

This synthesis has practical consequences: calculations that are difficult in one language may be easy in another. Memory effects, which require solving GR in the time domain, can be computed by taking the soft limit of scattering amplitudes — a purely algebraic operation. Conversely, soft factors in complicated multi-particle amplitudes can be understood geometrically as vacuum transitions at null infinity.

## Connections to Information Theory & Holography
The Pasterski triangle is the organizing principle of [[celestial-holography]]. In the celestial CFT, each vertex of the triangle has a precise 2D interpretation: soft theorems become current algebra Ward identities, memory effects become transition matrix elements between celestial vacua, and asymptotic symmetries become the global symmetries of the 2D theory.

The triangle also illuminates the black hole information paradox: the infinite number of conserved charges from the triangle (one for each mode $f(z,\bar{z})$ on the sphere) provides the information capacity needed to store the microstate of an evaporating black hole in its soft hair.

## See Also
* [[soft-theorems]]
* [[asymptotic-symmetries]]
* [[celestial-holography]]

---
title: "Large Gauge Transformations"
category: "Physics"
order: 38
lang: "en"
slug: "large-gauge-transformations"
---

# Large Gauge Transformations

**Large gauge transformations** are gauge transformations that do *not* die off at infinity. In a textbook treatment of gauge theory, gauge transformations $\chi(x)$ are assumed to vanish at spatial or null infinity, so they represent pure redundancies — two field configurations related by such a transformation are declared physically identical. Large gauge transformations refuse to vanish at infinity, and as a result they are not redundancies: they relate genuinely distinct physical states, act non-trivially on the $S$-matrix, and carry finite, measurable **asymptotic charges**. They are the seat of the modern story connecting [[noether-theorem|Noether charges]], [[soft-theorems|soft theorems]], and [[black-hole-soft-hair|black hole soft hair]].

## Small vs. large

In an abelian gauge theory, a gauge transformation is parameterised by a function $\chi(x)$:

$$
A_\mu(x) \to A_\mu(x) + \partial_\mu \chi(x).
$$

The **small** (proper) gauge transformations are those with $\chi \to 0$ sufficiently fast at infinity. These are the true redundancies — identifying gauge-equivalent configurations is necessary for the theory to make sense, and small transformations never act on physical states.

The **large** gauge transformations have $\chi$ approaching a non-trivial function on the sphere at infinity:

$$
\chi(x) \;\xrightarrow[|x|\to\infty]{}\; \varepsilon(\theta, \phi) \ne 0.
$$

These are not redundancies. They change the asymptotic data — for instance, the Wilson line of $A_\mu$ stretched out to infinity — and therefore relate physically distinct field configurations.

The distinction is not academic. If you quotient by *all* gauge transformations, including the large ones, you lose physical states. If you quotient only by the small ones, you uncover a new infinite-dimensional symmetry group acting on the physical Hilbert space.

## Asymptotic charges

Each large gauge parameter $\varepsilon(\theta, \phi)$ has a conserved Noether charge

$$
Q_\varepsilon \;=\; \int_{\text{sphere at } \infty} \varepsilon(\theta, \phi)\, \star F,
$$

where $\star F$ is the dual field strength and the integral is over the celestial sphere at null infinity. The constant mode $\varepsilon = 1$ gives the ordinary total electric charge; the non-constant modes give an *infinite* family of new charges, one for each function on $S^2$.

These are the missing conservation laws of QED. They are perfectly ordinary consequences of [[noether-theorem|Noether's theorem]] applied to large gauge transformations, and they are exactly as conserved as electric charge is — just usually ignored because they are not "one number" but a function on the sphere.

## Ward identities = soft theorems

The truly remarkable identification — due to Strominger and collaborators around 2013–2015 — is that the [[ward-identities|Ward identities]] of large gauge transformations are *exactly* Weinberg's [[soft-theorems|soft photon theorem]]. The content of the theorem is:

$$
\lim_{\omega \to 0}\,\omega\, \mathcal M_{n+1}(\ldots; q, \epsilon) = \left(\sum_k \frac{e_k\, p_k \cdot \epsilon}{p_k \cdot q}\right)\mathcal M_n(\ldots).
$$

Reorganised as a statement about the infrared behaviour of amplitudes, this is the same equation as the conservation of $Q_\varepsilon$ with $\varepsilon$ the angular profile of the soft photon's polarisation. The "mysterious" universality of soft-photon emission is just the asymptotic Ward identity of a symmetry that was hiding in plain sight in QED all along.

The same story runs for gravity: large diffeomorphisms that don't vanish at null infinity form the **[[bms-group|BMS]] group** (supertranslations and superrotations), and their Ward identities are Weinberg's soft-graviton theorem and the subleading soft theorem. Every vertex of the [[pasterski-triangle|Pasterski triangle]] — symmetries, soft theorems, [[memory-effects|memory effects]] — is tied together by large gauge/diffeomorphism transformations.

## Spontaneous symmetry breaking of large gauge

Because large gauge transformations act non-trivially on the vacuum of QED (the vacuum contains a specific "soft photon cloud" that transforms), they are **spontaneously broken**. The resulting massless Goldstone modes are exactly the soft photons themselves. This is the same [[goldstone-modes|Goldstone mechanism]] at work in pion physics, applied to an infinite-dimensional asymptotic symmetry: soft photons and soft gravitons are Goldstone modes of spontaneously broken large gauge symmetries and BMS supertranslations, respectively.

This reframing turns "the infrared is messy" into "the infrared is controlled by symmetry." It is one of the most conceptually satisfying moves in modern theoretical physics.

## Large gauge in non-abelian theories and instantons

In non-abelian [[gauge-theory-yang-mills|Yang-Mills]] theory, the story becomes richer still. Large gauge transformations of $SU(N)$ are classified by the third homotopy group $\pi_3(SU(N)) = \mathbb{Z}$, and transformations in different classes relate vacua with different integer labels — the $|n\rangle$ vacua of Yang-Mills. Tunnelling between them is mediated by **instantons**, and the true vacuum is a superposition

$$
|\theta\rangle = \sum_n e^{in\theta}\,|n\rangle
$$

labelled by a $\theta$-angle. The $\theta$ term $\frac{\theta}{32\pi^2}F^a_{\mu\nu}\tilde F^{a\,\mu\nu}$ in the Lagrangian is a direct consequence of large gauge topology, and it is responsible for the CP-violating part of QCD — which is measured to be absurdly small, producing the **strong CP problem**.

Here, too, large gauge transformations are physical. The fact that $\theta$ is a free parameter of QCD and must be fine-tuned to $< 10^{-10}$ is one of the sharpest puzzles in particle physics, and the axion is its most popular proposed resolution.

## Large gauge on the horizon: soft hair

Hawking, Perry, and Strominger (2016) proposed that large gauge / diffeomorphism transformations acting on the horizon of a black hole generate non-trivial charges that label distinct microstates — "soft hair." The hope is that these charges record enough information about what fell in to restore unitarity of Hawking evaporation and resolve the [[information-paradox]]. Whether soft hair is enough is controversial; what is not controversial is that the horizon carries a structure of asymptotic symmetries completely invisible in the textbook "no-hair" description.

See [[black-hole-soft-hair]] for the detailed story.

## Why this is a big deal

Large gauge transformations sit at the intersection of most of the deepest ideas in modern quantum field theory:

- They promote infinitely many redundant-looking symmetries to physical, conserved asymptotic charges.
- They turn universal soft-particle behaviour into consequences of symmetry rather than coincidence.
- They provide the language in which [[celestial-holography]] is formulated.
- They are the reason the $\theta$-angle exists and the strong CP problem is a problem.
- They are central to every current attempt to resolve the black hole information paradox.

For most of the twentieth century they were treated as technical curiosities. Since around 2013 it has become clear that they are the backbone of the infrared structure of gauge theory and gravity.

## Related Topics

- [[noether-theorem]] — the theorem whose application to large gauge gives asymptotic charges
- [[ward-identities]] — the quantum identities that become soft theorems
- [[soft-theorems]] — the direct physical consequence of large gauge symmetry
- [[asymptotic-symmetries]] — the general framework
- [[bms-group]] — large diffeomorphisms in gravity
- [[goldstone-modes]] — soft photons as Goldstones of broken large gauge
- [[black-hole-soft-hair]] — large gauge on the black hole horizon
- [[pasterski-triangle]] — the triangle of symmetries, soft theorems, and memory

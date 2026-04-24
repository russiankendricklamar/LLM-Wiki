---
title: "AdS/CFT & Holographic Principle"
category: "Physics"
order: 39
lang: "en"
slug: "ads-cft"
---

# AdS/CFT & Holographic Principle

The **holographic principle** (’t Hooft, Susskind, 1993–1995) is the proposal that the number of degrees of freedom inside a region of space is bounded by the area of its boundary rather than its volume — a radical departure from ordinary local quantum field theory, motivated by [[hawking-radiation|black hole thermodynamics]]. **AdS/CFT** (Maldacena, 1997) is the first and most precise concrete realisation of the principle: a theory of quantum gravity in $(d+1)$-dimensional anti-de Sitter space is exactly equivalent to a conformal field theory living on its $d$-dimensional boundary.

Together, they constitute the deepest and most successful insight into quantum gravity of the last thirty years.

## The holographic idea

The [[hawking-radiation|Bekenstein-Hawking entropy]] $S_\text{BH} = A/4$ has a strange implication. For a region of space bounded by an area $A$, the maximum [[gravitational-entropy|entropy]] it can contain is bounded by $A/4$ — because otherwise you could keep adding stuff and exceed the black-hole entropy of the same size, and gravitational collapse would make it a black hole.

But in ordinary local field theory the entropy of a region scales with its *volume*, $S \sim V$. The discrepancy says that local QFT vastly overcounts the true degrees of freedom when gravity is included. 't Hooft and Susskind proposed the fix: the *true* degrees of freedom of any theory with gravity live on a lower-dimensional surface — a hologram.

This sounds like a slogan, but it turned out to be a precisely formulable statement. And then someone did it.

## Anti-de Sitter space

**Anti-de Sitter space** AdS$_{d+1}$ is the maximally symmetric spacetime with constant *negative* cosmological constant. It is the negative-curvature Lorentzian analogue of the sphere. Two features that make it the ideal setting for holography:

1. It has a genuine **timelike boundary** at spatial infinity — a $(d)$-dimensional conformal boundary where fields can live and couple to bulk data.
2. Light rays reach this boundary in *finite* conformal time, so the bulk and boundary are causally connected.

Neither of these is true for flat Minkowski space, which is why the AdS case was cracked first. The boundary of AdS$_{d+1}$ is conformally $\mathbb{R} \times S^{d-1}$, and the isometry group of AdS is $SO(2, d)$ — the conformal group of the boundary.

## Maldacena's conjecture

In 1997 Maldacena proposed the sharpest possible form of holography: **type IIB string theory on AdS$_5 \times S^5$** is exactly dual to **$\mathcal N = 4$ super Yang-Mills theory with gauge group $SU(N)$** in four dimensions. A theory of quantum gravity in 10 dimensions and a non-gravitational gauge theory in 4 dimensions are, word for word, the same quantum system.

The dictionary is remarkably precise:

| Bulk side (AdS) | Boundary side (CFT) |
|---|---|
| Bulk field $\phi(x, z)$ | Dual operator $\mathcal O(x)$ |
| Bulk graviton | Stress-energy tensor $T_{\mu\nu}$ |
| Bulk gauge field | Conserved current $j^\mu$ |
| Energy in the bulk | Energy in the CFT |
| String coupling $g_s$ | $g_s \sim g_{YM}^2$ |
| AdS radius / string length $L/\ell_s$ | $\lambda^{1/4} \sim (g_{YM}^2 N)^{1/4}$ |

The most computationally useful limit is $N \to \infty$ with 't Hooft coupling $\lambda = g_{YM}^2 N$ large. Then the string theory becomes classical (semi-)classical supergravity, and strongly-coupled gauge-theory observables are computed by solving two-derivative Einstein-like equations in the bulk. A problem that is intractable on the gauge-theory side becomes a freshman GR calculation on the gravity side.

## The Ryu-Takayanagi formula

One of the most beautiful consequences: the **entanglement entropy** of a region $A$ on the boundary is computed by the area of a minimal surface $\gamma_A$ in the bulk anchored to $\partial A$:

$$
S_A = \frac{\text{Area}(\gamma_A)}{4 G_N}.
$$

This is Bekenstein-Hawking applied not to a black hole horizon but to any extremal surface in the bulk, and it shows that the bulk geometry is *built out of* boundary entanglement. "Spacetime is entanglement" stopped being a slogan when Ryu-Takayanagi (2006) made it a calculable equality, and it has since been generalised (HRT, quantum extremal surfaces) and is at the heart of the island formula that resolves the [[information-paradox]].

## Why AdS/CFT is trusted

AdS/CFT is not a proven theorem. But it passes every test ever thrown at it:

- Symmetries match (both sides have $SO(2,4) \times SU(4)$).
- Operator dimensions computed on both sides agree, even at strong coupling where one side is perturbative and the other is not.
- Black hole thermodynamics on the bulk side reproduces deconfinement transitions on the boundary side.
- Integrable structures on both sides (dilatation operator spectral problem) agree at arbitrary coupling.
- Correlation functions, anomalies, partition functions on various geometries — all consistent.

Decades of checks have turned the conjecture into a working framework.

## Beyond AdS: celestial holography

The natural question: is there a holographic dual for *flat* space, where actual physics lives? This is much harder because Minkowski's boundary is null infinity, not a timelike boundary, and holography on it needs different tools. The current best attempt is **[[celestial-holography]]**, which maps scattering amplitudes in 4d Minkowski to a 2d conformal field theory on the celestial sphere, using the apparatus of [[bms-group|BMS symmetries]], [[soft-theorems]], and [[large-gauge-transformations|large gauge transformations]].

Celestial holography is much less developed than AdS/CFT, but the dictionary — soft theorems ↔ Ward identities of 2d currents, memory effects ↔ shadow transforms — has the right shape. It is currently one of the most active frontiers in theoretical physics, and it is part of why the [[pasterski-triangle]] matters.

## Impact

AdS/CFT has become a standard tool not only in quantum gravity, but in:

- Strongly-coupled QCD (qualitative behaviour of the quark-gluon plasma, $\eta/s = 1/4\pi$).
- Condensed matter (non-Fermi-liquid behaviour, holographic superconductors).
- Chaos and quantum information (SYK model, scrambling bounds, black holes as fastest scramblers).
- Proofs of otherwise-inaccessible QFT facts (a-theorem, monotonicity results).

If the holographic principle is right — and the evidence is overwhelming — then "spacetime is local" is not a fundamental fact but an emergent one, and gravity and quantum entanglement are two aspects of the same thing.

## Related Topics

- holographic-principle — the foundational idea
- [[hawking-radiation]] — the black-hole thermodynamics that motivated holography
- [[general-relativity]] — the bulk classical limit
- [[conformal-field-theory]] — the boundary description
- [[information-paradox]] — resolved in AdS/CFT via unitarity of the boundary CFT
- [[celestial-holography]] — the flat-space analogue
- [[black-hole-soft-hair]] — another route to black-hole microstates

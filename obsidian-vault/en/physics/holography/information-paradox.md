---
title: "Black Hole Information Paradox"
category: "Physics"
order: 37
lang: "en"
slug: "information-paradox"
---

# Black Hole Information Paradox

The **black hole information paradox** is the central tension between general relativity and quantum mechanics. Hawking's 1976 argument, sharpening his own 1974 result, went like this: if a pure quantum state collapses into a black hole and the black hole subsequently evaporates entirely into [[hawking-radiation|thermal Hawking radiation]], then a pure state has evolved into a mixed one. Quantum mechanics forbids this. Therefore either unitarity fails (Hawking's original conclusion), or locality fails, or general relativity's description of the black hole is incomplete. Almost fifty years later, the paradox is still driving the bulk of foundational work in quantum gravity.

## Statement of the paradox

Hawking showed that the outgoing radiation from an evaporating black hole is *thermal* to all orders in the semi-classical expansion: its density matrix depends only on the three no-hair parameters $(M, J, Q)$. But a pure state collapsing into a black hole *should* carry information about its microstate — the book you threw in, the shape of the star, the exact configuration of infalling matter.

After complete evaporation, naive semi-classical reasoning says:

- Before: pure state $|\psi\rangle$.
- After: thermal mixed state $\rho_\text{thermal}$.

There is no unitary $U$ with $U|\psi\rangle\langle\psi|U^\dagger = \rho_\text{thermal}$. Information appears to have been destroyed. Either quantum mechanics is wrong at the fundamental level, or Hawking's calculation — which uses QFT on a fixed curved background — is missing something essential.

## Why it matters

Unitarity is not a technical nicety. It is the statement that quantum probabilities add up to 1, that measurements have definite outcomes, and that the Schrödinger equation is well-defined. Dropping it breaks quantum mechanics. On the other hand, the calculation that shows information loss is extremely robust: it uses only QFT in curved spacetime, both of which have passed every test, and it is hard to see how it could fail by order-unity corrections.

This is not a subtle tension between two unfamiliar theories. It is a clean contradiction between QFT and GR, each of which we trust separately to many decimal places.

## The Page curve

A sharp version of the paradox, due to Don Page (1993): track the entanglement [[gravitational-entropy|entropy]] $S_\text{rad}(t)$ between the outside radiation and whatever is left of the black hole as the evaporation proceeds.

- If evaporation is **unitary**, $S_\text{rad}$ must rise, turn over at the **Page time** $t_P$ (when half the black hole [[gravitational-entropy|entropy]] has been radiated), and fall back to zero as the black hole finishes evaporating. Plotted, this gives the famous triangular **Page curve**.
- If Hawking's semi-classical calculation is correct, $S_\text{rad}$ just rises monotonically, reaching $\sim S_\text{BH}$ and staying there — the information is simply lost.

The difference between "pure final state" and "mixed final state" is the shape of this curve. Reproducing the Page curve from a gravity calculation became the concrete technical goal.

## Candidate resolutions

Decades of proposals, all with problems:

1. **Information is lost.** Hawking's original view. Violates unitarity and, as shown by Banks-Peskin-Susskind, leads to an energy non-conservation that is experimentally ruled out.
2. **Remnants.** Evaporation stops at Planck scale, leaving a tiny but massive "remnant" storing all the information. Pair-production problems and effective-field-theory catastrophes make remnants untenable.
3. **Black hole complementarity** (Susskind-Thorlacius-Uglum, 1993). The information is both inside the black hole (for infalling observers) and encoded in the radiation (for outside observers), but no single observer can see the redundancy, so there is no contradiction.
4. **Firewall** (AMPS, 2012). Unitarity + complementarity + local effective field theory at the horizon is logically inconsistent. At least one must fail, and the most conservative option is that infalling observers burn at the horizon — a "firewall."
5. **Soft hair** ([[black-hole-soft-hair]], Hawking-Perry-Strominger 2016). Black holes carry infinitely many soft charges associated with asymptotic symmetries, and these may record enough information to restore unitarity.
6. **Replica wormholes and the island formula** (Penington; Almheiri, Engelhardt, Marolf, Maxfield; 2019–2020). Gravitational path-integral calculations using replica wormholes reproduce the Page curve and identify the "island" — a region inside the black hole — as encoding the information. This is currently the most successful calculation.

## The island formula

The modern formula for the entropy of the Hawking radiation is

$$
S_\text{rad} = \min_I\!\left[\, \text{ext}\!\left( \frac{A(\partial I)}{4 G} + S_\text{matter}(\text{rad} \cup I) \right)\,\right],
$$

where $I$ is an "island" region inside the black hole. At early times the minimum is attained by $I = \emptyset$, giving Hawking's rising curve. At the Page time, a non-trivial island appears and the minimum jumps to the decreasing branch. The full Page curve emerges from the gravitational path integral — unitarity appears to be restored, though the semi-classical picture is non-local in a subtle way.

This calculation, derived within the Euclidean gravity [[path-integral]] rather than any concrete microscopic theory, strongly suggests that the resolution is consistent with GR and QM together, provided one accepts that the gravitational path integral contains contributions from exotic topologies (replica wormholes).

## Open questions

- How is the information encoded in the radiation *microscopically*? The island formula gives the entropy but not an explicit unitary operator.
- What is the bulk interpretation of the island? Why does a region inside the black hole "belong" to the outside radiation?
- How does this reconcile with the firewall argument? Where does AMPS fail?
- Is the resolution in [[ads-cft|AdS/CFT]] (where unitarity is manifest on the boundary side) the same as in flat-space evaporation?
- What role, if any, do [[black-hole-soft-hair|soft hair]] and [[asymptotic-symmetries]] play in the actual microstate counting?

The information paradox is no longer "is unitarity broken?" but "how exactly does quantum gravity restore it?" — and every proposed answer has taught us something deep about holography, entanglement, and the structure of spacetime itself.

## Related Topics

- [[hawking-radiation]] — the calculation that set up the paradox
- [[general-relativity]] — the classical theory of black holes
- [[qft-basic]] — quantum fields on curved backgrounds
- [[black-hole-soft-hair]] — one proposed microstate mechanism
- holographic-principle — area-law entropy as a clue
- [[ads-cft]] — the setting in which unitarity is cleanest
- [[celestial-holography]] — the flat-space analogue, tied to [[pasterski-triangle]]

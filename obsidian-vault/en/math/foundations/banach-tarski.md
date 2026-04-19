---
slug: "/math/banach-tarski"
title: "The Banach-Tarski Paradox"
category: "Foundations of Mathematics"
order: 3
lang: "en"
---

# The Banach-Tarski Paradox

The **Banach-Tarski paradox** (1924) is a theorem stating that a ball in $\mathbb{R}^3$ can be decomposed into finitely many pieces and reassembled into **two balls of the same size**. This is not physically realizable — the pieces are **non-measurable sets** with no well-defined volume.

## Statement

> Let $B \subset \mathbb{R}^3$ be a unit ball. There exists a decomposition $B = A_1 \cup \ldots \cup A_k$ and rigid motions $g_1, \ldots, g_k$ (rotations and translations) such that:
> $$g_1(A_1) \cup \ldots \cup g_m(A_m) = B_1 \quad \text{and} \quad g_{m+1}(A_{m+1}) \cup \ldots \cup g_k(A_k) = B_2$$
> where $B_1, B_2$ are unit balls. The minimal $k$ is 5.

## Proof Sketch

### 1. Free Group on Two Generators

Take two rotations $\rho, \sigma$ of $\mathbb{R}^3$ generating a **free group** $F_2 = \langle \rho, \sigma \rangle$ (no non-trivial relations). Partition $F_2$ by the first letter of reduced words:

$$F_2 = \{e\} \cup S(\rho) \cup S(\rho^{-1}) \cup S(\sigma) \cup S(\sigma^{-1})$$

Crucially: $F_2 = S(\rho) \cup \rho^{-1} S(\rho^{-1})$ — so $F_2$ is equidecomposable with **two copies of itself**.

### 2. Hausdorff Paradox (1914)

The unit sphere $S^2$ can be decomposed into four pieces $A, B, C, D$ where $D$ is countable and $A \sim B \sim C \sim B \cup C$ under rotations from $F_2$.

### 3. Axiom of Choice

To pick one representative from each orbit of $F_2$ acting on $S^2$, the **Axiom of Choice** is essential. This is precisely what makes the pieces non-measurable — no constructive selection is possible.

## Why This Is Not a Contradiction

| Apparent paradox | Explanation |
|-----------------|-------------|
| "Volume doubles" | The pieces $A_i$ have no Lebesgue measure — volume is undefined for them |
| "Violates conservation" | Applies to mathematical $\mathbb{R}^3$, not physical space |
| "Could duplicate gold" | Atoms are discrete; the theorem requires a continuum |

## The Role of the Axiom of Choice

Solovay (1970) proved that in a model of set theory **without** the full Axiom of Choice (but with the Axiom of Dependent Choice), **all subsets of $\mathbb{R}$ are Lebesgue measurable** — and the Banach-Tarski paradox disappears.

This shows AC is not merely a technical convenience but has profound geometric consequences.

## Echoes in physics

The Banach-Tarski paradox is mathematically distant from physics, but it shares a deep family resemblance with the way **measure theory and symmetry transformations break down at the quantum level**. In quantum field theory, [[anomalies|anomalies]] arise when a classical symmetry of the action fails to be a symmetry of the path-integral *measure* — formally, the Jacobian of the symmetry transformation is non-trivial, and conserved currents acquire calculable extra terms. Just as the Banach-Tarski decomposition exploits the fact that no rotation-invariant measure can extend to *all* subsets of $\mathbb{R}^3$ (when the Axiom of Choice is in play), QFT anomalies exploit the fact that no regulator can simultaneously preserve every classical symmetry of the integration measure.

The ingredient is the same: continuous group action on a space, plus a measure that refuses to be invariant under it. Banach-Tarski is the cleanest classical illustration of how badly that can go.

## Related Articles

- [[godel-incompleteness|Gödel's Incompleteness Theorems]] — independence of axioms
- [[cantor-diagonal|Cantor's Diagonal Argument]] — non-constructive mathematics
- [[non-euclidean-geometry|Non-Euclidean Geometry]] — other counterintuitive geometries
- [[anomalies]] — measure-non-invariance of classical symmetries in QFT

---
title: "Topology and Metric Spaces"
category: "Mathematical Foundations"
order: 15
lang: "en"
slug: "/math/topology-basics"
growth: "seedling"
---

## Introduction

Topology and metric spaces form the rigorous foundation of modern analysis, providing the language for discussing continuity, convergence, and compactness in abstract settings. A metric space endows a set with a notion of distance, while topology generalizes the concept of proximity without reference to any particular metric.

## Metric Spaces

A **metric space** is a pair $(X, d)$ where $X$ is a set and $d: X \times X \to [0, \infty)$ is a **metric** satisfying:

1. **Identity of indiscernibles**: $d(x, y) = 0 \iff x = y$
2. **Symmetry**: $d(x, y) = d(y, x)$
3. **Triangle inequality**: $d(x, z) \leq d(x, y) + d(y, z)$

### Canonical Examples

- **$\mathbb{R}^n$ with Euclidean metric**: $d(x, y) = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}$
- **Space of continuous functions** $C([0, 1])$: $d(f, g) = \max_{t \in [0, 1]} |f(t) - g(t)|$ (supremum norm)
- **Sequence spaces $\ell^p$**: for sequences $x = (x_i)$, $d(x, y) = \left(\sum_{i=1}^{\infty} |x_i - y_i|^p\right)^{1/p}$

## Open and Closed Sets

In a metric space $(X, d)$, the **open ball** of radius $r$ centered at $x$ is:
$$B(x, r) = \{y \in X : d(x, y) < r\}$$

A set $U \subseteq X$ is **open** if for each $x \in U$ there exists $r > 0$ such that $B(x, r) \subseteq U$. A set $F$ is **closed** if its complement $F^c$ is open.

The **interior** $\text{int}(A)$ of $A$ is the largest open set contained in $A$. The **closure** $\overline{A}$ is the smallest closed set containing $A$. The **boundary** $\partial A = \overline{A} \setminus \text{int}(A)$ consists of points neither in the interior nor in the interior of the complement.

## Convergence and Continuity

A sequence $(x_n)$ in $(X, d)$ **converges** to $x$, written $x_n \to x$, if:
$$\forall \varepsilon > 0 \, \exists N \in \mathbb{N} \, \forall n > N : d(x_n, x) < \varepsilon$$

A function $f: X \to Y$ between metric spaces is **continuous** at $x$ if:
$$\forall \varepsilon > 0 \, \exists \delta > 0 : d(x', x) < \delta \implies d(f(x'), f(x)) < \varepsilon$$

Equivalently, $f$ is continuous on $X$ if and only if the preimage of every open set is open.

## Topological Spaces

A **topology** on a set $X$ is a family $\tau$ of subsets of $X$ (called **open sets**) such that:

1. $\emptyset, X \in \tau$
2. The union of any collection of sets in $\tau$ belongs to $\tau$
3. The intersection of finitely many sets in $\tau$ belongs to $\tau$

Every metric space induces a topology via open balls; conversely, not every topological space is metrizable—a space may be non-Hausdorff or fail to satisfy the first countability axiom.

## Compactness

A set $K$ in a topological space is **compact** if every open cover admits a finite subcover.

**Heine–Borel Theorem**: A subset $K \subset \mathbb{R}^n$ is compact if and only if it is closed and bounded.

In metric spaces, compactness is equivalent to **sequential compactness**: every sequence contains a convergent subsequence. A set is **totally bounded** if for every $\varepsilon > 0$ it can be covered by finitely many $\varepsilon$-balls.

**Compactness Criterion**: In a metric space, $K$ is compact if and only if $K$ is totally bounded and complete.

## Completeness and Baire Category Theorem

A metric space $(X, d)$ is **complete** if every Cauchy sequence converges. Examples: $\mathbb{R}^n$, $C([0, 1])$, and $\ell^p$ are all complete; $\mathbb{Q}$ is not.

**Baire Category Theorem**: A complete metric space cannot be expressed as a countable union of nowhere dense sets. This is a powerful tool in analysis, underlying the open mapping theorem and closed graph theorem in [[functional-analysis]].

**Cantor Intersection Theorem**: If $(F_n)$ is a decreasing sequence of nonempty closed sets in a complete metric space with $\text{diam}(F_n) \to 0$, then $\bigcap_{n=1}^{\infty} F_n$ contains exactly one point.

## Connectedness

A space $(X, d)$ is **connected** if it cannot be written as the disjoint union of two nonempty open sets. A space is **path-connected** if any two points can be joined by a continuous curve.

In $\mathbb{R}^n$, the connected sets are precisely the intervals. Compact connected metric spaces are continuous images of $[0, 1]$.

## Universal Results

**Tychonoff's Theorem**: The product of compact topological spaces is compact (even infinite products with the product topology).

**Urysohn's Lemma**: In a normal space, for any two disjoint nonempty closed sets, there exists a continuous function $f: X \to [0, 1]$ equal to 0 on one and 1 on the other.

**Tietze Extension Theorem**: A continuous function from a closed subset of a normal space into $\mathbb{R}$ extends to a continuous function on the entire space.

## Polish Spaces and Probability

A **Polish space** is a complete separable metric space. Examples include $\mathbb{R}^n$, $C([0, 1])$, and the space of all probability measures on a Borel space.

Polish spaces are central to probability theory: [[weak-convergence-prokhorov]] establishes that a tight family of probability measures is relatively compact in the weak topology. **Prokhorov's theorem** is a key tool for understanding convergence of distributions, especially in [[skorokhod-topology]] for stochastic processes.

Measurability in Polish spaces is elegant: every Borel set can be represented as the projection of a closed set in a product of Polish spaces, connecting [[sigma-algebra-measurability]] intrinsically to topology.

## Applications

Topology and metric spaces underpin:
- [[functional-analysis]]: Banach and Hilbert spaces
- [[sobolev-spaces]]: distributions and weak derivatives
- [[convex-analysis]]: closure and compactness in product topologies
- [[baire-category]]: generalizations and applications to analysis on fractal sets

Mastering topology provides the language for rigorous analysis, enabling precise discussion of proximity, continuity, and compactness independent of any particular metric.

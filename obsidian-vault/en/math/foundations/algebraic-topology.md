---
title: "Algebraic Topology"
category: "Mathematical Foundations"
order: 15
lang: "en"
slug: "/math/algebraic-topology"
growth: "seedling"
---

# Algebraic Topology

Algebraic topology is the branch of mathematics that applies methods of abstract algebra to the study of topological spaces. Its fundamental goal is to define invariants that remain unchanged under continuous deformations, allowing one to distinguish spaces with different topological properties. This field sits at the intersection of [[topology-basics|topology]], [[category-theory|category theory]], and [[functional-analysis|functional analysis]], providing powerful tools for solving geometric and combinatorial problems.

## Homotopy and Homotopy Equivalence

The central idea in algebraic topology is the concept of **homotopy**, which captures the intuition of continuous deformation of one map into another without tears or breaks.

Two continuous maps $f, g: X \to Y$ are called **homotopic**, denoted $f \simeq g$, if there exists a continuous map $H: X \times [0, 1] \to Y$, called a **homotopy**, such that:

$$H(x, 0) = f(x) \quad \text{and} \quad H(x, 1) = g(x) \quad \forall x \in X$$

A homotopy represents a family of intermediate maps $H_t(x) = H(x, t)$ continuously connecting $f$ and $g$ as $t$ varies from $0$ to $1$.

Two spaces $X$ and $Y$ are **homotopy equivalent**, denoted $X \simeq Y$, if there exist continuous maps $f: X \to Y$ and $g: Y \to X$ such that:

$$g \circ f \simeq \text{id}_X \quad \text{and} \quad f \circ g \simeq \text{id}_Y$$

A space is called **contractible** if it is homotopy equivalent to a point. For a contractible space $X$, there exists a point $x_0 \in X$ and a continuous map $H: X \times [0, 1] \to X$ such that:

$$H(x, 0) = x, \quad H(x, 1) = x_0 \quad \forall x \in X$$

Euclidean space $\mathbb{R}^n$ is contractible, since it can be continuously deformed to any point via the homotopy $H(x, t) = (1-t)x$.

## The Fundamental Group

The fundamental group $\pi_1(X, x_0)$ is the first homotopy invariant, encoding the structure of loops in a space.

A **loop** (or closed path) at a basepoint $x_0 \in X$ is a continuous map $\gamma: [0, 1] \to X$ with $\gamma(0) = \gamma(1) = x_0$. Two loops $\gamma_1$ and $\gamma_2$ are **homotopic relative to the basepoint** ($\gamma_1 \simeq_{x_0} \gamma_2$) if there exists a homotopy $H: [0, 1] \times [0, 1] \to X$ with:

$$H(s, 0) = \gamma_1(s), \quad H(s, 1) = \gamma_2(s), \quad H(0, t) = H(1, t) = x_0$$

Loops in the same basepoint-relative homotopy class form elements of the fundamental group. Composition of loops $(\gamma_1 * \gamma_2)(s)$, defined by:

$$(\gamma_1 * \gamma_2)(s) = \begin{cases} \gamma_1(2s) & 0 \le s \le 1/2 \\ \gamma_2(2s - 1) & 1/2 < s \le 1 \end{cases}$$

becomes the group operation on homotopy classes, where the identity element is the constant loop and the inverse element $[\gamma]^{-1}$ corresponds to the loop traversed in the opposite direction.

The fundamental group **is independent of the choice of basepoint** in a path-connected space: for any two points $x_0, x_1 \in X$, the groups $\pi_1(X, x_0)$ and $\pi_1(X, x_1)$ are isomorphic. Thus, for a path-connected space, one often writes simply $\pi_1(X)$, suppressing the basepoint.

Key examples of fundamental groups:
- $\pi_1(\mathbb{R}^n) = 0$ (trivial) for all $n \ge 1$
- $\pi_1(S^1) = \mathbb{Z}$ (integers; the generator is wrapping once around the circle)
- $\pi_1(\mathbb{T}^2) = \mathbb{Z}^2$ (for the torus, a product of two circles)
- $\pi_1(S^n) = 0$ for $n \ge 2$ (higher-dimensional spheres are simply connected)

## van Kampen's Theorem

van Kampen's theorem provides a method to compute the fundamental group of a space by decomposing it into simpler pieces.

Let $X = A \cup B$, where $A$ and $B$ are open path-connected subspaces with path-connected intersection $A \cap B$. Choose a basepoint $x_0 \in A \cap B$. Then there is a homomorphism:

$$\Phi: \pi_1(A, x_0) *_{\pi_1(A \cap B, x_0)} \pi_1(B, x_0) \to \pi_1(X, x_0)$$

where $*$ denotes the **amalgamated free product** (pushout in the category of groups). Under mild hypotheses (e.g., if $A \cap B$ deformation retracts to $A$ and $B$), this homomorphism becomes an isomorphism:

$$\pi_1(X, x_0) \cong \pi_1(A, x_0) *_{\pi_1(A \cap B, x_0)} \pi_1(B, x_0)$$

The amalgamated free product is defined as follows: take the free product $\pi_1(A) * \pi_1(B)$ and add relations identifying elements that correspond to the same element in $\pi_1(A \cap B)$ via the inclusion maps $i_A: \pi_1(A \cap B) \to \pi_1(A)$ and $i_B: \pi_1(A \cap B) \to \pi_1(B)$.

This theorem allows efficient computation of fundamental groups of complex spaces by decomposing them into unions of simpler sets with known fundamental groups.

## Covering Spaces

A **covering space** of a space $X$ is a pair $(p, \widetilde{X})$ consisting of a space $\widetilde{X}$ and a continuous surjection $p: \widetilde{X} \to X$ (the projection) such that each point $x \in X$ has a neighborhood $U$ whose preimage in $\widetilde{X}$ is a disjoint union of open sets, each homeomorphic to $U$:

$$p^{-1}(U) = \bigsqcup_{i \in I} U_i, \quad p|_{U_i}: U_i \to U \text{ is a homeomorphism}$$

A **universal covering** is a covering $p: \widetilde{X} \to X$ such that $\widetilde{X}$ itself is simply connected (i.e., $\pi_1(\widetilde{X}) = 0$). For "sufficiently nice" spaces (e.g., locally path-connected CW-complexes), a universal covering exists and is unique up to homeomorphism.

**Deck transformations** (or covering transformations) are homeomorphisms $\phi: \widetilde{X} \to \widetilde{X}$ satisfying $p \circ \phi = p$. These form a group $\text{Deck}(\widetilde{X}/X)$ under composition.

The fundamental **correspondence between coverings and groups** states that for a locally path-connected space $X$, there is a bijection between:
1. Conjugacy classes of subgroups of $\pi_1(X)$
2. Isomorphism classes of coverings $p: \widetilde{X} \to X$

The group $\text{Deck}(\widetilde{X}/X)$ is isomorphic to $\pi_1(X) / p_*(\pi_1(\widetilde{X}))$, where $p_*$ is the induced homomorphism on fundamental groups.

## Singular Homology

Singular homology is a functor from the category of topological spaces to the category of abelian groups, measuring "holes" of various dimensions.

A **singular $n$-simplex** in a space $X$ is a continuous map $\sigma: \Delta^n \to X$, where $\Delta^n$ is the standard $n$-simplex:

$$\Delta^n = \{(t_0, \ldots, t_n) \in \mathbb{R}^{n+1} : t_i \ge 0, \sum t_i = 1\}$$

The **chain complex** $\{C_n(X), \partial_n\}$ is constructed by taking the free abelian group $C_n(X)$ generated by all singular $n$-simplices in $X$. The **boundary operator** $\partial_n: C_n(X) \to C_{n-1}(X)$ is defined on basis elements by:

$$\partial_n(\sigma) = \sum_{i=0}^{n} (-1)^i (\sigma|_{F_i})$$

where $\sigma|_{F_i}$ is the restriction of $\sigma$ to the $i$-th face of $\Delta^n$. The key property is $\partial_{n-1} \circ \partial_n = 0$ (the boundary of a boundary is zero), which means $\text{im}\,\partial_{n+1} \subseteq \ker\,\partial_n$.

The **homology groups** are defined as:

$$H_n(X) = \ker(\partial_n) / \text{im}(\partial_{n+1})$$

where:
- $Z_n(X) = \ker(\partial_n)$ is the group of **cycles** (chains with no boundary)
- $B_n(X) = \text{im}(\partial_{n+1})$ is the group of **boundaries**

The group $H_0(X)$ is isomorphic to the free abelian group generated by the path components of $X$. For a connected space, $H_0(X) = \mathbb{Z}$.

## Euler Characteristic and Betti Numbers

**Betti numbers** $b_n = \text{rk}\,H_n(X)$ measure the rank (dimension over $\mathbb{Q}$) of the homology groups. They encode the number of independent $n$-dimensional "holes" in the space:
- $b_0$ is the number of path components
- $b_1$ is the number of independent loops (related to $\pi_1$)
- $b_2$ is the number of independent 2-dimensional voids (e.g., cavities in a solid)

The **Euler characteristic** is defined as:

$$\chi(X) = \sum_{n=0}^{\infty} (-1)^n b_n = \sum_{n=0}^{\infty} (-1)^n \text{rk}\,H_n(X)$$

For a finite-dimensional space, this sum is finite. The Euler characteristic is a topological invariant: homotopy equivalent spaces have the same Euler characteristic.

Examples:
- For $S^1$: $\chi(S^1) = b_0 - b_1 = 1 - 1 = 0$
- For $S^2$: $\chi(S^2) = b_0 - b_1 + b_2 = 1 - 0 + 1 = 2$
- For the torus $\mathbb{T}^2$: $\chi(\mathbb{T}^2) = 1 - 2 + 1 = 0$
- For the real projective plane $\mathbb{RP}^2$: $\chi(\mathbb{RP}^2) = 1$

The classical **Euler formula for polyhedra**: $V - E + F = 2$ (for sphere-like polyhedra), where $V$, $E$, $F$ are the number of vertices, edges, and faces, follows directly from $\chi(S^2) = 2$.

## Mayer-Vietoris Sequence

The Mayer-Vietoris sequence allows computation of homology of a space decomposed as a union of two subspaces.

Let $X = A \cup B$, where $A, B$ are open subspaces. Then there is a long exact sequence:

$$\cdots \to H_n(A \cap B) \xrightarrow{(i_A)_* + (i_B)_*} H_n(A) \oplus H_n(B) \xrightarrow{(j_A)_* - (j_B)_*} H_n(X) \xrightarrow{\delta_n} H_{n-1}(A \cap B) \to \cdots$$

where $i_A: A \cap B \to A$, $i_B: A \cap B \to B$, $j_A: A \to X$, $j_B: B \to X$ are inclusions, and $\delta_n$ is the **connecting homomorphism**. Exactness of this sequence means that the image of each map equals the kernel of the next.

This sequence is frequently used in conjunction with straightforward computations of known groups to determine the homology of new spaces.

## Applications: Topological Data Analysis and Persistent Homology

Algebraic topology has found powerful applications in **topological data analysis** (TDA), a field that applies methods from algebraic topology to analyze point clouds and other data.

**Persistent homology** is a tool that tracks how homological features (connected components, cycles, cavities) appear and disappear as one increases the radius of coverings of points by balls (constructing a Čech or Rips complex). Rather than a single set of homology groups, one obtains a filtered sequence of complexes and corresponding homology groups.

Persistent homology is applied in practice to:
- Detect hidden structure in point clouds (e.g., in bioinformatics, where a point cloud may have loops or cavities)
- Analyze graphs and networks (boundary operators are defined on network cycles and related invariants)
- Pattern recognition, when the topological signature is invariant under noise

Though homology functions are powerful, they require filtrations, making persistent homology critical for practical use in [[complex-analysis|analyzing]] complex data.

## Connection to Other Areas

Algebraic topology is deeply connected to [[differential-geometry|differential geometry]], especially through de Rham cohomology, which relates differential forms to topology. Via [[category-theory|category theory]], it generalizes to homological algebra. [[non-euclidean-geometry|Non-Euclidean geometries]] and their invariants are studied using algebraic-topological methods.

The fundamental methods of algebraic topology are standard tools in modern theoretical physics, especially in quantum field theory and topological quantum mechanics, where the fundamental group and homology encode deep physical symmetries and conservation laws.

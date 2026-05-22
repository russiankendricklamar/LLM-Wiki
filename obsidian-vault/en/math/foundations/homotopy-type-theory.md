---
title: "Homotopy Type Theory (HoTT)"
category: "Math Foundations"
order: 106
lang: "en"
slug: "homotopy-type-theory"
---

# Homotopy Type Theory (HoTT)

## What Is It

Homotopy Type Theory (HoTT) is a major development in the foundations of mathematics that merges **Intensional Type Theory** (like Martin-Löf Type Theory) with **Homotopy Theory**. In HoTT, types are viewed as spaces, and terms are points in those spaces. Critically, the concept of propositional equality ($x=y$) is interpreted as the existence of a **path** between $x$ and $y$. This framework provides a constructive, computational foundation for mathematics that is natively compatible with higher categorical structures.

## The Identity Type as a Path Space

In traditional logic, equality is a predicate. In HoTT, for any type $A$ and elements $a, b: A$, the identity type $a =_A b$ is itself a type. Its elements are paths from $a$ to $b$.
- $p: a = b$ is a path.
- $q: p = p'$ is a 2-path (a homotopy between paths).
- This structure continues infinitely, making every type an **$\infty$-groupoid**.

## The Univalence Axiom

Proposed by Vladimir Voevodsky, the **Univalence Axiom** formalizes the mathematical practice of treating isomorphic structures as equal. It states that for any two types $A$ and $B$, the map that turns an identity into an equivalence is itself an equivalence:
$$(A = B) \simeq (A \simeq B)$$
This allows for "transporting" theorems and structures across equivalences automatically. It is the cornerstone of **Univalent Foundations**.

## Higher Inductive Types (HITs)

HoTT introduces Higher Inductive Types, which allow the definition of spaces by specifying not only their points (0-cells) but also their paths (1-cells), surface patches (2-cells), etc.
- **The Circle ($S^1$):** Defined by a point $base: S^1$ and a path $loop: base = base$.
- **Quotients:** Can be defined by adding paths between elements that should be identified.

## h-Levels (Homotopy Levels)

Types are classified by their "truncation" level:
1. **$h=-1$ (Propositions):** Types with at most one element (up to path).
2. **$h=0$ (Sets):** Types where any two paths between elements are equal (0-groupoids).
3. **$h=1$ (Groupoids):** Types where paths between paths can be non-trivial.

Most traditional mathematics occurs at the level of sets ($h=0$), but HoTT natively supports higher-dimensional objects.

## Relevance to AI and Program Synthesis

1. **Formal Verification:** HoTT provides a powerful language for proving the correctness of complex software, especially in compilers and distributed systems.
2. **Program Synthesis:** The "proofs-as-programs" correspondence (Curry-Howard) means that finding a path between types can be viewed as synthesizing a transformation (equivalence) between data structures.
3. **Structural Learning:** HoTT offers a framework for learning representations that are invariant under equivalences, potentially leading to more robust AI models.

## MATHEMATICAL CONCEPT: Path Induction

The eliminator for the identity type is **path induction** (also called $J$). It states that to prove a property $P(a, b, p)$ for all $b: A$ and $p: a = b$, it suffices to prove it for the case $P(a, a, refl_a)$, where $ref_a$ is the constant path.
This is a generalization of the "Leibniz equality" and is used to define path composition, inversion, and transport.

## Related Topics
[[type-theory|Type Theory]] — the logical basis  
[[algebraic-topology|Algebraic Topology]] — the geometric basis  
[[category-theory|Category Theory]] — especially $\infty$-categories  
[[godel-incompleteness|Gödel Incompleteness]] — limits of formal systems  
[[computability-theory|Computability Theory]] — the constructive aspect

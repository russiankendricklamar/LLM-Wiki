---
title: "Homological Algebra"
category: "Foundations"
order: 18
lang: "en"
slug: "homological-algebra"
---

# Homological Algebra

Homological Algebra is a branch of mathematics that studies **homology** in a general algebraic setting. It emerged in the 1940s as a tool for algebraic topology but has since become the language of modern algebraic geometry, number theory, and representation theory.

## Chain Complexes

The fundamental object in homological algebra is the **chain complex**: a sequence of modules (or abelian groups) $C_n$ and homomorphisms $d_n$ (called differentials):
$$\dots \xrightarrow{d_{n+1}} C_n \xrightarrow{d_n} C_{n-1} \xrightarrow{d_{n-1}} \dots$$
such that the composition of any two consecutive maps is zero:
$$d_n \circ d_{n+1} = 0 \iff \text{Im}(d_{n+1}) \subseteq \text{Ker}(d_n)$$

## Homology Groups

The **$n$-th homology group** measures how much the sequence fails to be "exact":
$$H_n(C) = \frac{\text{Ker}(d_n)}{\text{Im}(d_{n+1})}$$
If $H_n = 0$ for all $n$, the sequence is called **exact**.

## Derived Functors: Ext and Tor

One of the greatest achievements of homological algebra is the theory of **derived functors**, which quantify how much a functor (like $\text{Hom}$ or $\otimes$) fails to preserve exactness.

### 1. Tor (Torsion)
The Tor functor $\text{Tor}_n^R(A, B)$ measures the failure of the tensor product to be exact. It captures "torsion" information about the modules.

### 2. Ext (Extension)
The Ext functor $\text{Ext}_R^n(A, B)$ measures the failure of the $\text{Hom}$ functor to be exact. The group $\text{Ext}^1(A, B)$ classifies all possible **extensions** of $B$ by $A$.

## Diagram Chasing and Lemmas

Homological algebra is famous for "diagram chasing" proofs. Key tools include:
- **The Snake Lemma**: Constructs a long exact sequence from a commutative diagram of two exact sequences.
- **The Five Lemma**: Used to prove that a map is an isomorphism by checking its neighbors.

## Visualization: Long Exact Sequence

```chart
{
  "type": "line",
  "xAxis": "degree",
  "data": [
    {"degree": 0, "rank": 1, "label": "H₀"},
    {"degree": 1, "rank": 0, "label": "H₁"},
    {"degree": 2, "rank": 2, "label": "H₂"},
    {"degree": 3, "rank": 0, "label": "H₃"}
  ],
  "lines": [
    {"dataKey": "rank", "stroke": "#8b5cf6", "name": "Betti Numbers (Rank of Homology)"}
  ]
}
```
*The homology groups capture discrete "holes" or invariants in algebraic structures, similar to how they capture topological holes in shapes.*

## Applications

1.  **Algebraic Geometry**: Sheaf cohomology is the primary tool for studying varieties.
2.  **Category Theory**: Homological algebra is the study of **Abelian Categories**.
3.  **Theoretical Physics**: BRST [[quantization]] and topological field theories use chain complexes to handle physical redundancies (gauge symmetries).

## Related Topics

[[algebraic-topology]] — the geometric origin  
[[category-theory]] — the abstract framework  
[[hodge-theory]] — homology via differential forms
---

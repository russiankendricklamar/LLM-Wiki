---
title: 'Graph Theory: Coloring and Chromatic Number'
category: Advanced CS and Graphs
order: 157
lang: en
slug: graph-coloring
---

Graph coloring assigns labels (colors) to elements of a graph subject to constraints.

### Vertex Coloring
A proper vertex coloring assigns colors such that no two adjacent vertices share the same color. The minimum number of colors needed is the **chromatic number** $\chi(G)$. Determining if $\chi(G) \le k$ (for $k \ge 3$) is NP-complete.

### Bounds and Theorems
- **Brooks' Theorem:** $\chi(G) \le \Delta(G)$ (maximum degree) unless $G$ is a complete graph or an odd cycle.
- **Four Color Theorem:** Any planar graph can be colored with 4 colors ($\chi(G) \le 4$). Proved using computer-assisted exhaustive search.
Chromatic polynomials $P(G, k)$ count the number of valid $k$-colorings, computable using the deletion-contraction recurrence.

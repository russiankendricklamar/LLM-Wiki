---
title: Graph Theory Basics
category: Math Foundations
order: 74
lang: en
slug: graph-theory-basics
---

Graph theory studies networks of vertices (nodes) and edges (connections).

### Adjacency Matrices
A graph $G = (V,E)$ can be represented by an **adjacency matrix** $A$ where $A_{ij} = 1$ if there is an edge between $i$ and $j$, and $0$ otherwise. 
The power of the adjacency matrix, $A^k$, has an interesting property: its $(i,j)$ entry represents the number of walks of length $k$ from $i$ to $j$. 
For large graphs, we store $A$ using [[sparse-matrices|Sparse Matrices]].

### Paths and Trees
- **Path:** A sequence of edges connecting a sequence of vertices without repeats.
- **Tree:** A connected acyclic graph. In a tree with $n$ vertices, there are exactly $n-1$ edges.

Graph connectivity is crucial in modeling [[bayesian-networks|Bayesian Networks]] and routing algorithms.

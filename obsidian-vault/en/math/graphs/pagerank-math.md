---
title: 'Graph Algorithms: PageRank Mathematics'
category: Advanced CS and Graphs
order: 158
lang: en
slug: pagerank-math
---

PageRank measures the importance of nodes in a directed graph, originally designed for web pages.

### Random Surfer Model
The algorithm models a random surfer who follows outbound links with uniform probability. Let $A$ be the adjacency matrix and $D$ be the diagonal out-degree matrix. The transition matrix is $M = A^T D^{-1}$.

### The PageRank Equation
To ensure the Markov chain is irreducible and aperiodic, a damping factor $d$ (typically $0.85$) allows random teleports:
$R = \frac{1-d}{N} \mathbf{1} + d M R$
PageRank is the dominant eigenvector (corresponding to eigenvalue $\lambda = 1$) of the modified Google matrix $G = d M + \frac{1-d}{N} \mathbf{11}^T$.
The Perron-Frobenius theorem guarantees the existence and uniqueness of this stationary distribution.

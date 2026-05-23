---
title: "Graph Theory"
category: "Foundations"
order: 18
lang: "en"
slug: "graph-theory"
growth: "budding"
---
# Graph Theory

## Overview

Graph theory is the study of **graphs**, which are mathematical structures used to model pairwise relations between objects. A graph is made up of **vertices** (also called nodes or points) which are connected by **edges** (also called links or lines).

Graphs are one of the most versatile tools in modern science, used to model everything from social networks and the internet to chemical molecules and the structure of the brain. In AI, graph theory provides the foundation for [[graph-neural-networks]] and [[knowledge-graph|knowledge graphs]].

## Formal Definition

A graph $G$ is an ordered pair $G = (V, E)$, where:
- $V$ is a set of **vertices**.
- $E \subseteq \{\{u, v\} \mid u, v \in V, u \neq v\}$ is a set of **edges** (for an undirected graph).

For a **directed graph** (digraph), $E$ is a set of ordered pairs: $E \subseteq \{(u, v) \mid u, v \in V, u \neq v\}$.

## Key Types of Graphs

1.  **Undirected Graph**: Edges have no orientation. If there is an edge between $u$ and $v$, you can go both ways.
2.  **Directed Graph (Digraph)**: Edges have a direction (arcs).
3.  **Weighted Graph**: Each edge has an associated numerical value (weight), representing distance, cost, or capacity.
4.  **Bipartite Graph**: Vertices can be divided into two disjoint sets $U$ and $V$ such that every edge connects a vertex in $U$ to one in $V$.
5.  **Complete Graph ($K_n$)**: Every pair of distinct vertices is connected by a unique edge.
6.  **Directed Acyclic Graph (DAG)**: A directed graph with no directed cycles. Essential for modeling causal relations and computation graphs in deep learning.

## Fundamental Concepts

### Degree
The number of edges connected to a vertex. In directed graphs, we distinguish between **in-degree** (incoming edges) and **out-degree** (outgoing edges).

### Path and Cycle
- **Path**: A sequence of vertices where each adjacent pair is connected by an edge.
- **Cycle**: A path that starts and ends at the same vertex.

### Connectivity
A graph is **connected** if there is a path between every pair of vertices. In directed graphs, we distinguish between **weakly connected** and **strongly connected**.

### Adjacency Matrix
A square matrix $A$ where $A_{ij} = 1$ if there is an edge between vertex $i$ and vertex $j$, and 0 otherwise.
For weighted graphs, $A_{ij}$ stores the weight of the edge.

### [[spectral-graph-theory|Laplacian]] Matrix
Defined as $L = D - A$, where $D$ is the degree matrix (a diagonal matrix of vertex degrees). The Laplacian is central to **Spectral Graph Theory** and is used in [[graph-neural-networks]] to define graph convolutions.

## Important Theorems

- **Handshaking Lemma**: In any undirected graph, the sum of the degrees of the vertices is exactly twice the number of edges: $\sum_{v \in V} \text{deg}(v) = 2|E|$.
- **Euler's Theorem**: A connected graph has an Eulerian circuit (a path that visits every edge exactly once and returns to the start) if and only if every vertex has an even degree.
- **Four Color Theorem**: Any map (planar graph) can be colored with at most four colors such that no two adjacent regions have the same color.

## Applications in AI and Finance

- **[[graph-neural-networks]]**: Learning representations of graph-structured data (e.g., molecules, recommendation systems).
- **[[knowledge-graph]]**: Representing structured information about entities and their relations.
- **Network Contagion**: Modeling the spread of financial distress through interbank lending networks ([[systemic-contagion-debtrank]]).
- **Fraud Detection**: Identifying clusters of suspicious accounts or transactions in banking networks.

## Related Topics
- [[graph-neural-networks]] — deep learning on graphs
- [[knowledge-graph]] — structured data representation
- [[complex-networks]] — large-scale real-world graphs
- [[systemic-contagion-debtrank]] — financial network risk
- [[spectral-theory-operators]] — [[spectral-theory-operators|eigenvalues]] and the graph Laplacian
- [[linear-algebra]] — adjacency and Laplacian matrices

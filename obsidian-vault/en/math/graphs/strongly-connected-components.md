---
title: 'Graph Algorithms: Strongly Connected Components'
category: Advanced CS and Graphs
order: 156
lang: en
slug: strongly-connected-components
---

In a directed graph, a Strongly Connected Component (SCC) is a maximal subgraph where a path exists between every pair of vertices.

### Tarjan's Algorithm
Tarjan's algorithm finds all SCCs in $O(V + E)$ time using a single Depth-First Search (DFS). It maintains a stack of valid nodes and computes the "low-link" value for each node $v$, defined as the smallest index reachable from $v$ using valid DFS tree edges and at most one back-edge.
$v.low = \min(v.low, w.index)$
If $v.low == v.index$, $v$ is the root of an SCC, and the component is popped from the stack.

### Kosaraju's Algorithm
Kosaraju's alternative uses two DFS passes: one on $G$ to determine post-order finish times, and one on the transposed graph $G^T$ in decreasing order of finish times.

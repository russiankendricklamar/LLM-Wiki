---
title: 'Graph Theory: Max-Flow Min-Cut Theorem'
category: Advanced CS and Graphs
order: 155
lang: en
slug: max-flow-min-cut
---

Network flow evaluates the maximum capacity a directed graph can transmit from a source $s$ to a sink $t$.

### The Theorem
The **Max-Flow Min-Cut Theorem** states that the maximum amount of flow passing from $s$ to $t$ equals the total weight of the edges in a minimum $s-t$ cut. A cut $(S, T)$ partitions the vertices such that $s \in S$ and $t \in T$.

### Ford-Fulkerson Algorithm
The algorithm repeatedly finds augmenting paths in the residual graph $G_f$ and increases the flow.
$f_{new}(u, v) = f_{old}(u, v) + c_f(p)$
By duality, when no augmenting path exists, the residual graph separates $s$ and $t$, defining the minimum cut. Edmonds-Karp improves this to $O(VE^2)$ using BFS for shortest paths.

---
title: A* Search
category: Algorithms
order: 109
lang: en
slug: a-star-search
---

## Overview
A* is a graph traversal and pathfinding algorithm, noted for its performance and accuracy. It is an extension of Dijkstra's algorithm.

## Heuristics
A* selects the path that minimizes:
$$ f(n) = g(n) + h(n) $$
where $n$ is the next node, $g(n)$ is the exact cost from the start node to $n$, and $h(n)$ is a heuristic estimating the cost from $n$ to the goal. If $h(n)$ is admissible (never overestimates), A* is guaranteed to find the shortest path.
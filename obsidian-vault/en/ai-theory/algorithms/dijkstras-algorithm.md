---
title: Dijkstra's Algorithm
category: Algorithms
order: 108
lang: en
slug: dijkstras-algorithm
---

## Overview
Dijkstra's algorithm finds the shortest paths between nodes in a graph with non-negative edge weights.

## Mechanism
It maintains a set of unvisited nodes and assigns a tentative distance to every node (initially infinity). At each step, it selects the unvisited node with the smallest tentative distance, explores its neighbors, and updates their distances.
Using a min-priority queue, the time complexity is $O(E + V \log V)$.
---
title: Boolean Algebra & Circuit Logic
category: Math Foundations
order: 72
lang: en
slug: boolean-algebra
---

Boolean algebra is a branch of algebra where variable values are the truth values **true** (1) and **false** (0).

### Logic Gates
The fundamental operations correspond to logic gates:
- **AND** ($x \land y$): True if both are true.
- **OR** ($x \lor y$): True if at least one is true.
- **NOT** ($\neg x$): Inverts the value.

### Karnaugh Maps
A **Karnaugh map (K-map)** is a visual method used to simplify Boolean algebra expressions. It translates a truth table into a grid, allowing the identification of redundant terms by grouping adjacent 1s.

### Complexity Basics
Boolean circuits are a model of computation. The depth and size of a circuit representing a Boolean function determine its time and space complexity in hardware. This ties into [[recursion-recurrence|Complexity Analysis]].

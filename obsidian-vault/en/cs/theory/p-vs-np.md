---
title: 'Complexity Theory: P vs NP and Cook-Levin'
category: Advanced CS and Graphs
order: 150
lang: en
slug: p-vs-np
---

The **P vs NP problem** asks whether every problem whose solution can be quickly verified can also be quickly solved.

### Formal Definitions
Let $\Sigma$ be a finite alphabet. A language $L \subseteq \Sigma^*$ is in **P** if there exists a deterministic Turing machine $M$ deciding $L$ in polynomial time $O(n^k)$.
$L$ is in **NP** if there exists a polynomial-time verifier $V$ and a polynomial $p$ such that for all $x \in \Sigma^*$:
$x \in L \iff \exists y \in \Sigma^*, |y| \leq p(|x|) \text{ and } V(x, y) = 1$

### Cook-Levin Theorem
The Cook-Levin theorem proves that the Boolean satisfiability problem (SAT) is NP-complete. Every problem in NP can be reduced to SAT in polynomial time. The proof constructs a boolean formula $\Phi_M(x)$ that represents the execution history of a non-deterministic Turing machine $M$ accepting $x$, ensuring $\Phi_M(x)$ is satisfiable iff $x \in L$.

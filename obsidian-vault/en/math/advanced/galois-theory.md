---
title: 'Galois Theory: Fields and Solvability'
category: Advanced Theory
order: 145
lang: en
slug: galois-theory
---

Galois Theory links field theory with group theory, determining whether a polynomial equation can be solved by radicals.

### Field Extensions and Automorphisms
Let $E/F$ be a field extension. The Galois group $\text{Gal}(E/F)$ consists of all field automorphisms of $E$ that fix $F$ point-wise. A splitting field of a separable polynomial over $F$ forms a **Galois extension**.

### The Fundamental Theorem
There is a bijective correspondence between intermediate fields $K$ ($F \subseteq K \subseteq E$) and subgroups $H \subseteq \text{Gal}(E/F)$. Specifically, $K = E^H$ (the fixed field of $H$) and $H = \text{Gal}(E/K)$.

### Solvability by Radicals
A polynomial is solvable by radicals if and only if its Galois group is a **solvable group** (possesses a subnormal series with abelian factor groups). Since the symmetric group $S_n$ is not solvable for $n \geq 5$, there is no general algebraic formula for the roots of quintic or higher-degree polynomials (Abel-Ruffini theorem).

---
title: Group Theory Basics
category: Math Foundations
order: 71
lang: en
slug: group-theory-basics
---

Group theory is the mathematical study of symmetry. Its algebraic structures—groups, rings, and fields—form the foundation of modern cryptography and physics.

### Groups
A **group** $(G, \cdot)$ is a set combined with an operation satisfying:
1. **Closure:** For all $a, b \in G$, $a \cdot b \in G$.
2. **Associativity:** $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.
3. **Identity:** There exists $e \in G$ such that $e \cdot a = a \cdot e = a$.
4. **Inverse:** Every $a$ has an inverse $a^{-1}$ where $a \cdot a^{-1} = e$.

### Rings and Fields
- **Ring:** A set with two operations (addition and multiplication), forming an Abelian group under addition and a monoid under multiplication, with distributivity.
- **Field:** A commutative ring where every non-zero element has a multiplicative inverse (e.g., $\mathbb{R}, \mathbb{C}, \mathbb{F}_p$).

Fields are crucial in [[formal-proof-techniques|Formal Proofs]] and [[cryptography-basics|Cryptography]].

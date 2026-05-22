---
title: "Axiomatic Probability"
category: "Math Foundations"
order: 20
lang: "en"
slug: "axiomatic-probability"
---

# Axiomatic Probability: The Kolmogorov Foundation

Axiomatic probability is the formal mathematical framework that treats probability as a measure on a set of outcomes. Established by **Andrey Kolmogorov** in 1933, it moved probability from a collection of heuristic rules to a rigorous branch of measure theory.

## 1. The Probability Space $(\Omega, \mathcal{F}, P)$

A probability space consists of three components:
1.  **Sample Space ($\Omega$)**: The set of all possible outcomes of a random experiment.
2.  **$\sigma$-algebra ($\mathcal{F}$)**: A collection of subsets of $\Omega$ (called **events**) that is closed under complements and countable unions.
3.  **Probability Measure ($P$)**: A function $P: \mathcal{F} \to [0, 1]$ that assigns a probability to each event.

### 1.1 The $\sigma$-algebra $\mathcal{F}$
For a collection $\mathcal{F}$ to be a $\sigma$-algebra, it must satisfy:
- $\Omega \in \mathcal{F}$
- If $A \in \mathcal{F}$, then $A^c \in \mathcal{F}$ (Closure under complements)
- If $A_1, A_2, \dots \in \mathcal{F}$, then $\bigcup_{i=1}^\infty A_i \in \mathcal{F}$ (Closure under countable unions)

In the case of real numbers $\mathbb{R}$, we typically use the **Borel $\sigma$-algebra** $\mathcal{B}(\mathbb{R})$, which is the smallest $\sigma$-algebra containing all open intervals.

## 2. Kolmogorov's Axioms

A function $P: \mathcal{F} \to \mathbb{R}$ is a probability measure if it satisfies three axioms:

1.  **Non-negativity**: For any event $A \in \mathcal{F}$, $P(A) \geq 0$.
2.  **Normalization**: $P(\Omega) = 1$.
3.  **Countable Additivity ($\sigma$-additivity)**: For any sequence of disjoint events $A_1, A_2, \dots \in \mathcal{F}$ (where $A_i \cap A_j = \emptyset$ for $i \neq j$):
    $$ P\left(\bigcup_{i=1}^\infty A_i\right) = \sum_{i=1}^\infty P(A_i) $$

## 3. Derived Properties

From these axioms, we can derive the fundamental rules of probability:
- **Complement Rule**: $P(A^c) = 1 - P(A)$.
- **Empty Set**: $P(\emptyset) = 0$.
- **Monotonicity**: If $A \subseteq B$, then $P(A) \leq P(B)$.
- **Inclusion-Exclusion**: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
- **Continuity from below**: If $A_1 \subseteq A_2 \subseteq \dots$ and $A = \bigcup_{n=1}^\infty A_n$, then $P(A_n) \to P(A)$.

## 4. Why Measure Theory?

Before Kolmogorov, probability faced paradoxes (like **Bertrand's Paradox**) because it lacked a clear definition of "choosing at random." By treating probability as a measure:
- We can handle infinite sample spaces (like the real line) where the probability of any single point is zero, yet the probability of an interval is positive.
- We can use the powerful tools of integration (Lebesgue integral) to define expectation.
- It provides a unified framework for both discrete and continuous random variables.

## Related Topics

[[measure-theory]] — the broader mathematical field  
[[conditional-probability]] — defining probability given information  
[[random-variables]] — measurable functions from $\Omega$ to $\mathbb{R}$

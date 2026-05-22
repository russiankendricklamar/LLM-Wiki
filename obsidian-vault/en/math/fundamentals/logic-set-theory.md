---
title: "Set Theory & Formal Logic"
category: "Math Fundamentals"
order: 9
lang: "en"
slug: "logic-set-theory"
---

# Set Theory & Formal Logic: The Language of Proof

Mathematics is built on a foundation of logic and sets. Every definition in AI—from "a set of training examples" to "the domain of a function"—relies on these concepts. Logic provides the rules for valid reasoning, while set theory provides the objects we reason about.

## 1. Formal Logic: The Rules of Thought

### Propositional Logic
Deals with variables that are either **True** ($T$) or **False** ($F$).
- **Conjunction ($\land$)**: AND
- **Disjunction ($\lor$)**: OR
- **Negation ($\neg$)**: NOT
- **Implication ($\implies$)**: "If P, then Q." Note that $P \implies Q$ is only false if $P$ is true and $Q$ is false.

### Predicate Logic (Quantifiers)
Extends logic to handle "for all" and "there exists."
- **Universal Quantifier ($\forall$)**: "For every $x$ in the domain..."
- **Existential Quantifier ($\exists$)**: "There exists at least one $x$ such that..."

**Example**: $\forall x \in \mathbb{R}, \exists y \in \mathbb{R} : y > x$. (For every real number, there is a larger real number).

## 2. Set Theory: The Universal Container

A **Set** is a collection of distinct objects.
- **Membership ($x \in A$)**: $x$ is an element of set $A$.
- **Subset ($A \subseteq B$)**: Every element of $A$ is also in $B$.
- **Union ($A \cup B$)**: Elements in $A$ OR $B$.
- **Intersection ($A \cap B$)**: Elements in $A$ AND $B$.
- **Complement ($A^c$ or $\bar{A}$)**: Elements NOT in $A$.

## 3. Relations and Functions

- **Cartesian Product ($A \times B$)**: The set of all ordered pairs $(a, b)$.
- **Relation**: A subset of $A \times B$.
- **Function ($f: A \to B$)**: A relation that assigns *exactly one* output in $B$ to every input in $A$.
    - **Injective (One-to-One)**: Different inputs give different outputs.
    - **Surjective (Onto)**: Every element in $B$ is reached by at least one input in $A$.
    - **Bijective**: Both injective and surjective (invertible).

## 4. Boolean Algebra in Computing

In computer science, formal logic becomes **Boolean Algebra**.
- Gates (AND, OR, NOT) are the physical implementation of logical operators.
- Bitwise operations allow computers to perform logic at the hardware level.
- **Set Theory in Databases**: SQL joins are essentially operations on sets (Intersections, Unions, Cartesian Products).

## 5. Why it Matters in AI

- **Knowledge Representation**: Symbolic AI (GOFAI) uses formal logic to represent facts about the world.
- **Constraint Satisfaction**: Solving problems like scheduling or Sudoku.
- **Formal Verification**: Proving that a piece of code (or a neural network's safety property) will always behave as expected.

## Related Topics
[[probability-axioms|Probability Axioms]] — Built on top of set theory  
[[computability-theory|Computability]] — What logic tells us about what computers can't do  
[[graph-theory|Graph Theory]] — Sets of vertices and relations (edges)

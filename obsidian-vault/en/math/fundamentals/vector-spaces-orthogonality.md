---
title: "Vector Spaces & Orthogonality"
category: "Math Fundamentals"
order: 2
lang: "en"
slug: "vector-spaces-orthogonality"
---

# Vector Spaces & Orthogonality: The Geometry of Data

In the world of AI and engineering, we don't just deal with numbers; we deal with **Vectors**. Understanding the space they live in and how they relate to one another is fundamental to everything from neural network embeddings to signal processing.

## 1. Vector Spaces and Bases

A **Vector Space** $V$ is a set of objects (vectors) that can be added together and multiplied by scalars.
- **Basis**: A set of linearly independent vectors that "span" the space. Any vector in the space can be written as a unique linear combination of these basis vectors.
- **Dimension**: The number of vectors in any basis for that space.

**AI Context**: In LLMs, "Embedding Space" is a high-dimensional vector space where semantically similar words are close to each other.

## 2. Orthogonality: The Power of 90 Degrees

Two vectors $u$ and $v$ are **Orthogonal** ($u \perp v$) if their dot product is zero:
$$u \cdot v = 0$$
In high-dimensional spaces, orthogonality implies **independence**. If two features are orthogonal, changing one has zero effect on the other.

### Orthonormal Basis
A basis is **Orthonormal** if all vectors are orthogonal to each other and have unit length ($\|v\| = 1$). This is the "gold standard" for coordinate systems (like the standard $x, y, z$ axes) because it makes calculations extremely simple.

## 3. Projection Matrices

A **Projection** of vector $b$ onto a subspace (like a line or a plane) finds the point in that subspace closest to $b$.
If $A$ is a matrix whose columns form a basis for the subspace, the projection matrix $P$ is:
$$P = A(A^T A)^{-1} A^T$$
The projected vector is $p = Pb$.

**Application**: In [[linear-regression-ols|Linear Regression]], we project the target vector $y$ onto the column space of our features $X$ to find the best possible fit.

## 4. The Gram-Schmidt Process

Gram-Schmidt is an algorithm to convert any basis $\{a_1, a_2, \dots, a_n\}$ into an **orthonormal** basis $\{q_1, q_2, \dots, q_n\}$.
1. Start with $a_1$, normalize it to get $q_1$.
2. For $a_2$, subtract its projection onto $q_1$ to make it orthogonal, then normalize to get $q_2$.
3. Repeat, subtracting projections onto all previously found $q_i$ vectors.

**Stability Note**: In practice, we use [[matrix-decompositions|QR Decomposition]] (Modified Gram-Schmidt) because it is more numerically stable for computers.

## 5. Summary of Key Concepts

- **Kernel (Nullspace)**: The set of all vectors $x$ such that $Ax = 0$.
- **Image (Column Space)**: The set of all possible outputs $Ax$.
- **Orthogonal Complement**: The space of all vectors orthogonal to every vector in a given subspace.

## Related Topics
[[linear-regression-ols|Linear Regression]] — Minimizing error via projections  
[[matrix-decompositions|Matrix Decompositions]] — QR as a form of Gram-Schmidt  
[[eigenvalues-eigenvectors|Eigenvalues]] — Spectral decomposition into orthogonal axes

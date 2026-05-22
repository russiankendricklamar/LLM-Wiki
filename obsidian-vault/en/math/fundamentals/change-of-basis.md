---
title: 'Linear Algebra: Change of Basis'
category: Math Foundations
order: 86
lang: en
slug: change-of-basis
---

A basis defines the coordinate system of a vector space. We can translate vectors and transformations between different bases.

### Coordinate Transformations
If $P$ is the change-of-basis matrix containing the new basis vectors as its columns, a vector $\mathbf{x}$ in the standard basis relates to its new coordinates $[\mathbf{x}]_B$ by:
$\mathbf{x} = P [\mathbf{x}]_B$

### Similarity Transforms
A linear transformation represented by matrix $A$ in the standard basis is represented by matrix $B$ in the new basis:
$B = P^{-1} A P$
Matrices $A$ and $B$ are **similar**. They share the same eigenvalues, determinant, and [[rank-nullity-theorem|Rank]].

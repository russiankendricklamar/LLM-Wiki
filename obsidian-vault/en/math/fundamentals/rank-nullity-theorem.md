---
title: 'Linear Algebra: Kernel, Image, and Rank-Nullity'
category: Math Foundations
order: 75
lang: en
slug: rank-nullity-theorem
---

For any linear transformation $T: V \to W$ represented by a matrix $A$:

### Fundamental Subspaces
1. **Kernel (Null Space, $\ker A$):** The set of all vectors $\mathbf{x}$ such that $A\mathbf{x} = \mathbf{0}$.
2. **Image (Column Space, $\text{im} A$):** The set of all possible outputs $A\mathbf{x}$.

### The Rank-Nullity Theorem
The **Rank-Nullity Theorem** states that the dimension of the domain $V$ is the sum of the dimensions of the kernel (nullity) and the image (rank):
$\text{rank}(A) + \text{nullity}(A) = n$
where $n$ is the number of columns in $A$.

This theorem is a cornerstone of linear algebra, connecting the geometry of linear transformations with solving systems of equations. It is closely related to [[change-of-basis|Change of Basis]].

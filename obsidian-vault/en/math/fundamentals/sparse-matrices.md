---
title: 'Linear Algebra: Sparse Matrices'
category: Math Foundations
order: 80
lang: en
slug: sparse-matrices
---

A matrix is **sparse** if most of its elements are zero. Storing standard 2D arrays wastes memory and compute.

### Storage Formats
1. **CSR (Compressed Sparse Row):** Stores values, column indices, and row pointer arrays. Excellent for fast matrix-vector multiplication.
2. **CSC (Compressed Sparse Column):** Similar to CSR, but stores column pointers and row indices. Ideal for matrix factorization.

### Mathematical Properties
Sparse matrices arise in PDEs, [[graph-theory-basics|Graph Theory]] (adjacency matrices), and network analysis. Efficient algorithms avoid multiplying by zeros, drastically reducing time complexity from $O(n^3)$ in standard matrix operations. Floating point limits still require careful [[numerical-stability|Numerical Stability]].

---
title: "Linear Algebra"
category: "Foundations"
order: 10
lang: "en"
slug: "linear-algebra"
growth: "budding"
---
# Linear Algebra

## Overview

Linear algebra is the branch of mathematics concerning linear equations, linear functions, and their representations through matrices and vector spaces. It is the central language of modern science, particularly in artificial intelligence, where data is represented as high-dimensional vectors and model transformations as matrix multiplications.

In the context of the digital garden, linear algebra provides the tools for understanding [[spectral-theory-operators]], [[manifold-learning]], and the internal dynamics of [[transformer-architecture|transformers]].

## Fundamental Objects

### Vectors
An $n$-dimensional vector $v \in \mathbb{R}^n$ is an ordered list of numbers. It can represent a point in space, a direction, or a piece of data (e.g., an embedding).

### Vector Spaces
A collection of vectors that can be added together and multiplied by scalars (numbers) while remaining within the same collection. The most common vector space is $\mathbb{R}^n$.

### Matrices
A rectangular array of numbers. A matrix $A \in \mathbb{R}^{m \times n}$ represents a **linear transformation** from $\mathbb{R}^n$ to $\mathbb{R}^m$.

## Key Concepts

### Linear Independence and Basis
A set of vectors is **linearly independent** if none of them can be written as a linear combination of the others. A **basis** is a set of linearly independent vectors that spans the entire vector space. The number of vectors in a basis is the **dimension** of the space.

### Matrix Multiplication
The composition of two linear transformations. For $A \in \mathbb{R}^{m \times n}$ and $B \in \mathbb{R}^{n \times p}$, the product $AB \in \mathbb{R}^{m \times p}$ is defined as:
$$ (AB)_{ij} = \sum_{k=1}^n A_{ik} B_{kj} $$
In deep learning, matrix multiplication is the primary operation in dense layers and [[attention-mechanisms]].

### Rank
The maximum number of linearly independent rows or columns in a matrix. It represents the dimension of the output space of the transformation. **Low-rank approximations** (like SVD) are used for data compression and [[quantization]].

### Determinant and Inverse
- **Determinant**: A scalar value that describes the "scaling factor" of the transformation. If $\det(A) = 0$, the matrix is singular (not invertible).
- **Inverse ($A^{-1}$)**: A matrix such that $AA^{-1} = I$, where $I$ is the identity matrix. It "undoes" the transformation.

## Spectral Theory

### Eigenvalues and Eigenvectors
For a square matrix $A$, a non-zero vector $v$ is an **eigenvector** if:
$$ Av = \lambda v $$
where $\lambda$ is the **eigenvalue**. Eigenvectors represent directions that are only scaled (not rotated) by the transformation. They are fundamental in [[spectral-theory-operators]] and [[spectral-graph-theory]].

### Singular Value Decomposition (SVD)
A factorization of any matrix $A$ into $U \Sigma V^T$, where $U$ and $V$ are orthogonal matrices and $\Sigma$ is diagonal. SVD is the mathematical foundation for [[principal-component-analysis]] and manifold learning.

## Applications in AI

- **Embeddings**: Representing tokens as vectors in a high-dimensional space.
- **Weights**: Model parameters are stored as matrices.
- **Attention**: The [[attention-mechanisms|Attention mechanism]] uses dot products (inner products) between query, key, and value vectors.
- **Optimization**: Gradient descent operates in the vector space of model parameters.

## Related Topics
- [[spectral-theory-operators]] — analysis of eigenvalues
- [[manifold-learning]] — non-linear dimensionality reduction
- [[transformer-architecture]] — matrix-heavy neural architectures
- [[quantization]] — low-precision matrix operations
- [[automatic-differentiation]] — computing gradients in vector spaces
- [[graph-theory]] — adjacency matrices and graph Laplacians

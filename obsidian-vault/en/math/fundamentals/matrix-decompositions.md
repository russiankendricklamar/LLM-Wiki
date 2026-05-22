---
title: "Matrix Decompositions: SVD, LU, and QR"
category: "Math Fundamentals"
order: 1
lang: "en"
slug: "matrix-decompositions"
---

# Matrix Decompositions: The Structural Integrity of Data

In linear algebra, matrix decomposition (or factorization) is the process of breaking down a matrix into a product of simpler, "pure" matrices. This is not just a theoretical exercise; it is the computational backbone of modern AI, signal processing, and numerical optimization.

## 1. LU Decomposition: Solving Linear Systems

LU decomposition factors a square matrix $A$ into a **Lower** triangular matrix $L$ and an **Upper** triangular matrix $U$:
$$A = LU$$

### Why it matters
- **Efficiency**: Instead of computing $A^{-1}$ (which is numerically unstable and slow), we solve $Ly = b$ followed by $Ux = y$ via forward and backward substitution.
- **Applications**: Circuit simulation, structural engineering, and anytime you need to solve $Ax = b$ for many different $b$ vectors.

## 2. QR Decomposition: Stability and Orthogonality

QR decomposition factors a matrix $A$ into an **Orthogonal** matrix $Q$ ($Q^T Q = I$) and an **Upper** triangular matrix $R$:
$$A = QR$$

### The Geometric Intuition
QR is essentially the **Gram-Schmidt process** in matrix form. It takes a set of basis vectors (columns of $A$) and produces an orthonormal basis ($Q$) that spans the same space.

### Why it matters
- **Least Squares**: Used to solve overdetermined systems in [[linear-regression-ols|Linear Regression]].
- **Eigenvalue Algorithms**: The iterative QR algorithm is the standard way to find all eigenvalues of a matrix.

## 3. Singular Value Decomposition (SVD): The Master Key

SVD is the most powerful decomposition, applicable to *any* $m \times n$ matrix $A$:
$$A = U \Sigma V^T$$
- $U$: Left singular vectors (orthogonal $m \times m$), representing the output space.
- $\Sigma$: Singular values (diagonal $m \times n$), representing the "energy" or "strength" of each dimension.
- $V^T$: Right singular vectors (orthogonal $n \times n$), representing the input space.

### Geometric Intuition
Every linear transformation can be decomposed into:
1. A rotation ($V^T$)
2. A scaling ($\Sigma$)
3. Another rotation ($U$)

### Applications in AI
- **Dimensionality Reduction (PCA)**: The top singular vectors in $V$ capture the directions of maximum variance.
- **Latent Semantic Analysis (LSA)**: Finding hidden concepts in text data.
- **Model Compression**: By keeping only the top $k$ singular values, we can approximate a massive weight matrix $A \approx U_k \Sigma_k V_k^T$, drastically reducing memory usage.

## 4. Comparison Summary

| Method | Matrix Type | Complexity | Primary Use Case |
| :--- | :--- | :--- | :--- |
| **LU** | Square | $O(n^3/3)$ | Solving $Ax=b$ efficiently |
| **QR** | Rectangular | $O(n^3)$ | Stable Least Squares, Eigenvalues |
| **SVD** | Any | $O(mn^2)$ | PCA, Compression, Noise Reduction |

## Related Topics
[[eigenvalues-eigenvectors|Eigenvalues]] — The square-matrix cousin of SVD  
[[linear-regression-ols|Linear Regression]] — Solving via QR  
[[pca|PCA]] — The statistical application of SVD

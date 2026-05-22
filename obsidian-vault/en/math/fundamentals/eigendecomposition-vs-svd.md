---
title: "Eigenvalue Decomposition vs. SVD"
category: "Math Foundations"
order: 54
lang: "en"
slug: "eigendecomposition-vs-svd"
---

# Eigenvalue Decomposition vs. SVD

Both Eigenvalue Decomposition (EVD) and Singular Value Decomposition (SVD) are fundamental matrix factorizations that reveal the geometric properties of a linear transformation.

## Eigenvalue Decomposition (EVD)
For a square matrix $A \in \mathbb{R}^{n \times n}$, if it possesses $n$ linearly independent eigenvectors, it can be factorized as:
$$ A = Q \Lambda Q^{-1} $$
where $Q$ is the matrix of eigenvectors and $\Lambda$ is a diagonal matrix of eigenvalues $\lambda_i$.
- **Spectral Theorem:** If $A$ is a real symmetric matrix, then $A$ is orthogonally diagonalizable. That is, $Q$ is an orthogonal matrix ($Q^T Q = I$), and eigenvalues are purely real. $A = Q \Lambda Q^T$.

## Singular Value Decomposition (SVD)
SVD generalizes EVD to any rectangular matrix $A \in \mathbb{R}^{m \times n}$:
$$ A = U \Sigma V^T $$
- $U \in \mathbb{R}^{m \times m}$: Orthogonal matrix of **left singular vectors** (eigenvectors of $A A^T$).
- $V \in \mathbb{R}^{n \times n}$: Orthogonal matrix of **right singular vectors** (eigenvectors of $A^T A$).
- $\Sigma \in \mathbb{R}^{m \times n}$: Diagonal matrix of non-negative **singular values** $\sigma_i$ (square roots of the non-zero eigenvalues of $A^T A$ or $A A^T$).

## Technical Comparison
1. **Applicability:** EVD is strictly for diagonalizable square matrices. SVD exists for *every* matrix.
2. **Orthogonality:** The singular vectors in SVD ($U$ and $V$) are always orthogonal. The eigenvectors in EVD are only orthogonal if $A$ is normal ($A^T A = A A^T$).
3. **Domain and Codomain:** In EVD, the transformation maps a space onto itself (basis change). In SVD, $V^T$ rotates the domain, $\Sigma$ scales it, and $U$ rotates it into the codomain.

SVD is directly applied in [[pca-math|Principal Component Analysis (PCA)]], low-rank matrix approximation (Eckart-Young-Mirsky Theorem), and computing the Moore-Penrose pseudoinverse.

---
title: "Eigenvalues and Eigenvectors"
category: "Fundamentals"
order: 4
lang: "en"
slug: "eigenvalues-eigenvectors"
---

# [[spectral-theory-operators|Eigenvalues]] and Eigenvectors: The DNA of Linear Logic

Eigenvalues and eigenvectors are the most important tools in linear algebra. they reveal the fixed "axes" of a transformation and decompose complex operations into simple scaling. They are the engine behind everything from Google Search to Portfolio Optimization.

## 1. The Core Equation

For a square matrix $A$, a non-zero vector $v$ is an **eigenvector** if:
$$A v = \lambda v$$
The scalar $\lambda$ is the **eigenvalue**.
- **Interpretation**: Multiplying $v$ by $A$ does not rotate $v$. It only scales it by $\lambda$. The eigenvectors are the "natural coordinates" of the matrix.

## 2. Theoretical Gems

### A. The Characteristic Polynomial
To find eigenvalues, we solve $\det(A - \lambda I) = 0$. The roots of this polynomial are the eigenvalues.
- **Trace**: $\sum \lambda_i = \text{Tr}(A)$ (Sum of the diagonal).
- **Determinant**: $\prod \lambda_i = \det(A)$.

### B. Gershgorin Disc Theorem
A fast way to estimate where eigenvalues are located in the complex plane without solving the polynomial. Every eigenvalue of $A$ lies within at least one disc $D_i$ centered at $a_{ii}$ with radius equal to the sum of the absolute values of the other entries in row $i$.

### C. Spectral Theorem
If $A$ is **Symmetric** ($A = A^\top$), then:
1. All its eigenvalues are **Real**.
2. Its eigenvectors are **Orthogonal**.
3. $A$ can be decomposed as $V \Lambda V^\top$. This is the basis for **PCA**.

## 3. Singular Value Decomposition (SVD)

Eigenvalues are defined only for square matrices. **SVD** generalizes this to *any* $M \times N$ matrix $A$:
$$A = U \Sigma V^\top$$
- The diagonal entries of $\Sigma$ are **Singular Values**.
- **In AI**: SVD is used for **Low-Rank Approximation**. By keeping only the largest singular values, we can compress a neural network's weights or a massive dataset (Truncated SVD).

## 4. Why Tier-1 Quants Care

- **Fastest Mean Reversion**: In StatArb, we find the eigenvector of the predictability matrix to build the most profitable trading basket.
- **Random Matrix Theory**: In [[nonlinear-shrinkage|Ledoit-Wolf]], we correct the eigenvalues of the sample covariance matrix to remove "eigenvectors of noise."
- **Stability**: A trading system is stable if the **Spectral Radius** (the largest absolute eigenvalue) of its feedback loop is less than 1.

## Related Topics

[[pca]] — the most common application  
[[spectral-theorem-unbounded]] — the operator version  
[[fastest-mean-reversion]] — solving generalized eigen-problems in StatArb  
[[random-matrix-theory]] — studying eigenvalues in noisy data
---

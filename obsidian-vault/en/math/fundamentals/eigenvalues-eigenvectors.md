---
title: "Eigenvalues and Eigenvectors"
category: "Foundations"
order: 4
lang: "en"
slug: "eigenvalues-eigenvectors"
---

# Eigenvalues and Eigenvectors: The DNA of Linear Logic

Eigenvalues and eigenvectors reveal the fixed "axes" of a transformation and decompose complex operations into simple scaling. They are the engine behind everything from Google Search and vibration physics to the stability of neural networks and portfolio optimization at firms like Citadel and Jane Street.

## 1. The Core Equation

For a square matrix $A$, a non-zero vector $v$ is an **eigenvector** if:
$$A v = \lambda v$$
The scalar $\lambda$ is the **eigenvalue**.

**Interpretation**: Multiplying $v$ by $A$ does not rotate $v$; it only scales it by $\lambda$. The eigenvectors are the "natural coordinates" of the transformation.

## 2. Theoretical Gems

### The Characteristic Equation
To find eigenvalues, we solve the **Characteristic Equation**:
$$ \det(A - \lambda I) = 0 $$
This yields a polynomial of degree $n$, where the roots are the eigenvalues.
- **Trace**: $\sum \lambda_i = \text{Tr}(A)$ (The sum of the diagonal elements).
- **Determinant**: $\prod \lambda_i = \det(A)$.

### Gershgorin Disc Theorem
A fast way to estimate where eigenvalues are located in the complex plane without solving the polynomial. Every eigenvalue of $A$ lies within at least one disc $D_i$ centered at $a_{ii}$ with radius equal to the sum of the absolute values of the other entries in row $i$. This is critical for real-time stability analysis.

## 3. Spectral Decomposition and Theorem

If a matrix $A$ has $n$ linearly independent eigenvectors, it can be factored as (**Eigendecomposition**):
$$ A = V \Lambda V^{-1} $$
Where $V$ is a matrix with eigenvectors as columns, and $\Lambda$ is a diagonal matrix of eigenvalues.

### Physical Intuition
This decomposition "uncouples" the system. It shows that a complex transformation $A$ is actually just a simple scaling along the directions of the eigenvectors. In physics, these are the **Normal Modes** of a system (e.g., how a building vibrates during an earthquake).

### The Spectral Theorem
One of the most important results in mathematics: 
*If $A$ is a real symmetric matrix ($A = A^T$), its eigenvectors are orthogonal, and its eigenvalues are real.*
This allows for the decomposition $A = Q \Lambda Q^T$, which forms the foundation of **Principal Component Analysis (PCA)**.

## 4. Singular Value Decomposition (SVD)

Eigenvalues are only defined for square matrices. **SVD** generalizes this to *any* $m \times n$ matrix $A$:
$$ A = U \Sigma V^T $$
- $U, V$: Orthogonal matrices representing "directions."
- $\Sigma$: Diagonal matrix of **Singular Values** (square roots of the eigenvalues of $A^T A$).

**In AI**: SVD is used for **model compression**. By keeping only the largest singular values, we can reduce a neural network's weights by 10x with minimal accuracy loss.

## 5. Why It Matters in AI and Finance

- **Google PageRank**: The importance of a webpage is the dominant eigenvector of the web's link matrix.
- **Portfolio Risk**: The largest eigenvalue of a correlation matrix corresponds to the **Market Factor** (systemic risk), while smaller ones represent noise or idiosyncratic factors.
- **Statistical Arbitrage**: Quants use eigenvectors to find the "fastest mean-reverting" portfolios for StatArb baskets.
- **Neural Stability**: In RNNs, if the weight matrix's eigenvalues are $> 1$, gradients explode; if $< 1$, they vanish.

## Related Topics

[[pca|PCA]] — the primary application in data science  
[[linear-spaces-basis|Linear Spaces]] — prerequisite definitions of vectors and bases  
[[discrete-markov-chains|Markov Chains]] — finding stationary distributions via spectra  
[[random-matrix-theory|RMT]] — studying eigenvalues in high-dimensional noisy data

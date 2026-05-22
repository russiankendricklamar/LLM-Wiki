---
title: "Principal Component Analysis (PCA) Math"
category: "Math Foundations"
order: 62
lang: "en"
slug: "pca-math"
---

# Principal Component Analysis (PCA)

Principal Component Analysis (PCA) is an orthogonal linear transformation that transforms data to a new coordinate system such that the greatest variance by some scalar projection of the data comes to lie on the first coordinate (the first principal component), the second greatest variance on the second, and so on.

## Maximum Variance Formulation
Consider a centered dataset $X \in \mathbb{R}^{N \times D}$ (where $N$ is samples, $D$ is features, so column means are zero).
The sample covariance matrix is $S = \frac{1}{N} X^T X$.
We seek a projection vector $u_1 \in \mathbb{R}^D$ with $\|u_1\|_2 = 1$ that maximizes the variance of the projected data $X u_1$:
$$ \max_{u_1} u_1^T S u_1 \quad \text{subject to} \quad u_1^T u_1 = 1 $$

Using [[kkt-conditions|Lagrange Multipliers]], the Lagrangian is $\mathcal{L}(u_1, \lambda) = u_1^T S u_1 + \lambda(1 - u_1^T u_1)$.
Taking the derivative with respect to $u_1$ and setting it to zero yields:
$$ S u_1 = \lambda u_1 $$
This is an eigenvalue problem. The variance $u_1^T S u_1 = \lambda$ is maximized when $\lambda$ is the largest eigenvalue of $S$, and $u_1$ is its corresponding eigenvector.

## Minimum Error Formulation
Alternatively, PCA minimizes the reconstruction error. We want to find an orthonormal basis $U_K \in \mathbb{R}^{D \times K}$ ($K < D$) to represent $x_n \approx U_K z_n$, where $z_n \in \mathbb{R}^K$ is the lower-dimensional code.
Minimizing the mean squared error:
$$ J = \frac{1}{N} \sum_{n=1}^N \left\| x_n - U_K z_n \right\|^2 $$
Setting $\nabla_{z_n} J = 0$ gives $z_n = U_K^T x_n$. Substituting this back, by the Eckart-Young-Mirsky theorem, the optimal $U_K$ consists of the top $K$ eigenvectors of $S$.

## Connection to SVD
In practice, computing the $D \times D$ covariance matrix $S$ is inefficient if $D$ is large. Instead, we use the [[eigendecomposition-vs-svd|Singular Value Decomposition (SVD)]] of the centered data matrix $X$.
If $X = U \Sigma V^T$, then the covariance matrix is $S \propto V \Sigma^2 V^T$. The principal components are exactly the right singular vectors (columns of $V$).

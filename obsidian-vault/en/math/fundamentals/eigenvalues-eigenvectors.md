---
title: "Eigenvalues and Eigenvectors"
category: "Fundamentals"
order: 4
lang: "en"
slug: "eigenvalues-eigenvectors"
---

# Eigenvalues and Eigenvectors

Eigenvalues and eigenvectors are the "DNA" of a linear transformation. They describe the directions along which a transformation acts by simple scaling, rather than rotation or complex distortion.

## The Eigen-Equation

For a square matrix $A$, a non-zero vector $v$ is an **eigenvector** if:
$$A v = \lambda v$$
The scalar $\lambda$ is the corresponding **eigenvalue**.

- **Interpretation**: When you multiply $v$ by $A$, the result points in the same (or opposite) direction as $v$, but its length is stretched or shrunk by factor $\lambda$.

## Why They Are Everywhere

1.  **PCA (Principal Component Analysis)**: Eigenvectors of the covariance matrix represent the "Principal Components" (the directions of maximum variance). Eigenvalues tell you how much information is in each direction.
2.  **Google PageRank**: The importance of a webpage is the dominant eigenvector of the web's link matrix.
3.  **Statistical Arbitrage**: In [[fastest-mean-reversion|Portfolios of Fastest Mean Reversion]], we solve a generalized eigenvalue problem to find the most profitable mean-reverting basket of stocks.
4.  **Quantum Mechanics**: The energy levels of an atom are the eigenvalues of its Hamiltonian operator (see [[spectral-theorem-unbounded]]).

## Properties

- **Trace**: The sum of eigenvalues equals the sum of the diagonal elements of the matrix (also the integral of the [[laplacian]]).
- **Determinant**: The product of eigenvalues equals the determinant.
- **Spectral Theorem**: Symmetric matrices always have real eigenvalues and an orthogonal basis of eigenvectors.

## Visualization: Scaling vs. Rotation

```chart
{
  "type": "scatter",
  "xAxis": "x",
  "data": [
    {"x": 0, "y": 0, "label": "Origin"},
    {"x": 1, "y": 1, "label": "Eigenvector v (λ=2)"},
    {"x": 2, "y": 2, "label": "Av = 2v"}
  ],
  "lines": [
    {"dataKey": "y", "stroke": "#10b981", "name": "Scaling Direction"}
  ]
}
```
*An eigenvector (green) is a special direction that survives the transformation $A$ without being tilted, only stretched.*

## Related Topics

[[pca]] — application in dimensionality reduction  
[[spectral-theorem-unbounded]] — the infinite-dimensional version  
[[fastest-mean-reversion]] — solving generalized eigen-problems in StatArb  
[[random-matrix-theory]] — studying eigenvalues in noisy data
---

---
title: "Principal Component Analysis (PCA)"
category: "Statistical Learning"
order: 7
lang: "en"
slug: "pca"
---

# Principal Component Analysis (PCA)

Principal Component Analysis (PCA) is the foundational algorithm for **unsupervised dimensionality reduction**. It transforms a set of observations of possibly correlated variables into a set of values of linearly uncorrelated variables called **principal components**.

## The Mathematical Objective

Given a dataset $X \in \mathbb{R}^{n \times d}$ (where data is centered: the mean of each column is 0), we want to project it into a lower-dimensional space $\mathbb{R}^k$ ($k < d$) such that we **maximize the variance** of the projected data.

The first principal component is a unit vector $w_1 \in \mathbb{R}^d$ that maximizes the variance of the projection $X w_1$:
$$w_1 = \arg\max_{\|w\|=1} \frac{1}{n} \sum_{i=1}^n (x_i \cdot w)^2 = \arg\max_{\|w\|=1} w^\top \Sigma w$$
where $\Sigma = \frac{1}{n} X^\top X$ is the **empirical covariance matrix**.

## Spectral Theorem Connection

By the Rayleigh quotient, the maximum of $w^\top \Sigma w$ subject to $\|w\| = 1$ is exactly the **largest eigenvalue** $\lambda_1$ of $\Sigma$, and $w_1$ is its corresponding **eigenvector**. 
Subsequent principal components $w_2, w_3, \dots$ are the eigenvectors associated with the next largest [[spectral-theory-operators|eigenvalues]], with the constraint that they are orthogonal to the previous ones.

## SVD (Singular Value Decomposition)

In practice, PCA is computed using SVD directly on the data matrix $X$, rather than computing the covariance matrix $\Sigma$ (which can be numerically unstable).
$$X = U \Lambda V^\top$$
- The columns of $V$ (right singular vectors) are the principal directions $w_i$.
- The diagonal entries of $\Lambda$ (singular values $\sigma_i$) relate to the eigenvalues of $\Sigma$ via $\lambda_i = \frac{\sigma_i^2}{n}$.
- The columns of $U \Lambda$ are the **principal components** (the coordinates of the data in the new space).

## Explained Variance

To decide how many components $k$ to keep, we look at the **explained variance ratio**:
$$\text{Ratio}_k = \frac{\sum_{i=1}^k \lambda_i}{\sum_{j=1}^d \lambda_j}$$
Usually, $k$ is chosen so that the cumulative ratio reaches 90% or 95%.

## Visualization: Finding the Projection

```chart
{
  "type": "scatter",
  "xAxis": "x1",
  "data": [
    {"x1": 1, "x2": 1, "pc1": 1.4},
    {"x1": 2, "x2": 2.2, "pc1": 2.9},
    {"x1": 3, "x2": 2.8, "pc1": 4.1},
    {"x1": 4, "x2": 4.1, "pc1": 5.7},
    {"x1": 5, "x2": 4.8, "pc1": 6.9}
  ],
  "lines": [
    {"dataKey": "x2", "stroke": "#ef4444", "name": "Raw Data (2D)"}
  ]
}
```
*PCA finds the line (Principal Component 1) that passes through the "center" of the data cloud, capturing the direction of maximum spread. The data can then be represented as 1D points along this line with minimal loss of information.*

## Applications

1.  **Data Compression**: Reducing high-dimensional embeddings to feed into simpler models.
2.  **Visualization**: Projecting data to 2D or 3D for human inspection.
3.  **Noise Reduction**: Discarding components with tiny eigenvalues often removes random noise from the data.

## Related Topics

linear-algebra — the mathematical foundation  
[[manifold-learning]] — non-linear extensions of PCA (Isomap, t-SNE)  
[[variational-autoencoders|autoencoders]] — a neural network generalization of PCA
---

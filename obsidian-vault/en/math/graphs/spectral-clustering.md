---
title: 'Machine Learning: Spectral Clustering'
category: Advanced CS and Graphs
order: 159
lang: en
slug: spectral-clustering
---

Spectral clustering groups data points using the spectrum ([[spectral-theory-operators|eigenvalues]]) of the similarity graph's [[spectral-graph-theory|Laplacian]] matrix.

### Graph Laplacian
Given an affinity matrix $W$ and degree matrix $D$, the unnormalized graph Laplacian is:
$L = D - W$
For any vector $x \in \mathbb{R}^n$, the quadratic form is:
$x^T L x = \frac{1}{2} \sum_{i,j} w_{ij} (x_i - x_j)^2$
Minimizing this form with constraints approximates the normalized cut (Ncut) problem, which is NP-hard.

### Spectral Relaxation
The relaxed continuous problem corresponds to finding the eigenvectors associated with the $k$ smallest eigenvalues of $L$ (or the normalized Laplacian $L_{rw} = I - D^{-1}W$). The data points are mapped to a lower-dimensional space defined by these eigenvectors, where standard algorithms like $k$-means can easily separate them.

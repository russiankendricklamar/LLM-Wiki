---
title: "Spectral Graph Theory"
category: "Analysis & Geometry"
order: 3
lang: "en"
slug: "spectral-graph-theory"
---

# Spectral Graph Theory

Spectral Graph Theory is the study of the properties of a graph in connection to the [[spectral-theory-operators|eigenvalues]] and eigenvectors of matrices associated with it, such as its **Adjacency Matrix** or **Laplacian Matrix**. It provides the mathematical foundation for Graph Neural Networks (GNNs), community detection, and network analysis.

## Key Matrices

Given a graph $G = (V, E)$:

### 1. Adjacency Matrix ($A$)
$A_{ij} = 1$ if there is an edge between node $i$ and $j$, and $0$ otherwise.

### 2. Degree Matrix ($D$)
A diagonal matrix where $D_{ii} = \sum_j A_{ij}$ is the degree of node $i$.

### 3. Graph Laplacian ($L$)
The Laplacian is defined as:
$$L = D - A$$
The normalized version is $\mathcal{L} = D^{-1/2} L D^{-1/2} = I - D^{-1/2} A D^{-1/2}$.

## Properties of the Laplacian

The Laplacian is the discrete version of the Laplace-Beltrami operator.
- **Positive Semi-definiteness**: $L$ is always symmetric and positive semi-definite. Its [[spectral-theory-operators|eigenvalues]] are $\lambda_0 \leq \lambda_1 \leq \dots \leq \lambda_{n-1}$.
- **Connectivity**: The smallest eigenvalue $\lambda_0$ is always 0. The number of zero eigenvalues equals the number of connected components in the graph.
- **Algebraic Connectivity**: The second smallest eigenvalue $\lambda_1$ (Fiedler value) measures how well-connected the graph is.

## Graph Fourier Transform

Just as the classical Fourier Transform uses the eigenfunctions of the continuous Laplacian ($\Delta e^{i \omega x} = -\omega^2 e^{i \omega x}$), the **Graph Fourier Transform** uses the eigenvectors $u_l$ of the graph Laplacian:

$$\hat{x}(l) = \sum_{i=1}^N x(i) u_l(i)$$

where $x$ is a signal on the graph (a vector of values on nodes). This allows us to perform "convolutions" on graphs.

## Spectral Convolutions and GCNs

A convolution on a graph is defined as a multiplication in the spectral domain:
$$x * g_\theta = U g_\theta(\Lambda) U^T x$$
where $U$ are the eigenvectors and $\Lambda$ the eigenvalues of $L$. 

Modern **Graph Convolutional Networks (GCNs)** use polynomial approximations of $g_\theta(\Lambda)$ (like Chebyshev polynomials) to avoid the expensive $O(N^3)$ eigendecomposition, making convolutions local and efficient.

## Visualization: Spectral Embedding

```chart
{
  "type": "scatter",
  "xAxis": "v1",
  "data": [
    {"v1": -0.5, "v2": 0.2, "label": "Cluster A"},
    {"v1": -0.4, "v2": 0.1, "label": "Cluster A"},
    {"v1": 0.4, "v2": -0.1, "label": "Cluster B"},
    {"v1": 0.5, "v2": -0.2, "label": "Cluster B"}
  ],
  "lines": [
    {"dataKey": "v2", "stroke": "#10b981", "name": "Eigenvector 2 (Fiedler)"}
  ]
}
```
*Projecting nodes using the first few non-trivial eigenvectors of the Laplacian (Spectral Embedding) naturally reveals the community structure (clusters).*

## Applications

1.  **Spectral Clustering**: Using Laplacian eigenvectors to partition graphs.
2.  **GNNs**: Architectures like Defferrard's ChebNet or Kipf & Welling's GCN.
3.  **Network Robustness**: Evaluating the vulnerability of infrastructure.

## Related Topics

[[graph-neural-networks]] — the primary AI application  
[[random-matrices]] — behavior of spectra for large random graphs  
[[manifold-learning]] — discrete vs continuous spectral properties

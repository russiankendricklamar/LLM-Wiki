---
title: Spectral Graph Theory
date: 2026-04-28
tags:
  - math
  - graphs
  - spectral-theory
  - gnn
aliases:
  - Graph Laplacian
---

# Spectral Graph Theory

Spectral Graph Theory studies the properties of graphs through the eigenvalues (spectrum) and eigenvectors of their matrices (primarily the **Laplacian**). it serves as a bridge between discrete mathematics (graph structure) and continuous analysis. In machine learning, it is the foundation for **Spectral Clustering** and **Graph Convolutional Networks (GCN)**.

## The Graph Laplacian

Let $G = (V, E)$ be an undirected graph with $n$ vertices.
1. **Adjacency Matrix $A$**: $A_{ij} = 1$ if there is an edge $(i, j)$, and $0$ otherwise.
2. **Degree Matrix $D$**: A diagonal matrix where $D_{ii} = \sum_j A_{ij}$ (the degree of vertex $i$).

The **Unnormalized Laplacian** is defined as:
$$
L = D - A
$$

### Properties of the Laplacian:
- $L$ is a symmetric and positive semi-definite matrix.
- Eigenvalues: $0 = \lambda_1 \le \lambda_2 \le \dots \le \lambda_n$.
- The number of eigenvalues equal to 0 corresponds to the number of connected components in the graph.
- **$\lambda_2$ (Fiedler Value)**: Describes the "algebraic connectivity" of the graph. The larger it is, the harder it is to cut the graph into two pieces.

## Spectral Decomposition and the Laplace-Beltrami Operator

The Graph Laplacian is a discrete analog of the Laplace operator $\Delta f = \nabla^2 f$ in continuous space. The eigenvectors of the Graph Laplacian can be viewed as "harmonics" or "frequencies" on the graph:
- Eigenvectors corresponding to small $\lambda$ change slowly across the graph (low frequencies).
- Eigenvectors corresponding to large $\lambda$ change rapidly (high frequencies).

## Spectral Graph Convolutions

Classical convolution in CNNs is multiplication in the Fourier domain (Convolution Theorem). For a graph, we define the **Graph Fourier Transform** using the eigenvectors $U = [u_1, u_2, \dots, u_n]$ of the Laplacian:

$$
\hat{x} = U^T x
$$

The convolution of a signal $x$ with a filter $g_\theta$ is defined as:
$$
x \ast_G g_\theta = U g_\theta(\Lambda) U^T x
$$
where $g_\theta(\Lambda)$ is a diagonal matrix of filters in the spectral domain.

### From Theory to Practice: GCNs
Computing the full spectral decomposition $U$ costs $O(n^3)$, which is infeasible for large graphs. **Thomas Kipf** proposed approximating the filter $g_\theta$ using 1st-order Chebyshev polynomials, leading to the classic Graph Convolutional Network (GCN) formula:

$$
H^{(l+1)} = \sigma(\tilde{D}^{-1/2} \tilde{A} \tilde{D}^{-1/2} H^{(l)} W^{(l)})
$$

where $\tilde{A} = A + I$ (adding self-loops), which effectively acts as a low-pass filter (smoothing) of the signal on the graph.

## Applications
1. **Spectral Clustering**: Using the first $k$ eigenvectors for dimensionality reduction and clustering.
2. **Manifold Learning**: The Laplacian Eigenmaps algorithm for data visualization.
3. **GNNs**: Spectral filters allow for extracting structural patterns in graphs (molecules, social networks).

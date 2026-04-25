---
title: "Manifold Learning"
category: "Analysis & Geometry"
order: 6
lang: "en"
slug: "manifold-learning"
---

# Manifold Learning

Manifold Learning is a class of non-linear dimensionality reduction techniques based on the **Manifold Hypothesis**: the idea that high-dimensional data (like images or text embeddings) actually lies on a low-dimensional manifold embedded in the high-dimensional space.

## The Manifold Hypothesis

Consider a dataset of $1000 \times 1000$ pixel images of a face. The raw dimension is $10^6$. However, the variability is mostly due to a few factors: head rotation, lighting, and expression. Thus, the data points lie on a manifold of dimension $\approx 10$.

## Key Algorithms

### 1. Isomap (Isometric Mapping)
Isomap attempts to preserve the **geodesic distances** between points (distance measured *along* the manifold) rather than Euclidean distances.
- Construct a neighborhood graph.
- Compute shortest paths between all pairs (Dijkstra).
- Apply MDS (Multidimensional Scaling) to the resulting distance matrix.

### 2. Locally Linear Embedding (LLE)
LLE assumes the manifold is locally linear. It represents each point as a linear combination of its neighbors and tries to preserve these weights in the low-dimensional projection.

### 3. [[spectral-graph-theory|Laplacian]] Eigenmaps
Based on **Spectral Graph Theory**. It constructs a graph [[spectral-graph-theory|Laplacian]] $L$ from the data and uses its bottom eigenvectors to find a projection that keeps nearby points close to each other.

### 4. UMAP and t-SNE
Modern SOTA methods. While t-SNE focuses on local structure, **UMAP** (Uniform Manifold Approximation and Projection) uses algebraic topology and Riemannian geometry to preserve both local and global structure more efficiently.

## Mathematical Engine: The Beltrami Operator

Many manifold learning methods are discrete approximations of the **Laplace-Beltrami operator** $\Delta_M$ on the underlying manifold $M$. The eigenfunctions of $\Delta_M$ provide the "natural coordinates" for the data.

$$\Delta_M \phi = \lambda \phi$$

The smooth embedding is obtained by mapping $x \to (\phi_1(x), \phi_2(x), \dots, \phi_k(x))$.

## Visualization: Euclidean vs. Geodesic

```chart
{
  "type": "line",
  "xAxis": "step",
  "data": [
    {"step": 0, "euclidean": 0, "geodesic": 0},
    {"step": 1, "euclidean": 10, "geodesic": 12},
    {"step": 2, "euclidean": 18, "geodesic": 25},
    {"step": 3, "euclidean": 15, "geodesic": 40}
  ],
  "lines": [
    {"dataKey": "euclidean", "stroke": "#ef4444", "name": "Euclidean Distance (Short-circuit)"},
    {"dataKey": "geodesic", "stroke": "#10b981", "name": "Geodesic Distance (True Path)"}
  ]
}
```
*In a "Swiss Roll" manifold, two points might be physically close in 3D space but very far apart along the surface. Manifold learning prevents these "short-circuits" in representation.*

## Applications

1.  **Single-cell RNA Sequencing**: Visualizing the "trajectories" of cell development.
2.  **Image Analysis**: Understanding the latent space of generative models.
3.  **Anomaly Detection**: Points far from the learned manifold are likely outliers.

## Related Topics

[[spectral-graph-theory]] — the mathematical basis for Laplacian Eigenmaps  
[[information-geometry]] — studying the manifold of distributions  
[[differential-geometry]] — the theory of manifolds

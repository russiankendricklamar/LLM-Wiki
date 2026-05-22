---
title: "The Mapper Algorithm in TDA"
category: "Analysis & Geometry"
order: 88
lang: "en"
slug: "tda-mapper-algorithm"
---

# The Mapper Algorithm in TDA

Topological Data Analysis (TDA) applies the tools of algebraic topology to understand the shape of high-dimensional datasets. The Mapper algorithm, introduced by Singh, Mémoli, and Carlsson (2007), provides a functorial method to extract simplified, graph-like representations of complex data by combining local clustering with global connectivity.

## Mathematical Formulation

Let $X$ be a topological space (in practice, a point cloud in $\mathbb{R}^d$) and let $f : X \to Z$ be a continuous function to a parameter space $Z$ (often $\mathbb{R}$ or $\mathbb{R}^2$), called the **filter function** or lens.

We define an open cover $\mathcal{U} = \{U_\alpha\}_{\alpha \in A}$ of $f(X)$. The pullback of this cover is an open cover of $X$:
$$
f^{-1}(\mathcal{U}) = \{ f^{-1}(U_\alpha) \}_{\alpha \in A}
$$
The Mapper algorithm applies a clustering algorithm (e.g., DBSCAN or single-linkage clustering) independently to each preimage $f^{-1}(U_\alpha)$. Let the connected components (clusters) of $f^{-1}(U_\alpha)$ be denoted by $C_{\alpha, i}$, where $i \in \{1, \dots, k_\alpha\}$. These clusters form a refined cover of $X$:
$$
\mathcal{V} = \{ C_{\alpha, i} \}_{\alpha \in A, \, i \in \{1, \dots, k_\alpha\}}
$$

## The Nerve Complex

The simplified topological representation is constructed via the **Nerve** of the cover $\mathcal{V}$, denoted $\mathcal{N}(\mathcal{V})$. The nerve is an abstract simplicial complex defined as follows:

1. **Vertices (0-simplices)**: There is one vertex for every cluster $C_{\alpha, i} \in \mathcal{V}$.
2. **Edges (1-simplices)**: An edge connects two vertices $C_{\alpha, i}$ and $C_{\beta, j}$ if and only if their intersection is non-empty:
   $$
   C_{\alpha, i} \cap C_{\beta, j} \neq \emptyset
   $$
   This occurs when the open sets in the parameter space overlap (i.e., $U_\alpha \cap U_\beta \neq \emptyset$) and data points belong to the clusters in both sets.
3. **Higher-dimensional simplices ($k$-simplices)**: A $k$-simplex is formed by a subset of $k+1$ vertices whose corresponding clusters have a non-empty common intersection.

By the Nerve Theorem, under suitable conditions (if the sets and all their non-empty finite intersections are contractible), the nerve $\mathcal{N}(\mathcal{V})$ is homotopy equivalent to the union of the sets in $\mathcal{V}$.

## Algorithm Parameters and Functoriality

The structure of the resulting Reeb graph depends critically on three choices:
- The filter function $f$, which determines what aspect of the data to focus on (e.g., density, eccentricity, PCA projection).
- The cover $\mathcal{U}$, defined by the number of intervals and their overlap percentage.
- The clustering algorithm and its hyper-parameters.

Mapper is functorial in the sense that it respects continuous maps between spaces. It provides a highly robust visualization tool that is coordinate-free, invariant to small deformations, and captures structural phenomena like flares, loops, and voids in high dimensions that are invisible to classical dimensionality reduction techniques.

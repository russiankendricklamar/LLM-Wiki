---
title: "Geometric Deep Learning"
category: "AI Theory"
order: 18
lang: "en"
slug: "geometric-deep-learning"
---

# Geometric Deep Learning

Geometric Deep Learning (GDL) is a theoretical framework introduced by Bronstein, Bruna, Cohen, and Velickovic (2021) that attempts to unify all neural network architectures through the lens of **Symmetry** and **Invariance**. It is the "Erlangen Program" for deep learning.

## The Core Problem

Standard machine learning often struggles with the "curse of dimensionality." GDL solves this by utilizing the **geometric structure** of the data domain (e.g., grids, graphs, manifolds) to reduce the search space of functions.

## The 5G Principles

GDL classifies architectures based on the type of domain and the symmetries (groups) they respect:

1.  **Grids** (CNNs): Translational invariance. Convolutions are equivariant to shifts.
2.  **Groups** (Equivariant NNs): Invariance to rotations, reflections, or other transformations.
3.  **Graphs** (GNNs): Permutation invariance. The output shouldn't change if we reorder the nodes.
4.  **Geodesics** ([[manifold-learning|Manifold]] NNs): Respecting the curvature of the space.
5.  **Gauges** (Gauge CNNs): Symmetries of the local coordinate systems.

## Mathematical Engine: Invariance and Equivariance

Let $G$ be a group of transformations (like rotations) acting on the input $x$.

### 1. Invariance
A function $f$ is **invariant** if transforming the input doesn't change the output:
$$f(g \cdot x) = f(x)$$
*Example: Image classification (a cat is a cat even if shifted).*

### 2. Equivariance
A function $f$ is **equivariant** if transforming the input is equivalent to transforming the output:
$$f(g \cdot x) = g \cdot f(x)$$
*Example: Part segmentation (if you rotate the image, the segmentation mask rotates too).*

## The Blueprint

GDL proposes a common blueprint for any layer:
1.  **Linear Score**: A learnable linear operator.
2.  **Non-linearity**: Pointwise activation.
3.  **Pooling**: Aggregating information to achieve invariance.

## Visualization: Symmetry vs. Capacity

```chart
{
  "type": "scatter",
  "xAxis": "symmetry",
  "data": [
    {"symmetry": 0, "capacity": 100, "label": "[[transformer-architecture|MLP]] (No structure)"},
    {"symmetry": 30, "capacity": 60, "label": "CNN (Grids)"},
    {"symmetry": 70, "capacity": 30, "label": "GNN (Graphs)"},
    {"symmetry": 100, "capacity": 10, "label": "Physical Laws (Strict)"}
  ],
  "lines": [
    {"dataKey": "capacity", "stroke": "#3b82f6", "name": "Function Search Space"}
  ]
}
```
*By imposing more symmetry (moving right), we drastically reduce the amount of data needed to learn a function, but we limit the model's flexibility to represent non-symmetric data.*

## Why It Matters

1.  **Data Efficiency**: Architectures that respect symmetries need orders of magnitude less data.
2.  **Generalization**: Equivariant models generalize to unseen rotations or scales naturally.
3.  **Science & Discovery**: Essential for drug discovery (graphs) and physics (manifolds).

## Related Topics

[[lie-groups]] — the mathematics of continuous symmetry  
[[graph-neural-networks]] — the "Graph" branch of GDL  
[[equivariant-nn]] — architectures implementing these principles
---

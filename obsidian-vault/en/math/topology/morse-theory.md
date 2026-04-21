---
title: "Morse Theory"
category: "Topology"
order: 1
lang: "en"
slug: "morse-theory"
---

# Morse Theory

Morse Theory is a powerful tool in differential topology that studies the **topology of a manifold** by examining the **critical points** of a smooth function defined on it. In the words of René Thom, Morse theory shows that "the shape of a space is determined by its bumps."

## Morse Functions

A smooth function $f: M \to \mathbb{R}$ is a **Morse function** if all its critical points (where $\nabla f = 0$) are **non-degenerate**. This means the Hessian matrix $H(f)$ at each critical point is invertible.

### The Morse Index
The **index** of a critical point is the number of negative eigenvalues of its Hessian.
- **Index 0**: Local minimum.
- **Index 1**: Saddle point.
- **Index $n$**: Local maximum.

## The Fundamental Theorem

The central result of Morse theory states that the topology of $M$ is closely tied to the indices of the critical points of any Morse function $f$. Specifically, $M$ is homotopy equivalent to a **CW complex** with one cell of dimension $k$ for each critical point of index $k$.

### Morse Inequalities
Let $c_k$ be the number of critical points of index $k$, and $b_k$ be the $k$-th Betti number (the number of "$k$-dimensional holes"). Then:
$$c_k \geq b_k$$
This means that the complexity of any function on a manifold (its "bumps") is bounded from below by the complexity of the manifold's shape.

## Morse Theory and Neural Networks

In deep learning, the **loss landscape** $\mathcal{L}(\theta)$ is a function on a high-dimensional manifold of weights. Morse theory provides a framework for understanding:
1.  **Topology of Loss Surfaces**: How many minima, maxima, and saddles exist.
2.  **Gradient Flows**: The trajectories of SGD can be viewed as paths on the manifold guided by the Morse function.
3.  **Mode Connectivity**: Explaining why different local minima are often connected by paths of low loss (this relates to the "mountain pass" structures studied in Morse theory).

## Visualization: Reconstructing a Torus

```chart
{
  "type": "scatter",
  "xAxis": "index",
  "data": [
    {"index": 0, "count": 1, "label": "Min (Bottom)"},
    {"index": 1, "count": 2, "label": "Saddles (Sides)"},
    {"index": 2, "count": 1, "label": "Max (Top)"}
  ],
  "lines": [
    {"dataKey": "count", "stroke": "#8b5cf6", "name": "Number of Critical Points"}
  ]
}
```
*To "build" a torus (donut shape), a Morse function must have at least one minimum (0D), two saddles (1D), and one maximum (2D). This sum matches the Betti numbers of the torus: 1, 2, 1.*

## Related Topics

[[algebraic-topology]] — the topological target  
[[differential-geometry]] — the smooth manifold context  
[[training-dynamics]] — dynamics on loss landscapes
---

---
title: "Hilbert and Banach Spaces"
category: "Fundamentals"
order: 3
lang: "en"
slug: "hilbert-banach-spaces"
---

# Hilbert and Banach Spaces

In finite dimensions, we have Euclidean space $\mathbb{R}^n$. In machine learning and physics, we often work with infinite-dimensional objects (like functions or probability distributions). **Hilbert** and **Banach spaces** provide the rigorous framework for doing geometry and calculus in these infinite dimensions.

## 1. Banach Space: The World of Norms

A Banach space is a complete vector space equipped with a **Norm** ($\|x\|$).
- **Complete**: Every sequence that "looks like" it's converging (Cauchy sequence) actually converges to a point inside the space. No "holes."
- **Use**: This is the natural home for neural network weights and continuous functions.

## 2. Hilbert Space: The World of Angles

A Hilbert space is a special kind of Banach space equipped with an **Inner Product** ($\langle x, y \rangle$). 
The inner product allows us to define:
1.  **Angles**: We can say two functions are "orthogonal" (perpendicular).
2.  **Projections**: We can find the "closest" point in a subspace (the basis of Linear Regression and Kernel Methods).
3.  **Fourier Series**: Any element can be decomposed into an infinite sum of orthogonal basis vectors.

## Why the Difference Matters

- **Hilbert ($L^2$)**: Easy. Geometry works just like in high school. Every closed convex set has a unique "closest point." Used in **Quantum Mechanics** and **Gaussian Processes**.
- **Banach ($L^p$, $L^\infty$)**: Harder. Geometry can be "pointy." Used in **Sparse Recovery (LASSO)** where we use the $L^1$ norm.

## Role in AI: Reproducing Kernel Hilbert Spaces (RKHS)

Support Vector Machines (SVMs) and Kernel methods operate in an **RKHS**. 
- The "Kernel Trick" allows us to map data into an infinite-dimensional Hilbert space where a linear boundary can separate non-linear data. 
- Because it's a Hilbert space, we can use projections to find the optimal boundary efficiently.

## Visualization: Inner Product vs. Norm

```mermaid
graph LR
    VectorSpace[Vector Space] --> Banach[Banach: Lengths exists]
    Banach --> Hilbert[Hilbert: Angles exists]
    Hilbert --> Euclidean[Euclidean: Finite Dimension]
```

## Related Topics

[[functional-analysis]] — the study of these spaces  
[[kernel-methods]] — practical AI application of Hilbert spaces  
[[quantum-mechanics]] — why Hilbert space is the state space of the universe
---

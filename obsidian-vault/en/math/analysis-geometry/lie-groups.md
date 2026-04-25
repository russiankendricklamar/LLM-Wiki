---
title: "Lie Groups and Lie Algebras"
category: "Analysis & Geometry"
order: 4
lang: "en"
slug: "lie-groups"
---

# Lie Groups and Lie Algebras

Lie groups represent the mathematical language of **continuous symmetries**. They are objects that are simultaneously smooth manifolds and groups, meaning you can both "move" on them smoothly and "combine" elements using group operations. They are indispensable in particle physics (the Standard Model), robotics, and modern equivariant computer vision.

## Basic Definitions

### 1. Lie Group ($G$)
A Lie group is a differentiable [[manifold-learning|manifold]] $G$ which is also a group, such that the group operations:
- Multiplication: $(g, h) \mapsto gh$
- Inversion: $g \mapsto g^{-1}$
are smooth maps.

**Examples:**
- $GL(n, \mathbb{R})$: General linear group (invertible matrices).
- $SO(3)$: Special orthogonal group (rotations in 3D).
- $SU(n)$: Special unitary group (fundamental in quantum mechanics).

### 2. Lie Algebra ($\mathfrak{g}$)
The Lie algebra $\mathfrak{g}$ is the **tangent space at the identity** $e$ of the Lie group $G$. It captures the local structure of the group near the identity.
It is a vector space equipped with a non-associative multiplication called the **Lie bracket** $[\cdot, \cdot]: \mathfrak{g} \times \mathfrak{g} \to \mathfrak{g}$, satisfying:
- Bilinearity
- Antisymmetry: $[X, Y] = -[Y, X]$
- Jacobi Identity: $[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0$

For matrix groups, the bracket is simply the commutator: $[X, Y] = XY - YX$.

## The Exponential Map

The link between the Lie algebra (linear) and the Lie group (curved) is the **exponential map**:
$$\exp: \mathfrak{g} \to G$$
For matrix groups, this is the literal matrix exponential: $\exp(X) = \sum_{k=0}^\infty \frac{X^k}{k!}$. It maps a direction in the tangent space to a point on the [[manifold-learning|manifold]].

## Representations and Root Systems

Representations are ways to realize abstract groups as transformations of vector spaces. For semisimple Lie algebras (like $\mathfrak{sl}_n$), the structure is entirely determined by its **roots** — special vectors in the dual of a Cartan subalgebra. This leads to the famous classification of Lie groups via **Dynkin diagrams** (types A, B, C, D and the exceptional E6, E7, E8, F4, G2).

## Lie Groups in Modern AI

1.  **Equivariant Neural Networks**: Designing architectures that are invariant or equivariant to rotations ($SO(3)$) or translations. For example, SE(3)-Transformers for molecular docking.
2.  **Manifold Optimization**: Optimizing neural network weights that live on a manifold (e.g., orthogonal weights in RNNs to prevent gradient explosion).
3.  **Pose Estimation**: Representing 3D rotations using Lie algebras ($\mathfrak{so}(3)$) avoids the gimbal lock and singularities of Euler angles.

## Visualization: Group vs. Algebra

```chart
{
  "type": "scatter",
  "xAxis": "x",
  "data": [
    {"x": 0.0, "y": 1.0, "label": "Identity (e)"},
    {"x": 0.1, "y": 1.05, "label": "Tangent Vector (X)"},
    {"x": 0.5, "y": 0.86, "label": "exp(tX) path"},
    {"x": 0.8, "y": 0.6, "label": "Point on Manifold"}
  ],
  "lines": [
    {"dataKey": "y", "stroke": "#3b82f6", "name": "Geodesic flow"}
  ]
}
```
*A Lie algebra element acts as a velocity vector. Flowing along this velocity via the exponential map traces out a path (one-parameter subgroup) on the Lie group manifold.*

## Related Topics

[[differential-geometry]] — the manifold foundation  
quantum-mechanics — $SU(2)$ and $SU(3)$ symmetries  
[[equivariant-nn]] — AI applications of group theory

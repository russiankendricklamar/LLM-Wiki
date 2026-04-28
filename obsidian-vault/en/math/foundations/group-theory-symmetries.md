---
title: Group Theory and Symmetries in Deep Learning
date: 2026-04-28
tags:
  - math
  - algebra
  - geometric-deep-learning
  - physics
aliases:
  - Group Theory
  - Symmetries
  - Equivariance
---

# Group Theory and Symmetries in Deep Learning

The intersection of mathematics and artificial intelligence is undergoing a renaissance thanks to **Geometric Deep Learning**. This paradigm leverages **Group Theory** to embed physical or geometric symmetries directly into neural network architectures.

Why do Convolutional Neural Networks (CNNs) outperform Multi-Layer Perceptrons (MLPs) on images? Because CNNs are *translation equivariant*. If you shift a cat in an image to the right, the network's activations (feature maps) simply shift to the right. This property is a direct consequence of group symmetry.

## What is a Group?

A **Group** $(G, \cdot)$ is a mathematical abstraction describing symmetries (transformations). It is a set of elements $g \in G$ (e.g., rotations, shifts) with a binary operation $\cdot$ (composition) satisfying four axioms:

1. **Closure:** If $g, h \in G$, then $g \cdot h \in G$.
2. **Associativity:** $(g \cdot h) \cdot k = g \cdot (h \cdot k)$.
3. **Identity:** There exists $e \in G$ such that $e \cdot g = g \cdot e = g$.
4. **Inverse:** For every $g \in G$, there exists $g^{-1}$ such that $g \cdot g^{-1} = e$.

### Important Lie Groups (Continuous Groups) in AI:
- $T(n)$: **Translation group** in $n$-dimensional space. Used in CNNs.
- $SO(2), SO(3)$: **Special Orthogonal group** (rotations in 2D or 3D). Critical for chemistry (molecules) and astrophysics.
- $SE(3)$: **Special Euclidean group** (rotations + translations in 3D). The foundation for protein structure prediction (e.g., AlphaFold 3) and $E(n)$-equivariant graph neural networks.

## Invariance and Equivariance

Let $f: X \rightarrow Y$ be a function (our neural network). Let a group $G$ act on input data $x$ as $\rho_X(g)x$ and on output data as $\rho_Y(g)y$ (where $\rho$ are **representations** of the group).

### 1. Invariance
A function is *invariant* to $G$ if applying a transformation to the input does not change the output:
$$
f(\rho_X(g)x) = f(x) \quad \forall g \in G, \forall x \in X
$$
*Example:* Image classification. If you rotate a cat by 90°, the class should still be "Cat".

### 2. Equivariance
A function is *equivariant* to $G$ if a transformation of the input results in an equivalent transformation of the output:
$$
f(\rho_X(g)x) = \rho_Y(g) f(x) \quad \forall g \in G, \forall x \in X
$$
*Example:* Image segmentation. If you rotate the input image by 90°, the segmentation mask should also rotate by 90°.

## Why does it matter for Deep Learning?

Classical neural networks must "learn" symmetries through data augmentation (rotating or shifting images during training). This requires massive amounts of data and parameters.

By **mathematically embedding equivariance into the architecture**, the network:
1. Has a powerful **Inductive Bias** (using parameters more efficiently).
2. Learns faster with less data (**Sample Efficiency**).
3. Provides **physically correct guarantees** (e.g., never violating conservation of momentum or energy, as dictated by Noether's Theorem).

## Group Equivariant Neural Networks (G-CNNs)

Classical convolution is an integral over the translation group $T(n)$. This can be generalized to any locally compact topological Lie group $G$ with a Haar measure $\mu(g)$:
$$
[f \ast \psi](g) = \int_G f(h) \psi(h^{-1} \cdot g) d\mu(h)
$$
This allows for the creation of layers equivariant to not just translations, but also discrete rotations (e.g., $90^\circ$ rotations — the $C_4$ group) or continuous $SO(2)$ rotations.

In physical applications (molecular dynamics, material science), **Steerable CNNs** and tensor field networks are now widely used, operating on irreducible representations (Wigner D-matrices) of $SO(3)$ to predict quantum properties.

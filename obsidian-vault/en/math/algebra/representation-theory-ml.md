---
title: Representation Theory for Machine Learning
category: AI Theory
order: 42
lang: en
slug: representation-theory-ml
---

# Representation Theory for Machine Learning

Representation theory plays a fundamental role in modern machine learning, primarily through the design of [[equivariant-nn|Equivariant Neural Networks]] that respect underlying symmetries in data, such as rotation ($SO(3)$), translation ($T(3)$), and permutation groups ($S_n$).

## Group Actions and Equivariance

Let $G$ be a group and $X, Y$ be vector spaces. A linear representation of $G$ on $X$ is a homomorphism $ho_X: G 	o GL(X)$. 

A mapping $f: X 	o Y$ is said to be $G$-equivariant if for all $g \in G$ and $x \in X$:

$$
f(ho_X(g) x) = ho_Y(g) f(x)
$$

If $ho_Y(g) = I$ (the identity map) for all $g \in G$, then $f$ is $G$-invariant:

$$
f(ho_X(g) x) = f(x)
$$

## $SO(3)$ and $SE(3)$ Representations

In 3D physical systems, interactions are invariant or equivariant to translations and rotations. The Special Orthogonal group $SO(3)$ describes 3D rotations.

Irreducible representations (irreps) of $SO(3)$ are indexed by the degree $l \in \{0, 1, 2, \dots\}$, where the representation space has dimension $2l+1$. The basis functions for these irreps are the Spherical Harmonics $Y_{lm}(	heta, \phi)$, where $m \in \{-l, \dots, l\}$.

For a point $x \in \mathbb{R}^3$, the action of $R \in SO(3)$ on spherical harmonics is governed by the Wigner D-matrices $D^{(l)}(R)$:

$$
Y_{lm}(R^{-1}x) = \sum_{m'=-l}^{l} D^{(l)}_{m'm}(R) Y_{lm'}(x)
$$

### Tensor Products and Clebsch-Gordan Coefficients

When constructing non-linearities or interactions in $SO(3)$-equivariant networks, we take tensor products of representations. The tensor product $V_{l_1} \otimes V_{l_2}$ decomposes into a direct sum of irreps:

$$
V_{l_1} \otimes V_{l_2} \cong igoplus_{L=|l_1 - l_2|}^{l_1 + l_2} V_L
$$

The projection onto the irreducible components is given by the Clebsch-Gordan coefficients $C_{l_1 m_1, l_2 m_2}^{L M}$:

$$
\psi_{LM} = \sum_{m_1, m_2} C_{l_1 m_1, l_2 m_2}^{L M} \phi_{l_1 m_1} \otimes \chi_{l_2 m_2}
$$

These coefficients are crucial for the forward pass of architectures like Tensor Field Networks and E(3)-equivariant Graph Neural Networks (EGNNs).

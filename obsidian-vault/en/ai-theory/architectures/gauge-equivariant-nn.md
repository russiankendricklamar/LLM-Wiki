---
title: "Gauge Equivariant Neural Networks"
category: "AI Theory"
order: 81
lang: "en"
slug: "gauge-equivariant-nn"
---

# Gauge Equivariant Neural Networks

Gauge equivariant neural networks generalize Convolutional Neural Networks (CNNs) from flat Euclidean spaces to general manifolds. By modeling feature maps as sections of fiber bundles and employing gauge-equivariant convolutions, these networks respect the local symmetries and the geometry of the underlying space.

## Mathematical Formulation

Let $\mathcal{M}$ be a $d$-dimensional Riemannian manifold. A feature map is defined not as a scalar function, but as a section of a vector bundle $E \to \mathcal{M}$. The choice of frame at each point $x \in \mathcal{M}$ is arbitrary, representing a local gauge symmetry.

Let $F_x : \mathbb{R}^n \to E_x$ be a choice of basis (frame) for the fiber $E_x$ at $x$. A change of frame is given by a gauge transformation $g(x) \in G$, where $G$ is the structure group (e.g., $SO(d)$). Under a gauge transformation, the coefficients $f(x) \in \mathbb{R}^n$ of a section transform as:
$$
f'(x) = \rho(g(x)^{-1}) f(x)
$$
where $\rho : G \to GL(\mathbb{R}^n)$ is a representation of the structure group.

## Gauge Equivariant Convolution

A generalized convolution on a manifold must be independent of the choice of frame. To achieve this, we use the exponential map $\exp_x : T_x\mathcal{M} \to \mathcal{M}$ and parallel transport $\Gamma_{x \leftarrow y}$ along geodesics.

The convolution of a feature field $f$ with a kernel $K$ at point $x$ is defined as:
$$
(K \star f)(x) = \int_{T_x\mathcal{M}} K(v) \Gamma_{x \leftarrow \exp_x(v)} f(\exp_x(v)) \, d\mu(v)
$$
where $\mu$ is a measure on the tangent space $T_x\mathcal{M}$, typically the pushforward of the Riemannian measure. 

For the convolution to be gauge equivariant, the kernel $K : \mathbb{R}^d \to \mathbb{R}^{n_{out} \times n_{in}}$ must satisfy a specific equivariance constraint. If we rotate the tangent space by $g \in G$, the kernel must interweave the representations $\rho_{in}$ and $\rho_{out}$:
$$
K(g v) = \rho_{out}(g) K(v) \rho_{in}(g)^{-1} \quad \forall g \in G, \, v \in \mathbb{R}^d
$$
This ensures that $(K \star f)'(x) = \rho_{out}(g(x)^{-1}) (K \star f)(x)$.

## Fiber Bundles and Connections

In differential geometry, the connection $\nabla$ allows us to differentiate sections of a vector bundle. The parallel transport $\Gamma$ used in the convolution is obtained by solving the parallel transport equation:
$$
\nabla_{\dot{\gamma}(t)} X(t) = 0
$$
where $\gamma(t)$ is a geodesic and $X(t)$ is a section evaluated along the curve. The connection coefficients (Christoffel symbols $\Gamma^\lambda_{\mu\nu}$) directly inform the parallel transport matrix.

By constraining the kernels to solve the equivariance equation, we parameterize the space of valid kernels using spherical harmonics or generalized Wigner-D matrices, which form complete orthogonal bases for $L^2(G)$. This enables the rigorous implementation of gauge equivariant operations in deep learning, avoiding orientation-dependent artifacts on curved domains.

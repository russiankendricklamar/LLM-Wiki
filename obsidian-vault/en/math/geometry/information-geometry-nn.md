---
title: Information Geometry of Neural Networks
category: Analysis & Geometry
order: 49
lang: en
slug: information-geometry-nn
---

# Information Geometry of Neural Networks

Information Geometry applies differential geometry to probability and statistics. In the context of neural networks, we treat the parameterized space of neural networks not as a Euclidean space, but as a Riemannian [[manifold-learning|manifold]] where the metric tensor is given by the Fisher Information Matrix (FIM).

## Fisher Information Metric

Let a neural network parameterize a conditional probability distribution $p(y|x; 	heta)$. The parameter space $\Theta$ is a Riemannian manifold with the local distance measured by KL divergence:

$$
D_{KL}(p_{	heta} \| p_{	heta + d	heta}) pprox rac{1}{2} d	heta^T F(	heta) d	heta
$$

Here, $F(	heta)$ is the Fisher Information Matrix:

$$
F(	heta) = \mathbb{E}_{x \sim \mathcal{D}, y \sim p_	heta} \left[ 
abla_	heta \log p(y|x; 	heta) 
abla_	heta \log p(y|x; 	heta)^T 
ight]
$$

$F(	heta)$ is a symmetric, positive semi-definite matrix acting as the Riemannian metric tensor on the parameter space.

## Natural [[convex-optimization|Gradient Descent]]

Standard gradient descent follows the steepest descent in Euclidean space. However, parameter spaces have intrinsic curvature. Amari's Natural Gradient Descent (NGD) follows the path of steepest descent in the Riemannian manifold defined by the FIM.

The natural gradient direction $	ilde{
abla} \mathcal{L}$ is defined as the solution to:

$$
\min_{d	heta} \mathcal{L}(	heta + d	heta) \quad 	ext{s.t.} \quad D_{KL}(p_{	heta} \| p_{	heta + d	heta}) \leq \epsilon
$$

Solving this using Lagrange multipliers yields:

$$
	ilde{
abla}_	heta \mathcal{L} = F(	heta)^{-1} 
abla_	heta \mathcal{L}
$$

The update rule becomes:

$$
	heta_{t+1} = 	heta_t - \eta F(	heta_t)^{-1} 
abla_	heta \mathcal{L}(	heta_t)
$$

## Curvature and Flat Minima

In deep learning, the FIM is highly degenerate. Most of its [[spectral-theory-operators|eigenvalues]] are close to zero, with only a few large eigenvalues. This implies that the probability distribution is highly sensitive to changes along a few parameter directions (high curvature), while it is invariant along most other directions (flat minima).

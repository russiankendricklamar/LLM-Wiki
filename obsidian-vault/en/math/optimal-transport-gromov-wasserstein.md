---
title: "Optimal Transport: Gromov-Wasserstein Distance"
category: "math"
order: 308
lang: "en"
slug: "optimal-transport-gromov-wasserstein"
---

# Optimal Transport: Gromov-Wasserstein Distance

This article delves into the absolute frontiers of Optimal Transport: Gromov-Wasserstein Distance, uniting multidisciplinary theorems to present an immersion-level formulation. We approach this subject with rigorous mathematically backed assertions.

## Optimal Transport and Wasserstein Metrics

To align distinct distributions or spaces, we use Optimal Transport. The $p$-Wasserstein distance between probability measures $\mu, \nu$ on a metric space $(X, d)$ is:
$$ W_p( \mu, \nu ) = \left( \inf_{\pi \in \Pi(\mu, \nu)} \int_{X \times X} d(x, y)^p d\pi(x, y) \right)^{1/p} $$
By Kantorovich duality, this can be computed via the supremum over 1-Lipschitz functions (or dual variables):
$$ W_1(\mu, \nu) = \sup_{\|f\|_L \le 1} \left( \mathbb{E}_{x \sim \mu}[f(x)] - \mathbb{E}_{y \sim \nu}[f(y)] \right) $$
When spaces have different dimensions, we use the Gromov-Wasserstein distance, which aligns metric measure spaces by comparing inner pairwise distances:
$$ GW(\mu, \nu) = \inf_{\pi} \iint \|d_X(x, x') - d_Y(y, y')\|^2 d\pi(x,y) d\pi(x',y') $$
This provides a rigorous mathematical basis for model merging, multimodal alignment, and heterogenous transfer learning.

## Differential and Information Geometry

The foundation of this domain rests upon the geometric properties of the underlying [[manifold-learning|manifold]]. We define the Riemannian metric tensor, often derived from the Fisher Information in probability spaces:
$$ g_{ij}(\theta) = \mathbb{E}_{x \sim p(x|\theta)}\left[ \frac{\partial \log p(x|\theta)}{\partial \theta^i} \frac{\partial \log p(x|\theta)}{\partial \theta^j} \right] $$
This metric allows us to compute distances along the manifold. The natural [[convex-optimization|gradient descent]] follows the steepest descent in this non-Euclidean space, updating parameters via:
$$ \theta_{t+1} = \theta_t - \eta G^{-1}(\theta_t) \nabla L(\theta_t) $$
Furthermore, using Amari's $\alpha$-connections, we define the affine connection $\nabla^{(\alpha)}$ with Christoffel symbols:
$$ \Gamma^{(\alpha)}_{ij,k} = \mathbb{E}\left[ \left( \partial_i \partial_j \log p + \frac{1-\alpha}{2} \partial_i \log p \partial_j \log p \right) \partial_k \log p \right] $$
This rigorous formulation reveals how optimization pathways are inherently bounded by the curvature of the statistical manifold.

## Conclusion

By mapping Optimal Transport: Gromov-Wasserstein Distance into these explicit geometric and topological frameworks, we uncover a unified theory. The convergence of these methodologies allows us to construct robust, theoretically sound mechanisms for future AI and physical systems.

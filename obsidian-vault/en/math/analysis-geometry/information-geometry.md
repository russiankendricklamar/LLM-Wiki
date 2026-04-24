---
title: "Information Geometry"
category: "Analysis & Geometry"
order: 2
lang: "en"
slug: "information-geometry"
---

# Information Geometry

Information Geometry treats the space of probability distributions as a **Riemannian [[manifold-learning|manifold]]**. By applying differential geometry to statistics, it provides a powerful framework for understanding optimization, natural gradients, and the structure of neural networks.

## The Statistical Manifold

Consider a family of probability distributions $p(x; \theta)$ parameterized by $\theta \in \Theta \subseteq \mathbb{R}^n$. This set $\mathcal{M} = \{ p_\theta \}$ forms a manifold where each point is a distribution.

## The Fisher Information Metric

The "distance" between two nearby distributions $p_\theta$ and $p_{\theta + d\theta}$ is not defined by Euclidean distance in $\theta$, but by the **Fisher Information Matrix (FIM)**:

$$g_{ij}(\theta) = \mathbb{E}_{p_\theta} \left[ \frac{\partial \log p(x; \theta)}{\partial \theta_i} \frac{\partial \log p(x; \theta)}{\partial \theta_j} \right]$$

The FIM defines the **Fisher Metric**, a Riemannian metric that is invariant under reparameterization. The distance between distributions is locally given by $ds^2 = \sum g_{ij} d\theta_i d\theta_j$.

## Relation to KL Divergence

The Kullback-Leibler (KL) divergence is not a metric (it's not symmetric), but its second-order Taylor expansion yields the Fisher metric:

$$D_{KL}(p_\theta \| p_{\theta+d\theta}) \approx \frac{1}{2} \sum g_{ij}(\theta) d\theta_i d\theta_j$$

Thus, the Fisher metric is the local geometry of the KL divergence.

## Natural [[convex-optimization|Gradient Descent]]

Standard gradient descent follows the steepest direction in the parameter space (Euclidean). **Natural Gradient Descent** (Amari, 1998) follows the steepest direction on the statistical manifold (Fisher metric):

$$\theta_{t+1} = \theta_t - \eta g(\theta_t)^{-1} \nabla L(\theta_t)$$

This makes optimization invariant to how the model is parameterized, leading to much faster convergence in many deep learning tasks.

## Amari's α-Connections

Information geometry is unique because it allows for dual affine connections ($\nabla^{(e)}$ and $\nabla^{(m)}$).
- **e-flat**: Exponential families (like Gaussian) are flat under the $e$-connection.
- **m-flat**: Mixture families are flat under the $m$-connection.

This duality leads to the **Generalized Pythagorean Theorem** for divergences, which is used in Projection Theorems for EM algorithms and Variational Inference.

## Visualization: Metric Distortion

```chart
{
  "type": "scatter",
  "xAxis": "theta1",
  "data": [
    {"theta1": 0.1, "theta2": 0.1, "metric_size": 10},
    {"theta1": 0.5, "theta2": 0.5, "metric_size": 50},
    {"theta1": 0.9, "theta2": 0.9, "metric_size": 100}
  ],
  "lines": [
    {"dataKey": "metric_size", "stroke": "#8b5cf6", "name": "Fisher Info Scale"}
  ]
}
```
*As we approach boundaries of the distribution space (e.g., variance → 0), the Fisher metric "stretches" the space, making small parameter changes correspond to huge distribution shifts.*

## Applications

1.  **Optimization**: Natural gradients in K-FAC and TRPO (Trust Region Policy Optimization).
2.  **Variational Inference**: Using the geometry of the evidence lower bound (ELBO).
3.  **Minimum Description Length (MDL)**: Connecting geometry to complexity.

## Related Topics

[[neural-tangent-kernel]] — geometry of infinite-width networks  
asymptotic-stats — where Fisher information originated  
[[rlhf]] — TRPO uses information geometry for stability

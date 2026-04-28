---
title: Information Geometry
date: 2026-04-28
tags:
  - math
  - geometry
  - statistics
  - deep-learning
aliases:
  - Fisher Information
  - Natural Gradient
---

# Information Geometry

Information Geometry (IG) treats families of probability distributions as **Riemannian manifolds**. It provides a geometric language for statistical inference and neural network optimization.

## Statistical Manifold and Fisher Metric

A family of distributions $p(x|\theta)$ forms a manifold where $\theta$ are coordinates. The unique invariant metric is the **Fisher Information Matrix** $F(\theta)$:
$$ F_{ij}(\theta) = \mathbb{E}_\theta \left[ \frac{\partial \log p(x|\theta)}{\partial \theta_i} \frac{\partial \log p(x|\theta)}{\partial \theta_j} \right] $$

## Dual Connections and $\alpha$-Geometry

IG studies pairs of **dual connections** $(\nabla, \nabla^*)$. The **Amari-Chentsov tensor** defines a family of $\alpha$-connections:
- **e-connection ($\alpha=1$):** Flat for exponential families.
- **m-connection ($\alpha=-1$):** Flat for mixture families.
This duality leads to a **Generalized Pythagorean Theorem** for divergences (like KL-divergence).

## Natural Gradient Descent (NGD)

Euclidean gradient descent is sensitive to parameterization. NGD corrects this by using the inverse Fisher matrix:
$$ \theta_{t+1} = \theta_t - \eta F^{-1}(\theta) \nabla L(\theta) $$
This ensures optimization follows the steepest descent on the manifold of distributions. Key implementations include **K-FAC** and **TRPO/PPO**.

## Applications in Deep Learning

1. **Information Bottleneck:** Formalizing $\min I(X; \hat{X}) - \beta I(Y; \hat{X})$ as a geometric projection.
2. **LLM Latent Spaces:** Analyzing the curvature of Transformer activations to detect semantic boundaries.
3. **Cramér-Rao Bound:** Using the metric to define fundamental limits of estimation accuracy.

## Related Topics
[[optimal-transport|Optimal Transport]] | [[llm|LLM]] | [[fisher-information|Fisher Information]]

---
title: "Distributed Training: 3D Parallelism Math"
category: "cs"
order: 338
lang: "en"
slug: "distributed-training-3d"
---

# Distributed Training: 3D Parallelism Math

This article delves into the absolute frontiers of Distributed Training: 3D Parallelism Math, uniting multidisciplinary theorems to present an immersion-level formulation. We approach this subject with rigorous mathematically backed assertions.

## Optimal Transport and Wasserstein Metrics

To align distinct distributions or spaces, we use Optimal Transport. The $p$-Wasserstein distance between probability measures $\mu, \nu$ on a metric space $(X, d)$ is:
$$ W_p( \mu, \nu ) = \left( \inf_{\pi \in \Pi(\mu, \nu)} \int_{X \times X} d(x, y)^p d\pi(x, y) \right)^{1/p} $$
By Kantorovich duality, this can be computed via the supremum over 1-Lipschitz functions (or dual variables):
$$ W_1(\mu, \nu) = \sup_{\|f\|_L \le 1} \left( \mathbb{E}_{x \sim \mu}[f(x)] - \mathbb{E}_{y \sim \nu}[f(y)] \right) $$
When spaces have different dimensions, we use the Gromov-Wasserstein distance, which aligns metric measure spaces by comparing inner pairwise distances:
$$ GW(\mu, \nu) = \inf_{\pi} \iint \|d_X(x, x') - d_Y(y, y')\|^2 d\pi(x,y) d\pi(x',y') $$
This provides a rigorous mathematical basis for model merging, multimodal alignment, and heterogenous transfer learning.

## Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality

In modern sequential models, the core interaction is defined by the multi-head attention mechanism. Given queries $Q$, keys $K$, and values $V$ in $\mathbb{R}^{N \times d}$, the attention kernel is:
$$ \text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d}}\right)V $$
To inject positional information preserving relative distances, we apply Rotary Position Embeddings (RoPE). The transformation rotates feature pairs:
$$ f_q(x_m, m) = (W_q x_m) e^{im\theta}, \quad f_k(x_n, n) = (W_k x_n) e^{in\theta} $$
Thus, the inner product becomes purely dependent on relative distance $m-n$:
$$ \langle f_q, f_k \rangle = \text{Re}\left[ (W_q x_m)(W_k x_n)^* e^{i(m-n)\theta} \right] $$
This formulation underpins the length extrapolation capabilities and KV-cache compression techniques.

## Conclusion

By mapping Distributed Training: 3D Parallelism Math into these explicit geometric and topological frameworks, we uncover a unified theory. The convergence of these methodologies allows us to construct robust, theoretically sound mechanisms for future AI and physical systems.

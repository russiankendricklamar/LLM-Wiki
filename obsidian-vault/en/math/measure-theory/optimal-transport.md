---
title: Optimal Transport
date: 2026-04-28
tags:
  - math
  - probability
  - generative-models
  - optimal-transport
aliases:
  - Wasserstein Distance
  - Earth Mover's Distance
---

# Optimal Transport

Optimal Transport (OT) is a mathematical framework for studying the most efficient ways to transform one probability distribution into another. In machine learning, it provides a powerful metric (Wasserstein distance) and a geometric structure for robust optimization and generative modeling.

## Monge's Formulation (1781)

Find a transport map $T: X \rightarrow Y$ that minimizes the total cost:
$$ \inf_{T: T_{\#} \mu = \nu} \int_X c(x, T(x)) d\mu(x) $$
where $T_{\#} \mu = \nu$ is the mass conservation constraint.

## Kantorovich's Relaxation (1942)

Instead of a map, we seek a **transport plan** $\pi$ (joint distribution), allowing mass splitting:
$$ OT(\mu, \nu) = \inf_{\pi \in \Pi(\mu, \nu)} \int_{X \times Y} c(x, y) d\pi(x, y) $$
This linear programming problem always has a solution.

## Wasserstein Distance

When $c(x,y) = d(x,y)^p$, the $p$-th root of the cost is the **p-Wasserstein distance**:
$$ W_p(\mu, \nu) = \left( \inf_{\pi \in \Pi(\mu, \nu)} \int_{X \times Y} d(x, y)^p d\pi(x, y) \right)^{1/p} $$

Unlike KL-divergence, $W_p$ is continuous and provides stable gradients even for distributions with non-overlapping supports, which is fundamental for **WGAN**.

## Computational OT and Sinkhorn

Standard OT is $O(N^3)$. Adding **entropic regularization** $\epsilon H(\pi)$ makes the problem strictly convex, solvable by the **Sinkhorn Algorithm** in $O(N^2)$ on GPUs.

## Advanced Applications

### A. Benamou-Brenier Formulation
A hydrodynamic view of OT as minimizing the kinetic energy of a density flow $\rho_t$. This bridges OT with **Flow Matching** and diffusion models.

### B. Distributionally Robust Optimization (DRO)
Used in finance to protect portfolios against model uncertainty by optimizing over a "Wasserstein ball" $B_\delta(\nu)$ of distributions.

### C. Martingale OT (MOT)
Used for model-independent option pricing by enforcing the martingale property $\mathbb{E}_\pi [Y | X] = X$ on the transport plan.

## Related Topics
[[measure-theory|Measure Theory]] | [[convex-optimization|Convex Optimization]] | [[flow-matching|Flow Matching]]

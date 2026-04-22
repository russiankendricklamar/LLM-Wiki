---
title: "Optimal Transport and Wasserstein Metric"
category: "Advanced Analysis"
order: 10
lang: "en"
slug: "optimal-transport"
---

# Optimal Transport and Wasserstein Metric

**Optimal Transport (OT)** is a field of mathematics that studies the most efficient way to transform one probability distribution into another, given a cost function. Originally formulated by Gaspard Monge in 1781 and revolutionized by Leonid Kantorovich, OT provides a powerful geometric framework for comparing datasets, images, and financial distributions.

## 1. The Monge and Kantorovich Problems

### The Monge Formulation
Find a map $T: \mu \to \nu$ that minimizes the total transportation cost:
$$ \inf_{T} \int_{X} c(x, T(x)) \, d\mu(x) $$
where $\mu$ and $\nu$ are probability measures, and $c(x, y)$ is the cost of moving a unit of mass from $x$ to $y$.

### The Kantorovich Relaxation
Monge's problem is often ill-posed (e.g., if mass needs to be split). Kantorovich introduced the **Coupling** $\gamma$, which is a joint distribution with marginals $\mu$ and $\nu$:
$$ \inf_{\gamma \in \Pi(\mu, \nu)} \int_{X \times Y} c(x, y) \, d\gamma(x, y) $$
This is a linear programming problem in infinite dimensions and always has a solution.

## 2. The Wasserstein Distance ($W_p$)

The $p$-Wasserstein distance is defined as the $p$-th root of the optimal cost when $c(x, y) = d(x, y)^p$:
$$ W_p(\mu, \nu) = \left( \inf_{\gamma \in \Pi(\mu, \nu)} \mathbb{E}_{(x,y) \sim \gamma} [d(x, y)^p] \right)^{1/p} $$
- **$W_1$ (Earth Mover's Distance)**: Intuitively, the minimum work required to turn one pile of "dirt" ($\mu$) into another ($\nu$).

## 3. Applications in AI and Finance

### A. Deep Learning: WGANs and Diffusion
Standard metrics like KL-divergence fail when distributions have non-overlapping supports (the "vanishing gradient" problem). 
- **WGANs**: Use $W_1$ as a loss function because it is continuous and provides a meaningful gradient even when the generated and real distributions are far apart.
- **Diffusion Models**: The process of adding noise and reversing it can be viewed as moving along a **Wasserstein Gradient Flow**.

### B. Quantitative Finance: Robust Optimization
OT is used for **Distributional Robustness**. Instead of assuming a fixed future return distribution $\nu$, a manager optimizes against the "worst-case" distribution within a Wasserstein ball $B_{\epsilon}(\nu)$:
$$ \min_{w} \max_{\mu: W_p(\mu, \nu) \leq \epsilon} \mathbb{E}_{\mu} [L(w, x)] $$
This protects the portfolio against model misspecification and "black swan" events.

## 4. Geometric Intuition

Unlike the KL-divergence, which is "pixel-wise" (it only compares $p(x)$ and $q(x)$ at the same $x$), the Wasserstein distance is **geometry-aware**. It knows that a distribution concentrated at $x=1$ is "closer" to one at $x=1.1$ than to one at $x=10$.

## Related Topics

[[measure-theory]] — the measure-theoretic foundation of OT  
[[generative-adversarial-networks]] — WGAN implementation  
[[risk-management]] — robust optimization applications
---

---
title: "Optimal Transport and Wasserstein Metric"
category: "Advanced Analysis"
order: 10
lang: "en"
slug: "optimal-transport"
---

# Optimal Transport: Monge-Kantorovich Theory and Entropic Regularization

**Optimal Transport (OT)** is the study of the most efficient way to reshape one probability measure $\mu$ into another $\nu$. Beyond a simple distance metric, OT provides a rich geometric structure (the **Wasserstein Space**) that allows for interpolating between distributions, averaging datasets (Wasserstein Barycenters), and solving robust optimization problems.

## 1. Mathematical Formulations

### A. The Monge Problem (The "Map" approach)
Find a measurable map $T: X \to Y$ such that $T_\# \mu = \nu$ (the push-forward condition) that minimizes:
$$ \mathcal{M}(\mu, \nu) = \inf_{T} \int_{X} c(x, T(x)) \, d\mu(x) $$
The constraint $T_\# \mu = \nu$ means that for any Borel set $B \subset Y$, $\mu(T^{-1}(B)) = \nu(B)$. This problem may fail to have a solution if $\mu$ is an atom and $\nu$ is a continuous density.

### B. The Kantorovich Relaxation (The "Coupling" approach)
Introduced in 1942, this formulation allows "mass splitting." We look for a joint distribution $\gamma \in \mathcal{P}(X \times Y)$ whose marginals are $\mu$ and $\nu$:
$$ OT(\mu, \nu) = \inf_{\gamma \in \Pi(\mu, \nu)} \int_{X \times Y} c(x, y) \, d\gamma(x, y) $$
where $\Pi(\mu, \nu) = \{ \gamma \in \mathcal{P}(X \times Y) \mid P_{X\#} \gamma = \mu, P_{Y\#} \gamma = \nu \}$. This is a linear program in the space of measures.

### C. The Dual Problem and Kantorovich-Rubinstein Duality
For $c(x, y) = d(x, y)$, the problem is dual to:
$$ W_1(\mu, \nu) = \sup_{\| f \|_L \leq 1} \int_{X} f(x) \, d\mu(x) - \int_{X} f(x) \, d\nu(x) $$
where $f$ is a 1-Lipschitz function. This is the foundation of **Wasserstein GANs**, where the discriminator (critic) learns this 1-Lipschitz function to provide a stable gradient to the generator.

## 2. The Sinkhorn Algorithm: Computational OT

The primary bottleneck of OT is its cubic complexity $O(n^3)$. Modern Machine Learning uses **Entropic Regularization**:
$$ OT_\epsilon(\mu, \nu) = \inf_{\gamma \in \Pi(\mu, \nu)} \int c(x, y) d\gamma(x, y) + \epsilon KL(\gamma \| \mu \otimes \nu) $$
This regularized problem is strictly convex and can be solved using the **Sinkhorn-Knopp Algorithm**, which converges at a rate of $O(n^2)$. The optimal coupling has the form $\gamma_{i,j} = u_i K_{i,j} v_j$, where $K_{i,j} = \exp(-c_{i,j}/\epsilon)$.

## 3. Dynamic Formulation: Benamou-Brenier

OT can be viewed as a fluid dynamics problem. The Wasserstein distance $W_2^2(\mu, \nu)$ is the minimum action required to move a density $\rho_0$ to $\rho_1$ following the continuity equation:
$$ \frac{\partial \rho_t}{\partial t} + \nabla \cdot (\rho_t v_t) = 0 $$
$$ W_2^2(\mu, \nu) = \inf_{\rho, v} \int_0^1 \int_X \rho_t(x) \| v_t(x) \|^2 dx dt $$
This links OT to **Mean Field Games** and **Schrödinger Bridges**, which are the mathematical ancestors of current **Diffusion Models**.

## 4. Financial Engineering: Robustness and Volatility

### A. Distributional Robustness
In finance, "Model Risk" is the risk that our assumed distribution $\nu$ is wrong. Using OT, we can define a "Wasserstein Ball" $B_\delta(\nu)$ containing all "reasonable" alternative distributions. An institutional manager then solves the **Distributionally Robust Optimization (DRO)**:
$$ \min_{w} \max_{\mu \in B_\delta(\nu)} \mathbb{E}_\mu [Loss(w, X)] $$

### B. Martingale Optimal Transport (MOT)
To price options without a model, we use MOT. Here, the coupling $\gamma$ must be a **Martingale**: $\mathbb{E}_\gamma [Y | X] = X$. This provides model-independent upper and lower bounds for derivative prices based purely on market data.

## Related Topics

[[measure-theory]] — required for the push-forward definitions  
[[generative-adversarial-networks]] — WGAN loss derivation  
[[risk-management]] — DRO applications
---

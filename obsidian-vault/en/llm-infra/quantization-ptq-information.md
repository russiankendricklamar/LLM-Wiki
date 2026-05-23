---
title: "Quantization: Information Loss in PTQ"
category: "llm-infra"
order: 339
lang: "en"
slug: "quantization-ptq-information"
---

# [[quantization]]: Information Loss in PTQ

This article delves into the absolute frontiers of Quantization: Information Loss in PTQ, uniting multidisciplinary theorems to present an immersion-level formulation. We approach this subject with rigorous mathematically backed assertions.

## Optimal Transport and Wasserstein Metrics

To align distinct distributions or spaces, we use Optimal Transport. The $p$-Wasserstein distance between probability measures $\mu, \nu$ on a metric space $(X, d)$ is:
$$ W_p( \mu, \nu ) = \left( \inf_{\pi \in \Pi(\mu, \nu)} \int_{X \times X} d(x, y)^p d\pi(x, y) \right)^{1/p} $$
By Kantorovich duality, this can be computed via the supremum over 1-Lipschitz functions (or dual variables):
$$ W_1(\mu, \nu) = \sup_{\|f\|_L \le 1} \left( \mathbb{E}_{x \sim \mu}[f(x)] - \mathbb{E}_{y \sim \nu}[f(y)] \right) $$
When spaces have different dimensions, we use the Gromov-Wasserstein distance, which aligns metric measure spaces by comparing inner pairwise distances:
$$ GW(\mu, \nu) = \inf_{\pi} \iint \|d_X(x, x') - d_Y(y, y')\|^2 d\pi(x,y) d\pi(x',y') $$
This provides a rigorous mathematical basis for model merging, multimodal alignment, and heterogenous transfer learning.

## Stochastic Dynamics and Statistical Mechanics

Modeling the system inherently requires non-equilibrium statistical mechanics. We consider the over-damped Langevin dynamics defined by the stochastic differential equation ([[stochastic-differential-equations|SDE]]):
$$ dX_t = -\nabla U(X_t) dt + \sqrt{2\beta^{-1}} dW_t $$
where $U(X)$ is the potential energy (or loss function), and $\beta = 1/T$ is the inverse temperature. The time evolution of the probability density $\rho(x,t)$ is governed by the Fokker-Planck equation:
$$ \frac{\partial \rho}{\partial t} = \nabla \cdot (\rho \nabla U) + \beta^{-1} \Delta \rho $$
We can recast this evolution as a gradient flow of the free energy functional in the Wasserstein space $\mathcal{W}_2$:
$$ \mathcal{F}[\rho] = \int U(x)\rho(x)dx + \beta^{-1} \int \rho(x)\log\rho(x)dx $$
This provides a profound equivalence between thermodynamic dissipation and algorithmic convergence bounds.

## Conclusion

By mapping Quantization: Information Loss in PTQ into these explicit geometric and topological frameworks, we uncover a unified theory. The convergence of these methodologies allows us to construct robust, theoretically sound mechanisms for future AI and physical systems.

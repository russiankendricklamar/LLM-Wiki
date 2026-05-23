---
title: "Mathematical Foundations of Diffusion Models"
category: "AI Theory"
order: 84
lang: "en"
slug: "diffusion-sde-math"
---

# Mathematical Foundations of Diffusion Models

Diffusion models map complex data distributions to simple noise distributions via a forward stochastic process, and then learn a reverse process to generate data from noise. The framework can be elegantly unified using Stochastic Differential Equations (SDEs).

## Forward [[stochastic-differential-equations|SDE]]

Let $x(0) \sim p_0(x)$ be the data distribution. We construct a continuous-time forward process $x(t)$ for $t \in [0, T]$ described by the Ito SDE:
$$
dx = f(x, t) dt + g(t) dw
$$
where $w$ is standard Brownian motion, $f(\cdot, t)$ is the drift coefficient, and $g(t)$ is the diffusion coefficient. As $t \to T$, the marginal distribution $p_t(x)$ converges to a tractable prior, such as $\mathcal{N}(0, I)$.

The evolution of the marginal density $p_t(x)$ is governed by the Fokker-Planck equation (Kolmogorov forward equation):
$$
\frac{\partial p_t(x)}{\partial t} = -\nabla \cdot (f(x, t) p_t(x)) + \frac{1}{2} g(t)^2 \Delta p_t(x)
$$

## Reverse SDE and Score Matching

A remarkable result by Anderson (1982) states that the reverse-time process (from $t=T$ to $t=0$) is also an SDE, given by:
$$
dx = \left[ f(x, t) - g(t)^2 \nabla_x \log p_t(x) \right] dt + g(t) d\bar{w}
$$
where $d\bar{w}$ is a standard Brownian motion running backward in time, and $dt$ signifies an infinitesimal negative time step.

The only unknown term in the reverse SDE is the **score function** $\nabla_x \log p_t(x)$. We estimate it using a neural network $s_\theta(x, t) \approx \nabla_x \log p_t(x)$ via denoising score matching:
$$
\min_\theta \mathbb{E}_{t, x(0), x(t)} \left[ \lambda(t) \left\| s_\theta(x(t), t) - \nabla_{x(t)} \log p_{t|0}(x(t) | x(0)) \right\|^2 \right]
$$
where $p_{t|0}$ is the transition kernel of the forward SDE. For linear drift $f(x, t) = -\frac{1}{2} \beta(t) x$ and diffusion $g(t) = \sqrt{\beta(t)}$, the transition kernel is Gaussian, making the objective tractable.

## The Probability Flow ODE

For any SDE with a continuous-time marginal $p_t(x)$, there exists a deterministic Ordinary Differential Equation (ODE) whose trajectories share the exact same marginal distributions for all $t$. This Probability Flow ODE is given by:
$$
dx = \left[ f(x, t) - \frac{1}{2} g(t)^2 \nabla_x \log p_t(x) \right] dt
$$
This ODE enables deterministic latent encoding and decoding, exact likelihood evaluation via the instantaneous change of variables formula, and accelerated sampling using numerical ODE solvers.

## Langevin Dynamics Connection

In the context of Noise Conditioned Score Networks (NCSN), for a fixed noise level $\sigma_i$, Langevin dynamics can sample from $p_{\sigma_i}(x)$ by taking gradient steps scaled by noise:
$$
x_{i, k+1} = x_{i, k} + \frac{\epsilon}{2} \nabla_x \log p_{\sigma_i}(x_{i, k}) + \sqrt{\epsilon} z
$$
where $z \sim \mathcal{N}(0, I)$. When $\epsilon \to 0$, this converges to the overdamped Langevin SDE. Unifying this discrete process into the continuous SDE framework reveals the intrinsic link between energy-based sampling and diffusion models.

---
title: "Diffusion Models"
category: "AI Theory"
order: 14
lang: "en"
slug: "diffusion-models"
growth: "seedling"
---

# Diffusion Models

**Diffusion models** are a class of generative models that learn to reverse a carefully constructed noising process. Instead of learning a direct mapping from noise to data, diffusion models gradually denoise Gaussian noise in many small steps, allowing them to generate high-quality samples with stable training. Since their popularisation in 2020 (DDPM — Ho, Jain, Abbeel), they have become the dominant generative paradigm, powering DALL-E 3, Stable Diffusion, and emerging protein design systems like AlphaFold 3.

## Core Idea: Reversing a Forward Process

The **forward process** (diffusion) gradually adds Gaussian noise to real data $x_0 \sim p_{\text{data}}$ over $T$ timesteps, destroying all structure until $x_T \approx \mathcal{N}(0, I)$. The **reverse process** learns to undo this, sampling from noise by iteratively denoising.

**Forward process (tractable Markov chain):**

$$
q(x_t \mid x_{t-1}) = \mathcal{N}(x_t; \sqrt{1 - \beta_t} x_{t-1}, \beta_t I),
$$

where $\beta_t$ are fixed noise schedules (e.g., linear from $10^{-4}$ to $0.02$). The key insight is that $q(x_t \mid x_0)$ has a closed form — the **marginal distribution** at any step $t$:

$$
q(x_t \mid x_0) = \mathcal{N}(x_t; \sqrt{\bar{\alpha}_t} x_0, (1 - \bar{\alpha}_t) I),
$$

where $\alpha_t = 1 - \beta_t$ and $\bar{\alpha}_t = \prod_{s=1}^{t} \alpha_s$. This allows efficient loss computation: sample any $t$ and noise $\epsilon \sim \mathcal{N}(0, I)$ directly.

**Reverse process (learned):**

$$
p_\theta(x_{t-1} \mid x_t) = \mathcal{N}(x_{t-1}; \mu_\theta(x_t, t), \Sigma_\theta(t)).
$$

A neural network $\epsilon_\theta(x_t, t)$ learns to predict the noise added at step $t$. The key loss function is **noise prediction**:

$$
\mathcal{L} = \mathbb{E}_{t, x_0, \epsilon}\left[\left\|\epsilon - \epsilon_\theta(\sqrt{\bar{\alpha}_t} x_0 + \sqrt{1 - \bar{\alpha}_t} \epsilon, t)\right\|^2\right].
$$

Sampling reverses the process: start from $x_T \sim \mathcal{N}(0, I)$, apply the reverse transition repeatedly, ending at $x_0$.

## Training and Inference

**Training** (Ho et al. 2020 — DDPM):

1. Sample $x_0$ from the data distribution.
2. Sample $t \in [1, \ldots, T]$ uniformly.
3. Sample $\epsilon \sim \mathcal{N}(0, I)$, compute $x_t = \sqrt{\bar{\alpha}_t} x_0 + \sqrt{1 - \bar{\alpha}_t} \epsilon$.
4. Regress $\epsilon_\theta(x_t, t)$ against $\epsilon$ via MSE loss.

This is simple, stable, and requires no adversarial training.

**Inference (sampling):**

1. Initialize $x_T \sim \mathcal{N}(0, I)$.
2. For $t = T, T-1, \ldots, 1$:
   $$
   x_{t-1} = \frac{1}{\sqrt{\alpha_t}} \left(x_t - \frac{1 - \alpha_t}{\sqrt{1 - \bar{\alpha}_t}} \epsilon_\theta(x_t, t) \right) + \sqrt{\beta_t} z,
   $$
   where $z \sim \mathcal{N}(0, I)$.

Standard DDPM requires $T = 1000$ steps, making generation slow. **DDIM** (Song et al. 2020) accelerates by jumping multiple steps in the Markov chain, reducing cost to 50–200 steps with minimal quality loss.

## Evidence Lower Bound (ELBO) Connection

Diffusion is grounded in probabilistic theory. The ELBO decomposes as:

$$
\log p_\theta(x_0) \geq \mathbb{E}_{q}[\log p_\theta(x_{1:T} \mid x_0)] - \mathrm{KL}(q(x_{1:T} \mid x_0) \| p_\theta(x_{1:T})).
$$

For fixed $q$, minimising the second term (KL divergence between forward and reverse) is equivalent to the noise prediction objective above. The reverse process can also predict the data directly $x_\theta(x_t, t)$ or the score $\nabla_x \log p(x_t)$; all are equivalent under suitable weighting.

## Score Matching and Langevin Dynamics

**Score** is the gradient of log probability:

$$
s(x) = \nabla_x \log p(x).
$$

A network $s_\theta(x, t)$ estimates the score at each noise level. [[fokker-planck-equation|Langevin dynamics]] — a classical MCMC technique — samples by:

$$
x_{t+1} = x_t + \frac{\epsilon}{2} s_\theta(x_t) + \sqrt{\epsilon} z, \quad z \sim \mathcal{N}(0, I).
$$

Diffusion models can be viewed as discretised Langevin dynamics. **Score-based generative modelling** (Song & Ermon 2019) directly trains the score via **denoising score matching**:

$$
\mathcal{L} = \mathbb{E}_t \mathbb{E}_{x_t} \left[\left\| s_\theta(x_t, t) + \frac{\epsilon}{\sqrt{1 - \bar{\alpha}_t}} \right\|^2 \right],
$$

which avoids computing $\nabla_x \log p(x)$ explicitly. This perspective unifies diffusion and score-based models.

## Flow Matching: Deterministic Paths to Data

**Flow Matching** (Lipman et al. 2022) simplifies diffusion by replacing stochastic transitions with deterministic ODEs. Instead of Markov transitions $q(x_t \mid x_{t-1})$, use **straight-line paths** in data space:

$$
\phi(t; x_0) = (1 - t) z_0 + t x_0, \quad t \in [0, 1],
$$

where $z_0 \sim \mathcal{N}(0, I)$. The velocity field $v_\theta(t, x)$ learns to follow these paths:

$$
\mathcal{L} = \mathbb{E}_{t, x_0, z_0}\left[\left\| v_\theta(t, \phi(t; x_0)) - (x_0 - z_0) \right\|^2\right].
$$

**Advantages over DDPM:**

- No variance schedule tuning — dynamics are deterministic.
- Simpler loss: direct MSE on velocity.
- Faster sampling: ODE solvers (RK45, DPM-Solver) use fewer evaluations.
- SOTA quality on images and video (SVD, Latte, Genie).

## Connection to Stochastic Differential Equations

Diffusion is a discrete approximation of continuous dynamics. The **forward [[stochastic-differential-equations|SDE]]** is an [[stochastic-differential-equations|Ornstein-Uhlenbeck process]]:

$$
dx = -\frac{1}{2} \beta(t) x \, dt + \sqrt{\beta(t)} \, dW_t,
$$

where $\beta(t)$ is the continuous noise schedule. Its solution matches the discrete marginal $q(x_t \mid x_0)$ as $dt \to 0$.

The **reverse [[stochastic-differential-equations|SDE]]** (Anderson 1982) runs time backward:

$$
dx = \left[-\frac{1}{2} \beta(t) x + \beta(t) \nabla_x \log p_t(x) \right] dt + \sqrt{\beta(t)} \, dW_t,
$$

where $\nabla_x \log p_t$ is the score at noise level $t$. Solving this SDE from $t=1$ to $t=0$ samples from the data distribution. The **probability flow ODE** (Song et al. 2021) removes stochasticity:

$$
\frac{dx}{dt} = -\frac{1}{2} \beta(t) x + \frac{1}{2} \beta(t) \nabla_x \log p_t(x),
$$

an efficient deterministic path achieving comparable quality to the SDE in fewer steps.

## Why Diffusion Surpassed GANs

Diffusion models address fundamental GAN limitations:

| Property | GAN | Diffusion |
|----------|-----|-----------|
| Mode coverage | Prone to mode collapse | Complete coverage |
| Training stability | Minimax game, hard tuning | MSE loss, stable |
| Sample quality | Sharp (StyleGAN) | SOTA (DALL-E, Genie) |
| Sampling speed | 1 step (fast) | 50–1000 steps (slow) |
| Density evaluation | Not supported | Yes (via likelihood) |

GANs collapse to a small set of modes. Diffusion's **iterative denoising** naturally explores the full data [[manifold-learning|manifold]]. No adversarial dynamics means robust training.

## Scalability and Conditioning

Modern diffusion scales to billions of parameters ([[neural-scaling-laws|scaling laws apply]]). Conditional generation is straightforward: concatenate the condition to the network input or use cross-[[attention-mechanisms|attention]].

**Classifier-free guidance** (Ho & Salimans 2021): train jointly on conditional ($c$) and unconditional cases, then sample with:

$$
\epsilon_\theta(x_t, t, c) + \gamma (\epsilon_\theta(x_t, t, c) - \epsilon_\theta(x_t, t, \emptyset)),
$$

where $\gamma > 1$ amplifies the conditional signal. This simple trick dramatically improves text-to-image fidelity (Imagen, Stable Diffusion).

## Applications

- **Image generation.** DALL-E 3, Stable Diffusion, Midjourney — text-to-image via [[transformer-architecture|transformers]] + diffusion.
- **Video and 3D.** Sora, SVD (Stability AI) — temporal diffusion models.
- **Protein design.** AlphaFold 3 uses flow matching to generate protein sequences and structures.
- **Molecular design.** Graph diffusion models for drug discovery.
- **Audio.** AudioLM, Voicebox — diffusion for speech and music synthesis.
- **Physics simulation.** Generative models for particle trajectories and dynamics.

## Limitations and Future Directions

**Slow sampling.** Even with acceleration (DDIM, DPM-Solver, distillation), diffusion requires $O(10-100)$ evaluations vs. GANs' single step. Consistency models and latent diffusion reduce this.

**Computational cost.** High-resolution image generation ($1024 \times 1024$) is expensive. Latent diffusion (encode data → diffuse in latent space → decode) mitigates this.

**Memory of training data.** Large diffusion models memorise training samples, raising privacy concerns.

**Theoretical understanding.** While score matching is well-understood, the full ELBO–score–ODE equivalence is still being formalised (Song et al. 2021, Karras et al. 2022).

## Related Topics

- [[generative-models]] — overview of VAEs, GANs, flows, and diffusion
- [[stochastic-differential-equations]] — continuous-time extension
- [[ornstein-uhlenbeck-process]] — the SDE underlying forward diffusion
- [[fokker-planck-equation]] — governs score evolution
- [[variational-autoencoders]] — latent-variable generative models
- [[neural-scaling-laws]] — efficiency of large diffusion models
- [[transformer-architecture]] — used in diffusion [[attention-mechanisms|attention]] mechanisms

---
title: "Generative Models"
category: "AI Theory"
order: 11
lang: "en"
slug: "generative-models"
---

# Generative Models

**Generative models** are a class of machine-learning models that learn to represent the data distribution $p(x)$ and generate new samples from it. Unlike discriminative models that predict $p(y \mid x)$, generative ones let you **synthesise** — create images, text, sound, financial scenarios, molecules. Through the 2010s and 2020s they moved from modest VAEs and GANs to diffusion models and LLMs that rewrote the rules of the industry.

## Visualization

```chart
{
  "type": "bar",
  "xAxis": "model",
  "data": [
    {"model": "VAE", "FID": 58, "sampling_steps": 1},
    {"model": "GAN", "FID": 8, "sampling_steps": 1},
    {"model": "Flow", "FID": 44, "sampling_steps": 1},
    {"model": "DDPM", "FID": 3, "sampling_steps": 1000},
    {"model": "DDIM", "FID": 4, "sampling_steps": 50},
    {"model": "AR (PixelCNN)", "FID": 65, "sampling_steps": 1},
    {"model": "Consistency", "FID": 6, "sampling_steps": 2}
  ],
  "lines": [
    {"dataKey": "FID", "stroke": "#3b82f6", "name": "FID score (lower = better quality)"},
    {"dataKey": "sampling_steps", "stroke": "#f59e0b", "name": "Sampling steps (log scale proxy)"}
  ]
}
```

*FID (Fréchet Inception Distance) measures sample quality — lower is better. Diffusion models achieve the best FID but require many sampling steps; consistency models close the gap with only 2 steps.*

## Problem Setup

Given a training set $\{x_1, \ldots, x_N\} \sim p_{\text{data}}$, the goal is to build a model $p_\theta(x)$ close to $p_{\text{data}}$ and be able to:

1. **Sample** — obtain $x \sim p_\theta$.
2. **Evaluate density** — compute $p_\theta(x)$ or its logarithm (not every model supports this).
3. **Learn latent representations** — models often train auxiliary encodings $z$.

Generative models compete on three criteria: **sample quality**, **diversity** and **tractability of density**. No single architecture dominates all three.

## Variational Autoencoders (VAE)

The **variational autoencoder** (Kingma & Welling 2013) trains via the evidence lower bound (ELBO):

$$
\log p_\theta(x) \geq \mathbb{E}_{q_\phi(z \mid x)}[\log p_\theta(x \mid z)] - \mathrm{KL}(q_\phi(z \mid x) \,\|\, p(z)).
$$

- **Encoder** $q_\phi(z \mid x)$ — a network predicting the parameters of the $z$ distribution.
- **Decoder** $p_\theta(x \mid z)$ — a network reconstructing $x$ from $z$.
- **Prior** $p(z) = \mathcal{N}(0, I)$ — standard Gaussian.

VAEs are simple to train, stable, and give a smooth latent space, but produce blurry images due to pixel-wise MSE in the decoder. Modern variants — β-VAE, VQ-VAE, NVAE — extend this core.

## Generative Adversarial Networks (GAN)

**GANs** (Goodfellow et al. 2014) are a two-network game:

- **Generator** $G: z \to x$ — maps noise $z \sim p(z)$ to objects.
- **Discriminator** $D: x \to [0, 1]$ — predicts whether an object is real or generated.

They compete in a minimax game:

$$
\min_G \max_D \; \mathbb{E}_{x \sim p_{\text{data}}}[\log D(x)] + \mathbb{E}_{z \sim p(z)}[\log(1 - D(G(z)))].
$$

At convergence $G$ generates objects indistinguishable from real ones. GANs give very sharp and realistic samples (StyleGAN, BigGAN in particular), but **training is unstable**: mode collapse, vanishing gradients, hyperparameter sensitivity. Remedies include Wasserstein GAN, spectral normalisation, and progressive growing.

## Normalizing Flows

**Normalizing flows** (Rezende & Mohamed 2015, RealNVP, Glow) build $p_\theta(x)$ as a chain of invertible transformations $x = f_\theta(z)$ with $z \sim p(z)$. The change-of-variables formula gives the exact likelihood:

$$
\log p_\theta(x) = \log p(z) + \log \left|\det \frac{\partial f_\theta^{-1}}{\partial x}\right|.
$$

Pros: **exact density** and **exact sampling**. Cons: the architecture is limited by invertibility and tractable Jacobians, which caps expressiveness. Continuous Normalizing Flows (FFJORD) use [[neural-odes|Neural ODEs]] for more flexible transformations.

## Diffusion Models

**Diffusion models** (Sohl-Dickstein 2015, DDPM — Ho et al. 2020) slowly evolved from an academic idea into the dominant generative class of the 2020s. Idea: a **forward process** gradually adds Gaussian noise to the data in $T$ steps, turning $x_0 \sim p_{\text{data}}$ into $x_T \sim \mathcal{N}(0, I)$:

$$
q(x_t \mid x_{t-1}) = \mathcal{N}(x_t; \sqrt{1 - \beta_t} x_{t-1}, \beta_t I).
$$

The **reverse process** is learned by a network $\epsilon_\theta(x_t, t)$ that predicts the noise added at each step:

$$
\mathcal{L} = \mathbb{E}_{t, x_0, \epsilon}\left[\|\epsilon - \epsilon_\theta(\sqrt{\bar\alpha_t} x_0 + \sqrt{1 - \bar\alpha_t} \epsilon, t)\|^2\right].
$$

Sampling is an iterative reversal of the process from $x_T$ to $x_0$.

**Properties:**
- **Quality:** as of 2024, diffusion is SOTA on images, audio, and 3D.
- **Training stability:** simple MSE loss, no minimax games.
- **Slow sampling:** $T$ is typically 1000+, accelerated through DDIM, DPM-Solver, consistency models.
- **Connection with [[schrodinger-equation|the Schrödinger equation]]:** diffusion models solve the Schrödinger bridge problem in the limit of infinitely many steps.

## Autoregressive Models

**Autoregressive models** factor $p(x)$ into a sequence of conditionals:

$$
p(x_1, \ldots, x_n) = \prod_{i=1}^n p(x_i \mid x_{<i}).
$$

Each $p(x_i \mid x_{<i})$ is a softmax from a neural network. Examples are PixelRNN/CNN for images, WaveNet for audio, **[[llm|large language models]]** (the GPT family) for text. Pros: exact likelihood, simple training via maximum likelihood. Cons: slow sampling (one token at a time).

## Energy-Based Models (EBM)

**Energy-Based Models** define the density through a scalar energy:

$$
p_\theta(x) = \frac{e^{-E_\theta(x)}}{Z(\theta)}, \qquad Z(\theta) = \int e^{-E_\theta(x)} dx.
$$

Training is hampered by $Z$; Langevin dynamics, score matching and contrastive methods are used. The link to [[hamiltonian-mechanics|statistical mechanics]] is direct: EBMs are a neural parameterisation of Boltzmann distributions.

## Applications

- **Image generation.** Stable Diffusion, DALL·E, Midjourney, Imagen — all diffusion.
- **Text generation.** GPT, Llama, Claude — autoregressive LLMs.
- **Finance.** [[generative-scenario-models|Scenario generation for VaR and stress testing]] via TimeGAN, diffusion, normalizing flows; calibration of volatility models through neural approximators.
- **Pharma.** Generation of molecules with desired properties via VAEs and diffusion models in graph space.
- **Audio and speech.** WaveNet, AudioLM, generative music models.
- **Video and 3D.** Sora, Gaussian Splatting, text-to-video diffusion.

## Related Topics

- [[flow-matching]] — OT-based path for generative models
- [[diffusion-models]] — the dominant class of generative models
- [[generative-scenario-models]] — application to scenario-based financial risk modelling
- [[schrodinger-equation]] — link to diffusion models via the Schrödinger bridge
- [[monte-carlo-method]] — classical sampling technique that these models generalise
- [[neural-odes]] — the basis of continuous normalizing flows
- [[sparse-autoencoders]] — another class of models with latent structure

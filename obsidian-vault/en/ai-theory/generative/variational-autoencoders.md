---
title: "Variational Autoencoders (VAE)"
category: "AI Theory"
order: 16
lang: "en"
slug: "variational-autoencoders"
growth: "seedling"
---

A **Variational Autoencoder** is a probabilistic [[generative-models|generative model]] that learns a compact latent representation of data while maintaining tractable likelihood bounds. VAE solves the core generative modeling challenge: learning $p(x) = \int p(x|z)p(z)\,dz$ where $z \sim \mathcal{N}(0, I)$ are latent variables that encode the compressed structure of data. Unlike deterministic autoencoders, VAE enforces a probabilistic bottleneck, balancing reconstruction fidelity against latent code regularity.

## The Evidence Lower Bound (ELBO)

Computing $p(x)$ requires integration over the intractable latent space. VAE uses variational inference to derive a tractable lower bound on the log-likelihood.

Start with the marginal:

$$\log p(x) = \log \int p(x|z)p(z)\,dz$$

Rewrite by introducing a variational posterior $q_\phi(z|x)$ (parameterized by neural network weights $\phi$):

$$\log p(x) = \log \int \frac{p(x,z)}{q_\phi(z|x)} q_\phi(z|x)\,dz = \log \mathbb{E}_{q_\phi}\left[\frac{p(x,z)}{q_\phi(z|x)}\right]$$

Apply Jensen's inequality to the concave function $\log$:

$$\log \mathbb{E}[X] \geq \mathbb{E}[\log X]$$

This yields:

$$\log p(x) \geq \mathbb{E}_{q_\phi(z|x)}\left[\log \frac{p(x,z)}{q_\phi(z|x)}\right]$$

Expand the numerator $p(x,z) = p(x|z)p(z)$ and decompose the expectation:

$$\text{ELBO}(\phi, \theta) = \mathbb{E}_{q_\phi(z|x)}[\log p_\theta(x|z)] - \mathbb{E}_{q_\phi(z|x)}\left[\log \frac{q_\phi(z|x)}{p(z)}\right]$$

The second expectation is the KL divergence:

$$\text{ELBO}(\phi, \theta) = \mathbb{E}_{q_\phi(z|x)}[\log p_\theta(x|z)] - \text{KL}[q_\phi(z|x) \parallel p(z)]$$

**Interpretation:** The reconstruction term $\mathbb{E}_{q_\phi}[\log p_\theta(x|z)]$ forces the decoder to reconstruct data faithfully. The KL regularizer $\text{KL}[q_\phi \parallel p]$ penalizes deviation of the learned posterior from the prior $p(z) = \mathcal{N}(0,I)$, preventing the encoder from collapsing to arbitrary distributions and encouraging latent codes to lie in a smooth, standard-normal-shaped region.

## Architecture: Encoder and Decoder

The **encoder** $q_\phi(z|x)$ outputs parameters of a diagonal Gaussian:

$$q_\phi(z|x) = \mathcal{N}\big(\mu_\phi(x), \text{diag}(\sigma^2_\phi(x))\big)$$

In practice, the network outputs both $\mu_\phi(x) \in \mathbb{R}^d$ and $\log \sigma^2_\phi(x) \in \mathbb{R}^d$ (parameterizing as log-variance improves numerical stability). The latent dimension $d$ is a hyperparameter, typically $d \ll \text{dim}(x)$.

The **decoder** $p_\theta(x|z)$ reconstructs data from latent codes:

$$p_\theta(x|z) = \begin{cases}
\mathcal{N}(\mu_\theta(z), \sigma^2_\theta(z) I) & \text{continuous data (images as Gaussian)} \\
\text{Bernoulli}(\pi_\theta(z)) & \text{binary data}
\end{cases}$$

For grayscale images, each pixel is modeled as an independent Gaussian with mean $\mu_\theta(z)$ and fixed variance; the reconstruction loss becomes per-pixel mean-squared error. The overall objective to minimize is:

$$\mathcal{L}(\phi, \theta) = -\text{ELBO} = -\mathbb{E}_{q_\phi(z|x)}[\log p_\theta(x|z)] + \text{KL}[q_\phi(z|x) \parallel p(z)]$$

## The Reparameterization Trick

Direct differentiation through sampling $z \sim q_\phi(z|x)$ blocks gradient flow: sampling is a stochastic operation with no well-defined derivative. The **reparameterization trick** (Kingma & Welling 2013) removes this obstruction by expressing $z$ as a deterministic function of independent noise:

$$z = \mu_\phi(x) + \sigma_\phi(x) \odot \epsilon, \quad \epsilon \sim \mathcal{N}(0, I)$$

where $\odot$ denotes element-wise multiplication. Now gradients flow through the deterministic operations $\mu_\phi$ and $\sigma_\phi$, while randomness is isolated in $\epsilon$ (which requires no differentiation). This enables end-to-end [[automatic-differentiation|backpropagation]]: the loss $\mathcal{L}(\phi, \theta)$ becomes a differentiable function of $(\phi, \theta)$, and stochastic gradient descent can optimize both encoder and decoder simultaneously.

## Closed-Form KL Divergence

For Gaussian prior $p(z) = \mathcal{N}(0, I)$ and diagonal Gaussian posterior $q_\phi(z|x) = \mathcal{N}(\mu, \sigma^2 I)$, the KL divergence has a closed analytic form. Let $\sigma_j^2 = \exp(\log \sigma_j^2)$:

$$\text{KL}[q_\phi(z|x) \parallel \mathcal{N}(0,I)] = \frac{1}{2} \sum_{j=1}^{d} \left(\mu_j^2 + \sigma_j^2 - \log(\sigma_j^2) - 1\right)$$

This eliminates Monte Carlo estimation, reducing gradient variance and accelerating convergence. The formula is intuitive: the first two terms measure deviation in mean and variance, the $-\log \sigma_j^2$ penalizes small variances (the model prefers to be uncertain), and the $-1$ is a baseline.

## Extensions and Applications

**β-VAE** (Higgins et al. 2016): Weight the KL term by a scaling factor $\beta > 1$:

$$\text{ELBO}_\beta = \mathbb{E}_{q_\phi}[\log p_\theta(x|z)] - \beta \cdot \text{KL}[q_\phi \parallel p]$$

Higher $\beta$ prioritizes latent regularity over reconstruction, pushing the model to learn **disentangled** representations: each latent dimension encodes an independent semantic factor of variation (pose, color, etc.) rather than entangled combinations. This improves interpretability and generalization.

**VQ-VAE** (Vector Quantized VAE, van den Oord et al. 2017): Replaces continuous latent codes with **discrete** vectors from a learned codebook. The encoder outputs real-valued features $z_e(x)$; these are quantized to the nearest codebook entry:

$$z_q = \text{sg}[z_e(x)] + (z_e(x) - \text{sg}[z_e(x)]), \quad z_q \in \{e_k\}_{k=1}^K$$

where $\text{sg}$ denotes stop-gradient. This discrete bottleneck improves compression and has become foundational in modern image generation: DALL-E 1 and **Stable Diffusion** first compress images to VQ-VAE quantized codes, then train [[diffusion-models|diffusion models]] over this compact token space. The result is faster, more controllable generation.

## Connection to Diffusion Models

VAE and [[diffusion-models|diffusion models]] are complementary approaches to [[generative-models|generative modeling]]. VAE learns an explicit latent variable model with guaranteed lower bounds via ELBO; it is fast to sample (single forward pass through decoder) but the reconstruction loss is often blurry. Diffusion models iteratively denoise, achieving superior sample quality but requiring many sequential steps (50–1000).

Modern SOTA systems fuse both: **Stable Diffusion** encodes images into VQ-VAE latent space, then performs diffusion in that lower-dimensional space. This combines VAE's speed and efficiency with diffusion's quality, yielding fast and sharp generation. Latent diffusion is now ubiquitous in text-to-image and text-to-video systems.

## Theoretical Significance

VAE exemplifies the power of [[automatic-differentiation|automatic differentiation]] in modern deep learning. The reparameterization trick is only possible because automatic differentiation allows gradients to flow through stochastic operations — a capability that underpins virtually all contemporary neural network training. VAE also illustrates the [[kolmogorov-probability-axioms|probabilistic foundations]] of machine learning: ELBO is rooted in Jensen's inequality and [[statistical-mechanics|information theory]], making VAE a bridge between classical statistics and deep learning.

## Related Articles

- [[generative-models]] — overview of VAE, GAN, flows, and diffusion
- [[diffusion-models]] — modern image generation via iterative denoising
- [[automatic-differentiation]] — backpropagation through stochastic graphs
- [[neural-odes]] — continuous-depth extensions via ordinary differential equations
- [[sparse-autoencoders]] — alternative latent-variable models with sparsity

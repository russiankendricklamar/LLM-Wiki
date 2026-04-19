---
title: "Normalizing Flows"
category: "AI Theory"
order: 17
lang: "en"
slug: "normalizing-flows"
growth: "seedling"
---

Normalizing flows are a class of generative models built on invertible neural network transformations that enable exact density estimation. Unlike [[variational-autoencoders|variational autoencoders (VAE)]], which rely on a variational lower bound (ELBO), flows provide exact log-likelihood via change of variables in probability integrals, with careful tracking of the Jacobian determinant of the transformation.

## Core principle: change of variables

Suppose a base distribution $p_z(z) = \mathcal{N}(0, I)$ and an invertible transformation $x = f(z)$. By the change-of-variables theorem:

$$p_x(x) = p_z(f^{-1}(x)) \left| \det J_{f^{-1}}(x) \right|$$

where $J_{f^{-1}}$ is the Jacobian of the inverse transformation. Taking logarithms:

$$\log p_x(x) = \log p_z(f^{-1}(x)) + \log \left| \det J_{f^{-1}}(x) \right|$$

The critical bottleneck: computing the Jacobian determinant must be tractable. Naive LU-decomposition costs $O(d^3)$, making it impractical for high dimensions. Flow architectures are deliberately constrained so the Jacobian has structure (triangular, diagonal, low-rank perturbation) allowing determinant computation in $O(d)$ or $O(d^2)$.

## Simple flows: planar and radial

Planar flows add a perturbation:

$$f(z) = z + u h(w^T z + b)$$

where $h$ is a smooth activation, $u, w \in \mathbb{R}^d$, $b \in \mathbb{R}$. The Jacobian is:

$$J = I + u \frac{\partial h}{\partial z}(w^T z + b) w^T$$

Using the matrix determinant lemma:

$$\log \det J = \log \left(1 + u^T \frac{\partial h}{\partial z} w\right)$$

computed in $O(d)$ time. Radial flows work similarly, perturbing the norm $\|z\|$. While elegant and theoretically instructive, these simple flows weakly parameterize complex distributions.

## RealNVP: affine coupling layers

Real Non-Volume Preserving (Dinh et al., 2017) partitions the vector into two halves: $x = (x_1, x_2)$. The transformation:

$$x_1' = x_1$$
$$x_2' = x_2 \odot \exp(s(x_1)) + t(x_1)$$

where $s, t: \mathbb{R}^{d_1} \to \mathbb{R}^{d_2}$ are arbitrary neural networks (convolutional or fully connected), $\odot$ denotes element-wise multiplication. The Jacobian is:

$$J = \begin{pmatrix} I & 0 \\ \frac{\partial x_2'}{\partial x_1} & \text{diag}(\exp(s(x_1))) \end{pmatrix}$$

For a triangular matrix, $\det J = \prod_i \exp(s_i(x_1))$, giving:

$$\log \det J = \sum_i s_i(x_1)$$

The inverse:

$$x_2 = (x_2' - t(x_1)) \odot \exp(-s(x_1))$$

is equally efficient. Alternating coupling layers (freezing complementary subsets) allow the model to express full correlations across all dimensions.

## Autoregressive flows

Masked Autoregressive Flow (MAF) parameterizes each $x_i$ as a function of predecessors $x_{<i}$:

$$x_i = z_i \odot \sigma_i(x_{<i}) + \mu_i(x_{<i})$$

where $\sigma_i, \mu_i$ are scale and shift functions. The Jacobian is strictly lower triangular:

$$\log \det J = \sum_{i=1}^d \log \sigma_i(x_{<i})$$

MAF excels at density estimation (single forward pass) but requires sequential sampling (slow generation). Inverse Autoregressive Flow (IAF) reverses this trade-off: fast sampling, slow density. IAF is used in [[variational-autoencoders|VAE]] for posterior approximation and tighter ELBOs.

## Glow and multi-scale architecture

Glow (Kingma & Dhariwal, 2018) extends RealNVP with invertible 1×1 convolutions:

$$W' = QR$$

where $Q$ is orthogonal (from QR decomposition), and $\det W' = \pm \prod_i R_{ii}$. ActNorm layers standardize batch activations. Multi-scale architecture processes different resolutions independently, reducing memory footprint and enabling synthesis at high resolution. High-frequency details are factored out early, improving sampling speed.

## Continuous normalizing flows

Continuous flows (CNF) encode transformation as an ordinary differential equation:

$$\frac{dx}{dt} = f(x(t), t), \quad x(0) = z, \quad x(1) = x$$

Density evolves by the instantaneous change-of-variables formula:

$$\frac{d \log p(x(t), t)}{dt} = -\text{tr}\left(\frac{\partial f}{\partial x}\right)$$

This eliminates discrete layers and connects to [[neural-odes|Neural ODEs]]. The Jacobian is never explicitly constructed — the trace is computed via automatic differentiation of the dynamics.

## Comparison to alternatives

Flows achieve exact likelihood (not a lower bound like VAE) and deterministic encoding (unlike stochastic encoders). Training is slower than [[diffusion-models|diffusion models]], however, and architectural constraints (invertibility, Jacobian tractability) limit flexibility. VAE is simpler to implement; diffusion models often yield superior sample quality. Flows are the gold standard when exact density estimation is required.

## Applications

- **Density estimation**: exact log-likelihood for asymmetric, multimodal distributions.
- **Generative modeling**: image, audio, and molecular structure synthesis.
- **Variational inference**: IAF posterior approximation in hierarchical [[variational-autoencoders|VAE]]s.
- **Financial modeling**: option pricing via normalizing flows (analogy with [[change-of-numeraire|change of numeraire]]).

---

**Key references:**
- Rezende & Mohamed (2015) — Variational Inference with Normalizing Flows
- Dinh et al. (2017) — Density estimation using RealNVP
- Kingma & Dhariwal (2018) — Glow: Generative Flow with Invertible 1x1 Convolutions
- Grathwohl et al. (2019) — FFJORD: Free-form Continuous Dynamics for Scalable Reversible Learning

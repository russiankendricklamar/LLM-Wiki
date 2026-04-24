---
title: "Energy-Based Models"
category: "AI Theory"
order: 22
lang: "en"
slug: "energy-based-models"
growth: "seedling"
---

Energy-based models (EBMs) define probability distributions through an energy function, sidestepping the causal structure of directed graphical models. Instead of specifying $p(x) = \prod_i p(x_i | \text{parents}_i)$, EBMs work with an unnormalized density:

$$p_\theta(x) = \frac{\exp(-E_\theta(x))}{Z(\theta)}$$

where $E_\theta : \mathbb{R}^d \to \mathbb{R}$ is a neural network energy function and $Z(\theta) = \int \exp(-E_\theta(x)) dx$ is the intractable partition function. This undirected formulation permits arbitrary dependencies—no topological constraint—making EBMs a maximally flexible family for modeling complex distributions. The tradeoff: computing $Z$ requires integration over the entire space.

## MLE and the Partition Function Problem

Maximizing likelihood $\log p_\theta(x)$ yields the gradient:

$$\nabla_\theta \log p_\theta(x) = -\nabla_\theta E_\theta(x) + \mathbb{E}_{p_\theta}[\nabla_\theta E_\theta(x)]$$

The first term is tractable (energy gradient at the data point); the second term is a model expectation, requiring samples from $p_\theta$ to estimate. For high-dimensional $x$, sampling $p_\theta$ is itself intractable, creating a chicken-and-egg problem: we cannot train without samples from the model, yet cannot sample without knowing the model.

## Contrastive Divergence and Approximation

Hinton's **contrastive divergence** (CD) sidesteps exact MLE by approximating the model expectation with MCMC initialized at data: run $k$ Langevin or Gibbs steps starting from $x_{\text{data}}$ to get samples $\tilde{x}$, then estimate the second gradient term using $\{\tilde{x}\}$. This introduces bias—the distribution of $\tilde{x}$ is not $p_\theta$—but the bias decreases as $k$ increases. Empirically, even CD-1 (one MCMC step) often trains RBMs effectively. The algorithm sacrifices exactness for computational tractability, embodying a pragmatic philosophy: do not solve the intractable problem; solve something nearby that you can compute.

Langevin sampling itself is straightforward:

$$x_{t+1} = x_t - \eta \nabla_x E_\theta(x_t) + \sqrt{2\eta} \epsilon_t, \quad \epsilon_t \sim \mathcal{N}(0, I)$$

This is [[convex-optimization|gradient descent]] on energy plus additive noise. In the limit $t \to \infty$, $\eta \to 0$ with proper scaling, samples converge to $p_\theta$. The score function $s_\theta(x) = -\nabla_x E_\theta(x)$ specifies the drift direction.

## Score Matching: Avoiding the Partition Function

Hyvärinen (2005) proposed a breakthrough: train the score function *directly* without ever computing or sampling from $Z$. The key insight is that the score matching objective

$$\mathcal{L}_{\text{SM}}(\theta) = \mathbb{E}_{p_{\text{data}}}[\tfrac{1}{2}\|s_\theta(x)\|^2 + \text{tr}(\nabla_x s_\theta(x))]$$

where $\text{tr}(\nabla_x s_\theta(x)) = \sum_i \frac{\partial s_{\theta,i}}{\partial x_i}$, is equivalent to matching the score of the data distribution without knowing $p_{\text{data}}$ explicitly. Minimizing this objective requires only a forward pass and Jacobian-vector products—both differentiable and tractable. The trace of the Jacobian can be estimated via Hutchinson's trick: $\text{tr}(J) \approx \mathbb{E}_{\epsilon \sim \mathcal{N}(0,I)}[\epsilon^T J \epsilon]$.

**Denoising score matching** simplifies further: corrupt data with Gaussian noise $\tilde{x} = x + \epsilon$, $\epsilon \sim \mathcal{N}(0, \sigma^2 I)$, and train $s_\theta(\tilde{x})$ to match the conditional score $\nabla_{\tilde{x}} \log p(\tilde{x} | x) = -\frac{\tilde{x} - x}{\sigma^2}$. This is equivalent to training a noise predictor, and the connection is **direct**: score matching gave birth to [[diffusion-models|diffusion models]], where the score function is the neural network predicting injected noise at each scale. The Langevin sampler becomes the diffusion reverse process.

## Restricted Boltzmann Machines

The **RBM** is a canonical EBM on bipartite graphs with visible units $v \in \{0,1\}^m$ and hidden units $h \in \{0,1\}^n$:

$$p(v, h) = \frac{\exp(v^T W h + b^T v + c^T h)}{Z}$$

where $W \in \mathbb{R}^{m \times n}$, $b \in \mathbb{R}^m$, $c \in \mathbb{R}^n$. The bipartite structure permits block-alternating Gibbs sampling: $p(h | v)$ and $p(v | h)$ factor across units, enabling exact block conditionals even though joint sampling is intractable. Stacking RBMs into a Deep Belief Network provides a greedy layer-by-layer pretraining strategy, though modern practice has largely abandoned RBMs for backprop-friendly alternatives.

## Modern EBMs and Hybrid Modeling

Recent work rejuvenates EBMs by coupling them with discriminative objectives. **Joint Energy Modeling (JEM)** uses a single network $f_\theta(x)$ to define both a classifier and a generative model:

$$E_\theta(x, y) = -f_\theta(x)[y]$$

Supervised learning pushes down the energy of correct labels; unsupervised learning via contrastive divergence pushes down data energy and up off-[[manifold-learning|manifold]] energy. This hybrid formulation unifies classification and generation, exemplifying modern interest in flexible, undirected models that leverage both labeled and unlabeled data.

## Connection to [[statistical-mechanics|Statistical Mechanics]]

The form $p_\theta(x) = \exp(-E_\theta(x)) / Z$ is borrowed directly from the Boltzmann distribution of statistical physics, where $E$ is the Hamiltonian and $Z$ is the partition function. This deep connection suggests that sampling and inference in EBMs are fundamentally physics problems—Langevin dynamics is thermal relaxation, and score matching is learning the temperature-dependent potential.

Energy-based models remain central to modern generative AI, particularly through [[diffusion-models|diffusion models]], which reformulate EBM training as iterative denoising and reveal the latent score-matching structure underlying successful generation.

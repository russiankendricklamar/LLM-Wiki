---
title: 'Generative Models: VAEs and ELBO'
category: AI Theory
order: 160
lang: en
slug: vae-elbo
---

Variational Autoencoders (VAEs) frame generation as probabilistic inference, mapping data $x$ to latent variables $z$.

### The ELBO Derivation
We want to maximize the log-likelihood $\log p_\theta(x)$. Since the true posterior $p_\theta(z|x)$ is intractable, we approximate it with $q_\phi(z|x)$.
$\log p_\theta(x) = D_{KL}(q_\phi(z|x) || p_\theta(z|x)) + \mathcal{L}(\theta, \phi; x)$
Because KL divergence is non-negative, $\mathcal{L}$ forms the Evidence Lower Bound (ELBO):
$\mathcal{L}(\theta, \phi; x) = \mathbb{E}_{q_\phi(z|x)}[\log p_\theta(x|z)] - D_{KL}(q_\phi(z|x) || p(z))$

### Reparameterization Trick
To backpropagate through the stochastic sampling $z \sim q_\phi(z|x) = \mathcal{N}(\mu, \sigma^2I)$, we reparameterize:
$z = \mu + \sigma \odot \epsilon, \quad \epsilon \sim \mathcal{N}(0, I)$
This separates the random noise from the network parameters, enabling end-to-end gradient descent.

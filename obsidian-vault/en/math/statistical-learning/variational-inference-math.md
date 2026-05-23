---
title: Variational Inference
category: Statistical Learning
order: 67
lang: en
slug: variational-inference-math
---

# Variational Inference

## The Evidence Lower Bound (ELBO)
In Bayesian inference, calculating the exact posterior $p(z|x) = \frac{p(x,z)}{p(x)}$ is often intractable because $p(x) = \int p(x,z)dz$. 
Variational Inference approximates the posterior with a tractable distribution $q_\theta(z)$. We minimize the Kullback-Leibler divergence:
$$ \text{KL}(q_\theta(z) \| p(z|x)) = \mathbb{E}_{q_\theta}[\log q_\theta(z) - \log p(z|x)] $$
Since $\log p(x) = \text{KL}(q_\theta(z) \| p(z|x)) + \mathcal{L}(\theta)$, and KL is non-negative, we maximize the ELBO:
$$ \mathcal{L}(\theta) = \mathbb{E}_{q_\theta}[\log p(x|z)] - \text{KL}(q_\theta(z) \| p(z)) \le \log p(x) $$

## Mean-Field Approximation
The mean-field family assumes the latent variables are mutually independent:
$$ q(z) = \prod_{j=1}^m q_j(z_j) $$
Coordinate ascent variational inference (CAVI) optimizes each $q_j$ iteratively. The optimal update is:
$$ q_j^*(z_j) \propto \exp\left( \mathbb{E}_{i \neq j} [\log p(x, z)] \right) $$

## The Reparameterization Trick
To optimize the ELBO using stochastic [[convex-optimization|gradient descent]] (like in VAEs), we need $\nabla_\theta \mathbb{E}_{q_\theta(z)}[f(z)]$. If $q_\theta$ is a Gaussian $\mathcal{N}(\mu, \sigma^2)$, we reparameterize $z = \mu + \sigma \epsilon$ where $\epsilon \sim \mathcal{N}(0, 1)$.
Then:
$$ \nabla_\theta \mathbb{E}_{q_\theta}[f(z)] = \mathbb{E}_{\epsilon}[\nabla_\theta f(\mu + \sigma \epsilon)] $$
This allows gradients to backpropagate through the sampling process.


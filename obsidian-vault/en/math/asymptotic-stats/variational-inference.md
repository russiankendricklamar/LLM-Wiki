---
title: "Variational Inference"
category: "Asymptotic Statistics"
order: 5
lang: "en"
slug: "variational-inference"
---

# Variational Inference (VI)

Variational Inference is a technique to approximate complex, intractable probability distributions (specifically **Posteriors**) with a simpler family of distributions. While [[mcmc|MCMC]] uses random sampling to find the posterior, VI turns the inference problem into an **Optimization** problem.

## The Intractability Problem

In Bayesian inference, we want to compute the posterior $p(z \mid x) = \frac{p(x, z)}{p(x)}$. The denominator (the Evidence) requires integrating over all possible latent states $z$:
$$p(x) = \int p(x, z) dz$$
For high-dimensional or complex models, this integral is impossible to solve.

## The Variational Idea

Instead of calculating $p(z \mid x)$ directly, we choose a family of simpler distributions $q_\phi(z)$ (e.g., Gaussians) and try to find the parameters $\phi$ that make $q$ as close as possible to the true posterior.

We measure "closeness" using the **Kullback-Leibler (KL) Divergence**:
$$\min_\phi \mathbb{D}_{KL}(q_\phi(z) \| p(z \mid x))$$

## The ELBO (Evidence Lower Bound)

Since we don't know $p(z \mid x)$, we cannot minimize the KL divergence directly. However, we can maximize a surrogate objective called the **ELBO**:

$$\log p(x) \geq \mathcal{L}(\phi) = \mathbb{E}_{q_\phi} [ \log p(x, z) - \log q_\phi(z) ]$$

Maximizing the ELBO is mathematically equivalent to minimizing the KL divergence between $q$ and the posterior. 

## VI vs. MCMC

| Feature | MCMC | Variational Inference |
|---|---|---|
| **Approach** | Stochastic Sampling | Optimization |
| **Speed** | Slow (long chains) | Fast (gradient descent) |
| **Accuracy** | Asymptotically exact | Approximate (biased) |
| **Scalability** | Hard for giant datasets | Highly scalable (Stochastic VI) |

## Application in AI: Variational Autoencoders (VAE)

In a VAE, the "Encoder" is a variational distribution $q_\phi(z \mid x)$ that approximates the latent representation of data. The model is trained by maximizing the ELBO across the entire dataset.

## Visualization: Approximating a Distribution

```chart
{
  "type": "line",
  "xAxis": "z",
  "data": [
    {"z": -3, "true": 0.01, "approx": 0.00},
    {"z": -2, "true": 0.10, "approx": 0.05},
    {"z": -1, "true": 0.40, "approx": 0.45},
    {"z": 0,  "true": 0.80, "approx": 0.90},
    {"z": 1,  "true": 0.40, "approx": 0.45},
    {"z": 2,  "true": 0.10, "approx": 0.05}
  ],
  "lines": [
    {"dataKey": "true", "stroke": "#ef4444", "name": "True Posterior (Complex)"},
    {"dataKey": "approx", "stroke": "#3b82f6", "name": "Variational Approximation (q)"}
  ]
}
```
*VI fits a simple "bell curve" (blue) to a potentially more complex, multi-modal, or skewed true distribution (red), trading some accuracy for massive computational speed.*

## Related Topics

[[bayesian-inference]] — the context for VI  
kullback-leibler-divergence — the distance measure used  
[[variational-autoencoders]] — the primary deep learning application
---

---
title: "Gaussian Mixture Models (GMM)"
category: "Math Foundations"
order: 65
lang: "en"
slug: "gmm"
---

# Gaussian Mixture Models (GMM)

A Gaussian Mixture Model (GMM) is a probabilistic model that assumes all the data points are generated from a mixture of a finite number of Gaussian distributions with unknown parameters.

## The Mixture Model
The probability density of a data point $x \in \mathbb{R}^D$ is a weighted sum of $K$ Gaussian components:
$$ p(x) = \sum_{k=1}^K \pi_k \mathcal{N}(x | \mu_k, \Sigma_k) $$
where:
- $\pi_k$ are the mixing coefficients satisfying $\pi_k \ge 0$ and $\sum_{k=1}^K \pi_k = 1$.
- $\mu_k$ and $\Sigma_k$ are the mean and covariance matrix of the $k$-th component.

## Latent Variable Perspective
We can introduce a categorical latent variable $z \in \{1, \dots, K\}$, represented as a one-hot vector, indicating which Gaussian generated $x$.
- Prior: $p(z_k = 1) = \pi_k$
- Conditional: $p(x | z_k = 1) = \mathcal{N}(x | \mu_k, \Sigma_k)$

By Bayes' theorem, the posterior probability ("responsibility") that component $k$ generated observation $x_n$ is:
$$ \gamma(z_{nk}) = p(z_k=1 | x_n) = \frac{\pi_k \mathcal{N}(x_n | \mu_k, \Sigma_k)}{\sum_{j=1}^K \pi_j \mathcal{N}(x_n | \mu_j, \Sigma_j)} $$

## Parameter Estimation via EM
Because of the sum inside the log-likelihood, direct optimization is hard. We use the [[em-algorithm|EM Algorithm]]:

**E-Step:** Evaluate the responsibilities $\gamma(z_{nk})$ for all $n, k$ using current parameters.

**M-Step:** Re-estimate the parameters using the responsibilities:
- Let $N_k = \sum_{n=1}^N \gamma(z_{nk})$ (effective number of points assigned to cluster $k$).
- $\mu_k^{new} = \frac{1}{N_k} \sum_{n=1}^N \gamma(z_{nk}) x_n$
- $\Sigma_k^{new} = \frac{1}{N_k} \sum_{n=1}^N \gamma(z_{nk}) (x_n - \mu_k^{new})(x_n - \mu_k^{new})^T$
- $\pi_k^{new} = \frac{N_k}{N}$

GMMs provide a soft-clustering alternative to K-Means, naturally handling elliptical clusters of varying densities.

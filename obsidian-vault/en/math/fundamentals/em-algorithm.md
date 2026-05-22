---
title: "The EM Algorithm"
category: "Math Foundations"
order: 64
lang: "en"
slug: "em-algorithm"
---

# The Expectation-Maximization (EM) Algorithm

The EM algorithm is an iterative method to find maximum likelihood (or MAP) estimates of parameters in statistical models, where the model depends on unobserved **latent variables**.

## Problem Setup
Let $X$ be the observed data, $Z$ be the latent variables, and $\theta$ the parameters. The goal is to maximize the incomplete log-likelihood:
$$ \ln p(X | \theta) = \ln \int p(X, Z | \theta) dZ $$
Direct maximization is often intractable because the logarithm is outside the integral/sum.

## Evidence Lower Bound (ELBO)
For any arbitrary distribution $q(Z)$, we can rewrite the log-likelihood using Jensen's Inequality:
$$ \ln p(X | \theta) = \ln \int q(Z) \frac{p(X, Z | \theta)}{q(Z)} dZ \ge \int q(Z) \ln \frac{p(X, Z | \theta)}{q(Z)} dZ \equiv \text{ELBO}(q, \theta) $$
Alternatively, $\ln p(X | \theta) = \text{ELBO}(q, \theta) + \text{KL}(q(Z) \| p(Z | X, \theta))$.
Since Kullback-Leibler divergence is non-negative, ELBO is a lower bound.

## The EM Steps
The EM algorithm iteratively alternates between two steps to maximize the log-likelihood:

1. **E-step (Expectation):** Fix parameters $\theta^{(t)}$. We want to maximize the ELBO with respect to $q(Z)$. The maximum is achieved when the KL divergence is zero, meaning we set:
$$ q^{(t+1)}(Z) = p(Z | X, \theta^{(t)}) $$
We then compute the expected complete data log-likelihood (the "Q-function"):
$$ \mathcal{Q}(\theta, \theta^{(t)}) = \mathbb{E}_{q^{(t+1)}(Z)}[\ln p(X, Z | \theta)] $$

2. **M-step (Maximization):** Fix $q^{(t+1)}(Z)$ and maximize $\mathcal{Q}(\theta, \theta^{(t)})$ with respect to $\theta$:
$$ \theta^{(t+1)} = \arg\max_\theta \mathcal{Q}(\theta, \theta^{(t)}) $$

The EM algorithm guarantees that the log-likelihood $p(X | \theta)$ never decreases. It is widely used in [[gmm|Gaussian Mixture Models]] and [[hmm|Hidden Markov Models]] (where it's called the Baum-Welch algorithm).

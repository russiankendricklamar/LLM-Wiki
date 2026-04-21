---
title: "Bayesian Inference"
category: "Asymptotic Statistics"
order: 2
lang: "en"
slug: "bayesian-inference"
---

# Bayesian Inference: Updating Knowledge with Data

Bayesian inference is a method of statistical inference in which **Bayes' Theorem** is used to update the probability for a hypothesis as more evidence or information becomes available. Unlike MLE, which treats parameters as fixed numbers, Bayesianism treats parameters as **Random Variables**.

## 1. Bayes' Theorem

The foundation of the framework is:
$$P(\theta \mid D) = \frac{P(D \mid \theta) P(\theta)}{P(D)}$$
Where:
- **Prior $P(\theta)$**: What we believed before seeing data.
- **Likelihood $P(D \mid \theta)$**: What the data tells us.
- **Posterior $P(\theta \mid D)$**: Our updated belief.
- **Evidence $P(D)$**: The total probability of the data (the normalization factor).

## 2. Conjugate Priors

For some models, if you choose a specific "Conjugate" prior, the posterior will have the same functional form as the prior.
- *Example*: If the likelihood is Gaussian and the prior is Gaussian, the posterior is also Gaussian.
This allows for exact analytical updates without needing a computer.

## 3. Numerical Methods (When Math is Hard)

In most modern AI tasks, the Evidence $P(D) = \int P(D \mid \theta) P(\theta) d\theta$ is impossible to calculate analytically.

### A. MCMC (Markov Chain Monte Carlo)
Algorithms like **Metropolis-Hastings** or **Hamiltonian Monte Carlo (HMC)** sample from the posterior by wandering through the parameter space. Over time, the density of samples matches the posterior probability.

### B. Variational Inference (VI)
Instead of sampling, we turn inference into an **Optimization** problem. We pick a simple distribution $q(\theta)$ (like a Gaussian) and minimize its [[measure-theory|KL Divergence]] from the true posterior. This is the basis of **Variational Autoencoders (VAEs)**.

## 4. Bayesian vs. Frequentist (MLE)

- **Frequentist (MLE)**: "The parameter is a fixed physical constant. Give me the best estimate."
- **Bayesian**: "The parameter is uncertain. Give me a full distribution of possibilities."

In finance, [[bayesian-kelly|Bayesian Kelly]] is superior because it accounts for the fact that our estimates of stock returns are always noisy, preventing over-leveraging and bankruptcy.

## Related Topics

[[asymptotic-stats/mle]] — the non-Bayesian counterpart  
[[mcmc]] — the sampling engine  
[[variational-autoencoders]] — Bayesian AI in action  
[[bayesian-black-litterman]] — application in portfolio management
---

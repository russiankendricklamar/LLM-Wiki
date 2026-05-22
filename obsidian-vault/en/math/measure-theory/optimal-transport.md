---
title: Optimal Transport & Wasserstein Metrics
category: Analysis & Geometry
order: 60
lang: en
slug: optimal-transport
---

# Optimal Transport & Wasserstein Metrics

## Introduction
The Monge-Kantorovich problem seeks the most cost-effective way to transport mass from one distribution to another. Given two probability measures $\mu \in \mathcal{P}(X)$ and $\nu \in \mathcal{P}(Y)$, the Monge formulation is:
$$ \inf_{T_\# \mu = \nu} \int_X c(x, T(x)) \,d\mu(x) $$

## Kantorovich Relaxation
The Kantorovich formulation relaxes the deterministic map $T$ to a coupling $\pi \in \Pi(\mu, \nu)$:
$$ W_p(\mu, \nu) = \left( \inf_{\pi \in \Pi(\mu, \nu)} \int_{X \times Y} d(x,y)^p \,d\pi(x,y) \right)^{1/p} $$

## Entropic Regularization and Sinkhorn Divergence
To overcome the computational burden, we introduce entropic regularization:
$$ W_{c,\epsilon}(\mu, \nu) = \inf_{\pi \in \Pi(\mu, \nu)} \int c(x,y) d\pi(x,y) + \epsilon \text{KL}(\pi \| \mu \otimes \nu) $$
The solution takes the form $\pi = \text{diag}(u) K \text{diag}(v)$, where $K_{i,j} = \exp(-c(x_i, y_j)/\epsilon)$, computable via the Sinkhorn-Knopp algorithm.

Sinkhorn divergence is defined as:
$$ S_\epsilon(\mu, \nu) = W_{c,\epsilon}(\mu, \nu) - \frac{1}{2} W_{c,\epsilon}(\mu, \mu) - \frac{1}{2} W_{c,\epsilon}(\nu, \nu) $$
It interpolates between optimal transport ($\epsilon \to 0$) and Maximum Mean Discrepancy ($\epsilon \to \infty$).

## Applications
In Generative Adversarial Networks (WGAN), the Wasserstein-1 distance is used:
$$ W_1(\mu, \nu) = \sup_{\|f\|_L \le 1} \mathbb{E}_{x \sim \mu}[f(x)] - \mathbb{E}_{y \sim \nu}[f(y)] $$
This follows from the Kantorovich-Rubinstein duality.


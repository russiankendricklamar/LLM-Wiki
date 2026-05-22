---
title: Convergence Theory of Stochastic Gradient Descent
category: Statistical Learning
order: 44
lang: en
slug: sgd-convergence-theory
---

# Convergence Theory of Stochastic Gradient Descent

Stochastic Gradient Descent (SGD) is the predominant optimization algorithm in machine learning. Understanding its convergence properties under various assumptions—convexity, strong convexity, and the Polyak-Łojasiewicz (PL) condition—is fundamental to algorithm design.

## Problem Formulation

We aim to minimize an objective function $F(w)$:

$$
\min_{w \in \mathbb{R}^d} F(w) = \mathbb{E}_{z \sim \mathcal{D}} [f(w; z)]
$$

The SGD update rule with step size $\eta_t$ is:

$$
w_{t+1} = w_t - \eta_t 
abla f(w_t; z_t)
$$

where $\mathbb{E}_{z_t} [
abla f(w_t; z_t) | w_t] = 
abla F(w_t)$. Let the stochastic gradient variance be bounded:

$$
\mathbb{E} [\|
abla f(w; z) - 
abla F(w)\|^2] \leq \sigma^2
$$

## Convex and Smooth Functions

Assume $F(w)$ is $L$-smooth (Lipschitz continuous gradients) and convex:

$$
\|
abla F(w) - 
abla F(w')\| \leq L \|w - w'\|
$$

For a constant step size $\eta \leq rac{1}{L}$, the expected convergence rate after $T$ iterations is:

$$
\mathbb{E}[F(ar{w}_T) - F(w^*)] \leq rac{\|w_0 - w^*\|^2}{2 \eta T} + rac{\eta \sigma^2}{2}
$$

where $ar{w}_T = rac{1}{T} \sum_{t=1}^T w_t$. This gives an $\mathcal{O}(1/\sqrt{T})$ rate when optimally tuning $\eta \propto 1/\sqrt{T}$.

## Strong Convexity

If $F(w)$ is $\mu$-strongly convex:

$$
F(w') \geq F(w) + 
abla F(w)^T (w' - w) + rac{\mu}{2}\|w' - w\|^2
$$

Using a decaying step size $\eta_t = rac{2}{\mu(t+1)}$, the convergence rate improves to:

$$
\mathbb{E}[F(ar{w}_T) - F(w^*)] \leq rac{2 L \sigma^2}{\mu^2 T} = \mathcal{O}\left(rac{1}{T}ight)
$$

## Non-Convex Optimization and the PL Condition

In deep learning, objectives are highly non-convex. We often rely on the Polyak-Łojasiewicz (PL) condition to guarantee global convergence. A function satisfies the PL condition if $\exists \mu > 0$ such that:

$$
rac{1}{2} \|
abla F(w)\|^2 \geq \mu (F(w) - F(w^*))
$$

Under the PL condition and $L$-smoothness, gradient descent (and SGD with variance reduction) converges linearly to the global minimum, despite the lack of convexity. For standard SGD with step size $\eta_t = \eta$, we get:

$$
\mathbb{E}[F(w_t) - F(w^*)] \leq (1 - \mu \eta)^t (F(w_0) - F(w^*)) + rac{L \eta \sigma^2}{2 \mu}
$$

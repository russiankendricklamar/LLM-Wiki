---
title: Malliavin Calculus
category: Stochastic Calculus
order: 64
lang: en
slug: malliavin-calculus
---

# Malliavin Calculus

## Introduction
Malliavin calculus extends the calculus of variations to stochastic processes. It provides a notion of derivative for random variables defined on the Wiener space.

## Malliavin Derivative
Let $F = f(W(t_1), \dots, W(t_n))$ be a smooth cylindrical random variable, where $W$ is standard Brownian motion. The Malliavin derivative $D_t F$ is defined as:
$$ D_t F = \sum_{i=1}^n \frac{\partial f}{\partial x_i}(W(t_1), \dots, W(t_n)) \mathbf{1}_{[0, t_i]}(t) $$
The domain $\mathbb{D}^{1,2}$ is the closure of such functions under the norm $\|F\|_{1,2}^2 = \mathbb{E}[F^2] + \mathbb{E}[\int_0^T (D_t F)^2 dt]$.

## Clark-Ocone Formula
For any $F \in \mathbb{D}^{1,2}$, the Clark-Ocone formula provides an explicit representation in the Itô representation theorem:
$$ F = \mathbb{E}[F] + \int_0^T \mathbb{E}[D_t F \mid \mathcal{F}_t] dW(t) $$
This is crucial in finance for finding hedging portfolios.

## Applications: Greeks in Finance
In mathematical finance, Malliavin calculus is used to compute Greeks (sensitivities) without differentiating non-smooth payoff functions (like options). Using the integration by parts formula:
$$ \mathbb{E}[D F \cdot G] = \mathbb{E}[F \delta(G)] $$
where $\delta$ is the Skorokhod integral (adjoint of $D$). For Delta:
$$ \Delta = \frac{\partial}{\partial S_0} \mathbb{E}[e^{-rT} \Phi(S_T)] = \mathbb{E}[e^{-rT} \Phi(S_T) \pi] $$
where $\pi$ is a Malliavin weight.


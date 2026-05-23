---
title: HJM (Heath-Jarrow-Morton) Framework
category: Stochastic Calculus
order: 155
lang: en
slug: hjm-framework
---

# HJM (Heath-Jarrow-Morton) Framework

The Heath-Jarrow-Morton (HJM) framework models the evolution of the entire forward rate curve over time, rather than a single short rate, making it an infinite-dimensional SDE.

## Forward Rate Dynamics

Let $f(t, T)$ be the instantaneous forward rate at time $t$ for a maturity $T \ge t$. In the HJM framework, its real-world dynamics are:
$$ df(t, T) = \alpha(t, T) dt + \sum_{i=1}^d \sigma_i(t, T) dW_t^i $$
where $W_t$ is a $d$-dimensional Brownian motion.

## HJM Drift Condition

The fundamental theorem of asset pricing implies that under the risk-neutral measure $\mathbb{Q}$, the drift $\alpha(t, T)$ is completely determined by the volatility structure $\sigma(t, T)$ to preclude arbitrage:
$$ \alpha(t, T) = \sum_{i=1}^d \sigma_i(t, T) \int_t^T \sigma_i(t, u) du $$
Thus, under $\mathbb{Q}$, the dynamics are simply:
$$ df(t, T) = \left( \sigma(t, T) \int_t^T \sigma(t, u)^T du \right) dt + \sigma(t, T) dW_t^\mathbb{Q} $$

## Infinite-Dimensional Perspective

The HJM model can be viewed as an evolution equation in a Hilbert space of curves (the Musiela parameterization $x = T-t$):
$$ dr_t(x) = \left( \partial_x r_t(x) + \sigma(t, x) \int_0^x \sigma(t, u)^T du \right) dt + \sigma(t, x) dW_t^\mathbb{Q} $$
This formulation links interest rate modeling to [[spdes]] and infinite-dimensional [[stochastic-calculus]].

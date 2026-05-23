---
title: The Skorokhod Integral
category: Stochastic Calculus
order: 155
lang: en
slug: skorokhod-integral
---

# The Skorokhod Integral

The Skorokhod integral is a generalization of the Itô integral that allows for integration of non-adapted stochastic processes. It is the core operator in Malliavin calculus.

## Duality with Malliavin Derivative

The Skorokhod integral $\delta$ is defined as the adjoint operator of the Malliavin derivative $D$. For a process $u \in \text{Dom}(\delta)$ and a random variable $F \in \mathbb{D}^{1,2}$:
$$ \mathbb{E} \left[ \int_0^T u_t D_t F dt \right] = \mathbb{E} [F \delta(u)] $$
where $\delta(u) = \int_0^T u_t \delta W_t$. 

## Non-Adapted Integration

Unlike the standard [[ito-calculus]], where $u_t$ must be $\mathcal{F}_t$-measurable (adapted to the Brownian filtration), the Skorokhod integral does not require this. If $u$ is adapted and satisfies integrability conditions, the Skorokhod integral coincides with the Itô integral:
$$ \int_0^T u_t \delta W_t = \int_0^T u_t dW_t \quad (\text{if } u \text{ is adapted}) $$

## Anticipative Calculus

For non-adapted processes, the Skorokhod integral allows anticipation of the future of the Brownian motion. For example, if $F$ is an $\mathcal{F}_T$-measurable random variable and $h_t$ is a deterministic function, $\int_0^T F h_t \delta W_t = F \int_0^T h_t dW_t - \int_0^T D_t F h_t dt$. This is instrumental in insider trading models and the [[clark-ocone-formula]].

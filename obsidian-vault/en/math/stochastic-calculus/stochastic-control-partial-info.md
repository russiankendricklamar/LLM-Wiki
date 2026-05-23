---
title: Stochastic Control with Partial Information
category: Stochastic Calculus
order: 155
lang: en
slug: stochastic-control-partial-info
---

# Stochastic Control with Partial Information

In many realistic settings, the state of the controlled system is not fully observable; only noisy measurements are available. This leads to the complex field of Partially Observable Markov Decision Processes (POMDPs) in continuous time.

## Separation Principle

The classical approach relies on the Separation Principle, which splits the problem into two distinct stages:
1. **Filtering:** Use the nonlinear filtering equations (e.g., [[nonlinear-filtering]]) to compute the conditional distribution $\pi_t$ of the hidden state $X_t$ given observations $\mathcal{Y}_t$.
2. **Control:** Treat the measure-valued process $\pi_t$ as the new, fully observed state variable and solve the stochastic control problem over the space of probability measures.

## The Information State

The conditional measure $\pi_t$ is called the information state. The controlled Zakai equation governs its evolution:
$$ d\rho_t = \mathcal{L}^*(u_t) \rho_t dt + h(X_t, u_t) \rho_t dY_t $$
The corresponding HJB equation is a challenging infinite-dimensional PDE defined on the space of unnormalized measures.

## Dual Control

When the separation principle fails or is intractable, one employs "dual control" concepts. The controller must balance *exploitation* (driving the system to minimize cost) and *exploration* (exciting the system to improve estimation of the hidden state). This trade-off is critical in [[reinforcement-learning]] and adaptive control.

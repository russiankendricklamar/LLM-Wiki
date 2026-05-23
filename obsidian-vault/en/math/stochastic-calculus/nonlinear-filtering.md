---
title: Nonlinear Filtering: Zakai & Kushner-Stratonovich Equations
category: Stochastic Calculus
order: 155
lang: en
slug: nonlinear-filtering
---

# Nonlinear Filtering: Zakai & Kushner-Stratonovich Equations

Nonlinear filtering deals with estimating the state of a hidden Markov process $X_t$ given partial, noisy observations $Y_t$.

## Signal and Observation Model

$$ dX_t = b(X_t) dt + \sigma(X_t) dV_t \quad (\text{Signal}) $$
$$ dY_t = h(X_t) dt + dW_t \quad (\text{Observation}) $$
where $V_t$ and $W_t$ are independent Wiener processes. We seek the conditional distribution $\pi_t(dx) = \mathbb{P}(X_t \in dx | \mathcal{Y}_t)$, where $\mathcal{Y}_t = \sigma(Y_s, 0 \le s \le t)$.

## Kushner-Stratonovich Equation

The normalized conditional measure $\pi_t$ satisfies the Kushner-Stratonovich SPDE:
$$ d\pi_t(\phi) = \pi_t(\mathcal{L}\phi) dt + \left( \pi_t(h\phi) - \pi_t(h)\pi_t(\phi) \right) \left( dY_t - \pi_t(h) dt \right) $$
where $\mathcal{L}$ is the infinitesimal generator of $X_t$, and $d\nu_t = dY_t - \pi_t(h) dt$ is the innovation process. This equation is highly nonlinear due to the $\pi_t(h)$ terms.

## Zakai Equation

To linearize the problem, we introduce the unnormalized measure $\rho_t$, such that $\pi_t(\phi) = \frac{\rho_t(\phi)}{\rho_t(1)}$. The measure $\rho_t$ satisfies the Zakai SPDE:
$$ d\rho_t(\phi) = \rho_t(\mathcal{L}\phi) dt + \rho_t(h\phi) dY_t $$
In terms of density $p(t, x)$ (where $\rho_t(dx) = p(t, x)dx$), the Zakai equation is:
$$ dp = \mathcal{L}^* p dt + h p dY_t $$
where $\mathcal{L}^*$ is the formal adjoint of $\mathcal{L}$. This linear SPDE is more amenable to theoretical and numerical analysis using [[ito-calculus]].

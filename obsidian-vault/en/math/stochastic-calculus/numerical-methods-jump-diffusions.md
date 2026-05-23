---
title: Numerical Methods for Jump-Diffusions
category: Stochastic Calculus
order: 155
lang: en
slug: numerical-methods-jump-diffusions
---

# Numerical Methods for Jump-Diffusions

Simulating SDEs driven by Lévy processes (jump-diffusions) requires handling both the continuous Brownian component and the discontinuous jump component, demanding advanced numerical schemes.

## Euler-Maruyama with Jumps

Consider the jump-diffusion SDE:
$$ dX_t = a(X_t) dt + b(X_t) dW_t + \int c(X_{t-}, z) \tilde{N}(dt, dz) $$
where $\tilde{N}$ is a compensated Poisson random measure. The explicit Euler-Maruyama scheme for a time step $\Delta t$ is:
$$ X_{n+1} = X_n + a(X_n) \Delta t + b(X_n) \Delta W_n + \sum_{j=1}^{\Delta N_n} c(X_n, Z_j) - \lambda \mathbb{E}[c] \Delta t $$
where $\Delta W_n \sim \mathcal{N}(0, \Delta t)$, $\Delta N_n \sim \text{Poisson}(\lambda \Delta t)$, and $Z_j$ are the jump sizes. The strong convergence rate is typically $O(\Delta t^{1/2})$.

## Higher-Order Milstein Schemes

To achieve strong convergence of order $O(\Delta t)$, one must include stochastic Taylor expansions involving multiple stochastic integrals of the jump and continuous components:
$$ \int_{t_n}^{t_{n+1}} \int_{t_n}^s dW_u \tilde{N}(ds, dz) $$
Computing these cross-integrals is highly non-trivial and often involves complex Fourier inversion or truncated series expansions.

## Infinite Activity Lévy Noise

For processes with infinite jump activity (e.g., Variance Gamma or CGMY models), one cannot simulate all small jumps. A common truncation technique replaces small jumps with a corrected Brownian motion (Gaussian approximation), retaining explicit simulation only for jumps larger than a threshold $\epsilon$. This leverages the [[central-limit-theorem]] in the context of [[numerical-methods]].

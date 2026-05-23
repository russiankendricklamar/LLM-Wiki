---
title: Malliavin Greeks
category: Stochastic Calculus
order: 155
lang: en
slug: malliavin-greeks
---

# Malliavin Greeks

Malliavin calculus provides an elegant, pathwise approach to calculating derivative sensitivities (Greeks) in quantitative finance by reformulating differentiation with respect to initial conditions into an integration-by-parts on Wiener space.

## Integration by Parts on Wiener Space

For a payoff $F \in \mathbb{D}^{1,2}$ (the stochastic Sobolev space) and a Malliavin differentiable process $X_T^x$, classical finite differences struggle with discontinuous payoffs (like digital options). The Malliavin integration by parts formula states:
$$ \mathbb{E} [\partial_x f(X_T^x) G] = \mathbb{E} [f(X_T^x) \pi] $$
where the weight $\pi$ does not depend on the derivative of $f$, but rather involves the Skorokhod integral (the adjoint of the Malliavin derivative $D$).

## Delta and Gamma Weights

Let $X_t$ be a diffusion process. Its first variation process is $Y_t = \frac{\partial X_t}{\partial x}$. The Delta is given by:
$$ \Delta = \frac{\partial}{\partial x} \mathbb{E}[e^{-rT} \Phi(X_T)] = \mathbb{E}[e^{-rT} \Phi(X_T) \pi_\Delta] $$
For a standard Black-Scholes model, the weight simplifies to $\pi_\Delta = \frac{W_T}{x \sigma T}$.
Similarly, Gamma requires a second-order integration by parts:
$$ \Gamma = \mathbb{E}[e^{-rT} \Phi(X_T) \pi_\Gamma] $$
where $\pi_\Gamma$ is constructed using the Malliavin derivative of $\pi_\Delta$.

## Advantages

The Malliavin approach avoids differentiating the payoff function $\Phi$, making it highly efficient in Monte Carlo simulations for complex, non-smooth derivatives, deeply linking [[stochastic-calculus]] to computational finance.

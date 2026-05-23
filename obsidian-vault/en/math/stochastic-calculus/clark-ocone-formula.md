---
title: Clark-Ocone Formula
category: Stochastic Calculus
order: 155
lang: en
slug: clark-ocone-formula
---

# Clark-Ocone Formula

The Clark-Ocone formula explicitly identifies the integrand in the martingale representation theorem using the Malliavin derivative. It is a cornerstone result bridging stochastic analysis and mathematical finance.

## The Formula

Let $F \in \mathbb{D}^{1,2}$ be an $\mathcal{F}_T$-measurable square-integrable random variable, where $\mathbb{D}^{1,2}$ is the domain of the Malliavin derivative $D$. The Clark-Ocone formula states:
$$ F = \mathbb{E}[F] + \int_0^T \mathbb{E}[D_t F \mid \mathcal{F}_t] dW_t $$
This gives an explicit expression for the process $H_t = \mathbb{E}[D_t F \mid \mathcal{F}_t]$ that appears in the general representation $F = \mathbb{E}[F] + \int_0^T H_t dW_t$.

## Financial Hedging

In the context of the Black-Scholes model, if $F$ is a contingent claim, the replicating portfolio strategy $\Delta_t$ (number of shares to hold) is directly linked to the Malliavin derivative:
$$ \Delta_t = \frac{\mathbb{E}[D_t F \mid \mathcal{F}_t]}{\sigma S_t} $$
This provides a rigorous pathwise construction of the hedging portfolio for complex path-dependent derivatives, extending classical [[ito-calculus]] methods.

## Generalizations

The formula can be extended to jump processes and Lévy noise, requiring generalizations of the Malliavin derivative via difference operators on Poisson spaces.

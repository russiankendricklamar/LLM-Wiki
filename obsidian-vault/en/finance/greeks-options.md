---
title: "Option Greeks"
category: "Pricing Models"
order: 149
lang: "en"
---
# Option Greeks

The **Greeks** quantify how an option's price responds to infinitesimal changes in market variables. They are the partial derivatives of the option value $V(S, t, \sigma, r)$ with respect to each input and form the foundation of every options risk management system.

## First-Order Greeks

### Delta

$$
\Delta_C = \frac{\partial C}{\partial S} = N(d_1), \qquad \Delta_P = N(d_1) - 1
$$

Delta measures directional exposure. A call with $\Delta = 0.50$ behaves locally like holding half a share. For a portfolio $\Pi$, the total delta $\Delta_\Pi = \sum_i n_i \Delta_i$ is neutralised by trading $-\Delta_\Pi$ units of the underlying.

### Theta

$$
\Theta_C = -\frac{S N'(d_1)\sigma}{2\sqrt{T-t}} - rKe^{-r(T-t)}N(d_2)
$$

$$
\Theta_P = -\frac{S N'(d_1)\sigma}{2\sqrt{T-t}} + rKe^{-r(T-t)}N(-d_2)
$$

Theta is the cost of carrying a long option position. ATM options have the largest theta, which accelerates as $T \to 0$.

### Vega

$$
\mathcal{V} = \frac{\partial V}{\partial \sigma} = S\sqrt{T-t}\,N'(d_1)
$$

Vega is identical for calls and puts (by [[put-call-parity]]). ATM long-dated options carry the most vega. Since the [[black-scholes]] model assumes constant $\sigma$, vega is technically a model sensitivity rather than a true Greek.

### Rho

$$
\rho_C = K(T-t)e^{-r(T-t)}N(d_2), \qquad \rho_P = -K(T-t)e^{-r(T-t)}N(-d_2)
$$

Rho matters most for long-dated options and becomes significant when rates are volatile (see [[dv01]] for bond analogues).

## Second-Order Greeks

### Gamma

$$
\Gamma = \frac{\partial^2 V}{\partial S^2} = \frac{N'(d_1)}{S\sigma\sqrt{T-t}}
$$

Gamma is highest for ATM options near expiry. It measures the rate of change of delta and determines the convexity P&L from hedging.

### The Fundamental PDE Relationship

The [[black-scholes]] PDE directly links theta, gamma, and delta:

$$
\Theta + \tfrac{1}{2}\sigma^2 S^2 \Gamma + rS\Delta = rV
$$

This identity means a hedged portfolio's theta exactly offsets its gamma exposure at the risk-free rate. Long gamma positions pay theta; short gamma positions earn theta.

## Gamma-Theta Tradeoff and Delta Hedging

A delta-hedged portfolio has P&L over a small interval:

$$
\Delta P \approx \tfrac{1}{2}\Gamma(\Delta S)^2 + \Theta\,\Delta t
$$

**Gamma scalping** exploits this: buy options (long gamma), delta-hedge continuously, and profit when realised volatility exceeds implied. The daily P&L is approximately $\frac{1}{2}\Gamma S^2(\sigma_{\text{real}}^2 - \sigma_{\text{impl}}^2)\Delta t$.

In practice, discrete hedging introduces slippage. With rebalancing interval $\delta t$ and transaction cost $c$ per share, the hedging error variance scales as $\Gamma^2 S^2 \sigma^2 \delta t$, and total cost scales as $c \cdot \Gamma \sigma S \sqrt{T / \delta t}$.

## Higher-Order Greeks

| Greek | Definition | Interpretation |
|:------|:-----------|:---------------|
| Vanna | $\frac{\partial \Delta}{\partial \sigma} = \frac{\partial \mathcal{V}}{\partial S}$ | Delta sensitivity to vol; key for skew risk |
| Volga (Vomma) | $\frac{\partial^2 V}{\partial \sigma^2}$ | Convexity in volatility; drives smile pricing |
| Charm | $\frac{\partial \Delta}{\partial t}$ | Delta bleed; how delta drifts overnight |
| Speed | $\frac{\partial \Gamma}{\partial S}$ | Rate of gamma change; relevant for large moves |
| Color | $\frac{\partial \Gamma}{\partial t}$ | Gamma decay with time |

## Vega Hedging

Since the underlying has zero vega, neutralising vega requires trading another option. To hedge both delta and vega of position $A$, one solves:

$$
n_B \mathcal{V}_B = -\mathcal{V}_A, \qquad \Delta_{\text{new}} = \Delta_A + n_B \Delta_B + n_S = 0
$$

where $n_B$ is the quantity of hedge option $B$ and $n_S$ is the residual stock hedge. This is standard practice in volatility trading and critical in the [[heston-model]] framework where vol is stochastic.

## Greeks for Exotic Options

- **Digital options**: The delta of a cash-or-nothing call is $e^{-r\tau}N'(d_2)/(\sigma S\sqrt{\tau})$ — a spike near the barrier, creating severe hedging difficulty at expiry.
- **Barrier options**: Gamma is discontinuous at the barrier; knock-in/knock-out options have Greeks that diverge as $S \to H$, requiring careful risk limits.
- **Pin risk**: Near expiry, ATM options have delta oscillating between 0 and 1 with infinite gamma. Market makers must manage the risk that exercise decisions flip unpredictably.

## Practical Considerations

1. **Discrete hedging**: Real portfolios rebalance at discrete intervals, introducing tracking error proportional to $\Gamma \sigma S \sqrt{\delta t}$.
2. **Transaction costs**: The gamma-theta tradeoff must account for hedging costs; Leland (1985) derived an adjusted volatility $\hat{\sigma}^2 = \sigma^2(1 + \sqrt{2/\pi}\,c/(S\sigma\sqrt{\delta t}))$.
3. **Smile effects**: Black-Scholes Greeks assume flat vol. In practice, sticky-strike vs sticky-delta assumptions alter effective delta and gamma (see [[heston-model]]).
4. **Portfolio aggregation**: Greeks are additive across positions, enabling desk-level risk reporting via $\Delta$, $\Gamma$, $\mathcal{V}$, $\Theta$ columns.

## Related Topics
- [[black-scholes]]
- [[put-call-parity]]
- [[option-strategies]]
- [[heston-model]]
- [[geometric-brownian-motion]]

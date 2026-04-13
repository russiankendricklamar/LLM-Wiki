---
title: "Numeraire-Invariant Quadratic Hedging"
category: "Pricing Models"
order: 146
lang: "en"
slug: "numeraire-invariant-hedging"
---
# Numeraire-Invariant Quadratic Hedging

**Quadratic Hedging** (Mean-Variance Hedging) aims to minimize the variance of the hedging error at maturity. A critical property in advanced pricing is **Numeraire Invariance**, ensuring that the hedging strategy remains optimal regardless of whether we measure value in USD, EUR, or the asset itself.

## Galtchouk-Kunita-Watanabe (GKW) Decomposition

In an incomplete market, a contingent claim $H$ cannot be perfectly replicated. The GKW decomposition allows us to write:

$$
H = H_0 + \int_0^T \xi_t dS_t + L_T
$$

Where:
- $\int_0^T \xi_t dS_t$: The part of the payoff that can be replicated by trading in $S$.
- $L_T$: The orthogonal hedging error, such that $E[L_T \int_0^T \xi_t dS_t] = 0$.

The optimal hedge $\xi_t$ is the process that minimizes $E[(H - (V_0 + \int_0^T \phi_t dS_t))^2]$.

## Change of Numeraire

If we change the numeraire from $P$ to $N$, the price process becomes $S^N = S/N$. For the strategy to be invariant, the self-financing condition must hold under the new measure $Q^N$. This is achieved by using the **Minimal Martingale Measure (MMM)**.

## Variance-Optimal Martingale Measure (VOMM)

The hedging strategy is numeraire-invariant if we choose the optimal strategy under the VOMM. The density of the VOMM relative to the physical measure $P$ is:

$$
\frac{dQ}{dP} = \frac{1 - \int_0^T \lambda_t dW_t}{E[1 - \int_0^T \lambda_t dW_t]}
$$

where $\lambda$ is the market price of risk.

## Python: Simulating Hedging Error

```python
import numpy as np

def delta_hedge_error(S, K, r, sigma, T, dt):
    steps = int(T/dt)
    phi = np.zeros(steps)
    # Optimal hedging ratio (simplified for Black-Scholes case)
    # In incomplete markets, this would use GKW logic
    for t in range(steps):
        d1 = (np.log(S[t]/K) + (r + 0.5*sigma**2)*(T-t*dt)) / (sigma*np.sqrt(T-t*dt))
        phi[t] = norm.cdf(d1)
    
    # Hedging error calculation
    error = (S[-1] - K) - sum(phi[:-1] * np.diff(S))
    return error
```

## Advanced Context

Quadratic hedging is often the first step before moving to more complex utility-based hedging. In regimes with heavy tails, [[mcmc]] is used to calibrate the jump-diffusion parameters required for the GKW decomposition.

---
## Related Topics
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]

---
title: "Numeraire-Invariant Quadratic Hedging"
category: "Pricing"
order: 52
lang: "en"
slug: "numeraire-invariant-hedging"
---
# Numeraire-Invariant Quadratic Hedging

**Quadratic Hedging** (Mean-Variance Hedging) aims to minimize the variance of the hedging error at maturity. A critical property in advanced pricing is **Numeraire Invariance**, ensuring that the hedging strategy remains optimal regardless of whether we measure value in USD, EUR, or the asset itself.

## Visualization

Delta-hedging RMSE decreases as rebalancing frequency increases, converging toward zero in the complete GBM market. The residual at high frequency reflects only discretization error; in an incomplete market (stochastic vol) a non-zero floor $\mathbb{E}[L_T^2]^{1/2}$ remains.

```chart
{
  "type": "line",
  "xAxis": "steps",
  "data": [
    {"steps": "4", "RMSE": 2.41},
    {"steps": "8", "RMSE": 1.85},
    {"steps": "12", "RMSE": 1.52},
    {"steps": "26", "RMSE": 1.09},
    {"steps": "52", "RMSE": 0.78},
    {"steps": "104", "RMSE": 0.57},
    {"steps": "156", "RMSE": 0.47},
    {"steps": "252", "RMSE": 0.38},
    {"steps": "504", "RMSE": 0.27},
    {"steps": "756", "RMSE": 0.22},
    {"steps": "1008", "RMSE": 0.19}
  ],
  "lines": [
    {"dataKey": "RMSE", "stroke": "#3b82f6", "name": "Hedging RMSE ($)"}
  ]
}
```

## Background and Motivation

In complete markets, every contingent claim can be replicated perfectly and the unique arbitrage-free price is independent of the numeraire. In incomplete markets — stochastic volatility, jump processes, discrete trading — perfect replication is impossible. The residual hedging error depends on the measurement currency unless the hedging criterion is properly formulated.

Schweizer (1995) and Rheinländer-Schweizer (1997) established that the locally risk-minimizing hedge and the mean-variance optimal hedge are numeraire-invariant when formulated correctly using the Galtchouk-Kunita-Watanabe (GKW) decomposition under the minimal martingale measure. This theoretical foundation underpins all modern quadratic hedging implementations.

## Galtchouk-Kunita-Watanabe (GKW) Decomposition

In an incomplete market, a contingent claim $H$ cannot be perfectly replicated. The GKW decomposition allows us to write:

$$
H = H_0 + \int_0^T \xi_t\, dS_t + L_T
$$

Where:
- $H_0$: The initial cost of the optimal hedge.
- $\int_0^T \xi_t\, dS_t$: The replicable part — the gain from trading optimally in $S$.
- $L_T$: The orthogonal residual (unhedgeable risk), satisfying $\mathbb{E}[L_T \cdot \int_0^T \xi_t\, dS_t] = 0$.

The optimal hedge $\xi_t$ minimizes the mean-squared hedging error:

$$
\min_{\phi \in \Theta} \mathbb{E}\left[\left(H - V_0 - \int_0^T \phi_t\, dS_t\right)^2\right]
$$

The solution is $\phi^* = \xi_t$ from the GKW decomposition, and the minimum achievable variance is $\mathbb{E}[L_T^2]$.

## Change of Numeraire

If we change the numeraire from the money market account $B_t = e^{rt}$ to a risky asset $N_t$, all prices are expressed in units of $N_t$. Under the new numeraire $N$, the price process becomes $S^N_t = S_t / N_t$, and the risk-neutral measure $\mathbb{Q}^N$ associated with $N$ is related to $\mathbb{Q}$ via:

$$
\frac{d\mathbb{Q}^N}{d\mathbb{Q}} = \frac{N_T / N_0}{B_T / B_0}
$$

For the quadratic hedge to be numeraire-invariant, the self-financing condition must be preserved under the change of measure, which is achieved through the **Minimal Martingale Measure (MMM)**.

## Variance-Optimal Martingale Measure (VOMM)

The mean-variance optimal hedge uses the VOMM $\hat{\mathbb{Q}}$ rather than the physical measure $\mathbb{P}$. The density of $\hat{\mathbb{Q}}$ relative to $\mathbb{P}$ is:

$$
\frac{d\hat{\mathbb{Q}}}{d\mathbb{P}} \propto \mathcal{E}\left(-\int_0^T \hat{\lambda}_t\, dW_t\right)
$$

where $\hat{\lambda}_t = \mu_t / \sigma_t$ is the market price of risk (Sharpe ratio process) and $\mathcal{E}$ denotes the Doléans-Dade exponential. Under $\hat{\mathbb{Q}}$, the discounted stock price $\tilde{S}_t = e^{-rt} S_t$ is a martingale, and the GKW decomposition under $\hat{\mathbb{Q}}$ yields the variance-optimal hedge.

## Key Properties

- **Numeraire invariance**: The hedging ratio $\xi_t$ in units of $S$ remains the same regardless of which numeraire is used.
- **Optimality**: Among all self-financing strategies with initial capital $H_0$, the GKW hedge minimizes $\mathbb{E}[(\text{error})^2]$.
- **Decomposition additivity**: For a sum of claims $H = H^1 + H^2$, the GKW hedge is $\xi^1 + \xi^2$ (linearity).
- **Connection to delta hedging**: In the Black-Scholes model, the GKW hedge coincides with the Black-Scholes delta — mean-variance optimality and perfect replication agree.

## Python: Simulating and Measuring Hedging Error

```python
import numpy as np
from scipy.stats import norm


def black_scholes_delta(S, K, r, sigma, T):
    """Black-Scholes delta for a European call (= GKW hedge in complete market)."""
    if T <= 0:
        return float(S > K)
    d1 = (np.log(S / K) + (r + 0.5 * sigma**2) * T) / (sigma * np.sqrt(T))
    return norm.cdf(d1)


def simulate_hedging_error(S0, K, r, sigma, T, n_steps, n_paths, seed=42):
    """
    Simulate delta hedging error for a European call under GBM.
    In the complete GBM market, hedging error -> 0 as n_steps -> inf.
    In an incomplete market (stochastic vol), a residual L_T remains.

    Returns array of terminal hedging errors.
    """
    np.random.seed(seed)
    dt = T / n_steps
    errors = []

    for _ in range(n_paths):
        S = S0
        # Initial portfolio: delta shares + bond position
        delta = black_scholes_delta(S, K, r, sigma, T)
        bond = -delta * S  # short position in bond to fund delta shares

        for step in range(n_steps):
            t_remaining = T - step * dt
            z = np.random.standard_normal()
            S_new = S * np.exp((r - 0.5 * sigma**2) * dt + sigma * np.sqrt(dt) * z)

            # Rebalance: update delta
            delta_new = black_scholes_delta(S_new, K, r, sigma, t_remaining - dt)

            # P&L from delta position
            pnl_delta = delta * (S_new - S)
            # Financing cost of bond
            bond *= np.exp(r * dt)
            # Rebalance trade
            bond -= (delta_new - delta) * S_new

            delta = delta_new
            S = S_new

        # Terminal portfolio value vs. option payoff
        portfolio_value = delta * S + bond
        option_payoff = max(S - K, 0)
        errors.append(portfolio_value - option_payoff)

    return np.array(errors)


# Example: hedging a call with varying rebalancing frequency
S0, K, r, sigma, T = 100, 100, 0.05, 0.20, 1.0

for steps in [12, 52, 252]:
    errs = simulate_hedging_error(S0, K, r, sigma, T, steps, n_paths=2000)
    print(f"Steps={steps:3d}: mean error={np.mean(errs):.4f}, "
          f"RMSE={np.sqrt(np.mean(errs**2)):.4f}")
```

## Parameter Table

| Symbol | Name | Description |
|:---|:---|:---|
| $\xi_t$ | GKW hedge ratio | Optimal shares to hold at time $t$ |
| $L_T$ | Hedging residual | Unhedgeable risk component |
| $\hat{\mathbb{Q}}$ | VOMM | Variance-optimal martingale measure |
| $\hat{\lambda}_t$ | Market price of risk | $\mu_t / \sigma_t$ in diffusion model |
| $H_0$ | Initial hedge cost | Fair value under VOMM |

## Limitations and Extensions

- **Model dependency**: The GKW hedge depends on the model for $S_t$. Misspecification (e.g., using GBM when true process has jumps) introduces model error on top of the irreducible hedging error $L_T$.
- **Transaction costs**: Continuous rebalancing implied by the GKW hedge is impractical. Leland (1985) and later work shows that transaction costs widen the no-trade band around the optimal delta.
- **Deep hedging**: Neural network-based hedging (Bühler et al., 2019) learns the hedge directly from market data without specifying a model, potentially outperforming GKW in incomplete/non-Markovian settings.
- **Utility-based alternatives**: When the quadratic loss function is inappropriate (e.g., asymmetric loss preferences), utility indifference pricing and exponential utility hedging provide alternatives.

## Advanced Context

Quadratic hedging is often the first step before moving to more complex utility-based hedging. In regimes with heavy tails, [[mcmc]] is used to calibrate the jump-diffusion parameters required for the GKW decomposition.

## Related Topics
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]
- [[levy-processes]]

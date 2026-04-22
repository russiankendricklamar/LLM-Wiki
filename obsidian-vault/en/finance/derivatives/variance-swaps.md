---
slug: "/finance/variance-swaps"
title: "Variance Swaps and Volatility Risk Premium"
category: "Pricing"
order: 103
lang: "en"
---

# Variance Swaps and Volatility Risk Premium

A **variance swap** pays the difference between realized variance and the pre-agreed strike. It is the purest instrument for trading volatility without delta-hedging. The fair strike can be replicated model-free from a portfolio of options.

## Payoff

$$
\text{Payoff} = N_{\text{var}} \cdot (RV - K_{\text{var}})
$$

where $RV = \frac{252}{n}\sum_{i=1}^n \ln^2(S_i/S_{i-1})$ is annualized realized variance.

## Carr-Madan Model-Free Replication

The fair variance strike equals:

$$
K_{\text{var}} = \frac{2}{T} e^{rT} \left[\int_0^F \frac{P(K)}{K^2}\,dK + \int_F^\infty \frac{C(K)}{K^2}\,dK\right]
$$

This is model-free: only market option prices enter, no distributional assumptions.

## Volatility Risk Premium

$$
\text{VRP} = \sigma_{\text{impl}}^2 - \mathbb{E}[RV]
$$

Historically VRP $< 0$ (implied vol exceeds realized vol) — sellers of variance earn a premium for absorbing left-tail risk.

## Implementation

```python
import numpy as np
import pandas as pd

def realized_variance(log_returns: np.ndarray, freq: int = 252) -> float:
    """Annualized realized variance from log returns."""
    return float(freq * np.mean(log_returns**2))


def carr_madan_var_strike(calls: np.ndarray, puts: np.ndarray,
                           strikes: np.ndarray, F: float,
                           T: float, r: float) -> float:
    """
    Model-free variance strike via Carr-Madan replication.
    calls, puts: option prices at strikes
    F: forward price
    """
    dk = np.diff(strikes)
    K_mid = 0.5 * (strikes[:-1] + strikes[1:])
    C_mid = 0.5 * (calls[:-1] + calls[1:])
    P_mid = 0.5 * (puts[:-1] + puts[1:])

    otm_puts_mask = K_mid <= F
    otm_calls_mask = K_mid > F

    integral = (np.sum(P_mid[otm_puts_mask] / K_mid[otm_puts_mask]**2 * dk[otm_puts_mask])
                + np.sum(C_mid[otm_calls_mask] / K_mid[otm_calls_mask]**2 * dk[otm_calls_mask]))
    return (2 / T) * np.exp(r * T) * integral


def vrp_series(implied_vars: pd.Series, realized_vars: pd.Series,
               window: int = 21) -> pd.Series:
    """Rolling Volatility Risk Premium (annualized bps)."""
    rv_future = realized_vars.shift(-window)
    vrp = implied_vars - rv_future
    return vrp * 10_000  # in bps of variance


def vol_swap_approx(var_strike: float, skew: float,
                    convexity: float) -> float:
    """
    Vol swap strike ≈ sqrt(K_var) * (1 - convexity/(8*K_var))
    Corrects for Jensen's inequality.
    """
    sigma = np.sqrt(var_strike)
    return sigma - convexity / (8 * sigma)


def variance_swap_pnl(notional_vega: float, K_var: float,
                       realized_var: float) -> dict:
    """P&L of a variance swap position."""
    n_var = notional_vega / (2 * np.sqrt(K_var))  # vega notional → var notional
    pnl = n_var * (realized_var - K_var)
    return {
        'var_notional': n_var,
        'realized_var': realized_var,
        'strike_var': K_var,
        'pnl': pnl,
        'realized_vol': np.sqrt(realized_var),
        'strike_vol': np.sqrt(K_var),
    }
```

## Var Swap vs Vol Swap vs VIX Futures

| Instrument | Payoff | Model-free | Linear in vol |
|-----------|--------|-----------|--------------|
| Variance swap | $RV - K_{var}$ | Yes | No |
| Vol swap | $\sqrt{RV} - K_{vol}$ | No | Yes |
| VIX future | $\text{VIX} - F$ | Yes | Approximately |

## Related Articles

- [[dupire-local-vol|Dupire Local Vol]] — model-free connection
- [[heston-model|Heston Model]] — analytic var swap formula
- [[bipower-variation|Bipower Variation]] — jump-robust realized variance
- [[volatility-forecasting|Volatility Forecasting]] — predicting RV

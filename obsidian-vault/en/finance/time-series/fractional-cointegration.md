---
title: "Fractional Cointegration"
category: "Time Series"
order: 25
lang: "en"
slug: "fractional-cointegration"
---

# Fractional Cointegration

Standard [[pairs-trading|Cointegration]] (Engle-Granger) works on a binary premise: time series are either integrated of order 1 ($I(1)$, random walks) or order 0 ($I(0)$, stationary). However, real financial markets are rarely this black-and-white. **Fractional Cointegration** expands this framework to allow for **Long Memory**, using the mathematics of fractional calculus.

## The Long Memory Problem

Many financial spreads (like the spread between volatility indices or sovereign bonds) do not snap back to zero quickly ($I(0)$), nor do they wander off to infinity forever ($I(1)$). They exhibit **long-range dependence**—they are mean-reverting, but the reversion takes a very long time, and the autocorrelations decay according to a power law rather than an exponential curve.

These series are integrated of a fractional order $I(d)$, where $0 < d < 1$.

## Fractional Cointegration Mechanism

Two non-stationary series $X_t$ and $Y_t$ (both $I(d_1)$) are **fractionally cointegrated** if there exists a linear combination $Z_t = X_t - \beta Y_t$ that is integrated of a lower order $I(d_2)$, such that $d_2 < d_1$.

- If $d_2 < 0.5$, the spread is covariance-stationary and mean-reverting.
- If $0.5 \leq d_2 < 1$, the spread is non-stationary but still mean-reverting (it will eventually cross zero, but its variance grows over time).

## ARFIMA Models

To model the spread, quants use **ARFIMA** (Autoregressive Fractionally Integrated Moving Average) models. The fractional differencing operator $(1-L)^d$ is expanded using a binomial series:
$$(1-L)^d = 1 - dL + \frac{d(d-1)}{2!}L^2 - \dots$$
This infinite series proves that the current value of the spread depends on its *entire infinite past*, not just the last few days (unlike standard ARMA).

## Trading Application

Why do elite funds use this?
Standard pairs trading triggers a signal when a spread deviates by $2\sigma$. If the spread is fractionally integrated ($d \approx 0.8$), it might stay deviated for 6 months. A standard algorithm will bleed to death paying financing costs while waiting for the reversion.
By estimating the fractional parameter $d$, an algorithm can accurately predict the **half-life of mean reversion** and adjust its capital allocation and stop-loss levels, trading only the pairs that will revert within a profitable timeframe.

## Visualization: Decay Speeds

```chart
{
  "type": "line",
  "xAxis": "lag",
  "data": [
    {"lag": 1, "arma": 0.8, "arfima": 0.8},
    {"lag": 5, "arma": 0.3, "arfima": 0.6},
    {"lag": 10, "arma": 0.1, "arfima": 0.5},
    {"lag": 20, "arma": 0.01, "arfima": 0.4},
    {"lag": 50, "arma": 0.0, "arfima": 0.25}
  ],
  "lines": [
    {"dataKey": "arma", "stroke": "#ef4444", "name": "Standard I(0) Exponential Decay"},
    {"dataKey": "arfima", "stroke": "#3b82f6", "name": "Fractional I(d) Power-Law Decay"}
  ]
}
```
*Standard models (red) assume shocks are forgotten quickly. Fractional models (blue) show that market shocks have a "long memory" and affect the spread far into the future.*

## Related Topics

[[pairs-trading]] — the standard integer version  
[[hurst-exponent]] — the parameter related to fractional integration ($d = H - 0.5$)  
[[fractional-brownian-motion]] — the continuous-time analog
---

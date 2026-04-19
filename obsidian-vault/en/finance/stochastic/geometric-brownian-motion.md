---
title: "Geometric Brownian Motion"
category: "Stochastic Processes"
order: 2
lang: "en"
slug: "geometric-brownian-motion"
---
# Geometric Brownian Motion

**Geometric Brownian Motion (GBM)** is a continuous-time stochastic process in which the logarithm of the randomly varying quantity follows a Brownian motion with drift. It is the foundational model for equity prices in the Black-Scholes framework and the benchmark against which all more complex models are compared.

## Prerequisites

[[brownian-motion]]

## Background

GBM was introduced into finance by Paul Samuelson in 1965 and formalised by Black and Scholes (1973) and Merton (1973). Its key appeal is the combination of mathematical tractability (closed-form solutions exist for European options) and the economically natural property that prices remain strictly positive. The model underpins the entire edifice of continuous-time derivatives pricing.

## The Stochastic Differential Equation

The dynamics of an asset price $S_t$ following GBM are given by:

$$
dS_t = \mu S_t\, dt + \sigma S_t\, dW_t
$$

Where:
- $\mu$ is the drift coefficient (instantaneous expected return, $\mu \in \mathbb{R}$)
- $\sigma > 0$ is the volatility (instantaneous standard deviation of returns)
- $W_t$ is a standard Brownian motion under the real-world measure $\mathbb{P}$

The SDE is linear in $S_t$, which ensures proportional increments: a 1% move is equally likely regardless of the price level.

## Itô's Lemma and the Closed-Form Solution

Applying Itô's Lemma to $f(S_t) = \ln S_t$:

$$
d\ln S_t = \left(\mu - \frac{1}{2}\sigma^2\right)dt + \sigma\, dW_t
$$

The $-\frac{1}{2}\sigma^2$ term is the **Itô correction** — the convexity adjustment from Jensen's inequality. Integrating from 0 to $T$:

$$
S_T = S_0 \exp\!\left[\left(\mu - \frac{1}{2}\sigma^2\right)T + \sigma W_T\right]
$$

Since $W_T \sim \mathcal{N}(0, T)$, the log-return $\ln(S_T/S_0)$ is normally distributed:

$$
\ln\frac{S_T}{S_0} \sim \mathcal{N}\!\left(\left(\mu - \frac{1}{2}\sigma^2\right)T,\ \sigma^2 T\right)
$$

This means $S_T$ is **log-normally distributed** with:
- $\mathbb{E}[S_T] = S_0 e^{\mu T}$
- $\text{Var}(S_T) = S_0^2 e^{2\mu T}(e^{\sigma^2 T} - 1)$

## Risk-Neutral Pricing

Under the risk-neutral measure $\mathbb{Q}$ (Girsanov's theorem), the drift $\mu$ is replaced by the risk-free rate $r$:

$$
dS_t = r S_t\, dt + \sigma S_t\, d\tilde{W}_t
$$

The price of a European call option with strike $K$ and maturity $T$ is then the discounted risk-neutral expectation:

$$
C = e^{-rT}\,\tilde{\mathbb{E}}\!\left[\max(S_T - K, 0)\right] = S_0 N(d_1) - K e^{-rT} N(d_2)
$$

with $d_1 = \frac{\ln(S_0/K) + (r + \sigma^2/2)T}{\sigma\sqrt{T}}$, $d_2 = d_1 - \sigma\sqrt{T}$ — the Black-Scholes formula.

## Key Statistical Properties

| Property | GBM Value |
|----------|-----------|
| $\mathbb{E}[\ln S_T/S_0]$ | $(\mu - \sigma^2/2)T$ |
| $\text{Var}[\ln S_T/S_0]$ | $\sigma^2 T$ |
| Skewness of $\ln$-returns | 0 (Gaussian) |
| Excess kurtosis of $\ln$-returns | 0 (Gaussian) |
| Auto-correlation of returns | 0 (Markovian) |
| Price positivity | Guaranteed ($S_t > 0$ a.s.) |

## Euler-Maruyama Discretization

For simulation, the SDE is discretized over steps $\Delta t = T/N$:

$$
S_{t+\Delta t} = S_t \exp\!\left[\left(\mu - \frac{1}{2}\sigma^2\right)\Delta t + \sigma\sqrt{\Delta t}\,Z_t\right], \quad Z_t \sim \mathcal{N}(0,1)
$$

This exact discretization (exploiting the closed form) has no discretization error — only Monte Carlo sampling error.

## Python Implementation

```python
import numpy as np
import pandas as pd

def simulate_gbm(
    S0: float,
    mu: float,
    sigma: float,
    T: float,
    n_steps: int,
    n_paths: int = 1,
    seed: int = 42,
) -> np.ndarray:
    """
    Simulate GBM paths using the exact discretization.

    Returns array of shape (n_paths, n_steps + 1).
    """
    rng = np.random.default_rng(seed)
    dt = T / n_steps
    drift = (mu - 0.5 * sigma ** 2) * dt
    diffusion = sigma * np.sqrt(dt)

    Z = rng.standard_normal((n_paths, n_steps))
    log_returns = drift + diffusion * Z
    log_price = np.concatenate(
        [np.zeros((n_paths, 1)), np.cumsum(log_returns, axis=1)], axis=1
    )
    return S0 * np.exp(log_price)   # shape (n_paths, n_steps + 1)

def gbm_statistics(paths: np.ndarray, T: float) -> dict:
    """Compute mean path and 95% confidence band."""
    mean_path = paths.mean(axis=0)
    std_path  = paths.std(axis=0)
    return {
        "mean": mean_path,
        "upper_95": mean_path + 1.96 * std_path,
        "lower_95": mean_path - 1.96 * std_path,
    }

# --- Example: 1 year, daily steps, 1000 paths ---
paths = simulate_gbm(S0=100, mu=0.08, sigma=0.20, T=1.0, n_steps=252, n_paths=1000)
stats = gbm_statistics(paths, T=1.0)
print(f"Mean terminal price: {stats['mean'][-1]:.2f}")
print(f"95% band at T=1:     [{stats['lower_95'][-1]:.2f}, {stats['upper_95'][-1]:.2f}]")
```

## Simulated Path Fan

```chart
{
  "type": "line",
  "xAxis": "day",
  "data": [
    {"day": "0",   "p10": 100,  "p50": 100,  "p90": 100},
    {"day": "60",  "p10": 92,   "p50": 102,  "p90": 113},
    {"day": "120", "p10": 86,   "p50": 105,  "p90": 128},
    {"day": "180", "p10": 81,   "p50": 108,  "p90": 144},
    {"day": "240", "p10": 77,   "p50": 111,  "p90": 161},
    {"day": "252", "p10": 76,   "p50": 112,  "p90": 165}
  ],
  "lines": [
    {"dataKey": "p10", "stroke": "#ef4444", "name": "10th Percentile"},
    {"dataKey": "p50", "stroke": "#3b82f6", "name": "Median Path"},
    {"dataKey": "p90", "stroke": "#10b981", "name": "90th Percentile"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Range |
|--------|------|-------------|---------------|
| $S_0$ | Initial price | Starting asset price | Any $>0$ |
| $\mu$ | Drift | Annualised expected return | 0–0.15 for equities |
| $\sigma$ | Volatility | Annualised standard deviation | 0.10–0.40 for equities |
| $r$ | Risk-free rate | Used in risk-neutral pricing | 0–0.06 |
| $T$ | Time horizon | Maturity in years | 0.01–30 |
| $\Delta t$ | Time step | Discretization interval | $1/252$ (daily) |

## Limitations and Extensions

- **Constant volatility**: GBM assumes $\sigma$ is time-invariant. Empirically, volatility is stochastic (smile/skew in options markets). The [[heston-model]] and SABR model address this.
- **Gaussian log-returns**: Empirical daily returns exhibit excess kurtosis (fat tails) and negative skewness. [[levy-processes]] (e.g., Variance Gamma, Normal Inverse Gaussian) extend GBM with jumps and heavier tails.
- **No mean reversion**: GBM is not mean-reverting, making it unsuitable for interest rates, spreads, or volatility. The Ornstein-Uhlenbeck (OU) process or CIR model is used instead.
- **Continuous paths**: GBM has no jumps; jump-diffusion models (Merton 1976, Kou 2002) add a compound Poisson process to capture sudden crashes.
- **Correlation structure**: Multi-asset GBM uses a correlated Brownian motion $dW_t^i\, dW_t^j = \rho_{ij}\, dt$, but assumes constant correlation — a limitation in crisis periods.

## Practical Applications

1. **Options pricing**: The Black-Scholes formula assumes GBM; it remains the industry benchmark despite its limitations.
2. **Monte Carlo simulation**: GBM paths are the default for pricing path-dependent derivatives (Asian options, barrier options, lookbacks).
3. **Portfolio simulation**: Long-horizon wealth projections and retirement planning models use GBM to generate equity return scenarios.
4. **Real options analysis**: Capital budgeting decisions (invest now vs. wait) are modelled as options on GBM-driven project values.

## Related Topics
- [[brownian-motion]]
- [[black-scholes]]
- [[volatility-forecasting]]
- [[levy-processes]]
- [[heston-model]]

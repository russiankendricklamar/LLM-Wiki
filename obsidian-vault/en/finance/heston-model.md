---
title: "Heston Model"
category: "Quantitative Finance"
order: 3
lang: "en"
---
# Heston Model

The **Heston model** is a mathematical model that describes the evolution of the volatility of an underlying asset. It is a stochastic volatility model, meaning that the volatility of the asset is not constant (as in Black-Scholes) but is itself a stochastic process.

## Dynamics (SDEs)

The model assumes that the stock price $S_t$ and its variance $v_t$ follow the following system of Stochastic Differential Equations (SDEs):

$$
\begin{aligned}
dS_t &= \mu S_t dt + \sqrt{v_t} S_t dW_t^S \\
dv_t &= \kappa (\theta - v_t) dt + \xi \sqrt{v_t} dW_t^v
\end{aligned}
$$

Where the two Wiener processes are correlated: $d[W^S, W^v]_t = \rho dt$.

### Parameters:
- $\mu$: Expected return (drift) of the asset.
- $\kappa$: Rate of mean reversion for the variance.
- $\theta$: Long-term average variance (mean level).
- $\xi$: Volatility of volatility (vol-of-vol).
- $\rho$: Correlation between the asset price and its volatility.

## The Feller Condition

To ensure that the variance $v_t$ stays strictly positive (never hits zero), the parameters must satisfy the **Feller condition**:

$$
2\kappa\theta > \xi^2
$$

If this condition is violated, the variance process can reach zero, though it remains non-negative.

## Python: Heston Path Simulation

We use the Euler-Maruyama discretization to simulate the Heston dynamics:

```python
import numpy as np

def simulate_heston(S0, v0, T, r, kappa, theta, xi, rho, steps):
    dt = T / steps
    S = np.zeros(steps)
    v = np.zeros(steps)
    S[0], v[0] = S0, v0
    
    for t in range(1, steps):
        # Correlated Brownian motions
        z1 = np.random.normal(0, 1)
        z2 = rho * z1 + np.sqrt(1 - rho**2) * np.random.normal(0, 1)
        
        # Update variance (ensuring it stays non-negative)
        v[t] = v[t-1] + kappa * (theta - v[t-1]) * dt + xi * np.sqrt(max(v[t-1], 0)) * np.sqrt(dt) * z2
        v[t] = max(v[t], 0)
        
        # Update stock price
        S[t] = S[t-1] * np.exp((r - 0.5 * v[t-1]) * dt + np.sqrt(v[t-1] * dt) * z1)
        
    return S, v
```

## Volatility Dynamics Visualization

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "0", "price": 100, "vol": 0.20},
    {"time": "1", "price": 102, "vol": 0.22},
    {"time": "2", "price": 101, "vol": 0.25},
    {"time": "3", "price": 98, "vol": 0.30},
    {"time": "4", "price": 95, "vol": 0.35},
    {"time": "5", "price": 97, "vol": 0.32},
    {"time": "6", "price": 100, "vol": 0.28},
    {"time": "7", "price": 103, "vol": 0.24},
    {"time": "8", "price": 105, "vol": 0.21},
    {"time": "9", "price": 104, "vol": 0.20}
  ],
  "lines": [
    {"dataKey": "price", "stroke": "#3b82f6", "name": "Asset Price"},
    {"dataKey": "vol", "stroke": "#ef4444", "name": "Instantaneous Vol", "yAxisId": "right"}
  ]
}
```

## Comparison with Black-Scholes

| Feature | Black-Scholes | Heston Model |
| :--- | :--- | :--- |
| **Volatility** | Constant | Stochastic (Mean-reverting) |
| **Asset Distribution** | Log-normal | Non-lognormal (Heavy tails) |
| **Volatility Smile** | Flat | Captured via $\rho$ and $\xi$ |
| **Complexity** | Low (Analytic) | High (Semi-analytic) |

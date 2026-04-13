---
title: "Geometric Brownian Motion"
category: "Stochastic Processes"
order: 171
lang: "en"
slug: "geometric-brownian-motion"
---
# Geometric Brownian Motion

**Geometric Brownian Motion (GBM)** is a continuous-time stochastic process in which the logarithm of the randomly varying quantity follows a Brownian motion with drift.

## The SDE

The dynamics of an asset price $S_t$ following GBM are given by:

$$
dS_t = \mu S_t dt + \sigma S_t dW_t
$$

Where:
- $\mu$ is the drift coefficient (expected return)
- $\sigma$ is the volatility
- $W_t$ is a standard Brownian motion

## Ito's Lemma Solution
Using Ito's Lemma, the solution to the SDE is:

$$
S_t = S_0 \exp\left( (\mu - \frac{1}{2}\sigma^2)t + \sigma W_t \right)
$$

This ensures that the price $S_t$ remains positive, making it a foundational model for equity prices in the **Black-Scholes** framework.

## Python Implementation

```python
import numpy as np

def simulate_gbm(S0, mu, sigma, T, n_steps):
    dt = T / n_steps
    W = np.random.normal(0, np.sqrt(dt), n_steps)
    W = np.cumsum(W)
    t = np.linspace(dt, T, n_steps)
    
    S = S0 * np.exp((mu - 0.5 * sigma**2) * t + sigma * W)
    return np.concatenate([[S0], S])
```

## Related Topics
- [[brownian-motion]]
- [[black-scholes]]
- [[volatility-forecasting]]
- [[levy-processes]]

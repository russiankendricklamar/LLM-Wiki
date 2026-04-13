---
title: "Lévy Processes"
category: "Quantitative Finance"
order: 2
lang: "en"
---
# Lévy Processes

A **Lévy process** is a stochastic process with independent and stationary increments. It represents the continuous-time analog of a random walk. Lévy processes are fundamental in quantitative finance for modeling asset prices that exhibit jumps and "fat tails."

## Definition and Properties

A stochastic process $X = \{X_t : t \ge 0\}$ is a Lévy process if:
1. $X_0 = 0$ almost surely.
2. **Independent increments**: For any $s < t$, $X_t - X_s$ is independent of $\{X_u : u \le s\}$.
3. **Stationary increments**: For any $s < t$, $X_t - X_s$ is equal in distribution to $X_{t-s}$.
4. **Continuity in probability**: For any $\epsilon > 0$, $\lim_{h \to 0} P(|X_{t+h} - X_t| > \epsilon) = 0$.

## The Lévy-Khintchine Representation

Every Lévy process is uniquely determined by its characteristic exponent $\psi(\theta)$, defined by $E[e^{i\theta X_t}] = e^{t\psi(\theta)}$. The Lévy-Khintchine formula states:

$$
\psi(\theta) = i\gamma\theta - \frac{1}{2}\sigma^2\theta^2 + \int_{\mathbb{R}\setminus\{0\}} (e^{i\theta x} - 1 - i\theta x \mathbf{1}_{|x|<1}) \nu(dx)
$$

Where:
- $\gamma$ is the drift parameter.
- $\sigma^2$ is the Gaussian (diffusion) variance.
- $\nu$ is the Lévy measure, describing the jump intensity and size.

## Key Examples

- **Wiener Process (Brownian Motion)**: $\nu = 0$. The only continuous Lévy process.
- **Poisson Process**: $\sigma = 0$, $\nu = \lambda \delta_1$. Represents counting events.
- **Compound Poisson Process**: Jumps occur at Poisson-distributed times with random sizes.

## Python: Jump-Diffusion Simulation

Lévy processes are often simulated using the Merton Jump-Diffusion model:

```python
import numpy as np

def simulate_jump_diffusion(S0, T, r, sigma, lamb, mu_j, sigma_j, steps):
    dt = T / steps
    t = np.linspace(0, T, steps)
    
    # Brownian component
    W = np.random.standard_normal(steps)
    
    # Jump component
    N = np.random.poisson(lamb * dt, steps)
    J = np.where(N > 0, np.random.normal(mu_j, sigma_j, steps), 0)
    
    # Log-return calculation
    log_S = np.zeros(steps)
    log_S[0] = np.log(S0)
    
    for i in range(1, steps):
        drift = (r - 0.5 * sigma**2 - lamb * (np.exp(mu_j + 0.5 * sigma_j**2) - 1)) * dt
        diffusion = sigma * np.sqrt(dt) * W[i]
        jumps = N[i] * J[i]
        log_S[i] = log_S[i-1] + drift + diffusion + jumps
        
    return t, np.exp(log_S)
```

## Jump Process Visualization

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "0.0", "price": 100.0},
    {"time": "0.1", "price": 101.2},
    {"time": "0.2", "price": 99.8},
    {"time": "0.3", "price": 100.5},
    {"time": "0.4", "price": 106.2},
    {"time": "0.5", "price": 105.4},
    {"time": "0.6", "price": 104.1},
    {"time": "0.7", "price": 95.8},
    {"time": "0.8", "price": 96.5},
    {"time": "0.9", "price": 97.2},
    {"time": "1.0", "price": 98.0}
  ],
  "lines": [
    {"dataKey": "price", "stroke": "#3b82f6", "name": "Asset Price (with Jumps)"}
  ]
}
```

## Model Parameters

| Component | Description | Financial Impact |
| :--- | :--- | :--- |
| **Diffusion** | Continuous price movement | Normal market volatility |
| **Jumps** | Sudden price discontinuities | Market shocks / news |
| **Drift** | Average rate of return | Expected growth |

---
title: "Cox Process (Doubly Stochastic)"
category: "Stochastic Processes"
order: 18
lang: "en"
---
# Cox Process (Doubly Stochastic)

A **Cox process**, also known as a **doubly stochastic Poisson process**, is an extension of the Poisson process where the intensity (lambda) is itself a stochastic process.

In a standard Poisson process, the intensity $\lambda$ is either a constant or a deterministic function of time. In a Cox process, $\lambda(t)$ is a random process, allowing the model to capture situations where the "density" of events (e.g., defaults or trades) changes unpredictably.

## Mathematical Definition

Let $(\lambda(t))_{t \ge 0}$ be a non-negative stochastic process. A point process $N(t)$ is a Cox process if, conditional on a realization of the intensity process $(\lambda_s)_{s \ge 0}$, the process $N(t)$ is an inhomogeneous Poisson process.

The probability of observing exactly $k$ events in the interval $(s, t]$, given the intensity path, is:

$$
P(N_t - N_s = k | (\lambda_u)_{s \le u \le t}) = \frac{(\int_s^t \lambda_u du)^k}{k!} e^{-\int_s^t \lambda_u du}
$$

## Applications in Finance

1.  **Credit Risk (Intensity-based models)**: Modeling the time of default. The intensity $\lambda(t)$ is interpreted as the "instantaneous probability of default" or hazard rate. A spike in $\lambda(t)$ reflects an increased risk of a credit event.
2.  **High-Frequency Trading (HFT)**: Modeling trade arrivals. Transaction intensity often clusters and increases during periods of high volatility or market stress.
3.  **Insurance**: Modeling claims arrivals where the underlying risk (e.g., natural disasters) is influenced by other stochastic environmental factors.

## Common Intensity Models

A popular choice for $\lambda(t)$ is the **CIR (Cox-Ingersoll-Ross)** process, which ensures the intensity remains non-negative and exhibits mean reversion:

$$
d\lambda_t = \kappa(\theta - \lambda_t)dt + \sigma\sqrt{\lambda_t}dW_t
$$

## Python: Simulating a Cox Process with CIR Intensity

```python
import numpy as np

def simulate_cox_process(T, steps, kappa, theta, sigma, lambda0):
    dt = T / steps
    lambdas = np.zeros(steps)
    lambdas[0] = lambda0
    
    # 1. Simulate the intensity process (CIR)
    for t in range(1, steps):
        dz = np.random.normal(0, np.sqrt(dt))
        d_lambda = kappa * (theta - lambdas[t-1]) * dt + sigma * np.sqrt(max(lambdas[t-1], 0)) * dz
        lambdas[t] = max(lambdas[t-1] + d_lambda, 0)
    
    # 2. Simulate event arrivals (Poisson)
    events = np.random.poisson(lambdas * dt)
    arrival_times = np.where(events > 0)[0] * dt
    
    return lambdas, arrival_times

# Parameters
L, arrivals = simulate_cox_process(T=1.0, steps=1000, kappa=2.0, theta=0.05, sigma=0.1, lambda0=0.02)
```

## Intensity and Arrivals Visualization

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "0.0", "lambda": 0.02, "event": 0},
    {"time": "0.2", "lambda": 0.05, "event": 1},
    {"time": "0.4", "lambda": 0.03, "event": 0},
    {"time": "0.6", "lambda": 0.08, "event": 1},
    {"time": "0.8", "lambda": 0.06, "event": 1},
    {"time": "1.0", "lambda": 0.04, "event": 0}
  ],
  "lines": [
    {"dataKey": "lambda", "stroke": "#3b82f6", "name": "Intensity λ(t)"},
    {"dataKey": "event", "stroke": "#ef4444", "name": "Event (Default/Trade)", "yAxisId": "right"}
  ]
}
```

## Comparison

| Property | Poisson Process | Cox Process |
| :--- | :--- | :--- |
| **Intensity** | Constant / Deterministic | Stochastic Process |
| **Variance** | Equal to Mean | Greater than Mean (Overdispersion) |
| **Use Case** | Simple event flows | Market stress, credit events, HFT clustering |
---


## Related Topics
- [[levy-processes]]
- [[cs01]]

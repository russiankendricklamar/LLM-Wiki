---
title: "Brownian Motion"
category: "Stochastic Processes"
order: 170
lang: "en"
slug: "brownian-motion"
---
# Brownian Motion

**Brownian Motion**, also known as a Wiener Process, is a continuous-time stochastic process that is a limit of both random walks and various other stochastic processes.

## Properties

A stochastic process $W_t$ is a Wiener process if:
1. $W_0 = 0$.
2. It has independent increments: $W_{t+u} - W_t$ is independent of $W_s$ for $s \le t$.
3. It has Gaussian increments: $W_{t+u} - W_t \sim N(0, u)$.
4. It has continuous paths almost surely.

## Stochastic Differential Equations (SDE)
The differential form of Brownian motion is $dW_t$, representing an infinitesimal increment where $dW_t^2 = dt$ in the Ito sense.

## Python Implementation

```python
import numpy as np

def simulate_brownian_motion(T, n_steps):
    dt = T / n_steps
    steps = np.random.normal(0, np.sqrt(dt), n_steps)
    path = np.concatenate([[0], np.cumsum(steps)])
    return path
```

## Related Topics
- [[geometric-brownian-motion]]
- [[levy-processes]]
- [[black-scholes]]
- [[mcmc]]
- [[schrodinger-equation]]

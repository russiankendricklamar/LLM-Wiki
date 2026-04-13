---
title: "Kalman Filter"
category: "Signal Analysis"
order: 164
lang: "en"
slug: "kalman-filter"
---
# Kalman Filter

The **Kalman filter** is an iterative mathematical process that uses a series of measurements observed over time, containing statistical noise and other inaccuracies, to produce estimates of unknown variables.

## State-Space Representation

The system is described by two equations:
1. **State Equation**: $x_t = F_t x_{t-1} + B_t u_t + w_t$
2. **Observation Equation**: $z_t = H_t x_t + v_t$

Where $w_t \sim N(0, Q_t)$ and $v_t \sim N(0, R_t)$ are process and measurement noise.

## Prediction and Update Steps

### Prediction:
$$
\begin{aligned}
\hat{x}_{t|t-1} &= F_t \hat{x}_{t-1|t-1} \\
P_{t|t-1} &= F_t P_{t-1|t-1} F_t^T + Q_t
\end{aligned}
$$

### Update:
$$
\begin{aligned}
K_t &= P_{t|t-1} H_t^T (H_t P_{t|t-1} H_t^T + R_t)^{-1} \\
\hat{x}_{t|t} &= \hat{x}_{t|t-1} + K_t (z_t - H_t \hat{x}_{t|t-1}) \\
P_{t|t} &= (I - K_t H_t) P_{t|t-1}
\end{aligned}
$$

## Python Implementation

Using `pykalman`:

```python
from pykalman import KalmanFilter
import numpy as np

def filter_series(data):
    kf = KalmanFilter(initial_state_mean=0, n_dim_obs=1)
    state_means, state_covariances = kf.filter(data)
    return state_means
```

## Related Topics
- [[particle-filter]]
- [[hidden-markov-models]]
- [[volatility-forecasting]]
- [[mcmc]]

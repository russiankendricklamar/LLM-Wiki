---
title: "Kalman Filter"
category: "Signal Analysis"
order: 164
lang: "en"
slug: "kalman-filter"
---
# Kalman Filter

The **Kalman filter** (Rudolf Kálmán, 1960) is an optimal recursive Bayesian estimator for linear dynamical systems with Gaussian noise. It produces the minimum mean-square-error estimate of the hidden state given all observations up to the current time, updating this estimate as each new observation arrives — making it ideal for real-time applications in finance.

## Background

In finance, the "true" state of interest — a fair value, a hedge ratio, a latent factor exposure — is never directly observed. We observe noisy proxies. The Kalman filter fuses a dynamic model of how the state evolves (the **state equation**) with a measurement model of how the state maps to observations (the **observation equation**), weighting each according to their respective uncertainties. Its optimality under Gaussian assumptions makes it the gold standard for linear state estimation.

## State-Space Representation

Any linear dynamical system can be written in **state-space form**:

**State (transition) equation:**
$$
x_t = F_t x_{t-1} + B_t u_t + w_t, \qquad w_t \sim \mathcal{N}(0, Q_t)
$$

**Observation equation:**
$$
z_t = H_t x_t + v_t, \qquad v_t \sim \mathcal{N}(0, R_t)
$$

Where:
- $x_t \in \mathbb{R}^n$ — hidden state vector
- $z_t \in \mathbb{R}^m$ — observation vector
- $F_t$ — state transition matrix ($n \times n$)
- $H_t$ — observation matrix ($m \times n$)
- $B_t, u_t$ — optional control input
- $Q_t$ — process noise covariance ($n \times n$)
- $R_t$ — measurement noise covariance ($m \times m$)

## The Two-Step Algorithm

### Step 1: Prediction

Project the state estimate and its uncertainty forward in time using the dynamic model:

$$
\hat{x}_{t \mid t-1} = F_t \hat{x}_{t-1 \mid t-1} + B_t u_t
$$

$$
P_{t \mid t-1} = F_t P_{t-1 \mid t-1} F_t^T + Q_t
$$

$P_{t \mid t-1}$ is the **predicted covariance** — the uncertainty in the state before seeing $z_t$.

### Step 2: Update

Incorporate the new observation $z_t$ to correct the prediction:

$$
\nu_t = z_t - H_t \hat{x}_{t \mid t-1} \qquad \text{(innovation)}
$$

$$
S_t = H_t P_{t \mid t-1} H_t^T + R_t \qquad \text{(innovation covariance)}
$$

$$
K_t = P_{t \mid t-1} H_t^T S_t^{-1} \qquad \text{(Kalman gain)}
$$

$$
\hat{x}_{t \mid t} = \hat{x}_{t \mid t-1} + K_t \nu_t
$$

$$
P_{t \mid t} = (I - K_t H_t) P_{t \mid t-1}
$$

The **Kalman gain** $K_t$ balances trust in the model prediction vs. the new observation:
- $K_t \to 0$: ignore observation (high measurement noise $R_t$, or low process noise $Q_t$).
- $K_t \to H_t^{-1}$: fully trust observation (low $R_t$, high $Q_t$).

## Log-Likelihood for Parameter Estimation

The innovations $\nu_t \sim \mathcal{N}(0, S_t)$ are i.i.d. under the correct model. The log-likelihood is:

$$
\ell = -\frac{1}{2} \sum_{t=1}^T \left[\ln|S_t| + \nu_t^T S_t^{-1} \nu_t + m\ln(2\pi)\right]
$$

This enables **maximum likelihood estimation** of unknown parameters in $F, H, Q, R$ via numerical optimisation — a key step in applying the Kalman filter to real financial data.

## Python: Full Implementation

```python
import numpy as np
from dataclasses import dataclass
from typing import Optional

@dataclass
class KalmanState:
    x: np.ndarray        # state mean
    P: np.ndarray        # state covariance

def kalman_filter(
    observations: np.ndarray,  # shape (T, m)
    F: np.ndarray,             # (n, n) transition matrix
    H: np.ndarray,             # (m, n) observation matrix
    Q: np.ndarray,             # (n, n) process noise covariance
    R: np.ndarray,             # (m, m) measurement noise covariance
    x0: Optional[np.ndarray] = None,
    P0: Optional[np.ndarray] = None,
) -> tuple:
    """
    Linear Kalman filter.

    Returns:
        filtered_means:  (T, n) array of state estimates
        filtered_covs:   (T, n, n) array of state covariances
        log_likelihood:  scalar total log-likelihood
    """
    T, m = observations.shape
    n = F.shape[0]

    x = x0 if x0 is not None else np.zeros(n)
    P = P0 if P0 is not None else np.eye(n) * 1e6   # diffuse prior

    filtered_means = np.zeros((T, n))
    filtered_covs  = np.zeros((T, n, n))
    log_lik = 0.0

    for t in range(T):
        # --- Predict ---
        x_pred = F @ x
        P_pred = F @ P @ F.T + Q

        # --- Update ---
        innovation = observations[t] - H @ x_pred
        S = H @ P_pred @ H.T + R
        K = P_pred @ H.T @ np.linalg.inv(S)
        x = x_pred + K @ innovation
        P = (np.eye(n) - K @ H) @ P_pred

        # Log-likelihood contribution
        sign, logdet = np.linalg.slogdet(S)
        log_lik -= 0.5 * (logdet + innovation @ np.linalg.inv(S) @ innovation + m * np.log(2 * np.pi))

        filtered_means[t] = x
        filtered_covs[t]  = P

    return filtered_means, filtered_covs, log_lik


# --- Finance example: pairs trading hedge ratio estimation ---
np.random.seed(42)
T = 500
# True time-varying hedge ratio (random walk)
true_beta = 1.0 + np.cumsum(np.random.normal(0, 0.01, T))
spread_noise = np.random.normal(0, 0.5, T)
y1 = 100 + np.cumsum(np.random.normal(0, 1, T))
y2 = true_beta * y1 + spread_noise

observations = (y2 - y1).reshape(-1, 1)  # observed spread

F = np.array([[1.0]])       # hedge ratio follows random walk
H = np.array([[1.0]])
Q = np.array([[0.0001]])    # slow-moving hedge ratio
R = np.array([[0.25]])      # observation noise variance

means, covs, ll = kalman_filter(observations, F, H, Q, R)
print(f"Log-likelihood: {ll:.2f}")
print(f"Final hedge ratio estimate: {means[-1, 0]:.4f}")
print(f"True final hedge ratio:     {true_beta[-1]:.4f}")
```

## Kalman Gain Dynamics

```chart
{
  "type": "line",
  "xAxis": "step",
  "data": [
    {"step": "1",  "estimate": 100.5, "observed": 101.2},
    {"step": "2",  "estimate": 100.8, "observed": 100.3},
    {"step": "3",  "estimate": 101.0, "observed": 101.8},
    {"step": "4",  "estimate": 101.3, "observed": 100.9},
    {"step": "5",  "estimate": 101.2, "observed": 102.1},
    {"step": "6",  "estimate": 101.5, "observed": 101.4},
    {"step": "7",  "estimate": 101.5, "observed": 101.7},
    {"step": "8",  "estimate": 101.6, "observed": 101.3}
  ],
  "lines": [
    {"dataKey": "estimate", "stroke": "#3b82f6", "name": "Kalman State Estimate"},
    {"dataKey": "observed", "stroke": "#94a3b8", "name": "Noisy Observation"}
  ]
}
```

## Extensions

### Extended Kalman Filter (EKF)
For non-linear state transitions $x_t = f(x_{t-1}) + w_t$ or non-linear observations $z_t = h(x_t) + v_t$, linearise via first-order Taylor expansion: replace $F_t$ with the Jacobian $\partial f / \partial x$ evaluated at $\hat{x}_{t-1}$.

### Unscented Kalman Filter (UKF)
Instead of linearisation, propagate a carefully chosen set of **sigma points** through the non-linear functions. More accurate than EKF for strongly non-linear systems; preferred for stochastic volatility models.

### Kalman Smoother (RTS Smoother)
Given the full observation sequence, compute the optimal state estimates using both past and future observations. The **Rauch-Tung-Striebel (RTS)** backward pass refines the filtered estimates, reducing uncertainty throughout the sequence — useful for parameter estimation and backtesting.

## Parameter Reference

| Symbol | Name | Role | Typical Setting |
|--------|------|------|----------------|
| $F_t$ | Transition matrix | State dynamics | Often AR(1) or identity |
| $H_t$ | Observation matrix | Maps state to obs | Often identity or regression design |
| $Q_t$ | Process noise | State uncertainty | Small (smooth states) |
| $R_t$ | Measurement noise | Observation uncertainty | Estimated from data |
| $K_t$ | Kalman gain | Blending coefficient | Computed each step |
| $P_t$ | Error covariance | State estimation uncertainty | Tracks convergence |

## Practical Financial Applications

1. **Pairs trading**: Estimate the time-varying hedge ratio between cointegrated assets; trade mean reversion in the Kalman-smoothed spread.
2. **Factor model estimation**: Track time-varying factor loadings (betas) in a dynamic factor model with the Kalman filter as the inference engine.
3. **Yield curve fitting**: The Nelson-Siegel model can be cast as a state-space model; Kalman filtering extracts the latent level, slope, and curvature factors from bond yields in real time.
4. **Order flow imbalance**: Filter noisy microstructure data (bid-ask mid-price) to extract the efficient price signal.
5. **Volatility estimation**: The stochastic volatility model of Harvey et al. is estimated by Kalman filtering on log-squared returns.

## Related Topics
- [[particle-filter]]
- [[hidden-markov-models]]
- [[volatility-forecasting]]
- [[mcmc]]

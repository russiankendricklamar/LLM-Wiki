---
title: "Rough Volatility and Fractional Brownian Motion"
category: "Stochastic Processes"
order: 94
lang: "en"
---

# Rough Volatility and Fractional Brownian Motion

**Rough Volatility** is a class of stochastic volatility models where the volatility process has a Hölder exponent $H < 1/2$, implying sample paths rougher than standard Brownian motion. Introduced by Gatheral et al. (2018), it explains observed volatility time-series and the power-law behavior of the VIX skew.

## Fractional Brownian Motion

A Gaussian process $W^H$ with covariance:

$$
\text{Cov}(W^H_t, W^H_s) = \frac{1}{2}\left(t^{2H} + s^{2H} - |t-s|^{2H}\right)
$$

- $H = 1/2$: standard Brownian motion
- $H < 1/2$: rough paths, anti-persistent increments (financial volatility)
- $H > 1/2$: smooth paths, persistent increments

**Empirical finding**: $H \approx 0.1$ for daily realized volatility data across asset classes.

## Rough Bergomi Model (Bayer, Friz, Gatheral 2016)

$$
V_t = \xi_0 \exp\!\left(\eta \tilde{W}^H_t - \frac{1}{2}\eta^2 t^{2H}\right)
$$

where $\tilde{W}^H$ is a Riemann-Liouville fBm (Volterra process):

$$
\tilde{W}^H_t = \sqrt{2H}\int_0^t (t-s)^{H-1/2}\, dW_s
$$

**Implied vol skew**: $\text{skew}(T) \propto T^{H - 1/2}$, consistent with market data.

## Implementation

```python
import numpy as np

def simulate_rbergomi(S0: float, T: float, n_steps: int, n_paths: int,
                      H: float, eta: float, rho: float,
                      xi0: float = 0.04, r: float = 0.0) -> dict:
    """
    Rough Bergomi simulation via discrete Volterra convolution.

    H: Hurst exponent (~0.1 for equity vol)
    eta: vol-of-vol
    rho: correlation dW_S dW_V
    xi0: initial forward variance
    """
    dt = T / n_steps
    rng = np.random.default_rng(42)

    # Correlated Brownian increments
    Z1 = rng.standard_normal((n_paths, n_steps))
    Z2 = rng.standard_normal((n_paths, n_steps))
    dW_V = np.sqrt(dt) * Z1
    dW_S = np.sqrt(dt) * (rho * Z1 + np.sqrt(1 - rho**2) * Z2)

    # Volterra convolution: W^H_t = sqrt(2H) * sum (t-s)^{H-0.5} dW_s
    t_grid = np.arange(1, n_steps + 1) * dt
    W_H = np.zeros((n_paths, n_steps))
    for i in range(n_steps):
        for j in range(i + 1):
            kernel = (t_grid[i] - j * dt) ** (H - 0.5)
            W_H[:, i] += np.sqrt(2 * H) * kernel * dW_V[:, j]

    # Variance process
    V = xi0 * np.exp(eta * W_H - 0.5 * eta**2 * t_grid[None, :] ** (2 * H))

    # Asset price
    log_S = np.zeros((n_paths, n_steps + 1))
    log_S[:, 0] = np.log(S0)
    for i in range(n_steps):
        log_S[:, i+1] = log_S[:, i] + (r - 0.5*V[:, i])*dt + np.sqrt(V[:, i]*dt)*dW_S[:, i]

    return {'paths': np.exp(log_S), 'variance': V}


def hurst_exponent(ts: np.ndarray, lags: list[int] = None) -> float:
    """
    Estimate Hurst exponent via log(std(lag)) ~ H * log(lag).
    """
    if lags is None:
        lags = [2, 4, 8, 16, 32, 64]
    stds = []
    for lag in lags:
        diffs = np.diff(ts, n=lag)
        stds.append(np.std(diffs))
    log_lags = np.log(lags)
    log_stds = np.log(stds)
    H = np.polyfit(log_lags, log_stds, 1)[0]
    return H
```

## Related Articles

- [[heston-model|Heston Model]] — classic stochastic volatility
- [[variance-gamma|Variance Gamma]] — pure-jump alternative
- [[bipower-variation|Bipower Variation]] — realized variance estimation
- [[sabr-model|SABR Model]] — implied vol surface fitting

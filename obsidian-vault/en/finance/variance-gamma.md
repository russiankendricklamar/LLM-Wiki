---
title: "Variance Gamma Process"
category: "Stochastic Processes"
order: 97
lang: "en"
---

# Variance Gamma Process

The **Variance Gamma (VG)** process, introduced by Madan and Seneta (1990), is a pure-jump process with infinite activity but finite variation. It arises as Brownian motion with drift evaluated at a random gamma time, capturing skewness and excess kurtosis without the heavy tails of $\alpha$-stable distributions.

## Definition

Let $\gamma(t; 1, \nu)$ be a gamma process with unit mean and variance $\nu$ per unit time. Then:

$$
X_t^{VG} = \theta \gamma_t + \sigma W_{\gamma_t}
$$

- $\theta$: drift (controls skewness)
- $\sigma$: diffusion volatility
- $\nu$: variance of gamma time (jump clustering)

**Characteristic function**:

$$
\phi_{VG}(u; \sigma, \nu, \theta) = \left(1 - iu\theta\nu + \frac{\sigma^2\nu}{2}u^2\right)^{-t/\nu}
$$

## Option Pricing via FFT

```python
import numpy as np
from scipy.fft import fft

def vg_char_func(u: np.ndarray, T: float, sigma: float,
                 nu: float, theta: float, r: float) -> np.ndarray:
    omega = (1/nu) * np.log(1 - theta*nu - 0.5*sigma**2*nu)
    exp_term = (1 - 1j*u*theta*nu + 0.5*sigma**2*nu*u**2) ** (-T/nu)
    return np.exp(1j*u*(np.log(1) + (r + omega)*T)) * exp_term


def price_vg_fft(S0: float, K: float, T: float, r: float,
                 sigma: float, nu: float, theta: float,
                 N: int = 4096, eta: float = 0.25) -> float:
    """Call price via Carr-Madan FFT method."""
    lam = 2*np.pi / (N*eta)
    b = N*lam/2
    u = np.arange(N) * eta
    k_grid = -b + lam * np.arange(N)

    alpha = 1.5
    psi = np.exp(-r*T) * vg_char_func(u - 1j*(alpha+1), T, sigma, nu, theta, r)
    psi /= (alpha**2 + alpha - u**2 + 1j*(2*alpha+1)*u)

    x = eta * np.exp(1j*b*u) * psi
    x[0] /= 2
    prices = np.real(np.exp(-alpha*k_grid) / np.pi * fft(x) * eta)

    target_k = np.log(K/S0)
    idx = np.argmin(np.abs(k_grid - target_k))
    return float(S0 * prices[idx])


def simulate_vg(S0: float, T: float, n_steps: int, n_paths: int,
                sigma: float, nu: float, theta: float,
                r: float = 0.0) -> np.ndarray:
    """Monte Carlo simulation via gamma time-change."""
    rng = np.random.default_rng(42)
    dt = T / n_steps
    S = np.full((n_paths, n_steps+1), S0)
    omega = (1/nu)*np.log(1 - theta*nu - 0.5*sigma**2*nu)
    for i in range(n_steps):
        dg = rng.gamma(dt/nu, nu, n_paths)
        dW = rng.normal(0, 1, n_paths)
        S[:, i+1] = S[:, i]*np.exp((r+omega)*dt + theta*dg + sigma*np.sqrt(dg)*dW)
    return S
```

## Parameter Effects

| Parameter | Effect when increased |
|-----------|----------------------|
| $\sigma$ | More volatility |
| $\nu$ | Heavier tails (more kurtosis) |
| $\theta < 0$ | Left skew (typical for equities) |

## Related Articles

- [[levy-processes|Lévy Processes]] — VG is a special case
- [[merton-jump-diffusion|Merton Model]] — finite vs. infinite activity
- [[heston-model|Heston Model]] — stochastic volatility alternative

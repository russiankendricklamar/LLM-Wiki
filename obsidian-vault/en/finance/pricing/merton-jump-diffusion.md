---
slug: "/finance/merton-jump-diffusion"
title: "Merton Jump-Diffusion Model"
category: "Stochastic Processes"
order: 95
lang: "en"
---

# Merton Jump-Diffusion Model

The **Merton (1976) Jump-Diffusion model** extends Black-Scholes by adding a compound Poisson jump process to the log-returns. It captures fat tails and the implied volatility smile that pure diffusion models cannot explain.

## Model

Asset dynamics under the risk-neutral measure:

$$
\frac{dS}{S} = (r - \lambda \bar{k})\,dt + \sigma\,dW + (J-1)\,dN_t
$$

- $N_t$: Poisson process with intensity $\lambda$ (average jumps per year)
- $J$: jump multiplier, $\ln J \sim \mathcal{N}(\mu_J, \sigma_J^2)$
- $\bar{k} = e^{\mu_J + \sigma_J^2/2} - 1$: mean jump size

## Option Pricing Formula

By conditioning on the number of jumps $n$:

$$
C = \sum_{n=0}^{\infty} \frac{e^{-\lambda' T}(\lambda' T)^n}{n!} \cdot C_{BS}(\sigma_n, r_n)
$$

where:

$$
\lambda' = \lambda(1+\bar{k}), \quad r_n = r - \lambda\bar{k} + \frac{n\mu_J}{T}, \quad \sigma_n^2 = \sigma^2 + \frac{n\sigma_J^2}{T}
$$

## Implementation

```python
import numpy as np
from scipy.stats import norm
from scipy.optimize import minimize

def bs_call(S, K, T, r, sigma):
    d1 = (np.log(S/K) + (r + 0.5*sigma**2)*T) / (sigma*np.sqrt(T))
    d2 = d1 - sigma*np.sqrt(T)
    return S*norm.cdf(d1) - K*np.exp(-r*T)*norm.cdf(d2)


def merton_call(S0: float, K: float, T: float, r: float,
                sigma: float, lam: float, mu_j: float,
                sigma_j: float, n_terms: int = 50) -> float:
    """Merton jump-diffusion call via series expansion."""
    k_bar = np.exp(mu_j + 0.5 * sigma_j**2) - 1
    lam_prime = lam * (1 + k_bar)
    price = 0.0
    for n in range(n_terms):
        r_n = r - lam * k_bar + n * mu_j / T
        sigma_n = np.sqrt(sigma**2 + n * sigma_j**2 / T)
        weight = np.exp(-lam_prime * T) * (lam_prime * T)**n / np.math.factorial(n)
        price += weight * bs_call(S0, K, T, r_n, sigma_n)
    return price


def simulate_merton(S0: float, T: float, n_steps: int, n_paths: int,
                    sigma: float, lam: float, mu_j: float,
                    sigma_j: float, r: float = 0.0) -> np.ndarray:
    """Monte Carlo paths for Merton model."""
    dt = T / n_steps
    rng = np.random.default_rng(0)
    k_bar = np.exp(mu_j + 0.5 * sigma_j**2) - 1
    S = np.full((n_paths, n_steps + 1), S0, dtype=float)
    for i in range(n_steps):
        Z = rng.standard_normal(n_paths)
        N_jumps = rng.poisson(lam * dt, n_paths)
        J_total = np.array([
            np.sum(rng.normal(mu_j, sigma_j, nj)) if nj > 0 else 0.0
            for nj in N_jumps
        ])
        S[:, i+1] = S[:, i] * np.exp(
            (r - lam*k_bar - 0.5*sigma**2)*dt + sigma*np.sqrt(dt)*Z + J_total
        )
    return S


def calibrate_merton(market_prices: np.ndarray, strikes: np.ndarray,
                      T: float, S0: float, r: float) -> dict:
    """Calibrate Merton parameters to market option prices."""
    def objective(params):
        sigma, lam, mu_j, sigma_j = params
        if sigma <= 0 or lam <= 0 or sigma_j <= 0:
            return 1e10
        model = np.array([merton_call(S0, K, T, r, sigma, lam, mu_j, sigma_j)
                          for K in strikes])
        return np.sum((model - market_prices)**2)

    x0 = [0.2, 1.0, -0.1, 0.1]
    res = minimize(objective, x0, method='Nelder-Mead')
    sigma, lam, mu_j, sigma_j = res.x
    return {'sigma': sigma, 'lambda': lam, 'mu_j': mu_j, 'sigma_j': sigma_j}
```

## Related Articles

- [[levy-processes|Lévy Processes]] — general framework for jump models
- [[variance-gamma|Variance Gamma]] — infinite activity jump process
- [[heston-model|Heston Model]] — stochastic volatility without jumps
- [[black-scholes|Black-Scholes]] — baseline diffusion model

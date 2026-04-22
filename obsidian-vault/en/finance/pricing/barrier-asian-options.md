---
slug: "/finance/barrier-asian-options"
title: "Barrier and Asian Options"
category: "Pricing"
order: 113
lang: "en"
---

# Barrier and Asian Options

**Exotic options** have payoffs that depend on the path of the underlying. Barrier options activate/deactivate on hitting a barrier; Asian options depend on the average price over the life of the contract.

## Barrier Options

**Down-and-Out Call** — extinguished if $S$ drops below barrier $H$:

$$
\text{Payoff} = (S_T - K)^+ \cdot \mathbf{1}[\min_{t\leq T} S_t > H]
$$

### Rubinstein-Reiner Formula (Down-and-Out Call, $H < K$)

$$
C_{DO} = C_{BS} - \left(\frac{H}{S_0}\right)^{2\lambda} C_{BS}(S_0^*, K, r, \sigma, T)
$$

where $\lambda = (r + \sigma^2/2)/\sigma^2$, $S_0^* = H^2/S_0$ (reflected spot).

**Barrier option types:**

| Type | Condition |
|------|-----------|
| Down-and-Out | Lower barrier — option disappears |
| Down-and-In | Lower barrier — option appears |
| Up-and-Out | Upper barrier — disappears |
| Up-and-In | Upper barrier — appears |

## Asian Options

**Arithmetic Asian Call** (no closed form under GBM):

$$
\text{Payoff} = \left(\frac{1}{n}\sum_{i=1}^n S_{t_i} - K\right)^+
$$

**Geometric Asian** — closed form via adjusted parameters:

$$
\sigma_G = \sigma\sqrt{\frac{(n+1)(2n+1)}{6n^2}}, \quad r_G = \frac{r - \sigma^2/2}{2} + \frac{\sigma_G^2}{2}
$$

## Implementation

```python
import numpy as np
from scipy.stats import norm

def bs_call(S, K, T, r, sigma):
    d1 = (np.log(S/K) + (r + 0.5*sigma**2)*T) / (sigma*np.sqrt(T))
    d2 = d1 - sigma*np.sqrt(T)
    return S*norm.cdf(d1) - K*np.exp(-r*T)*norm.cdf(d2)


def down_out_call(S0: float, K: float, H: float, T: float,
                  r: float, sigma: float) -> float:
    """Down-and-Out Call via Rubinstein-Reiner. Requires H < min(K, S0)."""
    if H >= S0 or H >= K:
        raise ValueError("H must be below both S0 and K")
    lam = (r + 0.5 * sigma**2) / sigma**2
    S_star = H**2 / S0
    return bs_call(S0, K, T, r, sigma) - (H/S0)**(2*lam) * bs_call(S_star, K, T, r, sigma)


def geometric_asian_call(S0: float, K: float, T: float,
                          r: float, sigma: float, n: int) -> float:
    """Geometric Asian Call — closed form via effective parameters."""
    sigma_g = sigma * np.sqrt((n + 1) * (2*n + 1) / (6 * n**2))
    r_g = 0.5 * (r - 0.5 * sigma**2) + 0.5 * sigma_g**2
    return bs_call(S0, K, T, r_g, sigma_g) * np.exp((r_g - r) * T)


def arithmetic_asian_mc(S0: float, K: float, T: float, r: float,
                          sigma: float, n_steps: int = 252,
                          n_paths: int = 100_000,
                          antithetic: bool = True) -> tuple[float, float]:
    """Arithmetic Asian Call via Monte Carlo with antithetic variates."""
    dt = T / n_steps
    rng = np.random.default_rng(0)
    Z = rng.standard_normal((n_paths // 2, n_steps))
    if antithetic:
        Z = np.vstack([Z, -Z])
    log_S = np.cumsum((r - 0.5*sigma**2)*dt + sigma*np.sqrt(dt)*Z, axis=1)
    S_paths = S0 * np.exp(log_S)
    payoffs = np.maximum(S_paths.mean(axis=1) - K, 0) * np.exp(-r*T)
    return payoffs.mean(), payoffs.std() / np.sqrt(n_paths)


def barrier_mc(S0: float, K: float, H: float, T: float, r: float,
               sigma: float, barrier_type: str = 'down-out',
               n_steps: int = 252, n_paths: int = 100_000) -> float:
    """Barrier call option via Monte Carlo."""
    dt = T / n_steps
    rng = np.random.default_rng(1)
    Z = rng.standard_normal((n_paths, n_steps))
    log_S = np.cumsum((r - 0.5*sigma**2)*dt + sigma*np.sqrt(dt)*Z, axis=1)
    S_paths = S0 * np.exp(log_S)
    min_S, max_S = S_paths.min(axis=1), S_paths.max(axis=1)
    final = S_paths[:, -1]
    active = {'down-out': min_S > H, 'down-in': min_S <= H,
              'up-out': max_S < H, 'up-in': max_S >= H}[barrier_type]
    payoffs = np.where(active, np.maximum(final - K, 0), 0)
    return float(np.exp(-r*T) * payoffs.mean())
```

## Related Articles

- [[black-scholes|Black-Scholes]] — baseline pricing model
- [[monte-carlo-method|Monte Carlo]] — exotic option simulation
- [[longstaff-schwartz|Longstaff-Schwartz]] — American options
- [[variance-gamma|Variance Gamma]] — alternative process for exotics

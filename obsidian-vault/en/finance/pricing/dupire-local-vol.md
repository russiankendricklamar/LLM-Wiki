---
slug: "/finance/dupire-local-vol"
title: "Dupire Local Volatility Model"
category: "Pricing"
order: 102
lang: "en"
---

# Dupire Local Volatility Model

**Local Volatility (Dupire, 1994)** is the unique deterministic volatility function $\sigma_{loc}(K, T)$ consistent with all observed option prices. It is the simplest model that reproduces the entire implied volatility surface exactly.

## Dupire Equation

Given a continuum of call prices $C(K, T)$:

$$
\sigma_{loc}^2(K, T) = \frac{\partial C/\partial T + rK\,\partial C/\partial K}{\frac{1}{2}K^2\,\partial^2 C/\partial K^2}
$$

Under the risk-neutral measure, the asset follows:

$$
dS = r S\,dt + \sigma_{loc}(S_t, t) S\,dW_t
$$

The local vol surface is **calibrated once** and reproduces any vanilla option exactly. Exotic option pricing then proceeds via Monte Carlo.

## Implementation

```python
import numpy as np
from scipy.interpolate import RectBivariateSpline
from scipy.stats import norm

def bs_call(S, K, T, r, sigma):
    if T <= 0 or sigma <= 0:
        return max(S - K * np.exp(-r*T), 0)
    d1 = (np.log(S/K) + (r + 0.5*sigma**2)*T) / (sigma*np.sqrt(T))
    d2 = d1 - sigma*np.sqrt(T)
    return S*norm.cdf(d1) - K*np.exp(-r*T)*norm.cdf(d2)


class DupireLocalVol:
    """
    Local volatility surface via Dupire formula.
    Inputs: grid of implied vols over (strikes, maturities).
    """
    def __init__(self, S0: float, r: float,
                 strikes: np.ndarray, maturities: np.ndarray,
                 impl_vols: np.ndarray):
        self.S0 = S0
        self.r = r
        self.K = strikes
        self.T = maturities
        # Build call price surface
        C = np.array([[bs_call(S0, K, T, r, iv)
                       for K, iv in zip(strikes, impl_vols[j, :])]
                      for j, T in enumerate(maturities)])
        # Spline interpolation over (T, K)
        self._spline = RectBivariateSpline(maturities, strikes, C, kx=3, ky=3)

    def local_vol(self, K: float, T: float, dK: float = 1.0, dT: float = 1e-3) -> float:
        """Dupire local vol at (K, T) via numerical differentiation."""
        C = self._spline
        dC_dT = (C(T+dT, K)[0,0] - C(T-dT, K)[0,0]) / (2*dT)
        dC_dK = (C(T, K+dK)[0,0] - C(T, K-dK)[0,0]) / (2*dK)
        d2C_dK2 = (C(T, K+dK)[0,0] - 2*C(T, K)[0,0] + C(T, K-dK)[0,0]) / dK**2
        numerator = dC_dT + self.r * K * dC_dK
        denominator = 0.5 * K**2 * d2C_dK2
        if denominator <= 0:
            return 0.2  # fallback
        return float(np.sqrt(max(numerator / denominator, 0)))

    def simulate(self, T: float, n_steps: int, n_paths: int) -> np.ndarray:
        """Monte Carlo paths under local vol dynamics."""
        dt = T / n_steps
        rng = np.random.default_rng(0)
        S = np.full((n_paths, n_steps+1), self.S0, dtype=float)
        times = np.linspace(0, T, n_steps+1)
        for i in range(n_steps):
            t = times[i]
            lv = np.array([self.local_vol(s, max(t, 1e-4)) for s in S[:, i]])
            Z = rng.standard_normal(n_paths)
            S[:, i+1] = S[:, i] * np.exp(
                (self.r - 0.5*lv**2)*dt + lv*np.sqrt(dt)*Z
            )
        return S
```

## Local Vol vs Stochastic Vol

| Feature | Local Vol | Heston / rBergomi |
|---------|-----------|-------------------|
| Vanilla fit | Exact | Near-exact (after calibration) |
| Forward skew | Flat (often wrong) | Captures term structure |
| Computation | Fast MC | Slower |
| Mixing model | Dupire + SV | SABR, Heston |

## Related Articles

- [[heston-model|Heston Model]] — stochastic vol alternative
- [[sabr-model|SABR Model]] — analytical smile
- [[rough-volatility|Rough Volatility]] — fractional vol processes
- [[variance-swaps|Variance Swaps]] — model-free vol pricing

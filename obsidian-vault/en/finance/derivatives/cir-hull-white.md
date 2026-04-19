---
slug: "/finance/cir-hull-white"
title: "CIR and Hull-White Interest Rate Models"
category: "Stochastic Processes"
order: 96
lang: "en"
---

# CIR and Hull-White Interest Rate Models

The **Cox-Ingersoll-Ross (CIR)** and **Hull-White** models are short-rate models for the term structure of interest rates. CIR ensures non-negativity; Hull-White is analytically tractable and fits any initial yield curve exactly.

## Cox-Ingersoll-Ross Model

Mean-reverting square-root process:

$$
dr_t = \kappa(\theta - r_t)\,dt + \sigma\sqrt{r_t}\,dW_t
$$

**Feller condition** for non-negative rates: $2\kappa\theta > \sigma^2$.

**Zero-coupon bond price** $P(t, T) = A(t,T) e^{-B(t,T) r_t}$:

$$
B(t,T) = \frac{2(e^{\gamma\tau}-1)}{(\gamma+\kappa)(e^{\gamma\tau}-1)+2\gamma}, \quad \gamma = \sqrt{\kappa^2 + 2\sigma^2}
$$

$$
A(t,T) = \left[\frac{2\gamma e^{(\kappa+\gamma)\tau/2}}{(\gamma+\kappa)(e^{\gamma\tau}-1)+2\gamma}\right]^{2\kappa\theta/\sigma^2}
$$

## Hull-White Model

Extension with time-varying mean-reversion level $\theta(t)$:

$$
dr_t = [\theta(t) - \kappa r_t]\,dt + \sigma\,dW_t
$$

$\theta(t)$ is calibrated so that the model exactly fits the observed zero-coupon curve $P^{mkt}(0,T)$.

## Implementation

```python
import numpy as np
from scipy.optimize import minimize
from dataclasses import dataclass

def cir_bond_price(r0: float, kappa: float, theta: float,
                   sigma: float, tau: float) -> float:
    """Analytical CIR zero-coupon bond price."""
    gamma = np.sqrt(kappa**2 + 2*sigma**2)
    exp = np.exp(gamma * tau)
    denom = (gamma + kappa) * (exp - 1) + 2*gamma
    B = 2*(exp - 1) / denom
    A_exp = (2*gamma * np.exp((kappa + gamma)*tau/2) / denom) ** (2*kappa*theta/sigma**2)
    return A_exp * np.exp(-B * r0)


def simulate_cir(r0: float, kappa: float, theta: float, sigma: float,
                 T: float, n_steps: int, n_paths: int) -> np.ndarray:
    """Monte Carlo paths for CIR model using Euler-Maruyama (full truncation)."""
    dt = T / n_steps
    rng = np.random.default_rng(0)
    r = np.full((n_paths, n_steps + 1), r0)
    for i in range(n_steps):
        Z = rng.standard_normal(n_paths)
        r_pos = np.maximum(r[:, i], 0)
        r[:, i+1] = r_pos + kappa*(theta - r_pos)*dt + sigma*np.sqrt(r_pos*dt)*Z
        r[:, i+1] = np.maximum(r[:, i+1], 0)
    return r


@dataclass
class HullWhite:
    """Hull-White one-factor model calibrated to market curve."""
    kappa: float
    sigma: float
    market_discount: callable  # P^mkt(0, T)

    def _theta(self, t: float, dt: float = 1e-4) -> float:
        """Theta(t) from market forward rates via finite differences."""
        def f_mkt(T):
            p = self.market_discount(T)
            return -np.log(max(p, 1e-10)) / T if T > 0 else 0.0
        df_dt = (f_mkt(t + dt) - f_mkt(t - dt)) / (2*dt)
        f = f_mkt(t)
        return df_dt + self.kappa * f + self.sigma**2 / (2*self.kappa) * (1 - np.exp(-2*self.kappa*t))

    def bond_price(self, r0: float, t: float, T: float) -> float:
        """HW zero-coupon bond price P(t, T)."""
        tau = T - t
        B = (1 - np.exp(-self.kappa * tau)) / self.kappa
        log_A = (np.log(self.market_discount(T) / self.market_discount(t))
                 + B * (-np.log(self.market_discount(t)) / t if t > 0 else 0)
                 - self.sigma**2 / (4*self.kappa) * B**2 * (1 - np.exp(-2*self.kappa*t)))
        return np.exp(log_A - B * r0)

    def simulate(self, r0: float, T: float, n_steps: int, n_paths: int) -> np.ndarray:
        dt = T / n_steps
        rng = np.random.default_rng(1)
        r = np.full((n_paths, n_steps + 1), r0)
        times = np.linspace(0, T, n_steps + 1)
        for i in range(n_steps):
            theta_t = self._theta(times[i])
            Z = rng.standard_normal(n_paths)
            r[:, i+1] = (r[:, i] + (theta_t - self.kappa*r[:, i])*dt
                         + self.sigma*np.sqrt(dt)*Z)
        return r
```

## Related Articles

- [[ornstein-uhlenbeck-process|Ornstein-Uhlenbeck]] — continuous mean-reversion
- [[nelson-siegel-svensson|Nelson-Siegel-Svensson]] — yield curve fitting
- [[libor-sofr|LIBOR → SOFR transition]] — rate reform context
- [[swaps|Interest Rate Swaps]] — CIR/HW applied to swap pricing
- [[hjm-framework]] — Heath-Jarrow-Morton framework generalizing short-rate models

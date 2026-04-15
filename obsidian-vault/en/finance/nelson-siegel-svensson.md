---
title: "Nelson-Siegel-Svensson Yield Curve Model"
category: "Pricing Models"
order: 84
lang: "en"
---

# Nelson-Siegel-Svensson Yield Curve Model

The **Nelson-Siegel-Svensson (NSS)** model is the parametric yield-curve fitting workhorse used by central banks worldwide — including the Fed, Bundesbank, and Bank of England — for official daily curve publication. It extends the original Nelson-Siegel (1987) three-factor model with a second hump term to improve medium-term fit.

## Nelson-Siegel (1987)

Spot rate at maturity $\tau$:

$$
y(\tau) = \beta_0 + \beta_1 \frac{1-e^{-\tau/\lambda_1}}{\tau/\lambda_1} + \beta_2\!\left(\frac{1-e^{-\tau/\lambda_1}}{\tau/\lambda_1} - e^{-\tau/\lambda_1}\right)
$$

| Parameter | Economic role | Limiting behaviour |
|-----------|--------------|-------------------|
| $\beta_0 > 0$ | Long-run level | $y(\infty) = \beta_0$ |
| $\beta_1$ | Slope (long–short spread) | $y(0) = \beta_0 + \beta_1$ |
| $\beta_2$ | Curvature / hump | Peak at $\tau = \lambda_1$ |
| $\lambda_1 > 0$ | Decay rate | Position of hump |

## Svensson Extension (1994)

A second hump factor improves fit in the medium-term segment:

$$
\boxed{y(\tau) = \beta_0 + \beta_1\frac{1-e^{-\tau/\lambda_1}}{\tau/\lambda_1} + \beta_2\!\left(\frac{1-e^{-\tau/\lambda_1}}{\tau/\lambda_1}-e^{-\tau/\lambda_1}\right) + \beta_3\!\left(\frac{1-e^{-\tau/\lambda_2}}{\tau/\lambda_2}-e^{-\tau/\lambda_2}\right)}
$$

Six parameters: $(\beta_0, \beta_1, \beta_2, \beta_3, \lambda_1, \lambda_2)$. The Bundesbank has published NSS parameters daily since 1972.

## Instantaneous Forward Rate

$$
f(\tau) = \beta_0 + \beta_1 e^{-\tau/\lambda_1} + \beta_2(\tau/\lambda_1)e^{-\tau/\lambda_1} + \beta_3(\tau/\lambda_2)e^{-\tau/\lambda_2}
$$

The forward curve gives direct insight into market expectations of future rates.

## Calibration

Minimise weighted least-squares residuals:

$$
\min_{\theta} \sum_i w_i \left(y^{\text{obs}}(\tau_i) - y(\tau_i; \theta)\right)^2
$$

Standard weighting: $w_i \propto D(\tau_i)$ (duration weighting penalises errors on longer bonds).

```python
import numpy as np
from scipy.optimize import minimize
from dataclasses import dataclass
from typing import Optional

@dataclass
class NSSParams:
    beta0: float; beta1: float; beta2: float; beta3: float
    lambda1: float; lambda2: float

    def to_array(self): return np.array([self.beta0,self.beta1,self.beta2,
                                          self.beta3,self.lambda1,self.lambda2])
    @classmethod
    def from_array(cls, x): return cls(*x)


def nss_yield(tau: np.ndarray, p: NSSParams) -> np.ndarray:
    tau = np.asarray(tau, dtype=float)
    eps = 1e-8
    e1  = np.exp(-tau / p.lambda1)
    f1  = np.where(tau > eps, (1-e1)/(tau/p.lambda1), 1.0)
    e2  = np.exp(-tau / p.lambda2)
    f2  = np.where(tau > eps, (1-e2)/(tau/p.lambda2), 1.0)
    return p.beta0 + p.beta1*f1 + p.beta2*(f1-e1) + p.beta3*(f2-e2)


def fit_nss(maturities: np.ndarray, yields: np.ndarray,
            weights: Optional[np.ndarray] = None,
            n_starts: int = 20) -> NSSParams:
    if weights is None:
        weights = np.ones(len(yields))

    def loss(x):
        try:
            p = NSSParams(*x)
            if p.lambda1 <= 0 or p.lambda2 <= 0 or p.beta0 <= 0:
                return 1e10
            return float(np.sum(weights * (yields - nss_yield(maturities, p))**2))
        except Exception:
            return 1e10

    bounds = [(0.001,0.20),(-0.15,0.15),(-0.15,0.15),
              (-0.15,0.15),(0.1,10.),(0.1,10.)]
    rng = np.random.default_rng(0)
    best = None
    for _ in range(n_starts):
        x0 = np.array([rng.uniform(0.02,0.06), rng.uniform(-0.04,0.04),
                        rng.uniform(-0.04,0.04), rng.uniform(-0.02,0.02),
                        rng.uniform(0.5,5.), rng.uniform(0.5,5.)])
        res = minimize(loss, x0, method='L-BFGS-B', bounds=bounds,
                       options={'maxiter':500,'ftol':1e-12})
        if best is None or res.fun < best.fun:
            best = res
    return NSSParams.from_array(best.x)


def forward_rate(tau: np.ndarray, p: NSSParams) -> np.ndarray:
    tau = np.asarray(tau, dtype=float)
    e1  = np.exp(-tau / p.lambda1)
    e2  = np.exp(-tau / p.lambda2)
    return (p.beta0 + p.beta1*e1
            + p.beta2*(tau/p.lambda1)*e1
            + p.beta3*(tau/p.lambda2)*e2)
```

### Example

```python
maturities = np.array([0.25, 0.5, 1, 2, 3, 5, 7, 10, 15, 20])
yields     = np.array([0.047, 0.049, 0.052, 0.055, 0.056, 0.058,
                        0.059, 0.060, 0.061, 0.061])

params = fit_nss(maturities, yields)
tau_grid = np.linspace(0.1, 25, 500)
y_curve  = nss_yield(tau_grid, params)
f_curve  = forward_rate(tau_grid, params)
```

## Typical Curve Shapes

| Shape | $\beta_1$ | $\beta_2$ |
|-------|-----------|-----------|
| Normal (upward) | < 0 | > 0 |
| Inverted | > 0 | |
| Humped | | large |
| Flat | ≈ 0 | ≈ 0 |

## Uses

- **Bond pricing** — discount factors from continuous $y(\tau)$
- **Duration management** — sensitivity to level ($\beta_0$), slope ($\beta_1$), curvature ($\beta_2$)
- **XVA** — derivative cashflow discounting
- **Central bank publication** — Bundesbank, BoE, Fed H.15

## Related Articles

- [[black-scholes|Black-Scholes Model]] — risk-neutral pricing framework
- [[heston-model|Heston Model]] — stochastic vol; NSS supplies discount curve
- [[xva|XVA]] — FVA/MVA use NSS-based discount factors
- [[oas|OAS]] — spread over the benchmark NSS curve
- [[swaps|Interest Rate Swaps]] — NSS for FRA discounting

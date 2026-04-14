---
title: "Heston Model"
category: "Pricing Models"
order: 3
lang: "en"
---
# Heston Model

The **Heston model** (Steven Heston, 1993) is the most widely used stochastic volatility model in quantitative finance. It extends Black-Scholes by allowing the instantaneous variance $v_t$ to follow a mean-reverting CIR process correlated with the asset price. This produces the **volatility smile and skew** observed in options markets — phenomena that Black-Scholes with constant volatility cannot explain.

## Background

Black-Scholes assumes constant volatility, implying a flat implied volatility surface. Empirically, options on the same underlying with the same maturity but different strikes trade at different implied volatilities — the "smile" (symmetric) or "skew" (asymmetric, common in equity indices). Heston (1993) solved this by making volatility stochastic and deriving a semi-analytic pricing formula via the characteristic function method.

## Dynamics (SDEs)

Under the risk-neutral measure $\mathbb{Q}$, the asset price $S_t$ and variance $v_t$ satisfy:

$$
\begin{aligned}
dS_t &= r S_t\, dt + \sqrt{v_t}\, S_t\, dW_t^S \\
dv_t &= \kappa(\theta - v_t)\, dt + \xi\sqrt{v_t}\, dW_t^v
\end{aligned}
$$

With correlation $d[W^S, W^v]_t = \rho\, dt$.

### Parameters

| Symbol | Name | Role | Typical Range |
|--------|------|------|---------------|
| $r$ | Risk-free rate | Drift under $\mathbb{Q}$ | 0–0.06 |
| $\kappa$ | Mean-reversion speed | How fast $v_t$ returns to $\theta$ | 0.5–5 |
| $\theta$ | Long-run variance | Level $v_t$ reverts to | 0.01–0.09 |
| $\xi$ | Vol-of-vol | Volatility of the variance process | 0.1–1.0 |
| $\rho$ | Correlation | $S$–$v$ Brownian correlation | $-0.9$ to $0$ (equity) |
| $v_0$ | Initial variance | Starting variance | Near ATM $\sigma^2$ |

## The Feller Condition

To ensure $v_t > 0$ almost surely (variance never hits zero):

$$
2\kappa\theta > \xi^2
$$

If this condition is violated, the CIR process can reach zero, though it remains non-negative and reflecting. In practice, equity calibrations often mildly violate the Feller condition; the full-truncation Euler scheme is used for simulation robustness.

## Semi-Analytic Pricing via Characteristic Function

The key insight of Heston (1993) is that the **characteristic function** of $\ln S_T$ under $\mathbb{Q}$ has a closed form. For a European call $C(S_0, K, T)$:

$$
C = S_0 e^{-qT} P_1 - K e^{-rT} P_2
$$

where $q$ is the dividend yield, and the probabilities $P_{1,2}$ are recovered via the Gil-Pelaez inversion formula:

$$
P_j = \frac{1}{2} + \frac{1}{\pi} \int_0^\infty \text{Re}\!\left[\frac{e^{-i\phi \ln K} f_j(\phi)}{i\phi}\right] d\phi
$$

The characteristic functions $f_1, f_2$ are:

$$
f_j(\phi) = \exp\!\left[C_j(\phi, T) + D_j(\phi, T) v_0 + i\phi \ln S_0\right]
$$

with:
$$
C_j = r i\phi T + \frac{\kappa\theta}{\xi^2}\!\left[(b_j - \rho\xi i\phi + d_j)T - 2\ln\!\frac{1 - g_j e^{d_j T}}{1 - g_j}\right]
$$
$$
D_j = \frac{b_j - \rho\xi i\phi + d_j}{\xi^2} \cdot \frac{1 - e^{d_j T}}{1 - g_j e^{d_j T}}
$$

where $d_j = \sqrt{(\rho\xi i\phi - b_j)^2 - \xi^2(2u_j i\phi - \phi^2)}$ and $g_j = (b_j - \rho\xi i\phi + d_j)/(b_j - \rho\xi i\phi - d_j)$, with $u_1 = 1/2$, $u_2 = -1/2$, $b_1 = \kappa - \rho\xi$, $b_2 = \kappa$.

## Carr-Madan FFT Pricing

The **Carr-Madan method** (1999) prices a strip of European calls across all strikes simultaneously using the Fast Fourier Transform, reducing the $O(N_K)$ inversions to $O(N \log N)$. The modified call price $z_T(k) = e^{\alpha k} C(k)$ has Fourier transform expressible in terms of the characteristic function:

$$
\hat{z}_T(\phi) = \frac{e^{-rT} f(\phi - (\alpha+1)i)}{\alpha^2 + \alpha - \phi^2 + i(2\alpha+1)\phi}
$$

where $\alpha > 0$ is a damping parameter and $k = \ln(K/S_0)$ is log-moneyness. A single FFT over a grid of $\phi$ values produces call prices at all log-strikes simultaneously.

## Python: Path Simulation and Option Pricing

```python
import numpy as np
from scipy.integrate import quad

def simulate_heston(
    S0: float, v0: float, T: float, r: float,
    kappa: float, theta: float, xi: float, rho: float,
    steps: int, n_paths: int = 1, seed: int = 42
) -> tuple:
    """Euler-Maruyama simulation with full truncation for variance."""
    rng = np.random.default_rng(seed)
    dt = T / steps
    S = np.full(n_paths, S0, dtype=float)
    v = np.full(n_paths, v0, dtype=float)

    for _ in range(steps):
        z1 = rng.standard_normal(n_paths)
        z2 = rho * z1 + np.sqrt(1 - rho**2) * rng.standard_normal(n_paths)
        v_pos = np.maximum(v, 0)
        v = (v + kappa * (theta - v_pos) * dt
             + xi * np.sqrt(v_pos * dt) * z2)
        v = np.maximum(v, 0)   # full truncation
        S = S * np.exp((r - 0.5 * v_pos) * dt + np.sqrt(v_pos * dt) * z1)

    return S, v


def heston_call_cf(
    S0: float, K: float, T: float, r: float,
    kappa: float, theta: float, xi: float, rho: float, v0: float
) -> float:
    """
    Heston (1993) semi-analytic European call via characteristic function.
    """
    def cf(phi: complex, j: int) -> complex:
        u = 0.5 if j == 1 else -0.5
        b = kappa - rho * xi if j == 1 else kappa
        d = np.sqrt((rho * xi * phi * 1j - b) ** 2
                    - xi**2 * (2 * u * phi * 1j - phi**2))
        g = (b - rho * xi * phi * 1j + d) / (b - rho * xi * phi * 1j - d)
        C = (r * phi * 1j * T
             + kappa * theta / xi**2
             * ((b - rho * xi * phi * 1j + d) * T
                - 2 * np.log((1 - g * np.exp(d * T)) / (1 - g))))
        D = ((b - rho * xi * phi * 1j + d) / xi**2
             * (1 - np.exp(d * T)) / (1 - g * np.exp(d * T)))
        return np.exp(C + D * v0 + 1j * phi * np.log(S0))

    def integrand(phi: float, j: int) -> float:
        val = cf(phi, j) * np.exp(-1j * phi * np.log(K))
        return np.real(val / (1j * phi))

    P1 = 0.5 + (1 / np.pi) * quad(integrand, 1e-8, 200, args=(1,))[0]
    P2 = 0.5 + (1 / np.pi) * quad(integrand, 1e-8, 200, args=(2,))[0]
    return S0 * P1 - K * np.exp(-r * T) * P2


# Price a call under Heston
price = heston_call_cf(
    S0=100, K=100, T=1.0, r=0.05,
    kappa=2.0, theta=0.04, xi=0.3, rho=-0.7, v0=0.04
)
print(f"Heston call price: {price:.4f}")
```

## Volatility Dynamics Visualization

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "0", "price": 100, "vol": 0.20},
    {"time": "1", "price": 102, "vol": 0.22},
    {"time": "2", "price": 101, "vol": 0.25},
    {"time": "3", "price": 98,  "vol": 0.30},
    {"time": "4", "price": 95,  "vol": 0.35},
    {"time": "5", "price": 97,  "vol": 0.32},
    {"time": "6", "price": 100, "vol": 0.28},
    {"time": "7", "price": 103, "vol": 0.24},
    {"time": "8", "price": 105, "vol": 0.21},
    {"time": "9", "price": 104, "vol": 0.20}
  ],
  "lines": [
    {"dataKey": "price", "stroke": "#3b82f6", "name": "Asset Price"},
    {"dataKey": "vol",   "stroke": "#ef4444", "name": "Instantaneous Vol"}
  ]
}
```

## Calibration Procedure

Calibration fits $(\kappa, \theta, \xi, \rho, v_0)$ to market implied volatility surface:

1. Collect market call/put prices across strikes $K_i$ and maturities $T_j$.
2. Convert to market implied vols $\sigma^{\text{mkt}}_{ij}$.
3. Minimise weighted RMSE:
$$
\min_{\kappa,\theta,\xi,\rho,v_0} \sum_{i,j} w_{ij} \left(\sigma^{\text{Heston}}_{ij}(\kappa,\theta,\xi,\rho,v_0) - \sigma^{\text{mkt}}_{ij}\right)^2
$$
4. Use `scipy.optimize.differential_evolution` for global search, then `L-BFGS-B` for local refinement.
5. Check: Feller condition, $v_0 > 0$, $\xi > 0$, $|\rho| < 1$.

## Comparison with Black-Scholes

| Feature | Black-Scholes | Heston Model |
|:--------|:-------------|:-------------|
| **Volatility** | Constant | Stochastic (Mean-reverting CIR) |
| **Asset Distribution** | Log-normal | Non-lognormal (Heavy tails, skew) |
| **Volatility Smile** | Flat | Reproduced via $\rho$ and $\xi$ |
| **Pricing** | Closed-form | Semi-analytic (characteristic function) |
| **Calibration** | 1 parameter ($\sigma$) | 5 parameters |
| **Greeks** | Analytic | Numerical (AD or finite difference) |

## Limitations and Extensions

- **Rough volatility**: Empirical studies (Gatheral et al. 2018) show volatility is "rough" — its Hurst exponent $H \approx 0.1$, far below 0.5. The rough Heston model replaces the CIR process with a fractional Brownian motion driver.
- **Negative correlation constraint**: Heston assumes $\rho$ is constant; in reality, correlation is stochastic (volatility of correlation).
- **Calibration instability**: The 5-parameter surface is notoriously difficult to calibrate; regularisation and global optimisers are essential.
- **Jump extensions**: Bates (1996) adds a jump-diffusion component to Heston to better fit the short-maturity skew.

## Practical Applications

1. **Exotic options pricing**: Barrier, Asian, and cliquet options require path simulation; Heston MC paths produce more realistic vol dynamics than GBM.
2. **Volatility surface interpolation**: Heston provides a parametric arbitrage-free interpolation of market implied vols across strikes and maturities.
3. **Risk management**: Greeks (delta, vega, volga, vanna) computed under Heston reflect stochastic vol exposure, enabling more precise hedging.
4. **Structured products**: Autocallables and range accruals are sensitive to vol-of-vol and correlation; Heston captures both.

## Related Topics
- [[black-scholes]]
- [[sabr-model]]
- [[particle-filter]]
- [[garch-models]]
- [[geometric-brownian-motion]]

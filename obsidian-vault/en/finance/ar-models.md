---
title: "AR (Autoregressive) Models"
category: "Signal Analysis"
order: 165
lang: "en"
slug: "ar-models"
---
# AR (Autoregressive) Models

An **Autoregressive (AR) model** represents a type of random process where the output variable depends linearly on its own previous values and on a stochastic term. AR models are the foundational building blocks of time-series econometrics and underpin most practical forecasting in quantitative finance.

## Overview & Background

The autoregressive framework was formalized by Yule (1927), who used it to model the periodicity in sunspot data. The term "autoregressive" captures the key idea: the variable regresses on itself. In finance, AR models describe mean-reverting dynamics in interest rates, volatility, and spreads — any series where today's value is partly predictable from its recent history.

AR models gained practical importance in financial econometrics through the Box-Jenkins methodology (1970), which provided a systematic framework for model identification, estimation, and diagnostic checking. Modern high-frequency trading systems and risk models routinely embed AR dynamics within larger ARMA, ARIMA, and GARCH structures.

## Mathematical Framework

An $AR(p)$ model is defined as:

$$
X_t = c + \sum_{i=1}^p \phi_i X_{t-i} + \epsilon_t
$$

where:
- $\phi_1, \dots, \phi_p$ are the autoregressive coefficients
- $c$ is a constant (related to the unconditional mean $\mu = c / (1 - \sum_i \phi_i)$)
- $\epsilon_t \sim \text{WN}(0, \sigma^2)$ is white noise

Using the **lag operator** $L$ (defined by $L^k X_t = X_{t-k}$):

$$
\Phi(L) X_t = c + \epsilon_t, \quad \Phi(L) = 1 - \phi_1 L - \phi_2 L^2 - \cdots - \phi_p L^p
$$

**Yule-Walker equations** provide a method-of-moments estimator linking autocovariances to $\phi$ parameters:

$$
\begin{pmatrix} \gamma(0) & \gamma(1) & \cdots & \gamma(p-1) \\ \gamma(1) & \gamma(0) & \cdots & \gamma(p-2) \\ \vdots & & \ddots & \vdots \\ \gamma(p-1) & \gamma(p-2) & \cdots & \gamma(0) \end{pmatrix} \begin{pmatrix} \phi_1 \\ \phi_2 \\ \vdots \\ \phi_p \end{pmatrix} = \begin{pmatrix} \gamma(1) \\ \gamma(2) \\ \vdots \\ \gamma(p) \end{pmatrix}
$$

where $\gamma(k) = \text{Cov}(X_t, X_{t-k})$ is the autocovariance at lag $k$.

**Autocorrelation Function (ACF)**: $\rho(k) = \gamma(k)/\gamma(0)$. For a stationary AR($p$) process, the ACF decays geometrically.

**Partial Autocorrelation Function (PACF)**: The PACF cuts off after lag $p$ for an AR($p$) process — this is the key diagnostic tool for identifying $p$.

## Stationarity Condition

For an $AR(p)$ process to be **weakly stationary** (constant mean and autocovariance structure), the roots of the characteristic polynomial must lie **outside** the unit circle in the complex plane:

$$
\Phi(z) = 1 - \phi_1 z - \phi_2 z^2 - \cdots - \phi_p z^p = 0 \implies |z_i| > 1 \; \forall i
$$

Equivalently, the eigenvalues of the companion matrix $\mathbf{F}$ must lie inside the unit circle:

$$
\mathbf{F} = \begin{pmatrix} \phi_1 & \phi_2 & \cdots & \phi_p \\ 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & & \ddots & \vdots \end{pmatrix}
$$

For an $AR(1)$: stationarity requires $|\phi_1| < 1$. When $\phi_1 = 1$, the process is a unit root (random walk), non-stationary.

## Key Properties

- **Unconditional mean**: $\mu = c / (1 - \phi_1 - \cdots - \phi_p)$ (requires stationarity)
- **Unconditional variance**: $\gamma(0) = \sigma^2 / (1 - \phi_1^2 - \cdots)$ for $AR(1)$: $\gamma(0) = \sigma^2/(1-\phi_1^2)$
- **Mean reversion speed**: For AR(1), the half-life of a shock is $\ln(0.5)/\ln(|\phi_1|)$ periods
- **Forecasting**: The $h$-step-ahead forecast is $\hat{X}_{t+h|t} = \phi_1^h (X_t - \mu) + \mu$ for AR(1)
- **Innovation representation**: Every stationary AR process has an infinite MA($\infty$) representation: $X_t = \mu + \sum_{j=0}^\infty \psi_j \epsilon_{t-j}$

## Python Implementation

```python
import numpy as np
import pandas as pd
from statsmodels.tsa.ar_model import AutoReg
from statsmodels.tsa.stattools import acf, pacf, adfuller
import warnings

def fit_ar_model(data: np.ndarray, lags: int = 1) -> dict:
    """
    Fit an AR(p) model and return key statistics.
    """
    model = AutoReg(data, lags=lags, old_names=False)
    result = model.fit()
    return {
        'params': result.params,
        'aic': result.aic,
        'bic': result.bic,
        'resid_std': result.resid.std()
    }

def select_ar_order(data: np.ndarray, max_lags: int = 20) -> int:
    """
    Select AR order by minimizing BIC (more parsimonious than AIC).
    """
    bics = {}
    for p in range(1, max_lags + 1):
        try:
            with warnings.catch_warnings():
                warnings.simplefilter("ignore")
                model = AutoReg(data, lags=p, old_names=False)
                res = model.fit()
                bics[p] = res.bic
        except Exception:
            continue
    return min(bics, key=bics.get)

def ar_forecast(data: np.ndarray, lags: int, steps: int = 10) -> np.ndarray:
    """
    Generate multi-step forecasts from a fitted AR(p) model.
    """
    model = AutoReg(data, lags=lags, old_names=False)
    result = model.fit()
    forecasts = result.predict(start=len(data), end=len(data) + steps - 1)
    return forecasts

def mean_reversion_halflife(phi: float) -> float:
    """
    Compute the half-life of mean reversion for an AR(1) process.
    phi: autoregressive coefficient (0 < phi < 1 for mean reversion)
    """
    if abs(phi) >= 1:
        return float('inf')
    return np.log(0.5) / np.log(abs(phi))

def ar1_simulate(phi: float, sigma: float, n: int, mu: float = 0.0) -> np.ndarray:
    """Simulate an AR(1) process."""
    x = np.zeros(n)
    x[0] = mu
    eps = np.random.normal(0, sigma, n)
    for t in range(1, n):
        x[t] = mu + phi * (x[t-1] - mu) + eps[t]
    return x

# Example: Spread mean reversion (pairs trading context)
np.random.seed(42)
spread = ar1_simulate(phi=0.85, sigma=0.5, n=500, mu=0.0)
p_opt = select_ar_order(spread, max_lags=10)
fit = fit_ar_model(spread, lags=p_opt)
hl = mean_reversion_halflife(fit['params'][1])  # params[0] is const
```

## ACF/PACF Pattern for AR(2)

```chart
{
  "type": "bar",
  "xAxis": "lag",
  "data": [
    {"lag": "1", "acf": 0.72, "pacf": 0.72},
    {"lag": "2", "acf": 0.45, "pacf": 0.18},
    {"lag": "3", "acf": 0.28, "pacf": 0.02},
    {"lag": "4", "acf": 0.17, "pacf": -0.01},
    {"lag": "5", "acf": 0.10, "pacf": 0.00},
    {"lag": "6", "acf": 0.06, "pacf": 0.01}
  ],
  "bars": [
    {"dataKey": "acf", "fill": "#3b82f6", "name": "ACF"},
    {"dataKey": "pacf", "fill": "#ef4444", "name": "PACF"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---:|:---|:---|
| $p$ | AR order | Number of lagged terms | 1 – 20 |
| $\phi_i$ | AR coefficients | Autoregressive weights | $(-1, 1)$ for stationarity |
| $c$ | Intercept | Related to unconditional mean | Any real |
| $\sigma^2$ | Innovation variance | White noise variance | > 0 |
| $\mu$ | Unconditional mean | Long-run average of the process | Any real |

## Limitations & Extensions

**Limitations:**
- **Linearity**: AR models cannot capture non-linear dynamics (e.g., asymmetric mean reversion, regime switches). Threshold AR (TAR) and STAR models address this.
- **Homoskedasticity**: AR models assume constant innovation variance. Combining with ARCH/GARCH removes this restriction.
- **Stationarity requirement**: Financial price series are typically non-stationary (unit root); AR models are only suitable after differencing or for stationary spread/rate series.
- **Lag selection uncertainty**: AIC and BIC can disagree; cross-validation on out-of-sample forecasts is more reliable for trading applications.

**Extensions:**
- **ARMA** ([[arma-models]]): Add moving-average terms for richer autocorrelation structures.
- **ARIMA** ([[arima-models]]): Integrate differencing for non-stationary series.
- **VAR (Vector AR)**: Multivariate generalization modeling cross-asset dynamics.
- **ARCH/GARCH** ([[arch-models]]): Combine AR mean dynamics with autoregressive conditional variance.

## Practical Applications

1. **Pairs Trading**: Estimating the mean-reversion speed of a spread via AR(1) determines the optimal entry/exit threshold and holding period.
2. **Interest Rate Modeling**: Short rates exhibit AR dynamics (e.g., Vasicek model is continuous-time AR(1)).
3. **Volatility Forecasting**: Realized volatility series fit AR models well; AR-based forecasts compete with GARCH for daily horizons.
4. **Earnings Seasonality**: AR models with seasonal lags capture quarterly earnings persistence in fundamental factor models.
5. **Market Microstructure**: Order flow imbalance follows AR dynamics; fitting AR(p) to imbalance series informs optimal execution timing.

## Related Topics
- [[spectral-analysis]]
- [[volatility-forecasting]]
- [[mcmc]]
- [[levy-processes]]
- [[arma-models]]
- [[arima-models]]

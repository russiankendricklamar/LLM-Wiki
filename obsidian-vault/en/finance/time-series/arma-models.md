---
title: "ARMA (Autoregressive Moving Average)"
category: "Signal Analysis"
order: 13
lang: "en"
slug: "arma-models"
---
# ARMA Models

The **Autoregressive Moving Average (ARMA)** model provides a parsimonious description of a stationary stochastic process in terms of two polynomials: one for the autoregression (AR) and one for the moving average (MA). ARMA is the canonical linear time-series model and serves as the mean-equation component in many compound financial models.

## Prerequisites

[[ar-models]]

## Overview & Background

The ARMA framework synthesizes two earlier model families. **AR models** (Yule, 1927) express the current value as a linear combination of past values. **MA models** (Slutzky, 1927; Walker, 1931) express the current value as a linear combination of past random shocks. Box and Jenkins (1970) unified these into the ARMA framework with a systematic methodology for identification, estimation, and forecasting.

In finance, pure AR or pure MA representations often require many parameters to capture autocorrelation structure adequately. ARMA achieves a more parsimonious representation: an ARMA(1,1) with just two parameters can match the ACF of an AR(10) or MA(10). This parsimony is essential for robust estimation on finite financial time series.

## Mathematical Framework

An $ARMA(p, q)$ model for a stationary process $\{X_t\}$ is:

$$
X_t = c + \sum_{i=1}^p \phi_i X_{t-i} + \epsilon_t + \sum_{j=1}^q \theta_j \epsilon_{t-j}
$$

In lag operator notation:

$$
\phi(L) X_t = c + \theta(L) \epsilon_t
$$

where $\phi(L) = 1 - \phi_1 L - \cdots - \phi_p L^p$ and $\theta(L) = 1 + \theta_1 L + \cdots + \theta_q L^q$, and $\epsilon_t \sim \text{WN}(0, \sigma^2)$.

**Wold decomposition**: Every covariance-stationary process has an $MA(\infty)$ representation:

$$
X_t = \mu + \sum_{j=0}^\infty \psi_j \epsilon_{t-j}
$$

The ARMA model provides a rational polynomial approximation $\psi(L) = \theta(L)/\phi(L)$ to this infinite MA, achieving finite parametrization.

**Autocovariance structure**: For $ARMA(p,q)$, the ACF satisfies the AR recursion for lags $k > q$:

$$
\gamma(k) = \phi_1 \gamma(k-1) + \phi_2 \gamma(k-2) + \cdots + \phi_p \gamma(k-p), \quad k > q
$$

This means the ACF of an $ARMA(p,q)$ tails off (unlike pure AR where it tails off from lag 1, or pure MA where it cuts off at lag $q$).

**Spectral density**: The power spectral density of $ARMA(p,q)$ is:

$$
f(\omega) = \frac{\sigma^2}{2\pi} \cdot \frac{|\theta(e^{-i\omega})|^2}{|\phi(e^{-i\omega})|^2}
$$

This rational spectral density is the key connection to [[spectral-analysis]] and frequency-domain filtering.

### Estimation: Maximum Likelihood

For Gaussian innovations, the log-likelihood is:

$$
\ell(\phi, \theta, \sigma^2) = -\frac{T}{2}\ln(2\pi) - \frac{1}{2}\ln|\Sigma| - \frac{1}{2}(X - \mu)^T \Sigma^{-1} (X - \mu)
$$

where $\Sigma$ is the covariance matrix of $(X_1, \dots, X_T)$ implied by the ARMA parameters. In practice, the **Innovations Algorithm** or **Kalman filter** is used for efficient likelihood evaluation.

### Box-Jenkins Identification

The Box-Jenkins methodology uses ACF and PACF patterns:

| Model | ACF | PACF |
|:---|:---|:---|
| AR($p$) | Tails off geometrically | Cuts off after lag $p$ |
| MA($q$) | Cuts off after lag $q$ | Tails off geometrically |
| ARMA($p,q$) | Tails off after lag $q-p$ | Tails off after lag $p-q$ |

## Key Properties

- **Stationarity condition**: Roots of $\phi(z) = 0$ must lie outside the unit circle.
- **Invertibility condition**: Roots of $\theta(z) = 0$ must lie outside the unit circle (ensures unique MA representation and convergent AR($\infty$) representation).
- **Parsimony**: ARMA($p,q$) can represent AR($\infty$) and MA($\infty$) processes with a finite parameter count.
- **Causality**: A stationary ARMA process is causal (expressible as $MA(\infty)$ in terms of present and past innovations only) when $\phi(z) \neq 0$ for $|z| \leq 1$.

## Python Implementation

```python
import numpy as np
import pandas as pd
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.tsa.stattools import acf, pacf
import warnings

def fit_arma_model(data: pd.Series, p: int = 1, q: int = 1) -> dict:
    """
    Fit ARMA(p,q) — equivalent to ARIMA(p,0,q).
    Returns parameters, information criteria, and residual diagnostics.
    """
    model = ARIMA(data, order=(p, 0, q))
    result = model.fit()
    return {
        'params': result.params,
        'aic': result.aic,
        'bic': result.bic,
        'resid': result.resid,
        'forecast_5': result.forecast(steps=5).values
    }

def grid_search_arma(data: pd.Series, max_p: int = 5, max_q: int = 5) -> pd.DataFrame:
    """
    Grid search over ARMA(p,q) orders, return BIC table.
    """
    results = []
    for p in range(1, max_p + 1):
        for q in range(0, max_q + 1):
            try:
                with warnings.catch_warnings():
                    warnings.simplefilter("ignore")
                    model = ARIMA(data, order=(p, 0, q))
                    res = model.fit()
                    results.append({'p': p, 'q': q, 'aic': res.aic, 'bic': res.bic})
            except Exception:
                continue
    df = pd.DataFrame(results)
    return df.sort_values('bic').reset_index(drop=True)

def simulate_arma(phi: list, theta: list, sigma: float, n: int) -> np.ndarray:
    """
    Simulate ARMA(p,q) process.
    phi: AR coefficients [phi_1, ..., phi_p]
    theta: MA coefficients [theta_1, ..., theta_q]
    """
    p, q = len(phi), len(theta)
    eps = np.random.normal(0, sigma, n + max(p, q))
    x = np.zeros(n + max(p, q))

    for t in range(max(p, q), n + max(p, q)):
        ar_part = sum(phi[i] * x[t-i-1] for i in range(p))
        ma_part = sum(theta[j] * eps[t-j-1] for j in range(q))
        x[t] = ar_part + ma_part + eps[t]

    return x[max(p, q):]

def check_stationarity_invertibility(phi: list, theta: list) -> dict:
    """Check stationarity (AR roots outside unit circle) and invertibility (MA roots outside)."""
    ar_poly = np.array([1] + [-p for p in phi])
    ma_poly = np.array([1] + list(theta))
    ar_roots = np.roots(ar_poly)
    ma_roots = np.roots(ma_poly)
    return {
        'stationary': all(abs(r) > 1 for r in ar_roots),
        'invertible': all(abs(r) > 1 for r in ma_roots),
        'ar_roots': ar_roots,
        'ma_roots': ma_roots
    }

# Example: Fit ARMA to realized volatility series
np.random.seed(42)
rv_series = pd.Series(simulate_arma(phi=[0.7, -0.2], theta=[0.3], sigma=0.01, n=500))
search = grid_search_arma(rv_series, max_p=4, max_q=4)
best_p, best_q = search.iloc[0]['p'], search.iloc[0]['q']
fit = fit_arma_model(rv_series, p=int(best_p), q=int(best_q))
```

## ACF Comparison: AR(1) vs MA(1) vs ARMA(1,1)

```chart
{
  "type": "line",
  "xAxis": "lag",
  "data": [
    {"lag": "1", "ar1": 0.80, "ma1": 0.45, "arma11": 0.70},
    {"lag": "2", "ar1": 0.64, "ma1": 0.00, "arma11": 0.49},
    {"lag": "3", "ar1": 0.51, "ma1": 0.00, "arma11": 0.39},
    {"lag": "4", "ar1": 0.41, "ma1": 0.00, "arma11": 0.31},
    {"lag": "5", "ar1": 0.33, "ma1": 0.00, "arma11": 0.25},
    {"lag": "6", "ar1": 0.26, "ma1": 0.00, "arma11": 0.20}
  ],
  "lines": [
    {"dataKey": "ar1", "stroke": "#3b82f6", "name": "AR(1) φ=0.8"},
    {"dataKey": "ma1", "stroke": "#ef4444", "name": "MA(1) θ=0.8"},
    {"dataKey": "arma11", "stroke": "#10b981", "name": "ARMA(1,1)"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---:|:---|:---|
| $p$ | AR order | Number of autoregressive lags | 1 – 10 |
| $q$ | MA order | Number of moving-average lags | 0 – 10 |
| $\phi_i$ | AR coefficients | Autoregressive weights | Stationarity region |
| $\theta_j$ | MA coefficients | Moving-average weights | Invertibility region |
| $\sigma^2$ | Innovation variance | White noise variance | > 0 |

## Limitations & Extensions

**Limitations:**
- **Stationarity requirement**: ARMA applies only to stationary series. Non-stationary series require differencing first (ARIMA).
- **Linear mean dynamics**: Cannot model regime switches, non-linear feedback, or threshold effects.
- **Parameter redundancy**: ARMA models can have canceling AR and MA roots (parameter non-identification). Checking for common roots is essential.
- **Long memory**: Standard ARMA has short memory (exponentially decaying ACF). ARFIMA is needed for long-range dependence.

**Extensions:**
- **ARIMA** ([[arima-models]]): Adds differencing for non-stationary series.
- **ARMA-GARCH**: Uses ARMA for the conditional mean and GARCH for the conditional variance — the standard compound model for daily returns.
- **State-space / Kalman filter**: Expresses ARMA in state-space form for exact likelihood computation and handling of missing observations.
- **[[mcmc]] sampling**: Bayesian estimation of ARMA with informative priors prevents overfitting in short samples.

## Practical Applications

1. **Interest Rate Modeling**: Short-rate spreads over policy rates exhibit ARMA dynamics; ARMA(1,1) is often sufficient.
2. **Order Flow**: Trade sign imbalance series follow ARMA patterns useful for short-term price prediction.
3. **Volatility Forecasting**: Realized volatility logarithm follows ARMA-like dynamics; ARMA provides baseline forecasts.
4. **Risk Factor Residuals**: After removing systematic exposures from returns, the idiosyncratic residual often has ARMA structure useful for signal generation.
5. **Macro Signal Construction**: Leading indicators in macro models combine ARMA forecasts of individual series into composite indices.

## Related Topics
- [[volatility-forecasting]]
- [[spectral-analysis]]
- [[mcmc]]
- [[black-scholes]]
- [[ar-models]]
- [[arima-models]]

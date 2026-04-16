---
title: "ARIMA (Integrated ARMA)"
category: "Signal Analysis"
order: 14
lang: "en"
slug: "arima-models"
---
# ARIMA Models

The **Autoregressive Integrated Moving Average (ARIMA)** model is a generalization of the ARMA model that handles non-stationary time series through differencing. It is the workhorse of univariate time-series forecasting and an essential tool in quantitative finance for modeling price-adjacent quantities that exhibit trends or unit-root behavior.

## Prerequisites

[[ar-models]], [[arma-models]]

## Overview & Background

Most financial price series are non-stationary: their mean and variance evolve over time, violating the assumptions required for AR and MA estimation. Box and Jenkins (1970) introduced the ARIMA framework as a systematic methodology — Identification, Estimation, Diagnostic Checking — for transforming non-stationary series into stationary ones via differencing, then modeling the stationary residual with ARMA.

The "integrated" in ARIMA refers to the inverse operation of differencing: if a differenced series is ARMA, the original series is the cumulative sum (integral) of that ARMA process. A random walk — the benchmark model for stock prices in the efficient market hypothesis — is precisely an ARIMA(0,1,0) model.

## Mathematical Framework

An $ARIMA(p, d, q)$ model applies $d$ rounds of differencing to produce a stationary series, then models the result as $ARMA(p, q)$.

**Differencing operator**: The $d$-th order difference is:

$$
\nabla^d X_t = (1 - L)^d X_t
$$

For $d=1$: $\nabla X_t = X_t - X_{t-1}$ (first difference — analogous to returns).
For $d=2$: $\nabla^2 X_t = X_t - 2X_{t-1} + X_{t-2}$ (second difference — change in returns).

**Full ARIMA specification** using the lag operator $L$:

$$
\phi(L)(1-L)^d X_t = \theta(L)\epsilon_t + c
$$

where:
- $\phi(L) = 1 - \phi_1 L - \cdots - \phi_p L^p$ is the AR polynomial
- $\theta(L) = 1 + \theta_1 L + \cdots + \theta_q L^q$ is the MA polynomial
- $(1-L)^d$ is the differencing operator of order $d$
- $\epsilon_t \sim \text{WN}(0, \sigma^2)$

**Special cases**:
- $ARIMA(0,1,0)$: Random walk $X_t = X_{t-1} + \epsilon_t$
- $ARIMA(1,1,0)$: Random walk with AR(1) drift in differences
- $ARIMA(0,1,1)$: Exponential smoothing (ETS)
- $ARIMA(p,0,q)$: Stationary $ARMA(p,q)$

**Seasonal ARIMA (SARIMA)**: Extends to seasonal periodicity $s$:

$$
\Phi(L^s)\phi(L)(1-L)^d(1-L^s)^D X_t = \Theta(L^s)\theta(L)\epsilon_t
$$

denoted $SARIMA(p,d,q)(P,D,Q)_s$.

### Unit Root Tests

Before applying ARIMA, it is standard to test for the presence of a unit root ($d=1$). The **Augmented Dickey-Fuller (ADF)** test regresses:

$$
\Delta X_t = \alpha + \beta t + \gamma X_{t-1} + \sum_{j=1}^k \delta_j \Delta X_{t-j} + u_t
$$

$H_0: \gamma = 0$ (unit root present, $d \geq 1$). The test statistic has a non-standard distribution tabulated by Dickey and Fuller (1979).

The **KPSS test** (Kwiatkowski et al., 1992) has the reverse null: $H_0$: stationarity. Using both ADF and KPSS together reduces ambiguity in borderline cases.

## Key Properties

- **Integration order**: A series $X_t$ is $I(d)$ if it becomes stationary after $d$ differences. Most financial prices are $I(1)$; some macro series are $I(2)$.
- **Cointegration**: Two $I(1)$ series $X_t$ and $Y_t$ are cointegrated if $\beta X_t - Y_t \sim I(0)$. Cointegration underpins pairs trading and error-correction models.
- **Invertibility**: The MA polynomial $\theta(L)$ must have roots outside the unit circle for the MA representation to be invertible (unique).
- **Information criteria**: AIC minimizes $-2\ln L + 2k$; BIC minimizes $-2\ln L + k\ln T$. BIC penalizes complexity more heavily and is preferred for parsimonious forecasting models.

## Python Implementation

```python
import numpy as np
import pandas as pd
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.tsa.stattools import adfuller, kpss
import warnings

def test_stationarity(series: pd.Series) -> dict:
    """
    Apply ADF and KPSS tests to determine integration order.
    Returns recommended differencing order d.
    """
    adf_stat, adf_p, _, _, adf_crit, _ = adfuller(series.dropna(), autolag='AIC')
    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        kpss_stat, kpss_p, _, kpss_crit = kpss(series.dropna(), regression='c', nlags='auto')

    return {
        'adf_statistic': adf_stat,
        'adf_p_value': adf_p,
        'adf_reject_h0': adf_p < 0.05,   # Reject unit root
        'kpss_statistic': kpss_stat,
        'kpss_p_value': kpss_p,
        'kpss_reject_h0': kpss_p < 0.05, # Reject stationarity
    }

def auto_arima_bic(series: pd.Series, max_p: int = 4, max_q: int = 4, d: int = 1) -> dict:
    """
    Grid-search ARIMA(p,d,q) order minimizing BIC.
    """
    best_bic = np.inf
    best_order = (1, d, 0)

    for p in range(0, max_p + 1):
        for q in range(0, max_q + 1):
            if p == 0 and q == 0:
                continue
            try:
                with warnings.catch_warnings():
                    warnings.simplefilter("ignore")
                    model = ARIMA(series, order=(p, d, q))
                    result = model.fit()
                    if result.bic < best_bic:
                        best_bic = result.bic
                        best_order = (p, d, q)
            except Exception:
                continue

    return {'order': best_order, 'bic': best_bic}

def fit_arima_model(data: pd.Series, p: int = 1, d: int = 1, q: int = 1) -> dict:
    """
    Fit ARIMA(p,d,q) and return forecasts + diagnostics.
    """
    model = ARIMA(data, order=(p, d, q))
    result = model.fit()
    forecasts = result.forecast(steps=10)
    conf_int = result.get_forecast(steps=10).conf_int()

    return {
        'aic': result.aic,
        'bic': result.bic,
        'params': result.params,
        'forecast': forecasts,
        'forecast_ci': conf_int,
        'ljung_box_p': result.test_serial_correlation('ljungbox')[0][1][-1]
    }

# Example: Model log-price series
np.random.seed(42)
n = 300
log_prices = pd.Series(
    np.cumsum(np.random.normal(0.0005, 0.015, n)),
    index=pd.date_range("2021-01-01", periods=n, freq='B')
)

# Test for unit root
stat_result = test_stationarity(log_prices)
# Select order
order_result = auto_arima_bic(log_prices, d=1)
# Fit chosen model
p, d, q = order_result['order']
fit = fit_arima_model(log_prices, p=p, d=d, q=q)
```

## ARIMA Forecast with Confidence Intervals

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": "T-5", "actual": 1.02, "forecast": 1.02},
    {"t": "T-4", "actual": 1.04, "forecast": 1.04},
    {"t": "T-3", "actual": 1.01, "forecast": 1.01},
    {"t": "T-2", "actual": 1.05, "forecast": 1.05},
    {"t": "T-1", "actual": 1.07, "forecast": 1.07},
    {"t": "T+1", "actual": 0, "forecast": 1.08},
    {"t": "T+2", "actual": 0, "forecast": 1.09},
    {"t": "T+3", "actual": 0, "forecast": 1.10},
    {"t": "T+5", "actual": 0, "forecast": 1.11}
  ],
  "lines": [
    {"dataKey": "actual", "stroke": "#3b82f6", "name": "Observed"},
    {"dataKey": "forecast", "stroke": "#ef4444", "name": "Forecast"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---:|:---|:---|
| $p$ | AR order | Autoregressive lags in differenced series | 0 – 5 |
| $d$ | Integration order | Number of differences to achieve stationarity | 0, 1, 2 |
| $q$ | MA order | Moving average lags in differenced series | 0 – 5 |
| $s$ | Seasonal period | Period for seasonal ARIMA (SARIMA) | 4, 12, 52, 252 |
| $\gamma$ | ADF coefficient | Tests $H_0$: unit root ($\gamma = 0$) | — |

## Limitations & Extensions

**Limitations:**
- **Linearity**: ARIMA cannot capture non-linear dynamics or regime changes. TAR-ARIMA and MS-ARIMA (Markov switching) are non-linear extensions.
- **Normality of residuals**: Maximum likelihood estimation assumes Gaussian innovations; heavy-tailed residuals bias standard errors.
- **Long memory**: Standard ARIMA cannot capture long-range dependence (Hurst exponents significantly above 0.5). Fractional ARIMA (ARFIMA) with non-integer $d$ addresses this.
- **Spurious stationarity**: Differencing an $I(0)$ series introduces a unit root in the MA component (overdifferencing), inflating forecast uncertainty.

**Extensions:**
- **ARFIMA**: Fractional integration order $0 < d < 0.5$ for long-memory series (related to [[hurst-exponent]]).
- **ARIMAX / Transfer Function**: Add exogenous regressors to the ARIMA mean equation.
- **SARIMA**: Seasonal extension handles quarterly earnings, monthly macro data.
- **VAR/VECM**: Multivariate ARIMA with cointegration for modeling interrelated series.

## Practical Applications

1. **Macro Forecasting**: GDP, CPI, and industrial production series are typically $I(1)$ or $I(2)$; ARIMA/SARIMA provides baseline forecasts for central bank scenario analysis.
2. **Yield Curve Dynamics**: Interest rate levels exhibit near-unit-root behavior; ARIMA models of rates inform fixed income risk management.
3. **Volatility Forecasting**: Realized volatility series are near-$I(1)$; ARFIMA captures their long memory better than standard ARIMA.
4. **Algorithmic Trading**: ARIMA forecasts of short-term price momentum are combined with cross-sectional signals in multi-factor execution models.
5. **Earnings Forecasting**: SARIMA with quarterly seasonality provides base-rate earnings forecasts for fundamental momentum strategies.

## Related Topics
- [[volatility-forecasting]]
- [[hurst-exponent]]
- [[mcmc]]
- [[levy-processes]]
- [[arma-models]]
- [[ar-models]]
- [[cointegration]] — ARIMA with cointegration for multivariate series

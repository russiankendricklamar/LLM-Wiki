---
title: "ARIMA (Integrated ARMA)"
category: "Signal Analysis"
order: 167
lang: "en"
slug: "arima-models"
---
# ARIMA Models

The **Autoregressive Integrated Moving Average (ARIMA)** model is a generalization of an ARMA model that is applied in some cases where data show evidence of non-stationarity.

## Mathematical Definition

An $ARIMA(p, d, q)$ model is characterized by:
- $p$: Order of the autoregressive part
- $d$: Degree of first differencing involved
- $q$: Order of the moving average part

The differenced series $Y_t = (1-L)^d X_t$ is modeled as an $ARMA(p, q)$ process.

$$
\phi(L)(1-L)^d X_t = \theta(L)\epsilon_t
$$

## Identification
Non-stationary data is often transformed into stationary data by differencing before applying the ARMA framework.

## Python Implementation

```python
from statsmodels.tsa.arima.model import ARIMA

def fit_arima_model(data, p=1, d=1, q=1):
    model = ARIMA(data, order=(p, d, q))
    model_fit = model.fit()
    return model_fit.forecast(steps=5)
```

## Related Topics
- [[volatility-forecasting]]
- [[hurst-exponent]]
- [[mcmc]]
- [[levy-processes]]

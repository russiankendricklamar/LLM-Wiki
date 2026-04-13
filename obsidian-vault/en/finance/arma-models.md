---
title: "ARMA (Autoregressive Moving Average)"
category: "Signal Analysis"
order: 166
lang: "en"
slug: "arma-models"
---
# ARMA Models

The **Autoregressive Moving Average (ARMA)** model provides a parsimonious description of a stationary stochastic process in terms of two polynomials, one for the autoregression (AR) and the second for the moving average (MA).

## Mathematical Definition

An $ARMA(p, q)$ model is given by:

$$
X_t = c + \epsilon_t + \sum_{i=1}^p \phi_i X_{t-i} + \sum_{j=1}^q \theta_j \epsilon_{t-j}
$$

Using the lag operator $L$:

$$
(1 - \sum_{i=1}^p \phi_i L^i) X_t = c + (1 + \sum_{j=1}^q \theta_j L^j) \epsilon_t
$$

## Box-Jenkins Methodology
The identification, estimation, and diagnostic checking of ARMA models are central to the Box-Jenkins approach for time-series analysis.

## Python Implementation

```python
from statsmodels.tsa.arima.model import ARIMA
import numpy as np

def fit_arma_model(data, p=1, q=1):
    # ARIMA(p, 0, q) is equivalent to ARMA(p, q)
    model = ARIMA(data, order=(p, 0, q))
    model_fit = model.fit()
    return model_fit.summary()
```

## Related Topics
- [[volatility-forecasting]]
- [[spectral-analysis]]
- [[mcmc]]
- [[black-scholes]]

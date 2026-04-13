---
title: "AR (Autoregressive) Models"
category: "Signal Analysis"
order: 165
lang: "en"
slug: "ar-models"
---
# AR (Autoregressive) Models

An **Autoregressive (AR) model** represents a type of random process where the output variable depends linearly on its own previous values and on a stochastic term.

## Mathematical Definition

An $AR(p)$ model is defined as:

$$
X_t = c + \sum_{i=1}^p \phi_i X_{t-i} + \epsilon_t
$$

Where:
- $\phi_1, \dots, \phi_p$ are parameters of the model
- $c$ is a constant
- $\epsilon_t$ is white noise

## Stationarity
For an $AR(p)$ process to be stationary, the roots of the characteristic equation $1 - \sum_{i=1}^p \phi_i z^i = 0$ must lie outside the unit circle in the complex plane.

## Python Implementation

```python
from statsmodels.tsa.ar_model import AutoReg
import numpy as np

def fit_ar_model(data, lags=1):
    model = AutoReg(data, lags=lags)
    model_fit = model.fit()
    return model_fit.params
```

## Related Topics
- [[spectral-analysis]]
- [[volatility-forecasting]]
- [[mcmc]]
- [[levy-processes]]

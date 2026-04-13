---
title: "GARCH Models"
category: "Stochastic Processes"
order: 169
lang: "en"
slug: "garch-models"
---
# GARCH Models

The **Generalized Autoregressive Conditional Heteroskedasticity (GARCH)** model is an extension of ARCH that allows for a more parsimonious representation of volatility by including lagged values of the conditional variance.

## Mathematical Definition

A $GARCH(p, q)$ model is defined as:

$$
\sigma_t^2 = \omega + \sum_{i=1}^q \alpha_i \epsilon_{t-i}^2 + \sum_{j=1}^p \beta_j \sigma_{t-j}^2
$$

Where:
- $\omega > 0, \alpha_i \ge 0, \beta_j \ge 0$
- Persistence is measured by $\sum \alpha_i + \sum \beta_j$.

## Persistence and Mean Reversion
If the sum of coefficients is less than 1, the process is stationary and exhibits mean reversion to the long-run variance $\sigma^2 = \omega / (1 - \sum \alpha_i - \sum \beta_j)$.

## Python Implementation

```python
from arch import arch_model

def fit_garch_model(returns, p=1, q=1):
    model = arch_model(returns, vol='Garch', p=p, q=q)
    res = model.fit(disp='off')
    return res.conditional_volatility
```

## Related Topics
- [[volatility-forecasting]]
- [[arch-models]]
- [[black-scholes]]
- [[mcmc]]

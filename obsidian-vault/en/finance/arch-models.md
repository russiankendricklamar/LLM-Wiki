---
title: "ARCH Models"
category: "Stochastic Processes"
order: 168
lang: "en"
slug: "arch-models"
---
# ARCH Models

The **Autoregressive Conditional Heteroskedasticity (ARCH)** model is used to model time series that exhibit time-varying volatility clustering.

## Mathematical Definition

An $ARCH(q)$ model for the variance of the residuals $\epsilon_t$ is:

$$
\epsilon_t = \sigma_t z_t
$$
$$
\sigma_t^2 = \alpha_0 + \sum_{i=1}^q \alpha_i \epsilon_{t-i}^2
$$

Where:
- $z_t \sim N(0, 1)$
- $\alpha_0 > 0$ and $\alpha_i \ge 0$ to ensure positive variance.

## Volatility Clustering
ARCH models capture the phenomenon where large shocks tend to be followed by large shocks, and small by small.

## Python Implementation

Using the `arch` library:

```python
from arch import arch_model

def fit_arch_model(returns, p=1):
    model = arch_model(returns, vol='ARCH', p=p)
    res = model.fit(disp='off')
    return res.summary()
```

## Related Topics
- [[volatility-forecasting]]
- [[garch-models]]
- [[mcmc]]
- [[levy-processes]]

---
title: "Volatility Forecasting (GARCH, HAR)"
category: "Stochastic Processes"
order: 125
lang: "en"
slug: "volatility-forecasting"
---
# Volatility Forecasting (GARCH, HAR)

**Volatility Forecasting** is the process of predicting the future magnitude of price fluctuations. Unlike price direction, volatility is often persistent (volatility clustering) and mean-reverting, making it more predictable. This is fundamental for options pricing, risk management, and sizing positions.

## Practical Implementation Guide

1.  **GARCH (Generalized Autoregressive Conditional Heteroskedasticity)**:
    *   Captures the time-varying variance.
    *   Models the current variance $\sigma_t^2$ as a function of past squared returns and past variances.
2.  **HAR (Heterogeneous Autoregressive)**:
    *   Uses high-frequency data (realized volatility).
    *   Based on the "Heterogeneous Market Hypothesis": volatility is driven by different groups of traders (daily, weekly, monthly).
3.  **Realized Volatility**: Calculating volatility from intraday 5-minute returns for higher precision.

## Mathematical Formulation

The standard GARCH(1,1) model:
$$
\sigma_t^2 = \omega + \alpha \epsilon_{t-1}^2 + \beta \sigma_{t-1}^2
$$
where $\epsilon_{t-1}$ is the return at $t-1$.

The HAR-RV model:
$$
RV_{t+1d} = \beta_0 + \beta_d RV_{t} + \beta_w RV_{t,w} + \beta_m RV_{t,m} + \epsilon_{t+1}
$$
where $RV_{t,w}$ is the average realized volatility over the past week. To estimate the parameters of these stochastic processes, [[mcmc]] is often used for better handling of non-Gaussian distributions.

## Key Metrics
- **Mean Squared Error (MSE)**: The difference between predicted and realized volatility.
- **QLIKE Loss**: A robust loss function specifically for volatility forecasting.
- **Persistence ($\alpha + \beta$)**: Measures how long a volatility shock lasts.
- **Sharpe Ratio of Vol-Targeted Portfolio**: How well forecasting improves risk-adjusted returns.

## Python: GARCH(1,1) with `arch` Library

```python
import numpy as np
import pandas as pd
from arch import arch_model

# Generate dummy returns
np.random.seed(42)
returns = np.random.normal(0, 1, 1000)

# Fit GARCH(1,1)
model = arch_model(returns, vol='Garch', p=1, q=1)
model_fit = model.fit(disp='off')

# Forecast next 5 days
forecasts = model_fit.forecast(horizon=5)
print(forecasts.variance.dropna().tail())
```

## Financial Context

Volatility forecasting is the engine behind **Volatility Targeting** strategies, where a portfolio's exposure is reduced during high-volatility regimes to keep risk constant. In risk management, it is the primary input for calculating [[value-at-risk]] (VaR). Advanced models use [[gan]] to simulate realistic volatility surfaces for stress testing.

## Related Topics
- [[heston-model]]
- [[mcmc]]
- [[value-at-risk]]
- [[monte-carlo-method]]
---

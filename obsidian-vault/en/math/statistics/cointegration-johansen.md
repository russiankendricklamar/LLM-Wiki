---
title: 'Time Series: Cointegration & Johansen Test'
category: Advanced Math and Stats
order: 177
lang: en
slug: cointegration-johansen
---

Cointegration occurs when two or more non-stationary time series (integrated of order 1, $I(1)$) share a common stochastic drift, meaning a linear combination of them is stationary ($I(0)$).

### Error Correction Model (ECM)
If $Y_t$ and $X_t$ are cointegrated, their short-term dynamics are tied to their long-term equilibrium:
$\Delta Y_t = \alpha (Y_{t-1} - \beta X_{t-1}) + \dots + \epsilon_t$

### Johansen Test
The Johansen test generalizes this to multiple variables using a Vector Autoregression (VAR) framework. We rewrite the VAR(p) as a Vector Error Correction Model (VECM):
$\Delta Y_t = \Pi Y_{t-1} + \sum_{i=1}^{p-1} \Gamma_i \Delta Y_{t-i} + \epsilon_t$
The rank $r$ of matrix $\Pi$ defines the number of cointegrating vectors. If $0 < r < n$, then $\Pi = \alpha \beta^T$, where $\beta$ holds the cointegrating relationships. The test uses trace and maximum eigenvalue statistics.

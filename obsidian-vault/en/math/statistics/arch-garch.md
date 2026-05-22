---
title: 'Time Series: ARCH and GARCH Models'
category: Advanced Math and Stats
order: 178
lang: en
slug: arch-garch
---

Financial returns often exhibit volatility clustering: periods of high and low variance.

### ARCH(q)
The Autoregressive Conditional Heteroskedasticity model defines the variance $\sigma_t^2$ as a function of past squared errors:
$r_t = \mu + \epsilon_t, \quad \epsilon_t = \sigma_t z_t, \quad z_t \sim \mathcal{N}(0, 1)$
$\sigma_t^2 = \alpha_0 + \sum_{i=1}^q \alpha_i \epsilon_{t-i}^2$

### GARCH(p, q)
The Generalized ARCH model includes past variances, creating an ARMA-like process for volatility:
$\sigma_t^2 = \alpha_0 + \sum_{i=1}^q \alpha_i \epsilon_{t-i}^2 + \sum_{j=1}^p \beta_j \sigma_{t-j}^2$
For strict stationarity in GARCH(1,1), we require $\alpha_1 + \beta_1 < 1$. These models are critical for risk management and option pricing (e.g., modifying Black-Scholes).

---
title: "GARCH and ARCH Models"
category: "Time Series"
order: 10
lang: "en"
slug: "garch-models"
---

# ARCH and GARCH Models: Volatility Clustering

In financial time series, "Volatility Clustering" is the phenomenon where large price changes tend to be followed by large changes, and small by small. Standard linear models like ARMA assume constant variance (homoscedasticity). **ARCH** (Autoregressive Conditional Heteroscedasticity) and its generalized version, **GARCH**, were developed to model this time-varying risk.

## 1. ARCH Model (Engle, 1982)

The ARCH(p) model assumes that the variance of the current error term $\epsilon_t$ is a linear function of the squares of past error terms:
$$\sigma_t^2 = \alpha_0 + \sum_{i=1}^p \alpha_i \epsilon_{t-i}^2$$
- **Insight**: If yesterday's market was volatile ($\epsilon_{t-1}^2$ is large), today's predicted variance $\sigma_t^2$ will also be large.

## 2. GARCH Model (Bollerslev, 1986)

GARCH(p, q) improves ARCH by adding a "memory" component. It assumes that today's variance depends on both past squared errors AND past variances:
$$\sigma_t^2 = \omega + \sum_{i=1}^q \alpha_i \epsilon_{t-i}^2 + \sum_{j=1}^p \beta_j \sigma_{t-j}^2$$
- **The Persistence**: The sum $\sum \alpha_i + \sum \beta_j$ measures the "persistence" of volatility shocks. In finance, this sum is often close to 1, meaning shocks take a long time to die out (**IGARCH**).

## 3. Asymmetric GARCH (GJR-GARCH)

Empirically, volatility increases more when the price drops than when it rises (the **Leverage Effect**). GJR-GARCH accounts for this by adding a dummy variable $I_{t-1}$ that triggers only for negative returns:
$$\sigma_t^2 = \omega + (\alpha + \gamma I_{t-1}) \epsilon_{t-1}^2 + \beta \sigma_{t-1}^2$$
- This allows quants to model the "fear" in the market accurately.

## 4. Estimation and AI Integration

- **Maximum Likelihood (MLE)**: GARCH parameters are estimated by maximizing the probability of the observed return series under the time-varying normal distribution.
- **Deep GARCH**: Modern hedge funds use **Neural GARCH** models, where a Recurrent Neural Network (LSTM/GRU) replaces the linear GARCH equation to capture more complex non-linear risk patterns.

## Visualization: Volatility Spikes

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": 1, "return": 0.1,  "garch_vol": 1.2},
    {"time": 2, "return": -0.2, "garch_vol": 1.1},
    {"time": 3, "return": 2.5,  "garch_vol": 1.5},
    {"time": 4, "return": -3.1, "garch_vol": 3.8},
    {"time": 5, "return": 0.5,  "garch_vol": 3.2},
    {"time": 6, "return": 0.1,  "garch_vol": 2.5}
  ],
  "lines": [
    {"dataKey": "return", "stroke": "#94a3b8", "name": "Daily Returns"},
    {"dataKey": "garch_vol", "stroke": "#ef4444", "name": "GARCH Predicted Vol"}
  ]
}
```
*When a return shock occurs (time 3-4), the GARCH model (red) instantly recognizes the change in regime and "carries" that high volatility forward, slowly decaying as the market calms down.*

## Related Topics

[[time-series]] — the general framework  
[[asymptotic-stats/mle]] — the estimation engine  
[[rough-volatility]] — the continuous-time limit of GARCH-type models
---

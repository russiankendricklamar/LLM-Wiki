---
title: "Time Series Analysis"
category: "Applied Probability"
order: 37
lang: "en"
slug: "time-series"
---

# Time Series Analysis

Time Series Analysis is the statistical study of data points ordered sequentially in time. Unlike standard cross-sectional data where observations are assumed to be independent, time series data is characterized by **temporal dependence** (autocorrelation).

## Stationarity

The most important concept in classical time series is **Stationarity**. A time series is strictly stationary if its joint distribution does not change when shifted in time.
In practice, we rely on **Weak Stationarity**, which requires three conditions:
1.  Constant mean: $\mathbb{E}[y_t] = \mu$
2.  Constant variance: $\text{Var}(y_t) = \sigma^2$
3.  Autocovariance depends only on the lag $k$, not on time $t$: $\text{Cov}(y_t, y_{t-k}) = \gamma_k$

Most classical models (like ARMA) require stationary data. If a series has a trend or seasonality, we must first make it stationary by taking **differences** ($y_t - y_{t-1}$).

## Autocorrelation Function (ACF) and PACF

To identify the structure of a time series, we look at correlations with past values (lags).
- **ACF**: Measures the correlation between $y_t$ and $y_{t-k}$.
- **PACF (Partial Autocorrelation)**: Measures the correlation between $y_t$ and $y_{t-k}$ *after removing* the effects of the intervening lags $1, \dots, k-1$.

## Classical Models (Box-Jenkins)

### 1. AR (Auto-Regressive)
The current value depends linearly on its own previous values plus a white noise shock $\epsilon_t$:
$$y_t = c + \phi_1 y_{t-1} + \phi_2 y_{t-2} + \dots + \phi_p y_{t-p} + \epsilon_t$$

### 2. MA (Moving Average)
The current value depends linearly on past *shocks* (forecast errors):
$$y_t = \mu + \epsilon_t + \theta_1 \epsilon_{t-1} + \dots + \theta_q \epsilon_{t-q}$$

### 3. ARIMA (Auto-Regressive Integrated Moving Average)
Combines AR and MA, along with an "Integrated" term ($d$ differencing steps) to handle non-stationary data with trends.

## Volatility Modeling (ARCH / GARCH)

In financial time series, the variance itself changes over time (volatility clustering: large changes tend to be followed by large changes). 
The **GARCH(1,1)** model captures this by making the current variance $\sigma_t^2$ a function of past shocks and past variances:
$$\sigma_t^2 = \omega + \alpha \epsilon_{t-1}^2 + \beta \sigma_{t-1}^2$$

## Spectral Analysis

Instead of looking at the time domain (autocorrelation), spectral analysis looks at the **frequency domain**. By applying the Fourier Transform to the autocovariance function, we get the **Spectral Density**, which reveals periodicities and hidden cycles (seasonalities) in the data.

## Visualization: Stationarity

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": 1, "non_stationary": 1, "stationary": 0.5},
    {"t": 2, "non_stationary": 2.5, "stationary": -0.8},
    {"t": 3, "non_stationary": 3.8, "stationary": 0.2},
    {"t": 4, "non_stationary": 6.1, "stationary": 0.7},
    {"t": 5, "non_stationary": 8.0, "stationary": -0.4}
  ],
  "lines": [
    {"dataKey": "non_stationary", "stroke": "#ef4444", "name": "Random Walk with Trend"},
    {"dataKey": "stationary", "stroke": "#10b981", "name": "White Noise (Stationary)"}
  ]
}
```
*Classical forecasting models can only handle the green line (predicting fluctuations around a stable mean). The red line must be differenced to become stationary before modeling.*

## Related Topics

stochastic-processes — the theoretical foundation  
[[markov-chain-mixing]] — how fast processes "forget" the past  
[[fourier-analysis]] — the basis of spectral analysis
---

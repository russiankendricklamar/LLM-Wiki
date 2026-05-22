---
title: Time Series Basics
category: Statistics
order: 102
lang: en
slug: time-series-basics
---

## Overview
A time series is a sequence of data points indexed in time order. Key concepts include stationarity and autocorrelation.

## Stationarity
A strictly stationary process has a joint probability distribution that does not change over time. Weak stationarity requires constant mean and variance.

## Autocorrelation
Autocorrelation measures the linear relationship between lagged values of a time series:
$$ \rho_k = \frac{\text{Cov}(X_t, X_{t-k})}{\text{Var}(X_t)} $$
Crucial for models like ARIMA.
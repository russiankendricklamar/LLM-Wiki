---
title: "Hurst Exponent"
category: "Stochastic Processes"
order: 29
lang: "en"
---
# Hurst Exponent (H)

The **Hurst Exponent (H)** is a statistical measure used to quantify the long-term memory or persistence of a time series. In quantitative finance, it is a vital tool for classifying market dynamics as trending, mean-reverting, or purely random.

## Interpretation of H

The exponent ranges between 0 and 1, with three distinct regimes:

1.  **$H = 0.5$**: **Random Walk (Brownian Motion)**. The series is unpredictable, and future changes are independent of past movements. The market is considered "efficient" in this state.
2.  **$0.5 < H < 1$**: **Persistent (Trending) Series**. A positive change in the past is likely to be followed by another positive change. The closer $H$ is to 1, the stronger the trend.
3.  **$0 < H < 0.5$**: **Anti-persistent (Mean-reverting) Series**. An increase in value is likely to be followed by a decrease, and vice versa. This indicates a "choppy" market that reverts to its mean.

## Mathematical Concept

The exponent is related to the scaled range of the series (R/S analysis). For a time series of length $T$, the expected value of the rescaled range $R/S$ scales as:

$$
E \left[ \frac{R(T)}{S(T)} \right] = C \cdot T^H
$$

Where:
- $R(T)$ is the range of the cumulative deviations from the mean.
- $S(T)$ is the standard deviation.
- $T$ is the time duration of the observation.

## Financial Applications

- **Strategy Selection**: High $H$ values justify momentum and trend-following strategies. Low $H$ values suggest that mean-reversion strategies (like pairs trading) will be more profitable.
- **Market Efficiency Testing**: Monitoring $H$ over time allows analysts to detect periods where the market becomes less efficient and more predictable.
- **Fractal Analysis**: $H$ is directly related to the fractal dimension $D$ of the series: $D = 2 - H$.

## Python: Estimating the Hurst Exponent

```python
import numpy as np

def get_hurst_exponent(series):
    """
    Estimates the Hurst Exponent of a price series.
    """
    lags = range(2, 100)
    # Calculate the variance of the difference at each lag
    tau = [np.sqrt(np.std(np.subtract(series[lag:], series[:-lag]))) for lag in lags]
    
    # Linear fit on a log-log scale
    poly = np.polyfit(np.log(lags), np.log(tau), 1)
    
    # The slope of the log-log plot is H
    return poly[0] * 2

# Example with a trending series
prices = np.cumsum(np.random.normal(0.05, 1, 1000))
h = get_hurst_exponent(prices)
print(f"Hurst Exponent: {h:.4f}")
```

## Visualization: Market Regimes

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "1", "trend": 10, "random": 10, "mean_rev": 10},
    {"time": "2", "trend": 12, "random": 9, "mean_rev": 11},
    {"time": "3", "trend": 15, "random": 11, "mean_rev": 10},
    {"time": "4", "trend": 19, "random": 10, "mean_rev": 11},
    {"time": "5", "trend": 24, "random": 12, "mean_rev": 10}
  ],
  "lines": [
    {"dataKey": "trend", "stroke": "#10b981", "name": "H > 0.5 (Trend)"},
    {"dataKey": "random", "stroke": "#94a3b8", "name": "H = 0.5 (Random)"},
    {"dataKey": "mean_rev", "stroke": "#ef4444", "name": "H < 0.5 (Mean Reversion)"}
  ]
}
```
---


## Related Topics
- [[fractional-fokker-planck]]
- [[phase-space-reconstruction]]
- [[lempel-ziv-complexity]]

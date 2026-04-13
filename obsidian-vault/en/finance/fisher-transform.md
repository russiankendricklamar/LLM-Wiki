---
title: "Fisher Transform"
category: "Quantitative Finance"
order: 26
lang: "en"
---
# The Fisher Transform

The **Fisher Transform** is a mathematical process used in technical analysis to convert price data (or other indicators) into a Gaussian (normal) distribution. By transforming skewed financial data into a normal distribution, the Fisher Transform makes market turning points much clearer and easier to identify.

## Why Use the Fisher Transform?

Asset prices do not typically follow a normal distribution; they often exhibit "fat tails" or stay near extremes for extended periods. Standard oscillators like RSI or Stochastics often become "saturated" at the top or bottom, making it hard to time a reversal. The Fisher Transform stretches the ends of the distribution toward infinity, turning rounded tops into sharp, actionable peaks.

## Mathematical Formula

For input data $x$ normalized to the range $[-1, 1]$, the Fisher Transform $y$ is defined as:

$$
y = \frac{1}{2} \ln \left( \frac{1 + x}{1 - x} \right) = \text{arctanh}(x)
$$

Where:
- $x$ is the normalized input (usually based on price position relative to a lookback window).
- $y$ is the resulting Fisher value.

## Trading Logic

1.  **Normalization**: Prices are mapped to a $[-1, 1]$ scale based on the high and low of a specific lookback period (e.g., 10 days).
2.  **Transformation**: The Fisher formula is applied to create the indicator line.
3.  **Signal Generation**: A buy signal is generated when the Fisher line crosses above its trigger line (a delayed version of itself), and a sell signal occurs on a downward cross.

## Python: Fisher Transform Implementation

```python
import numpy as np
import pandas as pd

def calculate_fisher(prices, period=10):
    # 1. Get High/Low over the period
    roll_max = prices.rolling(window=period).max()
    roll_min = prices.rolling(window=period).min()
    
    # 2. Normalize to [-1, 1] range
    # 0.33 and 0.67 are common smoothing constants
    value = 0.66 * ((prices - roll_min) / (roll_max - roll_min) - 0.5)
    value = value.clip(-0.999, 0.999) # Prevent log(0)
    
    # 3. Apply Fisher Transform
    fisher = 0.5 * np.log((1 + value) / (1 - value))
    return fisher

# Sample usage
df = pd.DataFrame({'price': np.random.randn(100).cumsum()})
df['fisher'] = calculate_fisher(df['price'])
```

## Visualization: Sharpening the Peaks

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "1", "price": 0.2, "fisher": 0.2},
    {"time": "2", "price": 0.5, "fisher": 0.55},
    {"time": "3", "price": 0.8, "fisher": 1.1},
    {"time": "4", "price": 0.95, "fisher": 2.3},
    {"time": "5", "price": 0.8, "fisher": 1.1},
    {"time": "6", "price": 0.2, "fisher": 0.2}
  ],
  "lines": [
    {"dataKey": "price", "stroke": "#94a3b8", "name": "Normalized Price"},
    {"dataKey": "fisher", "stroke": "#ef4444", "name": "Fisher Line (Sharp Peaks)"}
  ]
}
```

## Key Benefits

- **Early Lead**: Often identifies potential reversals before other trend-following indicators.
- **High Resolution**: Provides very distinct peaks and troughs compared to standard oscillators.
- **Statistical Filtering**: Effectively filters out price noise by focusing on extreme deviations from the recent mean.
---


## Related Topics
- [[spectral-analysis]]

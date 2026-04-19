---
slug: "/finance/fisher-transform"
title: "Fisher Transform"
category: "Signal Analysis"
order: 32
lang: "en"
---
# The Fisher Transform

The **Fisher Transform** is a mathematical process used in technical analysis to convert price data (or other indicators) into a Gaussian (normal) distribution. Developed by John Ehlers in his 2002 book *Cybernetic Analysis for Stocks and Futures*, the transform leverages the inverse hyperbolic tangent function to sharpen turning-point identification. By converting skewed financial data into a nearly normal distribution, it makes market extremes much more clearly defined and actionable.

## Background and Motivation

Asset prices do not typically follow a normal distribution; they often exhibit "fat tails," right skewness, and periods where prices cluster near extremes. Standard oscillators like RSI or Stochastics often become "saturated" at overbought/oversold levels, lingering there for extended periods and producing ambiguous signals. The Fisher Transform addresses this by mapping bounded price data through a nonlinear stretch: values near the extremes are amplified toward $\pm\infty$, turning gradual roundings into sharp, statistically extreme spikes. The resulting distribution more closely resembles a Gaussian, which means we can apply statistical thresholds (e.g., $\pm 1.5$ or $\pm 2$ standard deviations) to identify genuine turning points.

## Mathematical Formula

For input data $x$ normalised to the range $(-1, 1)$, the Fisher Transform $y$ is the inverse hyperbolic tangent (arctanh):

$$
y = \frac{1}{2} \ln \left( \frac{1 + x}{1 - x} \right) = \text{arctanh}(x)
$$

Key properties:
- As $x \to \pm 1$, $y \to \pm\infty$: extreme price positions produce extreme indicator readings.
- At $x = 0$, $y = 0$: mid-range price maps to zero.
- The derivative $dy/dx = 1/(1-x^2)$ diverges at the boundaries, amplifying small changes near the extremes.

The inverse transform recovers $x$ from $y$:
$$
x = \tanh(y) = \frac{e^{2y} - 1}{e^{2y} + 1}
$$

## Statistical Interpretation

If the normalised price $x$ were uniformly distributed on $(-1,1)$, the Fisher transform $y = \text{arctanh}(x)$ would follow a logistic distribution. In practice, price positions are closer to a beta distribution; the Fisher transform pulls these toward approximate Gaussianity. This means $|y| > 2$ roughly corresponds to a "2-sigma" event, providing a statistically motivated threshold for signal generation — something that the bounded raw oscillators cannot offer.

## Trading Logic

1. **Normalisation**: Prices are mapped to a $[-1, 1]$ scale based on the highest high and lowest low of a specific lookback period $n$ (commonly 9–14 bars):
   $$x_t = 0.66 \cdot \frac{P_t - \min(P_{t-n:t})}{\max(P_{t-n:t}) - \min(P_{t-n:t})} - 0.5 \cdot 0.66$$
   The factor $0.66$ and clipping prevent $x$ from reaching $\pm 1$ exactly.
2. **Transformation**: Apply $y_t = \text{arctanh}(x_t)$.
3. **Trigger Line**: Define the signal line as $y_{t-1}$ (a one-bar lag).
4. **Signal Generation**: Buy when $y_t$ crosses above the trigger line from below; sell (or short) on a downward cross. Extreme readings ($|y_t| > 2$) indicate a likely reversal.

## Python: Fisher Transform Implementation

```python
import numpy as np
import pandas as pd

def calculate_fisher(prices: pd.Series, period: int = 10) -> pd.DataFrame:
    """
    Compute the Fisher Transform indicator and its trigger line.

    Returns a DataFrame with columns 'fisher' and 'trigger'.
    """
    roll_max = prices.rolling(window=period).max()
    roll_min = prices.rolling(window=period).min()

    # Normalise to (-1, 1); clip to avoid arctanh singularity
    denom = (roll_max - roll_min).replace(0, np.nan)
    raw = 2 * (prices - roll_min) / denom - 1
    clamped = raw.clip(-0.999, 0.999)

    # Fisher Transform: arctanh = 0.5 * ln((1+x)/(1-x))
    fisher = 0.5 * np.log((1 + clamped) / (1 - clamped))

    return pd.DataFrame({
        "fisher": fisher,
        "trigger": fisher.shift(1),
    })

# Example: simulate a trending-then-reverting price series
np.random.seed(42)
raw_returns = np.random.normal(0.002, 0.015, 200)
prices = pd.Series(100 * np.exp(np.cumsum(raw_returns)), name="price")

indicator = calculate_fisher(prices, period=10)

# Simple crossover signals
long_signal  = (indicator["fisher"] > indicator["trigger"]) & \
               (indicator["fisher"].shift(1) <= indicator["trigger"].shift(1))
short_signal = (indicator["fisher"] < indicator["trigger"]) & \
               (indicator["fisher"].shift(1) >= indicator["trigger"].shift(1))

print(f"Long signals:  {long_signal.sum()}")
print(f"Short signals: {short_signal.sum()}")
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

## Parameter Reference

| Symbol | Name | Description | Typical Range |
|--------|------|-------------|---------------|
| $n$ | Lookback period | Window for high/low normalisation | 9–14 bars |
| $x$ | Normalised price | Price position mapped to $(-1,1)$ | $(-0.999, 0.999)$ |
| $y$ | Fisher value | Transformed indicator | $(-\infty, +\infty)$, useful: $\pm 3$ |
| Threshold | Extreme signal | Level at which reversal is likely | $\pm 1.5$ to $\pm 2.5$ |

## Limitations and Extensions

- **Lag**: The normalisation window introduces lag equal to the lookback period. Shorter periods reduce lag but increase noise.
- **Range dependency**: The indicator resets its range each period; a breakout to new highs can suppress the signal even when momentum is extreme in absolute terms.
- **Whipsaw risk**: Like all oscillators, the Fisher Transform can produce multiple crossover signals in a trending market; combining with a trend filter (e.g., a 200-period moving average) reduces false positives.
- **Adaptive Fisher**: Some implementations use a variable lookback period driven by the dominant cycle length (e.g., from the Hilbert-Huang Transform), improving signal quality in non-stationary markets.
- **Multi-asset ranking**: The Gaussianised output makes cross-sectional ranking of assets by Fisher value statistically coherent, useful in systematic momentum or mean-reversion strategies.

## Practical Applications

1. **Mean-reversion signals**: Fisher values exceeding $\pm 2$ often correspond to local extremes and can seed contrarian trade entries.
2. **Signal normalisation**: Pre-processing raw technical indicators through the Fisher transform before combining them into a composite score makes the combined signal more interpretable.
3. **Momentum confirmation**: A rising Fisher value confirms price momentum and can be used to hold or add to positions rather than fade.
4. **Options positioning**: Extreme Fisher readings identify high-conviction turning points, useful for timing short gamma or long gamma options strategies around anticipated reversals.

## Related Topics
- [[spectral-analysis]]
- [[hilbert-huang-transform]]
- [[hurst-exponent]]

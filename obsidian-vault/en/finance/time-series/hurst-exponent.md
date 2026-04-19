---
slug: "/finance/hurst-exponent"
title: "Hurst Exponent"
category: "Stochastic Processes"
order: 37
lang: "en"
---
# Hurst Exponent (H)

The **Hurst Exponent (H)** is a statistical measure used to quantify the long-term memory or persistence of a time series. Named after hydrologist Harold Edwin Hurst who developed it while studying Nile river flows (1951), it was adapted for financial markets by Mandelbrot and Van Ness (1968) in the context of fractional Brownian motion. In quantitative finance, it is a vital tool for classifying market dynamics as trending, mean-reverting, or purely random.

## Background

Hurst noticed that the rescaled range of cumulative deviations from the mean grew with a power law in time. In efficient markets (Brownian motion), the exponent should be exactly 0.5. Deviations from 0.5 indicate either long memory (persistence) or anti-persistence — both actionable signals for strategy selection.

## Interpretation of H

The exponent ranges between 0 and 1, with three distinct regimes:

1. **$H = 0.5$**: **Random Walk (Brownian Motion)**. Future changes are independent of past movements. Consistent with the Efficient Market Hypothesis.
2. **$0.5 < H < 1$**: **Persistent (Trending) Series**. Past positive moves predict future positive moves. The closer $H$ is to 1, the stronger and longer-lasting the trend.
3. **$0 < H < 0.5$**: **Anti-persistent (Mean-Reverting) Series**. Past increases predict future decreases. The closer $H$ is to 0, the faster the reversion.

The fractal dimension of the path is related to $H$ by: $D = 2 - H$.

## Mathematical Foundation: R/S Analysis

Hurst's original method is the **rescaled range (R/S) analysis**. For a time series $\{X_t\}$ of length $T$:

1. Compute the mean: $\bar{X}_T = \frac{1}{T}\sum_{t=1}^T X_t$
2. Compute cumulative deviations: $Y_t = \sum_{s=1}^t (X_s - \bar{X}_T)$
3. Compute the range: $R(T) = \max_{1\leq t \leq T} Y_t - \min_{1\leq t \leq T} Y_t$
4. Compute the standard deviation: $S(T) = \sqrt{\frac{1}{T}\sum_{t=1}^T (X_t - \bar{X}_T)^2}$

The rescaled range satisfies:

$$
\mathbb{E}\!\left[\frac{R(T)}{S(T)}\right] = C \cdot T^H
$$

Taking logarithms: $\ln(R/S) = \ln C + H \ln T$, so $H$ is the slope of the log-log regression.

## Detrended Fluctuation Analysis (DFA)

DFA (Peng et al. 1994) is more robust than R/S for non-stationary series. For a cumulative sum series $Y(k) = \sum_{i=1}^k (X_i - \bar{X})$:

1. Divide into non-overlapping windows of size $n$.
2. In each window, fit a local polynomial trend and compute the residual variance $F^2(n, \nu)$.
3. Average: $F(n) = \sqrt{\frac{1}{N_n}\sum_\nu F^2(n,\nu)}$.
4. The DFA exponent $\alpha$ (equivalent to $H$) is the slope of $\log F(n)$ vs. $\log n$.

DFA eliminates polynomial non-stationarity up to order $m$ (with $m$-th order DFA), making it preferred for financial return series.

## Variance Ratio Test

A complementary statistical test for $H = 0.5$:

$$
\text{VR}(q) = \frac{\text{Var}(r_t + r_{t-1} + \dots + r_{t-q+1})/q}{\text{Var}(r_t)}
$$

Under the random walk null, $\text{VR}(q) = 1$ for all $q$. $\text{VR}(q) > 1$ indicates positive autocorrelation (trending, $H > 0.5$); $\text{VR}(q) < 1$ indicates mean reversion.

## Python: Multiple Hurst Estimators

```python
import numpy as np
from typing import Tuple

def hurst_rs(series: np.ndarray) -> float:
    """
    Estimate Hurst exponent via R/S analysis (log-log regression).
    """
    lags = np.unique(np.logspace(1, np.log10(len(series) // 2), 30).astype(int))
    rs_values = []
    for lag in lags:
        chunks = [series[i:i+lag] for i in range(0, len(series) - lag, lag)]
        rs_chunk = []
        for chunk in chunks:
            mean_c = chunk.mean()
            cumdev = np.cumsum(chunk - mean_c)
            R = cumdev.max() - cumdev.min()
            S = chunk.std(ddof=1)
            if S > 0:
                rs_chunk.append(R / S)
        if rs_chunk:
            rs_values.append(np.mean(rs_chunk))
    slope, _ = np.polyfit(np.log(lags[:len(rs_values)]), np.log(rs_values), 1)
    return slope

def hurst_dfa(series: np.ndarray, order: int = 1) -> float:
    """
    Estimate Hurst exponent via Detrended Fluctuation Analysis.
    """
    cumsum = np.cumsum(series - series.mean())
    lags = np.unique(np.logspace(1, np.log10(len(series) // 4), 20).astype(int))
    fluctuations = []
    for lag in lags:
        segments = len(series) // lag
        f2 = []
        for s in range(segments):
            seg = cumsum[s*lag:(s+1)*lag]
            t   = np.arange(lag)
            coeffs = np.polyfit(t, seg, order)
            trend  = np.polyval(coeffs, t)
            f2.append(np.mean((seg - trend)**2))
        fluctuations.append(np.sqrt(np.mean(f2)))
    slope, _ = np.polyfit(np.log(lags[:len(fluctuations)]), np.log(fluctuations), 1)
    return slope

def hurst_variance_ratio(series: np.ndarray, max_q: int = 20) -> np.ndarray:
    """Variance ratio test across holding periods 2..max_q."""
    var1 = np.var(np.diff(series), ddof=1)
    vr = []
    for q in range(2, max_q + 1):
        multi_returns = series[q:] - series[:-q]
        vr.append(np.var(multi_returns, ddof=1) / (q * var1))
    return np.array(vr)

# --- Example ---
np.random.seed(42)
# Trending series (H > 0.5)
trend_prices = np.cumsum(np.random.normal(0.05, 1, 2000))
# Random walk (H = 0.5)
random_prices = np.cumsum(np.random.normal(0, 1, 2000))

h_rs_trend  = hurst_rs(np.diff(trend_prices))
h_dfa_trend = hurst_dfa(np.diff(trend_prices))
h_rs_rw     = hurst_rs(np.diff(random_prices))

print(f"Trending R/S:    {h_rs_trend:.3f}  (expect >0.5)")
print(f"Trending DFA:    {h_dfa_trend:.3f}  (expect >0.5)")
print(f"Random walk R/S: {h_rs_rw:.3f}    (expect ≈0.5)")
```

## Market Regimes Visualization

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "1", "trend": 10, "random": 10, "mean_rev": 10},
    {"time": "2", "trend": 12, "random": 9,  "mean_rev": 11},
    {"time": "3", "trend": 15, "random": 11, "mean_rev": 10},
    {"time": "4", "trend": 19, "random": 10, "mean_rev": 11},
    {"time": "5", "trend": 24, "random": 12, "mean_rev": 10}
  ],
  "lines": [
    {"dataKey": "trend",    "stroke": "#10b981", "name": "H > 0.5 (Persistent)"},
    {"dataKey": "random",   "stroke": "#94a3b8", "name": "H = 0.5 (Random Walk)"},
    {"dataKey": "mean_rev", "stroke": "#ef4444", "name": "H < 0.5 (Mean-Reverting)"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Notes |
|--------|------|-------------|-------|
| $H$ | Hurst exponent | Long-memory measure | 0–1; 0.5 = Brownian |
| $R(T)$ | Range | Max – min cumulative deviation | Grows as $T^H$ |
| $S(T)$ | Std deviation | Normalisation factor | Sample std of series |
| $n$ | DFA window | Block size for local detrending | Log-spaced, 10–$T/4$ |
| $\alpha$ | DFA exponent | DFA slope ≡ $H$ | Same interpretation |
| $\text{VR}(q)$ | Variance ratio | Autocorrelation test | =1 under random walk |

## Limitations and Extensions

- **Estimation bias**: R/S analysis overestimates $H$ for short series and short-memory ARMA processes; DFA is less biased but still requires $T > 500$ for reliable estimates.
- **Non-stationarity**: Both methods assume stationarity of increments; structural breaks (regime changes) produce spurious $H \neq 0.5$.
- **Multifractal markets**: A single $H$ may be insufficient; the **Multifractal Model of Asset Returns (MMAR)** and **Multifractal Detrended Fluctuation Analysis (MFDFA)** characterize the full spectrum of scaling exponents $h(q)$.
- **Time-varying H**: Rolling $H$ estimation over 250-day windows shows that $H$ fluctuates significantly; asset classes exhibit different persistence in different regimes.
- **Spurious long memory**: GARCH-type volatility clustering can produce apparent long memory in absolute returns even when the process has no true long memory; distinguish carefully using wavelet-based tests.

## Financial Applications

- **Strategy selection**: $H > 0.55$ over the estimation window justifies momentum and trend-following strategies. $H < 0.45$ indicates profitable mean-reversion strategies (pairs trading, stat arb).
- **Market efficiency testing**: Monitoring $H$ over time allows analysts to detect windows where markets become temporarily predictable.
- **Fractal analysis**: $H$ informs the fractal dimension of the price path and the appropriate time scaling for risk models.
- **Regime classification**: Combined with [[hidden-markov-models]] or clustering, rolling $H$ estimates help label market regimes quantitatively.

## Related Topics
- [[fractional-fokker-planck]]
- [[phase-space-reconstruction]]
- [[lempel-ziv-complexity]]
- [[geometric-brownian-motion]]

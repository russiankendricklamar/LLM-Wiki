---
title: "High-Frequency Lead-Lag Analysis"
category: "Microstructure"
order: 11
lang: "en"
slug: "lead-lag-analysis"
---

# High-Frequency Lead-Lag Analysis

In an efficient market, information should be reflected in all prices simultaneously. However, at the millisecond scale, this is not true. Larger, more liquid assets (leads) tend to move first, followed by smaller, less liquid ones (lags). **Lead-Lag Analysis** is the study of these non-synchronous correlations, which are exploited by HFT arbitrageurs.

## The Epps Effect

The Epps effect is the observation that the correlation between two assets drops as the sampling frequency increases (e.g., from daily to minute-by-minute).
- *Cause*: Prices are not updated at the same time. If Stock A moves at 10:00:00.001 and Stock B moves at 10:00:00.005, a minute-by-minute correlation will see them as synchronous, but a microsecond correlation will see zero relationship.

## Mathematical Detection: The Hayashi-Yoshida Estimator

To measure correlation without "forcing" the data into synchronous bins (which causes bias), quants use the **Hayashi-Yoshida (HY) Estimator**. It sums the products of price increments $dr_i, dr_j$ whose observation intervals overlap.

$$\hat{\rho}_{HY} = \frac{\sum_{i,j} \Delta X_{t_i} \Delta Y_{s_j} \mathbb{I}(\text{overlap})}{\sqrt{\dots}}$$

## Finding the Lag ($\theta$)

To find the actual time delay $\theta$, we compute the **Cross-Correlation Function** across different time shifts:
$$\rho(\theta) = \text{Corr}(X_t, Y_{t+\theta})$$
The value of $\theta$ that maximizes $\rho(\theta)$ is the estimated lead-lag time.

- **Positive $\theta$**: $X$ leads $Y$.
- **Negative $\theta$**: $Y$ leads $X$.

## Why Citadel cares

1.  **Latency Arbitrage**: If you know that S&P 500 futures lead individual tech stocks by 5 milliseconds, you can "snipe" the stocks before they adjust to the new market level.
2.  **Order Flow Execution**: When selling a basket of stocks, the router must account for the fact that selling the lead stock will immediately depress the prices of the lags via cross-impact.
3.  **HMM Regime Detection**: Lead-lag relationships often change during crises. Using a [[hmm-particle-filters|Hidden Markov Model]] on the lag parameter allows an algo to detect when the market is entering a "panic" state where leads become stronger.

## Visualization: Lag Peak

```chart
{
  "type": "line",
  "xAxis": "shift_ms",
  "data": [
    {"shift_ms": -10, "corr": 0.1},
    {"shift_ms": -5,  "corr": 0.2},
    {"shift_ms": 0,   "corr": 0.45},
    {"shift_ms": 5,   "corr": 0.82},
    {"shift_ms": 10,  "corr": 0.3},
    {"shift_ms": 20,  "corr": 0.1}
  ],
  "lines": [
    {"dataKey": "corr", "stroke": "#3b82f6", "name": "Cross-Correlation"}
  ]
}
```
*The peak of the correlation is at +5ms. This indicates that the first asset predicts the second one with a 5-millisecond advantage.*

## Related Topics

[[latency-arbitrage]] — the strategy based on this effect  
[[cross-impact]] — how the lead-lag propagates through the book  
[[vpin]] — measuring order flow toxicity during lag periods
---

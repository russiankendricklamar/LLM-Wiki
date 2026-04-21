---
title: "Optimal Liquidation with Alpha Signals"
category: "Microstructure"
order: 7
lang: "en"
slug: "liquidation-signals"
---

# Optimal Liquidation with Alpha Signals

Standard models like [[optimal-execution|Almgren-Chriss]] assume the price follows a random walk with no predictable component. However, in practice, traders often possess **Alpha Signals** — short-term predictions about the future direction of the price. **Optimal Liquidation with Signals** adapts the trading schedule to exploit this information.

## The Augmented Objective Function

Let $X$ be the remaining inventory and $S_t$ be a signal (e.g., from [[vpin|Order Flow Imbalance]] or a machine learning model). The trader seeks to minimize:
$$\mathbb{E} \left[ \int_0^T (\text{Impact Costs} + \text{Risk Penalty} - \text{Alpha Capture}) dt \right]$$

The "Alpha Capture" term represents the profit from timing the sales correctly: if the signal $S_t$ predicts a price drop, the model should accelerate selling; if it predicts a rise, it should slow down to sell at a better future price.

## The Optimal Strategy: Drift-Adjusted Schedulling

The optimal trading rate $v_t^*$ becomes:
$$v_t^* = \underbrace{\kappa (X_t - \bar{X}_t)}_{\text{Almgren-Chriss}} + \underbrace{\frac{1}{2 \eta} \mathbb{E}_t [S_t + \dots]}_{\text{Alpha Adjustment}}$$

- **Opportunistic Execution**: If you have a strong "Buy" signal while trying to sell, the model might even stop selling temporarily (or trade backwards) to wait for the bounce.
- **Urgency**: If the signal predicts a crash, the urgency increases, and the trader pays a higher market impact cost now to avoid a catastrophic loss later.

## Key Signals used in Modern Desks

1.  **LOB Imbalance**: Ratio of volume at the best bid vs best ask.
2.  **Trade Flow (Hawkes)**: High frequency of recent trades often signals a continued move.
3.  **Cross-Asset Signals**: A move in the S&P 500 futures often leads moves in individual stocks.

## Visualization: Signal-Driven Slicing

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": 0, "ac": 100, "signal_aware": 100, "price": 100, "signal": 0},
    {"time": 1, "ac": 80,  "signal_aware": 95,  "price": 102, "signal": 1},
    {"time": 2, "ac": 60,  "signal_aware": 90,  "price": 105, "signal": 1},
    {"time": 3, "ac": 40,  "signal_aware": 30,  "price": 101, "signal": -2},
    {"time": 4, "ac": 20,  "signal_aware": 5,   "price": 98,  "signal": -2},
    {"time": 5, "ac": 0,   "signal_aware": 0,   "price": 97,  "signal": 0}
  ],
  "lines": [
    {"dataKey": "ac", "stroke": "#94a3b8", "name": "Standard AC (Static)"},
    {"dataKey": "signal_aware", "stroke": "#10b981", "name": "Signal-Aware (Dynamic)"},
    {"dataKey": "price", "stroke": "#3b82f6", "name": "Market Price"}
  ]
}
```
*The Signal-Aware agent (green) slows down when the price is rising (time 1-2) to capture the gain, then "dumps" the remaining inventory aggressively (time 3-4) when the signal predicts a downturn.*

## Related Topics

[[optimal-execution]] — the base model  
[[vpin]] — a source of short-term alpha signals  
[[order-flow-imbalance]] — the most common signal in microstructure
---

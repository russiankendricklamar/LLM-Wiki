---
title: "Multivariate Hawkes Processes"
category: "Microstructure"
order: 12
lang: "en"
slug: "multivariate-hawkes"
---

# Multivariate Hawkes Processes: Micro-Contagion

A standard [[hawkes-process]] models self-excitation (a trade in Apple makes another trade in Apple more likely). However, in the modern interconnected market, trades do not happen in isolation. A **Multivariate Hawkes Process** models **cross-excitation**: how an event in one asset triggers events in others, creating high-frequency micro-contagion.

## The Intensity Matrix

In a multivariate setting with $M$ assets, the intensity $\lambda_i(t)$ of an event in asset $i$ (e.g., a buy order) is modeled as:

$$\lambda_i(t) = \mu_i + \sum_{j=1}^M \int_{-\infty}^t \alpha_{ij} e^{-\beta_{ij}(t-s)} dN_j(s)$$

Where:
- $\mu_i$ is the baseline (exogenous) background rate.
- $N_j(s)$ represents the events occurring in asset $j$.
- $\alpha_{ij}$ is the **Excitation Matrix**. It measures how much an event in asset $j$ jumps the intensity of asset $i$.
- $\beta_{ij}$ is the decay rate of this excitement.

## The Cross-Excitation Network

By calibrating the $\alpha_{ij}$ matrix to high-frequency Limit Order Book data, quants can uncover the hidden "causal" network of the market at the millisecond level.
- **Diagonal elements ($\alpha_{ii}$)**: Self-excitation (momentum in the same stock).
- **Off-diagonal elements ($\alpha_{ij}$)**: Cross-excitation (Lead-lag relationships).

For example, if $\alpha_{AAPL \to MSFT}$ is large, but $\alpha_{MSFT \to AAPL}$ is near zero, it mathematically proves that Apple *leads* Microsoft in price discovery at the microsecond scale.

## Application in Algorithmic Trading

1.  **Micro-Price Prediction**: By feeding the current state of the Multivariate Hawkes process into a predictive model, HFT firms calculate the instantaneous drift of the mid-price.
2.  **Market Making**: If the model detects a massive burst in asset $A$ (e.g., S&P 500 futures), the market maker for asset $B$ (e.g., Tesla) will instantly skew their quotes upwards, knowing that the "Hawkes wave" is about to hit asset $B$.
3.  **Flash Crash Detection**: When the spectral radius (the largest eigenvalue) of the excitation matrix $\alpha_{ij}/\beta_{ij}$ approaches $1$, the system becomes critically unstable. Any small shock will cause an infinite cascade of trades—a Flash Crash.

## Visualization: The Excitation Impulse

```chart
{
  "type": "line",
  "xAxis": "time_ms",
  "data": [
    {"time_ms": 0, "lambda_a": 10, "lambda_b": 5},
    {"time_ms": 1, "lambda_a": 50, "lambda_b": 5},
    {"time_ms": 2, "lambda_a": 40, "lambda_b": 25},
    {"time_ms": 3, "lambda_a": 30, "lambda_b": 20},
    {"time_ms": 4, "lambda_a": 20, "lambda_b": 15},
    {"time_ms": 5, "lambda_a": 15, "lambda_b": 10}
  ],
  "lines": [
    {"dataKey": "lambda_a", "stroke": "#3b82f6", "name": "Asset A Intensity (Shock)"},
    {"dataKey": "lambda_b", "stroke": "#ef4444", "name": "Asset B Intensity (Cross-Excited)"}
  ]
}
```
*A trade occurs in Asset A at t=1, causing its intensity to spike. Due to the $\alpha_{AB}$ coupling, the trading intensity of Asset B spikes a millisecond later, even though no exogenous news hit Asset B.*

## Related Topics

[[hawkes-process]] — the 1D foundation  
[[cross-impact]] — the price impact equivalent of this phenomenon  
[[lead-lag-analysis]] — finding the delays $\theta$ explicitly
---

---
title: "Mechanical Price Discovery: Propagators"
category: "Microstructure"
order: 4
lang: "en"
slug: "lob-propagators"
---

# Mechanical Price Discovery and Propagator Models

How does a single trade lead to a price change? While classic economics talks about "information," market microstructure looks at the **mechanical** process. **Propagator models** (Bouchaud et al., 2004) describe the price at time $t$ as the sum of the impacts of all previous trades, which "decay" or "propagate" over time.

## The Propagator Equation

In this framework, the price $P_t$ is modeled as:
$$P_t = \sum_{t' < t} G(t - t') \epsilon_{t'} + \text{noise}$$
Where:
- $\epsilon_{t'}$ is the **sign of the trade** (+1 for buy, -1 for sell).
- $G(\tau)$ is the **Propagator function** (or response function).

## The Meaning of G(τ)

The propagator $G(\tau)$ measures the average price change $\tau$ units of time after a single trade of unit volume.
- **Immediate Impact**: $G(0) > 0$. Every trade moves the price.
- **Mean Reversion (Decay)**: In a stable market, $G(\tau)$ is a decreasing function. The initial impact was partly "mechanical" (liquidity pressure) and fades away as the limit order book refills.
- **Permanent Impact**: The value $G(\infty)$ represents the "true" information content of the trade.

## Mechanical vs. Informational

The beauty of the propagator model is that it reveals that most price moves are **transient and mechanical**. 
If a large buy order hits the market:
1.  The price jumps (liquidity is consumed).
2.  High-frequency traders and market makers react, providing new liquidity at higher prices.
3.  The price slowly "relaxes" back toward the original level, but usually stays slightly higher ($G(\infty)$).

## The Efficiency Condition

For the market to be efficient (no easy arbitrage), the propagator $G(\tau)$ and the autocorrelation of trade signs $C(\tau) = \mathbb{E}[\epsilon_t \epsilon_{t+\tau}]$ must be precisely balanced. If trade signs are highly correlated (long memory), the propagator must decay in a specific power-law fashion to prevent the price from becoming a predictable trend.

## Visualization: Response to a Trade

```chart
{
  "type": "line",
  "xAxis": "lag",
  "data": [
    {"lag": 0, "impact": 1.0},
    {"lag": 1, "impact": 0.7},
    {"lag": 5, "impact": 0.4},
    {"lag": 10, "impact": 0.25},
    {"lag": 50, "impact": 0.15},
    {"lag": 100, "impact": 0.12}
  ],
  "lines": [
    {"dataKey": "impact", "stroke": "#3b82f6", "name": "Propagator G(τ)"}
  ]
}
```
*After the initial shock (lag=0), the impact decays. The remaining 12% (at lag=100) is the permanent informational component that has been "absorbed" into the market price.*

## Related Topics

[[market-impact]] — the aggregated version of this model  
[[hawkes-process]] — used to model the clustering of the trades $\epsilon_t$  
limit-order-book — the physical substrate for propagators
---

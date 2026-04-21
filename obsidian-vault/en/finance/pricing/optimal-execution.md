---
title: "Optimal Execution: Almgren-Chriss"
category: "Pricing"
order: 5
lang: "en"
slug: "optimal-execution"
---

# Optimal Execution: The Almgren-Chriss Model

Optimal execution is the problem of buying or selling a large block of shares over a fixed time horizon while minimizing the total cost. The **Almgren-Chriss model** (2000) is the industry standard framework for balancing the trade-off between **Market Impact** and **Price Risk**.

## The Fundamental Trade-off

If you sell a giant block of shares too fast:
- **Market Impact**: You "push" the price down, receiving a worse average price.
If you sell too slow:
- **Price Risk (Volatility)**: You are exposed to random market movements for longer. The price could crash before you finish.

## The Mathematical Framework

Let $X$ be the total units to sell over time $T$. Let $n_k$ be the number of units sold in each time interval $k$.
The model assumes two types of impact:

1.  **Permanent Impact**: The price permanently shifts as a linear function of total volume sold (Information discovery).
2.  **Temporary Impact**: A transient price drop caused by liquidity pressure, which disappears after the trade.

The objective is to minimize the **Expected Cost + Risk Aversion $\times$ Variance**:

$$\min_{\{n_k\}} \mathbb{E}[Cost] + \lambda \text{Var}(Cost)$$

Where $\lambda$ is the trader's risk aversion.

## The Solution: The Efficient Frontier

The optimal trajectory (the "trading schedule") for an Almgren-Chriss agent is typically an **Exponential Decay**.
- **Risk-Averse ($\lambda \to \infty$)**: Trade fast at the beginning to eliminate price risk (Short duration).
- **Risk-Neutral ($\lambda \to 0$)**: Trade linearly over the whole period to minimize market impact (VWAP strategy).

## Visualization: Trading Trajectories

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": 0, "conservative": 100, "aggressive": 100},
    {"time": 1, "conservative": 80,  "aggressive": 50},
    {"time": 2, "conservative": 60,  "aggressive": 20},
    {"time": 3, "conservative": 40,  "aggressive": 5},
    {"time": 4, "conservative": 20,  "aggressive": 1},
    {"time": 5, "conservative": 0,   "aggressive": 0}
  ],
  "lines": [
    {"dataKey": "conservative", "stroke": "#3b82f6", "name": "Conservative (Min Impact)"},
    {"dataKey": "aggressive", "stroke": "#ef4444", "name": "Aggressive (Min Risk)"}
  ]
}
```
*The aggressive strategy (red) finishes the trade quickly to avoid volatility, but pays a high price in market impact. The conservative strategy (blue) spreads the trade evenly to "hide" in the volume.*

## Modern Extensions

1.  **Deep RL Execution**: Using Reinforcement Learning to adapt the trading speed in real-time based on LOB signals (like VPIN).
2.  **Dark Pools**: Modeling the probability of filling parts of the order in hidden venues to reduce impact.

## Related Topics

[[vpin]] — measuring the risk of the current environment  
[[deep-rl-execution]] — AI extension of this model  
[[stochastic-control]] — the mathematical theory for optimal trajectories
---

---
title: "Deep Hedging"
category: "Algorithms and ML"
order: 15
lang: "en"
slug: "deep-hedging"
---

# Deep Hedging: Reinforcement Learning for Derivatives

Deep Hedging is a modern framework for managing the risk of derivative portfolios using Deep Reinforcement Learning. Introduced by **Buehler et al. (2019)**, it challenges the traditional Delta-Hedging approach by allowing for **market frictions** such as transaction costs, liquidity constraints, and non-Gaussian returns.

## The Failure of Black-Scholes Hedging

The classical Black-Scholes delta-hedging model assumes:
1.  **Continuous Trading**: You can rebalance your hedge at every microsecond.
2.  **Zero Transaction Costs**: Trading is free.
3.  **Complete Markets**: Any risk can be perfectly replicated.

In reality, frequent rebalancing leads to massive transaction costs that "eat" all profits. If you rebalance less frequently to save costs, you are exposed to "Gap Risk" (price jumps). Standard stochastic calculus cannot find the perfect balance.

## The Deep Hedging Approach

Deep Hedging treats the hedging problem as a **Global Optimization** task over a finite time horizon. 

### 1. The Objective Function
Instead of minimizing variance, we minimize a **Convex Risk Measure** (like Expected Shortfall) of the terminal wealth:
$$\min_{\theta} \mathbb{E} \left[ \rho(Wealth_T - Payoff) \right]$$
where $\theta$ are the weights of a Neural Network.

### 2. The Neural Network
A Recurrent Neural Network (RNN) or a [[transformer-architecture|Transformer]] takes the current state (price, volatility, current inventory, time to maturity) and outputs the **optimal hedge ratio** $\delta_t$.
- The network is trained on millions of simulated (or historical) price paths.
- It "learns" to be quiet when transaction costs are high and to move aggressively when a large price jump is imminent.

## Key Advantages

1.  **Friction-Aware**: It automatically finds the optimal trade-off between hedging error and trading costs.
2.  **Model-Agnostic**: You can train the agent on any distribution, including "rough" volatility models or historical data with fat tails.
3.  **Universal**: The same network architecture can hedge a single European call or a complex portfolio of exotic derivatives with cross-correlations.

## Visualization: BS Delta vs. Deep Hedging

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": 0, "bs_delta": 0.50, "deep_delta": 0.50},
    {"time": 1, "bs_delta": 0.52, "deep_delta": 0.50},
    {"time": 2, "bs_delta": 0.58, "deep_delta": 0.51},
    {"time": 3, "bs_delta": 0.65, "deep_delta": 0.64},
    {"time": 4, "bs_delta": 0.62, "deep_delta": 0.63}
  ],
  "lines": [
    {"dataKey": "bs_delta", "stroke": "#94a3b8", "name": "Classical Delta (Jittery)"},
    {"dataKey": "deep_delta", "stroke": "#10b981", "name": "Deep Hedging (Smooth/Cost-aware)"}
  ]
}
```
*The Deep Hedging agent (green) is "stickier." It ignores small price fluctuations to save on transaction costs, only adjusting the hedge when the risk significantly outweighs the cost of the trade.*

## Related Topics

[[reinforcement-learning]] — the underlying AI engine  
[[delta-hedging-practice]] — the classical benchmark  
[[rough-volatility]] — the type of complex paths Deep Hedging excels at
---

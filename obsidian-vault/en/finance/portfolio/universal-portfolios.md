---
title: "Universal Portfolios"
category: "Portfolio Management"
order: 11
lang: "en"
slug: "universal-portfolios"
---

# Universal Portfolios (Cover's Algorithm)

Thomas Cover's **Universal Portfolios** (1991) is a monumental result in information theory and online machine learning applied to finance. It provides a non-parametric, algorithmic trading strategy that guarantees performance asymptotically as good as the **best constant-rebalanced portfolio (BCRP)** in hindsight, without making any statistical assumptions about the stock market.

## The Problem Setup

Imagine you are trading in a market with $m$ stocks over $T$ days. You don't know the distribution of returns (it could be non-stationary, or even chosen by an adversary). 

A **Constant-Rebalanced Portfolio (CRP)** is a strategy where you keep a fixed fraction of your wealth in each stock (e.g., 50% Apple, 50% Gold) and rebalance daily. The "Best CRP in Hindsight" ($B^*$) is the one specific fixed allocation that would have maximized wealth looking back at the entire history of $T$ days. 

How can we achieve the performance of $B^*$ without a time machine?

## Cover's Algorithm

Cover's brilliant insight was to use an **ensemble method**. Instead of guessing the single best allocation, the Universal Portfolio distributes its initial wealth uniformly across *all possible* constant-rebalanced portfolios (which exist in a continuous simplex). 

As time progresses, each virtual portfolio grows or shrinks based on its performance. The actual money invested on day $t$ is simply the wealth-weighted average of the allocations of all these virtual portfolios.

Mathematically, the allocation vector $b_t$ on day $t$ is:
$$b_t = \frac{\int b \cdot S_n(b) db}{\int S_n(b) db}$$
where $S_n(b)$ is the wealth accumulated by the fixed portfolio $b$ up to time $t-1$.

## The Guarantee (No Regret)

Cover proved that the wealth of the Universal Portfolio $W_T(U)$ relative to the best hindsight portfolio $W_T(B^*)$ satisfies:

$$\frac{1}{T} \log W_T(U) - \frac{1}{T} \log W_T(B^*) \to 0 \quad \text{as } T \to \infty$$

This means the strategy has **sublinear regret**. The Universal Portfolio "catches up" to the best possible fixed strategy, regardless of what the market does. This is possible because the algorithm naturally shifts its capital toward the winning strategies over time, acting as a Darwinian selection process.

## Visualization: Catching the Optimum

```chart
{
  "type": "line",
  "xAxis": "days",
  "data": [
    {"days": 0,   "universal": 1.0, "best_hindsight": 1.0, "stock_a": 1.0, "stock_b": 1.0},
    {"days": 50,  "universal": 1.2, "best_hindsight": 1.6, "stock_a": 1.4, "stock_b": 0.8},
    {"days": 100, "universal": 2.1, "best_hindsight": 2.5, "stock_a": 2.0, "stock_b": 1.1},
    {"days": 150, "universal": 3.8, "best_hindsight": 4.1, "stock_a": 2.5, "stock_b": 1.5},
    {"days": 200, "universal": 6.5, "best_hindsight": 6.8, "stock_a": 3.1, "stock_b": 2.0}
  ],
  "lines": [
    {"dataKey": "best_hindsight", "stroke": "#ef4444", "name": "Best Hindsight CRP (Impossible)"},
    {"dataKey": "universal", "stroke": "#10b981", "name": "Universal Portfolio (Achievable)"},
    {"dataKey": "stock_a", "stroke": "#94a3b8", "name": "Best Individual Stock"}
  ]
}
```
*Note how the Universal Portfolio (green) starts slow because it dilutes capital across all strategies, but eventually "learns" the optimal weights and tracks the impossible hindsight portfolio (red) closely, outperforming even the best single stock (grey) due to the volatility harvesting of rebalancing.*

## Practical Limitations

While mathematically beautiful, the original algorithm is hard to implement because calculating the integral over a high-dimensional simplex takes $O(T^m)$ time. Modern approximations use **MCMC sampling** or fast gradient methods (like Exponentiated Gradient) to achieve similar regret bounds in polynomial time. Also, transaction costs (from daily rebalancing) heavily impact the theoretical returns.

## Related Topics

[[online-learning-regret]] — the mathematical field (this is a continuous version of Hedge)  
[[information-theory]] — Cover's background and the connection to data compression  
[[kelly-criterion]] — BCRP maximizes the expected log-return (Kelly) in hindsight
---

---
title: "Glosten-Milgrom Model"
category: "Microstructure"
order: 6
lang: "en"
slug: "glosten-milgrom"
---

# Glosten-Milgrom Model: Adverse Selection Spread

The Glosten-Milgrom model (1985) is a cornerstone of market microstructure theory. It explains that the **bid-ask spread** is not just a cost for processing orders or a profit margin for the dealer, but a necessary protection against **Adverse Selection** (the risk of trading with an informed agent).

## The Core Intuition

Imagine a Market Maker (MM) who is risk-neutral but knows that some traders have private information about the true value of an asset ($V$), while others are just "noise traders" (liquidity seekers).
- If the MM sets the same price for buying and selling, the informed traders will only buy when $V > Price$ and only sell when $V < Price$.
- The MM will consistently lose money to informed traders and make money from noise traders.
- To break even, the MM must set a **Bid-Ask Spread**.

## The Mathematical Mechanism

Let the true value of the asset be $V_H$ (High) with probability $\pi$, or $V_L$ (Low) with probability $1-\pi$.
A trader arrives. They are **Informed** (know $V$) with probability $\alpha$, or **Noise** with probability $1-\alpha$.

The Market Maker sets prices such that their expected profit is zero (competition):
- **Ask Price ($P_A$)**: The expectation of $V$ given that the trader wants to **buy**.
- **Bid Price ($P_B$)**: The expectation of $V$ given that the trader wants to **sell**.

Using Bayes' Theorem:
$$P_A = \mathbb{E}[V \mid \text{Buy}] = \frac{\pi(1-\alpha/2 + \alpha/2)V_H + \dots}{\dots}$$
In simple terms, since a "Buy" is more likely if the value is High (because insiders would buy), the Ask price must be higher than the unconditional expectation $\mathbb{E}[V]$.

## The Bid-Ask Spread

The spread $S = P_A - P_B$ is strictly increasing in $\alpha$ (the proportion of insiders). 
- If $\alpha = 0$ (no insiders), the spread collapses to zero.
- If $\alpha = 1$ (everyone is an insider), the market shuts down (the spread becomes $V_H - V_L$, and no one trades).

## Key Takeaways

1.  **Price Discovery**: As trades occur, the MM updates their beliefs using Bayes' Law. Every buy order pushes the Bid and Ask prices up, even if the trade was actually from a noise trader. This is how information is "baked" into prices.
2.  **Liquidity Externalities**: Noise traders pay the spread to subsidize the losses the MM incurs against insiders. Informed trading "hurts" liquidity for everyone else.

## Visualization: Spread and Information

```chart
{
  "type": "line",
  "xAxis": "insider_pct",
  "data": [
    {"insider_pct": 0, "spread": 0.0},
    {"insider_pct": 10, "spread": 0.2},
    {"insider_pct": 30, "spread": 0.8},
    {"insider_pct": 50, "spread": 2.5},
    {"insider_pct": 80, "spread": 8.0}
  ],
  "lines": [
    {"dataKey": "spread", "stroke": "#ef4444", "name": "Bid-Ask Spread"}
  ]
}
```
*The spread grows exponentially as the probability of meeting an insider increases. If the MM suspects the market is "toxic," they widen the spread to protect themselves.*

## Related Topics

[[kyle-model]] — the strategic version of this logic  
[[vpin]] — real-time measurement of this adverse selection risk  
[[limit-order-book]] — the physical mechanism where the spread is displayed
---

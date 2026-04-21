---
title: "Market Impact and Square-root Law"
category: "Microstructure"
order: 2
lang: "en"
slug: "market-impact"
---

# Market Impact and the Square-root Law

Market impact is the change in an asset's price caused by a specific trade. For large institutional investors (like Citadel or BlackRock), market impact is the single largest component of transaction costs. The most famous empirical observation in this field is the **Square-root Law**.

## 1. Permanent vs. Temporary Impact

- **Temporary Impact**: A transient price shift caused by a temporary lack of liquidity in the order book. Once the trade is over, the price tends to bounce back (reversion).
- **Permanent Impact**: A lasting shift in the equilibrium price. This represents the **Information Discovery**: the market "learned" something from your trade and adjusted its belief about the true value of the asset.

## 2. The Square-root Law

Extensive empirical research across thousands of stocks (Bouchaud et al.) has shown that the average price impact $I$ of a meta-order (a large trade split into many smaller pieces) is proportional to the **square root** of its size $Q$:

$$I = Y \cdot \sigma \cdot \left( \frac{Q}{V} \right)^{1/2}$$

Where:
- $Q$ is the total volume of your trade.
- $V$ is the average daily volume of the stock.
- $\sigma$ is the daily volatility.
- $Y$ is a universal constant (usually around 1.0).

### Why is this surprising?
Usually, in linear models, we expect that buying 2x more shares moves the price 2x as much. But in finance, doubling the size only increases the impact by $\sqrt{2} \approx 1.41$. 
- **Cause**: This sub-linear behavior is due to **Latent Liquidity**. The order book only shows a tiny fraction of the total shares available. As you trade, more sellers "emerge" from the sidelines, dampening your impact.

## 3. Price Discovery as Physics

Market impact is the physical mechanism of **Price Discovery**. Without impact, prices would never move to reflect new information.
- If the impact is too high: The market is **Illiquid** and fragile.
- If the impact is too low: The market is **Incoherent** (prices don't react to important news).

## 4. Impact in Advanced Trading

1.  **Meta-order Slicing**: Execution algorithms (see [[smart-order-routing]]) split orders into "child orders" to move slowly and capture the square-root decay rather than a massive immediate linear spike.
2.  **Cross-Impact**: Trading a large block of Apple will move the price of Microsoft. Top funds model the whole **Cross-Impact Matrix** (see [[cross-impact]]) to prevent their own trades from "cannibalizing" the rest of their portfolio.

## Visualization: Impact vs. Order Size

```chart
{
  "type": "line",
  "xAxis": "order_size",
  "data": [
    {"order_size": 1, "impact": 1.0, "linear": 1.0},
    {"order_size": 4, "impact": 2.0, "linear": 4.0},
    {"order_size": 9, "impact": 3.0, "linear": 9.0},
    {"order_size": 16,"impact": 4.0, "linear": 16.0},
    {"order_size": 25,"impact": 5.0, "linear": 25.0}
  ],
  "lines": [
    {"dataKey": "impact", "stroke": "#10b981", "name": "Actual Impact (Square-root)"},
    {"dataKey": "linear", "stroke": "#ef4444", "name": "Naive Prediction (Linear)"}
  ]
}
```
*The square-root law (green) allows large funds to trade much larger volumes than a naive linear model (red) would suggest, provided they trade slowly enough to let the book refill.*

## Related Topics

[[optimal-execution]] — how to minimize this impact  
[[cross-impact]] — multi-asset generalization  
[[vpin]] — detecting when impact becomes toxic  
[[lob-propagators]] — the time-dependent math of impact decay
---
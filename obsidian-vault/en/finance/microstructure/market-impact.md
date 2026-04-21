---
title: "Market Impact and Square-root Law"
category: "Microstructure"
order: 2
lang: "en"
slug: "market-impact"
---

# Market Impact and the Square-root Law

Market impact is the change in an asset's price caused by a specific trade. It is a fundamental cost for large institutional investors and a key object of study in market microstructure. The most famous empirical observation in this field is the **Square-root Law**.

## Permanent vs. Temporary Impact

- **Temporary Impact**: A transient price shift caused by a temporary lack of liquidity. Once the trade is over, the price tends to bounce back.
- **Permanent Impact**: A lasting shift in the equilibrium price. It represents the information that the market "learned" from your trade.

## The Square-root Law

Extensive empirical research (Bouchaud et al.) has shown that the average price impact $I$ of a meta-order (a large trade split into smaller pieces) is proportional to the **square root** of its size $Q$:

$$I = Y \cdot \sigma \left( \frac{Q}{V} \right)^{1/2}$$

Where:
- $Q$ is the size of the order.
- $V$ is the average daily volume.
- $\sigma$ is the daily volatility.
- $Y$ is a constant of order 1.

### Why it's surprising
Usually, in economics, we expect linear relationships. However, in finance, doubling the size of an order does not double the impact—it only increases it by $\sqrt{2} \approx 1.41$. This sub-linear behavior is due to the **latent liquidity** hidden in the limit order book.

## Price Discovery

Market impact is the physical mechanism of **Price Discovery**. When an informed trader buys, their impact pushes the price toward the "true" value. 
- If the impact is too high, the market is **Illiquid**.
- If the impact is too low, the market is **Incoherent** (prices don't reflect information).

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
*The square-root law (green) shows that the cost of trading grows much slower than size would suggest. This allows large funds to move massive amounts of capital without destroying their own returns.*

## Related Topics

[[optimal-execution]] — how to minimize this impact  
[[vpin]] — detecting when impact is becoming toxic  
[[limit-order-book]] — the mechanics of order execution
---

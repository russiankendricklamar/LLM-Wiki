---
title: "Order Book Dynamics & LOB Modeling"
category: "Market Microstructure"
order: 3
lang: "en"
slug: "order-book-dynamics-and-lOB-modeling"
type: "article"
growth: "evergreen"
---

# Order Book Dynamics & LOB Modeling

Limit Order Book (LOB) modeling using point processes and order flow imbalance metrics.

---

## 1. Hawkes Processes

Self-exciting intensity function for order arrival spikes:
$$\lambda(t) = \mu + \sum_{t_i < t} \alpha \, e^{-\beta (t - t_i)}$$

---

## 2. Volume Imbalance Ratio

$$I = \frac{V_b - V_a}{V_b + V_a} \in [-1, 1]$$

---

## See Also
- [[quant-trading-guide|Quant Trading & Interview Prep Course]]
- [[high-frequency-trading-and-orderbook|High-Frequency Trading]]
- [[quant-market-making-mechanics|Market Making Mechanics]]

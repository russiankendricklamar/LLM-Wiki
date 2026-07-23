---
title: "Market Making Mechanics & Asymmetric Information"
category: "Market Microstructure"
order: 1
lang: "en"
slug: "quant-market-making-mechanics"
type: "article"
growth: "evergreen"
---

# Market Making Mechanics & Asymmetric Information

Market Making is the core activity of proprietary trading firms (Jane Street, Optiver, Citadel Securities, Flow Traders), providing continuous two-sided liquidity through Bid and Ask quotes.

---

## 1. Fundamentals & Spreads

- **Bid Price ($P_b$):** Maximum price at which the Market Maker buys.
- **Ask Price ($P_a$):** Minimum price at which the Market Maker sells.
- **Bid-Ask Spread ($\delta$):** $\delta = P_a - P_b$.
- **Mid Price ($P_m$):** $P_m = \frac{P_a + P_b}{2}$.

---

## 2. Avellaneda-Stoikov Inventory Model

The Reservation Price adjusts for accumulated inventory risk $q$:
$$r(s, q, t) = s - q \gamma \sigma^2 (T - t)$$

> **Trading Takeaway:** If $q > 0$ (long position), lower your quotes to encourage selling and control inventory risk!

---

## 3. Asymmetric Information & Adverse Selection

When a counterparty executes on your Ask, they signal positive private information. Instantly adjust your Mid Price **UP** via Bayesian updating!

---

## See Also
- [[quant-trading-guide|Quant Trading & Interview Prep Course]]
- [[optimal-stopping-and-kelly|Kelly Criterion & Optimal Stopping]]
- [[option-greeks-and-volatility|Option Greeks & Volatility]]

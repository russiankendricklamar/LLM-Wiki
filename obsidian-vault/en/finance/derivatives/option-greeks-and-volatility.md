---
title: "Option Greeks, Volatility & Hedging"
category: "Derivatives"
order: 1
lang: "en"
slug: "option-greeks-and-volatility"
type: "article"
growth: "evergreen"
---

# Option Greeks, Volatility & Hedging

Understanding option pricing and risk sensitivities (Greeks) is essential for trading interviews at SIG, Optiver, and IMC.

---

## 1. Put-Call Parity

$$C(S, t) - P(S, t) = S_0 - K e^{-r(T-t)}$$

---

## 2. Option Greeks

- **Delta ($\Delta$):** $\frac{\partial V}{\partial S}$
- **Gamma ($\Gamma$):** $\frac{\partial^2 V}{\partial S^2}$
- **Theta ($\Theta$):** $\frac{\partial V}{\partial t}$
- **Vega ($\nu$):** $\frac{\partial V}{\partial \sigma}$

---

## 3. Delta Hedging

Constructing a delta-neutral portfolio requires selling $\Delta$ shares of stock for every long call option held.

---

## See Also
- [[quant-trading-guide|Quant Trading & Interview Prep Course]]
- [[quant-market-making-mechanics|Market Making Mechanics]]
- [[optimal-stopping-and-kelly|Kelly Criterion]]

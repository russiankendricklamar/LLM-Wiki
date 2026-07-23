---
title: "Statistical Arbitrage & Pairs Trading"
category: "Trading Theory"
order: 2
lang: "en"
slug: "statistical-arbitrage-and-pairs-trading"
type: "article"
growth: "evergreen"
---

# Statistical Arbitrage & Pairs Trading

Statistical Arbitrage (StatArb) uses mathematical cointegration models to trade mean-reverting asset spreads.

---

## 1. Cointegration vs Correlation

- **Correlation:** Linear relation between returns $\Delta Y_t$ and $\Delta X_t$.
- **Cointegration:** Stationary spread $\epsilon_t = Y_t - \beta X_t \sim I(0)$ between non-stationary price series $I(1)$.
- **Tests:** Engle-Granger two-step method, Johansen VECM test, Augmented Dickey-Fuller (ADF) test.

---

## 2. Ornstein-Uhlenbeck Process

$$dX_t = \theta (\mu - X_t) dt + \sigma dW_t$$
Half-life of mean reversion: $\tau_{1/2} = \frac{\ln(2)}{\theta}$.

---

## See Also
- [[quant-trading-guide|Quant Trading & Interview Prep Course]]
- [[quant-brainteasers-handbook|Quant Brainteasers Handbook]]
- [[quant-risk-management-var-cvar|Quantitative Risk Management]]

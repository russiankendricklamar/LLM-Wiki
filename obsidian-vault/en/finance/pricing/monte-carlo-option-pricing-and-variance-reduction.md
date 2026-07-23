---
title: "Monte Carlo Option Pricing & Variance Reduction"
category: "Pricing & Execution"
order: 2
lang: "en"
slug: "monte-carlo-option-pricing-and-variance-reduction"
type: "article"
growth: "evergreen"
---

# Monte Carlo Option Pricing & Variance Reduction

Pricing path-dependent options using Antithetic Variates and Control Variates.

---

## 1. Monte Carlo Framework

GBM paths $S_T = S_0 \exp \left( (r - \frac{1}{2}\sigma^2)T + \sigma \sqrt{T} Z \right)$.

---

## 2. Variance Reduction

Antithetic Variates $Z^{(i)} \to -Z^{(i)}$ creates negative covariance, reducing standard error.

---

## See Also
- [[quant-trading-guide|Quant Trading & Interview Prep Course]]
- [[stochastic-calculus-and-ito-lemma|Stochastic Calculus]]
- [[option-greeks-and-volatility|Option Greeks]]

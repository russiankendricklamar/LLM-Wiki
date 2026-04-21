---
title: "Path-Dependent Volatility"
category: "Pricing"
order: 15
lang: "en"
slug: "path-dependent-volatility"
---

# Path-Dependent Volatility Models

Standard stochastic volatility models (like Heston) assume that volatility is driven by an independent random process. However, empirical evidence suggests that volatility is often a function of the **historical path** of the asset returns. **Path-Dependent Volatility (PDV)** models formalize this by making $\sigma_t$ a functional of the past.

## The Leverage Effect and Feedback

The most common path dependency is the **Leverage Effect**: volatility tends to increase when the price falls. PDV models capture this and more complex "feedback loops" where the speed and direction of past moves dictate current risk.

## General Form

A generic PDV model evolves as:
$$dS_t = \mu S_t dt + \sigma(t, \{S_u\}_{u \leq t}) S_t dW_t$$
where the volatility $\sigma_t$ depends on the entire trajectory $\{S_u\}$.

## 1. Weighted Realized Volatility
A popular version defines $\sigma_t$ as a weighted average of past squared returns:
$$\sigma_t^2 = \alpha \int_{-\infty}^t e^{-\lambda(t-s)} d[\ln S]_s$$
This looks like a continuous-time version of **GARCH**, where recent shocks have a decaying impact on future volatility.

## 2. Path-Dependent Volatility in Quantitative Finance (Guyon)
**Julien Guyon** (2014) introduced models where volatility is a function of the **running maximum** or the **average price**. 
- *Why?* To calibrate to exotic options (like Barriers or Lookbacks) while still fitting the standard vanilla smile. Local Volatility models often fail to capture the dynamics of path-dependent options simultaneously with vanillas.

## 3. Rough Paths and Signatures
Modern PDV research uses **Path Signatures** to represent the history. The signature acts as a "feature vector" of the path, allowing the model to capture high-order interactions (like the "twist" or "area" of the path) that simple averages miss.

## Why It Matters for AI

PDV models are naturally suited for **Neural SDEs**. Instead of hand-crafting the functional $\sigma(t, \dots)$, we can use a **GRU or LSTM** to encode the history of prices into a hidden state $h_t$, which then predicts the instantaneous volatility.

## Related Topics

[[rough-volatility]] — a specific type of path-dependent scaling  
[[garch-models]] — the discrete-time ancestor  
[[signature-based-models]] — the modern mathematical language for paths
---

---
title: "FRTB and Expected Shortfall"
category: "Risk"
order: 10
lang: "en"
slug: "frtb-es"
---

# FRTB and Expected Shortfall (ES)

The **Fundamental Review of the Trading Book (FRTB)** is a set of comprehensive proposals by the Basel Committee on Banking Supervision designed to overhaul the way banks calculate capital requirements for market risk. The most significant shift in FRTB is the replacement of Value-at-Risk (VaR) with **Expected Shortfall (ES)**.

## Why Replace VaR?

Value-at-Risk ($VaR_\alpha$) measures the maximum loss at a specific confidence level (e.g., 99%). However, VaR has two major flaws:
1.  **Tail Blindness**: It says nothing about the severity of losses *beyond* the 99th percentile (the "tail" of the distribution).
2.  **Lack of Coherence**: VaR is not a **coherent risk measure** because it is not sub-additive. Merging two portfolios can sometimes result in a VaR that is *higher* than the sum of individual VaRs, which contradicts the principle of diversification.

## Expected Shortfall (ES)

Expected Shortfall (also called Conditional VaR or CVaR) addresses these flaws by calculating the **average loss** in the worst cases:

$$ES_\alpha(X) = \mathbb{E}[X \mid X \geq VaR_\alpha(X)]$$

Under FRTB, banks must use a **97.5% confidence level** for ES, which provides a similar capital cushion to 99% VaR but with much better sensitivity to tail risks (black swans).

## Key Features of FRTB

### 1. Liquidity Horizons
Unlike old rules that assumed all positions could be liquidated in 10 days, FRTB introduces variable **Liquidity Horizons** (from 10 to 120 days) depending on the asset class. Less liquid assets (like small-cap stocks or exotic derivatives) require significantly more capital.

### 2. Standardized vs. Internal Models (IMA)
FRTB makes it much harder to use internal models. Banks must pass rigorous **P&L Attribution (PLA)** tests and **Backtesting** to prove their models accurately reflect market reality. If a model fails, the bank is forced to use the more conservative Standardized Approach.

### 3. Non-Modellable Risk Factors (NMRF)
If a risk factor lacks sufficient price observations (e.g., a rarely traded bond), it is classified as NMRF and requires a huge capital add-on, discouraging banks from holding opaque instruments.

## Visualization: VaR vs. ES

```chart
{
  "type": "line",
  "xAxis": "loss",
  "data": [
    {"loss": 80, "prob": 0.05},
    {"loss": 90, "prob": 0.02},
    {"loss": 95, "prob": 0.01, "label": "VaR 99%"},
    {"loss": 110, "prob": 0.005},
    {"loss": 150, "prob": 0.001}
  ],
  "lines": [
    {"dataKey": "prob", "stroke": "#3b82f6", "name": "Loss Distribution Tail"}
  ]
}
```
*VaR stops at the 99% mark (loss = 95). ES looks at the entire shaded area to the right, capturing the potential $150+ catastrophes that VaR ignores.*

## Related Topics

[[value-at-risk]] — the predecessor being replaced  
[[coherent-risk-measures]] — the mathematical axioms of risk  
[[extreme-value-theory]] — the math for calculating the ES tail
---

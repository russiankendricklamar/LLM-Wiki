---
title: "CVA and Wrong-Way Risk"
category: "Risk Management"
order: 15
lang: "en"
slug: "cva-wrong-way-risk"
---

# Credit Valuation Adjustment (CVA) and Wrong-Way Risk

**Credit Valuation Adjustment (CVA)** is the price of the counterparty credit risk in a derivative transaction. It represents the difference between the "risk-free" value of a portfolio and the value that accounts for the possibility of the counterparty defaulting. Among all the components of CVA, **Wrong-Way Risk (WWR)** is the most dangerous and difficult to model.

## What is CVA?

If you have a winning position in a swap with a bank, but that bank goes bankrupt, you might not receive your money. CVA is essentially the **expected loss** due to this counterparty default:

$$CVA = (1-R) \int_0^T \mathbb{E}[Exposure(t)] dPD(t)$$

Where $R$ is the recovery rate, $Exposure(t)$ is the positive value of the portfolio at time $t$, and $PD(t)$ is the probability of default.

## Wrong-Way Risk (WWR)

Standard CVA calculations often assume that the probability of default ($PD$) and the market exposure ($Exposure$) are independent. **Wrong-Way Risk** occurs when they are **positively correlated**.

- **Example**: You buy a Credit Default Swap (CDS) from Bank A to protect against the default of Bank B. If Bank B defaults, and it turns out Bank A was heavily invested in Bank B, Bank A might default exactly when they owe you the most money.
- **Oil Example**: An oil producer enters a swap to hedge against falling oil prices. If oil prices crash, the producer's exposure (value of the hedge) spikes. If the producer is also close to bankruptcy because of low oil prices, the counterparty faces WWR.

## Right-Way Risk

The opposite of WWR. It occurs when your exposure to a counterparty decreases as their credit quality deteriorates. (e.g., you owe them money exactly when they are failing). This is "good" for you, but WWR is the one that requires massive capital buffers.

## Modeling WWR

Modeling WWR requires **Stochastic Correlation** models or **Copulas**. 
- **Jump-to-Default Models**: The price of the underlying asset "jumps" at the moment the counterparty defaults.
- **FRTB and WWR**: Under the new FRTB rules, WWR must be specifically identified and penalized with higher capital requirements, especially for "specific" WWR (where a legal connection exists between the underlying and the counterparty).

## Visualization: WWR Exposure Spike

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": 0, "exposure": 10, "default_prob": 0.01},
    {"time": 1, "exposure": 12, "default_prob": 0.02},
    {"time": 2, "exposure": 25, "default_prob": 0.15},
    {"time": 3, "exposure": 80, "default_prob": 0.60},
    {"time": 4, "exposure": 100,"default_prob": 0.99}
  ],
  "lines": [
    {"dataKey": "exposure", "stroke": "#ef4444", "name": "Exposure (Winning)"},
    {"dataKey": "default_prob", "stroke": "#3b82f6", "name": "Counterparty Default Prob"}
  ]
}
```
*In a Wrong-Way Risk scenario, as the counterparty approaches default (blue line), the value they owe you (red line) explodes. This "perfect storm" is what causes systemic collapses.*

## Related Topics

[[xva]] — the family of adjustments including CVA, DVA, and FVA  
[[copula-models]] — the mathematical tool for correlating defaults and prices  
[[systemic-contagion-debtrank]] — the macro consequence of WWR
---

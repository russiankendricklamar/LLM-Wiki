---
title: "FRTB Standardized Approach (SA-MR)"
category: "Risk"
order: 11
lang: "en"
slug: "frtb-sa-mr"
---

# FRTB Standardized Approach (SA-MR)

The **Standardized Approach for Market Risk (SA-MR)** is a central pillar of the **FRTB** (Fundamental Review of the Trading Book) regulations. It provides a risk-sensitive, transparency-focused methodology for calculating capital requirements that serves as a floor (or a replacement) for internal models.

## The Core Logic: Sensitivities

Unlike the old "Standardized Approach," which was based on simple bucketed risk weights, the new SA-MR is based on **Greeks (Sensitivities)**. Banks must calculate the sensitivity of every instrument in their portfolio to various risk factors (Delta, Vega, Curvature).

## 1. The Sensitivities-Based Method (SBM)

The total capital charge is computed in three steps:

### A. Delta Risk
The sensitivity of the price to a small change in the underlying (e.g., interest rate, stock price).
$$Delta\_Charge = \sqrt{\sum K_i^2 + \sum \sum \rho_{ij} K_i K_j}$$
Where $K$ is the weighted sensitivity and $\rho$ is the regulatory correlation between factors.

### B. Vega Risk
Risk due to changes in implied volatility. This is massive for options-heavy portfolios.

### C. Curvature Risk
Captures the non-linear risk (Gamma) that Delta doesn't see. It is calculated by "stressing" the underlying up and down and measuring the loss beyond the linear approximation.

## 2. Default Risk Charge (DRC)

A separate capital add-on to protect against the sudden "jump-to-default" of an issuer (stocks or bonds). It assumes two independent "shocks" to credit quality.

## 3. Residual Risk Add-on (RRAO)

A "catch-all" charge for exotic risks that cannot be captured by Delta, Vega, or Curvature (e.g., correlation risk in complex CDOs). It is a flat percentage applied to the notional of exotic trades.

## Why Banks Hate/Love It

- **Pro**: It is much more stable and predictable than internal models.
- **Con**: It is often **conservative** (requires more capital) and requires massive computational effort to calculate sensitivities for the entire bank every day.

## Visualization: Capital Stack under FRTB

```chart
{
  "type": "bar",
  "xAxis": "component",
  "data": [
    {"component": "Delta Risk", "capital": 50},
    {"component": "Vega Risk", "capital": 30},
    {"component": "Curvature", "capital": 10},
    {"component": "Default Risk", "capital": 15},
    {"component": "Residual", "capital": 5}
  ],
  "lines": [
    {"dataKey": "capital", "stroke": "#ef4444", "name": "Capital Requirement ($bn)"}
  ]
}
```

## Related Topics

[[frtb-es]] — the Internal Model alternative (Expected Shortfall)  
[[greeks-options]] — the inputs for SBM  
[[xva]] — risk-neutral pricing vs. regulatory capital
---

---
title: "Stochastic Integration for fBM"
category: "Stochastic Calculus"
order: 25
lang: "en"
slug: "fbm-integration"
---

# Stochastic Integration for Fractional Brownian Motion

Stochastic integration with respect to [[fractional-brownian-motion|Fractional Brownian Motion]] (fBM) is significantly more complex than standard Itô calculus. This is because for $H \neq 0.5$, fBM is **not a semimartingale**, which means the classical Itô integral cannot be defined.

## The Challenge

The absence of the martingale property means we cannot use the usual isometry to define the integral. 
- For $H > 0.5$, the process is "smooth enough" to use **Young Integration** (pathwise).
- For $H < 0.5$, the process is too rough, requiring more advanced tools like the **Divergence Operator (Skorokhod Integral)** or **Rough Path Theory**.

## 1. The Skorokhod Integral (Malliavin Calculus)

The Skorokhod integral $\delta(u)$ is an extension of the Itô integral to non-adapted integrands. For fBM, it is defined using the **Malliavin derivative** $D$:
$$\mathbb{E}[\delta(u) F] = \mathbb{E}[\langle u, DF \rangle_{\mathcal{H}}]$$
where $\mathcal{H}$ is the RKHS associated with the fBM kernel.

Unlike the Itô integral, the Skorokhod integral satisfies:
$$\mathbb{E}[\delta(u)] = 0$$
but it does **not** preserve the "fair game" property in time (the integral is not a martingale).

## 2. The Stratonovich-type Integral (Wick Product)

Another approach is to define the integral using the **Wick product** $\diamond$. This leads to a calculus that obeys standard chain rules, similar to Stratonovich calculus:
$$\int_0^T \phi(B_t^H) \delta B_t^H$$
This is often used in physics and finance to model systems with long-range dependence where "standard" rules of calculus are desired.

## Why It Matters for Finance and AI

1.  **Fractional Volatility**: Models like **Rough Volatility** (Gatheral et al.) assume that the volatility of an asset is driven by an fBM with $H \approx 0.1$. Pricing options in such models requires fractional stochastic integration.
2.  **Long-Memory Systems**: Modeling signals where the current state depends on the entire history (e.g., climate data, certain neural signals).

## Visualization: Integration Regularity

```chart
{
  "type": "line",
  "xAxis": "H",
  "data": [
    {"H": 0.1, "difficulty": 100, "label": "Very Rough (Skorokhod only)"},
    {"H": 0.3, "difficulty": 70},
    {"H": 0.5, "difficulty": 10,  "label": "Itô Calculus (Martingale)"},
    {"H": 0.7, "difficulty": 30,  "label": "Young Integral (Smooth)"},
    {"H": 0.9, "difficulty": 15}
  ],
  "lines": [
    {"dataKey": "difficulty", "stroke": "#ef4444", "name": "Mathematical Complexity"}
  ]
}
```
*The complexity of integration is lowest at $H=0.5$ (the "sweet spot" of semimartingales). As $H$ deviates, we either enter the world of pathwise smooth integration ($H>0.5$) or the world of rough distributions ($H<0.5$).*

## Related Topics

[[malliavin-calculus]] — the underlying engine  
[[rough-paths]] — the pathwise alternative  
[[fractional-brownian-motion]] — the process being integrated
---

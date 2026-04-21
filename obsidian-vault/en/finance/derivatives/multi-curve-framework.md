---
title: "Multi-Curve Framework"
category: "Derivatives"
order: 20
lang: "en"
slug: "multi-curve-framework"
---

# Multi-Curve Framework (Post-2008 Modern Yield Curves)

Before the 2008 financial crisis, interest rate modeling was simple: there was one curve. A 3-month LIBOR rate was considered "risk-free," and the same curve was used both to project future cash flows and to discount them to the present. The crisis destroyed this assumption.

## The Paradigm Shift

During the crisis, the spread between LIBOR (interbank lending) and OIS (Overnight Index Swaps, the true risk-free rate) exploded. Banks realized that LIBOR carries significant credit and liquidity risk.

In the **Modern Multi-Curve Framework**:
1.  **Discounting Curve**: Use the **OIS (Overnight) curve** (e.g., SOFR in US, ESTR in EU) to discount all cash flows. This reflects the cost of collateral.
2.  **Forward (Projection) Curves**: Use separate curves for each tenor (1M LIBOR, 3M LIBOR, 6M LIBOR). A 3M rate is no longer a 6M rate divided by two; they are different economic variables.

## Why Do Curves Diverge?

The "Basis" between curves exists due to:
- **Credit Risk**: Lending money for 6 months is riskier than for 1 month.
- **Liquidity Risk**: Longer-term funding is harder to source during stress.

Mathematically, the Forward Rate $F(t; T_1, T_2)$ is no longer derived from the discount factor ratio $P(t, T_1)/P(t, T_2)$. Instead, it is its own stochastic process, leading to a massive increase in the number of parameters needed to manage a trading desk.

## CSA and Collateral Discounting

The move to OIS discounting was driven by **Credit Support Annex (CSA)** agreements. Since most professional derivatives are collateralized with cash that earns the overnight rate, the "risk-neutral" expectation must be discounted using that same overnight rate.

## LIBOR Transition (The "End of LIBOR")

As of 2021-2023, the industry has largely transitioned from LIBOR to **Risk-Free Rates (RFRs)** like **SOFR**. Unlike LIBOR, which was based on expert judgment (and prone to manipulation), RFRs are based on actual overnight repo transactions. This has simplified some parts of the framework while making "term rates" (like a forward-looking 3M rate) much harder to calculate.

## Visualization: The Basis Spread

```chart
{
  "type": "line",
  "xAxis": "tenor",
  "data": [
    {"tenor": "1M", "ois": 2.0, "libor": 2.1},
    {"tenor": "3M", "ois": 2.2, "libor": 2.5},
    {"tenor": "6M", "ois": 2.5, "libor": 3.1},
    {"tenor": "12M","ois": 3.0, "libor": 4.2}
  ],
  "lines": [
    {"dataKey": "ois", "stroke": "#10b981", "name": "Discount Curve (OIS)"},
    {"dataKey": "libor", "stroke": "#ef4444", "name": "Projection Curve (LIBOR/Basis)"}
  ]
}
```
*In the old world, these lines were the same. In the modern world, the "wedge" (red area) represents the market's assessment of interbank risk, which must be modeled separately.*

## Related Topics

[[bootstrapping-yield-curve]] — how to build these curves from market instruments  
[[interest-rate-term-structure]] — the classical theory  
[[xva]] — how discounting relates to counterparty risk
---

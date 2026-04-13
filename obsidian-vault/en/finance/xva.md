---
title: "XVA (Valuation Adjustments)"
category: "Quantitative Finance"
order: 12
lang: "en"
---
# XVA (Valuation Adjustments)

**XVA** is a collective term referring to a variety of "valuation adjustments" in derivative pricing. These adjustments are necessary to account for counterparty credit risk, funding costs, and regulatory capital requirements that were largely ignored in the pre-2008 financial world.

## Key Components of XVA

1.  **CVA (Credit Valuation Adjustment)**: The cost of hedging the counterparty credit risk. It represents the market value of the risk that the counterparty might default while the contract has a positive value for us.
2.  **DVA (Debit Valuation Adjustment)**: The adjustment for our own credit risk. It represents the benefit to us if we default while the contract has a negative value for us (a liability).
3.  **FVA (Funding Valuation Adjustment)**: The cost or benefit of funding the derivative. It accounts for the difference between the rates at which we borrow and the rates earned on collateral.
4.  **KVA (Capital Valuation Adjustment)**: The cost of holding regulatory capital (e.g., Basel III) over the lifetime of the trade.
5.  **MVA (Margin Valuation Adjustment)**: The cost of funding the initial margin (IM) required for cleared or non-centrally cleared trades.

## Mathematical Concept (CVA)

CVA is calculated as the discounted expected loss due to a counterparty default:

$$
\text{CVA} \approx (1-R) \sum_{i=1}^{n} \text{EE}(t_i) \cdot PD(t_{i-1}, t_i) \cdot D(t_i)
$$

Where:
- $R$ is the Recovery Rate.
- $\text{EE}(t_i)$ is the Expected Exposure at time $t_i$.
- $PD$ is the Probability of Default in the period.
- $D(t_i)$ is the discount factor.

## Why XVA Matters

Before 2008, derivatives were often priced using risk-free curves. Today, XVA can be a significant part of a bank's P&L. A trade that appears profitable on a mid-market basis may actually be loss-making after accounting for XVA and capital charges.

## Python: Simple CVA Estimation

```python
import numpy as np

def calculate_simple_cva(expected_exposures, pd_profile, recovery_rate=0.4):
    """
    Simplified CVA calculation based on exposure profile and default probabilities.
    """
    lgd = 1 - recovery_rate # Loss Given Default
    cva = lgd * np.sum(expected_exposures * pd_profile)
    return cva

# 5-year exposure forecast
ee = np.array([100, 120, 150, 130, 90])
# Annual default probabilities
pd = np.array([0.01, 0.012, 0.015, 0.018, 0.02])

result = calculate_simple_cva(ee, pd)
print(f"Estimated CVA: ${result:.2f}")
```

## Exposure Profile Visualization

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "0", "ee": 0, "pfe": 0},
    {"time": "1Y", "ee": 45, "pfe": 80},
    {"time": "2Y", "ee": 65, "pfe": 120},
    {"time": "3Y", "ee": 75, "pfe": 150},
    {"time": "4Y", "ee": 55, "pfe": 110},
    {"time": "5Y", "ee": 0, "pfe": 0}
  ],
  "lines": [
    {"dataKey": "ee", "stroke": "#3b82f6", "name": "Expected Exposure (EE)"},
    {"dataKey": "pfe", "stroke": "#ef4444", "name": "Potential Future Exposure (PFE)"}
  ]
}
```

## XVA Summary Table

| Component | Risk Source | Impact on Price |
| :--- | :--- | :---: |
| **CVA** | Counterparty Default | Decreases Price |
| **DVA** | Own Default | Increases Price |
| **FVA** | Liquidity/Funding | Dependent on Basis |
| **KVA** | Regulatory Capital | Decreases Price |
| **MVA** | Initial Margin | Decreases Price |


## Related Topics
- [[swaps]]
- [[cs01]]
- [[copula-models]]

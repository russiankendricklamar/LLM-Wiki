---
title: "DV01 (Dollar Value of a 01)"
category: "Quantitative Finance"
order: 9
lang: "en"
---
# DV01 (Dollar Value of a 01)

**DV01** (Dollar Value of a 01) measures the price sensitivity of a fixed-income instrument to a 1 basis point ($0.01\%$) change in yield. Unlike duration, which is expressed in years or percentage terms, DV01 provides a direct monetary value of the risk.

## Mathematical Definition

DV01 is calculated as the absolute change in price $P$ for a change in yield $y$ of $\Delta y = 1 \text{ bp}$ ($0.0001$):

$$
\text{DV01} = -\frac{\Delta P}{\Delta y \cdot 10000} \approx -\frac{\partial P}{\partial y} \cdot 0.0001
$$

The negative sign is often omitted by convention, with the understanding that rising yields lead to falling prices.

## Relationship with Modified Duration

DV01 is directly proportional to Modified Duration ($D_{mod}$):

$$
\text{DV01} = P \times D_{mod} \times 0.0001
$$

Where $P$ is the current market value (dirty price) of the position.

## DV01 vs PV01

In most practical applications, **DV01** and **PV01** (Present Value of a Basis Point) are used interchangeably. However, PV01 is more common in the context of interest rate swaps and derivatives, while DV01 is the standard term for cash bonds.

## Python: Calculating DV01

```python
def calculate_bond_dv01(price, modified_duration):
    """
    Calculate DV01 based on market price and modified duration.
    """
    return price * modified_duration * 0.0001

# Example: A bond position worth $105,000 with a duration of 7.5 years
price = 105000
duration = 7.5
dv01 = calculate_bond_dv01(price, duration)

print(f"DV01 of the position: ${dv01:.2f}")
# This means for a 1 bp increase in yield, the position loses $78.75
```

## Interest Rate Risk Visualization

```chart
{
  "type": "line",
  "xAxis": "yield_shift",
  "data": [
    {"yield_shift": "-5", "pnl": 393.75},
    {"yield_shift": "-2", "pnl": 157.50},
    {"yield_shift": "0", "pnl": 0},
    {"yield_shift": "2", "pnl": -157.50},
    {"yield_shift": "5", "pnl": -393.75}
  ],
  "lines": [
    {"dataKey": "pnl", "stroke": "#3b82f6", "name": "P&L from Rate Shift ($)"}
  ]
}
```

## Practical Applications

1.  **Hedging**: To hedge the interest rate risk of one bond with another, a trader matches their DV01s (creating a DV01-neutral hedge).
2.  **Risk Aggregation**: DV01 allows traders to sum the risks of different bonds in a portfolio to understand the total exposure to a "parallel shift" in the yield curve.
3.  **Curve Trading**: Traders monitor DV01 across different tenors (e.g., 2Y, 10Y, 30Y) to manage exposures to changes in the curve's slope or curvature.

---
title: "CS01 (Credit Spread 01)"
category: "Quantitative Finance"
order: 8
lang: "en"
---
# CS01 (Credit Spread 01)

**CS01** (also known as **DVCS** or **Credit DV01**) measures the sensitivity of a financial instrument's value to a 1 basis point ($0.01\%$) change in its credit spread. It is the primary risk metric used for bond portfolios and credit derivatives like Credit Default Swaps (CDS).

## What Does It Mean?

If a bond has a CS01 of $\$500$, it means that if its credit spread widens (increases) by 1 bp, the bond's price will fall by approximately $\$500$. Conversely, if the spread tightens, the price will rise.

## Mathematical Formula

Mathematically, CS01 is the first derivative of the instrument's price with respect to the credit spread $s$:

$$
\text{CS01} \approx -\frac{\Delta V}{\Delta s} \approx -\frac{V(s + \Delta s) - V(s)}{\Delta s}
$$

Where:
- $V$ is the value of the instrument.
- $s$ is the current credit spread.
- $\Delta s$ is the change in spread (1 bp or $0.0001$).

For CDS contracts, CS01 is closely related to the **Risky PV01** (or RPV01), which represents the present value of a 1 bp premium stream until default or maturity.

## CS01 vs PV01

It is crucial to distinguish between these two:
- **PV01 (Present Value 01)**: Sensitivity to changes in the *risk-free* interest rate.
- **CS01 (Credit Spread 01)**: Sensitivity to changes in the *credit-specific* risk (default risk of the issuer).

## Python: Estimating CS01 via Duration

For bonds, CS01 can be approximated using the modified duration ($D_{mod}$):

```python
def estimate_cs01(market_value, modified_duration):
    # Price change for a 1 bp shift (0.0001)
    cs01 = market_value * modified_duration * 0.0001
    return cs01

market_val = 1000000 # $1M
duration = 5.2       # years
result = estimate_cs01(market_val, duration)

print(f"Estimated CS01: ${result:,.2f}")
# If spreads widen by 1 bp, the portfolio loses $520
```

## Sensitivity Visualization

```chart
{
  "type": "line",
  "xAxis": "spread_change",
  "data": [
    {"spread_change": "-10", "price_change": 5200},
    {"spread_change": "-5", "price_change": 2600},
    {"spread_change": "0", "price_change": 0},
    {"spread_change": "5", "price_change": -2600},
    {"spread_change": "10", "price_change": -5200}
  ],
  "lines": [
    {"dataKey": "price_change", "stroke": "#ef4444", "name": "Price Change ($)"}
  ]
}
```

## Risk Management Uses

Traders use CS01 for:
1.  **Hedging**: Opening offsetting positions (e.g., buying CDS protection against a bond position) to zero out net CS01.
2.  **Risk Limits**: Setting maximum allowed CS01 exposure for a specific issuer or sector.
3.  **P&L Attribution**: Quickly forecasting potential profit or loss based on market spread movements.
---

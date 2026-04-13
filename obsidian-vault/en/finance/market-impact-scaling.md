---
title: "Capacity & Market Impact Scaling"
category: "Risk Management"
order: 108
lang: "en"
---
# Capacity & Market Impact Scaling Laws

**Strategy Capacity** is the maximum amount of capital that can be deployed in a trading strategy before its alpha is eroded by market impact. Understanding the **Scaling Laws** of impact is critical for scaling hedge funds and proprietary trading desks.

## Market Impact Scaling

The cost of trading $Q$ shares relative to the Average Daily Volume ($ADV$) follows a square-root law (often called the **Square Root Law of Impact**):
$$
I(Q) = Y \cdot \sigma \cdot \sqrt{\frac{Q}{ADV}}
$$
Where:
- $Y$ is a constant (typically around 0.1 to 1.0).
- $\sigma$ is the daily volatility of the asset.
- $Q/ADV$ is the participation rate.

## Capacity Estimation

The capacity of a strategy can be estimated by finding the capital level where the expected alpha equals the execution cost:
$$
\text{Alpha} \cdot \text{Turnover} \cdot \text{Capital} = \text{Cost}(Q)
$$
As capital increases, $Q$ increases, and because impact is non-linear, costs eventually grow faster than profits.

## Financial Application

1. **Fund Sizing**: Determining when a fund should be "closed" to new investors to prevent performance dilution.
2. **Strategy Selection**: Prioritizing high-capacity strategies (e.g., Global Macro) over high-alpha but low-capacity ones (e.g., micro-cap StatArb).
3. **Execution Optimization**: Spreading orders over multiple days to stay within the "linear" region of the impact curve.

## Python: Estimating Alpha Erosion

```python
import numpy as np

def estimate_cost(capital, turnover, adv, sigma, y=0.5):
    """
    capital: Total AUM
    turnover: % of AUM traded daily
    adv: Average Daily Volume in $
    sigma: Daily volatility
    """
    trade_size = capital * turnover
    participation = trade_size / adv
    # Square root law
    impact_bps = y * sigma * np.sqrt(participation) * 10000
    return impact_bps

# Parameters: $100M AUM, 10% daily turnover, $500M ADV, 2% vol
aum = 100_000_000
cost = estimate_cost(aum, 0.1, 500_000_000, 0.02)

print(f"Estimated Market Impact: {cost:.2f} bps")
print(f"If Alpha < {cost/100:.2f}%, the strategy is losing money at this scale.")
```

## Related Topics
- [[optimal-execution]]
- [[avellaneda-stoikov]]
---

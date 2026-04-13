---
title: "Pairs Trading Strategy"
category: "Pricing Models"
order: 126
lang: "en"
slug: "pairs-trading"
---
# Pairs Trading Strategy

**Pairs Trading** is a market-neutral strategy that matches a long position with a short position in two highly correlated assets. The strategy exploits temporary price divergences between the two, assuming they will eventually revert to their historical relationship (**Cointegration**).

## Practical Implementation Guide

1.  **Pair Selection**: Finding assets in the same sector (e.g., PEP vs KO) that exhibit a stable long-term relationship.
2.  **Cointegration Test**: Using the **Engle-Granger** or **Johansen test** to ensure the spread between the two assets is stationary.
3.  **Spread Calculation**:
    *   $\text{Spread} = \ln(P_A) - \beta \ln(P_B)$
    *   $\beta$ is the hedge ratio, typically determined via Total Least Squares (TLS) or Kalman Filter.
4.  **Entry/Exit Rules**: Entering when the Z-score of the spread exceeds a threshold (e.g., $\pm 2.0$) and exiting when it reverts to the mean ($0.0$).

## Mathematical Formulation

The spread $S_t$ is modeled as an Ornstein-Uhlenbeck (OU) process:
$$
dS_t = \theta (\mu - S_t) dt + \sigma dW_t
$$
where $\theta$ is the rate of mean reversion. Parameters $\theta, \mu, \sigma$ can be estimated using [[mcmc]] to account for time-varying dynamics. If the spread remains diverged for too long, [[value-at-risk]] (VaR) limits must be enforced to prevent catastrophic losses.

## Key Metrics
- **Hedge Ratio ($\beta$)**: The relative sizing of the long and short legs.
- **Half-Life of Mean Reversion**: $\ln(2) / \theta$, indicating how long a trade is expected to stay open.
- **Z-Score**: Number of standard deviations the current spread is from the mean.
- **Cointegration P-Value**: Statistical confidence that the relationship is not due to random chance.

## Python: Cointegration Test and Spread

```python
import numpy as np
import pandas as pd
from statsmodels.tsa.stattools import coint
from sklearn.linear_model import LinearRegression

# Generate dummy cointegrated data
np.random.seed(42)
x = np.cumsum(np.random.normal(0, 1, 100))
y = x + np.random.normal(0, 0.5, 100) # x and y are cointegrated

# Test for cointegration
score, p_value, _ = coint(x, y)
print(f"Cointegration P-Value: {p_value:.4f}")

# Calculate Z-score of the spread
model = LinearRegression().fit(x.reshape(-1, 1), y)
beta = model.coef_[0]
spread = y - beta * x
z_score = (spread - np.mean(spread)) / np.std(spread)
print(f"Current Z-Score: {z_score[-1]:.2f}")
```

## Financial Context

Pairs trading is the foundation of **Statistical Arbitrage**. While traditionally used on stocks, it is widely applied to ETFs, currencies, and crypto. The risk is "Legging Risk" (execution delay) and "Relationship Breakage," where the two assets stop being correlated due to fundamental shifts (e.g., a merger or bankruptcy). Robustness can be tested using [[monte-carlo-method]] to simulate thousands of "broken" scenarios.

## Related Topics
- [[mean-reversion-strategies]]
- [[mcmc]]
- [[value-at-risk]]
- [[monte-carlo-method]]
---

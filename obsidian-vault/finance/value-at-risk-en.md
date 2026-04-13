---
title: "Value at Risk (VaR)"
category: "Quantitative Finance"
order: 5
lang: "en"
---
# Value at Risk (VaR)

**Value at Risk (VaR)** is a standard measure of market risk that estimates the maximum potential loss of a portfolio over a specific time period for a given confidence level.

For example, if a portfolio's daily VaR is $1 million at a 95% confidence level, it means that in 95% of cases, the daily loss will not exceed $1 million, and there is only a 5% chance that the loss will be greater.

## Calculation Methods

There are three main approaches to calculating VaR:

1.  **Parametric Method (Variance-Covariance)**: Assumes that asset returns are normally distributed.
2.  **Historical Simulation**: Uses actual historical return data to estimate the distribution of future losses.
3.  **Monte Carlo Simulation**: Generates thousands of random market scenarios based on specified parameters.

## Mathematical Formula (Parametric VaR)

For a single asset, the parametric VaR is calculated as:

$$
\text{VaR}_{\alpha} = S \cdot \sigma \cdot \sqrt{t} \cdot Z_{\alpha}
$$

Where:
- $S$ is the portfolio value.
- $\sigma$ is the volatility of the asset's return.
- $t$ is the time horizon (in days).
- $Z_{\alpha}$ is the quantile of the standard normal distribution for the given confidence level $\alpha$.

## Python: Calculating VaR

Here is an example of calculating both Parametric and Historical VaR using Python:

```python
import numpy as np
from scipy.stats import norm

def calculate_var(returns, confidence_level=0.95, portfolio_value=1000000):
    # Parametric VaR
    mu = np.mean(returns)
    sigma = np.std(returns)
    z_score = norm.ppf(confidence_level)
    parametric_var = portfolio_value * (z_score * sigma - mu)
    
    # Historical VaR
    historical_var = portfolio_value * -np.percentile(returns, (1 - confidence_level) * 100)
    
    return parametric_var, historical_var

# Example data (daily returns)
np.random.seed(42)
returns = np.random.normal(0.001, 0.02, 1000)
p_var, h_var = calculate_var(returns)

print(f"Parametric VaR (95%): ${p_var:,.2f}")
print(f"Historical VaR (95%): ${h_var:,.2f}")
```

## Loss Distribution Visualization

The chart below shows a typical return distribution, where VaR marks the threshold for the "tail" of significant losses.

```chart
{
  "type": "line",
  "xAxis": "return",
  "data": [
    {"return": "-4%", "freq": 0.05},
    {"return": "-3%", "freq": 0.15},
    {"return": "-2%", "freq": 0.40},
    {"return": "-1%", "freq": 0.80},
    {"return": "0%", "freq": 1.00},
    {"return": "1%", "freq": 0.80},
    {"return": "2%", "freq": 0.40},
    {"return": "3%", "freq": 0.15},
    {"return": "4%", "freq": 0.05}
  ],
  "lines": [
    {"dataKey": "freq", "stroke": "#3b82f6", "name": "Probability Density"}
  ]
}
```

## Pros and Cons

| Feature | Pros | Cons |
| :--- | :--- | :--- |
| **Simplicity** | Easy to interpret in monetary terms | Does not measure the magnitude of "tail" losses (solved by Expected Shortfall) |
| **Standardization** | Allows comparison across different portfolios | Heavily relies on the assumption of normality (for parametric method) |
| **Regulation** | Used in Basel Accords | Often fails during extreme market crises |

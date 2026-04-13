---
title: "Extreme Value Theory (EVT)"
category: "Risk Management"
order: 7
lang: "en"
---
# Extreme Value Theory (EVT)

**Extreme Value Theory (EVT)** is a branch of statistics dealing with the extreme deviations from the median of probability distributions. In finance, EVT is often called the "mathematics of Black Swans," as it provides tools to estimate the probability of rare but catastrophic events that normal distributions fail to capture.

## Fundamental Approaches

There are two primary methods for identifying and modeling extreme values:

1.  **Block Maxima**: This method involves partitioning the data into non-overlapping blocks of equal size (e.g., years) and selecting the maximum value from each block. The limiting distribution is the **Generalized Extreme Value (GEV)** distribution.
2.  **Peaks Over Threshold (POT)**: This method focuses on all observations that exceed a high threshold $u$. The limiting distribution for these excesses is the **Generalized Pareto Distribution (GPD)**.

## Generalized Pareto Distribution (GPD)

The POT method is generally preferred in finance due to its efficient use of data. According to the Pickands–Balkema–de Haan theorem, the distribution of excesses over a sufficiently high threshold $u$ converges to a GPD:

$$
G_{\xi, \beta}(y) = 
\begin{cases} 
1 - (1 + \xi y / \beta)^{-1/\xi} & \text{if } \xi \neq 0 \\
1 - e^{-y/\beta} & \text{if } \xi = 0
\end{cases}
$$

Where:
- $y = x - u$ is the value of the excess.
- $\xi$ is the shape parameter (tail index). A higher $\xi$ indicates a "fatter" tail.
- $\beta$ is the scale parameter.

## Why EVT Matters for Risk Management

Standard VaR models based on normal distributions often underestimate the risk of market crashes. EVT allows for:
- Accurate estimation of **Expected Shortfall (ES)** in the extreme tails.
- Robust stress testing of financial portfolios.
- Better modeling of catastrophic insurance claims.

## Python: Tail Fitting with GPD

```python
import numpy as np
from scipy.stats import genpareto

# Generate heavy-tailed data (Student's t-distribution)
data = np.random.standard_t(df=3, size=5000)

# Select a threshold (e.g., 95th percentile)
threshold = np.percentile(data, 95)
excesses = data[data > threshold] - threshold

# Fit GPD parameters
xi, loc, beta = genpareto.fit(excesses)

print(f"Shape parameter (tail index) xi: {xi:.4f}")
print(f"Scale parameter beta: {beta:.4f}")
```

## Tail Distribution Visualization

```chart
{
  "type": "line",
  "xAxis": "return",
  "data": [
    {"return": "0%", "norm": 1.0, "evt": 1.0},
    {"return": "1%", "norm": 0.5, "evt": 0.6},
    {"return": "2%", "norm": 0.1, "evt": 0.3},
    {"return": "3%", "norm": 0.01, "evt": 0.15},
    {"return": "4%", "norm": 0.001, "evt": 0.08},
    {"return": "5%", "norm": 0.0001, "evt": 0.05}
  ],
  "lines": [
    {"dataKey": "norm", "stroke": "#94a3b8", "name": "Normal (Underestimates)"},
    {"dataKey": "evt", "stroke": "#ef4444", "name": "EVT (Fat Tail)"}
  ]
}
```

## Method Comparison

| Method | What is analyzed? | Limiting Distribution |
| :--- | :--- | :--- |
| **Block Maxima** | Maxima of fixed periods | GEV (Gumbel, Frechet, Weibull) |
| **POT** | All values above $u$ | GPD (Generalized Pareto) |
| **Normal Dist** | Entire dataset | Gaussian (Fails in the tails) |
| **Hill Estimator** | Tail tail behavior | Power Law |


## Related Topics
- [[value-at-risk]]

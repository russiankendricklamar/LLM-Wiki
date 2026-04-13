---
title: "Copula Models"
category: "Pricing Models"
order: 6
lang: "en"
---
# Copula Models

A **Copula** (from Latin *copulare* — to join) is a mathematical function used to describe the dependence between random variables. In quantitative finance, copulas are used to construct multivariate distributions by separating the marginal behavior of individual assets from their dependence structure.

## Sklar's Theorem

The foundation of copula theory is Sklar's Theorem. It states that any multivariate joint distribution $F(x_1, \dots, x_n)$ can be expressed in terms of its marginal distribution functions $F_i(x_i)$ and a copula $C$:

$$
F(x_1, \dots, x_n) = C(F_1(x_1), \dots, F_n(x_n))
$$

If the marginals are continuous, the copula $C$ is unique.

## Why Use Copulas?

Unlike the standard Pearson correlation coefficient, copulas allow us to:
1.  **Model Non-linear Dependencies**: Capture relationships that correlation misses.
2.  **Account for Tail Dependence**: Assets may have low correlation during normal times but crash together during crises.
3.  **Combine Different Distributions**: You can join a Normal distribution with a Student's t-distribution seamlessly.

## Types of Copulas

1.  **Gaussian (Normal) Copula**: Does not have tail dependence. Became infamous after the 2008 crisis (Li's model for CDOs).
2.  **Student's t-Copula**: Exhibits symmetric tail dependence.
3.  **Archimedean Copulas**:
    - **Clayton**: Strong lower tail dependence (simultaneous crashes).
    - **Gumbel**: Strong upper tail dependence (simultaneous booms).

## Python: Clayton Copula Example

Visualizing how a Clayton copula models lower tail dependence:

```python
import numpy as np

def generate_clayton_samples(theta, n=1000):
    u = np.random.uniform(0, 1, n)
    t = np.random.uniform(0, 1, n)
    # Conditional distribution method
    v = (t**(-theta/(theta+1)) * (u**(-theta) - 1) + 1)**(-1/theta)
    return u, v

# Parameters
theta = 2.0 # Dependence parameter
u, v = generate_clayton_samples(theta)
```

## Tail Dependence Visualization

```chart
{
  "type": "scatter",
  "xAxis": "asset_a",
  "data": [
    {"asset_a": 0.05, "asset_b": 0.04},
    {"asset_a": 0.1, "asset_b": 0.12},
    {"asset_a": 0.2, "asset_b": 0.25},
    {"asset_a": 0.5, "asset_b": 0.45},
    {"asset_a": 0.8, "asset_b": 0.6},
    {"asset_a": 0.9, "asset_b": 0.85},
    {"asset_a": 0.95, "asset_b": 0.98}
  ],
  "lines": [
    {"dataKey": "asset_b", "stroke": "#10b981", "name": "Dependence (Clayton-like)"}
  ]
}
```

## Comparison Table

| Copula | Tail Dependence | Financial Use Case |
| :--- | :---: | :--- |
| **Gaussian** | None | Simple pricing (risky in crises) |
| **t-Copula** | Both Tails | Robust risk management |
| **Clayton** | Lower Tail | Modeling simultaneous market crashes |
| **Gumbel** | Upper Tail | Modeling simultaneous market rallies |


## Related Topics
- [[value-at-risk]]
- [[xva]]

---
title: "TS vs CS Factor Analysis"
category: "Algorithms and ML"
order: 145
lang: "en"
slug: "ts-cs-factor-analysis"
---
# TS vs CS Factor Analysis

In empirical asset pricing, there are two primary ways to estimate factor risk premia and loadings: **Time-Series (TS) Regression** and **Cross-Sectional (CS) Regression**.

## Time-Series (TS) Regression

In the TS approach (e.g., Black-Jensen-Scholes), we regress the excess returns of an asset $i$ on the returns of a known factor $F$ over time:

$$
R_{i,t} - R_{f,t} = \alpha_i + \beta_i (R_{m,t} - R_{f,t}) + \epsilon_{i,t}
$$

- **Goal**: Estimate the loading ($\beta_i$) of asset $i$ on factor $F$.
- **Interpretation**: $\alpha_i$ represents the mispricing relative to the factor model.

## Cross-Sectional (CS) Regression

In the CS approach (e.g., Fama-MacBeth), we regress the returns of all assets on their estimated loadings at each time step $t$:

$$
R_{i,t} = \gamma_{0,t} + \gamma_{1,t} \hat{\beta}_i + \eta_{i,t}
$$

- **Goal**: Estimate the risk premium ($\gamma_1$) associated with a factor.
- **Fama-MacBeth Procedure**: 
    1. Estimate $\beta_i$ via TS regression.
    2. Run CS regressions at each $t$ to get a time series of $\gamma_t$.
    3. Take the average of $\gamma_t$ to determine the average risk premium.

## Key Differences

| Feature | Time-Series (TS) | Cross-Sectional (CS) |
| :--- | :--- | :--- |
| **Focus** | Asset-specific risk | Factor risk premium |
| **Inputs** | Factor returns | Factor loadings (betas) |
| **Outputs** | Betas and Alphas | Risk premia ($\lambda$) |

## Python: Fama-MacBeth using Statsmodels

```python
import pandas as pd
import statsmodels.api as sm
from linearmodels.asset_pricing import LinearFactorModel

# factor_returns: (T x K), asset_returns: (T x N)
# Step 1 & 2 combined using linearmodels
mod = LinearFactorModel(portfolios=asset_returns, factors=factor_returns)
res = mod.fit()

print(res.summary)
# Risk premia (lambda) estimates
print(res.risk_premia)
```

## Validation

Reliable factor analysis must account for the "Look-ahead bias" and the "Multiple Testing Problem". Practitioners use [[probability-of-backtest-overfitting]] techniques to ensure that discovered factors are not merely products of data mining.

---
## Related Topics
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]

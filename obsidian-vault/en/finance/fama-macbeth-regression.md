---
title: "Fama-MacBeth Regression"
category: "Algorithms and ML"
order: 162
lang: "en"
slug: "fama-macbeth-regression"
---
# Fama-MacBeth Regression

The **Fama-MacBeth regression** is a two-step procedure used to estimate risk premia in asset pricing. It is particularly effective for dealing with cross-sectional correlations in panel data.

## The Two-Step Procedure

### Step 1: Time-Series Regressions
For each asset $i$, regress its excess returns $R_{i,t}$ on one or more factor returns $F_t$ to estimate the factor loadings (betas):

$$
R_{i,t} = \alpha_i + \beta_{i,F} F_t + \epsilon_{i,t} \quad \text{for } t=1, \dots, T
$$

### Step 2: Cross-Sectional Regressions
At each time step $t$, regress the cross-section of asset returns on the estimated betas from Step 1 to estimate the risk premium $\lambda_t$:

$$
R_{i,t} = \gamma_{0,t} + \gamma_{1,t} \hat{\beta}_{i,F} + \eta_{i,t} \quad \text{for } i=1, \dots, N
$$

The final risk premium estimate is the average of the time-series of $\hat{\gamma}_{1,t}$:

$$
\hat{\lambda} = \frac{1}{T} \sum_{t=1}^T \hat{\gamma}_{1,t}
$$

## Advantages
- Handles large cross-sections easily.
- Provides standard errors that account for cross-sectional correlation in residuals.

## Python Implementation

Using `statsmodels` for the cross-sectional regressions:

```python
import pandas as pd
import statsmodels.api as sm

def fama_macbeth(returns, factors):
    # returns: DataFrame (T x N), factors: DataFrame (T x K)
    # Step 1: Time-series regressions to get betas
    betas = []
    for col in returns.columns:
        model = sm.OLS(returns[col], sm.add_constant(factors)).fit()
        betas.append(model.params[1:])
    betas = pd.DataFrame(betas, index=returns.columns)

    # Step 2: Cross-sectional regressions
    lambdas = []
    for t in returns.index:
        model = sm.OLS(returns.loc[t], sm.add_constant(betas)).fit()
        lambdas.append(model.params)
    
    return pd.DataFrame(lambdas).mean()
```

## Related Topics
- [[ts-cs-factor-analysis]]
- [[portfolio-optimization-ml]]
- [[mcmc]]
- [[black-scholes]]

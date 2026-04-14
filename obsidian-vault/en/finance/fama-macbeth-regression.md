---
title: "Fama-MacBeth Regression"
category: "Algorithms and ML"
order: 162
lang: "en"
slug: "fama-macbeth-regression"
---
# Fama-MacBeth Regression

The **Fama-MacBeth regression** is a two-step procedure introduced by Eugene Fama and James MacBeth in their 1973 paper on the CAPM. It is used to estimate risk premia in cross-sectional asset pricing and is particularly effective for handling the cross-sectional correlation of residuals that makes standard pooled OLS standard errors unreliable in panel data settings.

## Background

Panel return data has a double-correlation problem: assets exhibit cross-sectional correlation at any given time (common factor exposures), and individual asset residuals are autocorrelated over time. Fama-MacBeth addresses the cross-sectional dimension by running a separate regression at every time period, then treating the time series of coefficient estimates as the sample over which standard errors are computed. This bypasses the need to model or estimate the full cross-sectional residual covariance matrix.

## The Two-Step Procedure

### Step 1: Time-Series Regressions (Factor Loadings)

For each asset $i$, regress its excess returns $R_{i,t}$ on factor returns $F_t$ over the full sample to estimate factor loadings (betas):

$$
R_{i,t} = \alpha_i + \beta_{i,F} F_t + \epsilon_{i,t} \quad \text{for } t=1, \dots, T
$$

The estimated $\hat{\beta}_{i,F}$ are treated as known characteristics in Step 2.

### Step 2: Cross-Sectional Regressions (Risk Premia)

At each time step $t$, regress the cross-section of $N$ asset returns on the pre-estimated betas:

$$
R_{i,t} = \gamma_{0,t} + \gamma_{1,t} \hat{\beta}_{i,F} + \eta_{i,t} \quad \text{for } i=1, \dots, N
$$

Each $\hat{\gamma}_{1,t}$ is an estimate of the **risk premium** for the factor in period $t$.

### Final Estimate

The time-series average of the cross-sectional coefficients gives the risk premium:

$$
\hat{\lambda} = \frac{1}{T} \sum_{t=1}^T \hat{\gamma}_{1,t}
$$

The standard error, accounting for time-series autocorrelation in $\hat{\gamma}_{1,t}$, is:

$$
\text{SE}(\hat{\lambda}) = \frac{s(\hat{\gamma}_{1,t})}{\sqrt{T}}
$$

where $s(\hat{\gamma}_{1,t})$ is the sample standard deviation of the time series of cross-sectional slopes.

## Why Fama-MacBeth Standard Errors Work

At each $t$, the cross-sectional regression residuals $\hat{\eta}_{i,t}$ are correlated across assets (due to common factors). If we ran a single pooled regression, these cross-sectional correlations would make standard OLS standard errors inconsistent. By running $T$ separate regressions and averaging, we effectively take one observation per time period, and the standard error of the mean is valid as long as the $\hat{\gamma}_{1,t}$ are not too autocorrelated (or we use Newey-West correction).

## Errors-in-Variables Problem

Because $\hat{\beta}_{i,F}$ from Step 1 are estimated with error, the Step 2 regressions face an **errors-in-variables (EIV)** bias that attenuates the risk premium estimate toward zero. Corrections include:
- **Shanken correction**: Multiplies the variance of $\hat{\lambda}$ by $(1 + \hat{\lambda}^2 / \hat{\sigma}_F^2)$ to account for EIV.
- **Portfolios instead of individual assets**: Group assets into $P$ beta-sorted portfolios to reduce beta measurement error.

## Multifactor Extension

For $K$ factors $F_t = (F_{1,t}, \dots, F_{K,t})$, the two steps generalize directly. Step 1 yields a $K$-vector of betas per asset, and Step 2 produces $K$ risk premia:

$$
R_{i,t} = \gamma_{0,t} + \sum_{k=1}^K \gamma_{k,t} \hat{\beta}_{i,k} + \eta_{i,t}
$$

The test of the CAPM/APT is $\gamma_{0,t} \approx 0$ and $\hat{\lambda}_k$ significantly different from zero for priced factors.

## Python Implementation

```python
import numpy as np
import pandas as pd
import statsmodels.api as sm
from scipy import stats

def fama_macbeth(returns: pd.DataFrame, factors: pd.DataFrame):
    """
    Fama-MacBeth two-step procedure.

    Args:
        returns:  DataFrame of shape (T, N) — excess returns for N assets
        factors:  DataFrame of shape (T, K) — factor returns

    Returns:
        dict with risk premia (lambda), t-stats, p-values
    """
    T, N = returns.shape

    # Step 1: Time-series regressions to get betas
    betas = []
    for asset in returns.columns:
        y = returns[asset].values
        X = sm.add_constant(factors.values)
        ols = sm.OLS(y, X).fit()
        betas.append(ols.params[1:])  # drop intercept
    betas_df = pd.DataFrame(betas, index=returns.columns, columns=factors.columns)

    # Step 2: Cross-sectional regressions at each t
    gammas = []
    for t in returns.index:
        y_cs = returns.loc[t].values
        X_cs = sm.add_constant(betas_df.values)
        ols_cs = sm.OLS(y_cs, X_cs).fit()
        gammas.append(ols_cs.params)
    gammas_df = pd.DataFrame(gammas, columns=["intercept"] + list(factors.columns))

    # Risk premia: time-series mean and Fama-MacBeth t-stats
    lambda_hat = gammas_df.mean()
    se = gammas_df.std() / np.sqrt(T)
    t_stats = lambda_hat / se
    p_values = 2 * (1 - stats.t.cdf(np.abs(t_stats), df=T - 1))

    return pd.DataFrame({
        "lambda": lambda_hat,
        "se": se,
        "t_stat": t_stats,
        "p_value": p_values,
    })

# --- Simulate example data ---
np.random.seed(0)
T, N, K = 120, 50, 3
true_betas = np.random.randn(N, K)
factor_returns = pd.DataFrame(
    np.random.randn(T, K) * 0.03, columns=["MKT", "SMB", "HML"]
)
true_premia = np.array([0.005, 0.002, 0.001])
noise = np.random.randn(T, N) * 0.02
returns_df = pd.DataFrame(
    factor_returns.values @ true_betas.T + noise,
    columns=[f"Asset_{i}" for i in range(N)],
)
result = fama_macbeth(returns_df, factor_returns)
print(result.round(4))
```

## Risk Premia Simulation Chart

```chart
{
  "type": "line",
  "xAxis": "period",
  "data": [
    {"period": "1", "mkt_premium": 0.006, "smb_premium": 0.002},
    {"period": "2", "mkt_premium": 0.004, "smb_premium": 0.003},
    {"period": "3", "mkt_premium": 0.008, "smb_premium": 0.001},
    {"period": "4", "mkt_premium": 0.003, "smb_premium": 0.004},
    {"period": "5", "mkt_premium": 0.007, "smb_premium": 0.002},
    {"period": "6", "mkt_premium": 0.005, "smb_premium": 0.003},
    {"period": "7", "mkt_premium": 0.006, "smb_premium": 0.001},
    {"period": "8", "mkt_premium": 0.004, "smb_premium": 0.002}
  ],
  "lines": [
    {"dataKey": "mkt_premium", "stroke": "#3b82f6", "name": "Market Risk Premium γ(t)"},
    {"dataKey": "smb_premium", "stroke": "#10b981", "name": "SMB Risk Premium γ(t)"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description |
|--------|------|-------------|
| $\beta_{i,F}$ | Factor loading | Sensitivity of asset $i$ to factor $F$ |
| $\lambda$ | Risk premium | Expected return per unit of factor exposure |
| $\gamma_{0,t}$ | Zero-beta return | Cross-sectional intercept, should ≈ 0 under CAPM |
| $\text{SE}(\hat{\lambda})$ | Fama-MacBeth SE | Standard deviation of $\hat{\gamma}_t$ divided by $\sqrt{T}$ |

## Limitations and Extensions

- **Non-stationarity**: If factor premia change over time (e.g., regime-dependent), the simple average $\hat{\lambda}$ may be misleading; conditional models or rolling windows are preferred.
- **Generated regressors**: Betas from Step 1 are estimated, not observed — the Shanken (1992) correction adjusts for this EIV bias.
- **Small cross-section**: With few assets, the Step 2 regressions are poorly determined; portfolio sorting mitigates this.
- **Newey-West adjustment**: If the $\hat{\gamma}_{1,t}$ series is autocorrelated (predictable risk premia), the standard SE formula understates uncertainty; Newey-West adjusted SE is preferred.
- **Characteristic-based models**: Modern extensions (e.g., Fama-French 5-factor) include firm characteristics directly as regressors alongside betas.

## Practical Applications

1. **Pricing factor discovery**: Test whether a proposed factor (e.g., profitability, investment) commands a statistically significant risk premium across the cross-section.
2. **Alpha attribution**: Decompose portfolio returns into factor exposures and residual alpha using the Fama-MacBeth framework.
3. **Smart beta validation**: Verify that a factor-tilted strategy earns its premium after controlling for correlated factors.
4. **Academic asset pricing**: The standard methodology for empirical tests of the CAPM, APT, and multifactor models.

## Related Topics
- [[ts-cs-factor-analysis]]
- [[portfolio-optimization-ml]]
- [[mcmc]]
- [[black-scholes]]
- [[hierarchical-risk-parity]]

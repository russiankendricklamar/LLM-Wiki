---
title: "TS vs CS Factor Analysis"
category: "Algorithms and ML"
order: 145
lang: "en"
slug: "ts-cs-factor-analysis"
---
# TS vs CS Factor Analysis

In empirical asset pricing, estimating factor risk premia and asset loadings requires choosing between two complementary regression frameworks: **Time-Series (TS) regression** and **Cross-Sectional (CS) regression**. These approaches answer different questions — TS identifies how each asset responds to a factor; CS identifies how much the market prices that factor exposure. Both are required for a complete factor model analysis.

## Background

Black, Jensen, and Scholes (1972) pioneered TS regression to test CAPM by running market-model regressions for each asset over time. Fama and MacBeth (1973) introduced the CS two-pass approach to estimate risk premia, which became the standard methodology for multi-factor asset pricing tests. The distinction matters enormously in practice: TS regressions directly test pricing errors (alphas), while CS regressions estimate the market price of factor risk (lambdas).

## Mathematical Framework

### Time-Series (TS) Regression

For asset $i$ over $T$ time periods, regress excess returns on $K$ factor returns:
$$
R_{i,t} - R_{f,t} = \alpha_i + \sum_{k=1}^K \beta_{ik} F_{k,t} + \epsilon_{i,t}, \quad t = 1,\dots,T
$$

- $\alpha_i$: **Jensen's alpha** — average return not explained by factor exposures (pricing error)
- $\beta_{ik}$: factor loading (sensitivity) of asset $i$ to factor $k$
- $F_{k,t}$: factor return at time $t$ (excess return of a factor portfolio)

In matrix form for $N$ assets:
$$
\mathbf{R} = \boldsymbol{\alpha}\mathbf{1}^T + \mathbf{B}\mathbf{F} + \mathbf{E}
$$

The GLS estimator accounting for cross-sectional residual covariance $\boldsymbol{\Sigma}_\epsilon$:
$$
\hat{\mathbf{b}}_i = (\mathbf{F}^T\mathbf{F})^{-1}\mathbf{F}^T \mathbf{r}_i
$$

**Testing**: The joint null $H_0: \boldsymbol{\alpha} = \mathbf{0}$ (all alphas are zero, factor model is correctly specified) is tested via the Gibbons-Ross-Shanken (GRS 1989) statistic:
$$
GRS = \frac{T-N-K}{N}\left(1 + \hat{\boldsymbol{\mu}}_F^T \hat{\boldsymbol{\Sigma}}_F^{-1} \hat{\boldsymbol{\mu}}_F\right)^{-1} \hat{\boldsymbol{\alpha}}^T \hat{\boldsymbol{\Sigma}}_\epsilon^{-1} \hat{\boldsymbol{\alpha}} \sim F_{N, T-N-K}
$$

### Cross-Sectional (CS) Regression

Given estimated betas $\hat{\boldsymbol{\beta}}_i$, run a cross-sectional regression at each time $t$:
$$
R_{i,t} = \gamma_{0,t} + \sum_{k=1}^K \gamma_{k,t} \hat{\beta}_{ik} + \eta_{i,t}, \quad i = 1,\dots,N
$$

- $\gamma_{k,t}$: **risk premium** of factor $k$ at time $t$ (Fama-MacBeth lambda)

The time-series average gives the estimated risk premium:
$$
\hat{\gamma}_k = \frac{1}{T}\sum_{t=1}^T \hat{\gamma}_{k,t}
$$

Standard errors (Fama-MacBeth 1973):
$$
SE(\hat{\gamma}_k) = \frac{s(\hat{\gamma}_{k,t})}{\sqrt{T}}
$$

where $s(\hat{\gamma}_{k,t})$ is the time-series standard deviation of the period-by-period estimates. These SEs automatically account for heteroskedasticity but not serial correlation; Newey-West correction is required for persistent risk premia.

### Errors-in-Variables (EIV) Problem

Because $\hat{\boldsymbol{\beta}}_i$ are estimated rather than true betas, the second-pass CS regression suffers from **errors-in-variables (EIV) bias** — estimated coefficients are attenuated toward zero. The Shanken (1992) correction inflates the standard errors:
$$
SE^{Shanken}(\hat{\gamma}_k) = SE^{FM}(\hat{\gamma}_k) \times \sqrt{1 + \hat{\boldsymbol{\gamma}}^T \hat{\boldsymbol{\Sigma}}_F^{-1} \hat{\boldsymbol{\gamma}}}
$$

For portfolios (sorted by characteristic), beta estimation error is diversified away, reducing EIV bias — a key reason Fama-French use 25 size-BM portfolios rather than individual stocks in their tests.

### SDF (Stochastic Discount Factor) Formulation

Both TS and CS regression are special cases of the **SDF framework**. The risk premium of factor $k$ is:
$$
\lambda_k = \text{Cov}(R_{i,t}, F_{k,t}) \cdot \text{price of risk}_k
$$

The linear SDF $m_t = 1 - \mathbf{b}^T(\mathbf{F}_t - \boldsymbol{\mu}_F)$ prices assets if $\mathbb{E}[m_t R_{i,t}] = 0$. The CS regression risk premia connect to the SDF parameters via $\boldsymbol{\gamma} = \boldsymbol{\Sigma}_F \mathbf{b}$.

### Factor Spanning Tests

To test whether a new factor $G_t$ adds explanatory power beyond existing factors $\mathbf{F}_t$:
$$
G_t = \alpha_G + \boldsymbol{\delta}^T \mathbf{F}_t + \varepsilon_t
$$

$H_0: \alpha_G = 0$ — the new factor is spanned by existing factors and offers no additional risk premium. A significant $\alpha_G$ suggests genuine incremental pricing power.

## Key Properties

| Feature | Time-Series (TS) | Cross-Sectional (CS) |
| :--- | :--- | :--- |
| **Primary output** | Alphas ($\alpha_i$), Betas ($\beta_{ik}$) | Risk premia ($\gamma_k$) |
| **Identifies** | Pricing errors, factor exposures | Market price of factor risk |
| **Data requirement** | Factor return series needed | Beta estimates needed (from TS) |
| **Test statistic** | GRS F-test on joint alphas | t-test on time-averaged $\hat{\gamma}_k$ |
| **Assumption** | Factors are traded portfolios | Betas are measured without error |
| **EIV bias** | None | Present; Shanken correction needed |

## Python Implementation

```python
import numpy as np
import pandas as pd
import statsmodels.api as sm
from scipy import stats

def time_series_regression(
    asset_returns: np.ndarray,
    factor_returns: np.ndarray
) -> dict:
    """
    First-pass TS regression: estimate alpha and betas for each asset.

    Args:
        asset_returns: (T x N) array of excess returns
        factor_returns: (T x K) array of factor excess returns

    Returns:
        dict with 'alphas' (N,), 'betas' (N x K), 'residuals' (T x N),
               'r_squared' (N,), 'alpha_tstat' (N,)
    """
    T, N = asset_returns.shape
    K = factor_returns.shape[1]
    X = sm.add_constant(factor_returns)

    alphas    = np.zeros(N)
    betas     = np.zeros((N, K))
    residuals = np.zeros((T, N))
    r_squared = np.zeros(N)
    alpha_tstats = np.zeros(N)

    for i in range(N):
        result = sm.OLS(asset_returns[:, i], X).fit()
        alphas[i]        = result.params[0]
        betas[i, :]      = result.params[1:]
        residuals[:, i]  = result.resid
        r_squared[i]     = result.rsquared
        alpha_tstats[i]  = result.tvalues[0]

    return {
        "alphas": alphas,
        "betas": betas,
        "residuals": residuals,
        "r_squared": r_squared,
        "alpha_tstats": alpha_tstats
    }


def fama_macbeth_regression(
    asset_returns: np.ndarray,
    betas: np.ndarray,
    newey_west_lags: int = 4
) -> dict:
    """
    Second-pass Fama-MacBeth CS regression.

    Args:
        asset_returns: (T x N) excess returns
        betas: (N x K) estimated factor loadings
        newey_west_lags: lags for Newey-West HAC correction

    Returns:
        dict with 'risk_premia' (K+1,), 'se_fm', 'se_nw', 't_stats'
    """
    T, N = asset_returns.shape
    X = sm.add_constant(betas)
    K_plus1 = X.shape[1]
    gammas = np.zeros((T, K_plus1))

    for t in range(T):
        result = sm.OLS(asset_returns[t, :], X).fit()
        gammas[t, :] = result.params

    risk_premia = gammas.mean(axis=0)

    # Fama-MacBeth SEs
    se_fm = gammas.std(axis=0, ddof=1) / np.sqrt(T)

    # Newey-West HAC SEs for time-series of gamma_t
    se_nw = np.zeros(K_plus1)
    for k in range(K_plus1):
        g = gammas[:, k]
        model = sm.OLS(g, np.ones(T)).fit(
            cov_type="HAC", cov_kwds={"maxlags": newey_west_lags}
        )
        se_nw[k] = float(model.bse[0])

    t_stats = risk_premia / np.maximum(se_nw, 1e-12)

    return {
        "risk_premia": risk_premia,
        "se_fm": se_fm,
        "se_nw": se_nw,
        "t_stats": t_stats,
        "gammas_timeseries": gammas
    }


def grs_test(
    alphas: np.ndarray,
    residuals: np.ndarray,
    factor_returns: np.ndarray
) -> dict:
    """
    Gibbons-Ross-Shanken (1989) test of H0: all alphas = 0.
    """
    T, N = residuals.shape
    K = factor_returns.shape[1]

    Sigma_eps = np.cov(residuals.T)   # N x N residual covariance
    mu_F = factor_returns.mean(axis=0)
    Sigma_F = np.cov(factor_returns.T)

    Sigma_inv = np.linalg.pinv(Sigma_eps)
    quad_form = float(alphas @ Sigma_inv @ alphas)
    sharpe_adj = float(1 + mu_F @ np.linalg.solve(Sigma_F, mu_F))

    grs_stat = ((T - N - K) / N) * quad_form / sharpe_adj
    p_value = 1 - stats.f.cdf(grs_stat, dfn=N, dfd=T - N - K)

    return {
        "grs_statistic": grs_stat,
        "p_value": p_value,
        "reject_H0": p_value < 0.05,
        "avg_alpha": float(np.abs(alphas).mean())
    }


# ---- Example ----
np.random.seed(42)
T, N, K = 500, 30, 3   # 500 months, 30 portfolios, 3 factors

# Simulate factors (market, SMB, HML)
factor_returns = np.random.multivariate_normal(
    mean=[0.005, 0.002, 0.003],
    cov=np.diag([0.0004, 0.0002, 0.0002]),
    size=T
)

# Simulate asset returns with known betas
true_betas = np.random.uniform(0.3, 1.5, (N, K))
true_alphas = np.zeros(N)   # null: no mispricing
noise = np.random.multivariate_normal(np.zeros(N), np.eye(N)*0.0001, T)
asset_returns = true_alphas + factor_returns @ true_betas.T + noise

# First pass
ts_result = time_series_regression(asset_returns, factor_returns)
print("TS Regression:")
print(f"  Mean |alpha|: {np.abs(ts_result['alphas']).mean():.6f}")
print(f"  Mean R^2:     {ts_result['r_squared'].mean():.4f}")

# GRS test
grs = grs_test(ts_result["alphas"], ts_result["residuals"], factor_returns)
print(f"  GRS stat: {grs['grs_statistic']:.3f}, p-value: {grs['p_value']:.4f}, "
      f"Reject H0: {grs['reject_H0']}")

# Second pass
fm_result = fama_macbeth_regression(asset_returns, ts_result["betas"])
print("\nFama-MacBeth Risk Premia (annualized):")
labels = ["Intercept", "Market", "SMB", "HML"]
for i, lbl in enumerate(labels):
    rp = fm_result["risk_premia"][i] * 12
    t  = fm_result["t_stats"][i]
    print(f"  {lbl:<12}: {rp:+.4f} (t={t:.2f})")
```

## Risk Premia Estimates by Factor

```chart
{
  "type": "bar",
  "xAxis": "factor",
  "data": [
    {"factor": "Market (MKT)", "premium": 0.062, "t_stat": 2.8},
    {"factor": "Size (SMB)",   "premium": 0.028, "t_stat": 1.9},
    {"factor": "Value (HML)",  "premium": 0.035, "t_stat": 2.3},
    {"factor": "Momentum",     "premium": 0.071, "t_stat": 3.1},
    {"factor": "Quality",      "premium": 0.019, "t_stat": 1.4}
  ],
  "bars": [
    {"dataKey": "premium", "fill": "#3b82f6", "name": "Annual Risk Premium"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Range |
| :--- | :--- | :--- | :--- |
| $\alpha_i$ | Jensen's alpha | Unexplained average excess return | $-$0.5% – $+$0.5%/month |
| $\beta_{ik}$ | Factor loading | Sensitivity to factor $k$ | 0.0 – 2.0 |
| $\gamma_k$ | Risk premium | Market price of factor $k$ risk | 0 – 1%/month |
| $GRS$ | GRS statistic | Joint test of all alphas = 0 | F-distributed |
| $SE^{NW}$ | Newey-West SE | HAC-corrected SE for serial correlation | — |
| $T$ | Time periods | Number of observations for FM averaging | 60 – 600 months |
| $N$ | Assets/portfolios | Cross-sectional dimension | 10 – 500 |

## Limitations and Extensions

- **Estimation risk in betas**: Using individual stocks rather than portfolios amplifies EIV bias; the instrumented factor model (IFM) and IV estimators reduce this.
- **Time-varying betas**: Static betas misspecify the model when exposures change; rolling regressions, DCC-GARCH, or state-space models capture beta dynamics.
- **Weak identification**: If factor return dispersion is low, cross-sectional variation in betas is small, making risk premia imprecisely estimated.
- **Characteristic vs. covariance**: Daniel and Titman (1997) show that characteristics (book-to-market ratio itself) predict returns better than covariance-based betas — the "characteristics vs. covariances" debate.
- **Zoo of factors**: Harvey, Liu, and Zhu (2016) document 316+ published factors; most are likely false discoveries under multiple testing. Bayesian factor selection and penalized regression (Lasso) mitigate the problem.

## Practical Applications

1. **Factor model validation**: GRS test determines whether a candidate factor model adequately prices a universe of test assets, guiding model selection.
2. **Risk attribution**: TS regression decomposes portfolio returns into systematic factor contributions and idiosyncratic alpha, enabling performance attribution.
3. **Long-short factor portfolios**: Risk premia from FM regressions determine the theoretical alpha of factor-sorted portfolios, setting hurdle rates for quantitative strategies.
4. **Smart beta product design**: Factor risk premia estimates from CS regressions validate the theoretical basis for smart beta ETF construction.
5. **Regulatory stress testing**: Factor loadings from TS regression feed stress test scenarios where factor shocks are applied to estimate portfolio losses under adverse conditions.

## Related Topics
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]
- [[fama-macbeth-regression]]

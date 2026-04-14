---
title: "ARCH Models"
category: "Stochastic Processes"
order: 168
lang: "en"
slug: "arch-models"
---
# ARCH Models

The **Autoregressive Conditional Heteroskedasticity (ARCH)** model, introduced by Robert Engle in 1982 (Nobel Prize 2003), revolutionized financial econometrics by providing a rigorous framework for modeling time-varying volatility — one of the most robust stylized facts of financial returns.

## Overview & Background

Before Engle's contribution, econometric models assumed homoskedastic errors — constant variance over time. Yet financial time series exhibit unmistakable **volatility clustering**: large price moves tend to cluster together, followed by periods of calm. This feature was noted anecdotally long before ARCH but lacked a tractable statistical model.

Engle (1982) introduced ARCH in the context of modeling UK inflation. His key insight was that while the unconditional distribution of returns might be stable, the **conditional** variance could evolve systematically as a function of past squared residuals. This produced the heavy-tailed, leptokurtic marginal distributions observed empirically without requiring non-Gaussian innovations.

The ARCH framework spawned an entire family of models: GARCH (Bollerslev, 1986), EGARCH (Nelson, 1991), GJR-GARCH (Glosten et al., 1993), FIGARCH, CGARCH, and many others. These models have become standard tools in option pricing, risk management, and portfolio construction.

## Mathematical Framework

An $ARCH(q)$ model decomposes returns into a mean and a heteroskedastic innovation:

$$
r_t = \mu_t + \epsilon_t, \quad \epsilon_t = \sigma_t z_t, \quad z_t \overset{iid}{\sim} \mathcal{N}(0, 1)
$$

The conditional variance $\sigma_t^2 = \text{Var}(\epsilon_t | \mathcal{F}_{t-1})$ follows:

$$
\sigma_t^2 = \alpha_0 + \sum_{i=1}^q \alpha_i \epsilon_{t-i}^2
$$

**Parameter constraints** for a valid conditional variance:
- $\alpha_0 > 0$ (ensures positive baseline variance)
- $\alpha_i \geq 0$ for all $i = 1, \dots, q$ (ensures non-negativity)
- $\sum_{i=1}^q \alpha_i < 1$ (ensures covariance stationarity)

The **unconditional variance** when $\sum_i \alpha_i < 1$:

$$
\sigma^2 = \mathbb{E}[\sigma_t^2] = \frac{\alpha_0}{1 - \sum_{i=1}^q \alpha_i}
$$

**Kurtosis**: Even with $z_t \sim \mathcal{N}(0,1)$, an ARCH process generates excess kurtosis in the marginal distribution. For $ARCH(1)$:

$$
\text{Kurt}(\epsilon_t) = 3 \cdot \frac{1 - \alpha_1^2}{1 - 3\alpha_1^2} \quad \text{(requires } 3\alpha_1^2 < 1 \text{ for finite kurtosis)}
$$

**ARCH-LM Test** (Engle, 1982): To test for the presence of ARCH effects in residuals $\hat{\epsilon}_t$, regress $\hat{\epsilon}_t^2$ on its own lags and test for joint significance:

$$
\hat{\epsilon}_t^2 = a_0 + \sum_{i=1}^q a_i \hat{\epsilon}_{t-i}^2 + u_t
$$

The test statistic $LM = T \cdot R^2 \sim \chi^2(q)$ under the null of no ARCH effects.

## Key Properties

- **Volatility clustering**: $\sigma_t^2$ is high when $\epsilon_{t-1}^2$ was large — large shocks amplify subsequent variance.
- **Heavy tails**: The marginal distribution of $r_t$ has excess kurtosis even when $z_t$ is Gaussian.
- **Mean reversion**: Since $\sum_i \alpha_i < 1$, variance reverts to the unconditional level $\sigma^2$.
- **Strict stationarity**: Requires $\mathbb{E}[\ln(\alpha_1 z_t^2)] < 0$ for $ARCH(1)$.
- **No leverage effect**: ARCH treats positive and negative shocks symmetrically ($\alpha_i \epsilon_{t-i}^2$ is symmetric in $\epsilon_{t-i}$). EGARCH and GJR-GARCH capture asymmetry.

## Python Implementation

```python
import numpy as np
import pandas as pd
from arch import arch_model
from scipy import stats

def fit_arch_model(returns: pd.Series, q: int = 1) -> dict:
    """
    Fit an ARCH(q) model to return series.
    Returns parameters, AIC, and conditional volatility series.
    """
    model = arch_model(returns * 100, vol='ARCH', p=q, mean='Constant', dist='Normal')
    result = model.fit(disp='off')
    return {
        'params': result.params,
        'aic': result.aic,
        'bic': result.bic,
        'conditional_vol': result.conditional_volatility / 100,
        'summary': result.summary()
    }

def arch_lm_test(residuals: np.ndarray, lags: int = 5) -> dict:
    """
    Engle's ARCH-LM test for conditional heteroskedasticity.
    H0: No ARCH effects.
    """
    n = len(residuals)
    resid_sq = residuals ** 2

    # Regress squared residuals on their lags
    X = np.column_stack([resid_sq[i:n-lags+i] for i in range(lags)])
    y = resid_sq[lags:]

    # OLS
    XtX_inv = np.linalg.pinv(X.T @ X)
    beta = XtX_inv @ X.T @ y
    y_hat = X @ beta
    ss_res = np.sum((y - y_hat) ** 2)
    ss_tot = np.sum((y - y.mean()) ** 2)
    r_squared = 1 - ss_res / ss_tot

    lm_stat = n * r_squared
    p_value = 1 - stats.chi2.cdf(lm_stat, df=lags)
    return {'lm_stat': lm_stat, 'p_value': p_value, 'lags': lags}

def simulate_arch(alpha0: float, alphas: list, n: int, seed: int = 42) -> dict:
    """
    Simulate an ARCH(q) process.

    Returns both the return series and the conditional volatility path.
    """
    np.random.seed(seed)
    q = len(alphas)
    eps = np.zeros(n)
    sigma2 = np.zeros(n)

    # Initialize
    sigma2[:q] = alpha0 / (1 - sum(alphas))
    eps[:q] = np.random.normal(0, np.sqrt(sigma2[:q]))

    for t in range(q, n):
        sigma2[t] = alpha0 + sum(a * eps[t-i-1]**2 for i, a in enumerate(alphas))
        eps[t] = np.sqrt(sigma2[t]) * np.random.normal()

    return {'returns': eps, 'sigma': np.sqrt(sigma2)}

# Example: ARCH(1) with strong clustering
result = simulate_arch(alpha0=0.0001, alphas=[0.8], n=1000)
returns_series = pd.Series(result['returns'])
arch_test = arch_lm_test(returns_series.values, lags=5)
```

## Conditional Volatility: ARCH(1) Simulation

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": "0", "vol": 0.012},
    {"t": "50", "vol": 0.018},
    {"t": "100", "vol": 0.035},
    {"t": "150", "vol": 0.022},
    {"t": "200", "vol": 0.015},
    {"t": "250", "vol": 0.041},
    {"t": "300", "vol": 0.028},
    {"t": "350", "vol": 0.014},
    {"t": "400", "vol": 0.011}
  ],
  "lines": [
    {"dataKey": "vol", "stroke": "#ef4444", "name": "Conditional Volatility σₜ"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---:|:---|:---|
| $\alpha_0$ | Baseline variance | Long-run variance component | > 0 |
| $\alpha_i$ | ARCH coefficients | Weight on past squared shocks | $[0, 1)$ |
| $q$ | ARCH order | Number of lagged squared residuals | 1 – 10 |
| $\sigma^2$ | Unconditional variance | $\alpha_0 / (1 - \sum \alpha_i)$ | > 0 |
| $z_t$ | Standardized innovation | Can be Normal, Student-t, GED | — |

## Limitations & Extensions

**Limitations:**
- **ARCH(q) requires large $q$**: Fitting long memory in volatility requires many lags, making the model heavily parameterized. GARCH(1,1) ([[garch-models]]) solves this with just two parameters.
- **No leverage effect**: Positive and negative shocks of equal magnitude produce the same volatility response. In equity markets, negative shocks increase volatility more ("leverage effect"). Use EGARCH or GJR-GARCH.
- **Non-negativity constraints**: With many lags, enforcing $\alpha_i \geq 0$ restricts the parameter space heavily.
- **Tail estimation**: The standardized innovation $z_t$ often has heavier tails than Gaussian even after ARCH filtering; using Student-t or GED innovations improves fit.

**Extensions:**
- **GARCH(p,q)** ([[garch-models]]): Adds lagged $\sigma_{t-j}^2$ terms, capturing volatility persistence parsimoniously.
- **EGARCH**: Allows asymmetric volatility response via $\ln \sigma_t^2$ specification.
- **GJR-GARCH**: Adds an indicator term $I(\epsilon_{t-1} < 0) \cdot \gamma \epsilon_{t-1}^2$ for the leverage effect.
- **FIGARCH**: Models long memory in volatility using fractional integration.

## Practical Applications

1. **Option Pricing**: ARCH-based volatility forecasts improve implied volatility surface fitting, particularly at short maturities where clustering dominates.
2. **VaR Calculation**: Dynamic VaR using ARCH conditional variance outperforms rolling historical volatility, especially during stress periods.
3. **Portfolio Optimization**: Time-varying covariance matrices from multivariate ARCH models improve mean-variance optimization.
4. **Risk Model Backtesting**: ARCH-LM tests are routinely applied to model residuals to verify that no predictable variance structure has been left in the residuals.
5. **Algorithmic Trading**: Volatility forecasts from ARCH models are used to dynamically scale position sizes and adjust stop-loss distances.

## Related Topics
- [[volatility-forecasting]]
- [[garch-models]]
- [[mcmc]]
- [[levy-processes]]
- [[arma-models]]

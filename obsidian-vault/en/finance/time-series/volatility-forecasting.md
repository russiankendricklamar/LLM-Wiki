---
title: "Volatility Forecasting (GARCH, HAR)"
category: "Stochastic Processes"
order: 61
lang: "en"
slug: "volatility-forecasting"
---
# Volatility Forecasting (GARCH, HAR)

**Volatility forecasting** predicts the future magnitude of price fluctuations — a fundamental input for options pricing, risk management, portfolio construction, and execution optimization. Unlike price direction, volatility exhibits **volatility clustering** (large moves follow large moves), **mean reversion**, and **long memory**, making it more predictable than returns. The two workhorses of volatility forecasting are the GARCH family (parametric, daily data) and the HAR model (non-parametric, high-frequency realized measures).

## Background

Engle (1982) introduced ARCH to model time-varying conditional variance in UK inflation, earning the 2003 Nobel Prize. Bollerslev (1986) generalized it to GARCH(1,1). The HAR model (Corsi 2009) exploited the long-memory properties of realized volatility by aggregating daily, weekly, and monthly realized variance components, inspired by the Heterogeneous Market Hypothesis (Müller et al. 1997) — different market participants operate on different time horizons.

## Mathematical Framework

### GARCH(1,1)

The **Generalized ARCH(1,1)** model specifies the conditional variance $\sigma_t^2$ as:
$$
r_t = \mu + \epsilon_t, \quad \epsilon_t = \sigma_t z_t, \quad z_t \sim \text{IID}(0,1)
$$
$$
\sigma_t^2 = \omega + \alpha \epsilon_{t-1}^2 + \beta \sigma_{t-1}^2
$$

**Stationarity**: $\alpha + \beta < 1$ required for covariance stationarity. The unconditional variance is $\bar{\sigma}^2 = \omega / (1 - \alpha - \beta)$.

**Persistence**: $\alpha + \beta$ measures how long a volatility shock lasts. For equity indices, typical values: $\alpha \approx 0.09$, $\beta \approx 0.90$, persistence $\approx 0.99$.

**Multi-step forecast**: For $h$-step ahead:
$$
\mathbb{E}_t[\sigma_{t+h}^2] = \bar{\sigma}^2 + (\alpha + \beta)^{h-1}(\sigma_{t+1}^2 - \bar{\sigma}^2)
$$

### GARCH Extensions

**GJR-GARCH** (Glosten-Jagannathan-Runkle 1993) captures the **leverage effect** — negative returns increase volatility more than positive returns of equal magnitude:
$$
\sigma_t^2 = \omega + (\alpha + \gamma \mathbf{1}_{\epsilon_{t-1}<0})\epsilon_{t-1}^2 + \beta\sigma_{t-1}^2
$$

**EGARCH** (Nelson 1991) ensures non-negativity without constraints and models asymmetry:
$$
\ln\sigma_t^2 = \omega + \beta\ln\sigma_{t-1}^2 + \alpha\left(\left|z_{t-1}\right| - \sqrt{2/\pi}\right) + \gamma z_{t-1}
$$

**Student-t GARCH**: Replacing the Gaussian innovation with $z_t \sim t_\nu / \sqrt{\nu/(\nu-2)}$ captures fat tails; degrees of freedom $\nu$ is estimated from data.

### HAR-RV Model

The **Heterogeneous Autoregressive Realized Volatility (HAR-RV)** model:
$$
RV_{t+1} = \beta_0 + \beta_d RV_t + \beta_w \overline{RV}_{t,5} + \beta_m \overline{RV}_{t,22} + \epsilon_{t+1}
$$

where $\overline{RV}_{t,h} = \frac{1}{h}\sum_{k=0}^{h-1} RV_{t-k}$ is the average realized variance over the past $h$ days (5 = weekly, 22 = monthly).

HAR is estimated by OLS; despite its simplicity, it outperforms GARCH in out-of-sample forecasting for most equity and FX markets. The three-component structure captures the multi-scale nature of volatility: high-frequency traders (daily), institutional rebalancing (weekly), and macro cycles (monthly).

**HAR-CJ** extension separates the continuous and jump components of realized variance:
$$
RV_t = C_t + J_t, \quad J_t = \max(RV_t - BPV_t, 0)
$$
where $BPV_t = \frac{\pi}{2}\sum_{j=2}^n |r_{t,j}||r_{t,j-1}|$ is **bipower variation** (robust to jumps).

### Realized GARCH

The **Realized GARCH** (Hansen, Huang, Shek 2012) links the GARCH equation to realized measures:
$$
\sigma_t^2 = \omega + \alpha x_{t-1} + \beta \sigma_{t-1}^2
$$
$$
\ln x_t = \xi + \phi \ln\sigma_t^2 + \tau(z_t) + u_t
$$

where $x_t$ is the realized measure (RK or RV), $\tau(z_t)$ captures leverage, and $u_t$ is the measurement equation noise. This jointly models daily returns and intraday realized measures.

### QLIKE Loss Function

For evaluating volatility forecasts, the **QLIKE** loss function is preferred over MSE because it is robust to outliers and consistent with the likelihood of GARCH models:
$$
QLIKE(\hat{\sigma}^2, \sigma^2) = \frac{\sigma^2}{\hat{\sigma}^2} - \ln\frac{\sigma^2}{\hat{\sigma}^2} - 1
$$

The Mincer-Zarnowitz regression tests forecast unbiasedness:
$$
RV_{t+1} = a + b\hat{\sigma}_{t+1}^2 + \eta_{t+1}, \quad H_0: a=0, b=1
$$

## Key Properties

- **Mean reversion**: All stationary GARCH models revert to the unconditional variance $\bar{\sigma}^2$; the speed is governed by $1 - \alpha - \beta$.
- **Long memory**: Empirical realized volatility series exhibit fractional integration ($d \approx 0.4$); FIGARCH and HAR proxy for this long-memory property.
- **Asymmetry (leverage effect)**: Equity volatility is negatively correlated with returns; GJR-GARCH and EGARCH capture this; vanilla GARCH does not.
- **Jump contamination**: Naive realized variance is inflated by price jumps; BPV and jump-robust estimators separate continuous variation from discontinuous jumps.

## Python Implementation

```python
import numpy as np
import pandas as pd
from arch import arch_model

def fit_garch(
    returns: np.ndarray,
    p: int = 1,
    q: int = 1,
    dist: str = "t",
    model_type: str = "GARCH"
) -> dict:
    """
    Fit GARCH(p,q) or GJR-GARCH(p,q) using the arch library.

    Args:
        returns: 1D array of daily returns (in percent or decimal)
        p: ARCH order
        q: GARCH order
        dist: innovation distribution ('normal', 't', 'skewt')
        model_type: 'GARCH', 'EGARCH', or 'GJRGARCH'

    Returns:
        dict with 'model_fit', 'conditional_vol', 'params', 'aic', 'bic'
    """
    scale = 100.0 if returns.std() < 0.1 else 1.0
    r = returns * scale

    am = arch_model(r, vol=model_type, p=p, q=q, dist=dist, rescale=False)
    result = am.fit(disp="off", options={"maxiter": 500})

    cond_vol = result.conditional_volatility / scale

    return {
        "model_fit": result,
        "conditional_vol": cond_vol,
        "params": dict(result.params),
        "aic": result.aic,
        "bic": result.bic,
        "persistence": result.params.get("alpha[1]", 0) + result.params.get("beta[1]", 0)
    }


def har_rv_model(
    rv_series: np.ndarray,
    h_forecast: int = 1
) -> dict:
    """
    Fit and forecast HAR-RV(1,5,22) model via OLS.

    Args:
        rv_series: 1D array of daily realized variance values
        h_forecast: forecast horizon in days

    Returns:
        dict with 'betas', 'fitted', 'forecast', 'r_squared'
    """
    T = len(rv_series)
    start = 22

    rv_d = rv_series[start - 1:-1] if h_forecast == 1 else rv_series[start - 1:T - h_forecast]
    rv_w = np.array([rv_series[i-5:i].mean() for i in range(start, T - h_forecast + 1)])
    rv_m = np.array([rv_series[i-22:i].mean() for i in range(start, T - h_forecast + 1)])
    target = rv_series[start + h_forecast - 1:]

    n = min(len(rv_d), len(rv_w), len(rv_m), len(target))
    rv_d, rv_w, rv_m, target = rv_d[:n], rv_w[:n], rv_m[:n], target[:n]

    X = np.column_stack([np.ones(n), rv_d, rv_w, rv_m])
    betas, _, _, _ = np.linalg.lstsq(X, target, rcond=None)

    fitted = X @ betas
    ss_res = np.sum((target - fitted)**2)
    ss_tot = np.sum((target - target.mean())**2)
    r2 = 1 - ss_res / ss_tot

    # One-step-ahead out-of-sample forecast
    last_d = rv_series[-1]
    last_w = rv_series[-5:].mean()
    last_m = rv_series[-22:].mean()
    x_new = np.array([1.0, last_d, last_w, last_m])
    forecast = float(x_new @ betas)

    return {
        "betas": dict(zip(["const", "beta_d", "beta_w", "beta_m"], betas)),
        "fitted": fitted,
        "forecast": max(forecast, 1e-8),
        "r_squared": r2
    }


def forecast_comparison(
    returns: np.ndarray,
    rv_series: np.ndarray | None = None,
    horizon: int = 5
) -> pd.DataFrame:
    """
    Compare GARCH(1,1), GJR-GARCH, and HAR-RV forecasts.
    Uses walk-forward validation with expanding window.
    """
    results = []
    T = len(returns)
    min_train = 250

    for t in range(min_train, T - horizon, horizon):
        train_r  = returns[:t]
        train_rv = rv_series[:t] if rv_series is not None else None

        # GARCH forecast
        try:
            g = fit_garch(train_r, model_type="GARCH")
            fc_g = g["model_fit"].forecast(horizon=horizon)
            garch_vol = np.sqrt(fc_g.variance.iloc[-1].values).mean()
        except Exception:
            garch_vol = np.nan

        # GJR-GARCH forecast
        try:
            gjr = fit_garch(train_r, model_type="GJRGARCH")
            fc_gjr = gjr["model_fit"].forecast(horizon=horizon)
            gjr_vol = np.sqrt(fc_gjr.variance.iloc[-1].values).mean()
        except Exception:
            gjr_vol = np.nan

        # HAR-RV forecast
        har_vol = np.nan
        if train_rv is not None and len(train_rv) >= 25:
            try:
                har = har_rv_model(train_rv, h_forecast=1)
                har_vol = np.sqrt(max(har["forecast"], 0))
            except Exception:
                pass

        realized = np.abs(returns[t:t+horizon]).mean()
        results.append({
            "t": t,
            "garch_vol": garch_vol,
            "gjr_vol": gjr_vol,
            "har_vol": har_vol,
            "realized": realized
        })

    return pd.DataFrame(results)


# ---- Example ----
np.random.seed(42)
T = 1000

# Simulate GJR-GARCH(1,1) returns with leverage effect
omega, alpha, gamma, beta_g = 0.00001, 0.06, 0.08, 0.90
sig2 = np.zeros(T)
eps  = np.zeros(T)
sig2[0] = omega / (1 - alpha - beta_g - 0.5*gamma)

for t in range(1, T):
    lev = gamma if eps[t-1] < 0 else 0.0
    sig2[t] = omega + (alpha + lev) * eps[t-1]**2 + beta_g * sig2[t-1]
    eps[t] = np.sqrt(sig2[t]) * np.random.standard_t(8)

returns = eps

# Fit GARCH(1,1)
g_result = fit_garch(returns, model_type="GARCH")
print("GARCH(1,1) parameters:")
for k, v in g_result["params"].items():
    print(f"  {k}: {v:.6f}")
print(f"  Persistence: {g_result['persistence']:.4f}")
print(f"  AIC: {g_result['aic']:.2f}")

# Fit GJR-GARCH
gjr_result = fit_garch(returns, model_type="GJRGARCH")
print(f"\nGJR-GARCH AIC: {gjr_result['aic']:.2f}")
print(f"Leverage (gamma): {gjr_result['params'].get('gamma[1]', 'N/A'):.6f}")

# HAR model on squared returns as proxy for RV
rv_proxy = returns**2
har_result = har_rv_model(rv_proxy)
print(f"\nHAR-RV beta_d={har_result['betas']['beta_d']:.4f}, "
      f"beta_w={har_result['betas']['beta_w']:.4f}, "
      f"beta_m={har_result['betas']['beta_m']:.4f}")
print(f"HAR R^2: {har_result['r_squared']:.4f}")
```

## GARCH Conditional Volatility

```chart
{
  "type": "line",
  "xAxis": "day",
  "data": [
    {"day": "1",   "garch_vol": 0.012, "gjr_vol": 0.013},
    {"day": "50",  "garch_vol": 0.018, "gjr_vol": 0.022},
    {"day": "100", "garch_vol": 0.025, "gjr_vol": 0.031},
    {"day": "150", "garch_vol": 0.019, "gjr_vol": 0.022},
    {"day": "200", "garch_vol": 0.014, "gjr_vol": 0.015},
    {"day": "250", "garch_vol": 0.016, "gjr_vol": 0.017},
    {"day": "300", "garch_vol": 0.028, "gjr_vol": 0.035}
  ],
  "lines": [
    {"dataKey": "garch_vol", "stroke": "#3b82f6", "name": "GARCH(1,1) Conditional Vol"},
    {"dataKey": "gjr_vol",   "stroke": "#ef4444", "name": "GJR-GARCH Conditional Vol"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Range |
| :--- | :--- | :--- | :--- |
| $\omega$ | Constant | Long-run variance weight | $10^{-7}$ – $10^{-4}$ |
| $\alpha$ | ARCH term | Sensitivity to past shocks | 0.02 – 0.15 |
| $\beta$ | GARCH term | Variance persistence | 0.80 – 0.97 |
| $\gamma$ | Leverage | Asymmetric response (GJR) | 0.05 – 0.20 |
| $\bar{\sigma}^2$ | LR variance | Unconditional variance = $\omega/(1-\alpha-\beta)$ | Calibrated |
| $\beta_d, \beta_w, \beta_m$ | HAR coefficients | Daily/weekly/monthly RV weights | Sum $\approx$ 0.8–0.95 |

## Limitations and Extensions

- **GARCH tail underestimation**: Even with Student-t innovations, GARCH underestimates extreme tail risk; EVT-GARCH combinations improve tail forecasts.
- **HAR stationarity**: HAR coefficients sum near 1 (near unit root), implying near-unit-root behavior; ARFIMA-RV models the long memory explicitly.
- **Multivariate vol**: DCC-GARCH and GO-GARCH extend univariate models to covariance matrices for portfolio VaR; these require $O(N^2)$ parameters.
- **ML forecasting**: LSTM, temporal convolutional networks, and [[transformer-architecture|transformer]] architectures on realized measures outperform GARCH and HAR in large-scale comparisons, at the cost of interpretability.
- **Roughness**: The rough volatility literature (Gatheral et al. 2018) models $\sigma_t$ as a rough fractional Brownian motion with Hurst exponent $H \approx 0.1$, much rougher than standard diffusions.

## Practical Applications

1. **Options pricing**: GARCH-implied vol surfaces (Duan 1995) generate option prices consistent with the empirical volatility smile.
2. **VaR/ES computation**: 1-day 99% VaR from GARCH conditional vol significantly outperforms historical simulation in backtesting exception rates.
3. **Volatility targeting**: Scale portfolio weights by $\sigma_{target}/\hat{\sigma}_t$ to maintain constant risk; HAR-based estimates reduce turnover vs. GARCH.
4. **Variance risk premium**: The spread between implied variance (VIX²) and expected realized variance (HAR forecast) is a tradeable premium harvested via short variance swaps.
5. **Intraday risk**: Intraday GARCH on 5-minute bars provides real-time risk estimates for execution algorithms and live risk management systems.

## Related Topics
- [[heston-model]]
- [[mcmc]]
- [[value-at-risk]]
- [[monte-carlo-method]]
- [[realized-kernels]]
- [[garch-models]]

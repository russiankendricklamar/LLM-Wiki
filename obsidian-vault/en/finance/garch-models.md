---
title: "GARCH Models"
category: "Stochastic Processes"
order: 169
lang: "en"
slug: "garch-models"
---
# GARCH Models

The **Generalized Autoregressive Conditional Heteroskedasticity (GARCH)** model, introduced by Tim Bollerslev in 1986 as an extension of Robert Engle's ARCH (1982), is the workhorse model for volatility forecasting in quantitative finance. It captures the empirical fact that asset return volatility clusters: large moves tend to be followed by large moves, and calm periods by calm periods.

## Historical Background

Robert Engle introduced **ARCH** (Autoregressive Conditional Heteroskedasticity) in 1982 to model time-varying volatility in UK inflation, earning the 2003 Nobel Prize in Economics. The ARCH($q$) model expresses current variance as a weighted sum of past squared residuals. Bollerslev (1986) generalised this by also including lagged conditional variances, yielding the more parsimonious **GARCH($p, q$)**.

## ARCH Foundation

The ARCH($q$) model:

$$
\epsilon_t = \sigma_t z_t, \quad z_t \sim \mathcal{N}(0,1)
$$
$$
\sigma_t^2 = \omega + \sum_{i=1}^q \alpha_i \epsilon_{t-i}^2
$$

ARCH requires large $q$ to fit real data well. GARCH achieves the same parsimony with $p = q = 1$.

## GARCH(p, q) Definition

A $\text{GARCH}(p, q)$ model:

$$
\sigma_t^2 = \omega + \sum_{i=1}^q \alpha_i \epsilon_{t-i}^2 + \sum_{j=1}^p \beta_j \sigma_{t-j}^2
$$

Constraints for non-negativity and stationarity:
- $\omega > 0$, $\alpha_i \geq 0$, $\beta_j \geq 0$
- **Covariance stationarity**: $\sum_{i=1}^q \alpha_i + \sum_{j=1}^p \beta_j < 1$

The most common specification is GARCH(1,1):

$$
\sigma_t^2 = \omega + \alpha \epsilon_{t-1}^2 + \beta \sigma_{t-1}^2
$$

## Persistence and Mean Reversion

The **persistence** of volatility shocks is measured by $\alpha + \beta$. For equity markets, typical estimates are $\alpha \approx 0.09$, $\beta \approx 0.90$, giving persistence $\approx 0.99$.

When $\alpha + \beta < 1$, the process is covariance-stationary and the unconditional (long-run) variance is:

$$
\bar{\sigma}^2 = \frac{\omega}{1 - \alpha - \beta}
$$

The **half-life** of a volatility shock (time for the deviation from $\bar{\sigma}^2$ to halve) is:

$$
t_{1/2} = -\frac{\ln 2}{\ln(\alpha + \beta)}
$$

For $\alpha + \beta = 0.99$, $t_{1/2} \approx 69$ trading days.

## Asymmetric Extensions

Standard GARCH treats positive and negative shocks symmetrically. Empirically, negative returns increase volatility more than positive ones (the **leverage effect**). Two major asymmetric models:

**GJR-GARCH (Glosten-Jagannathan-Runkle, 1993)**:

$$
\sigma_t^2 = \omega + \alpha \epsilon_{t-1}^2 + \gamma \epsilon_{t-1}^2 \mathbf{1}[\epsilon_{t-1} < 0] + \beta \sigma_{t-1}^2
$$

where $\gamma > 0$ captures the additional volatility impact of negative shocks.

**EGARCH (Nelson, 1991)**:

$$
\ln \sigma_t^2 = \omega + \alpha \left(\frac{|\epsilon_{t-1}|}{\sigma_{t-1}} - \sqrt{2/\pi}\right) + \gamma \frac{\epsilon_{t-1}}{\sigma_{t-1}} + \beta \ln \sigma_{t-1}^2
$$

EGARCH models log-variance, ensuring positivity without parameter constraints. The $\gamma$ term captures sign asymmetry.

## Variance Targeting

**Variance targeting** replaces $\omega$ with $\bar{\sigma}^2(1 - \alpha - \beta)$, where $\bar{\sigma}^2$ is the sample variance. This pins the long-run variance to the historical level and reduces the parameter space by one, improving numerical stability:

$$
\sigma_t^2 = \bar{\sigma}^2(1-\alpha-\beta) + \alpha \epsilon_{t-1}^2 + \beta \sigma_{t-1}^2
$$

## Maximum Likelihood Estimation

GARCH parameters $\theta = (\omega, \alpha, \beta)$ are estimated by maximising the log-likelihood under Gaussian innovations:

$$
\ell(\theta) = -\frac{T}{2}\ln(2\pi) - \frac{1}{2}\sum_{t=1}^T \left[\ln \sigma_t^2(\theta) + \frac{\epsilon_t^2}{\sigma_t^2(\theta)}\right]
$$

For fat-tailed innovations, the Student-$t$ log-likelihood is preferred:

$$
\ell_t(\theta, \nu) = \ln\Gamma\!\left(\frac{\nu+1}{2}\right) - \ln\Gamma\!\left(\frac{\nu}{2}\right) - \frac{1}{2}\ln(\pi(\nu-2)\sigma_t^2) - \frac{\nu+1}{2}\ln\!\left(1+\frac{\epsilon_t^2}{(\nu-2)\sigma_t^2}\right)
$$

## Model Selection: AIC and BIC

For comparing GARCH specifications:

$$
\text{AIC} = -2\ell(\hat\theta) + 2k, \qquad \text{BIC} = -2\ell(\hat\theta) + k\ln T
$$

where $k$ is the number of parameters. Lower values are better. BIC penalises complexity more heavily and tends to favour GARCH(1,1) over higher-order models.

## Python: Estimation and Forecasting

```python
import numpy as np
import pandas as pd
from arch import arch_model

def fit_and_forecast_garch(
    returns: pd.Series,
    p: int = 1,
    q: int = 1,
    dist: str = "t",
    horizon: int = 10,
    model_type: str = "Garch",
):
    """
    Fit a GARCH(p,q) model and produce a multi-step variance forecast.

    Args:
        returns:    log-returns series (annualised or daily scale)
        p:          GARCH lag order
        q:          ARCH lag order
        dist:       innovation distribution ('normal', 't', 'skewt')
        horizon:    forecast horizon in periods
        model_type: 'Garch', 'EGARCH', 'GJR-GARCH'
    Returns:
        dict with fitted parameters and variance forecast
    """
    model = arch_model(
        returns * 100,          # scale for numerical stability
        vol=model_type,
        p=p,
        q=q,
        dist=dist,
        rescale=False,
    )
    result = model.fit(disp="off", options={"maxiter": 500})

    # Multi-step ahead variance forecast
    forecast = result.forecast(horizon=horizon, reindex=False)
    var_forecast = forecast.variance.values[-1] / 1e4   # rescale back

    params = result.params
    persistence = params.get("alpha[1]", 0) + params.get("beta[1]", 0)
    long_run_vol = np.sqrt(252 * params["omega"] / (1 - persistence)) \
        if persistence < 1 else np.nan

    return {
        "params": params.to_dict(),
        "persistence": persistence,
        "long_run_annualised_vol": long_run_vol,
        "aic": result.aic,
        "bic": result.bic,
        "variance_forecast": var_forecast,
        "conditional_vol": result.conditional_volatility / 100,
    }

# --- Example: fit GARCH(1,1) on simulated daily returns ---
np.random.seed(0)
returns_sim = pd.Series(np.random.normal(0, 0.01, 1000), name="returns")
out = fit_and_forecast_garch(returns_sim, p=1, q=1)
print(f"Persistence:         {out['persistence']:.4f}")
print(f"Long-run annual vol: {out['long_run_annualised_vol']:.4f}")
print(f"AIC / BIC:           {out['aic']:.1f} / {out['bic']:.1f}")
```

## Conditional Volatility Dynamics

```chart
{
  "type": "line",
  "xAxis": "day",
  "data": [
    {"day": "1",  "vol": 0.012},
    {"day": "10", "vol": 0.011},
    {"day": "20", "vol": 0.018},
    {"day": "30", "vol": 0.025},
    {"day": "40", "vol": 0.032},
    {"day": "50", "vol": 0.028},
    {"day": "60", "vol": 0.022},
    {"day": "70", "vol": 0.017},
    {"day": "80", "vol": 0.014},
    {"day": "90", "vol": 0.013}
  ],
  "lines": [
    {"dataKey": "vol", "stroke": "#ef4444", "name": "GARCH(1,1) Conditional Volatility"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Value |
|--------|------|-------------|---------------|
| $\omega$ | Constant | Long-run variance contribution | $>0$, small |
| $\alpha$ | ARCH coefficient | Weight on lagged squared residual | 0.05–0.15 |
| $\beta$ | GARCH coefficient | Weight on lagged variance | 0.80–0.95 |
| $\gamma$ | Asymmetry (GJR) | Extra impact of negative shock | 0.05–0.15 |
| $\nu$ | Degrees of freedom | Student-$t$ tail parameter | 4–10 |
| $\alpha + \beta$ | Persistence | Speed of mean reversion | <1 for stationarity |

## Limitations and Extensions

- **Symmetric response**: Base GARCH does not capture the leverage effect; GJR-GARCH or EGARCH required.
- **Single-asset**: Multivariate extensions (DCC-GARCH, BEKK) model the time-varying correlation structure across assets.
- **Gaussian innovations**: Fat tails in financial returns are better captured with Student-$t$ or skewed-$t$ innovations.
- **IGARCH**: When $\alpha + \beta = 1$, the process is integrated in variance (IGARCH); shocks are permanent, unconditional variance is infinite.
- **Realized GARCH**: Incorporates realized volatility (from intraday data) as an auxiliary equation, improving daily forecast accuracy.

## Practical Applications

1. **VaR and ES estimation**: GARCH-filtered VaR is a core internal model for market risk capital under Basel III/IV.
2. **Options pricing**: The GARCH option pricing model (Duan 1995) prices options consistently with the discrete-time GARCH dynamics under the risk-neutral measure.
3. **Portfolio risk**: DCC-GARCH provides time-varying correlation matrices for dynamic portfolio rebalancing and risk-parity strategies.
4. **Volatility trading**: GARCH forecasts inform positioning in variance swaps, VIX futures, and straddles — any instrument with direct volatility exposure.

## Related Topics
- [[volatility-forecasting]]
- [[arch-models]]
- [[black-scholes]]
- [[mcmc]]
- [[extreme-value-theory]]
- [[heston-model]]

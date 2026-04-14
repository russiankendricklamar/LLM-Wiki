---
title: "Cornish-Fisher CVaR"
category: "Risk Management"
order: 161
lang: "en"
slug: "cornish-fisher-cvar"
---
# Cornish-Fisher CVaR

The **Cornish-Fisher expansion** is used to adjust the Value-at-Risk (VaR) and Conditional Value-at-Risk (CVaR) for non-normal distributions by accounting for skewness and excess kurtosis. It provides a semi-parametric bridge between the tractable normal distribution and the fat-tailed, skewed return distributions observed in practice.

## Overview & Background

Standard parametric VaR assumes returns are normally distributed, which systematically underestimates tail risk for financial assets. The Cornish-Fisher expansion (1937), originally developed for statistical inference, was adapted for risk management by Zangari (1996) and popularized as **Modified VaR (mVaR)** by Favre & Galeano (2002).

The key insight is that the first four moments — mean $\mu$, standard deviation $\sigma$, skewness $S$, and excess kurtosis $K$ — can be estimated from historical data and used to shift the normal quantile to better approximate the true quantile of a non-normal distribution. This approach is far simpler than fitting a full parametric distribution (e.g., Student-t, GEV) while capturing the most important departures from normality.

For hedge funds and alternative investments — where return distributions are frequently left-skewed (due to option writing or momentum strategies) and leptokurtic — Cornish-Fisher mVaR has become a standard risk reporting metric.

## Mathematical Framework

### The Cornish-Fisher Expansion

For a random variable $X$ with mean $\mu$, standard deviation $\sigma$, skewness $S = \mathbb{E}[(X-\mu)^3]/\sigma^3$, and excess kurtosis $K = \mathbb{E}[(X-\mu)^4]/\sigma^4 - 3$, the $\alpha$-quantile can be approximated as:

$$
x_\alpha \approx \mu + \sigma \cdot z_{cf}(\alpha)
$$

where $z_{cf}$ is the **Cornish-Fisher adjusted z-score**:

$$
z_{cf} = z_\alpha + \frac{1}{6}(z_\alpha^2 - 1)S + \frac{1}{24}(z_\alpha^3 - 3z_\alpha)K - \frac{1}{36}(2z_\alpha^3 - 5z_\alpha)S^2
$$

with $z_\alpha = \Phi^{-1}(\alpha)$ being the standard normal quantile. The expansion is derived from an Edgeworth series approximation to the CDF.

**Term-by-term interpretation**:
- $z_\alpha$: Normal baseline
- $+\frac{1}{6}(z_\alpha^2-1)S$: Skewness correction — negative skew ($S < 0$) pushes the left tail further out
- $+\frac{1}{24}(z_\alpha^3-3z_\alpha)K$: Kurtosis correction — fat tails ($K > 0$) increase tail risk
- $-\frac{1}{36}(2z_\alpha^3-5z_\alpha)S^2$: Second-order skewness correction — reduces over-adjustment for large $S$

### Modified VaR

$$
\text{mVaR}(\alpha) = -(\mu + z_{cf}(\alpha) \cdot \sigma) \cdot \sqrt{h}
$$

where $h$ is the holding period in the same time units as $\mu$ and $\sigma$.

### Modified CVaR (Expected Shortfall)

The modified CVaR integrates the tail of the Cornish-Fisher approximated distribution:

$$
\text{mCVaR}(\alpha) = -\mu + \sigma \cdot \frac{\phi(z_{cf}(\alpha))}{1-\alpha} \cdot \left[1 + \frac{S}{6}(2z_{cf}^2 + 1) + \frac{K}{24}(z_{cf}^3 + z_{cf}) - \frac{S^2}{36}(5z_{cf}^3 - 2z_{cf})\right]
$$

where $\phi$ is the standard normal PDF. For practical purposes, mCVaR is often computed numerically by:

$$
\text{mCVaR}(\alpha) \approx -\mu + \sigma \cdot \frac{1}{1-\alpha} \int_\alpha^1 z_{cf}(u) \, du
$$

### Validity Conditions

The Cornish-Fisher expansion is accurate when:
- $|S| \lesssim 1$ (mild skewness)
- $|K| \lesssim 4$ (moderate excess kurtosis)
- $\alpha$ is not too extreme (typically $\alpha \in [0.01, 0.10]$)

For extreme quantiles ($\alpha < 0.001$) or highly non-normal distributions, extreme value theory ([[extreme-value-theory]]) is more appropriate.

## Key Properties

- **Four-moment summary**: Captures non-normality with just four moments, far simpler than full parametric fitting.
- **Consistency with normal case**: When $S = K = 0$, $z_{cf} = z_\alpha$ — reduces exactly to standard normal VaR.
- **Monotonicity**: For typical hedge fund return distributions ($S < 0$, $K > 0$), mVaR > standard VaR — the expansion correctly identifies increased tail risk.
- **Portfolio-level application**: Can be applied to portfolio returns directly, avoiding the need to aggregate asset-level distributions.

## Python Implementation

```python
import numpy as np
from scipy.stats import norm, skew, kurtosis
from scipy.integrate import quad

def cornish_fisher_z(alpha: float, s: float, k: float) -> float:
    """
    Cornish-Fisher adjusted z-score for given confidence level and moments.
    alpha: confidence level (e.g., 0.05 for 95% VaR)
    s    : skewness of return distribution
    k    : excess kurtosis (kurtosis - 3)
    """
    z = norm.ppf(alpha)
    z_cf = (z
            + (z**2 - 1) * s / 6
            + (z**3 - 3 * z) * k / 24
            - (2 * z**3 - 5 * z) * s**2 / 36)
    return z_cf

def modified_var(
    returns: np.ndarray, alpha: float = 0.05, period: int = 1
) -> dict:
    """
    Compute Modified VaR and standard Normal VaR for comparison.

    Parameters
    ----------
    returns : array of portfolio returns (daily)
    alpha   : significance level (0.05 = 95% VaR)
    period  : holding period in days
    """
    mu = np.mean(returns)
    sigma = np.std(returns, ddof=1)
    s = float(skew(returns))
    k = float(kurtosis(returns))  # excess kurtosis by default in scipy

    z_normal = norm.ppf(alpha)
    z_cf = cornish_fisher_z(alpha, s, k)

    # Scale to holding period
    mu_h = mu * period
    sigma_h = sigma * np.sqrt(period)

    normal_var = -(mu_h + z_normal * sigma_h)
    modified_var_val = -(mu_h + z_cf * sigma_h)

    return {
        'normal_var': normal_var,
        'modified_var': modified_var_val,
        'skewness': s,
        'excess_kurtosis': k,
        'z_normal': z_normal,
        'z_cf': z_cf,
        'adjustment': z_cf - z_normal
    }

def modified_cvar(
    returns: np.ndarray, alpha: float = 0.05, n_grid: int = 1000
) -> float:
    """
    Modified CVaR via numerical integration of the Cornish-Fisher tail.
    """
    mu = np.mean(returns)
    sigma = np.std(returns, ddof=1)
    s = float(skew(returns))
    k = float(kurtosis(returns))

    # Integrate z_cf over (alpha, 1)
    grid = np.linspace(alpha, 1 - 1e-6, n_grid)
    z_cf_vals = np.array([cornish_fisher_z(u, s, k) for u in grid])
    integral = np.trapz(z_cf_vals, grid)

    return -(mu + sigma * integral / (1 - alpha))

def var_comparison_table(
    returns: np.ndarray, alphas: list = [0.10, 0.05, 0.01]
) -> list:
    """Compare Normal VaR vs Modified VaR across confidence levels."""
    rows = []
    for a in alphas:
        result = modified_var(returns, alpha=a)
        rows.append({
            'alpha': a,
            'confidence': f"{(1-a)*100:.0f}%",
            'normal_var': result['normal_var'],
            'modified_var': result['modified_var'],
            'z_adjustment': result['adjustment']
        })
    return rows

# Example: hedge fund returns (negatively skewed, fat-tailed)
np.random.seed(42)
n = 500
# Simulate: slight negative drift, negative skew from occasional large drawdowns
base = np.random.normal(0.001, 0.015, n)
jumps = np.random.choice([0, -0.06], size=n, p=[0.97, 0.03])
returns = base + jumps

result = modified_var(returns, alpha=0.05)
mcvar = modified_cvar(returns, alpha=0.05)
table = var_comparison_table(returns)
```

## Normal vs Modified VaR by Confidence Level

```chart
{
  "type": "bar",
  "xAxis": "confidence",
  "data": [
    {"confidence": "90%", "normal_var": 1.85, "modified_var": 2.31},
    {"confidence": "95%", "normal_var": 2.41, "modified_var": 3.18},
    {"confidence": "99%", "normal_var": 3.39, "modified_var": 5.02},
    {"confidence": "99.5%", "normal_var": 3.72, "modified_var": 5.94}
  ],
  "bars": [
    {"dataKey": "normal_var", "fill": "#94a3b8", "name": "Normal VaR (%)"},
    {"dataKey": "modified_var", "fill": "#ef4444", "name": "Modified VaR (%)"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---:|:---|:---|
| $\alpha$ | Significance level | Tail probability for VaR/CVaR | 0.01 – 0.10 |
| $S$ | Skewness | Third standardized moment | –2 to 0 (equity) |
| $K$ | Excess kurtosis | Fourth standardized moment minus 3 | 0 to 10 |
| $z_\alpha$ | Normal quantile | Standard normal $\alpha$-quantile | –2.33 to –1.28 |
| $z_{cf}$ | CF-adjusted quantile | Cornish-Fisher corrected quantile | Lower than $z_\alpha$ for $S<0, K>0$ |
| $h$ | Holding period | Days for scaling VaR | 1, 5, 10, 250 |

## Limitations & Extensions

**Limitations:**
- **Accuracy breaks down at extremes**: For $\alpha < 0.01$ or when $|S| > 2$ or $K > 8$, the Cornish-Fisher expansion can produce non-monotone quantile functions (quantile crossing), violating the definition of a valid distribution.
- **Only four moments**: The expansion ignores higher-order moments that can be important for options portfolios or leveraged strategies.
- **Ignores serial correlation**: Modified VaR uses the single-period distribution; scaling by $\sqrt{h}$ is only valid under i.i.d. returns.
- **Parameter estimation error**: Skewness and kurtosis are estimated with large sampling error from short return histories; this propagates into mVaR instability.

**Extensions:**
- **Gram-Charlier expansion**: An alternative semi-parametric expansion that produces a density function (not just quantile correction) and avoids some quantile-crossing issues.
- **[[extreme-value-theory]]**: For extreme quantiles ($\alpha < 0.001$), generalized Pareto distribution fitting to the tail is more reliable.
- **[[mcmc]] sampling**: Fully Bayesian posterior distribution over mVaR accounts for parameter uncertainty.

## Practical Applications

1. **Hedge Fund Risk Reporting**: AIMA and UCITS funds report mVaR as the regulatory risk measure; Cornish-Fisher is the standard implementation.
2. **UCITS KIID**: EU KIID (Key Investor Information Documents) use mVaR for UCITS III/IV funds with complex instruments.
3. **Portfolio Screening**: Quantitative screens for strategies with asymmetric return profiles compare mVaR to standard VaR as a measure of tail asymmetry.
4. **Options Portfolios**: Portfolios with short gamma (sold options) have large negative skew and excess kurtosis; Cornish-Fisher mVaR captures this risk better than Gaussian VaR.
5. **Carry Trade Monitoring**: Currency carry trades exhibit negative skew with occasional sharp reversals; mVaR alerts risk managers to the tail gap between reported Gaussian VaR and realistic tail loss.

## Related Topics
- [[value-at-risk]]
- [[volatility-forecasting]]
- [[mcmc]]
- [[levy-processes]]
- [[extreme-value-theory]]
- [[copula-models]]

---
slug: "/finance/value-at-risk"
title: "Value at Risk (VaR)"
category: "Risk"
order: 15
lang: "en"
---
# Value at Risk (VaR)

**Value at Risk (VaR)** is the most widely used measure of market risk, estimating the maximum potential loss of a portfolio over a specific time horizon for a given confidence level. Formally: a portfolio's daily 99% VaR of $10M means there is at most a 1% probability that losses exceed $10M on any given day. Introduced in the early 1990s by J.P. Morgan's RiskMetrics, VaR became the regulatory standard under the Basel Accords and remains central to internal risk models at banks and asset managers.

## Mathematical Framework

### Formal Definition

VaR is defined as a quantile of the loss distribution. Let $L = -R$ be the portfolio loss over horizon $\Delta t$. The VaR at confidence level $\alpha$ is:

$$
\text{VaR}_\alpha = \inf\{l \in \mathbb{R} : P(L > l) \le 1 - \alpha\} = F_L^{-1}(\alpha)
$$

equivalently, $\text{VaR}_\alpha$ is the $\alpha$-quantile of the loss distribution. For $\alpha = 0.99$, it is the 99th percentile of losses.

### Parametric (Variance-Covariance) VaR

Under normality of portfolio returns with mean $\mu$ and standard deviation $\sigma$:

$$
\text{VaR}_\alpha = W \cdot (\mu \cdot \Delta t - \sigma \sqrt{\Delta t} \cdot z_\alpha)
$$

where $W$ is portfolio value and $z_\alpha = \Phi^{-1}(\alpha)$ is the standard normal quantile ($z_{0.95} = 1.645$, $z_{0.99} = 2.326$). For a multi-asset portfolio with weight vector $\mathbf{w}$ and covariance matrix $\boldsymbol{\Sigma}$:

$$
\sigma_p = \sqrt{\mathbf{w}^T \boldsymbol{\Sigma} \mathbf{w}}, \qquad \text{VaR}_\alpha = W \cdot z_\alpha \cdot \sigma_p \sqrt{\Delta t}
$$

### Expected Shortfall (CVaR)

VaR says nothing about losses beyond the threshold. The **Conditional VaR (CVaR)**, also called **Expected Shortfall (ES)**, is the expected loss given that losses exceed VaR:

$$
\text{CVaR}_\alpha = \mathbb{E}[L \mid L > \text{VaR}_\alpha] = \frac{1}{1-\alpha} \int_\alpha^1 \text{VaR}_u \, du
$$

For normally distributed returns:
$$
\text{CVaR}_\alpha = W \cdot \sigma\sqrt{\Delta t} \cdot \frac{\phi(z_\alpha)}{1-\alpha}
$$

where $\phi$ is the standard normal PDF. CVaR is a **coherent risk measure** (satisfies subadditivity, monotonicity, positive homogeneity, and translation invariance), whereas VaR is not subadditive in general.

## Three Calculation Methods

### 1. Historical Simulation

Revalue the portfolio using the last $T$ days of actual market moves. Sort the P&L scenarios and read off the quantile directly:

$$
\text{VaR}_\alpha^{HS} = -\text{Quantile}_{1-\alpha}(\{P\&L_1, \dots, P\&L_T\})
$$

No distributional assumption required. Captures fat tails and correlations as observed. Slow to react to regime changes; relies on the representativeness of the historical window.

### 2. Parametric (Delta-Normal)

Assumes returns are normally distributed. Fast and analytically tractable. Underestimates tail risk for portfolios with options or skewed return profiles.

### 3. Monte Carlo Simulation

Generate $M$ scenarios by simulating asset returns from a specified multivariate distribution (GBM, GARCH, Copula), reprice the portfolio, compute P&L per scenario, then take the quantile. Most flexible, captures non-linear payoffs and tail correlations. Computationally intensive.

## Backtesting VaR

### Kupiec Unconditional Coverage Test

Over $T$ trading days, count the number of VaR exceptions $N$ (days when loss exceeded VaR). Under the null hypothesis that the true coverage is $(1-\alpha)$:

$$
LR_{UC} = -2\ln\left[\frac{\alpha^{T-N}(1-\alpha)^N}{\hat{p}^{T-N}(1-\hat{p})^N}\right] \sim \chi^2_1
$$

where $\hat{p} = N/T$ is the observed exception rate. Reject if $LR_{UC} > 3.84$ (5% significance).

### Christoffersen Conditional Coverage Test

Tests both unconditional coverage and independence of exceptions (exceptions should not cluster):

$$
LR_{CC} = LR_{UC} + LR_{IND} \sim \chi^2_2
$$

where $LR_{IND}$ tests whether exception occurrence on day $t$ is independent of whether an exception occurred on day $t-1$.

### Basel III Traffic Light System

| Zone | Exception Count (250 days) | Multiplier $k$ |
| :--- | :---: | :---: |
| Green | 0 – 4 | 3.00 |
| Yellow | 5 – 9 | 3.40 – 3.80 |
| Red | 10+ | 4.00 |

Capital requirement: $\text{Capital} = k \cdot \text{VaR}_{99\%,10d}$

## Python Implementation

```python
import numpy as np
from scipy.stats import norm

def calculate_var_cvar(
    returns: np.ndarray,
    confidence_level: float = 0.99,
    portfolio_value: float = 1_000_000,
    method: str = "historical"
) -> dict:
    """
    Compute VaR and CVaR via historical simulation or parametric method.

    Args:
        returns: 1D array of daily portfolio returns (not P&L)
        confidence_level: e.g. 0.99 for 99% VaR
        portfolio_value: current portfolio value in dollars
        method: 'historical' or 'parametric'

    Returns:
        dict with 'var' and 'cvar' in dollar terms
    """
    alpha = confidence_level

    if method == "historical":
        sorted_returns = np.sort(returns)
        var_idx = int((1 - alpha) * len(sorted_returns))
        var_return = -sorted_returns[var_idx]
        # CVaR: mean of returns below VaR threshold
        tail_returns = sorted_returns[:var_idx]
        cvar_return = -np.mean(tail_returns) if tail_returns.size > 0 else var_return

    elif method == "parametric":
        mu = np.mean(returns)
        sigma = np.std(returns, ddof=1)
        z = norm.ppf(alpha)
        var_return = -(mu - z * sigma)
        # Parametric CVaR
        cvar_return = -(mu - sigma * norm.pdf(z) / (1 - alpha))
    else:
        raise ValueError(f"Unknown method: {method}")

    return {
        "var": portfolio_value * var_return,
        "cvar": portfolio_value * cvar_return,
        "method": method,
        "confidence": alpha
    }

def kupiec_test(n_exceptions: int, T: int, alpha: float = 0.99) -> dict:
    """Kupiec (1995) unconditional coverage test for VaR backtesting."""
    from scipy.stats import chi2
    p_hat = n_exceptions / T
    p_null = 1 - alpha
    if p_hat == 0 or p_hat == 1:
        return {"lr": np.nan, "p_value": np.nan, "reject": False}
    lr = -2 * np.log(
        (p_null**(T - n_exceptions) * (1 - p_null)**n_exceptions) /
        (p_hat**(T - n_exceptions) * (1 - p_hat)**n_exceptions + 1e-300)
    )
    p_value = 1 - chi2.cdf(lr, df=1)
    return {"lr": lr, "p_value": p_value, "reject": p_value < 0.05}

# ---- Example ----
np.random.seed(42)
returns = np.random.normal(0.0005, 0.015, 1000)  # ~1000 daily returns

hist_result = calculate_var_cvar(returns, 0.99, method="historical")
para_result = calculate_var_cvar(returns, 0.99, method="parametric")

print(f"Historical VaR 99%:  ${hist_result['var']:>10,.0f}")
print(f"Historical CVaR 99%: ${hist_result['cvar']:>10,.0f}")
print(f"Parametric VaR 99%:  ${para_result['var']:>10,.0f}")
print(f"Parametric CVaR 99%: ${para_result['cvar']:>10,.0f}")

# Backtest: count exceptions
var_threshold = hist_result['var'] / 1_000_000  # convert to return
exceptions = np.sum(returns < -var_threshold)
backtest = kupiec_test(exceptions, len(returns), alpha=0.99)
print(f"\nKupiec LR: {backtest['lr']:.3f}, p-value: {backtest['p_value']:.3f}, "
      f"Reject H0: {backtest['reject']}")
```

## VaR vs. CVaR Comparison

```chart
{
  "type": "line",
  "xAxis": "return",
  "data": [
    {"return": "-5%", "freq": 0.02},
    {"return": "-4%", "freq": 0.05},
    {"return": "-3%", "freq": 0.15},
    {"return": "-2%", "freq": 0.35},
    {"return": "-1%", "freq": 0.70},
    {"return": "0%", "freq": 1.00},
    {"return": "1%", "freq": 0.70},
    {"return": "2%", "freq": 0.35},
    {"return": "3%", "freq": 0.15},
    {"return": "4%", "freq": 0.05}
  ],
  "lines": [
    {"dataKey": "freq", "stroke": "#3b82f6", "name": "Probability Density"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Range |
| :--- | :--- | :--- | :--- |
| $\alpha$ | Confidence level | Probability loss stays below VaR | 0.95, 0.99 |
| $\Delta t$ | Time horizon | Holding period in trading days | 1 day (internal), 10 days (Basel) |
| $\sigma$ | Portfolio volatility | Daily standard deviation of returns | 0.5% – 3% |
| $z_\alpha$ | Normal quantile | Standard normal quantile at $\alpha$ | 1.645 ($\alpha$=0.95), 2.326 ($\alpha$=0.99) |
| $T$ | History window | Days of returns used for HS-VaR | 250 – 1000 |
| $R$ | Recovery rate | Used in CVA extensions | 0.0 – 0.6 |

## Limitations and Extensions

- **Non-subadditivity**: VaR of a portfolio can exceed the sum of individual VaRs (diversification "penalty"). CVaR/ES resolves this.
- **Normality assumption**: Parametric VaR severely underestimates tail losses for options or fat-tailed assets. Cornish-Fisher expansion or EVT-based VaR correct for skewness and kurtosis.
- **Model risk**: Historical VaR implicitly assumes the past is representative of future risk. Filtered Historical Simulation (FHS) applies GARCH rescaling to improve adaptiveness.
- **Basel IV (FRTB)**: Regulatory capital is now based on ES at 97.5% rather than VaR at 99%, and must be computed at desk level with liquidity horizons of 10–120 days depending on asset class.
- **Stressed VaR**: Regulators require VaR computed over a stressed period (e.g., 2008 crisis window) in addition to the standard rolling window.

## Practical Applications

1. **Regulatory capital (Basel III/IV)**: Banks hold capital equal to 3–4× their 10-day 99% VaR, calibrated via backtesting exceptions.
2. **Risk limits**: Trading desks are allocated daily VaR budgets; breaches trigger automatic position reductions.
3. **Portfolio construction**: VaR contribution per asset guides de-risking and hedging decisions.
4. **Margin requirements**: CCPs use VaR-based initial margin models (SPAN, SIMM) for cleared derivatives.
5. **Stress testing**: VaR complements scenario-based stress tests required under CCAR and EBA stress test frameworks.

## Related Topics
- [[extreme-value-theory]]
- [[copula-models]]
- [[monte-carlo-method]]
- [[cornish-fisher-cvar]]
- [[garch-models]]
- [[xva]]
- [[futures-hedging]] — hedging strategies that reduce portfolio VaR

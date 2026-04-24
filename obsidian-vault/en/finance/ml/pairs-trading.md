---
title: "Pairs Trading Strategy"
category: "Pricing"
order: 62
lang: "en"
slug: "pairs-trading"
---
# Pairs Trading Strategy

**Pairs Trading** is a market-neutral strategy that matches a long position with a short position in two highly correlated assets. The strategy exploits temporary price divergences between the two, assuming they will eventually revert to their historical relationship (**Cointegration**).

## Visualization

A simulated z-score of a cointegrated spread over time, with entry (+2 / −2), exit (±0.5), and stop-loss (±3.5) thresholds. Shaded regions show periods when a position is held; the spread reverts within the half-life window for most trades.

```chart
{
  "type": "line",
  "xAxis": "day",
  "data": [
    {"day": "0",   "zscore": 0.2,  "entry_hi": 2.0, "entry_lo": -2.0, "stop_hi": 3.5, "stop_lo": -3.5},
    {"day": "10",  "zscore": 0.8,  "entry_hi": 2.0, "entry_lo": -2.0, "stop_hi": 3.5, "stop_lo": -3.5},
    {"day": "20",  "zscore": 1.7,  "entry_hi": 2.0, "entry_lo": -2.0, "stop_hi": 3.5, "stop_lo": -3.5},
    {"day": "30",  "zscore": 2.3,  "entry_hi": 2.0, "entry_lo": -2.0, "stop_hi": 3.5, "stop_lo": -3.5},
    {"day": "40",  "zscore": 1.9,  "entry_hi": 2.0, "entry_lo": -2.0, "stop_hi": 3.5, "stop_lo": -3.5},
    {"day": "50",  "zscore": 1.1,  "entry_hi": 2.0, "entry_lo": -2.0, "stop_hi": 3.5, "stop_lo": -3.5},
    {"day": "60",  "zscore": 0.3,  "entry_hi": 2.0, "entry_lo": -2.0, "stop_hi": 3.5, "stop_lo": -3.5},
    {"day": "70",  "zscore": -0.4, "entry_hi": 2.0, "entry_lo": -2.0, "stop_hi": 3.5, "stop_lo": -3.5},
    {"day": "80",  "zscore": -1.5, "entry_hi": 2.0, "entry_lo": -2.0, "stop_hi": 3.5, "stop_lo": -3.5},
    {"day": "90",  "zscore": -2.4, "entry_hi": 2.0, "entry_lo": -2.0, "stop_hi": 3.5, "stop_lo": -3.5},
    {"day": "100", "zscore": -2.1, "entry_hi": 2.0, "entry_lo": -2.0, "stop_hi": 3.5, "stop_lo": -3.5},
    {"day": "110", "zscore": -1.2, "entry_hi": 2.0, "entry_lo": -2.0, "stop_hi": 3.5, "stop_lo": -3.5},
    {"day": "120", "zscore": -0.2, "entry_hi": 2.0, "entry_lo": -2.0, "stop_hi": 3.5, "stop_lo": -3.5},
    {"day": "130", "zscore": 0.5,  "entry_hi": 2.0, "entry_lo": -2.0, "stop_hi": 3.5, "stop_lo": -3.5},
    {"day": "140", "zscore": 0.1,  "entry_hi": 2.0, "entry_lo": -2.0, "stop_hi": 3.5, "stop_lo": -3.5}
  ],
  "lines": [
    {"dataKey": "zscore",   "stroke": "#3b82f6", "name": "Spread z-score"},
    {"dataKey": "entry_hi", "stroke": "#10b981", "name": "Entry +2σ"},
    {"dataKey": "entry_lo", "stroke": "#10b981", "name": "Entry −2σ"},
    {"dataKey": "stop_hi",  "stroke": "#ef4444", "name": "Stop-loss +3.5σ"},
    {"dataKey": "stop_lo",  "stroke": "#ef4444", "name": "Stop-loss −3.5σ"}
  ]
}
```

## Background and History

Pairs trading was pioneered at Morgan Stanley in the mid-1980s by Nunzio Tartaglia's quantitative group, who exploited statistical relationships between stocks to generate market-neutral returns. It became the prototypical statistical arbitrage strategy and spawned the entire field of quantitative equity market-neutral investing.

The formal theoretical foundation was laid by Engle and Granger (1987), who developed cointegration theory — the statistical framework for identifying persistent long-run relationships between non-stationary price series. The Johansen (1991) test extended this to multivariate settings, enabling multi-leg statistical arbitrage.

## Cointegration Theory

Two non-stationary I(1) processes $P_t^A$ and $P_t^B$ are **cointegrated** if a linear combination $S_t = P_t^A - \beta P_t^B$ is stationary I(0). Cointegration is stronger than correlation: two assets can be highly correlated but not cointegrated (e.g., two random walks with similar drift), while cointegration implies a genuine long-run equilibrium relationship.

### Engle-Granger Two-Step Test

1. Estimate the cointegrating regression: $\ln P_t^A = \alpha + \beta \ln P_t^B + \epsilon_t$ by OLS.
2. Test the residuals $\hat{\epsilon}_t$ for stationarity using the Augmented Dickey-Fuller (ADF) test. The null hypothesis is non-stationarity (no cointegration).

The critical values for this test differ from standard ADF tables because the residuals are estimated, not directly observed.

### Johansen Test

For $k$ assets, the Johansen test identifies the **cointegration rank** $r$ (number of independent cointegrating vectors). It uses the trace and maximum eigenvalue statistics of a VAR model to test $H_0: \text{rank} \leq r$ against $H_1: \text{rank} > r$. The Johansen test is preferred for multi-leg arbitrage (triplets, quadruples).

## Spread Modeling as OU Process

The spread $S_t = \ln P_t^A - \beta \ln P_t^B$ is modeled as an Ornstein-Uhlenbeck process:

$$
dS_t = \theta(\mu - S_t)\,dt + \sigma\,dW_t
$$

where $\theta$ is the rate of mean reversion. Parameters $\theta, \mu, \sigma$ can be estimated using [[mcmc]] to account for time-varying dynamics. If the spread remains diverged for too long, [[value-at-risk]] (VaR) limits must be enforced to prevent catastrophic losses.

The z-score of the spread provides the entry/exit signal:

$$
z_t = \frac{S_t - \mu}{\sigma_S}, \quad \sigma_S = \frac{\sigma}{\sqrt{2\theta}}
$$

## Entry/Exit Signal Framework

| Condition | Action |
|:---|:---|
| $z_t > +z_{\text{entry}}$ | Short $A$, Long $B$ (spread too high) |
| $z_t < -z_{\text{entry}}$ | Long $A$, Short $B$ (spread too low) |
| $|z_t| < z_{\text{exit}}$ | Close position (mean reversion achieved) |
| $|z_t| > z_{\text{stop}}$ | Stop-loss exit (cointegration breakdown) |

Typical values: $z_{\text{entry}} = 2.0$, $z_{\text{exit}} = 0.5$, $z_{\text{stop}} = 3.5$.

## P&L Attribution

The P&L of a pairs trade opened at $z_{\text{entry}}$ and closed at $z_{\text{exit}}$ is approximately:

$$
\text{P\&L} \approx (z_{\text{entry}} - z_{\text{exit}}) \cdot \sigma_S - \text{Transaction Costs}
$$

The **expected return per trade** must be balanced against:
- **Holding period**: Determined by the OU half-life $t_{1/2} = \ln(2)/\theta$.
- **Win rate**: Fraction of trades that reach $z_{\text{exit}}$ before $z_{\text{stop}}$.
- **Borrow costs**: Shorting the leg requires borrowing stock at a daily cost (hard-to-borrow stocks can make pairs trading unprofitable).

## Python: Full Pairs Trading Backtest Pipeline

```python
import numpy as np
import pandas as pd
from statsmodels.tsa.stattools import coint, adfuller
from statsmodels.regression.linear_model import OLS
from statsmodels.tools import add_constant


def engle_granger_test(price_a, price_b):
    """
    Engle-Granger two-step cointegration test.
    Returns (beta, spread, adf_pvalue, half_life).
    """
    log_a = np.log(price_a)
    log_b = np.log(price_b)

    # Step 1: OLS regression
    X = add_constant(log_b)
    result = OLS(log_a, X).fit()
    alpha, beta = result.params

    # Step 2: ADF test on residuals
    spread = log_a - beta * log_b - alpha
    adf_stat, adf_pvalue, _, _, _, _ = adfuller(spread, maxlags=1)

    # Estimate OU half-life from AR(1) coefficient
    spread_lag = spread[:-1]
    spread_diff = np.diff(spread)
    X_ar = add_constant(spread_lag)
    ar_result = OLS(spread_diff, X_ar).fit()
    phi = ar_result.params[1]  # AR coefficient on lagged spread
    half_life = -np.log(2) / phi if phi < 0 else np.inf

    return beta, spread, adf_pvalue, half_life


def compute_zscore(spread, window=None):
    """
    Compute z-score. If window is None, use full-sample mean/std.
    If window is given, use rolling statistics.
    """
    if window is None:
        return (spread - spread.mean()) / spread.std()
    rolling_mean = pd.Series(spread).rolling(window).mean()
    rolling_std = pd.Series(spread).rolling(window).std()
    return (spread - rolling_mean) / rolling_std


def backtest_pairs(price_a, price_b, entry_z=2.0, exit_z=0.5, stop_z=3.5,
                   tc_bps=5, window=None):
    """
    Full pairs trading backtest.
    Returns trades DataFrame and summary statistics.
    """
    beta, spread, pval, hl = engle_granger_test(price_a, price_b)
    zscore = compute_zscore(np.array(spread), window=window)

    position = 0  # +1: long spread, -1: short spread
    entry_price = 0.0
    trades = []
    pnl_series = []

    for i in range(len(zscore)):
        z = zscore[i]
        if np.isnan(z):
            pnl_series.append(0.0)
            continue

        daily_pnl = 0.0
        if position != 0:
            daily_pnl = position * (spread[i] - spread[i-1]) if i > 0 else 0.0

        if position == 0:
            if z > entry_z:
                position = -1  # short spread (sell A, buy B)
                entry_price = spread[i]
            elif z < -entry_z:
                position = +1  # long spread (buy A, sell B)
                entry_price = spread[i]
        else:
            # Exit conditions
            if abs(z) < exit_z or abs(z) > stop_z:
                gross_pnl = position * (spread[i] - entry_price)
                net_pnl = gross_pnl - 2 * tc_bps / 10000  # round-trip cost
                trades.append({
                    'entry_z': entry_price, 'exit_z': spread[i],
                    'pnl': net_pnl, 'stop': abs(z) > stop_z
                })
                position = 0

        pnl_series.append(daily_pnl)

    trades_df = pd.DataFrame(trades) if trades else pd.DataFrame()
    pnl_arr = np.array(pnl_series)

    summary = {
        'beta': beta,
        'cointegration_pvalue': pval,
        'half_life_days': hl,
        'n_trades': len(trades_df),
        'win_rate': (trades_df['pnl'] > 0).mean() if len(trades_df) > 0 else 0,
        'avg_pnl': trades_df['pnl'].mean() if len(trades_df) > 0 else 0,
        'stop_rate': (trades_df['stop']).mean() if len(trades_df) > 0 else 0,
        'sharpe': pnl_arr.mean() / (pnl_arr.std() + 1e-9) * np.sqrt(252)
    }
    return trades_df, summary


# Synthetic cointegrated pair
np.random.seed(42)
n = 500
common = np.cumsum(np.random.normal(0, 1, n))
price_a = np.exp(common + np.random.normal(0, 0.3, n)) * 100
price_b = np.exp(0.8 * common + np.random.normal(0, 0.3, n)) * 80

trades, summary = backtest_pairs(price_a, price_b)
print("Pairs Trading Backtest Summary:")
for k, v in summary.items():
    print(f"  {k}: {v:.4f}" if isinstance(v, float) else f"  {k}: {v}")
```

## Key Metrics

- **Hedge Ratio ($\beta$)**: The relative sizing of the long and short legs.
- **Half-Life of Mean Reversion**: $\ln(2) / \theta$, indicating how long a trade is expected to stay open.
- **Z-Score**: Number of standard deviations the current spread is from the mean.
- **Cointegration P-Value**: Statistical confidence that the relationship is not due to random chance.

## Risk: Cointegration Breakdown and Crowding

The primary risk in pairs trading is **cointegration breakdown** — the two assets cease to be cointegrated due to a fundamental change (merger, regulatory change, competitive disruption). In a breakdown scenario:
- The z-score continues widening beyond the stop-loss.
- Losses can be large because both legs move against the trade simultaneously.

**Crowding risk** is equally important: when many funds run similar pairs, a deleveraging event forces simultaneous unwinding, amplifying the spread divergence and triggering stop-losses en masse. This was a key driver of the "quant quake" of August 2007.

Robustness can be tested using [[monte-carlo-method]] to simulate thousands of "broken cointegration" scenarios.

## Parameter Table

| Parameter | Description | Typical Value |
|:---|:---|:---|
| $\beta$ | Hedge ratio | OLS or Kalman estimate |
| $\theta$ | Mean reversion speed | $0.5 – 5$ per year |
| $z_{\text{entry}}$ | Entry threshold | $2.0$ standard deviations |
| $z_{\text{exit}}$ | Exit threshold | $0.5$ standard deviations |
| $z_{\text{stop}}$ | Stop-loss threshold | $3.5$ standard deviations |
| Window | Rolling estimation window | $60 – 252$ days |

## Limitations and Extensions

- **Non-stationary hedge ratio**: The OLS hedge ratio $\beta$ drifts over time. A **Kalman filter** provides a state-space estimate of time-varying $\beta$, maintaining a more accurate spread model.
- **Multivariate**: Johansen test identifies multiple cointegrating vectors; a basket of $k$ assets can form a stationary linear combination even if no pair is cointegrated.
- **Transaction costs and borrow**: For small-cap pairs, the borrow cost on the short leg can eliminate all alpha. Screening for easy-to-borrow stocks is essential.

## Related Topics
- mean-reversion-strategies
- [[mcmc]]
- [[value-at-risk]]
- [[monte-carlo-method]]
- [[ornstein-uhlenbeck-process]]
- [[particle-filter]]
- [[cointegration]] — formal Engle-Granger and Johansen tests for pair selection

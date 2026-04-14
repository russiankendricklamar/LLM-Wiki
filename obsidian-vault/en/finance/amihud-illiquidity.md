---
title: "Amihud Illiquidity Ratio"
category: "Risk Management"
order: 39
lang: "en"
slug: "amihud-illiquidity"
---
# Amihud Illiquidity Ratio

The **Amihud illiquidity ratio**, introduced by Yakov Amihud in 2002, is a widely used measure for estimating the price impact of trading volume. It captures the relationship between absolute returns and dollar volume, and is the foundation for a broad literature on liquidity risk premia in asset pricing.

## Overview & Background

Measuring liquidity has been a central challenge in asset pricing since the seminal work of Amihud & Mendelson (1986), who showed that bid-ask spreads explain cross-sectional return differences. The challenge is that high-frequency microstructure measures (bid-ask spreads, depth, Kyle's lambda) require tick data not available for long historical studies or emerging markets. Amihud (2002) proposed a low-frequency proxy computable from daily CRSP data: the ratio of absolute return to dollar volume.

The Amihud ratio proved remarkably useful: it is highly correlated with intraday price impact measures, it predicts future expected returns, and it rises sharply during market stress episodes (e.g., 2008, 2020 COVID crash). The ratio underlies much of the academic literature on the **liquidity premium** — the extra return investors demand for holding illiquid assets.

## Mathematical Framework

The Amihud illiquidity ratio $ILLIQ_{i,y}$ for stock $i$ in year $y$ is defined as the daily average of the ratio of absolute return to dollar volume:

$$
ILLIQ_{i,y} = \frac{1}{D_{i,y}} \sum_{t=1}^{D_{i,y}} \frac{|R_{i,t}|}{DVOL_{i,t}}
$$

where:
- $R_{i,t}$ is the return of stock $i$ on day $t$
- $DVOL_{i,t} = \text{Volume}_{i,t} \times P_{i,t}$ is the dollar volume (shares traded times closing price)
- $D_{i,y}$ is the number of valid trading days in year $y$

The unit interpretation: $ILLIQ$ measures percentage price change per dollar of trading volume. A stock with $ILLIQ = 0.001$ moves 0.1% per $100,000 of volume — much more price-sensitive than a stock with $ILLIQ = 0.0001$.

**Market-wide illiquidity** is the equally-weighted average:

$$
ILLIQ_{m,y} = \frac{1}{N_y} \sum_{i=1}^{N_y} ILLIQ_{i,y}
$$

**Price impact for a trade of size $Q$ dollars:**

$$
\Delta P \approx \lambda \cdot Q, \quad \lambda = ILLIQ
$$

This linear approximation connects $ILLIQ$ to Kyle's (1985) $\lambda$ from the market microstructure literature, making it a bridge between high-frequency and low-frequency liquidity concepts.

### Liquidity Risk Factor

The **liquidity innovation** (unexpected change in market liquidity) is used as a priced risk factor:

$$
\Delta ILLIQ_{m,t} = ILLIQ_{m,t} - \mathbb{E}[ILLIQ_{m,t}]
$$

Assets whose returns are positively correlated with $\Delta ILLIQ_m$ (they do poorly when the market becomes illiquid) earn a **liquidity risk premium** in addition to the level premium for being illiquid themselves.

## Key Properties & Assumptions

- **Proportionality to price impact**: Under Kyle (1985) assumptions, $ILLIQ \propto \lambda$ (the price impact coefficient), making it theoretically grounded.
- **Availability**: Computable from daily CRSP/Compustat or Bloomberg data going back decades, unlike microstructure measures that require TAQ-level tick data.
- **Seasonality**: $ILLIQ$ is lower in Q4 for many stocks due to year-end window dressing and higher trading activity. Seasonal adjustment improves comparability.
- **Scale sensitivity**: Absolute dollar volume makes the ratio sensitive to price level and market capitalization. Many researchers scale by the average market price or market cap to make it dimensionless.
- **Positive return-volume correlation**: The measure captures only the magnitude of price response, not its direction relative to the trade. Signed measures (like the Amivest ratio) offer a directional alternative.

## Python Implementation

```python
import pandas as pd
import numpy as np

def amihud_ratio(returns: pd.Series, dollar_volume: pd.Series) -> float:
    """
    Calculate the Amihud illiquidity ratio.

    Parameters
    ----------
    returns      : daily return series (fraction, not percent)
    dollar_volume: daily dollar volume = shares_traded * price

    Returns
    -------
    float: Amihud ILLIQ (units: % price impact per $1 of volume)
    """
    valid = dollar_volume > 0
    return (returns.abs()[valid] / dollar_volume[valid]).mean()

def rolling_amihud(
    returns: pd.Series,
    dollar_volume: pd.Series,
    window: int = 63
) -> pd.Series:
    """
    Rolling Amihud ratio to track liquidity evolution over time.
    window: trading days (63 = ~1 quarter)
    """
    ratio = returns.abs() / dollar_volume.replace(0, np.nan)
    return ratio.rolling(window).mean()

def illiquidity_premium_factor(
    amihud_series: pd.Series,
    market_returns: pd.Series,
    n_quantiles: int = 5
) -> pd.DataFrame:
    """
    Compute average returns per Amihud quintile to estimate the liquidity premium.
    """
    quantile_labels = pd.qcut(amihud_series, q=n_quantiles, labels=False)
    result = market_returns.groupby(quantile_labels).agg(['mean', 'std', 'count'])
    result['sharpe'] = result['mean'] / (result['std'] + 1e-10) * np.sqrt(252)
    return result

def amihud_adjusted(
    returns: pd.Series,
    dollar_volume: pd.Series,
    market_cap: pd.Series
) -> pd.Series:
    """
    Market-cap adjusted Amihud ratio for cross-sectional comparability.
    """
    illiq = returns.abs() / dollar_volume.replace(0, np.nan)
    return illiq * market_cap

# --- Example ---
np.random.seed(42)
n_days = 252
prices = 100 * np.exp(np.cumsum(np.random.normal(0.0003, 0.015, n_days)))
volume = np.random.lognormal(14, 0.5, n_days)
dollar_vol = pd.Series(prices * volume)
returns = pd.Series(np.diff(np.log(prices), prepend=np.log(prices[0])))

illiq = amihud_ratio(returns, dollar_vol)
rolling_illiq = rolling_amihud(returns, dollar_vol, window=21)
```

## Amihud Ratio vs Market Stress

```chart
{
  "type": "line",
  "xAxis": "period",
  "data": [
    {"period": "Normal (2017)", "illiq": 0.12},
    {"period": "Pre-crisis (2007)", "illiq": 0.18},
    {"period": "Crisis peak (2008)", "illiq": 0.87},
    {"period": "Recovery (2010)", "illiq": 0.24},
    {"period": "Low vol (2017)", "illiq": 0.09},
    {"period": "COVID crash (2020)", "illiq": 0.73},
    {"period": "Post-COVID (2021)", "illiq": 0.15}
  ],
  "lines": [
    {"dataKey": "illiq", "stroke": "#ef4444", "name": "Market Avg ILLIQ (×10⁻⁶)"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---:|:---|:---|
| $ILLIQ_{i,y}$ | Amihud ratio | Annual average of $|R_t|/DVOL_t$ | $10^{-8}$ to $10^{-5}$ |
| $DVOL_{i,t}$ | Dollar volume | Shares $\times$ Price per day | $10^4$ to $10^9$ USD |
| $D_{i,y}$ | Trading days | Valid days in the estimation window | 21 to 252 |
| $\lambda$ | Kyle lambda | Price impact per unit of order flow | — |
| $\Delta ILLIQ_m$ | Liquidity innovation | Unexpected market-wide ILLIQ change | — |

## Limitations & Extensions

**Limitations:**
- **Signed vs. unsigned impact**: Amihud uses $|R_t|$ and hence cannot distinguish between buyer-initiated and seller-initiated price impact.
- **Benchmark sensitivity**: The ratio is in units of % per dollar, making cross-stock comparison only meaningful after scaling by market cap or average price.
- **Non-stationarity**: Long-run trends in trading volume (algorithmic trading increased volume dramatically post-2005) create structural breaks in ILLIQ time series.
- **High-frequency noise**: On days with very low volume, $ILLIQ$ can be extreme; filtering days below a minimum volume threshold is necessary.

**Extensions:**
- **Pastor-Stambaugh (2003) liquidity factor**: Uses the signed version of the Amihud measure to construct a traded liquidity factor for asset pricing.
- **Sadka (2006) decomposition**: Separates ILLIQ into permanent (information) and transitory (inventory) components.
- **Intraday aggregation**: Combining Amihud daily estimates with realized spread and Kyle's $\lambda$ from tick data gives a richer picture of liquidity.

## Practical Applications

1. **Liquidity-Adjusted Portfolio Construction**: Systematic strategies overlay Amihud-based liquidity screens to avoid positions too large to exit in a target number of days.
2. **Transaction Cost Estimation**: Amihud ILLIQ is used to estimate slippage in backtests: $\text{impact} \approx ILLIQ \times \text{trade size in dollars}$.
3. **Risk Management**: VaR models augmented with a liquidity horizon (time to liquidate at minimal impact) use ILLIQ to define per-asset horizons.
4. **Academic Factor Research**: The illiquidity premium documented by Amihud (2002) motivates a long-short factor that goes long illiquid small-caps and short liquid large-caps.
5. **Emerging Markets**: ILLIQ is especially useful in EM where bid-ask spread data is often unavailable, providing a computable liquidity benchmark.

## Related Topics
- [[market-impact-scaling]]
- [[optimal-execution]]
- [[volatility-forecasting]]
- [[levy-processes]]
- [[value-at-risk]]

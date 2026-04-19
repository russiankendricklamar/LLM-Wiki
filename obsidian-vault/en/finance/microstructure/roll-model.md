---
slug: "/finance/roll-model"
title: "Roll's Model and Spread Decomposition"
category: "Market Microstructure"
order: 110
lang: "en"
---

# Roll's Model and Spread Decomposition

**Roll's model (1984)** is the foundational microstructure model that estimates the effective bid-ask spread from autocovariance of price changes. It assumes that the observed transaction price deviates from the efficient price due to random order direction.

## Model Structure

Observed transaction price:

$$
S_t = m_t + c \cdot q_t
$$

where $m_t$ is the efficient (mid) price, $c$ is the half-spread, $q_t \in \{-1, +1\}$ is the trade direction indicator.

**First difference**:

$$
\Delta S_t = \Delta m_t + c(q_t - q_{t-1})
$$

Assuming independent $q_t$ and zero drift $\Delta m_t = 0$:

$$
\text{Cov}(\Delta S_t, \Delta S_{t-1}) = -c^2
$$

**Spread estimate**:

$$
\hat{s} = 2c = 2\sqrt{-\text{Cov}(\Delta S_t, \Delta S_{t-1})}
$$

## Glosten-Harris Decomposition

The spread decomposes into:
- **Adverse selection component** ($\lambda$): information costs
- **Order processing component** ($\phi$): fixed costs

$$
s = 2\lambda + 2\phi
$$

## Implementation

```python
import numpy as np
import pandas as pd

def roll_spread(prices: pd.Series) -> float:
    """
    Roll's effective spread estimate.
    Returns 0 if Cov > 0 (noise-dominated regime).
    """
    dp = prices.diff().dropna()
    cov = dp.autocorr(lag=1) * dp.var()
    if cov >= 0:
        return 0.0
    return 2 * np.sqrt(-cov)


def decompose_spread(trades: pd.DataFrame) -> dict:
    """
    Decompose spread into adverse selection and order processing.
    trades: DataFrame with 'price', 'midprice', 'direction' (+1/-1)
    """
    trade_cost = (trades['price'] - trades['midprice']) * trades['direction']
    half_spread = trade_cost.mean()
    future_mid = trades['midprice'].shift(-1)
    price_impact = ((future_mid - trades['midprice']) * trades['direction']).mean()
    order_processing = half_spread - price_impact
    return {
        'half_spread': round(half_spread, 6),
        'adverse_selection': round(price_impact, 6),
        'order_processing': round(order_processing, 6),
        'pct_informed': round(price_impact / half_spread * 100, 1) if half_spread else None
    }


def estimate_roll_by_window(prices: pd.Series, window: int = 20) -> pd.Series:
    """Rolling Roll spread estimate."""
    dp = prices.diff()
    cov = dp.rolling(window).cov(dp.shift(1))
    return cov.clip(upper=0).abs().pow(0.5) * 2


def corwin_schultz_spread(high: pd.Series, low: pd.Series) -> pd.Series:
    """
    Corwin-Schultz (2012) spread: uses High/Low without trade data.
    """
    ln_hl = np.log(high / low)
    beta = ln_hl.rolling(2).apply(lambda x: x[0]**2 + x[1]**2)
    gamma = np.log(pd.concat([high, high.shift(1)], axis=1).max(axis=1) /
                   pd.concat([low, low.shift(1)], axis=1).min(axis=1)) ** 2
    alpha = (np.sqrt(2 * beta) - np.sqrt(beta)) / (3 - 2*np.sqrt(2)) - np.sqrt(gamma / (3 - 2*np.sqrt(2)))
    spread = 2 * (np.exp(alpha) - 1) / (1 + np.exp(alpha))
    return spread.clip(lower=0)
```

## Related Articles

- [[vpin|VPIN]] — probability of informed trading
- [[pin-easley-ohara|PIN (Easley-O'Hara)]] — structural information model
- [[kyle-lambda|Kyle's Lambda]] — price impact model
- [[order-flow-imbalance|OFI and Microprice]] — microstructure signals

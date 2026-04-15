---
title: "Dark Pools and Market Fragmentation"
category: "Market Microstructure"
order: 112
lang: "en"
---

# Dark Pools and Market Fragmentation

**Dark Pools** are trading venues where orders are not published in the order book before execution. They arose as a response to the market impact problem for large institutional orders on lit markets.

## Types of Dark Pools

| Type | Example | Mechanism |
|------|---------|-----------|
| Broker-operated | Goldman Sigma X, MS Pool | Internalization of client orders |
| Exchange-operated | NYSE Dark, BATS Dark | Cross orders without disclosure |
| Independent | Liquidnet, ITG POSIT | Block trading between institutions |
| HFT-protection | IEX | Speed-bump against front-running |

## Market Fragmentation

**Herfindahl-Hirschman Index** on venue volume shares $s_i$:

$$
\text{HHI} = \sum_i s_i^2, \quad \text{Fragmentation} = 1 - \text{HHI}
$$

With equal shares across $N$ venues: $\text{HHI} = 1/N$.

**MiFID II Double Volume Cap (EU)**:
- Max 4% of a stock's volume through any single dark pool per 12 months
- Max 8% through all dark pools combined

## Implementation

```python
import numpy as np
import pandas as pd

def compute_fragmentation(venue_volumes: dict[str, float]) -> dict:
    """Fragmentation indices across trading venues."""
    total = sum(venue_volumes.values())
    shares = {v: vol / total for v, vol in venue_volumes.items()}
    hhi = sum(s**2 for s in shares.values())
    return {
        'hhi': hhi,
        'fragmentation': 1 - hhi,
        'effective_venues': 1 / hhi,
        'shares': shares
    }


def dark_pool_toxicity(executions: pd.DataFrame) -> pd.Series:
    """
    Execution toxicity in a dark pool.
    executions: DataFrame with 'exec_price', 'direction', 'mid_before', 'mid_after'
    """
    df = executions.copy()
    df['half_spread'] = (df['exec_price'] - df['mid_before']).abs()
    df['price_drift'] = (df['mid_after'] - df['mid_before']) * df['direction']
    df['toxicity'] = df['price_drift'] / df['half_spread'].replace(0, np.nan)
    return df['toxicity']


def optimal_routing(order_size: float, venues: list[dict]) -> dict[str, float]:
    """
    Simple smart order routing: allocate proportionally to fill_prob/impact.
    venues: [{'name': str, 'fill_prob': float, 'expected_impact': float}]
    """
    weights_raw = [v['fill_prob'] / (v['expected_impact'] + 1e-8) for v in venues]
    total = sum(weights_raw)
    return {v['name']: order_size * w / total for v, w in zip(venues, weights_raw)}


def double_volume_cap_check(symbol_volumes: pd.DataFrame,
                             single_pool_cap: float = 0.04,
                             total_dark_cap: float = 0.08) -> pd.DataFrame:
    """MiFID II Double Volume Cap compliance check."""
    result = []
    for symbol, grp in symbol_volumes.groupby('symbol'):
        mkt = grp['12m_market_vol'].iloc[0]
        dark_total = grp[grp['dark']]['volume'].sum()
        for _, row in grp[grp['dark']].iterrows():
            single_share = row['volume'] / mkt
            total_share = dark_total / mkt
            result.append({
                'symbol': symbol, 'venue': row['venue'],
                'single_share': single_share, 'total_dark_share': total_share,
                'single_breach': single_share > single_pool_cap,
                'total_breach': total_share > total_dark_cap,
            })
    return pd.DataFrame(result)
```

## Related Articles

- [[vpin|VPIN]] — order flow toxicity
- [[pin-easley-ohara|PIN]] — informed trading model
- [[optimal-execution|Optimal Execution]] — smart order routing
- [[kyle-lambda|Kyle's Lambda]] — price impact

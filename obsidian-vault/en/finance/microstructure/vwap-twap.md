---
slug: "/finance/vwap-twap"
title: "VWAP and TWAP Execution Algorithms"
category: "Microstructure"
order: 101
lang: "en"
---

# VWAP and TWAP Execution Algorithms

**VWAP (Volume-Weighted Average Price)** and **TWAP (Time-Weighted Average Price)** are baseline execution algorithms that slice large orders to minimize market impact. VWAP is the industry benchmark for measuring execution quality.

## TWAP

Distributes volume $Q$ uniformly over $N$ intervals:

$$
q_i = \frac{Q}{N}, \quad i = 1,\ldots,N
$$

Realized TWAP: $\text{TWAP} = \frac{1}{N}\sum_{i=1}^N p_i$

Simple but ignores intraday volume patterns.

## VWAP

**Market VWAP** for the day: $\text{VWAP} = \frac{\sum_i V_i p_i}{\sum_i V_i}$

**Participation algorithm**: trade a fixed fraction $\phi$ of market volume:

$$
q_i = \phi \cdot V_i^{\text{market}}
$$

Volume profile model (U-shaped intraday): $\hat{v}_i = \bar{V} \cdot w_i$, $\sum_i w_i = 1$.

## Implementation

```python
import numpy as np
import pandas as pd
from dataclasses import dataclass, field
from typing import Optional

@dataclass
class ExecutionState:
    filled: float = 0.0
    target: float = 0.0
    avg_price: float = 0.0
    cash_spent: float = 0.0

    def update(self, qty: float, price: float) -> None:
        if qty <= 0:
            return
        self.cash_spent += qty * price
        self.filled += qty
        self.avg_price = self.cash_spent / self.filled


class TWAPSchedule:
    def __init__(self, total_qty: float, n_intervals: int):
        self.slice_qty = total_qty / n_intervals
        self.n = n_intervals

    def get_target(self, interval: int) -> float:
        return self.slice_qty if interval < self.n else 0.0


class VWAPSchedule:
    def __init__(self, total_qty: float, volume_profile: np.ndarray,
                 participation_rate: float = 0.10):
        self.total_qty = total_qty
        self.profile = volume_profile
        self.rate = participation_rate
        self.scheduled = total_qty * volume_profile

    def get_target(self, interval: int, market_volume: Optional[float] = None) -> float:
        if market_volume is not None:
            return min(self.rate * market_volume, self.scheduled[interval] * 1.5)
        return self.scheduled[interval]


def simulate_execution(schedule, price_path: np.ndarray,
                        volume_path: np.ndarray,
                        max_participation: float = 0.25) -> dict:
    """Simulate order execution against price/volume path."""
    state = ExecutionState(target=sum(
        schedule.scheduled if hasattr(schedule, 'scheduled')
        else [schedule.slice_qty] * schedule.n
    ))
    records = []
    for i in range(len(price_path)):
        if isinstance(schedule, VWAPSchedule):
            target = schedule.get_target(i, volume_path[i])
        else:
            target = schedule.get_target(i)
        max_qty = max_participation * volume_path[i]
        qty = max(min(target, max_qty, state.target - state.filled), 0)
        state.update(qty, price_path[i])
        records.append({'interval': i, 'qty': qty,
                         'price': price_path[i], 'filled': state.filled})

    market_vwap = np.sum(price_path * volume_path) / volume_path.sum()
    slippage = (state.avg_price - market_vwap) / market_vwap * 10_000  # bps
    return {
        'avg_price': state.avg_price,
        'market_vwap': market_vwap,
        'slippage_bps': slippage,
        'fill_rate': state.filled / state.target,
        'records': pd.DataFrame(records)
    }


def estimate_volume_profile(trades: pd.DataFrame, n_bins: int = 78) -> np.ndarray:
    """Historical volume profile (78 bins = 5-min bars for 6.5h trading day)."""
    trades = trades.copy()
    trades['bin'] = pd.cut(
        pd.to_datetime(trades['timestamp']).dt.hour * 60 +
        pd.to_datetime(trades['timestamp']).dt.minute,
        bins=n_bins, labels=False
    )
    profile = trades.groupby('bin')['volume'].mean()
    return (profile / profile.sum()).values
```

## Implementation Shortfall

IS minimizes the gap between decision price $p^*$ and execution:

$$
\text{IS} = \sum_i q_i (p_i - p^*) / Q
$$

IS algorithms trade more aggressively early (minimize timing risk).

## Related Articles

- [[kyle-lambda|Kyle's Lambda]] — price impact from volume
- [[order-flow-imbalance|OFI and Microprice]] — microstructure signals
- [[optimal-execution|Almgren-Chriss Optimal Execution]] — cross-impact model
- [[avellaneda-stoikov|Avellaneda-Stoikov]] — optimal market making

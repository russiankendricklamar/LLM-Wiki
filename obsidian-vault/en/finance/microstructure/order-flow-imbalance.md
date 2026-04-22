---
slug: "/finance/order-flow-imbalance"
title: "Order Flow Imbalance and Microprice"
category: "Microstructure"
order: 91
lang: "en"
---

# Order Flow Imbalance and Microprice

**Order Flow Imbalance (OFI)** is an instantaneous measure of the pressure differential between buyers and sellers at the LOB level. **Microprice** is a volume-weighted mid-price that more accurately estimates "fair value" than a simple mid-point. Both are used extensively in short-horizon prediction and market-making.

## Order Flow Imbalance

### LOB-Based Definition

At time $t$ with best bid $b_t$, best ask $a_t$, and corresponding quantities $Q^b_t$, $Q^a_t$:

$$
\text{OFI}_t = \Delta Q^b_t \cdot \mathbb{1}[b_t \geq b_{t-1}] - \Delta Q^a_t \cdot \mathbb{1}[a_t \leq a_{t-1}]
$$

Intuition:
- Bid queue grows (at same or higher price) → buyer pressure → OFI > 0
- Ask queue grows (at same or lower price) → seller pressure → OFI < 0

### Multi-Level OFI

Generalise over the first $k$ LOB levels with decaying weights $w_i$:

$$
\text{OFI}^{(k)}_t = \sum_{i=1}^{k} w_i \left(\Delta Q^b_{i,t} - \Delta Q^a_{i,t}\right)
$$

Cont et al. (2014) showed $R^2 \approx 65\%$ at a 10-second horizon on NYSE equities.

### Predictive Model

$$
\Delta \text{mid}_{t+h} = \alpha + \beta \cdot \text{OFI}_t + \varepsilon_{t+h}
$$

## Microprice

### Motivation

Mid-price $m_t = (b_t + a_t)/2$ ignores size information. Microprice corrects this:

$$
\text{microprice}_t = b_t \cdot \frac{Q^a_t}{Q^b_t + Q^a_t} + a_t \cdot \frac{Q^b_t}{Q^b_t + Q^a_t}
$$

If ask size is thin, microprice shifts toward the bid — the market is pressing down.

### Spread-Normalized Skew

$$
\delta_t = \text{microprice}_t - m_t = \frac{Q^b_t - Q^a_t}{Q^b_t + Q^a_t} \cdot \frac{s_t}{2}
$$

The sign of $\delta_t$ predicts the direction of the next price move.

### Stoikov's Generalised Microprice (2018)

$$
\text{microprice}^* = m_t + \kappa \cdot \text{OFI}_t \cdot s_t
$$

Combines LOB imbalance with signed flow; $\kappa$ is calibrated per instrument.

## Implementation

```python
import numpy as np
import pandas as pd
from dataclasses import dataclass
from typing import Optional

@dataclass
class LOBSnapshot:
    bid_prices:   np.ndarray   # shape (k,), descending
    bid_volumes:  np.ndarray
    ask_prices:   np.ndarray   # shape (k,), ascending
    ask_volumes:  np.ndarray
    timestamp:    float


def microprice(snap: LOBSnapshot) -> float:
    qb, qa = snap.bid_volumes[0], snap.ask_volumes[0]
    pb, pa = snap.bid_prices[0],  snap.ask_prices[0]
    total  = qb + qa
    return pb * (qa / total) + pa * (qb / total)


def ofi(prev: LOBSnapshot, curr: LOBSnapshot, levels: int = 5) -> float:
    imbalance = 0.0
    weights = 1.0 / np.arange(1, levels + 1)

    for i in range(min(levels, len(curr.bid_prices))):
        pb_c, pb_p = curr.bid_prices[i], prev.bid_prices[i]
        pa_c, pa_p = curr.ask_prices[i], prev.ask_prices[i]

        delta_bid = (curr.bid_volumes[i]  if pb_c >= pb_p
                     else -prev.bid_volumes[i])
        delta_ask = (curr.ask_volumes[i]  if pa_c <= pa_p
                     else -prev.ask_volumes[i])
        imbalance += weights[i] * (delta_bid - delta_ask)

    return imbalance


class OFIPredictor:
    """Rolling OLS predictor: ΔP_{t+h} ~ α + β·OFI_t"""
    def __init__(self):
        self.beta: Optional[float] = None
        self.alpha: Optional[float] = None
        self._ofi: list[float] = []
        self._dp:  list[float] = []

    def update(self, ofi_val: float, future_mid_change: float) -> None:
        self._ofi.append(ofi_val)
        self._dp.append(future_mid_change)
        if len(self._ofi) >= 100:
            X = np.array(self._ofi[-500:])
            y = np.array(self._dp[-500:])
            self.beta  = np.cov(X, y)[0, 1] / (np.var(X) + 1e-12)
            self.alpha = np.mean(y) - self.beta * np.mean(X)

    def predict(self, ofi_val: float) -> Optional[float]:
        if self.beta is None:
            return None
        return self.alpha + self.beta * ofi_val
```

## Predictive Performance

| Feature | Horizon | Typical $R^2$ |
|---------|---------|---------------|
| OFI$^{(1)}$ | 10 s | 30–50% |
| OFI$^{(5)}$ | 10 s | 50–70% |
| Microprice deviation | 5 s | 20–40% |
| OFI + microprice | 10 s | 65–80% |

Figures vary substantially across instruments and market conditions.

## Related Articles

- [[kyle-lambda|Kyle's Lambda]] — theory: $\Delta p \approx \lambda \cdot \text{OFI}$
- [[vpin|VPIN]] — volume-synchronised informed-trading metric
- [[lob-prediction|LOB Prediction]] — deep learning on LOB data
- [[avellaneda-stoikov|Avellaneda-Stoikov Model]] — market-making incorporating OFI
- [[hawkes-process|Hawkes Process]] — self-exciting dynamics of order flow

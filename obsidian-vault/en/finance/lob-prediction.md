---
title: "Limit Order Book (LOB) Prediction"
category: "Algorithms and ML"
order: 122
lang: "en"
slug: "lob-prediction"
---
# Limit Order Book (LOB) Prediction

**Limit Order Book (LOB) Prediction** involves forecasting short-term price movements or trade directions using the depth and liquidity information of an order book. Unlike low-frequency strategies that use daily bars, LOB prediction operates at the millisecond or microsecond level, where the micro-structure of the market is most visible.

## Background

The limit order book is the complete record of all outstanding buy (bid) and sell (ask) limit orders at every price level. Modern electronic exchanges publish the top 5–20 levels of the book in real time. This fine-grained liquidity information contains predictive signals about imminent price movements that aggregate price data discards entirely.

Research using the FI-2010 benchmark dataset (five stocks, Helsinki Stock Exchange, 240K events) has shown that deep learning models — particularly DeepLOB (Convolutional + LSTM hybrid) — can predict 10-step-ahead mid-price movements with over 80% directional accuracy, significantly outperforming classical statistical approaches.

## Mathematical Formulation

Let $L_t = \{(P_i^b, V_i^b, P_i^a, V_i^a)\}_{i=1}^n$ be the order book at time $t$ for $n$ levels. The **Order Imbalance** $OI_t$ at the best bid/ask is:

$$
OI_t = \frac{V_1^b - V_1^a}{V_1^b + V_1^a}
$$

The **Mid-price** is:
$$
m_t = \frac{P_1^b + P_1^a}{2}
$$

The **Weighted Mid-price** accounts for the relative depth at the best quotes:

$$
m_t^w = P_1^a \cdot \frac{V_1^b}{V_1^b + V_1^a} + P_1^b \cdot \frac{V_1^a}{V_1^b + V_1^a}
$$

Predicting the price change $\Delta P = P_{t+\tau} - P_t$ is often framed as a three-class classification task: Up ($\Delta P > \epsilon$), Down ($\Delta P < -\epsilon$), Neutral (otherwise). GANs ([[gan]]) can be used to generate synthetic LOB data for training robust models.

## Key Features for LOB Prediction

### Level-1 Features (Best Bid/Ask)
- **Order imbalance $OI_t$**: Single most predictive feature at short horizons
- **Bid-ask spread**: $s_t = P_1^a - P_1^b$; widening spread signals lower liquidity
- **Mid-price return**: $r_t = \ln(m_t / m_{t-1})$

### Multi-Level Features
- **Depth imbalance at level $k$**: $\text{DI}_k = \sum_{i=1}^k V_i^b - \sum_{i=1}^k V_i^a$
- **Price pressure**: Rate of change of best bid/ask levels
- **Queue imbalance**: Whether cancellations or additions dominate at each level

### Derived Features
- **Realized volatility**: $\hat{\sigma}_t^2 = \sum_{i=t-w}^{t} r_i^2$
- **Trade flow imbalance (TFI)**: Volume of buyer-initiated vs. seller-initiated trades over a short window

## Model Architectures

**DeepLOB** encodes the order book snapshot as a $T \times 40$ matrix (T time steps, 40 features from 10 bid/ask levels) through convolutional layers that capture spatial structure, followed by an LSTM for temporal dependencies.

The key architectural insight is that the order book has a **natural 2D structure**: the price dimension (levels) and time dimension, which CNN layers can exploit similarly to image recognition.

## Python: Full LOB Feature Engineering

```python
import numpy as np
import pandas as pd

def calculate_imbalance(bids, asks):
    """
    bids, asks: arrays of (price, volume) for N levels
    """
    bid_vol = sum(v for p, v in bids)
    ask_vol = sum(v for p, v in asks)
    if bid_vol + ask_vol == 0:
        return 0.0
    return (bid_vol - ask_vol) / (bid_vol + ask_vol)


def build_lob_features(snapshots):
    """
    snapshots: list of dicts with 'bids' and 'asks' (each list of (price, vol) tuples)
    Returns DataFrame of features.
    """
    records = []
    for snap in snapshots:
        bids = snap['bids']
        asks = snap['asks']
        best_bid_p, best_bid_v = bids[0]
        best_ask_p, best_ask_v = asks[0]

        mid = (best_bid_p + best_ask_p) / 2.0
        spread = best_ask_p - best_bid_p
        wm = best_ask_p * (best_bid_v / (best_bid_v + best_ask_v)) + \
             best_bid_p * (best_ask_v / (best_bid_v + best_ask_v))
        oi = calculate_imbalance(bids, asks)

        # Multi-level depth imbalance
        depth_imb = {}
        for k in range(1, min(5, len(bids), len(asks)) + 1):
            bv = sum(v for p, v in bids[:k])
            av = sum(v for p, v in asks[:k])
            depth_imb[f'depth_imb_{k}'] = (bv - av) / (bv + av + 1e-9)

        record = {
            'mid': mid,
            'spread': spread,
            'weighted_mid': wm,
            'order_imbalance': oi,
            **depth_imb
        }
        records.append(record)

    return pd.DataFrame(records)


# Dummy LOB data
bids = [(100.1, 100), (100.0, 200), (99.9, 150), (99.8, 300), (99.7, 50)]
asks = [(100.2, 150), (100.3, 300), (100.4, 100), (100.5, 200), (100.6, 80)]

snap = {'bids': bids, 'asks': asks}
features = build_lob_features([snap, snap])
print(features.to_string())
```

## Key Metrics

- **Micro-Price Correlation**: How well the predicted imbalance correlates with future price changes.
- **Precision/Recall**: Performance of the directional classification.
- **F1-Score**: Particularly important as price movements are often imbalanced classes.
- **Latency**: The time taken to infer and execute based on the prediction.

## Parameter Table

| Feature | Description | Predictive Horizon |
|:---|:---|:---|
| $OI_t$ | Best-level order imbalance | 1–10 ticks |
| $\text{DI}_k$ | Multi-level depth imbalance | 5–50 ticks |
| Spread $s_t$ | Bid-ask spread | Regime indicator |
| TFI | Trade flow imbalance | 1–5 minutes |
| Realized vol | Short-term volatility | Risk scaling |

## Limitations and Extensions

- **Non-stationarity**: LOB dynamics change across sessions, stocks, and market regimes. Models trained on one period frequently degrade rapidly.
- **Adverse selection**: High imbalance may attract informed traders, causing the model's own trades to move the market adversely.
- **Colocation dependency**: Microsecond-level signals lose value as latency increases; beyond ~10ms, LOB signals decay significantly.
- **Extensions**: Reinforcement learning agents ([[model-free-rl-factors]]) trained directly on LOB data can learn optimal execution policies in addition to directional signals.

## Financial Context

LOB prediction is the backbone of **Market Making** and **Execution Algorithms** (VWAP/TWAP). By predicting when the price is likely to drop, an execution algo can wait to buy, reducing market impact. For risk management, identifying sudden liquidity droughts (using [[value-at-risk]]) is crucial.

## Related Topics
- [[optimal-execution]]
- [[market-impact-scaling]]
- [[gan]]
- [[value-at-risk]]
- [[model-free-rl-factors]]

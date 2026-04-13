---
title: "Limit Order Book (LOB) Prediction"
category: "Algorithms and ML"
order: 122
lang: "en"
slug: "lob-prediction"
---
# Limit Order Book (LOB) Prediction

**Limit Order Book (LOB) Prediction** involves forecasting short-term price movements or trade directions using the depth and liquidity information of an order book. Unlike low-frequency strategies that use daily bars, LOB prediction operates at the millisecond or microsecond level, where the micro-structure of the market is most visible.

## Practical Implementation Guide

High-frequency datasets like LOBVID or FI-2010 are often used. The implementation usually involves:
1.  **Normalization**: Since the order book contains raw prices and sizes that vary wildly across assets, Z-score normalization or stationary transformations (like log-returns of levels) are essential.
2.  **Feature Extraction**: Common features include:
    *   **Order Imbalance**: The ratio of bid volume to ask volume at various levels.
    *   **Bid-Ask Spread**: The cost of liquidity.
    *   **Price Pressure**: Velocity of change in bid/ask prices.
3.  **Model Selection**: Long Short-Term Memory (LSTM) or Convolutional Neural Networks (CNN) are popular because they capture the temporal dependencies and spatial structure of the order book.

## Mathematical Formulation

Let $L_t = \{(P_i^b, V_i^b, P_i^a, V_i^a)\}_{i=1}^n$ be the order book at time $t$ for $n$ levels. The Order Imbalance $OI_t$ at the best bid/ask is:
$$
OI_t = \frac{V_1^b - V_1^a}{V_1^b + V_1^a}
$$
Predicting the price change $\Delta P = P_{t+\tau} - P_t$ is often framed as a classification task (Up, Down, Neutral). GANs ([[gan]]) can be used to generate synthetic LOB data for training robust models.

## Key Metrics
- **Micro-Price Correlation**: How well the predicted imbalance correlates with future price changes.
- **Precision/Recall**: Performance of the directional classification.
- **F1-Score**: Particularly important as price movements are often imbalanced classes.
- **Latency**: The time taken to infer and execute based on the prediction.

## Python: Simple Order Imbalance Calculation

```python
import numpy as np

def calculate_imbalance(bids, asks):
    """
    bids, asks: arrays of (price, volume) for N levels
    """
    bid_vol = np.sum([v for p, v in bids])
    ask_vol = np.sum([v for p, v in asks])
    imbalance = (bid_vol - ask_vol) / (bid_vol + ask_vol)
    return imbalance

# Dummy LOB data
bids = [(100.1, 100), (100.0, 200)]
asks = [(100.2, 150), (100.3, 300)]

imbalance = calculate_imbalance(bids, asks)
print(f"LOB Imbalance: {imbalance:.4f}")
```

## Financial Context

LOB prediction is the backbone of **Market Making** and **Execution Algorithms** (VWAP/TWAP). By predicting when the price is likely to drop, an execution algo can wait to buy, reducing market impact. For risk management, identifying sudden liquidity droughts (using [[value-at-risk]]) is crucial.

## Related Topics
- [[optimal-execution]]
- [[market-impact-scaling]]
- [[gan]]
- [[value-at-risk]]

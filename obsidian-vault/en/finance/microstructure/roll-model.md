---
title: "The Roll Model"
category: "Microstructure"
order: 15
lang: "en"
slug: "roll-model"
---

# The Roll Model: Estimating the Effective Spread

The Roll Model (1984) is a seminal model in market microstructure that allows researchers to estimate the **effective bid-ask spread** of an asset using only the serial covariance of its price changes. It explains how the discrete "bouncing" of prices between bid and ask levels creates a negative autocorrelation in returns.

## 1. The Bid-Ask Bounce

Imagine an asset with a constant "true" value $V$.
- If a buyer arrives, the price is $V + s/2$ (the Ask).
- If a seller arrives, the price is $V - s/2$ (the Bid).
where $s$ is the spread.

Even if the true value $V$ never moves, the observed price will jump back and forth as buyers and sellers hit the market. This "bounce" creates a noisy, mean-reverting price series.

## 2. The Mathematical Derivation

Richard Roll observed that because of this bounce, price changes $\Delta P_t$ and $\Delta P_{t-1}$ will be **negatively correlated**.
Specifically, he proved that the covariance of successive price changes is linked to the spread $s$:
$$\text{Cov}(\Delta P_t, \Delta P_{t-1}) = -\frac{s^2}{4}$$

From this, the **Roll Estimator** for the spread is:
$$s = 2 \sqrt{-\text{Cov}(\Delta P_t, \Delta P_{t-1})}$$

## 3. Why it Matters

- **Hidden Costs**: The spread you see in the Limit Order Book is the "quoted" spread. The Roll model estimates the **Effective Spread**—the actual cost paid by traders after accounting for the fact that some trades happen inside the spread or through hidden orders.
- **Low-Frequency Data**: The beauty of the Roll model is that it only requires a time series of closing prices. You can estimate the liquidity of a stock from 1950 using only its daily prices, without ever seeing the order book.
- **Liquidity Proxy**: It serves as a fundamental benchmark for more complex liquidity metrics like [[amihud-illiquidity]] or [[vpin]].

## 4. Limitations in Modern Markets

1.  **Zero Covariance**: In modern, highly efficient markets, the covariance can sometimes be positive (due to trending or momentum). In this case, the square root becomes imaginary, and the simple Roll model fails.
2.  **Informed Trading**: Roll assumes price changes are purely mechanical. If an informed trader is moving the "true" value $V$, the relationship between covariance and spread breaks down (see [[glosten-milgrom]]).

## Visualization: The Bouncing Price

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": 1, "price": 100.5, "type": "Ask (Buy)"},
    {"time": 2, "price": 99.5,  "type": "Bid (Sell)"},
    {"time": 3, "price": 100.5, "type": "Ask (Buy)"},
    {"time": 4, "price": 99.5,  "type": "Bid (Sell)"},
    {"time": 5, "price": 99.5,  "type": "Bid (Sell)"}
  ],
  "lines": [
    {"dataKey": "price", "stroke": "#ef4444", "name": "Observed Price"}
  ]
}
```
*Even with a stable fair value of 100, the "bounce" between 99.5 and 100.5 creates a zigzag pattern. The Roll model uses the strength of this zigzag to back out the hidden transaction cost.*

## Related Topics

limit-order-book — the physical source of the bounce  
[[amihud-illiquidity]] — a volume-based alternative  
[[vpin]] — liquidity risk in volume-time
---
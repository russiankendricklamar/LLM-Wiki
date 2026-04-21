---
title: "Volatility Arbitrage and Variance Swaps"
category: "Derivatives"
order: 15
lang: "en"
slug: "volatility-arbitrage"
---

# Volatility Arbitrage and Variance Swaps

Volatility Arbitrage is a trading strategy that seeks to profit from the difference between the **forecasted future volatility** of an asset and the **implied volatility** embedded in its options prices. The most direct tool for this is the **Variance Swap**.

## 1. The Variance Risk Premium (VRP)

Empirically, implied volatility ($\sigma_{imp}$) is usually higher than the subsequently realized volatility ($\sigma_{real}$). This difference is the **Variance Risk Premium**. 
- Investors pay this premium as "insurance" against market crashes.
- Arbitrageurs (or relative value traders) sell this insurance to capture the premium.

## 2. Variance Swaps

A Variance Swap is an over-the-counter derivative where the payoff is based on the difference between realized variance and a fixed **variance strike** $K_{var}$:

$$\text{Payoff} = N \cdot (\sigma_{real}^2 - K_{var})$$

- **No Delta Hedging**: Unlike trading options (where you must constantly rebalance stock to stay market-neutral), a variance swap provides "pure" exposure to volatility with zero delta by construction.
- **Log-Contract Replication**: The fair strike of a variance swap can be replicated by a static portfolio of out-of-the-money options weighted by $1/K^2$. This is the mathematical basis for the **VIX Index**.

## 3. The VIX Index

The VIX (CBOE Volatility Index) is often called the "fear gauge." Mathematically, it is the square root of the fair strike for a 30-day variance swap on the S&P 500.
It is **model-independent**: it doesn't assume Black-Scholes is true; it uses the entire strip of option prices to extract the market's expectation of total variance.

## 4. Trading Strategies

### 1. Volatility Carry
Selling variance swaps (or straddles) and hoping the market stays calm so the realized volatility stays below the strike.

### 2. Dispersion Trading
Trading the volatility of an index against the volatility of its individual components. Since $\text{Var}(\text{Index}) < \sum w_i^2 \text{Var}(\text{Stock}_i)$ due to diversification, traders look for cases where index options are "too expensive" relative to the underlying stocks.

## Visualization: The VIX vs. Realized Vol

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": 1, "vix": 20, "realized": 15},
    {"time": 2, "vix": 22, "realized": 14},
    {"time": 3, "vix": 45, "realized": 55},
    {"time": 4, "vix": 30, "realized": 25},
    {"time": 5, "vix": 25, "realized": 18}
  ],
  "lines": [
    {"dataKey": "vix", "stroke": "#3b82f6", "name": "VIX (Implied)"},
    {"dataKey": "realized", "stroke": "#ef4444", "name": "Realized Volatility"}
  ]
}
```
*Most of the time, the VIX (blue) stays above Realized Vol (red), representing the Variance Risk Premium. During a crash (time=3), realized vol spikes above the VIX, causing losses for volatility sellers.*

## Related Topics

[[volatility-smile]] — why implied vol varies with strike  
[[rough-volatility]] — modern modeling of the realized path  
[[black-scholes]] — the model that variance swaps attempt to simplify
---

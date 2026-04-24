---
title: "Automated Market Makers (AMM)"
category: "DeFi"
order: 1
lang: "en"
slug: "amm-mechanics"
---

# Automated Market Makers (AMM)

In decentralized finance (DeFi), **Automated Market Makers (AMM)** replace the traditional order book with a mathematical formula to facilitate trading. Instead of matching buyers and sellers, users trade against a **Liquidity Pool** of assets.

## The Constant Product Formula (Uniswap V2)

The most famous AMM algorithm is the **Constant Product Market Maker (CPMM)**, popularized by Uniswap:
$$x \cdot y = k$$
where:
- $x$ is the amount of Asset A in the pool.
- $y$ is the amount of Asset B in the pool.
- $k$ is a constant.

When a trader buys Asset A, they add Asset B to the pool and remove Asset A. To keep $k$ constant, the price of Asset A must increase. This creates a deterministic, slippage-based pricing model that requires no human intervention.

## Concentrated Liquidity (Uniswap V3)

Uniswap V3 introduced **Concentrated Liquidity**, allowing Liquidity Providers (LPs) to allocate capital within specific price ranges $[P_{min}, P_{max}]$.
- **Efficiency**: Capital is not wasted on price ranges that the asset never reaches (e.g., Stablecoin pools only provide liquidity around $1.00$).
- **Complexity**: Pricing becomes a piecewise function of "ticks," making it much harder to model but far more capital-efficient than V2.

## Impermanent Loss (IL)

LPs face a unique risk called **Impermanent Loss**. This is the difference between holding assets in a pool versus simply holding them in a wallet.
- If the price of Asset A moves significantly away from the entry price, the pool's rebalancing logic (selling the winner, buying the loser) results in a lower total value than holding.
- IL is "impermanent" only if the price returns to the exact entry level.

## AMM as an Oracle

Because AMM prices reflect the ratio of assets in the pool, they act as **Price Oracles**. However, they are vulnerable to **Oracle Manipulation Attacks** via flash loans, where an attacker temporarily pushes the pool price to exploit other DeFi protocols.

## Visualization: The Bonding Curve

```chart
{
  "type": "line",
  "xAxis": "x_reserve",
  "data": [
    {"x_reserve": 10, "y_reserve": 100},
    {"x_reserve": 20, "y_reserve": 50},
    {"x_reserve": 30, "y_reserve": 33.3},
    {"x_reserve": 50, "y_reserve": 20},
    {"x_reserve": 100,"y_reserve": 10}
  ],
  "lines": [
    {"dataKey": "y_reserve", "stroke": "#3b82f6", "name": "Constant Product Curve (x*y=k)"}
  ]
}
```
*The hyperbola $y = k/x$ ensures that the pool can never be completely drained of an asset, as the price approaches infinity as reserves approach zero.*

## Related Topics

limit-order-book — the traditional alternative  
[[optimal-execution]] — how to trade against AMMs efficiently  
[[smart-order-routing]] — routing between AMMs and Lit exchanges
---

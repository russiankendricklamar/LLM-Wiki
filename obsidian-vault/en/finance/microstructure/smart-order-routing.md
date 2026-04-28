---
title: "Smart Order Routing (SOR)"
category: "Microstructure"
order: 15
lang: "en"
slug: "smart-order-routing"
---

# Smart Order Routing (SOR)

Smart Order Routing (SOR) is an automated process of searching for the best path to execute a trade across multiple venues (exchanges, dark pools, and market makers). The primary goal of SOR is to achieve **Best Execution** by minimizing **slippage**.

## How SOR Works

1. **Liquidity Aggregation:** The system collects order book data from all available venues into a single "virtual order book."
2. **Price & Volume Analysis:** It determines how to split a large order to fill it at the best possible prices, accounting for fees and network latency.
3. **Dynamic Execution:** The order is sliced into "child orders" and dispatched to different venues simultaneously.

## SOR in Traditional Finance (CeFi)
In TradFi, routing often focuses on finding liquidity in **Dark Pools** to avoid signaling large trades to the market, thus preventing predatory front-running.

## SOR in Decentralized Finance (DeFi)
In DeFi (e.g., aggregators like 1inch or CowSwap), SOR solves a more complex optimization problem due to liquidity fragmentation across hundreds of Automated Market Makers (AMMs):
- **Multi-hop Paths:** Instead of a direct swap (e.g., ETH to USDC), SOR might find that routing through ETH → WBTC → DAI → USDC yields a better price.
- **Gas Optimization:** The system must balance price improvement against blockchain transaction costs (gas fees).
- **MEV Protection:** Advanced SORs use private RPC nodes to shield transactions from sandwich attacks and other MEV strategies.

## Related Topics
[[market-microstructure|Market Microstructure]] | [[automated-market-makers|AMM]] | [[slippage|Slippage]]

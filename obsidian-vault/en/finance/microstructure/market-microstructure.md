---
title: "Market Microstructure"
category: "Market Microstructure"
order: 1
lang: "en"
slug: "market-microstructure"
growth: "budding"
---
# Market Microstructure

## Overview

Market microstructure is the study of the process and outcomes of exchanging assets under a specific set of rules. While classical economics often treats markets as "frictionless" points of equilibrium where supply meets demand, microstructure focuses on the "plumbing" of the market: how individual trades occur, how prices are formed in real-time, and how the design of the trading venue (the exchange) affects liquidity and price discovery.

Key questions in microstructure include:
- How does an order to buy $N$ shares at price $P$ affect the future price? ([[market-impact]])
- How do market participants manage the risk of trading against someone with better information? ([[kyle-lambda]], [[pin-easley-ohara]])
- What is the optimal way to provide liquidity while minimizing losses to informed traders? ([[avellaneda-stoikov]])

## Market Participants

1. **Market Makers**: Provide liquidity by posting limit orders on both sides of the book. They earn the [[spread]] but face **inventory risk** (holding a position that moves against them) and **adverse selection risk** (trading against informed agents).
2. **Informed Traders**: Possess private information about the fundamental value of an asset. Their trades push prices toward the "true" value.
3. **Noise Traders (Liquidity Traders)**: Trade for reasons unrelated to fundamental information (e.g., rebalancing, cash needs). They provide the "revenue" for market makers.
4. **Arbitrageurs**: Ensure that prices across different venues or related assets remain consistent.

## The Limit Order Book (LOB)

Modern electronic markets mostly operate via a **Limit Order Book**.
- **Limit Order**: An order to buy/sell at a specified price or better. It provides liquidity to the market.
- **Market Order**: An order to buy/sell immediately at the best available price. It consumes liquidity.

The **Order Flow Imbalance (OFI)** measures the net pressure from limit order updates:
$$ \text{OFI}_t = \Delta V^b_t - \Delta V^a_t $$
where $\Delta V^b$ and $\Delta V^a$ are changes in the volume at the best bid and ask. OFI is a strong short-term predictor of price moves.

## Key Concepts

### Bid-Ask Spread
The difference between the lowest ask and highest bid.
$$ \text{Spread} = P_a - P_b $$
It represents the cost of immediate execution and the compensation for market makers. The **effective spread** accounts for the price at which the trade actually occurs relative to the mid-price.

### Liquidity
The ability to trade large volumes quickly without significantly moving the price. Liquidity has multiple dimensions:
- **Tightness**: Low bid-ask spread.
- **Depth**: Large volume available at or near the best quotes.
- **Resiliency**: How quickly the limit order book recovers after a large trade.

### Adverse Selection
The risk that a market maker fills an order from an informed trader. If the trader knows the price is about to rise, they will buy from the market maker's ask. After the trade, the price rises, and the market maker has lost the opportunity to sell at the new, higher price.

### Market Impact
The correlation between an incoming order and the subsequent price change.
- **Temporary Impact**: Price move that reverts as liquidity returns.
- **Permanent Impact**: Price move that reflects new information incorporated into the price.
Modern models often use a **square-root law** for impact: $\Delta P \propto \sigma \sqrt{\frac{Q}{V}}$, where $Q$ is order size and $V$ is daily volume.

## Mathematical Models

### Kyle's Model (1985)
A strategic model of informed trading. An informed trader, noise traders, and a competitive market maker interact. Kyle derives **Kyle's Lambda** ($\lambda$), which measures price impact:
$$ P = P_{t-1} + \lambda (x + u) $$
where $x$ is informed trade and $u$ is noise trade. $\lambda$ represents the "depth" of the market; higher $\lambda$ means lower liquidity.

### Glosten-Milgrom Model (1985)
A model where the spread arises purely as a defense against adverse selection. The market maker sets quotes such that the expected profit is zero, given the probability that the counterparty is informed.

### Avellaneda-Stoikov (2008)
A high-frequency trading model for optimal quoting. The market maker solves a stochastic control problem to maximize utility, balancing spread capture against inventory risk.

## Microstructure and AI

Artificial intelligence has revolutionized microstructure analysis:
- **Deep LOB**: Using CNNs and LSTMs to predict price moves directly from the limit order book state ([[deep-lob]]).
- **Reinforcement Learning**: Training agents for [[optimal-execution]] and [[ai-market-making]].
- **Generative Models**: Using GANs or VAEs to simulate realistic synthetic order books for backtesting ([[generative-scenario-models]]).

## Related Topics
- [[spread]] — the cost of immediacy
- [[market-impact]] — how trades move prices
- [[order-flow-imbalance]] — measuring net order pressure
- [[kyle-lambda]] — measuring informed trading impact
- [[avellaneda-stoikov]] — optimal quoting for market makers
- [[optimal-execution]] — how to trade large blocks efficiently
- [[deep-lob]] — neural networks for order book modeling
- [[hawkes-process]] — modeling self-exciting order arrivals

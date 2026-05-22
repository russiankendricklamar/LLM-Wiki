---
title: "Bid-Ask Spread"
category: "Market Microstructure"
order: 2
lang: "en"
slug: "spread"
growth: "budding"
---
# Bid-Ask Spread

## Overview

The bid-ask spread is the difference between the highest price that a buyer is willing to pay for an asset (the **bid**) and the lowest price that a seller is willing to accept (the **ask** or **offer**). It is a fundamental measure of market liquidity and transaction costs.

$$ \text{Spread} = P_{\text{ask}} - P_{\text{bid}} $$

In the context of [[market-microstructure]], the spread represents the "tax" paid by liquidity consumers to liquidity providers (market makers).

## Components of the Spread

Why does a spread exist? Economists identify three primary costs that market makers must cover:

1.  **Order Processing Costs**: The physical and operational costs of maintaining an exchange presence, clearing, and settlement.
2.  **Inventory Risk**: The cost of holding an asset while waiting for a counterparty. If the price moves against the market maker's position, they lose money.
3.  **Adverse Selection Costs**: The risk of trading with an informed agent. The market maker loses to someone who knows the price is about to move. See [[kyle-lambda]] and [[glosten-milgrom]].

## Metrics

### Absolute Spread
The raw difference in currency units: $P_a - P_b$.

### Relative (Percentage) Spread
The spread as a fraction of the mid-price, useful for comparing across different assets:
$$ \text{Relative Spread} = \frac{P_{\text{ask}} - P_{\text{bid}}}{P_{\text{mid}}} $$
where $P_{\text{mid}} = (P_{\text{ask}} + P_{\text{bid}}) / 2$.

### Effective Spread
Twice the absolute distance between the actual trade price $P_{\text{trade}}$ and the mid-price:
$$ \text{Effective Spread} = 2 |P_{\text{trade}} - P_{\text{mid}}| $$
It measures what the trader actually paid, which may be different from the quoted spread if they executed inside the quotes or suffered slippage.

## Determinants of Spread

- **Trading Volume**: High volume usually leads to tighter spreads due to lower inventory risk and higher competition among market makers.
- **Volatility**: High volatility increases inventory risk, leading market makers to widen spreads for protection.
- **Market Cap**: Large-cap stocks tend to have narrower spreads than small-cap stocks.
- **Information Asymmetry**: Higher likelihood of informed trading leads to wider spreads (adverse selection).

## Spread in Different Markets

- **Equities**: Usually quoted in cents. Large-cap stocks often trade at a "one-tick" spread.
- **Forex**: Quoted in "pips" (percentage in point). Major pairs like EUR/USD have extremely tight spreads.
- **Crypto**: Can vary wildly between centralized exchanges and decentralized protocols like Uniswap.

## Related Topics
- [[market-microstructure]] — the broader context of asset exchange
- [[market-impact]] — how trades move the mid-price
- [[kyle-lambda]] — measuring the cost of informed trading
- [[glosten-milgrom]] — a model of spread as adverse selection defense
- [[avellaneda-stoikov]] — optimal spread setting for market makers

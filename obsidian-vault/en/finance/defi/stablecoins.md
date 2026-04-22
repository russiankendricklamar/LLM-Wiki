---
title: "Stablecoin Mechanisms"
category: "DeFi"
order: 20
lang: "en"
slug: "stablecoin-mechanisms"
---

# Stablecoin Mechanisms: The Infrastructure of Value

Stablecoins are the "killer app" of crypto-finance, providing a stable unit of account (usually the US Dollar) on volatile blockchain rails. However, maintaining a fixed price (a "peg") requires sophisticated mathematical and economic engineering. There are three primary architectures for stability.

## 1. Fiat-Collateralized (Off-chain)
*Examples: USDT (Tether), USDC (Circle).*
- **Mechanism**: For every digital token issued, $1.00 is held in a physical bank account or in short-term US Treasuries.
- **Stability**: Highly stable, provided the custodian is honest and the reserves are audited (see [[asset-tokenization|RWA]]).
- **Risk**: Centralization. Regulators can freeze addresses, and the bank holding the reserves can fail.

## 2. Crypto-Collateralized (On-chain Overcollateralization)
*Examples: DAI (MakerDAO), LUSD (Liquity).*
- **Mechanism**: Users lock up crypto (e.g., ETH) in a smart contract to mint stablecoins. To prevent the peg from breaking when ETH drops, the loan must be **Overcollateralized** (e.g., $150 of ETH for $100 of DAI).
- **Stability Logic (CDP)**: If the collateral value falls below a threshold, the position is automatically **Liquidated** at a discount, ensuring the stablecoins are always backed by sufficient assets.
- **PSM (Peg Stability Module)**: MakerDAO uses a PSM to allow 1-to-1 swaps between DAI and USDC, effectively "importing" the stability of fiat-backed coins during market stress.

## 3. Algorithmic and Delta-Neutral
*Examples: Ethena (USDe), Frax (Hybrid), Terra (Legacy/Failed).*
- **Delta-Neutral (Ethena)**: This is the "Citadel approach" to stablecoins. The protocol holds ETH and simultaneously opens an equal-sized **Short Perpetual position**. 
  - If ETH rises, the spot goes up, but the short loses.
  - If ETH falls, the spot loses, but the short gains.
  - The total value remains constant at $1.00 regardless of price moves, while collecting "Funding Rates" from the short position.
- **Seigniorage (Terra/UST)**: Relied on a twin-token system ($UST$ and $LUNA$). If $UST$ dropped, it was burned to mint $LUNA$. 
  - **The Death Spiral**: During a massive crash, the inflation of $LUNA$ became infinite, leading to a total collapse of the peg.

## 4. The Stability Trilemma

Stablecoin designers face a three-way trade-off:
1.  **Stability**: How well it holds the $1.00 level.
2.  **Decentralization**: Independence from banks and regulators.
3.  **Capital Efficiency**: How much collateral is needed to mint $1 of value (USDT is 1:1, DAI is 1.5:1).

## Visualization: Collateral vs. Stability

```chart
{
  "type": "bar",
  "xAxis": "type",
  "data": [
    {"type": "Fiat (USDC)", "stability": 100, "capital_efficiency": 100, "decentralization": 10},
    {"type": "Crypto (DAI)", "stability": 95,  "capital_efficiency": 66,  "decentralization": 80},
    {"type": "Algo (USDe)", "stability": 90,  "capital_efficiency": 100, "decentralization": 50}
  ],
  "lines": [
    {"dataKey": "stability", "stroke": "#10b981", "name": "Stability Score"}
  ]
}
```

## Related Topics

[[amm-mechanics]] — how stablecoins are traded and pegged  
[[cedefi-mechanics]] — institutional use of USDC/USDT  
[[risk-management]] — evaluating the "Death Spiral" risk
---

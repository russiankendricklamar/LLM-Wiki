---
title: "Lending and Money Market Mechanics"
category: "DeFi"
order: 12
lang: "en"
slug: "lending-mechanics"
---

# Lending and Money Market Mechanics: The Aave Model

Money markets are the primary engines of liquidity in DeFi. Protocols like **Aave** and **Compound** function as decentralized "pawn shops" where users can lend assets to earn interest or borrow assets by providing collateral. For a CeDeFi project, understanding the mathematical relationship between utilization and interest rates is critical.

## 1. The Liquidity Pool Model

Unlike traditional peer-to-peer lending, DeFi uses **Peer-to-Pool** lending.
- **Lenders**: Deposit assets into a shared pool and receive interest-bearing tokens (e.g., aUSDC).
- **Borrowers**: Draw from this pool. They don't need a counterparty; the pool is the counterparty.

## 2. Interest Rate Models (The Utilization Curve)

How is the interest rate determined? Most protocols use a **Utilization-based Model**.
Let $U$ be the **Utilization Rate**:
$$U = \frac{\text{Total Borrows}}{\text{Total Deposits}}$$

The Borrow Rate ($R_t$) is a function of $U$. Protocols usually use a **Kinked Interest Rate Curve**:
- **Before the Kink ($U < U_{optimal}$)**: Interest rates grow slowly to encourage borrowing.
- **After the Kink ($U > U_{optimal}$)**: Interest rates spike sharply to discourage borrowing and incentivize lenders to deposit more or borrowers to repay, protecting the pool's liquidity.

$$R_t = R_0 + \frac{U}{U_{opt}} R_{slope1} \quad (\text{if } U < U_{opt})$$
$$R_t = R_0 + R_{slope1} + \frac{U - U_{opt}}{1 - U_{opt}} R_{slope2} \quad (\text{if } U > U_{opt})$$

## 3. Risk Management: LTV and Health Factor

To prevent bad debt, loans must be overcollateralized.
- **LTV (Loan-to-Value)**: The maximum percentage of collateral value that can be borrowed (e.g., 80%).
- **Liquidation Threshold**: The point at which a loan is considered undercollateralized (e.g., 85%).
- **Health Factor ($H_f$)**: A single number representing the safety of a position:
  $$H_f = \frac{\sum (\text{Collateral}_i \times \text{Liquidation Threshold}_i)}{\text{Total Borrows}}$$
  If $H_f < 1$, the position is eligible for **Liquidation**.

## 4. The Liquidation Process

In DeFi, liquidations are performed by third-party "bots" (Liquidators).
1.  The liquidator repays a portion of the borrower's debt.
2.  In exchange, the liquidator receives the borrower's collateral at a **Liquidation Bonus** (discount), usually 5-10%.
3.  This ensures the protocol stays solvent even during market crashes.

## 5. Implementation for CeDeFi

When building a CeDeFi project, you must decide:
- **Rate Parameters**: How aggressive is your "Kink"? For RWA assets with stable values, you can allow higher $U_{opt}$ (e.g., 90%). For volatile crypto, keep it lower.
- **Reserve Factor**: A percentage of interest paid by borrowers that is kept by the protocol as a "safety fund" for insurance.

## Visualization: The Kinked Rate Curve

```chart
{
  "type": "line",
  "xAxis": "utilization",
  "data": [
    {"utilization": 0,  "rate": 2},
    {"utilization": 20, "rate": 3},
    {"utilization": 40, "rate": 4},
    {"utilization": 80, "rate": 6, "label": "Kink (U_opt)"},
    {"utilization": 90, "rate": 25},
    {"utilization": 100,"rate": 50}
  ],
  "lines": [
    {"dataKey": "rate", "stroke": "#ef4444", "name": "Borrow Interest Rate (%)"}
  ]
}
```
*Note the explosion in interest rates once utilization crosses 80%. This "wall" is what guarantees that there is always liquidity available for lenders to withdraw.*

## Related Topics

[[stablecoin-mechanisms]] — using CDP models for stability  
[[onchain-credit]] — differences between pool-based and tranche-based credit  
[[risk-management]] — modeling liquidation cascades
---

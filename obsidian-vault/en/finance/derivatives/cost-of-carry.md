---
slug: "cost-of-carry"
title: "Cost of Carry"
category: "Pricing"
order: 156
lang: "en"
---
# Cost of Carry

The **cost of carry** model determines the theoretical forward price of an asset by accounting for all costs and benefits of holding the physical asset versus holding the forward contract. It is the foundational relationship linking spot and forward markets, and its violations define the very concept of **arbitrage** in commodity and financial markets.

## The General Formula

The forward price $F$ for delivery at time $T$ is:

$$
F = S\,e^{(r - q + u - y)\,T}
$$

where:

| Symbol | Term | Description |
|:-------|:-----|:-----------|
| $S$ | Spot price | Current market price |
| $r$ | Risk-free rate | Financing cost of holding the asset |
| $q$ | Dividend/income yield | Income earned by holding the asset |
| $u$ | Storage cost | Physical storage, insurance (commodities) |
| $y$ | Convenience yield | Benefit of holding physical (commodities) |

The net cost of carry is $b = r - q + u - y$. When $b > 0$, carrying the asset is costly (contango); when $b < 0$, holding physical is advantageous (backwardation).

## Financial Assets

For financial assets (no storage, no convenience yield), the formula simplifies.

**Non-dividend-paying stock**: $F = Se^{rT}$

**Stock with continuous dividend yield $q$**: $F = Se^{(r-q)T}$

**Stock with discrete dividends** $D_i$ at times $t_i$:

$$
F = \left(S - \sum_i D_i\,e^{-rt_i}\right)e^{rT}
$$

**Currency (covered interest rate parity)**: $F = Se^{(r_d - r_f)T}$ where $r_d$ is the domestic rate and $r_f$ the foreign rate. This is the basis of [[swaps]] pricing for FX forwards.

**Stock index futures**: $F = Se^{(r-q)T}$ where $q$ is the aggregate dividend yield. The difference $F - Se^{rT}$ is the **fair value** that index arbitrageurs monitor.

## Commodity Markets

Commodities introduce storage costs $u$ and convenience yield $y$:

$$
F = Se^{(r + u - y)T}
$$

The **convenience yield** $y$ represents the non-monetary benefit of holding physical inventory: the ability to meet unexpected demand, avoid production shutdowns, or exploit temporary shortages. It is not directly observable — it is inferred from the spot-forward relationship.

### Contango and Backwardation

**Contango** ($F > S$): storage and financing costs exceed convenience yield. The forward curve slopes upward. Common in: gold, base metals in surplus, oil during inventory builds.

**Backwardation** ($F < S$): high convenience yield from scarcity. The forward curve slopes downward. Common in: crude oil during supply disruptions, agricultural commodities near harvest uncertainty.

The **basis** is defined as:

$$
\text{Basis} = S - F
$$

It converges to zero at expiry by definition ($F(T,T) = S_T$). Basis risk arises from unpredictable basis movements when using futures for hedging.

## Cash-and-Carry Arbitrage

If $F > Se^{(r-q+u-y)T}$ (forward is overpriced):

1. Borrow $S$ at rate $r$.
2. Buy the spot asset.
3. Pay storage $u$, receive dividends $q$.
4. Sell the forward at $F$.
5. At $T$: deliver asset, receive $F$, repay $Se^{(r-q+u)T}$.

Profit: $F - Se^{(r-q+u-y)T} > 0$ (adjusting for convenience yield received by holding physical).

**Reverse cash-and-carry** if $F < Se^{(r-q+u-y)T}$:

1. Short-sell the asset (receive $S$).
2. Invest proceeds at $r$.
3. Buy the forward at $F$.
4. At $T$: receive asset from forward, close short.

This only works if short-selling is feasible — a key limitation for physical commodities.

## Index Arbitrage

For stock index futures, the fair value is $F^* = Se^{(r-q)T}$. When $F > F^*$ (futures rich):

- Buy the index basket, sell futures.
- Lock in the mispricing minus transaction costs.

When $F < F^*$ (futures cheap):

- Short the index basket, buy futures.

The no-arbitrage band is $F^* \pm \text{transaction costs}$. High-frequency index arb firms continuously monitor this spread.

## Futures vs Forwards: Convexity Adjustment

Futures are marked-to-market daily; forwards settle only at $T$. When interest rates are stochastic and correlated with the asset price, the daily margining creates a **convexity bias**:

$$
F_{\text{futures}} \approx F_{\text{forward}}\,e^{\rho_{S,r}\,\sigma_S\,\sigma_r\,T^2 / 2}
$$

For interest rate futures (e.g., Eurodollar/SOFR futures), this convexity adjustment is material and must be included when building yield curves. See [[swaps]] and [[caps-floors-swaptions]].

## When Cost of Carry Breaks Down

The model assumes:
- **No short-selling constraints**: for physical commodities, short-selling may be impossible, so reverse cash-and-carry arbitrage cannot be executed, allowing $F < Se^{(r+u)T}$.
- **Storable asset**: perishable goods (electricity, fresh produce) cannot be stored, so the spot-forward link weakens dramatically.
- **No counterparty risk**: forward contracts carry credit risk; this introduces a wedge (see [[xva]]).
- **Sufficient liquidity**: illiquid spot or forward markets widen the arbitrage band.

## Forward Curves and Term Structure

The forward curve $F(T)$ as a function of maturity encodes the market's view on supply/demand balance:

$$
F(T) = S\,e^{(r(T) - q(T) + u(T) - y(T))\,T}
$$

where all parameters may be term-structure dependent. Commodity traders analyse the shape of the forward curve to infer storage economics and seasonal patterns.

## Python Implementation

```python
import numpy as np

def forward_price(S: float, r: float, T: float, q: float = 0.0,
                  u: float = 0.0, y: float = 0.0) -> float:
    """Cost-of-carry forward price."""
    return S * np.exp((r - q + u - y) * T)

def implied_convenience_yield(S: float, F: float, r: float, T: float,
                               q: float = 0.0, u: float = 0.0) -> float:
    """Infer convenience yield from observed spot and forward."""
    return r - q + u - np.log(F / S) / T

def basis(S: float, F: float) -> float:
    return S - F

# Examples
F_stock = forward_price(S=100, r=0.05, T=0.5, q=0.02)    # Stock index
F_gold  = forward_price(S=1900, r=0.05, T=1.0, u=0.005)  # Gold (storage)
F_oil   = forward_price(S=80, r=0.05, T=0.25, u=0.02, y=0.08)  # Oil (backwardation)

y_implied = implied_convenience_yield(S=80, F=78, r=0.05, T=0.25, u=0.02)
```

## Cost of Carry Components

```chart
{
  "type": "bar",
  "xAxis": "asset",
  "data": [
    {"asset": "Stock Index", "financing": 5.0, "dividends": -2.0, "storage": 0.0, "convenience": 0.0},
    {"asset": "Gold", "financing": 5.0, "dividends": 0.0, "storage": 0.5, "convenience": 0.0},
    {"asset": "Oil (Contango)", "financing": 5.0, "dividends": 0.0, "storage": 2.0, "convenience": -3.0},
    {"asset": "Oil (Backwd)", "financing": 5.0, "dividends": 0.0, "storage": 2.0, "convenience": -10.0}
  ],
  "lines": [
    {"dataKey": "financing", "stroke": "#3b82f6", "name": "Financing (r)"},
    {"dataKey": "dividends", "stroke": "#10b981", "name": "Dividends (-q)"},
    {"dataKey": "storage", "stroke": "#f59e0b", "name": "Storage (u)"},
    {"dataKey": "convenience", "stroke": "#ef4444", "name": "Convenience (-y)"}
  ]
}
```

## Applications

1. **Index futures fair value**: $F^* = Se^{(r-q)T}$ is the benchmark for program trading and index arbitrage.
2. **Commodity forward curves**: the cost-of-carry model structures the entire term structure of commodity prices.
3. **FX forwards**: covered interest rate parity $F = Se^{(r_d - r_f)T}$ is the basis of currency hedging and [[swaps]].
4. **Equity financing**: the cost of carry determines the fair level of equity total return swaps and repo rates.
5. **Options pricing**: the forward price $F$ enters [[blacks-model]] directly, separating the carry from the optionality.

## Related Topics
- [[blacks-model]]
- [[swaps]]
- [[risk-neutral-valuation]]
- [[caps-floors-swaptions]]
- [[xva]]
- [[arbitrage-definition]]

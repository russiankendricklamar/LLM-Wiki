---
title: "Futures Hedging"
category: "Risk Management"
order: 81
lang: "en"
---
# Futures Hedging

**Futures hedging** uses standardised exchange-traded futures contracts to reduce or eliminate price risk in an underlying position. The technique is central to risk management for corporates, commodity producers, portfolio managers, and fixed-income desks.

## Basis and Basis Risk

The **basis** is defined as:

$$
b_t = S_t - F_t
$$

where $S_t$ is the spot price and $F_t$ is the futures price. At expiry, convergence forces $b_T \to 0$. Before expiry, the basis fluctuates due to cost of carry, convenience yield, and supply-demand factors.

**Basis risk** arises because the hedge is imperfect: the change in spot and futures prices are not perfectly correlated. Even a fully hedged position has residual P&L equal to the change in basis:

$$
\text{Hedged P\&L} = \Delta S - h \cdot \Delta F = \Delta b + (1 - h)\Delta F
$$

where $h$ is the hedge ratio. Basis risk is irreducible when the hedged asset and the futures contract differ (cross-hedging).

## Minimum Variance Hedge Ratio

The optimal hedge ratio $h^*$ minimises the variance of the hedged position. From the regression $\Delta S = \alpha + h^* \Delta F + \varepsilon$:

$$
h^* = \rho \cdot \frac{\sigma_S}{\sigma_F}
$$

where $\rho$ is the correlation between spot and futures price changes, $\sigma_S$ and $\sigma_F$ are their standard deviations. When $\rho = 1$ and $\sigma_S = \sigma_F$, we recover $h^* = 1$ (perfect hedge). In practice, $h^*$ is estimated from historical data using OLS regression.

The residual variance of the hedged position is:

$$
\text{Var}(\Delta S - h^* \Delta F) = \sigma_S^2(1 - \rho^2)
$$

The hedge effectiveness is $R^2 = \rho^2$, equal to the coefficient of determination from the regression.

## Optimal Number of Contracts

Given a position of $Q_A$ units of the asset to hedge, with futures contract size $Q_F$:

$$
N^* = h^* \cdot \frac{Q_A}{Q_F}
$$

For example, hedging 1,000,000 barrels of jet fuel with WTI crude futures (1,000 bbl per contract) and $h^* = 0.78$: $N^* = 0.78 \times 1{,}000{,}000 / 1{,}000 = 780$ contracts.

## Cross-Hedging

When no futures contract exists on the exact asset, a correlated substitute is used. Examples:
- Jet fuel hedged with crude oil or heating oil futures
- Corporate bond portfolio hedged with Treasury futures
- Individual stock hedged with index futures

Cross-hedging introduces additional basis risk because $\rho < 1$. The minimum variance hedge ratio compensates by adjusting the number of contracts, but the residual variance $\sigma_S^2(1-\rho^2)$ is always positive.

## Tailing the Hedge

Futures are marked-to-market daily, while forward contracts settle at maturity. The daily margining creates a timing mismatch for the present value of gains and losses. The **tailed hedge** adjusts:

$$
N_{\text{tailed}} = N^* \cdot e^{-r(T-t)} \approx N^* \cdot \frac{1}{1 + r(T-t)}
$$

For short-dated hedges or low rates, the tail adjustment is small. For long-dated hedges, ignoring it introduces systematic drift.

## Stack and Roll

Long-dated exposures are hedged with short-dated futures rolled forward at expiry. The strategy **stacks** the entire notional in the near contract and **rolls** before expiry by closing and re-establishing in the next contract.

**Rollover P&L**:

$$
\text{Roll cost} = F_{\text{near}} - F_{\text{next}}
$$

In contango ($F_{\text{next}} > F_{\text{near}}$), rolling is costly. In backwardation, the roll generates profit.

The **Metallgesellschaft case** (1993) is the canonical cautionary tale: MG AG sold long-term fixed-price oil forwards and hedged with short-dated futures. When oil prices dropped, the stack-and-roll hedge generated massive margin calls (mark-to-market losses on futures) while the offsetting gains on the forward contracts were unrealised. Liquidity pressure forced unwinding at enormous losses.

## Equity Portfolio Hedging

### Beta Hedging

To change a portfolio's beta from $\beta$ to $\beta^*$ using index futures with beta $\approx 1$:

$$
N = (\beta^* - \beta) \cdot \frac{V_P}{F \cdot Q_F}
$$

where $V_P$ is the portfolio value. Setting $\beta^* = 0$ creates a market-neutral position; setting $\beta^* > \beta$ levers up exposure. See [[value-at-risk]] for the risk implications.

### Portfolio Insurance

Protective put strategy replicated with futures: continuously adjust the futures hedge ratio to mimic a put's delta. This is dynamic delta hedging of a synthetic put — the cost is the implicit option premium paid through transaction costs and tracking error.

## Duration-Based Hedging

For interest rate futures (Treasury bonds, Eurodollars), the hedge ratio is based on dollar duration (see [[dv01]]):

$$
N = \frac{\text{DV01}_{\text{portfolio}}}{\text{DV01}_{\text{futures}}}
$$

This ensures that for a parallel shift in the yield curve, the gains on the futures offset the losses on the portfolio (and vice versa). For non-parallel shifts, additional instruments are needed (key rate durations).

## Hedge Effectiveness Chart

```chart
{
  "type": "line",
  "xAxis": "correlation",
  "data": [
    {"correlation": "0.50", "variance_reduction": 25},
    {"correlation": "0.60", "variance_reduction": 36},
    {"correlation": "0.70", "variance_reduction": 49},
    {"correlation": "0.80", "variance_reduction": 64},
    {"correlation": "0.90", "variance_reduction": 81},
    {"correlation": "0.95", "variance_reduction": 90},
    {"correlation": "1.00", "variance_reduction": 100}
  ],
  "lines": [
    {"dataKey": "variance_reduction", "stroke": "#6366f1", "name": "Variance Reduction (%)"}
  ]
}
```

## Practical Applications

1. **Airline fuel hedging**: Airlines hedge jet fuel with crude or heating oil futures using cross-hedge ratios; Southwest Airlines' aggressive hedging programme was famously profitable in the 2000s.
2. **Agricultural hedging**: Farmers sell grain futures pre-harvest to lock in prices; basis risk between local elevator prices and exchange delivery points must be managed.
3. **Equity portfolio insurance**: Fund managers short index futures to reduce beta during turbulent periods without liquidating positions.
4. **Interest rate hedging**: Banks hedge fixed-income portfolios using Treasury futures, matching DV01 exposures (see [[swaps]] for swap-based hedging).

## Related Topics
- [[value-at-risk]]
- [[dv01]]
- [[swaps]]
- [[optimal-execution]]
- [[geometric-brownian-motion]]

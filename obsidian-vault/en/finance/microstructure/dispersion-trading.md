---
slug: "/finance/dispersion-trading"
title: "Dispersion Trading"
category: "Risk Management"
order: 76
lang: "en"
---
# Dispersion Trading

**Dispersion trading** is a volatility arbitrage strategy that trades the spread between implied correlation and realized correlation. The canonical trade sells variance on an equity index and buys variance on the index constituents, profiting when realized correlation is lower than the level implied by the market. Because markets systematically overprice index volatility relative to component volatilities — the **correlation risk premium** — dispersion strategies have historically earned positive carry, making them a staple of sell-side volatility desks and systematic vol funds.

## Prerequisites

[[black-scholes]], [[variance-swaps]], [[value-at-risk]], [[copula-models]]

## Implied Correlation

For an index composed of $n$ stocks with weights $w_i$, the index variance satisfies:

$$
\sigma_{\text{idx}}^2 = \sum_{i=1}^n w_i^2 \sigma_i^2 + 2\sum_{i<j} w_i w_j \rho_{ij} \sigma_i \sigma_j
$$

Under a simplifying assumption of uniform pairwise correlation $\bar\rho$, this becomes:

$$
\sigma_{\text{idx}}^2 = \bar\rho \left(\sum_i w_i \sigma_i\right)^2 + (1 - \bar\rho) \sum_i w_i^2 \sigma_i^2
$$

Solving for **implied correlation** from market-observed implied vols:

$$
\bar\rho_{\text{impl}} = \frac{\sigma_{\text{idx,impl}}^2 - \sum_i w_i^2 \sigma_{i,\text{impl}}^2}{\left(\sum_i w_i \sigma_{i,\text{impl}}\right)^2 - \sum_i w_i^2 \sigma_{i,\text{impl}}^2}
$$

Empirically $\bar\rho_{\text{impl}}$ is persistently higher than subsequent realized correlation, giving rise to a positive correlation risk premium.

## The Dispersion Trade

The core position: **short index variance, long single-stock variance**. Using [[variance-swaps]] as building blocks:

- Sell notional $N_{\text{idx}}$ of index variance swap at strike $K_{\text{idx}}^2$
- Buy notional $N_i$ of single-stock variance swaps at strikes $K_i^2$

### P&L Decomposition

At expiry, the P&L (in variance terms) is:

$$
\text{P\&L} = N_{\text{idx}} \left(K_{\text{idx}}^2 - \sigma_{\text{idx,realized}}^2\right) - \sum_i N_i \left(K_i^2 - \sigma_{i,\text{realized}}^2\right)
$$

Substituting the correlation decomposition:

$$
\text{P\&L} \approx \sum_{i<j} w_i w_j \sigma_{i,r} \sigma_{j,r} \left(\bar\rho_{\text{impl}} - \rho_{ij,\text{realized}}\right) \cdot N_{\text{idx}}
$$

The trade profits when realized pairwise correlations $\rho_{ij,\text{realized}}$ are lower than the implied correlation $\bar\rho_{\text{impl}}$.

## Vega-Weighting

To isolate correlation exposure and neutralize directional vega, the single-stock notionals are set proportionally:

$$
N_i = w_i \cdot \frac{\sigma_{i,\text{impl}}}{\sigma_{\text{idx,impl}}} \cdot N_{\text{idx}}
$$

This ensures that a parallel shift in all implied vols has zero first-order P&L impact; the residual exposure is purely to correlation.

## Correlation Risk Premium

The correlation risk premium is defined as:

$$
\text{CRP} = \bar\rho_{\text{impl}} - \bar\rho_{\text{realized}}
$$

Empirical studies on S&P 500 find CRP averaging 10--20 correlation points. The economic rationale: investors use index options as portfolio hedges, bidding up index vol and therefore implied correlation. The premium compensates dispersion sellers for bearing **left-tail correlation risk** — during market crashes, correlations spike toward 1, and the short index variance leg suffers.

## Execution Methods

| Method | Pros | Cons |
|:-------|:-----|:-----|
| Variance swaps | Pure variance exposure, clean P&L | Liquidity limited to large caps |
| Straddles / strangles | Liquid on single stocks | Gamma/theta path-dependence |
| Options strips | Flexible strike selection | Requires delta-hedging |
| Corridor variance swaps | Limits tail risk | Less liquid |

## Risk Management

Key risks for dispersion books:

1. **Correlation spike risk**: In a sell-off, realized correlation surges; the short index var leg losses dominate.
2. **Gap risk**: Overnight jumps (earnings, macro events) cause realized vol to exceed implied on single names.
3. **Cross-gamma**: Delta hedging across many names introduces cross-gamma and pin risk near expiry.
4. **Basis risk**: Index variance swap settlement uses realized variance of the index, not a weighted sum of component variances.

Dispersion desks typically manage exposure using correlation Greeks:

$$
\frac{\partial V}{\partial \rho_{ij}} = w_i w_j \sigma_i \sigma_j \cdot \text{Vega}_{\text{idx}} \cdot \frac{\partial \sigma_{\text{idx}}}{\partial \rho_{ij}}
$$

## Dispersion P&L Profile

```chart
{
  "type": "line",
  "xAxis": "realized_corr",
  "data": [
    {"realized_corr": "0.10", "pnl": 8.5},
    {"realized_corr": "0.20", "pnl": 6.2},
    {"realized_corr": "0.30", "pnl": 4.0},
    {"realized_corr": "0.40", "pnl": 1.8},
    {"realized_corr": "0.50", "pnl": -0.5},
    {"realized_corr": "0.60", "pnl": -2.8},
    {"realized_corr": "0.70", "pnl": -5.0},
    {"realized_corr": "0.80", "pnl": -7.3},
    {"realized_corr": "0.90", "pnl": -9.5}
  ],
  "lines": [
    {"dataKey": "pnl", "stroke": "#3b82f6", "name": "Dispersion P&L (bps of notional)"}
  ]
}
```

## Practical Applications

1. **Bank dispersion desks**: Major dealers run systematic dispersion on S&P 500, Euro Stoxx 50, and Nikkei 225, harvesting the correlation risk premium.
2. **Systematic vol strategies**: Hedge funds combine dispersion with cross-sectional momentum on implied--realized vol spreads per name.
3. **Relative value**: Sector vs. index dispersion isolates intra-sector correlation.
4. **Tail hedging**: Buying index variance while selling single-stock variance provides convex payoff in crashes (reverse dispersion).

## Related Topics
- [[variance-swaps]]
- [[value-at-risk]]
- [[copula-models]]
- [[heston-model]]
- [[sabr-model]]

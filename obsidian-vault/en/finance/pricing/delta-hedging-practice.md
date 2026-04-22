---
slug: "/finance/delta-hedging-practice"
title: "Delta Hedging in Practice"
category: "Pricing"
order: 157
lang: "en"
---
# Delta Hedging in Practice

The [[black-scholes]] framework assumes continuous delta hedging — rebalancing a position of $\Delta = \partial V / \partial S$ shares to perfectly replicate an option. In practice, hedging is discrete, costly, and imperfect. Understanding the sources of hedging error and the tradeoffs between rebalancing frequency, transaction costs, and model risk is essential for every options desk.

## Continuous vs Discrete Hedging

### The Ideal

In the Black-Scholes world, holding $\Delta_t$ shares of stock against one short option yields a riskless portfolio. The hedge is rebalanced continuously, and the total cost of replication equals the option premium.

### Discrete Rebalancing Error

With rebalancing every $\Delta t$, the hedging error at each step is driven by the gamma exposure:

$$
\epsilon_t \approx \frac{1}{2}\,\Gamma_t\,(\Delta S_t)^2 - \frac{1}{2}\,\Gamma_t\, S_t^2\, \sigma^2_{\text{implied}}\, \Delta t
$$

Summing over the life of the option gives the **total P&L of a delta-hedged position**:

$$
\text{P\&L} = \sum_{i=0}^{N-1} \frac{1}{2}\,\Gamma_i\, S_i^2 \left(\left(\frac{\Delta S_i}{S_i}\right)^2 - \sigma^2_{\text{implied}}\, \Delta t\right)
$$

In the continuous limit, this becomes the Carr-Madan integral:

$$
\text{P\&L} = \int_0^T \frac{1}{2}\,\Gamma_t\, S_t^2 \left(\sigma^2_{\text{realized},t} - \sigma^2_{\text{implied}}\right) dt
$$

A delta-hedged option is a bet on realized vs implied variance, weighted by the dollar gamma $\frac{1}{2}\Gamma S^2$.

## Transaction Costs and Leland's Adjustment

### The Cost of Rebalancing

Each rebalance incurs a proportional transaction cost $\kappa$ (bid-ask spread plus commission). The expected cost per step:

$$
\text{Cost per step} \approx \kappa \cdot S_t \cdot |\Delta\Gamma_t \cdot \Delta S_t| \approx \kappa \cdot S_t \cdot |\Gamma_t| \cdot S_t \cdot \sigma \sqrt{\Delta t} \cdot \sqrt{\frac{2}{\pi}}
$$

### Leland (1985) Adjusted Volatility

Leland showed that transaction costs can be absorbed into a modified Black-Scholes equation by replacing the volatility:

$$
\hat{\sigma}^2 = \sigma^2 \left(1 + \kappa\,\sqrt{\frac{2}{\pi}} \cdot \frac{1}{\sigma\sqrt{\Delta t}}\right)
$$

The adjusted volatility $\hat{\sigma} > \sigma$ inflates the option price to account for the expected rebalancing cost. The correction diverges as $\Delta t \to 0$, reflecting the impossibility of continuous hedging under transaction costs.

### Whalley-Wilmott Hedging Bandwidth

Rather than hedging at fixed intervals, Whalley and Wilmott (1997) derived an optimal **no-transaction band** around the Black-Scholes delta. The hedge is only adjusted when the actual delta deviates from the target by more than:

$$
H^* = \left(\frac{3\kappa\, e^{-rT}\, \Gamma^2 \, S^2 \,\sigma^2}{2\lambda}\right)^{1/3}
$$

where $\lambda$ is the risk-aversion parameter of the hedger. Inside the band, no action is taken, minimizing turnover while controlling risk.

## Hedging Frequency Optimization

The hedger faces a tradeoff:

| Hedge more frequently | Hedge less frequently |
|:---------------------|:---------------------|
| Lower hedging error (variance) | Lower transaction costs |
| Higher transaction costs | Higher hedging error |
| Better gamma risk control | More exposure to gap moves |

The optimal frequency depends on the ratio of transaction costs to gamma risk. For a vega-flat book, the expected total cost (hedging error + transaction costs) is minimized at:

$$
\Delta t^* \propto \left(\frac{\kappa}{\Gamma \, S \, \sigma}\right)^{2/3}
$$

## Gamma Scalping

**Gamma scalping** is the strategy of buying options (long gamma) and delta-hedging to capture realized volatility exceeding implied. The P&L at each rebalance:

$$
\text{Scalp P\&L}_i = \frac{1}{2}\,\Gamma_i\, S_i^2 \left(\left(\frac{\Delta S_i}{S_i}\right)^2 - \sigma^2_{\text{implied}} \cdot \Delta t\right)
$$

Long gamma positions profit from large moves (in either direction) and suffer from time decay ($\Theta$). The breakeven daily move is:

$$
|\Delta S|_{\text{BE}} = S \cdot \sigma_{\text{implied}} \cdot \sqrt{\Delta t}
$$

## Practical Challenges

### Pin Risk Near Expiry

As expiry approaches, $\Gamma$ for ATM options spikes toward infinity, making delta highly unstable. A small move in the underlying can flip delta from 0 to 1. Hedging near-expiry ATM options requires careful position management and often manual intervention.

### Gap Risk

Overnight gaps, earnings announcements, and macro events produce discontinuous price jumps that cannot be hedged by delta alone. The gap P&L:

$$
\text{Gap P\&L} \approx \frac{1}{2}\,\Gamma\, (\Delta S_{\text{gap}})^2 - \Theta \cdot \Delta t
$$

Only long gamma positions benefit from gaps; short gamma suffers.

### Model Risk

Delta depends on the model used. Black-Scholes delta differs from local vol delta, stochastic vol delta, and market-implied delta. Model misspecification creates systematic hedging bias.

## Vega Hedging and Greeks-Neutral Portfolios

Delta hedging removes first-order directional risk but leaves higher-order Greeks:

- **Vega risk** ($\partial V / \partial \sigma$): requires an offsetting option position
- **Gamma risk**: requires options at the same strike/maturity
- **Vanna** ($\partial^2 V / \partial S \partial \sigma$) and **volga** ($\partial^2 V / \partial \sigma^2$): second-order cross-risks

A **Greeks-neutral portfolio** satisfies:

$$
\sum_i w_i \Delta_i = 0, \quad \sum_i w_i \Gamma_i = 0, \quad \sum_i w_i \mathcal{V}_i = 0
$$

This requires at least three instruments (underlying + two options) to zero out delta, gamma, and vega simultaneously.

## Python Implementation

```python
import numpy as np
from scipy.stats import norm

def bs_greeks(S, K, T, r, sigma, option_type='call'):
    """Black-Scholes delta and gamma."""
    d1 = (np.log(S / K) + (r + 0.5 * sigma**2) * T) / (sigma * np.sqrt(T))
    gamma = norm.pdf(d1) / (S * sigma * np.sqrt(T))
    delta = norm.cdf(d1) if option_type == 'call' else norm.cdf(d1) - 1
    return {'delta': delta, 'gamma': gamma}

def delta_hedge_pnl(
    prices: np.ndarray, K: float, T: float, r: float,
    sigma_impl: float, dt: float, kappa: float = 0.0
) -> dict:
    """Simulate delta-hedged P&L with transaction costs."""
    n = len(prices) - 1
    pnl = 0.0
    cost = 0.0
    prev_delta = 0.0

    for i in range(n):
        S = prices[i]
        tau = T - i * dt
        if tau <= 0:
            break
        g = bs_greeks(S, K, tau, r, sigma_impl)
        delta, gamma = g['delta'], g['gamma']

        # Rebalancing cost
        trade_size = abs(delta - prev_delta)
        cost += kappa * S * trade_size

        # Gamma scalp P&L
        dS = prices[i + 1] - prices[i]
        pnl += 0.5 * gamma * dS**2 - 0.5 * gamma * S**2 * sigma_impl**2 * dt
        prev_delta = delta

    return {'gross_pnl': pnl, 'transaction_cost': cost, 'net_pnl': pnl - cost}

def leland_adjusted_vol(sigma: float, kappa: float, dt: float) -> float:
    """Leland (1985) transaction-cost adjusted volatility."""
    return sigma * np.sqrt(1 + kappa * np.sqrt(2 / np.pi) / (sigma * np.sqrt(dt)))
```

## Hedging Error vs Rebalancing Frequency

```chart
{
  "type": "line",
  "xAxis": "rebalance_freq",
  "data": [
    {"rebalance_freq": "1/day", "hedge_error": 2.8, "txn_cost": 0.3, "total": 3.1},
    {"rebalance_freq": "2/day", "hedge_error": 2.0, "txn_cost": 0.5, "total": 2.5},
    {"rebalance_freq": "4/day", "hedge_error": 1.4, "txn_cost": 0.9, "total": 2.3},
    {"rebalance_freq": "8/day", "hedge_error": 1.0, "txn_cost": 1.5, "total": 2.5},
    {"rebalance_freq": "16/day", "hedge_error": 0.7, "txn_cost": 2.8, "total": 3.5},
    {"rebalance_freq": "32/day", "hedge_error": 0.5, "txn_cost": 5.2, "total": 5.7}
  ],
  "lines": [
    {"dataKey": "hedge_error", "stroke": "#ef4444", "name": "Hedging Error (%)"},
    {"dataKey": "txn_cost", "stroke": "#f59e0b", "name": "Transaction Cost (%)"},
    {"dataKey": "total", "stroke": "#3b82f6", "name": "Total Cost (%)"}
  ]
}
```

## Related Topics
- [[black-scholes]]
- [[greeks-options]]
- [[variance-swaps-vix]]
- [[volatility-surface]]
- [[option-strategies]]
- [[heston-model]]

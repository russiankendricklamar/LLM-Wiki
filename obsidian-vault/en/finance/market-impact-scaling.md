---
title: "Capacity & Market Impact Scaling"
category: "Risk Management"
order: 44
lang: "en"
---
# Capacity & Market Impact Scaling Laws

**Strategy Capacity** is the maximum amount of capital that can be deployed in a trading strategy before its alpha is eroded by market impact. Understanding the **Scaling Laws** of impact is critical for scaling hedge funds and proprietary trading desks.

## Background and Motivation

Market impact — the adverse price movement caused by one's own trading — is the primary constraint on strategy scalability. A high-frequency strategy generating 5% annual alpha may yield no net return once transaction costs and market impact are accounted for at scale. The relationship between trade size and market impact is empirically well-established: it follows a concave power law, most famously the **square-root law**, first documented systematically by Torre and Ferrari (1997) and later popularized by Almgren et al. (2005).

Understanding these scaling laws enables fund managers to make informed decisions about fund capacity, to price their own execution costs, and to construct realistic backtests that account for impact rather than assuming frictionless trading.

## Market Impact Scaling

The cost of trading $Q$ shares relative to the Average Daily Volume ($ADV$) follows a square-root law (often called the **Square Root Law of Impact**):

$$
I(Q) = Y \cdot \sigma \cdot \sqrt{\frac{Q}{ADV}}
$$

Where:
- $Y$ is a constant (typically around 0.1 to 1.0).
- $\sigma$ is the daily volatility of the asset.
- $Q/ADV$ is the participation rate.

The square-root scaling arises from the interplay of order flow, market depth, and price discovery. At low participation rates, impact is approximately linear; at high rates, the concavity reflects the increasing marginal cost of absorbing large orders.

## Mathematical Framework

### Permanent vs. Temporary Impact

In the Almgren-Chriss framework (see [[optimal-execution]]), impact decomposes into:

$$
\text{Total Cost} = \underbrace{\eta \sum_k n_k^2}_{\text{Temporary}} + \underbrace{\frac{\gamma}{2} X^2}_{\text{Permanent}}
$$

Where $n_k = \Delta x_k / \tau$ is the trading rate at step $k$, $\eta$ is the temporary impact coefficient, $\gamma$ is the permanent impact coefficient, and $X$ is the total shares to trade.

### Power-Law Generalization

The Gatheral (2010) "no-dynamic-arbitrage" framework generalizes to:

$$
I(v) = \int_0^\infty G(t) f(v(t))\, dt
$$

Where $v(t)$ is the trading rate at time $t$, $f$ is a concave impact function (typically $f(v) = c \cdot v^\delta$ with $\delta \approx 0.5$), and $G(t)$ is a decay kernel describing how impact fades after the trade.

### Strategy Capacity Formula

The capacity $C^*$ is the AUM level at which marginal alpha equals marginal impact cost:

$$
\alpha \cdot \text{TO} = Y \sigma \sqrt{\frac{\text{TO} \cdot C^*}{ADV \cdot P}}
$$

Solving for $C^*$:

$$
C^* = \frac{\alpha^2}{\text{TO}} \cdot \frac{ADV \cdot P}{Y^2 \sigma^2}
$$

Where $\text{TO}$ is the daily portfolio turnover rate and $P$ is the average stock price.

## Capacity Estimation

The capacity of a strategy can be estimated by finding the capital level where the expected alpha equals the execution cost:

$$
\text{Alpha} \cdot \text{Turnover} \cdot \text{Capital} = \text{Cost}(Q)
$$

As capital increases, $Q$ increases, and because impact is non-linear, costs eventually grow faster than profits.

## Python: Full Capacity Frontier

```python
import numpy as np
import matplotlib

def estimate_cost(capital, turnover, adv, sigma, y=0.5):
    """
    Estimate annualized market impact cost in basis points.

    capital: Total AUM in dollars
    turnover: Fraction of AUM traded daily
    adv: Average Daily Volume in dollars
    sigma: Daily volatility (decimal)
    y: Impact coefficient
    """
    trade_size = capital * turnover
    participation = trade_size / adv
    impact_bps = y * sigma * np.sqrt(participation) * 10000
    return impact_bps


def strategy_capacity(alpha_bps, turnover, adv, sigma, y=0.5):
    """
    Compute strategy capacity: AUM where impact cost equals alpha.

    alpha_bps: Annual alpha in basis points
    turnover: Fraction of AUM traded daily (e.g., 0.1 = 10% daily)
    adv: Average Daily Volume in dollars
    sigma: Daily volatility
    y: Impact coefficient
    Returns capacity in dollars.
    """
    # At capacity: alpha = y * sigma * sqrt(turnover * C / adv) * 10000
    # Solve for C:
    alpha_dec = alpha_bps / 10000.0
    capacity = (alpha_dec / (y * sigma))**2 * adv / turnover
    return capacity


def alpha_after_impact(aum_range, alpha_bps, turnover, adv, sigma, y=0.5):
    """Return net alpha (bps) after market impact for a range of AUM values."""
    costs = np.array([estimate_cost(c, turnover, adv, sigma, y) for c in aum_range])
    net = alpha_bps - costs
    return net


# Scenario: 50 bps annual alpha, 10% daily turnover, $500M ADV stock, 2% daily vol
alpha = 50          # bps annual alpha
turnover = 0.10     # 10% of AUM per day
adv = 500_000_000   # $500M average daily volume
sigma = 0.02        # 2% daily volatility

cap = strategy_capacity(alpha, turnover, adv, sigma)
print(f"Strategy capacity: ${cap/1e6:.1f}M")

# Show impact at various AUM levels
aum_levels = [10e6, 50e6, 100e6, 250e6, 500e6, 1e9]
print("\nAUM       | Impact (bps) | Net Alpha (bps)")
print("-" * 50)
for aum in aum_levels:
    impact = estimate_cost(aum, turnover, adv, sigma)
    net = alpha - impact
    print(f"${aum/1e6:6.0f}M  | {impact:8.1f}     | {net:8.1f}")
```

## Alpha Erosion Chart

```chart
{
  "type": "line",
  "xAxis": "aum_m",
  "data": [
    {"aum_m": "10", "alpha": 50, "impact": 3, "net": 47},
    {"aum_m": "50", "alpha": 50, "impact": 7, "net": 43},
    {"aum_m": "100", "alpha": 50, "impact": 10, "net": 40},
    {"aum_m": "250", "alpha": 50, "impact": 16, "net": 34},
    {"aum_m": "500", "alpha": 50, "impact": 22, "net": 28},
    {"aum_m": "1000", "alpha": 50, "impact": 32, "net": 18},
    {"aum_m": "2000", "alpha": 50, "impact": 45, "net": 5}
  ],
  "lines": [
    {"dataKey": "alpha", "stroke": "#10b981", "name": "Gross Alpha (bps)"},
    {"dataKey": "impact", "stroke": "#ef4444", "name": "Impact Cost (bps)"},
    {"dataKey": "net", "stroke": "#3b82f6", "name": "Net Alpha (bps)"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---|:---|:---|
| $Y$ | Impact coefficient | Proportionality constant | $0.1 – 1.0$ |
| $\sigma$ | Daily volatility | Asset return standard deviation | $0.5\% – 3\%$ |
| $Q/ADV$ | Participation rate | Fraction of daily volume traded | $0.1\% – 10\%$ |
| $\delta$ | Impact exponent | Power law exponent | $0.4 – 0.6$ |
| $\eta$ | Temporary impact | Instantaneous price impact | Asset-specific |
| $\gamma$ | Permanent impact | Lasting information signal | Asset-specific |

## Financial Application

1. **Fund Sizing**: Determining when a fund should be "closed" to new investors to prevent performance dilution.
2. **Strategy Selection**: Prioritizing high-capacity strategies (e.g., Global Macro) over high-alpha but low-capacity ones (e.g., micro-cap StatArb).
3. **Execution Optimization**: Spreading orders over multiple days to stay within the "linear" region of the impact curve.
4. **Backtest Correction**: Adjusting historical Sharpe ratios for impact costs at target AUM — a strategy with backtest Sharpe of 2.0 may have live Sharpe of 0.5 at scale.

## Limitations and Extensions

- **Non-stationarity of ADV**: Average daily volume changes over time (earnings, index reconstitution). Using trailing 20-day ADV rather than a fixed estimate is more robust.
- **Cross-impact**: In a multi-asset portfolio, trading one asset impacts the price of correlated assets. The cross-impact matrix can increase effective costs by 20–40% for concentrated factor exposures.
- **Intraday volume profile**: The U-shaped intraday volume curve means participation rate and hence impact varies significantly by time of day. VWAP scheduling exploits this.
- **Regime dependence**: Impact is higher in stressed markets (lower liquidity). The square-root law coefficient $Y$ rises during volatility regimes.

## Related Topics
- [[optimal-execution]]
- [[avellaneda-stoikov]]
- [[lob-prediction]]
- [[monte-carlo-method]]

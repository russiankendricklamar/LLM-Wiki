---
title: "Cross-Impact & Optimal Execution"
category: "Algorithms and ML"
order: 102
lang: "en"
---
# Cross-Impact & Optimal Execution (Almgren-Chriss)

**Optimal Execution** is the process of completing a large trade order while minimizing the total cost, which consists of permanent market impact, temporary market impact, and timing risk. The **Almgren-Chriss** model is the industry standard for determining the optimal trajectory of trades.

## Background and Motivation

A large institutional investor wishing to buy $X$ shares faces a fundamental trade-off: trading quickly minimizes timing risk (adverse price movement while the order is open) but maximizes market impact; trading slowly minimizes impact but maximizes exposure to the asset's volatility. Almgren and Chriss (2001) formalized this trade-off in a mean-variance framework, deriving an elegant closed-form solution for the optimal execution trajectory.

The model has been widely adopted in algorithmic trading and is the basis for VWAP/TWAP algorithms used by every major broker. Understanding it is essential for any practitioner building execution algorithms, estimating transaction costs, or computing the "liquidation value" of a portfolio under stress.

## The Almgren-Chriss Framework

The model minimizes the expected cost $E[X]$ and the variance of the cost $V[X]$ (risk), where the utility function is $U = E[X] + \lambda V[X]$.

### Market Impact Decomposition

**Permanent impact** shifts the fundamental price permanently (information leakage signal):
$$
g(v) = \gamma v \quad \text{(linear permanent impact)}
$$

**Temporary impact** represents the instantaneous price concession from demanding liquidity:
$$
h(v) = \eta v \quad \text{(linear temporary impact)}
$$

where $v = n_k / \tau$ is the trading rate (shares per unit time).

### Price Dynamics

$$
\tilde{P}_k = P_{k-1} - g(n_k/\tau) \cdot \tau + \sigma\sqrt{\tau}\,\epsilon_k - h(n_k/\tau)
$$

Where:
- $P_{k-1} - g(n_k/\tau)\tau$: price after permanent impact
- $\sigma\sqrt{\tau}\,\epsilon_k$: Brownian price shock
- $h(n_k/\tau)$: temporary impact reducing execution price

### Cost and Risk

The expected implementation shortfall (cost vs. arrival price) is:

$$
E[X] = \sum_{k=1}^N \tilde{P}_k \cdot n_k \approx \frac{1}{2}\gamma X^2 + \eta \sum_{k=1}^N \frac{n_k^2}{\tau}
$$

The variance of execution cost is:

$$
V[X] = \sigma^2 \tau \sum_{k=1}^N x_k^2
$$

where $x_k = X - \sum_{j=1}^{k-1} n_j$ is the remaining inventory after step $k$.

## Optimal Liquidation Trajectory

The optimal holdings $x_j$ at each step form a hyperbolic function of time:

$$
x_j = \frac{\sinh(\kappa (T - t_j))}{\sinh(\kappa T)} \cdot X
$$

Where the urgency parameter is:
$$
\kappa = \sqrt{\frac{\tilde{\lambda}\sigma^2}{\eta}}
$$

with $\tilde{\lambda} = \lambda - \frac{\gamma}{2}$ the adjusted risk-aversion.

### Special Cases

- **Risk-neutral** ($\lambda = 0$): $\kappa \to 0$ and $x_j \to X(1 - t_j/T)$ — **linear TWAP** execution.
- **Highly risk-averse** ($\lambda \to \infty$): $\kappa \to \infty$ and $x_j \to X$ for all $j < T$ — trade everything immediately.

## Implementation Shortfall and VWAP

**Implementation shortfall** (IS) measures total trading cost relative to the decision price:

$$
\text{IS} = (P_{\text{arrival}} - \bar{P}_{\text{executed}}) \cdot X
$$

**VWAP participation**: the Almgren-Chriss trajectory generalizes VWAP by allowing the participation schedule $v(t)$ to be time-varying. If market volume follows an intraday profile $V(t)$, the optimal strategy participates at rate $v(t) \propto V(t)$ weighted by the urgency $\kappa$.

## Cross-Impact

In multi-asset portfolios, trading one asset affects the price of others. The cross-impact matrix $\Omega$ describes these dependencies:

$$
\Delta \mathbf{P} = \Omega \cdot \text{sign}(\mathbf{v}) \odot |\mathbf{v}|^\delta
$$

For a correlated equity portfolio, $\Omega_{ij}$ is typically proportional to $\rho_{ij}\sigma_i\sigma_j/\sqrt{\text{ADV}_i \cdot \text{ADV}_j}$.

## Python: Optimal Trajectory and Efficient Frontier

```python
import numpy as np


def almgren_chriss_trajectory(X, T, N, kappa):
    """
    Compute optimal liquidation holdings at each step.

    X: Total shares to sell
    T: Total time horizon
    N: Number of trading intervals
    kappa: Urgency parameter sqrt(lambda*sigma^2/eta)
    Returns array of holdings x_j at each time point.
    """
    times = np.linspace(0, T, N + 1)
    holdings = X * np.sinh(kappa * (T - times)) / np.sinh(kappa * T)
    return holdings


def almgren_chriss_cost(X, T, N, sigma, eta, gamma, lam):
    """
    Compute expected cost and variance for the optimal trajectory.

    Returns (expected_cost, variance, kappa).
    """
    lam_tilde = lam - 0.5 * gamma
    if lam_tilde <= 0:
        # Risk-neutral: TWAP
        kappa = 1e-6
    else:
        kappa = np.sqrt(lam_tilde * sigma**2 / eta)

    tau = T / N
    holdings = almgren_chriss_trajectory(X, T, N, kappa)
    trades = -np.diff(holdings)  # n_k = x_{k-1} - x_k

    # Expected cost
    perm_cost = 0.5 * gamma * X**2
    temp_cost = eta * np.sum(trades**2 / tau)
    expected_cost = perm_cost + temp_cost

    # Variance
    variance = sigma**2 * tau * np.sum(holdings[:-1]**2)

    return expected_cost, variance, kappa


def execution_efficient_frontier(X, T, N, sigma, eta, gamma, lambdas):
    """
    Compute the efficient frontier in (variance, expected_cost) space.
    """
    frontier = []
    for lam in lambdas:
        cost, var, kappa = almgren_chriss_cost(X, T, N, sigma, eta, gamma, lam)
        frontier.append({'lambda': lam, 'expected_cost': cost,
                         'variance': var, 'kappa': kappa})
    return frontier


# Parameters: sell 1M shares of a $50 stock
# sigma=2% daily vol, eta=0.1 (temp impact), gamma=0.01 (perm impact)
X_total = 1_000_000
T_hours = 6.5         # one trading day
N_steps = 10          # 10 execution intervals
sigma_daily = 0.02
sigma_hourly = sigma_daily / np.sqrt(6.5)
eta = 0.1e-6          # temporary impact coefficient
gamma = 0.01e-6       # permanent impact coefficient

lambdas = np.logspace(-8, -4, 20)
frontier = execution_efficient_frontier(
    X_total, T_hours, N_steps, sigma_hourly, eta, gamma, lambdas
)

print(f"{'Lambda':>12} {'E[Cost] $':>12} {'Std[Cost] $':>14} {'Kappa':>8}")
print("-" * 50)
for row in frontier[::4]:
    print(f"{row['lambda']:12.2e} {row['expected_cost']:12.0f} "
          f"{np.sqrt(row['variance']):14.0f} {row['kappa']:8.3f}")

# Optimal trajectory for moderate risk aversion
lam_moderate = 1e-6
holdings = almgren_chriss_trajectory(X_total, T_hours, N_steps, kappa=0.5)
trades_k = -np.diff(holdings)
print(f"\nOptimal holdings at each step: {holdings.astype(int)}")
print(f"Trades at each step:           {trades_k.astype(int)}")
```

## Execution Trajectory Visualization

```chart
{
  "type": "line",
  "xAxis": "step",
  "data": [
    {"step": "0", "twap": 1000000, "ac_low": 1000000, "ac_high": 1000000},
    {"step": "1", "twap": 900000, "ac_low": 950000, "ac_high": 700000},
    {"step": "2", "twap": 800000, "ac_low": 870000, "ac_high": 420000},
    {"step": "3", "twap": 700000, "ac_low": 760000, "ac_high": 220000},
    {"step": "4", "twap": 600000, "ac_low": 620000, "ac_high": 90000},
    {"step": "5", "twap": 500000, "ac_low": 450000, "ac_high": 25000},
    {"step": "6", "twap": 400000, "ac_low": 280000, "ac_high": 5000},
    {"step": "7", "twap": 300000, "ac_low": 150000, "ac_high": 0},
    {"step": "8", "twap": 200000, "ac_low": 60000, "ac_high": 0},
    {"step": "9", "twap": 100000, "ac_low": 15000, "ac_high": 0},
    {"step": "10", "twap": 0, "ac_low": 0, "ac_high": 0}
  ],
  "lines": [
    {"dataKey": "twap", "stroke": "#94a3b8", "name": "TWAP (risk-neutral)"},
    {"dataKey": "ac_low", "stroke": "#3b82f6", "name": "AC (low urgency)"},
    {"dataKey": "ac_high", "stroke": "#ef4444", "name": "AC (high urgency)"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---|:---|:---|
| $X$ | Total shares | Order size | Strategy-dependent |
| $T$ | Time horizon | Total execution window | $1 \text{ min} – 1 \text{ day}$ |
| $\sigma$ | Price volatility | Asset return volatility | $0.5\% – 3\%$/day |
| $\eta$ | Temporary impact | Instantaneous liquidity cost | $10^{-7} – 10^{-5}$ |
| $\gamma$ | Permanent impact | Information content per share | $10^{-8} – 10^{-6}$ |
| $\lambda$ | Risk aversion | Penalty on variance of cost | $10^{-7} – 10^{-4}$ |
| $\kappa$ | Urgency | $\sqrt{\lambda\sigma^2/\eta}$ | $0.01 – 10$ |

## Financial Application

1. **VWAP/TWAP Engines**: Determining how to slice a large order over a day.
2. **Portfolio Rebalancing**: Minimizing the cost of shifting weights across many stocks simultaneously.
3. **Risk Management**: Estimating the "Liquidation Value" of a fund under stressed market conditions.
4. **Pre-Trade Analysis**: Quoting expected implementation shortfall to portfolio managers before executing.

## Limitations and Extensions

- **Linear impact assumption**: Real market impact is concave (square-root law). The Almgren (2003) extension with power-law impact $h(v) \propto v^\delta$ is more empirically accurate but lacks a closed-form solution.
- **Price impact decay**: Permanent impact in the original model does not decay. Kyle-type models with decaying impact better reflect that large trades signal information that eventually diffuses.
- **Stochastic liquidity**: The parameters $\eta$ and $\sigma$ are assumed constant. Regime-switching or stochastic volatility versions handle intraday liquidity patterns and market stress.
- **Multi-asset cross-impact**: See [[market-impact-scaling]] for the cross-impact generalization.

## Related Topics
- [[avellaneda-stoikov]]
- [[monte-carlo-method]]
- [[market-impact-scaling]]
- [[lob-prediction]]
- [[nash-equilibrium]]

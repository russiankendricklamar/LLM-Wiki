---
title: "Cross-Impact & Optimal Execution"
category: "Algorithms and ML"
order: 102
lang: "en"
---
# Cross-Impact & Optimal Execution (Almgren-Chriss)

**Optimal Execution** is the process of completing a large trade order while minimizing the total cost, which consists of permanent market impact, temporary market impact, and timing risk. The **Almgren-Chriss** model is the industry standard for determining the optimal trajectory of trades.

## The Almgren-Chriss Framework

The model minimizes the expected cost $E[X]$ and the variance of the cost $V[X]$ (risk), where the utility function is $U = E[X] + \lambda V[X]$.

### Key Formulas

1. **Price Dynamics**:
   $P_k = P_{k-1} + \sigma \sqrt{\tau} \epsilon_k - \tau g(n_k / \tau)$ (Permanent Impact)
   $\tilde{P}_k = P_k - h(n_k / \tau)$ (Temporary Impact)

2. **Optimal Liquidation Trajectory**:
   For a risk-neutral trader ($\lambda=0$), the optimal strategy is a linear execution (TWAP).
   For a risk-averse trader ($\lambda > 0$), the optimal holdings $x_j$ follow:
   
   $$
   x_j = \frac{\sinh(\kappa (T - t_j))}{\sinh(\kappa T)} X
   $$
   
   Where $\kappa \approx \sqrt{\lambda \sigma^2 / \eta}$ is the "urgency" parameter.

## Cross-Impact

In multi-asset portfolios, trading one asset affects the price of others. The cross-impact matrix $\Omega$ describes these dependencies:
$$
\Delta P = \Sigma \cdot \text{Sign}(\text{Trades}) \cdot |\text{Trades}|^\delta
$$

## Financial Application

1. **VWAP/TWAP Engines**: Determining how to slice a 1-million-share order over a day.
2. **Portfolio Rebalancing**: Minimizing the cost of shifting weights across 500 stocks simultaneously.
3. **Risk Management**: Estimating the "Liquidation Value" of a fund under stressed market conditions.

## Python: Optimal Trajectory Calculation

```python
import numpy as np

def almgren_chriss_trajectory(X, T, N, kappa):
    """
    X: Total shares to sell
    T: Total time
    N: Number of steps
    kappa: Urgency parameter
    """
    times = np.linspace(0, T, N)
    holdings = X * np.sinh(kappa * (T - times)) / np.sinh(kappa * T)
    return holdings

# Parameters: Sell 1M shares, 10 steps, kappa=0.5
X_total = 1_000_000
traj = almgren_chriss_trajectory(X_total, 1.0, 10, 0.5)

print("Optimal holdings at each step:")
print(traj.astype(int))
```

## Related Topics
- [[avellaneda-stoikov]]
- [[monte-carlo-method]]
---

---
title: "Systematic Portfolio Trading via Convex Optimization"
category: "Risk"
order: 71
lang: "en"
slug: "convex-optimization-trading"
---
# Systematic Portfolio Trading via Convex Optimization

Modern systematic trading relies on **Convex Optimization** to find the optimal set of portfolio weights that maximize utility while satisfying a complex set of real-world constraints. Unlike the simple closed-form Markowitz solution, convex optimization handles transaction costs, turnover limits, and sector neutrality within a unified framework.

## Prerequisites

[[portfolio-optimization-ml]], [[hierarchical-risk-parity]]

## Overview & Background

Harry Markowitz (1952) established portfolio optimization as a quadratic program — minimize variance for a given expected return. The closed-form solution $w^* = \Sigma^{-1}\mu / (\mathbf{1}^T \Sigma^{-1}\mu)$ is elegant but fragile: small estimation errors in $\mu$ or $\Sigma$ produce wildly unstable portfolio weights. Michaud (1989) called this "error maximization."

Modern convex optimization frameworks, primarily CVXPY (Diamond & Boyd, 2016) and commercial solvers (MOSEK, Gurobi), allow practitioners to encode realistic constraints directly in the optimization objective: multi-period transaction costs, tracking error bounds, factor exposure limits, and robustness to parameter uncertainty. Second-Order Cone Programming (SOCP) and Semidefinite Programming (SDP) handle non-linear constraints efficiently.

The key insight is that portfolio construction is fundamentally a convex problem: the objective (expected utility) is concave, constraints are convex sets, and the transaction cost function is convex. This guarantees that any local optimum is global, making numerical solvers reliable.

## Mathematical Framework

### Single-Period Optimization

The general constrained mean-variance problem:

$$
\begin{aligned}
\text{maximize} \quad & \mu^T w - \frac{\gamma}{2} w^T \Sigma w - \phi(w, w_{prev}) \\
\text{subject to} \quad & \mathbf{1}^T w = 1 \quad \text{(fully invested)} \\
& \|w\|_1 \leq L \quad \text{(gross leverage)} \\
& w \geq w_{min} \quad \text{(position limits)} \\
& |Aw - b| \leq \delta \quad \text{(factor exposure bounds)}
\end{aligned}
$$

where:
- $\mu \in \mathbb{R}^n$: expected returns (alpha signals)
- $\Sigma \in \mathbb{S}^n_+$: covariance matrix
- $\gamma > 0$: risk aversion
- $\phi(w, w_{prev})$: transaction cost function
- $L$: maximum gross leverage
- $A \in \mathbb{R}^{k \times n}$: factor exposure matrix

### Transaction Cost Models

**Linear cost** (proportional to trade size):
$$
\phi_L(w) = c^T |w - w_{prev}|
$$

**Square-root impact** (Almgren-Chriss):
$$
\phi_{SR}(w) = \sum_i \eta_i \sigma_i \left(\frac{|w_i - w_{prev,i}|}{V_i}\right)^{3/2} \cdot \text{ADV}_i
$$

**Quadratic/quadratic regularization**:
$$
\phi_Q(w) = \lambda \|w - w_{prev}\|_2^2
$$

The square-root model is non-smooth but convex and can be reformulated as an SOCP constraint.

### Robust Optimization

Uncertainty in $\mu$ (ellipsoidal uncertainty set):

$$
\text{maximize} \quad \min_{\mu \in \mathcal{U}} \mu^T w - \frac{\gamma}{2} w^T \Sigma w
$$

where $\mathcal{U} = \{\mu : \|\Sigma^{-1/2}(\mu - \hat\mu)\|_2 \leq \kappa\}$. This reformulates as:

$$
\hat\mu^T w - \kappa \|\Sigma^{1/2} w\|_2 - \frac{\gamma}{2} w^T \Sigma w
$$

The second term penalizes allocations to high-uncertainty assets, naturally inducing diversification without ad-hoc constraints.

### Multi-Period Optimization

For a $T$-period horizon with states $w_0, w_1, \dots, w_T$:

$$
\text{maximize} \quad \sum_{t=0}^{T-1} \left[\mu_t^T w_t - \frac{\gamma}{2} w_t^T \Sigma w_t - \phi(w_t, w_{t-1})\right]
$$

Multi-period formulations prevent myopic over-trading by explicitly accounting for the future cost of reversing today's trades.

## Key Properties

- **Convexity guarantee**: The objective is concave (linear minus convex risk term minus convex cost), so every local optimum is global.
- **Duality**: The dual variables of the optimization provide shadow prices for each constraint — the marginal value of relaxing each limit.
- **Warm starting**: Initializing the solver from the previous period's solution dramatically reduces computation time in production.
- **Scalability**: MOSEK solves problems with $n=5000$ assets and $k=200$ factor constraints in under one second.

## Python Implementation

```python
import cvxpy as cp
import numpy as np
import pandas as pd

def single_period_optimize(
    mu: np.ndarray,
    Sigma: np.ndarray,
    w_prev: np.ndarray,
    gamma: float = 1.0,
    leverage_limit: float = 1.5,
    turnover_limit: float = 0.20,
    transaction_cost: float = 0.001,
    long_only: bool = True
) -> dict:
    """
    Single-period mean-variance optimization with transaction costs and constraints.

    Returns optimal weights, expected return, risk, and total cost.
    """
    n = len(mu)
    w = cp.Variable(n)

    # Objective components
    expected_ret = mu @ w
    risk = cp.quad_form(w, Sigma)
    trades = w - w_prev
    tcost = transaction_cost * cp.norm1(trades)

    objective = cp.Maximize(expected_ret - gamma * risk - tcost)

    constraints = [
        cp.sum(w) == 1,                        # Fully invested
        cp.norm1(w) <= leverage_limit,          # Gross leverage
        cp.norm1(trades) <= turnover_limit,     # Turnover limit
    ]
    if long_only:
        constraints.append(w >= 0)

    prob = cp.Problem(objective, constraints)
    prob.solve(solver=cp.CLARABEL, warm_start=True)

    if prob.status not in ['optimal', 'optimal_inaccurate']:
        raise RuntimeError(f"Optimization failed: {prob.status}")

    return {
        'weights': w.value,
        'expected_return': float(expected_ret.value),
        'risk': float(risk.value),
        'turnover': float(cp.norm1(trades).value),
        'status': prob.status
    }

def robust_optimize(
    mu_hat: np.ndarray,
    Sigma: np.ndarray,
    kappa: float = 0.5,
    gamma: float = 1.0
) -> np.ndarray:
    """
    Robust mean-variance: worst-case expected return over ellipsoidal uncertainty set.
    kappa: uncertainty radius (higher = more conservative)
    """
    n = len(mu_hat)
    w = cp.Variable(n)
    L = np.linalg.cholesky(Sigma)

    robust_return = mu_hat @ w - kappa * cp.norm2(L.T @ w)
    risk = cp.quad_form(w, Sigma)

    prob = cp.Problem(
        cp.Maximize(robust_return - gamma * risk),
        [cp.sum(w) == 1, w >= 0]
    )
    prob.solve(solver=cp.CLARABEL)
    return w.value

def efficient_frontier(
    mu: np.ndarray,
    Sigma: np.ndarray,
    n_points: int = 30
) -> pd.DataFrame:
    """Compute the efficient frontier by sweeping gamma."""
    results = []
    for gamma in np.logspace(-2, 2, n_points):
        n = len(mu)
        w = cp.Variable(n)
        prob = cp.Problem(
            cp.Maximize(mu @ w - gamma * cp.quad_form(w, Sigma)),
            [cp.sum(w) == 1, w >= 0]
        )
        prob.solve(solver=cp.CLARABEL, verbose=False)
        if prob.status == 'optimal':
            ret = float(mu @ w.value)
            vol = float(np.sqrt(w.value @ Sigma @ w.value))
            results.append({'gamma': gamma, 'return': ret, 'vol': vol,
                           'sharpe': ret / (vol + 1e-10)})
    return pd.DataFrame(results)

# Example: 10-asset portfolio
np.random.seed(42)
n = 10
mu = np.random.randn(n) * 0.08 + 0.05
A = np.random.randn(n, n)
Sigma = (A.T @ A) / n + np.eye(n) * 0.01
w_prev = np.ones(n) / n

result = single_period_optimize(mu, Sigma, w_prev, gamma=2.0, turnover_limit=0.15)
frontier = efficient_frontier(mu, Sigma)
```

## Efficient Frontier: Return vs Risk

```chart
{
  "type": "line",
  "xAxis": "vol",
  "data": [
    {"vol": 0.08, "return": 0.04},
    {"vol": 0.10, "return": 0.06},
    {"vol": 0.12, "return": 0.08},
    {"vol": 0.15, "return": 0.10},
    {"vol": 0.18, "return": 0.11},
    {"vol": 0.22, "return": 0.12}
  ],
  "lines": [
    {"dataKey": "return", "stroke": "#3b82f6", "name": "Expected Return"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---:|:---|:---|
| $\gamma$ | Risk aversion | Penalizes portfolio variance | 0.5 – 10 |
| $L$ | Leverage limit | Maximum sum of absolute weights | 1.0 – 3.0 |
| $c$ | Transaction cost | Linear cost per unit traded | 0.05% – 0.50% |
| $\kappa$ | Uncertainty radius | Robustness parameter in ellipsoidal set | 0.1 – 2.0 |
| $\lambda$ | Turnover limit | Max total portfolio change per rebalance | 5% – 30% |
| $\delta$ | Factor tolerance | Allowed deviation from target factor exposure | 0.01 – 0.10 |

## Limitations & Extensions

**Limitations:**
- **Parameter sensitivity**: The optimized portfolio is sensitive to estimates of $\mu$ and $\Sigma$; small errors are amplified. Robust optimization and shrinkage estimators mitigate this.
- **Covariance estimation**: Sample covariance is noisy for large $n$; Ledoit-Wolf shrinkage or [[random-matrix-theory]]-filtered matrices are preferable.
- **Non-convex constraints**: Integer constraints (e.g., minimum position size, maximum number of positions) require mixed-integer programming — much harder computationally.
- **Non-linear costs**: Market impact is non-linear and depends on execution schedule; the static optimization ignores intraday price impact dynamics.

**Extensions:**
- **[[hierarchical-risk-parity]]**: Replaces covariance inversion with hierarchical clustering, avoiding ill-conditioned matrix issues.
- **[[mcmc]]**: Bayesian posterior sampling of $\mu$ and $\Sigma$ feeds a distribution of optimal portfolios rather than a single point.
- **Model Predictive Control**: Multi-period rolling optimization where the horizon rolls forward each period.
- **[[bayesian-black-litterman]]**: Provides better-conditioned expected return inputs that reduce the optimizer's sensitivity to noise.

## Practical Applications

1. **Systematic Equity Long/Short**: Quant funds rebalance daily using CVXPY to optimize alpha-weighted portfolios with sector neutrality and beta constraints.
2. **Index Replication**: Passive funds minimize tracking error to benchmark while keeping transaction costs below a threshold.
3. **Risk Parity**: Optimize to equalize risk contribution per asset, typically formulated as a convex problem after log transformation.
4. **Currency Overlay**: FX hedging programs optimize hedge ratios to minimize residual FX variance subject to hedging cost constraints.
5. **Options Delta Hedging**: Aggregate options book delta hedging formulated as a convex program with gamma, vega, and dollar limits.

## Related Topics
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]
- [[bayesian-black-litterman]]

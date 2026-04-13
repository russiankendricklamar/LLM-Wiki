---
title: "Systematic Portfolio Trading via Convex Optimization"
category: "Risk Management"
order: 144
lang: "en"
slug: "convex-optimization-trading"
---
# Systematic Portfolio Trading via Convex Optimization

Modern systematic trading relies on **Convex Optimization** to find the optimal set of portfolio weights that maximize utility while satisfying a complex set of real-world constraints. Unlike the simple closed-form Markowitz solution, convex optimization can handle transaction costs, turnover limits, and sector neutrality.

## Markowitz Revisited with Constraints

The general problem is formulated as:
$$
\begin{aligned}
\text{maximize} \quad & \mu^T w - \gamma w^T \Sigma w - \phi(w - w_{prev}) \\
\text{subject to} \quad & \mathbf{1}^T w = 1 \\
& \|w\|_1 \le L \\
& A w \le b
\end{aligned}
$$

Where:
- $\mu$: Expected returns.
- $\Sigma$: Covariance matrix.
- $\phi(w - w_{prev})$: Transaction cost model (often $L_{3/2}$ or quadratic).
- $\|w\|_1 \le L$: Leverage constraint (Gross exposure).
- $A w \le b$: Linear constraints (e.g., sector or factor exposure limits).

## Cone Constraints

Sophisticated solvers like ECOS or SCS allow for **Second-Order Cone Programming (SOCP)**, which can model uncertainty in $\mu$ or $\Sigma$ as a set of robust constraints. This prevents the optimizer from over-allocating to assets with high estimated returns that may be due to noise.

## Python: Multi-Period Optimization with CVXPY

```python
import cvxpy as cp
import numpy as np

n = 10 # Number of assets
mu = np.random.randn(n) * 0.1
Sigma = np.random.randn(n, n)
Sigma = Sigma.T @ Sigma # Positive semi-definite

w = cp.Variable(n)
w_prev = np.ones(n) / n
risk_aversion = cp.Parameter(nonneg=True, value=1.0)

# Transaction cost model: 0.1% linear cost
t_cost = 0.001 * cp.norm(w - w_prev, 1)

expected_return = mu.T @ w
risk = cp.quad_form(w, Sigma)

objective = cp.Maximize(expected_return - risk_aversion * risk - t_cost)
constraints = [cp.sum(w) == 1, w >= 0] # Long-only, fully invested

prob = cp.Problem(objective, constraints)
prob.solve()

print(f"Optimal Weights: {w.value}")
```

## Practical Implementation

In production systems, convex optimization is often coupled with [[hierarchical-risk-parity]] to improve the stability of the covariance matrix and [[mcmc]] to estimate the posterior distribution of alpha signals.

---
## Related Topics
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]

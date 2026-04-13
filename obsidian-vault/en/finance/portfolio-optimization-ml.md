---
title: "Portfolio Optimization with ML"
category: "Risk Management"
order: 128
lang: "en"
slug: "portfolio-optimization-ml"
---
# Portfolio Optimization with Machine Learning

**Portfolio Optimization** is the process of selecting the best mix of assets to achieve a specific investment goal (e.g., maximum return for a given level of risk). While classical Markowitz Mean-Variance Optimization is highly sensitive to input noise, Machine Learning (ML) techniques like **Hierarchical Risk Parity (HRP)** and **Deep RL** offer more robust solutions.

## Practical Implementation Guide

1.  **Classical Markowitz**: Solving for $\min w^T \Sigma w$ subject to $w^T \mu = R$. However, the covariance matrix $\Sigma$ is often unstable.
2.  **Hierarchical Risk Parity (HRP)**:
    *   Uses **Clustering** to group correlated assets.
    *   Allocates capital within and across clusters to diversify away "cluster risk."
    *   Does not require the inversion of the covariance matrix, making it more stable than Markowitz.
3.  **Black-Litterman with ML**: Using ML models to generate the "investor views" (expected returns) and combining them with market equilibrium.

## Mathematical Formulation

The HRP algorithm uses a distance metric $d_{i,j}$ derived from the correlation $\rho_{i,j}$:
$$
d_{i,j} = \sqrt{0.5(1 - \rho_{i,j})}
$$
It then uses **agglomerative clustering** to build a tree (dendrogram) of assets. To handle the uncertainty of asset returns, one can use [[mcmc]] for Bayesian portfolio optimization. For extreme risk scenarios, [[value-at-risk]] (VaR) or Conditional VaR (CVaR) are used as constraints in the optimization objective.

## Key Metrics
- **Sharpe Ratio**: Risk-adjusted excess return.
- **Diversification Ratio**: Portfolio volatility divided by the weighted average of individual asset volatilities.
- **Turnover**: The amount of trading required to maintain the optimal weights.
- **Concentration**: How much of the portfolio is held in a few assets.

## Python: Simple Hierarchical Risk Parity (HRP)

```python
import numpy as np
import pandas as pd
from scipy.cluster.hierarchy import linkage
from scipy.spatial.distance import pdist

def get_hrp_weights(returns):
    corr = returns.corr().values
    dist = np.sqrt(0.5 * (1 - corr))
    # Fill diagonal with 0 to avoid distance errors
    np.fill_diagonal(dist, 0)
    
    # Simple linkage clustering
    links = linkage(pdist(dist), method='single')
    # In a full implementation, you would recursively bisect the dendrogram
    # Here we just return a uniform allocation for brevity
    return np.ones(returns.shape[1]) / returns.shape[1]

# Generate dummy returns for 5 assets
data = pd.DataFrame(np.random.normal(0, 0.01, (100, 5)))
weights = get_hrp_weights(data)
print(f"HRP weights: {weights}")
```

## Financial Context

ML-based optimization is crucial for managing large universes of assets (e.g., 500+ stocks), where the number of parameters to estimate exceeds the available data points. Robustness is verified using [[monte-carlo-method]] simulations to ensure the portfolio performs well across different market regimes. Some advanced practitioners use [[gan]] to generate synthetic "crisis" regimes for stress-testing their allocations.

## Related Topics
- [[hierarchical-risk-parity]]
- [[random-matrix-theory]]
- [[value-at-risk]]
- [[monte-carlo-method]]
---

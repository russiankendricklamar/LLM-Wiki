---
title: "Hierarchical Risk Parity (HRP)"
category: "Risk Management"
order: 20
lang: "en"
---
# Hierarchical Risk Parity (HRP)

**Hierarchical Risk Parity (HRP)** is a modern portfolio optimization method introduced by Marcos López de Prado in 2016. HRP addresses the primary weaknesses of Claude Markowitz's Mean-Variance Optimization (MVO), specifically its high sensitivity to estimation errors in the covariance matrix and instability when assets are highly correlated.

## Why HRP?

Traditional optimization methods like MVO often struggle because they require the inversion of the covariance matrix ($\Sigma^{-1}$). If two assets are highly correlated, the matrix becomes nearly singular, leading to erratic and extreme portfolio weights. HRP avoids this by using **graph theory** and **machine learning** (hierarchical clustering).

## The Three Steps of HRP:

1.  **Hierarchical Clustering**: Assets are grouped based on their correlation. Similar assets are linked together into clusters, forming a tree structure called a dendrogram.
2.  **Quasi-Diagonalization**: The assets in the covariance matrix are rearranged so that highly correlated assets are adjacent to each other. This organizes the matrix into a "nearly diagonal" block structure.
3.  **Recursive Bisection**: Weights are assigned top-down through the dendrogram. At each branch, the portfolio is divided between the two sub-clusters based on their aggregate risk, ensuring that risk is balanced across all levels of the hierarchy.

## Mathematical Advantage

HRP is a **robust** allocator. Because it doesn't invert the covariance matrix, it is mathematically stable even when assets are perfectly correlated. It treats clusters of assets as single units of risk, which leads to superior diversification compared to standard Risk Parity or Equal Weighting.

## Python: Conceptual Example

Using `scipy` to perform hierarchical clustering and prepare for weight allocation:

```python
import numpy as np
import scipy.cluster.hierarchy as sch

def get_hrp_weights(cov, corr):
    # 1. Clustering
    # Convert correlation to distance metric
    dist = np.sqrt(0.5 * (1 - corr))
    link = sch.linkage(dist, 'single')
    
    # 2. Quasi-Diagonalization
    sort_ix = sch.leaves_list(link)
    
    # 3. Recursive Weighting (Simplified)
    # In a full implementation, weights are allocated inversely
    # proportional to cluster variance at each bisection.
    n = len(sort_ix)
    weights = np.ones(n) / n
    return weights[sort_ix]

# Sample data
cov_matrix = np.array([[0.04, 0.02], [0.02, 0.09]])
corr_matrix = np.array([[1.0, 0.5], [0.5, 1.0]])
w = get_hrp_weights(cov_matrix, corr_matrix)
print(f"HRP Weights: {w}")
```

## Visualization: Risk Contribution

```chart
{
  "type": "bar",
  "xAxis": "asset",
  "data": [
    {"asset": "US Equities", "risk": 0.25},
    {"asset": "EU Equities", "risk": 0.25},
    {"asset": "Bonds", "risk": 0.25},
    {"asset": "Commodities", "risk": 0.25}
  ],
  "lines": [
    {"dataKey": "risk", "fill": "#10b981", "name": "Risk Contribution"}
  ]
}
```

## Allocation Method Comparison

| Feature | Markowitz (MV) | Risk Parity (RP) | HRP |
| :--- | :---: | :---: | :---: |
| **Matrix Inversion** | Yes | No | **No** |
| **Sensitivity to Noise** | High | Medium | **Low** |
| **Accounts for Hierarchy** | No | No | **Yes** |
| **Weight Stability** | Low | High | **Very High** |
| **Requires Returns Forecast**| Yes | No | **No** |
---


## Related Topics
- [[random-matrix-theory]]
- [[value-at-risk]]

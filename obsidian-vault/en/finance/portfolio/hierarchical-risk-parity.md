---
slug: "/finance/hierarchical-risk-parity"
title: "Hierarchical Risk Parity (HRP)"
category: "Risk"
order: 45
lang: "en"
---
# Hierarchical Risk Parity (HRP)

**Hierarchical Risk Parity (HRP)** is a modern portfolio construction method introduced by Marcos López de Prado in 2016. It addresses the primary weakness of Markowitz Mean-Variance Optimization (MVO) — extreme sensitivity to estimation errors in the covariance matrix — by replacing matrix inversion with hierarchical clustering and recursive bisection. HRP produces more stable, better-diversified portfolios, especially in high-dimensional settings where $N/T$ is large.

## Why HRP?

Traditional optimization methods like MVO require inverting the covariance matrix ($\Sigma^{-1}$). When assets are highly correlated, the matrix is nearly singular and small estimation errors produce wildly unstable, extreme portfolio weights. Empirically, MVO portfolios often concentrate in a handful of assets, show high turnover, and underperform simpler benchmarks out-of-sample.

HRP avoids matrix inversion entirely by using **graph theory** (hierarchical clustering) and **recursive risk allocation** through the dendrogram. This makes it mathematically stable even when assets are perfectly correlated.

## The Three Steps of HRP

### Step 1: Hierarchical Clustering

Construct a distance matrix from the correlation matrix:

$$
d_{ij} = \sqrt{\frac{1 - \rho_{ij}}{2}}
$$

Apply Ward or single-linkage hierarchical clustering to produce a **dendrogram** — a tree where leaf nodes are individual assets and branches represent clusters of similar assets.

### Step 2: Quasi-Diagonalization

Reorder the assets so that correlated assets are adjacent in the covariance matrix. The reordered matrix is "block-diagonal" in structure, and summing sub-matrices along the diagonal gives cluster-level risk estimates without requiring inversion.

The reordering is obtained from the dendrogram leaf traversal order.

### Step 3: Recursive Bisection

Assign portfolio weights top-down through the dendrogram. At each node, the portfolio is split between two sub-clusters proportionally to the **inverse of each cluster's variance**:

$$
\alpha_{\text{left}} = 1 - \frac{\tilde{V}_{\text{left}}}{\tilde{V}_{\text{left}} + \tilde{V}_{\text{right}}}
$$

where $\tilde{V}_c = w_c^T \Sigma w_c$ is the variance of the naively-weighted (equal-weight within cluster) sub-portfolio. This ensures risk is balanced across the hierarchy rather than concentrated in a single cluster.

## Mathematical Properties

The resulting weight vector satisfies:
- **No matrix inversion**: $\Sigma^{-1}$ is never computed.
- **Tree-structural diversification**: Assets in the same cluster share weight, preventing extreme concentration.
- **Robustness**: Small perturbations in $\Sigma$ produce small perturbations in weights (Lipschitz-stable).
- The solution coincides with inverse-variance weighting when all assets are uncorrelated (diagonal $\Sigma$).

## Full Python Implementation

```python
import numpy as np
import pandas as pd
import scipy.cluster.hierarchy as sch
from scipy.spatial.distance import squareform

def correlation_to_distance(corr: np.ndarray) -> np.ndarray:
    """Angular distance: d_ij = sqrt(0.5*(1 - rho_ij))."""
    return np.sqrt(np.clip(0.5 * (1 - corr), 0, 1))

def quasi_diagonalize(link: np.ndarray) -> list:
    """Return leaf order from dendrogram (quasi-diagonalization)."""
    return list(sch.leaves_list(link))

def get_cluster_var(cov: np.ndarray, items: list) -> float:
    """Variance of an equal-weight portfolio of items."""
    sub_cov = cov[np.ix_(items, items)]
    w = np.ones(len(items)) / len(items)
    return float(w @ sub_cov @ w)

def recursive_bisection(cov: np.ndarray, sorted_items: list) -> dict:
    """
    Allocate weights recursively through the dendrogram sorted order.
    Returns dict: item_index -> weight.
    """
    weights = {i: 1.0 for i in sorted_items}
    clusters = [sorted_items]

    while clusters:
        new_clusters = []
        for cluster in clusters:
            if len(cluster) <= 1:
                continue
            mid = len(cluster) // 2
            left, right = cluster[:mid], cluster[mid:]
            v_left  = get_cluster_var(cov, left)
            v_right = get_cluster_var(cov, right)
            total   = v_left + v_right
            alpha_left  = 1 - v_left  / total   # weight to left cluster
            alpha_right = 1 - v_right / total

            for i in left:
                weights[i] *= alpha_left
            for i in right:
                weights[i] *= alpha_right

            new_clusters += [left, right]
        clusters = new_clusters

    return weights

def hrp_weights(cov: np.ndarray, corr: np.ndarray) -> np.ndarray:
    """
    Full HRP pipeline.

    Args:
        cov:  (N, N) covariance matrix
        corr: (N, N) correlation matrix

    Returns:
        weight vector of length N
    """
    N = cov.shape[0]
    dist = correlation_to_distance(corr)
    # Condensed distance matrix for scipy linkage
    condensed = squareform(dist, checks=False)
    link = sch.linkage(condensed, method="single")
    sorted_items = quasi_diagonalize(link)
    raw_weights  = recursive_bisection(cov, sorted_items)

    w = np.array([raw_weights[i] for i in range(N)])
    return w / w.sum()   # normalise to sum to 1

# --- Example: 4 assets ---
corr = np.array([
    [1.00, 0.85, 0.10, 0.12],
    [0.85, 1.00, 0.08, 0.15],
    [0.10, 0.08, 1.00, 0.60],
    [0.12, 0.15, 0.60, 1.00],
])
vols = np.array([0.15, 0.18, 0.08, 0.10])
cov  = np.outer(vols, vols) * corr

w = hrp_weights(cov, corr)
for i, wi in enumerate(w):
    print(f"Asset {i+1}: {wi:.4f}")
```

## Risk Contribution Visualization

```chart
{
  "type": "bar",
  "xAxis": "asset",
  "data": [
    {"asset": "US Equities",  "hrp": 0.22, "mvo": 0.45},
    {"asset": "EU Equities",  "hrp": 0.20, "mvo": 0.38},
    {"asset": "Bonds",        "hrp": 0.32, "mvo": 0.12},
    {"asset": "Commodities",  "hrp": 0.26, "mvo": 0.05}
  ],
  "bars": [
    {"dataKey": "hrp", "fill": "#10b981", "name": "HRP Weight"},
    {"dataKey": "mvo", "fill": "#94a3b8", "name": "MVO Weight"}
  ]
}
```

## Allocation Method Comparison

| Feature | Markowitz (MV) | Risk Parity (RP) | HRP |
|:--------|:--------------:|:----------------:|:---:|
| **Matrix Inversion** | Yes | No | **No** |
| **Sensitivity to Noise** | High | Medium | **Low** |
| **Accounts for Hierarchy** | No | No | **Yes** |
| **Weight Stability** | Low | High | **Very High** |
| **Requires Returns Forecast** | Yes | No | **No** |
| **Handles Singular $\Sigma$** | No | Partial | **Yes** |

## Parameter Reference

| Parameter | Description | Typical Choice |
|-----------|-------------|----------------|
| Linkage method | Clustering algorithm | `single`, `ward`, `average` |
| Distance metric | Correlation-to-distance transform | $\sqrt{(1-\rho)/2}$ |
| Lookback window | Period for covariance estimation | 60–252 days |
| Shrinkage | Optional Ledoit-Wolf shrinkage on $\Sigma$ | Recommended |

## Limitations and Extensions

- **No expected returns**: HRP is a pure risk-based approach; it does not incorporate return forecasts. If alpha signals are available, a Black-Litterman prior or signal-weighted extension is needed.
- **Linkage sensitivity**: Single-linkage clustering is space-contracting and can chain; Ward linkage is generally more robust for financial data.
- **HERC extension**: Hierarchical Equal Risk Contribution (HERC, de Prado & Lewis 2019) replaces recursive bisection with equal risk contribution at each cluster node, better aligning with risk parity objectives.
- **Tail risk**: HRP minimizes variance but does not directly control CVaR or drawdown; extensions using CVaR-based cluster risk measures improve tail-risk management.
- **Dynamic rebalancing**: Rolling HRP with an exponential weighting scheme adapts to changing correlation regimes without requiring a full re-estimation.

## Practical Applications

1. **Multi-asset fund construction**: HRP is well-suited to funds spanning uncorrelated asset classes (equities, bonds, commodities, alternatives) where the block-diagonal structure of returns aligns naturally with the dendrogram.
2. **Factor portfolio diversification**: Apply HRP to a universe of factor returns (momentum, value, quality) to build a diversified multi-factor composite.
3. **Crisis resilience**: HRP's non-inversion property makes it robust to correlation spikes during stress — exactly when MVO weights become most unstable.
4. **Alternative to equal-weight**: HRP outperforms equal-weight in risk-adjusted terms while maintaining the stability advantage over MVO.

## Related Topics
- [[random-matrix-theory]]
- [[value-at-risk]]
- [[eigenportfolio-rmt]]
- [[kelly-criterion]]

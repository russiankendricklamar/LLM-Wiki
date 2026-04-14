---
title: "Portfolio Optimization with ML"
category: "Risk Management"
order: 64
lang: "en"
slug: "portfolio-optimization-ml"
---
# Portfolio Optimization with Machine Learning

**Portfolio Optimization** is the process of selecting the best mix of assets to achieve a specific investment goal (e.g., maximum return for a given level of risk). While classical Markowitz Mean-Variance Optimization is highly sensitive to input noise, Machine Learning (ML) techniques like **Hierarchical Risk Parity (HRP)** and **Deep RL** offer more robust solutions.

## Background and Motivation

Harry Markowitz's mean-variance optimization (1952) was a landmark theoretical achievement but is notoriously difficult to implement in practice. The covariance matrix for $n$ assets has $n(n+1)/2$ parameters to estimate — for a 500-stock universe, that is over 125,000 parameters from limited historical data. Small estimation errors compound to produce extreme, unstable allocations (the "error maximization" problem identified by Michaud, 1989).

Machine learning addresses this in two ways: (1) shrinkage and structure-aware covariance estimation reduces estimation error, and (2) hierarchical and graph-based methods exploit the natural clustering structure of asset returns to build diversified portfolios without inverting the covariance matrix at all.

## Classical Markowitz Framework

The Markowitz optimization solves:

$$
\min_{w} \frac{1}{2} w^\top \Sigma w \quad \text{subject to} \quad w^\top \mu = R,\; w^\top \mathbf{1} = 1,\; w \geq 0
$$

The **efficient frontier** traces the minimum-variance portfolio for each target return $R$. The tangency portfolio (maximum Sharpe ratio) is:

$$
w^* = \frac{\Sigma^{-1}(\mu - r_f \mathbf{1})}{\mathbf{1}^\top \Sigma^{-1}(\mu - r_f \mathbf{1})}
$$

The critical failure mode is $\Sigma^{-1}$: when eigenvalues of $\hat{\Sigma}$ are small (near-collinear assets), the inverse amplifies noise. Random matrix theory ([[random-matrix-theory]]) identifies which eigenvalues carry signal vs. noise.

## Hierarchical Risk Parity (HRP)

HRP (Lopez de Prado, 2016) replaces matrix inversion with a tree-based allocation:

### Step 1: Distance Matrix

Convert correlation matrix to a distance measure suitable for hierarchical clustering:

$$
d_{i,j} = \sqrt{\frac{1 - \rho_{i,j}}{2}}
$$

This satisfies the triangle inequality and ranges from 0 (perfect correlation) to 1 (zero correlation).

### Step 2: Hierarchical Clustering

Apply agglomerative clustering (single-linkage or Ward's method) to build a dendrogram. Assets in the same cluster share similar return dynamics.

### Step 3: Quasi-Diagonalization

Reorder the covariance matrix so that similar assets are adjacent, producing a block-diagonal-like structure.

### Step 4: Recursive Bisection

Allocate capital recursively top-down through the dendrogram. At each split, the weight assigned to each sub-cluster is inversely proportional to its variance:

$$
w_{\text{left}} = \frac{\sigma_{\text{right}}^2}{\sigma_{\text{left}}^2 + \sigma_{\text{right}}^2}, \quad w_{\text{right}} = 1 - w_{\text{left}}
$$

The HRP algorithm uses a distance metric $d_{i,j}$ derived from the correlation $\rho_{i,j}$:

$$
d_{i,j} = \sqrt{0.5(1 - \rho_{i,j})}
$$

It then uses **agglomerative clustering** to build a tree (dendrogram) of assets. To handle the uncertainty of asset returns, one can use [[mcmc]] for Bayesian portfolio optimization. For extreme risk scenarios, [[value-at-risk]] (VaR) or Conditional VaR (CVaR) are used as constraints in the optimization objective.

## Black-Litterman with ML Views

The **Black-Litterman model** starts from the market equilibrium expected returns $\Pi = \delta \Sigma w_{\text{market}}$ (implied by the CAPM) and combines them with investor views via Bayesian updating:

$$
\hat{\mu} = [(\tau\Sigma)^{-1} + P^\top \Omega^{-1} P]^{-1}[(\tau\Sigma)^{-1}\Pi + P^\top \Omega^{-1} Q]
$$

Where $P$ is the view matrix, $Q$ is the expected return of each view, and $\Omega$ is the view uncertainty matrix. ML models (gradient boosting, transformer-based return predictors) generate the views $Q$ and confidence levels $\Omega^{-1}$, blending data-driven signals with equilibrium priors.

## Key Metrics

- **Sharpe Ratio**: Risk-adjusted excess return.
- **Diversification Ratio**: Portfolio volatility divided by the weighted average of individual asset volatilities.
- **Turnover**: The amount of trading required to maintain the optimal weights.
- **Concentration**: How much of the portfolio is held in a few assets (Herfindahl index).
- **Maximum Drawdown**: Largest peak-to-trough decline.

## Python: Full HRP Implementation

```python
import numpy as np
import pandas as pd
from scipy.cluster.hierarchy import linkage, dendrogram, fcluster
from scipy.spatial.distance import squareform


def correlation_to_distance(corr):
    """Convert correlation matrix to distance matrix."""
    return np.sqrt(0.5 * (1 - corr))


def get_quasi_diag(link):
    """Reorder assets so similar ones are adjacent (quasi-diagonalization)."""
    link = link.astype(int)
    sort_ix = pd.Series([link[-1, 0], link[-1, 1]])
    num_items = link[-1, 3]

    while sort_ix.max() >= num_items:
        sort_ix.index = range(0, sort_ix.shape[0] * 2, 2)
        df0 = sort_ix[sort_ix >= num_items]
        i = df0.index
        j = df0.values - num_items
        sort_ix[i] = link[j, 0]
        df0 = pd.Series(link[j, 1], index=i + 1)
        sort_ix = pd.concat([sort_ix, df0])
        sort_ix = sort_ix.sort_index()
        sort_ix.index = range(sort_ix.shape[0])

    return sort_ix.tolist()


def hrp_weights(cov, sort_ix):
    """
    Compute HRP weights via recursive bisection.
    cov: covariance matrix (DataFrame with asset names as index/cols)
    sort_ix: reordered asset indices from quasi-diagonalization
    """
    w = pd.Series(1.0, index=sort_ix)
    c_items = [sort_ix]  # initialize with all assets

    while len(c_items) > 0:
        c_items = [
            i[j:k]
            for i in c_items
            for j, k in ((0, len(i) // 2), (len(i) // 2, len(i)))
            if len(i) > 1
        ]
        for i in range(0, len(c_items), 2):
            c_items0 = c_items[i]
            c_items1 = c_items[i + 1]
            c_var0 = _cluster_var(cov, c_items0)
            c_var1 = _cluster_var(cov, c_items1)
            alpha = 1 - c_var0 / (c_var0 + c_var1)
            w[c_items0] *= alpha
            w[c_items1] *= (1 - alpha)

    return w


def _cluster_var(cov, c_items):
    """Variance of an inverse-variance weighted sub-portfolio."""
    cov_slice = cov.iloc[c_items, c_items]
    ivp = 1.0 / np.diag(cov_slice.values)
    ivp /= ivp.sum()
    return float(ivp @ cov_slice.values @ ivp)


def run_hrp(returns):
    """
    Full HRP pipeline.
    returns: DataFrame of asset returns (T x N)
    Returns Series of portfolio weights.
    """
    corr = returns.corr()
    cov = returns.cov()

    dist = correlation_to_distance(corr.values)
    np.fill_diagonal(dist, 0)
    condensed = squareform(dist)

    link = linkage(condensed, method='single')
    sort_ix = get_quasi_diag(link)
    sort_ix = corr.index[sort_ix].tolist()

    w = hrp_weights(cov, [corr.index.get_loc(i) for i in sort_ix])
    w.index = sort_ix
    return w.sort_index()


# Compare HRP vs equal-weight vs MVO on synthetic data
np.random.seed(42)
n_assets, n_obs = 10, 252

# Correlated returns: 3 clusters of assets
cov_true = np.eye(n_assets) * 0.0004
for i in range(3):
    for j in range(3):
        if i != j:
            cov_true[i, j] = 0.0003
            cov_true[3+i, 3+j] = 0.0003

returns_df = pd.DataFrame(
    np.random.multivariate_normal(np.zeros(n_assets), cov_true, n_obs),
    columns=[f'Asset_{i+1}' for i in range(n_assets)]
)

hrp_w = run_hrp(returns_df)
equal_w = pd.Series(1/n_assets, index=returns_df.columns)

print("HRP Weights:")
print(hrp_w.round(4).to_string())
print(f"\nHRP portfolio vol:   {np.sqrt(hrp_w @ returns_df.cov() @ hrp_w * 252):.4f}")
print(f"Equal-wt portfolio vol: {np.sqrt(equal_w @ returns_df.cov() @ equal_w * 252):.4f}")
```

## Financial Context

ML-based optimization is crucial for managing large universes of assets (e.g., 500+ stocks), where the number of parameters to estimate exceeds the available data points. Robustness is verified using [[monte-carlo-method]] simulations to ensure the portfolio performs well across different market regimes. Some advanced practitioners use [[gan]] to generate synthetic "crisis" regimes for stress-testing their allocations.

## Parameter Table

| Parameter | Description | Typical Value |
|:---|:---|:---|
| Linkage method | Clustering algorithm | Single / Ward |
| Estimation window | Returns lookback period | $126 – 252$ days |
| Shrinkage $\alpha$ | Ledoit-Wolf shrinkage intensity | $0 – 1$ (auto) |
| $\delta$ | Black-Litterman risk aversion | $2.5 – 3.5$ |
| $\tau$ | BL prior uncertainty | $0.025 – 0.05$ |

## Limitations and Extensions

- **Estimation window sensitivity**: HRP inherits covariance estimation error — shorter windows are noisier, longer windows are stale. Exponential weighting (EWMA) balances recency vs. stability.
- **No expected return input**: HRP is purely risk-based and ignores return forecasts. Combining HRP with ML-generated alpha signals (via BL or direct tilt) addresses this.
- **Transaction costs**: Optimal weights change each period; rebalancing costs must be incorporated. Turnover-penalized optimization trades off between tracking the optimal weights and minimizing trading costs.
- **CVaR optimization**: Replacing variance with CVaR (Expected Shortfall) as the risk measure produces portfolios more robust to tail risk, at the cost of requiring scenario simulation.

## Related Topics
- [[hierarchical-risk-parity]]
- [[random-matrix-theory]]
- [[value-at-risk]]
- [[monte-carlo-method]]
- [[mcmc]]
- [[model-free-rl-factors]]

---
title: "Orthogonal Alpha Stacking"
category: "Algorithms and ML"
order: 59
lang: "en"
---
# Orthogonal Alpha Stacking & Residualization

**Orthogonal Alpha Stacking** is a technique used in quantitative portfolio management to combine multiple predictive signals (alphas) such that they provide incremental value. If two signals are highly correlated, adding the second signal provides no new information; residualization ensures each signal is "unique."

## Prerequisites

[[alpha-factor-discovery]], [[meta-labeling]]

## Overview & Background

As quantitative funds discover more factors, naive combination (equally-weighted or correlation-weighted stacking) leads to double-counting: the portfolio over-allocates to the dominant risk factor embedded in all the correlated signals. The canonical example is that Earnings Momentum, Price Momentum, and Analyst Revision signals are all partly driven by the same underlying effect (persistence of earnings surprises). Without residualization, a portfolio combining them is implicitly a 3x momentum bet.

The mathematical framework draws on the Gram-Schmidt orthogonalization procedure from linear algebra and Frank Freiling's work on multicollinearity in regression. In the factor investing context, the Barra risk models (MSCI Barra) have formalized this into "pure factor portfolios" where each factor return is constructed to be orthogonal to all others.

## Mathematical Framework

Given a set of alpha signals $A_1, A_2, \dots, A_n$, we want to ensure each new signal $A_{new}$ is orthogonal to the existing set. The core tool is **residualization via OLS regression**.

### Residualization via Regression

To make signal $Y$ (Alpha 2) orthogonal to signal $X$ (Alpha 1):

$$
Y = \beta X + \epsilon
$$

The OLS estimate $\hat{\beta} = \frac{\text{Cov}(X, Y)}{\text{Var}(X)}$ gives the projection of $Y$ onto $X$. The residual:

$$
\epsilon = Y - \hat{\beta} X
$$

is the component of Alpha 2 uncorrelated with Alpha 1. The stacked combined alpha is:

$$
\alpha_{stacked} = w_1 A_1 + w_2 \epsilon
$$

where $w_1, w_2$ are determined by, for example, inverse-IC weighting.

### Multi-Signal Gram-Schmidt

For $n$ signals, the Gram-Schmidt process builds an orthonormal basis $\{e_1, \dots, e_n\}$:

$$
e_k = \frac{A_k - \sum_{j=1}^{k-1} \langle A_k, e_j \rangle e_j}{\left\| A_k - \sum_{j=1}^{k-1} \langle A_k, e_j \rangle e_j \right\|}
$$

where $\langle \cdot, \cdot \rangle$ is the cross-sectional inner product (correlation over the universe of assets at time $t$).

### Factor Neutralization

Residualization is often applied to remove known systematic risk factors (Market, Size, Value, Sector) from a signal. If $F \in \mathbb{R}^{n \times k}$ is the matrix of $k$ factor exposures for $n$ assets:

$$
\alpha_{clean} = \alpha - F(F^T F)^{-1} F^T \alpha = (I - P_F) \alpha
$$

where $P_F = F(F^T F)^{-1} F^T$ is the projection matrix onto the column space of $F$. The result $(I - P_F)\alpha$ lies in the null space of $F^T$ — it is simultaneously orthogonal to all $k$ risk factors.

### Weighted Combination

Given $n$ orthogonalized signals $\tilde{A}_1, \dots, \tilde{A}_n$, the optimal combination under the assumption of independent predictive power is:

$$
\alpha_{combined} = \sum_{i=1}^n \frac{IC_i}{\sigma_{IC_i}^2} \tilde{A}_i
$$

This is the **ICIR-weighted** combination, where each signal's weight equals its information ratio. Signals with high IC but unstable ICIR receive lower weight.

## Key Properties & Assumptions

- **Order dependence in Gram-Schmidt**: The orthogonalization result depends on the order in which signals are processed. Best practice is to order by descending ICIR (strongest signal first preserves the most predictive content).
- **Cross-sectional vs. time-series**: Residualization should be applied cross-sectionally (across assets at each point in time), not across the time dimension.
- **Non-stationarity**: If factor correlations change over time, static residualization becomes stale. Rolling-window OLS or Kalman filter-based projection improves robustness.
- **Regularization**: With many factors, $(F^T F)$ can be near-singular. Ridge regression with penalty $\lambda I$ avoids invertibility issues.

## Python Implementation

```python
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression, Ridge

def residualize_signal(
    target_alpha: np.ndarray,
    basis_alphas: np.ndarray,
    method: str = 'ols',
    ridge_alpha: float = 1e-4
) -> np.ndarray:
    """
    Returns the component of target_alpha orthogonal to basis_alphas.

    Parameters
    ----------
    target_alpha : shape (n_assets,) — signal to purify
    basis_alphas : shape (n_assets, k) — signals to project out
    method : 'ols' or 'ridge'
    """
    if method == 'ridge':
        model = Ridge(alpha=ridge_alpha, fit_intercept=True)
    else:
        model = LinearRegression(fit_intercept=True)

    model.fit(basis_alphas, target_alpha)
    return target_alpha - model.predict(basis_alphas)

def gram_schmidt_stack(alphas: list[np.ndarray]) -> list[np.ndarray]:
    """
    Orthogonalize a list of alpha signals using Gram-Schmidt.
    Preserves the first signal, removes projection from each subsequent one.
    """
    orthogonal = [alphas[0] / (np.std(alphas[0]) + 1e-10)]
    for alpha in alphas[1:]:
        for prev in orthogonal:
            alpha = alpha - np.dot(alpha, prev) / np.dot(prev, prev) * prev
        orthogonal.append(alpha / (np.std(alpha) + 1e-10))
    return orthogonal

def icir_weighted_stack(alphas: list[np.ndarray], fwd_returns: np.ndarray) -> np.ndarray:
    """
    Combine orthogonalized signals weighted by their IC information ratio.
    """
    from scipy.stats import spearmanr

    def rolling_icir(alpha, fwd_ret, window=60):
        ics = [spearmanr(alpha[i:i+window], fwd_ret[i:i+window])[0]
               for i in range(len(alpha) - window)]
        ics = np.array(ics)
        return ics.mean() / (ics.std() + 1e-10)

    weights = np.array([rolling_icir(a, fwd_returns) for a in alphas])
    weights = np.maximum(weights, 0)  # Drop negative ICIR signals
    total = weights.sum()
    if total < 1e-10:
        return np.zeros_like(alphas[0])
    return sum(w * a for w, a in zip(weights / total, alphas))

# --- Example ---
np.random.seed(42)
n = 200  # assets

# Two correlated momentum signals
alpha1 = np.random.normal(0, 1, n)
alpha2 = 0.8 * alpha1 + 0.2 * np.random.normal(0, 1, n)  # 80% shared

# Residualize
unique_alpha2 = residualize_signal(alpha2, alpha1.reshape(-1, 1))
corr_before = np.corrcoef(alpha1, alpha2)[0, 1]
corr_after = np.corrcoef(alpha1, unique_alpha2)[0, 1]
```

## Signal Correlation Before/After Residualization

```chart
{
  "type": "bar",
  "xAxis": "pair",
  "data": [
    {"pair": "Alpha1 vs Alpha2 (raw)", "correlation": 0.8},
    {"pair": "Alpha1 vs Alpha2 (residualized)", "correlation": 0.0}
  ],
  "bars": [
    {"dataKey": "correlation", "fill": "#3b82f6", "name": "Spearman Correlation"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---:|:---|:---|
| $P_F$ | Projection matrix | Projects onto factor exposure space | — |
| $k$ | Number of basis factors | Risk factors to neutralize | 5 – 100 |
| $IC_i$ | Information Coefficient | Spearman correlation of signal $i$ with returns | –0.10 to 0.10 |
| $ICIR_i$ | IC Information Ratio | IC stability measure for signal $i$ | > 0.5 to include |
| $\lambda$ | Ridge penalty | Regularization for near-singular $(F^TF)$ | $10^{-4}$ to $10^{-2}$ |

## Limitations & Extensions

**Limitations:**
- Residualization removes correlated variance, which may include true signal: if two factors genuinely predict returns through different mechanisms, residualizing one against the other destroys some of its predictive content.
- Linear residualization cannot remove non-linear dependencies. Kernel methods or deep learning residualization are more powerful but harder to interpret.
- Factor neutralization assumes the risk model is well-specified; stale or mis-estimated covariance matrices lead to incomplete neutralization.

**Extensions:**
- **Robust PCA / [[random-matrix-theory]]**: Use Random Matrix Theory to filter the signal covariance matrix, distinguishing true signal cross-correlations from noise. This prevents over-removing genuine information.
- **Dynamic residualization**: Apply Kalman filtering to track time-varying signal correlations rather than using static OLS.
- **Non-linear neutralization**: Neural network-based factor neutralization where the "residual" is the unexplained output of a deep model.

## Practical Applications

1. **Multi-Factor Models**: Combining Momentum, Value, and Quality signals without double-counting ensures genuinely orthogonal risk premia exposure.
2. **Proprietary Trading**: Verifying that a new strategy adds alpha relative to the existing portfolio of strategies — not just correlation to an existing winning signal.
3. **Risk Management**: Identifying if a portfolio's returns are truly due to alpha (skill) or concealed beta (factor exposure).
4. **Regulatory Reporting**: Pure factor portfolios enable precise attribution of portfolio returns to each risk factor, supporting UCITS and AIFMD reporting requirements.

## Related Topics
- [[random-matrix-theory]]
- [[hierarchical-risk-parity]]
- [[alpha-factor-discovery]]
- [[convex-optimization-trading]]

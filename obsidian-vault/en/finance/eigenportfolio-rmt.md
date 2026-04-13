---
title: "Eigenportfolio Construction via RMT"
category: "Risk Management"
order: 103
lang: "en"
---
# Eigenportfolio Construction via RMT

**Eigenportfolios** are a set of uncorrelated portfolios derived from the eigenvectors of a correlation or covariance matrix. When combined with **Random Matrix Theory (RMT)**, this method allows for the creation of robust investment factors that are filtered for noise.

## Mathematical Foundation

Given a correlation matrix $C$ of $N$ assets, the spectral decomposition is:
$$
C = V \Lambda V^T
$$
Where:
- $\Lambda = \text{diag}(\lambda_1, \lambda_2, \dots, \lambda_N)$ are the eigenvalues.
- $V = [v_1, v_2, \dots, v_N]$ are the corresponding eigenvectors.

An **Eigenportfolio** $E_i$ is a vector of weights $w_i$ proportional to the $i$-th eigenvector $v_i$. To ensure the portfolio is valid, we usually normalize the weights:
$$
w_{i,j} = \frac{v_{i,j}}{\sum_k |v_{i,k}|} \quad \text{or} \quad w_{i,j} = \frac{v_{i,j}}{\sigma_j}
$$

## Filtering with RMT

Using [[random-matrix-theory]], we only consider eigenvectors associated with eigenvalues $\lambda_i > \lambda_+$. 
- The **First Eigenvector** ($v_1$) typically represents the **Market Factor** (all weights usually have the same sign).
- Subsequent significant eigenvectors represent **Sector Factors** or **Style Factors** (Value, Momentum, etc.).
- Eigenvectors in the noise cluster ($\lambda_i < \lambda_+$) are discarded.

## Financial Application

1. **Statistical Arbitrage**: Trading the residual returns of an asset against its projection onto the top eigenportfolios.
2. **Risk Decomposition**: Identifying which "hidden factors" are driving portfolio volatility.
3. **Denoised Optimization**: Using only the significant eigenportfolios to construct a Mean-Variance optimal portfolio, leading to much lower turnover.

## Python: Extracting the Market Eigenportfolio

```python
import numpy as np

def get_market_eigenportfolio(corr_matrix):
    # Eigendecomposition
    eigenvalues, eigenvectors = np.linalg.eigh(corr_matrix)
    
    # The largest eigenvalue is at the end of the sorted array
    market_vector = eigenvectors[:, -1]
    
    # Normalize weights to sum to 1
    weights = market_vector / np.sum(np.abs(market_vector))
    return weights

# Example 3x3 correlation matrix
C = np.array([[1.0, 0.6, 0.4], [0.6, 1.0, 0.5], [0.4, 0.5, 1.0]])
w = get_market_eigenportfolio(C)
print(f"Market Factor Weights: {w}")
```

## Related Topics
- [[random-matrix-theory]]
- [[hierarchical-risk-parity]]
---

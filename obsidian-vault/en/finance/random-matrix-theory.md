---
title: "Random Matrix Theory (RMT)"
category: "Algorithms and ML"
order: 27
lang: "en"
---
# Random Matrix Theory (RMT)

**Random Matrix Theory (RMT)** is the study of the statistical properties of eigenvalues of matrices whose entries are random variables. In quantitative finance, RMT is the gold standard for filtering "noise" from the correlation matrices of large asset universes, which is critical for robust portfolio optimization.

## The Problem of "Noisy" Correlations

When calculating a correlation matrix for a large number of assets (e.g., the S&P 500) using a finite amount of historical data, most of the observed correlations are dominated by noise. Using a "raw" empirical correlation matrix in Mean-Variance Optimization leads to highly unstable portfolios that perform poorly out-of-sample because the optimizer exploits the noise rather than the signal.

## The Marchenko-Pastur Distribution

A foundational result in RMT is that for a correlation matrix constructed from purely random (independent) data, the distribution of its eigenvalues $\lambda$ follows the **Marchenko-Pastur (MP) law** as $N, T \to \infty$ with $Q = T/N \ge 1$:

$$
\rho(\lambda) = \frac{Q}{2\pi \sigma^2 \lambda} \sqrt{(\lambda_+ - \lambda)(\lambda - \lambda_-)}
$$

The boundaries of the "noise cluster" are given by:
$$
\lambda_\pm = \sigma^2 (1 \pm \sqrt{1/Q})^2
$$

## Matrix Denoising Algorithm

1.  **Compute Eigenvalues**: Calculate all $\lambda_i$ for the empirical correlation matrix.
2.  **Determine Noise Bound**: Calculate $\lambda_+$ using the MP formula.
3.  **Isolate Signal**:
    - Eigenvalues $\lambda_i > \lambda_+$ are treated as **informative** (real economic signal, such as the "market factor" or "sector factors").
    - Eigenvalues $\lambda_i \le \lambda_+$ are treated as **noise**.
4.  **Apply Constant Residual Thresholding**: Replace all noise-level eigenvalues with their average value to preserve the matrix trace (the total variance).
5.  **Reconstruct**: Rebuild the denoised correlation matrix using the adjusted eigenvalues.

## Python: Calculating the MP Noise Bound

```python
import numpy as np

def get_mp_bounds(T, N, sigma=1.0):
    """
    Calculate the theoretical boundaries of eigenvalues for a random matrix.
    """
    Q = T / N
    lambda_plus = sigma**2 * (1 + np.sqrt(1/Q))**2
    lambda_minus = sigma**2 * (1 - np.sqrt(1/Q))**2
    return lambda_minus, lambda_plus

# Example: 500 assets, 1000 days of data
T, N = 1000, 500
low, high = get_mp_bounds(T, N)

print(f"The noise cluster ends at lambda = {high:.4f}")
print("Eigenvalues above this threshold represent real economic signals.")
```

## Visualization: Signal vs. Noise Cluster

```chart
{
  "type": "bar",
  "xAxis": "eigenvalue_index",
  "data": [
    {"index": "1 (Market)", "val": 15.5},
    {"index": "2 (Sector)", "val": 4.2},
    {"index": "3 (Sector)", "val": 3.8},
    {"index": "4 (Noise Cluster)", "val": 1.2},
    {"index": "5 (Noise Cluster)", "val": 0.9},
    {"index": "6 (Noise Cluster)", "val": 0.7}
  ],
  "lines": [
    {"dataKey": "val", "fill": "#3b82f6", "name": "Eigenvalues (λ)"}
  ]
}
```

## Key Benefits of RMT

Using RMT-denoised matrices significantly reduces "Markowitz optimization error." Portfolios built with these cleaned matrices exhibit much lower turnover and significantly better risk-adjusted returns (Sharpe Ratio) in real-world trading environments compared to those using raw historical correlations.
---


## Related Topics
- [[hierarchical-risk-parity]]
- [[quantum-entanglement]]

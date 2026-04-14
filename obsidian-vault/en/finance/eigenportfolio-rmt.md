---
title: "Eigenportfolio Construction via RMT"
category: "Risk Management"
order: 103
lang: "en"
---
# Eigenportfolio Construction via RMT

**Eigenportfolios** are a set of uncorrelated portfolios derived from the eigenvectors of a correlation or covariance matrix. When combined with **Random Matrix Theory (RMT)**, this method allows for the creation of robust investment factors that are filtered for noise. First proposed in the context of financial data by Laloux et al. (1999) and Plerou et al. (1999), it has become a standard tool in systematic portfolio construction.

## Background and Motivation

A raw sample covariance matrix estimated from $T$ observations of $N$ assets is generally noisy when $T$ and $N$ are of similar magnitude. The ratio $q = T/N$ governs how much of the spectral information is pure estimation error. RMT provides a null hypothesis: under the assumption that returns are i.i.d. with zero cross-correlation, the eigenvalue spectrum of the sample correlation matrix follows the Marchenko-Pastur distribution. Any eigenvalue falling within the Marchenko-Pastur bulk is indistinguishable from noise and should be discarded or shrunk before use in optimization.

## Mathematical Foundation

Given a correlation matrix $C$ of $N$ assets, the spectral decomposition is:

$$
C = V \Lambda V^T
$$

Where:
- $\Lambda = \text{diag}(\lambda_1, \lambda_2, \dots, \lambda_N)$ are the eigenvalues sorted in ascending order.
- $V = [v_1, v_2, \dots, v_N]$ are the corresponding orthonormal eigenvectors.

An **Eigenportfolio** $E_i$ is a vector of weights $w_i$ proportional to the $i$-th eigenvector $v_i$. Normalisation ensures the portfolio is investable:

$$
w_{i,j} = \frac{v_{i,j}}{\sum_k |v_{i,k}|} \quad \text{or} \quad w_{i,j} = \frac{v_{i,j}}{\sigma_j}
$$

The variance of eigenportfolio $i$ equals its eigenvalue $\lambda_i$, and any two eigenportfolios $i \neq j$ are orthogonal: $w_i^T C w_j = 0$.

## The Marchenko-Pastur Bound

Under the null hypothesis of i.i.d. Gaussian returns and ratio $q = T/N$, the theoretical upper bound of noise eigenvalues is:

$$
\lambda_+ = \sigma^2 \left(1 + \frac{1}{\sqrt{q}}\right)^2
$$

where $\sigma^2$ is the variance of the off-diagonal correlations. Eigenvalues $\lambda_i > \lambda_+$ carry genuine cross-sectional signal:

- **First Eigenvector** ($v_1$): The **Market Factor** — all weights typically have the same sign, capturing broad market risk.
- **Subsequent significant vectors**: Represent **Sector Factors** or **Style Factors** (Value, Momentum, Quality).
- **Noise cluster** ($\lambda_i \leq \lambda_+$): Discard or replace with a shrinkage estimate.

## Denoised Correlation Matrix

Once the signal eigenvalues and their vectors are identified, a **denoised** correlation matrix is reconstructed:

$$
\tilde{C} = \sum_{i: \lambda_i > \lambda_+} \lambda_i v_i v_i^T + \hat{\lambda}_{\text{noise}} \sum_{i: \lambda_i \leq \lambda_+} v_i v_i^T
$$

where $\hat{\lambda}_{\text{noise}}$ is chosen so that $\text{tr}(\tilde{C}) = N$. This denoised matrix is used directly in mean-variance optimisation, resulting in dramatically lower turnover and more stable weights.

## Key Properties

- Eigenportfolios are by construction uncorrelated: their correlation matrix is the identity.
- The explained variance fraction of factor $k$ is $\lambda_k / \sum_i \lambda_i$.
- The top eigenvalue $\lambda_1$ typically explains 25–50% of total variance in equity markets, corresponding to the market factor.
- Eigenvectors are unique only up to sign; conventions must be fixed before building factor returns.

## Python: Extracting Signal Eigenportfolios

```python
import numpy as np

def get_marchenko_pastur_upper(q: float, sigma_sq: float = 1.0) -> float:
    """Upper bound of noise eigenvalue spectrum."""
    return sigma_sq * (1 + 1 / np.sqrt(q)) ** 2

def get_signal_eigenportfolios(corr_matrix: np.ndarray, T: int):
    """
    Return signal eigenvectors and denoised correlation matrix.
    corr_matrix: (N, N) correlation matrix
    T: number of time-series observations used to estimate it
    """
    N = corr_matrix.shape[0]
    q = T / N
    lambda_plus = get_marchenko_pastur_upper(q)

    eigenvalues, eigenvectors = np.linalg.eigh(corr_matrix)  # ascending order

    # Identify signal eigenvalues
    signal_mask = eigenvalues > lambda_plus
    signal_eigenvalues = eigenvalues[signal_mask]
    signal_eigenvectors = eigenvectors[:, signal_mask]

    # Build denoised correlation matrix
    noise_eigenvalue_mean = eigenvalues[~signal_mask].mean()
    denoised = (
        signal_eigenvectors @ np.diag(signal_eigenvalues) @ signal_eigenvectors.T
        + noise_eigenvalue_mean
        * eigenvectors[:, ~signal_mask]
        @ eigenvectors[:, ~signal_mask].T
    )
    # Rescale diagonal back to 1
    diag = np.diag(denoised)
    scale = np.sqrt(np.outer(diag, diag))
    denoised_corr = denoised / scale

    # Build eigenportfolio weight vectors (L1-normalised)
    weights = {}
    for i, (lam, vec) in enumerate(
        zip(signal_eigenvalues[::-1], signal_eigenvectors[:, ::-1].T)
    ):
        w = vec / np.sum(np.abs(vec))
        weights[f"EP_{i+1}_lambda={lam:.2f}"] = w

    return weights, denoised_corr

# Example: 3x3 correlation matrix, T=500 observations
C = np.array([[1.0, 0.6, 0.4], [0.6, 1.0, 0.5], [0.4, 0.5, 1.0]])
ep_weights, C_clean = get_signal_eigenportfolios(C, T=500)
for name, w in ep_weights.items():
    print(f"{name}: {np.round(w, 3)}")
```

## Eigenvalue Spectrum Visualization

```chart
{
  "type": "bar",
  "xAxis": "eigenvalue_index",
  "data": [
    {"eigenvalue_index": "1", "eigenvalue": 2.1},
    {"eigenvalue_index": "2", "eigenvalue": 0.95},
    {"eigenvalue_index": "3", "eigenvalue": 0.88},
    {"eigenvalue_index": "4", "eigenvalue": 0.82},
    {"eigenvalue_index": "5", "eigenvalue": 0.75},
    {"eigenvalue_index": "6", "eigenvalue": 0.70},
    {"eigenvalue_index": "7", "eigenvalue": 0.65},
    {"eigenvalue_index": "8", "eigenvalue": 0.58},
    {"eigenvalue_index": "9", "eigenvalue": 0.52},
    {"eigenvalue_index": "10", "eigenvalue": 0.45}
  ],
  "bars": [
    {"dataKey": "eigenvalue", "fill": "#3b82f6", "name": "Eigenvalue (signal above λ+=1.0)"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Range |
|--------|------|-------------|---------------|
| $N$ | Number of assets | Dimension of correlation matrix | 50–3000 |
| $T$ | Observations | Lookback window length | 250–2000 days |
| $q = T/N$ | Sample ratio | Controls noise level | >2 preferred |
| $\lambda_+$ | MP upper bound | Noise eigenvalue ceiling | 1.0–3.0 |
| $\lambda_1$ | Market eigenvalue | Largest eigenvalue | $0.25N$–$0.5N$ |

## Limitations and Extensions

- **Non-stationarity**: Correlations are time-varying; rolling or exponentially weighted estimators are preferred over full-sample estimates.
- **Non-Gaussian returns**: The MP law assumes Gaussianity; for fat-tailed returns, the noise boundary shifts and a robust covariance estimator (e.g., minimum covariance determinant) is needed.
- **Rotation ambiguity**: Eigenvectors within degenerate eigenspaces are not uniquely defined; PCA rotations (varimax) can improve interpretability.
- **Sparse factor models**: An alternative is the POET estimator (Fan, Liao, Mincheva 2013), which imposes sparsity on the idiosyncratic covariance.

## Financial Applications

1. **Statistical Arbitrage**: Residual returns after projecting on top eigenportfolios (the "residual" space) are approximately uncorrelated; pairs and basket trades exploit deviations from this.
2. **Risk Decomposition**: Attribute portfolio variance to market factor, sector factors, and idiosyncratic components using eigenportfolio exposures.
3. **Denoised Optimization**: Replace the raw covariance with the RMT-cleaned version in Markowitz or minimum-variance optimisation to reduce extreme and unstable weights.
4. **Alpha Signal Construction**: The eigenportfolio residuals (idiosyncratic component) have smaller effective dimension and are easier targets for predictive models.

## Related Topics
- [[random-matrix-theory]]
- [[hierarchical-risk-parity]]
- [[eigenportfolio-rmt]]
- [[heston-model]]

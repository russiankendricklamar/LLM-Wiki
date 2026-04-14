---
title: "Random Matrix Theory (RMT)"
category: "Algorithms and ML"
order: 27
lang: "en"
---
# Random Matrix Theory (RMT)

**Random Matrix Theory (RMT)** is the study of the statistical properties of eigenvalues and eigenvectors of matrices whose entries are random variables. Originally developed in nuclear physics by Wigner (1950s) to describe the energy spectra of heavy nuclei, RMT found its way into quantitative finance through the work of Laloux, Cizeau, Bouchaud, and Potters (1999). In portfolio construction, RMT is the gold standard for filtering "noise" from the correlation matrices of large asset universes, which is critical for robust portfolio optimization.

## The Problem of Noisy Correlations

When estimating a correlation matrix for $N$ assets using $T$ observations, the estimator $\hat{\Sigma}$ has $O(N^2)$ parameters but only $T \cdot N$ data points. When $Q = T/N$ is moderate (e.g., $Q = 2$), most of the observed correlations are statistical artifacts — noise masquerading as signal. Feeding a "raw" sample covariance matrix into Markowitz mean-variance optimization causes the optimizer to exploit estimation error, resulting in extreme concentrated positions and catastrophic out-of-sample performance degradation.

The **condition number** of a sample covariance matrix grows as $O(N/T)$ for random data, meaning tiny perturbations to returns can cause enormous swings in optimal weights. RMT provides a principled way to identify and suppress these noise eigenvalues.

## Mathematical Framework

### Marchenko-Pastur Distribution

A foundational result in RMT is that for a matrix $\mathbf{W}$ with $T$ rows and $N$ columns, where entries are IID with zero mean and variance $\sigma^2$, the empirical spectral distribution of the Wishart matrix $\mathbf{C} = \frac{1}{T}\mathbf{W}^T\mathbf{W}$ converges as $N, T \to \infty$ (with $Q = T/N \ge 1$ fixed) to the **Marchenko-Pastur (MP) law**:

$$
\rho_{MP}(\lambda) = \frac{Q}{2\pi \sigma^2} \cdot \frac{\sqrt{(\lambda_+ - \lambda)(\lambda - \lambda_-)}}{\lambda}
$$

supported on $[\lambda_-, \lambda_+]$, with bulk boundaries:

$$
\lambda_\pm = \sigma^2 \left(1 \pm \frac{1}{\sqrt{Q}}\right)^2
$$

Any eigenvalue $\lambda_i > \lambda_+$ lies outside the noise band and is statistically distinguishable from pure random noise.

### Wigner Semicircle Law

For symmetric matrices with IID off-diagonal entries (Gaussian Orthogonal Ensemble), the eigenvalue density converges to the **Wigner semicircle**:

$$
\rho_{sc}(\lambda) = \frac{1}{2\pi\sigma^2}\sqrt{4\sigma^2 - \lambda^2}, \quad |\lambda| \le 2\sigma
$$

This describes the "bulk" of the spectrum for fully random matrices with no structure.

### Eigenvalue Cleaning Procedure

Let $\hat{\mathbf{C}} = \mathbf{Q}\hat{\boldsymbol{\Lambda}}\mathbf{Q}^T$ be the eigendecomposition of the sample correlation matrix, where $\hat{\boldsymbol{\Lambda}} = \text{diag}(\hat{\lambda}_1 \ge \hat{\lambda}_2 \ge \cdots \ge \hat{\lambda}_N)$.

**Step 1 — Fit MP:** Estimate $\sigma^2$ by fitting the empirical spectral distribution to the MP law, or set $\sigma^2 = 1$ for correlation matrices. Compute $\lambda_+$.

**Step 2 — Separate signal from noise:**
$$
\hat{\lambda}_i^{\text{clean}} = \begin{cases} \hat{\lambda}_i & \text{if } \hat{\lambda}_i > \lambda_+ \quad (\text{signal}) \\ \bar{\lambda}_{noise} & \text{if } \hat{\lambda}_i \le \lambda_+ \quad (\text{noise}) \end{cases}
$$

where $\bar{\lambda}_{noise}$ is the average of all noise eigenvalues, chosen to preserve the matrix trace (total variance):

$$
\sum_{i: \hat{\lambda}_i \le \lambda_+} \hat{\lambda}_i^{\text{clean}} = \sum_{i: \hat{\lambda}_i \le \lambda_+} \hat{\lambda}_i
$$

**Step 3 — Reconstruct:**
$$
\hat{\mathbf{C}}^{\text{RMT}} = \mathbf{Q}\hat{\boldsymbol{\Lambda}}^{\text{clean}}\mathbf{Q}^T
$$

An alternative **Oracle Shrinkage** method (Ledoit-Wolf analytical shrinkage) computes:
$$
\hat{\mathbf{C}}^{LW} = \rho \hat{\mathbf{C}} + (1 - \rho) \mathbf{I}
$$
where $\rho$ is selected by minimizing the Frobenius norm of the estimation error.

## Key Properties and Assumptions

- **IID assumption**: MP law holds exactly for matrices with independent, identically distributed entries; real returns have serial correlations, so the threshold $\lambda_+$ is approximate.
- **Bulk universality**: The bulk spectral statistics are universal — they do not depend on the specific distribution of matrix entries, only on the variance $\sigma^2$.
- **Large-$N$ limit**: The cleaning is asymptotically valid; for $N < 50$ assets, exact finite-sample corrections should be applied.
- **Factor model interpretation**: Eigenvalues above $\lambda_+$ correspond to market-wide or sector-level risk factors, often matching the Fama-French factor structure.
- **No shrinkage of direction**: RMT cleaning modifies eigenvalues but preserves eigenvectors; this is optimal only when eigenvectors are estimated without error (rarely true).

## Python Implementation

```python
import numpy as np
from scipy.optimize import minimize_scalar

def marchenko_pastur_pdf(lam, sigma2, Q):
    """Marchenko-Pastur PDF."""
    lam_plus = sigma2 * (1 + 1/np.sqrt(Q))**2
    lam_minus = sigma2 * (1 - 1/np.sqrt(Q))**2
    if lam < lam_minus or lam > lam_plus:
        return 0.0
    return (Q / (2 * np.pi * sigma2 * lam)) * np.sqrt((lam_plus - lam) * (lam - lam_minus))

def get_mp_bounds(T: int, N: int, sigma: float = 1.0) -> tuple[float, float]:
    """Marchenko-Pastur noise boundaries."""
    Q = T / N
    lam_plus = sigma**2 * (1 + 1/np.sqrt(Q))**2
    lam_minus = sigma**2 * (1 - 1/np.sqrt(Q))**2
    return lam_minus, lam_plus

def rmt_denoise(corr_matrix: np.ndarray, T: int) -> np.ndarray:
    """
    RMT eigenvalue cleaning for a correlation matrix.
    Returns the denoised correlation matrix preserving trace.
    """
    N = corr_matrix.shape[0]
    eigenvalues, eigenvectors = np.linalg.eigh(corr_matrix)
    eigenvalues = eigenvalues[::-1]
    eigenvectors = eigenvectors[:, ::-1]

    _, lam_plus = get_mp_bounds(T, N)

    signal_mask = eigenvalues > lam_plus
    noise_eigenvalues = eigenvalues[~signal_mask]
    noise_mean = noise_eigenvalues.mean() if noise_eigenvalues.size > 0 else 1.0

    cleaned_eigenvalues = np.where(signal_mask, eigenvalues, noise_mean)

    # Reconstruct cleaned correlation matrix
    cleaned_corr = eigenvectors @ np.diag(cleaned_eigenvalues) @ eigenvectors.T

    # Re-normalize diagonal to 1 (correlation matrix constraint)
    diag_sqrt = np.sqrt(np.diag(cleaned_corr))
    cleaned_corr = cleaned_corr / np.outer(diag_sqrt, diag_sqrt)
    return cleaned_corr

# ---- Example ----
np.random.seed(42)
T, N = 1000, 200
returns = np.random.randn(T, N)
sample_corr = np.corrcoef(returns.T)

cleaned_corr = rmt_denoise(sample_corr, T)
lam_minus, lam_plus = get_mp_bounds(T, N)
print(f"MP noise band: [{lam_minus:.4f}, {lam_plus:.4f}]")
print(f"Raw eigenvalue range: [{np.linalg.eigvalsh(sample_corr).min():.4f}, "
      f"{np.linalg.eigvalsh(sample_corr).max():.4f}]")
print(f"Fraction noise eigenvalues: "
      f"{(np.linalg.eigvalsh(sample_corr) <= lam_plus).mean():.1%}")
```

## Eigenvalue Spectrum: Signal vs. Noise

```chart
{
  "type": "bar",
  "xAxis": "index",
  "data": [
    {"index": "1 (Market)", "val": 15.5},
    {"index": "2 (Sector A)", "val": 4.2},
    {"index": "3 (Sector B)", "val": 3.8},
    {"index": "4 (Sector C)", "val": 2.9},
    {"index": "5 (Noise)", "val": 1.3},
    {"index": "6 (Noise)", "val": 1.1},
    {"index": "7 (Noise)", "val": 0.9},
    {"index": "8 (Noise)", "val": 0.7}
  ],
  "bars": [
    {"dataKey": "val", "fill": "#3b82f6", "name": "Eigenvalue λ"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Range |
| :--- | :--- | :--- | :--- |
| $N$ | Asset count | Number of assets in portfolio | 50 – 3000 |
| $T$ | Observation count | Number of return observations | 250 – 5000 |
| $Q = T/N$ | Ratio | Controls width of noise band | 1 – 20 |
| $\lambda_+$ | MP upper bound | Noise eigenvalue ceiling | 1.5 – 5.0 (for $\sigma=1$) |
| $\sigma^2$ | Return variance | Variance of individual returns | Calibrated to data |
| $\bar{\lambda}_{noise}$ | Noise level | Replacement value for noise eigenvalues | $\approx 1/(1 + 1/Q)$ |

## Limitations and Extensions

- **Non-stationarity**: Correlations are time-varying; RMT assumes a static $\Sigma$. Rolling-window RMT or regime-conditional cleaning is needed.
- **Eigenvector noise**: RMT cleans eigenvalues but not eigenvectors, which can themselves be noisy for small $T/N$. The Rotation-cleaning (Bun et al. 2017) extends the framework.
- **Non-Gaussian returns**: Heavy tails shift the MP threshold; robust alternatives use $\alpha$-stable distribution fits.
- **Factor structure**: For known factor models, the James-Stein shrinkage and analytic Ledoit-Wolf shrinkage often outperform ad-hoc RMT cleaning.
- **Deep learning**: Neural covariance estimators (e.g., POET, DCC-GARCH) can capture dynamics that pure RMT cleaning ignores.

## Practical Applications

1. **Portfolio optimization**: Replace raw covariance in mean-variance optimization with the RMT-cleaned matrix to obtain stable, diversified portfolios with much lower turnover.
2. **Risk factor discovery**: Eigenportfolios above $\lambda_+$ serve as data-driven risk factors analogous to PCA factors, interpretable as market, sector, and style effects.
3. **Systemic risk monitoring**: When $\lambda_1/\lambda_+$ (the market factor dominance ratio) spikes, correlations are synchronizing — a leading indicator of market stress.
4. **Execution cost models**: RMT-cleaned impact matrices improve transaction cost estimates in Almgren-Chriss style execution models.
5. **Stress testing**: Perturbing RMT-cleaned matrices in a controlled way allows for more realistic scenario generation compared to perturbing raw noisy matrices.

## Related Topics
- [[hierarchical-risk-parity]]
- [[eigenportfolio-rmt]]
- [[quantum-entanglement]]
- [[principal-component-analysis]]
- [[value-at-risk]]

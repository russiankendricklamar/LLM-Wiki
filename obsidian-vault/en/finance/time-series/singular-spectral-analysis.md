---
slug: "/finance/singular-spectral-analysis"
title: "Singular Spectral Analysis (SSA)"
category: "Signal Analysis"
order: 33
lang: "en"
---
# Singular Spectral Analysis (SSA)

**Singular Spectral Analysis (SSA)** is a non-parametric method for decomposing and forecasting time series by extracting additive components — trends, oscillations, and noise — without assuming a fixed functional form. Developed independently by Broomhead and King (1986) in dynamical systems and Vautard and Ghil (1989) in climate science, SSA is particularly well-suited for non-stationary financial data where Fourier methods suffer from spectral leakage and model misspecification.

## Prerequisites

[[spectral-analysis]], [[wavelet-transform]]

## Background

Classical spectral methods (FFT, ARMA) assume either strict stationarity or a parametric model. Financial time series violate both assumptions: volatility clusters, correlations change regime, and market cycles are non-stationary. SSA sidesteps these constraints by working directly with the geometry of the time series through singular value decomposition, making it model-free and adaptive.

## Mathematical Framework

### Step 1 — Embedding

Given a time series $X = (x_1, x_2, \dots, x_N)$ and window length $L$ (with $K = N - L + 1 \ge L$), construct the $L \times K$ **trajectory matrix** (Hankel matrix):

$$
\mathbf{X} = \begin{pmatrix}
x_1 & x_2 & \cdots & x_K \\
x_2 & x_3 & \cdots & x_{K+1} \\
\vdots & \vdots & \ddots & \vdots \\
x_L & x_{L+1} & \cdots & x_N
\end{pmatrix}
$$

Each column is a lagged window of length $L$; the Hankel structure means anti-diagonals are constant.

### Step 2 — Singular Value Decomposition

Compute the SVD of $\mathbf{X}$:
$$
\mathbf{X} = \sum_{i=1}^{d} \sqrt{\lambda_i} \, \mathbf{U}_i \mathbf{V}_i^T
$$

where $d = \text{rank}(\mathbf{X})$, $\lambda_1 \ge \lambda_2 \ge \cdots \ge \lambda_d > 0$ are [[spectral-theory-operators|eigenvalues]] of $\mathbf{S} = \mathbf{X}\mathbf{X}^T$, and $\mathbf{U}_i$ (left singular vectors, also called **Empirical Orthogonal Functions**, EOFs) and $\mathbf{V}_i$ (right singular vectors, **Principal Components**, PCs) are the spectral modes.

The **singular spectrum** $\{\lambda_i\}$ reveals the relative importance of each mode: a trend mode typically captures a disproportionately large fraction of total variance $\sum_i \lambda_i$.

### Step 3 — Grouping

Partition the index set $\{1, \dots, d\}$ into disjoint groups $\mathcal{G}_1, \mathcal{G}_2, \dots$:
- **Trend**: indices corresponding to slowly-varying EOFs (usually first 1–2 components)
- **Oscillations**: pairs of indices with similar eigenvalues and approximately sinusoidal EOFs (indicate periodicity at a specific frequency)
- **Noise**: remaining indices with small $\lambda_i$ and irregular EOFs

The reconstructed matrix for group $\mathcal{G}$: $\mathbf{X}_\mathcal{G} = \sum_{i \in \mathcal{G}} \sqrt{\lambda_i} \mathbf{U}_i \mathbf{V}_i^T$.

### Step 4 — Diagonal Averaging (Hankelization)

Convert each component matrix $\mathbf{X}_\mathcal{G}$ back to a 1D series by averaging along anti-diagonals. For element $(\mathbf{X}_\mathcal{G})_{ij}$, the reconstructed value at position $t = i + j - 1$:

$$
\tilde{x}_t^\mathcal{G} = \frac{1}{|\mathcal{D}_t|} \sum_{(i,j): i+j-1=t} (\mathbf{X}_\mathcal{G})_{ij}
$$

where $|\mathcal{D}_t|$ is the number of valid anti-diagonal elements at position $t$.

### SSA-LRF Forecasting

SSA supports **Linear Recurrence Forecasting (LRF)**. If the signal is governed by a linear recurrence $x_t = \sum_{k=1}^{r} a_k x_{t-k}$, the coefficients can be extracted from the signal EOFs and used to extend the series $M$ steps ahead:

$$
x_{N+m} = \sum_{k=1}^{L-1} a_k x_{N+m-k}, \quad m = 1, \dots, M
$$

The coefficients $\mathbf{a} = (a_1, \dots, a_{L-1})^T$ are computed from the principal subspace of the signal EOFs via the formula:
$$
\mathbf{a} = \frac{1}{1 - \pi_L^2} \tilde{\mathbf{U}} \pi_L
$$
where $\pi_L$ is the last component of each signal EOF and $\tilde{\mathbf{U}}$ is the matrix of signal EOFs with last row removed.

### W-Correlation

The **W-correlation** between two reconstructed components $\tilde{X}^{(i)}$ and $\tilde{X}^{(j)}$ measures their separability:
$$
\rho^W_{ij} = \frac{\langle \tilde{X}^{(i)}, \tilde{X}^{(j)} \rangle_w}{\|\tilde{X}^{(i)}\|_w \|\tilde{X}^{(j)}\|_w}
$$
Components with $|\rho^W_{ij}| \approx 0$ are well-separated; high W-correlation indicates they should be grouped together.

## Key Properties

- **No stationarity assumption**: SSA works on deterministic, stochastic, and mixed processes without requiring constant mean or variance.
- **Data-adaptive**: The decomposition basis (EOFs) is derived from the data itself, unlike Fourier (fixed sine/cosine basis) or wavelet (fixed mother wavelet).
- **Window length choice**: $L \approx N/4$ to $N/3$ is typically recommended; $L$ must be large enough to capture the lowest frequency of interest.
- **Identifiability**: Periodic components appear as pairs $(\lambda_i, \lambda_{i+1})$ with similar eigenvalues and quadrature-phase EOFs. Trend appears as a single dominant eigenvalue.
- **Computational cost**: SVD of $L \times K$ matrix costs $O(L^2 K)$; for large series, randomized SVD (RSVD) is used.

## Python Implementation

```python
import numpy as np
from typing import Optional

def ssa_decompose(
    series: np.ndarray,
    L: int,
    n_components: Optional[int] = None
) -> dict:
    """
    Full SSA decomposition: embedding, SVD, and diagonal averaging.

    Args:
        series: 1D time series of length N
        L: window (embedding) length
        n_components: number of SVD components to retain (default: all)

    Returns:
        dict with 'eigenvalues', 'eof' (U), 'pc' (V), 'components' (reconstructed 1D series)
    """
    N = len(series)
    K = N - L + 1
    assert K >= L, f"Need K={K} >= L={L}; reduce L or increase N"

    # Embedding: build trajectory (Hankel) matrix
    X = np.column_stack([series[i:i+L] for i in range(K)])  # L x K

    # SVD
    U, s, Vt = np.linalg.svd(X, full_matrices=False)
    eigenvalues = s**2

    if n_components is not None:
        U = U[:, :n_components]
        s = s[:n_components]
        Vt = Vt[:n_components, :]
        eigenvalues = eigenvalues[:n_components]

    d = len(s)

    # Reconstruct individual components via diagonal averaging
    components = []
    for i in range(d):
        Xi = s[i] * np.outer(U[:, i], Vt[i, :])   # L x K matrix for component i

        # Diagonal averaging (anti-diagonal mean)
        reconstructed = np.zeros(N)
        counts = np.zeros(N)
        for row in range(L):
            for col in range(K):
                t = row + col
                reconstructed[t] += Xi[row, col]
                counts[t] += 1
        components.append(reconstructed / counts)

    return {
        "eigenvalues": eigenvalues,
        "eof": U,
        "pc": Vt,
        "components": np.array(components),
        "var_explained": eigenvalues / eigenvalues.sum()
    }


def ssa_reconstruct(components: np.ndarray, indices: list[int]) -> np.ndarray:
    """Sum SSA components at given indices to reconstruct a signal."""
    return components[indices].sum(axis=0)


def ssa_forecast(
    series: np.ndarray,
    L: int,
    signal_indices: list[int],
    n_ahead: int
) -> np.ndarray:
    """
    SSA Linear Recurrence Forecasting (LRF).
    Projects the signal subspace forward n_ahead steps.
    """
    result = ssa_decompose(series, L, n_components=max(signal_indices) + 1)
    U_signal = result["eof"][:, signal_indices]   # L x r

    # Compute LRF coefficients
    U_top = U_signal[:-1, :]   # (L-1) x r
    u_bottom = U_signal[-1, :]  # (r,)
    pi_sq = float(np.dot(u_bottom, u_bottom))

    if pi_sq >= 1.0 - 1e-10:
        raise ValueError("Signal subspace has unit norm in last component; LRF unstable")

    R = U_top @ np.linalg.pinv(U_top.T @ U_top) @ U_top.T
    a_coeffs = (1.0 / (1.0 - pi_sq)) * (U_top @ u_bottom)   # (L-1,)

    # Extend series
    extended = list(series.copy())
    for _ in range(n_ahead):
        x_new = float(np.dot(a_coeffs, extended[-(L-1):]))
        extended.append(x_new)

    return np.array(extended[len(series):])


def w_correlation_matrix(components: np.ndarray, L: int) -> np.ndarray:
    """Compute W-correlation matrix for separability assessment."""
    N_total = components.shape[1]
    K = N_total - L + 1
    d = len(components)

    # Weights: w_t = min(t, L, K, N-t+1)
    weights = np.array([
        min(t + 1, L, K, N_total - t) for t in range(N_total)
    ], dtype=float)

    wcorr = np.zeros((d, d))
    norms = np.array([
        np.sqrt(np.dot(weights, comp**2)) for comp in components
    ])

    for i in range(d):
        for j in range(i, d):
            num = np.dot(weights, components[i] * components[j])
            wcorr[i, j] = wcorr[j, i] = num / (norms[i] * norms[j])

    return wcorr


# ---- Example ----
np.random.seed(42)
N = 300
t = np.arange(N)
# Synthetic: trend + 10-period cycle + noise
series = (0.005 * t
          + 2.0 * np.sin(2 * np.pi * t / 10)
          + 0.5 * np.sin(2 * np.pi * t / 30)
          + np.random.normal(0, 0.5, N))

L = 60   # window length ~N/5
result = ssa_decompose(series, L, n_components=10)

print("Variance explained by first 6 components:")
for i, ve in enumerate(result["var_explained"][:6]):
    print(f"  Component {i+1}: {ve:.3%}")

# Reconstruct trend (component 0) and dominant cycle (components 1-2)
trend = ssa_reconstruct(result["components"], [0])
cycle = ssa_reconstruct(result["components"], [1, 2])

# Forecast 20 steps ahead using signal components
forecast = ssa_forecast(series, L, signal_indices=[0, 1, 2], n_ahead=20)
print(f"\nSSA forecast (next 5 values): {forecast[:5].round(3)}")
```

## SSA Variance Decomposition

```chart
{
  "type": "bar",
  "xAxis": "component",
  "data": [
    {"component": "C1 (Trend)",   "var_pct": 62.0},
    {"component": "C2 (Cycle1a)", "var_pct": 14.5},
    {"component": "C3 (Cycle1b)", "var_pct": 13.8},
    {"component": "C4 (Cycle2a)", "var_pct": 3.2},
    {"component": "C5 (Cycle2b)", "var_pct": 2.9},
    {"component": "C6 (Noise)",   "var_pct": 1.5},
    {"component": "C7+ (Noise)",  "var_pct": 2.1}
  ],
  "bars": [
    {"dataKey": "var_pct", "fill": "#8b5cf6", "name": "Variance Explained (%)"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Range |
| :--- | :--- | :--- | :--- |
| $N$ | Series length | Total observations | 50 – 10000 |
| $L$ | Window length | Embedding dimension | $N/10$ – $N/3$ |
| $K = N-L+1$ | Trajectory columns | Must satisfy $K \ge L$ | — |
| $d$ | Rank | Number of non-zero eigenvalues | $\min(L, K)$ |
| $\lambda_i$ | Eigenvalue | Variance captured by component $i$ | 0 – $\|\mathbf{X}\|_F^2$ |
| $r$ | Signal rank | Number of components used in LRF | 2 – 10 |

## Limitations and Extensions

- **Window choice**: Results are sensitive to $L$; too small misses long cycles, too large creates mixing. Automated selection via MDL or cross-validation improves robustness.
- **Non-uniqueness of grouping**: Grouping oscillatory components requires visual inspection of EOFs and eigenvalue pairs; automated grouping algorithms (e.g., k-means on EOFs) exist but are imperfect.
- **Multivariate SSA (M-SSA)**: Extends SSA to multiple simultaneous time series, enabling detection of common oscillatory modes across assets or macro indicators.
- **Online SSA**: Streaming variants update the SVD incrementally for real-time signal extraction without reprocessing the full history.
- **Forecasting limitations**: SSA-LRF assumes a linear recurrence structure; strongly nonlinear or chaotic series require ensemble or Monte Carlo extensions.

## Practical Applications

1. **Price trend extraction**: SSA trend component provides a smoother, lag-reduced alternative to moving averages for generating trading signals.
2. **Business cycle identification**: SSA applied to GDP or industrial production extracts sub-cycles (Kitchin ~40 months, Juglar ~9 years) without imposing parametric cycle lengths.
3. **Volatility regime decomposition**: SSA of realized variance isolates slowly-varying volatility trends from high-frequency noise for improved GARCH initialization.
4. **Macro forecasting**: M-SSA on yield curve components (level, slope, curvature) extracts leading indicators for regime shifts in interest rate policy.
5. **Change-point detection**: A sudden drop in the first eigenvalue's variance share signals a structural break in the dominant trend — a quantitative regime change indicator.

## Related Topics
- [[spectral-analysis]]
- [[wavelet-transform]]
- [[random-matrix-theory]]
- [[principal-component-analysis]]
- [[volatility-forecasting]]

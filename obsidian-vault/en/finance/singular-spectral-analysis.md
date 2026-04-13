---
title: "Singular Spectral Analysis (SSA)"
category: "Signal Analysis"
order: 110
lang: "en"
---
# Singular Spectral Analysis (SSA)

**Singular Spectral Analysis (SSA)** is a non-parametric spectral estimation method that decomposes a time series into a set of additive components: trends, periodic signals, and noise. Unlike Fourier-based methods, SSA is data-adaptive and does not require a fixed functional form for the components (like sines or cosines), making it exceptionally robust for non-stationary financial data.

## Theoretical Foundation

SSA treats a time series as a realization of a dynamical system and applies Singular Value Decomposition (SVD) to a trajectory matrix derived from the series. The process consists of four main steps:
1. **Embedding**: Transforming the 1D series into a multi-dimensional trajectory matrix (Hankel matrix).
2. **Singular Value Decomposition (SVD)**: Decomposing the trajectory matrix into its singular spectrum.
3. **Grouping**: Categorizing singular vectors into trend, oscillatory, and noise components.
4. **Diagonal Averaging**: Reconstructing the 1D series from the grouped components.

## Mathematical Formulation

Given a time series $X = (x_1, \dots, x_N)$ and a window length $L$, we construct the $L \times K$ trajectory matrix $\mathbf{X}$ (where $K = N - L + 1$):

$$
\mathbf{X} = \begin{pmatrix} 
x_1 & x_2 & \dots & x_K \\
x_2 & x_3 & \dots & x_{K+1} \\
\vdots & \vdots & \ddots & \vdots \\
x_L & x_{L+1} & \dots & x_N 
\end{pmatrix}
$$

The SVD of $\mathbf{X}$ is $\mathbf{X} = \sum_{i=1}^d \sqrt{\lambda_i} U_i V_i^T$, where $\lambda_i$ are eigenvalues of $\mathbf{X}\mathbf{X}^T$, and $U_i$ are the principal components (EOFs). The original series is reconstructed by averaging along the anti-diagonals of the matrices $\mathbf{X}_i = \sqrt{\lambda_i} U_i V_i^T$.

## Practical Relevance in Finance

SSA is widely used by quantitative researchers for:
- **Denoising**: Separating high-frequency market noise from underlying price trends.
- **Cycle Extraction**: Identifying dominant business or market cycles without the leakage issues of FFT.
- **Forecasting**: Multi-step prediction by extending the principal components (SSA-LRF).
- **Change-point Detection**: Monitoring the singular spectrum for structural breaks in volatility or regime shifts.

## Python: SSA Implementation Sketch

```python
import numpy as np

def ssa_decompose(series, L):
    N = len(series)
    K = N - L + 1
    # Embedding
    X = np.column_stack([series[i:i+L] for i in range(K)])
    
    # SVD
    U, s, Vh = np.linalg.svd(X)
    
    # Example: Reconstruct first component (Trend)
    X1 = s[0] * np.outer(U[:, 0], Vh[0, :])
    
    # Diagonal Averaging
    reconstructed = np.zeros(N)
    for i in range(L):
        for j in range(K):
            reconstructed[i+j] += X1[i, j]
    
    weights = np.zeros(N)
    for i in range(L):
        for j in range(K):
            weights[i+j] += 1
            
    return reconstructed / weights
```

## Related Topics
- [[spectral-analysis]]
- [[wavelet-transform]]
- [[random-matrix-theory]]
- [[principal-component-analysis]]

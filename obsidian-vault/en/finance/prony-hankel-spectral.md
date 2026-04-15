---
title: "Prony's Method and Hankel Spectral Analysis"
category: "Signal Analysis"
order: 83
lang: "en"
---

# Prony's Method and Hankel Spectral Analysis

**Prony's method** decomposes a time series into a sum of complex exponentials with arbitrary (non-integer) frequencies. Unlike the [[fourier-transform|Fourier Transform]], it requires no stationarity assumption and achieves sub-sample frequency resolution on short windows — making it valuable for detecting transient spectral regimes in financial price data.

## Problem Formulation

Given signal $\{x_0,\ldots,x_{N-1}\}$, find:

$$
x_n \approx \sum_{k=1}^{p} c_k z_k^n
$$

where $z_k = e^{(\alpha_k + i2\pi f_k)\Delta t}$ are complex poles and $c_k$ are complex amplitudes. The real parts $\alpha_k$ give damping; the imaginary parts give frequencies $f_k$.

## Algorithm

### Step 1: Linear Prediction via Hankel System

Coefficients $a_1,\ldots,a_p$ of the autoregressive filter satisfy:

$$
\mathbf{H}\mathbf{a} = -\mathbf{b}
$$

where $\mathbf{H}$ is the **Hankel matrix** formed from $\{x_0,\ldots,x_{N-p-1}\}$ and $\mathbf{b} = (x_{p+1},\ldots,x_N)^\top$. Solved by least squares.

### Step 2: Root Finding

Poles $z_k$ are roots of the characteristic polynomial:

$$
P(z) = z^p + a_1 z^{p-1} + \cdots + a_p
$$

Frequencies: $f_k = \text{Im}(\ln z_k)/(2\pi\Delta t)$; damping: $\alpha_k = \text{Re}(\ln z_k)/\Delta t$.

### Step 3: Amplitude Estimation

Solve the Vandermonde system $\mathbf{V}\mathbf{c} = \mathbf{x}$ in least squares, where $V_{nk} = z_k^n$.

## Hankel SVD Filtering

The Hankel matrix has rank $p$ for a pure $p$-exponential signal. SVD-truncation filters noise:

$$
\hat{\mathbf{H}} = \sum_{i=1}^{p} \sigma_i \mathbf{u}_i \mathbf{v}_i^\top
$$

Anti-diagonal averaging (Hankelization) of $\hat{\mathbf{H}}$ reconstructs the denoised signal — closely related to [[singular-spectral-analysis|SSA]].

## Implementation

```python
import numpy as np

def hankel_matrix(x: np.ndarray, L: int) -> np.ndarray:
    N, K = len(x), len(x) - L + 1
    H = np.zeros((L, K))
    for i in range(L): H[i] = x[i:i+K]
    return H


def prony(x: np.ndarray, p: int) -> dict:
    """Decompose signal x into p complex exponentials."""
    N = len(x)
    H = hankel_matrix(x[:-1], p)[:, :N-p]
    a_coeffs, *_ = np.linalg.lstsq(H.T, x[p:], rcond=None)

    poly = np.concatenate([[1], -a_coeffs])
    poles = np.roots(poly)

    V = np.vander(poles, N, increasing=True).T
    amplitudes, *_ = np.linalg.lstsq(V, x, rcond=None)

    log_poles = np.log(poles + 1e-300)
    return {
        'poles':       poles,
        'amplitudes':  amplitudes,
        'frequencies': np.imag(log_poles) / (2 * np.pi),
        'damping':     np.real(log_poles),
    }


def hankel_svd_filter(x: np.ndarray, L: int, rank: int) -> np.ndarray:
    H = hankel_matrix(x, L)
    U, s, Vt = np.linalg.svd(H, full_matrices=False)
    s[rank:] = 0
    H_f = U @ np.diag(s) @ Vt

    N, K = len(x), H.shape[1]
    out, cnt = np.zeros(N), np.zeros(N)
    for i in range(L):
        for j in range(K):
            out[i+j] += H_f[i, j]
            cnt[i+j] += 1
    return out / np.maximum(cnt, 1)


def spectral_regime_detection(prices: np.ndarray,
                               window: int = 60,
                               p: int = 6) -> list[dict]:
    """Slide a window and report dominant Prony frequency per window."""
    log_ret = np.diff(np.log(prices))
    N = len(log_ret); results = []
    for start in range(0, N - window):
        seg = log_ret[start:start+window] - log_ret[start:start+window].mean()
        try:
            res = prony(seg, p)
            mask = (np.abs(res['poles']) <= 1.0) & (res['frequencies'] > 0)
            if mask.any():
                amps = np.abs(res['amplitudes'][mask])
                freqs = res['frequencies'][mask]
                idx = amps.argmax()
                results.append({
                    'start': start,
                    'period_bars': 1/freqs[idx],
                    'amplitude': float(amps[idx]),
                })
        except Exception:
            pass
    return results
```

## Comparison with FFT

| Property | FFT | Prony |
|----------|-----|-------|
| Data length | Long (256+) | Short (20+) |
| Frequency resolution | $1/N$ | Sub-sample |
| Frequency grid | Integer multiples of $1/N$ | Arbitrary real |
| Noise robustness | High (windowed) | Moderate (SVD helps) |
| Complexity | $O(N\log N)$ | $O(Np^2)$ |

## Regime Interpretation

| Period (bars) | Typical interpretation |
|--------------|----------------------|
| 5–10 | Intraday session rhythm |
| 20–30 | Monthly calendar effect |
| 60–65 | Quarterly seasonality |
| > 200 | Trend component |

## Related Articles

- [[spectral-analysis|Spectral Analysis]] — FFT and periodograms
- [[fourier-transform|Fourier Transform]] — theoretical foundations
- [[singular-spectral-analysis|Singular Spectral Analysis]] — closely related SVD approach
- [[hilbert-huang-transform|Hilbert-Huang Transform]] — adaptive decomposition
- [[wavelet-transform|Wavelet Transform]] — time-frequency analysis

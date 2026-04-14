---
title: "Hilbert-Huang Transform (HHT)"
category: "Signal Analysis"
order: 31
lang: "en"
---
# Hilbert-Huang Transform (HHT)

The **Hilbert-Huang Transform (HHT)** is a high-resolution signal processing technique specifically designed for analyzing non-linear and non-stationary time series. Developed by Norden Huang and colleagues at NASA in 1998, HHT is an adaptive, data-driven method that provides a precise description of a signal's instantaneous frequency and amplitude — without assuming the signal is linear or stationary, as Fourier and wavelet methods do.

## Background and Motivation

Financial time series are neither stationary nor linear. Volatility regimes change, cycles vary in frequency over time, and relationships between variables are non-linear. Traditional Fourier analysis assumes stationarity and decomposes the signal into fixed sine/cosine basis functions — a poor match for evolving market dynamics. Wavelet transforms improve on this but still use fixed basis functions ("mother wavelets"). HHT uses no fixed basis: it extracts the intrinsic modes of the data itself, making it fully adaptive.

## Methodology

HHT consists of two distinct stages:

### Stage 1: Empirical Mode Decomposition (EMD)

EMD decomposes a signal $x(t)$ into a finite set of **Intrinsic Mode Functions (IMFs)** and a residual trend via a "sifting" process:

1. Identify all local maxima and minima of $x(t)$.
2. Interpolate the maxima with a cubic spline to form the upper envelope $e_{\max}(t)$, and similarly for minima: $e_{\min}(t)$.
3. Compute the mean envelope: $m(t) = \frac{1}{2}[e_{\max}(t) + e_{\min}(t)]$.
4. Extract the candidate IMF: $h(t) = x(t) - m(t)$.
5. Repeat steps 1–4 on $h(t)$ until the stopping criterion is met (typically the standard deviation of successive $h$ values falls below 0.2).
6. The validated IMF $c_1(t) = h(t)$ is subtracted from $x(t)$; the process repeats on the residual until the residual is monotone.

An IMF must satisfy: (i) the number of extrema and zero crossings differ by at most one; (ii) the mean of the upper and lower envelopes is zero at every point.

The original signal is reconstructed exactly:

$$
x(t) = \sum_{k=1}^n c_k(t) + r_n(t)
$$

where $r_n(t)$ is the monotone residual (long-term trend).

### Stage 2: Hilbert Spectral Analysis

For each IMF $c_k(t)$, compute its Hilbert Transform:

$$
\hat{c}_k(t) = \frac{1}{\pi} \mathcal{P}\int_{-\infty}^{\infty} \frac{c_k(\tau)}{t - \tau}\, d\tau
$$

Form the analytic signal:

$$
z_k(t) = c_k(t) + i\hat{c}_k(t) = a_k(t)\, e^{i\theta_k(t)}
$$

Extracting instantaneous amplitude and phase:

$$
a_k(t) = \sqrt{c_k^2(t) + \hat{c}_k^2(t)}, \qquad \theta_k(t) = \arctan\!\frac{\hat{c}_k(t)}{c_k(t)}
$$

The **instantaneous frequency** of mode $k$ is:

$$
\omega_k(t) = \frac{d\theta_k(t)}{dt}
$$

The full time-frequency energy representation — the **Hilbert-Huang Spectrum** $H(\omega, t) = \sum_k a_k^2(t) \delta(\omega - \omega_k(t))$ — describes how energy is distributed across frequencies that themselves evolve over time.

## HHT vs. Fourier vs. Wavelets

| Feature | Fourier Transform | Wavelet Transform | HHT |
|:--------|:-----------------:|:-----------------:|:---:|
| **Basis Functions** | Sine/Cosine (Fixed) | Mother Wavelet (Fixed) | **Adaptive (Data-driven)** |
| **Stationarity** | Required | Not required | **Not required** |
| **Linearity** | Required | Not required | **Not required** |
| **Frequency Resolution** | Global only | Scale-dependent | **Instantaneous (Local)** |
| **Completeness** | Yes | Yes | Yes (by construction) |
| **Physical interpretability** | Low | Medium | **High** |

## Python: EMD Workflow

```python
import numpy as np
from PyEMD import EMD
from scipy.signal import hilbert

def hht_analysis(signal: np.ndarray, fs: float = 1.0) -> dict:
    """
    Perform HHT: decompose via EMD, then compute instantaneous
    frequency and amplitude for each IMF.

    Args:
        signal: 1D time series (e.g., price or returns)
        fs:     sampling frequency (e.g., 252 for daily data)

    Returns:
        dict with IMFs, instantaneous frequencies, amplitudes, and residual
    """
    emd = EMD()
    imfs = emd(signal)                  # shape: (n_imfs, T)
    residual = signal - imfs.sum(axis=0)

    inst_freqs = []
    inst_amps  = []
    for imf in imfs:
        analytic = hilbert(imf)
        amp  = np.abs(analytic)
        phase = np.unwrap(np.angle(analytic))
        freq  = np.diff(phase) / (2 * np.pi) * fs   # Hz or cycles/period
        inst_freqs.append(np.append(freq, freq[-1]))
        inst_amps.append(amp)

    return {
        "imfs":        imfs,
        "residual":    residual,
        "inst_freqs":  np.array(inst_freqs),
        "inst_amps":   np.array(inst_amps),
    }

# --- Example: decompose a synthetic non-stationary signal ---
np.random.seed(42)
T = 500
t = np.arange(T)
# Two cycles with changing frequency + trend + noise
signal = (np.sin(2 * np.pi * t / 50)                     # slow cycle
          + np.sin(2 * np.pi * t / 10 + 0.5 * t / 100)  # accelerating fast cycle
          + 0.01 * t                                      # trend
          + 0.3 * np.random.randn(T))                    # noise

result = hht_analysis(signal, fs=252)
print(f"Number of IMFs extracted: {len(result['imfs'])}")
for k, (freq, amp) in enumerate(zip(result['inst_freqs'], result['inst_amps'])):
    print(f"  IMF {k+1}: mean freq={freq.mean():.4f}, mean amp={amp.mean():.4f}")
```

## IMF Decomposition Visualization

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "1",  "price": 100, "imf1": 0.5,  "trend": 99.5},
    {"time": "2",  "price": 102, "imf1": -0.8, "trend": 102.8},
    {"time": "3",  "price": 101, "imf1": 1.2,  "trend": 99.8},
    {"time": "4",  "price": 105, "imf1": -0.5, "trend": 105.5},
    {"time": "5",  "price": 104, "imf1": 0.2,  "trend": 103.8}
  ],
  "lines": [
    {"dataKey": "price",  "stroke": "#94a3b8", "name": "Original Signal"},
    {"dataKey": "imf1",   "stroke": "#ef4444", "name": "IMF 1 (Short Cycle)"},
    {"dataKey": "trend",  "stroke": "#10b981", "name": "Non-linear Trend (Residual)"}
  ]
}
```

## Parameter Reference

| Parameter | Description | Typical Setting |
|-----------|-------------|-----------------|
| Stopping criterion | SD threshold for sifting loop | 0.1–0.3 |
| Interpolation | Spline order for envelope | Cubic (default) |
| Max IMFs | Hard limit on decomposition | 8–15 |
| `fs` | Sampling rate | 252 (daily), 1 (tick) |

## Key Limitations

- **Mode mixing**: Occurs when signals of different scales appear in a single IMF, or a single-scale signal spreads across multiple IMFs. **Ensemble EMD (EEMD)** and **Complete EEMD with Adaptive Noise (CEEMDAN)** mitigate this by adding white noise and averaging over an ensemble of decompositions.
- **End effects**: The spline interpolation is unstable at the boundaries of the time series; mirror padding or data extension techniques reduce boundary artifacts.
- **Computational cost**: The iterative sifting process is $O(N \log N)$ but with a large constant; much slower than FFT.
- **Non-uniqueness**: EMD is not guaranteed to produce a unique decomposition; results can vary with implementation details.

## Financial Applications

- **Market cycle extraction**: Decompose price series into dominant cycles (short-term mean reversion, seasonal, business cycle) without the artifacts of fixed-window filters.
- **Adaptive denoising**: Remove the highest-frequency IMFs (representing microstructure noise) while preserving the underlying non-linear price trend.
- **Time-varying volatility analysis**: The instantaneous amplitude of the dominant IMF provides a real-time measure of market oscillation intensity — a useful leading indicator of volatility regimes.
- **Cycle-based trading**: Identify the current dominant cycle period from the Hilbert spectrum; use it to set the lookback of oscillator indicators dynamically.

## Related Topics
- [[spectral-analysis]]
- [[wavelet-transform]]
- [[fisher-transform]]
- [[hurst-exponent]]

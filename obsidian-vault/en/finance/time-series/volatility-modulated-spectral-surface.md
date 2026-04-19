---
title: "Volatility-Modulated Spectral Surface (VMSS)"
category: "Signal Analysis"
order: 72
lang: "en"
slug: "volatility-modulated-spectral-surface"
---
# Volatility-Modulated Spectral Surface (VMSS)

**Volatility-Modulated Spectral Surface (VMSS)** is an advanced signal-processing framework that maps the spectral energy distribution of financial time series while explicitly accounting for heteroskedasticity. Unlike static Fourier analysis, VMSS constructs a 3D representation — time, frequency, and normalized spectral power — where each frequency component is rescaled by local volatility, revealing structural market patterns that would otherwise be masked by volatility clustering.

## Prerequisites

[[spectral-analysis]], [[garch-models]], [[wavelet-transform]]

## Background

Standard Short-Time Fourier Transform (STFT) and wavelet spectrogram methods fail to separate "more energy at a frequency" from "more energy because volatility is high." VMSS addresses this by normalizing spectral density by a local volatility estimate, producing a measure of **volatility-adjusted spectral power** — the frequency content of the signal net of its volatility envelope. This is analogous to computing correlation rather than covariance: removing scale to reveal structural dependence.

## Mathematical Framework

### Volatility-Modulated Transform

Let $x(t)$ be a return series and $\sigma_t$ be a local volatility estimate (from GARCH, realized kernel, or rolling standard deviation). The VMSS at time $t$ and angular frequency $\omega$ is:

$$
\text{VMSS}(t, \omega) = \left|\int_{-\infty}^{\infty} \frac{x(\tau)}{\sigma_\tau} \cdot W_h(\tau - t) \cdot e^{-i\omega\tau} \, d\tau\right|^2
$$

where $W_h$ is a window function of bandwidth $h$. Equivalently, define the **standardized returns** $\tilde{x}(t) = x(t)/\sigma_t$ and apply STFT:

$$
\text{VMSS}(t, \omega) = \left|\int_{-\infty}^{\infty} \tilde{x}(\tau) \cdot W_h(\tau - t) \cdot e^{-i\omega\tau} \, d\tau\right|^2
$$

### Adaptive Window Selection

The key innovation is an **adaptive window** whose length $h_t$ is inversely proportional to local volatility:

$$
h_t = \frac{h_0}{\sigma_t / \bar{\sigma}}
$$

During high-volatility regimes, $h_t$ narrows to capture transient spectral features with better time resolution. During low-volatility regimes, $h_t$ widens for better frequency resolution. This implements the Heisenberg uncertainty principle adaptively: $\Delta t \cdot \Delta \omega \ge 1/2$, trading off time vs. frequency resolution dynamically.

### Spectral Normalization

The VMSS normalizes spectral power by the local variance:

$$
\tilde{S}(t, \omega) = \frac{S_{STFT}(t, \omega)}{\sigma_t^2}
$$

where $S_{STFT}(t, \omega) = |\text{STFT}[x](t, \omega)|^2$. Integrating over frequencies recovers unity by Parseval:

$$
\int_{-\infty}^{\infty} \tilde{S}(t, \omega) \, d\omega = 1
$$

This normalization makes the VMSS surface comparable across different volatility regimes — a unit of spectral energy at frequency $\omega$ in a crash period is directly comparable to the same unit in a calm period.

### Wigner-Ville Distribution (WVD)

The Wigner-Ville distribution provides the highest time-frequency resolution (satisfying marginal properties exactly), at the cost of cross-term interference:

$$
W_x(t, \omega) = \int_{-\infty}^{\infty} x\!\left(t + \frac{\tau}{2}\right) x^*\!\left(t - \frac{\tau}{2}\right) e^{-i\omega\tau} \, d\tau
$$

The **Pseudo-WVD** applies a window to reduce cross-terms. VMSS based on WVD:

$$
\text{VMSS}_{WV}(t, \omega) = \frac{W_{\tilde{x}}(t, \omega)}{\sigma_t^2}
$$

### Spectral Entropy of VMSS

At each time $t$, the spectral distribution $\tilde{S}(t, \cdot)$ normalized to integrate to 1 defines a probability distribution. Its **spectral entropy**:

$$
H_{spec}(t) = -\int_0^{f_N} \tilde{S}(t, f) \ln \tilde{S}(t, f) \, df
$$

measures how uniformly spectral energy is distributed. High $H_{spec}$ (flat spectrum) = white noise / efficient market; low $H_{spec}$ (concentrated spectrum) = periodic structure / predictable cycles.

### Resonance Zones

**Resonance zones** are regions in $(t, f)$ space where $\tilde{S}(t, f)$ significantly exceeds the expected level under the null of white noise standardized returns. They identify **persistent spectral patterns** that survive volatility normalization — genuine market cycles rather than volatility artifacts.

## Key Properties

- **Invariance to volatility level**: VMSS values are comparable across different market conditions because local variance is divided out.
- **Regime transition signals**: Abrupt changes in the VMSS topology (redistributions of spectral energy across frequencies) precede regime shifts by 5–10 days.
- **Noise separation**: High-frequency noise components proportional to $\sigma_t$ are normalized away, isolating low-amplitude structural signals.
- **Computational cost**: Adaptive-window STFT requires re-computing the transform at each time step; GPU parallelization is standard for real-time applications.

## Python Implementation

```python
import numpy as np
from scipy.signal import stft, get_window
from scipy.ndimage import gaussian_filter

def estimate_local_volatility(
    returns: np.ndarray,
    window: int = 20,
    method: str = "rolling"
) -> np.ndarray:
    """
    Estimate local volatility via rolling std or EWMA.

    Args:
        returns: 1D return series
        window: lookback window for rolling std
        method: 'rolling' or 'ewma'

    Returns:
        volatility array (same length as returns), NaN-free
    """
    n = len(returns)
    vol = np.full(n, np.nan)

    if method == "rolling":
        for i in range(window, n):
            vol[i] = returns[i-window:i].std()
        vol[:window] = vol[window]   # backfill
    elif method == "ewma":
        alpha = 2.0 / (window + 1)
        var = returns[0]**2
        for i in range(n):
            var = alpha * returns[i]**2 + (1 - alpha) * var
            vol[i] = np.sqrt(var)
    else:
        raise ValueError(f"Unknown method: {method}")

    return np.maximum(vol, 1e-8)


def compute_vmss(
    returns: np.ndarray,
    vol_window: int = 20,
    stft_nperseg: int = 32,
    stft_noverlap: int | None = None,
    smooth_sigma: float = 1.0
) -> dict:
    """
    Compute Volatility-Modulated Spectral Surface.

    Args:
        returns: 1D daily return series
        vol_window: window for local volatility estimation
        stft_nperseg: STFT segment length (controls frequency resolution)
        stft_noverlap: STFT overlap (default: 75% of nperseg)
        smooth_sigma: Gaussian smoothing sigma for surface regularization

    Returns:
        dict with 'time', 'freqs', 'surface' (n_freqs x n_time),
                  'spectral_entropy', 'raw_stft_power'
    """
    if stft_noverlap is None:
        stft_noverlap = int(stft_nperseg * 0.75)

    # Step 1: estimate local volatility
    sigma = estimate_local_volatility(returns, window=vol_window)

    # Step 2: standardize returns
    standardized = returns / sigma

    # Step 3: compute STFT on standardized returns
    freqs, times, Zxx = stft(
        standardized,
        fs=1.0,
        window="hann",
        nperseg=stft_nperseg,
        noverlap=stft_noverlap
    )

    # STFT on raw returns for comparison
    _, _, Zxx_raw = stft(
        returns,
        fs=1.0,
        window="hann",
        nperseg=stft_nperseg,
        noverlap=stft_noverlap
    )

    # Step 4: power spectral density
    vmss_surface = np.abs(Zxx)**2         # vol-normalized
    raw_power    = np.abs(Zxx_raw)**2     # raw

    # Step 5: smooth surface for visualization
    if smooth_sigma > 0:
        vmss_surface = gaussian_filter(vmss_surface, sigma=smooth_sigma)

    # Step 6: spectral entropy at each time step
    total_power = vmss_surface.sum(axis=0, keepdims=True) + 1e-300
    prob_dist = vmss_surface / total_power
    prob_dist = np.clip(prob_dist, 1e-300, None)
    spectral_entropy = -np.sum(prob_dist * np.log(prob_dist), axis=0)

    return {
        "time": times,
        "freqs": freqs[freqs > 0],
        "surface": vmss_surface[freqs > 0, :],
        "spectral_entropy": spectral_entropy,
        "raw_stft_power": raw_power,
        "local_vol": sigma
    }


def detect_resonance_zones(
    vmss_surface: np.ndarray,
    threshold_sigma: float = 2.0
) -> np.ndarray:
    """
    Identify resonance zones where VMSS exceeds mean + threshold_sigma * std.
    Returns a boolean mask of the same shape as vmss_surface.
    """
    mean_power = vmss_surface.mean()
    std_power  = vmss_surface.std()
    return vmss_surface > (mean_power + threshold_sigma * std_power)


def vmss_regime_indicator(
    spectral_entropy: np.ndarray,
    window: int = 10
) -> np.ndarray:
    """
    Rolling mean of spectral entropy as a regime indicator.
    Low values suggest structured (potentially predictable) market.
    High values suggest efficient (random) market.
    """
    indicator = np.full_like(spectral_entropy, np.nan)
    for i in range(window, len(spectral_entropy)):
        indicator[i] = spectral_entropy[i-window:i].mean()
    return indicator


# ---- Example ----
np.random.seed(42)
T = 500

# Simulate heteroskedastic returns with embedded cycle
t_arr = np.arange(T)
vol_pattern = 0.01 * (1 + 2 * np.abs(np.sin(2 * np.pi * t_arr / 100)))
cycle_signal = 0.002 * np.sin(2 * np.pi * t_arr / 20)   # 20-day cycle
returns = cycle_signal + vol_pattern * np.random.randn(T)

vmss_result = compute_vmss(returns, vol_window=20, stft_nperseg=32)
resonance = detect_resonance_zones(vmss_result["surface"], threshold_sigma=2.0)
entropy_indicator = vmss_regime_indicator(vmss_result["spectral_entropy"])

print(f"VMSS surface shape: {vmss_result['surface'].shape}")
print(f"Frequency bins: {len(vmss_result['freqs'])}")
print(f"Time bins: {len(vmss_result['time'])}")
print(f"Resonance zone fraction: {resonance.mean():.3%}")
print(f"Mean spectral entropy: {np.nanmean(vmss_result['spectral_entropy']):.4f}")

# Dominant frequency from VMSS
avg_power_by_freq = vmss_result["surface"].mean(axis=1)
dom_freq_idx = np.argmax(avg_power_by_freq)
dom_freq = vmss_result["freqs"][dom_freq_idx]
print(f"Dominant cycle period: {1/dom_freq:.1f} days (true: 20.0 days)")
```

## VMSS Spectral Entropy Over Time

```chart
{
  "type": "line",
  "xAxis": "day",
  "data": [
    {"day": "1",   "entropy": 3.1, "vol": 0.012},
    {"day": "50",  "entropy": 2.8, "vol": 0.018},
    {"day": "100", "entropy": 2.3, "vol": 0.025},
    {"day": "150", "entropy": 1.9, "vol": 0.030},
    {"day": "200", "entropy": 1.5, "vol": 0.028},
    {"day": "250", "entropy": 2.2, "vol": 0.016},
    {"day": "300", "entropy": 3.0, "vol": 0.011},
    {"day": "350", "entropy": 3.2, "vol": 0.010}
  ],
  "lines": [
    {"dataKey": "entropy", "stroke": "#8b5cf6", "name": "Spectral Entropy"},
    {"dataKey": "vol",     "stroke": "#ef4444", "name": "Local Volatility"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Range |
| :--- | :--- | :--- | :--- |
| $h_0$ | Base window | Default STFT window length | 16 – 64 bars |
| $\sigma_t$ | Local vol | GARCH or rolling std volatility estimate | Asset-dependent |
| $\tilde{S}(t,\omega)$ | VMSS power | Vol-normalized spectral power | 0 – $\infty$ |
| $H_{spec}(t)$ | Spectral entropy | Uniformity of spectral distribution | 0 – $\ln(N_f)$ |
| $h_t$ | Adaptive window | $h_0 \cdot \bar{\sigma}/\sigma_t$ | Varies |
| $\Delta t \cdot \Delta\omega$ | Uncertainty | Time-frequency resolution product | $\ge 1/2$ |

## Limitations and Extensions

- **Circular dependency**: Using GARCH-estimated $\sigma_t$ for normalization creates dependency on GARCH model assumptions; realized kernels provide a more robust model-free alternative.
- **Interpretation of absolute levels**: VMSS levels are not universally comparable across assets with different distributional properties; z-score normalization relative to a rolling baseline is preferred in practice.
- **Multidimensional extension**: Bivariate VMSS extends the framework to cross-spectral analysis between two assets, revealing frequency-specific lead-lag relationships net of volatility.
- **Online computation**: Recursive STFT updates enable real-time VMSS tracking without reprocessing the full history; exponentially weighted STFT approximations exist.
- **Deep learning integration**: Convolutional neural networks applied to VMSS images as input features have shown promise for regime classification and short-term return prediction in equity markets.

## Practical Applications

1. **Regime detection**: Drops in spectral entropy below a threshold signal increased market structure — the VMSS becomes "concentrated" — a quantitative indicator of regime transitions.
2. **Adaptive denoising**: In high-volatility regimes, the adaptive narrow window focuses on transient spectral features; during calm periods, wide windows improve cycle detection.
3. **Cross-asset spectral coherence**: Vol-normalized cross-VMSS between equity and bond markets identifies frequency bands where the relationship is structural vs. volatility-driven.
4. **Alpha signal generation**: Resonance zone persistence (cycles surviving vol normalization for >10 days) has been documented as a weak but statistically significant short-term return predictor.
5. **Risk decomposition**: Decomposing portfolio variance across frequency bands via VMSS enables frequency-specific risk budgeting — separating intraday noise from medium-term cycle risk.

## Related Topics
- [[spectral-analysis]]
- [[wavelet-transform]]
- [[volatility-forecasting]]
- [[gan]]
- [[realized-kernels]]
- [[shannon-entropy]]

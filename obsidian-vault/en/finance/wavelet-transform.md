---
title: "Wavelet Transform (CWT)"
category: "Signal Analysis"
order: 30
lang: "en"
---
# Continuous Wavelet Transform (CWT)

The **Continuous Wavelet Transform (CWT)** is a time-frequency analysis tool that overcomes the fundamental limitation of the Fourier Transform — the complete loss of temporal information. By decomposing a signal using localized basis functions called **wavelets**, the CWT produces a 2D scalogram showing *when* and *at what frequency* events occur. This makes it indispensable for analyzing non-stationary financial time series where market cycles appear, disappear, and shift in frequency over time.

## Background

Wavelet theory was formalized by Morlet and Grossmann (1984) and mathematically completed by Daubechies (1988), who constructed the first compactly supported orthonormal wavelets. Gençay, Selçuk, and Whitcher (2002) introduced wavelet methods to financial econometrics. Ramsey and Lampart (1998) used wavelets to study the consumption-income relationship across time scales, demonstrating that economic relationships are scale-dependent — a finding with direct implications for factor investing.

## Mathematical Framework

### Continuous Wavelet Transform

For a signal $x(t) \in L^2(\mathbb{R})$, the CWT with mother wavelet $\psi(t)$ is:

$$
W(a, b) = \frac{1}{\sqrt{|a|}} \int_{-\infty}^{\infty} x(t)\, \psi^*\!\left(\frac{t - b}{a}\right) dt
$$

where:
- $a > 0$: **scale** parameter (inversely related to frequency; large $a$ = low frequency)
- $b$: **translation** parameter (time position of the analysis window)
- $\psi^*$: complex conjugate of the mother wavelet

The **scalogram** or **power spectrum** at scale $a$ and time $b$:
$$
|W(a,b)|^2
$$

The reconstruction formula (inverse CWT):
$$
x(t) = \frac{1}{C_\psi} \int_0^\infty \int_{-\infty}^\infty W(a,b)\, \psi\!\left(\frac{t-b}{a}\right) \frac{db\, da}{a^2}
$$

where $C_\psi = \int_0^\infty |\hat{\psi}(\omega)|^2/\omega \, d\omega < \infty$ is the **admissibility constant** (requires zero mean: $\int \psi(t)dt = 0$).

### Common Mother Wavelets

**Morlet wavelet** (complex, optimal for oscillatory signals):
$$
\psi_{Morlet}(t) = \pi^{-1/4} e^{i\omega_0 t} e^{-t^2/2}, \quad \omega_0 \approx 6
$$

The Morlet wavelet has a Gaussian envelope modulating a complex exponential, giving near-optimal time-frequency resolution per Heisenberg's uncertainty principle.

**Mexican Hat** ($-$second derivative of Gaussian):
$$
\psi_{MH}(t) = \frac{2}{\sqrt{3}\pi^{1/4}}(1-t^2)e^{-t^2/2}
$$

Real-valued, good for detecting cusps and sharp transitions (price jumps).

**Daubechies wavelets** ($dbN$): Compactly supported, orthonormal, used in the DWT (Discrete Wavelet Transform). $db4$ has 4 vanishing moments, useful for polynomial trend removal.

### Discrete Wavelet Transform (DWT)

The DWT uses a dyadic grid $a = 2^j$, $b = k \cdot 2^j$ and orthonormal wavelet basis, providing a non-redundant decomposition:

$$
d_{j,k} = \int x(t)\, 2^{-j/2}\psi(2^{-j}t - k)\, dt \quad \text{(detail coefficients at scale }j\text{)}
$$
$$
c_{J,k} = \int x(t)\, 2^{-J/2}\phi(2^{-J}t - k)\, dt \quad \text{(approximation coefficients)}
$$

where $\phi(t)$ is the **scaling function** (father wavelet). The DWT is implemented in $O(N)$ via the **fast wavelet algorithm** (Mallat 1989): convolve with high-pass filter $h[n]$ and low-pass filter $g[n]$, then downsample.

### Wavelet Variance and Correlation

The **wavelet variance** at scale $j$:
$$
\nu_x^2(j) = \frac{1}{N_j}\sum_{k} d_{j,k}^2
$$

decomposes the total variance of $x(t)$ by time scale: $\text{Var}(x) = \sum_j \nu_x^2(j)$.

The **wavelet correlation** between series $x$ and $y$ at scale $j$:
$$
\rho_{xy}(j) = \frac{\nu_{xy}(j)}{\nu_x(j)\nu_y(j)}
$$

measures scale-specific linear association — two assets may be positively correlated at low frequencies (business cycles) but uncorrelated or negatively correlated at high frequencies (noise).

### Wavelet Coherence

The **wavelet coherence** (analogous to spectral coherence) for CWT coefficients $W_x(a,b)$ and $W_y(a,b)$:
$$
R^2(a,b) = \frac{|S(a^{-1}W_x(a,b)W_y^*(a,b))|^2}{S(a^{-1}|W_x(a,b)|^2) \cdot S(a^{-1}|W_y(a,b)|^2)}
$$

where $S(\cdot)$ is a smoothing operator. $R^2(a,b) \in [0,1]$ with values near 1 indicating that $x$ and $y$ co-move at scale $a$ around time $b$. The **phase angle** $\phi(a,b) = \arg\{S(a^{-1}W_x W_y^*)\}$ reveals which series leads.

## Key Properties

- **Heisenberg uncertainty**: CWT cannot simultaneously achieve perfect time and frequency resolution. Narrow wavelets (small $a$) have good time resolution but poor frequency resolution; wide wavelets (large $a$) have the reverse.
- **Redundancy**: The CWT over all $(a,b)$ is highly redundant (frames rather than bases); the DWT at dyadic scales is critically sampled and non-redundant.
- **Edge effects**: Near the beginning and end of the series, the wavelet extends beyond the data — the **cone of influence (COI)** marks the region where edge effects are significant and results should be discarded.
- **Vanishing moments**: A wavelet with $N$ vanishing moments is orthogonal to polynomials of degree up to $N-1$, automatically removing polynomial trends from the series.
- **Orthonormality (DWT)**: Orthonormal DWT preserves inner products and energies; $\|x\|^2 = \sum_{j,k} d_{j,k}^2 + \sum_k c_{J,k}^2$.

## Python Implementation

```python
import numpy as np
import pywt
from typing import Optional

def cwt_scalogram(
    series: np.ndarray,
    scales: Optional[np.ndarray] = None,
    wavelet: str = "cmor1.5-1.0",
    dt: float = 1.0
) -> dict:
    """
    Compute CWT scalogram and convert scales to pseudo-frequencies.

    Args:
        series: 1D time series
        scales: array of scales to use (default: 1 to N/4 logarithmically spaced)
        wavelet: pywt wavelet name ('cmor1.5-1.0' = Complex Morlet)
        dt: sampling interval in days

    Returns:
        dict with 'coefficients', 'frequencies', 'scales', 'power', 'coi'
    """
    N = len(series)
    if scales is None:
        scales = np.geomspace(1, N // 4, num=64)

    coefficients, freqs = pywt.cwt(series, scales, wavelet, sampling_period=dt)
    power = np.abs(coefficients)**2

    # Cone of influence (COI): e-folding time for Morlet
    e_fold = np.sqrt(2) * scales * dt   # in same units as dt
    coi = np.minimum(np.arange(1, N+1), np.arange(N, 0, -1)) * dt
    coi_mask = e_fold[:, None] <= coi[None, :]   # valid region (outside COI)

    return {
        "coefficients": coefficients,
        "frequencies": freqs,
        "scales": scales,
        "power": power,
        "coi": coi,
        "coi_mask": coi_mask
    }


def dwt_decompose(
    series: np.ndarray,
    wavelet: str = "db4",
    level: Optional[int] = None
) -> dict:
    """
    Multi-level DWT decomposition.

    Args:
        series: 1D time series
        wavelet: pywt wavelet name
        level: decomposition level (default: maximum)

    Returns:
        dict with 'details' (list of detail coefficients by level),
                  'approximation' (final smooth), 'wavelet_variance'
    """
    if level is None:
        level = pywt.dwt_max_level(len(series), wavelet)

    coeffs = pywt.wavedec(series, wavelet, level=level)
    approximation = coeffs[0]
    details = coeffs[1:]   # details[0] is finest scale, details[-1] is coarsest

    # Wavelet variance at each scale
    wavelet_var = np.array([np.mean(d**2) for d in details])

    return {
        "approximation": approximation,
        "details": details,
        "wavelet_variance": wavelet_var,
        "levels": level,
        "total_var": series.var()
    }


def wavelet_coherence(
    x: np.ndarray,
    y: np.ndarray,
    scales: Optional[np.ndarray] = None,
    wavelet: str = "cmor1.5-1.0",
    smooth_factor: float = 0.5
) -> dict:
    """
    Compute wavelet coherence and phase between two series.

    Args:
        x, y: paired 1D time series (same length)
        scales: CWT scales
        wavelet: mother wavelet
        smooth_factor: Gaussian smoothing std for cross-spectrum

    Returns:
        dict with 'coherence' (n_scales x T), 'phase_deg', 'frequencies'
    """
    from scipy.ndimage import gaussian_filter

    N = len(x)
    if scales is None:
        scales = np.geomspace(1, N // 4, num=48)

    Wx, freqs = pywt.cwt(x, scales, wavelet)
    Wy, _     = pywt.cwt(y, scales, wavelet)

    # Cross-spectrum and auto-spectra
    cross  = Wx * np.conj(Wy)
    auto_x = Wx * np.conj(Wx)
    auto_y = Wy * np.conj(Wy)

    # Smooth each spectrum
    smooth_cross  = gaussian_filter(np.real(cross), smooth_factor) + 1j * gaussian_filter(np.imag(cross), smooth_factor)
    smooth_auto_x = gaussian_filter(np.abs(auto_x), smooth_factor)
    smooth_auto_y = gaussian_filter(np.abs(auto_y), smooth_factor)

    coherence = np.abs(smooth_cross)**2 / (smooth_auto_x * smooth_auto_y + 1e-300)
    phase_deg = np.angle(smooth_cross, deg=True)

    return {
        "coherence": coherence,
        "phase_deg": phase_deg,
        "frequencies": freqs,
        "scales": scales
    }


def wavelet_denoising(
    series: np.ndarray,
    wavelet: str = "db4",
    level: int = 4,
    threshold_mode: str = "soft"
) -> np.ndarray:
    """
    Wavelet denoising via universal threshold (Donoho-Johnstone).
    Preserves sharp discontinuities (jumps) unlike Gaussian smoothing.
    """
    coeffs = pywt.wavedec(series, wavelet, level=level)
    # Universal threshold: sigma * sqrt(2 * log(N))
    sigma = np.median(np.abs(coeffs[-1])) / 0.6745   # robust noise estimate
    threshold = sigma * np.sqrt(2 * np.log(len(series)))

    coeffs_thresh = [coeffs[0]] + [
        pywt.threshold(d, threshold, mode=threshold_mode) for d in coeffs[1:]
    ]
    return pywt.waverec(coeffs_thresh, wavelet)[:len(series)]


# ---- Example ----
np.random.seed(42)
N = 256
t = np.arange(N, dtype=float)

# Chirp: frequency increases over time + noise
x = (np.sin(2*np.pi*(5 + 15*t/N)*t/N)
     + 0.3*np.random.randn(N))

# CWT
cwt_result = cwt_scalogram(x, wavelet="cmor1.5-1.0")
power = cwt_result["power"]
peak_time_idx  = np.unravel_index(power.argmax(), power.shape)[1]
peak_freq      = cwt_result["frequencies"][np.unravel_index(power.argmax(), power.shape)[0]]
print(f"Peak CWT power at t={peak_time_idx}, f={peak_freq:.4f} cycles/day")

# DWT decomposition
dwt_result = dwt_decompose(x, wavelet="db4", level=5)
var_by_scale = dwt_result["wavelet_variance"]
print("\nWavelet variance by scale (finest to coarsest):")
for j, v in enumerate(var_by_scale):
    period = 2**(j+1)
    print(f"  Scale {j+1} (~{period}-day period): {v:.4f} ({v/x.var():.1%} of total)")

# Denoising
denoised = wavelet_denoising(x, wavelet="db4", level=4)
noise_reduction = 1 - np.var(denoised) / np.var(x)
print(f"\nNoise reduction: {noise_reduction:.1%}")
```

## Multi-Scale Wavelet Power

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "Q1", "scale_2d": 0.85, "scale_8d": 0.22, "scale_32d": 0.10},
    {"time": "Q2", "scale_2d": 0.12, "scale_8d": 0.45, "scale_32d": 0.28},
    {"time": "Q3", "scale_2d": 0.90, "scale_8d": 0.30, "scale_32d": 0.35},
    {"time": "Q4", "scale_2d": 0.20, "scale_8d": 0.15, "scale_32d": 0.55}
  ],
  "lines": [
    {"dataKey": "scale_2d",  "stroke": "#ef4444", "name": "2-day scale (noise)"},
    {"dataKey": "scale_8d",  "stroke": "#3b82f6", "name": "8-day scale (cycle)"},
    {"dataKey": "scale_32d", "stroke": "#10b981", "name": "32-day scale (trend)"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Value |
| :--- | :--- | :--- | :--- |
| $a$ | Scale | Inversely related to frequency | 1 – N/4 |
| $b$ | Translation | Time position of analysis | 0 – T |
| $\omega_0$ | Center freq. | Morlet wavelet central frequency | 5 – 8 |
| $J$ | DWT level | Maximum decomposition depth | $\lfloor\log_2 N\rfloor$ |
| $N_{vm}$ | Vanishing moments | Polynomial trend cancellation order | 1 – 20 (db$N$) |
| $\sigma$ | Threshold | Donoho-Johnstone denoising threshold | $\hat{\sigma}\sqrt{2\ln N}$ |

## Limitations and Extensions

- **Shift variance of DWT**: The standard DWT is not shift-invariant; the **Stationary Wavelet Transform (SWT)** / **MODWT** removes downsampling, making it shift-invariant at the cost of redundancy.
- **Choice of mother wavelet**: Different wavelets are optimal for different applications; the Morlet is best for oscillatory signals, Mexican Hat for transient detection, Daubechies for energy decomposition.
- **Cone of influence**: Edge effects contaminate results near series boundaries; VMSS and circular convolution implementations reduce but do not eliminate COI issues.
- **2D wavelets**: For multi-asset correlation matrices evolving over time, 2D wavelet transforms decompose the matrix across both time and cross-sectional dimensions.
- **Sparse representation**: Wavelets provide sparse representations of smooth signals; compressed sensing extensions enable volatility surface reconstruction from sparse option market quotes.

## Practical Applications

1. **Multi-scale denoising**: Threshold fine-scale wavelet coefficients to remove bid-ask bounce and microstructure noise while preserving genuine price jumps and level shifts.
2. **Scale-dependent correlation**: Wavelet coherence between equities and bonds changes sign across scales — negative at high frequencies (flight to quality) but positive at low frequencies (risk-on) — enabling frequency-specific hedging.
3. **Regime shift detection**: Abrupt changes in wavelet variance at multiple scales simultaneously signal structural breaks; this provides earlier warning than rolling correlation.
4. **Volatility decomposition**: DWT decomposes realized variance into intraday, daily, weekly, and monthly components, feeding directly into HAR-RV models with wavelet-filtered inputs.
5. **Cross-market lead-lag**: Wavelet phase analysis identifies which market leads at each frequency — e.g., US equity futures lead European spot markets at 2-hour scales but not at 1-day scales.

## Related Topics
- [[spectral-analysis]]
- [[hilbert-huang-transform]]
- [[singular-spectral-analysis]]
- [[volatility-forecasting]]
- [[realized-kernels]]

---
title: "Spectral Analysis"
category: "Signal Analysis"
order: 29
lang: "en"
---
# Spectral Analysis

**Spectral Analysis** decomposes a time series into its constituent frequency components, revealing the periodic structure hidden in market data. Rooted in Fourier's 1822 theorem that any sufficiently regular function can be represented as a sum of sinusoids, modern spectral methods span from the classical DFT to parametric AR spectra, multitaper estimates, and the Lomb-Scargle periodogram for unevenly sampled data. In quantitative finance, spectral methods identify business cycles, seasonality in order flow, and frequency-domain features for machine learning models.

## Background

Fourier analysis entered econometrics via Slutzky (1937), who showed that moving averages of random series generate spurious cycles. Granger (1966) applied spectral methods to equity returns, finding the "typical spectral shape" of financial time series — monotonically decreasing power with frequency, consistent with near-random-walk behavior. Modern applications use spectral coherence to measure cross-market dependencies and multitaper methods to reduce variance in short financial samples.

## Mathematical Framework

### Continuous Fourier Transform

For an integrable signal $x(t)$, the Fourier transform maps it to the frequency domain:
$$
X(f) = \int_{-\infty}^{\infty} x(t) \, e^{-2\pi i f t} \, dt
$$

The inverse recovers the original signal:
$$
x(t) = \int_{-\infty}^{\infty} X(f) \, e^{2\pi i f t} \, df
$$

### Discrete Fourier Transform (DFT)

For a discrete sequence $\{x_n\}_{n=0}^{N-1}$:
$$
X_k = \sum_{n=0}^{N-1} x_n \, e^{-2\pi i kn/N}, \quad k = 0, 1, \dots, N-1
$$

The **Fast Fourier Transform (FFT)** computes all $N$ DFT coefficients in $O(N \log N)$ operations via the Cooley-Tukey divide-and-conquer algorithm. Frequencies represented: $f_k = k / (N \Delta t)$ where $\Delta t$ is the sampling interval.

### Power Spectral Density (PSD)

The **Periodogram** estimate of the PSD:
$$
\hat{S}(f_k) = \frac{\Delta t}{N} |X_k|^2
$$

By Parseval's theorem, $\int_{-f_N}^{f_N} S(f) \, df = \text{Var}(x)$, where $f_N = 1/(2\Delta t)$ is the **Nyquist frequency** — the maximum detectable frequency given sampling rate $\Delta t$.

The periodogram is an **inconsistent** estimator of the true PSD: its variance does not decrease as $N \to \infty$. Consistent estimates require smoothing (Bartlett, Welch) or multitaper methods.

### Welch's Method

Divide the series into $M$ overlapping segments of length $L$, apply a window function $w(n)$ (Hann, Hamming) to reduce spectral leakage, compute periodogram per segment, then average:
$$
\hat{S}_{Welch}(f) = \frac{1}{M} \sum_{m=1}^{M} \hat{S}_m(f)
$$

Variance reduction: $\text{Var}[\hat{S}_{Welch}] \approx \text{Var}[\hat{S}_{periodogram}] / M$. Trade-off: frequency resolution decreases by factor $M$.

### Multitaper Spectral Estimation

Thomson (1982) multitaper method uses $K$ orthogonal **Slepian sequences** (DPSS) as tapers $w_k(n)$:
$$
\hat{S}_{MT}(f) = \frac{1}{K} \sum_{k=0}^{K-1} \left|\sum_{n=0}^{N-1} w_k(n) x_n e^{-2\pi ifn}\right|^2
$$

Slepian tapers optimally concentrate spectral energy in a bandwidth $W$, minimizing leakage from outside the main lobe. The bandwidth-resolution trade-off is controlled by the time-bandwidth product $NW$: typically $NW = 4$ for financial applications.

### Cross-Spectral Density and Coherence

For two series $x_t$ and $y_t$, the **cross-spectrum** is:
$$
S_{xy}(f) = \lim_{N\to\infty} \frac{1}{N} \mathbb{E}[X_N(f) Y_N^*(f)]
$$

The **squared coherence** measures frequency-specific correlation:
$$
C_{xy}^2(f) = \frac{|S_{xy}(f)|^2}{S_{xx}(f) S_{yy}(f)} \in [0, 1]
$$

$C_{xy}^2(f) \approx 1$ means $x_t$ and $y_t$ are highly linearly related at frequency $f$. The **phase spectrum** $\phi(f) = \arg S_{xy}(f)$ gives the phase lag between them at that frequency.

### Autoregressive (Parametric) Spectral Estimation

For an AR($p$) process with coefficients $\{a_k\}$ and innovation variance $\sigma^2$:
$$
S_{AR}(f) = \frac{\sigma^2 \Delta t}{\left|1 - \sum_{k=1}^p a_k e^{-2\pi ikf\Delta t}\right|^2}
$$

Parametric spectra are smooth and high-resolution but sensitive to model order misspecification. Yule-Walker or Burg's method estimates $\{a_k\}$ from the data.

## Key Properties

- **Linearity**: DFT is linear; superposition of cycles produces additive spectral peaks.
- **Parseval's theorem**: Total power is conserved across time and frequency domains.
- **Stationarity requirement**: Classical spectral analysis requires (wide-sense) stationarity; financial returns are approximately stationary but variances change over time.
- **Aliasing**: Sampling at rate $f_s$ cannot recover frequencies above $f_N = f_s/2$; intraday cycles above the sampling frequency are aliased.
- **Leakage**: Finite-length DFT of a pure sinusoid produces spectral energy in neighboring bins; tapering (windowing) reduces leakage at the cost of resolution.

## Python Implementation

```python
import numpy as np
from scipy import signal
from scipy.signal.windows import dpss

def compute_periodogram(
    series: np.ndarray,
    dt: float = 1.0,
    window: str = "hann"
) -> dict:
    """
    Compute Welch's PSD estimate.

    Args:
        series: 1D time series
        dt: sampling interval in days (1.0 for daily)
        window: window function name

    Returns:
        dict with 'frequencies' (cycles/day) and 'psd'
    """
    freqs, psd = signal.welch(
        series,
        fs=1.0 / dt,
        window=window,
        nperseg=min(256, len(series) // 4),
        scaling="density"
    )
    return {"frequencies": freqs, "psd": psd}


def multitaper_psd(
    series: np.ndarray,
    dt: float = 1.0,
    NW: float = 4.0,
    K: int = 7
) -> dict:
    """
    Thomson multitaper PSD estimate using Slepian (DPSS) tapers.

    Args:
        series: 1D time series
        dt: sampling interval
        NW: time-bandwidth product (controls resolution vs. leakage)
        K: number of tapers (usually 2*NW - 1)

    Returns:
        dict with 'frequencies' and 'psd'
    """
    N = len(series)
    tapers, _ = dpss(N, NW, Kmax=K, return_ratios=True)

    psd_all = []
    for taper in tapers:
        tapered = series * taper
        fft_vals = np.fft.rfft(tapered, n=N)
        psd_all.append(np.abs(fft_vals)**2)

    psd = np.mean(psd_all, axis=0) * dt
    freqs = np.fft.rfftfreq(N, d=dt)
    return {"frequencies": freqs, "psd": psd}


def spectral_coherence(
    x: np.ndarray,
    y: np.ndarray,
    dt: float = 1.0
) -> dict:
    """
    Compute squared coherence between two time series.
    Returns frequency grid and coherence values in [0, 1].
    """
    freqs, Cxy = signal.coherence(x, y, fs=1.0/dt, nperseg=min(256, len(x)//4))
    _, phase = signal.csd(x, y, fs=1.0/dt, nperseg=min(256, len(x)//4))
    return {
        "frequencies": freqs,
        "coherence": Cxy,
        "phase_deg": np.angle(phase, deg=True)
    }


def dominant_cycles(
    series: np.ndarray,
    dt: float = 1.0,
    n_top: int = 5
) -> list[dict]:
    """
    Find the dominant periodic cycles in the series.

    Returns list of dicts with 'period_days', 'power', 'frequency'.
    """
    result = multitaper_psd(series, dt)
    freqs = result["frequencies"]
    psd = result["psd"]

    # Exclude DC component (f=0)
    mask = freqs > 0
    freqs_pos = freqs[mask]
    psd_pos = psd[mask]

    top_idx = np.argsort(psd_pos)[-n_top:][::-1]
    cycles = []
    for idx in top_idx:
        f = freqs_pos[idx]
        cycles.append({
            "frequency": float(f),
            "period_days": float(1.0 / f) if f > 0 else np.inf,
            "power": float(psd_pos[idx])
        })
    return cycles


def ar_spectrum(
    series: np.ndarray,
    order: int,
    dt: float = 1.0,
    n_freqs: int = 512
) -> dict:
    """
    Parametric AR(p) spectral estimate using Burg's method.
    """
    from numpy.linalg import solve

    # Burg's method via scipy
    _, coeffs, sigma2 = signal.lpc(series - series.mean(), order)
    ar_coeffs = -coeffs[1:]   # lpc returns [1, a1, a2, ...]

    freqs = np.linspace(0, 0.5 / dt, n_freqs)
    psd = np.zeros(n_freqs)
    for i, f in enumerate(freqs):
        z = np.exp(-2j * np.pi * f * dt * np.arange(1, order + 1))
        denom = 1.0 - np.dot(ar_coeffs, z)
        psd[i] = float(sigma2 * dt / abs(denom)**2)

    return {"frequencies": freqs, "psd": psd, "ar_coeffs": ar_coeffs}


# ---- Example ----
np.random.seed(42)
N = 512
t = np.arange(N)
# Synthetic signal: 10-day + 50-day cycles + noise
series = (np.sin(2*np.pi*t/10)
          + 0.5*np.sin(2*np.pi*t/50)
          + 0.3*np.random.randn(N))

cycles = dominant_cycles(series)
print("Dominant cycles detected:")
for c in cycles[:3]:
    print(f"  Period: {c['period_days']:.1f} days, Power: {c['power']:.4f}")

mt = multitaper_psd(series)
peak_freq = mt["frequencies"][1:][np.argmax(mt["psd"][1:])]
print(f"\nMultitaper peak frequency: {peak_freq:.4f} cycles/day "
      f"(period: {1/peak_freq:.1f} days)")
```

## Power Spectrum Visualization

```chart
{
  "type": "line",
  "xAxis": "freq",
  "data": [
    {"freq": "0.01", "power": 8},
    {"freq": "0.02", "power": 42},
    {"freq": "0.03", "power": 11},
    {"freq": "0.05", "power": 4},
    {"freq": "0.10", "power": 88},
    {"freq": "0.12", "power": 15},
    {"freq": "0.15", "power": 6},
    {"freq": "0.20", "power": 3},
    {"freq": "0.25", "power": 2}
  ],
  "lines": [
    {"dataKey": "power", "stroke": "#8b5cf6", "name": "Power Spectral Density"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Value |
| :--- | :--- | :--- | :--- |
| $N$ | Series length | Number of observations | 256 – 5000 |
| $\Delta t$ | Sampling interval | Time between observations (days) | 1/390 (minute), 1 (daily) |
| $f_N$ | Nyquist frequency | Maximum detectable frequency | $1/(2\Delta t)$ |
| $L$ | Segment length | Welch segment size (controls resolution) | 64 – 512 |
| $NW$ | Time-bandwidth | Multitaper resolution-leakage tradeoff | 2 – 8 |
| $K$ | Taper count | Number of Slepian tapers ($\le 2NW-1$) | 3 – 15 |
| $p$ | AR order | Parametric model order | 2 – 50 |

## Limitations and Extensions

- **Non-stationarity**: FFT assumes global stationarity; time-varying spectra require STFT, wavelets, or Hilbert-Huang transforms.
- **Short series**: Financial samples are often short ($N < 500$); multitaper and parametric AR methods handle this better than raw periodogram.
- **Multiple testing**: When scanning many frequencies for cycles, Bonferroni or FDR corrections are needed to avoid false discoveries.
- **Lomb-Scargle periodogram**: For irregularly-sampled tick data or corporate event studies, the Lomb-Scargle method extends spectral analysis without interpolation artifacts.
- **Nonlinear spectra**: Higher-order spectra (bispectrum, trispectrum) detect nonlinear interactions between frequencies — relevant for options markets where volatility smile reflects nonlinear dynamics.

## Practical Applications

1. **Business cycle detection**: Spectral peaks in economic indicators at periods of 3–5 years (Juglar cycle) inform macro factor timing strategies.
2. **Intraday seasonality**: FFT of minute-bar volume reveals U-shaped intraday patterns at 390-minute and 78-minute periods; VWAP algorithms exploit these patterns.
3. **Cross-market lead-lag**: Spectral coherence between equity and credit markets identifies which market leads at different frequencies, informing relative value timing.
4. **Filter design**: Hodrick-Prescott, Christiano-Fitzgerald, and Butterworth band-pass filters are designed in frequency domain to extract business cycles from macro series.
5. **Seasonality adjustment**: X-13ARIMA-SEATS (US Census) uses spectral diagnostics to detect and remove trading-day and holiday effects from financial time series.

## Related Topics
- [[wavelet-transform]]
- [[hilbert-huang-transform]]
- [[fisher-transform]]
- [[singular-spectral-analysis]]
- [[realized-kernels]]

---
slug: "/finance/fft"
title: "Fast Fourier Transform (FFT)"
category: "Signal Analysis"
order: 80
lang: "en"
---
# Fast Fourier Transform (FFT)

The **Fast Fourier Transform (FFT)** is a family of algorithms that compute the [[dft]] in $O(N \log N)$ operations instead of $O(N^2)$. The algorithm does not change the result — only the way it is computed. The FFT is what made spectral analysis, digital filtering, and fast convolution practical: without it, processing audio, images, financial time series, and physics signals would be thousands of times slower.

## Cooley-Tukey Algorithm (1965)

The most widely used variant is **decimation-in-time (DIT)** for $N = 2^m$.

Key insight: a DFT of size $N$ can be split into two DFTs of size $N/2$ by separating even- and odd-indexed samples:

$$
X[k] = \underbrace{\sum_{n=0}^{N/2-1} x[2n]\,\omega_N^{2kn}}_{\displaystyle E[k]} \;+\; \omega_N^k \cdot \underbrace{\sum_{n=0}^{N/2-1} x[2n+1]\,\omega_N^{2kn}}_{\displaystyle O[k]}
$$

where $\omega_N = e^{-2\pi i/N}$ is the **primitive $N$-th root of unity**.

### The Butterfly Operation

From the symmetry $\omega_N^{k+N/2} = -\omega_N^k$ we get the **butterfly**:

$$
X[k] = E[k] + \omega_N^k\, O[k]
$$
$$
X[k + N/2] = E[k] - \omega_N^k\, O[k]
$$

One pair $(E[k], O[k])$ yields **two** output coefficients at once. The recursion continues to the base case $N = 1$ (DFT of a single sample = the sample itself).

### Complexity Analysis

$$
T(N) = 2\,T(N/2) + O(N) \;\Rightarrow\; T(N) = O(N \log_2 N)
$$

| $N$ | DFT ($N^2$) | FFT ($N \log_2 N$) | Speedup |
| ---: | ---: | ---: | ---: |
| 256 | 65,536 | 2,048 | ×32 |
| 1,024 | 1,048,576 | 10,240 | ×102 |
| 65,536 | 4.3 billion | 1,048,576 | ×4,096 |
| 1,048,576 | $10^{12}$ | 20,971,520 | ×50,000 |

### Bit-Reversal Permutation

DIT-FFT requires the input to be **bit-reversed** first: index $n$ is permuted to the order given by reversing its binary representation. This enables an in-place iterative implementation: a single array of length $N$ is updated without extra memory allocation.

## Algorithm Variants

| Variant | Description | When to use |
| :--- | :--- | :--- |
| **Radix-2 DIT** | Split by even/odd indices | $N = 2^m$, textbook case |
| **Radix-2 DIF** | Split by output bins | Symmetric to DIT |
| **Radix-4** | Step of 4, fewer multiplications | $N = 4^m$ |
| **Mixed-radix** | Arbitrary $N = p_1 \cdot p_2 \cdots$ | Any size (NumPy, FFTW) |
| **Split-radix** | Radix-2 + Radix-4 | Minimum arithmetic operations |
| **FFTW** | Adaptive plan selection | Maximum CPU speed |

The **FFTW** library (Fastest Fourier Transform in the West) uses auto-tuning: it selects the optimal algorithm for the specific $N$ and CPU architecture at runtime.

## Convolution Theorem via FFT

$$
(f * g)[n] = \mathcal{F}^{-1}\{\mathcal{F}\{f\} \cdot \mathcal{F}\{g\}\}
$$

**Linear convolution** of signals of length $N_x$ and $N_h$ via FFT:
1. Zero-pad to $M \geq N_x + N_h - 1$ (prevents circular convolution)
2. Compute $X = \text{FFT}(x)$, $H = \text{FFT}(h)$
3. Multiply: $Y = X \cdot H$
4. Invert: $y = \text{IFFT}(Y)$

Complexity: $O(M \log M)$ instead of $O(N_x \cdot N_h)$ — a **massive difference** for large filters.

## Python Implementation

```python
import numpy as np
from typing import Optional


def fft_cooley_tukey(x: np.ndarray) -> np.ndarray:
    """
    Recursive Cooley-Tukey FFT (DIT, Radix-2).
    Requires N = 2^m. For production use numpy.fft instead.

    Args:
        x: input sequence of length N = 2^m

    Returns:
        Complex spectrum of length N
    """
    N = len(x)
    if N == 1:
        return x.astype(complex)
    if N & (N - 1):
        raise ValueError(f"N must be a power of 2, got {N}")

    even = fft_cooley_tukey(x[::2])
    odd  = fft_cooley_tukey(x[1::2])

    k = np.arange(N // 2)
    twiddle = np.exp(-2j * np.pi * k / N) * odd

    return np.concatenate([even + twiddle, even - twiddle])


def fft_convolve(x: np.ndarray, h: np.ndarray) -> np.ndarray:
    """
    Linear convolution via FFT — O(N log N).

    Args:
        x: input signal
        h: filter impulse response (kernel)

    Returns:
        Linear convolution of length len(x) + len(h) - 1
    """
    n_out = len(x) + len(h) - 1
    # Zero-pad to nearest power of 2 for speed
    n_fft = 1 << (n_out - 1).bit_length()

    X = np.fft.rfft(x, n=n_fft)
    H = np.fft.rfft(h, n=n_fft)
    return np.fft.irfft(X * H, n=n_fft)[:n_out]


def band_filter(
    x: np.ndarray,
    fs: float,
    f_low: float,
    f_high: float,
) -> np.ndarray:
    """
    Ideal band-pass filter in the frequency domain.

    Zeros all bins outside [f_low, f_high].
    Gibbs artefacts at edges — use windowed filters for production.

    Args:
        x:      input signal
        fs:     sampling rate
        f_low:  lower band edge (Hz)
        f_high: upper band edge (Hz)

    Returns:
        Filtered signal of the same length
    """
    N = len(x)
    X = np.fft.rfft(x)
    freqs = np.fft.rfftfreq(N, d=1.0 / fs)
    X_filt = X * ((freqs >= f_low) & (freqs <= f_high))
    return np.fft.irfft(X_filt, n=N)


def find_dominant_frequencies(
    x: np.ndarray,
    fs: float = 1.0,
    n_top: int = 5,
    min_period: float = 2.0,
    window: str = "hann",
) -> list[dict]:
    """
    Top-N dominant periodic components by amplitude.

    Args:
        min_period: minimum period (in units of 1/fs)

    Returns:
        List of dicts: freq, period, amplitude, phase_deg
    """
    N = len(x)
    win = np.hanning(N) if window == "hann" else np.ones(N)
    x_win = x * win / win.mean()

    X = np.fft.rfft(x_win)
    freqs = np.fft.rfftfreq(N, d=1.0 / fs)
    amp = np.abs(X) * 2 / N
    amp[0] /= 2

    valid = (freqs > 0) & np.where(
        freqs > 0, 1.0 / freqs >= min_period, False
    )
    idx = np.where(valid)[0]
    top = idx[np.argsort(amp[idx])[::-1][:n_top]]

    return [
        {
            "freq":      float(freqs[i]),
            "period":    float(1.0 / freqs[i]),
            "amplitude": float(amp[i]),
            "phase_deg": float(np.angle(X[i], deg=True)),
        }
        for i in top
    ]


# ---- Example: verification and applications ----
np.random.seed(42)
N, fs = 512, 252.0       # 2 years of daily data

t = np.arange(N) / fs
x = (
    2.0 * np.sin(2 * np.pi * 5.0 * t)      # 5 cycles/year → ~50d period
    + 0.8 * np.sin(2 * np.pi * 21.0 * t)   # 21 cycles/year → ~12d period
    + 0.3 * np.sin(2 * np.pi * 63.0 * t)   # 63 cycles/year → ~4d period
    + np.random.normal(0, 0.2, N)
)

# Verify: custom FFT ≈ numpy
X_custom = fft_cooley_tukey(x[:64])
X_numpy  = np.fft.fft(x[:64])
print(f"Max deviation: {np.max(np.abs(X_custom - X_numpy)):.2e}")

# Dominant components
dominant = find_dominant_frequencies(x, fs=fs, n_top=3)
for d in dominant:
    print(f"f={d['freq']:.2f}/yr  period={d['period']:.1f}d  A={d['amplitude']:.3f}")

# Band-pass: isolate the 5-day weekly cycle
x_week = band_filter(x, fs, f_low=4.0, f_high=6.0)

# Fast MA(5) convolution via FFT
ma5 = np.ones(5) / 5
x_smooth = fft_convolve(x, ma5)[:N]
```

## FFT vs DFT Speedup

```chart
{
  "chartType": "bar",
  "xAxis": "N",
  "data": [
    {"N": "64",    "dft": 4096,      "fft": 384},
    {"N": "256",   "dft": 65536,     "fft": 2048},
    {"N": "1024",  "dft": 1048576,   "fft": 10240},
    {"N": "4096",  "dft": 16777216,  "fft": 49152},
    {"N": "16384", "dft": 268435456, "fft": 229376}
  ],
  "lines": [
    {"dataKey": "dft", "name": "DFT (N²)",       "stroke": "#ef4444"},
    {"dataKey": "fft", "name": "FFT (N log₂N)",  "stroke": "#22c55e"}
  ]
}
```

## Applications

1. **Spectral analysis:** Foundation of [[spectral-analysis]] and all PSD methods (Welch, DPSS). Computes spectra in milliseconds instead of seconds.
2. **Digital filtering:** Convolution with a long FIR filter via FFT is the standard in audio, biosignals, and financial filtering.
3. **Correlation and autocorrelation:** $\text{xcorr}(x, y) = \mathcal{F}^{-1}[\hat{x}^* \cdot \hat{y}]$ — lag detection between time series in $O(N \log N)$.
4. **Large integer multiplication:** The Schönhage-Strassen algorithm uses FFT to multiply $n$-digit numbers in $O(n \log n \log\log n)$.
5. **Neural networks:** FFT layers replace expensive convolutions in FNet and Monarch architectures.
6. **Shor's algorithm:** Quantum Fourier Transform is the core of [[shor-algorithm]], providing exponential speedup over classical FFT for factorisation.
7. **Image processing:** 2D-FFT (separable over rows and columns) underlies filtering, compression, and JPEG-like methods.

## Limitations

- **$N = 2^m$:** Radix-2 requires a power of 2. Mixed-radix (NumPy/FFTW) handles any $N$, but is optimal at $N = 2^a \cdot 3^b \cdot 5^c$.
- **Numerical precision:** Rounding error accumulates as $\sim O(\log N \cdot \varepsilon_\text{machine})$ — negligible for float64, but relevant in embedded systems.
- **Stationarity:** Like the DFT, the FFT gives no time localisation. For non-stationary signals use STFT (Short-Time FT) or [[wavelet-transform]].

## Related Topics
- [[dft]]
- [[fourier-transform]]
- [[spectral-analysis]]
- [[wavelet-transform]]
- [[shor-algorithm]]

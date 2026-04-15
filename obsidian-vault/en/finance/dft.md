---
title: "Discrete Fourier Transform (DFT)"
category: "Signal Analysis"
order: 79
lang: "en"
---
# Discrete Fourier Transform (DFT)

The **Discrete Fourier Transform (DFT)** is the finite-dimensional analogue of the [[fourier-transform]] for sequences of $N$ numbers. It maps $N$ time-domain samples into $N$ complex frequency coefficients. The DFT (not the continuous FT) is what is actually used in practice: real data is always discrete and finite. Its fast algorithm is the [[fft]].

## Definition

For a sequence $x[0], x[1], \dots, x[N-1]$:

$$
X[k] = \sum_{n=0}^{N-1} x[n]\, e^{-i\frac{2\pi}{N}kn}, \quad k = 0, 1, \dots, N-1
$$

Inverse DFT:

$$
x[n] = \frac{1}{N}\sum_{k=0}^{N-1} X[k]\, e^{i\frac{2\pi}{N}kn}, \quad n = 0, 1, \dots, N-1
$$

**Matrix form:** $\mathbf{X} = W_N \mathbf{x}$, where $W_N$ is the DFT matrix with entries $(W_N)_{kn} = e^{-2\pi i kn/N}$. Its inverse: $W_N^{-1} = \tfrac{1}{N}W_N^*$ (conjugate-transpose divided by $N$).

## Interpreting the Coefficients

The $k$-th coefficient $X[k]$ corresponds to frequency:

$$
f_k = \frac{k \cdot f_s}{N}
$$

where $f_s$ is the **sampling rate** (samples per second). The period of the corresponding harmonic: $T_k = N / (k \cdot f_s)$.

**Uniqueness:** The DFT is periodic with period $N$, i.e., $X[k] = X[k + N]$. For real-valued $x[n]$ the spectrum is **conjugate-symmetric**: $X[N-k] = X^*[k]$. Only $k = 0, 1, \dots, \lfloor N/2 \rfloor$ carry independent information.

| Coeff. | Frequency | Meaning |
| :--- | :--- | :--- |
| $X[0]$ | $0$ | DC component (mean value) |
| $X[1]$ | $f_s/N$ | Lowest non-zero frequency |
| $X[N/2]$ | $f_s/2$ | Nyquist frequency (upper limit) |
| $X[N-k]$ | $-f_k$ | Mirror of $X[k]$ for real signals |

## Nyquist–Shannon Sampling Theorem

When sampling a continuous signal at rate $f_s$, only components with frequency $f < f_s/2$ — the **Nyquist frequency** $f_{Nyq}$ — are correctly recovered:

$$
f_{Nyq} = \frac{f_s}{2}
$$

Components above $f_{Nyq}$ **alias** onto lower frequencies and become indistinguishable from them. An **anti-aliasing low-pass filter** applied before sampling prevents this.

## Spectral Leakage and Window Functions

**Spectral leakage** occurs when the signal frequency is not an exact multiple of $f_s/N$: energy "leaks" from one bin into neighbours. The cause is that periodic extension of a finite segment creates discontinuities at its edges.

The solution is a **window function** $w[n]$ multiplied element-wise with the signal before the DFT:

$$
X_w[k] = \sum_{n=0}^{N-1} x[n]\,w[n]\, e^{-i\frac{2\pi}{N}kn}
$$

| Window | Sidelobe level | Main-lobe width | Use case |
| :--- | :--- | :--- | :--- |
| **Rectangular** | −13 dB | Minimum | When leakage is absent |
| **Hann** | −31 dB | Moderate | General purpose |
| **Hamming** | −41 dB | Moderate | Speech signals |
| **Blackman** | −57 dB | Wide | High accuracy |
| **Blackman-Harris** | −92 dB | Wide | Spectral analysis |
| **Flat-top** | −93 dB | Very wide | Amplitude measurement |

Trade-off: better sidelobe suppression → wider main lobe → worse frequency resolution.

## Power Spectral Density (PSD)

One-sided PSD from the DFT:

$$
S[k] = \frac{2}{N \cdot f_s}\,|X[k]|^2, \quad k = 1, \dots, \lfloor N/2 \rfloor
$$

Parseval's theorem for the DFT:

$$
\sum_{n=0}^{N-1} |x[n]|^2 = \frac{1}{N}\sum_{k=0}^{N-1}|X[k]|^2
$$

Total signal power is identical in both domains.

## Zero-Padding

Appending $M$ zeros before the DFT produces $N + M$ coefficients — **spectral interpolation**, but no new information:

- Frequency resolution $\Delta f = f_s/N$ does **not** improve (it is determined solely by the data length)
- Peaks become smoother — useful for visualisation and peak-frequency interpolation
- Standard practice: pad to the nearest power of 2 for [[fft]]

## Python Implementation

```python
import numpy as np


def dft_matrix(N: int) -> np.ndarray:
    """
    DFT matrix of size N×N.

    (W_N)_{kn} = exp(-2πi·kn/N)
    Forward DFT:  X = W @ x
    Inverse DFT:  x = (1/N) * W.conj().T @ X
    """
    n = np.arange(N)
    k = n[:, None]
    return np.exp(-2j * np.pi * k * n / N)


def dft(x: np.ndarray) -> np.ndarray:
    """Naive DFT via matrix multiplication — O(N²)."""
    return dft_matrix(len(x)) @ x


def idft(X: np.ndarray) -> np.ndarray:
    """Naive inverse DFT — O(N²)."""
    N = len(X)
    return (dft_matrix(N).conj().T @ X) / N


def power_spectrum(
    x: np.ndarray,
    fs: float = 1.0,
    window: str = "hann",
) -> dict:
    """
    One-sided power spectral density.

    Args:
        x:      time series of length N
        fs:     sampling rate (samples/s)
        window: 'hann' | 'blackman' | 'hamming' | 'none'

    Returns:
        dict with 'freqs' (Hz), 'psd', 'amplitude', 'phase_deg'
    """
    N = len(x)

    win = {
        "hann":     np.hanning(N),
        "blackman": np.blackman(N),
        "hamming":  np.hamming(N),
        "none":     np.ones(N),
    }.get(window, np.hanning(N))

    # Coherent gain normalisation preserves amplitude
    x_win = x * win / win.mean()

    X = np.fft.rfft(x_win)
    freqs = np.fft.rfftfreq(N, d=1.0 / fs)

    # One-sided normalisation: ×2 for all bins except DC and Nyquist
    amp = np.abs(X) * 2 / N
    amp[0] /= 2
    if N % 2 == 0:
        amp[N // 2] /= 2

    psd = amp ** 2 / fs          # units: [signal²/Hz]

    return {
        "freqs":     freqs,
        "psd":       psd,
        "amplitude": amp,
        "phase_deg": np.angle(X, deg=True),
    }


def spectral_resolution(N: int, fs: float) -> dict:
    """Spectrum parameters: resolution, Nyquist, bin count."""
    return {
        "delta_f":   fs / N,
        "nyquist":   fs / 2,
        "n_bins":    N // 2 + 1,
        "max_period": N / fs,
    }


# ---- Example: spectral leakage with and without windowing ----
np.random.seed(0)
N, fs = 256, 1.0                 # 256 daily samples

# Frequency NOT a multiple of f_s/N → strong leakage without windowing
f_signal = 0.123
t = np.arange(N)
x = np.sin(2 * np.pi * f_signal * t)

spec_rect = power_spectrum(x, fs, window="none")
spec_hann = power_spectrum(x, fs, window="hann")

peak_rect = spec_rect["freqs"][np.argmax(spec_rect["psd"])]
peak_hann = spec_hann["freqs"][np.argmax(spec_hann["psd"])]
print(f"True frequency:           {f_signal:.4f}")
print(f"Peak (rectangular window): {peak_rect:.4f}")
print(f"Peak (Hann window):        {peak_hann:.4f}")

res = spectral_resolution(N, fs)
print(f"Resolution Δf = {res['delta_f']:.4f}, Nyquist = {res['nyquist']:.3f}")
```

## Window Comparison

```chart
{
  "chartType": "bar",
  "xAxis": "window",
  "data": [
    {"window": "Rectangular",    "sidelobes_db": 13,  "mainlobe_bins": 1},
    {"window": "Hann",           "sidelobes_db": 31,  "mainlobe_bins": 2},
    {"window": "Hamming",        "sidelobes_db": 41,  "mainlobe_bins": 2},
    {"window": "Blackman",       "sidelobes_db": 57,  "mainlobe_bins": 3},
    {"window": "Blackman-Harris","sidelobes_db": 92,  "mainlobe_bins": 4}
  ],
  "lines": [
    {"dataKey": "sidelobes_db", "name": "Sidelobe suppression (dB)", "stroke": "#f59e0b"}
  ]
}
```

## Limitations

- **Stationarity:** The DFT assumes frequency characteristics are constant over the entire interval. For non-stationary signals use [[wavelet-transform]] or STFT (Short-Time FT).
- **Periodic extension:** The DFT implicitly treats the signal as periodic. If the end does not match the beginning, edge artefacts arise (mitigated by windowing).
- **Fixed resolution:** $\Delta f = f_s / N$ is determined by the data. Zero-padding only interpolates the spectrum.
- **Outlier sensitivity:** A single spike in $x[n]$ affects all $N$ coefficients.

## Related Topics
- [[fourier-transform]]
- [[fft]]
- [[spectral-analysis]]
- [[wavelet-transform]]
- [[hilbert-huang-transform]]

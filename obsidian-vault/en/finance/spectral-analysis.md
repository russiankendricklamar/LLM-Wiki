---
title: "Spectral Analysis"
category: "Signal Analysis"
order: 15
lang: "en"
---
# Spectral Analysis

**Spectral Analysis** refers to a collection of techniques used to decompose a time series into a set of elementary harmonic components (sine and cosine waves) at different frequencies and amplitudes. In finance, it is a powerful tool for identifying business cycles, seasonal patterns, and filtering market noise.

## The Fourier Transform

The mathematical foundation of spectral analysis is the **Fourier Transform**. It shifts a signal $x(t)$ from the time domain to the frequency domain $X(f)$. For discrete data, the Discrete Fourier Transform (DFT) is used:

$$
X(k) = \sum_{n=0}^{N-1} x(n) \cdot e^{-i \frac{2\pi}{N} kn}
$$

Where:
- $X(k)$ is a complex number representing the amplitude and phase of frequency $k$.
- $N$ is the number of data points.
- $e^{-i \dots}$ is a complex exponential (Euler's formula).

## Power Spectral Density (PSD)

The **Power Spectral Density** (PSD) describes how the variance (energy) of a time series is distributed across different frequencies. Peaks in the PSD plot indicate dominant cycles or periodicities within the data.

## Applications in Finance

1.  **Cycle Detection**: Identifying periodicities in economic indicators, commodity prices, or interest rate spreads.
2.  **Series Decomposition**: Separating long-term trends from short-term business cycles and high-frequency noise.
3.  **Indicators**: Advanced technical indicators (like Ehler’s Cycle Analytics) utilize spectral algorithms to measure the current "market cycle."
4.  **Improving Forecasts**: Using frequency domain features to tune machine learning models or signal processing filters (like Kalman or Butterworth filters).

## Python: Cycle Analysis via FFT

```python
import numpy as np

# Generate a synthetic signal with two cycles (10-day and 50-day) + noise
t = np.arange(256)
signal = np.sin(2 * np.pi * t / 10) + 0.5 * np.sin(2 * np.pi * t / 50) + np.random.normal(0, 0.2, 256)

# Fast Fourier Transform (FFT)
fft_values = np.fft.fft(signal)
frequencies = np.fft.fftfreq(len(t))
power_spectrum = np.abs(fft_values) ** 2

# Get positive frequencies only
mask = frequencies > 0
dominant_freq = frequencies[mask][np.argmax(power_spectrum[mask])]
print(f"Dominant cycle detected at frequency: {dominant_freq:.4f}")
```

## Spectrum Visualization

The chart below exemplifies a power spectrum where peaks represent dominant market frequencies.

```chart
{
  "type": "line",
  "xAxis": "freq",
  "data": [
    {"freq": "0.01", "power": 10},
    {"freq": "0.02", "power": 45},
    {"freq": "0.03", "power": 12},
    {"freq": "0.04", "power": 5},
    {"freq": "0.05", "power": 3},
    {"freq": "0.10", "power": 85},
    {"freq": "0.15", "power": 8},
    {"freq": "0.20", "power": 2}
  ],
  "lines": [
    {"dataKey": "power", "stroke": "#8b5cf6", "name": "Power (Amplitude^2)"}
  ]
}
```

## Limitations

- **Non-stationarity**: Financial time series often have evolving properties, making classic Fourier analysis difficult (Wavelet analysis is often used instead).
- **Data Length**: Detecting low-frequency (long-term) cycles requires a very long history of observations.
- **Signal-to-Noise Ratio**: High market noise can mask real spectral peaks, leading to "ghost" cycles.


## Related Topics
- [[wavelet-transform]]
- [[hilbert-huang-transform]]
- [[fisher-transform]]

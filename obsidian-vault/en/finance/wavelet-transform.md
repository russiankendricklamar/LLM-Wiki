---
title: "Wavelet Transform (CWT)"
category: "Signal Analysis"
order: 25
lang: "en"
---
# Continuous Wavelet Transform (CWT)

The **Continuous Wavelet Transform (CWT)** is a powerful mathematical tool for time-frequency analysis. Unlike the Fourier Transform, which represents a signal as a sum of infinite sine waves, the Wavelet Transform uses localized functions called **wavelets**. This allows for the simultaneous analysis of both "when" and "at what frequency" an event occurs in a financial time series.

## Why Wavelets in Finance?

Financial markets are inherently non-stationary; their statistical properties, cycles, and volatility change over time. While a Fourier Transform loses all time information (telling you *that* a cycle exists but not *when*), wavelets provide a 2D map (scalogram) of market activity.

- **Short-term Scalability**: High-frequency components are analyzed with narrow wavelets (high time resolution).
- **Long-term Scalability**: Low-frequency components are analyzed with wide wavelets (high frequency resolution).

## Mathematical Definition

For a signal $x(t)$, the CWT $W(a, b)$ is calculated by convolving the signal with a scaled and translated version of a mother wavelet $\psi(t)$:

$$
W(a, b) = \frac{1}{\sqrt{|a|}} \int_{-\infty}^{\infty} x(t) \psi^* \left( \frac{t - b}{a} \right) dt
$$

Where:
- $a$ is the **scale** parameter (inverse of frequency).
- $b$ is the **translation** parameter (position in time).
- $\psi(t)$ is the mother wavelet (e.g., Morlet, Mexican Hat).

## Python: Generating a Scalogram

Using the `PyWavelets` library to visualize frequency shifts in a signal:

```python
import pywt
import numpy as np

def compute_cwt(data):
    # Use the Complex Morlet wavelet
    scales = np.arange(1, 128)
    coefficients, frequencies = pywt.cwt(data, scales, 'cmor1.5-1.0')
    
    # Power spectrum (Scalogram)
    power = np.abs(coefficients)**2
    return power

# Example: Signal with a chirping frequency
t = np.linspace(0, 1, 1000)
signal = np.sin(2 * np.pi * (10 + 20 * t) * t)
scalogram = compute_cwt(signal)
```

## Visualization: Multi-scale Analysis

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "Q1", "high_freq": 0.8, "low_freq": 0.2},
    {"time": "Q2", "high_freq": 0.1, "low_freq": 0.25},
    {"time": "Q3", "high_freq": 0.9, "low_freq": 0.3},
    {"time": "Q4", "high_freq": 0.2, "low_freq": 0.4}
  ],
  "lines": [
    {"dataKey": "high_freq", "stroke": "#ef4444", "name": "Short-term Cycle (Noise)"},
    {"dataKey": "low_freq", "stroke": "#3b82f6", "name": "Long-term Trend"}
  ]
}
```

## Applications in Quant Finance

1.  **Denoising**: Filtering market noise without smoothing out critical price jumps (preserving edges).
2.  **Multiscale Correlation**: Calculating "Wavelet Coherence" to see how correlation between assets (e.g., Gold vs. USD) varies across different time horizons.
3.  **Regime Shift Detection**: Identifying the exact moment when market dynamics change frequency (e.g., transition from low-volatility stability to high-frequency panic).
---


## Related Topics
- [[spectral-analysis]]
- [[hilbert-huang-transform]]

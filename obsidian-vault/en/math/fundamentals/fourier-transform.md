---
title: "Fourier Transform"
category: "Fundamentals"
order: 8
lang: "en"
slug: "fourier-transform"
---

# Fourier Transform

The Fourier Transform is a fundamental tool that decomposes a signal into its constituent frequencies. It bridges the gap between the time/spatial domain and the frequency domain, turning convolutions into simple multiplications.

## Definitions

1. **Continuous Transform:**
   $$ \hat f(\omega) = \int_{-\infty}^{\infty} f(t)\, e^{-i\omega t}\, dt $$
2. **Discrete Fourier Transform (DFT):** The practical version used in computers, computed efficiently via the **Fast Fourier Transform (FFT)** in $O(N \log N)$.

## Key Properties

- **Convolution Theorem:** Convolutions in the time domain become pointwise multiplications in the frequency domain.
- **Uncertainty Principle:** A signal cannot be perfectly localized in both time and frequency domains simultaneously.
- **Parseval's Theorem:** The total energy of a signal is preserved in the frequency domain.

## Applications in ML and Finance

1. **Fourier Neural Operators (FNO):** Neural networks that operate in the spectral domain, solving PDEs (like Navier-Stokes) orders of magnitude faster than traditional solvers.
2. **Positional Encodings (NeRF/Transformers):** Using Fourier features to help MLPs represent high-frequency details.
3. **Audio Models (Whisper):** Processing audio as spectrograms derived from Short-Time Fourier Transforms (STFT).
4. **Time Series Analysis:** Using spectral decomposition to identify market cycles and denoise financial data.

## Related Topics
[[spectral-analysis|Spectral Analysis]] | [[fno|Fourier Neural Operators]] | [[quantum-computing|Quantum Fourier Transform]]

---
title: 'Signal Processing: Wavelet Transforms'
category: Advanced Math and Stats
order: 180
lang: en
slug: wavelet-transform
---

Unlike the Fourier Transform which uses infinite sinusoids, Wavelet Transforms use localized wave-like functions, providing both time and frequency resolution.

### Continuous Wavelet Transform (CWT)
The CWT of a signal $x(t)$ with a mother wavelet $\psi(t)$ is:
$X_w(a, b) = \frac{1}{\sqrt{|a|}} \int_{-\infty}^\infty x(t) \psi^* \left( \frac{t-b}{a} \right) dt$
where $a$ is the scale (inversely related to frequency) and $b$ is the translation (time).

### Discrete Wavelet Transform (DWT)
DWT uses a discrete subset of scales and translations, typically powers of two: $a = 2^j, b = k 2^j$. It is implemented efficiently using Mallat's algorithm (a cascade of high-pass and low-pass filters), which recursively decomposes the signal into approximation (A) and detail (D) coefficients. This forms the basis of JPEG2000 compression.

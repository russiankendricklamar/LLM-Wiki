---
title: Fast Fourier Transform (FFT)
category: Numerical Methods
order: 97
lang: en
slug: fft-math
---

## Overview
The Fast Fourier Transform (FFT) is an algorithm that computes the Discrete Fourier Transform (DFT) in $O(N \log N)$ time, instead of $O(N^2)$.

## Mathematical Basis (Cooley-Tukey)
The DFT is defined as:
$$ X_k = \sum_{n=0}^{N-1} x_n e^{-\frac{2\pi i}{N} nk} $$
The Cooley-Tukey algorithm recursively divides the transform into two pieces of size $N/2$ (even and odd indices), drastically reducing the number of complex multiplications. It is essential in [[signal-processing]].
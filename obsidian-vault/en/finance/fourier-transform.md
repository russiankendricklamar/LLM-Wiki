---
title: "Fourier Transform"
category: "Signal Analysis"
order: 78
lang: "en"
---
# Fourier Transform

The **Fourier Transform** is a linear integral transform that maps a function from the **time** (or spatial) domain into the **frequency** domain. It reveals which frequencies are present in a signal and in what proportions. It is the foundation of signal analysis, the theory of differential equations, quantum mechanics, and digital data processing.

## Definition

For $f(t) \in L^1(\mathbb{R}) \cap L^2(\mathbb{R})$:

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(t)\, e^{-2\pi i \xi t}\, dt
$$

- $\xi$ — **frequency** (Hz when $t$ is in seconds; 1/period)
- $|\hat{f}(\xi)|$ — **amplitude** of the harmonic at frequency $\xi$
- $\arg\hat{f}(\xi)$ — **phase** of the harmonic
- The result is complex-valued even when $f(t)$ is real

The complex exponential $e^{-2\pi i \xi t} = \cos(2\pi\xi t) - i\sin(2\pi\xi t)$ is the basis function — it "probes" how much $f$ correlates with a sinusoid at frequency $\xi$.

## Inverse Fourier Transform

$$
f(t) = \int_{-\infty}^{\infty} \hat{f}(\xi)\, e^{2\pi i \xi t}\, d\xi
$$

Reconstructs the original function as a superposition of harmonics. The forward/inverse pair is an **isometry** on $L^2(\mathbb{R})$: the frequency decomposition is perfectly reversible.

## Key Properties

### Linearity

$$
\mathcal{F}\{af + bg\} = a\hat{f} + b\hat{g}
$$

### Time-shift theorem

$$
\mathcal{F}\{f(t - t_0)\}(\xi) = e^{-2\pi i \xi t_0}\,\hat{f}(\xi)
$$

A time shift leaves the amplitude spectrum unchanged and only rotates the phase.

### Convolution theorem

$$
\mathcal{F}\{f * g\} = \hat{f} \cdot \hat{g}
$$

$$
\mathcal{F}\{f \cdot g\} = \hat{f} * \hat{g}
$$

Convolution in time = multiplication in frequency. This is the key fact behind fast computation with [[fft]].

### Parseval's theorem (energy conservation)

$$
\int_{-\infty}^{\infty} |f(t)|^2\, dt = \int_{-\infty}^{\infty} |\hat{f}(\xi)|^2\, d\xi
$$

Total energy is identical in both domains.

### Scaling

$$
\mathcal{F}\{f(at)\}(\xi) = \frac{1}{|a|}\,\hat{f}\!\left(\frac{\xi}{a}\right)
$$

Compression in time → dilation in frequency, and vice versa. This is the origin of the **uncertainty principle**: a signal cannot be simultaneously localized in both time and frequency.

### Derivative theorem

$$
\mathcal{F}\{f^{(n)}\}(\xi) = (2\pi i \xi)^n\,\hat{f}(\xi)
$$

Differentiation becomes multiplication by a polynomial in $\xi$. Differential equations in the frequency domain become algebraic equations.

### Duality

$$
\mathcal{F}\{\hat{f}(t)\}(\xi) = f(-\xi)
$$

The Fourier transform of the spectrum gives the mirror image of the original function.

## Existence Conditions

| Function class | Condition | Example |
| :--- | :--- | :--- |
| $L^1(\mathbb{R})$ | $\int|f|\,dt < \infty$ | Exponentially decaying functions |
| $L^2(\mathbb{R})$ | $\int|f|^2\,dt < \infty$ | All finite-energy signals |
| Schwartz $\mathcal{S}$ | Fast decay + smoothness | Gaussian function |
| Distributions | Generalised functions | $\delta(t)$, $\text{sign}(t)$ |

Important pairs: $\mathcal{F}\{e^{-\pi t^2}\} = e^{-\pi\xi^2}$ (Gaussian is its own transform), $\mathcal{F}\{\delta(t)\} = 1$.

## Relation to Fourier Series

For a **periodic** function with period $T$, the Fourier series gives a **discrete** spectrum:

$$
f(t) = \sum_{n=-\infty}^{\infty} c_n\, e^{2\pi i n t / T}, \qquad c_n = \frac{1}{T}\int_0^T f(t)\,e^{-2\pi i n t / T}\,dt
$$

The continuous FT is the limiting case as $T \to \infty$: the discrete frequencies $n/T$ densify into a continuous spectrum.

## Heisenberg Uncertainty Principle

$$
\sigma_t \cdot \sigma_\xi \geq \frac{1}{4\pi}
$$

where $\sigma_t^2 = \int t^2 |f|^2\,dt\,/\,\|f\|^2$ is the time variance and $\sigma_\xi^2$ the frequency variance. The Gaussian achieves the lower bound (minimum uncertainty). Consequence: one cannot simultaneously achieve precise localisation in both domains — this motivates [[wavelet-transform]].

## Applications

1. **Solving differential equations:** The FT converts [[partial-differential-equations]] (heat equation, wave equation) into algebraic equations — the standard method in physics.
2. **Quantum mechanics:** The coordinate ↔ momentum transition in [[schrodinger-equation]]; the wave function in momentum space is the FT of the position-space wave function.
3. **Signal theory:** Foundation for [[spectral-analysis]], [[dft]], filtering, and modulation.
4. **Quantum computing:** The quantum Fourier transform is the core of [[shor-algorithm]].

## Related Topics
- [[dft]]
- [[fft]]
- [[spectral-analysis]]
- [[wavelet-transform]]
- [[partial-differential-equations]]
- [[schrodinger-equation]]
- [[shor-algorithm]]

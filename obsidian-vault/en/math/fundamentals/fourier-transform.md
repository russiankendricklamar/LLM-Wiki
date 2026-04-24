---
title: "The Fourier Transform"
category: "Fundamentals"
order: 8
lang: "en"
slug: "fourier-transform"
growth: "evergreen"
---

# The Fourier Transform

The Fourier transform is the change-of-coordinates that turns the most natural domain (time/space) into the most analytically useful one (frequency). In one operation it diagonalises every shift-invariant linear operator, turns convolution into multiplication, turns differentiation into multiplication by $i\omega$, and provides the orthonormal basis that makes $L^2(\mathbb{R})$ a tractable Hilbert space.

Almost every modern signal-processing, PDE, and physics technique routes through it. In machine learning, it powers FNOs, spectral methods, NeRF positional encodings, audio models, and a steadily growing list of architectures.

## 1. Definitions

**Continuous transform.** For $f \in L^1(\mathbb{R})$:

$$
\hat f(\omega) = \int_{-\infty}^{\infty} f(t)\, e^{-i\omega t}\, dt, \qquad f(t) = \frac{1}{2\pi}\int_{-\infty}^{\infty} \hat f(\omega)\, e^{i\omega t}\, d\omega.
$$

(Conventions differ; the symmetric version uses $1/\sqrt{2\pi}$ on each side.)

**Discrete transform (DFT).** For $\{x_n\}_{n=0}^{N-1}$:

$$
X_k = \sum_{n=0}^{N-1} x_n\, e^{-2\pi i k n / N}, \qquad x_n = \frac{1}{N}\sum_{k=0}^{N-1} X_k\, e^{2\pi i k n / N}.
$$

The DFT is the discretisation that an actual computer ever sees; the **FFT** algorithm computes it in $O(N\log N)$.

## 2. Algebraic properties

| Property | Time domain | Frequency domain |
|---|---|---|
| Linearity | $af + bg$ | $a\hat f + b\hat g$ |
| Shift | $f(t - t_0)$ | $e^{-i\omega t_0}\hat f(\omega)$ |
| Modulation | $e^{i\omega_0 t} f(t)$ | $\hat f(\omega - \omega_0)$ |
| Scaling | $f(at)$ | $\frac{1}{|a|}\hat f(\omega/a)$ |
| Differentiation | $f'(t)$ | $i\omega \hat f(\omega)$ |
| Convolution | $(f * g)(t)$ | $\hat f(\omega)\hat g(\omega)$ |
| Multiplication | $f(t) g(t)$ | $\frac{1}{2\pi}(\hat f * \hat g)(\omega)$ |
| Conjugation | $\overline{f(t)}$ | $\overline{\hat f(-\omega)}$ |

**The convolution theorem** is the single most important practical fact: convolutions are diagonal in the Fourier basis. Every CNN, every linear filter, every PDE Green's-function solution exploits this.

## 3. $L^2$ theory and Plancherel

The transform extends from $L^1$ to $L^2(\mathbb{R})$ by density and becomes a **unitary operator** on $L^2$ — the deepest structural fact about it.

**Plancherel's theorem.** $\|f\|_{L^2}^2 = \frac{1}{2\pi}\|\hat f\|_{L^2}^2$. Energy is preserved under the Fourier basis change.

**Parseval's identity (inner-product form).** $\langle f, g\rangle = \frac{1}{2\pi}\langle \hat f, \hat g\rangle$.

Conceptually: $\mathcal{F}: L^2(\mathbb{R}) \to L^2(\mathbb{R})$ is an **isometry**, and the family $\{e^{i\omega t}\}_{\omega \in \mathbb{R}}$ acts as a continuous orthonormal basis.

## 4. Heisenberg uncertainty

For $f \in L^2(\mathbb{R})$ with $\|f\| = 1$, define spreads $\sigma_t^2 = \int t^2 |f(t)|^2 dt$ and $\sigma_\omega^2 = \frac{1}{2\pi}\int \omega^2 |\hat f(\omega)|^2 d\omega$. Then

$$
\boxed{\sigma_t \sigma_\omega \geq \tfrac{1}{2}}.
$$

**Equality is attained only by Gaussians.** This is *the* mathematical statement underlying the Heisenberg uncertainty principle in quantum mechanics — position and momentum are Fourier duals, and a state cannot be sharp in both.

## 5. Inversion and regularity

The Fourier transform exchanges **decay and smoothness**:

- $f \in C^k$ with integrable $k$-th derivative $\Rightarrow$ $|\hat f(\omega)| = O(|\omega|^{-k})$.
- $f$ has compact support $\Rightarrow$ $\hat f$ is real-analytic (extends to an entire function on $\mathbb{C}$ by Paley–Wiener).
- Conversely, if $\hat f$ has fast decay, $f$ is smooth.

The natural functional-analytic home is the **Schwartz space** $\mathcal{S}(\mathbb{R})$ (smooth, rapidly decreasing functions): on $\mathcal{S}$, the Fourier transform is a topological isomorphism.

## 6. Sobolev spaces and PDEs

Sobolev spaces have their cleanest definition via Fourier:

$$
H^s(\mathbb{R}^d) = \left\{ f \in L^2 : \int (1 + |\omega|^2)^s |\hat f(\omega)|^2\, d\omega < \infty \right\}.
$$

Linear constant-coefficient PDEs reduce to algebra:

- **Heat equation** $\partial_t u = \Delta u$ → $\partial_t \hat u = -|\omega|^2 \hat u$ → $\hat u(\omega, t) = e^{-|\omega|^2 t}\hat u_0(\omega)$.
- **Wave equation** $\partial_t^2 u = \Delta u$ → $\hat u(\omega,t) = \cos(|\omega| t) \hat u_0 + \frac{\sin(|\omega| t)}{|\omega|} \hat v_0$.
- **Schrödinger equation** $i\partial_t \psi = -\Delta \psi$ → $\hat\psi(\omega,t) = e^{-i|\omega|^2 t}\hat\psi_0$.

Each PDE becomes an ODE in $\omega$, solved pointwise.

## 7. Discrete transforms in practice

The continuous transform is a theoretical object; computers use:

- **DFT / FFT** — $O(N\log N)$ algorithm by Cooley–Tukey (1965). Used everywhere from MP3 to numerical PDE solvers.
- **Discrete Cosine Transform (DCT)** — real-valued cousin of DFT; the heart of JPEG, MP3.
- **Short-Time Fourier Transform (STFT)** — windowed FFT producing a spectrogram; basis of Whisper-style speech models.
- **Wavelet transform** — replaces the global $e^{i\omega t}$ basis with localised "wavelets"; natural for non-stationary signals and JPEG2000.
- **Number-Theoretic Transform (NTT)** — DFT over a finite field; used in zero-knowledge proofs and FHE.

## 8. Applications in modern ML

- **Fourier Neural Operators (FNO).** Learn integral kernels by parameterising them in the frequency domain — convolution is diagonal there. Solves parametric PDEs (Navier–Stokes, Darcy flow) 100×–1000× faster than mesh solvers.
- **NeRF / SIREN positional encoding.** Maps low-dimensional coordinates through $\sin(2^k \pi x), \cos(2^k \pi x)$ — Fourier features that let MLPs represent high-frequency detail.
- **Random Fourier Features (Rahimi–Recht).** Approximate shift-invariant kernels by sampling frequencies; turns kernel methods linear-in-features.
- **Spectral normalisation, spectral pooling, spectral GNNs.** All depend on diagonalising operators by Fourier-like transforms.
- **Audio models** (Whisper, AudioLM, Suno) operate on STFT spectrograms or learned mel filterbanks rather than raw waveforms.

## 9. Quantum mechanics

In QM, position and momentum wavefunctions are Fourier pairs:

$$
\tilde\psi(p) = \frac{1}{\sqrt{2\pi\hbar}}\int \psi(x)\, e^{-ipx/\hbar}\, dx.
$$

The momentum operator $\hat p = -i\hbar \partial_x$ becomes multiplication by $p$ in momentum space. The Heisenberg inequality (§4) is exactly the position–momentum uncertainty relation.

## 10. Visualisation: time vs frequency

```chart
{
  "type": "line",
  "xAxis": "x",
  "data": [
    {"x": 0,  "time_signal": 0.0, "freq_peak": 0.0},
    {"x": 1,  "time_signal": 0.8, "freq_peak": 0.05},
    {"x": 2,  "time_signal": -0.5, "freq_peak": 0.1},
    {"x": 3,  "time_signal": 0.9, "freq_peak": 1.0},
    {"x": 4,  "time_signal": -0.8, "freq_peak": 0.1},
    {"x": 5,  "time_signal": 0.1, "freq_peak": 0.05}
  ],
  "lines": [
    {"dataKey": "time_signal", "stroke": "#3b82f6", "name": "Time domain (oscillating)"},
    {"dataKey": "freq_peak",   "stroke": "#ef4444", "name": "Frequency domain (sharp peak)"}
  ]
}
```

*A messy oscillating signal in time is a clean energy peak in frequency. The change of basis exposes structure that was invisible in the original coordinates.*

## 11. Related topics

- [[hilbert-banach-spaces|Hilbert spaces]] — $L^2$ as the natural home of Fourier.
- [[lp-spaces|$L^p$ spaces]] — Hausdorff–Young: $\mathcal{F}: L^p \to L^{p'}$ for $1 \leq p \leq 2$.
- [[sobolev-spaces|Sobolev spaces]] — defined cleanly via $|\omega|^s$ weighting.
- [[fourier-neural-operators|Fourier Neural Operators]] — learning in frequency space.
- [[spectral-theory-operators|Spectral theory]] — Fourier as a special case of spectral decomposition.
- [[quantum-math|Quantum mathematics]] — position/momentum duality.
- [[time-series|Time series]] — spectral analysis of stochastic processes.
- [[information-theory|Information theory]] — Shannon sampling theorem.

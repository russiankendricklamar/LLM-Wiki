---
title: "Spectral Representation of Stationary Processes"
category: "Mathematics"
order: 19
lang: "en"
slug: "spectral-representation-processes"
---

# Spectral Representation of Stationary Processes

## Overview

The Wiener-Khintchine theorem (see [[stationary-wide-spectral]]) describes how the **autocovariance** of a stationary process decomposes into a Fourier series. But there is a stronger statement: the **process itself** (not just its covariance) can be written as a stochastic integral against an orthogonal random measure. This is the **spectral representation**.

It underpins frequency-domain analysis of time series, the theory of linear filtering, forecasting, ARMA models, and modern econometrics and signal processing. Chapter VI of Shiryaev's [[shiryaev-probability|"Probability"]] devotes a section to this result.

## Orthogonal random measure

**Definition.** A complex-valued random set-function $Z(\Delta)$, defined on Borel subsets $\Delta \subseteq [-\pi, \pi]$, is an **orthogonal random measure** with control measure $F$ if:

1. $\mathbb{E}[Z(\Delta)] = 0$ for all $\Delta$.
2. $\mathbb{E}[Z(\Delta_1) \overline{Z(\Delta_2)}] = F(\Delta_1 \cap \Delta_2)$.
3. $Z(\Delta_1 \cup \Delta_2) = Z(\Delta_1) + Z(\Delta_2)$ for disjoint $\Delta_1, \Delta_2$.

Condition (2) forces increments over disjoint sets to be **uncorrelated** — this is the meaning of "orthogonal." The control measure $F$ is the same spectral measure that appears in the Wiener-Khintchine theorem.

## The spectral representation theorem

**Theorem (Cramer, 1940; Kolmogorov).** Every wide-sense stationary process $(X_t)_{t \in \mathbb{Z}}$ with zero mean admits a representation

$$X_t = \int_{-\pi}^{\pi} e^{i\lambda t} \, dZ(\lambda),$$

where $Z$ is an orthogonal random measure with spectral measure $F$ of the process.

The integral is understood as an $L^2$-limit of finite sums: $X_t$ is approximated by linear combinations $\sum_k e^{i\lambda_k t} Z(\Delta_k)$.

**Interpretation.** The process is a "mixture" of harmonics $e^{i\lambda t}$ with random amplitudes $dZ(\lambda)$. Different frequencies are mutually uncorrelated. It is the randomized analogue of a Fourier series expansion.

## Link to Wiener-Khintchine

From $X_t = \int e^{i\lambda t} dZ(\lambda)$ one recovers the Wiener-Khintchine theorem automatically:

$$R(\tau) = \mathbb{E}[X_{t+\tau} \overline{X_t}] = \int_{-\pi}^{\pi} e^{i\lambda\tau} \, dF(\lambda).$$

But the spectral representation is **stronger**: it describes the process itself as a random function, not just its moments. This enables building filters, forecasts, and linear transformations directly in the frequency domain.

## Linear transformations

If $h : [-\pi, \pi] \to \mathbb{C}$ is a measurable bounded function, then

$$Y_t = \int_{-\pi}^{\pi} e^{i\lambda t} h(\lambda) \, dZ(\lambda)$$

is again a stationary process, with spectral measure $|h(\lambda)|^2 dF(\lambda)$. This is the **linear filter** with transfer function $h$.

**Examples:**

1. **Lag**: $h(\lambda) = e^{-i\lambda k}$ gives $Y_t = X_{t-k}$.
2. **Differencing**: $h(\lambda) = 1 - e^{-i\lambda}$ gives $Y_t = X_t - X_{t-1}$.
3. **Ideal low-pass**: $h(\lambda) = \mathbb{1}_{|\lambda| < \lambda_0}$ kills high frequencies.
4. **Integrator**: $h(\lambda) = 1/(1 - e^{-i\lambda})$ — inverse of differencing.

## Wold decomposition

**Wold's theorem.** Every zero-mean wide-sense stationary process decomposes uniquely as

$$X_t = V_t + W_t,$$

where:

- $V_t = \sum_{k=0}^\infty \psi_k \varepsilon_{t-k}$ is the **purely non-deterministic** part, representable as an infinite moving average of white noise $\varepsilon_t$.
- $W_t$ is the **deterministic** part, almost surely predictable from the past (pure harmonics, constants).

Moreover $V_t \perp W_t$ in $L^2$.

Wold decomposition is a foundational result: **every** stationary process is an infinite-dimensional ARMA plus a harmonic part. This justifies ARIMA models as a universal tool for describing stationary series.

## Connection to ARMA models

An ARMA($p$, $q$) process is a concrete realization of the purely non-deterministic part of the Wold decomposition, where the coefficients $\psi_k$ have a rational generating function:

$$\sum_{k=0}^\infty \psi_k z^k = \frac{\theta(z)}{\phi(z)},$$

with $\theta, \phi$ polynomials (MA and AR parts). This gives a **finite parametric** description of the process.

Frequency transfer function: $h(\lambda) = \theta(e^{-i\lambda}) / \phi(e^{-i\lambda})$. Spectral density: $f(\lambda) = \frac{\sigma^2}{2\pi} |h(\lambda)|^2$.

## Kolmogorov-Wiener forecasting

**Linear prediction problem.** Given $X_1, \ldots, X_n$, find the best (in $L^2$) linear combination predicting $X_{n+h}$.

In the frequency domain the optimal predictor is the projection of the spectral representation onto the subspace of causal filters. The Kolmogorov-Wiener formula (1941): the $h$-step-ahead forecast error is

$$\sigma_h^2 = \sigma^2 \sum_{k=0}^{h-1} \psi_k^2,$$

where $\psi_k$ are the Wold coefficients.

This formula is the theoretical underpinning of ARIMA forecasting in econometrics, the Box-Jenkins methodology, and all practical time-series prediction systems.

## Random measures and Brownian motion

The spectral representation is the discrete analogue of the continuous representation of [[brownian-motion|Brownian motion]] as an integral against a Gaussian white-noise measure:

$$B_t = \int_0^t dW_s.$$

Both constructions are special cases of a more general theory of stochastic integration with respect to orthogonal measures. For Gaussian processes it is also a rigorous $L^2$-construction.

## Applications

**1. Frequency-structure analysis of financial series.** The spectral representation lets one isolate components of different frequencies — trend (low), cycles (medium), noise (high) — and analyze each independently.

**2. Hodrick-Prescott filter.** The classical macroeconomic filter is a specific linear filter in the frequency domain extracting "trend" and "cycle" components. It works thanks to the spectral representation.

**3. Wavelets.** Wavelet analysis generalizes the spectral representation: instead of harmonics $e^{i\lambda t}$, it uses time-localized functions. For non-stationary processes it outperforms pure Fourier.

**4. Speech and image processing.** DSP builds filters in the frequency domain using spectral representations.

## Limitations

The spectral representation exists only for **stationary** processes. Non-stationary data (trends, regime shifts, nonlinear effects) require generalizations:

- **Locally stationary processes** — slowly varying spectra.
- **Evolutionary spectra** (Priestley).
- **Wavelet transforms**.
- **[[hilbert-huang-transform|Hilbert-Huang transform]]** — empirical decomposition for strongly non-stationary data.

## Related Topics

- [[stationary-wide-spectral]] — base theory of spectral densities.
- [[ergodic-theorems-birkhoff]] — ergodic theory of stationary processes.
- [[brownian-motion]] — continuous analogue as a stochastic integral.
- [[dft]], [[fft]] — numerical methods.
- [[wavelet-transform]] — non-stationary generalization.
- [[kalman-filter]] — time-domain analogue of frequency filters.
- [[hilbert-huang-transform]] — alternative decomposition.
- [[stylized-facts-returns]] — empirical frequency-domain properties of financial series.

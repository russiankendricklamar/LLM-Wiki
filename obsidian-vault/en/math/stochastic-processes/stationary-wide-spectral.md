---
slug: "/math/stationary-wide-spectral"
title: "Wide-Sense Stationary Processes and Spectral Density"
category: "Ergodic and Spectral Theory"
order: 3
lang: "en"
---

# Wide-Sense Stationary Processes and Spectral Density

Wide-sense (second-order, covariance) stationarity is weaker than strict stationarity from [[ergodic-theorems-birkhoff|ergodic theory]]: it requires not that all distributions coincide under shift, but only that **the first two moments coincide**.

For Gaussian processes the two notions are the same, but in general they differ. Wide-sense stationarity is the **right language** for spectral econometrics, signal processing, the Kalman filter, and ARMA modelling. It is the setting of the Wiener-Khintchine theorem, which links autocovariance and spectral density. Shiryaev's "Probability" develops this theory. Here are the key nodes.

## Definition

**Definition.** A random process $(X_t)_{t \in \mathbb{Z}}$ (or $\mathbb{R}$) is called **wide-sense stationary** if:

1. $\mathbb{E}[X_t] = \mu$ does not depend on $t$ (constant mean).
2. $\text{Cov}(X_t, X_s) = R(t - s)$ depends only on the difference $t - s$, not on $t$ and $s$ separately.

The function $R(\tau) = \text{Cov}(X_t, X_{t+\tau})$ is the **autocovariance function**. At $\tau = 0$ it gives the variance $R(0) = \text{Var}(X_t)$.

The **autocorrelation function** is its normalized version:

$$\rho(\tau) = R(\tau) / R(0), \quad \rho(0) = 1, \quad |\rho(\tau)| \leq 1.$$

## Properties of the autocovariance

1. **Symmetry**: $R(-\tau) = R(\tau)$.
2. **Non-negative definiteness**: for any $t_1, \ldots, t_n$ and constants $c_1, \ldots, c_n$:

$$\sum_{i, j} c_i c_j R(t_i - t_j) \geq 0.$$

This non-negative definiteness is exactly the condition for $R$ to be the autocovariance of **some** stationary process. Bochner's theorem says that non-negative definite functions are exactly the Fourier transforms of non-negative measures (see below).

## Spectral density

**Definition.** The **spectral density** $f(\lambda)$ of a stationary process is a function linked to the autocovariance by the Fourier transform:

$$R(\tau) = \int_{-\pi}^{\pi} e^{i\lambda\tau} f(\lambda) \, d\lambda, \quad \tau \in \mathbb{Z},$$

and conversely (if $R \in \ell^1$):

$$f(\lambda) = \frac{1}{2\pi} \sum_{\tau = -\infty}^{\infty} e^{-i\lambda\tau} R(\tau).$$

The spectral density shows **which frequencies are present** in the process: $f(\lambda)$ large — many oscillations at frequency $\lambda$, small — few. It is the spectrogram analogue for random processes.

## Wiener-Khintchine theorem

**Theorem (Wiener, 1930; Khintchine, 1934).** A function $R(\tau)$ is the autocovariance function of some stationary process if and only if it is the Fourier transform of a **non-negative** measure $F$ on $[-\pi, \pi]$:

$$R(\tau) = \int_{-\pi}^{\pi} e^{i\lambda\tau} \, dF(\lambda).$$

The measure $F$ is the **spectral measure**. If $F$ is absolutely continuous, $dF(\lambda) = f(\lambda) \, d\lambda$, and one recovers the spectral density. In general $F$ may have atomic parts (corresponding to purely periodic components of the process).

This is the central result: **the autocovariance and the spectral measure are two equivalent descriptions** of a stationary process. Choosing between them is a matter of convenience.

## Examples

**1. White noise.** $X_t$ i.i.d. with $\text{Var}(X_t) = \sigma^2$. Then $R(\tau) = \sigma^2 \delta_{\tau,0}$ and $f(\lambda) = \sigma^2 / (2\pi)$ — **constant**. Hence the name: white noise contains every frequency at the same intensity, like white light.

**2. AR(1) process.** $X_t = \phi X_{t-1} + \varepsilon_t$, $|\phi| < 1$, $\varepsilon_t$ white noise with variance $\sigma^2$.

Autocovariance: $R(\tau) = \frac{\sigma^2}{1 - \phi^2} \phi^{|\tau|}$ — geometric decay.

Spectral density: $f(\lambda) = \frac{\sigma^2}{2\pi |1 - \phi e^{-i\lambda}|^2}$. If $\phi > 0$, maximum at $\lambda = 0$ — the process is "slow." If $\phi < 0$, maximum at $\lambda = \pi$ — "rapidly alternating."

**3. Harmonic component.** $X_t = A \cos(\omega t + \Theta)$, $\Theta$ uniform on $[0, 2\pi)$. $R(\tau) = (A^2/2) \cos(\omega \tau)$ — a cosine. The spectral measure consists of two atoms at $\pm \omega$. A purely periodic process without a continuous spectral density.

**4. ARMA($p$, $q$).** A process with autoregressive and moving-average parts has spectral density of the form $f(\lambda) \propto |MA\text{-polynomial}|^2 / |AR\text{-polynomial}|^2$ — a rational function of $e^{i\lambda}$.

## Herglotz-Bochner decomposition

**Herglotz's theorem.** Every non-negative definite function $R : \mathbb{Z} \to \mathbb{R}$ has a unique representation

$$R(\tau) = \int_{-\pi}^{\pi} e^{i\lambda\tau} \, dF(\lambda),$$

where $F$ is a non-negative measure on $[-\pi, \pi]$. This strengthens Wiener-Khintchine: every non-negative definite function ACTUALLY corresponds to some stationary process. There are no empty theoretical candidates.

## Applications in econometrics

**1. Analysis of financial time series.** Log-returns have spectral density close to constant (near white noise), but **squared** returns do not: they concentrate at low frequencies (reflecting [[stylized-facts-returns|volatility clustering]] and long memory).

**2. Filtering.** If the process has spectral density $f$ and the "interfering" noise has density $g$, the optimal linear Wiener filter in the spectral domain is $h(\lambda) = f(\lambda) / (f(\lambda) + g(\lambda))$. This recipe is the foundation of classical signal processing.

**3. Periodogram and test for periodicity.** For data $X_1, \ldots, X_n$ the **periodogram**

$$I_n(\lambda) = \frac{1}{2\pi n} \left| \sum_{t=1}^n X_t e^{-i\lambda t} \right|^2$$

is an asymptotically unbiased estimator of $f(\lambda)$. Used to detect cycles, seasonality, and hidden periodic components.

**4. Long memory.** If $f(\lambda) \sim |\lambda|^{-2d}$ as $\lambda \to 0$ for $d \in (0, 1/2)$, the process has **long memory** (FARIMA, fractional ARIMA). This is linked to the [[self-similarity-fractality|Hurst exponent]] $H = 1/2 + d$.

**5. Singular spectrum analysis (SSA).** Decomposition of a time series into "principal components" extracted from the covariance matrix of an embedded trajectory. Close in spirit to PCA, but for time series.

## Connection to the Kalman filter

For linear Gaussian systems with known spectral structure, the optimal Kalman filter is a sequential (time-domain) realization of the optimal Wiener filter from the frequency domain. In the stationary regime they coincide.

Many financial applications (estimating hidden factors, dynamic volatility, term-structure factor models) use the Kalman filter precisely because the models are formulated in terms of spectral densities.

## Limitations

Wide-sense stationarity is **insufficient** for many purposes:

- For non-Gaussian processes it does not imply ergodicity.
- It does not control the distributional tails, only the second moment.
- Heavy-tailed models may have infinite variance and fall outside this framework altogether.

In such cases one needs either stronger assumptions (strict stationarity + ergodicity) or weaker tools (copulas, robustness bounds).

## Related Articles

- [[ergodic-theorems-birkhoff]] — strict stationarity.
- [[spectral-representation-processes]] — spectral representation of the process itself, not just its covariance.
- [[characteristic-functions]] — kindred Fourier tool for one-dimensional distributions.
- [[brownian-motion]] — not strictly stationary, but its increments are.
- [[kalman-filter]] — practical application of the spectral theory.
- [[self-similarity-fractality]] — long memory and fractality in the frequency domain.
- [[stylized-facts-returns]] — empirical features of financial series.
- [[dft]], [[fft]] — numerical realizations of spectral methods.
- [[hilbert-huang-transform]] — alternative (nonlinear) spectral analysis.

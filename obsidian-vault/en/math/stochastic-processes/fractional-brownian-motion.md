---
title: "Fractional Brownian Motion"
category: "Stochastic Processes"
order: 21
lang: "en"
slug: "fractional-brownian-motion"
growth: "seedling"
---

Fractional Brownian motion (fBm) $B^H_t$ is a zero-mean Gaussian process parametrized by the Hurst exponent $H \in (0,1)$, generalizing standard Brownian motion through long-range dependence and anomalous scaling. Unlike Wiener processes, fBm admits non-independent increments that exhibit memory spanning the entire history.

## Definition and basic properties

The process is defined by the conditions $B^H_0 = 0$, $\mathbb{E}[B^H_t] = 0$, and covariance function

$$\text{Cov}(B^H_s, B^H_t) = \frac{1}{2}(|s|^{2H} + |t|^{2H} - |s-t|^{2H}).$$

When $H = 1/2$, classical Brownian motion is recovered with independent increments and variance $\mathbb{E}[(B^H_s - B^H_t)^2] = |s - t|$. For $H \neq 1/2$, increments are correlated. Define the sequence of increments $X_k = B^H_{k+1} - B^H_k$; then

$$\text{Cov}(X_0, X_n) \sim C \cdot n^{2H-2} \quad (n \to \infty).$$

When $H > 1/2$, covariances remain positive and **non-summable**: $\sum_{n=1}^{\infty} \text{Cov}(X_0, X_n) = \infty$ — this is **long-range dependence** or **persistence**, where large increments tend to cluster. When $H < 1/2$, covariances oscillate in sign, inducing **anti-persistence** or mean-reverting behavior: upward moves are likely followed by reversals.

## Self-similarity and Hölder regularity

A cornerstone of fBm theory is self-similarity: for any $c > 0$,

$$B^H_{ct} \stackrel{d}{=} c^H B^H_t.$$

This power-law scaling implies that increasing time by factor $c$ scales increments by $c^H$, so variance grows as $t^{2H}$. Paths possess exactly Hölder regularity $H - \varepsilon$ for any $\varepsilon > 0$: they are nowhere differentiable (when $H < 1$), and roughness is encoded in the exponent $H$. For $H$ close to $0.5$, paths are nearly smooth; for $H$ near $0$ or $1$, they are fractal-like.

## Mandelbrot-Van Ness representation

A concrete realization of fBm is constructed via stochastic integration:

$$B^H_t = C_H \int_{-\infty}^{t} \bigl[(t-s)^{H-1/2} - (-s)_+^{H-1/2}\bigr] \, dW_s,$$

where $C_H$ is a normalization constant, $(x)_+ = \max(x, 0)$, and $W_s$ is standard white noise. The kernel decays as $|u|^{H-1/2}$ for large $|u|$, a power law that encodes memory: the farther into the past, the weaker the influence, but the influence never vanishes completely. This representation is particularly useful for simulating sample paths and analyzing asymptotic behavior.

## Non-semimartingale obstruction

A fundamental obstacle to standard [[stochastic-differential-equations|stochastic calculus]]: for $H \neq 1/2$, the process $B^H_t$ **is not a semimartingale**. It cannot be decomposed into a finite-variation process plus a local martingale. Consequently, integrals $\int_0^t f(s) \, dB^H_s$ have no meaning in the classical Ito sense. Two approaches circumvent this:

1. **Rough path theory** (Lyons): Treats fBm not as a path but as an element of a rough path space, where iterated integrals $\int_0^t \int_0^s dB^H_u \, dB^H_s$ are defined directly; the first two levels of the signature suffice for integration.
2. **Malliavin calculus**: Extends stochastic analysis to functionals of Gaussian processes via Sobolev spaces on Wiener space, allowing formal computation of Malliavin derivatives and adjoint representations.

Both frameworks are essential for solving differential equations driven by rough fBm.

## Long-range dependence and Hurst exponent estimation

For $H > 1/2$, the non-summability of covariances means that empirical sample moments and variances converge slowly. Estimating $H$ from observed time series employs several methods:

- **R/S (Rescaled Range) analysis** (Hurst, 1951): Compute the ratio of range to standard deviation over windows of length $n$; this scales as $n^H$. Robust to trends and non-stationarities.
- **Detrended Fluctuation Analysis (DFA)**: Remove polynomial trends locally and measure the scaling of residual fluctuations as a function of window size; $F(n) \sim n^H$.
- **Wavelet-based estimators**: Decompose the signal; coefficients at scale $2^j$ scale as $2^{Hj}$, allowing estimation via regression.
- **Whittle approximation**: A quasi-likelihood method using the periodogram in the frequency domain; asymptotically efficient.

## Rough volatility: the financial discovery

In 2018, Gatheral, Jacquier, and Rosenbaum made a striking empirical finding: **the logarithm of asset volatility behaves as a fractional Brownian motion with $H \approx 0.1$**. Since $H < 1/2$, volatility is **rough** (anti-persistent). Implications:

1. **Microstructure**: Volatility exhibits no tendencies to sustain shocks; reversals occur at very short timescales.
2. **Power spectrum**: $S(\omega) \propto \omega^{-\alpha}$ with $\alpha \approx 0.8$ (close to $1/f$ noise), indicating fractal fluctuations across decades of frequency.
3. **Option pricing**: The **rough Heston model** and **rough fractional stochastic volatility (RFSV)** models fit observed implied volatility smiles and skew surfaces better than smooth-volatility alternatives, especially for short maturities.
4. **Volatility surface**: The rough model explains the explosive behavior of option prices near the money and replicates empirical phenomena (vol-of-vol clustering, leverage effect asymptotics).

Unlike the contested long-memory hypothesis for returns (which is not fBm but might be leverage-driven), rough volatility is robustly validated in high-frequency data and reflects information diffusion asymmetries.

## Physical and applied contexts

Fractional Brownian motion appears throughout physics and engineering: $1/f$ noise in electronic devices, Internet traffic with heavy-tailed inter-arrival times, river discharges and rainfall records in hydrology. The power-law scaling exponent $H$ captures the degree of self-affinity in the phenomenon, reflecting a cascade of influences acting across multiple timescales. In all these domains, the non-Markovian character (memory) and fractal geometry are signatures of criticality or hierarchical organization.

## Connections and extensions

- [[hurst-exponent]]: the scaling parameter $H$ and its estimation methods.
- [[rough-volatility]]: financial applications and the empirical rough vol discovery.
- [[self-similarity-fractality]]: self-similar and self-affine processes; fractal dimension.
- [[spectral-representation-processes]]: frequency-domain kernels and transfer functions.
- [[law-iterated-logarithm]]: asymptotics of $\max_{t \in [0,T]} B^H_t$.
- [[stable-distributions]]: alternatives with power-law tails; $\alpha$-stable processes.

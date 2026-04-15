---
title: "Self-Similarity and Fractality of Financial Series"
category: "Stochastic Processes"
order: 143
lang: "en"
---

# Self-Similarity and Fractality of Financial Series

The idea that **financial time series are self-similar** goes back to Benoît Mandelbrot, who in the 1960s noticed that stock price charts "look the same" at different time scales — second, minute, hour, and day charts are indistinguishable without axis labels. Mandelbrot turned this qualitative observation into a quantitative program: introducing fractal price models, measuring fractal dimension, generalizing [[brownian-motion|Brownian motion]] to **fractional Brownian motion**.

[[shiryaev-stochastic-finance|Shiryaev]] (Vol. 1, Ch. III, §2) devotes a detailed section to this. Self-similarity and fractality are not just an aesthetic observation but a **technical tool** for modelling long memory, volatility clustering, and heavy tails in a unified framework.

## Self-similar processes

**Definition.** A stochastic process $X = (X_t)_{t \geq 0}$ is **self-similar with exponent $H \in (0, 1)$** if for every $c > 0$

$$X_{ct} \stackrel{d}{=} c^H \cdot X_t,$$

where $\stackrel{d}{=}$ denotes equality of all finite-dimensional distributions.

In words: "scaling time by $c$ is equivalent to scaling magnitude by $c^H$." This is **scale invariance**: the process "looks the same" at every time scale once axes are renormalized.

**Simplest example:** [[brownian-motion|Brownian motion]] $W$ is self-similar with $H = 1/2$:

$$W_{ct} \stackrel{d}{=} \sqrt{c} \cdot W_t.$$

This is the same scaling invariance as in physics of diffusion (Einstein's law $\langle x^2 \rangle \sim t$).

## Fractional Brownian motion (fBm)

**Fractional Brownian motion (fBm)** $B^H = (B^H_t)_{t \geq 0}$ — generalization of classical Brownian motion with Hurst exponent $H \in (0, 1)$.

**Definition.** $B^H$ is a Gaussian process with $B^H_0 = 0$, $\mathbb{E}[B^H_t] = 0$, and covariance

$$\mathbb{E}[B^H_s \cdot B^H_t] = \frac{1}{2}\!\big( |s|^{2H} + |t|^{2H} - |s - t|^{2H} \big).$$

Properties:

- Self-similar with exponent $H$.
- For $H = 1/2$ recovers classical Brownian motion.
- For $H > 1/2$ has **long memory** (positive correlation of increments) — "persistence."
- For $H < 1/2$ has **anti-persistence** (negative correlation of increments) — "mean-reversion."
- Is **not a semimartingale** for $H \neq 1/2$ (a problem critical for finance).

## The Hurst exponent and memory

The parameter $H$ is the **Hurst exponent**, named after the hydrologist Harold Hurst, who in 1951 discovered it studying Nile flood levels: long-run gauge series showed the "Joseph effect" — extended periods of high or low water unexplainable by independent increments.

**Empirical $H$ in finance:**

- **Stock log-prices**: $H \approx 0.5$ — essentially Brownian (consistent with EMH).
- **Log-absolute returns** (volatility proxy): $H \approx 0.7{-}0.9$ — strong long memory.
- **Trading volumes**: $H \approx 0.7{-}0.8$ — long memory.
- **Bitcoin and crypto**: $H \approx 0.55{-}0.65$ for prices, which some researchers interpret as "weak inefficiency."

So **prices themselves** are close to standard Brownian, but **their volatility** has long memory — this is the "volatility clustering" phenomenon from [[stylized-facts-returns|stylized facts]].

## Estimation methods for $H$

1. **R/S analysis** (rescaled range, Hurst 1951). The original method; computes the range/std ratio at different scales. Simple but biased for short series.
2. **DFA** (detrended fluctuation analysis, Peng 1994). Better for nonstationary data.
3. **Wavelet methods**. Estimate $H$ from scaling of wavelet coefficients; robust to local trends.
4. **MLE for fBm**. Direct maximum likelihood under the Gaussian assumption.

See [[hurst-exponent]] for a detailed discussion.

## fBm in finance: the arbitrage problem

**Main theoretical issue with fBm as a price model:** for $H \neq 1/2$ fractional Brownian motion is **not a semimartingale**, so the model $S_t = S_0 e^{B^H_t}$ does not admit well-defined [[bs-market-self-financing|self-financing strategies]] and [[ftap-first-fundamental-theorem|FTAP]] does not apply.

Worse, Rogers (1997) showed that in the **pure** fBm model **arbitrage exists** (a strategy with sure profit can be built), making it unsuitable for arbitrage-free pricing.

Workarounds:

- **Mixed fBm**: $W + \varepsilon B^H$ — a sum of classical and fractional Brownian motion. Under certain conditions this is a semimartingale and arbitrage disappears.
- **Regularization**: use fBm only to model **volatility**, not the price itself. The price remains a semimartingale.
- **"Modelling without arbitrage"**: use fBm as a descriptive model without pricing claims.

## Rough volatility

Since 2014 a class of **rough volatility** models has emerged in which **volatility** (not price) is modelled as a fractional process with very small $H \approx 0.05{-}0.15$. This is not "long memory" but "roughness": volatility paths are less regular than ordinary Brownian.

Empirics (Gatheral-Jaisson-Rosenbaum, 2018) showed that rough models **calibrate option-market surfaces significantly better** than classical Heston. The standard example is **rough Heston**.

From [[shiryaev-stochastic-finance|Shiryaev's]] perspective this is a modern continuation of the 1990s program: Mandelbrot's fractal ideas turned out to be the right language for what was empirically obvious — real volatility is neither constant nor "classical" stochastic, but has nontrivial fractal structure.

## Related Articles

- [[brownian-motion]] — special case of fBm with $H = 1/2$.
- [[hurst-exponent]] — practical estimation of the Hurst exponent.
- [[stylized-facts-returns]] — empirical facts on volatility long memory.
- [[stable-distributions]] — α-stable processes are also self-similar (with exponent $1/\alpha$).
- [[levy-esscher-continuous]] — Lévy processes as an alternative model class.
- [[heston-model]] — stochastic volatility; rough generalizations of this model.
- [[ftap-first-fundamental-theorem]] — theorem broken by fBm price models.
- [[fractional-fokker-planck]] — connection to fractional diffusion in physics.

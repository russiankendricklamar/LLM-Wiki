---
title: "Hyperbolic Distributions and Processes"
category: "Stochastic Processes"
order: 142
lang: "en"
---

# Hyperbolic Distributions and Processes

Hyperbolic distributions are a parametric family introduced by Ole Barndorff-Nielsen in 1977 to describe distributions of sand-grain sizes in dunes. Since the 1990s they have been widely applied in financial mathematics as a **golden middle** between the normal distribution (too thin tails) and stable ones (infinite variance).

[[shiryaev-stochastic-finance|Shiryaev]] includes them in the section on non-Gaussian distributions because they offer **heavy tails, finite moments of all orders, and analytical formulas** simultaneously — a rare combination for practical applications.

## Definition

The **hyperbolic distribution** has a log-density equal to a hyperbolic curve (hence the name):

$$\log p(x) = -\alpha \sqrt{\delta^2 + (x-\mu)^2} + \beta(x - \mu) + \text{const},$$

with $\alpha > |\beta| \geq 0$, $\delta > 0$, $\mu \in \mathbb{R}$. The parameters control:

- $\alpha$ — "peakedness" (mass concentration),
- $\beta$ — asymmetry,
- $\delta$ — scale,
- $\mu$ — shift.

The full density includes a normalizing constant with the modified Bessel function $K_1$:

$$p(x) = \frac{\sqrt{\alpha^2 - \beta^2}}{2\alpha\delta K_1(\delta\sqrt{\alpha^2 - \beta^2})} \exp\!\big(-\alpha\sqrt{\delta^2 + (x-\mu)^2} + \beta(x-\mu) \big).$$

## Tail behaviour

As $|x| \to \infty$ the density behaves like

$$p(x) \sim |x|^{-1/2} e^{-\alpha|x| + \beta x},$$

i.e. **semi-heavy tails** — exponential decay modulated by $|x|^{-1/2}$. This is slower than the normal $e^{-x^2/2}$ but faster than the power tail $|x|^{-\alpha}$ of stable distributions.

The main advantage: **all moments are finite**. This distinguishes hyperbolic distributions from stable ones ($\mathbb{E}[X^2] = \infty$ for $\alpha < 2$) and makes them compatible with classical metrics (Sharpe, variance, correlation) and mean-variance optimization.

## Generalized hyperbolic distributions

**Generalized Hyperbolic (GH)** — extension adding one more parameter $\lambda$:

$$p(x) \propto (\delta^2 + (x-\mu)^2)^{(\lambda - 1/2)/2} \cdot K_{\lambda - 1/2}\!\big(\alpha\sqrt{\delta^2 + (x-\mu)^2} \big) \cdot e^{\beta(x-\mu)}.$$

This family contains as special cases:

- **Hyperbolic** ($\lambda = 1$),
- **Normal Inverse Gaussian (NIG)** ($\lambda = -1/2$),
- **Variance Gamma** ($\lambda > 0, \delta = 0$),
- **Student $t$** (limit as $\alpha \to 0$).

A rich family capable of calibrating almost any empirical shape of log-return distribution.

## Connection to Lévy processes

Each GH distribution is **infinitely divisible** — i.e. is the distribution of an increment of some [[levy-esscher-continuous|Lévy process]]. The corresponding process is called a **Lévy process with GH increments** and is used to model prices:

$$S_t = S_0 \cdot e^{L^{GH}_t}.$$

Since $L^{GH}$ is a Lévy process, it has independent stationary increments, allowing a fully analytical description of the characteristic function:

$$\phi_t(u) = \mathbb{E}[e^{iu L^{GH}_t}] = \big(\phi_1(u) \big)^t.$$

This gives a direct route to option pricing via [[fft|FFT]] (Carr-Madan).

## Financial application

**Eberlein-Keller (1995)** showed that daily log-returns of German equities are described by a hyperbolic distribution to very high accuracy — much better than normal or Student. Since then the GH family has become a standard in industrial financial modelling.

Applications:

- **Pricing model calibration** — the GH family is more flexible than normal and often calibrates option markets better.
- **VaR and CVaR** — accounting for heavy tails gives more conservative extreme-loss estimates than the normal model.
- **Stress testing** — generation of synthetic scenarios with realistic tails.
- **Credit models** — default-loss distributions are often well described by the GH family.

## Comparison with alternatives

| Family | Tails | All moments | Analytics | Calibration |
|---|---|---|---|---|
| **Normal** | $e^{-x^2}$ | Yes | Full | Trivial |
| **[[stable-distributions\|Stable]]** | $x^{-\alpha}$ | Only $\alpha = 2$ | Char. function only | Difficult |
| **Student $t$** | $x^{-\nu-1}$ | Up to order $\nu - 1$ | Full | Easy |
| **Hyperbolic** | $|x|^{-1/2} e^{-\alpha|x|}$ | Yes | Bessel functions | Medium |
| **NIG** | $|x|^{-3/2} e^{-\alpha|x|}$ | Yes | Bessel functions | Medium |

Hyperbolic and NIG are the compromise giving "much for a reasonable price": heavy tails, analytics, finite moments. The price is formula complexity (modified Bessel functions everywhere).

## Connection to stable distributions

Technically hyperbolic distributions are **not stable** in the Lévy sense: a sum of two hyperbolic variables is not hyperbolic. They are only infinitely divisible. This is the price of finite moments: stability requires power tails and power tails give infinite moments.

In this sense hyperbolic distributions are a **"hand-crafted" compromise** that does not follow from a generalized CLT but is constructed specifically for practical needs.

## Related Articles

- [[stable-distributions]] — pure alternative with CLT theoretical justification but infinite moments.
- [[levy-esscher-continuous]] — Lévy processes into which GH increments embed.
- [[stylized-facts-returns]] — empirical properties the GH family calibrates.
- [[heston-model]] — alternative route to the volatility smile (stochastic volatility).
- [[brownian-motion]] — limiting special case — degeneration of all GH to normal.
- [[cornish-fisher-cvar]] — VaR approximation that works naturally with GH distributions.
- [[fft]] — numerical method for option pricing with GH increments.

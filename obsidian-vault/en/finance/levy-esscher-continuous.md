---
title: "Lévy Processes and the Continuous Esscher Transform"
category: "Pricing Models"
order: 132
lang: "en"
slug: "levy-esscher-continuous"
---

# Lévy Processes and the Continuous Esscher Transform

## Overview

Lévy processes are the broadest "homogeneous" class of [[semimartingale-models|semimartingales]]. They are processes with independent and stationary increments, generalizing both [[brownian-motion|Brownian motion]] (purely continuous) and the Poisson process (purely jump). Every other independent-increments process is built by combining these.

In finance, Lévy processes are used as **price models with heavy tails and jumps**. [[shiryaev-stochastic-finance|Shiryaev]] (Vol. 2, Ch. VII, §3c) devotes a section to their financial application: the central result is the construction of a martingale measure via the **continuous-time Esscher transform**.

## Definition

**Definition.** A stochastic process $L = (L_t)_{t \geq 0}$ with $L_0 = 0$ is a **Lévy process** if

1. **Independent increments**: for $0 \leq t_0 < t_1 < \ldots < t_n$ the variables $L_{t_1} - L_{t_0}, \ldots, L_{t_n} - L_{t_{n-1}}$ are independent.
2. **Stationary increments**: the distribution of $L_{t+s} - L_t$ depends only on $s$.
3. **Stochastic continuity**: $\mathbb{P}(|L_{t+h} - L_t| > \varepsilon) \to 0$ as $h \to 0$.

This axiomatizes "time-homogeneous random motion." Every Lévy process is a semimartingale with a **time-constant** triplet $(\beta, \sigma^2, \pi)$.

## The Lévy triplet

**Lévy-Khintchine formula.** The characteristic function of $L_t$ has the form

$$\mathbb{E}[e^{i\xi L_t}] = \exp\!\left( t \cdot \psi(\xi) \right),$$

where the **Lévy exponent** is

$$\psi(\xi) = i\beta\xi - \frac{1}{2}\sigma^2\xi^2 + \int_{\mathbb{R}} \!\big( e^{i\xi x} - 1 - i\xi x \mathbf{1}_{|x|\leq 1} \big) \, \pi(dx).$$

The triplet $(\beta, \sigma^2, \pi)$ fully characterizes the process:

- $\beta \in \mathbb{R}$ — drift,
- $\sigma^2 \geq 0$ — diffusion component,
- $\pi$ — **Lévy measure**, a $\sigma$-finite measure on $\mathbb{R} \setminus \{0\}$ with $\int (1 \wedge x^2) \, \pi(dx) < \infty$.

The measure $\pi(A)$ is interpreted as the "average intensity of jumps of size $A$ per unit time."

## Examples

- **Brownian motion**: $\beta = 0$, $\sigma^2 = 1$, $\pi = 0$.
- **Poisson process** with rate $\lambda$: $\beta = 0$, $\sigma^2 = 0$, $\pi = \lambda \delta_1$.
- **Compound Poisson process**: $\beta = 0$, $\sigma^2 = 0$, $\pi = \lambda \cdot F(dx)$ for some jump distribution $F$.
- **Symmetric $\alpha$-stable process**: $\beta = 0$, $\sigma^2 = 0$, $\pi(dx) = c \, |x|^{-1-\alpha} \, dx$ for $\alpha \in (0, 2)$. Heavy tails, infinite variation, infinitely many small jumps.
- **Variance Gamma** (Carr-Chang-Madan): $\beta \neq 0$, $\sigma^2 = 0$, specific $\pi$. A finance model that calibrates better to options markets than BS.
- **CGMY** (Carr-Geman-Madan-Yor): two-tailed generalization of Variance Gamma.

## Lévy financial models

Finance uses the **exponential Lévy model**:

$$S_t = S_0 \cdot e^{L_t},$$

where $L$ is a Lévy process. This is a direct generalization of [[geometric-brownian-motion|GBM]] (where $L$ is Brownian motion with drift). Advantage: $S_t$ can "jump" up and down, modelling real market crashes and spikes.

The main problem is **incompleteness**. The jump component introduces an extra source of risk that cannot be hedged with the existing assets. So the EMM is not unique and an additional selection criterion is needed.

## Continuous-time Esscher transform

**Construction (Gerber-Shiu, 1994).** Suppose the moment generating function of $L_t$ is finite in a neighbourhood of zero: $M_t(\theta) = \mathbb{E}[e^{\theta L_t}] = e^{t\kappa(\theta)} < \infty$ for $\theta$ in some interval. Here $\kappa(\theta) = \log \mathbb{E}[e^{\theta L_1}]$ is the **cumulant** of the process.

The **Esscher measure** with parameter $\theta$:

$$\frac{d\mathbb{P}^{(\theta)}}{d\mathbb{P}}\bigg|_{\mathcal{F}_t} = \frac{e^{\theta L_t}}{e^{t\kappa(\theta)}}.$$

Under $\mathbb{P}^{(\theta)}$ the process $L$ remains a Lévy process but with a **new** triplet:

- new drift: $\beta^{(\theta)} = \beta + \theta\sigma^2 + \int x (e^{\theta x} - 1) \pi(dx)$,
- same diffusion: $\sigma^2$,
- new Lévy measure: $\pi^{(\theta)}(dx) = e^{\theta x} \, \pi(dx)$.

That is, Esscher **exponentially re-weights** the jump distribution (consistent with the general [[girsanov-semimartingales|Girsanov-for-semimartingales]] formula).

## The Esscher martingale measure

**Claim.** $\widetilde{S}_t = S_t e^{-rt}$ becomes a martingale under $\mathbb{P}^{(\theta^*)}$ for $\theta^*$ satisfying

$$\kappa(\theta^* + 1) - \kappa(\theta^*) = r.$$

This is the continuous analogue of the discrete Esscher equation $M(\theta + 1)/M(\theta) = e^r$ and has a unique solution under standard conditions.

The Esscher measure is a **natural canonical choice** of EMM in Lévy models: it minimizes the relative entropy of $\mathbb{Q}$ w.r.t. $\mathbb{P}$ in a specific sense, making it in some sense "the EMM that distorts the historical model the least."

## Option pricing in Lévy models

Under the Esscher measure a European call is priced via the characteristic function:

$$C_0 = e^{-rT} \mathbb{E}^{\mathbb{Q}}[(S_T - K)^+] = \text{Carr-Madan formula}.$$

The Carr-Madan method (1999) uses the Fourier transform of the characteristic function $\phi_T(u) = \mathbb{E}^\mathbb{Q}[e^{iu \log S_T}]$ and an [[fft|FFT]] to compute option prices on a strike grid quickly. This is the **standard** way to price options in Lévy models, since the direct integral is 2-3 orders of magnitude slower.

## Calibration to the market

Lévy models are calibrated to the **implied volatility surface**: parameters $(\sigma, \theta_{\text{tail}}, \ldots)$ are chosen so that model option prices match observed prices better than [[black-scholes|BS]]. Variation and heavy tails capture the "volatility smile" that BS cannot reproduce by construction.

In practice Variance Gamma and CGMY often calibrate well at short maturities, while Merton's jump-diffusion fits markets with rare but large jumps.

## Related Topics

- [[semimartingale-models]] — general class of which Lévy is a special case.
- [[girsanov-semimartingales]] — general Girsanov, to which Esscher reduces in the Lévy case.
- [[discrete-girsanov-esscher]] — discrete analogue of Esscher.
- [[brownian-motion]] — trivial Lévy case without jumps.
- [[geometric-brownian-motion]] — Black-Scholes as $S = e^L$ for Brownian $L$.
- [[heston-model]] — alternative route to the volatility smile (stochastic volatility).
- [[fft]] — numerical backbone of the Carr-Madan method.

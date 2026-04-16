---
title: "Semimartingale Models and Predictable Characteristics"
category: "Pricing Models"
order: 130
lang: "en"
---

# Semimartingale Models and Predictable Characteristics

When Shiryaev moves to continuous time, he immediately postulates: asset prices must be **semimartingales**. This is not a whim or maximal generality for its own sake — it is exactly the **minimal** requirement for the stochastic integral (i.e. [[bs-market-self-financing|self-financing capital]]) to be defined meaningfully for a wide class of predictable strategies.

Semimartingales are the unique class of processes for which Itô calculus works "as expected." Every reasonable price model lives in this class: [[brownian-motion|Brownian motion]], [[geometric-brownian-motion|GBM]], [[heston-model|Heston]], [[levy-esscher-continuous|Lévy processes]] — all are semimartingales.

## Definition

**Definition.** An adapted càdlàg process $X$ is a **semimartingale** if it admits a decomposition

$$X_t = X_0 + M_t + A_t,$$

where $M$ is a local martingale ($M_0 = 0$) and $A$ is a process of bounded variation ($A_0 = 0$).

This decomposition is **not unique** in general — adding a continuous local martingale to $A$ and subtracting it from $M$ keeps the decomposition valid. But for **special** semimartingales (where $A$ can be chosen predictable) the decomposition is unique — this is the classical Doob-Meyer theorem.

## Predictable characteristic triplet

The canonical description of a semimartingale is via its **predictable triplet** $(B, C, \nu)$, where:

- $B = (B_t)$ is a predictable process of bounded variation describing the "drift,"
- $C = (C_t)$ is a predictable increasing process describing the "continuous quadratic variation" (diffusive noise),
- $\nu(dt, dx)$ is a predictable random measure on $\mathbb{R}_+ \times \mathbb{R}$ describing the "jump compensator" (intensity and jump-size distribution).

The canonical form of a semimartingale:

$$X_t = X_0 + B_t + X^c_t + \int_0^t \int_{|x| \leq 1} x \, (\mu - \nu)(ds, dx) + \int_0^t \int_{|x| > 1} x \, \mu(ds, dx),$$

where $\mu$ is the random jump measure of $X$, and $X^c$ is the continuous martingale part with $\langle X^c \rangle = C$. Small jumps are compensated (subtracting $\nu$) for integrability; large jumps are not.

The triplet $(B, C, \nu)$ is the **"stochastic DNA"** of the process. Every statistical property is determined by it. The "semimartingale $\leftrightarrow$ triplet" correspondence provides a classification language analogous to "ODE $\leftrightarrow$ drift and diffusion coefficients" in deterministic analysis.

## Triplet examples

- **[[brownian-motion|Brownian motion]]** $W$: $B_t = 0$, $C_t = t$, $\nu = 0$. Pure diffusion, no jumps.
- **[[geometric-brownian-motion|GBM]]** $S_t = S_0 e^{(\mu - \sigma^2/2) t + \sigma W_t}$: $B_t = (\mu - \sigma^2/2) S_0 t$ (with correction), $C_t = \sigma^2 \int_0^t S^2_s \, ds$, $\nu = 0$.
- **[[cox-process|Poisson process]]** $N$ with rate $\lambda$: $B_t = \lambda t$, $C_t = 0$, $\nu(dt, dx) = \lambda \, dt \, \delta_1(dx)$. Pure jumps, no diffusion.
- **[[levy-esscher-continuous|Lévy process]]** $L$ with triplet $(\beta, \sigma^2, \pi)$: $B_t = \beta t$, $C_t = \sigma^2 t$, $\nu(dt, dx) = dt \, \pi(dx)$. Jumps and diffusion together.

## Semimartingale market models

The modern financial model is a semimartingale price $S$ (under the historical measure $\mathbb{P}$) with triplet $(B^\mathbb{P}, C, \nu^\mathbb{P})$. The discounted price $\widetilde{S} = S/B$ is also a semimartingale. A strategy is a predictable locally bounded process $\gamma$. Self-financing capital is the stochastic integral

$$\widetilde{X}^\pi_t = X_0 + \int_0^t \gamma_s \cdot d\widetilde{S}_s.$$

In this generalized setting the **continuous-time analogue of [[ftap-first-fundamental-theorem|FTAP]]** is the Delbaen-Schachermayer theorem (1994):

**Theorem (NFLVR-FTAP).** A semimartingale market model satisfies NFLVR (No Free Lunch with Vanishing Risk) if and only if there exists a measure $\mathbb{Q} \sim \mathbb{P}$ under which $\widetilde{S}$ is a $\sigma$-martingale.

Note: not "martingale" but $\sigma$-martingale — a technically broader notion needed precisely in continuous time with possible jumps. In discrete time and for continuous (jump-free) models the distinction disappears.

## Why this matters

The semimartingale framework is the **single language** in which all major financial models are formulated:

- Black-Scholes — a diffusion semimartingale model with trivial jumps.
- Heston, SABR — diffusion models with stochastic volatility (extended triplet).
- Merton's jump-diffusion, [[levy-esscher-continuous|Lévy]] — models with jumps.
- [[hawkes-process|Hawkes processes]] — self-exciting jumps in market microstructure.
- [[heston-model|Heston]] — stochastic volatility plus diffusion.

All are described by triplets and belong to one class. Any result proved for semimartingales in general automatically applies to each of them.

## Connection to Girsanov

A change of measure $\mathbb{P} \to \mathbb{Q}$ transforms the triplet: $(B^\mathbb{P}, C, \nu^\mathbb{P}) \to (B^\mathbb{Q}, C, \nu^\mathbb{Q})$. Crucially, the **quadratic variation $C$ is invariant** under equivalent change of measure (an invariant of the Brownian piece), while the drift $B$ and jump compensator $\nu$ transform.

Exact transformation formulas in [[girsanov-semimartingales|Girsanov for semimartingales]].

## Related Articles

- [[ftap-first-fundamental-theorem]] — finite/discrete predecessor.
- [[girsanov-semimartingales]] — how the triplet transforms under change of measure.
- [[levy-esscher-continuous]] — special class of semimartingales with constant triplet.
- [[brownian-motion]] — simplest continuous semimartingale.
- [[geometric-brownian-motion]] — Black-Scholes model as a semimartingale special case.
- [[heston-model]] — diffusion semimartingale with stochastic volatility.
- [[hawkes-process]] — semimartingale with a "jump" triplet that depends nontrivially on history.

---
slug: "/finance/girsanov-semimartingales"
title: "Girsanov's Theorem for Semimartingales"
category: "Pricing Models"
order: 131
lang: "en"
---

# Girsanov's Theorem for Semimartingales

Girsanov's theorem is the working tool of financial mathematics par excellence: it explains **what exactly** the "risk-neutral measure" does to the dynamics of prices. Shiryaev formulates it in maximum generality — for arbitrary semimartingales — and shows how the [[semimartingale-models|predictable triplet]] $(B, C, \nu)$ transforms under an equivalent change $\mathbb{P} \to \mathbb{Q}$.

The short version: **the quadratic variation $C$ is preserved**, while the **drift $B$ and jump compensator $\nu$ change**. Every European option pricing formula in continuous-time models is a consequence of this transformation.

## The classical Brownian case

The simplest and most famous version, for Brownian motion.

**Theorem (Girsanov, 1960).** Let $W$ be standard Brownian motion under $\mathbb{P}$, and let $(\theta_t)_{t \geq 0}$ be a predictable process with $\int_0^T \theta^2_s \, ds < \infty$ a.s. Define the measure $\mathbb{Q}$ via

$$\frac{d\mathbb{Q}}{d\mathbb{P}}\bigg|_{\mathcal{F}_T} = Z_T = \exp\!\left(\int_0^T \theta_s \, dW_s - \frac{1}{2} \int_0^T \theta^2_s \, ds \right).$$

Under **Novikov's condition** ($\mathbb{E}[\exp(\frac{1}{2} \int_0^T \theta^2_s \, ds)] < \infty$), $Z$ is a martingale, $\mathbb{Q}$ is a probability measure, and the process

$$\widetilde{W}_t = W_t - \int_0^t \theta_s \, ds$$

is a $\mathbb{Q}$-Brownian motion. In words: equivalent change of measure **shifts Brownian motion by a drift** $\int \theta \, ds$.

## Application to Black-Scholes

In the model $S_t = S_0 \exp((\mu - \sigma^2/2) t + \sigma W_t)$ choose

$$\theta = -\frac{\mu - r}{\sigma}$$

(minus the "market price of risk"). Then under $\mathbb{Q}$ the process $\widetilde{W}$ is Brownian motion and

$$S_t = S_0 \exp((r - \sigma^2/2) t + \sigma \widetilde{W}_t).$$

So the "true" drift $\mu$ has been replaced by the risk-free rate $r$. The discounted price $\widetilde{S}_t = S_t e^{-rt}$ is an exponential $\mathbb{Q}$-martingale. This $\mathbb{Q}$ is the unique EMM in Black-Scholes, and option prices are expectations under exactly this measure.

## The semimartingale version

In general Shiryaev formulates the theorem via the **density process** $Z$ and its action on the triplet.

**Theorem (Jacod-Mémin).** Let $X$ be a semimartingale with triplet $(B^\mathbb{P}, C, \nu^\mathbb{P})$ under $\mathbb{P}$. Let $Z$ be a positive martingale with $Z_0 = 1$ and $Z_T = d\mathbb{Q}/d\mathbb{P}|_{\mathcal{F}_T}$. Then $X$ is also a semimartingale under $\mathbb{Q}$ with triplet $(B^\mathbb{Q}, C, \nu^\mathbb{Q})$, where:

- $C$ remains **unchanged** (this is an invariant),
- $\nu^\mathbb{Q}(dt, dx) = Y(t, x) \, \nu^\mathbb{P}(dt, dx)$ for some predictable process $Y \geq 0$ (the new jump compensator is "weighted" against the old),
- $B^\mathbb{Q}_t = B^\mathbb{P}_t + \int_0^t \beta_s \, dC_s + \int_0^t \int (Y(s, x) - 1) \, h(x) \, \nu^\mathbb{P}(ds, dx)$ for some predictable $\beta$.

Here $\beta$ is the "Brownian" part of $Z$ (via its martingale representation), and $Y - 1$ is the "jump" part.

**Short formula.** A change of measure is a pair $(\beta, Y)$:

- $\beta$ shifts the Brownian component (as in the classical Girsanov),
- $Y$ re-intensifies and re-sorts the jumps.

## Invariance of $C$

Why is $C$ unchanged? The quadratic variation $\langle X^c \rangle$ is a **path-wise invariant** of the process, defined trajectorially rather than probabilistically. Changing measure affects which trajectories are likely, not how they wiggle. So volatility under the historical and risk-neutral measures is **the same** — this is the fundamental reason implied volatility from options informs us about real volatility of the underlying.

## Jump part and incompleteness

If the process has jumps, $\mathbb{Q}$ can **re-intensify** them (change probabilities of specific jump sizes) in essentially arbitrary ways. This produces an entire family of EMMs — hence the **incompleteness** of jump models. On an incomplete market an additional criterion is needed to pick $\mathbb{Q}$ (minimum [[shannon-entropy|entropy]], [[discrete-girsanov-esscher|Esscher]], etc.).

In a purely diffusive model (no jumps) $Y \equiv 1$ automatically, and the only freedom is the choice of $\beta$. In one dimension this is one scalar equation with a unique solution — hence the completeness of Black-Scholes.

## Novikov's condition and its analogues

For $Z = \exp(\int \theta \, dW - \frac{1}{2} \int \theta^2 \, ds)$ to be a true martingale (not a strict supermartingale), one needs **Novikov's condition**:

$$\mathbb{E}\!\left[ \exp\!\left(\frac{1}{2} \int_0^T \theta^2_s \, ds \right) \right] < \infty.$$

In the semimartingale version it is generalized to Karatzas-Kardaras conditions or one localizes (work with local martingales, choose appropriate stopping). In practical financial models with bounded volatility these conditions hold automatically.

## Related Articles

- [[discrete-girsanov-esscher]] — discrete analogue of which Girsanov is the limit.
- [[semimartingale-models]] — framework in which the semimartingale version is formulated.
- [[ftap-first-fundamental-theorem]] — theorem for which Girsanov gives the constructive route to EMM.
- [[brownian-motion]] — simplest setting in which Girsanov reduces to a drift shift.
- [[black-scholes]] — canonical single-asset application.
- [[levy-esscher-continuous]] — Girsanov for Lévy processes via $Y$.
- [[heston-model]] — two-dimensional diffusive case (price + volatility) where Girsanov gives a whole family of EMMs.

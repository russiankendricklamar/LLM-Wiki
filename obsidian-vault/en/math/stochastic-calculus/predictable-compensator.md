---
slug: "/math/predictable-compensator"
title: "Predictable Compensator and Dual Predictable Projection"
category: "Stochastic Calculus"
order: 2
lang: "en"
---

# Predictable Compensator and Dual Predictable Projection

Every counting process has an intensity. Every submartingale has a compensator. Every random measure has a dual predictable projection. These are all manifestations of a single deep idea: the **predictable compensator** — the unique predictable process (or measure) that, when subtracted from the original, yields a martingale. In the framework of Jacod and Shiryaev, the compensator is not a secondary concept but the **foundation**: the third component $\nu$ of the [[semimartingale-models|predictable triplet]] $(B, C, \nu)$ is precisely the compensator of the jump measure, and the entire theory of semimartingale convergence is built on convergence of these compensators.

## The Doob-Meyer Decomposition Revisited

The classical [[doob-meyer-decomposition|Doob-Meyer decomposition]] states: every submartingale $X$ of class (D) has a unique decomposition $X = M + A$, where $M$ is a martingale and $A$ is a predictable increasing process. The process $A$ is the **compensator** of $X$.

For a local martingale $M$, the process $[M, M]_t = \sum_{s \leq t} (\Delta M_s)^2 + \langle M^c \rangle_t$ (the quadratic variation) is a submartingale, and its compensator $\langle M \rangle$ is the **predictable quadratic variation**. This is the key to the [[martingale-clt|martingale CLT]]: convergence of $\langle M^n \rangle$ drives convergence of $M^n$.

## Compensator of a Point Process

Let $N = (N_t)_{t \geq 0}$ be a counting process (non-decreasing, integer-valued, cadlag) adapted to $(\mathcal{F}_t)$. Since $N_t - N_0$ is a submartingale (under mild integrability), there exists a unique predictable increasing process $A = (A_t)$ such that

$$\tilde{N}_t = N_t - A_t$$

is a local martingale. The process $A$ is the **compensator** of $N$, and $\tilde{N}$ is the **innovation martingale**.

**Example: Poisson process.** If $N$ is a Poisson process with rate $\lambda$, then $A_t = \lambda t$ and $\tilde{N}_t = N_t - \lambda t$ is a martingale. The compensator is deterministic.

**Example: Cox process.** If $N$ is a Cox process (doubly stochastic Poisson) with random intensity $\lambda_t$, then $A_t = \int_0^t \lambda_s\, ds$. The compensator captures the stochastic intensity.

**Example: Hawkes process.** For a Hawkes process with intensity $\lambda_t = \mu + \int_0^{t^-} \phi(t-s)\, dN_s$, the compensator is $A_t = \int_0^t \lambda_s\, ds$. The self-exciting nature is encoded in $\lambda_t$ but the compensator always takes the integral form.

The innovation martingale $\tilde{N} = N - A$ captures the "surprise" in the arrivals: $d\tilde{N}_t = dN_t - \lambda_t\, dt$ is zero on average given the past.

## Compensator of a Random Measure

The jump measure of a cadlag process $X$ is the random measure

$$\mu^X(\omega; dt, dx) = \sum_{s > 0} \mathbf{1}_{\{\Delta X_s(\omega) \neq 0\}} \delta_{(s, \Delta X_s(\omega))}(dt, dx)$$

on $\mathbb{R}_+ \times \mathbb{R}$. It records when jumps happen and how large they are.

**Theorem (Dual predictable projection).** There exists a unique predictable random measure $\nu = \nu(\omega; dt, dx)$ on $\mathbb{R}_+ \times \mathbb{R}$ such that for every non-negative predictable function $W(s, x)$:

$$\mathbb{E}\!\left[\int_0^\infty \!\!\int W(s,x)\, \mu^X(ds, dx)\right] = \mathbb{E}\!\left[\int_0^\infty \!\!\int W(s,x)\, \nu(ds, dx)\right].$$

The measure $\nu$ is the **compensator** (or dual predictable projection) of $\mu^X$. The difference $\mu^X - \nu$ is a martingale measure: for every predictable $W$ with suitable integrability,

$$M^W_t = \int_0^t \!\!\int W(s,x)\, (\mu^X - \nu)(ds, dx)$$

is a local martingale. This is the **compensated jump measure**, and stochastic integration against it is the foundation of the martingale representation theorem for processes with jumps.

## The Predictable Triplet $(B, C, \nu)$

For a semimartingale $X$, the predictable triplet $(B, C, \nu)$ relative to a truncation function $h$ is defined by:

- $B_t = \int_0^t b_s\, ds$ is the **drift**: $B_t = X^{h\text{-predictable drift}}$.
- $C_t = \langle X^c \rangle_t$ is the **continuous quadratic variation**: the compensator of $(X^c)^2$.
- $\nu(dt, dx)$ is the **compensator of the jump measure** $\mu^X$.

The fundamental observation: **the law of a semimartingale with independent increments is completely determined by its triplet** $(B, C, \nu)$. For a general semimartingale, the triplet determines the process up to the distribution of the initial value and the dependence structure between the characteristics and the process itself.

This is why Jacod and Shiryaev call $\nu$ the "third characteristic": together with $B$ (drift) and $C$ (diffusion), it gives a complete description of the local dynamics. The drift says where the process goes on average, the diffusion says how much it fluctuates continuously, and $\nu$ says how it jumps.

## Computing Compensators in Practice

**Levy processes.** For a [[levy-processes|Levy process]] with Levy measure $\Pi$, the compensator of the jump measure is deterministic: $\nu(dt, dx) = dt\, \Pi(dx)$. The jumps arrive at a Poisson rate dictated by $\Pi$, independently of the past.

**Diffusions with jumps.** For a jump-diffusion $dX_t = b_t\, dt + \sigma_t\, dW_t + \int x\, (\mu^X - \nu)(dt, dx)$, the compensator $\nu$ encodes the state-dependent jump intensity and mark distribution. If jumps arrive at rate $\lambda(X_{t^-})$ with mark distribution $F(dx \mid X_{t^-})$, then $\nu(dt, dx) = \lambda(X_{t^-}) F(dx \mid X_{t^-})\, dt$.

**Marked point processes.** For a marked point process with marks in a space $E$, the compensator $\nu(dt, dx)$ on $\mathbb{R}_+ \times E$ simultaneously encodes the arrival intensity and the conditional mark distribution. This is the most general framework: the counting process case ($E = \{1\}$) and the jump-diffusion case are special instances.

## The Innovation Martingale

The compensated measure $\tilde{\mu} = \mu^X - \nu$ is the fundamental martingale associated with the jumps. Its role parallels the role of Brownian motion for the continuous part:

- [[brownian-motion|Brownian motion]] $W$ drives the continuous martingale part $X^c$.
- The compensated measure $\tilde{\mu}$ drives the purely discontinuous martingale part.

Together, $W$ and $\tilde{\mu}$ provide the "noise sources" of any semimartingale. The martingale representation theorem (in its general form due to Jacod) states that under suitable conditions, every local martingale can be written as a stochastic integral with respect to $W$ and $\tilde{\mu}$.

## Role in Convergence Theory

The compensator is the linchpin of the [[convergence-semimartingales|Jacod-Shiryaev convergence theory]]. When checking whether $X^n \Rightarrow X$, one verifies convergence of the triplets $(B^n, C^n, \nu^n) \to (B, C, \nu)$. The third component $\nu^n \to \nu$ controls convergence of the jump structure: it ensures that the jumps of $X^n$ neither disappear nor explode in the limit.

For [[functional-limit-theorems|functional limit theorems]], the compensator provides the tightness criterion: the sequence $(\nu^n)$ must be tight in a suitable sense for the processes $(X^n)$ to be tight in the Skorokhod space.

## Applications

**Filtering.** In nonlinear filtering (the Kushner-Stratonovich equation), the compensator of the observation process determines the filter update. The innovation martingale is exactly what carries new information.

**Credit risk.** Default times in reduced-form credit models are modeled as the first jump of a counting process. The compensator determines the hazard rate, and the innovation martingale drives the jump-to-default risk.

**Neuroscience.** Spike trains of neurons are modeled as point processes. The compensator encodes the firing intensity, and the innovation martingale captures the stochastic variability of spiking beyond what the intensity predicts.

## Related Articles

- [[semimartingale-models]] — the full predictable triplet $(B, C, \nu)$.
- [[doob-meyer-decomposition]] — the foundational decomposition theorem.
- [[brownian-motion]] — the continuous noise source, paired with $\tilde{\mu}$.
- [[levy-processes]] — processes whose compensator is deterministic.
- [[convergence-semimartingales]] — convergence theory built on compensator convergence.
- [[functional-limit-theorems]] — tightness via compensator control.
- [[discrete-martingales]] — the discrete analogue of compensator theory.
- [[conditional-expectation-sigma]] — the projection operation underlying compensators.

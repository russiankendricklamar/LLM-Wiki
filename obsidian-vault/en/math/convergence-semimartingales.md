---
title: "Convergence of Semimartingales"
category: "Stochastic Calculus"
order: 3
lang: "en"
---

# Convergence of Semimartingales

This is the culminating result of Jacod and Shiryaev's "Limit Theorems for Stochastic Processes": a unified theorem giving necessary and sufficient conditions for a sequence of semimartingales $X^n$ to converge weakly to a limit semimartingale $X$ in the [[skorokhod-topology|Skorokhod space]] $D$. The theorem states, roughly, that **convergence of the predictable triplets implies convergence of the processes**. Every classical limit theorem — Donsker, the martingale CLT, convergence of compound Poisson to Levy, diffusion approximations — is a special case. It is the most general and powerful framework available for proving weak convergence of stochastic processes.

## Setup and Notation

Let $X^n$ be a sequence of $\mathbb{R}^d$-valued semimartingales on probability spaces $(\Omega^n, \mathcal{F}^n, (\mathcal{F}^n_t), P^n)$. Each $X^n$ has a [[semimartingale-models|predictable triplet]] $(B^n, C^n, \nu^n)$ relative to a fixed truncation function $h: \mathbb{R}^d \to \mathbb{R}^d$ (typically $h(x) = x \mathbf{1}_{|x| \leq 1}$).

Let $X$ be a semimartingale on $(\Omega, \mathcal{F}, (\mathcal{F}_t), P)$ with triplet $(B, C, \nu)$.

The goal is to find conditions on $(B^n, C^n, \nu^n)$ that guarantee $X^n \Rightarrow X$ in $D([0,T], \mathbb{R}^d)$.

## The Main Convergence Theorem

**Theorem (Jacod-Shiryaev).** Suppose the limit process $X$ has **deterministic** predictable characteristics: $B_t = \beta(t)$, $C_t = \gamma(t)$, $\nu(dt, dx) = dt\, K_t(dx)$ for deterministic functions $\beta, \gamma, K$. This means $X$ is a process with independent increments (PII). Then $X^n \Rightarrow X$ in $D$ if and only if the following three conditions hold for each $t$:

1. **Drift convergence:** $B^n_t \xrightarrow{P^n} \beta(t)$.
2. **Diffusion convergence:** $C^n_t \xrightarrow{P^n} \gamma(t)$.
3. **Jump measure convergence:** for every bounded continuous function $f$ vanishing near the origin, $\int_0^t \!\int f(x)\, \nu^n(ds, dx) \xrightarrow{P^n} \int_0^t \!\int f(x)\, K_s(dx)\, ds$.

The conditions say: the drift, the continuous volatility, and the jump intensity of $X^n$ all converge (in probability) to those of the limit. No other conditions are needed.

**Key point:** the limit must have independent increments. This is not a restriction but a feature: the theorem characterizes exactly which sequences converge to PIIs, and PIIs include [[brownian-motion|Brownian motion]], [[levy-processes|Levy processes]], and all deterministic processes.

## Extension to Random Characteristics

When the limit $X$ has **random** characteristics (e.g., $X$ is a stochastic volatility model), the theorem requires additional structure. The approach is:

1. Embed the characteristics into the process: consider the pair $(X^n, (B^n, C^n, \nu^n))$.
2. Prove joint convergence of the pair.
3. Deduce convergence of $X^n$ from joint convergence.

Jacod and Shiryaev formulate this via **stable convergence**: the triplets $(B^n, C^n, \nu^n)$ must converge stably (not just in probability) to $(B, C, \nu)$. Stable convergence is stronger than convergence in distribution but weaker than convergence in probability; it is the natural mode for limit theorems where the limit has both a "signal" and a "noise" component.

## Specialization: Convergence to Levy Processes

A [[levy-processes|Levy process]] $X$ has triplet $(\beta t, \gamma t, t\Pi)$ where $(\beta, \gamma, \Pi)$ is the Levy-Khintchine triplet. The convergence theorem specializes to:

$X^n \Rightarrow X$ if and only if:

- $B^n_t / t \xrightarrow{P} \beta$ for each $t > 0$.
- $C^n_t / t \xrightarrow{P} \gamma$ for each $t > 0$.
- $\nu^n([0,t] \times A) / t \xrightarrow{P} \Pi(A)$ for each $t > 0$ and each Borel set $A$ bounded away from zero with $\Pi(\partial A) = 0$.

This recovers the classical convergence-of-types theorem for infinitely divisible distributions, lifted to the process level.

## Specialization: Convergence to Diffusions

Let $X$ be a diffusion $dX_t = b(t, X_t)\, dt + \sigma(t, X_t)\, dW_t$ (no jumps, so $\nu = 0$). The convergence theorem gives:

$X^n \Rightarrow X$ if $(B^n, C^n)$ converge in the appropriate sense to $(B, C)$ and the jump part vanishes: $\nu^n([0,t] \times \{|x| > \varepsilon\}) \xrightarrow{P} 0$ for each $\varepsilon > 0$ and $t > 0$.

This is the rigorous version of "the jumps average out and only drift and diffusion survive."

## The Semimartingale Topology

Jacod and Shiryaev also introduce a topology on the space of semimartingales that is strictly finer than the Skorokhod topology. In this topology, $X^n \to X$ means:

$$\sup_{|H| \leq 1, H \text{ predictable}} \left| \int_0^t H_s\, dX^n_s - \int_0^t H_s\, dX_s \right| \xrightarrow{P} 0$$

for each $t$. This says: the stochastic integrals against $X^n$ converge uniformly over all bounded predictable integrands. It is the natural topology for financial applications, where the stochastic integral represents portfolio value.

**Theorem (Emery).** Convergence in the semimartingale topology implies convergence in the Skorokhod topology, but not conversely. The semimartingale topology is the correct one for ensuring that trading strategies based on $X^n$ have values converging to those based on $X$.

## Proof Strategy

The proof of the main theorem proceeds in several steps:

**Step 1: Tightness.** Show that the conditions on the triplets imply tightness of $(X^n)$ in $D$, using the [[functional-limit-theorems|Aldous-Rebolledo criterion]].

**Step 2: Identification of limits.** Show that every subsequential limit has the same triplet $(B, C, \nu)$. Since a PII is uniquely determined by its triplet, the limit is unique.

**Step 3: Characteristic function convergence.** For PIIs, the [[characteristic-functions|characteristic function]] $\mathbb{E}[e^{iu \cdot X_t}]$ is determined by the Levy-Khintchine formula in terms of the triplet. Convergence of triplets implies convergence of characteristic functions, which implies convergence of finite-dimensional distributions.

**Step 4: Combine.** Tightness plus convergence of finite-dimensional distributions gives weak convergence in $D$ (Prokhorov's theorem).

## Applications

**Justification of continuous-time models.** In mathematical finance, asset prices are modeled by continuous-time semimartingales ([[geometric-brownian-motion|GBM]], [[heston-model|Heston]], Levy models). The convergence theorem proves that these continuous models are legitimate limits of discrete trading models — the approximation error vanishes as the trading frequency increases.

**CLT for stochastic integrals.** If $X^n \Rightarrow X$ in the semimartingale topology and $H^n \to H$ in an appropriate sense, then $\int H^n\, dX^n \Rightarrow \int H\, dX$. This is essential for proving that hedging strategies computed in discrete time converge to continuous-time hedges.

**High-frequency econometrics.** Realized volatility estimators, power variations, and other statistics of high-frequency data are justified through the convergence theorem: the discrete statistics converge to their continuous-time counterparts because the underlying processes converge.

**Diffusion approximations in biology.** Population genetics models (Wright-Fisher, Moran) and epidemiological models (SIR with large population) are discrete Markov chains whose rescaled versions converge to diffusions. The convergence theorem provides the rigorous limit.

**Convergence of numerical schemes.** Euler-Maruyama and Milstein discretizations of SDEs define discrete semimartingales. The convergence theorem (applied in reverse) gives conditions under which the numerical scheme converges weakly to the true solution.

## Connection to Contiguity

The convergence theorem interacts deeply with [[contiguity-measures|contiguity]] and [[hellinger-processes|Hellinger processes]]. When studying convergence under a sequence of changing measures $P^n$, one needs:

1. Convergence of triplets under $P^n$.
2. Contiguity of $P^n$ with respect to a reference sequence $Q^n$.

Le Cam's third lemma then transfers the convergence from $Q^n$ to $P^n$. This is the standard technique in asymptotic statistics of processes.

## Related Articles

- [[semimartingale-models]] — the predictable triplet $(B, C, \nu)$ that drives everything.
- [[functional-limit-theorems]] — Donsker's theorem and other classical cases.
- [[predictable-compensator]] — the compensator $\nu$ as third characteristic.
- [[skorokhod-topology]] — the topology on path space.
- [[brownian-motion]] — the prototypical limit process.
- [[levy-processes]] — limits with independent increments.
- [[contiguity-measures]] — transfer of convergence across measure changes.
- [[hellinger-processes]] — Hellinger processes for absolute continuity criteria.
- [[weak-convergence-prokhorov]] — Prokhorov's theorem underlying the proof.
- [[characteristic-functions]] — the analytic tool for identifying limits.

---
title: "Stable Convergence"
category: "Limit Theorems"
order: 8
lang: "en"
---

# Stable Convergence

Stable convergence, introduced by Renyi in 1963, occupies a precise position in the hierarchy of modes of convergence: it is strictly stronger than [[weak-convergence-prokhorov|weak convergence]] (convergence in distribution) but strictly weaker than convergence in probability. The key idea is that $X_n$ converges stably to $X$ if the convergence is "compatible" with all other random variables on the underlying probability space. This compatibility makes stable convergence the natural mode for limit theorems where the limiting variance is itself random — a situation that arises systematically in the [[martingale-clt|martingale CLT]], in high-frequency statistics of semimartingales, and throughout Jacod and Shiryaev's treatment of convergence with random characteristics.

## Definition

Let $(\Omega, \mathcal{F}, P)$ be a probability space and $X_n, X$ random variables (possibly defined on an extension of $\Omega$).

**Definition.** We say $X_n$ converges **stably** to $X$, written $X_n \xrightarrow{\mathcal{L}-s} X$, if for every bounded continuous function $f$ and every bounded $\mathcal{F}$-measurable random variable $Z$,

$$\mathbb{E}[f(X_n)\, Z] \to \mathbb{E}[f(X)\, Z].$$

Equivalently, for every event $A \in \mathcal{F}$, the conditional distributions $\mathcal{L}(X_n \mid A)$ converge weakly to $\mathcal{L}(X \mid A)$ — convergence in distribution holds uniformly over all "conditioning" on the background $\sigma$-algebra.

**Comparison.** Convergence in distribution requires only $\mathbb{E}[f(X_n)] \to \mathbb{E}[f(X)]$ (taking $Z = 1$). Convergence in probability implies stable convergence (take $X$ defined on $\Omega$ itself). Thus: convergence in probability $\Rightarrow$ stable convergence $\Rightarrow$ convergence in distribution, and neither implication reverses.

## Why Stable Convergence Matters

The decisive advantage of stable convergence is that it allows **joint convergence** with other random variables that do not converge themselves.

**Proposition.** If $X_n \xrightarrow{\mathcal{L}-s} X$ and $Y$ is any $\mathcal{F}$-measurable random variable, then $(X_n, Y) \Rightarrow (X, Y)$ jointly. In particular, $X_n + Y \Rightarrow X + Y$ and $g(X_n, Y) \Rightarrow g(X, Y)$ for any continuous $g$.

Under plain weak convergence, $(X_n, Y) \Rightarrow (X, Y)$ requires independence or additional structure. Under stable convergence, it is automatic. This is why stable convergence is indispensable in contexts where the limit has a "signal" component (the random variable $Y$ already present on $\Omega$) and a "noise" component (the limit $X$).

## Mixing Convergence

A special case of stable convergence is **mixing convergence**: $X_n \xrightarrow{\mathcal{L}-\text{mix}} X$ if $X$ is independent of $\mathcal{F}$ and $X_n$ converges stably to $X$. This means $\mathbb{E}[f(X_n)\, Z] \to \mathbb{E}[f(X)]\, \mathbb{E}[Z]$ for all bounded continuous $f$ and bounded $\mathcal{F}$-measurable $Z$.

Mixing convergence arises when the limit is a "pure noise" term, independent of everything on the original space. It is the typical mode in the classical CLT with deterministic normalization. Stable convergence generalizes this to the case where the limit is only conditionally independent of $\mathcal{F}$, given some sub-$\sigma$-algebra — the setting of mixed Gaussian limits.

## The Stable CLT for Martingales

The most important application in probability theory is the following refinement of the [[martingale-clt|martingale CLT]].

**Theorem (Stable CLT).** Let $M^n$ be a sequence of local martingales with $M^n_0 = 0$. Suppose:

1. $\langle M^n \rangle_t \xrightarrow{P} V_t$ for each $t$, where $V$ is a **random** (not necessarily deterministic) continuous increasing process,
2. The Lindeberg condition: $\sum_{s \leq t} |\Delta M^n_s|^2\, \mathbf{1}_{|\Delta M^n_s| > \varepsilon} \xrightarrow{P} 0$ for each $\varepsilon > 0$.

Then $M^n \xrightarrow{\mathcal{L}-s} M$ where, conditionally on $\mathcal{F}$, $M$ is a continuous Gaussian martingale with $\langle M \rangle = V$.

When $V$ is deterministic, this is Rebolledo's theorem and the convergence is mixing. When $V$ is random, the limit is a **mixed Gaussian**: $M_t \mid \mathcal{F} \sim \mathcal{N}(0, V_t)$. The stable convergence ensures that $M^n$ converges jointly with any $\mathcal{F}$-measurable functional of the original process.

This result is the engine behind the asymptotic theory of realized volatility, power variations, and other statistics of high-frequency data.

## Role in Jacod-Shiryaev's Framework

In the [[convergence-semimartingales|main convergence theorem]], the limit process $X$ has deterministic predictable characteristics (it is a process with independent increments), and convergence in distribution suffices. But when one extends the theory to limits with **random** characteristics — for instance, when $X$ is a stochastic volatility model like [[heston-model|Heston]] — stable convergence replaces ordinary weak convergence.

The extension works as follows: consider the pair $(X^n, (B^n, C^n, \nu^n))$ where $(B^n, C^n, \nu^n)$ is the [[predictable-compensator|predictable triplet]]. If the triplets converge stably (not just in probability) to the random triplet $(B, C, \nu)$ of the limit, then $X^n$ converges stably to $X$. The joint convergence guaranteed by stable convergence is what allows the limit to "inherit" the randomness of the characteristics.

## Applications in High-Frequency Statistics

**Realized volatility CLT.** For a semimartingale $X$ observed at times $0, \Delta_n, 2\Delta_n, \ldots$ with $\Delta_n \to 0$, the realized volatility $\text{RV}^n_t = \sum_{i} (X_{t_i} - X_{t_{i-1}})^2$ satisfies $\text{RV}^n_t \xrightarrow{P} \langle X^c \rangle_t + \sum_{s \leq t} (\Delta X_s)^2$. The CLT for this estimator is:

$$\Delta_n^{-1/2}\left(\text{RV}^n_t - [X]_t\right) \xrightarrow{\mathcal{L}-s} \sqrt{2} \int_0^t \sigma_s^2\, dW'_s$$

where $W'$ is a Brownian motion independent of $\mathcal{F}$ and $\sigma$ is the volatility of $X$. The limit is a mixed Gaussian (its variance $2\int_0^t \sigma_s^4\, ds$ is random), and the convergence must be stable to justify feasible inference — constructing confidence intervals requires joint convergence with the random variance.

**Power variations, bipower variation, and other functionals** of high-frequency data all have stable CLTs of this type, following the Jacod-Shiryaev methodology.

## Proof Sketch

The proof of the stable CLT typically proceeds by:

1. **Tightness** of $(M^n)$ in the [[skorokhod-topology|Skorokhod space]] $D$, using the Aldous criterion.
2. **Characteristic function method:** for any bounded $\mathcal{F}$-measurable $Z$, show $\mathbb{E}[e^{iu M^n_t} Z] \to \mathbb{E}[e^{-u^2 V_t / 2} Z]$ by a martingale argument (exponential martingale combined with the Lindeberg condition).
3. **Identification:** the limit $\mathbb{E}[e^{-u^2 V_t / 2} Z] = \mathbb{E}[\mathbb{E}[e^{iu M_t} \mid \mathcal{F}]\, Z]$ identifies the conditional law of $M_t$ as $\mathcal{N}(0, V_t)$.

The [[characteristic-functions|characteristic function]] computation is the core: the Lindeberg condition ensures that the jumps of $M^n$ do not contribute to the limit, while the convergence $\langle M^n \rangle \to V$ pins down the Gaussian variance.

## Related Articles

- [[weak-convergence-prokhorov]] — the weaker mode of convergence that stable convergence refines.
- [[martingale-clt]] — the CLT that stable convergence upgrades to random limiting variance.
- [[convergence-semimartingales]] — the Jacod-Shiryaev theorem where stable convergence extends the theory.
- [[characteristic-functions]] — the analytic tool in the proof.
- [[skorokhod-topology]] — the path space where tightness is verified.
- [[heston-model]] — a stochastic volatility limit requiring stable convergence.
- [[functional-limit-theorems]] — the functional version of convergence results.
- [[discrete-martingales]] — the discrete precursor.

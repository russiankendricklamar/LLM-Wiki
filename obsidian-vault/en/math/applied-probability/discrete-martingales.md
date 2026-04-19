---
slug: "/math/discrete-martingales"
title: "Discrete Martingales"
category: "Martingale Theory"
order: 1
lang: "en"
---

# Discrete Martingales

A martingale is the mathematical model of a **"fair game"**: a process whose expected next value, given all available information, equals the current value. The notion goes back to the "Martingale system" in 18th-century gambling, but its rigorous theory was built by Joseph L. Doob in the 1940s. of Shiryaev's "Probability" is the most thorough accessible exposition of discrete martingale theory in Russian. Without this machinery there would be no modern limit theorems, no optimal stopping, no [[ftap-first-fundamental-theorem|FTAP]] and financial mathematics, and no reinforcement learning.

## Definition

Let $(\Omega, \mathcal{F}, \mathbb{P})$ be a probability space and $(\mathcal{F}_n)_{n \geq 0}$ a filtration (see [[sigma-algebra-measurability]]).

**Definition.** A stochastic process $(X_n)_{n \geq 0}$ is a **martingale** (with respect to the filtration $(\mathcal{F}_n)$) if:

1. **Adaptedness**: $X_n$ is $\mathcal{F}_n$-measurable for every $n$.
2. **Integrability**: $\mathbb{E}|X_n| < \infty$ for every $n$.
3. **Martingale property**: $\mathbb{E}[X_{n+1} \mid \mathcal{F}_n] = X_n$ almost surely.

Property (3) is "fairness": the expected value at the next moment, given all information accumulated so far, **exactly equals** the current value. No "expected gain" from playing right.

**Related notions:**

- **Supermartingale**: $\mathbb{E}[X_{n+1} \mid \mathcal{F}_n] \leq X_n$. A "loss-on-average" game. Capital decays in mean.
- **Submartingale**: $\mathbb{E}[X_{n+1} \mid \mathcal{F}_n] \geq X_n$. A "gain-on-average" game.

In finance: an asset price under the historical measure is a submartingale (positive risk premium); under the martingale measure it is a martingale (no arbitrage).

## Examples

**1. Symmetric random walk.** $X_n = X_{n-1} + \xi_n$, with $\xi_n \in \{-1, +1\}$ independent and equiprobable. A martingale.

**2. Conditional expectation.** If $Y$ is integrable, then $X_n = \mathbb{E}[Y \mid \mathcal{F}_n]$ is a martingale. This is the **martingale closed by $Y$**, and every uniformly integrable martingale is of this form.

**3. Product of independent unit-mean variables.** If $\xi_1, \xi_2, \ldots$ are independent with $\mathbb{E}[\xi_n] = 1$, then $M_n = \prod_{k=1}^n \xi_k$ is a martingale.

**4. Exponential martingale.** In discrete form: $M_n = \exp(\sum_k \theta_k Z_k - \sum_k \kappa_k(\theta_k))$, where $\kappa$ is the cumulant function. The **discrete analogue of the [[girsanov-semimartingales|Girsanov density]]**.

## Doob's inequalities

**Doob's maximal inequality.** For a non-negative submartingale $(X_n)$:

$$\mathbb{P}\!\left(\max_{k \leq n} X_k \geq \lambda \right) \leq \frac{\mathbb{E}[X_n]}{\lambda}.$$

This generalizes Markov's inequality from a single value to a maximum over a trajectory. Crucial because many theorems (like the [[law-iterated-logarithm|law of the iterated logarithm]]) require control of the maximum.

**Doob's $L^p$ inequality.** For a non-negative submartingale with $X_n \in L^p$, $p > 1$:

$$\mathbb{E}\!\left[ \max_{k \leq n} X_k^p \right] \leq \left(\frac{p}{p-1} \right)^p \mathbb{E}[X_n^p].$$

Moments of the maximum are controlled by moments of a single value. The "magic" of martingale theory: passing to the maximum costs only a multiplicative constant.

## Martingale convergence theorems

**Doob's convergence theorem.** If $(X_n)$ is a submartingale with $\sup_n \mathbb{E}[X_n^+] < \infty$, then there exists a random variable $X_\infty$ such that

$$X_n \to X_\infty \quad \text{a.s.}$$

So **$L^1$-bounded submartingales converge almost surely**. A non-trivial extension of "monotone bounded sequences converge" to random processes.

**$L^p$ convergence theorem.** If additionally $\sup_n \mathbb{E}|X_n|^p < \infty$ for $p > 1$, then $X_n \to X_\infty$ in $L^p$ as well.

This theorem underpins:
- **Martingale proofs of the strong [[law-of-large-numbers|LLN]]**.
- **Existence of limit distributions** for statistical procedures.
- **Insurance and credit risk theory** (loss models as convergent martingales).

## Optional stopping

A **stopping time** $\tau$ is a random variable $\tau : \Omega \to \mathbb{N} \cup \{\infty\}$ such that $\{\tau \leq n\} \in \mathcal{F}_n$ for every $n$. Intuition: "the decision to stop is made on the basis of available information, no peeking into the future."

**Doob's optional stopping theorem.** If $(X_n)$ is a martingale and $\tau$ is a bounded stopping time ($\tau \leq T$ for a constant $T$), then

$$\mathbb{E}[X_\tau] = \mathbb{E}[X_0].$$

So "you cannot win on average by choosing a stopping time" — the mathematical formulation of the impossibility of "beating a fair game."

**Generalizations:** the theorem also holds for unbounded $\tau$ under suitable integrability conditions. Counter-example: the walk $S_n = \sum \xi_n$, $\tau$ = first hitting time of level $a$. Then $\mathbb{E}[S_\tau] = a \neq 0 = \mathbb{E}[S_0]$, but $\tau$ is unbounded.

In finance optional stopping is the foundation of **American option pricing** (see [[optimal-stopping-american]]): the price of an American option is $\sup_\tau \mathbb{E}^\mathbb{Q}[H(\tau, S_\tau)]$ over stopping times.

## Doob decomposition

**Theorem (Doob decomposition).** Every discrete submartingale $(X_n)$ has a unique representation

$$X_n = X_0 + M_n + A_n,$$

where $M$ is a martingale ($M_0 = 0$) and $A$ is a **predictable** increasing process ($A_0 = 0$, $A_n$ is $\mathcal{F}_{n-1}$-measurable).

This is the **discrete analogue of the Doob-Meyer decomposition** for continuous supermartingales and the **basis of all martingale theory**: it lets you "separate" the martingale part from the predictable part (the "drift" — process trend).

## Discrete Itô formula

In Shiryaev gives a **discrete analogue of Itô's formula**: for a function $f$ and a martingale $M$:

$$f(M_n) = f(M_0) + \sum_{k=1}^n f'(M_{k-1}) \Delta M_k + \frac{1}{2} \sum_{k=1}^n f''(\xi_k) (\Delta M_k)^2,$$

where $\xi_k$ is some point between $M_{k-1}$ and $M_k$. In the "continuous-time" limit this becomes the classical Itô formula with a $\frac{1}{2} f''(M_t) \, d\langle M\rangle_t$ term.

The discrete version is especially convenient for understanding **the origin** of the "extra" second-derivative term, which seems mysterious in the continuous case.

## Applications

**1. Financial mathematics.** [[ftap-first-fundamental-theorem|FTAP]]: a market is arbitrage-free iff there exists an EMM under which discounted prices are a martingale. All option pricing is martingale theory.

**2. Algorithm theory.** Analysis of randomized algorithms often reduces to constructing a suitable martingale and applying convergence theorems.

**3. Machine learning.** In Reinforcement Learning value functions under the optimal policy are martingales w.r.t. the right measures. TD-learning is iterative estimation of martingale properties.

**4. Econometrics.** Most "statistics" in time-series econometrics are martingales w.r.t. a suitable filtration, allowing application of convergence theorems and the CLT for martingale differences.

**5. Actuarial science.** Martingale method in ruin problems: the capital process of an insurance company is a martingale under a suitable measure.

## Related Articles

- [[conditional-expectation-sigma]] — fundamental object on which the definition of a martingale rests.
- [[sigma-algebra-measurability]] — filtration as structural foundation.
- [[law-of-large-numbers]] — martingale proofs exist.
- [[law-iterated-logarithm]] — extensions for martingales.
- [[ftap-first-fundamental-theorem]] — financial application.
- [[optimal-stopping-american]] — stopping problems and Doob's theorem.
- [[girsanov-semimartingales]] — continuous-time martingale.
- [[brownian-motion]] — simplest continuous martingale.
- [[discrete-markov-chains]] — martingales for Markov chains.
- [[bs-market-self-financing]] — self-financing strategies as martingales.

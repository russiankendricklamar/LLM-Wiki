---
slug: "/math/ergodic-theorems-birkhoff"
title: "Birkhoff-Khintchine Ergodic Theorem"
category: "Ergodic and Spectral Theory"
order: 1
lang: "en"
---

# Birkhoff-Khintchine Ergodic Theorem

The ergodic theorem extends the [[law-of-large-numbers|Law of Large Numbers]] to **dependent** sequences. It states: if a stochastic process is **stationary** (statistical properties do not change in time) and **ergodic** (long trajectories "explore" the entire state space), then the time average equals the ensemble average.

This is the central theorem of **ergodic theory** — the branch of mathematics joining dynamical systems, statistical mechanics, and probability. Birkhoff in 1931 proved it for continuous dynamical systems; Khintchine in 1933 for discrete ones. Shiryaev's "Probability" is devoted to ergodic theory.

The ergodic theorem is the mathematical basis for why **long observation of one system** gives the same information as **one observation of a large ensemble**. This is a statement in the spirit of the physical notion of "equilibrium."

## Stationarity and ergodicity

**Measure-preserving transformation.** Let $(\Omega, \mathcal{F}, \mathbb{P})$ be a probability space and $T : \Omega \to \Omega$ a measurable map. $T$ is **measure-preserving** if $\mathbb{P}(T^{-1} A) = \mathbb{P}(A)$ for all $A \in \mathcal{F}$.

**Stationary process.** A sequence $(X_n)$ is **stationary (in the strict sense)** if for every $k$ the distribution of $(X_1, X_2, \ldots, X_k)$ matches the distribution of $(X_{n+1}, X_{n+2}, \ldots, X_{n+k})$ for every $n$. "Statistics do not change under time shift."

Every stationary sequence is naturally represented through a measure-preserving transformation: $X_n(\omega) = X_0(T^n \omega)$, where $T$ is the shift operator.

**Ergodicity.** The transformation $T$ is **ergodic** if every **invariant** set $A$ (i.e. $T^{-1} A = A$) has probability $0$ or $1$. There are no non-trivial invariant subsets.

Ergodicity is a statement of "indecomposability": the system cannot be split into two invariant parts. The dynamics "mix" the entire space.

## Birkhoff-Khintchine theorem

**Theorem.** Let $T$ be a measure-preserving transformation on $(\Omega, \mathcal{F}, \mathbb{P})$ and $f \in L^1(\mathbb{P})$. Then

$$\lim_{n \to \infty} \frac{1}{n} \sum_{k=0}^{n-1} f(T^k \omega) \quad \text{exists a.s.}$$

and equals $\mathbb{E}[f \mid \mathcal{I}]$, where $\mathcal{I}$ is the σ-algebra of $T$-invariant sets.

**If $T$ is ergodic**, then $\mathcal{I}$ is trivial (by definition), and

$$\lim_{n \to \infty} \frac{1}{n} \sum_{k=0}^{n-1} f(T^k \omega) = \mathbb{E}[f] \quad \text{a.s.}$$

So **time average equals ensemble average**.

## Comparison with the LLN

LLN:

$$\frac{X_1 + X_2 + \ldots + X_n}{n} \to \mathbb{E}[X] \quad \text{under independence}.$$

Ergodic theorem:

$$\frac{X_1 + X_2 + \ldots + X_n}{n} \to \mathbb{E}[X] \quad \text{under stationarity and ergodicity}.$$

The ergodic theorem is **much stronger**: it does not require independence, only stationarity and indecomposability. This allows applying it to dependent processes — Markov chains, ARMA, GARCH, etc.

In this sense the LLN is a special case of the ergodic theorem (i.i.d. sequences are an example of an ergodic measure-preserving transformation via the Bernoulli shift).

## Proof (via the maximal theorem)

The standard route is via the **maximal ergodic theorem**:

**Lemma (maximal ergodic theorem, Garcia).** For $f \in L^1$:

$$\int_{\{S_n^* > 0\}} f \, d\mathbb{P} \geq 0,$$

where $S_n^* = \max_{1 \leq k \leq n} S_k$, $S_k = f + f \circ T + \ldots + f \circ T^{k-1}$.

From this, via approximation and integral control, one obtains the main theorem.

The simplest proof (Garcia) takes literally a page and a half and is considered one of the most elegant in ergodic theory.

## Examples of ergodic systems

**1. Bernoulli shift.** $\Omega = \{0, 1\}^\mathbb{N}$ with the natural measure. $T$ is the shift $(\omega_1, \omega_2, \ldots) \mapsto (\omega_2, \omega_3, \ldots)$. Ergodic. The i.i.d. case.

**2. Markov chain with a unique stationary measure.** If a chain has one invariant measure $\pi$ (which "pulls everything to itself" as $n \to \infty$), the corresponding transformation is ergodic.

**3. Circle rotation.** $\Omega = S^1$, $T : x \mapsto x + \alpha \mod 1$. Ergodic if and only if $\alpha$ is irrational (Weyl's famous equidistribution theorem).

**4. Gases in statistical mechanics.** Boltzmann's ergodic hypothesis: phase-space dynamics of a gas is ergodic on a constant-energy surface. This is a **physical hypothesis** rigorously established only for a very narrow class of systems (Sinai billiards).

## Applications

**1. Statistical mechanics.** The ergodic hypothesis is the basis for arguing that **time averages** along the trajectory of a physical system equal **ensemble averages** under the microcanonical distribution. Without ergodicity thermodynamics would be mathematically unfounded.

**2. Time-series econometrics.** For stationary ergodic processes the sample mean and moment estimates converge to the theoretical values — justifying classical statistics for GARCH, ARMA, AR models.

**3. MCMC methods.** Markov Chain Monte Carlo algorithms (Metropolis-Hastings, Gibbs) are based on building an ergodic Markov chain with a desired stationary distribution. The ergodic theorem guarantees that samples converge to the right averages.

**4. Dynamical systems and chaos.** Ergodic theory is the main tool for studying chaotic dynamical systems (strange attractors, Lorenz systems, etc.). The notion of "statistical predictability" of chaotic systems is built through ergodic measures.

## Ergodicity and mixing

A "strength" hierarchy:

1. **Ergodicity** — invariant sets have measure 0 or 1.
2. **Mixing** — for any $A, B$, $\mathbb{P}(T^{-n} A \cap B) \to \mathbb{P}(A) \mathbb{P}(B)$ as $n \to \infty$. Stronger than ergodicity.
3. **Fast mixing** — the same with rate $O(\rho^n)$ for $\rho < 1$. The strongest.

Most processes used in practice are fast-mixing (Markov chains with positive spectral gap, mixing dynamical systems). This allows applying not only ergodic theorems but also the [[central-limit-theorem|CLT for dependent]] variables.

## Connection to information and [[shannon-entropy|entropy]]

Kolmogorov-Sinai [[shannon-entropy|entropy]] of a dynamical system measures its "informational complexity": how many new bits we learn at each step of dynamics. For ergodic systems entropy is well-defined and relates to the speed of mixing.

In machine learning this becomes the concept of **"ergodic accessibility"** in Reinforcement Learning: ergodicity of the environment guarantees that the agent "sees" all states often enough for value estimates to converge.

## Related Articles

- [[law-of-large-numbers]] — special case for i.i.d.
- [[central-limit-theorem]] — kindred statement for dependent processes in the ergodic framework.
- [[law-iterated-logarithm]] — extends to ergodic sequences.
- [[discrete-markov-chains]] — main class of ergodic processes.
- [[brownian-motion]] — continuous example of an ergodic process.
- [[shannon-entropy]] — connection to Kolmogorov-Sinai entropy.
- [[arch-models]], [[garch-models]] — econometric models for which ergodicity is required.
- [[kolmogorov-probability-axioms]] — foundation.
- [[stochastic-recursive-sequences]] — ergodic theory applied to iterated random maps.

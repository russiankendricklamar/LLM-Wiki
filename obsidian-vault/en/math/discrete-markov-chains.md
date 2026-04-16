---
title: "Discrete Markov Chains"
category: "Ergodic and Spectral Theory"
order: 2
lang: "en"
---

# Discrete Markov Chains

A Markov chain is a stochastic process whose **future depends only on the present**, not on the full history. This is the oldest (A. A. Markov, 1906) and most widely used model of a "stochastic process with one-step memory." It is enough to cover a wide range of real-world systems — random walks, Google PageRank, Metropolis-Hastings, equilibrium models in physics. Shiryaev's [[shiryaev-probability|"Probability"]] is the most complete introduction to discrete Markov chains in Russian. It is a specially expanded chapter: in the third edition it was rewritten almost from scratch, with detailed theory of stationary distributions and optimal stopping.

## Definition

**Markov property.** A random sequence $(X_n)_{n \geq 0}$ taking values in a finite or countable state space $S$ is a **Markov chain** if for every $n$ and every $i_0, i_1, \ldots, i_{n+1} \in S$:

$$\mathbb{P}(X_{n+1} = i_{n+1} \mid X_0 = i_0, \ldots, X_n = i_n) = \mathbb{P}(X_{n+1} = i_{n+1} \mid X_n = i_n).$$

That is, "information about the past adds nothing to the current state" when predicting the next step.

**Time-homogeneity.** If transition probabilities $\mathbb{P}(X_{n+1} = j \mid X_n = i) = p_{ij}$ do not depend on $n$, the chain is **homogeneous**. All classical results are for homogeneous chains.

**Transition matrix.** The collection $P = (p_{ij})_{i,j \in S}$ is a **stochastic matrix**: $p_{ij} \geq 0$ and $\sum_j p_{ij} = 1$ for every $i$. Each row is the probability distribution of the next step.

## Basic operations

**Distribution after $n$ steps.** If at time 0 the state distribution is given by a vector $\mu_0$, then after $n$ steps:

$$\mu_n = \mu_0 \cdot P^n.$$

Iterating the chain is multiplication of the distribution by the $n$-th power of the transition matrix.

**Chapman-Kolmogorov equations.** For $n \leq m$:

$$p_{ij}^{(m)} = \sum_{k \in S} p_{ik}^{(n)} \cdot p_{kj}^{(m-n)},$$

where $p_{ij}^{(n)} = (P^n)_{ij}$. This is matrix multiplication rewritten in probabilistic language: to go from $i$ to $j$ in $m$ steps you reach some intermediate $k$ in $n$ steps, then go from $k$ to $j$ in $m-n$ steps.

## State classification

States are divided into classes by dynamic behaviour.

**Communicating states.** $i$ and $j$ **communicate** if you can go from $i$ to $j$ in finitely many steps and back. This is an equivalence relation; the chain decomposes into **communicating classes**.

**Recurrent / transient.** A state $i$ is **recurrent** if $\mathbb{P}(\text{return to } i \text{ at least once} \mid X_0 = i) = 1$. Otherwise — **transient**.

- For a recurrent state the number of returns is $\infty$ almost surely.
- For a transient state — finite almost surely.

**Positive / null recurrent.** A recurrent state is **positive recurrent** if the expected return time $\mathbb{E}[\text{return time} \mid X_0 = i] < \infty$. Otherwise — **null recurrent**.

Only positive recurrent chains have a (non-trivial) **stationary distribution**.

## Stationary distribution

**Definition.** A distribution $\pi$ on $S$ is **stationary** (or **invariant**) if

$$\pi \cdot P = \pi,$$

i.e. $\pi$ is a left eigenvector of $P$ with eigenvalue 1. Componentwise: $\pi_j = \sum_i \pi_i p_{ij}$.

Interpretation: if at time 0 the state distribution equals $\pi$, then at every subsequent moment it equals $\pi$. The chain is "in equilibrium."

**Existence and uniqueness.** For a finite irreducible chain a stationary distribution exists and is unique. For countable — exists if and only if the chain is positive recurrent.

## Ergodic theorem for chains

**Theorem.** Let $(X_n)$ be a finite irreducible aperiodic Markov chain with transition matrix $P$ and stationary distribution $\pi$. Then:

1. **Convergence to stationary**: $p_{ij}^{(n)} \to \pi_j$ as $n \to \infty$ for all $i, j$.
2. **Convergence of averages**: $\frac{1}{n} \sum_{k=1}^n f(X_k) \to \sum_j \pi_j f(j)$ almost surely for any function $f$.

This is a special case of the [[ergodic-theorems-birkhoff|Birkhoff-Khintchine ergodic theorem]] for the specific case of a Markov process.

**Convergence rate** is determined by the **spectral gap** $1 - |\lambda_2(P)|$, where $\lambda_2$ is the second-largest-modulus eigenvalue of $P$. The larger the gap, the faster the initial distribution is "forgotten."

## Aperiodicity

A state $i$ has **period $d$** if $\gcd\{n : p_{ii}^{(n)} > 0\} = d$. The chain is **aperiodic** if $d = 1$ for all states.

Without aperiodicity convergence to the stationary distribution can fail in a purely deterministic sense: e.g. a chain that alternates between two states ("ping-pong") does not converge to equilibrium even though it has a stationary distribution.

## Applications

**1. PageRank.** Google's web-page ranking algorithm computes the stationary distribution of a Markov chain on the link graph. The stationary distribution is the "weight" of each page in the equilibrium of the random walk on links.

**2. MCMC (Markov Chain Monte Carlo).** Metropolis-Hastings, Gibbs, HMC algorithms construct a Markov chain with a **prescribed** stationary distribution and use it to sample from that distribution. The main tool of Bayesian statistics.

**3. Hidden Markov models (HMM).** A signal model where the observed sequence is a "noisy" function of a hidden Markov chain. Applications: speech recognition, bioinformatics, NLP, technical analysis of financial time series. See [[hidden-markov-models]].

**4. Financial regime models.** "Regime" volatility models (e.g. Hamilton 1989) assume the market switches between several "regimes" (bull, bear, crisis) according to a Markov chain.

**5. Classical physics and chemistry.** Reaction models, diffusion, Brownian motion in discrete time — all Markov chains on finite or countable state spaces.

**6. Reinforcement learning.** The environment in RL is usually modelled as a Markov decision process (MDP) — a generalization of a Markov chain with agent actions and rewards. All classical algorithms (Q-learning, value iteration) work with this structure.

## Continuous-time chains

Continuous-time chains generalize the picture by letting transitions occur at moments of a Poisson process with intensities $q_{ij}$. They are described by **Kolmogorov's equations** for the transition probability matrix $P(t)$:

$$\frac{d}{dt} P(t) = Q \cdot P(t), \quad P(0) = I,$$

where $Q$ is the generator (the intensity matrix). Solution: $P(t) = e^{tQ}$.

This is a section of the theory not covered in Shiryaev's main book (separate literature exists), but it is the continuous analogue of the discrete theory.

## Connection to martingales

Many functionals of a Markov chain are **martingales**. For instance, for a function $f$ satisfying $\sum_j p_{ij} f(j) = f(i)$ (a so-called **harmonic** function for $P$):

$$M_n = f(X_n) - n \cdot 0 = f(X_n)$$

is a martingale. These connections allow applying [[discrete-martingales|martingale methods]] to Markov problems — stopping theorems, Doob's inequalities, etc.

## Related Articles

- [[discrete-martingales]] — kindred theory; martingales and Markov chains often overlap.
- [[ergodic-theorems-birkhoff]] — the Markov-chain case is a special case of the ergodic theorem.
- [[hidden-markov-models]] — extension to partially observed chains.
- [[law-of-large-numbers]] — extends to Markov chains via the ergodic theorem.
- [[kolmogorov-probability-axioms]] — foundation.
- [[brownian-motion]] — continuous analogue of the simplest Markov chain.
- [[hidden-markov-models]] — practical application in econometrics and NLP.
- [[reinforcement-learning]] — RL environment as a Markov MDP.
- [[crr-model]] — financial model as a Markov chain on two states.

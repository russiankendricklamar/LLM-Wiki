---
slug: "/math/kolmogorov-equations-ctmc"
title: "Kolmogorov Equations and Continuous-Time Markov Chains"
category: "Ergodic and Spectral Theory"
order: 6
lang: "en"
---

# Kolmogorov Equations and Continuous-Time Markov Chains

Continuous-time Markov chains (CTMCs) extend [[discrete-markov-chains]] by allowing transitions at arbitrary (random) times rather than at fixed integer steps. The evolution of transition probabilities is governed by **Kolmogorov's forward and backward equations**, a pair of ODE systems whose generator is the **Q-matrix**. CTMCs are the natural framework for queueing theory, chemical kinetics, population genetics, and reliability engineering.

## Setup and the Q-matrix

A CTMC $(X_t)_{t \geq 0}$ on a countable state space $S$ satisfies the **Markov property** in continuous time: given $X_s$, the future $(X_t)_{t > s}$ is independent of $(X_u)_{u < s}$.

The **generator** (or **rate matrix**, or **Q-matrix**) $Q = (q_{ij})_{i,j \in S}$ encodes the instantaneous transition rates:

$$q_{ij} \geq 0 \quad (i \neq j), \qquad q_{ii} = -\sum_{j \neq i} q_{ij}.$$

Each row sums to zero. The quantity $q_i = -q_{ii} = \sum_{j \neq i} q_{ij}$ is the **total departure rate** from state $i$: the holding time in $i$ is $\text{Exp}(q_i)$, and upon leaving, the chain jumps to $j \neq i$ with probability $q_{ij}/q_i$.

## Transition probability matrix

Define $P(t) = (p_{ij}(t))$ where $p_{ij}(t) = \mathbb{P}(X_t = j \mid X_0 = i)$. The family $\{P(t)\}_{t \geq 0}$ forms a **transition semigroup**: $P(s+t) = P(s)P(t)$ (the Chapman-Kolmogorov equations in continuous time), with $P(0) = I$.

Under regularity (continuity at $t = 0$), we have the fundamental relation:

$$Q = \lim_{h \to 0^+} \frac{P(h) - I}{h} = P'(0).$$

## Kolmogorov backward equation

Differentiating $P(t)$ from the left:

$$\frac{d}{dt} P(t) = Q \cdot P(t), \qquad P(0) = I.$$

This is the **backward equation**: the derivative acts on the **initial** state index. It describes how the probability of reaching $j$ at time $t$ changes when we vary the starting moment.

## Kolmogorov forward equation (Fokker-Planck)

Differentiating from the right:

$$\frac{d}{dt} P(t) = P(t) \cdot Q, \qquad P(0) = I.$$

This is the **forward equation**: the derivative acts on the **terminal** state index. For a row vector of state probabilities $\pi(t)$, the forward equation becomes $\pi'(t) = \pi(t) Q$, which describes how the distribution over states evolves in time.

The forward equation is the discrete-state analogue of the **Fokker-Planck equation** for diffusion processes related to [[brownian-motion]].

## Matrix exponential solution

When the state space is finite (or under suitable regularity for countable spaces), both equations have the same unique solution:

$$P(t) = e^{tQ} = \sum_{n=0}^{\infty} \frac{(tQ)^n}{n!}.$$

For numerical computation one uses **uniformization** (Jensen's method): write $Q = \lambda(P_{\text{disc}} - I)$ where $\lambda \geq \max_i q_i$ and $P_{\text{disc}}$ is a stochastic matrix, then $e^{tQ} = e^{-\lambda t} \sum_{n=0}^{\infty} \frac{(\lambda t)^n}{n!} P_{\text{disc}}^n$, reducing the problem to a Poisson-weighted sum of discrete matrix powers.

## Stationary distribution and detailed balance

A distribution $\pi$ is **stationary** if $\pi Q = 0$ (equivalently, $\pi P(t) = \pi$ for all $t$). Componentwise:

$$\sum_{i} \pi_i q_{ij} = 0 \quad \text{for all } j.$$

**Detailed balance** (reversibility): $\pi_i q_{ij} = \pi_j q_{ji}$ for all $i, j$. This is a sufficient condition for stationarity and means the chain looks the same run forward or backward in time.

## Ergodicity

An irreducible CTMC on a finite state space is always positive recurrent, hence ergodic: $p_{ij}(t) \to \pi_j$ as $t \to \infty$. For countable spaces, ergodicity requires positive recurrence, which can be verified via **Foster-Lyapunov criteria**: find a function $V \geq 1$ and a finite set $C$ such that $QV(i) \leq -\varepsilon V(i) + b \cdot \mathbf{1}_C(i)$.

The rate of convergence is controlled by the **spectral gap** of $Q$: the smallest nonzero $|\text{Re}(\lambda)|$ among [[spectral-theory-operators|eigenvalues]] of $-Q$.

## Explosion and non-minimal chains

If $q_i \to \infty$ fast enough, the chain can make infinitely many jumps in finite time (**explosion**). The classic example: a pure birth process with rates $q_n = n^2$. After explosion the chain is undefined unless we specify a **boundary condition** (e.g., restart from a fixed state).

Explosion occurs if and only if $\sum_{n} 1/q_n < \infty$ for a birth chain. When it does, the **minimal** (Feller) solution of Kolmogorov's equations is substochastic ($\sum_j p_{ij}(t) < 1$), and the "missing mass" is the probability of explosion by time $t$.

## Birth-death processes

A **birth-death process** is a CTMC on $\{0, 1, 2, \ldots\}$ with $q_{i,i+1} = \lambda_i$ (birth), $q_{i,i-1} = \mu_i$ (death), and all other off-diagonal rates zero. The stationary distribution (when it exists) is:

$$\pi_n = \pi_0 \prod_{k=1}^{n} \frac{\lambda_{k-1}}{\mu_k}, \qquad \pi_0 = \left(1 + \sum_{n=1}^{\infty} \prod_{k=1}^{n} \frac{\lambda_{k-1}}{\mu_k}\right)^{-1}.$$

Detailed balance holds automatically for birth-death processes.

## M/M/1 queue

The **M/M/1 queue** is a birth-death process with constant rates $\lambda_i = \lambda$ (arrival) and $\mu_i = \mu$ (service). The traffic intensity is $\rho = \lambda / \mu$. Stability requires $\rho < 1$, yielding the geometric stationary distribution:

$$\pi_n = (1 - \rho)\rho^n, \qquad n = 0, 1, 2, \ldots$$

Expected queue length $\mathbb{E}[N] = \rho/(1-\rho)$, expected waiting time $\mathbb{E}[W] = 1/(\mu - \lambda)$ (Little's law). This is the workhorse model of telecom, computing, and operations research.

## Comparison with discrete chains

| Property | Discrete chain | CTMC |
|---|---|---|
| Time | $n \in \mathbb{Z}_{\geq 0}$ | $t \in [0, \infty)$ |
| Evolution | $P^n$ | $e^{tQ}$ |
| Holding times | deterministic (1 step) | $\text{Exp}(q_i)$ |
| Stationarity | $\pi P = \pi$ | $\pi Q = 0$ |
| Periodicity | possible | impossible (exponential holding) |

CTMCs cannot be periodic because exponential holding times are continuous, so the chain always has a positive probability of being in any communicating state at any time $t > 0$.

## Related Articles

- [[discrete-markov-chains]] — the discrete-time precursor; all concepts (irreducibility, recurrence, stationarity) carry over.
- [[brownian-motion]] — the continuous-state continuous-time limit of CTMCs via scaling.
- [[kolmogorov-probability-axioms]] — foundational measure-theoretic framework.
- [[ergodic-theorems-birkhoff]] — ergodicity in the general dynamical systems sense.
- [[hidden-markov-models]] — CTMCs as hidden layers in continuous-time HMMs.
- [[levy-processes]] — CTMCs with jumps as a special case of processes with independent increments.

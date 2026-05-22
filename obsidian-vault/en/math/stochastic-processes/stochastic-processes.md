---
title: "Stochastic Processes"
category: "Stochastic Processes"
order: 1
lang: "en"
slug: "stochastic-processes"
growth: "budding"
---
# Stochastic Processes

## Overview

A stochastic process is a mathematical object usually defined as a collection of random variables. These processes are used to model the evolution of a system over time (or space) when the evolution involves some degree of uncertainty. In essence, a stochastic process is the "probabilistic counterpart" to a deterministic process (like an ordinary differential equation).

Formally, a stochastic process is a family of random variables $\{X_t : t \in T\}$ defined on a common probability space $(\Omega, \mathcal{F}, P)$, where $T$ is an index set (usually representing time).

## Classification

### By Index Set $T$
- **Discrete-time processes**: $T = \{0, 1, 2, \dots\}$. Examples: [[random-walks]], [[discrete-markov-chains]].
- **Continuous-time processes**: $T = [0, \infty)$ or $T = \mathbb{R}$. Examples: [[brownian-motion]], [[poisson-process]].

### By State Space $S$
- **Discrete state space**: The process takes values in a countable set (e.g., integers).
- **Continuous state space**: The process takes values in a continuum (e.g., $\mathbb{R}$ or $\mathbb{R}^n$).

## Key Classes of Processes

### Markov Processes
Processes where the future depends only on the present state, not on the past history.
$$ P(X_{t+1} \in A \mid X_t, X_{t-1}, \dots, X_0) = P(X_{t+1} \in A \mid X_t) $$
This "memoryless" property is fundamental in physics and finance. See [[discrete-markov-chains]] and [[kolmogorov-equations-ctmc]].

### Martingales
Processes that model a "fair game". The expected future value, given the past, is the current value.
$$ E[X_{t+s} \mid \mathcal{F}_t] = X_t $$
Martingales are the cornerstone of [[risk-neutral-valuation]] in finance. See [[martingale-representation]] and [[discrete-martingales]].

### Lévy Processes
Processes with independent and stationary increments. They generalize Brownian motion and Poisson processes.
$$ X_{t+s} - X_t \stackrel{d}{=} X_s $$
Lévy processes are used to model jumps and heavy tails in asset returns. See [[levy-processes]].

### Stationary Processes
Processes whose statistical properties (mean, variance, autocorrelation) do not change over time.
$$ (X_{t_1}, \dots, X_{t_n}) \stackrel{d}{=} (X_{t_1+h}, \dots, X_{t_n+h}) $$
See [[stationary-wide-spectral]].

## Fundamental Examples

1.  **[[brownian-motion]] (Wiener Process)**: The continuous-time limit of a random walk. It has continuous paths, Gaussian increments, and infinite variation.
2.  **[[poisson-process]]**: The simplest counting process. It models random arrivals (e.g., trades, defaults).
3.  **[[ornstein-uhlenbeck]]**: A mean-reverting process. It is used to model interest rates and volatility.
4.  **[[geometric-brownian-motion]]**: The standard model for stock prices in the Black-Scholes framework.

## Mathematical Tools

- **Filtrations**: A flow of information $\mathcal{F}_t$, representing what is known up to time $t$.
- **[[stochastic-differential-equations]] (SDEs)**: Equations describing the dynamics of a process using differential notation: $dX_t = \mu(t, X_t) dt + \sigma(t, X_t) dW_t$.
- **[[stochastic-calculus]]**: The framework (Itô or Stratonovich) for integrating and differentiating stochastic processes.
- **[[feynman-kac]] Formula**: Links SDEs with partial differential equations (PDEs).

## Applications

- **Finance**: Modeling asset prices, interest rates, and credit risk.
- **Physics**: Modeling diffusion, particles in a fluid, and quantum fluctuations.
- **Engineering**: Signal processing, control theory, and queueing systems.
- **Biology**: Population dynamics and spread of epidemics.

## Related Topics
- [[probability-foundations]] — the measure-theoretic base
- [[stochastic-calculus]] — calculus for random paths
- [[stochastic-differential-equations]] — modeling dynamics
- [[brownian-motion]] — the fundamental continuous process
- [[poisson-process]] — the fundamental counting process
- [[markov-chains]] — discrete state transitions
- [[martingales]] — the theory of fair games
- [[ergodic-theory]] — long-term behavior of processes

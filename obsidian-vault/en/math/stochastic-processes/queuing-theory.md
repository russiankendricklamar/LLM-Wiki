---
title: "Queueing Theory"
category: "Stochastic Processes"
order: 27
lang: "en"
slug: "/math/queuing-theory"
growth: "seedling"
---

## Introduction

Queueing theory studies the dynamics of systems where requests arrive randomly, wait in queues, and receive service from one or more servers. Fundamental applications span telephone switchboards, web servers, hospital emergency departments, and financial market microstructure.

## Kendall Notation

Systematic classification of queueing systems uses **A/S/c** notation, where:
- **A** — arrival process (distribution of inter-arrival times)
- **S** — service process (distribution of service time)
- **c** — number of servers

Standard symbols: **M** (Markovian/exponential), **G** (General), **D** (Deterministic).

## The M/M/1 Queue

The simplest and most thoroughly analyzed model features Poisson arrivals (rate $\lambda$) and exponential service time (rate $\mu$).

**Stability condition**: $\rho = \lambda/\mu < 1$ (traffic intensity).

**Flow balance equations**:
$$\lambda \pi_n = \mu \pi_{n+1}, \quad n \geq 0$$

yield the **stationary distribution**:
$$\pi_n = (1 - \rho) \rho^n, \quad n \geq 0$$

**Mean queue length**:
$$L = \sum_{n=0}^{\infty} n \pi_n = \frac{\rho}{1-\rho}$$

**Mean time in system**:
$$W = \frac{1}{\mu(1-\rho)}$$

## Little's Law

This fundamental result holds for any queueing discipline:
$$L = \lambda W$$

where $L$ denotes mean queue length, $\lambda$ is the arrival rate, and $W$ is the mean time in system. Analogously:
$$L_q = \lambda W_q$$

where $L_q$ and $W_q$ represent queue length and time in queue (excluding service).

## M/M/c and M/M/∞ Queues

With $c$ servers, the stationary distribution becomes:
$$\pi_n = \begin{cases}
\frac{(\lambda/\mu)^n}{n!} \pi_0, & n \leq c \\
\frac{(\lambda/\mu)^n}{c! \, c^{n-c}} \pi_0, & n > c
\end{cases}$$

where $\pi_0$ is the normalizing constant. For **M/M/∞** (infinite servers):
$$\pi_n = \frac{(\lambda/\mu)^n}{n!} e^{-\lambda/\mu}$$

which is a Poisson distribution with parameter $\lambda/\mu$.

## The M/G/1 Queue

Generalization to arbitrary service-time distribution $S$ with mean $1/\mu$ and variance $\text{Var}[S]$.

**Pollaczek–Khinchine formula**:
$$E[L_q] = \frac{\rho^2 + \lambda^2 \text{Var}[S]}{2(1-\rho)}$$

Note that service variability increases mean queue length; the special case $\text{Var}[S] = 1/\mu^2$ (exponential) recovers M/M/1.

## G/G/1 and Kingman Bound

For a general queue G/G/1 with arrival coefficient of variation $c_a$ and service coefficient of variation $c_s$:
$$E[W_q] \approx \frac{\rho}{1-\rho} \cdot \frac{c_a^2 + c_s^2}{2\mu}$$

This bound (exact for M/M/1 and D/D/1) reveals how interplay of arrival and service variability determines system performance.

## PASTA Property

**Poisson Arrivals See Time Averages**: under Poisson arrivals, the probability that an arriving customer finds the system in state $n$ equals the stationary probability $\pi_n$. This implies that the distribution of waiting times averaged over customers matches the distribution observed at a random epoch.

## Priority Queues

When customers are classified by priority levels, stationary distributions and mean waiting times depend on the service discipline:
- **Non-preemptive**: high-priority customer waits for current low-priority service to complete
- **Preemptive-resume**: immediate interruption allowed

Under non-preemptive discipline with $K$ priority classes having arrival rates $\lambda_i$ and service parameters:
$$E[W_q^{(k)}] = \frac{\lambda \text{Var}[S] + 2 \sum_{j=1}^{k-1} \rho_j}{2(1-\rho_k)(1-\rho_{k-1})}$$

## Jackson Networks and Product-Form Solutions

A Jackson network consists of $c$-server M/M queues where departures route to other queues according to a stochastic routing matrix. Under load-balance conditions, the stationary distribution of customer numbers at each station **factorizes**:
$$\pi(n_1, \ldots, n_N) = \prod_{i=1}^{N} \pi_i(n_i)$$

where each $\pi_i$ corresponds to an isolated M/M/c queue with modified parameters. This product-form property enables efficient computation of network characteristics even for large systems.

## Heavy Traffic and Brownian Approximation

As traffic intensity approaches saturation $\rho \to 1^-$, queue dynamics can be approximated by Brownian motion. The normalized queue length:
$$Q(t) \approx B_{\rho}(t) = B\left( \frac{c_a^2 + c_s^2}{2} \cdot t \right)$$

where $B$ is standard Brownian motion reflected at 0. This simplifies asymptotic analysis and leverages tools from [[brownian-bridge|Brownian bridge theory]].

## Applications

- **Computer networks**: analysis of packet flow through routers and transmission channels
- **Healthcare**: patient flow management in clinics and operating theatres
- **Finance**: order flow modeling, limit order book dynamics, microstructure
- **Manufacturing**: optimization of assembly lines and warehouse operations

## Related Concepts

Queueing theory interfaces with [[kolmogorov-equations-ctmc|Kolmogorov equations for continuous-time Markov chains]], [[renewal-theory|renewal theory]], [[point-processes|point processes]], and [[ergodic-theorems-birkhoff|Birkhoff ergodic theorems]]. Heavy-traffic analysis relies on [[markov-chain-mixing|Markov chain mixing]] and asymptotic theory of [[random-walks|random walks]].

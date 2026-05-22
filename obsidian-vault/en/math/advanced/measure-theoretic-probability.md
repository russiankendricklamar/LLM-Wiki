---
title: Measure-Theoretic Probability & Martingales
category: Advanced Theory
order: 146
lang: en
slug: measure-theoretic-probability
---

Modern probability theory is rigorously grounded in measure theory via Kolmogorov's axioms.

### Probability Spaces
A probability space is a triplet $(\Omega, \mathcal{F}, P)$, where $\Omega$ is the sample space, $\mathcal{F}$ is a $\sigma$-algebra of events, and $P$ is a probability measure. Random variables are $\mathcal{F}$-measurable functions $X: \Omega \to \mathbb{R}$.

### Radon-Nikodym Theorem
If a measure $\nu$ is absolutely continuous with respect to $\mu$ ($\nu \ll \mu$), there exists a measurable function $f$ (the Radon-Nikodym derivative) such that $\nu(A) = \int_A f \, d\mu$. This is the foundation of conditional expectation $\mathbb{E}[X | \mathcal{G}]$.

### Martingales
A stochastic process $M_t$ adapted to a filtration $\mathcal{F}_t$ is a **martingale** if $\mathbb{E}[|M_t|] < \infty$ and $\mathbb{E}[M_t | \mathcal{F}_s] = M_s$ for $s \le t$. The Martingale Representation Theorem underpins mathematical finance, proving that any square-integrable martingale can be written as an Itô integral with respect to Brownian motion.

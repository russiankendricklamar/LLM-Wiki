---
title: "Feller Processes"
category: "Stochastic Processes"
order: 15
lang: "en"
slug: "feller-processes"
---

# Feller Processes

A Feller process is a rich class of Markov processes that are "well-behaved" in a functional-analytic sense. They provide the natural setting for the study of the relationship between **transition semigroups** and their **infinitesimal generators**. Most processes studied in physics and finance (Brownian motion, Poisson, OU) are Feller processes.

## Definition via Semigroups

Let $C_0(X)$ be the space of continuous functions on a state space $X$ that vanish at infinity. A Markov process $X_t$ is a **Feller process** if its transition semigroup $P_t f(x) = \mathbb{E}^x[f(X_t)]$ satisfies:

1.  **Feller Property**: $P_t: C_0(X) \to C_0(X)$. (Mapping continuous functions to continuous functions).
2.  **Strong Continuity**: $\lim_{t \to 0} \|P_t f - f\|_\infty = 0$ for all $f \in C_0(X)$.

## The Infinitesimal Generator ($A$)

The most powerful aspect of Feller theory is that every Feller process is uniquely characterized by its generator $A$:
$$Af = \lim_{t \to 0} \frac{P_t f - f}{t}$$
The domain $\mathcal{D}(A)$ is dense in $C_0(X)$. This means that the entire probabilistic behavior of the process (how it moves, jumps, or diffuses) is encoded in a single operator.

## Courrège's Theorem (The Structure of A)

Courrège's theorem states that for a Feller process on $\mathbb{R}^d$, the generator $A$ must be a **Lévy-type operator**:
$$Af(x) = \sum a_{ij}(x) \partial_{ij} f(x) + \sum b_i(x) \partial_i f(x) + \int [f(x+y) - f(x) - \dots] \nu(x, dy)$$
This formula decomposes any well-behaved Markov process into three intuitive parts:
1.  **Diffusion** (the 2nd order derivatives).
2.  **Drift** (the 1st order derivatives).
3.  **Jumps** (the integral term).

## Why It Matters

1.  **Path Regularity**: Feller processes always have **càdlàg** paths (right-continuous with left limits), meaning they don't behave too wildly.
2.  **Strong Markov Property**: Every Feller process is a **Strong Markov process**, meaning the Markov property holds even at random stopping times (critical for option pricing).
3.  **Existence of Solutions**: Many SDEs are proven to have solutions by showing that their candidate generator satisfies the Hille-Yosida conditions for a Feller semigroup.

## Related Topics

[[operator-semigroups]] — the functional analytic engine  
[[stochastic-differential-equations]] — generators as SDE coefficients  
[[markov-processes]] — the broader family
---

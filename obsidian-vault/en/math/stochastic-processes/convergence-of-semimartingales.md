---
title: Convergence of Semimartingales
category: Stochastic Processes
order: 155
lang: en
slug: convergence-of-semimartingales
---

# Convergence of Semimartingales

The theory of weak convergence of stochastic processes, particularly semimartingales, provides the foundation for functional limit theorems (like Donsker's theorem) and approximation schemes in stochastic analysis.

## Skorokhod Space $J_1$ Topology

Since semimartingales generally have jumps (càdlàg paths), convergence cannot be studied in the uniform metric. We use the Skorokhod $J_1$ topology on the space $D([0,\infty), \mathbb{R}^d)$, which allows for small shifts in both time and space to align discontinuities.

## Tightness and Aldous' Criterion

Proving weak convergence $X^n \Rightarrow X$ relies on Prohorov's theorem, requiring the sequence of laws to be tight. Aldous' tightness criterion states that $(X^n)$ is tight if:
1. For every $t$, $(X^n_t)$ is tight in $\mathbb{R}^d$.
2. For any stopping times $\tau_n \le T$ and constants $\delta_n \downarrow 0$, $X^n_{\tau_n + \delta_n} - X^n_{\tau_n} \xrightarrow{\mathbb{P}} 0$.
This ensures the processes do not wildly oscillate.

## Convergence of Characteristics

Jacod-Shiryaev theory elegantly characterizes semimartingale convergence via their predictable triplets $(B, C, \nu)$ (drift, continuous quadratic variation, and compensator of jump measure). If the characteristics $(B^n, C^n, \nu^n)$ of $X^n$ converge in a suitable sense to $(B, C, \nu)$, then the processes converge $X^n \Rightarrow X$. This theory underpins fluid limits in queuing theory and approximation of diffusions by discrete Markov chains in [[statistical-mechanics]].

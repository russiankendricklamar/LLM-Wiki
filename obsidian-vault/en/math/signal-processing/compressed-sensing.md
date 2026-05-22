---
title: 'Signal Processing: Compressed Sensing'
category: Advanced Math and Stats
order: 184
lang: en
slug: compressed-sensing
---

Compressed sensing reconstructs a signal efficiently by finding solutions to underdetermined linear systems, exploiting the signal's sparsity.

### The Problem
We want to solve $y = \Phi x$, where $x \in \mathbb{R}^N$ is the sparse signal (with $K$ non-zero elements), $y \in \mathbb{R}^M$ are the measurements, and $M \ll N$. The measurement matrix $\Phi$ must satisfy the Restricted Isometry Property (RIP).

### L1 Minimization
Finding the sparsest solution requires solving the $L_0$-norm problem, which is NP-hard. However, if $\Phi$ satisfies RIP, the $L_0$ solution exactly matches the $L_1$ convex relaxation:
$\min \|x\|_1 \quad \text{subject to } \Phi x = y$
This is solved using linear programming (Basis Pursuit). The minimum number of measurements required is roughly $M \approx O(K \log(N/K))$, drastically beating the Nyquist-Shannon sampling rate.

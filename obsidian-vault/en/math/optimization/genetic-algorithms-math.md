---
title: 'Optimization: Genetic Algorithms Mathematics'
category: Advanced Math and Stats
order: 186
lang: en
slug: genetic-algorithms-math
---

Genetic Algorithms (GAs) are search heuristics inspired by natural evolution.

### The Schema Theorem
Holland's Schema Theorem describes how patterns (schemas) in the bit-string population evolve. Let $H$ be a schema with defining length $\delta(H)$ and order $o(H)$. The expected number of instances of $H$ at generation $t+1$, denoted $m(H, t+1)$, is bounded by:
$m(H, t+1) \ge m(H, t) \frac{f(H)}{\bar{f}} \left[ 1 - p_c \frac{\delta(H)}{L-1} - p_m o(H) \right]$
where $f(H)$ is the average fitness of strings matching $H$, $\bar{f}$ is the population average fitness, $p_c$ is crossover probability, and $p_m$ is mutation probability.

This theorem implies that short, low-order, highly fit schemas (building blocks) increase their frequency exponentially in subsequent generations.

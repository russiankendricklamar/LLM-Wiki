---
title: 'Reinforcement Learning: Bellman Equations'
category: AI Theory
order: 169
lang: en
slug: bellman-equations
---

The Bellman equations decompose the value function into the immediate reward plus the discounted value of the next state.

### Bellman Expectation Equation
For a given policy $\pi$:
$V^\pi(s) = \sum_a \pi(a|s) \sum_{s', r} p(s', r | s, a) [r + \gamma V^\pi(s')]$
This forms a system of linear equations that can be solved analytically for small discrete MDPs.

### Bellman Optimality Equation
For the optimal policy $\pi^*$:
$V^*(s) = \max_a \sum_{s', r} p(s', r | s, a) [r + \gamma V^*(s')]$
This non-linear equation forms the basis of Value Iteration and Q-learning, relying on the contraction mapping properties of the Bellman operator to find the unique fixed point.

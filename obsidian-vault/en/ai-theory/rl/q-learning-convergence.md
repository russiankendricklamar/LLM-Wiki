---
title: 'Reinforcement Learning: Q-Learning Convergence'
category: AI Theory
order: 167
lang: en
slug: q-learning-convergence
---

Q-learning is a fundamental off-policy TD control algorithm.

### The Update Rule
$Q(S_t, A_t) \gets Q(S_t, A_t) + \alpha [R_{t+1} + \gamma \max_a Q(S_{t+1}, a) - Q(S_t, A_t)]$

### Contraction Mapping and Convergence
Q-learning converges to the optimal action-value function $Q^*$ with probability 1 if:
1. The state-action space is discrete and finite.
2. All state-action pairs are visited infinitely often.
3. The learning rate $\alpha_t$ satisfies the Robbins-Monro conditions: $\sum \alpha_t = \infty$ and $\sum \alpha_t^2 < \infty$.
The proof models the update as a stochastic approximation algorithm and relies on the fact that the Bellman optimality operator is a $\gamma$-contraction in the max norm.

---
title: 'Reinforcement Learning: Soft Actor-Critic (SAC)'
category: AI Theory
order: 166
lang: en
slug: sac-math
---

Soft Actor-Critic is an off-policy maximum entropy actor-critic algorithm.

### Maximum Entropy Objective
Instead of just maximizing expected reward, SAC maximizes a trade-off between expected reward and policy entropy:
$J(\pi) = \sum_{t=0}^T \mathbb{E}_{(s_t, a_t) \sim \rho_\pi} [r(s_t, a_t) + \alpha \mathcal{H}(\pi(\cdot|s_t))]$
where $\alpha$ is the temperature parameter controlling exploration.

### Soft Bellman Equations
The soft Q-function incorporates the entropy term:
$Q(s_t, a_t) = r_t + \gamma \mathbb{E}_{s_{t+1}}[V(s_{t+1})]$
$V(s_t) = \mathbb{E}_{a_t \sim \pi}[Q(s_t, a_t) - \alpha \log \pi(a_t|s_t)]$
The actor $\pi_\phi$ is updated by minimizing the KL divergence towards the exponentiated soft Q-function, using the reparameterization trick for continuous action spaces.

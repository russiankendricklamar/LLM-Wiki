---
title: 'Reinforcement Learning: PPO Mathematics'
category: AI Theory
order: 165
lang: en
slug: ppo-math
---

Proximal Policy Optimization (PPO) avoids destructively large policy updates by clipping the objective function.

### The Objective Function
Let $r_t(\theta) = \frac{\pi_\theta(a_t|s_t)}{\pi_{\theta_{old}}(a_t|s_t)}$ be the probability ratio. The clipped surrogate objective is:
$L^{CLIP}(\theta) = \hat{\mathbb{E}}_t \left[ \min(r_t(\theta)\hat{A}_t, \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon)\hat{A}_t) \right]$
where $\hat{A}_t$ is the Generalized Advantage Estimate (GAE).

### Why it works
If the advantage is positive, we want to increase the probability of the action. However, the clip limits $r_t$ to $1+\epsilon$, ensuring the policy doesn't change drastically based on a single batch of data. This approximates the computationally expensive Trust Region Policy Optimization (TRPO) KL-divergence constraint using a simple clipping mechanism.

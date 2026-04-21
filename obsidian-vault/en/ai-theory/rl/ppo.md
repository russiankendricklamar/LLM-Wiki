---
title: "Proximal Policy Optimization (PPO)"
category: "AI Theory"
order: 11
lang: "en"
slug: "ppo"
growth: "seedling"
---

# Proximal Policy Optimization (PPO)

**Proximal Policy Optimization (PPO)** is the most widely deployed policy gradient algorithm in modern deep RL and the backbone of [[rlhf]] training for large language models. Introduced by Schulman et al. (2017), it achieves stable on-policy learning by constraining how much the policy changes in a single update — without the computational overhead of TRPO.

## Motivation: The Policy Update Problem

Naïve policy gradient methods suffer from a fundamental instability: a poorly chosen step size either wastes data (tiny steps) or destroys the policy (large steps). **TRPO** solved this with a hard KL constraint:

$$
\max_\theta \; \mathbb{E}\left[\frac{\pi_\theta(a|s)}{\pi_{\theta_\text{old}}(a|s)} \hat A\right], \quad \text{s.t.} \;\; \mathbb{E}[D_\text{KL}(\pi_{\theta_\text{old}} \| \pi_\theta)] \leq \delta.
$$

TRPO requires computing the Fisher information matrix inverse — expensive and complex. PPO approximates the same idea with a simple first-order clip.

## The Clipped Surrogate Objective

Define the probability ratio:

$$
r_t(\theta) = \frac{\pi_\theta(a_t \mid s_t)}{\pi_{\theta_\text{old}}(a_t \mid s_t)}.
$$

The **PPO-Clip** objective clips $r_t$ to stay within $[1-\epsilon,\, 1+\epsilon]$:

$$
L^{\text{CLIP}}(\theta) = \mathbb{E}_t\left[\min\!\left(r_t(\theta)\,\hat A_t,\;\operatorname{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon)\,\hat A_t\right)\right].
$$

When the advantage is positive, clipping prevents over-exploitation; when negative, it prevents overcorrection. Typical $\epsilon = 0.1$–$0.2$.

## Generalized Advantage Estimation (GAE)

PPO uses **GAE** to estimate advantages, trading off variance and bias via $\lambda \in [0,1]$:

$$
\hat A_t^{\text{GAE}(\gamma,\lambda)} = \sum_{l=0}^{\infty} (\gamma\lambda)^l \delta_{t+l}, \quad \delta_t = r_t + \gamma V(s_{t+1}) - V(s_t).
$$

- $\lambda = 0$: one-step TD — low variance, high bias.
- $\lambda = 1$: Monte Carlo — high variance, no bias.
- Standard defaults: $\lambda = 0.95$, $\gamma = 0.99$.

## Full PPO Loss

$$
L(\theta) = \mathbb{E}_t\!\left[ L^{\text{CLIP}}_t - c_1 L^{\text{VF}}_t + c_2 S[\pi_\theta](s_t) \right],
$$

where:
- $L^{\text{VF}}_t = (V_\theta(s_t) - V_t^\text{target})^2$ — value function MSE
- $S[\pi_\theta](s_t)$ — [[shannon-entropy|entropy]] bonus (encourages exploration)
- $c_1 \approx 0.5$, $c_2 \approx 0.01$

## Training Dynamics

```chart
{
  "type": "line",
  "xAxis": "update",
  "data": [
    {"update": 0, "reward": -150, "kl": 0},
    {"update": 20, "reward": -80, "kl": 8},
    {"update": 50, "reward": 20, "kl": 12},
    {"update": 100, "reward": 120, "kl": 15},
    {"update": 150, "reward": 180, "kl": 18},
    {"update": 200, "reward": 210, "kl": 14},
    {"update": 250, "reward": 230, "kl": 11},
    {"update": 300, "reward": 240, "kl": 10}
  ],
  "lines": [
    {"dataKey": "reward", "stroke": "#10b981", "name": "Episode reward"},
    {"dataKey": "kl", "stroke": "#f59e0b", "name": "Approx KL ×1000"}
  ]
}
```

## Hyperparameters

| Parameter | Typical range | Effect |
|-----------|--------------|--------|
| $\epsilon$ (clip) | 0.1–0.2 | Trust region width |
| $\gamma$ | 0.99 | Discount horizon |
| $\lambda$ (GAE) | 0.95 | Bias-variance tradeoff |
| Learning rate | 3e-4 | Adam LR |
| Epochs $K$ | 4–10 | Rollout reuse |
| Entropy coeff $c_2$ | 0.0–0.01 | Exploration |

## PPO vs TRPO

| | PPO | TRPO |
|-|-----|------|
| Constraint | Clip heuristic | Hard KL |
| Implementation | Simple, first-order | Complex, conjugate gradient |
| Computational cost | Low | High |
| Common use | Industry default | Research |

## Applications

**RLHF / [[llm]] alignment.** PPO is the RL algorithm in InstructGPT, Claude, and Gemini RLHF pipelines. The reward model plays the role of $r(s,a)$; the reference policy KL penalty constrains drift from the base model.

**Continuous control.** MuJoCo locomotion (Ant, Humanoid, HalfCheetah) — PPO achieves near-SOTA with correct hyperparameters.

**Games.** OpenAI Five (Dota 2), AlphaStar variants.

## Related Topics

- [[reinforcement-learning]] — MDPs, value functions, policy gradients
- [[rlhf]] — PPO applied to language model alignment
- [[soft-actor-critic]] — off-policy alternative for continuous control
- [[model-based-rl]] — sample-efficient alternative to PPO

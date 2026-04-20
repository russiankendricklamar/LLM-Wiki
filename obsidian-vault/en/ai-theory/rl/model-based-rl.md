---
title: "Model-Based Reinforcement Learning"
category: "AI Theory"
order: 13
lang: "en"
slug: "model-based-rl"
growth: "seedling"
---

# Model-Based Reinforcement Learning

**Model-based RL (MBRL)** augments the standard RL loop with a learned **world model** $\hat P(s' \mid s, a)$ that predicts environment dynamics. Rather than collecting every training sample through expensive real interactions, the agent can generate synthetic experience by "imagining" rollouts inside the model — achieving orders-of-magnitude better sample efficiency than model-free methods.

## Model-Free vs Model-Based

| | Model-Free (PPO, SAC) | Model-Based |
|-|-----------------------|-------------|
| Data efficiency | Low (millions of steps) | High (thousands) |
| Asymptotic performance | High | Sometimes limited by model error |
| Computation | Low (per step) | High (model training) |
| Transfer | Poor | Good (model reusable) |
| Implementation | Simple | Complex |

## The Dyna Architecture

Sutton's **Dyna** (1991) is the foundational MBRL framework: interleave real environment steps with model-generated "hallucinated" steps.

```
For each real step:
  1. Act in environment, observe (s, a, r, s')
  2. Update world model M with (s, a, r, s')
  3. For k imagined steps:
     - Sample start state s̃ from buffer
     - Sample action ã ~ π(·|s̃)
     - Query model: r̃, s̃' ~ M(s̃, ã)
     - Update value function / policy on (s̃, ã, r̃, s̃')
```

Even with $k=5$–$20$ imagined steps per real step, Dyna dramatically accelerates learning in tabular settings.

## Neural Network World Models

Modern MBRL uses deep neural networks as world models. Key design choices:

**Probabilistic models.** Deterministic models suffer from model exploitation — the policy finds spurious high-reward regions that the model predicts incorrectly. Probabilistic models (Gaussian outputs, ensembles) provide uncertainty estimates that regularize planning.

**Ensembles.** MBPO trains an ensemble of $N=7$ probabilistic networks. The agent only trusts rollouts where ensemble disagreement is low — an implicit epistemic uncertainty penalty.

**Recurrent world models.** RSSM (Recurrent State Space Model) in Dreamer separates deterministic and stochastic components:

$$
h_t = f_\theta(h_{t-1}, z_{t-1}, a_{t-1}), \quad z_t \sim q_\phi(z_t \mid h_t, x_t).
$$

The deterministic path $h_t$ carries temporal memory; $z_t$ captures stochasticity.

## MBPO: Model-Based Policy Optimization

Janner et al. (2019): use SAC as the model-free optimizer, but generate short $k$-step rollouts from the model rather than single steps.

Key insight: short rollouts ($k=1$–$5$) keep compound model error manageable while providing significant data amplification. The policy trains on a mixture of real and model data.

```chart
{
  "type": "line",
  "xAxis": "steps",
  "data": [
    {"steps": 0, "mbpo": 0, "sac_mf": 0, "ppo": 0},
    {"steps": 5000, "mbpo": 2000, "sac_mf": 300, "ppo": 200},
    {"steps": 10000, "mbpo": 5000, "sac_mf": 800, "ppo": 500},
    {"steps": 50000, "mbpo": 8500, "sac_mf": 4000, "ppo": 2500},
    {"steps": 100000, "mbpo": 9500, "sac_mf": 7000, "ppo": 4500},
    {"steps": 300000, "mbpo": 10000, "sac_mf": 9500, "ppo": 7500}
  ],
  "lines": [
    {"dataKey": "mbpo", "stroke": "#10b981", "name": "MBPO"},
    {"dataKey": "sac_mf", "stroke": "#3b82f6", "name": "SAC (model-free)"},
    {"dataKey": "ppo", "stroke": "#f59e0b", "name": "PPO"}
  ]
}
```

MBPO reaches SAC's asymptote with 20–50× fewer real environment steps.

## Dreamer / DreamerV3

Ha & Schmidhuber (2018) **World Models**: train a world model, then learn the policy entirely in latent imagination without additional real environment steps (beyond the model training phase).

**DreamerV3** (Hafner et al. 2023) achieves this robustly across domains: Atari, continuous control, Minecraft — the same hyperparameters everywhere. Key contributions:
- Symlog predictions for handling diverse reward scales
- Free bits to prevent posterior collapse in the RSSM
- Return normalization that adapts to reward magnitude

## MCTS and AlphaZero

**Monte Carlo Tree Search (MCTS)** is a planning algorithm that uses a (known or learned) model to build a search tree. AlphaZero uses MCTS with a neural policy+value network as the model:

1. From state $s$, run $N$ MCTS simulations using $\pi_\theta, V_\theta$ as heuristics
2. Select action proportional to visit counts $N(s,a)$
3. Use MCTS policy to generate training targets for $\pi_\theta$
4. Use final game outcome as target for $V_\theta$

The key insight: the MCTS policy is always better than the raw neural network policy (more compute = better decisions), so it provides a self-improving training signal.

## Model Error Compounding

The fundamental challenge: errors in $\hat P$ compound over $k$-step rollouts. After $k$ steps, state distribution diverges from the true distribution at rate $\approx O(k \cdot \epsilon_{\text{model}})$.

Mitigations:
- Short rollouts (MBPO: $k=1$ for HalfCheetah)
- Uncertainty-aware planning (penalise high-variance regions)
- Model ensembles (disagreement as uncertainty proxy)
- Constraining imagination to high-density buffer regions

## Related Topics

- [[reinforcement-learning]] — MDP fundamentals
- [[soft-actor-critic]] — typical model-free backbone in MBRL
- [[ppo]] — alternative model-free optimizer
- [[offline-rl]] — model can substitute for environment in offline settings

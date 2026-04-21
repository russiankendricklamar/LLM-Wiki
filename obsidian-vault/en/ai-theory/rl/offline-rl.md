---
title: "Offline Reinforcement Learning"
category: "AI Theory"
order: 14
lang: "en"
slug: "offline-rl"
growth: "seedling"
---

# Offline Reinforcement Learning

**Offline RL** (also called **batch RL**) trains a policy from a fixed dataset of previously collected transitions $\mathcal{D} = \{(s, a, r, s')\}$ — without any further interaction with the environment. This setting is critical for domains where online exploration is expensive, dangerous, or impossible: healthcare, autonomous driving, robotic surgery, financial trading.

## The Distributional Shift Problem

Standard off-policy RL (DQN, SAC) corrects for distribution shift via importance sampling or soft updates. In offline RL the shift is far more severe: the policy can take actions that the behaviour policy $\pi_\beta$ never took, leading to **extrapolation errors** in the Q-function.

A Q-network trained on $\mathcal{D}$ may confidently assign high values to out-of-distribution (OOD) actions that were never actually executed. If the policy then selects these OOD actions, catastrophic failures occur — the agent exploits the model rather than the true environment.

## Conservative Q-Learning (CQL)

**CQL** (Kumar et al. 2020) adds a penalty that pushes down Q-values for OOD actions while pulling up Q-values for dataset actions:

$$
\min_Q \; \mathbb{E}_{s\sim\mathcal{D}}\!\left[\log\sum_a e^{Q(s,a)} - \mathbb{E}_{a\sim\pi_\beta}[Q(s,a)]\right] + \frac{1}{2}\mathbb{E}_\mathcal{D}\!\left[(Q(s,a) - \mathcal{B}^*Q)^2\right].
$$

The first term is a soft maximum over all actions (pushes OOD Q-values down); the second is standard Bellman backup. CQL guarantees a lower bound on the true policy value — hence "conservative."

## Implicit Q-Learning (IQL)

**IQL** (Kostrikov et al. 2021) avoids OOD actions entirely by never querying $Q$ at unseen actions during training:

$$
L_V(\psi) = \mathbb{E}_{(s,a)\sim\mathcal{D}}\!\left[L_2^\tau\!(Q_{\hat\theta}(s,a) - V_\psi(s))\right],
$$

where $L_2^\tau$ is the **expectile loss** — an asymmetric squared loss that extracts the $\tau$-quantile of the Q-value distribution at each state. With $\tau \to 1$, $V$ approaches $\max_a Q$. IQL extracts a policy via advantage-weighted regression, never bootstrapping on OOD actions.

## TD3+BC

**TD3+BC** (Fujimoto & Gu 2021) combines the TD3 actor loss with a behaviour cloning (BC) term:

$$
\pi = \arg\max_\pi \mathbb{E}_{(s,a)\sim\mathcal{D}}\!\left[\lambda Q(s, \pi(s)) - (\pi(s) - a)^2\right].
$$

The BC term keeps the policy close to the dataset distribution; $\lambda$ is normalised so the two terms are comparable. Surprisingly simple and competitive with CQL.

## Behaviour Cloning Baseline

The simplest offline approach: supervised learning on $(s, a)$ pairs from $\mathcal{D}$. BC ignores rewards entirely — it imitates the behaviour policy. Performance is bounded by the quality of the dataset; BC cannot improve beyond the demonstrator.

## Decision [[transformer-architecture|Transformer]]

**Decision Transformer** (Chen et al. 2021) reframes offline RL as a sequence modelling problem. Given a context of past $(R, s, a)$ triples and a target return $\hat{R}$, a GPT-2 style model autoregressively predicts the next action:

$$
a_t = \pi_\theta(\hat{R}_t, s_t, a_{t-1}, \hat{R}_{t-1}, \ldots).
$$

No Bellman equations, no Q-functions — just next-token prediction. Works surprisingly well on D4RL benchmarks when datasets contain high-return trajectories.

## Dataset Quality Matters

```chart
{
  "type": "bar",
  "xAxis": "dataset",
  "data": [
    {"dataset": "random", "bc": 5, "cql": 20, "iql": 15},
    {"dataset": "medium", "bc": 43, "cql": 44, "iql": 47},
    {"dataset": "medium-expert", "bc": 52, "cql": 91, "iql": 86},
    {"dataset": "expert", "bc": 107, "cql": 98, "iql": 109}
  ],
  "bars": [
    {"dataKey": "bc", "fill": "#f59e0b", "name": "BC"},
    {"dataKey": "cql", "fill": "#3b82f6", "name": "CQL"},
    {"dataKey": "iql", "fill": "#10b981", "name": "IQL"}
  ]
}
```

On random datasets BC and RL methods diverge dramatically; on expert data BC can match or exceed RL. IQL and CQL both benefit from mixing expert demonstrations with medium-quality data.

## Applications

**Healthcare.** Sepsis treatment protocols from ICU records — online exploration means harming patients.

**Autonomous driving.** Pre-training from large driving logs before deployment.

**Robotics.** Learning from human demonstrations (D4RL, RoboMimic benchmarks).

**Finance.** Learning execution and trading policies from historical order book data without market impact.

## Related Topics

- [[reinforcement-learning]] — online RL foundations
- [[soft-actor-critic]] — SAC backbone used in CQL
- [[model-based-rl]] — world model as environment substitute in offline settings
- [[deep-rl-execution]] — offline RL for trade execution

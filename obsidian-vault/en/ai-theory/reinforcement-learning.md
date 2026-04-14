---
title: "Reinforcement Learning"
category: "AI Theory"
order: 10
lang: "en"
slug: "reinforcement-learning"
---

# Reinforcement Learning

**Reinforcement Learning (RL)** is the branch of machine learning in which an agent learns to act in an environment by maximising cumulative reward. Unlike supervised learning, the correct answer is not given in advance — the agent must discover it through trial, error and feedback. RL is the only paradigm that naturally describes sequential decision-making, where each action shapes the future options.

## Visualization

The chart below illustrates a typical RL training curve: cumulative episode reward grows as the agent learns a policy, with high variance early due to exploration and stabilising as exploitation takes over.

```chart
{
  "type": "line",
  "xAxis": "episode",
  "data": [
    {"episode": 0, "reward": -210, "smoothed": -210},
    {"episode": 50, "reward": -180, "smoothed": -195},
    {"episode": 100, "reward": -150, "smoothed": -175},
    {"episode": 200, "reward": -80, "smoothed": -120},
    {"episode": 300, "reward": -20, "smoothed": -55},
    {"episode": 400, "reward": 40, "smoothed": 10},
    {"episode": 500, "reward": 120, "smoothed": 80},
    {"episode": 600, "reward": 175, "smoothed": 150},
    {"episode": 700, "reward": 190, "smoothed": 185},
    {"episode": 800, "reward": 200, "smoothed": 196},
    {"episode": 900, "reward": 198, "smoothed": 199},
    {"episode": 1000, "reward": 201, "smoothed": 200}
  ],
  "lines": [
    {"dataKey": "reward", "stroke": "#f59e0b", "name": "Episode reward (raw)"},
    {"dataKey": "smoothed", "stroke": "#3b82f6", "name": "Smoothed reward"}
  ]
}
```

## Markov Decision Process

The formal model of RL is a **Markov Decision Process (MDP)**, a tuple $(\mathcal{S}, \mathcal{A}, P, r, \gamma)$:

- $\mathcal{S}$ — set of states
- $\mathcal{A}$ — set of actions
- $P(s' \mid s, a)$ — transition function, probability of reaching $s'$ after action $a$ in state $s$
- $r(s, a)$ — reward function
- $\gamma \in [0, 1)$ — discount factor

The **Markov property** — the future depends only on the current state, not on history — makes the problem tractable. When it fails, classical methods require state augmentation or specialised architectures (POMDPs, LSTM agents).

The agent selects actions via a **policy** $\pi(a \mid s)$, which can be deterministic ($\pi: \mathcal{S} \to \mathcal{A}$) or stochastic. The goal is to find a policy maximising expected discounted return:

$$
J(\pi) = \mathbb{E}_\pi\left[\sum_{t=0}^{\infty} \gamma^t r(s_t, a_t)\right].
$$

## Value Functions and the Bellman Equation

Two central functions:

$$
V^\pi(s) = \mathbb{E}_\pi\left[\sum_{t=0}^{\infty} \gamma^t r(s_t, a_t) \mid s_0 = s\right], \quad
Q^\pi(s, a) = \mathbb{E}_\pi\left[\sum_{t=0}^{\infty} \gamma^t r(s_t, a_t) \mid s_0 = s, a_0 = a\right].
$$

Both satisfy the **Bellman equation** — the key recursive identity of RL:

$$
V^\pi(s) = \mathbb{E}_{a \sim \pi, s' \sim P}\left[r(s, a) + \gamma V^\pi(s')\right].
$$

The optimal policy $\pi^*$ maximises $V$ in every state, and the corresponding $V^*, Q^*$ satisfy the Bellman optimality equation:

$$
V^*(s) = \max_a \mathbb{E}_{s'}\left[r(s, a) + \gamma V^*(s')\right].
$$

## Classical Algorithms

**Q-learning.** An off-policy tabular algorithm updating $Q(s, a)$ from observed transitions:

$$
Q(s, a) \leftarrow Q(s, a) + \alpha\left[r + \gamma \max_{a'} Q(s', a') - Q(s, a)\right].
$$

Converges to $Q^*$ under infinite visitation of all $(s, a)$ pairs.

**SARSA.** On-policy variant using the actual next action $a'$ instead of the maximum.

**Temporal Difference (TD).** Updating estimates from successor states — a compromise between Monte Carlo (exact but high-variance) and dynamic programming (exact but model-dependent).

## Deep Reinforcement Learning

When the state space is large or continuous (pixels, the order book), tabular $Q$ is infeasible. **Deep RL** uses neural networks as approximators $V_\theta, Q_\theta, \pi_\theta$.

**DQN (Deep Q-Network, Mnih et al. 2015).** The first large-scale success of deep RL: $Q$ as a CNN, training Atari from pixels. Key tricks are the **replay buffer** (decorrelating training examples) and **target network** (stabilising bootstrapping).

**Policy Gradient.** Directly optimises $\pi_\theta$ through the gradient of the log-probability of an action weighted by return:

$$
\nabla_\theta J(\pi_\theta) = \mathbb{E}\left[\sum_t \nabla_\theta \log \pi_\theta(a_t \mid s_t) \cdot G_t\right].
$$

The basis of REINFORCE (Williams 1992), A3C, PPO, SAC.

**Actor-Critic.** Combines a value function (critic, reducing variance) and a policy (actor). Popular variants: A2C/A3C, DDPG, TD3, **Soft Actor-Critic (SAC)** — the de facto standard for continuous-control tasks.

**Proximal Policy Optimization (PPO, Schulman et al. 2017).** The most widely used modern algorithm: stable, relatively easy to tune, works in both discrete and continuous environments. Constrains the policy step via clipping the probability ratio.

## Exploration vs Exploitation

The central trade-off in RL — **explore/exploit**: the agent can either use known good actions (exploitation) or try new ones hoping for something better (exploration). Classical strategies:

- **$\epsilon$-greedy** — a random action with probability $\epsilon$, else argmax.
- **Boltzmann exploration** — softmax over $Q(s, a)/T$ with temperature $T$.
- **UCB / Thompson sampling** — Bayesian methods that factor in estimation uncertainty.
- **Intrinsic curiosity** (ICM, RND, curiosity) — a bonus reward for reaching rare states.

## Off-policy vs On-policy, Model-based vs Model-free

**On-policy** algorithms (SARSA, A2C, PPO) learn only from data collected by the current policy — data become stale when weights update.

**Off-policy** (Q-learning, DQN, SAC) can reuse past data from a replay buffer — far more data-efficient.

**Model-free** methods learn directly from interactions without an explicit model of $P$. Simple, but data-inefficient.

**Model-based** methods learn $\hat P(s' \mid s, a)$ and plan through it (MCTS, Dyna, Dreamer). Much more data-efficient but vulnerable to model error.

## Applications

- **Games.** AlphaGo (Silver et al. 2016) — a combination of MCTS and a deep policy/value; AlphaZero, MuZero generalise to chess, shogi and unknown rules.
- **Robotics.** Continuous control of arms and legged robots via SAC/PPO.
- **Language models.** RLHF (Christiano et al. 2017, InstructGPT, ChatGPT) — training a policy aligned with human preferences via PPO.
- **Finance.** [[deep-rl-execution|Optimal trade execution]], [[rl-trader|RL-traders]], portfolio management, derivative hedging.
- **Resource optimisation.** Data-centre cooling (DeepMind), chip placement, routing.

## Related Topics

- [[deep-rl-execution]] — RL applied to optimal trade execution
- [[rl-trader]] — RL-trader for portfolio strategies
- [[optimal-execution]] — classical execution theory that RL extends
- [[automatic-differentiation]] — the basis of gradient RL methods
- [[neural-odes]] — environment model in model-based RL

---
title: "Markov Decision Processes (MDP)"
category: "Applied Probability"
order: 35
lang: "en"
slug: "mdp"
---

# Markov Decision Processes (MDP)

A Markov Decision Process (MDP) is a mathematical framework for modeling decision-making in situations where outcomes are partly random and partly under the control of a decision-maker. MDPs are the foundational theory behind **Reinforcement Learning (RL)** and optimal control.

## The Mathematical Framework

An MDP is defined as a tuple $(\mathcal{S}, \mathcal{A}, P, R, \gamma)$:
- **$\mathcal{S}$**: A set of states.
- **$\mathcal{A}$**: A set of actions.
- **$P(s' \mid s, a)$**: The transition probability. The probability that taking action $a$ in state $s$ leads to state $s'$. It satisfies the **Markov Property**: the future depends only on the current state and action, not on the history.
- **$R(s, a, s')$**: The immediate reward received after transitioning from $s$ to $s'$ via action $a$.
- **$\gamma \in [0, 1)$**: The discount factor, determining the present value of future rewards.

## Policies and Value Functions

A **Policy** $\pi(a \mid s)$ defines the behavior of the agent: it gives the probability of taking action $a$ in state $s$.

The goal is to find an **optimal policy** $\pi^*$ that maximizes the expected cumulative discounted reward (Return):
$$G_t = R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + \dots = \sum_{k=0}^\infty \gamma^k R_{t+k+1}$$

To do this, we define two Value Functions:
1.  **State-Value Function $V^\pi(s)$**: The expected return starting from state $s$ and following policy $\pi$.
2.  **Action-Value Function $Q^\pi(s, a)$**: The expected return starting from state $s$, taking action $a$, and then following policy $\pi$.

## The Bellman Equations

The core of MDP theory are the Bellman equations, which express the value of a state recursively in terms of the value of its successor states.

The **Bellman Optimality Equation** for $V^*(s)$ is:
$$V^*(s) = \max_a \sum_{s'} P(s' \mid s, a) \left[ R(s, a, s') + \gamma V^*(s') \right]$$

This non-linear equation states that the value of a state under the optimal policy must equal the expected return for the best action from that state. 

## Solving MDPs

If the transition probabilities $P$ and rewards $R$ are known, the MDP can be solved exactly using dynamic programming:
1.  **Value Iteration**: Iteratively updating $V(s)$ using the Bellman optimality equation until it converges.
2.  **Policy Iteration**: Alternating between evaluating the current policy $V^\pi$ and improving it $\pi'(s) = \arg\max_a Q^\pi(s, a)$.

In **Reinforcement Learning**, $P$ and $R$ are *unknown*, so the agent must learn to approximate the optimal policy through trial and error (e.g., Q-Learning, PPO).

## Visualization: Value Discounting

```chart
{
  "type": "line",
  "xAxis": "step",
  "data": [
    {"step": 0, "gamma_09": 1.0, "gamma_05": 1.0},
    {"step": 1, "gamma_09": 0.9, "gamma_05": 0.5},
    {"step": 2, "gamma_09": 0.81, "gamma_05": 0.25},
    {"step": 3, "gamma_09": 0.729, "gamma_05": 0.125},
    {"step": 5, "gamma_09": 0.59, "gamma_05": 0.03}
  ],
  "lines": [
    {"dataKey": "gamma_09", "stroke": "#10b981", "name": "Long-term Focus (γ=0.9)"},
    {"dataKey": "gamma_05", "stroke": "#ef4444", "name": "Short-term Focus (γ=0.5)"}
  ]
}
```
*The discount factor $\gamma$ determines how much the agent cares about the distant future. A lower $\gamma$ leads to greedy, short-sighted behavior.*

## Related Topics

[[ergodic-theory-markov]] — the underlying Markov chain dynamics  
[[reinforcement-learning]] — solving MDPs without knowing $P$ or $R$  
[[stochastic-control]] — continuous-time formulation (HJB equation)
---

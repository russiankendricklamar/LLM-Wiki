---
title: "Multi-Armed Bandits"
category: "Statistical Learning"
order: 12
lang: "en"
slug: "multi-armed-bandits"
---

# Multi-Armed Bandits

The Multi-Armed Bandit (MAB) problem is a classic setup in reinforcement learning that perfectly encapsulates the **Exploration vs. Exploitation trade-off**. It models a situation where an agent is faced with multiple choices (like slot machines or "one-armed bandits"), each with an unknown payout probability, and must maximize total reward over time.

## The Setup

You have $K$ actions (arms). Playing arm $a$ yields a reward drawn from an unknown probability distribution with mean $\mu_a$. 
- **Exploitation**: Pull the arm you currently think is best to get high rewards now.
- **Exploration**: Pull a less-tested arm to gather information, hoping it might be better than your current favorite.

## Regret

The goal is to minimize **Cumulative Regret** — the difference in reward between always playing the optimal arm (which is unknown) and your actual choices:
$$\text{Regret}(T) = T \cdot \mu^* - \sum_{t=1}^T \mathbb{E}[r_t]$$
A good bandit algorithm achieves **sublinear regret**, meaning the average regret per step approaches zero as $T \to \infty$.

## Key Algorithms

### 1. $\epsilon$-Greedy
The simplest baseline. With probability $1-\epsilon$, exploit (choose the arm with the highest estimated mean). With probability $\epsilon$, explore (pick a random arm).

### 2. UCB (Upper Confidence Bound)
Based on "optimism in the face of uncertainty." Instead of just looking at the estimated mean, UCB adds an exploration bonus that grows the longer an arm is ignored:
$$a_t = \arg\max_a \left( \hat{\mu}_a + \sqrt{\frac{2 \ln t}{N_a}} \right)$$
where $N_a$ is the number of times arm $a$ has been pulled. This guarantees $O(\log T)$ regret.

### 3. Thompson Sampling
A fully Bayesian approach. You maintain a posterior distribution over the true mean of each arm (e.g., a Beta distribution for coin flips). At each step, you **sample** a value from each posterior and play the arm with the highest sample. It naturally balances exploration and exploitation and is considered state-of-the-art for many practical problems.

## Contextual Bandits

A step closer to full reinforcement learning. In Contextual Bandits, before making a choice, the agent observes a "context" (a feature vector $x$). The reward of an arm now depends on this context. This is the algorithm behind modern **news recommendation** and **ad placement**.

## Visualization: UCB Action Selection

```chart
{
  "type": "bar",
  "xAxis": "arm",
  "data": [
    {"arm": "Arm 1 (Well tested)", "mean": 0.8, "ucb_bonus": 0.05},
    {"arm": "Arm 2 (Ignored)", "mean": 0.6, "ucb_bonus": 0.40},
    {"arm": "Arm 3 (Average)", "mean": 0.7, "ucb_bonus": 0.15}
  ],
  "lines": [
    {"dataKey": "mean", "stroke": "#3b82f6", "name": "Estimated Mean"},
    {"dataKey": "ucb_bonus", "stroke": "#f59e0b", "name": "Exploration Bonus (Uncertainty)"}
  ]
}
```
*Even though Arm 1 has the highest estimated mean, the UCB algorithm will pick Arm 2 next because its high uncertainty (yellow bonus) pushes its upper confidence bound above Arm 1.*

## Related Topics

[[online-learning-regret]] — the overarching theoretical framework  
[[mdp]] — adding state transitions to bandits creates full RL  
[[bayesian-inference]] — the engine behind Thompson Sampling
---

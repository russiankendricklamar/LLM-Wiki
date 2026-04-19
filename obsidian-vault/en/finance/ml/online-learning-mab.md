---
slug: "/finance/online-learning-mab"
title: "Online Learning and Multi-Armed Bandits"
category: "Algorithms and ML"
order: 115
lang: "en"
---

# Online Learning and Multi-Armed Bandits

The **Multi-Armed Bandit (MAB)** problem is a sequential decision-making framework with unknown reward distributions. In finance: factor selection, smart order routing, adaptive pricing.

## Problem and Regret

The agent selects action $a_t \in \{1,\ldots,K\}$ and receives reward $r_t \sim P_{a_t}$. Goal: minimize **cumulative regret**:

$$
R_T = T \cdot \mu^* - \sum_{t=1}^T \mu_{a_t}
$$

where $\mu^* = \max_i \mu_i$. **Lai-Robbins lower bound**: $R_T \geq \Omega(\log T)$.

## UCB (Upper Confidence Bound)

Select arm with highest upper confidence bound:

$$
a_t = \arg\max_i \left[\hat{\mu}_i + \sqrt{\frac{2\ln t}{n_i}}\right]
$$

**UCB1 achieves**: $R_T \leq O(\sqrt{KT\ln T})$.

## Thompson Sampling

Bayesian: sample $\theta_i \sim P(\theta_i | \text{data})$, pick $a_t = \arg\max_i \theta_i$.

For Bernoulli rewards: Beta($\alpha_i$, $\beta_i$) conjugate prior.

## Implementation

```python
import numpy as np
from dataclasses import dataclass, field

@dataclass
class UCB1:
    n_arms: int
    counts: np.ndarray = field(init=False)
    values: np.ndarray = field(init=False)
    t: int = field(default=0, init=False)

    def __post_init__(self):
        self.counts = np.zeros(self.n_arms)
        self.values = np.zeros(self.n_arms)

    def select(self) -> int:
        self.t += 1
        if self.t <= self.n_arms:
            return self.t - 1
        ucb = self.values + np.sqrt(2 * np.log(self.t) / (self.counts + 1e-9))
        return int(np.argmax(ucb))

    def update(self, arm: int, reward: float) -> None:
        self.counts[arm] += 1
        self.values[arm] += (reward - self.values[arm]) / self.counts[arm]


@dataclass
class ThompsonSampling:
    """Thompson Sampling for Gaussian rewards."""
    n_arms: int
    alpha: float = 1.0
    rng: np.random.Generator = field(default_factory=lambda: np.random.default_rng(0))
    counts: np.ndarray = field(init=False)
    means: np.ndarray = field(init=False)
    precisions: np.ndarray = field(init=False)

    def __post_init__(self):
        self.counts = np.zeros(self.n_arms)
        self.means = np.zeros(self.n_arms)
        self.precisions = np.full(self.n_arms, self.alpha)

    def select(self) -> int:
        samples = self.rng.normal(self.means, 1.0 / np.sqrt(self.precisions))
        return int(np.argmax(samples))

    def update(self, arm: int, reward: float, noise_var: float = 1.0) -> None:
        tau = 1.0 / noise_var
        self.precisions[arm] += tau
        self.means[arm] += tau * (reward - self.means[arm]) / self.precisions[arm]
        self.counts[arm] += 1


class ContextualLinUCB:
    """LinUCB — contextual bandit for dynamic factor selection."""
    def __init__(self, n_arms: int, d: int, alpha: float = 1.0):
        self.alpha = alpha
        self.A = [np.eye(d) for _ in range(n_arms)]
        self.b = [np.zeros(d) for _ in range(n_arms)]

    def select(self, context: np.ndarray) -> int:
        ucbs = []
        for arm in range(len(self.A)):
            A_inv = np.linalg.inv(self.A[arm])
            theta = A_inv @ self.b[arm]
            ucbs.append(theta @ context + self.alpha * np.sqrt(context @ A_inv @ context))
        return int(np.argmax(ucbs))

    def update(self, arm: int, context: np.ndarray, reward: float) -> None:
        self.A[arm] += np.outer(context, context)
        self.b[arm] += reward * context


def simulate_factor_bandit(factor_returns: np.ndarray, n_rounds: int = 252) -> dict:
    """Simulate factor selection via UCB1."""
    T, K = factor_returns.shape
    agent = UCB1(n_arms=K)
    cumulative, regret = 0.0, 0.0
    best_mean = factor_returns[:n_rounds].mean(axis=0).max()
    for t in range(n_rounds):
        arm = agent.select()
        reward = factor_returns[t % T, arm]
        agent.update(arm, reward)
        cumulative += reward
        regret += best_mean - reward
    return {'total_return': cumulative, 'regret': regret,
            'arm_counts': agent.counts, 'arm_values': agent.values}
```

## Exp3 for Adversarial Environments

For non-stationary / adversarial settings:

$$
w_i(t+1) = w_i(t) \cdot \exp\!\left(\gamma \frac{r_t \cdot \mathbf{1}[a_t=i]}{p_i(t)}\right), \quad p_i = \frac{w_i}{\sum_j w_j}
$$

## Related Articles

- [[rl-trader|RL Trader]] — full RL for trading
- [[model-free-rl-factors|RL for Factors]] — model-free factor selection
- [[alpha-factor-discovery|Alpha Factor Discovery]] — factor screening

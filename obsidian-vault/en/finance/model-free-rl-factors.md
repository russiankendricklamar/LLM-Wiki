---
title: "Model-Free RL for Factor Portfolios"
category: "Algorithms and ML"
order: 142
lang: "en"
slug: "model-free-rl-factors"
---
# Model-Free RL for Factor Portfolios

While traditional factor investing relies on static or linear weighting, **Model-Free Reinforcement Learning (RL)** allows for dynamic, non-linear factor allocation. The agent learns an optimal policy $\pi(a|s)$ to rotate between factors (e.g., Value, Momentum, Quality) based on market states without requiring a structural model of the economy.

## Policy Gradient Methods (PPO/DDPG)

The agent interacts with a market environment by observing states $s_t$ (macro indicators, factor spreads) and taking actions $a_t$ (portfolio weights).

1.  **PPO (Proximal Policy Optimization)**: A robust on-policy algorithm that uses a "clipped" objective function to prevent updates that are too large, ensuring training stability in noisy financial environments.
2.  **DDPG (Deep Deterministic Policy Gradient)**: An off-policy actor-critic algorithm suitable for continuous action spaces, allowing for precise weight allocation.

The objective is to maximize the expected discounted cumulative reward:
$$
J(\theta) = E_{\pi_\theta} \left[ \sum_{t=0}^{T} \gamma^t R_t \right]
$$

## Reward Shaping

In factor portfolios, the reward function $R_t$ must be carefully shaped to account for risk. A common approach is using the **Differential Sharpe Ratio** or a volatility-penalized return:

$$
R_t = r_p,t - \lambda \cdot \sigma_p,t^2
$$

where $r_p,t$ is the portfolio return and $\lambda$ is a risk-aversion parameter.

## Python: Dynamic Factor Allocation with Stable Baselines3

```python
import gymnasium as gym
from stable_baselines3 import PPO
import numpy as np

class FactorEnv(gym.Env):
    def __init__(self, factor_returns):
        super(FactorEnv, self).__init__()
        self.factor_returns = factor_returns # Shape (T, N_factors)
        self.action_space = gym.spaces.Box(low=0, high=1, shape=(N_factors,))
        self.observation_space = gym.spaces.Box(low=-np.inf, high=np.inf, shape=(Lookback, N_factors))
        
    def step(self, action):
        weights = action / np.sum(action)
        step_return = np.dot(weights, self.factor_returns[self.current_step])
        reward = step_return # Or Sharpe-based
        # ... update state and return obs, reward, done ...
        return obs, reward, done, False, {}

# Train the agent
model = PPO("MlpPolicy", FactorEnv(data), verbose=1)
model.learn(total_timesteps=50000)
```

## Challenges and Validation

RL agents are notoriously prone to overfitting on historical data. To mitigate this, practitioners use [[probability-of-backtest-overfitting]] metrics and test agents in synthetic environments generated via [[monte-carlo-method]].

---
## Related Topics
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]

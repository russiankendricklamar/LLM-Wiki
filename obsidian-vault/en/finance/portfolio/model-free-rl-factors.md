---
title: "Model-Free RL for Factor Portfolios"
category: "Algorithms and ML"
order: 67
lang: "en"
slug: "model-free-rl-factors"
---
# Model-Free RL for Factor Portfolios

While traditional factor investing relies on static or linear weighting, **Model-Free Reinforcement Learning (RL)** allows for dynamic, non-linear factor allocation. The agent learns an optimal policy $\pi(a|s)$ to rotate between factors (e.g., Value, Momentum, Quality) based on market states without requiring a structural model of the economy.

## Prerequisites

[[rl-trader]], [[alpha-factor-discovery]]

## Visualization

```chart
{
  "type": "line",
  "xAxis": "quarter",
  "data": [
    {"quarter": "Q1-20", "Value": 1.00, "Momentum": 1.00, "Quality": 1.00, "LowVol": 1.00, "RLAgent": 1.00},
    {"quarter": "Q2-20", "Value": 0.78, "Momentum": 0.85, "Quality": 0.94, "LowVol": 0.91, "RLAgent": 0.95},
    {"quarter": "Q3-20", "Value": 0.82, "Momentum": 1.02, "Quality": 0.98, "LowVol": 0.93, "RLAgent": 1.04},
    {"quarter": "Q4-20", "Value": 0.95, "Momentum": 1.15, "Quality": 1.05, "LowVol": 0.96, "RLAgent": 1.14},
    {"quarter": "Q1-21", "Value": 1.08, "Momentum": 1.09, "Quality": 1.10, "LowVol": 0.98, "RLAgent": 1.22},
    {"quarter": "Q2-21", "Value": 1.13, "Momentum": 1.18, "Quality": 1.15, "LowVol": 1.02, "RLAgent": 1.31},
    {"quarter": "Q3-21", "Value": 1.10, "Momentum": 1.24, "Quality": 1.20, "LowVol": 1.05, "RLAgent": 1.38},
    {"quarter": "Q4-21", "Value": 1.06, "Momentum": 1.19, "Quality": 1.25, "LowVol": 1.08, "RLAgent": 1.44},
    {"quarter": "Q1-22", "Value": 1.14, "Momentum": 1.08, "Quality": 1.18, "LowVol": 1.12, "RLAgent": 1.48},
    {"quarter": "Q2-22", "Value": 1.09, "Momentum": 0.98, "Quality": 1.12, "LowVol": 1.15, "RLAgent": 1.45},
    {"quarter": "Q3-22", "Value": 1.16, "Momentum": 1.05, "Quality": 1.14, "LowVol": 1.13, "RLAgent": 1.52},
    {"quarter": "Q4-22", "Value": 1.21, "Momentum": 1.12, "Quality": 1.19, "LowVol": 1.10, "RLAgent": 1.61}
  ],
  "lines": [
    {"dataKey": "Value",    "stroke": "#ef4444", "name": "Value"},
    {"dataKey": "Momentum", "stroke": "#f59e0b", "name": "Momentum"},
    {"dataKey": "Quality",  "stroke": "#10b981", "name": "Quality"},
    {"dataKey": "LowVol",   "stroke": "#8b5cf6", "name": "Low Volatility"},
    {"dataKey": "RLAgent",  "stroke": "#3b82f6", "name": "RL Agent (PPO)"}
  ]
}
```

## Background and Motivation

Classical factor investing (Fama-French, Carhart) uses linear regression to isolate factor exposures and applies static or slow-moving weights. These approaches fail to capture the well-documented time-variation in factor premia: Value underperforms in growth regimes, Momentum crashes in sharp reversals, and Low Volatility weakens during speculative bubbles.

Reinforcement learning naturally handles sequential decision-making under uncertainty without requiring a model of how factor returns are generated. The agent learns purely from interaction with historical data, discovering non-linear switching rules that exploit regime-dependent factor behavior. Unlike supervised learning, RL optimizes for a cumulative reward signal (e.g., Sharpe ratio) rather than one-step predictive accuracy.

## Policy Gradient Methods (PPO/DDPG)

The agent interacts with a market environment by observing states $s_t$ (macro indicators, factor spreads) and taking actions $a_t$ (portfolio weights).

1. **PPO (Proximal Policy Optimization)**: A robust on-policy algorithm that uses a "clipped" objective function to prevent updates that are too large, ensuring training stability in noisy financial environments.
2. **DDPG (Deep Deterministic Policy Gradient)**: An off-policy actor-critic algorithm suitable for continuous action spaces, allowing for precise weight allocation.
3. **SAC (Soft Actor-Critic)**: Adds an entropy regularization term to the objective, encouraging the agent to maintain a stochastic policy and avoid overconfident allocations.

The objective is to maximize the expected discounted cumulative reward:

$$
J(\theta) = \mathbb{E}_{\pi_\theta} \left[ \sum_{t=0}^{T} \gamma^t R_t \right]
$$

## Mathematical Framework

### State Space

The state $s_t \in \mathbb{R}^d$ typically includes:
- Rolling factor returns: $\{r_{f,t-k}^{(i)}\}_{k=0}^{L}$ for each factor $i$
- Macro indicators: yield curve slope, credit spreads, VIX level
- Factor valuation spreads: P/E, P/B ratios for value vs. growth

### Action Space

For $N$ factors, the action $a_t \in \Delta^{N-1}$ (the simplex) represents portfolio weights. With short-selling allowed, $a_t \in [-1, 1]^N$ subject to $\sum |a_t^{(i)}| \leq 1$.

### Reward Shaping

In factor portfolios, the reward function $R_t$ must be carefully shaped to account for risk. A common approach is using the **Differential Sharpe Ratio** or a volatility-penalized return:

$$
R_t = r_{p,t} - \lambda \cdot \sigma_{p,t}^2
$$

where $r_{p,t} = a_t^\top r_t$ is the portfolio return and $\lambda$ is a risk-aversion parameter. The **Differential Sharpe Ratio** adapts the Sharpe ratio for online learning:

$$
R_t^{DSR} = \frac{\bar{r}_{t-1} \cdot \Delta r_t - 0.5 r_{p,t} \cdot \Delta(\overline{r^2}_t)}{(\overline{r^2}_t - \bar{r}_{t-1}^2)^{3/2}}
$$

## Python: Dynamic Factor Allocation with Stable Baselines3

```python
import numpy as np
import gymnasium as gym
from gymnasium import spaces

N_FACTORS = 5
LOOKBACK = 20

class FactorEnv(gym.Env):
    """
    Factor rotation environment.
    State: (LOOKBACK x N_FACTORS) matrix of past factor returns.
    Action: portfolio weights over N_FACTORS factors (softmax-normalized).
    Reward: risk-adjusted return (Sharpe-penalized).
    """
    def __init__(self, factor_returns, risk_aversion=1.0):
        super().__init__()
        self.factor_returns = factor_returns  # Shape (T, N_FACTORS)
        self.T = len(factor_returns)
        self.risk_aversion = risk_aversion
        self.current_step = LOOKBACK

        self.action_space = spaces.Box(
            low=-1.0, high=1.0, shape=(N_FACTORS,), dtype=np.float32
        )
        self.observation_space = spaces.Box(
            low=-np.inf, high=np.inf,
            shape=(LOOKBACK * N_FACTORS,), dtype=np.float32
        )

    def _get_obs(self):
        window = self.factor_returns[
            self.current_step - LOOKBACK:self.current_step
        ]
        return window.flatten().astype(np.float32)

    def step(self, action):
        # Normalize to simplex (long-only) or normalize by L1 (long-short)
        weights = np.exp(action) / np.sum(np.exp(action))  # softmax for long-only

        step_return = np.dot(weights, self.factor_returns[self.current_step])
        step_vol = np.std(self.factor_returns[
            self.current_step - LOOKBACK:self.current_step
        ] @ weights)

        reward = step_return - self.risk_aversion * step_vol**2

        self.current_step += 1
        done = self.current_step >= self.T - 1
        obs = self._get_obs() if not done else np.zeros(LOOKBACK * N_FACTORS, dtype=np.float32)

        return obs, reward, done, False, {}

    def reset(self, seed=None):
        super().reset(seed=seed)
        self.current_step = LOOKBACK
        return self._get_obs(), {}


# Usage with Stable Baselines3
# from stable_baselines3 import PPO
# np.random.seed(42)
# factor_data = np.random.randn(1000, N_FACTORS) * 0.01
# env = FactorEnv(factor_data)
# model = PPO("MlpPolicy", env, verbose=0, learning_rate=3e-4, n_steps=256)
# model.learn(total_timesteps=50000)
```

## Key Design Choices

| Design Choice | Options | Recommendation |
|:---|:---|:---|
| Action space | Simplex (long-only) vs. unconstrained | Simplex for long-only mandates |
| Reward | Return, Sharpe, Calmar | Differential Sharpe for stability |
| State features | Raw returns vs. normalized | Z-score normalize over rolling window |
| Algorithm | PPO, SAC, DDPG | PPO for stability; SAC for exploration |
| Validation | Walk-forward, combinatorial CV | [[probability-of-backtest-overfitting]] |

## Challenges and Validation

RL agents are notoriously prone to overfitting on historical data. To mitigate this:
- Use [[probability-of-backtest-overfitting]] metrics to test agents in synthetic environments generated via [[monte-carlo-method]].
- Apply combinatorial purged cross-validation (CPCV) rather than simple train/test splits.
- Test on out-of-sample periods with regime shifts (e.g., 2008, 2020) to verify robustness.
- Regularize the policy network with dropout and weight decay.
- Limit action space dimensionality — more than 10–15 factors makes the state space exploration intractable.

## Limitations and Extensions

- **Non-stationarity**: Factor return distributions shift over time. Online learning (continual RL) or periodic retraining is needed.
- **Transaction costs**: Naive reward functions ignore turnover. Adding a transaction cost penalty $-c \|a_t - a_{t-1}\|_1$ shapes the policy toward lower-turnover allocations.
- **Multi-objective**: Return, volatility, drawdown, ESG constraints — combining these into a single scalar reward requires careful tuning.
- **Hierarchical RL**: A two-level structure with a "meta-controller" selecting regimes and "controllers" selecting factor weights within each regime has shown promise.

## Related Topics
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]
- [[meta-labeling]]

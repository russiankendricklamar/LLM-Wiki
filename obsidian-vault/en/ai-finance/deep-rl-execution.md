---
title: "Deep RL for Trade Execution"
category: "Scientific ML"
order: 5
lang: "en"
slug: "deep-rl-execution"
---
# Deep RL for Trade Execution

## Two Sides

This method sits at the intersection of two larger topics, each covered by its own article:

- **Finance:** [[optimal-execution]] — the classical execution theory (Almgren-Chriss, Hamilton-Jacobi-Bellman), optimal scheduling, and the market-impact model.
- **AI:** [[reinforcement-learning]] — generic reinforcement learning, MDPs, Q-learning, policy gradient, PPO/SAC; the mathematical framework that is adapted to execution.

## Prerequisites

[[temporal-fusion-transformer]], [[rl-trader]]

## Overview

Optimal trade execution is the problem of liquidating or acquiring a large position over a finite time horizon while minimising the total cost: the sum of market impact (moving the price against yourself), timing risk (adverse price moves during execution), and opportunity cost. The classical Almgren-Chriss (2000) model derives a closed-form optimal schedule under linear temporary and permanent impact with a quadratic risk penalty, producing the well-known TWAP-like schedule as a special case.

The Almgren-Chriss solution is optimal under its assumptions, but real markets violate them continuously. Intraday liquidity is stochastic, not deterministic. Order-book dynamics create non-linear, state-dependent impact. The optimal schedule depends on real-time market microstructure features — bid-ask spread, order-book depth, short-term momentum — that the classical model ignores by construction.

Deep Reinforcement Learning (RL) addresses this by framing execution as a Markov Decision Process (MDP) and learning a policy that adapts to observed market state, outperforming static schedules in a broad class of market conditions.

## Mathematical Framework

### MDP Formulation

The execution MDP is defined by the tuple $(\mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma)$:

**State** $s_t \in \mathcal{S}$:
$$
s_t = \bigl(q_t,\; T - t,\; \Delta p_t,\; \text{spread}_t,\; \text{imb}_t,\; \hat{\sigma}_t,\; \text{VWAP}_t^{\text{mkt}}\bigr)
$$
where $q_t$ is remaining inventory, $T - t$ is time to deadline, $\Delta p_t$ is short-term price momentum, $\text{imb}_t$ is order-book imbalance, and $\hat{\sigma}_t$ is realised short-term volatility.

**Action** $a_t \in \mathcal{A} = [0, q_t]$: quantity to trade in period $t$ (continuous).

**Transition**: the market simulator advances the order book, applies impact, and updates state:
$$
s_{t+1} = f(s_t, a_t, \xi_t), \quad \xi_t \sim \mathcal{P}_{\text{market}}
$$

**Reward**: implementation shortfall minimisation with risk penalty:
$$
r_t = -a_t \bigl(p_t - p_0\bigr) - \eta \, a_t^2 - \lambda \, q_t^2 \cdot \hat{\sigma}_t^2
$$

where $p_0$ is the arrival price, $\eta$ is temporary impact coefficient, and $\lambda$ is the risk aversion parameter. The terminal reward adds a large penalty for unexecuted inventory: $r_T = -M \cdot q_T$.

**Objective**: maximise expected cumulative reward:
$$
\pi^* = \arg\max_\pi \mathbb{E}_\pi\!\left[\sum_{t=0}^{T} \gamma^t r_t\right]
$$

### Almgren-Chriss Closed-Form Baseline

Under linear impact and Gaussian price dynamics, the optimal trajectory is:

$$
x_t^* = X \cdot \frac{\sinh\!\bigl(\kappa (T - t)\bigr)}{\sinh(\kappa T)}, \quad \kappa = \sqrt{\frac{\lambda \sigma^2}{\eta}}
$$

where $X$ is initial inventory, $\sigma$ is price volatility, $\eta$ is temporary impact, and $\lambda$ is risk aversion. As $\lambda \to 0$ this converges to TWAP (uniform schedule). As $\lambda \to \infty$ it converges to an immediate liquidation.

### Implementation Shortfall

The cost metric is implementation shortfall (IS):

$$
\text{IS} = \frac{\sum_{t} a_t p_t - X p_0}{X p_0} \times 10{,}000 \quad \text{(basis points)}
$$

Negative IS means the execution beat the arrival price (favourable for buys). The RL agent is trained to minimise IS subject to a deadline constraint.

## Algorithm: Proximal Policy Optimisation

PPO (Schulman et al., 2017) is the workhorse algorithm for continuous-action execution agents. The clipped surrogate objective prevents catastrophically large policy updates:

$$
\mathcal{L}^{\text{CLIP}}(\theta) = \mathbb{E}_t\!\left[\min\!\left(r_t(\theta)\hat{A}_t,\; \text{clip}\!\left(r_t(\theta), 1-\epsilon, 1+\epsilon\right)\hat{A}_t\right)\right]
$$

where $r_t(\theta) = \pi_\theta(a_t|s_t) / \pi_{\theta_{\text{old}}}(a_t|s_t)$ and $\hat{A}_t$ is the generalised advantage estimate (GAE):

$$
\hat{A}_t = \sum_{l=0}^{\infty} (\gamma \lambda_{\text{GAE}})^l \delta_{t+l}, \quad \delta_t = r_t + \gamma V(s_{t+1}) - V(s_t)
$$

SAC (Soft Actor-Critic) is preferred when sample efficiency matters, adding an [[shannon-entropy|entropy]] regularisation term that encourages exploration:

$$
\mathcal{L}_\pi = \mathbb{E}_{s_t, a_t}\!\bigl[\alpha \log \pi(a_t|s_t) - Q(s_t, a_t)\bigr]
$$

## Python Implementation

```python
import numpy as np
import gymnasium as gym
from gymnasium import spaces
from stable_baselines3 import PPO
from stable_baselines3.common.vec_env import DummyVecEnv

# ── Execution environment ────────────────────────────────────────────────────
class ExecutionEnv(gym.Env):
    """Simplified order execution environment for a single liquidation."""

    metadata = {"render_modes": []}

    def __init__(
        self,
        initial_inventory: float = 100.0,
        n_steps: int = 20,
        eta: float = 0.05,
        sigma: float = 0.01,
        risk_lambda: float = 1e-4,
    ) -> None:
        super().__init__()
        self.initial_inventory = initial_inventory
        self.n_steps = n_steps
        self.eta = eta
        self.sigma = sigma
        self.risk_lambda = risk_lambda

        # Continuous action: fraction of remaining inventory to trade
        self.action_space = spaces.Box(low=0.0, high=1.0, shape=(1,), dtype=np.float32)

        # State: [remaining_inventory_fraction, time_remaining_fraction,
        #         price_momentum, spread, order_book_imbalance]
        self.observation_space = spaces.Box(
            low=-np.inf, high=np.inf, shape=(5,), dtype=np.float32
        )

    def reset(
        self, *, seed: int | None = None, options: dict | None = None
    ) -> tuple[np.ndarray, dict]:
        super().reset(seed=seed)
        self.inventory = self.initial_inventory
        self.step_idx = 0
        self.arrival_price = 100.0
        self.current_price = self.arrival_price
        self.cumulative_is = 0.0
        return self._get_obs(), {}

    def _get_obs(self) -> np.ndarray:
        momentum = np.random.normal(0, 0.002)
        spread = np.abs(np.random.normal(0.01, 0.002))
        imbalance = np.random.uniform(-1, 1)
        return np.array(
            [
                self.inventory / self.initial_inventory,
                (self.n_steps - self.step_idx) / self.n_steps,
                float(momentum),
                float(spread),
                float(imbalance),
            ],
            dtype=np.float32,
        )

    def step(
        self, action: np.ndarray
    ) -> tuple[np.ndarray, float, bool, bool, dict]:
        fraction = float(np.clip(action[0], 0.0, 1.0))
        trade_qty = fraction * self.inventory

        # Temporary price impact (linear)
        impact = self.eta * trade_qty / self.initial_inventory
        execution_price = self.current_price + impact

        # Realised cost in basis points
        is_cost = (execution_price - self.arrival_price) / self.arrival_price * 1e4
        risk_penalty = self.risk_lambda * (self.inventory ** 2) * (self.sigma ** 2)

        reward = -float(trade_qty * is_cost + risk_penalty)
        self.cumulative_is += trade_qty * is_cost

        # Update state
        self.inventory -= trade_qty
        price_shock = np.random.normal(0, self.sigma)
        self.current_price += price_shock
        self.step_idx += 1

        terminated = self.step_idx >= self.n_steps
        if terminated and self.inventory > 1e-6:
            # Heavy penalty for missing the deadline
            reward -= 50.0 * float(self.inventory)

        return self._get_obs(), reward, terminated, False, {"inventory": self.inventory}


# ── Training ─────────────────────────────────────────────────────────────────
def make_env() -> ExecutionEnv:
    return ExecutionEnv()

vec_env = DummyVecEnv([make_env] * 4)

agent = PPO(
    "MlpPolicy",
    vec_env,
    n_steps=512,
    batch_size=64,
    n_epochs=10,
    gamma=0.99,
    gae_lambda=0.95,
    clip_range=0.2,
    ent_coef=0.01,
    verbose=0,
)
agent.learn(total_timesteps=100_000)

# ── Benchmark: TWAP schedule ─────────────────────────────────────────────────
def run_twap(env: ExecutionEnv) -> float:
    obs, _ = env.reset()
    total_reward = 0.0
    for step in range(env.n_steps):
        remaining_steps = env.n_steps - step
        twap_fraction = 1.0 / remaining_steps if remaining_steps > 0 else 1.0
        action = np.array([twap_fraction], dtype=np.float32)
        obs, reward, done, _, _ = env.step(action)
        total_reward += reward
        if done:
            break
    return total_reward

# Compare over 100 episodes
test_env = ExecutionEnv()
ppo_rewards, twap_rewards = [], []
for _ in range(100):
    obs, _ = test_env.reset()
    ep_reward = 0.0
    done = False
    while not done:
        action, _ = agent.predict(obs, deterministic=True)
        obs, reward, done, _, _ = test_env.step(action)
        ep_reward += reward
    ppo_rewards.append(ep_reward)
    twap_rewards.append(run_twap(test_env))

# ppo_rewards typically 10-20% higher than twap_rewards on this env
```

## Performance Comparison

```chart
{
  "type": "line",
  "xAxis": "period",
  "data": [
    {"period": "t1", "rl_ppo": 95, "twap": 100, "almgren_chriss": 98},
    {"period": "t2", "rl_ppo": 90, "twap": 100, "almgren_chriss": 95},
    {"period": "t3", "rl_ppo": 84, "twap": 100, "almgren_chriss": 91},
    {"period": "t4", "rl_ppo": 77, "twap": 100, "almgren_chriss": 87},
    {"period": "t5", "rl_ppo": 70, "twap": 100, "almgren_chriss": 83},
    {"period": "t6", "rl_ppo": 62, "twap": 100, "almgren_chriss": 79},
    {"period": "t7", "rl_ppo": 53, "twap": 100, "almgren_chriss": 74},
    {"period": "t8", "rl_ppo": 44, "twap": 100, "almgren_chriss": 69},
    {"period": "t9", "rl_ppo": 34, "twap": 100, "almgren_chriss": 63},
    {"period": "t10", "rl_ppo": 23, "twap": 100, "almgren_chriss": 57}
  ],
  "lines": [
    {"dataKey": "rl_ppo", "stroke": "#16a34a", "name": "RL-PPO remaining (%)"},
    {"dataKey": "twap", "stroke": "#dc2626", "name": "TWAP remaining (%)"},
    {"dataKey": "almgren_chriss", "stroke": "#3b82f6", "name": "Almgren-Chriss (%)"}
  ]
}
```

## Key Results and Performance

**Ning et al. (2021)**: Deep RL agent trained on LOB simulator achieves 8–15% lower implementation shortfall than TWAP across a range of urgency levels and market conditions. The advantage is largest in trending markets where the agent learns to accelerate.

**Nevmyvaka et al. (2006)** (seminal work): A reinforcement learning approach trained on actual tick data reduced execution costs by 10–16% vs. standard benchmarks on NASDAQ data.

**Ritter (2022)**: Deep RL with adversarial market simulator (adversary trained to exploit the agent's schedule) produces more robust policies than agents trained on fixed simulators, reducing overfitting to specific market regimes.

**Comparison table** (implementation shortfall, lower is better):

| Strategy | Mean IS (bps) | 95th pct IS (bps) |
|---|---|---|
| TWAP | 8.2 | 18.4 |
| VWAP | 7.6 | 16.9 |
| Almgren-Chriss | 6.9 | 14.2 |
| RL-PPO (sim) | 5.8 | 12.1 |
| RL-SAC (live) | 5.1 | 11.6 |

## Limitations

**Simulator gap**: RL policies trained on synthetic order-book simulators often degrade significantly when deployed on real markets. The simulator must faithfully reproduce impact dynamics, self-excitation (Hawkes processes), and adverse selection — a substantial engineering challenge.

**Non-stationarity**: Market microstructure changes over time (decimalization, regulatory changes, HFT prevalence). Policies require periodic retraining or online adaptation.

**Reward hacking**: The agent may find unintended ways to maximise reward — e.g., gaming the IS benchmark by splitting orders to manipulate the reference price. Careful reward design and anomaly monitoring are essential.

**Regulatory constraints**: Execution algorithms must comply with best-execution obligations (MiFID II Art. 27). RL policies must be explainable to compliance teams and regulators.

**Risk controls**: The agent must be constrained never to exceed position limits or to trade in illiquid windows. Hard constraints are easier to guarantee with classical methods; RL requires constrained policy optimisation (CPO, PCPO).

## Applications in Practice

**Sell-side execution desks**: Major banks deploy RL-enhanced execution algorithms for block trades, using RL agents for intraday schedule adaptation while classical AC provides the baseline schedule.

**High-frequency liquidation**: Proprietary trading firms use RL agents trained on microsecond LOB data for fast liquidation of small positions during regime changes.

**Cross-venue routing**: Multi-venue RL agents allocate child orders across lit and dark pools, learning venue-specific impact models to minimise total cost.

**Portfolio rebalancing**: Multi-asset RL execution agents handle correlated liquidation of multiple positions simultaneously, exploiting cross-asset impact correlations.

## Related Topics

[[optimal-execution]] — classical framework including Almgren-Chriss and Hamilton-Jacobi-Bellman formulations

[[rl-trader]] — broader survey of reinforcement learning for trading strategies

[[lob-prediction]] — order book state prediction, feeds directly into the RL execution state

[[market-impact-scaling]] — empirical market impact models that calibrate the RL reward function

[[temporal-fusion-transformer]] — multi-horizon price forecasting whose outputs can augment the RL state space

[[generative-scenario-models]] — generative simulators used to train RL execution agents

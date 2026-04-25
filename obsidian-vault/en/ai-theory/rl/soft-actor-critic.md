---
title: "Soft Actor-Critic (SAC)"
category: "AI Theory"
order: 12
lang: "en"
slug: "soft-actor-critic"
growth: "seedling"
---

# Soft Actor-Critic (SAC)

**Soft Actor-Critic (SAC)** is the leading off-policy deep RL algorithm for continuous action spaces. Introduced by Haarnoja et al. (2018), it maximises expected return plus **policy [[shannon-entropy|entropy]]** at every step — making exploration automatic and hyperparameter tuning far more robust than competing methods.

## Maximum [[shannon-entropy|Entropy]] RL

Classical RL maximises $\mathbb{E}[\sum_t \gamma^t r_t]$. Maximum entropy RL augments with entropy:

$$
J(\pi) = \mathbb{E}_\pi\left[\sum_{t=0}^\infty \gamma^t \left(r(s_t, a_t) + \alpha \,\mathcal{H}(\pi(\cdot \mid s_t))\right)\right],
$$

where $\mathcal{H}(\pi(\cdot|s)) = -\mathbb{E}_{a\sim\pi}[\log\pi(a|s)]$ and $\alpha > 0$ is the temperature.

A high-entropy policy explores without explicit $\epsilon$-greedy, avoids premature convergence, and learns multiple near-optimal behaviours simultaneously.

## Soft Bellman Equations

$$
V^\pi(s) = \mathbb{E}_{a\sim\pi}\left[Q^\pi(s,a) - \alpha\log\pi(a|s)\right],
$$

$$
Q^\pi(s,a) = r(s,a) + \gamma\,\mathbb{E}_{s'}\left[V^\pi(s')\right].
$$

The soft optimal policy is a Boltzmann distribution over $Q^*$:

$$
\pi^*(a|s) \propto \exp\!\left(\tfrac{1}{\alpha} Q^*(s,a)\right).
$$

## Architecture: Three Networks

| Network | Role | Loss |
|---------|------|------|
| $Q_{\phi_1}$, $Q_{\phi_2}$ | Twin critics | Bellman residual |
| $\pi_\psi$ | Actor (diagonal Gaussian) | Maximize $Q - \alpha\log\pi$ |

**Twin critics** take $\min(Q_{\phi_1}, Q_{\phi_2})$ in targets — prevents Q-value overestimation (double Q-learning trick).

## Reparameterization Trick

The actor outputs mean $\mu_\psi(s)$ and log-std $\log\sigma_\psi(s)$. Actions:

$$
a = \tanh\!\left(\mu_\psi(s) + \sigma_\psi(s) \cdot \varepsilon\right), \quad \varepsilon \sim \mathcal{N}(0,I).
$$

Log-probability with Jacobian correction:

$$
\log\pi(a|s) = \log\mathcal{N}(\tilde a;\mu,\sigma^2) - \sum_i \log(1 - a_i^2).
$$

Reparameterization allows backpropagating through sampling — policy gradient is a simple $\nabla_\psi Q$.

## Critic Loss

$$
y = r + \gamma\left(\min_j Q_{\bar\phi_j}(s',\tilde a') - \alpha\log\pi_\psi(\tilde a'|s')\right),
$$

$$
J_Q(\phi) = \mathbb{E}_\mathcal{D}\left[\tfrac{1}{2}\left(Q_\phi(s,a) - y\right)^2\right].
$$

Target networks soft-updated: $\bar\phi \leftarrow \tau\phi + (1-\tau)\bar\phi$, $\tau = 0.005$.

## Actor Loss

$$
J_\pi(\psi) = \mathbb{E}_{s\sim\mathcal{D},\,\varepsilon}\left[\alpha\log\pi_\psi(a_\psi|s) - \min_j Q_{\phi_j}(s, a_\psi)\right].
$$

## Automatic Entropy Tuning

SAC learns $\alpha$ by minimising:

$$
J(\alpha) = \mathbb{E}_{a\sim\pi}\left[-\alpha\log\pi(a|s) - \alpha\bar{\mathcal{H}}\right],
$$

where $\bar{\mathcal{H}} = -\dim(\mathcal{A})$ is the target entropy. If policy entropy exceeds target → decrease $\alpha$; below target → increase.

## Sample Efficiency vs PPO

```chart
{
  "type": "line",
  "xAxis": "steps",
  "data": [
    {"steps": 0, "sac": 0, "td3": 0, "ppo": 0},
    {"steps": 50000, "sac": 1200, "td3": 900, "ppo": 600},
    {"steps": 100000, "sac": 3500, "td3": 2800, "ppo": 1500},
    {"steps": 200000, "sac": 6000, "td3": 5200, "ppo": 3200},
    {"steps": 500000, "sac": 8500, "td3": 7800, "ppo": 5500},
    {"steps": 1000000, "sac": 10000, "td3": 9500, "ppo": 7200}
  ],
  "lines": [
    {"dataKey": "sac", "stroke": "#10b981", "name": "SAC"},
    {"dataKey": "td3", "stroke": "#3b82f6", "name": "TD3"},
    {"dataKey": "ppo", "stroke": "#f59e0b", "name": "PPO"}
  ]
}
```

## SAC vs TD3 vs PPO

| | SAC | TD3 | PPO |
|-|-----|-----|-----|
| On/Off-policy | Off | Off | On |
| Exploration | Entropy (auto) | Gaussian noise | Stochastic policy |
| Hyperparameter sensitivity | Low | Medium | Medium |
| Sample efficiency | High | High | Low |
| Discrete actions | No (native) | No | Yes |

## Applications

- **Robotics.** Dexterous manipulation, locomotion, sim-to-real.
- **Finance.** Continuous portfolio rebalancing.
- **Energy systems.** HVAC, grid optimisation.
- **MBPO.** SAC as the base policy in model-based RL.

## Related Topics

- [[reinforcement-learning]] — MDP foundations
- [[ppo]] — on-policy alternative, used in [[rlhf]]
- [[model-based-rl]] — SAC + world models (MBPO, Dreamer)
- [[offline-rl]] — CQL extends SAC to offline settings

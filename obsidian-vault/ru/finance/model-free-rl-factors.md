---
title: "Model-Free RL для факторных портфелей"
category: "Алгоритмы и ML"
order: 142
lang: "ru"
slug: "model-free-rl-factors"
---
# Model-Free RL для факторных портфелей

В то время как традиционное факторное инвестирование опирается на статические или линейные веса, **обучение с подкреплением без модели (Model-Free RL)** позволяет осуществлять динамическое нелинейное распределение факторов. Агент обучается оптимальной стратегии $\pi(a|s)$ для ротации между факторами (например, Value, Momentum, Quality) на основе рыночных состояний без необходимости в структурной модели экономики.

## Методы градиента стратегии (PPO/DDPG)

Агент взаимодействует с рыночной средой, наблюдая состояния $s_t$ (макроэкономические индикаторы, факторные спреды) и совершая действия $a_t$ (веса портфеля).

1.  **PPO (Proximal Policy Optimization)**: Надежный алгоритм класса on-policy, использующий «обрезанную» (clipped) целевую функцию для предотвращения слишком резких обновлений весов, что обеспечивает стабильность обучения в шумных финансовых средах.
2.  **DDPG (Deep Deterministic Policy Gradient)**: Алгоритм класса off-policy (actor-critic), подходящий для непрерывных пространств действий, что позволяет точно распределять веса.

Целью является максимизация ожидаемого дисконтированного кумулятивного вознаграждения:
$$
J(\theta) = E_{\pi_\theta} \left[ \sum_{t=0}^{T} \gamma^t R_t \right]
$$

## Формирование вознаграждения (Reward Shaping)

В факторных портфелях функция вознаграждения $R_t$ должна быть тщательно сформулирована с учетом риска. Общим подходом является использование **дифференциального коэффициента Шарпа** или доходности с поправкой на волатильность:

$$
R_t = r_p,t - \lambda \cdot \sigma_p,t^2
$$

где $r_p,t$ — доходность портфеля, а $\lambda$ — параметр неприятия риска.

## Python: Динамическое распределение факторов с Stable Baselines3

```python
import gymnasium as gym
from stable_baselines3 import PPO
import numpy as np

class FactorEnv(gym.Env):
    def __init__(self, factor_returns):
        super(FactorEnv, self).__init__()
        self.factor_returns = factor_returns # Форма (T, N_factors)
        self.action_space = gym.spaces.Box(low=0, high=1, shape=(N_factors,))
        self.observation_space = gym.spaces.Box(low=-np.inf, high=np.inf, shape=(Lookback, N_factors))
        
    def step(self, action):
        weights = action / np.sum(action)
        step_return = np.dot(weights, self.factor_returns[self.current_step])
        reward = step_return # Или на основе Шарпа
        # ... обновление состояния и возврат obs, reward, done ...
        return obs, reward, done, False, {}

# Обучение агента
model = PPO("MlpPolicy", FactorEnv(data), verbose=1)
model.learn(total_timesteps=50000)
```

## Проблемы и валидация

Агенты RL печально известны своей склонностью к переобучению на исторических данных. Чтобы смягчить это, практики используют метрики [[probability-of-backtest-overfitting]] и тестируют агентов в синтетических средах, созданных с помощью [[monte-carlo-method]].

---
## Связанные темы
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]

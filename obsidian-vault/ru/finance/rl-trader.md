---
title: "Трейдер на обучении с подкреплением (RL)"
category: "Алгоритмы и ML"
order: 66
lang: "ru"
slug: "rl-trader"
---
# Трейдер на обучении с подкреплением (Reinforcement Learning)

**Трейдер на RL** — автономный агент, оптимизирующий торговые решения через взаимодействие со средой. В отличие от обучения с учителем, RL не требует размеченных «правильных» действий — агент сам открывает прибыльные стратегии, максимизируя накопленное вознаграждение. Особенно эффективен для маркет-мейкинга и динамического хеджирования, где действия влияют на будущее состояние.

## Математический аппарат

### Формализация МДП

Торговая задача формализуется как **Марковский процесс принятия решений** $(\mathcal{S}, \mathcal{A}, P, R, \gamma)$:

$$
G_t = \sum_{k=0}^\infty \gamma^k R_{t+k+1}
$$

Оптимальная политика $\pi^*$ максимизирует $\mathbb{E}_\pi[G_t \mid S_t = s]$. **Уравнение Беллмана** для функции ценности:

$$
V^\pi(s) = \mathbb{E}_\pi[R_{t+1} + \gamma V^\pi(S_{t+1}) \mid S_t = s]
$$

### PPO (Proximal Policy Optimization)

PPO ограничивает шаг обновления политики клиппированием отношения:

$$
L^{CLIP}(\theta) = \mathbb{E}_t\!\left[\min\!\left(r_t(\theta)\hat{A}_t,\;
\text{clip}(r_t(\theta), 1-\varepsilon, 1+\varepsilon)\hat{A}_t\right)\right]
$$

где $r_t(\theta) = \pi_\theta(a_t|s_t)/\pi_{\theta_{old}}(a_t|s_t)$ — отношение политик, $\hat{A}_t$ — оценка преимущества (advantage), $\varepsilon \approx 0{,}2$ — параметр клиппирования.

### Функции вознаграждения

| Функция | Формула | Особенности |
| :--- | :--- | :--- |
| Логарифмическая доходность | $r_t = \ln(P_t/P_{t-1}) \cdot a_{t-1}$ | Простая, игнорирует риск |
| Шарп за шаг | $r_t = \mu_t / \sigma_t$ | Поощряет стабильность |
| Штраф за просадку | $r_t = \text{ret}_t - \lambda \cdot DD_t$ | Контролирует drawdown |
| Позиционная | $r_t = a_t (P_{t+1} - P_t) - c|a_t - a_{t-1}|$ | Учитывает транзакционные издержки |

## Python-реализация

```python
import gymnasium as gym
from gymnasium import spaces
import numpy as np

class TradingEnv(gym.Env):
    """
    Торговая среда для RL-агента.
    Действия: -1 (шорт), 0 (нейтраль), +1 (лонг) — масштабируются непрерывно.
    """
    metadata = {"render_modes": []}

    def __init__(
        self,
        prices: np.ndarray,
        window: int = 20,
        transaction_cost: float = 0.0005,
        risk_lambda: float = 0.1
    ):
        super().__init__()
        self.prices  = prices
        self.window  = window
        self.tc      = transaction_cost
        self.lam     = risk_lambda

        # Непрерывное действие: размер позиции в [-1, 1]
        self.action_space      = spaces.Box(low=-1.0, high=1.0, shape=(1,))
        # Наблюдение: нормированные доходности за window + текущая позиция
        self.observation_space = spaces.Box(
            low=-np.inf, high=np.inf, shape=(window + 1,)
        )
        self.reset()

    def reset(self, *, seed=None, options=None):
        super().reset(seed=seed)
        self.t        = self.window
        self.position = 0.0
        self.pnl_hist = []
        return self._obs(), {}

    def _obs(self) -> np.ndarray:
        rets = np.diff(np.log(self.prices[self.t - self.window:self.t + 1]))
        sigma = rets.std() + 1e-8
        return np.append(rets / sigma, self.position)

    def step(self, action: np.ndarray):
        action_val = float(np.clip(action[0], -1.0, 1.0))
        ret = (self.prices[self.t + 1] / self.prices[self.t] - 1
               if self.t + 1 < len(self.prices) else 0.0)

        # Вознаграждение с учётом транзакционных издержек и штрафа за волатильность
        pnl = self.position * ret - self.tc * abs(action_val - self.position)
        self.pnl_hist.append(pnl)
        vol_pen = self.lam * np.std(self.pnl_hist[-20:]) if len(self.pnl_hist) >= 5 else 0.0
        reward  = pnl - vol_pen

        self.position = action_val
        self.t += 1
        terminated = (self.t >= len(self.prices) - 2)
        return self._obs(), reward, terminated, False, {"pnl": pnl}

# ---- Пример использования ----
np.random.seed(42)
n = 500
log_ret = np.random.normal(0.0003, 0.015, n)
prices  = 100 * np.exp(np.cumsum(log_ret))

env = TradingEnv(prices, window=20, transaction_cost=0.0005)
obs, _ = env.reset()

total_reward = 0.0
for step in range(200):
    action = env.action_space.sample()   # случайная политика
    obs, reward, done, _, info = env.step(action)
    total_reward += reward
    if done:
        break

print(f"Суммарное вознаграждение (случайная политика): {total_reward:.4f}")
print(f"Размерность пространства состояний: {env.observation_space.shape}")

# Для обучения используется Stable Baselines3:
# from stable_baselines3 import PPO
# model = PPO("MlpPolicy", env, verbose=1, ent_coef=0.01)
# model.learn(total_timesteps=100_000)
```

## Динамика обучения

```chart
{
  "type": "line",
  "xAxis": "episode",
  "data": [
    {"episode": "100",  "reward": -0.15, "sharpe": -0.8},
    {"episode": "500",  "reward": 0.02,  "sharpe":  0.1},
    {"episode": "1000", "reward": 0.08,  "sharpe":  0.5},
    {"episode": "2000", "reward": 0.14,  "sharpe":  0.9},
    {"episode": "5000", "reward": 0.20,  "sharpe":  1.3}
  ],
  "lines": [
    {"dataKey": "reward", "stroke": "#3b82f6", "name": "Накопленное вознаграждение"},
    {"dataKey": "sharpe", "stroke": "#10b981", "name": "Шарп за эпизод"}
  ]
}
```

## Справочник параметров

| Символ | Название | Описание | Типичный диапазон |
| :--- | :--- | :--- | :--- |
| $\gamma$ | Коэффициент дисконтирования | Вес будущих наград | 0,95 – 0,999 |
| $\varepsilon$ | Клиппирование PPO | Ограничение шага политики | 0,1 – 0,3 |
| $\lambda$ | Штраф за риск | Баланс доходность/волатильность | 0,01 – 1,0 |
| $c$ | Транзакционные издержки | Штраф за смену позиции | 0 – 0,001 |

## Ограничения и расширения

- **Переобучение:** RL-агенты склонны запоминать исторические паттерны; необходима тестовая выборка и симуляции [[monte-carlo-method]] для проверки устойчивости.
- **Нестационарность:** Оптимальная политика меняется с режимом рынка; мета-обучение (MAML) или [[regime-switching-factors]] как часть состояния улучшают обобщение.
- **Скрытое состояние:** Реальный рынок частично наблюдаем (POMDP); рекуррентные политики (LSTM) или фильтр Кальмана в пространстве состояний дают более полное описание.

## Практические применения

1. **Маркет-мейкинг:** RL управляет спредом котирования и инвентарём, балансируя P&L и риск инвентаря (задача Авелланеда-Стойкова).
2. **Динамическое хеджирование:** Агент обучается минимизировать дисперсию P&L опционной позиции, превосходя дельта-хеджирование при транзакционных издержках.
3. **Оптимальное исполнение:** RL решает задачу Алмгрена-Криса без предположений о линейном рыночном воздействии.

## Связанные темы
- [[monte-carlo-method]]
- [[mcmc]]
- [[optimal-execution]]
- [[value-at-risk]]

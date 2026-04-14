---
title: "Model-Free RL для факторных портфелей"
category: "Алгоритмы и ML"
order: 67
lang: "ru"
slug: "model-free-rl-factors"
---
# Model-Free RL для факторных портфелей

В то время как традиционное факторное инвестирование опирается на статические или линейные веса, **обучение с подкреплением без модели (Model-Free RL)** позволяет осуществлять динамическое нелинейное распределение факторов. Агент обучается оптимальной стратегии $\pi(a|s)$ для ротации между факторами без необходимости в структурной модели экономики.

## Необходимые знания

[[rl-trader]], [[alpha-factor-discovery]]

## Визуализация

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
    {"dataKey": "LowVol",   "stroke": "#8b5cf6", "name": "Низкая волатильность"},
    {"dataKey": "RLAgent",  "stroke": "#3b82f6", "name": "RL-агент (PPO)"}
  ]
}
```

## История и мотивация

Классическое факторное инвестирование (Фама-Френч, Кархарт) использует линейную регрессию для выделения факторных экспозиций и применяет статические или медленно меняющиеся веса. Эти подходы не захватывают хорошо задокументированную временную изменчивость факторных премий: Value недоэффективен в режиме роста, Momentum обрушивается при резких разворотах, а Low Volatility слабеет в спекулятивных пузырях.

Обучение с подкреплением естественно обрабатывает последовательное принятие решений в условиях неопределённости без необходимости модели генерации факторных доходностей. Агент обучается исключительно на основе взаимодействия с историческими данными, открывая нелинейные правила переключения, которые используют режимно-зависимое поведение факторов.

## Методы градиента стратегии (PPO/DDPG/SAC)

Агент взаимодействует с рыночной средой, наблюдая состояния $s_t$ (макроэкономические индикаторы, факторные спреды) и совершая действия $a_t$ (веса портфеля).

1. **PPO (Proximal Policy Optimization)**: надёжный алгоритм on-policy с «обрезанной» целевой функцией для стабильности обучения.
2. **DDPG (Deep Deterministic Policy Gradient)**: алгоритм off-policy (actor-critic) для непрерывных пространств действий.
3. **SAC (Soft Actor-Critic)**: добавляет регуляризацию энтропии, поощряя агента поддерживать стохастическую стратегию и избегать чрезмерно уверенных аллокаций.

Цель — максимизация ожидаемого дисконтированного вознаграждения:

$$
J(\theta) = \mathbb{E}_{\pi_\theta} \left[ \sum_{t=0}^{T} \gamma^t R_t \right]
$$

## Математический фреймворк

### Пространство состояний

Состояние $s_t \in \mathbb{R}^d$ обычно включает:
- Скользящие факторные доходности: $\{r_{f,t-k}^{(i)}\}_{k=0}^{L}$ для каждого фактора $i$
- Макроэкономические индикаторы: наклон кривой доходности, кредитные спреды, уровень VIX
- Оценочные спреды факторов: коэффициенты P/E, P/B для стоимости против роста

### Пространство действий

Для $N$ факторов действие $a_t \in \Delta^{N-1}$ (симплекс) представляет веса портфеля.

### Формирование вознаграждения

Функция вознаграждения $R_t$ должна учитывать риск. Распространённые подходы — **дифференциальный коэффициент Шарпа** или доходность с поправкой на волатильность:

$$
R_t = r_{p,t} - \lambda \cdot \sigma_{p,t}^2
$$

где $r_{p,t} = a_t^\top r_t$ — доходность портфеля, $\lambda$ — параметр неприятия риска.

## Python: Среда факторной ротации

```python
import numpy as np
import gymnasium as gym
from gymnasium import spaces

N_FACTORS = 5
LOOKBACK = 20

class FactorEnv(gym.Env):
    """
    Среда ротации факторов.
    Состояние: (LOOKBACK x N_FACTORS) матрица прошлых доходностей факторов.
    Действие: веса портфеля по N_FACTORS факторам (нормализованные через softmax).
    Вознаграждение: доходность с поправкой на риск.
    """
    def __init__(self, factor_returns, risk_aversion=1.0):
        super().__init__()
        self.factor_returns = factor_returns
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
        window = self.factor_returns[self.current_step - LOOKBACK:self.current_step]
        return window.flatten().astype(np.float32)

    def step(self, action):
        # Softmax для long-only портфеля
        weights = np.exp(action) / np.sum(np.exp(action))
        step_return = np.dot(weights, self.factor_returns[self.current_step])
        step_vol = np.std(
            self.factor_returns[self.current_step - LOOKBACK:self.current_step] @ weights
        )
        reward = step_return - self.risk_aversion * step_vol**2

        self.current_step += 1
        done = self.current_step >= self.T - 1
        obs = self._get_obs() if not done else np.zeros(LOOKBACK * N_FACTORS, dtype=np.float32)
        return obs, reward, done, False, {}

    def reset(self, seed=None):
        super().reset(seed=seed)
        self.current_step = LOOKBACK
        return self._get_obs(), {}


# Использование со Stable Baselines3:
# from stable_baselines3 import PPO
# np.random.seed(42)
# factor_data = np.random.randn(1000, N_FACTORS) * 0.01
# env = FactorEnv(factor_data)
# model = PPO("MlpPolicy", env, verbose=0, learning_rate=3e-4, n_steps=256)
# model.learn(total_timesteps=50000)
```

## Ключевые проектные решения

| Решение | Варианты | Рекомендация |
|:---|:---|:---|
| Пространство действий | Симплекс (только длинные) vs. неограниченное | Симплекс для мандатов без коротких |
| Вознаграждение | Доходность, Шарп, Калмар | Дифференциальный Шарп для стабильности |
| Признаки состояния | Сырые доходности vs. нормализованные | Z-нормировка по скользящему окну |
| Алгоритм | PPO, SAC, DDPG | PPO для стабильности; SAC для исследования |

## Проблемы и валидация

Агенты RL склонны к переобучению на исторических данных. Для снижения этого риска:
- Использовать метрики [[probability-of-backtest-overfitting]] и тестировать в синтетических средах [[monte-carlo-method]].
- Применять комбинаторную очищенную кросс-валидацию (CPCV) вместо простого разбиения.
- Тестировать на исторических периодах со сменой режимов (2008, 2020).
- Регуляризовать сеть политики с помощью dropout и L2-регуляризации.

## Ограничения и расширения

- **Нестационарность**: распределения факторных доходностей меняются со временем. Необходимо онлайн-обучение или периодическое переобучение.
- **Транзакционные издержки**: наивные функции вознаграждения игнорируют оборачиваемость. Штраф $-c \|a_t - a_{t-1}\|_1$ формирует политику с меньшим оборотом.
- **Множественные цели**: доходность, волатильность, просадка, ESG-ограничения — сочетание в единое скалярное вознаграждение требует тщательной настройки.
- **Иерархический RL**: двухуровневая структура с «мета-контроллером», выбирающим режимы, и «контроллерами», распределяющими веса факторов внутри каждого режима.

## Связанные темы
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]
- [[meta-labeling]]

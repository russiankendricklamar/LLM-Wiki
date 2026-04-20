---
title: "Proximal Policy Optimization (PPO)"
category: "AI Theory"
order: 11
lang: "ru"
slug: "ppo"
growth: "seedling"
---

# Proximal Policy Optimization (PPO)

**PPO** — наиболее широко применяемый алгоритм policy gradient и основа RLHF-обучения больших языковых моделей. Предложен Schulman et al. (2017): обеспечивает стабильное on-policy обучение, ограничивая изменение политики за одно обновление без вычислительных затрат методов второго порядка.

## Мотивация

Наивный policy gradient нестабилен: малый шаг тратит данные, большой — разрушает политику. **TRPO** решал это жёстким KL-ограничением:

$$
\max_\theta \; \mathbb{E}\left[\frac{\pi_\theta(a|s)}{\pi_{\theta_\text{old}}(a|s)} \hat A\right], \quad \text{s.t.} \;\; \mathbb{E}[D_\text{KL}(\pi_{\theta_\text{old}} \| \pi_\theta)] \leq \delta.
$$

TRPO требует обращения матрицы Фишера. PPO заменяет это простым клиппингом первого порядка.

## Clipped Surrogate Objective

Отношение вероятностей:

$$
r_t(\theta) = \frac{\pi_\theta(a_t \mid s_t)}{\pi_{\theta_\text{old}}(a_t \mid s_t)}.
$$

**PPO-Clip** ограничивает $r_t$ в диапазоне $[1-\epsilon,\, 1+\epsilon]$:

$$
L^{\text{CLIP}}(\theta) = \mathbb{E}_t\left[\min\!\left(r_t(\theta)\,\hat A_t,\;\operatorname{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon)\,\hat A_t\right)\right].
$$

## Generalized Advantage Estimation (GAE)

$$
\hat A_t^{\text{GAE}(\gamma,\lambda)} = \sum_{l=0}^{\infty} (\gamma\lambda)^l \delta_{t+l}, \quad \delta_t = r_t + \gamma V(s_{t+1}) - V(s_t).
$$

- $\lambda = 0$: одношаговый TD — малая дисперсия, большое смещение.
- $\lambda = 1$: Monte Carlo — большая дисперсия, нет смещения.
- Стандарт: $\lambda = 0.95$, $\gamma = 0.99$.

## Полная функция потерь

$$
L(\theta) = \mathbb{E}_t\!\left[ L^{\text{CLIP}}_t - c_1 L^{\text{VF}}_t + c_2 S[\pi_\theta](s_t) \right],
$$

- $L^{\text{VF}}_t = (V_\theta(s_t) - V_t^\text{target})^2$ — MSE функции ценности
- $S[\pi_\theta](s_t)$ — бонус энтропии
- $c_1 \approx 0.5$, $c_2 \approx 0.01$

## Динамика обучения

```chart
{
  "type": "line",
  "xAxis": "update",
  "data": [
    {"update": 0, "reward": -150, "kl": 0},
    {"update": 20, "reward": -80, "kl": 8},
    {"update": 50, "reward": 20, "kl": 12},
    {"update": 100, "reward": 120, "kl": 15},
    {"update": 150, "reward": 180, "kl": 18},
    {"update": 200, "reward": 210, "kl": 14},
    {"update": 250, "reward": 230, "kl": 11},
    {"update": 300, "reward": 240, "kl": 10}
  ],
  "lines": [
    {"dataKey": "reward", "stroke": "#10b981", "name": "Reward за эпизод"},
    {"dataKey": "kl", "stroke": "#f59e0b", "name": "Approx KL ×1000"}
  ]
}
```

## Гиперпараметры

| Параметр | Диапазон | Эффект |
|----------|----------|--------|
| $\epsilon$ | 0.1–0.2 | Ширина доверительной области |
| $\gamma$ | 0.99 | Горизонт дисконтирования |
| $\lambda$ | 0.95 | Bias-variance в GAE |
| Learning rate | 3e-4 | LR Adam |
| Эпохи $K$ | 4–10 | Переиспользование роллаута |
| $c_2$ (энтропия) | 0.0–0.01 | Исследование |

## Применения

**RLHF / выравнивание LLM.** PPO — алгоритм RL в InstructGPT, Claude, Gemini. Reward model играет роль $r(s,a)$; KL-штраф к референсной политике ограничивает дрейф от базовой модели.

**Непрерывное управление.** MuJoCo (Ant, Humanoid) — near-SOTA при правильных гиперпараметрах.

**Игры.** OpenAI Five (Dota 2), AlphaStar.

## Связанные темы

- [[reinforcement-learning]] — MDP, функции ценности, policy gradient
- [[rlhf]] — PPO применительно к выравниванию LLM
- [[soft-actor-critic]] — off-policy альтернатива
- [[model-based-rl]] — sample-efficient альтернатива PPO

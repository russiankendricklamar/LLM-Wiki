---
title: "Soft Actor-Critic (SAC)"
category: "AI Theory"
order: 12
lang: "ru"
slug: "soft-actor-critic"
growth: "seedling"
---

# Soft Actor-Critic (SAC)

**Soft Actor-Critic (SAC)** — ведущий off-policy алгоритм для непрерывных пространств действий. Haarnoja et al. (2018): максимизирует ожидаемый доход плюс **энтропию политики** на каждом шаге, что делает исследование автоматическим и обеспечивает робастность к гиперпараметрам.

## RL с максимальной энтропией

$$
J(\pi) = \mathbb{E}_\pi\left[\sum_{t=0}^\infty \gamma^t \left(r(s_t, a_t) + \alpha \,\mathcal{H}(\pi(\cdot \mid s_t))\right)\right],
$$

где $\alpha > 0$ — температура. Высокоэнтропийная политика: исследует без $\epsilon$-жадного правила, не сходится преждевременно, учится нескольким near-optimal поведениям.

## Мягкие уравнения Беллмана

$$
V^\pi(s) = \mathbb{E}_{a\sim\pi}\left[Q^\pi(s,a) - \alpha\log\pi(a|s)\right],
$$

$$
Q^\pi(s,a) = r(s,a) + \gamma\,\mathbb{E}_{s'}\left[V^\pi(s')\right].
$$

Мягкая оптимальная политика — распределение Больцмана:

$$
\pi^*(a|s) \propto \exp\!\left(\tfrac{1}{\alpha} Q^*(s,a)\right).
$$

## Архитектура: три сети

| Сеть | Роль | Потери |
|------|------|--------|
| $Q_{\phi_1}$, $Q_{\phi_2}$ | Два критика | Невязка Беллмана |
| $\pi_\psi$ | Актор (Гауссиан) | Максимизация $Q - \alpha\log\pi$ |

**Два критика:** берём $\min(Q_{\phi_1}, Q_{\phi_2})$ в целях — снижает переоценку Q-значений.

## Трюк репараметризации

$$
a = \tanh\!\left(\mu_\psi(s) + \sigma_\psi(s) \cdot \varepsilon\right), \quad \varepsilon \sim \mathcal{N}(0,I).
$$

Логарифм вероятности с якобианом:

$$
\log\pi(a|s) = \log\mathcal{N}(\tilde a;\mu,\sigma^2) - \sum_i \log(1 - a_i^2).
$$

Репараметризация позволяет прокинуть градиент через сэмплирование — $\nabla_\psi Q$ без Policy Gradient теоремы.

## Функции потерь

Критик:
$$
y = r + \gamma\left(\min_j Q_{\bar\phi_j}(s',\tilde a') - \alpha\log\pi(\tilde a'|s')\right), \quad J_Q = \mathbb{E}\left[\tfrac12(Q_\phi - y)^2\right].
$$

Актор:
$$
J_\pi(\psi) = \mathbb{E}\left[\alpha\log\pi_\psi(a_\psi|s) - \min_j Q_{\phi_j}(s, a_\psi)\right].
$$

Целевые сети: $\bar\phi \leftarrow \tau\phi + (1-\tau)\bar\phi$, $\tau = 0.005$.

## Автоматическая настройка температуры

$$
J(\alpha) = \mathbb{E}_{a\sim\pi}\left[-\alpha\log\pi(a|s) - \alpha\bar{\mathcal{H}}\right], \quad \bar{\mathcal{H}} = -\dim(\mathcal{A}).
$$

## Сравнение sample efficiency

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
| Исследование | [[shannon-entropy|Энтропия]] | Гауссовый шум | Стохаст. политика |
| Чувствительность | Низкая | Средняя | Средняя |
| Sample efficiency | Высокая | Высокая | Низкая |

## Применения

- Робототехника: манипуляция, локомоция, sim-to-real.
- Финансы: ребалансировка портфеля.
- MBPO: SAC как базовая политика в model-based RL.

## Связанные темы

- [[reinforcement-learning]] — основы MDP
- [[ppo]] — on-policy альтернатива, используется в [[rlhf|RLHF]]
- [[model-based-rl]] — SAC + мировые модели
- [[offline-rl]] — CQL расширяет SAC на офлайн-настройки

---
slug: "/finance/online-learning-mab"
title: "Онлайн-обучение и многорукие бандиты"
category: "Алгоритмы и ML"
order: 115
lang: "ru"
---

# Онлайн-обучение и многорукие бандиты

**Многорукий бандит (Multi-Armed Bandit, MAB)** — задача последовательного принятия решений с неизвестными распределениями наград. В финансах: отбор факторов, управление роутингом ордеров, адаптивное ценообразование.

## Задача и сожаление

Агент выбирает действие $a_t \in \{1,\ldots,K\}$ и получает награду $r_t \sim P_{a_t}$. Цель — минимизировать **кумулятивное сожаление**:

$$
R_T = T \cdot \mu^* - \sum_{t=1}^T \mu_{a_t}
$$

где $\mu^* = \max_i \mu_i$ — оптимальное среднее, $\mu_{a_t}$ — среднее выбранного рычага.

**Нижняя граница Lai-Robbins**: $R_T \geq \Omega(\log T)$ для любого алгоритма.

## UCB (Upper Confidence Bound)

Выбирать рычаг с наибольшей верхней доверительной границей:

$$
a_t = \arg\max_i \left[\hat{\mu}_i + \sqrt{\frac{2\ln t}{n_i}}\right]
$$

где $\hat{\mu}_i$ — эмпирическое среднее, $n_i$ — число выборов рычага $i$.

**UCB1 достигает**: $R_T \leq O(\sqrt{KT\ln T})$.

## Томпсон Сэмплинг

Байесовский подход: сэмплировать из апостериорного распределения $\theta_i \sim P(\theta_i | \text{data})$, выбрать $a_t = \arg\max_i \theta_i$.

Для Бернулли-наград: Beta($\alpha_i$, $\beta_i$) — натуральный сопряжённый приор.

```python
import numpy as np
from dataclasses import dataclass, field

@dataclass
class UCB1:
    """UCB1 для стационарных бандитов."""
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
            return self.t - 1  # round-robin инициализация
        ucb = self.values + np.sqrt(2 * np.log(self.t) / (self.counts + 1e-9))
        return int(np.argmax(ucb))

    def update(self, arm: int, reward: float) -> None:
        self.counts[arm] += 1
        n = self.counts[arm]
        self.values[arm] += (reward - self.values[arm]) / n


@dataclass
class ThompsonSampling:
    """Томпсон Сэмплинг для Гауссовых наград."""
    n_arms: int
    alpha: float = 1.0   # prior precision
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
    """
    LinUCB — контекстуальный бандит.
    Применение: динамический отбор факторов на основе рыночного контекста.
    """
    def __init__(self, n_arms: int, d: int, alpha: float = 1.0):
        self.alpha = alpha
        self.A = [np.eye(d) for _ in range(n_arms)]
        self.b = [np.zeros(d) for _ in range(n_arms)]

    def select(self, context: np.ndarray) -> int:
        x = context
        ucbs = []
        for arm in range(len(self.A)):
            A_inv = np.linalg.inv(self.A[arm])
            theta = A_inv @ self.b[arm]
            ucb = theta @ x + self.alpha * np.sqrt(x @ A_inv @ x)
            ucbs.append(ucb)
        return int(np.argmax(ucbs))

    def update(self, arm: int, context: np.ndarray, reward: float) -> None:
        x = context
        self.A[arm] += np.outer(x, x)
        self.b[arm] += reward * x


def simulate_factor_bandit(factor_returns: np.ndarray,
                             n_rounds: int = 252) -> dict:
    """
    Симуляция выбора фактора через UCB1.
    factor_returns: (T, K) — ежедневные доходности K факторов
    """
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

## Онлайн-обновление весов (Exp3)

Для нестационарных и adversarial сред:

$$
w_i(t+1) = w_i(t) \cdot \exp\!\left(\gamma \frac{r_t \cdot \mathbf{1}[a_t=i]}{p_i(t)}\right), \quad p_i(t) = \frac{w_i(t)}{\sum_j w_j(t)}
$$

## Связанные статьи

- [[rl-trader|RL-трейдер]] — полноценный RL для торговли
- [[model-free-rl-factors|RL для факторов]] — безмодельный выбор факторов
- [[alpha-factor-discovery|Поиск альфа-факторов]] — скрининг факторов

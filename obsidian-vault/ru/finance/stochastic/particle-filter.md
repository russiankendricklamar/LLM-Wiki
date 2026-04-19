---
slug: "/finance/particle-filter"
title: "Частичный фильтр (Particle Filter)"
category: "Алгоритмы и ML"
order: 26
lang: "ru"
---
# Частичный фильтр (Particle Filter)

**Частичный фильтр** (Particle Filter), также известный как **Последовательный метод Монте-Карло** (Sequential Monte Carlo, SMC) — это алгоритм обработки сигналов, использующий набор «частиц» (случайных выборок) для представления апостериорного распределения скрытого состояния системы.

В отличие от фильтра Калмана, частичный фильтр не требует линейности системы или гауссовости распределений. Это делает его идеальным для моделирования стохастической волатильности, смены режимов и других нелинейных финансовых процессов.

## Необходимые знания

[[monte-carlo-method]], [[hidden-markov-models]]

## История и мотивация

Алгоритм был предложен Гордоном, Салмондом и Смитом (1993) как «Bootstrap Filter» для отслеживания целей. Применение к оценке стохастической волатильности развил Полсон и Страуд (2003). SMC² (Чопин, Джейкоб, Папаспилиопулос, 2013) обобщил метод для совместной оценки параметров и состояний.

## Пространство состояний

Скрытое состояние $x_t$ и наблюдения $y_t$ задаются системой:

$$
x_t \sim f(x_t | x_{t-1})  \quad \text{(уравнение перехода)}
$$

$$
y_t \sim g(y_t | x_t)  \quad \text{(уравнение наблюдения)}
$$

Цель — последовательное вычисление апостериорного распределения $p(x_t | y_{1:t})$.

## Алгоритм Bootstrap Particle Filter

Апостериорная плотность аппроксимируется взвешенной смесью:

$$
p(x_t \mid y_{1:t}) \approx \sum_{i=1}^{N} w_t^{(i)}\,\delta\!\left(x_t - x_t^{(i)}\right)
$$

**Три шага на каждом такте:**

1. **Предсказание**: $\tilde{x}_t^{(i)} \sim f(x_t | x_{t-1}^{(i)})$
2. **Обновление весов**: $w_t^{(i)} \propto w_{t-1}^{(i)} \cdot g(y_t | \tilde{x}_t^{(i)})$, затем нормализация
3. **Ресемплинг**: при $\text{ESS} = 1/\sum_i (w_t^{(i)})^2 < N/2$ — мультиномиальный ресемплинг

## Python: Отслеживание стохастической волатильности

```python
import numpy as np


def bootstrap_particle_filter(
    observations: np.ndarray,
    n_particles: int = 2000,
    phi: float = 0.98,
    sigma_v: float = 0.15,
    beta: float = 0.65,
    seed: int = 42,
) -> tuple[np.ndarray, np.ndarray]:
    """
    Bootstrap Particle Filter для модели стохастической волатильности:
      v_t = phi * v_{t-1} + sigma_v * eps_t   (log-волатильность)
      y_t = beta * exp(v_t/2) * eta_t         (доходность)
    Возвращает (оценки волатильности, эффективный размер выборки).
    """
    np.random.seed(seed)
    T = len(observations)

    particles = np.random.normal(0.0, sigma_v / np.sqrt(1 - phi ** 2), n_particles)
    weights = np.full(n_particles, 1.0 / n_particles)

    vol_estimates = np.zeros(T)
    ess_track = np.zeros(T)

    for t in range(T):
        # 1. Предсказание
        particles = phi * particles + sigma_v * np.random.standard_normal(n_particles)

        # 2. Обновление весов (логарифм правдоподобия)
        std_obs = beta * np.exp(particles / 2.0)
        log_liks = -0.5 * np.log(2 * np.pi * std_obs ** 2) - \
                   0.5 * (observations[t] / std_obs) ** 2
        log_liks -= np.max(log_liks)
        weights *= np.exp(log_liks)
        weights /= weights.sum()

        # 3. Ресемплинг при низком ESS
        ess = 1.0 / np.sum(weights ** 2)
        ess_track[t] = ess
        if ess < n_particles / 2.0:
            idx = np.random.choice(n_particles, size=n_particles, p=weights)
            particles = particles[idx]
            weights = np.full(n_particles, 1.0 / n_particles)

        vol_estimates[t] = float(np.sum(weights * np.exp(particles / 2.0)) * beta)

    return vol_estimates, ess_track


# Генерация данных стохастической волатильности
np.random.seed(0)
T = 300
log_vol = np.zeros(T)
returns = np.zeros(T)
for t in range(1, T):
    log_vol[t] = 0.98 * log_vol[t - 1] + 0.15 * np.random.normal()
    returns[t] = 0.65 * np.exp(log_vol[t] / 2) * np.random.normal()

vol_hat, ess = bootstrap_particle_filter(returns, n_particles=2000)
true_vol = 0.65 * np.exp(log_vol / 2)
rmse = float(np.sqrt(np.mean((vol_hat - true_vol) ** 2)))

print(f"RMSE оценки волатильности: {rmse:.4f}")
print(f"Средний ESS:              {ess.mean():.0f} из 2000")
```

## Таблица параметров

| Параметр | Описание | Типичное значение |
|:---|:---|:---|
| $N$ | Число частиц | 1 000–50 000 |
| $\phi$ | Персистентность волатильности | 0.95–0.99 |
| $\sigma_v$ | Волатильность волатильности | 0.10–0.25 |
| Порог ESS | Порог ресемплинга | $N/2$ |
| Ресемплинг | Тип алгоритма | Мультиномиальный или систематический |

## Преимущества и недостатки

| Характеристика | Частичный фильтр | Фильтр Калмана |
|:---|:---|:---|
| Линейность | Любая | Строго линейная |
| Распределения | Любые | Только гауссовские |
| Вычисления | Высокие (зависят от $N$) | Очень низкие |
| Точность | Асимптотически точен | Оптимален только для линейных систем |

## Ограничения и расширения

- **Проклятие размерности**: при $d > 10$ скрытых состояниях требуется экспоненциально больше частиц.
- **Вырождение весов**: без ресемплинга через несколько шагов все масса концентрируется в одной частице.
- **SMC²**: расширение для совместной оценки параметров и состояний через вложенный SMC.
- **Particle MCMC**: использует частичный фильтр для вычисления правдоподобия внутри цикла MCMC.

## Связанные темы
- [[heston-model]]
- [[monte-carlo-method]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[value-at-risk]]

---
title: "Фильтр Калмана"
category: "Анализ сигналов"
order: 164
lang: "ru"
slug: "kalman-filter"
---
# Фильтр Калмана

**Фильтр Калмана** — это итерационный математический процесс, который использует ряд измерений, наблюдаемых во времени и содержащих статистический шум и другие неточности, для получения оценок неизвестных переменных.

## Представление в пространстве состояний

Система описывается двумя уравнениями:
1. **Уравнение состояния**: $x_t = F_t x_{t-1} + B_t u_t + w_t$
2. **Уравнение наблюдения**: $z_t = H_t x_t + v_t$

Где $w_t \sim N(0, Q_t)$ и $v_t \sim N(0, R_t)$ — шум процесса и измерения соответственно.

## Этапы прогнозирования и обновления

### Прогноз:
$$
\begin{aligned}
\hat{x}_{t|t-1} &= F_t \hat{x}_{t-1|t-1} \\
P_{t|t-1} &= F_t P_{t-1|t-1} F_t^T + Q_t
\end{aligned}
$$

### Обновление:
$$
\begin{aligned}
K_t &= P_{t|t-1} H_t^T (H_t P_{t|t-1} H_t^T + R_t)^{-1} \\
\hat{x}_{t|t} &= \hat{x}_{t|t-1} + K_t (z_t - H_t \hat{x}_{t|t-1}) \\
P_{t|t} &= (I - K_t H_t) P_{t|t-1}
\end{aligned}
$$

## Реализация на Python

Использование `pykalman`:

```python
from pykalman import KalmanFilter
import numpy as np

def filter_series(data):
    kf = KalmanFilter(initial_state_mean=0, n_dim_obs=1)
    state_means, state_covariances = kf.filter(data)
    return state_means
```

## Связанные темы
- [[particle-filter]]
- [[hidden-markov-models]]
- [[volatility-forecasting]]
- [[mcmc]]

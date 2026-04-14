---
title: "Систематическая торговля портфелем через выпуклую оптимизацию"
category: "Управление рисками"
order: 71
lang: "ru"
slug: "convex-optimization-trading"
---
# Систематическая торговля портфелем через выпуклую оптимизацию

Современная систематическая торговля опирается на **выпуклую оптимизацию** для поиска оптимального набора весов портфеля, максимизирующих полезность при соблюдении реалистичных ограничений. В отличие от аналитического решения Марковица, выпуклая оптимизация позволяет включать транзакционные издержки, лимиты оборота, ограничения по секторам и нелинейные модели рыночного воздействия.

## Необходимые знания

[[portfolio-optimization-ml]], [[hierarchical-risk-parity]]

## Обзор и предпосылки

Классическая задача Марковица имеет аналитическое решение только при линейных ограничениях и квадратичной целевой функции. Реальные портфели требуют нелинейных издержек (квадратичный market impact), ограничений по факторным экспозициям и учёта ликвидности. CVXPY (Diamond & Boyd, 2016) сделал выпуклую оптимизацию доступной для практиков, позволяя выражать задачу на предметно-ориентированном языке.

Ключевой результат теории выпуклой оптимизации (условия Куна-Таккера): если задача выпукла и выполнено условие Слейтера, двойственность сильна — оптимальное решение достигается, и множители Лагранжа имеют экономическую интерпретацию как теневые цены ограничений.

## Математическая база

**Общая задача оптимизации портфеля**:

$$
\begin{aligned}
\text{максимизировать} \quad & \mu^\top w - \gamma\, w^\top\Sigma w - \phi(w - w_{\text{prev}}) \\
\text{при ограничениях} \quad & \mathbf{1}^\top w = 1 \\
& \|w\|_1 \leq L \\
& A w \leq b
\end{aligned}
$$

**Программирование конусов второго порядка (SOCP)**. Робастная оптимизация с эллипсоидальной неопределённостью в $\mu$:

$$
\min_{w} \; w^\top\Sigma w \quad \text{s.t.} \quad (w^\top\mu - r_{\min}) \geq \kappa \sqrt{w^\top\Delta w}, \quad \mathbf{1}^\top w = 1
$$

где $\Delta$ — ковариация оценки $\hat\mu$, $\kappa$ — уровень уверенности.

**Многопериодная формулировка** с торговыми издержками:

$$
\max_{w_1,\dots,w_T} \sum_{t=1}^T \left[\mu_t^\top w_t - \gamma\, w_t^\top\Sigma w_t - c_{\text{lin}}\|w_t - w_{t-1}\|_1 - c_{\text{quad}}\|w_t - w_{t-1}\|_2^2\right]
$$

**Условие Слейтера**: существует строго допустимая точка — гарантирует сильную двойственность и численную стабильность решателей.

## Ключевые свойства

- Выпуклость задачи гарантирует глобальный оптимум — нет риска застрять в локальном минимуме
- Двойственные переменные дают теневые цены ограничений (например, стоимость увеличения лимита оборота)
- CVXPY поддерживает горячий старт — переиспользование предыдущего решения для ускорения
- Параметризация через `cp.Parameter` позволяет менять данные без перекомпиляции задачи

## Реализация на Python

```python
import cvxpy as cp
import numpy as np
import pandas as pd

def single_period_optimize(mu: np.ndarray, sigma: np.ndarray, w_prev: np.ndarray,
                            gamma: float = 1.0, tcost: float = 0.001,
                            max_leverage: float = 1.0) -> dict:
    """Однопериодная MVO с линейными транзакционными издержками."""
    n = len(mu)
    w = cp.Variable(n)
    ret = mu @ w
    risk = cp.quad_form(w, sigma)
    trade = cp.norm(w - w_prev, 1)
    objective = cp.Maximize(ret - gamma * risk - tcost * trade)
    constraints = [cp.sum(w) == 1, cp.norm(w, 1) <= max_leverage]
    prob = cp.Problem(objective, constraints)
    prob.solve(solver=cp.CLARABEL, warm_start=True)
    return {'weights': w.value, 'status': prob.status, 'value': prob.value}

def robust_optimize(mu: np.ndarray, sigma: np.ndarray, delta_mu: np.ndarray,
                    target_return: float, kappa: float = 1.96) -> dict:
    """Робастная оптимизация с эллипсоидальной неопределённостью в mu."""
    n = len(mu)
    w = cp.Variable(n)
    risk = cp.quad_form(w, sigma)
    uncertainty = kappa * cp.sqrt(cp.quad_form(w, np.diag(delta_mu**2)))
    constraints = [
        cp.sum(w) == 1,
        mu @ w - uncertainty >= target_return,
        w >= 0,
    ]
    prob = cp.Problem(cp.Minimize(risk), constraints)
    prob.solve(solver=cp.CLARABEL)
    return {'weights': w.value, 'status': prob.status}

def efficient_frontier(mu: np.ndarray, sigma: np.ndarray,
                       n_points: int = 30) -> pd.DataFrame:
    """Граница эффективных портфелей."""
    n = len(mu)
    w = cp.Variable(n)
    gamma_param = cp.Parameter(nonneg=True)
    ret = mu @ w
    risk = cp.quad_form(w, sigma)
    prob = cp.Problem(cp.Maximize(ret - gamma_param * risk),
                      [cp.sum(w) == 1, w >= 0])
    results = []
    for g in np.logspace(-2, 2, n_points):
        gamma_param.value = g
        prob.solve(solver=cp.CLARABEL, warm_start=True)
        if prob.status == 'optimal':
            results.append({'gamma': g,
                            'ret': float(mu @ w.value),
                            'vol': float(np.sqrt(w.value @ sigma @ w.value))})
    return pd.DataFrame(results)

# Пример: 10 активов
np.random.seed(42)
n = 10
mu = np.random.randn(n) * 0.08 + 0.05
A = np.random.randn(n, n)
sigma = A.T @ A / n + np.eye(n) * 0.02
w_prev = np.ones(n) / n
result = single_period_optimize(mu, sigma, w_prev)
frontier = efficient_frontier(mu, sigma)
```

## Граница эффективных портфелей

```chart
{
  "type": "line",
  "xAxis": "vol",
  "data": [
    {"vol": 0.08, "ret": 0.04},
    {"vol": 0.10, "ret": 0.06},
    {"vol": 0.12, "ret": 0.08},
    {"vol": 0.14, "ret": 0.10},
    {"vol": 0.17, "ret": 0.12},
    {"vol": 0.21, "ret": 0.14},
    {"vol": 0.26, "ret": 0.16}
  ],
  "lines": [
    {"dataKey": "ret", "stroke": "#3b82f6", "name": "Ожидаемая доходность"}
  ]
}
```

## Таблица параметров

| Символ | Название | Описание | Типичный диапазон |
|:---|:---:|:---|:---|
| $\gamma$ | Неприятие риска | Вес штрафа за дисперсию портфеля | $0.1$ – $10$ |
| $L$ | Плечо (брутто) | Сумма абсолютных весов | $1.0$ – $2.0$ |
| $c_{\text{lin}}$ | Линейные издержки | Комиссия на оборот | $0.001$ – $0.01$ |
| $c_{\text{quad}}$ | Квадратичные издержки | Market impact | $0.001$ – $0.1$ |
| $\kappa$ | Уровень робастности | Стандартных отклонений для эллипсоида неопределённости | $1.0$ – $3.0$ |

## Ограничения и расширения

**Ограничения:**
- Качество решения определяется качеством входных данных: ошибки в $\mu$ и $\Sigma$ транслируются в субоптимальные портфели.
- Нелинейный market impact (степень 3/2) выводит задачу за рамки стандартного SOCP — требует аппроксимации или специализированных решателей.
- Многопериодные задачи с $T > 20$ периодами становятся вычислительно дорогими.

**Расширения:**
- **[[hierarchical-risk-parity]]**: иерархическое кластерное взвешивание как альтернатива при нестабильной ковариационной матрице.
- **[[bayesian-black-litterman]]**: BL-апостериорные доходности в качестве $\mu$ устраняют проблему error-in-inputs.
- **Стохастическое программирование**: многосценарный учёт неопределённости в $\mu$ для робастности.

## Практическое применение

1. **Факторные стратегии**: оптимизация весов с нейтрализацией по секторам, странам и факторам риска.
2. **Статистический арбитраж**: SOCP с ограничениями на долларовую нейтральность и лимитами позиций.
3. **Ребалансировка с издержками**: определение оптимальных точек входа/выхода с учётом market impact.
4. **Управление риском портфеля**: ограничение по DV01/CS01 через линейные ограничения $Aw \leq b$.
5. **Систематические фонды**: ежедневная переоптимизация портфеля из тысяч инструментов за секунды.

## Связанные темы
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]
- [[bayesian-black-litterman]]

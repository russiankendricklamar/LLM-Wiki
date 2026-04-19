---
title: "Оптимизация портфеля с помощью ML"
category: "Управление рисками"
order: 64
lang: "ru"
slug: "portfolio-optimization-ml"
---
# Оптимизация портфеля с помощью машинного обучения

**Оптимизация портфеля** — это выбор наилучшего сочетания активов для достижения инвестиционной цели (максимальная доходность при заданном уровне риска). Классическая оптимизация Марковица (Mean-Variance) крайне чувствительна к шуму в данных. Методы машинного обучения — **Hierarchical Risk Parity (HRP)** и **Black-Litterman с ML-взглядами** — предлагают более устойчивые решения.

## Визуализация

Сравнение аннуализированной волатильности и максимальной просадки различных методов построения портфеля на 10-активной вселенной. HRP достигает меньшей реализованной волатильности без обращения ковариационной матрицы; MVO показывает наибольший риск из-за усиления ошибок оценки.

```chart
{
  "type": "bar",
  "xAxis": "method",
  "data": [
    {"method": "Equal Weight",    "Ann. Vol (%)": 12.8, "Max Drawdown (%)": 18.4},
    {"method": "Min Variance",    "Ann. Vol (%)": 9.4,  "Max Drawdown (%)": 13.2},
    {"method": "MVO (Markowitz)", "Ann. Vol (%)": 14.1, "Max Drawdown (%)": 22.7},
    {"method": "HRP",             "Ann. Vol (%)": 10.2, "Max Drawdown (%)": 14.9},
    {"method": "HRP + BL Views",  "Ann. Vol (%)": 10.8, "Max Drawdown (%)": 15.6},
    {"method": "Risk Parity",     "Ann. Vol (%)": 9.9,  "Max Drawdown (%)": 14.1}
  ],
  "lines": [
    {"dataKey": "Ann. Vol (%)",      "stroke": "#3b82f6", "name": "Аннуал. волатильность (%)"},
    {"dataKey": "Max Drawdown (%)",  "stroke": "#ef4444", "name": "Макс. просадка (%)"}
  ]
}
```

## История и мотивация

Марковиц (1952) формализовал задачу оптимизации портфеля, но практики быстро обнаружили, что решение крайне нестабильно к ошибкам в ожидаемых доходностях. Black-Litterman (1992) улучшили метод, добавив байесовское смешение рыночного равновесия с «взглядами» инвестора. Lopez de Prado (2016) предложил HRP — алгоритм, не требующий обращения ковариационной матрицы.

## Иерархический паритет риска (HRP)

### Матрица расстояний

$$
d_{ij} = \sqrt{\tfrac{1}{2}(1 - \rho_{ij})}
$$

Расстояние $d_{ij} \in [0, 1]$: $d=0$ при полной корреляции, $d=1$ при полной антикорреляции.

### Алгоритм HRP

1. **Квазидиагонализация**: Переупорядочить матрицу ковариации по дендрограмме, чтобы похожие активы стояли рядом.
2. **Рекуривная бисекция**: Разделить портфель на два кластера, присваивая веса, обратно пропорциональные дисперсии кластера.

## Black-Litterman с ML-взглядами

$$
\mu_{BL} = \left[(\tau\Sigma)^{-1} + P^\top \Omega^{-1} P\right]^{-1}
\left[(\tau\Sigma)^{-1}\Pi + P^\top \Omega^{-1} Q\right]
$$

где $\Pi$ — рыночное равновесие ($\Pi = \lambda\Sigma w_{\text{mkt}}$), $Q$ — вектор ML-прогнозов, $P$ — матрица «взглядов», $\Omega$ — неопределённость прогнозов.

## Python: Полная реализация HRP

```python
import numpy as np
import pandas as pd
from scipy.cluster.hierarchy import linkage, leaves_list
from scipy.spatial.distance import squareform


def get_quasi_diag(link: np.ndarray) -> list[int]:
    """Преобразует матрицу линкования в отсортированный порядок листьев."""
    link = link.astype(int)
    sort_ix = pd.Series([link[-1, 0], link[-1, 1]])
    num_items = link[-1, 3]

    while sort_ix.max() >= num_items:
        sort_ix.index = range(0, sort_ix.shape[0] * 2, 2)
        df0 = sort_ix[sort_ix >= num_items]
        i = df0.index
        j = df0.values - num_items
        sort_ix[i] = link[j, 0]
        df0 = pd.Series(link[j, 1], index=i + 1)
        sort_ix = pd.concat([sort_ix, df0])
        sort_ix = sort_ix.sort_index()
        sort_ix.index = range(sort_ix.shape[0])

    return sort_ix.tolist()


def _cluster_var(cov: np.ndarray, idx: list[int]) -> float:
    """Дисперсия равновзвешенного субпортфеля из активов idx."""
    sub_cov = cov[np.ix_(idx, idx)]
    w = np.ones(len(idx)) / len(idx)
    return float(w @ sub_cov @ w)


def hrp_weights(returns: pd.DataFrame) -> pd.Series:
    """
    Вычисляет веса HRP через рекурсивную бисекцию.
    """
    cov = returns.cov().values
    corr = returns.corr().values
    n = returns.shape[1]

    dist = np.sqrt(0.5 * (1 - corr))
    np.fill_diagonal(dist, 0)
    link = linkage(squareform(dist), method="ward")
    sorted_idx = get_quasi_diag(link)

    weights = pd.Series(1.0, index=sorted_idx)
    cluster_items = [sorted_idx]

    while len(cluster_items) > 0:
        cluster_items = [c[j:k] for c in cluster_items for j, k in
                         [(0, len(c) // 2), (len(c) // 2, len(c))] if len(c) > 1]
        for i in range(0, len(cluster_items), 2):
            if i + 1 >= len(cluster_items):
                break
            c0, c1 = cluster_items[i], cluster_items[i + 1]
            v0 = _cluster_var(cov, c0)
            v1 = _cluster_var(cov, c1)
            alpha = 1 - v0 / (v0 + v1)
            weights[c0] *= alpha
            weights[c1] *= 1 - alpha

    weights = weights.sort_index()
    weights.index = returns.columns
    return weights / weights.sum()


# Сравнение HRP с равновзвешенным портфелем
np.random.seed(42)
n_assets, n_periods = 10, 500
rets = pd.DataFrame(
    np.random.multivariate_normal(
        np.zeros(n_assets),
        np.eye(n_assets) * 0.01 + np.full((n_assets, n_assets), 0.002),
        n_periods
    ),
    columns=[f"A{i}" for i in range(n_assets)]
)

w_hrp = hrp_weights(rets)
w_eq = pd.Series(1 / n_assets, index=rets.columns)

cov_mat = rets.cov().values
hrp_var = float(w_hrp.values @ cov_mat @ w_hrp.values)
eq_var = float(w_eq.values @ cov_mat @ w_eq.values)

print("Веса HRP:", w_hrp.round(3).to_dict())
print(f"Дисперсия HRP:               {hrp_var:.6f}")
print(f"Дисперсия равновзвешенного:  {eq_var:.6f}")
print(f"Снижение дисперсии HRP:      {(1 - hrp_var/eq_var)*100:.1f}%")
```

## Таблица параметров

| Параметр | Описание | Типичное значение |
|:---|:---|:---|
| Метод линкования | Алгоритм иерархической кластеризации | Ward, Single, Complete |
| Метрика расстояния | Функция расстояния по корреляции | $\sqrt{0.5(1-\rho)}$ |
| $\tau$ (BL) | Неопределённость равновесия | 0.025–0.05 |
| $\lambda$ (BL) | Неприятие риска | 2–3 |
| Период пересчёта | Частота ребалансировки | Ежемесячно / ежеквартально |

## Ограничения и расширения

- **Чувствительность к выбору метода линкования**: Ward vs. Single дают разные дендрограммы и веса.
- **Нестабильность корреляций**: В кризис корреляции резко возрастают; нужна «стрессовая» ковариационная матрица.
- **Ограничения на веса**: Регуляторные ограничения (максимальный вес на эмитента) вводятся как дополнительные ограничения.
- **Deep RL**: Обучение с подкреплением позволяет изучить нелинейные правила ребалансировки, захватывая транзакционные издержки и режимы рынка.

## Связанные темы
- [[hierarchical-risk-parity]]
- [[random-matrix-theory]]
- [[value-at-risk]]
- [[monte-carlo-method]]
- [[mcmc]]
- [[model-free-rl-factors]]

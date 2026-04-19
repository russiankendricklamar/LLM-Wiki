---
slug: "/finance/bipower-variation"
title: "Двухмощная вариация (Bipower Variation)"
category: "Стохастические процессы"
order: 81
lang: "ru"
---

# Двухмощная вариация (Bipower Variation)

**Двухмощная вариация (Bipower Variation, BPV)** — нелинейная функционал от высокочастотных доходностей, позволяющая оценить **непрерывную компоненту** квадратичной вариации, не загрязнённую прыжками. Предложена Барндорф-Нильсеном и Шепхардом (2004) и широко используется для декомпозиции реализованной волатильности.

## Предыстория: реализованная волатильность и прыжки

Реализованная дисперсия (RV) за день $[0, T]$ на $n$ наблюдениях:

$$
RV_n = \sum_{i=1}^{n} r_i^2
$$

При $n \to \infty$ RV сходится к квадратичной вариации:

$$
\text{QV}_{[0,T]} = \underbrace{\int_0^T \sigma_s^2 \, ds}_{\text{непрерывная}}  + \underbrace{\sum_{0 \le s \le T} \Delta X_s^2}_{\text{прыжки}}
$$

Если прыжки присутствуют, RV не позволяет разделить эти компоненты. BPV решает эту проблему.

## Определение BPV

$$
\text{BPV}_n = \mu_1^{-2} \sum_{i=2}^{n} |r_{i-1}| \cdot |r_i|
$$

где $\mu_1 = E[|Z|] = \sqrt{2/\pi} \approx 0.798$ для $Z \sim \mathcal{N}(0,1)$ — нормирующая константа.

### Сходимость

При $n \to \infty$ в отсутствие прыжков:

$$
\text{BPV}_n \xrightarrow{p} \int_0^T \sigma_s^2 \, ds = \text{IV}_{[0,T]}
$$

При наличии прыжков BPV всё равно сходится к **интегрированной дисперсии** (Integrated Variance), тогда как RV включает сумму квадратов прыжков. Ключевое свойство: произведение $|r_{i-1}| \cdot |r_i|$ равно нулю, если хотя бы один из двух последовательных интервалов содержит прыжок.

## Детектор прыжков

Статистика для проверки $H_0$: прыжков нет:

$$
J = \frac{RV_n - \text{BPV}_n}{\hat{\text{se}}} \xrightarrow{d} \mathcal{N}(0, 1)
$$

Дисперсия статистики:

$$
\hat{\text{se}}^2 = \left(\frac{\pi^2}{4} + \pi - 5\right) \frac{\max(1, \text{TQ}/\text{BPV}^2)}{n}
$$

где $\text{TQ}$ — трипауэр-квартика (Barndorff-Nielsen & Shephard 2004):

$$
\text{TQ}_n = n \cdot \mu_{4/3}^{-3} \sum_{i=3}^{n} |r_{i-2}|^{4/3} |r_{i-1}|^{4/3} |r_i|^{4/3}
$$

$\mu_{4/3} = 2^{2/3} \Gamma(7/6)/\Gamma(1/2)$.

## Меры прыжков

| Мера | Формула | Смысл |
|------|---------|-------|
| Абсолютная | $\text{RV} - \text{BPV}$ | Вклад прыжков в дисперсию |
| Относительная | $(\text{RV} - \text{BPV}) / \text{RV}$ | Доля прыжков в общей волатильности |
| Знаковая | $\text{max}(RV - BPV, 0)$ | Усечение для стабильности |

## Практический пример

```python
import numpy as np
import pandas as pd
from scipy.special import gamma

MU1 = np.sqrt(2 / np.pi)       # E[|Z|] для N(0,1)
MU43 = (2**(2/3)) * gamma(7/6) / gamma(0.5)

def bipower_variation(returns: np.ndarray) -> float:
    """BPV за один день из массива внутридневных доходностей."""
    abs_r = np.abs(returns)
    return (MU1**-2) * np.sum(abs_r[:-1] * abs_r[1:])


def realized_variance(returns: np.ndarray) -> float:
    return np.sum(returns**2)


def tripower_quarticity(returns: np.ndarray) -> float:
    n = len(returns)
    abs_r43 = np.abs(returns)**(4/3)
    tq = n * (MU43**-3) * np.sum(
        abs_r43[:-2] * abs_r43[1:-1] * abs_r43[2:]
    )
    return tq


def jump_test(returns: np.ndarray) -> dict:
    """
    Тест Барндорф-Нильсена-Шепхарда.
    Возвращает статистику, p-значение, компоненты RV/BPV.
    """
    from scipy.stats import norm

    n = len(returns)
    rv = realized_variance(returns)
    bpv = bipower_variation(returns)
    tq = tripower_quarticity(returns)

    # Относительная версия (стабильнее)
    jump_ratio = max(1 - bpv / rv, 0)

    se2 = (np.pi**2 / 4 + np.pi - 5) * max(1, tq / bpv**2) / n
    se = np.sqrt(se2)

    stat = (rv - bpv) / (rv * se) if se > 0 else 0
    p_value = 1 - norm.cdf(stat)

    return {
        'rv': rv,
        'bpv': bpv,
        'jump_component': max(rv - bpv, 0),
        'jump_ratio': jump_ratio,
        'statistic': stat,
        'p_value': p_value,
        'has_jump': p_value < 0.01
    }


def daily_decomposition(prices: pd.Series, freq: str = '5min') -> pd.DataFrame:
    """
    Для серии цен: RV/BPV/прыжки по дням.
    """
    prices = prices.resample(freq).last().dropna()
    log_ret = np.log(prices).diff().dropna()

    results = []
    for date, group in log_ret.groupby(log_ret.index.date):
        r = group.values
        if len(r) < 5:
            continue
        res = jump_test(r)
        res['date'] = date
        results.append(res)

    return pd.DataFrame(results).set_index('date')
```

### Интерпретация результатов

```python
# Пример с синтетическими данными
np.random.seed(42)
n_intra = 78   # 5-минутки за торговый день (6.5 часов)
sigma = 0.002  # дневная волатильность на 5-мин частоте

# Нормальный день
r_normal = np.random.normal(0, sigma, n_intra)

# День с прыжком
r_jump = r_normal.copy()
r_jump[40] += 0.02   # прыжок +2%

print("Нормальный день:", jump_test(r_normal))
print("День с прыжком:", jump_test(r_jump))
```

## BPV в прогнозировании волатильности

BPV используется как входной признак в **моделях HAR-RV-J** (Heterogeneous Autoregressive):

$$
RV_{t+1} = \beta_0 + \beta_d \cdot RV_t + \beta_w \cdot \overline{RV}_{t-4:t} + \beta_m \cdot \overline{RV}_{t-21:t} + \beta_J \cdot J_t + \varepsilon_{t+1}
$$

где $J_t = \max(RV_t - BPV_t, 0)$ — компонента прыжка. Эмпирически $\beta_J < 0$: прыжки менее стойки, чем непрерывная волатильность.

## Связанные статьи

- [[realized-kernels|Реализованные ядра]] — альтернативный подход к оценке интегрированной дисперсии
- [[garch-models|GARCH-модели]] — параметрическое моделирование волатильности
- [[levy-processes|Процессы Леви]] — теоретическая основа моделей с прыжками
- [[extreme-value-theory|Теория экстремальных значений]] — асимптотика тяжёлых хвостов прыжков
- [[volatility-forecasting|Прогнозирование волатильности]] — HAR-RV-J на практике

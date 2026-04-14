---
title: "Модели ARIMA"
category: "Анализ сигналов"
order: 14
lang: "ru"
slug: "arima-models"
---
# Модели ARIMA

Модель **авторегрессии интегрированного скользящего среднего (ARIMA)**, систематизированная Боксом и Дженкинсом (1970), является стандартным инструментом прогнозирования нестационарных временных рядов. Ключевое расширение по сравнению с ARMA — дифференцирование, превращающее нестационарный ценовой ряд в стационарный ряд доходностей.

## Необходимые знания

[[ar-models]], [[arma-models]]

## Обзор и предпосылки

Большинство финансовых временных рядов — цены активов, процентные ставки, макроэкономические показатели — содержат стохастические тренды (единичные корни) и не являются стационарными. Прямое применение ARMA к таким рядам даёт spurious regression. ARIMA решает эту проблему интегрированием порядка $d$: применением разностного оператора $(1-L)^d$.

Расширение SARIMA добавляет сезонные компоненты — критически важные для товарных цен, потребительских данных и макро-рядов с годовой периодичностью. SARIMA обозначается как $\text{ARIMA}(p,d,q)(P,D,Q)_s$, где $s$ — длина сезонного цикла.

## Математическая база

Модель $ARIMA(p, d, q)$ задаётся как:

$$
\phi(L)(1-L)^d X_t = c + \theta(L)\epsilon_t
$$

где $\phi(L) = 1 - \phi_1 L - \cdots - \phi_p L^p$ и $\theta(L) = 1 + \theta_1 L + \cdots + \theta_q L^q$.

**Полная SARIMA** нотация:

$$
\Phi(L^s)\phi(L)(1-L)^d(1-L^s)^D X_t = \Theta(L^s)\theta(L)\epsilon_t
$$

**Тест Дики-Фуллера (ADF)** для единичного корня — регрессия:

$$
\Delta X_t = \alpha + \beta t + \gamma X_{t-1} + \sum_{j=1}^k \delta_j \Delta X_{t-j} + \epsilon_t
$$

$H_0: \gamma = 0$ (единичный корень). Статистика $t_{\hat\gamma}$ сравнивается с критическими значениями Маккиннона.

**Тест KPSS** (альтернативный): $H_0$ — стационарность, что позволяет подтвердить стационарность дифференцированного ряда.

**Информационные критерии** для выбора порядка $(p,q)$:

$$
AIC = -2\ln\hat{\mathcal{L}} + 2k, \quad BIC = -2\ln\hat{\mathcal{L}} + k\ln T
$$

## Ключевые свойства

- **$d = 0$**: ARMA — ряд уже стационарен
- **$d = 1$**: Первые разности — типично для ценовых рядов
- **$d = 2$**: Вторые разности — редко, для рядов со стохастическим трендом в первых разностях
- **Дрейф**: при $c \neq 0$ в модели с $d \geq 1$ ряд имеет детерминированный тренд
- **Предсказуемость**: горизонт прогноза ограничен — дисперсия ошибки растёт как $O(h)$ для $d=1$

## Реализация на Python

```python
import numpy as np
import pandas as pd
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.tsa.stattools import adfuller, kpss
import warnings

def test_stationarity(series: pd.Series, max_diff: int = 2) -> dict:
    """Последовательное тестирование на единичный корень и определение d."""
    for d in range(max_diff + 1):
        y = series.diff(d).dropna() if d > 0 else series
        adf_stat, adf_p, *_ = adfuller(y, autolag='AIC')
        kpss_stat, kpss_p, *_ = kpss(y, regression='c', nlags='auto')
        if adf_p < 0.05 and kpss_p > 0.05:
            return {'d': d, 'adf_p': adf_p, 'kpss_p': kpss_p, 'stationary': True}
    return {'d': max_diff, 'adf_p': adf_p, 'kpss_p': kpss_p, 'stationary': False}

def auto_arima_bic(series: pd.Series, d: int, max_p: int = 4, max_q: int = 4) -> dict:
    """Поиск по сетке ARIMA(p,d,q) с минимизацией BIC."""
    best_bic = np.inf
    best_order = (1, d, 0)
    for p in range(max_p + 1):
        for q in range(max_q + 1):
            if p == 0 and q == 0:
                continue
            try:
                with warnings.catch_warnings():
                    warnings.simplefilter('ignore')
                    res = ARIMA(series, order=(p, d, q)).fit()
                    if res.bic < best_bic:
                        best_bic = res.bic
                        best_order = (p, d, q)
            except Exception:
                continue
    return {'order': best_order, 'bic': best_bic}

def arima_forecast(series: pd.Series, order: tuple, steps: int = 10) -> dict:
    """Подгонка ARIMA и прогноз с доверительными интервалами."""
    model = ARIMA(series, order=order).fit()
    forecast = model.get_forecast(steps=steps)
    return {
        'mean': forecast.predicted_mean,
        'conf_int': forecast.conf_int(alpha=0.05),
        'aic': model.aic,
        'bic': model.bic,
    }

# Пример: ряд доходностей индекса
np.random.seed(42)
prices = 100 * np.exp(np.cumsum(np.random.normal(0.0003, 0.015, 500)))
log_prices = pd.Series(np.log(prices))
stat_result = test_stationarity(log_prices)
best = auto_arima_bic(log_prices, d=stat_result['d'])
forecast = arima_forecast(log_prices, best['order'], steps=20)
```

## Прогноз ARIMA(1,1,1) с доверительным интервалом

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": "480", "actual": 5.14, "forecast": null},
    {"t": "485", "actual": 5.16, "forecast": null},
    {"t": "490", "actual": 5.13, "forecast": null},
    {"t": "495", "actual": 5.17, "forecast": null},
    {"t": "500", "actual": 5.15, "forecast": 5.15},
    {"t": "505", "actual": null, "forecast": 5.17},
    {"t": "510", "actual": null, "forecast": 5.19},
    {"t": "515", "actual": null, "forecast": 5.21},
    {"t": "520", "actual": null, "forecast": 5.22}
  ],
  "lines": [
    {"dataKey": "actual", "stroke": "#3b82f6", "name": "Факт"},
    {"dataKey": "forecast", "stroke": "#ef4444", "name": "Прогноз ARIMA"}
  ]
}
```

## Таблица параметров

| Символ | Название | Описание | Типичный диапазон |
|:---|:---:|:---|:---|
| $p$ | Порядок AR | Авторегрессионные лаги | 0 – 5 |
| $d$ | Порядок интегрирования | Число дифференцирований | 0, 1, 2 |
| $q$ | Порядок MA | Лаги скользящего среднего | 0 – 5 |
| $P,D,Q$ | Сезонные порядки | Сезонные компоненты SARIMA | 0 – 2 |
| $s$ | Период сезонности | Длина цикла | 4, 12, 52, 252 |

## Ограничения и расширения

**Ограничения:**
- ARIMA предполагает линейность и постоянную дисперсию инноваций; не улавливает режимные сдвиги или кластеризацию волатильности.
- Неправильный выбор $d$ (недостаточное или избыточное дифференцирование) искажает прогнозы.
- Длинная память (экспоненциальное затухание ACF) требует дробных моделей ARFIMA.

**Расширения:**
- **ARIMA-GARCH**: модель среднего ARIMA + GARCH для дисперсии.
- **ARIMAX**: включает экзогенные переменные.
- **ARFIMA**: дробное $d \in (0, 0.5)$ для рядов с длинной памятью (реализованная волатильность).

## Практическое применение

1. **Прогнозирование волатильности**: AR(FI)MA по реализованной волатильности конкурирует с GARCH на дневных горизонтах.
2. **Алгоритмическая торговля**: ARIMA-прогнозы цен используются как входные данные для сигналов mean-reversion.
3. **Макроэкономическое прогнозирование**: ВВП, инфляция, денежные агрегаты — классические применения ARIMA центральными банками.
4. **Управление запасами**: спрос на сырьё и товарные цены с сезонной компонентой моделируются SARIMA.
5. **Риск-менеджмент**: прогнозы ARIMA для переменных состояния (ставки, спреды) используются в стресс-сценариях.

## Связанные темы
- [[volatility-forecasting]]
- [[hurst-exponent]]
- [[mcmc]]
- [[levy-processes]]
- [[arma-models]]
- [[ar-models]]

---
title: "Лямбда Кайла: коэффициент ценового импакта"
category: "Микроструктура рынка"
order: 90
lang: "ru"
---

# Лямбда Кайла: коэффициент ценового импакта

**Лямбда Кайла** ($\lambda$) — параметр рыночной микроструктуры, описывающий, на сколько изменяется цена при покупке или продаже одной единицы инструмента. Введён Альбертом Кайлом в 1985 году в рамках модели инсайдерской торговли и стал основным инструментом измерения **глубины рынка**.

## Модель Кайла (1985)

Три типа участников:
- **Инсайдер** — знает фундаментальную стоимость $v$, максимизирует прибыль
- **Шумовые трейдеры** — торгуют объёмом $u \sim \mathcal{N}(0, \sigma_u^2)$
- **Маркетмейкер** — видит суммарный поток $y = x + u$, устанавливает цену

Оптимальная стратегия маркетмейкера — линейная ценовая функция:

$$
p = \mu + \lambda \cdot y
$$

где $\mu = E[v]$ — предварительная оценка стоимости, $y$ — суммарный поток заявок.

### Равновесное значение $\lambda$

Инсайдер решает:

$$
\max_x \; E[(v - p) \cdot x] = \max_x \; (v - \mu - \lambda x) \cdot x
$$

Оптимальный объём $x^* = \frac{v - \mu}{2\lambda}$.

Маркетмейкер знает стратегию инсайдера, поэтому $\lambda$ в равновесии:

$$
\boxed{\lambda = \frac{\sigma_v}{2\sigma_u}}
$$

где $\sigma_v = \sqrt{\text{Var}(v)}$ — неопределённость фундаментальной стоимости, $\sigma_u$ — объём шумовой торговли.

### Глубина рынка

Обратная величина $\lambda$:

$$
D = \frac{1}{\lambda} = \frac{2\sigma_u}{\sigma_v}
$$

— количество единиц актива, которое можно продать/купить при движении цены на 1 единицу. Чем больше шумовой поток, тем глубже рынок.

## Эмпирическая оценка $\lambda$

Кайлова лямбда оценивается регрессией:

$$
\Delta p_t = \alpha + \lambda \cdot \text{OF}_t + \varepsilon_t
$$

где $\text{OF}_t$ — чистый поток заявок (Order Flow) за период $t$, $\Delta p_t$ — изменение цены за тот же период.

Практическая единица: **базисные пункты на миллион долларов** (bps/$M).

```python
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

def estimate_kyle_lambda(trades: pd.DataFrame,
                         interval: str = '1min') -> dict:
    """
    trades: DataFrame с колонками:
        'timestamp', 'price', 'volume', 'side' ('buy' / 'sell')
    interval: агрегация для оценки λ
    Возвращает: {'lambda': float, 'r2': float, 'depth': float}
    """
    trades = trades.copy()
    trades['timestamp'] = pd.to_datetime(trades['timestamp'])
    trades = trades.set_index('timestamp')

    # Знаковый объём: buy → +, sell → −
    trades['signed_vol'] = np.where(
        trades['side'] == 'buy',
        trades['volume'],
        -trades['volume']
    )
    trades['mid'] = trades['price']  # если нет bid/ask, используем last

    bars = trades.resample(interval).agg(
        order_flow=('signed_vol', 'sum'),
        price_change=('mid', lambda x: x.iloc[-1] - x.iloc[0])
        if len(x) > 0 else 0
    ).dropna()

    X = bars[['order_flow']].values
    y = bars['price_change'].values

    model = LinearRegression().fit(X, y)
    lam = model.coef_[0]
    r2 = model.score(X, y)

    return {
        'lambda': lam,          # bps / unit
        'r2': r2,
        'depth': 1 / lam if lam > 0 else np.inf   # units per bps
    }
```

## Многопериодная модель и последовательная торговля

В модели с $N$ периодами ($n = 1, \ldots, N$) равновесное $\lambda_n$ растёт к концу торгового дня:

$$
\lambda_n = \frac{\sigma_v}{2\sigma_u} \cdot \frac{1}{\sqrt{N - n + 1}}
$$

Это предсказывает **сужение рынка к закрытию** (меньше шумовой торговли, инсайдер торгует агрессивнее) — феномен, наблюдаемый эмпирически в NYSE.

## Расширения

### Almgren-Chriss и рыночный импакт

В задаче оптимального исполнения ценовой импакт разбивается:

$$
\text{Impact} = \underbrace{\eta \cdot \dot{x}}_{\text{мгновенный}} + \underbrace{\lambda \cdot x}_{\text{постоянный}}
$$

где $x$ — остаток позиции, $\dot{x}$ — скорость торговли, $\eta$ — коэффициент краткосрочного импакта.

### Хасброук (1991): информационная доля

Информационное содержание одной сделки:

$$
IS = \frac{\lambda^2 \sigma_x^2}{\sigma_v^2}
$$

— доля вариации цен, объясняемая информированным потоком.

## Практическое применение

| Применение | Как используется $\lambda$ |
|-----------|---------------------------|
| Optimal execution | Минимизация стоимости через $\lambda \cdot x^2$ |
| Маркетмейкинг | Расчёт справедливого полуспреда |
| Мониторинг ликвидности | Сравнение $\lambda$ по инструментам и во времени |
| Стресс-тестинг | Сценарный рост $\lambda$ в кризисные периоды |

## Связанные статьи

- [[vpin|VPIN]] — VPIN ≈ $2\lambda \cdot \sigma_u / \sigma_v$: оба измеряют информационное давление
- [[order-flow-imbalance|Order Flow Imbalance и Microprice]] — эмпирический показатель потока заявок
- [[optimal-execution|Кросс-импакт и оптимальное исполнение]] — применение $\lambda$ в задаче исполнения
- [[avellaneda-stoikov|Модель Авелланеды-Стойкова]] — котирование с учётом $\lambda$
- [[amihud-illiquidity|Коэффициент неликвидности Амихуда]] — альтернативная дневная метрика ликвидности

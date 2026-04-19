---
slug: "/finance/vpin"
title: "VPIN: вероятность информированной торговли"
category: "Микроструктура рынка"
order: 89
lang: "ru"
---

# VPIN: вероятность информированной торговли

**VPIN (Volume-Synchronized Probability of Informed Trading)** — метрика микроструктуры рынка, измеряющая долю объёма торгов, генерируемую информированными участниками. В отличие от классического показателя PIN, VPIN синхронизирует наблюдения по объёму, а не по времени, что делает его пригодным для высокочастотных данных.

## Происхождение

VPIN предложен Эйзенбрун, О'Хара и Лопес де Прадо (2011) как предсказатель резких движений рынка. Авторы показали, что VPIN вырос до экстремальных значений за несколько часов до Flash Crash 6 мая 2010 года.

## Математическое определение

### Разметка потока заявок по объёму

Время делится на **вёдра объёма** (volume buckets) равного размера $V$. В каждом ведре $\tau$:

$$
V^B_\tau = \sum_{i \in \tau} V_i \cdot \mathbb{1}[\Delta p_i > 0], \quad V^S_\tau = V - V^B_\tau
$$

где $V_i$ — объём сделки $i$, $\Delta p_i$ — изменение цены.

На практике используется **объёмная классификация по Bulk Volume Classification**:

$$
V^B_\tau = V \cdot Z\!\left(\frac{\Delta \bar{p}_\tau}{\sigma_{\Delta p}}\right)
$$

где $Z(\cdot)$ — функция нормального распределения, $\Delta \bar{p}_\tau$ — изменение цены за ведро, $\sigma_{\Delta p}$ — стандартное отклонение изменений.

### Сам показатель

$$
\text{VPIN}_n = \frac{\sum_{\tau=n-L+1}^{n} |V^B_\tau - V^S_\tau|}{L \cdot V}
$$

где $L$ — размер скользящего окна (обычно 50 вёдер). VPIN принимает значения в $[0, 1]$: чем ближе к 1, тем выше доля информированного потока.

## Интерпретация

| VPIN | Интерпретация |
|------|--------------|
| < 0.3 | Нормальный рынок, маркетмейкеры зарабатывают спред |
| 0.3–0.6 | Повышенный информированный поток |
| > 0.6 | Высокий риск «токсичного» потока, маркетмейкеры расширяют спреды |
| > 0.8 | Экстремум, характерен для предкризисных состояний |

## Связь со спредом

Маркетмейкер, осознающий информационный риск, устанавливает спред:

$$
S^* = 2\lambda \cdot \text{VPIN} \cdot \sigma_v
$$

где $\lambda$ — коэффициент неприятия риска, $\sigma_v$ — волатильность «фундаментальной» стоимости. Таким образом VPIN прямо связан с [[kyle-lambda|лямбдой Кайла]].

## Пример: расчёт VPIN на тиковых данных

```python
import numpy as np
import pandas as pd
from scipy.stats import norm

def compute_vpin(trades: pd.DataFrame,
                 bucket_size: int = 10_000,
                 window: int = 50) -> pd.Series:
    """
    trades: DataFrame с колонками ['price', 'volume', 'timestamp']
    bucket_size: объём одного ведра (в контрактах/акциях)
    window: скользящее окно в вёдрах
    """
    # Изменение цены между тиками
    trades = trades.copy()
    trades['dp'] = trades['price'].diff()
    sigma_dp = trades['dp'].std()

    # BVC разметка: доля покупателей в каждой сделке
    trades['buy_frac'] = norm.cdf(trades['dp'] / sigma_dp)
    trades['buy_vol'] = trades['volume'] * trades['buy_frac']
    trades['sell_vol'] = trades['volume'] * (1 - trades['buy_frac'])

    # Разбивка по вёдрам объёма
    trades['cumvol'] = trades['volume'].cumsum()
    trades['bucket'] = (trades['cumvol'] // bucket_size).astype(int)

    buckets = trades.groupby('bucket').agg(
        buy_vol=('buy_vol', 'sum'),
        sell_vol=('sell_vol', 'sum'),
        timestamp=('timestamp', 'last')
    )
    buckets['imbalance'] = (buckets['buy_vol'] - buckets['sell_vol']).abs()
    buckets['total'] = buckets['buy_vol'] + buckets['sell_vol']

    # VPIN как скользящее среднее дисбаланса
    buckets['vpin'] = (
        buckets['imbalance'].rolling(window).sum() /
        buckets['total'].rolling(window).sum()
    )
    return buckets['vpin']
```

## Предсказание Flash Crash

Алгоритм мониторинга VPIN с порогом тревоги:

```python
def vpin_alert(vpin_series: pd.Series,
               threshold: float = 0.75,
               confirmation_buckets: int = 3) -> pd.Series:
    """
    Генерирует сигнал, если VPIN превышает порог
    threshold в течение confirmation_buckets подряд.
    """
    above = vpin_series > threshold
    # Скользящее среднее для подтверждения
    confirmed = above.rolling(confirmation_buckets).min().astype(bool)
    return confirmed
```

## Критика и ограничения

- **BVC-разметка** предполагает нормальность изменений цены, что нарушается в кризисные периоды
- Размер ведра $V$ влияет на результат: слишком малые вёдра — шум, слишком большие — запаздывание
- Ряд исследований не подтверждает предсказательную силу VPIN вне оригинальной выборки
- Лопес де Прадо (2019) сам указывает, что порог срабатывания следует калибровать индивидуально для каждого инструмента

## Связанные статьи

- [[kyle-lambda|Лямбда Кайла]] — коэффициент ценового импакта, напрямую связан с VPIN
- [[order-flow-imbalance|Order Flow Imbalance и Microprice]] — смежная метрика дисбаланса потока
- [[lob-prediction|Прогнозирование книги заявок (LOB)]] — применение метрик микроструктуры в ML
- [[hawkes-process|Процесс Хокса]] — моделирование кластеризации сделок во времени
- [[avellaneda-stoikov|Модель Авелланеды-Стойкова]] — оптимальное котирование с учётом инвентаря

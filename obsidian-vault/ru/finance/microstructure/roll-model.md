---
slug: "/finance/roll-model"
title: "Модель Ролла и декомпозиция спреда"
category: "Микроструктура рынка"
order: 110
lang: "ru"
---

# Модель Ролла и декомпозиция спреда

**Модель Ролла (Roll, 1984)** — базовая модель микроструктуры, которая оценивает эффективный спред из авто-ковариации изменений цен. Предполагает, что наблюдаемая цена отклоняется от «справедливой» из-за случайного знака сделки.

## Структура модели

Наблюдаемая цена сделки:

$$
S_t = m_t + c \cdot q_t
$$

где $m_t$ — эффективная (средняя) цена, $c$ — половина спреда, $q_t \in \{-1, +1\}$ — индикатор направления (покупка/продажа).

**Первая разность**:

$$
\Delta S_t = \Delta m_t + c(q_t - q_{t-1})
$$

При независимости $q_t$ и нулевом дрейфе $\Delta m_t = 0$:

$$
\text{Cov}(\Delta S_t, \Delta S_{t-1}) = -c^2
$$

**Оценка спреда**:

$$
\hat{s} = 2c = 2\sqrt{-\text{Cov}(\Delta S_t, \Delta S_{t-1})}
$$

## Расширенная декомпозиция (Glosten-Harris)

Спред делится на:
- **Компонента неблагоприятного отбора** (adverse selection, $\lambda$): информационные издержки
- **Компонента обработки ордеров** (order processing, $\phi$): фиксированные издержки

$$
s = 2\lambda + 2\phi
$$

## Реализация

```python
import numpy as np
import pandas as pd
from scipy.optimize import minimize_scalar

def roll_spread(prices: pd.Series) -> float:
    """
    Оценка эффективного спреда по модели Ролла.
    Если Cov > 0 — спред нулевой (шум доминирует).
    """
    dp = prices.diff().dropna()
    cov = dp.autocorr(lag=1) * dp.var()
    if cov >= 0:
        return 0.0
    return 2 * np.sqrt(-cov)


def decompose_spread(trades: pd.DataFrame) -> dict:
    """
    Декомпозиция спреда на adverse selection и order processing.

    trades: DataFrame с колонками 'price', 'midprice', 'direction' (+1/-1)
    """
    trade_cost = (trades['price'] - trades['midprice']) * trades['direction']
    half_spread = trade_cost.mean()

    # Оценка adverse selection через пересмотр midprice
    future_mid = trades['midprice'].shift(-1)
    price_impact = ((future_mid - trades['midprice']) * trades['direction']).mean()

    order_processing = half_spread - price_impact
    return {
        'half_spread':       round(half_spread, 6),
        'adverse_selection': round(price_impact, 6),
        'order_processing':  round(order_processing, 6),
        'pct_informed':      round(price_impact / half_spread * 100, 1) if half_spread else None
    }


def estimate_roll_by_window(prices: pd.Series, window: int = 20) -> pd.Series:
    """Rolling-оценка спреда Ролла."""
    dp = prices.diff()
    cov = dp.rolling(window).cov(dp.shift(1))
    spread = cov.clip(upper=0).abs().pow(0.5) * 2
    return spread


def corwin_schultz_spread(high: pd.Series, low: pd.Series) -> pd.Series:
    """
    Спред Corwin-Schultz (2012): использует High/Low без данных о сделках.
    beta = E[ln(H/L)^2], gamma = ln(H_2/L_2)^2
    """
    ln_hl = np.log(high / low)
    beta = ln_hl.rolling(2).apply(lambda x: x[0]**2 + x[1]**2)
    gamma = np.log(pd.concat([high, high.shift(1)], axis=1).max(axis=1) /
                   pd.concat([low, low.shift(1)], axis=1).min(axis=1)) ** 2

    alpha = (np.sqrt(2 * beta) - np.sqrt(beta)) / (3 - 2 * np.sqrt(2)) - np.sqrt(gamma / (3 - 2 * np.sqrt(2)))
    spread = 2 * (np.exp(alpha) - 1) / (1 + np.exp(alpha))
    return spread.clip(lower=0)
```

## Связанные статьи

- [[vpin|VPIN]] — вероятность информированной торговли
- [[pin-easley-ohara|PIN (Easley-O'Hara)]] — структурная модель информации
- [[kyle-lambda|Лямбда Кайла]] — ценовой импакт
- [[order-flow-imbalance|OFI и Microprice]] — микроструктурные сигналы

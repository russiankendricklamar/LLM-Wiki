---
slug: "/finance/vwap-twap"
title: "VWAP и TWAP: алгоритмы исполнения заявок"
category: "Микроструктура рынка"
order: 101
lang: "ru"
---

# VWAP и TWAP: алгоритмы исполнения заявок

**VWAP (Volume-Weighted Average Price)** и **TWAP (Time-Weighted Average Price)** — базовые алгоритмы исполнения, которые разбивают крупную заявку на части, минимизируя ценовой импакт. VWAP — индустриальный бенчмарк для оценки качества исполнения.

## TWAP

Равномерно распределяет объём $Q$ по времени:

$$
q_i = \frac{Q}{N}, \quad i = 1,\ldots,N
$$

Реализованный TWAP:

$$
\text{TWAP}_{\text{real}} = \frac{1}{N}\sum_{i=1}^N p_i
$$

Простота — главное достоинство; не адаптируется к объёму торгов.

## VWAP

### Бенчмарк

**Рыночный VWAP** за день:

$$
\text{VWAP} = \frac{\sum_i V_i \cdot p_i}{\sum_i V_i}
$$

**Цель алгоритма**: исполнить по цене, близкой к рыночному VWAP.

### Алгоритм участия

Торговать с постоянной долей рыночного объёма $\phi$:

$$
q_i = \phi \cdot V_i^{\text{market}}
$$

Где $V_i^{\text{market}}$ — объём рынка в интервале $i$. Нужно прогнозировать $V_i^{\text{market}}$.

### Модель дневного профиля объёма

Типичный U-образный (или W-образный) профиль:

$$
\hat{v}_i = \bar{V} \cdot w_i, \quad \sum_i w_i = 1
$$

Веса $w_i$ оцениваются из исторических данных с учётом дня недели и других эффектов.

## Реализация

```python
import numpy as np
import pandas as pd
from dataclasses import dataclass, field
from typing import Optional

@dataclass
class ExecutionState:
    filled:    float = 0.0
    target:    float = 0.0
    avg_price: float = 0.0
    cash_spent: float = 0.0

    def update(self, qty: float, price: float) -> None:
        if qty <= 0:
            return
        self.cash_spent += qty * price
        self.filled     += qty
        self.avg_price   = self.cash_spent / self.filled


class TWAPSchedule:
    def __init__(self, total_qty: float, n_intervals: int):
        self.slice_qty = total_qty / n_intervals
        self.n = n_intervals

    def get_target(self, interval: int) -> float:
        return self.slice_qty if interval < self.n else 0.0


class VWAPSchedule:
    def __init__(self, total_qty: float,
                 volume_profile: np.ndarray,  # нормализованный: сумма = 1
                 participation_rate: float = 0.10):
        self.total_qty = total_qty
        self.profile = volume_profile
        self.rate = participation_rate
        self.scheduled = total_qty * volume_profile  # по профилю

    def get_target(self, interval: int,
                   market_volume: Optional[float] = None) -> float:
        """
        interval: индекс текущего интервала
        market_volume: реализованный объём рынка (если известен)
        """
        if market_volume is not None:
            return min(self.rate * market_volume,
                       self.scheduled[interval] * 1.5)
        return self.scheduled[interval]


def simulate_execution(schedule: VWAPSchedule | TWAPSchedule,
                        price_path: np.ndarray,
                        volume_path: np.ndarray,
                        max_participation: float = 0.25) -> dict:
    """
    Симуляция исполнения по расписанию.

    price_path: цены по интервалам
    volume_path: объёмы рынка по интервалам
    """
    state = ExecutionState(target=sum(
        schedule.scheduled if hasattr(schedule, 'scheduled')
        else [schedule.slice_qty] * schedule.n
    ))
    n = len(price_path)
    records = []

    for i in range(n):
        if isinstance(schedule, VWAPSchedule):
            target = schedule.get_target(i, volume_path[i])
        else:
            target = schedule.get_target(i)

        # Не торговать более max_participation рынка
        max_qty = max_participation * volume_path[i]
        qty = min(target, max_qty, state.target - state.filled)
        qty = max(qty, 0)

        state.update(qty, price_path[i])
        records.append({'interval': i, 'qty': qty,
                         'price': price_path[i], 'filled': state.filled})

    market_vwap = np.sum(price_path * volume_path) / volume_path.sum()
    slippage = (state.avg_price - market_vwap) / market_vwap * 10_000  # bps

    return {
        'avg_price': state.avg_price,
        'market_vwap': market_vwap,
        'slippage_bps': slippage,
        'fill_rate': state.filled / state.target,
        'records': pd.DataFrame(records)
    }


def estimate_volume_profile(trades: pd.DataFrame,
                              n_bins: int = 78) -> np.ndarray:
    """
    Исторический профиль объёма (78 бинов = 5-мин для 6.5ч торг. дня).
    trades: DataFrame с 'timestamp' и 'volume'
    """
    trades = trades.copy()
    trades['bin'] = pd.cut(
        pd.to_datetime(trades['timestamp']).dt.hour * 60 +
        pd.to_datetime(trades['timestamp']).dt.minute,
        bins=n_bins, labels=False
    )
    profile = trades.groupby('bin')['volume'].mean()
    return (profile / profile.sum()).values
```

## IS (Implementation Shortfall)

Альтернативный алгоритм, минимизирующий **Implementation Shortfall** — разность между ценой решения о торговле и средней ценой исполнения:

$$
\text{IS} = \sum_i q_i (p_i - p^*) / Q
$$

где $p^*$ — цена в момент принятия решения. IS-алгоритм торгует агрессивнее в начале (минимизирует timing risk).

## Связанные статьи

- [[kyle-lambda|Лямбда Кайла]] — ценовой импакт от объёма
- [[order-flow-imbalance|OFI и Microprice]] — микроструктурные сигналы для адаптации расписания
- [[optimal-execution|Кросс-импакт и оптимальное исполнение]] — Almgren-Chriss
- [[avellaneda-stoikov|Модель Авелланеды-Стойкова]] — оптимальное котирование

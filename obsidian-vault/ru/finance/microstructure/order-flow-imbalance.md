---
slug: "/finance/order-flow-imbalance"
title: "Order Flow Imbalance и Microprice"
category: "Микроструктура рынка"
order: 91
lang: "ru"
---

# Order Flow Imbalance и Microprice

**Order Flow Imbalance (OFI)** — мгновенная метрика дисбаланса между давлением покупателей и продавцов на уровне книги заявок. **Microprice** — взвешенная по объёму середина спреда, более точная оценка «справедливой» цены, чем mid-price. Оба показателя широко применяются в краткосрочном прогнозировании и маркетмейкинге.

## Order Flow Imbalance

### Определение на основе LOB

Рассмотрим момент времени $t$ с лучшей ценой покупки $b_t$, продажи $a_t$ и соответствующими объёмами $Q^b_t$, $Q^a_t$:

$$
\text{OFI}_t = \Delta Q^b_t \cdot \mathbb{1}[b_t \geq b_{t-1}] - \Delta Q^a_t \cdot \mathbb{1}[a_t \leq a_{t-1}]
$$

Интуиция:
- Рост объёма на бид (при той же или выросшей цене) — давление покупателей, OFI > 0
- Рост объёма на оффер (при той же или упавшей цене) — давление продавцов, OFI < 0

### Векторизованная форма (первые $k$ уровней)

Для учёта нескольких уровней стакана:

$$
\text{OFI}^{(k)}_t = \sum_{i=1}^{k} w_i \left(\Delta Q^b_{i,t} - \Delta Q^a_{i,t}\right)
$$

где $w_i$ — убывающие веса (например, $w_i = 1/i$). Это **многоуровневый OFI**, предложенный Cont et al. (2014).

### Линейная предсказательная модель

OFI — ведущий индикатор цены в горизонте от нескольких секунд до минут:

$$
\Delta \text{mid}_{t+h} = \alpha + \beta \cdot \text{OFI}_t + \varepsilon_{t+h}
$$

Cont, Kukanov, Stoikov (2014) показали $R^2 \approx 65\%$ на горизонте 10 секунд для акций NYSE.

## Microprice

### Мотивация

**Mid-price** $m_t = (b_t + a_t)/2$ игнорирует информацию об объёмах на уровнях. Microprice учитывает её:

$$
\text{microprice}_t = b_t \cdot \frac{Q^a_t}{Q^b_t + Q^a_t} + a_t \cdot \frac{Q^b_t}{Q^b_t + Q^a_t}
$$

Если объём на оффере мал ($Q^a_t \ll Q^b_t$), microprice смещается ближе к bid — рынок давит вниз.

### Связь с ценовым движением

Смещение microprice от mid-price:

$$
\Delta_t = \text{microprice}_t - m_t = \frac{Q^b_t - Q^a_t}{Q^b_t + Q^a_t} \cdot \frac{s_t}{2}
$$

где $s_t = a_t - b_t$ — спред. Знак $\Delta_t$ предсказывает направление следующего движения.

### Обобщённая microprice (Stoikov, 2018)

$$
\text{microprice}^* = m_t + \kappa \cdot \text{OFI}_t \cdot s_t
$$

где $\kappa$ — калибруемый параметр. Объединяет LOB-имбаланс с потоком заявок.

## Практическая реализация

```python
import numpy as np
import pandas as pd
from dataclasses import dataclass
from typing import Optional

@dataclass
class LOBSnapshot:
    bid_prices: np.ndarray   # shape (k,), убывающий порядок
    bid_volumes: np.ndarray  # shape (k,)
    ask_prices: np.ndarray   # shape (k,), возрастающий порядок
    ask_volumes: np.ndarray  # shape (k,)
    timestamp: float


def microprice(snap: LOBSnapshot) -> float:
    """Взвешенная по первому уровню microprice."""
    qb, qa = snap.bid_volumes[0], snap.ask_volumes[0]
    pb, pa = snap.bid_prices[0], snap.ask_prices[0]
    return pb * (qa / (qb + qa)) + pa * (qb / (qb + qa))


def ofi(prev: LOBSnapshot, curr: LOBSnapshot, levels: int = 5) -> float:
    """
    Multi-level OFI с линейными весами 1/i.
    Выровненный на общие уровни через цену.
    """
    imbalance = 0.0
    weights = 1.0 / np.arange(1, levels + 1)

    for i in range(min(levels, len(curr.bid_prices))):
        pb_curr = curr.bid_prices[i]
        pb_prev = prev.bid_prices[i]
        pa_curr = curr.ask_prices[i]
        pa_prev = prev.ask_prices[i]

        # Бид-сторона
        if pb_curr >= pb_prev:
            delta_bid = curr.bid_volumes[i]
        elif pb_curr < pb_prev:
            delta_bid = -prev.bid_volumes[i]
        else:
            delta_bid = curr.bid_volumes[i] - prev.bid_volumes[i]

        # Оффер-сторона
        if pa_curr <= pa_prev:
            delta_ask = curr.ask_volumes[i]
        elif pa_curr > pa_prev:
            delta_ask = -prev.ask_volumes[i]
        else:
            delta_ask = curr.ask_volumes[i] - prev.ask_volumes[i]

        imbalance += weights[i] * (delta_bid - delta_ask)

    return imbalance


class OFIPricePredictor:
    """
    Линейная OFI-модель с рекурсивным обновлением коэффициентов.
    """
    def __init__(self, horizon: int = 10):
        self.horizon = horizon
        self._X: list[float] = []
        self._y: list[float] = []
        self.beta: Optional[float] = None
        self.alpha: Optional[float] = None

    def update(self, ofi_val: float, future_mid_change: float) -> None:
        self._X.append(ofi_val)
        self._y.append(future_mid_change)

        if len(self._X) >= 100:
            X = np.array(self._X[-500:])
            y = np.array(self._y[-500:])
            self.beta = np.cov(X, y)[0, 1] / np.var(X)
            self.alpha = np.mean(y) - self.beta * np.mean(X)

    def predict(self, ofi_val: float) -> Optional[float]:
        if self.beta is None:
            return None
        return self.alpha + self.beta * ofi_val
```

## OFI в машинном обучении

OFI и microprice используются как признаки в моделях прогнозирования цен:

| Признак | Горизонт | Типичный $R^2$ |
|---------|---------|---------------|
| OFI$^{(1)}$ | 10 с | 30–50% |
| OFI$^{(5)}$ | 10 с | 50–70% |
| Microprice deviation | 5 с | 20–40% |
| OFI + microprice | 10 с | 65–80% |

Данные указывают значительные различия между инструментами и периодами.

## Связанные статьи

- [[kyle-lambda|Лямбда Кайла]] — теоретическая основа OFI: $\Delta p \approx \lambda \cdot \text{OFI}$
- [[vpin|VPIN]] — объёмно-синхронизированная метрика информированного потока
- [[lob-prediction|Прогнозирование книги заявок (LOB)]] — глубокое обучение на LOB-данных
- [[avellaneda-stoikov|Модель Авелланеды-Стойкова]] — maркетмейкинг с учётом OFI
- [[hawkes-process|Процесс Хокса]] — самовозбуждающаяся динамика потока заявок

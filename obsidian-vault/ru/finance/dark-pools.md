---
title: "Тёмные пулы и фрагментация рынка"
category: "Микроструктура рынка"
order: 112
lang: "ru"
---

# Тёмные пулы и фрагментация рынка

**Тёмные пулы (Dark Pools)** — торговые площадки, где ордера не публикуются в книге ордеров до исполнения. Возникли как ответ на проблему ценового импакта крупных институциональных заявок на lit-рынках.

## Типы тёмных пулов

| Тип | Пример | Механизм |
|-----|--------|----------|
| Broker-operated | Goldman Sigma X, MS Pool | Интернализация клиентских ордеров |
| Exchange-operated | NYSE Dark, BATS Dark | Перекрёстные заявки без раскрытия |
| Independent | Liquidnet, ITG POSIT | Блочная торговля между институционалами |
| HFT-oriented | IEX (не dark, но защита) | Speed-bump от злоупотреблений |

## Фрагментация рынка

**Индекс фрагментации Херфиндаля-Хиршмана** по долям объёма $s_i$:

$$
\text{HHI} = \sum_i s_i^2, \quad \text{Fragmentation} = 1 - \text{HHI}
$$

При полной фрагментации (равные доли $N$ бирж): $\text{HHI} = 1/N$.

**MiFID II (EU)** ввёл **«двойной объёмный ограничитель»** (Double Volume Cap):
- Не более 4% объёма бумаги через один тёмный пул за 12 месяцев
- Не более 8% объёма через все тёмные пулы

## Токсичность потока ордеров

Тёмные пулы страдают от **adverse selection**: информированные трейдеры торгуют, когда знают направление. Метрика токсичности:

$$
\text{Toxicity} = \frac{|\text{Price drift after execution}|}{\text{Half-spread}}
$$

```python
import numpy as np
import pandas as pd
from dataclasses import dataclass, field

@dataclass
class DarkPoolStats:
    venue: str
    volume_share: float
    fill_rate: float     # % ордеров исполненных
    avg_size: float      # средний размер сделки
    toxicity: float      # drift / spread


def compute_fragmentation(venue_volumes: dict[str, float]) -> dict:
    """
    Индексы фрагментации по площадкам.
    venue_volumes: {'NYSE': 40000, 'BATS': 20000, 'Dark1': 5000, ...}
    """
    total = sum(venue_volumes.values())
    shares = {v: vol / total for v, vol in venue_volumes.items()}
    hhi = sum(s**2 for s in shares.values())
    return {
        'hhi': hhi,
        'fragmentation': 1 - hhi,
        'effective_venues': 1 / hhi,
        'shares': shares
    }


def dark_pool_toxicity(executions: pd.DataFrame,
                        horizon_minutes: int = 30) -> pd.Series:
    """
    Токсичность исполнения в тёмном пуле.
    executions: DataFrame с 'exec_price', 'direction', 'mid_before', 'mid_after'
    """
    exec_df = executions.copy()
    exec_df['half_spread'] = exec_df['exec_price'] - exec_df['mid_before']
    exec_df['half_spread'] = exec_df['half_spread'].abs()

    exec_df['price_drift'] = (
        (exec_df['mid_after'] - exec_df['mid_before']) * exec_df['direction']
    )
    exec_df['toxicity'] = exec_df['price_drift'] / exec_df['half_spread'].replace(0, np.nan)
    return exec_df['toxicity']


def optimal_routing(order_size: float,
                    venues: list[dict],
                    risk_aversion: float = 0.5) -> dict[str, float]:
    """
    Простая маршрутизация: распределить заявку по биржам,
    минимизируя E[cost] + risk_aversion * Var[cost].

    venues: [{'name': str, 'fill_prob': float, 'expected_impact': float}]
    """
    n = len(venues)
    # Упрощение: пропорционально fill_rate / impact
    weights_raw = [v['fill_prob'] / (v['expected_impact'] + 1e-8) for v in venues]
    total = sum(weights_raw)
    allocations = {}
    for v, w in zip(venues, weights_raw):
        allocations[v['name']] = order_size * w / total
    return allocations


def double_volume_cap_check(symbol_volumes: pd.DataFrame,
                             single_pool_cap: float = 0.04,
                             total_dark_cap: float = 0.08) -> pd.DataFrame:
    """
    MiFID II Double Volume Cap проверка.
    symbol_volumes: DataFrame с 'venue', 'dark', 'volume', 'symbol', '12m_market_vol'
    """
    result = []
    for symbol, grp in symbol_volumes.groupby('symbol'):
        mkt = grp['12m_market_vol'].iloc[0]
        dark_total = grp[grp['dark']]['volume'].sum()
        for _, row in grp[grp['dark']].iterrows():
            single_share = row['volume'] / mkt
            total_share = dark_total / mkt
            result.append({
                'symbol': symbol,
                'venue': row['venue'],
                'single_share': single_share,
                'total_dark_share': total_share,
                'single_breach': single_share > single_pool_cap,
                'total_breach': total_share > total_dark_cap,
            })
    return pd.DataFrame(result)
```

## Связанные статьи

- [[vpin|VPIN]] — токсичность потока ордеров
- [[pin-easley-ohara|PIN]] — информированная торговля
- [[optimal-execution|Оптимальное исполнение]] — маршрутизация через площадки
- [[kyle-lambda|Лямбда Кайла]] — ценовой импакт

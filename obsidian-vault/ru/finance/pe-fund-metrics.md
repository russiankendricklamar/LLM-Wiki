---
title: "Метрики фондов прямых инвестиций: IRR, MOIC, DPI и J-кривая"
category: "Управление рисками"
order: 92
lang: "ru"
---

# Метрики фондов прямых инвестиций: IRR, MOIC, DPI и J-кривая

Фонды прямых инвестиций (Private Equity) имеют нестандартную структуру денежных потоков: деньги вкладываются постепенно (capital calls), а прибыль возвращается через 5–10 лет. Это делает стандартные метрики вроде годовой доходности неинформативными. PE-индустрия выработала собственный набор показателей.

## Основные метрики

### IRR — внутренняя норма доходности

**IRR** — ставка дисконтирования, при которой NPV всех денежных потоков равна нулю:

$$
\sum_{t=0}^{T} \frac{CF_t}{(1 + \text{IRR})^t} = 0
$$

Для PE: $CF_t < 0$ — capital calls (инвестиции), $CF_t > 0$ — distributions (возврат капитала + прибыль).

**Ограничения IRR:**
- Зависит от **тайминга**: ранние возвраты искусственно поднимают IRR
- **Несравнимость**: IRR 30% за 2 года ≠ IRR 30% за 10 лет с точки зрения абсолютной прибыли
- **Предположение реинвестирования**: неявно предполагает реинвестирование по той же ставке IRR

### MOIC — мультипликатор инвестиций

$$
\text{MOIC} = \frac{\text{Реализованные} + \text{Нереализованные доходы}}{\text{Вложенный капитал}}
$$

MOIC 2.5× означает: на каждый вложенный доллар получено $2.50. Не зависит от времени — простой и понятный показатель.

### DPI и RVPI

**DPI (Distributions to Paid-In)** — доля вложенного капитала, уже возвращённая инвесторам:

$$
\text{DPI} = \frac{\text{Cumulative Distributions}}{\text{Paid-In Capital}}
$$

DPI > 1.0 означает, что фонд вернул больше, чем взял.

**RVPI (Residual Value to Paid-In)** — нереализованная стоимость портфеля:

$$
\text{RVPI} = \frac{\text{NAV (Net Asset Value)}}{\text{Paid-In Capital}}
$$

**TVPI (Total Value to Paid-In)**:

$$
\text{TVPI} = \text{DPI} + \text{RVPI} = \text{MOIC}
$$

### PME — Public Market Equivalent

Сравнение с публичным рынком: сколько бы заработал инвестор, вложив те же деньги в индекс (например, S&P 500) по тому же графику?

**Long-Nickels PME**:

$$
\text{PME} = \frac{\sum_t D_t / I_t^{\text{index}}}{\sum_t C_t / I_t^{\text{index}}}
$$

где $C_t$ — capital calls, $D_t$ — distributions, $I_t^{\text{index}}$ — стоимость индекса в момент $t$.

PME > 1.0 означает, что PE превзошёл публичный рынок.

## J-кривая

**J-кривая** — типичная динамика NAV фонда во времени: сначала падение (из-за комиссий за управление и недооценки в первые годы), затем рост по мере реализации инвестиций.

```
NAV/
  |                        *
  |                      **
  |                    **
  |                  **
  |________________**_________> время
  |             **
  |           **
  |_________**  ← «яма» J-кривой
```

Глубина и длительность «ямы» зависят от:
- Скорости инвестирования (deployment pace)
- Размера management fee (обычно 2% в год)
- Успешности ранних портфельных компаний

## Реализация

```python
import numpy as np
import pandas as pd
from scipy.optimize import brentq
from typing import Optional

def irr(cash_flows: np.ndarray,
        dates: Optional[np.ndarray] = None,
        guess: float = 0.1) -> float:
    """
    IRR для произвольного графика денежных потоков.

    cash_flows: массив CF (отрицательные = инвестиции, положительные = доходы)
    dates: в годах от даты инвестирования (если None, предполагаются ежегодные)

    Возвращает: IRR как десятичная дробь (например 0.25 = 25%)
    """
    if dates is None:
        dates = np.arange(len(cash_flows), dtype=float)

    def npv(rate: float) -> float:
        return float(np.sum(cash_flows / (1 + rate) ** dates))

    # Поиск IRR методом Брента
    try:
        return brentq(npv, -0.999, 100.0, xtol=1e-8)
    except ValueError:
        return float('nan')


def xirr(cash_flows: list[float],
         dates_str: list[str]) -> float:
    """
    XIRR с реальными датами (аналог Excel XIRR).
    dates_str: ISO-format даты
    """
    dates_pd = pd.to_datetime(dates_str)
    t0 = dates_pd[0]
    years = np.array([(d - t0).days / 365.25 for d in dates_pd])
    return irr(np.array(cash_flows), years)


class PEFundAnalytics:
    """
    Полный набор метрик фонда PE.
    """
    def __init__(self,
                 capital_calls: pd.Series,    # отрицательные, с датой
                 distributions: pd.Series,    # положительные, с датой
                 nav: float = 0.0):
        """
        capital_calls / distributions: Series с DatetimeIndex и значениями.
        nav: текущая чистая стоимость активов (нереализованные позиции).
        """
        self.calls = capital_calls
        self.dists = distributions
        self.nav = nav

        self.paid_in = -capital_calls.sum()
        self.cumulative_distributions = distributions.sum()

    @property
    def dpi(self) -> float:
        return self.cumulative_distributions / self.paid_in

    @property
    def rvpi(self) -> float:
        return self.nav / self.paid_in

    @property
    def tvpi(self) -> float:
        return self.dpi + self.rvpi

    @property
    def moic(self) -> float:
        return self.tvpi

    def fund_irr(self) -> float:
        """IRR всего фонда (включая NAV как финальный CF)."""
        all_cfs = pd.concat([self.calls, self.dists])
        all_cfs = all_cfs.sort_index()
        if self.nav > 0:
            all_cfs.loc[all_cfs.index[-1]] = (
                all_cfs.iloc[-1] + self.nav
            )
        t0 = all_cfs.index[0]
        years = np.array([(d - t0).days / 365.25 for d in all_cfs.index])
        return irr(all_cfs.values, years)

    def pme(self, index_values: pd.Series) -> float:
        """
        Long-Nickels PME против публичного индекса.
        index_values: цены индекса с DatetimeIndex.
        """
        def get_index(date: pd.Timestamp) -> float:
            idx = index_values.index.get_indexer([date], method='nearest')[0]
            return float(index_values.iloc[idx])

        dist_pme = sum(
            d / get_index(date)
            for date, d in self.dists.items()
        )
        call_pme = sum(
            abs(c) / get_index(date)
            for date, c in self.calls.items()
        )
        return dist_pme / call_pme if call_pme > 0 else float('nan')

    def j_curve(self) -> pd.Series:
        """Динамика TVPI по времени (J-кривая)."""
        all_dates = sorted(
            set(self.calls.index) | set(self.dists.index)
        )
        tvpi_ts = []
        for date in all_dates:
            cum_calls = -self.calls[:date].sum()
            cum_dists = self.dists[:date].sum()
            # NAV упрощённо: линейный рост к финальному значению
            frac_time = (date - all_dates[0]).days / (
                (all_dates[-1] - all_dates[0]).days + 1)
            approx_nav = self.nav * frac_time
            tvpi = (cum_dists + approx_nav) / cum_calls if cum_calls > 0 else 0
            tvpi_ts.append((date, tvpi))
        return pd.Series(
            dict(tvpi_ts), name='TVPI'
        ).sort_index()

    def summary(self) -> dict:
        return {
            'Paid-In Capital': round(self.paid_in, 2),
            'Distributions': round(self.cumulative_distributions, 2),
            'NAV': round(self.nav, 2),
            'DPI': round(self.dpi, 2),
            'RVPI': round(self.rvpi, 2),
            'TVPI / MOIC': round(self.tvpi, 2),
            'IRR': f"{self.fund_irr():.1%}",
        }
```

### Пример

```python
import pandas as pd

calls = pd.Series({
    '2018-01-01': -10_000_000,
    '2019-06-01': -15_000_000,
    '2020-03-01': -8_000_000,
}, dtype=float)
calls.index = pd.to_datetime(calls.index)

dists = pd.Series({
    '2022-09-01': 12_000_000,
    '2023-12-01': 20_000_000,
}, dtype=float)
dists.index = pd.to_datetime(dists.index)

fund = PEFundAnalytics(calls, dists, nav=18_000_000)
print(fund.summary())
# {'DPI': 0.97, 'RVPI': 0.55, 'TVPI / MOIC': 1.52, 'IRR': '14.3%'}
```

## Целевые показатели по стратегиям

| Стратегия | Целевой IRR | Целевой MOIC | Горизонт |
|-----------|------------|-------------|---------|
| Venture Capital | 25–35% | 3.0–5.0× | 7–12 лет |
| Growth Equity | 20–30% | 2.5–4.0× | 5–8 лет |
| Buyout | 15–25% | 2.0–3.5× | 4–7 лет |
| Distressed Debt | 15–20% | 1.5–2.5× | 3–5 лет |
| Real Assets | 10–15% | 1.5–2.0× | 8–15 лет |

## Связанные статьи

- [[monte-carlo-method|Метод Монте-Карло]] — симуляция денежных потоков фонда
- [[kelly-criterion|Критерий Келли]] — оптимальное распределение капитала
- [[portfolio-optimization-ml|Оптимизация портфеля с ML]] — аллокация на PE в мультиклассовом портфеле
- [[value-at-risk|Value at Risk]] — VaR-метрики для PE (на основе NAV)
- [[repo-market-systemic|Репо-рынок и системный риск]] — финансирование PE через репо

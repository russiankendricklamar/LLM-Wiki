---
title: "Переход LIBOR → SOFR"
category: "Управление рисками"
order: 118
lang: "ru"
---

# Переход LIBOR → SOFR

**LIBOR (London Interbank Offered Rate)** — ключевая плавающая ставка, используемая в $\sim$350 трлн долларовых контрактов. После скандала с манипуляциями (2012) и прекращения публикации USD LIBOR в июне 2023 произошёл переход на **SOFR (Secured Overnight Financing Rate)**.

## LIBOR vs SOFR

| Параметр | LIBOR | SOFR |
|---------|-------|------|
| База | Unsecured inter-bank (term) | Secured overnight (Treasury repo) |
| Кривая | Term structure (O/N–12M) | Overnight only |
| Кредитный риск | Включает bank credit spread | Безрисковый (RFR) |
| Публикация | Ежедневно (forward-looking) | Следующий день (backward-looking) |

## Ставки-заменители

**SOFR Averages** (SONIA в UK, ESTR в EU):

$$
\text{SOFR-Compound}_{[0,T]} = \prod_{i=0}^{n-1}\left(1 + \frac{r_i \cdot d_i}{360}\right) - 1
$$

**ISDA Spread Adjustment** (фиксированный, сходящийся к историческому спреду LIBOR-OIS):

| Тенор | USD LIBOR–SOFR |
|-------|----------------|
| 1M | +11.448 bps |
| 3M | +26.161 bps |
| 6M | +42.826 bps |
| 12M | +71.513 bps |

## Типы SOFR-ставок

- **SOFR In Arrears** (backward-looking): используется для большинства деривативов
- **Term SOFR** (CME): форвардная ставка, опубликованная CME; используется в займах

```python
import numpy as np
import pandas as pd
from datetime import date, timedelta

def sofr_compound(daily_rates: pd.Series, day_counts: pd.Series) -> float:
    """
    Накопленный SOFR за период.
    daily_rates: SOFR каждого дня (в долях, не %)
    day_counts: число дней действия каждой ставки
    """
    factor = np.prod(1 + daily_rates.values * day_counts.values / 360)
    return factor - 1


def sofr_to_libor_equivalent(sofr_compound: float,
                              spread_bps: float,
                              tenor_days: int) -> float:
    """
    Эквивалентная LIBOR-ставка через SOFR + ISDA spread.
    sofr_compound: накопленный SOFR
    spread_bps: фиксированный спред (ISDA)
    """
    rate_annual = sofr_compound * 360 / tenor_days
    return rate_annual + spread_bps / 10_000


def swap_libor_to_sofr(notional: float,
                        coupon_libor: float,
                        tenor_days: int,
                        sofr_daily: pd.Series,
                        day_counts: pd.Series,
                        spread_bps: float) -> dict:
    """
    Расчёт разницы в денежных потоках при переходе LIBOR → SOFR.
    """
    sofr_rate = sofr_compound(sofr_daily, day_counts)
    sofr_equiv = sofr_to_libor_equivalent(sofr_rate, spread_bps, tenor_days)

    libor_payment = notional * coupon_libor * tenor_days / 360
    sofr_payment = notional * sofr_equiv * tenor_days / 360
    adjustment = sofr_payment - libor_payment

    return {
        'libor_rate': coupon_libor,
        'sofr_compound': sofr_rate,
        'sofr_equivalent': sofr_equiv,
        'libor_cashflow': libor_payment,
        'sofr_cashflow': sofr_payment,
        'adjustment_pnl': adjustment
    }


def fallback_rate(index: str, tenor: str,
                  sofr_term: float) -> float:
    """
    ISDA fallback: заменяет LIBOR на Term SOFR + spread.
    """
    spreads = {
        ('USD_LIBOR', '1M'): 0.00011448,
        ('USD_LIBOR', '3M'): 0.00026161,
        ('USD_LIBOR', '6M'): 0.00042826,
        ('USD_LIBOR', '12M'): 0.00071513,
    }
    key = (index, tenor)
    if key not in spreads:
        raise KeyError(f"Unknown index/tenor: {key}")
    return sofr_term + spreads[key]


def discount_curve_sofr(sofr_rates: pd.Series,
                          maturities_years: list[float]) -> pd.Series:
    """
    Построение дисконтной кривой из SOFR overnight ставок (bootstrapping).
    sofr_rates: индексированный по датам overnight SOFR
    """
    df_factors = []
    for T in maturities_years:
        n_days = int(T * 252)
        daily = sofr_rates.iloc[:n_days].values[:n_days]
        daily = np.pad(daily, (0, max(0, n_days - len(daily))),
                       constant_values=daily[-1] if len(daily) > 0 else 0.05)
        compound = np.prod(1 + daily / 360)
        df_factors.append(1.0 / compound)

    return pd.Series(df_factors, index=maturities_years, name='discount_factor')
```

## Хронология перехода

| Дата | Событие |
|------|---------|
| 2012 | Скандал LIBOR-манипуляций |
| 2017 | FCA объявляет о прекращении поддержки LIBOR |
| 2021 | Прекращение GBP/EUR/CHF/JPY LIBOR |
| Июнь 2023 | Прекращение USD LIBOR (1M/3M/6M/12M) |
| 2023+ | Term SOFR как стандарт для займов в США |

## Связанные статьи

- [[swaps|Свопы процентных ставок]] — применение LIBOR/SOFR
- [[xva|XVA]] — кредитные корректировки дисконтирования
- [[nelson-siegel-svensson|Кривая Нельсона-Сигеля]] — моделирование ставок
- [[cir-hull-white|CIR и Hull-White]] — короткая ставка

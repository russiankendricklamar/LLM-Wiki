---
title: "Виды свопов"
category: "Модели ценообразования"
order: 23
lang: "ru"
---
# Виды свопов

**Своп** — производный финансовый инструмент, представляющий собой соглашение об обмене денежными потоками. Ванильный **процентный своп (IRS)** — крупнейший класс деривативов с открытыми позициями свыше $400 трлн условного номинала. Стороны обмениваются: фиксированная нога платит купон $K$ на номинал $N$, плавающая — ставку SOFR/EURIBOR.

## Математический аппарат

### Ценообразование ванильного IRS

Стоимость свопа (плательщик фиксированной ставки) при дисконтирующей кривой $\{D(0,T_i)\}$:

$$
V_{swap} = \underbrace{\sum_{i=1}^n D(0,T_i)\,\tau_i\,F(T_{i-1},T_i)\,N}_{\text{плавающая нога}} - \underbrace{K\sum_{i=1}^n D(0,T_i)\,\tau_i\,N}_{\text{фиксированная нога}}
$$

где $F(T_{i-1},T_i) = \frac{1}{\tau_i}\!\left(\frac{D(0,T_{i-1})}{D(0,T_i)}-1\right)$ — форвардная ставка, $\tau_i$ — день-счётный коэффициент.

### Паритетная ставка

Ставка $K^*$ при которой $V_{swap}=0$:

$$
K^* = \frac{D(0,T_0) - D(0,T_n)}{\sum_{i=1}^n D(0,T_i)\,\tau_i}
$$

### Бутстраппинг кривой дисконтирования

Итеративно из рыночных котировок, для $T_n$:

$$
D(0,T_n) = \frac{D(0,T_0) - K_n \sum_{i=1}^{n-1} D(0,T_i)\,\tau_i}{1 + K_n\,\tau_n}
$$

### DV01

**DV01** — чувствительность NPV к параллельному сдвигу кривой на 1 б.п.:

$$
\text{DV01} = -\frac{\partial V}{\partial y} \times 0{,}0001 \approx K\sum_{i=1}^n D(0,T_i)\,\tau_i^2\,N \times 0{,}0001
$$

## Python-реализация

```python
import numpy as np
from scipy.interpolate import CubicSpline

def bootstrap_discount_curve(
    maturities: np.ndarray,
    swap_rates: np.ndarray,
    freq: int = 2
) -> tuple[np.ndarray, np.ndarray]:
    """
    Бутстраппинг кривой дисконтирования из паритетных ставок свопа.

    Args:
        maturities: сроки в годах, напр. [1, 2, 3, 5, 7, 10]
        swap_rates: десятичные паритетные ставки (0.03 = 3%)
        freq: платежей в год (2 = полугодовые)

    Returns:
        (times, discount_factors)
    """
    dt = 1.0 / freq
    all_times = [0.0]
    all_dfs   = [1.0]

    for T, K in zip(maturities, swap_rates):
        times = np.arange(dt, T + dt / 2, dt)
        if len(all_times) > 1:
            known_df = CubicSpline(all_times, all_dfs)
        else:
            known_df = lambda x: np.ones_like(np.atleast_1d(x))

        sum_prev = sum(float(known_df(t)) * dt * K for t in times[:-1])
        dn = (1.0 - sum_prev) / (1.0 + K * dt)
        all_times.append(T)
        all_dfs.append(float(dn))

    return np.array(all_times), np.array(all_dfs)


def price_irs(
    fixed_rate: float,
    notional: float,
    maturity: float,
    disc_times: np.ndarray,
    disc_factors: np.ndarray,
    freq: int = 2,
    pay_fixed: bool = True
) -> dict:
    """
    Оценка ванильного процентного свопа.

    Returns:
        dict с 'npv', 'dv01', 'par_rate', 'fixed_leg', 'float_leg'
    """
    interp = CubicSpline(disc_times, disc_factors)
    dt = 1.0 / freq
    times = np.arange(dt, maturity + dt / 2, dt)
    taus  = np.full(len(times), dt)

    df_cur  = interp(times)
    df_prev = interp(np.maximum(times - dt, 1e-6))
    fwd = (df_prev / df_cur - 1) / dt

    float_leg = float(np.sum(df_cur * taus * fwd) * notional)
    fixed_leg = float(np.sum(df_cur * taus) * fixed_rate * notional)
    annuity   = float(np.sum(df_cur * taus))
    df0 = float(interp(1e-6))
    dfT = float(interp(maturity))
    par_rate  = (df0 - dfT) / annuity

    npv  = (float_leg - fixed_leg) if pay_fixed else (fixed_leg - float_leg)
    dv01 = annuity * notional * 0.0001

    return {
        "npv": npv, "dv01": dv01, "par_rate": par_rate,
        "fixed_leg": fixed_leg, "float_leg": float_leg,
        "annuity": annuity
    }

# ---- Пример ----
mats  = np.array([1.0, 2.0, 3.0, 5.0, 7.0, 10.0])
rates = np.array([0.042, 0.044, 0.045, 0.046, 0.047, 0.048])

times, dfs = bootstrap_discount_curve(mats, rates, freq=2)
print("Дисконт-факторы:")
for t, d in zip(times[1:], dfs[1:]):
    print(f"  T={t:.0f}y: D={d:.6f}  (имплиц. ставка {(-np.log(d)/t)*100:.2f}%)")

result = price_irs(0.046, 10_000_000, 10.0, times, dfs, freq=2)
print(f"\nNPV свопа (фикс 4.6%, 10Y, 10M): ${result['npv']:,.0f}")
print(f"Паритетная ставка:               {result['par_rate']*100:.4f}%")
print(f"DV01:                            ${result['dv01']:,.0f}")
```

## Кривая форвардных ставок

```chart
{
  "type": "line",
  "xAxis": "maturity",
  "data": [
    {"maturity": "1Y",  "spot": 4.20, "fwd": 4.20},
    {"maturity": "2Y",  "spot": 4.40, "fwd": 4.60},
    {"maturity": "3Y",  "spot": 4.50, "fwd": 4.70},
    {"maturity": "5Y",  "spot": 4.60, "fwd": 4.80},
    {"maturity": "7Y",  "spot": 4.70, "fwd": 4.90},
    {"maturity": "10Y", "spot": 4.80, "fwd": 5.00}
  ],
  "lines": [
    {"dataKey": "spot", "stroke": "#3b82f6", "name": "Спот-ставка (%)"},
    {"dataKey": "fwd",  "stroke": "#ef4444", "name": "Форвардная ставка (%)"}
  ]
}
```

## Сравнение основных типов свопов

| Тип свопа | Что обмениваем | Основной риск |
| :--- | :--- | :--- |
| **IRS** | Процентные ставки (фикс vs плав) | Процентный риск |
| **Currency** | Валюты + Ставки | Валютный + Процентный |
| **CDS** | Премия за страховку vs дефолт | Кредитный риск |
| **TRS** | Доход актива vs ставка | Рыночный риск актива |
| **Variance** | Реализованная vs вмененная волатильность | Риск волатильности |

## Справочник параметров

| Символ | Название | Описание | Типичный диапазон |
| :--- | :--- | :--- | :--- |
| $K^*$ | Паритетная ставка | Ставка при NPV = 0 | 1% – 8% |
| $D(0,T)$ | Дисконт-фактор | Текущая стоимость $1 в момент $T$ | 0,5 – 1,0 |
| $\tau_i$ | День-счёт коэффициент | ACT/360, ACT/365, 30/360 | 0,25 – 1,0 |
| DV01 | Долларовый базисный пункт | Чувствительность к сдвигу 1 б.п. | $100 – $50 000 |
| $N$ | Условный номинал | База для расчёта платежей | $1M – $1B |

## Ограничения и расширения

- **Кривая OIS vs LIBOR:** После реформы IBOR рынок перешёл на SOFR; для многовалютных свопов требуется двухкривовая модель (форвардная кривая отдельна от дисконтирующей).
- **CVA на своп:** Рыночная стоимость свопа меняется; кредитный риск контрагента учитывается через CVA — корреляция процентных ставок и кредитоспособности создаёт wrong-way risk.
- **Биржевые свопы:** После реформы Додда-Франка стандартные IRS проходят центральный клиринг (LCH, CME), что снижает кредитный риск, но требует начальной маржи.

## Практические применения

1. **Управление ALM:** Банки конвертируют фиксированные ипотечные кредиты в плавающие обязательства через IRS, согласуя дюрацию активов и пассивов.
2. **Суверенный долг:** Министерства финансов переводят фиксированный купонный долг в плавающий, снижая процентный риск.
3. **Хеджирование облигационных портфелей:** DV01-нейтральное хеджирование через IRS исключает параллельный сдвиг кривой.
4. **Свопы на совокупный доход (TRS):** Хедж-фонды получают экспозицию на активы без физической покупки, используя TRS.

## Связанные темы
- [[xva]]
- [[cs01]]
- [[dv01]]
- [[value-at-risk]]

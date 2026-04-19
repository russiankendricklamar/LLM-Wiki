---
slug: "/finance/variance-swaps"
title: "Вариационные свопы и премия за риск волатильности"
category: "Модели ценообразования"
order: 103
lang: "ru"
---

# Вариационные свопы и премия за риск волатильности

**Вариационный своп (Variance Swap)** — дериватив, выплата которого равна разности между реализованной дисперсией $RV$ актива за период $[0,T]$ и фиксированной ставкой $K_{\text{var}}$ (strike variance), умноженной на номинал. Это чистая ставка на уровень волатильности без дельта-риска.

## Структура выплаты

$$
\text{Payoff} = N_{\text{vega}} \cdot \frac{RV - K_{\text{var}}}{2\sigma_0}
$$

Чаще используют **дисперсионный** вид:

$$
\text{Payoff} = N_{\text{var}} \cdot (RV - K_{\text{var}})
$$

где $N_{\text{var}}$ — номинал в $/$(vega point)$^2$, $RV$ в аннуализированных процентных пунктах.

**Реализованная дисперсия**:

$$
RV = \frac{252}{n}\sum_{i=1}^{n} \ln^2\!\frac{S_i}{S_{i-1}}
$$

## Формула репликации (Carr-Madan)

Ключевой результат: вариационный своп реплицируется портфелем ванильных опционов всех страйков:

$$
K_{\text{var}} = \frac{2}{T} e^{rT} \left[\int_0^{F} \frac{P(K)}{K^2}\,dK + \int_F^{\infty} \frac{C(K)}{K^2}\,dK\right]
$$

где $F = S_0 e^{rT}$ — форвардная цена, $P(K)$, $C(K)$ — рыночные цены пут/колл.

**Дискретная аппроксимация**:

$$
K_{\text{var}} \approx \frac{2}{T} e^{rT} \sum_i \frac{\Delta K_i}{K_i^2} O_i
$$

где $O_i$ = колл при $K_i > F$, пут при $K_i < F$.

## VRP: премия за риск волатильности

**Variance Risk Premium (VRP)** — систематическая разность между подразумеваемой и реализованной волатильностью:

$$
\text{VRP}_t = \sigma_{\text{impl}}^2(t) - E_t[RV_{t,T}]
$$

Эмпирически: $\text{VRP} < 0$ (подразумеваемая > реализованной в ~75% месяцев).

Это означает, что **продавцы волатильности** (шорт вар-свопа) систематически зарабатывают, принимая на себя хвостовой риск.

## Реализация

```python
import numpy as np
from scipy.integrate import quad
from scipy.stats import norm

def carr_madan_var_strike(calls: np.ndarray, puts: np.ndarray,
                           strikes: np.ndarray, F: float, r: float,
                           T: float) -> float:
    """
    Дискретная аппроксимация var-strike по Carr-Madan.
    calls, puts: рыночные цены (размер nK)
    strikes: соответствующие страйки
    F: форвардная цена
    """
    result = 0.0
    for i, K in enumerate(strikes):
        dK = (strikes[i+1] - strikes[i-1])/2 if 0 < i < len(strikes)-1 \
             else (strikes[1]-strikes[0] if i==0 else strikes[-1]-strikes[-2])
        O = calls[i] if K >= F else puts[i]
        result += dK / K**2 * O
    return 2/T * np.exp(r*T) * result


def realized_variance(prices: np.ndarray, annualize: bool = True) -> float:
    """Реализованная дисперсия из ряда дневных цен."""
    log_ret = np.diff(np.log(prices))
    rv = np.sum(log_ret**2)
    return rv * (252 if annualize else 1) / len(log_ret)


def vrp_series(impl_vol: np.ndarray, realized_vol: np.ndarray) -> np.ndarray:
    """VRP = implied^2 - realized^2 (аннуализированные)."""
    return impl_vol**2 - realized_vol**2


def var_swap_pnl(rv_realized: float, k_var: float, n_var: float) -> float:
    """P&L дисперсионного свопа с точки зрения покупателя."""
    return n_var * (rv_realized - k_var)


def vol_swap_approx(k_var: float, vol_of_vol: float) -> float:
    """
    Приближение strike vol-свопа через var-strike:
    K_vol ≈ sqrt(K_var) * (1 - vol_of_vol^2 / (8 * K_var))
    Корректировка Джэнсена.
    """
    return np.sqrt(k_var) * (1 - vol_of_vol**2 / (8 * k_var))
```

## Vol-swap vs Var-swap

| Свойство | Var-swap | Vol-swap |
|---------|---------|---------|
| Выплата | $RV - K_{\text{var}}$ | $\sqrt{RV} - K_{\text{vol}}$ |
| Репликация | Точная (Carr-Madan) | Только приближение |
| Чувствительность к хвостам | Высокая (квадратичная) | Умеренная |
| Рыночная ликвидность | Средняя | Ниже |

## Связанные статьи

- [[heston-model|Модель Хестона]] — закрытая формула для var-strike
- [[realized-kernels|Реализованные ядра]] — оценка $RV$ из HF-данных
- [[bipower-variation|Двухмощная вариация]] — jump-robust $RV$
- [[rough-volatility|Грубая волатильность]] — форвардная структура var-strike
- [[vpin|VPIN]] — связь потока заявок с реализованной волатильностью

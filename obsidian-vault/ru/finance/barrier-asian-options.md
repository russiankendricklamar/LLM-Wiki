---
title: "Барьерные и азиатские опционы"
category: "Модели ценообразования"
order: 113
lang: "ru"
---

# Барьерные и азиатские опционы

**Экзотические опционы** — контракты с выплатой, зависящей от пути цены актива. Барьерные опционы активируются/деактивируются при пересечении барьера; азиатские определяются средней ценой.

## Барьерные опционы

**Down-and-Out Call** — обнуляется, если $S$ опускается ниже барьера $H$:

$$
\text{Payoff} = (S_T - K)^+ \cdot \mathbf{1}[\min_{t\leq T} S_t > H]
$$

### Формула Рубинштейна-Рейнера (Down-and-Out Call, $H < K$)

$$
C_{DO} = C_{BS} - \left(\frac{H}{S_0}\right)^{2\lambda} C_{BS}(S_0^* , K, r, \sigma, T)
$$

где $\lambda = (r + \sigma^2/2)/\sigma^2$, $S_0^* = H^2/S_0$ — «отражённое» пятно.

**Типы барьерных опционов**:

| Тип | Условие |
|-----|---------|
| Down-and-Out | Барьер снизу, опцион исчезает |
| Down-and-In | Барьер снизу, опцион появляется |
| Up-and-Out | Барьер сверху, исчезает |
| Up-and-In | Барьер сверху, появляется |

## Азиатские опционы

**Arithmetic Asian Call** (среднее арифметическое):

$$
\text{Payoff} = \left(\frac{1}{n}\sum_{i=1}^n S_{t_i} - K\right)^+
$$

Нет замкнутой формулы для арифметического среднего под GBM — используются аппроксимации или MC.

**Geometric Asian** — точная формула через эффективные параметры:

$$
\sigma_G = \sigma\sqrt{\frac{(n+1)(2n+1)}{6n^2}}, \quad r_G = \frac{r - \frac{\sigma^2}{2}}{2} + \frac{\sigma_G^2}{2}
$$

```python
import numpy as np
from scipy.stats import norm

def bs_call(S, K, T, r, sigma):
    d1 = (np.log(S/K) + (r + 0.5*sigma**2)*T) / (sigma*np.sqrt(T))
    d2 = d1 - sigma*np.sqrt(T)
    return S*norm.cdf(d1) - K*np.exp(-r*T)*norm.cdf(d2)


def down_out_call(S0: float, K: float, H: float, T: float,
                  r: float, sigma: float) -> float:
    """
    Down-and-Out Call: H < min(K, S0).
    Формула Рубинштейна-Рейнера.
    """
    if H >= S0 or H >= K:
        raise ValueError("H must be below both S0 and K")
    lam = (r + 0.5 * sigma**2) / sigma**2
    S_star = H**2 / S0
    c_plain = bs_call(S0, K, T, r, sigma)
    c_reflect = bs_call(S_star, K, T, r, sigma)
    return c_plain - (H / S0)**(2 * lam) * c_reflect


def geometric_asian_call(S0: float, K: float, T: float,
                          r: float, sigma: float, n: int) -> float:
    """
    Geometric Asian Call — замкнутая формула через эффективные параметры.
    n: число наблюдений.
    """
    sigma_g = sigma * np.sqrt((n + 1) * (2*n + 1) / (6 * n**2))
    r_g = 0.5 * (r - 0.5 * sigma**2) + 0.5 * sigma_g**2
    return bs_call(S0, K, T, r_g, sigma_g) * np.exp((r_g - r) * T)


def arithmetic_asian_mc(S0: float, K: float, T: float, r: float,
                          sigma: float, n_steps: int = 252,
                          n_paths: int = 100_000,
                          antithetic: bool = True) -> tuple[float, float]:
    """
    Arithmetic Asian Call через Monte Carlo с antithetic variates.
    Возвращает (цена, стандартная ошибка).
    """
    dt = T / n_steps
    rng = np.random.default_rng(0)
    Z = rng.standard_normal((n_paths // 2, n_steps))
    if antithetic:
        Z = np.vstack([Z, -Z])

    log_S = np.log(S0) + np.cumsum(
        (r - 0.5 * sigma**2) * dt + sigma * np.sqrt(dt) * Z, axis=1
    )
    S_paths = np.exp(log_S)
    avg_price = S_paths.mean(axis=1)
    payoffs = np.maximum(avg_price - K, 0) * np.exp(-r * T)
    price = payoffs.mean()
    se = payoffs.std() / np.sqrt(n_paths)
    return price, se


def barrier_mc(S0: float, K: float, H: float, T: float, r: float,
               sigma: float, barrier_type: str = 'down-out',
               n_steps: int = 252, n_paths: int = 100_000) -> float:
    """
    Барьерный опцион (колл) через MC.
    barrier_type: 'down-out', 'down-in', 'up-out', 'up-in'
    """
    dt = T / n_steps
    rng = np.random.default_rng(1)
    Z = rng.standard_normal((n_paths, n_steps))
    log_S = np.log(S0) + np.cumsum(
        (r - 0.5*sigma**2)*dt + sigma*np.sqrt(dt)*Z, axis=1
    )
    S_paths = np.exp(log_S)
    min_S = S_paths.min(axis=1)
    max_S = S_paths.max(axis=1)
    final_S = S_paths[:, -1]

    if barrier_type == 'down-out':
        active = min_S > H
    elif barrier_type == 'down-in':
        active = min_S <= H
    elif barrier_type == 'up-out':
        active = max_S < H
    else:  # up-in
        active = max_S >= H

    payoffs = np.where(active, np.maximum(final_S - K, 0), 0)
    return float(np.exp(-r*T) * payoffs.mean())
```

## Связанные статьи

- [[black-scholes|Формула Блэка-Шоулса]] — базовая модель
- [[monte-carlo-method|Метод Монте-Карло]] — симуляция экзотических опционов
- [[longstaff-schwartz|Алгоритм Лонгстаффа-Шварца]] — американские опционы
- [[variance-gamma|Variance Gamma]] — альтернативный процесс для экзотиков

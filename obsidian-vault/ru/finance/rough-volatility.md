---
title: "Грубая волатильность (Rough Volatility)"
category: "Стохастические процессы"
order: 94
lang: "ru"
---

# Грубая волатильность (Rough Volatility)

**Грубая волатильность (Rough Volatility)** — семейство моделей, в которых волатильность управляется **дробным броуновским движением** с показателем Хёрста $H < 1/2$. Предложено Gatheral, Jaisson и Rosenbaum (2018): высокочастотные данные показывают, что реализованная волатильность имеет показатель Хёрста $H \approx 0.1$, а не $0.5$ (стандартное BM) или $> 0.5$ (долгосрочная память). Это опровергает классические SV-модели и объясняет ряд аномалий в опционных рынках.

## Дробное броуновское движение

Процесс $W^H_t$ — **дробное броуновское движение (fBm)** с параметром Хёрста $H \in (0,1)$:

- $W^H_0 = 0$, гауссовские приращения
- Автоковариация: $\text{Cov}(W^H_t, W^H_s) = \frac{1}{2}\left(t^{2H} + s^{2H} - |t-s|^{2H}\right)$
- $H = 1/2$: стандартное BM (независимые приращения)
- $H > 1/2$: длинная память, тренд (приращения положительно коррелированы)
- $H < 1/2$: «грубость», антиперсистентность (приращения отрицательно коррелированы)

Выборочная регрессия:

$$
E\!\left[\log \frac{RV(t+\Delta)}{RV(t)}\right] \approx C + H \log \Delta
$$

Эмпирически: $H \approx 0.1$ для большинства активов.

## Модель Rough Bergomi (rBergomi)

Bayer, Friz, Gatheral (2016):

$$
dS_t = S_t \sqrt{V_t} \, dB_t
$$

$$
V_t = \xi_0(t) \exp\!\left(\eta \widetilde{W}^H_t - \frac{1}{2}\eta^2 t^{2H}\right)
$$

где $\widetilde{W}^H_t$ — дробное BM (построенное как свёртка Вольтерра):

$$
\widetilde{W}^H_t = \sqrt{2H} \int_0^t (t-s)^{H-1/2} dW_s
$$

$\xi_0(t)$ — форвардная дисперсия (подгоняется под наблюдаемую структуру волатильности), $\eta$ — vol-of-vol.

**Параметры**: $H \approx 0.1$, $\eta \approx 1.7$, $\rho \approx -0.9$ (корреляция $B$ и $W$).

## Rough Heston

El Euch & Rosenbaum (2019) — обобщение Хестона через дробный Риккати:

$$
V_t = V_0 + \frac{1}{\Gamma(H+\frac{1}{2})} \int_0^t (t-s)^{H-\frac{1}{2}} \left[\lambda(\theta - V_s) \, ds + \nu \sqrt{V_s} \, dW_s\right]
$$

Характеристическая функция логарифма цены в модели Rough Heston:

$$
E\!\left[e^{iu \log S_T}\right] = \exp\!\left(V_0 h(u, T) + \theta\lambda \int_0^T g(u, s) \, ds\right)
$$

где $h, g$ удовлетворяют дробным уравнениям Риккати — решаются численно.

## Почему «грубая» волатильность важна

### Объясняемые феномены

1. **Взрыв подразумеваемой волатильности** вблизи ATM опционов при малых $T$:

$$
\sigma_{\text{impl}}(T) \approx C \cdot T^{H - 1/2}
$$

При $H < 1/2$ наклон взрывается как $T \to 0$ — наблюдается в рынках SPX, VIX-опционов.

2. **Наклон улыбки волатильности** (skew):

$$
\partial_k \sigma_{\text{impl}}(k, T) \approx -\rho \eta T^{H - 1/2}
$$

где $k$ — log-moneyness. Стандартные SV-модели дают константный наклон; rBergomi — правильную степенную форму.

3. **Кластеризация реализованной волатильности** с правильным коэффициентом автокорреляции.

## Симуляция rBergomi

```python
import numpy as np
from scipy.special import gamma

def simulate_rbergomi(n_steps: int, T: float, n_paths: int,
                      H: float = 0.1, eta: float = 1.7, rho: float = -0.9,
                      xi0: float = 0.04) -> dict:
    """
    Симуляция Rough Bergomi методом дискретной свёртки Вольтерра.

    Параметры:
        n_steps: шагов временной сетки
        T: горизонт в годах
        n_paths: число сценариев
        H: показатель Хёрста (< 0.5 для rough)
        eta: vol-of-vol
        rho: корреляция spot-vol
        xi0: начальная форвардная дисперсия (константа для простоты)

    Возвращает: {'S': (n_paths, n_steps+1), 'V': (n_paths, n_steps+1)}
    """
    dt = T / n_steps
    t  = np.linspace(0, T, n_steps + 1)

    # Ядро Вольтерра: K(t, s) = sqrt(2H) * (t-s)^{H-0.5}
    # Для дискретной свёртки: K_i = sqrt(2H) * (i * dt)^{H-0.5}
    def volterra_kernel(i: int) -> float:
        if i == 0:
            return 0.0
        return np.sqrt(2 * H) * (i * dt) ** (H - 0.5)

    kernel = np.array([volterra_kernel(i) for i in range(n_steps + 1)])

    rng = np.random.default_rng(42)
    # Два коррелированных БМ: dW1 (vol) и dB (spot)
    dW1 = rng.normal(0, np.sqrt(dt), (n_paths, n_steps))
    dW2 = rng.normal(0, np.sqrt(dt), (n_paths, n_steps))
    dB  = rho * dW1 + np.sqrt(1 - rho**2) * dW2

    # fBm через дискретную свёртку
    W_tilde = np.zeros((n_paths, n_steps + 1))
    for t_idx in range(1, n_steps + 1):
        W_tilde[:, t_idx] = np.sum(
            kernel[1:t_idx + 1][::-1] * dW1[:, :t_idx], axis=1
        )

    # Дисперсионный процесс V_t = xi0 * exp(eta * W~_t - 0.5 * eta^2 * t^{2H})
    V = xi0 * np.exp(eta * W_tilde - 0.5 * eta**2 * t[None, :]**(2*H))

    # Процесс цены
    S = np.ones((n_paths, n_steps + 1))
    for i in range(n_steps):
        S[:, i+1] = S[:, i] * np.exp(-0.5 * V[:, i] * dt
                                      + np.sqrt(V[:, i]) * dB[:, i])

    return {'S': S, 'V': V, 'dt': dt}


def price_european(S_paths: np.ndarray, K: float, r: float, T: float,
                   option_type: str = 'call') -> float:
    """Цена европейского опциона методом Монте-Карло."""
    ST = S_paths[:, -1]
    if option_type == 'call':
        payoff = np.maximum(ST - K, 0)
    else:
        payoff = np.maximum(K - ST, 0)
    return float(np.exp(-r * T) * np.mean(payoff))
```

### Подгонка улыбки волатильности

```python
from scipy.optimize import minimize
from scipy.stats import norm

def implied_vol_bs(price: float, S: float, K: float,
                   T: float, r: float, option_type: str = 'call') -> float:
    """Итеративная оценка подразумеваемой волатильности (метод Ньютона)."""
    sigma = 0.3  # начальное приближение
    for _ in range(50):
        d1 = (np.log(S/K) + (r + 0.5*sigma**2)*T) / (sigma*np.sqrt(T))
        d2 = d1 - sigma*np.sqrt(T)
        if option_type == 'call':
            bs = S*norm.cdf(d1) - K*np.exp(-r*T)*norm.cdf(d2)
        else:
            bs = K*np.exp(-r*T)*norm.cdf(-d2) - S*norm.cdf(-d1)
        vega = S*np.sqrt(T)*norm.pdf(d1)
        if abs(vega) < 1e-10:
            break
        sigma -= (bs - price) / vega
        if sigma <= 0:
            return float('nan')
    return sigma
```

## Сравнение с классическими моделями

| Свойство | BS | Heston | rBergomi |
|---------|----|---------|---------:|
| Взрыв наклона ATM-skew при $T \to 0$ | Нет | Нет | Да |
| Правильная форма term-structure vol | Нет | Нет | Да |
| Показатель Хёрста реализованной vol | 0.5 | ~0.5 | ~0.1 |
| Сложность симуляции | Низкая | Средняя | Высокая |
| Аналитическая характ. функция | Да | Да | Только Rough Heston |

## Связанные статьи

- [[heston-model|Модель Хестона]] — классическая SV-модель
- [[brownian-motion|Броуновское движение]] — стандартный $H=0.5$ случай
- [[hurst-exponent|Показатель Хёрста]] — измерение масштаба грубости
- [[realized-kernels|Реализованные ядра]] — оценка RV для калибровки $H$
- [[bipower-variation|Двухмощная вариация]] — jump-robust оценка интегрированной дисперсии
- [[volatility-forecasting|Прогнозирование волатильности]] — HAR против rough-моделей

---
title: "Прогнозирование волатильности через реализованные ядра"
category: "Анализ сигналов"
order: 40
lang: "ru"
---
# Прогнозирование волатильности через реализованные ядра (Realized Kernels)

**Реализованные ядра (Realized Kernels)** — класс оценок интегральной волатильности, устойчивых к шуму микроструктуры рынка. Обычная реализованная дисперсия $RV = \sum x_j^2$ смещена на высоких частотах из-за спреда и ошибок округления. Ядерная оценка Баркнижи-Хансена-Лунде (2008) исправляет это через взвешенное суммирование автоковариаций.

## Необходимые знания

[[brownian-motion]], [[geometric-brownian-motion]], [[spectral-analysis]]

## Математический аппарат

### Модель шума микроструктуры

Наблюдаемая цена: $Y_t = X_t + \epsilon_t$, где $X_t$ — истинная цена, $\epsilon_t \sim \text{IID}(0, \omega^2)$ — шум микроструктуры (bid-ask bounce, ошибки округления). Тогда:

$$
\mathbb{E}[RV] = \int_0^T \sigma_s^2\,ds + 2n\omega^2
$$

Члены $2n\omega^2$ — систематическое смещение вверх, пропорциональное числу наблюдений $n$.

### Определение реализованного ядра

$$
RK = \sum_{h=-H}^H k\!\left(\frac{h}{H+1}\right)\gamma_h, \quad \gamma_h = \sum_{j=|h|+1}^n x_j\,x_{j-|h|}
$$

где $k(\cdot)$ — весовая функция ядра, $H$ — ширина окна (bandwidth).

**Ядро Парзена:**
$$
k(x) = \begin{cases}
1 - 6x^2 + 6|x|^3, & |x| \le 1/2 \\
2(1-|x|)^3,        & 1/2 < |x| \le 1 \\
0,                 & |x| > 1
\end{cases}
$$

**Ядро Тьюки-Ханнинга:** $k(x) = \sin^2\!\bigl(\tfrac{\pi}{2}(1-|x|)\bigr)$

### Состоятельность и оптимальная ширина окна

При $Y_t = X_t + \epsilon_t$ с $\omega^2 > 0$ реализованное ядро с оптимальной шириной:

$$
H^* = c^*\,n^{1/2}
$$

обеспечивает состоятельную оценку: $RK \xrightarrow{p} \int_0^T \sigma_s^2\,ds$ при $n \to \infty$. Скорость сходимости $n^{1/4}$ — оптимальна для модели с шумом (по сравнению с $n^{1/2}$ при отсутствии шума).

### HAR-RK модель прогнозирования

**HAR-RV (Corsi 2009)** расширяется для реализованных ядер:

$$
RK_{t+1} = \beta_0 + \beta_d\,RK_t + \beta_w\,\overline{RK}_{t,w} + \beta_m\,\overline{RK}_{t,m} + \epsilon_{t+1}
$$

где $\overline{RK}_{t,w} = \frac{1}{5}\sum_{i=1}^5 RK_{t-i+1}$ — недельное среднее, $\overline{RK}_{t,m}$ — месячное. HAR-RK превосходит GARCH по прогнозной точности на горизонтах 1–22 дня.

## Python-реализация

```python
import numpy as np

def parzen_kernel(x: float) -> float:
    """Весовая функция ядра Парзена."""
    ax = abs(x)
    if ax <= 0.5:
        return 1 - 6 * ax**2 + 6 * ax**3
    elif ax <= 1.0:
        return 2 * (1 - ax)**3
    return 0.0

def realized_kernel(
    returns: np.ndarray,
    H: int | None = None,
    kernel: str = "parzen"
) -> float:
    """
    Реализованное ядро с автоматическим выбором ширины окна.

    Args:
        returns: высокочастотные доходности $x_j = \ln(P_j/P_{j-1})$
        H: ширина окна; если None — H = ceil(n^0.5 / 2)
        kernel: 'parzen' или 'tukey_hanning'

    Returns:
        оценка интегральной дисперсии за день
    """
    n = len(returns)
    if H is None:
        H = max(1, int(np.ceil(np.sqrt(n) / 2)))

    def k(x: float) -> float:
        if kernel == "parzen":
            return parzen_kernel(x)
        else:   # tukey_hanning
            ax = abs(x)
            return np.sin(np.pi / 2 * (1 - ax))**2 if ax <= 1 else 0.0

    rk = k(0) * np.sum(returns**2)
    for h in range(1, H + 1):
        weight = k(h / (H + 1))
        if weight == 0:
            continue
        gamma_h = float(np.sum(returns[h:] * returns[:n-h]))
        rk += 2 * weight * gamma_h
    return float(rk)

def signature_plot(
    returns: np.ndarray,
    max_freq: int = 60
) -> dict:
    """
    График сигнатур: RV как функция частоты дискретизации.
    Позволяет выбрать оптимальную частоту (минимум смещения/дисперсии).
    """
    freqs = list(range(1, max_freq + 1))
    rv_by_freq = []
    n = len(returns)
    for skip in freqs:
        sub = returns[::skip]
        rv_by_freq.append(float(np.sum(sub**2)))
    return {"freqs": freqs, "rv": rv_by_freq}

def har_rk_forecast(
    rk_series: np.ndarray,
    horizon: int = 1
) -> dict:
    """
    HAR-RK модель прогнозирования волатильности.

    Returns:
        dict с 'coefs' (β0, βd, βw, βm), 'r2', 'forecast'
    """
    n = len(rk_series)
    X, y = [], []
    for t in range(22, n - horizon):
        daily   = rk_series[t]
        weekly  = rk_series[t-5:t].mean()
        monthly = rk_series[t-22:t].mean()
        X.append([1.0, daily, weekly, monthly])
        y.append(rk_series[t + horizon])

    X_arr = np.array(X)
    y_arr = np.array(y)
    coefs, _, _, _ = np.linalg.lstsq(X_arr, y_arr, rcond=None)

    y_hat = X_arr @ coefs
    ss_res = np.sum((y_arr - y_hat)**2)
    ss_tot = np.sum((y_arr - y_arr.mean())**2)

    last = [1.0, rk_series[-1], rk_series[-5:].mean(), rk_series[-22:].mean()]
    forecast = float(np.dot(coefs, last))
    return {"coefs": coefs.tolist(), "r2": 1 - ss_res / ss_tot, "forecast": forecast}

# ---- Пример ----
np.random.seed(42)
n_ticks = 2340   # ~6.5 часов × 6 тиков/мин
true_vol = 0.20 / np.sqrt(252)
noise_std = true_vol * 0.05
returns_noisy = np.random.normal(0, true_vol / np.sqrt(n_ticks), n_ticks) + \
                np.random.normal(0, noise_std, n_ticks)

rk = realized_kernel(returns_noisy)
rv = np.sum(returns_noisy**2)
print(f"RK (Parzen): {np.sqrt(rk * 252) * 100:.2f}%")
print(f"RV (raw):    {np.sqrt(rv  * 252) * 100:.2f}%  (смещено вверх из-за шума)")
```

## Сигнатурный график

```chart
{
  "type": "line",
  "xAxis": "freq",
  "data": [
    {"freq": "1 тик",  "rv": 0.0650},
    {"freq": "5 тик",  "rv": 0.0420},
    {"freq": "15 тик", "rv": 0.0310},
    {"freq": "30 тик", "rv": 0.0270},
    {"freq": "5 мин",  "rv": 0.0255},
    {"freq": "15 мин", "rv": 0.0250},
    {"freq": "30 мин", "rv": 0.0248}
  ],
  "lines": [
    {"dataKey": "rv", "stroke": "#3b82f6", "name": "Реализованная дисперсия"}
  ]
}
```

## Справочник параметров

| Символ | Название | Описание | Типичный диапазон |
| :--- | :--- | :--- | :--- |
| $H$ | Ширина окна | Число лагов в ядерной сумме | $n^{1/2}/2$ – $n^{1/2}$ |
| $\omega^2$ | Дисперсия шума | Шум микроструктуры | 0 – $(0.1\sigma)^2$ |
| $n$ | Число тиков | Число наблюдений за день | 1 000 – 100 000 |
| $\beta_d, \beta_w, \beta_m$ | Коэффициенты HAR | Нагрузки дн./нед./мес. | 0 – 0,7 |

## Ограничения и расширения

- **Зависимость шума от цены:** Предположение об IID шуме нереалистично для ликвидных рынков; ядро с автоматической корреляцией шума (MSRK) устраняет это.
- **Мультиактивные ядра:** Реализованное ковариационное ядро оценивает матрицу ковариаций из высокочастотных данных; используется в HFT-портфелях.
- **Фильтрованное историческое моделирование:** HAR-RK прогноз входит в FHS-VaR как масштабирующий фактор для симуляции.

## Практические применения

1. **Ценообразование краткосрочных опционов:** Точные внутридневные оценки волатильности критически важны для вычисления греков и delta-хеджирования.
2. **VaR с реализованными ядрами:** Замена исторической дисперсии на RK снижает смещение VaR, особенно в спокойные периоды.
3. **Алгоритмы исполнения:** Текущий RK входит в моделируемую рыночную волатильность в Almgren-Chriss, корректируя срочность исполнения.

## Связанные темы
- [[spectral-analysis]]
- [[wavelet-transform]]
- [[volatility-forecasting]]
- [[value-at-risk]]

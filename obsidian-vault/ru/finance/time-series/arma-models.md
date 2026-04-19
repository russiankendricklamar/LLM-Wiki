---
title: "Модели ARMA"
category: "Анализ сигналов"
order: 13
lang: "ru"
slug: "arma-models"
---
# Модели ARMA

Модель **авторегрессии — скользящего среднего (ARMA)**, разработанная в рамках методологии Бокса-Дженкинса (1970), обеспечивает экономное описание стационарного стохастического процесса с помощью двух полиномов: AR для описания инерции и MA для описания реакции на шоки. ARMA является фундаментом анализа временных рядов в финансах и сигнальной обработке.

## Необходимые знания

[[ar-models]]

## Обзор и предпосылки

До работы Бокса-Дженкинса модели временных рядов строились в основном ad hoc. Систематическая идентификация через ACF/PACF и итеративная процедура «идентификация — оценка — диагностика» произвела революцию в прикладной эконометрике. В финансах ARMA используется для моделирования спредов, дисбаланса ордеров, ценовых отклонений и компонент волатильности.

Теорема Вольда (1938) устанавливает, что любой ковариационно-стационарный процесс без детерминированных компонент допускает представление в виде MA($\infty$), а рациональная аппроксимация MA($\infty$) — это конечный ARMA($p,q$). Это обосновывает парсимонию ARMA.

## Математическая база

Модель $ARMA(p, q)$ задаётся как:

$$
\phi(L) X_t = c + \theta(L)\epsilon_t, \quad \epsilon_t \overset{iid}{\sim} \mathcal{N}(0, \sigma^2)
$$

где полиномы лагового оператора:

$$
\phi(L) = 1 - \phi_1 L - \cdots - \phi_p L^p, \quad \theta(L) = 1 + \theta_1 L + \cdots + \theta_q L^q
$$

**Разложение Вольда**: стационарный ARMA($p,q$) имеет MA($\infty$)-представление:

$$
X_t = \mu + \sum_{j=0}^\infty \psi_j \epsilon_{t-j}, \quad \psi(L) = \phi(L)^{-1}\theta(L)
$$

**Рациональная спектральная плотность**:

$$
f(\omega) = \frac{\sigma^2}{2\pi} \left|\frac{\theta(e^{-i\omega})}{\phi(e^{-i\omega})}\right|^2
$$

**Условия стационарности и обратимости**: все корни $\phi(z) = 0$ и $\theta(z) = 0$ должны лежать строго вне единичного круга.

**Диагностика порядка**:
- ACF AR($p$): геометрическое затухание; ACF MA($q$): обрыв после лага $q$
- PACF AR($p$): обрыв после лага $p$; PACF MA($q$): геометрическое затухание
- ARMA($p,q$): оба хвоста затухают экспоненциально

## Ключевые свойства

| Характеристика | AR($p$) | MA($q$) | ARMA($p,q$) |
|:---|:---:|:---:|:---:|
| ACF | Затухает | Обрыв на $q$ | Затухает |
| PACF | Обрыв на $p$ | Затухает | Затухает |
| Параметров | $p+1$ | $q+1$ | $p+q+1$ |

## Реализация на Python

```python
import numpy as np
import pandas as pd
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.tsa.stattools import acf, pacf
import warnings

def check_stationarity_invertibility(phi: list, theta: list) -> dict:
    """Проверка стационарности (корни AR) и обратимости (корни MA)."""
    ar_roots = np.roots([1] + [-p for p in phi]) if phi else np.array([])
    ma_roots = np.roots([1] + list(theta)) if theta else np.array([])
    return {
        'stationary': bool(np.all(np.abs(ar_roots) > 1)),
        'invertible': bool(np.all(np.abs(ma_roots) > 1)),
        'ar_roots': ar_roots,
        'ma_roots': ma_roots,
    }

def grid_search_arma(series: pd.Series, max_p: int = 4, max_q: int = 4) -> dict:
    """Поиск ARMA(p,q) по BIC."""
    best_bic, best_order = np.inf, (1, 0)
    for p in range(1, max_p + 1):
        for q in range(max_q + 1):
            try:
                with warnings.catch_warnings():
                    warnings.simplefilter('ignore')
                    res = ARIMA(series, order=(p, 0, q)).fit()
                    if res.bic < best_bic:
                        best_bic, best_order = res.bic, (p, q)
            except Exception:
                continue
    return {'order': best_order, 'bic': best_bic}

def simulate_arma(phi: list, theta: list, sigma: float, n: int, seed: int = 42) -> np.ndarray:
    """Симуляция ARMA(p,q) через рекурсию."""
    np.random.seed(seed)
    p, q = len(phi), len(theta)
    eps = np.random.normal(0, sigma, n + max(p, q))
    x = np.zeros(n + max(p, q))
    for t in range(max(p, q), n + max(p, q)):
        ar = sum(phi[i] * x[t-i-1] for i in range(p))
        ma = sum(theta[j] * eps[t-j-1] for j in range(q))
        x[t] = ar + ma + eps[t]
    return x[max(p, q):]

# Пример: спред bid-ask как ARMA(1,1) процесс
np.random.seed(42)
spread = simulate_arma(phi=[0.7], theta=[0.3], sigma=0.01, n=500)
spread_series = pd.Series(spread)
best = grid_search_arma(spread_series)
check = check_stationarity_invertibility([0.7], [0.3])
```

## ACF для AR(1), MA(1) и ARMA(1,1)

```chart
{
  "type": "bar",
  "xAxis": "lag",
  "data": [
    {"lag": "1", "ar1": 0.80, "ma1": 0.45, "arma11": 0.72},
    {"lag": "2", "ar1": 0.64, "ma1": 0.00, "arma11": 0.52},
    {"lag": "3", "ar1": 0.51, "ma1": 0.00, "arma11": 0.37},
    {"lag": "4", "ar1": 0.41, "ma1": 0.00, "arma11": 0.27},
    {"lag": "5", "ar1": 0.33, "ma1": 0.00, "arma11": 0.19}
  ],
  "bars": [
    {"dataKey": "ar1", "fill": "#3b82f6", "name": "AR(1) φ=0.8"},
    {"dataKey": "ma1", "fill": "#10b981", "name": "MA(1) θ=0.45"},
    {"dataKey": "arma11", "fill": "#ef4444", "name": "ARMA(1,1)"}
  ]
}
```

## Таблица параметров

| Символ | Название | Описание | Типичный диапазон |
|:---|:---:|:---|:---|
| $p$ | Порядок AR | Число авторегрессионных лагов | 1 – 5 |
| $q$ | Порядок MA | Число лагов скользящего среднего | 1 – 5 |
| $\phi_i$ | Коэффициенты AR | Авторегрессионные веса | $(-1, 1)$ при стационарности |
| $\theta_j$ | Коэффициенты MA | Веса инноваций прошлых периодов | $(-1, 1)$ при обратимости |
| $\sigma^2$ | Дисперсия инноваций | Белый шум | > 0 |
| $\psi_j$ | Коэффициенты MA($\infty$) | Функция отклика на импульс | Убывают к нулю |

## Ограничения и расширения

**Ограничения:**
- ARMA предполагает линейность и постоянную дисперсию. Нелинейная динамика и ARCH-эффекты остаются за рамками модели.
- Требует стационарности: ценовые ряды нестационарны, применима только к стационарным преобразованиям (доходностям, спредам).
- Трудоёмкая идентификация порядка при $p, q > 2$ из-за близких корней полиномов.

**Расширения:**
- **ARIMA** ([[arima-models]]): добавляет дифференцирование для нестационарных рядов.
- **ARCH/GARCH** ([[arch-models]]): ARMA для среднего + авторегрессионная условная дисперсия.
- **Векторные модели (VAR)**: многомерное обобщение AR-части ARMA.

## Практическое применение

1. **Спреды пар-трейдинга**: ARMA(1,1) описывает возврат к среднему в коинтегрированном спреде.
2. **Дисбаланс ордеров**: поток ордеров имеет ARMA-структуру, используемую в алгоритмах оптимизации исполнения.
3. **Краткосрочное прогнозирование ставок**: ставки денежного рынка (LIBOR, SOFR) подчиняются ARMA-динамике.
4. **Компонентный анализ волатильности**: скрытые компоненты реализованной волатильности моделируются как ARMA-смесь.

## Связанные темы
- [[volatility-forecasting]]
- [[spectral-analysis]]
- [[mcmc]]
- [[black-scholes]]
- [[ar-models]]
- [[arima-models]]

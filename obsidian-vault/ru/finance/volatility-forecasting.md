---
title: "Прогнозирование волатильности (GARCH, HAR)"
category: "Стохастические процессы"
order: 61
lang: "ru"
slug: "volatility-forecasting"
---
# Прогнозирование волатильности (GARCH, HAR)

**Прогнозирование волатильности** — предсказание будущей амплитуды колебаний цен. Волатильность кластеризуется и возвращается к среднему, что делает её более предсказуемой, чем направление цены. Точные прогнозы критичны для оценки опционов, расчёта VaR и управления риском портфеля.

## Математический аппарат

### GARCH(1,1)

Условная дисперсия как функция прошлых шоков и прошлой дисперсии:

$$
\sigma_t^2 = \omega + \alpha\,\epsilon_{t-1}^2 + \beta\,\sigma_{t-1}^2
$$

**Персистентность:** $\alpha + \beta < 1$ (стационарность). Безусловная дисперсия: $\bar{\sigma}^2 = \omega/(1-\alpha-\beta)$. При $\alpha+\beta \approx 1$ шоки волатильности затухают медленно.

### GJR-GARCH (асимметрия)

Учитывает «эффект левериджа» — отрицательные шоки увеличивают волатильность сильнее:

$$
\sigma_t^2 = \omega + (\alpha + \gamma\,\mathbf{1}_{\epsilon_{t-1}<0})\,\epsilon_{t-1}^2 + \beta\,\sigma_{t-1}^2
$$

При $\gamma > 0$ плохие новости ($\epsilon < 0$) дают больший вклад.

### EGARCH (Nelson 1991)

Логарифм дисперсии устраняет требование неотрицательности параметров:

$$
\ln\sigma_t^2 = \omega + \alpha\left(\left|\frac{\epsilon_{t-1}}{\sigma_{t-1}}\right| - \sqrt{2/\pi}\right) + \gamma\,\frac{\epsilon_{t-1}}{\sigma_{t-1}} + \beta\ln\sigma_{t-1}^2
$$

### HAR-RV (Corsi 2009)

Гетерогенная авторегрессионная модель на реализованной волатильности:

$$
RV_{t+1} = \beta_0 + \beta_d\,RV_t + \beta_w\,\overline{RV}_{t,5} + \beta_m\,\overline{RV}_{t,22} + \epsilon_{t+1}
$$

где $\overline{RV}_{t,5} = \frac{1}{5}\sum_{i=0}^4 RV_{t-i}$ — недельная средняя. Простая OLS-оценка превосходит GARCH на горизонтах 1–22 дня.

### HAR-CJ (прыжки)

Разложение $RV = C + J$ через двухсильностную вариацию ($BPV$):

$$
C_t = \text{BPV}_t, \quad J_t = \max(RV_t - BPV_t, 0)
$$

$$
RV_{t+1} = \beta_0 + \beta_{Cd}\,C_t + \beta_{Cw}\,\bar{C}_{t,5} + \beta_{Cm}\,\bar{C}_{t,22} + \beta_J\,J_t + \epsilon
$$

### Функция потерь QLIKE

Для сравнения прогнозов волатильности QLIKE предпочтительнее MSE:

$$
\text{QLIKE} = \frac{\hat{\sigma}_t^2}{RV_t} - \ln\frac{\hat{\sigma}_t^2}{RV_t} - 1
$$

Инвариантна к масштабу и соответствует правдоподобию нормального распределения.

## Python-реализация

```python
import numpy as np
from scipy.optimize import minimize

def fit_garch(
    returns: np.ndarray,
    p: int = 1,
    q: int = 1
) -> dict:
    """
    GARCH(p,q) через максимальное правдоподобие (нормальное).

    Returns:
        dict с 'omega', 'alpha', 'beta', 'persistence', 'log_lik'
    """
    T = len(returns)

    def neg_ll(params):
        omega, alpha, beta = params
        if omega <= 0 or alpha <= 0 or beta <= 0 or alpha + beta >= 1:
            return 1e9
        sigma2 = np.zeros(T)
        sigma2[0] = returns.var()
        for t in range(1, T):
            sigma2[t] = omega + alpha * returns[t-1]**2 + beta * sigma2[t-1]
        ll = -0.5 * np.sum(np.log(sigma2) + returns**2 / sigma2)
        return -ll

    x0 = [returns.var() * 0.05, 0.10, 0.85]
    bounds = [(1e-7, None), (1e-6, 0.999), (1e-6, 0.999)]
    res = minimize(neg_ll, x0, method="L-BFGS-B", bounds=bounds)
    omega, alpha, beta = res.x
    return {"omega": omega, "alpha": alpha, "beta": beta,
            "persistence": alpha + beta, "log_lik": -res.fun}

def har_rv_model(
    rv: np.ndarray,
    horizon: int = 1
) -> dict:
    """
    HAR-RV модель прогнозирования.

    Args:
        rv: реализованная волатильность (дисперсия) за каждый день
        horizon: горизонт прогноза в днях

    Returns:
        dict с 'coefs' (β0,βd,βw,βm), 'r2', 'forecast'
    """
    T = len(rv)
    X, y = [], []
    for t in range(22, T - horizon):
        X.append([1.0, rv[t], rv[t-5:t].mean(), rv[t-22:t].mean()])
        y.append(rv[t + horizon])

    X_arr, y_arr = np.array(X), np.array(y)
    coefs, _, _, _ = np.linalg.lstsq(X_arr, y_arr, rcond=None)
    y_hat = X_arr @ coefs
    r2 = 1 - np.sum((y_arr - y_hat)**2) / np.sum((y_arr - y_arr.mean())**2)
    last_x = np.array([1.0, rv[-1], rv[-5:].mean(), rv[-22:].mean()])
    return {"coefs": coefs.tolist(), "r2": float(r2),
            "forecast": float(np.dot(coefs, last_x))}

def forecast_comparison(
    rv: np.ndarray,
    window: int = 200,
    horizon: int = 1
) -> dict:
    """Walk-forward сравнение HAR-RV и GARCH(1,1) по QLIKE."""
    T = len(rv)
    qlike_har, qlike_garch = [], []

    for t in range(window + 22, T - horizon):
        train_rv = rv[t-window:t]
        actual   = rv[t + horizon]

        # HAR прогноз
        har = har_rv_model(train_rv, horizon=horizon)
        pred_har = float(har["forecast"])

        # GARCH прогноз (упрощённо: дисперсия = последнее σ²)
        ret_proxy = np.sqrt(np.maximum(train_rv, 1e-10)) * np.random.choice([-1,1], len(train_rv))
        g = fit_garch(ret_proxy)
        pred_garch = (g["omega"] + g["alpha"] * train_rv[-1] +
                      g["beta"] * train_rv[-1]) * horizon

        for pred, lst in [(pred_har, qlike_har), (pred_garch, qlike_garch)]:
            if pred > 0:
                lst.append(pred / actual - np.log(pred / actual) - 1)

    return {
        "qlike_har":   float(np.mean(qlike_har)),
        "qlike_garch": float(np.mean(qlike_garch)),
        "har_wins":    np.mean(qlike_har) < np.mean(qlike_garch)
    }

# ---- Пример ----
np.random.seed(42)
T = 1000
returns = np.random.normal(0, 0.01, T)
# Симуляция кластеризации волатильности
for t in range(1, T):
    if abs(returns[t-1]) > 0.02:
        returns[t] *= 1.5

garch = fit_garch(returns)
print(f"GARCH(1,1): ω={garch['omega']:.6f}, α={garch['alpha']:.4f}, "
      f"β={garch['beta']:.4f}, α+β={garch['persistence']:.4f}")

rv = returns**2
har = har_rv_model(rv)
print(f"HAR-RV: β_d={har['coefs'][1]:.3f}, β_w={har['coefs'][2]:.3f}, "
      f"β_m={har['coefs'][3]:.3f}, R²={har['r2']:.3f}")
```

## Персистентность волатильности

```chart
{
  "type": "line",
  "xAxis": "horizon",
  "data": [
    {"horizon": "1д",   "garch": 1.00, "har": 1.00},
    {"horizon": "5д",   "garch": 0.72, "har": 0.78},
    {"horizon": "10д",  "garch": 0.55, "har": 0.65},
    {"horizon": "22д",  "garch": 0.38, "har": 0.52},
    {"horizon": "66д",  "garch": 0.18, "har": 0.35}
  ],
  "lines": [
    {"dataKey": "garch", "stroke": "#3b82f6", "name": "GARCH(1,1) корреляция"},
    {"dataKey": "har",   "stroke": "#10b981", "name": "HAR-RV корреляция"}
  ]
}
```

## Справочник параметров

| Символ | Название | Описание | Типичный диапазон |
| :--- | :--- | :--- | :--- |
| $\omega$ | Константа GARCH | Базовый уровень дисперсии | $10^{-7}$ – $10^{-5}$ |
| $\alpha$ | Шоковый коэффициент | Реакция на новые шоки | 0,05 – 0,20 |
| $\beta$ | Инерция дисперсии | Персистентность волатильности | 0,70 – 0,95 |
| $\beta_d, \beta_w, \beta_m$ | Коэффициенты HAR | Нагрузки дн./нед./мес. | 0,1 – 0,7 |

## Ограничения и расширения

- **GARCH vs HAR:** GARCH лучше для краткосрочных (1–5 дней) прогнозов при высокочастотной подгонке; HAR превосходит на горизонтах 10–66 дней.
- **Realized GARCH:** Объединяет GARCH-структуру с реализованными мерами через уравнение измерения $\ln RV_t = \xi + \phi \ln\sigma_t^2 + \delta z_t + \tau_t$.
- **Student-t GARCH:** Для тяжёлых хвостов замена нормального правдоподобия на $t_\nu$ улучшает оценки параметров.

## Практические применения

1. **Vol-targeting:** Экспозиция портфеля масштабируется как $w_t = \sigma^*/\hat{\sigma}_t$, снижая просадки в периоды высокой волатильности.
2. **VaR:** Параметрический VaR использует $\hat{\sigma}_{t+1}$ из GARCH/HAR как текущую оценку риска.
3. **Оценка опционов:** Вмененная волатильность сравнивается с прогнозом GARCH для выявления переоценённых/недооценённых опционов.

## Связанные темы
- [[heston-model]]
- [[mcmc]]
- [[value-at-risk]]
- [[monte-carlo-method]]
- [[realized-kernels]]

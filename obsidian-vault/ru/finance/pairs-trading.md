---
title: "Парный трейдинг"
category: "Модели ценообразования"
order: 62
lang: "ru"
slug: "pairs-trading"
---
# Стратегия парного трейдинга (Pairs Trading)

**Парный трейдинг** — это рыночно-нейтральная стратегия, основанная на открытии длинной позиции по одному активу и короткой позиции по другому, тесно коррелирующему с ним. Стратегия использует временные отклонения цен между двумя активами, предполагая, что они в конечном итоге вернутся к своей исторической взаимосвязи (коинтеграции).

## История и мотивация

Стратегию разработала группа Morgan Stanley под руководством Дж. Нунзиато в 1980-х годах. Энгл и Грейнджер (1987) заложили теоретический фундамент через теорию коинтеграции, удостоенную Нобелевской премии в 2003 году. Видимый успех фондов Statistical Arbitrage в 1990-х привёл к массовому распространению стратегии и, как следствие, к сокращению прибыли от простых пар и необходимости применения более изощрённых подходов.

## Теория коинтеграции

Два нестационарных ряда $P_A, P_B \sim I(1)$ **коинтегрированы**, если существует $\beta$ такое, что:

$$
S_t = \ln P_{A,t} - \beta \ln P_{B,t} \sim I(0)
$$

то есть спред $S_t$ стационарен. Это означает долгосрочное равновесие между двумя активами.

### Двухшаговый тест Энгла–Грейнджера

1. Регрессия $\ln P_A$ на $\ln P_B$ → получаем $\hat{\beta}$.
2. Тест ADF на стационарность остатков $\hat{S}_t = \ln P_A - \hat{\beta} \ln P_B$.

Критические значения специфичны для регрессии с оцененным $\beta$.

### Тест Йохансена

Для $k > 2$ активов тест Йохансена определяет ранг матрицы коинтеграции. При ранге $r$ существует $r$ стационарных линейных комбинаций.

## OU-модель спреда и торговые правила

Стационарный спред моделируется как OU-процесс:

$$
dS_t = \theta(\mu - S_t)\,dt + \sigma\,dW_t
$$

Z-score для входа:

$$
z_t = \frac{S_t - \mu}{\sigma/\sqrt{2\theta}}
$$

Правила входа и выхода:

| Сигнал | Условие | Действие |
|:---|:---|:---|
| Вход (длинный спред) | $z_t < -z_{\text{enter}}$ | Long $A$, Short $B$ |
| Вход (короткий спред) | $z_t > +z_{\text{enter}}$ | Short $A$, Long $B$ |
| Выход (прибыль) | $\|z_t\| < z_{\text{exit}}$ | Закрыть обе позиции |
| Стоп-лосс | $\|z_t\| > z_{\text{stop}}$ | Принудительное закрытие |

Типичные значения: $z_{\text{enter}} = 2.0$, $z_{\text{exit}} = 0.5$, $z_{\text{stop}} = 3.5$.

## Python: Полный бэктест парного трейдинга

```python
import numpy as np
import pandas as pd
from statsmodels.tsa.stattools import coint, adfuller
from statsmodels.regression.linear_model import OLS
from statsmodels.tools import add_constant


def fit_cointegration(log_pA: np.ndarray, log_pB: np.ndarray) -> tuple[float, float, float]:
    """
    Тест Энгла-Грейнджера: регрессия + ADF на остатках.
    Возвращает (beta, adf_pvalue, half_life).
    """
    res = OLS(log_pA, add_constant(log_pB)).fit()
    beta = float(res.params[1])
    spread = log_pA - beta * log_pB
    adf_pval = float(adfuller(spread, maxlags=1)[1])

    # Оценка периода полураспада через авторегрессию
    delta_s = np.diff(spread)
    lag_s = spread[:-1] - spread[:-1].mean()
    phi = np.sum(delta_s * lag_s) / np.sum(lag_s ** 2)
    half_life = -np.log(2) / phi if phi < 0 else np.inf

    return beta, adf_pval, half_life


def backtest_pairs(log_pA: np.ndarray, log_pB: np.ndarray,
                   z_enter: float = 2.0, z_exit: float = 0.5,
                   z_stop: float = 3.5, window: int = 60) -> dict:
    """
    Скользящий бэктест парного трейдинга с OU Z-score.
    Возвращает словарь со статистиками.
    """
    n = len(log_pA)
    pnl = np.zeros(n)
    position = 0  # +1, -1, 0

    beta_hist = []
    z_hist = []

    for t in range(window, n):
        # Скользящая оценка бета
        win_A = log_pA[t - window:t]
        win_B = log_pB[t - window:t]
        beta_t = np.polyfit(win_B, win_A, 1)[0]
        beta_hist.append(beta_t)

        spread_win = win_A - beta_t * win_B
        mu_s = np.mean(spread_win)
        std_s = np.std(spread_win)

        s_t = log_pA[t] - beta_t * log_pB[t]
        z_t = (s_t - mu_s) / (std_s + 1e-10)
        z_hist.append(z_t)

        # Текущие доходности
        ret_A = log_pA[t] - log_pA[t - 1]
        ret_B = log_pB[t] - log_pB[t - 1]

        # P&L текущей позиции
        if position == 1:
            pnl[t] = ret_A - beta_t * ret_B
        elif position == -1:
            pnl[t] = -(ret_A - beta_t * ret_B)

        # Смена позиции
        if position == 0:
            if z_t < -z_enter:
                position = 1
            elif z_t > z_enter:
                position = -1
        elif position == 1:
            if z_t > -z_exit or z_t > z_stop:
                position = 0
        elif position == -1:
            if z_t < z_exit or z_t < -z_stop:
                position = 0

    total_ret = float(np.sum(pnl))
    sharpe = float(np.mean(pnl[window:]) / (np.std(pnl[window:]) + 1e-10) * np.sqrt(252))
    trades = int(np.sum(np.abs(np.diff([0] + [1 if p != 0 else 0
                                              for p in [0] * window + [0]]))))
    cum = np.cumsum(pnl)
    drawdown = float(np.min(cum - np.maximum.accumulate(cum)))

    return {
        "total_return": total_ret,
        "sharpe": sharpe,
        "max_drawdown": drawdown,
        "n_periods": n - window,
    }


# Синтетический пример: коинтегрированная пара
np.random.seed(42)
n = 500
common = np.cumsum(np.random.normal(0, 1, n))
log_pA = common + np.random.normal(0, 0.5, n)
log_pB = common + np.random.normal(0, 0.5, n)

beta, p_val, hl = fit_cointegration(log_pA, log_pB)
print(f"Бета хеджирования: {beta:.4f}")
print(f"ADF p-value:       {p_val:.4f}  ({'коинтеграция' if p_val < 0.05 else 'нет коинтеграции'})")
print(f"Период полураспада: {hl:.1f} дней")

stats = backtest_pairs(log_pA, log_pB)
print(f"\nРезультаты бэктеста:")
for k, v in stats.items():
    print(f"  {k}: {v:.4f}")
```

## Таблица параметров

| Параметр | Описание | Типичное значение |
|:---|:---|:---|
| $z_{\text{enter}}$ | Порог входа | 1.5–2.5 σ |
| $z_{\text{exit}}$ | Порог выхода | 0.0–0.75 σ |
| $z_{\text{stop}}$ | Стоп-лосс | 3.0–4.0 σ |
| Скользящее окно | Окно оценки параметров | 60–252 дней |
| Период полураспада | Ожидаемое время позиции | 5–30 дней |
| Коэффициент хеджирования $\beta$ | Размер относительной позиции | OLS или фильтр Калмана |

## Ограничения и риски

- **Разрыв коинтеграции**: фундаментальное изменение (M&A, банкротство) может навсегда разрушить спред.
- **Скученность**: высокая популярность стратегии ведёт к одновременному закрытию позиций при стрессе (август 2007).
- **Отрицательная корреляция риска**: стратегия теряет деньги именно тогда, когда рынок нестабилен.
- **Выбор коэффициента хеджирования**: статический OLS vs. динамический фильтр Калмана — компромисс между стабильностью и адаптивностью.

## Связанные темы
- [[mean-reversion-strategies]]
- [[ornstein-uhlenbeck-process]]
- [[mcmc]]
- [[value-at-risk]]
- [[monte-carlo-method]]
- [[probability-of-backtest-overfitting]]

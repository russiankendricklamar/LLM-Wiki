---
title: "Модель SABR"
category: "Модели ценообразования"
order: 9
lang: "ru"
---
# Модель SABR

**Модель SABR** (Stochastic Alpha, Beta, Rho) — модель стохастической волатильности, разработанная Хаганом, Кумаром, Лесневски и Вудвордом (2002) для описания улыбки волатильности на рынках опционов на процентные ставки. SABR стал отраслевым стандартом для торговли caps/floors и свопционами.

## Необходимые знания

[[black-scholes]], [[heston-model]]

## Математический аппарат

### Динамика (СДУ)

Модель описывает эволюцию форвардной цены $F_t$ и мгновенной волатильности $\alpha_t$:

$$
\begin{aligned}
dF_t &= \alpha_t\,F_t^\beta\,dW_t^1 \\
d\alpha_t &= \nu\,\alpha_t\,dW_t^2
\end{aligned}
$$

где два броуновских движения коррелированы: $d[W^1, W^2]_t = \rho\,dt$.

### Параметры

- $\alpha > 0$: начальный уровень волатильности; управляет наклоном и уровнем улыбки.
- $\beta \in [0,1]$: CEV-экспонента. $\beta=1$ — логнормальная динамика, $\beta=0$ — нормальная (Free Boundary SABR).
- $\rho \in (-1,1)$: корреляция. Отрицательное $\rho$ создаёт отрицательный скос (скошенная вниз улыбка).
- $\nu > 0$: «vol-of-vol» — управляет выпуклостью (curvature) улыбки.

### Формула Хагана

Асимптотическая вмененная волатильность Блэка-Шоулза $\sigma_{BS}(K,F)$ при $F \ne K$:

$$
z = \frac{\nu}{\alpha}(FK)^{(1-\beta)/2}\ln\frac{F}{K}, \quad
\chi(z) = \ln\frac{\sqrt{1-2\rho z+z^2}+z-\rho}{1-\rho}
$$

$$
\sigma_{BS} = \frac{\alpha}{(FK)^{(1-\beta)/2}\left[1+\frac{(1-\beta)^2}{24}\ln^2\!\frac{F}{K}+\frac{(1-\beta)^4}{1920}\ln^4\!\frac{F}{K}\right]} \cdot \frac{z}{\chi(z)} \cdot \left[1 + A\,T\right]
$$

где поправочный член:

$$
A = \frac{(1-\beta)^2\alpha^2}{24(FK)^{1-\beta}} + \frac{\rho\beta\nu\alpha}{4(FK)^{(1-\beta)/2}} + \frac{2-3\rho^2}{24}\nu^2
$$

**ATM-случай** ($F=K$): $\sigma_{ATM} = \frac{\alpha}{F^{1-\beta}}\!\left[1 + A\,T\right]$.

## Python-реализация

```python
import numpy as np
from scipy.optimize import minimize

def sabr_implied_vol(
    K: float, F: float, T: float,
    alpha: float, beta: float, rho: float, nu: float
) -> float:
    """
    Вмененная волатильность SABR по формуле Хагана (2002).

    Args:
        K: страйк, F: форвард, T: время до экспирации (лет)
        alpha, beta, rho, nu: параметры SABR

    Returns:
        вмененная волатильность (десятичная)
    """
    if abs(F - K) < 1e-8:   # ATM
        FK_b = F ** (1 - beta)
        A = ((1 - beta)**2 * alpha**2 / (24 * FK_b**2)
             + 0.25 * rho * beta * nu * alpha / FK_b
             + (2 - 3 * rho**2) / 24 * nu**2)
        return alpha / FK_b * (1 + A * T)

    FK  = (F * K) ** 0.5
    FK_b = FK ** (1 - beta)
    logFK = np.log(F / K)

    z = (nu / alpha) * FK_b * logFK
    chi_z = np.log((np.sqrt(1 - 2 * rho * z + z**2) + z - rho) /
                   (1 - rho + 1e-300))

    denom = FK_b * (1 + (1-beta)**2/24 * logFK**2
                    + (1-beta)**4/1920 * logFK**4)
    A = ((1 - beta)**2 * alpha**2 / (24 * FK_b**2)
         + 0.25 * rho * beta * nu * alpha / FK_b
         + (2 - 3 * rho**2) / 24 * nu**2)

    return (alpha / denom) * (z / chi_z) * (1 + A * T)


def calibrate_sabr(
    strikes: np.ndarray,
    market_vols: np.ndarray,
    F: float,
    T: float,
    beta: float = 0.5
) -> dict:
    """
    Калибровка SABR (alpha, rho, nu) при фиксированном beta.

    Returns:
        dict с 'alpha', 'beta', 'rho', 'nu', 'rmse'
    """
    def objective(params):
        alpha, rho, nu = params
        if alpha <= 0 or nu <= 0 or not (-1 < rho < 1):
            return 1e9
        vols = np.array([sabr_implied_vol(k, F, T, alpha, beta, rho, nu)
                         for k in strikes])
        return float(np.sum((vols - market_vols)**2))

    x0 = [0.20, -0.30, 0.40]
    bounds = [(1e-4, 2.0), (-0.999, 0.999), (1e-4, 3.0)]
    res = minimize(objective, x0, method='L-BFGS-B', bounds=bounds)
    alpha, rho, nu = res.x
    rmse = np.sqrt(res.fun / len(strikes))
    return {"alpha": alpha, "beta": beta, "rho": rho, "nu": nu, "rmse": rmse}

# ---- Пример ----
F, T = 0.04, 1.0    # форвард 4%, 1 год
strikes = np.array([0.02, 0.025, 0.03, 0.035, 0.04,
                    0.045, 0.05, 0.055, 0.06])
market_vols = np.array([0.30, 0.27, 0.24, 0.22, 0.21,
                        0.22, 0.24, 0.27, 0.31])

params = calibrate_sabr(strikes, market_vols, F, T, beta=0.5)
print(f"Калибровка SABR: α={params['alpha']:.4f}, "
      f"ρ={params['rho']:.4f}, ν={params['nu']:.4f}, "
      f"RMSE={params['rmse']*10000:.2f} б.п.")

# Улыбка
fitted = [sabr_implied_vol(k, F, T, params['alpha'],
                           params['beta'], params['rho'], params['nu'])
          for k in strikes]
for k, mkt, fit in zip(strikes, market_vols, fitted):
    print(f"  K={k*100:.1f}%: рынок={mkt*100:.2f}%, SABR={fit*100:.2f}%")
```

## Улыбка волатильности SABR

```chart
{
  "type": "line",
  "xAxis": "strike",
  "data": [
    {"strike": "2%",  "vol": 0.30, "rho_neg": 0.32},
    {"strike": "2.5%","vol": 0.27, "rho_neg": 0.28},
    {"strike": "3%",  "vol": 0.24, "rho_neg": 0.24},
    {"strike": "3.5%","vol": 0.22, "rho_neg": 0.21},
    {"strike": "4%",  "vol": 0.21, "rho_neg": 0.20},
    {"strike": "4.5%","vol": 0.22, "rho_neg": 0.21},
    {"strike": "5%",  "vol": 0.24, "rho_neg": 0.23},
    {"strike": "5.5%","vol": 0.27, "rho_neg": 0.27},
    {"strike": "6%",  "vol": 0.31, "rho_neg": 0.33}
  ],
  "lines": [
    {"dataKey": "vol",     "stroke": "#3b82f6", "name": "SABR (ρ=–0.3)"},
    {"dataKey": "rho_neg", "stroke": "#ef4444", "name": "SABR (ρ=–0.6)"}
  ]
}
```

## Справочник параметров

| Символ | Название | Описание | Типичный диапазон |
| :--- | :--- | :--- | :--- |
| $\alpha$ | Начальная волатильность | Уровень улыбки в ATM | 0,05 – 1,0 |
| $\beta$ | CEV-экспонента | Тип динамики (0=нормальная, 1=лог) | 0 – 1 |
| $\rho$ | Корреляция | Скос улыбки влево/вправо | −0,9 – 0,9 |
| $\nu$ | Vol-of-vol | Выпуклость улыбки | 0,1 – 2,0 |

## Ограничения и расширения

- **Отрицательность цен:** При $\beta=0$ SABR допускает отрицательные ставки; Free Boundary SABR устраняет эту проблему через поглощающую границу.
- **Длинные сроки:** Формула Хагана не точна для $T > 5$ лет; PDЕ-методы или метод Hagan-Lesniewski дают лучшие результаты.
- **Нормальный SABR:** При $\beta=0$ вмененная нормальная (Bachelier) волатильность: $\sigma_N \approx \alpha\bigl[1 + \frac{2-3\rho^2}{24}\nu^2 T\bigr]$.
- **Калибровка:** Параметры зависят от исходных данных и могут быть неустойчивы; регуляризация по Тихонову стабилизирует калибровку.

## Практические применения

1. **Торговля свопционами:** SABR — стандарт котирования vol cube (surface); дескеры торгуют вмененными параметрами $\alpha$, $\rho$, $\nu$ как самостоятельными рисками.
2. **CMS-продукты:** Выпуклостная поправка для CMS свопов требует аналитической формулы для интегрирования по улыбке SABR.
3. **Риск-менеджмент волатильности:** Vega, Volga и Vanna рассчитываются как производные SABR-улыбки по $\alpha$, $\nu$, $\rho$.

## Связанные темы
- [[heston-model]]
- [[black-scholes]]
- [[oas]]
- [[xva]]
- [[asymptotic-expansion-finance]] — методы разложений за формулой подразумеваемой волатильности SABR

---
slug: "/finance/oas"
title: "Option-Adjusted Spread (OAS)"
category: "Управление рисками"
order: 21
lang: "ru"
---
# Option-Adjusted Spread (OAS)

**Option-Adjusted Spread (OAS)** — это разница в доходности между облигацией со встроенным опционом (например, правом отзыва или правом погашения) и безрисковой кривой доходности, скорректированная на стоимость этого опциона.

OAS позволяет инвесторам сравнивать облигации с разными типами встроенных опционов на равных условиях, выделяя чистую премию за кредитный риск и риск ликвидности.

## Визуализация

Сравнение спредов по типам облигаций: для callable OAS < Z-спред (стоимость опциона положительна), для putable OAS > Z-спред (выгода опциона отрицательна), для MBS разрыв максимален из-за отрицательной выпуклости досрочных погашений.

```chart
{
  "type": "bar",
  "xAxis": "bond",
  "data": [
    {"bond": "IG Corp (bullet)", "G-Spread": 95, "Z-Spread": 105, "OAS": 103},
    {"bond": "Callable Corp", "G-Spread": 140, "Z-Spread": 155, "OAS": 110},
    {"bond": "Putable Corp", "G-Spread": 70, "Z-Spread": 75, "OAS": 95},
    {"bond": "Agency MBS", "G-Spread": 145, "Z-Spread": 160, "OAS": 55},
    {"bond": "HY Corp (bullet)", "G-Spread": 390, "Z-Spread": 410, "OAS": 405},
    {"bond": "HY Callable", "G-Spread": 460, "Z-Spread": 490, "OAS": 380}
  ],
  "lines": [
    {"dataKey": "G-Spread", "stroke": "#f59e0b", "name": "G-Spread (б.п.)"},
    {"dataKey": "Z-Spread", "stroke": "#ef4444", "name": "Z-Spread (б.п.)"},
    {"dataKey": "OAS", "stroke": "#3b82f6", "name": "OAS (б.п.)"}
  ]
}
```

## История и мотивация

Концепция OAS появилась в 1980-х годах вместе с бурным ростом рынка MBS. До OAS Z-спред систематически переоценивал кредитный риск для отзывных облигаций, так как игнорировал стоимость встроенного колл-опциона эмитента. Модель Халла–Уайта (1990) и BDT (1990) стали стандартными инструментами для встраивания стохастической динамики ставок в расчёт OAS.

## Зачем нужна корректировка?

Обычный Z-спред просто показывает разницу в доходности, не учитывая, что встроенный опцион может изменить денежные потоки облигации при изменении процентных ставок.

- **Для Callable-облигаций**: инвестор несёт риск того, что эмитент вернёт долг досрочно при падении ставок. Поэтому **OAS < Z-спред**.
- **Для Putable-облигаций**: инвестор вправе вернуть облигацию эмитенту при росте ставок. Поэтому **OAS > Z-спред**.

## Математический фреймворк

### Стохастическая модель ставок (Халл–Уайт)

$$
dr_t = (\theta(t) - a \, r_t) \, dt + \sigma_r \, dW_t
$$

где $\theta(t)$ откалибрована по текущей кривой доходности, $a$ — скорость возврата к среднему, $\sigma_r$ — волатильность ставки.

### Определение OAS через Монте-Карло

OAS — это фиксированный спред $s$, такой что:

$$
P_{\text{рынок}} = \mathbb{E}^Q\!\left[\sum_{t=1}^{T} \frac{CF_t \cdot \mathbf{1}[\text{не отозвана до } t]}{B(0,t) \cdot e^{s \cdot t}}\right]
$$

где $B(0,t)$ — дисконт-фактор из модели, $CF_t$ — денежный поток периода $t$. Уравнение решается численно (бисекция) на $s$.

## Python: Монте-Карло расчёт OAS

```python
import numpy as np
from scipy.optimize import brentq


def hull_white_paths(a: float, sigma_r: float, r0: float, T: float,
                     steps: int, n_paths: int, seed: int = 42) -> np.ndarray:
    """
    Симулирует пути короткой ставки по модели Халла-Уайта (theta=0 для простоты).
    Возвращает массив (steps+1, n_paths).
    """
    np.random.seed(seed)
    dt = T / steps
    rates = np.zeros((steps + 1, n_paths))
    rates[0] = r0
    sqrt_dt = np.sqrt(dt)
    for t in range(steps):
        z = np.random.standard_normal(n_paths)
        rates[t + 1] = (rates[t] * np.exp(-a * dt)
                        + sigma_r * sqrt_dt * z)
    return rates


def calculate_oas(market_price: float, face: float, coupon: float,
                  call_schedule: list[float], a: float, sigma_r: float,
                  r0: float, T: float, steps: int = 100,
                  n_paths: int = 20_000) -> float:
    """
    Вычисляет OAS callable облигации методом Монте-Карло.
    call_schedule: список моментов времени (лет), когда эмитент может отозвать.
    """
    rates = hull_white_paths(a, sigma_r, r0, T, steps, n_paths)
    dt = T / steps

    def price_at_oas(s):
        pv_paths = np.zeros(n_paths)
        active = np.ones(n_paths, dtype=bool)

        for step in range(1, steps + 1):
            t = step * dt
            disc = np.exp(-(rates[:step + 1].mean(axis=0) + s) * t)
            cf = coupon * face / (steps / T)
            pv_paths += active * cf * disc

            if any(abs(t - cs) < dt / 2 for cs in call_schedule):
                call_price = face
                model_price = pv_paths + active * face * np.exp(
                    -(rates[:step + 1].mean(axis=0) + s) * t
                )
                called = active & (model_price > call_price)
                pv_paths[called] = call_price * disc[called]
                active[called] = False

        pv_paths += active * face * np.exp(
            -(rates.mean(axis=0) + s) * T
        )
        return float(np.mean(pv_paths))

    oas = brentq(lambda s: price_at_oas(s) - market_price, -0.05, 0.10, xtol=1e-5)
    return oas * 10_000  # в базисных пунктах


# Пример
oas_bp = calculate_oas(
    market_price=98.5, face=100.0, coupon=0.05,
    call_schedule=[3.0, 4.0, 5.0], a=0.1, sigma_r=0.015,
    r0=0.04, T=5.0, steps=60, n_paths=10_000
)
print(f"OAS ≈ {oas_bp:.1f} б.п.")
```

## Таблица параметров

| Параметр | Описание | Типичное значение |
|:---|:---|:---|
| $a$ | Скорость возврата к среднему | 0.05–0.30 |
| $\sigma_r$ | Волатильность короткой ставки | 0.5%–2% |
| $r_0$ | Начальная короткая ставка | Текущая ставка ЦБ |
| Число путей | Точность Монте-Карло | 10 000–100 000 |
| $s$ (OAS) | Искомый спред | 50–300 б.п. (IG облигации) |

## Сравнение спредов

| Тип спреда | Учитывает кривую | Учитывает опционы | Основное применение |
|:---|:---:|:---:|:---|
| G-Spread | Нет | Нет | Простые корпоративные облигации |
| Z-Spread | Да | Нет | Облигации без опционов |
| OAS | Да | Да | MBS, Callable/Putable Bonds |

## MBS и риск досрочного погашения

Для ипотечных ценных бумаг (MBS) OAS является основным показателем, так как заёмщики реализуют встроенный колл-опцион при рефинансировании. Скорость досрочных погашений (CPR) моделируется отдельно (PSA-модель, OTS) и подаётся на вход расчёта дисконтированных денежных потоков. OAS позволяет сравнивать пулы MBS с разной конвексностью на единой кредитной основе.

## Ограничения и расширения

- **Чувствительность к модели**: OAS зависит от выбора модели ставок. Разные модели дают разные значения даже при одинаковой рыночной цене.
- **Стохастическая волатильность**: BDT и HW — одофакторные модели; они не захватывают наклон усмешки волатильности. Двухфакторные модели (G2++) более реалистичны.
- **Рыночная неликвидность**: OAS включает «спред ликвидности», который сложно отделить от чистого кредитного спреда.
- **Управление ключевой ставкой**: Распределение OAS по срокам (KRDV01) применяется при хеджировании MBS-портфелей.

## Связанные темы
- [[dv01]]
- [[sabr-model]]
- [[monte-carlo-method]]
- [[heston-model]]
- [[value-at-risk]]

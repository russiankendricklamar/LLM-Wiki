---
title: "Модель Авелланеды-Стойкова"
category: "Модели ценообразования"
order: 42
lang: "ru"
slug: "avellaneda-stoikov"
---
# Модель Авелланеды-Стойкова

**Модель Авелланеды-Стойкова** (2008) — классическая математическая модель оптимального маркет-мейкинга, основанная на теории стохастического управления. Она отвечает на вопрос: где именно маркет-мейкер должен выставлять котировки Bid и Ask, чтобы максимизировать ожидаемую полезность конечного богатства при контроле инвентарного риска?

## Обзор и предпосылки

До работы Авелланеды и Стойкова маркет-мейкеры использовали эмпирические правила симметричного выставления котировок. Авторы формализовали задачу как задачу оптимального управления с экспоненциальной функцией полезности (CARA) и гауссовской динамикой цен. Интенсивность исполнения ордеров моделируется как убывающая функция отклонения котировки от mid-price.

Модель легла в основу современных алгоритмов HFT-маркет-мейкинга и была расширена Гуэантом, Лелем и Фернандес-Тапиа (2013) для учёта асимметрии потока ордеров, а также Карте и соавт. для многоактивного случая.

## Математическая база

**Динамика mid-price** по геометрическому броуновскому движению:

$$
dS_t = \sigma dW_t
$$

**Уравнение Гамильтона-Якоби-Беллмана (HJB)**. Функция полезности $u(s, x, q, t)$, где $x$ — денежная позиция, $q$ — инвентарь:

$$
\frac{\partial u}{\partial t} + \frac{\sigma^2}{2}\frac{\partial^2 u}{\partial s^2} + \lambda^a(\delta^a)\left[u(s, x+s+\delta^a, q-1, t) - u\right] + \lambda^b(\delta^b)\left[u(s, x-s+\delta^b, q+1, t) - u\right] = 0
$$

где интенсивность исполнения $\lambda(\delta) = A e^{-\kappa\delta}$ при отклонении $\delta$ от mid-price.

**Цена резервирования** — оптимальный внутренний mid-price маркет-мейкера:

$$
r(s, t, q) = s - q\gamma\sigma^2(T-t)
$$

где $\gamma$ — коэффициент неприятия риска, $(T-t)$ — оставшееся время сессии.

**Оптимальный суммарный спред** — декомпозиция на инвентарный риск и adverse selection:

$$
\delta^a + \delta^b = \underbrace{\gamma\sigma^2(T-t)}_{\text{инвентарный риск}} + \underbrace{\frac{2}{\gamma}\ln\!\left(1 + \frac{\gamma}{\kappa}\right)}_{\text{adverse selection}}
$$

**Оптимальные котировки**:

$$
s^a = r + \frac{\delta^a + \delta^b}{2}, \quad s^b = r - \frac{\delta^a + \delta^b}{2}
$$

## Ключевые свойства

- При $q = 0$: котировки симметричны вокруг mid-price
- При $q > 0$ (лонг): $r < s$ — котировки смещаются вниз для разгрузки позиции
- При $q < 0$ (шорт): $r > s$ — котировки смещаются вверх для закрытия короткой позиции
- Спред расширяется при росте волатильности $\sigma$ и горизонта $(T-t)$
- Параметр $\kappa$ контролирует чувствительность спреда к скорости исполнения ордеров

## Реализация на Python

```python
import numpy as np
import pandas as pd

def reservation_price(s: float, q: int, gamma: float, sigma: float, time_left: float) -> float:
    """Цена резервирования с учётом инвентаря."""
    return s - q * gamma * sigma**2 * time_left

def optimal_spread(gamma: float, sigma: float, time_left: float, kappa: float) -> float:
    """Оптимальный суммарный спред (инвентарный риск + adverse selection)."""
    inventory_risk = gamma * sigma**2 * time_left
    adverse_selection = (2 / gamma) * np.log(1 + gamma / kappa)
    return inventory_risk + adverse_selection

def calculate_quotes(s: float, q: int, gamma: float, sigma: float,
                     time_left: float, kappa: float) -> dict:
    """Оптимальные котировки Bid и Ask."""
    r = reservation_price(s, q, gamma, sigma, time_left)
    spread = optimal_spread(gamma, sigma, time_left, kappa)
    return {
        'reservation': r,
        'bid': r - spread / 2,
        'ask': r + spread / 2,
        'spread': spread,
    }

def simulate_market_making(T: float, steps: int, gamma: float, sigma: float,
                           kappa: float, A: float = 1.0, seed: int = 42) -> pd.DataFrame:
    """Полная симуляция маркет-мейкинга с пуассоновским потоком ордеров."""
    np.random.seed(seed)
    dt = T / steps
    s = np.zeros(steps + 1)
    s[0] = 100.0
    q = np.zeros(steps + 1, dtype=int)
    pnl = np.zeros(steps + 1)
    records = []
    for t in range(steps):
        time_left = T - t * dt
        quotes = calculate_quotes(s[t], q[t], gamma, sigma, time_left, kappa)
        # Броуновское движение цены
        s[t+1] = s[t] + sigma * np.sqrt(dt) * np.random.randn()
        # Пуассоновские приходы ордеров
        delta_a = quotes['ask'] - s[t]
        delta_b = s[t] - quotes['bid']
        lam_a = A * np.exp(-kappa * delta_a) * dt
        lam_b = A * np.exp(-kappa * delta_b) * dt
        buy_fill = np.random.poisson(lam_b)
        sell_fill = np.random.poisson(lam_a)
        q[t+1] = q[t] + buy_fill - sell_fill
        pnl[t+1] = pnl[t] + sell_fill * quotes['ask'] - buy_fill * quotes['bid']
        records.append({**quotes, 'mid': s[t], 'inventory': q[t], 'pnl': pnl[t]})
    return pd.DataFrame(records)

result = simulate_market_making(T=1.0, steps=500, gamma=0.1, sigma=2.0, kappa=1.5)
```

## Инвентарь и цена резервирования

```chart
{
  "type": "line",
  "xAxis": "inventory",
  "data": [
    {"inventory": "-10", "mid": 100, "reservation": 104.0},
    {"inventory": "-5", "mid": 100, "reservation": 102.0},
    {"inventory": "-2", "mid": 100, "reservation": 100.8},
    {"inventory": "0", "mid": 100, "reservation": 100.0},
    {"inventory": "2", "mid": 100, "reservation": 99.2},
    {"inventory": "5", "mid": 100, "reservation": 98.0},
    {"inventory": "10", "mid": 100, "reservation": 96.0}
  ],
  "lines": [
    {"dataKey": "mid", "stroke": "#94a3b8", "name": "Mid-price (рынок)"},
    {"dataKey": "reservation", "stroke": "#3b82f6", "name": "Цена резервирования"}
  ]
}
```

## Таблица параметров

| Символ | Название | Описание | Типичный диапазон |
|:---|:---:|:---|:---|
| $\gamma$ | Неприятие риска | Агрессивность управления инвентарём | $0.01$ – $1.0$ |
| $\sigma$ | Волатильность | Дневная волатильность mid-price | $0.5$ – $5.0$ |
| $\kappa$ | Параметр интенсивности | Убывание вероятности исполнения с расстоянием | $0.5$ – $5.0$ |
| $A$ | Базовая интенсивность | Максимальная скорость прихода ордеров | $0.1$ – $10.0$ |
| $q$ | Инвентарь | Текущая нетто-позиция | Зависит от лимитов |
| $(T-t)$ | Горизонт | Оставшееся время сессии | $0$ – $T$ |

## Ограничения и расширения

**Ограничения:**
- Модель предполагает арифметическое броуновское движение и постоянную волатильность; в реальности оба параметра стохастичны.
- Линейная чувствительность интенсивности к отклонению ($e^{-\kappa\delta}$) — упрощение; реальный стакан дискретен.
- Не учитывает информационную асимметрию — informed order flow.

**Расширения:**
- **Гуэант-Лель-Фернандес-Тапиа (2013)**: явное решение с управлением терминальным инвентарём.
- **Многоактивный маркет-мейкинг**: ковариационная матрица $\Sigma$ заменяет скалярную дисперсию.
- **Стохастическая волатильность**: замена постоянного $\sigma$ на процесс Хестона.

## Практическое применение

1. **Алгоритмический маркет-мейкинг**: постоянная пересчёт оптимального спреда и асимметричное смещение котировок по инвентарю.
2. **Оптимизация исполнения**: принципы модели применяются в алгоритмах TWAP/VWAP для снижения market impact.
3. **Управление инвентарным риском**: параметр $\gamma$ настраивается по VaR-лимиту на позицию.
4. **Криптовалютные биржи**: модель широко используется в DeFi AMM-пулах для установки ценовых диапазонов.
5. **Деривативы**: MM опционов адаптирует модель с учётом гамма-хеджирования.

## Связанные темы
- [[hidden-markov-models]]
- [[monte-carlo-method]]
- [[optimal-execution]]
- [[market-impact-scaling]]
- [[brownian-motion]]

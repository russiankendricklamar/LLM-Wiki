---
title: "Модель Блэка-Шоулза"
category: "Модели ценообразования"
order: 7
lang: "ru"
slug: "black-scholes"
---
# Модель Блэка-Шоулза

**Модель Блэка-Шоулза-Мертона (BSM)**, опубликованная Фишером Блэком, Майроном Шоулзом (1973) и Робертом Мертоном (1973, Нобелевская премия 1997), произвела революцию в ценообразовании деривативов, установив связь между ценой опциона, текущей ценой актива, временем, волатильностью и безрисковой ставкой через единственное уравнение в частных производных.

## Обзор и предпосылки

До BSM оценка опционов была в значительной мере интуитивной. Прорыв Блэка и Шоулза — идея **динамического дельта-хеджирования**: непрерывно перебалансируя позицию в базовом активе, можно полностью устранить рыночный риск, и безрисковый портфель должен приносить безрисковую доходность. Из этого принципа безарбитражности выводится уравнение BSM.

## Математическая база

**Геометрическое броуновское движение** под физической мерой $\mathbb{P}$:

$$
dS_t = \mu S_t dt + \sigma S_t dW_t
$$

Под риск-нейтральной мерой $\mathbb{Q}$ (замена меры через лемму Гирсанова):

$$
dS_t = r S_t dt + \sigma S_t d\tilde{W}_t
$$

**Лемма Ито** для функции $V(S,t)$:

$$
dV = \left(\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2}\right)dt + \frac{\partial V}{\partial S}dS_t
$$

**Уравнение Блэка-Шоулза в ЧПД**:

$$
\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + rS\frac{\partial V}{\partial S} - rV = 0
$$

**Аналитическое решение** для европейских опционов:

$$
C = S\,N(d_1) - Ke^{-r\tau}N(d_2), \quad P = Ke^{-r\tau}N(-d_2) - S\,N(-d_1)
$$

$$
d_1 = \frac{\ln(S/K) + (r + \sigma^2/2)\tau}{\sigma\sqrt{\tau}}, \quad d_2 = d_1 - \sigma\sqrt{\tau}
$$

**Паритет колл-пут** (безарбитражное соотношение):

$$
C - P = S - Ke^{-r\tau}
$$

**Греческие буквы** (чувствительности):

$$
\Delta = \frac{\partial V}{\partial S},\quad \Gamma = \frac{\partial^2 V}{\partial S^2},\quad \Theta = \frac{\partial V}{\partial t},\quad \mathcal{V} = \frac{\partial V}{\partial\sigma},\quad \rho = \frac{\partial V}{\partial r}
$$

Для колл-опциона: $\Delta_C = N(d_1)$, $\Gamma_C = \frac{N'(d_1)}{S\sigma\sqrt{\tau}}$, $\mathcal{V}_C = S\sqrt{\tau}N'(d_1)$.

## Ключевые свойства

- **Логнормальное распределение** $S_T$: $\ln(S_T/S_0) \sim \mathcal{N}((r-\sigma^2/2)\tau,\, \sigma^2\tau)$
- **Безарбитражность**: не зависит от предпочтений и ожидаемой доходности $\mu$
- **Однородность**: $C(\lambda S, \lambda K, \tau) = \lambda C(S, K, \tau)$
- **Предел времени**: $C \to \max(S-K,0)$ при $\tau \to 0$

## Реализация на Python

```python
import numpy as np
from scipy.stats import norm
from scipy.optimize import brentq

def black_scholes(S: float, K: float, T: float, r: float,
                  sigma: float, option_type: str = 'call') -> dict:
    """Цена и греки европейского опциона по формуле BSM."""
    d1 = (np.log(S / K) + (r + 0.5 * sigma**2) * T) / (sigma * np.sqrt(T))
    d2 = d1 - sigma * np.sqrt(T)
    nd1, nd2 = norm.cdf(d1), norm.cdf(d2)
    npd1 = norm.pdf(d1)
    if option_type == 'call':
        price = S * nd1 - K * np.exp(-r * T) * nd2
        delta = nd1
    else:
        price = K * np.exp(-r * T) * norm.cdf(-d2) - S * norm.cdf(-d1)
        delta = nd1 - 1
    gamma = npd1 / (S * sigma * np.sqrt(T))
    vega  = S * np.sqrt(T) * npd1
    theta = (-S * npd1 * sigma / (2 * np.sqrt(T))
             - r * K * np.exp(-r * T) * (nd2 if option_type=='call' else norm.cdf(-d2)))
    return {'price': price, 'delta': delta, 'gamma': gamma,
            'vega': vega / 100, 'theta': theta / 365}

def implied_volatility(market_price: float, S: float, K: float, T: float,
                       r: float, option_type: str = 'call') -> float:
    """Подразумеваемая волатильность методом Брента."""
    def objective(sigma):
        return black_scholes(S, K, T, r, sigma, option_type)['price'] - market_price
    try:
        return brentq(objective, 1e-6, 10.0, xtol=1e-8)
    except ValueError:
        return float('nan')

# Пример: ATM опцион
result = black_scholes(S=100, K=100, T=0.25, r=0.05, sigma=0.20)
iv = implied_volatility(market_price=result['price'], S=100, K=100, T=0.25, r=0.05)
```

## Цена опциона в зависимости от цены актива

```chart
{
  "type": "line",
  "xAxis": "spot",
  "data": [
    {"spot": "80", "call": 2.8, "put": 18.0},
    {"spot": "85", "call": 4.5, "put": 14.2},
    {"spot": "90", "call": 6.5, "put": 11.5},
    {"spot": "95", "call": 9.0, "put": 8.8},
    {"spot": "100", "call": 12.3, "put": 7.4},
    {"spot": "105", "call": 15.8, "put": 5.7},
    {"spot": "110", "call": 19.8, "put": 4.5},
    {"spot": "115", "call": 23.9, "put": 3.4},
    {"spot": "120", "call": 28.4, "put": 2.6}
  ],
  "lines": [
    {"dataKey": "call", "stroke": "#10b981", "name": "Цена Call"},
    {"dataKey": "put", "stroke": "#ef4444", "name": "Цена Put"}
  ]
}
```

## Таблица параметров

| Символ | Название | Описание | Типичный диапазон |
|:---|:---:|:---|:---|
| $S$ | Спот-цена | Текущая цена базового актива | > 0 |
| $K$ | Страйк | Цена исполнения | > 0 |
| $\tau$ | Время до экспирации | В долях года | $0$ – $3$ лет |
| $r$ | Безрисковая ставка | Непрерывно начисляемая | $0$ – $10\%$ |
| $\sigma$ | Волатильность | Годовое стандартное отклонение доходностей | $5\%$ – $100\%$ |
| $N(d)$ | Функция нормального распределения | Кумулятивная CDF | $(0, 1)$ |

## Ограничения и расширения

**Ограничения:**
- Постоянная волатильность противоречит наблюдаемой улыбке волатильности (volatility smile/skew).
- Непрерывность и отсутствие скачков нереалистичны для акций при выходе новостей.
- Непрерывное хеджирование невозможно на практике — дискретное хеджирование вносит ошибку.

**Расширения:**
- **[[heston-model]]**: стохастическая волатильность с процессом CIR, порождает улыбку.
- **[[sabr-model]]**: стохастическая волатильность + CEV-динамика, стандарт на рынке ставок.
- **Модели скачков (Kou, Merton)**: добавление пуассоновских скачков для моделирования хвостов.

## Практическое применение

1. **Ценообразование опционов**: базовая формула для котирования ванильных европейских опционов на все классы активов.
2. **Хеджирование дельта-нейтральных портфелей**: непрерывная перебалансировка на основе $\Delta$ и $\Gamma$.
3. **Подразумеваемая волатильность**: инверсия BSM даёт рыночную оценку ожидаемой волатильности (VIX).
4. **Риск-менеджмент**: расчёт греков для агрегации позиций и лимитирования чувствительностей.
5. **Оценка реальных опционов**: бизнес-проекты с гибкостью оцениваются через BSM-аналогию.

## Связанные темы
- [[heston-model]]
- [[sabr-model]]
- [[monte-carlo-method]]
- [[brownian-motion]]
- [[volatility-forecasting]]
- [[exotic-options]] — расширения за пределы ванильных европейских выплат
- [[numerical-pde-finance]] — конечно-разностные и FEM-методы для PDE Блэка-Шоулса

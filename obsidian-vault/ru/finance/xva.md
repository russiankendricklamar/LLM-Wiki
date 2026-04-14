---
title: "XVA (Корректировки стоимости)"
category: "Управление рисками"
order: 22
lang: "ru"
---
# XVA (Корректировки стоимости)

**XVA** — общее название для поправок к безрисковой цене производного инструмента, учитывающих кредитный риск, стоимость фондирования и регуляторный капитал. После кризиса 2008 года XVA стал центральным в ценообразовании деривативов: игнорирование этих корректировок превращает, казалось бы, прибыльную сделку в убыточную.

## Математический аппарат

### CVA (Корректировка на кредитный риск контрагента)

**CVA** — ожидаемый убыток по деривативу при дефолте контрагента:

$$
\text{CVA} = (1-R)\int_0^T D(0,t)\,\text{EE}(t)\,dPD(t)
$$

В дискретном виде:

$$
\text{CVA} \approx (1-R)\sum_{i=1}^n D(0,t_i)\,\text{EE}(t_i)\,[PD(t_{i-1}, t_i)]
$$

где $R$ — уровень возмещения, $\text{EE}(t_i) = \mathbb{E}[\max(V_t, 0)]$ — ожидаемая экспозиция, $PD$ — вероятность дефолта. CVA снижает цену дериватива для покупателя.

### DVA (Корректировка на собственный кредитный риск)

**DVA** — симметричный термин, учитывающий собственный риск дефолта банка:

$$
\text{DVA} = (1-R_B)\int_0^T D(0,t)\,\text{ENE}(t)\,dPD_B(t)
$$

где $\text{ENE}(t) = \mathbb{E}[\max(-V_t, 0)]$ — отрицательная экспозиция. DVA спорна с бухгалтерской точки зрения: улучшение собственного кредитного качества снижает DVA и уменьшает P&L.

### FVA (Корректировка на стоимость фондирования)

**FVA** разделяется на стоимость фондирования активов (FCA) и выгоду от фондирования пассивов (FBA):

$$
\text{FVA} = \int_0^T D(0,t)\,s_F(t)\,[\text{EE}(t) - \text{ENE}(t)]\,dt
$$

где $s_F(t) = s_{borrow}(t) - s_{OIS}(t)$ — спред фондирования. FVA отражает реальную стоимость хеджирования через интербанковское фондирование.

### MVA и KVA

**MVA** — стоимость финансирования начальной маржи (IM) по клиринговым деривативам:

$$
\text{MVA} = \int_0^T D(0,t)\,s_F\,\mathbb{E}[\text{IM}(t)]\,dt
$$

**KVA** — стоимость удержания регуляторного капитала $K(t)$ на протяжении всей жизни сделки:

$$
\text{KVA} = \int_0^T D(0,t)\,r_K\,\mathbb{E}[K(t)]\,dt
$$

где $r_K$ — требуемая доходность на капитал.

## Python-реализация

```python
import numpy as np

def simulate_exposure_profile(
    s0: float,
    r: float,
    sigma: float,
    T: float,
    n_steps: int = 50,
    n_paths: int = 5000,
    notional: float = 1_000_000
) -> dict:
    """
    Симуляция профиля экспозиции GBM для простого форвардного контракта.

    Returns:
        dict с 'times', 'ee' (ожидаемая экспозиция), 'pfe_95' (95-й перцентиль)
    """
    dt = T / n_steps
    times = np.linspace(0, T, n_steps + 1)
    Z = np.random.standard_normal((n_paths, n_steps))
    S = np.zeros((n_paths, n_steps + 1))
    S[:, 0] = s0

    for t in range(n_steps):
        S[:, t+1] = S[:, t] * np.exp((r - 0.5 * sigma**2) * dt +
                                      sigma * np.sqrt(dt) * Z[:, t])

    # Экспозиция = max(S - forward_price, 0) * notional / S0
    forward_price = s0 * np.exp(r * T)
    exposures = np.maximum(S - forward_price, 0) * notional / s0

    ee   = exposures.mean(axis=0)
    pfe  = np.percentile(exposures, 95, axis=0)
    return {"times": times, "ee": ee, "pfe_95": pfe}


def calculate_cva(
    ee: np.ndarray,
    times: np.ndarray,
    hazard_rate: float,
    recovery: float = 0.40,
    r: float = 0.04
) -> float:
    """
    Расчёт CVA через профиль ожидаемой экспозиции и постоянную интенсивность дефолта.
    """
    cva = 0.0
    for i in range(1, len(times)):
        dt = times[i] - times[i-1]
        df = np.exp(-r * times[i])
        pd_marginal = hazard_rate * np.exp(-hazard_rate * times[i-1]) * dt
        cva += (1 - recovery) * df * ee[i] * pd_marginal
    return float(cva)


def calculate_fva(
    ee: np.ndarray,
    ene: np.ndarray,
    times: np.ndarray,
    funding_spread: float = 0.005,
    r: float = 0.04
) -> float:
    """Расчёт FVA через профили EE и ENE."""
    fva = 0.0
    for i in range(1, len(times)):
        dt = times[i] - times[i-1]
        df = np.exp(-r * times[i])
        fva += df * funding_spread * (ee[i] - ene[i]) * dt
    return float(fva)

# ---- Пример ----
np.random.seed(42)
profile = simulate_exposure_profile(100, 0.03, 0.20, T=5.0)
cva = calculate_cva(profile["ee"], profile["times"],
                    hazard_rate=0.02, recovery=0.40)
print(f"CVA: ${cva:,.2f}")
print(f"Пиковая EE: ${profile['ee'].max():,.0f}  PFE95: ${profile['pfe_95'].max():,.0f}")
```

## Профиль экспозиции

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "0",  "ee": 0,  "pfe": 0},
    {"time": "1Y", "ee": 45, "pfe": 80},
    {"time": "2Y", "ee": 65, "pfe": 120},
    {"time": "3Y", "ee": 75, "pfe": 150},
    {"time": "4Y", "ee": 55, "pfe": 110},
    {"time": "5Y", "ee": 0,  "pfe": 0}
  ],
  "lines": [
    {"dataKey": "ee",  "stroke": "#3b82f6", "name": "Ожидаемая экспозиция (EE)"},
    {"dataKey": "pfe", "stroke": "#ef4444", "name": "Макс. возм. экспозиция PFE 95%"}
  ]
}
```

## Сводная таблица XVA

| Компонент | Источник риска | Влияние на цену | Основной драйвер |
| :--- | :--- | :---: | :--- |
| **CVA** | Дефолт контрагента | Снижает | EE × PD |
| **DVA** | Собственный дефолт | Повышает | ENE × PD_own |
| **FVA** | Стоимость ликвидности | Зависит от базиса | Фондирование EE−ENE |
| **KVA** | Регуляторный капитал | Снижает | Капитал × r_K |
| **MVA** | Начальная маржа | Снижает | IM × s_F |

## Ограничения и расширения

- **Wrong-way risk (WWR):** Корреляция между экспозицией и PD контрагента (например, продавец нефтяных опционов при падении цен на нефть) значительно увеличивает CVA; требуется моделирование совместного распределения.
- **Динамическое хеджирование CVA:** Банки хеджируют CVA через CDS и опционы, создавая собственный P&L, зависящий от динамики кредитного рынка.
- **FRTB SA-CVA:** Базель IV требует стандартизированного подхода к капиталу на CVA, основанного на чувствительностях, а не на полной симуляции.

## Практические применения

1. **Ценообразование деривативов:** XVA-корректировка включается в котировки, чтобы сделки были прибыльными после учёта всех стоимостей риска.
2. **Оптимизация залогового соглашения:** Увеличение порога CSA снижает MVA, но увеличивает CVA — оптимальный баланс определяется KVA-эффективностью.
3. **Клиринг через CCP:** Биржевой клиринг устраняет CVA, но создаёт MVA; при малом спреде фондирования клиринг эффективнее.

## Связанные темы
- [[swaps]]
- [[cs01]]
- [[copula-models]]
- [[value-at-risk]]

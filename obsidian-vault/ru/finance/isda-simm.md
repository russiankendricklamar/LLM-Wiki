---
title: "ISDA SIMM: стандартная модель начальной маржи"
category: "Управление рисками"
order: 86
lang: "ru"
---

# ISDA SIMM: стандартная модель начальной маржи

**ISDA SIMM (Standard Initial Margin Model)** — методология расчёта начальной маржи для внебиржевых (OTC) деривативов, введённая ISDA в 2016 году в ответ на требования регуляторов (BCBS/IOSCO). SIMM позволяет контрагентам самостоятельно рассчитывать начальную маржу единым стандартным способом, избегая зависимости от проприетарных моделей клиринговых организаций.

## Регуляторный контекст

BCBS/IOSCO (2015) обязали стороны OTC-сделок обмениваться начальной маржой по нецентрально-клиринговым деривативам. Проблема: как согласовать расчёт, если обе стороны используют разные внутренние модели? SIMM — единая методология, согласованная отраслью.

Фазы внедрения: крупнейшие участники — с 2016, постепенно расширяется до контрагентов с IM-порогом от $50 млн (AANA).

## Архитектура SIMM

SIMM строится на **чувствительностях** (sensitivities / greeks) портфеля, а не на исторических симуляциях. Это делает модель детерминированной и аудируемой.

### Классы рисков

| Risk Class | Примеры |
|-----------|---------|
| Interest Rate (IR) | Swaps, FRAs, Swaptions |
| Credit Qualifying (CRQ) | CDS на инвестиционный грейд |
| Credit Non-Qualifying (CRNQ) | ABS, CDO |
| Equity (EQ) | Equity options, TRS |
| Commodity (CM) | Commodity forwards, options |
| FX | Currency forwards, FX options |

### Типы чувствительностей

- **Delta** $S_k$ — первая производная стоимости по фактору риска $k$
- **Vega** $V_k$ — чувствительность к подразумеваемой волатильности
- **Curvature** — вторая производная для нелинейных позиций

## Расчёт маржи: структура

Для каждого класса риска и типа чувствительности:

### 1. Взвешенная чувствительность

$$
WS_k = S_k \cdot RW_k
$$

где $RW_k$ — **Risk Weight** (установлен ISDA, пересматривается ежегодно). Для IR-дельты: разные веса для разных валют и сроков (tenor).

### 2. Маржа по бакету

Внутри каждого бакета $b$ (группы связанных рисков):

$$
K_b = \sqrt{\sum_{k \in b} WS_k^2 + \sum_{k \neq l \in b} \rho_{kl} \cdot WS_k \cdot WS_l}
$$

где $\rho_{kl}$ — коэффициент корреляции между факторами $k$ и $l$ (регуляторно заданный).

### 3. Маржа по классу риска

$$
\text{IM}_{\text{class}} = \sqrt{\sum_b K_b^2 + \sum_{b \neq c} \gamma_{bc} \cdot S_b \cdot S_c}
$$

где $\gamma_{bc}$ — межбакетная корреляция, $S_b = \sum_{k \in b} WS_k$.

### 4. Агрегация по классам

$$
\text{SIMM} = \sum_{\text{class}} \text{IM}_{\text{class}}
$$

(суммирование без диверсификации между классами — консервативный подход ISDA).

## Пример расчёта (IR Delta)

```python
import numpy as np
from dataclasses import dataclass, field
from typing import Dict, List

# Упрощённые Risk Weights для USD IR-Delta (tenor: 2Y, 5Y, 10Y)
RISK_WEIGHTS_IR = {
    'USD': {'2Y': 38, '5Y': 27, '10Y': 21}  # bps
}

# Корреляции между тенорами (от ISDA SIMM v2.5)
TENOR_CORR = np.array([
    [1.00, 0.91, 0.72],   # 2Y
    [0.91, 1.00, 0.87],   # 5Y
    [0.72, 0.87, 1.00],   # 10Y
])

@dataclass
class IRDeltaSensitivity:
    currency: str
    tenor: str      # '2Y', '5Y', '10Y', ...
    value: float    # delta в USD / bp (PV01)


def compute_ir_delta_margin(sensitivities: List[IRDeltaSensitivity]) -> float:
    """
    Расчёт IR-delta margin для одной валюты по SIMM.
    """
    tenors = ['2Y', '5Y', '10Y']

    # Взвешенные чувствительности
    ws = np.zeros(len(tenors))
    for s in sensitivities:
        if s.tenor in tenors:
            idx = tenors.index(s.tenor)
            rw = RISK_WEIGHTS_IR.get(s.currency, {}).get(s.tenor, 50)
            ws[idx] += s.value * rw

    # Внутрибакетная корреляционная сумма
    corr_sum = ws @ TENOR_CORR @ ws
    K = np.sqrt(max(corr_sum, 0))
    return K


def aggregate_simm_classes(class_margins: Dict[str, float]) -> float:
    """
    SIMM = сумма по классам рисков (без диверсификации).
    """
    return sum(class_margins.values())


# Пример портфеля: IRS USD
example_deltas = [
    IRDeltaSensitivity('USD', '2Y', 15000),    # PV01 в USD/bp
    IRDeltaSensitivity('USD', '5Y', -25000),
    IRDeltaSensitivity('USD', '10Y', 10000),
]

ir_margin = compute_ir_delta_margin(example_deltas)
total_simm = aggregate_simm_classes({'IR': ir_margin})
print(f"IR Delta Margin: ${ir_margin:,.0f}")
print(f"Total SIMM: ${total_simm:,.0f}")
```

## Вега и кривизна

Для опционных позиций дополнительно рассчитываются:

**Vega margin** — аналогична delta, но использует подразумеваемую волатильность вместо ставок.

**Curvature margin** — нелинейная добавка для гамма-эффектов:

$$
\text{CVR}_k = \max\!\left(0,\; -2 \cdot \frac{\partial^2 V}{\partial \sigma_k^2} \cdot (0.5 \cdot RW_k^{\text{vega}})^2\right)
$$

## IM Threshold и нетто-позиция

Регуляторы разрешают нетто-позицию внутри **Netting Set** (одного соглашения CSA). Начальная маржа выплачивается только сверх MTA (minimum transfer amount), обычно $500K.

Чистая передача маржи:

$$
\text{Transfer} = \max(\text{SIMM} - \text{MTA}, 0)
$$

## Практические особенности

- SIMM рассчитывается **каждые 10 рабочих дней** (реже при низкой активности)
- Расхождение SIMM контрагентов не должно превышать 10%; иначе — dispute resolution
- **Бэктест**: SIMM должен покрывать 99% 10-дневных потерь с вероятностью ≥ 85% (проверка раз в год)
- ISDA публикует актуальные веса и корреляции в документе **SIMM Calibration**

## Связанные статьи

- [[xva|XVA: корректировки оценки]] — MVA (Margin Valuation Adjustment) зависит от SIMM
- [[value-at-risk|Value at Risk]] — 10-дневный горизонт SIMM близок к регуляторному VaR
- [[swaps|Процентные свопы]] — основной класс активов под SIMM IR
- [[copula-models|Копульные модели]] — задание корреляций $\rho_{kl}$ в SIMM
- [[cornish-fisher-cvar|CVaR и EVT]] — альтернативные метрики хвостового риска

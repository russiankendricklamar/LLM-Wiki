---
title: "FRTB: Фундаментальный пересмотр торгового портфеля"
category: "Управление рисками"
order: 117
lang: "ru"
---

# FRTB: Фундаментальный пересмотр торгового портфеля

**FRTB (Fundamental Review of the Trading Book, Basel IV)** — реформа капитальных требований для рыночного риска, финализирована BCBS в 2019. Заменяет VaR на ES, ужесточает границу trading/banking book и вводит новые подходы: внутренние модели (IMA) и стандартизованный (SA).

## Ключевые изменения vs Basel 2.5

| Параметр | Basel 2.5 | FRTB |
|---------|-----------|------|
| Мера риска | 99% 10-day VaR | 97.5% ES 10-day |
| Ликвидность | Единый горизонт | Горизонты 10–250 дней |
| Граница TB/BB | Регуляторная | Жёсткая (intent-based) |
| Внутренние модели | По деску | По деску с P&L Attribution |

## Expected Shortfall (ES)

Замена VaR на ES — из-за неудовлетворительных свойств VaR в хвосте:

$$
\text{ES}_\alpha = \frac{1}{1-\alpha}\int_\alpha^1 \text{VaR}_u\, du = -\mathbb{E}[X \mid X \leq \text{VaR}_\alpha]
$$

**FRTB ES** вычисляется на горизонте ликвидности $LH$:

$$
\text{ES}^{FRTB} = \sqrt{\text{ES}_{T}^2(F_1) + \sum_{j\geq 2} \left(\text{ES}_T(F_j)\sqrt{\frac{LH_j - LH_{j-1}}{T}}\right)^2}
$$

## P&L Attribution Test (PLA)

Условие применения IMA: коррелированность гипотетического P&L модели с реальным:

$$
|\bar{\delta}| \leq 10\%, \quad \sigma_\delta \leq 20\% \quad (\delta = \frac{P\&L^{hyp} - P\&L^{actual}}{|P\&L^{actual}|})
$$

## Стандартизованный подход (SA) — Sensitivity-Based Method

$$
K_{SB} = \sqrt{\left(\sum_b K_b\right)^2 + \sum_b \sum_{c\neq b} \gamma_{bc} S_b S_c}
$$

где $K_b$ — капитал по bucket $b$, $\gamma_{bc}$ — межбакетная корреляция.

```python
import numpy as np
import pandas as pd

def expected_shortfall(returns: np.ndarray, alpha: float = 0.975) -> float:
    """ES на заданном уровне доверия (historical simulation)."""
    q = np.quantile(returns, 1 - alpha)
    tail = returns[returns <= q]
    return float(-tail.mean()) if len(tail) > 0 else 0.0


def scaled_es_frtb(es_base: float, lh_factors: list[tuple[float, int]]) -> float:
    """
    FRTB-масштабирование ES по горизонтам ликвидности.

    es_base: ES для фактора F1 (горизонт LH1=10)
    lh_factors: [(ES_Fj, LH_j)] — список (ES, горизонт) для j >= 2
    T: базовый горизонт = 10
    """
    T = 10
    result = es_base**2
    prev_lh = T
    for es_j, lh_j in lh_factors:
        result += (es_j * np.sqrt((lh_j - prev_lh) / T))**2
        prev_lh = lh_j
    return np.sqrt(result)


def pla_test(hyp_pnl: np.ndarray, actual_pnl: np.ndarray) -> dict:
    """
    P&L Attribution Test.
    Возвращает: delta (bias), sigma (dispersion), статус.
    Зелёная зона: |mean_delta| <= 10%, std_delta <= 20%
    Красная: |mean_delta| > 25% или std_delta > 50% → SA
    """
    delta = (hyp_pnl - actual_pnl) / (np.abs(actual_pnl) + 1e-8)
    mean_d = np.mean(delta)
    std_d = np.std(delta)

    if abs(mean_d) <= 0.10 and std_d <= 0.20:
        zone = 'green'
    elif abs(mean_d) > 0.25 or std_d > 0.50:
        zone = 'red'
    else:
        zone = 'amber'

    return {'mean_delta': mean_d, 'std_delta': std_d, 'zone': zone,
            'ima_approved': zone == 'green'}


def sa_ir_delta_capital(sensitivities: pd.DataFrame,
                          rw: pd.Series,
                          intra_corr: np.ndarray,
                          inter_corr: float = 0.5) -> float:
    """
    Стандартизованный подход — IR Delta capital.
    sensitivities: (tenors × currencies), rw: risk weights
    """
    WS = sensitivities.values * rw.values  # взвешенные чувствительности

    # Внутрибакетный: K_b = sqrt(Σ WS^2 + Σ ρ WS_k WS_l)
    K_buckets = []
    for col in range(WS.shape[1]):
        ws = WS[:, col]
        inner = ws @ intra_corr @ ws
        K_buckets.append(np.sqrt(max(inner, 0)))

    # Межбакетный
    K_arr = np.array(K_buckets)
    cross = inter_corr * np.sum(K_arr[:, None] * K_arr[None, :])
    diagonal = np.sum(K_arr**2)
    return float(np.sqrt(max(diagonal + cross, 0)))
```

## Горизонты ликвидности FRTB

| Категория риска | LH (дней) |
|----------------|-----------|
| Крупные FX | 10 |
| Малые FX, ставки G10 | 20 |
| EM ставки, кредит IG | 40 |
| Кредит HY, equity SM | 60 |
| Сырьё, экзотические | 120–250 |

## Связанные статьи

- [[value-at-risk|Value at Risk]] — предшественник ES
- [[cornish-fisher-cvar|CVaR (Cornish-Fisher)]] — хвостовой риск
- [[isda-simm|ISDA SIMM]] — margin чувствительности
- [[extreme-value-theory|EVT]] — хвостовые распределения

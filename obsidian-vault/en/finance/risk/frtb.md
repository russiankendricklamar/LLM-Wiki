---
slug: "/finance/frtb"
title: "FRTB: Fundamental Review of the Trading Book"
category: "Risk"
order: 117
lang: "en"
---

# FRTB: Fundamental Review of the Trading Book

**FRTB (Basel IV / BCBS 2019)** is the overhaul of market risk capital requirements. It replaces VaR with Expected Shortfall, tightens the trading/banking book boundary, and introduces two approaches: Internal Models Approach (IMA) and Standardised Approach (SA).

## Key Changes vs Basel 2.5

| Parameter | Basel 2.5 | FRTB |
|---------|-----------|------|
| Risk measure | 99% 10-day VaR | 97.5% ES |
| Liquidity | Single horizon | 10–250 day horizons |
| TB/BB boundary | Regulatory | Strict (intent-based) |
| Internal models | Desk-level with P&L Attribution test |

## Expected Shortfall

ES replaces VaR due to its superior tail properties:

$$
\text{ES}_\alpha = -\mathbb{E}[X \mid X \leq \text{VaR}_\alpha] = \frac{1}{1-\alpha}\int_\alpha^1 \text{VaR}_u\, du
$$

**FRTB ES scaled for liquidity horizons** $LH$:

$$
\text{ES}^{FRTB} = \sqrt{\text{ES}_{T}^2(F_1) + \sum_{j\geq 2}\left(\text{ES}_T(F_j)\sqrt{\frac{LH_j - LH_{j-1}}{T}}\right)^2}
$$

## P&L Attribution Test (PLA)

Condition for IMA approval: model's hypothetical P&L must correlate with actual P&L:

$$
|\bar{\delta}| \leq 10\%, \quad \sigma_\delta \leq 20\% \quad (\delta = \frac{P\&L^{hyp} - P\&L^{actual}}{|P\&L^{actual}|})
$$

Green zone → IMA. Red zone (|mean|>25% or std>50%) → forced SA.

## Implementation

```python
import numpy as np
import pandas as pd

def expected_shortfall(returns: np.ndarray, alpha: float = 0.975) -> float:
    """Historical simulation ES at confidence level alpha."""
    q = np.quantile(returns, 1 - alpha)
    tail = returns[returns <= q]
    return float(-tail.mean()) if len(tail) > 0 else 0.0


def scaled_es_frtb(es_base: float, lh_factors: list[tuple[float, int]]) -> float:
    """
    FRTB ES across liquidity horizons.
    es_base: ES for factor F1 (base horizon 10 days)
    lh_factors: [(ES_Fj, LH_j)] for j >= 2
    """
    T = 10
    result = es_base**2
    prev_lh = T
    for es_j, lh_j in lh_factors:
        result += (es_j * np.sqrt((lh_j - prev_lh) / T))**2
        prev_lh = lh_j
    return np.sqrt(result)


def pla_test(hyp_pnl: np.ndarray, actual_pnl: np.ndarray) -> dict:
    """P&L Attribution Test. Green/Amber/Red zone assignment."""
    delta = (hyp_pnl - actual_pnl) / (np.abs(actual_pnl) + 1e-8)
    mean_d, std_d = np.mean(delta), np.std(delta)
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
    """FRTB SA IR Delta capital via sensitivity-based method."""
    WS = sensitivities.values * rw.values
    K_buckets = []
    for col in range(WS.shape[1]):
        ws = WS[:, col]
        K_buckets.append(np.sqrt(max(ws @ intra_corr @ ws, 0)))
    K_arr = np.array(K_buckets)
    return float(np.sqrt(max(np.sum(K_arr**2) + inter_corr * np.sum(K_arr[:, None] * K_arr[None, :]), 0)))
```

## FRTB Liquidity Horizons

| Risk Category | LH (days) |
|--------------|-----------|
| Large FX | 10 |
| Small FX, G10 rates | 20 |
| EM rates, IG credit | 40 |
| HY credit, SM equity | 60 |
| Commodities, exotics | 120–250 |

## Related Articles

- [[value-at-risk|Value at Risk]] — predecessor to ES
- [[cornish-fisher-cvar|CVaR]] — tail risk measure
- [[isda-simm|ISDA SIMM]] — sensitivity-based margin
- [[extreme-value-theory|EVT]] — tail distributions

---
slug: "/finance/isda-simm"
title: "ISDA SIMM: Standard Initial Margin Model"
category: "Risk Management"
order: 86
lang: "en"
---

# ISDA SIMM: Standard Initial Margin Model

**ISDA SIMM** is the industry-standard methodology for calculating initial margin (IM) on bilateral, non-centrally-cleared OTC derivatives. Introduced in 2016 in response to BCBS/IOSCO mandatory margin requirements, SIMM gives both counterparties a deterministic, auditable formula — eliminating disputes that would arise if each side used its own proprietary model.

## Regulatory Context

BCBS/IOSCO (2015) mandated that OTC derivatives not cleared through a CCP must be margined bilaterally. Phase-in started with the largest dealers (2016) and gradually extends to all entities above the AANA threshold.

SIMM's design goals: transparent, auditable, globally consistent, and independently replicable by both counterparties.

## Architecture

SIMM is **sensitivity-based** — it works from portfolio greeks rather than full historical simulation. This makes it deterministic and fast to compute.

### Risk Classes

| Risk Class | Examples |
|-----------|---------|
| Interest Rate (IR) | Swaps, FRAs, swaptions |
| Credit Qualifying (CRQ) | Investment-grade CDS |
| Credit Non-Qualifying (CRNQ) | ABS, bespoke CDO |
| Equity (EQ) | Equity options, total-return swaps |
| Commodity (CM) | Commodity forwards and options |
| FX | Currency forwards, FX options |

### Sensitivity Types

- **Delta** $S_k$ — first derivative w.r.t. risk factor $k$
- **Vega** $V_k$ — sensitivity to implied volatility
- **Curvature** — non-linear (gamma) add-on for options

## Margin Formula

### 1. Weighted Sensitivity

$$
WS_k = S_k \cdot RW_k
$$

Risk Weights $RW_k$ are published annually by ISDA (calibrated to 99% 10-day moves).

### 2. Bucket Margin

Within bucket $b$:

$$
K_b = \sqrt{\sum_k WS_k^2 + \sum_{k \neq l} \rho_{kl} WS_k WS_l}
$$

Correlations $\rho_{kl}$ are regulatory-prescribed.

### 3. Risk-Class Margin

$$
\text{IM}_{\text{class}} = \sqrt{\sum_b K_b^2 + \sum_{b\neq c} \gamma_{bc} S_b S_c}
$$

where $S_b = \sum_{k\in b} WS_k$ and $\gamma_{bc}$ are inter-bucket correlations.

### 4. Total SIMM

$$
\text{SIMM} = \sum_{\text{class}} \text{IM}_{\text{class}}
$$

(no diversification across risk classes — deliberately conservative).

## Implementation (IR Delta)

```python
import numpy as np
from dataclasses import dataclass
from typing import List

# USD IR-delta risk weights (bps), simplified from SIMM v2.6
RISK_WEIGHTS_IR = {'USD': {'2Y': 38, '5Y': 27, '10Y': 21}}

# Tenor correlations (ISDA-prescribed)
TENOR_CORR = np.array([
    [1.00, 0.91, 0.72],   # 2Y
    [0.91, 1.00, 0.87],   # 5Y
    [0.72, 0.87, 1.00],   # 10Y
])
TENORS = ['2Y', '5Y', '10Y']

@dataclass
class IRDelta:
    currency: str
    tenor:    str    # '2Y', '5Y', '10Y'
    value:    float  # PV01 in USD/bp

def ir_delta_margin(sensitivities: List[IRDelta]) -> float:
    """IR-delta margin for a single currency bucket."""
    ws = np.zeros(len(TENORS))
    for s in sensitivities:
        if s.tenor in TENORS:
            idx = TENORS.index(s.tenor)
            rw  = RISK_WEIGHTS_IR.get(s.currency, {}).get(s.tenor, 50)
            ws[idx] += s.value * rw
    return float(np.sqrt(max(ws @ TENOR_CORR @ ws, 0)))

def total_simm(class_margins: dict[str, float]) -> float:
    """Sum across risk classes (no cross-class diversification)."""
    return sum(class_margins.values())

# Example: USD IRS portfolio
deltas = [
    IRDelta('USD', '2Y',  15_000),
    IRDelta('USD', '5Y', -25_000),
    IRDelta('USD', '10Y', 10_000),
]
ir_im = ir_delta_margin(deltas)
simm  = total_simm({'IR': ir_im})
print(f"IR Delta IM: ${ir_im:,.0f} | Total SIMM: ${simm:,.0f}")
```

## Vega and Curvature

**Vega margin** — same structure as delta, using implied vol sensitivities as inputs.

**Curvature add-on** for options:

$$
\text{CVR}_k = \max\!\left(0,\; -2\frac{\partial^2 V}{\partial\sigma_k^2}\cdot\tfrac{1}{4}(RW_k^{\text{vega}})^2\right)
$$

## Operational Details

- Both counterparties calculate SIMM independently; result should agree within 10% (dispute threshold)
- Recalculated every **10 business days** (more often for large moves)
- Annual **back-testing**: SIMM must cover 99% of 10-day losses in ≥85% of periods
- ISDA releases annual **SIMM Calibration** document with updated weights and correlations

## Related Articles

- [[xva|XVA]] — MVA (Margin Valuation Adjustment) depends directly on SIMM
- [[value-at-risk|Value at Risk]] — same 10-day 99% horizon as regulatory VaR
- [[swaps|Interest Rate Swaps]] — primary instrument class under SIMM IR
- [[copula-models|Copula Models]] — framework for prescribing $\rho_{kl}$
- [[cornish-fisher-cvar|CVaR and Cornish-Fisher]] — tail risk context for IM levels

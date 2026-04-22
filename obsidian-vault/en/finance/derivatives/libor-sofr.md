---
slug: "/finance/libor-sofr"
title: "LIBOR to SOFR Transition"
category: "Risk"
order: 118
lang: "en"
---

# LIBOR to SOFR Transition

**LIBOR (London Interbank Offered Rate)** underpinned ~$350 trillion in contracts. Following the 2012 manipulation scandal, USD LIBOR was discontinued in June 2023. The replacement is **SOFR (Secured Overnight Financing Rate)**.

## LIBOR vs SOFR

| Parameter | LIBOR | SOFR |
|---------|-------|------|
| Basis | Unsecured interbank (term) | Secured overnight (Treasury repo) |
| Curve | Full term structure | Overnight only |
| Credit risk | Includes bank credit spread | Risk-free (RFR) |
| Publication | Forward-looking daily | Next-day backward-looking |

## Replacement Rates

**SOFR Compounded** over period $[0, T]$:

$$
\text{SOFR-Compound} = \prod_{i=0}^{n-1}\left(1 + \frac{r_i \cdot d_i}{360}\right) - 1
$$

**ISDA Fixed Spread Adjustments** (converged to historical LIBOR-OIS spread):

| Tenor | USD LIBOR–SOFR |
|-------|----------------|
| 1M | +11.448 bps |
| 3M | +26.161 bps |
| 6M | +42.826 bps |
| 12M | +71.513 bps |

## Rate Types

- **SOFR In Arrears** (backward-looking): standard for derivatives
- **Term SOFR** (CME published): forward-looking, used in loans

## Implementation

```python
import numpy as np
import pandas as pd

def sofr_compound(daily_rates: pd.Series, day_counts: pd.Series) -> float:
    """Compounded SOFR over a period."""
    return float(np.prod(1 + daily_rates.values * day_counts.values / 360) - 1)


def sofr_to_libor_equivalent(sofr_compound: float,
                              spread_bps: float,
                              tenor_days: int) -> float:
    """Equivalent LIBOR rate via SOFR + ISDA spread."""
    rate_annual = sofr_compound * 360 / tenor_days
    return rate_annual + spread_bps / 10_000


def swap_libor_to_sofr(notional: float, coupon_libor: float,
                        tenor_days: int, sofr_daily: pd.Series,
                        day_counts: pd.Series, spread_bps: float) -> dict:
    """Cash flow comparison: LIBOR vs SOFR + spread."""
    sofr_rate = sofr_compound(sofr_daily, day_counts)
    sofr_equiv = sofr_to_libor_equivalent(sofr_rate, spread_bps, tenor_days)
    libor_cf = notional * coupon_libor * tenor_days / 360
    sofr_cf = notional * sofr_equiv * tenor_days / 360
    return {
        'libor_rate': coupon_libor, 'sofr_compound': sofr_rate,
        'sofr_equivalent': sofr_equiv,
        'libor_cashflow': libor_cf, 'sofr_cashflow': sofr_cf,
        'adjustment_pnl': sofr_cf - libor_cf
    }


def fallback_rate(index: str, tenor: str, sofr_term: float) -> float:
    """ISDA fallback: LIBOR → Term SOFR + fixed spread."""
    spreads = {
        ('USD_LIBOR', '1M'): 0.00011448, ('USD_LIBOR', '3M'): 0.00026161,
        ('USD_LIBOR', '6M'): 0.00042826, ('USD_LIBOR', '12M'): 0.00071513,
    }
    return sofr_term + spreads[(index, tenor)]


def discount_curve_sofr(sofr_rates: pd.Series, maturities_years: list[float]) -> pd.Series:
    """Bootstrap discount curve from overnight SOFR rates."""
    df_factors = []
    for T in maturities_years:
        n_days = int(T * 252)
        daily = np.pad(sofr_rates.values[:n_days], (0, max(0, n_days - len(sofr_rates))),
                       constant_values=sofr_rates.iloc[-1] if len(sofr_rates) > 0 else 0.05)
        df_factors.append(1.0 / np.prod(1 + daily / 360))
    return pd.Series(df_factors, index=maturities_years, name='discount_factor')
```

## Transition Timeline

| Date | Event |
|------|-------|
| 2012 | LIBOR manipulation scandal |
| 2017 | FCA announces end of LIBOR support |
| 2021 | GBP/EUR/CHF/JPY LIBOR discontinued |
| June 2023 | USD LIBOR (1M/3M/6M/12M) discontinued |
| 2023+ | Term SOFR standard for US loans |

## Related Articles

- [[swaps|Interest Rate Swaps]] — LIBOR/SOFR application
- [[xva|XVA]] — credit adjustments in discounting
- [[nelson-siegel-svensson|Nelson-Siegel-Svensson]] — yield curve modelling
- [[cir-hull-white|CIR and Hull-White]] — short rate models

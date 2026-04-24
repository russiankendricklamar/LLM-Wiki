---
slug: "/finance/swaps"
title: "Types of Swaps"
category: "Pricing"
order: 23
lang: "en"
---
# Types of Swaps

A **swap** is an OTC derivative contract in which two counterparties exchange sequences of cash flows over a specified tenor. The notional principal is usually not exchanged. Swaps are among the largest asset class in derivatives markets — the BIS estimates outstanding notional exceeding \$500 trillion. They are central to hedging interest rate risk, funding cost management, and regulatory capital optimization.

## Background and Market Structure

Swaps emerged in the early 1980s as corporations sought to exchange fixed and floating funding obligations. The IBM/World Bank currency swap in 1981 is considered the first modern swap. Today, the majority of standardized swaps are centrally cleared through CCPs (LCH, CME) following Dodd-Frank and EMIR mandates, reducing bilateral counterparty risk. Non-cleared swaps attract initial margin under UMR rules.

## Mathematical Framework

### Interest Rate Swap (IRS) Valuation

A **plain vanilla IRS** exchanges fixed-rate payments for floating-rate payments (SOFR, EURIBOR) on a notional $N$. The value to the fixed-rate payer at time $t$ is:

$$
V_{IRS}(t) = PV_{\text{float}}(t) - PV_{\text{fixed}}(t)
$$

**Fixed leg** present value:
$$
PV_{\text{fixed}} = N \cdot K \sum_{i=1}^{n} \delta_i \cdot D(t, T_i)
$$

**Floating leg** present value (under no-arbitrage using OIS discounting):
$$
PV_{\text{float}} = N \left[D(t, T_0) - D(t, T_n)\right]
$$

where:
- $K$ = fixed swap rate
- $\delta_i$ = day-count fraction for period $i$
- $D(t, T_i)$ = OIS discount factor from $t$ to $T_i$
- $T_0$ = swap start, $T_n$ = swap maturity

### Par Swap Rate

At inception, the par swap rate $K^*$ sets $V_{IRS}(0) = 0$:

$$
K^* = \frac{D(0, T_0) - D(0, T_n)}{\sum_{i=1}^{n} \delta_i \cdot D(0, T_i)}
$$

This is the ratio of the floating leg value to the fixed leg annuity (the **PV01** or **DV01** per unit rate).

### Discount Curve Bootstrapping

Discount factors are extracted from observable market instruments (OIS rates, futures, swap rates) via bootstrapping. Starting from short tenors:

$$
D(0, T_n) = \frac{D(0, T_0) - K_n^* \sum_{i=1}^{n-1} \delta_i D(0, T_i)}{1 + K_n^* \delta_n}
$$

### Mark-to-Market and DV01

The **DV01** (Dollar Value of 01) of a swap measures the P&L change for a 1bp parallel shift in rates:

$$
\text{DV01} = \frac{\partial V_{IRS}}{\partial K} \cdot 0.0001 = -N \cdot 0.0001 \sum_{i=1}^{n} \delta_i D(0, T_i)
$$

### CVA on an IRS

Under bilateral default risk, the CVA-adjusted value is:
$$
V^{CVA} = V_{IRS} - \text{CVA} + \text{DVA}
$$
$$
\text{CVA} = (1 - R_C) \int_0^T \mathbb{E}^Q[V_t^+] \lambda_t^C e^{-\int_0^t (r_s + \lambda_s^C)ds} dt
$$

where $R_C$ is counterparty recovery rate and $\lambda_t^C$ is counterparty hazard rate.

## Key Swap Types

### Cross-Currency Swap (CCS)

Exchanges principal and interest in two different currencies. At inception, principals are exchanged at spot FX; at maturity, re-exchanged at the same rate. Used for synthetic foreign currency funding, with basis spread reflecting funding pressures:

$$
V_{CCS} = V_{\text{foreign leg}} \cdot S_0 - V_{\text{domestic leg}}
$$

where $S_0$ is the spot FX rate.

### Credit Default Swap (CDS)

A CDS transfers credit risk. The protection buyer pays a periodic spread $s$ (in bps) on notional $N$; the seller pays $(1-R) \cdot N$ upon a credit event. The fair CDS spread:

$$
s = \frac{(1-R) \sum_{i} D(0,T_i) \cdot [Q(T_{i-1}) - Q(T_i)]}{\sum_{i} \delta_i D(0,T_i) Q(T_i)}
$$

where $Q(T)$ is the risk-neutral survival probability.

### Equity Swap

Exchanges equity total return (dividends + capital gains on index $S$) for SOFR + spread. Used by hedge funds for synthetic long/short exposure without borrowing stock:

$$
\text{Equity return leg} = N \cdot \frac{S_{T_i} - S_{T_{i-1}}}{S_{T_{i-1}}} + \text{dividends}
$$

### Variance Swap

Pays the difference between realized variance and the fixed variance strike $K_{var}$:

$$
V_T = N_{var} \cdot (\sigma_{realized}^2 - K_{var})
$$

where $\sigma_{realized}^2 = \frac{252}{T}\sum_{t=1}^T \ln^2(S_t/S_{t-1})$ and the fair strike $K_{var} \approx 2\int_0^\infty C(K)/K^2 \, dK$ (Dupire/Carr-Madan formula).

## Key Properties

- **Market risk**: IRS has near-zero delta to equity but high duration; DV01 scales linearly with tenor.
- **Counterparty risk**: Bilateral OTC swaps carry CVA/DVA; cleared swaps replace bilateral risk with CCP default fund contribution.
- **Convexity**: CMS (Constant Maturity Swap) rates exhibit convexity adjustment because of the timing mismatch between rate observation and payment.
- **Negative rates**: Standard LIBOR-in-arrears conventions failed under negative rates; SOFR-based ARR (Alternative Reference Rates) use compounded-in-arrears conventions.

## Python Implementation

```python
import numpy as np
from typing import Sequence

def bootstrap_discount_curve(
    tenors: Sequence[float],
    par_swap_rates: Sequence[float],
    freq: float = 0.5
) -> np.ndarray:
    """
    Bootstrap OIS discount factors from par swap rates.

    Args:
        tenors: swap maturities in years [0.5, 1.0, 1.5, ..., T]
        par_swap_rates: corresponding par swap rates (decimal)
        freq: payment frequency in years (0.5 = semi-annual)

    Returns:
        discount_factors array aligned with tenors
    """
    n = len(tenors)
    discount_factors = np.zeros(n)

    for idx, (T, K) in enumerate(zip(tenors, par_swap_rates)):
        n_periods = int(round(T / freq))
        period_tenors = np.arange(1, n_periods + 1) * freq

        # Sum of already-bootstrapped discount factors for coupon periods
        annuity = 0.0
        for j, pt in enumerate(period_tenors[:-1]):
            t_idx = int(round(pt / freq)) - 1
            annuity += freq * discount_factors[t_idx]

        # Solve for the final discount factor
        discount_factors[idx] = (1.0 - K * annuity) / (1.0 + K * freq)

    return discount_factors


def price_irs(
    notional: float,
    fixed_rate: float,
    tenors: Sequence[float],
    discount_factors: Sequence[float],
    freq: float = 0.5,
    payer: bool = True
) -> dict:
    """
    Price a plain vanilla IRS.

    Args:
        notional: notional principal
        fixed_rate: fixed coupon rate (decimal)
        tenors: payment dates in years
        discount_factors: OIS discount factors at each tenor
        freq: coupon frequency in years
        payer: True if we pay fixed and receive floating

    Returns:
        dict with pv_fixed, pv_float, npv, dv01, par_rate
    """
    dfs = np.asarray(discount_factors)
    deltas = np.full(len(tenors), freq)

    pv_fixed = notional * fixed_rate * np.sum(deltas * dfs)
    pv_float = notional * (1.0 - dfs[-1])   # par floating leg

    par_rate = pv_float / (notional * np.sum(deltas * dfs))
    npv = (pv_float - pv_fixed) * (1 if payer else -1)
    dv01 = notional * 0.0001 * np.sum(deltas * dfs)

    return {
        "pv_fixed": pv_fixed,
        "pv_float": pv_float,
        "npv": npv,
        "dv01": dv01,
        "par_rate": par_rate
    }


# ---- Example: 3-year semi-annual IRS ----
tenors = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0]
par_rates = [0.040, 0.042, 0.043, 0.044, 0.045, 0.046]

dfs = bootstrap_discount_curve(tenors, par_rates)
result = price_irs(
    notional=10_000_000,
    fixed_rate=0.045,
    tenors=tenors,
    discount_factors=dfs,
    payer=True
)

print(f"Par swap rate:  {result['par_rate']:.4%}")
print(f"NPV (pay fix):  ${result['npv']:>12,.2f}")
print(f"DV01:           ${result['dv01']:>12,.2f}")
print(f"PV Fixed Leg:   ${result['pv_fixed']:>12,.2f}")
print(f"PV Float Leg:   ${result['pv_float']:>12,.2f}")
```

## Cash Flow Visualization

```chart
{
  "type": "bar",
  "xAxis": "year",
  "data": [
    {"year": "Y1", "fixed": -45000, "float": 40000},
    {"year": "Y2", "fixed": -45000, "float": 44000},
    {"year": "Y3", "fixed": -45000, "float": 47000},
    {"year": "Y4", "fixed": -45000, "float": 50000},
    {"year": "Y5", "fixed": -45000, "float": 54000}
  ],
  "bars": [
    {"dataKey": "fixed", "fill": "#ef4444", "name": "Fixed Leg (Pay)"},
    {"dataKey": "float", "fill": "#10b981", "name": "Floating Leg (Receive)"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Range |
| :--- | :--- | :--- | :--- |
| $N$ | Notional | Principal on which payments are computed | Any size |
| $K$ | Fixed rate | Contractual fixed coupon rate | 1% – 8% |
| $K^*$ | Par swap rate | Fixed rate making NPV = 0 at inception | Market-determined |
| $D(0,T)$ | Discount factor | PV of \$1 received at time $T$ | 0.7 – 1.0 |
| $\delta_i$ | Day count fraction | Length of coupon period in years | ~0.25 (qtr) / 0.5 (semi) |
| $\text{DV01}$ | Rate sensitivity | P&L per 1bp parallel shift | Varies with tenor/notional |
| $s$ | CDS spread | Annual credit protection cost | 20 – 2000 bps |

## Limitations and Extensions

- **Basis risk**: SOFR transition from LIBOR introduced basis between different RFR compounding conventions; multi-curve frameworks are now standard.
- **Model risk for exotics**: CMS swaps and range accruals require stochastic rate models (SABR, LMM) for convexity adjustment.
- **Clearing mandate gaps**: Some exotic swap structures remain uncleared, requiring bilateral IM under BCBS-IOSCO UMR rules.
- **Digital/binary swaps**: Pay fixed amounts conditional on rate levels; deeply discontinuous payoffs require vega hedging with vanilla swaptions.

## Practical Applications

1. **Asset-liability management**: Banks swap floating mortgage rates for fixed to match fixed-coupon deposit funding.
2. **Corporate hedging**: Issuers of floating-rate bonds buy payer IRS to lock in borrowing costs.
3. **Relative value trading**: Swap spread trades (IRS vs. government bond yield) exploit richness/cheapness of sovereign credit.
4. **Hedge fund leverage**: Total return swaps provide synthetic exposure to equity baskets without direct ownership, bypassing short-selling constraints.
5. **Regulatory capital**: CDS protection enables banks to reduce risk-weighted assets and free up capital under Basel IV internal ratings-based approaches.

## Related Topics
- [[cs01]]
- [[dv01]]
- [[xva]]
- [[black-scholes]]
- [[sabr-model]]
- [[copula-models]]
- [[bootstrapping-yield-curve]] — constructing discount curves from swap rates
- [[cost-of-carry]] — carry and roll-down in swap portfolios

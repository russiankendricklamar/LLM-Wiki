---
slug: "/finance/credit-derivatives-cds"
title: "Credit Default Swaps"
category: "Risk Management"
order: 77
lang: "en"
---
# Credit Default Swaps

A **Credit Default Swap (CDS)** is a bilateral derivative in which the protection buyer pays a periodic premium (the *CDS spread*) to the protection seller, who in return compensates the buyer for losses upon a credit event (default, restructuring, failure to pay) of a reference entity. CDS are the most liquid credit derivative, with outstanding notional exceeding $3 trillion globally. They serve as both hedging instruments and tradeable expressions of credit views.

## CDS Mechanics

The protection buyer pays the **CDS spread** $s$ (in basis points per annum) on notional $N$ at quarterly intervals until maturity $T$ or the first credit event $\tau$, whichever comes first. Upon a credit event:

$$
\text{Protection payment} = (1 - R) \cdot N
$$

where $R$ is the recovery rate (typically assumed 40% for senior unsecured debt). Settlement is either **physical delivery** (buyer delivers defaulted bonds, receives par) or **cash settlement** (buyer receives par minus auction-determined recovery).

The **fair CDS spread** is the value of $s$ that equates the present value of premium payments to the present value of the contingent protection payment.

## Pricing Framework

### Hazard Rate and Survival Probability

Under the reduced-form framework, default is modeled as the first jump of a Poisson process with hazard rate $\lambda(t)$. The survival probability to time $t$:

$$
Q(t) = \exp\!\left(-\int_0^t \lambda(u)\,du\right)
$$

For constant hazard rate $\lambda$, the approximate relationship between CDS spread $s$ and default intensity:

$$
\lambda \approx \frac{s}{1 - R}
$$

### Premium and Protection Legs

The **premium leg** (present value of spread payments):

$$
\text{PV}_{\text{prem}} = s \cdot N \sum_{i=1}^{n} \Delta t_i \cdot D(0, t_i) \cdot Q(t_i)
$$

The **protection leg** (present value of contingent payment):

$$
\text{PV}_{\text{prot}} = (1-R) \cdot N \int_0^T D(0,t) \cdot \lambda(t) \cdot Q(t)\,dt
$$

where $D(0,t)$ is the risk-free discount factor. The par spread sets $\text{PV}_{\text{prem}} = \text{PV}_{\text{prot}}$.

### Bootstrapping Hazard Rates

Given a term structure of CDS spreads $\{s_1, s_2, \dots, s_m\}$ at maturities $\{T_1, \dots, T_m\}$, piecewise-constant hazard rates are extracted sequentially:

$$
\lambda_k = \frac{s_k \sum_{i \in [T_{k-1}, T_k]} \Delta t_i \cdot D_i \cdot Q(t_i)}{(1-R) \sum_{i \in [T_{k-1}, T_k]} D_i \cdot Q(t_i) \cdot \Delta t_i}
$$

This bootstrap is analogous to stripping zero rates from a swap curve.

### Mark-to-Market of an Existing CDS

A CDS entered at spread $s_0$ with current market spread $s_t$ has mark-to-market value:

$$
\text{MtM} = (s_t - s_0) \cdot \text{Risky Duration} \cdot N
$$

where the **risky duration** (risky PV01) is:

$$
\text{RPV01} = \sum_{i} \Delta t_i \cdot D(0, t_i) \cdot Q(t_i)
$$

## CDS Indices

**CDX** (North America) and **iTraxx** (Europe/Asia) are standardized portfolios of 125 equally-weighted single-name CDS. Key features:

- **Roll**: New series every 6 months; entities that default are removed with no replacement
- **Pricing**: The index spread approximates the average single-name spread, minus a **basis** reflecting liquidity and correlation
- **Single-name vs. index basis**: $\text{Basis} = s_{\text{index}} - \frac{1}{n}\sum s_i$ — typically negative due to index liquidity premium

Index tranches (equity 0-3%, mezzanine 3-7%, senior 7-15%, super-senior 15-30%, 30-100%) trade on correlation — see [[cdo-tranches]].

## The Big Bang Protocol (2009)

ISDA's 2009 "Big Bang" standardized CDS contracts: fixed coupons of 100bp or 500bp with an **upfront payment** to compensate for the difference between the fixed coupon and the par spread:

$$
\text{Upfront} \approx (s_{\text{par}} - s_{\text{fixed}}) \cdot \text{RPV01} \cdot N
$$

This standardization increased fungibility, enabled central clearing (ICE Clear Credit), and improved netting efficiency.

## CVA Connection

CVA on a derivative portfolio can be approximated using the counterparty's CDS spread:

$$
\text{CVA} \approx s_{\text{CDS}} \cdot \text{EPE} \cdot T
$$

where $\text{EPE}$ is the expected positive exposure. CDS spreads are the primary market-implied input to CVA calculations — see [[xva]].

## Python Implementation

```python
import numpy as np

def bootstrap_hazard_rates(
    cds_spreads: np.ndarray,
    tenors: np.ndarray,
    recovery: float = 0.4,
    risk_free_rate: float = 0.03
) -> np.ndarray:
    """Bootstrap piecewise-constant hazard rates from CDS spreads."""
    n = len(tenors)
    hazard_rates = np.zeros(n)
    Q = np.ones(n + 1)  # survival probabilities, Q[0] = 1

    for k in range(n):
        s = cds_spreads[k]
        dt = tenors[k] - (tenors[k-1] if k > 0 else 0)
        D = np.exp(-risk_free_rate * tenors[k])

        # Approximate: lambda_k = s / (1 - R) adjusted for term structure
        hazard_rates[k] = s / (1 - recovery)
        Q[k + 1] = Q[k] * np.exp(-hazard_rates[k] * dt)

    return hazard_rates

def cds_mark_to_market(
    s_entry: float, s_current: float,
    notional: float, tenors: np.ndarray,
    recovery: float = 0.4, risk_free_rate: float = 0.03
) -> float:
    """Mark-to-market value of a CDS position (protection buyer)."""
    hazard = s_current / (1 - recovery)
    rpv01 = sum(
        0.25 * np.exp(-risk_free_rate * t) * np.exp(-hazard * t)
        for t in tenors
    )
    return (s_current - s_entry) * rpv01 * notional

# Example: 5Y CDS, entered at 150bp, market now at 200bp
tenors = np.arange(0.25, 5.25, 0.25)
mtm = cds_mark_to_market(0.0150, 0.0200, 10_000_000, tenors)
print(f"MtM (protection buyer): ${mtm:,.0f}")
```

## CDS Spread Term Structure

```chart
{
  "type": "line",
  "xAxis": "tenor",
  "data": [
    {"tenor": "1Y", "investment_grade": 30, "high_yield": 180},
    {"tenor": "2Y", "investment_grade": 45, "high_yield": 250},
    {"tenor": "3Y", "investment_grade": 60, "high_yield": 310},
    {"tenor": "5Y", "investment_grade": 80, "high_yield": 400},
    {"tenor": "7Y", "investment_grade": 95, "high_yield": 450},
    {"tenor": "10Y", "investment_grade": 110, "high_yield": 480}
  ],
  "lines": [
    {"dataKey": "investment_grade", "stroke": "#3b82f6", "name": "Investment Grade (bps)"},
    {"dataKey": "high_yield", "stroke": "#ef4444", "name": "High Yield (bps)"}
  ]
}
```

## Applications

1. **Credit hedging**: Banks buy CDS protection on loan exposures to reduce credit concentration risk and regulatory capital (SA-CCR).
2. **Basis trading**: Exploit the CDS-bond basis — buy a bond and buy CDS protection when the basis is negative (negative basis trade).
3. **Relative value**: Long protection on one name, short on another within the same sector to express views on relative creditworthiness.
4. **CVA hedging**: CVA desks use single-name CDS to hedge counterparty credit risk on derivative portfolios.
5. **Index roll trades**: Capture the spread difference between on-the-run and off-the-run index series.

## Related Topics
- [[xva]]
- [[copula-models]]
- [[cdo-tranches]]
- [[credit-risk-models]]
- [[value-at-risk]]
- [[coherent-risk-measures]]

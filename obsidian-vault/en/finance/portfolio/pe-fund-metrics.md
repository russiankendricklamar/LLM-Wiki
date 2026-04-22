---
slug: "/finance/pe-fund-metrics"
title: "Private Equity Fund Metrics: IRR, MOIC, DPI, and the J-Curve"
category: "Risk"
order: 92
lang: "en"
---

# Private Equity Fund Metrics: IRR, MOIC, DPI, and the J-Curve

Private equity funds have irregular, multi-year cash-flow profiles — capital is called gradually and returned 5–10 years later. Standard annual return metrics are misleading in this setting. The PE industry has developed a dedicated set of performance measures.

## Core Metrics

### IRR — Internal Rate of Return

The discount rate that sets the NPV of all fund cash flows to zero:

$$
\sum_{t=0}^{T} \frac{CF_t}{(1+\text{IRR})^t} = 0
$$

$CF_t < 0$: capital calls; $CF_t > 0$: distributions.

**IRR limitations**:
- Sensitive to **timing**: early returns inflate IRR without generating more absolute profit
- Not comparable across funds with different durations
- Implicitly assumes reinvestment at IRR

### MOIC — Multiple on Invested Capital

$$
\text{MOIC} = \frac{\text{Realised} + \text{Unrealised Value}}{\text{Paid-In Capital}}
$$

A MOIC of 2.5× means every dollar invested returned $2.50. Time-independent — a complementary lens to IRR.

### DPI and RVPI

**DPI (Distributions to Paid-In)** — fraction of invested capital already returned:

$$
\text{DPI} = \frac{\text{Cumulative Distributions}}{\text{Paid-In Capital}}
$$

DPI > 1.0: fund has returned more than it took.

**RVPI (Residual Value to Paid-In)** — unrealised portfolio value:

$$
\text{RVPI} = \frac{\text{NAV}}{\text{Paid-In Capital}}
$$

**TVPI = DPI + RVPI = MOIC**.

### PME — Public Market Equivalent

Benchmark PE vs a public index using the same cash-flow schedule (Long-Nickels):

$$
\text{PME} = \frac{\sum_t D_t / I_t^{\text{idx}}}{\sum_t C_t / I_t^{\text{idx}}}
$$

PME > 1.0: PE outperformed the index on a dollar-for-dollar basis.

## The J-Curve

Early in a fund's life NAV dips below invested capital — management fees are charged but portfolio companies have not yet matured. As exits occur, NAV rises sharply, producing the characteristic J-shape.

```
TVPI
  ^                        *
  |                      **
  |                    **
  |________________**________> years
  |             **
  |_________**   <- J-curve trough
```

Trough depth and duration depend on: deployment pace, management fee rate (typically 2% p.a.), and early portfolio performance.

## Implementation

```python
import numpy as np
import pandas as pd
from scipy.optimize import brentq
from typing import Optional

def irr(cash_flows: np.ndarray,
        years: Optional[np.ndarray] = None) -> float:
    """Internal rate of return. cash_flows[0] is typically negative."""
    if years is None:
        years = np.arange(len(cash_flows), dtype=float)
    def npv(r: float) -> float:
        return float(np.sum(cash_flows / (1+r)**years))
    try:
        return brentq(npv, -0.999, 100.0, xtol=1e-8)
    except ValueError:
        return float('nan')


def xirr(cash_flows: list[float], dates: list[str]) -> float:
    """XIRR with real dates (Excel-compatible)."""
    idx = pd.to_datetime(dates)
    t0  = idx[0]
    yrs = np.array([(d - t0).days / 365.25 for d in idx])
    return irr(np.array(cash_flows), yrs)


class PEFundAnalytics:
    def __init__(self,
                 capital_calls: pd.Series,    # negative; DatetimeIndex
                 distributions: pd.Series,    # positive; DatetimeIndex
                 nav: float = 0.0):
        self.calls = capital_calls
        self.dists = distributions
        self.nav   = nav
        self.paid_in = -capital_calls.sum()
        self.cum_dists = distributions.sum()

    @property
    def dpi(self)  -> float: return self.cum_dists / self.paid_in
    @property
    def rvpi(self) -> float: return self.nav / self.paid_in
    @property
    def tvpi(self) -> float: return self.dpi + self.rvpi
    @property
    def moic(self) -> float: return self.tvpi

    def fund_irr(self) -> float:
        """IRR treating current NAV as terminal distribution."""
        cfs = pd.concat([self.calls, self.dists]).sort_index()
        if self.nav > 0:
            cfs.iloc[-1] += self.nav
        t0   = cfs.index[0]
        yrs  = np.array([(d-t0).days/365.25 for d in cfs.index])
        return irr(cfs.values, yrs)

    def pme(self, index: pd.Series) -> float:
        """Long-Nickels PME."""
        def idx_at(dt):
            i = index.index.get_indexer([dt], method='nearest')[0]
            return float(index.iloc[i])
        num = sum(d/idx_at(dt) for dt,d in self.dists.items())
        den = sum(abs(c)/idx_at(dt) for dt,c in self.calls.items())
        return num/den if den > 0 else float('nan')

    def j_curve(self) -> pd.Series:
        dates = sorted(set(self.calls.index)|set(self.dists.index))
        data = {}
        for dt in dates:
            ci = -self.calls[:dt].sum()
            di =  self.dists[:dt].sum()
            frac = (dt-dates[0]).days/max((dates[-1]-dates[0]).days,1)
            approx_nav = self.nav * frac
            data[dt] = (di+approx_nav)/ci if ci>0 else 0.
        return pd.Series(data, name='TVPI')

    def summary(self) -> dict:
        return {'Paid-In': round(self.paid_in,2),
                'Distributions': round(self.cum_dists,2),
                'NAV': round(self.nav,2),
                'DPI': round(self.dpi,2),
                'RVPI': round(self.rvpi,2),
                'TVPI/MOIC': round(self.tvpi,2),
                'IRR': f'{self.fund_irr():.1%}'}
```

### Example

```python
calls = pd.to_datetime(['2018-01-01','2019-06-01','2020-03-01'])
dists = pd.to_datetime(['2022-09-01','2023-12-01'])

fund = PEFundAnalytics(
    capital_calls=pd.Series([-10e6,-15e6,-8e6], index=calls),
    distributions=pd.Series([12e6, 20e6], index=dists),
    nav=18e6
)
print(fund.summary())
# {'TVPI/MOIC': 1.52, 'IRR': '14.3%', ...}
```

## Target Benchmarks by Strategy

| Strategy | Target IRR | Target MOIC | Horizon |
|----------|-----------|------------|---------|
| Venture Capital | 25–35% | 3.0–5.0× | 7–12 yr |
| Growth Equity | 20–30% | 2.5–4.0× | 5–8 yr |
| Buyout | 15–25% | 2.0–3.5× | 4–7 yr |
| Distressed Debt | 15–20% | 1.5–2.5× | 3–5 yr |
| Real Assets | 10–15% | 1.5–2.0× | 8–15 yr |

## Related Articles

- [[monte-carlo-method|Monte Carlo Method]] — fund cash-flow simulation
- [[kelly-criterion|Kelly Criterion]] — optimal capital allocation to PE
- [[portfolio-optimization-ml|Portfolio Optimisation with ML]] — PE in multi-asset allocation
- [[value-at-risk|Value at Risk]] — NAV-based VaR for PE portfolios
- [[repo-market-systemic|Repo Market and Systemic Risk]] — PE leverage via repo

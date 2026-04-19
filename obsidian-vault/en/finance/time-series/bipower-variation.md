---
slug: "/finance/bipower-variation"
title: "Bipower Variation"
category: "Stochastic Processes"
order: 81
lang: "en"
---

# Bipower Variation

**Bipower Variation (BPV)** is a nonlinear functional of high-frequency returns that estimates the **continuous component** of quadratic variation, filtering out jumps. Proposed by Barndorff-Nielsen and Shephard (2004), it is the cornerstone of jump-robust volatility measurement and the HAR-RV-J forecasting framework.

## Background: Realised Variance and Jumps

Realised variance (RV) over $[0,T]$ with $n$ observations:

$$
RV_n = \sum_{i=1}^{n} r_i^2 \xrightarrow{n\to\infty} \text{QV} = \underbrace{\int_0^T \sigma_s^2 \, ds}_{\text{continuous}} + \underbrace{\sum_{s \leq T} (\Delta X_s)^2}_{\text{jumps}}
$$

When jumps are present, RV conflates the two components.

## Definition

$$
\text{BPV}_n = \mu_1^{-2} \sum_{i=2}^{n} |r_{i-1}| \cdot |r_i|, \quad \mu_1 = \sqrt{2/\pi} \approx 0.798
$$

### Convergence

As $n \to \infty$, regardless of jumps:

$$
\text{BPV}_n \xrightarrow{p} \int_0^T \sigma_s^2 \, ds = \text{IV}
$$

The key insight: if a jump hits return $r_j$, then the product $|r_{j-1}||r_j|$ is "contaminated" but $|r_{j+1}||r_{j+2}|$ is not — so the contribution of any single jump to BPV is $O(1/n)$ and vanishes.

## Jump Test

The Barndorff-Nielsen–Shephard test statistic:

$$
J = \frac{RV_n - \text{BPV}_n}{\hat{\text{se}}} \xrightarrow{d} \mathcal{N}(0,1)
$$

$$
\hat{\text{se}}^2 = \left(\frac{\pi^2}{4} + \pi - 5\right) \frac{\max(1, \text{TQ}/\text{BPV}^2)}{n}
$$

where the **tripower quarticity** TQ provides a robust variance estimate:

$$
\text{TQ}_n = n \cdot \mu_{4/3}^{-3} \sum_{i=3}^{n} |r_{i-2}|^{4/3} |r_{i-1}|^{4/3} |r_i|^{4/3}
$$

## Implementation

```python
import numpy as np
import pandas as pd
from scipy.special import gamma
from scipy.stats import norm

MU1  = np.sqrt(2 / np.pi)
MU43 = 2**(2/3) * gamma(7/6) / gamma(0.5)

def bpv(returns: np.ndarray) -> float:
    abs_r = np.abs(returns)
    return (MU1**-2) * np.sum(abs_r[:-1] * abs_r[1:])

def tripower_quarticity(returns: np.ndarray) -> float:
    n = len(returns)
    a = np.abs(returns)**(4/3)
    return n * (MU43**-3) * np.sum(a[:-2] * a[1:-1] * a[2:])

def jump_test(returns: np.ndarray) -> dict:
    n   = len(returns)
    rv  = np.sum(returns**2)
    bpv_val = bpv(returns)
    tq  = tripower_quarticity(returns)

    se2  = (np.pi**2/4 + np.pi - 5) * max(1, tq / bpv_val**2) / n
    stat = (rv - bpv_val) / (rv * np.sqrt(se2) + 1e-300)
    pval = 1 - norm.cdf(stat)

    return {
        'rv': rv,
        'bpv': bpv_val,
        'jump_component': max(rv - bpv_val, 0),
        'jump_ratio': max(1 - bpv_val / rv, 0),
        'statistic': stat,
        'p_value': pval,
        'has_jump': pval < 0.01,
    }

def daily_decomposition(prices: pd.Series, freq: str = '5min') -> pd.DataFrame:
    log_ret = np.log(prices.resample(freq).last().dropna()).diff().dropna()
    rows = []
    for date, grp in log_ret.groupby(log_ret.index.date):
        r = grp.values
        if len(r) >= 5:
            res = jump_test(r)
            res['date'] = date
            rows.append(res)
    return pd.DataFrame(rows).set_index('date')
```

## HAR-RV-J Model

BPV feeds the jump component $J_t = \max(RV_t - BPV_t, 0)$ in the **Heterogeneous Autoregressive** model:

$$
RV_{t+1} = \beta_0 + \beta_d RV_t + \beta_w \overline{RV}_{t-4:t} + \beta_m \overline{RV}_{t-21:t} + \beta_J J_t + \varepsilon
$$

Empirically $\hat\beta_J < 0$: jumps are transient, while continuous volatility persists.

## Related Articles

- [[realized-kernels|Realised Kernels]] — alternative jump-robust IV estimators
- [[garch-models|GARCH Models]] — parametric volatility alternative
- [[levy-processes|Lévy Processes]] — theoretical basis for jump models
- [[extreme-value-theory|Extreme Value Theory]] — tail asymptotics for jump magnitudes
- [[volatility-forecasting|Volatility Forecasting]] — HAR-RV-J in practice

---
slug: "/finance/black-swan-scenarios"
title: "Black Swan Scenario Generator"
category: "Risk"
order: 88
lang: "en"
---

# Black Swan Scenario Generator

A **black swan scenario generator** constructs extreme-but-plausible market scenarios that lie beyond the reach of standard 99% VaR. The goal is to answer: *"What happens to the portfolio during events that have never appeared in the training window?"*

## Theoretical Foundation

### Extreme Value Theory (EVT)

The distribution of block maxima $M_n = \max(X_1,\ldots,X_n)$ converges to the **Generalised Extreme Value (GEV)** distribution:

$$
G_{\xi,\mu,\sigma}(x) = \exp\!\left[-\left(1+\xi\frac{x-\mu}{\sigma}\right)^{-1/\xi}\right]
$$

- $\xi > 0$: Fréchet (heavy tails) — typical for equities and credit
- $\xi = 0$: Gumbel (light tails)
- $\xi < 0$: Weibull (bounded support)

**Peaks Over Threshold (POT)**: exceedances above threshold $u$ follow a **Generalised Pareto Distribution (GPD)**:

$$
H_{\xi,\sigma}(y) = 1 - \left(1+\frac{\xi y}{\sigma}\right)^{-1/\xi}, \quad y > 0
$$

## Three Scenario Sources

### 1. EVT Statistical Extrapolation

Tail quantile beyond historical maximum:

$$
\hat Q_p = u + \frac{\hat\sigma}{\hat\xi}\!\left[\!\left(\frac{n}{N_u}(1-p)\right)^{-\hat\xi}-1\right]
$$

### 2. Scaled Historical Scenarios

Replay of known crises, rescaled to current volatility:

$$
r_{\text{scaled}} = r_{\text{hist}} \cdot \frac{\sigma_{\text{current}}}{\sigma_{\text{hist}}}
$$

Reference events: Black Monday 1987 (S&P −20.5% intraday), LTCM 1998, GFC 2008–09, COVID March 2020.

### 3. Narrative Hypothetical Scenarios

Expert-constructed: "Fed raises rates 300 bps in one quarter", "EM sovereign default chain", "SWIFT network disruption". Useful for risks absent from historical data.

## Stressed Correlations

**Critical error**: using normal-period correlations in stress scenarios. In a crisis, inter-asset correlations spike toward 0.85–0.95.

Estimate stressed correlations from historical crisis subsamples or use a **T-copula** with $\nu = 3$–$5$ degrees of freedom to capture tail dependence.

## Implementation

```python
import numpy as np
import pandas as pd
from scipy.stats import genpareto
from scipy.optimize import brentq
from dataclasses import dataclass
from typing import Optional

@dataclass
class Scenario:
    name:        str
    returns:     np.ndarray   # per-asset returns
    probability: float        # annual probability
    corr_stressed: Optional[np.ndarray] = None


def fit_gpd(returns: np.ndarray,
            threshold_q: float = 0.95,
            tail: str = 'left') -> dict:
    """Fit GPD to exceedances above threshold_q quantile."""
    r = -returns if tail == 'left' else returns
    u = np.quantile(r, threshold_q)
    exc = r[r > u] - u
    if len(exc) < 10:
        raise ValueError("Too few exceedances")
    xi, _, sigma = genpareto.fit(exc, floc=0)
    return {'xi': xi, 'sigma': sigma, 'u': u,
            'n': len(r), 'Nu': len(exc)}


def evt_quantile(gpd: dict, p: float) -> float:
    """Tail quantile estimate at level p ≈ 1."""
    xi, s, u, n, Nu = gpd['xi'], gpd['sigma'], gpd['u'], gpd['n'], gpd['Nu']
    if xi == 0:
        return u - s * np.log(Nu / (n * (1-p)))
    return u + s/xi * ((n/Nu*(1-p))**(-xi) - 1)


class BlackSwanGenerator:
    def __init__(self, returns: pd.DataFrame):
        self.ret = returns
        self.assets = list(returns.columns)
        self.n = len(self.assets)
        self._gpd: dict = {}
        self.normal_corr = returns.corr().values

    def fit(self, threshold_q: float = 0.95) -> None:
        for a in self.assets:
            self._gpd[a] = fit_gpd(self.ret[a].dropna().values, threshold_q)

    def evt_scenario(self, p: float = 0.999) -> Scenario:
        rets = np.array([-evt_quantile(self._gpd[a], p)
                         for a in self.assets])
        return Scenario(f'EVT p={p:.4f}', rets, 1-p)

    def historical_scenario(self,
                             crisis_rets: dict[str, float],
                             cur_vol: dict[str, float],
                             hist_vol: dict[str, float]) -> Scenario:
        rets = np.array([
            crisis_rets.get(a, 0.) * cur_vol.get(a,1.) / hist_vol.get(a,1.)
            for a in self.assets
        ])
        return Scenario('Scaled Historical', rets, 0.005)

    def stressed_corr(self,
                      crisis_periods: list[tuple[str,str]]) -> np.ndarray:
        frames = [self.ret.loc[s:e] for s, e in crisis_periods]
        return pd.concat(frames).corr().values

    def pnl(self, scenario: Scenario, weights: np.ndarray) -> float:
        return float(np.dot(weights, scenario.returns))

    def report(self, weights: np.ndarray,
               scenarios: list[Scenario]) -> pd.DataFrame:
        rows = [{'scenario': s.name,
                 'probability': s.probability,
                 'portfolio_return': self.pnl(s, weights)}
                for s in scenarios]
        return pd.DataFrame(rows).sort_values('portfolio_return')
```

## Scenario Report Template

| Scenario | P&L (%) | Annual prob | Correlation assumption |
|---------|---------|------------|----------------------|
| GFC 2008 (rescaled) | −32% | ~0.5% | Stressed ρ avg=0.85 |
| COVID Mar 2020 (rescaled) | −19% | ~1% | Stressed ρ avg=0.79 |
| EVT 99.9% | −23% | 0.1% | Historical |
| EVT 99.99% | −41% | 0.01% | Historical |
| Narrative: Fed +300bps | −16% | 2% | Moderate stress |

## Best Practices

1. **Never rely solely on VaR**: 99% VaR is blind to the 0.1% tail
2. **Use stressed correlations**: crisis-period correlations, not sample mean
3. **Refresh EVT parameters** quarterly
4. **Back-test**: verify historical crises are covered by your scenarios

## Related Articles

- [[extreme-value-theory|Extreme Value Theory]] — GPD and GEV foundations
- [[value-at-risk|Value at Risk]] — standard metric complemented by scenarios
- [[cornish-fisher-cvar|CVaR and Cornish-Fisher]] — analytical tail risk
- [[systemic-contagion-debtrank|DebtRank]] — network propagation of shocks
- [[copula-models|Copula Models]] — tail dependence in scenarios
- [[monte-carlo-method|Monte Carlo Method]] — scenario simulation

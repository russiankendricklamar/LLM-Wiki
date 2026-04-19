---
slug: "/finance/factor-attribution"
title: "Factor Risk Attribution and Decomposition"
category: "Risk Management"
order: 116
lang: "en"
---

# Factor Risk Attribution and Decomposition

**Factor attribution** decomposes portfolio return and risk by source: market factors (market, value, momentum) and idiosyncratic risk. Mandatory for performance reporting to clients and risk management.

## Brinson-Hood-Beebower (BHB) Decomposition

Active return vs. benchmark decomposed by sector weights:

$$
R_P - R_B = \underbrace{\sum_i (w_i^P - w_i^B) R_i^B}_{\text{Allocation}} + \underbrace{\sum_i w_i^B (R_i^P - R_i^B)}_{\text{Selection}} + \underbrace{\sum_i (w_i^P - w_i^B)(R_i^P - R_i^B)}_{\text{Interaction}}
$$

## Factor Risk Decomposition

For portfolio $\mathbf{w}$ with factor loadings $B$ ($N \times K$):

$$
\sigma_P^2 = \mathbf{w}^\top B F B^\top \mathbf{w} + \mathbf{w}^\top D \mathbf{w}
$$

**Marginal Contribution to Risk (MCTR)**:

$$
\text{MCTR}_i = \frac{(\Sigma \mathbf{w})_i}{\sigma_P}
$$

**Percent Contribution to Risk**:

$$
\text{PCTR}_i = \frac{w_i \cdot \text{MCTR}_i}{\sigma_P}
$$

## Implementation

```python
import numpy as np
import pandas as pd
from dataclasses import dataclass

@dataclass
class FactorModel:
    factor_returns: pd.DataFrame    # (T, K)
    factor_loadings: pd.DataFrame   # (N, K)
    specific_var: pd.Series         # (N,)

    @property
    def factor_cov(self) -> np.ndarray:
        return self.factor_returns.cov().values

    def total_cov(self) -> np.ndarray:
        B, F, D = self.factor_loadings.values, self.factor_cov, np.diag(self.specific_var.values)
        return B @ F @ B.T + D

    def portfolio_risk(self, weights: np.ndarray) -> float:
        return np.sqrt(weights @ self.total_cov() @ weights)

    def risk_attribution(self, weights: np.ndarray) -> pd.Series:
        """Decompose risk by factor and idiosyncratic components."""
        B, F, D = self.factor_loadings.values, self.factor_cov, np.diag(self.specific_var.values)
        sigma_p = self.portfolio_risk(weights)
        factor_exp = weights @ B
        contrib = {}
        for k, fname in enumerate(self.factor_returns.columns):
            contrib[fname] = factor_exp[k] * (F @ factor_exp)[k] / sigma_p
        contrib['Specific'] = float(weights @ D @ weights / sigma_p)
        result = pd.Series(contrib)
        return result / result.sum()


def brinson_attribution(portfolio_weights: pd.Series,
                          benchmark_weights: pd.Series,
                          portfolio_returns: pd.Series,
                          benchmark_returns: pd.Series) -> pd.DataFrame:
    """BHB decomposition by sector."""
    wp = portfolio_weights.reindex(benchmark_weights.index, fill_value=0)
    wb, rp, rb = benchmark_weights, portfolio_returns.reindex(benchmark_weights.index, fill_value=0), benchmark_returns
    return pd.DataFrame({
        'allocation': (wp - wb) * rb,
        'selection':  wb * (rp - rb),
        'interaction': (wp - wb) * (rp - rb),
    }).assign(total=lambda df: df.sum(axis=1))


def tracking_error_decomposition(active_weights: np.ndarray,
                                   cov_matrix: np.ndarray) -> dict:
    """Decompose tracking error across active positions."""
    te = np.sqrt(active_weights @ cov_matrix @ active_weights)
    mctr = (cov_matrix @ active_weights) / te
    pctr = active_weights * mctr / te
    return {
        'tracking_error_annualized': te * np.sqrt(252),
        'mctr': mctr,
        'pctr': pctr,
        'top_contributors': pd.Series(pctr).nlargest(5).to_dict()
    }
```

## Ex-Post vs Ex-Ante vs Risk Budgeting

| Approach | When | Formula |
|---------|------|---------|
| Ex-post | Performance review | Realized returns and factors |
| Ex-ante | Risk management | Expected factor loadings |
| Risk budgeting | Portfolio construction | PCTR → equal contributions |

## Related Articles

- [[fama-macbeth-regression|Fama-MacBeth Regression]] — factor loadings
- [[hierarchical-risk-parity|HRP]] — risk budgeting alternative
- [[ts-cs-factor-analysis|TS/CS Factor Analysis]] — time-series vs. cross-sectional
- [[eigenportfolio-rmt|Eigenportfolio and RMT]] — covariance matrix cleaning

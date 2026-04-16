---
title: "CDO Tranches"
category: "Risk Management"
order: 78
lang: "en"
---
# CDO Tranches

A **Collateralized Debt Obligation (CDO)** is a structured credit product that pools a portfolio of credit exposures (bonds, loans, or CDS) and redistributes the aggregate credit risk by issuing tranches with different seniority. Each tranche absorbs losses in strict order: equity absorbs first, then mezzanine, then senior. This "slicing" of risk transforms a homogeneous pool into securities with radically different risk-return profiles — from equity tranches yielding 15-30% to super-senior tranches rated AAA.

## Tranche Structure

A CDO with notional $N$ is divided into tranches defined by **attachment** $a$ and **detachment** $d$ points. The tranche loss:

$$
L_{\text{tranche}}(a, d) = \frac{\min(L, d \cdot N) - \min(L, a \cdot N)}{(d - a) \cdot N}
$$

where $L$ is the total portfolio loss. Standard index tranche points:

| Tranche | Attachment | Detachment | Character |
|:---|:---:|:---:|:---|
| **Equity** | 0% | 3% | First loss, highest spread |
| **Mezzanine** | 3% | 7% | Leveraged credit exposure |
| **Senior** | 7% | 15% | Investment grade |
| **Super-senior** | 15% | 30% | Near risk-free (pre-crisis) |
| **Remainder** | 30% | 100% | Minimal risk |

## Gaussian Copula Model

### The Li (2000) Framework

David Li's seminal model maps each obligor $i$ to a latent variable:

$$
X_i = \sqrt{\rho}\,M + \sqrt{1-\rho}\,Z_i
$$

where $M \sim \mathcal{N}(0,1)$ is the common market factor, $Z_i \sim \mathcal{N}(0,1)$ are idiosyncratic, and $\rho$ is the pairwise asset correlation. Default occurs when:

$$
X_i < \Phi^{-1}(F_i(T))
$$

where $F_i(T) = 1 - e^{-\lambda_i T}$ is the marginal default probability and $\Phi^{-1}$ is the standard normal quantile.

### Conditional Independence

Conditional on $M = m$, defaults are independent. The conditional default probability:

$$
p_i(m) = \Phi\!\left(\frac{\Phi^{-1}(F_i(T)) - \sqrt{\rho}\,m}{\sqrt{1-\rho}}\right)
$$

The portfolio loss distribution is computed by integrating over $m$:

$$
\mathbb{P}(L \leq x) = \int_{-\infty}^{\infty} \mathbb{P}(L \leq x \mid M = m)\,\phi(m)\,dm
$$

where the inner probability follows a binomial (homogeneous pool) or Poisson approximation.

## Correlation and Pricing

### Compound Correlation

The **compound (implied) correlation** is the single $\rho$ that, inserted into the Gaussian copula model, reproduces a tranche's market spread. It is analogous to Black-Scholes implied volatility.

### Base Correlation

**Base correlation** maps each detachment point $d$ to a correlation $\rho(d)$ that prices the "base tranche" $[0, d]$ correctly:

$$
\text{PV}_{\text{tranche}}[a, d] = \text{PV}_{\text{base}}[0, d] - \text{PV}_{\text{base}}[0, a]
$$

Base correlation is monotonically increasing with detachment — the **correlation smile** — reflecting that senior tranches require higher correlation to match their market prices.

### The Correlation Smile

```chart
{
  "type": "line",
  "xAxis": "detachment",
  "data": [
    {"detachment": "3%", "base_corr": 18},
    {"detachment": "7%", "base_corr": 28},
    {"detachment": "15%", "base_corr": 42},
    {"detachment": "30%", "base_corr": 58},
    {"detachment": "100%", "base_corr": 72}
  ],
  "lines": [
    {"dataKey": "base_corr", "stroke": "#8b5cf6", "name": "Base Correlation (%)"}
  ]
}
```

## The 2007-08 Crisis

The Gaussian copula's fatal flaw: **zero tail dependence** ($\lambda_L = \lambda_U = 0$ for $\rho < 1$). In practice:

- Subprime mortgage pools experienced correlated defaults far exceeding Gaussian predictions
- Super-senior tranches rated AAA suffered catastrophic losses
- The model underestimated the probability of 10+ simultaneous defaults in a 125-name portfolio by orders of magnitude
- Rating agencies relied on Gaussian copula outputs, producing misleading AAA ratings

See [[copula-models]] for the mathematical explanation of tail dependence failure.

## Alternative Models

**Student-t copula**: Replaces $\Phi$ with $t_\nu$, introducing symmetric tail dependence $\lambda > 0$ for finite $\nu$. Better captures joint extreme defaults.

**Random factor loading**: Allows $\rho$ to be stochastic — $\rho(M)$ increases in stress, generating fatter tails in the loss distribution.

**Marshall-Olkin copula**: Models simultaneous defaults triggered by common shocks, producing mass at joint default events rather than relying on continuous correlation.

**Stochastic recovery**: Recovery rate $R$ is negatively correlated with default frequency — when many names default, recovery drops, amplifying senior tranche losses.

## Cash CDOs vs. Synthetic CDOs

| Feature | Cash CDO | Synthetic CDO |
|:---|:---|:---|
| **Collateral** | Physical bonds/loans in SPV | CDS contracts referencing names |
| **Funding** | Funded (investors pay par) | Unfunded (swap-based exposure) |
| **Issuance** | SPV issues notes | Dealer writes tranche swaps |
| **Prepayment risk** | Yes (for CLOs, MBS) | No |
| **Liquidity** | Lower (bespoke) | Higher (index tranches) |

**Bespoke tranches** are custom synthetic CDOs with client-chosen reference portfolios, attachment, and detachment — priced via interpolation of base correlations from liquid index tranches.

## Python Implementation

```python
import numpy as np
from scipy.stats import norm

def gaussian_copula_loss_distribution(
    default_probs: np.ndarray, rho: float,
    n_simulations: int = 50000, seed: int = 42
) -> np.ndarray:
    """Simulate portfolio loss count using one-factor Gaussian copula."""
    rng = np.random.default_rng(seed)
    n_names = len(default_probs)
    thresholds = norm.ppf(default_probs)

    M = rng.standard_normal(n_simulations)
    Z = rng.standard_normal((n_simulations, n_names))
    X = np.sqrt(rho) * M[:, None] + np.sqrt(1 - rho) * Z

    defaults = (X < thresholds).astype(int)
    loss_counts = defaults.sum(axis=1)
    return loss_counts

def tranche_expected_loss(
    loss_counts: np.ndarray, n_names: int,
    attach: float, detach: float
) -> float:
    """Expected tranche loss as fraction of tranche notional."""
    portfolio_loss_frac = loss_counts / n_names
    tranche_loss = np.clip(portfolio_loss_frac - attach, 0, detach - attach)
    return float(tranche_loss.mean() / (detach - attach))

# Example: 125-name portfolio, 5Y, uniform 2% default prob
n_names = 125
dp = np.full(n_names, 0.02)
losses = gaussian_copula_loss_distribution(dp, rho=0.30)

for a, d, name in [(0, 0.03, "Equity"), (0.03, 0.07, "Mezz"),
                    (0.07, 0.15, "Senior"), (0.15, 0.30, "Super-Sr")]:
    el = tranche_expected_loss(losses, n_names, a, d)
    print(f"{name:>10} [{a:.0%}-{d:.0%}]: EL = {el:.4%}")
```

## Lessons from the Crisis

- **Model risk is existential**: A single correlation parameter cannot capture the full loss dependence structure of 125+ obligors
- **Tail dependence matters**: Gaussian copula is appropriate only for non-extreme scenarios; crisis pricing requires heavy-tailed alternatives
- **Rating reliance**: Mechanical use of model outputs for ratings without stress testing created systemic fragility
- **Transparency**: Post-crisis regulation (Dodd-Frank, EU Securitisation Regulation) mandates risk retention, disclosure, and due diligence — see [[securitization]]

## Related Topics
- [[credit-derivatives-cds]]
- [[copula-models]]
- [[credit-risk-models]]
- [[securitization]]
- [[value-at-risk]]
- [[coherent-risk-measures]]

---
slug: "/finance/credit-risk-models"
title: "Credit Risk Models"
category: "Risk Management"
order: 79
lang: "en"
---
# Credit Risk Models

Credit risk modeling divides into two paradigms: **structural models** that derive default from the economics of the firm's balance sheet, and **reduced-form (intensity) models** that treat default as an exogenous random event governed by a stochastic intensity process. Each approach has distinct calibration properties, and modern practice often uses both — structural models for fundamental analysis and reduced-form models for derivatives pricing.

## Structural Models

### Merton (1974)

Robert Merton's foundational insight: **equity is a call option on firm value**. The firm has total asset value $V_t$ following geometric Brownian motion:

$$
dV_t = \mu V_t\,dt + \sigma_V V_t\,dW_t
$$

The firm has issued zero-coupon debt with face value $D$ maturing at $T$. Default occurs if $V_T < D$ at maturity. Equity value is:

$$
E = V_0 \Phi(d_1) - D e^{-rT} \Phi(d_2)
$$

where:

$$
d_1 = \frac{\ln(V_0/D) + (r + \sigma_V^2/2)T}{\sigma_V \sqrt{T}}, \quad d_2 = d_1 - \sigma_V \sqrt{T}
$$

The risk-neutral default probability:

$$
PD = \Phi(-d_2) = \Phi\!\left(-\frac{\ln(V_0/D) + (r - \sigma_V^2/2)T}{\sigma_V\sqrt{T}}\right)
$$

### Distance to Default

The **distance to default (DD)** under the physical measure:

$$
DD = \frac{\ln(V_0/D) + (\mu - \sigma_V^2/2)T}{\sigma_V\sqrt{T}}
$$

DD measures how many standard deviations the firm's asset value is from the default point. KMV-Moody's maps DD to historical default frequencies via an empirical mapping function, producing the **Expected Default Frequency (EDF)**.

### First-Passage Extensions

The original Merton model only allows default at maturity. **Black-Cox (1976)** introduces a default barrier $B(t)$ that the firm can breach at any time:

$$
\tau = \inf\{t > 0 : V_t \leq B(t)\}
$$

For an exponential barrier $B(t) = B_0 e^{\gamma t}$, the first-passage probability has a closed-form solution involving the standard normal CDF.

## Reduced-Form Models

### Intensity-Based Framework

Default is the first jump of a **Cox process** (doubly-stochastic Poisson process) with intensity $\lambda(t)$. The survival probability:

$$
Q(t) = \mathbb{E}\!\left[\exp\!\left(-\int_0^t \lambda(s)\,ds\right)\right]
$$

The defaultable zero-coupon bond price:

$$
P(0, T) = \mathbb{E}^{\mathbb{Q}}\!\left[\exp\!\left(-\int_0^T (r_s + \lambda_s(1-R))\,ds\right)\right]
$$

where $R$ is the recovery rate and $r_s$ is the risk-free short rate.

### Jarrow-Turnbull (1995)

The simplest intensity model: constant hazard rate $\lambda$ and constant recovery $R$. The credit spread:

$$
s(T) \approx \lambda(1 - R)
$$

Calibration to CDS spreads is immediate: $\lambda = s / (1-R)$. See [[credit-derivatives-cds]] for the bootstrapping procedure.

### Duffie-Singleton (1999)

Generalizes to **state-dependent intensity**: $\lambda_t$ can depend on macroeconomic factors, the firm's credit rating, or market observables. The bond price under the "recovery of market value" assumption:

$$
P(0, T) = \mathbb{E}^{\mathbb{Q}}\!\left[\exp\!\left(-\int_0^T R_s\,ds\right)\right]
$$

where $R_s = r_s + \lambda_s L_s$ is the default-adjusted short rate and $L_s = 1 - R_s^{\text{rec}}$ is the loss-given-default.

## Comparison

| Feature | Structural | Reduced-Form |
|:---|:---|:---|
| **Default trigger** | $V_t < D$ (endogenous) | Jump of Cox process (exogenous) |
| **Inputs** | Asset value, volatility, leverage | Hazard rate from CDS/bond spreads |
| **Calibration** | Difficult (unobservable $V_t$) | Easy (direct from market spreads) |
| **Short-term PD** | Near zero (diffusion) | Positive (jump risk) |
| **Economic intuition** | High (balance sheet driven) | Low (statistical) |
| **Use case** | Fundamental analysis, EDF | Derivatives pricing, CVA |

## Credit Migration Models

### CreditMetrics (JP Morgan, 1997)

Models credit risk through **rating transitions**. The one-year transition matrix $\Pi$ gives probabilities $\pi_{ij}$ of migrating from rating $i$ to rating $j$. Portfolio loss distribution:

1. For each obligor, simulate a latent variable $X_i = \sqrt{\rho}\,M + \sqrt{1-\rho}\,Z_i$
2. Map $X_i$ to a new rating via quantile thresholds from $\Pi$
3. Revalue bonds at the new rating's spread curve
4. Aggregate portfolio mark-to-market changes

### Basel IRB Formula

The Basel Internal Ratings-Based approach uses a one-factor Gaussian copula (structurally identical to [[cdo-tranches]] models) for regulatory capital:

$$
K = \text{LGD} \cdot \Phi\!\left(\frac{\Phi^{-1}(PD) + \sqrt{\rho}\,\Phi^{-1}(0.999)}{\sqrt{1-\rho}}\right) - PD \cdot \text{LGD}
$$

where $\rho$ is the asset correlation prescribed by Basel (decreasing in PD), and the 99.9% quantile ensures capital covers the 1000-year loss event.

## Python Implementation

```python
import numpy as np
from scipy.stats import norm

def merton_default_prob(
    V0: float, D: float, r: float,
    sigma_V: float, T: float
) -> dict:
    """Merton model: equity value, default probability, distance to default."""
    d1 = (np.log(V0 / D) + (r + 0.5 * sigma_V**2) * T) / (sigma_V * np.sqrt(T))
    d2 = d1 - sigma_V * np.sqrt(T)
    equity = V0 * norm.cdf(d1) - D * np.exp(-r * T) * norm.cdf(d2)
    pd_rn = norm.cdf(-d2)
    dd = d2  # distance to default (risk-neutral)
    return {"equity": equity, "PD": pd_rn, "DD": dd, "d1": d1, "d2": d2}

def intensity_bond_price(
    lambda_: float, R: float, r: float, T: float
) -> float:
    """Defaultable zero-coupon bond price under constant intensity."""
    return np.exp(-(r + lambda_ * (1 - R)) * T)

def credit_spread(lambda_: float, R: float) -> float:
    """Credit spread implied by constant intensity model."""
    return lambda_ * (1 - R)

def basel_irb_capital(
    PD: float, LGD: float, rho: float, M: float = 1.0
) -> float:
    """Basel IRB capital requirement per unit EAD."""
    K = LGD * (norm.cdf(
        (norm.ppf(PD) + np.sqrt(rho) * norm.ppf(0.999)) / np.sqrt(1 - rho)
    ) - PD * LGD)
    return K * M  # M = maturity adjustment

# Example: Merton model for a BBB-rated firm
result = merton_default_prob(V0=100, D=70, r=0.03, sigma_V=0.25, T=1.0)
print(f"Equity: {result['equity']:.2f}")
print(f"Default prob: {result['PD']:.4%}")
print(f"Distance to default: {result['DD']:.2f}")

# Intensity model calibrated to 150bp CDS spread
lam = 0.015 / (1 - 0.4)
bond_px = intensity_bond_price(lam, R=0.4, r=0.03, T=5.0)
print(f"\nHazard rate: {lam:.4f}")
print(f"5Y defaultable bond: {bond_px:.4f}")
```

## Default Probability Term Structure

```chart
{
  "type": "line",
  "xAxis": "year",
  "data": [
    {"year": "1Y", "structural": 0.1, "reduced_form": 1.5},
    {"year": "2Y", "structural": 0.8, "reduced_form": 3.0},
    {"year": "3Y", "structural": 2.1, "reduced_form": 4.4},
    {"year": "5Y", "structural": 5.5, "reduced_form": 7.2},
    {"year": "7Y", "structural": 9.2, "reduced_form": 9.8},
    {"year": "10Y", "structural": 14.0, "reduced_form": 13.9}
  ],
  "lines": [
    {"dataKey": "structural", "stroke": "#3b82f6", "name": "Structural (Merton) PD %"},
    {"dataKey": "reduced_form", "stroke": "#ef4444", "name": "Reduced-Form PD %"}
  ]
}
```

## Limitations and Extensions

- **Structural models**: Unobservable firm value requires estimation from equity prices and balance sheet data; short-term default probabilities are near zero due to the diffusion assumption
- **Reduced-form models**: No economic mechanism for default — intensity is a statistical object, not a causal one
- **Correlation**: Both paradigms extend to multi-name settings via factor copulas (structural) or correlated intensities (reduced-form)
- **Machine learning**: Modern approaches (GNN credit scoring, survival models) combine structural features with market-implied intensities — see [[gnn-credit-risk]] and [[survival-risk-prediction]]

## Related Topics
- [[credit-derivatives-cds]]
- [[cdo-tranches]]
- [[copula-models]]
- [[xva]]
- [[black-scholes]]
- [[value-at-risk]]
- [[credit-migration]] — transition matrices and rating dynamics

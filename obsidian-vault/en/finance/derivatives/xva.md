---
slug: "/finance/xva"
title: "XVA (Valuation Adjustments)"
category: "Risk"
order: 22
lang: "en"
---
# XVA (Valuation Adjustments)

**XVA** is the collective term for a family of valuation adjustments that modify the mid-market ("risk-free") price of a derivative to reflect real-world frictions: counterparty default risk, funding costs, regulatory capital charges, and margin requirements. These adjustments were largely ignored before the 2008 financial crisis. Post-crisis, XVA desks at major banks now manage portfolios with aggregate adjustments in the billions of dollars, and XVA is a central element of IFRS 13 fair value accounting.

## Background

Before 2008, derivatives were priced assuming risk-free bilateral settlement. The crisis exposed two fatal flaws: counterparties (Lehman, AIG) could default while holding large in-the-money positions, and funding costs could spike dramatically. The industry responded by systematically incorporating these costs into trade prices. The Basel III/IV regulatory framework codified capital requirements that amplified KVA and MVA further.

## Mathematical Framework

### CVA — Credit Valuation Adjustment

CVA is the market value of expected counterparty credit losses. Under risk-neutral measure $\mathbb{Q}$:

$$
\text{CVA} = (1 - R) \int_0^T \mathbb{E}^Q\!\left[V_t^+\right] \lambda_t^C \, e^{-\int_0^t (r_s + \lambda_s^C)\,ds}\, dt
$$

where:
- $R$ = counterparty recovery rate (typically 0.4)
- $V_t^+ = \max(V_t, 0)$ = positive exposure (our credit risk)
- $\lambda_t^C$ = counterparty risk-neutral hazard rate
- $r_s$ = risk-free short rate

In discrete form using $n$ time steps:

$$
\text{CVA} \approx (1-R) \sum_{i=1}^{n} \text{EE}(t_i) \cdot \text{PD}(t_{i-1}, t_i) \cdot D(0, t_i)
$$

where $\text{EE}(t_i) = \mathbb{E}^Q[V_{t_i}^+]$ is the **Expected Exposure** and $\text{PD}(t_{i-1}, t_i)$ is the marginal default probability.

### DVA — Debit Valuation Adjustment

DVA is the symmetric adjustment for our own default risk — the benefit if we default while the trade has negative value to us:

$$
\text{DVA} = (1 - R^{own}) \int_0^T \mathbb{E}^Q\!\left[V_t^-\right] \lambda_t^{own} \, e^{-\int_0^t (r_s + \lambda_s^{own})\,ds}\, dt
$$

where $V_t^- = \max(-V_t, 0)$ is our **negative exposure**. The bilateral CVA-adjusted price is $V^{bilateral} = V_{mid} - \text{CVA} + \text{DVA}$.

DVA is controversial: realizing DVA gains requires buying back one's own debt at a discount — only achievable upon one's own default. IFRS 13 mandates inclusion; some regulators disallow it for capital purposes.

### FVA — Funding Valuation Adjustment

FVA captures the asymmetry between the rate at which a bank funds collateral posted to counterparties (bank's funding spread $s^F$) versus the rate earned on collateral received (risk-free or OIS):

$$
\text{FVA} = \int_0^T \mathbb{E}^Q\!\left[\text{FCA}(t) - \text{FBA}(t)\right] D(0,t)\, dt
$$

- **FCA** (Funding Cost Adjustment): cost of funding positive MtM when posting variation margin to CSA counterparties.
- **FBA** (Funding Benefit Adjustment): benefit from investing received collateral at above-OIS rates.

### MVA — Margin Valuation Adjustment

MVA accounts for the cost of funding **initial margin (IM)** over the trade's life, which cannot be rehypothecated:

$$
\text{MVA} = s^F \int_0^T \mathbb{E}^Q\!\left[\text{IM}(t)\right] D(0,t)\, dt
$$

Under SIMM (ISDA Standard Initial Margin Model), IM scales with portfolio Greeks; MVA for long-dated swaps can be 10–30 bps of notional.

### KVA — Capital Valuation Adjustment

KVA is the cost of holding regulatory capital (CET1 under Basel III/IV) over the trade lifetime, compensating shareholders for the hurdle rate $h$:

$$
\text{KVA} = h \int_0^T \mathbb{E}^Q\!\left[\text{RC}(t)\right] D(0,t)\, dt
$$

where $\text{RC}(t)$ is the regulatory capital at time $t$ (SA-CCR exposure under FRTB).

## Key Properties

- **Wrong-way risk (WWR)**: When counterparty credit quality deteriorates precisely when exposure is highest (e.g., selling CDS protection on your own industry). Correlation between $V_t$ and $\lambda_t^C$ makes CVA > product of marginals.
- **XVA netting**: CVA/DVA are computed at netting set level (ISDA Master Agreement); FVA at portfolio level; MVA/KVA at desk or entity level.
- **Double-counting**: CVA and FVA can overlap for uncollateralised trades; Hull-White (2012) argued FVA should not be charged; Green-Kenyon (2014) showed the overlap is a portfolio-level effect.
- **XVA Greeks**: Sensitivities (CVA delta, vega, gamma) are computed via AAD (Adjoint Algorithmic Differentiation) for real-time risk management.

## Python Implementation

```python
import numpy as np

def simulate_exposure_profile(
    S0: float,
    r: float,
    sigma: float,
    T: float,
    n_steps: int,
    n_paths: int,
    seed: int = 42
) -> np.ndarray:
    """
    Simulate GBM paths and return Expected Exposure profile.
    For a forward contract, exposure ~ S_t - K * D(t,T).
    """
    rng = np.random.default_rng(seed)
    dt = T / n_steps
    times = np.linspace(0, T, n_steps + 1)

    # GBM simulation
    Z = rng.standard_normal((n_paths, n_steps))
    log_S = np.log(S0) + np.cumsum(
        (r - 0.5 * sigma**2) * dt + sigma * np.sqrt(dt) * Z, axis=1
    )
    S = np.hstack([np.full((n_paths, 1), S0), np.exp(log_S)])

    # Exposure = max(S_t - S0 * exp(r*t), 0) (forward at-par)
    K_fwd = S0 * np.exp(r * times)
    exposure = np.maximum(S - K_fwd, 0)

    ee = exposure.mean(axis=0)          # Expected Exposure
    pfe_95 = np.percentile(exposure, 95, axis=0)  # PFE at 95%
    return times, ee, pfe_95


def calculate_cva(
    ee: np.ndarray,
    times: np.ndarray,
    hazard_rate: float,
    recovery: float,
    risk_free_rate: float
) -> float:
    """
    Compute CVA from an expected exposure profile.

    Args:
        ee: expected exposure at each time step
        times: time grid in years
        hazard_rate: constant hazard rate (lambda)
        recovery: recovery rate R
        risk_free_rate: constant risk-free rate r

    Returns:
        CVA as dollar amount
    """
    lgd = 1.0 - recovery
    cva = 0.0
    for i in range(1, len(times)):
        dt = times[i] - times[i - 1]
        pd_marginal = np.exp(-hazard_rate * times[i - 1]) - np.exp(-hazard_rate * times[i])
        discount = np.exp(-risk_free_rate * times[i])
        cva += lgd * ee[i] * pd_marginal * discount
    return cva


def calculate_fva(
    ee: np.ndarray,
    ne: np.ndarray,
    times: np.ndarray,
    funding_spread: float,
    risk_free_rate: float
) -> float:
    """
    FVA = FCA - FBA:  funding cost on positive MtM minus funding benefit on negative MtM.
    ne: negative exposure profile (ENE).
    """
    fva = 0.0
    for i in range(1, len(times)):
        dt = times[i] - times[i - 1]
        discount = np.exp(-risk_free_rate * times[i])
        fca = funding_spread * ee[i] * discount * dt
        fba = funding_spread * ne[i] * discount * dt   # benefit
        fva += fca - fba
    return fva


# ---- Example ----
times, ee, pfe = simulate_exposure_profile(
    S0=100, r=0.03, sigma=0.20, T=5.0, n_steps=60, n_paths=5000
)

cva = calculate_cva(ee, times, hazard_rate=0.02, recovery=0.40, risk_free_rate=0.03)
print(f"CVA:  ${cva:,.2f}  (on notional ~100)")
print(f"Peak EE:  {ee.max():.2f}  at t={times[ee.argmax()]:.1f}y")
print(f"PFE 95%:  {pfe.max():.2f}")
```

## Exposure Profile Visualization

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "0Y",  "ee": 0,  "pfe": 0},
    {"time": "1Y",  "ee": 8,  "pfe": 22},
    {"time": "2Y",  "ee": 14, "pfe": 38},
    {"time": "3Y",  "ee": 17, "pfe": 48},
    {"time": "4Y",  "ee": 13, "pfe": 38},
    {"time": "5Y",  "ee": 0,  "pfe": 0}
  ],
  "lines": [
    {"dataKey": "ee",  "stroke": "#3b82f6", "name": "Expected Exposure (EE)"},
    {"dataKey": "pfe", "stroke": "#ef4444", "name": "PFE 95%"}
  ]
}
```

## XVA Component Summary

| Component | Risk Source | Formula Kernel | Sign |
| :--- | :--- | :--- | :---: |
| **CVA** | Counterparty default | $(1-R) \cdot \text{EE} \cdot \text{PD}$ | Decreases price |
| **DVA** | Own default | $(1-R^{own}) \cdot \text{ENE} \cdot \text{PD}^{own}$ | Increases price |
| **FVA** | Funding spread | $s^F \cdot \text{EE}$ (FCA) $- s^F \cdot \text{ENE}$ (FBA) | Typically negative |
| **MVA** | IM funding cost | $s^F \cdot \text{E[IM]}$ | Decreases price |
| **KVA** | Regulatory capital | $h \cdot \text{E[RC]}$ | Decreases price |

## Limitations and Extensions

- **Computational cost**: Full Monte Carlo CVA for large portfolios requires millions of paths × repricing calls. [[inference-serving|GPU]] acceleration and AAD are production requirements.
- **Model dependency**: CVA depends on correlated credit and market risk models; WWR amplifies sensitivity to correlation assumptions.
- **FRTB-CVA**: Basel IV replaces the current Basel III CVA charge with a Standardised Approach (SA-CVA) or Basic Approach (BA-CVA), significantly increasing capital requirements for unhedged CVA.
- **Dynamic hedging**: CVA desks hedge with CDS (credit delta), interest rate swaps (rate delta), and swaptions (vega); residual WWR and jump-to-default risk are difficult to hedge.

## Practical Applications

1. **Trade pricing**: XVA desks charge the all-in XVA to the trading desk as an upfront fee, ensuring P&L neutrality at inception.
2. **Portfolio compression**: Multilateral netting via TriOptima/Quantile reduces notional, CVA, and MVA by cancelling offsetting trades across counterparties.
3. **CSA negotiations**: Optimal CSA terms (threshold, MTA, currency) are valued using FVA analytics to find the cheapest-to-deliver collateral structure.
4. **Capital optimization**: KVA analytics guide netting agreement restructuring and clearing decisions to minimize SA-CCR exposure at default.
5. **Stress testing**: Wrong-way risk scenarios stress CVA under joint market + credit shocks for CCAR/EBA regulatory submissions.

## Related Topics
- [[swaps]]
- [[cs01]]
- [[copula-models]]
- [[value-at-risk]]
- [[monte-carlo-method]]

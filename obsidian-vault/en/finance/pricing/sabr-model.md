---
slug: "/finance/sabr-model"
title: "SABR Model"
category: "Pricing Models"
order: 9
lang: "en"
---
# SABR Model

The **SABR model** (Stochastic Alpha, Beta, Rho) is a stochastic volatility model introduced by Hagan, Kumar, Lesniewski, and Woodward in 2002. It is the industry standard for quoting and interpolating the implied volatility smile in interest rate and FX options markets. Its primary advantage is an analytic approximation formula that maps model parameters directly to Black-Scholes implied volatilities, enabling extremely fast calibration and hedging.

## Prerequisites

[[black-scholes]], [[heston-model]]

## Background

Before SABR, practitioners used flat (Black-76) volatility for swaptions and caps, which failed to capture the observed volatility smile. Local volatility models (Dupire) reproduced the smile but produced poor smile dynamics — as the forward moved, the smile "stuck" to the strike rather than moving with the forward (the so-called "wrong smile dynamics" problem). SABR resolves this by making volatility itself stochastic, producing realistic forward-smile dynamics that match market behavior.

## Mathematical Framework

### Stochastic Differential Equations

The SABR model evolves the forward price $F_t$ (or rate) and its instantaneous lognormal volatility $\alpha_t$ under the forward measure:

$$
dF_t = \alpha_t F_t^\beta \, dW_t^1
$$
$$
d\alpha_t = \nu \alpha_t \, dW_t^2
$$
$$
d\langle W^1, W^2 \rangle_t = \rho \, dt
$$

with initial conditions $F_0 = f$ (current forward), $\alpha_0 = \alpha$.

### Parameters

| Parameter | Symbol | Role | Typical Range |
| :--- | :---: | :--- | :--- |
| Initial vol | $\alpha$ | ATM vol level | 0.01 – 0.80 |
| CEV exponent | $\beta$ | Distribution shape (0=normal, 1=lognormal) | 0.0 – 1.0 |
| Vol-of-vol | $\nu$ | Smile curvature (convexity) | 0.10 – 2.00 |
| Correlation | $\rho$ | Skew direction | $-$0.90 – $+$0.50 |

### Hagan's Asymptotic Implied Volatility Formula

The key result of Hagan et al. (2002) is a closed-form approximation for the Black-Scholes implied volatility $\sigma_{BS}(K, f)$ as a function of strike $K$ and forward $f$:

$$
\sigma_{BS}(K,f) \approx \frac{\alpha}{(fK)^{(1-\beta)/2}\left[1 + \frac{(1-\beta)^2}{24}\ln^2\!\frac{f}{K} + \frac{(1-\beta)^4}{1920}\ln^4\!\frac{f}{K}\right]} \cdot \frac{z}{\chi(z)} \cdot \left[1 + A \cdot T\right]
$$

where:
$$
z = \frac{\nu}{\alpha}(fK)^{(1-\beta)/2} \ln\frac{f}{K}
$$
$$
\chi(z) = \ln\left(\frac{\sqrt{1 - 2\rho z + z^2} + z - \rho}{1 - \rho}\right)
$$
$$
A = \frac{(1-\beta)^2 \alpha^2}{24(fK)^{1-\beta}} + \frac{\rho\beta\nu\alpha}{4(fK)^{(1-\beta)/2}} + \frac{2 - 3\rho^2}{24}\nu^2
$$

At the money ($K = f$), the formula simplifies to:
$$
\sigma_{ATM}(f) \approx \frac{\alpha}{f^{1-\beta}}\left[1 + \left(\frac{(1-\beta)^2\alpha^2}{24 f^{2-2\beta}} + \frac{\rho\beta\nu\alpha}{4 f^{1-\beta}} + \frac{2-3\rho^2}{24}\nu^2\right)T\right]
$$

### Normal SABR

For interest rate markets with near-zero or negative rates, the **Normal SABR** variant uses:
$$
dF_t = \alpha_t |F_t|^\beta \, dW_t^1, \quad \beta = 0
$$
which produces a normal (Bachelier) implied volatility and handles negative forwards naturally.

### Free Boundary SABR

The standard SABR allows $F_t$ to reach zero and become absorbed. The **Free Boundary SABR** (Antonov et al. 2015) replaces $F_t^\beta$ with $|F_t|^\beta$, enabling the forward to cross zero and producing a displaced-lognormal behavior appropriate for deeply negative rates.

## Key Properties

- **Smile dynamics**: As the forward moves, the SABR smile moves with it — unlike local vol models. This is crucial for delta hedging.
- **$\beta$ determines backbone**: $\beta = 1$ (lognormal backbone) means ATM vol is independent of the forward level; $\beta = 0$ (normal) means ATM vol in absolute terms is forward-independent.
- **$\rho$ controls skew**: Negative $\rho$ produces downward-sloping smile (more common in rates and equities); positive $\rho$ produces upward skew (common in commodities).
- **$\nu$ controls smile curvature**: Higher $\nu$ produces a more pronounced smile (higher wings relative to ATM).
- **Approximation breaks down**: The Hagan formula is an asymptotic expansion valid for small $T$, small $(K/f - 1)$, and small $\nu\sqrt{T}$. For long-dated options or deep OTM strikes, the approximation can violate no-arbitrage (negative densities).

## Python Implementation

```python
import numpy as np
from scipy.optimize import minimize
from scipy.stats import norm

def sabr_implied_vol(
    K: float, F: float, T: float,
    alpha: float, beta: float, rho: float, nu: float
) -> float:
    """
    Hagan et al. (2002) SABR implied Black-Scholes volatility.
    Handles ATM case separately to avoid division by zero.
    """
    if T <= 0:
        return alpha / (F ** (1 - beta))

    if abs(F - K) < 1e-8 * F:
        # ATM formula
        atm_vol = (alpha / (F ** (1 - beta))) * (
            1 + (
                (1 - beta)**2 * alpha**2 / (24 * F**(2 - 2*beta))
                + rho * beta * nu * alpha / (4 * F**(1 - beta))
                + (2 - 3*rho**2) / 24 * nu**2
            ) * T
        )
        return atm_vol

    log_fk = np.log(F / K)
    fk_mid = (F * K) ** ((1 - beta) / 2)

    z = (nu / alpha) * fk_mid * log_fk
    chi = np.log((np.sqrt(1 - 2*rho*z + z**2) + z - rho) / (1 - rho))

    numerator = alpha
    denom_series = fk_mid * (
        1
        + (1 - beta)**2 / 24 * log_fk**2
        + (1 - beta)**4 / 1920 * log_fk**4
    )

    time_correction = 1 + (
        (1 - beta)**2 * alpha**2 / (24 * fk_mid**2)
        + rho * beta * nu * alpha / (4 * fk_mid)
        + (2 - 3*rho**2) / 24 * nu**2
    ) * T

    return (numerator / denom_series) * (z / chi) * time_correction


def calibrate_sabr(
    strikes: np.ndarray,
    market_vols: np.ndarray,
    F: float,
    T: float,
    beta: float = 0.5
) -> dict:
    """
    Calibrate alpha, rho, nu to market smile via least-squares.
    beta is typically fixed externally (e.g. from historical data).
    """
    def objective(params):
        alpha, rho, nu = params
        if alpha <= 0 or nu <= 0 or abs(rho) >= 1:
            return 1e10
        model_vols = np.array([
            sabr_implied_vol(K, F, T, alpha, beta, rho, nu) for K in strikes
        ])
        return np.sum((model_vols - market_vols)**2)

    x0 = [0.20, -0.30, 0.40]
    bounds = [(1e-4, 5.0), (-0.999, 0.999), (1e-4, 5.0)]
    result = minimize(objective, x0, method="L-BFGS-B", bounds=bounds)
    alpha_opt, rho_opt, nu_opt = result.x
    return {"alpha": alpha_opt, "beta": beta, "rho": rho_opt, "nu": nu_opt,
            "rmse": np.sqrt(result.fun / len(strikes))}


# ---- Example: Generate smile and calibrate ----
F, T = 0.05, 1.0   # 5% forward rate, 1-year expiry
true_params = {"alpha": 0.20, "beta": 0.5, "rho": -0.30, "nu": 0.40}

strikes = np.array([0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08])
market_vols = np.array([
    sabr_implied_vol(K, F, T, **true_params) for K in strikes
])

# Add small noise to simulate real market data
noisy_vols = market_vols + np.random.normal(0, 0.001, len(market_vols))

calibrated = calibrate_sabr(strikes, noisy_vols, F, T, beta=0.5)
print("Calibrated SABR parameters:")
for k, v in calibrated.items():
    print(f"  {k}: {v:.6f}")
```

## Volatility Smile Visualization

```chart
{
  "type": "line",
  "xAxis": "strike",
  "data": [
    {"strike": "2%",  "vol_rho_neg": 0.32, "vol_rho_zero": 0.25, "vol_rho_pos": 0.22},
    {"strike": "3%",  "vol_rho_neg": 0.27, "vol_rho_zero": 0.24, "vol_rho_pos": 0.23},
    {"strike": "4%",  "vol_rho_neg": 0.24, "vol_rho_zero": 0.23, "vol_rho_pos": 0.24},
    {"strike": "5%",  "vol_rho_neg": 0.22, "vol_rho_zero": 0.22, "vol_rho_pos": 0.25},
    {"strike": "6%",  "vol_rho_neg": 0.23, "vol_rho_zero": 0.23, "vol_rho_pos": 0.27},
    {"strike": "7%",  "vol_rho_neg": 0.25, "vol_rho_zero": 0.24, "vol_rho_pos": 0.30},
    {"strike": "8%",  "vol_rho_neg": 0.28, "vol_rho_zero": 0.26, "vol_rho_pos": 0.33}
  ],
  "lines": [
    {"dataKey": "vol_rho_neg",  "stroke": "#ef4444", "name": "ρ = −0.5 (skew)"},
    {"dataKey": "vol_rho_zero", "stroke": "#3b82f6", "name": "ρ = 0 (symmetric)"},
    {"dataKey": "vol_rho_pos",  "stroke": "#10b981", "name": "ρ = +0.5 (reverse skew)"}
  ]
}
```

## Limitations and Extensions

- **Arbitrage violations**: The Hagan formula can produce negative probability densities for long maturities or extreme strikes. **SABR-LV** (stochastic-local vol hybrid) or **density-projection** SABR fix this.
- **Negative rates**: Standard lognormal SABR breaks down below zero; Normal SABR ($\beta=0$) or Shifted SABR ($F \to F + \delta$) with displacement $\delta$ are standard fixes.
- **Calibration instability**: $\alpha$, $\rho$, $\nu$ are correlated in the calibration; $\beta$ is often fixed at 0.5 by convention and $\alpha$ absorbs ATM vol, leaving $\rho$, $\nu$ to calibrate the shape.
- **Stochastic Interest Rates (SABR-LMM)**: For path-dependent products, SABR is embedded in the Libor Market Model (Rebonato 2007), generating a full term structure of stochastic smiles.

## Practical Applications

1. **Swaption vol cube**: SABR parameters $(\alpha, \rho, \nu)$ are calibrated to each expiry/tenor pair, building a 3D vol surface for swaption pricing.
2. **Cap/floor stripping**: Caplet vols are extracted from cap market quotes by fitting SABR to each caplet's smile.
3. **CMS products**: Constant Maturity Swap rates require convexity adjustments that depend critically on the SABR smile shape.
4. **Model risk**: Comparing SABR vs. Heston or local vol prices provides a quantitative model risk assessment for exotic interest rate products.
5. **Real-time risk**: SABR's analytic formula enables sub-millisecond implied vol lookups for Greeks computation in live trading systems.

## Related Topics
- [[heston-model]]
- [[black-scholes]]
- [[oas]]
- [[swaps]]
- [[volatility-forecasting]]
- [[asymptotic-expansion-finance]] — perturbation methods behind the SABR implied-vol formula

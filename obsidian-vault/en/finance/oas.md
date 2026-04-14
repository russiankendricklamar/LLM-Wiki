---
title: "Option-Adjusted Spread (OAS)"
category: "Risk Management"
order: 21
lang: "en"
---
# Option-Adjusted Spread (OAS)

The **Option-Adjusted Spread (OAS)** is the yield spread relative to a benchmark yield curve (usually the risk-free curve) that is adjusted to account for the value of embedded options, such as call or put features.

OAS is a critical metric for fixed-income investors as it allows for the comparison of bonds with different optionality on an "apples-to-apples" basis by isolating the pure credit and liquidity risk premium.

## Background and Motivation

Fixed-income instruments frequently embed optionality: corporate bonds with call provisions, mortgage-backed securities (MBS) with prepayment options, convertible bonds, and structured products with embedded floors or caps. Comparing yields across these instruments without adjusting for the embedded option value conflates credit risk with optionality cost.

OAS was developed in the 1980s alongside interest rate tree models (Black-Derman-Toy, Ho-Lee, Hull-White) as practitioners needed a tractable measure for MBS valuation. The U.S. MBS market — over $12 trillion outstanding — relies on OAS as the primary relative value metric, making it one of the most widely used spreads in fixed income.

## Why Adjust for Options?

A standard Z-spread (Zero-volatility spread) measures the spread over the yield curve assuming fixed cash flows. However, embedded options make cash flows uncertain and dependent on future interest rate paths.

- **For Callable Bonds**: The issuer has the right to buy back the bond when rates fall. Investors demand a higher yield to compensate for this reinvestment risk. Thus, for callable bonds: **OAS < Z-Spread**.
- **For Putable Bonds**: The investor has the right to sell the bond back to the issuer when rates rise. This feature is valuable to the investor. Thus, for putable bonds: **OAS > Z-Spread**.
- **For MBS**: Homeowners prepay when rates fall (refinancing), shortening duration precisely when investors want it long. The OAS captures the net credit/liquidity compensation after stripping this negative convexity.

## Mathematical Framework

OAS is calculated using stochastic interest rate models (e.g., Hull-White or Black-Derman-Toy). The model generates $N$ interest rate paths $\{r_t^{(i)}\}$. The OAS is the constant spread $s$ that, when added to all short rates across all paths, makes the average present value equal to the market price:

$$
P_{\text{market}} = \frac{1}{N} \sum_{i=1}^{N} \sum_{k=1}^{T} \frac{CF_k^{(i)}}{\prod_{j=1}^{k} (1 + r_j^{(i)} + s) \cdot \Delta t}
$$

Where $CF_k^{(i)}$ is the cash flow on path $i$ at time $k$ (which may include prepayments, calls, or puts depending on the rate path).

### Spread Decomposition

For an MBS or callable bond:

$$
\text{Z-Spread} = \text{OAS} + \text{Option Cost}
$$

$$
\text{OAS} = \text{Z-Spread} - \underbrace{(Z\text{-Spread} - \text{OAS})}_{\text{Option Cost (bps)}}
$$

The option cost is positive for callable bonds (the issuer benefits, investor pays) and negative for putable bonds (investor benefits).

## Hull-White Model for Rate Path Generation

The Hull-White one-factor model drives rate paths for OAS computation:

$$
dr_t = [\theta(t) - \kappa r_t]\, dt + \sigma\, dW_t
$$

Where $\theta(t)$ is calibrated to fit the initial yield curve exactly, $\kappa$ is the mean reversion speed, and $\sigma$ is the rate volatility. This model produces analytically tractable bond prices and can be calibrated to cap/floor or swaption volatility surfaces.

## Python: OAS Calculation via Monte Carlo

```python
import numpy as np
from scipy.optimize import brentq


def hull_white_paths(r0, kappa, sigma, theta_func, T, n_steps, n_paths, seed=42):
    """
    Simulate short rate paths under Hull-White model.
    theta_func: callable returning theta(t) at each time step.
    Returns array of shape (n_steps+1, n_paths).
    """
    np.random.seed(seed)
    dt = T / n_steps
    rates = np.zeros((n_steps + 1, n_paths))
    rates[0] = r0

    for t in range(n_steps):
        z = np.random.standard_normal(n_paths)
        drift = (theta_func(t * dt) - kappa * rates[t]) * dt
        diffusion = sigma * np.sqrt(dt) * z
        rates[t + 1] = rates[t] + drift + diffusion

    return rates


def price_callable_bond_mc(rates, coupon, face, call_price, call_dates, dt):
    """
    Price a callable bond given simulated rate paths.
    rates: (n_steps+1, n_paths) array
    call_dates: list of step indices when bond can be called
    """
    n_steps, n_paths = rates.shape[0] - 1, rates.shape[1]
    call_set = set(call_dates)
    prices = np.zeros(n_paths)

    for path in range(n_paths):
        pv = 0.0
        discount = 1.0
        called = False

        for t in range(1, n_steps + 1):
            discount *= np.exp(-rates[t - 1, path] * dt)

            if t in call_set and not called:
                # Issuer calls if call price < continuation value
                # Simplified: call if rates dropped below threshold
                if rates[t, path] < rates[0, path] - 0.005:
                    pv += call_price * discount
                    called = True
                    break

            pv += coupon * discount

        if not called:
            pv += face * discount  # face at maturity

        prices[path] = pv

    return np.mean(prices)


def calculate_oas(market_price, rates, coupon, face, call_price, call_dates, dt):
    """
    Find OAS: spread s such that E[PV(cash flows, r+s)] = market_price.
    """
    def price_with_spread(s):
        shifted_rates = rates + s
        return price_callable_bond_mc(shifted_rates, coupon, face, call_price, call_dates, dt)

    try:
        oas = brentq(lambda s: price_with_spread(s) - market_price, -0.05, 0.20)
        return oas * 10000  # convert to bps
    except ValueError:
        return None


# Example: 5-year callable bond, annual coupon 5%, callable after year 2
T, n_steps, n_paths = 5.0, 60, 5000
dt = T / n_steps
r0, kappa, sigma = 0.04, 0.3, 0.01

rates = hull_white_paths(r0, kappa, sigma, lambda t: r0 * kappa, T, n_steps, n_paths)
call_dates = list(range(int(2 / dt), n_steps))  # callable from year 2

market_price = 98.5  # below par -> callable bond
oas_bps = calculate_oas(market_price, rates, coupon=5.0, face=100.0,
                        call_price=100.0, call_dates=call_dates, dt=dt)

if oas_bps is not None:
    print(f"Option-Adjusted Spread: {oas_bps:.1f} bps")
```

## OAS in Mortgage-Backed Securities (MBS)

OAS is the primary valuation tool for MBS because homeowners have the option to prepay their mortgages when rates drop (prepayment risk). OAS helps investors determine if the yield of an MBS sufficiently compensates them for credit risk after accounting for the volatility of prepayments.

Key MBS-specific refinements:
- **Prepayment model**: PSA, CPR, or empirical models (OAS is only as good as the prepayment model used).
- **Negative convexity**: When rates fall, MBS prices rise less than equivalent bullet bonds because prepayments accelerate, shortening duration.
- **OAS stability**: A good MBS trade maintains a stable OAS across rate scenarios; an OAS that widens in stress is a negative convexity signal.

## Spread Comparison

| Spread Type | Uses Yield Curve? | Accounts for Options? | Primary Use |
| :--- | :---: | :---: | :--- |
| **G-Spread** | No | No | Simple Corporate Bonds |
| **Z-Spread** | Yes | No | Bullet Bonds |
| **OAS** | Yes | Yes | MBS, Callable/Putable Bonds |
| **ASW** | Yes | No | Asset Swap Packages |

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---|:---|:---|
| $s$ | OAS | Option-adjusted spread in bps | $20 – 200$ bps |
| $\kappa$ | Mean reversion speed | Hull-White parameter | $0.05 – 0.5$ |
| $\sigma$ | Rate volatility | Hull-White diffusion coefficient | $0.5\% – 2\%$ |
| $N$ | Monte Carlo paths | Number of rate paths simulated | $5{,}000 – 50{,}000$ |

## Limitations and Extensions

- **Model dependency**: OAS depends on the interest rate model and its calibration. Different models (Hull-White vs. BDT vs. BGM) yield different OAS values for the same bond.
- **Volatility sensitivity**: OAS is sensitive to the volatility surface used. A bond with high OAS at low vol may have low OAS at high vol — always report the vol assumption alongside OAS.
- **Multi-factor models**: One-factor models cannot capture the full yield curve dynamics. Multi-factor models (e.g., two-factor Hull-White) provide more realistic rate path distributions for long-dated callable bonds.

## Related Topics
- [[dv01]]
- [[sabr-model]]
- [[monte-carlo-method]]
- [[longstaff-schwartz]]

---
slug: "convertible-bonds"
title: "Convertible Bonds"
category: "Pricing"
order: 155
lang: "en"
---
# Convertible Bonds

A **convertible bond** (CB) is a hybrid security that combines a corporate bond with an embedded equity call option: the holder may convert the bond into a predetermined number of shares of the issuer's stock. This dual nature — fixed income plus equity optionality — creates rich pricing dynamics that sit at the intersection of credit modelling, equity derivatives, and corporate finance.

## Key Terms

| Term | Definition |
|:-----|:-----------|
| **Par (Face Value)** | Nominal value of the bond, typically \$1000 |
| **Conversion Ratio** $CR$ | Number of shares received upon conversion |
| **Conversion Price** $CP$ | $CP = \text{Par} / CR$ — effective strike price |
| **Parity** | $\text{Parity} = S \cdot CR$ — equity value if converted now |
| **Premium** | $(\text{CB Price} - \text{Parity}) / \text{Parity}$ |

## Payoff Structure

At maturity $T$, the holder chooses the greater value:

$$
V_T = \max(\text{Par} + \text{Accrued Coupon},\; S_T \cdot CR)
$$

Before maturity, the convertible carries additional **time value** from the option to convert at any point, plus the coupon stream. The holder is effectively long a straight bond plus an American call on $CR$ shares struck at $\text{Par}$.

## Embedded Features

**Hard call protection**: the issuer cannot call the bond for a specified period (typically 2-5 years). After this period, the issuer may force redemption at par plus accrued, which effectively forces conversion when parity exceeds par.

**Soft call (conditional call)**: the issuer may call only if the stock trades above a trigger level (e.g., 130% of $CP$) for a specified number of days out of a rolling window.

**Put feature**: some convertibles grant the holder the right to put the bond back to the issuer at par on specified dates, creating a **puttable convertible** — an instrument with both early conversion and early redemption optionality.

## Pricing Approaches

### Binomial Tree with Credit Risk

The standard practitioner method. At each node of a binomial tree on $S$:

1. Compute the **continuation value** by backward induction, discounting at the credit-adjusted rate $r + h$ where $h$ is the hazard rate (credit spread).
2. Apply the **conversion condition**: if $S \cdot CR > V_{\text{hold}}$, the holder converts.
3. Apply the **call condition**: if the issuer can call and $V > \text{Call Price}$, the issuer forces redemption.
4. Apply the **put condition**: if the holder can put and $V < \text{Put Price}$, exercise the put.

The optimal exercise decision at each node is:

$$
V = \max\!\big(\underbrace{S \cdot CR}_{\text{convert}},\;\min\!\big(\underbrace{V_{\text{hold}}}_{\text{continue}},\;\underbrace{\text{Call Price}}_{\text{issuer calls}}\big),\;\underbrace{\text{Put Price}}_{\text{holder puts}}\big)
$$

### PDE Approach

The convertible satisfies a Black-Scholes-type PDE with credit-adjusted discounting:

$$
\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + (r - q)S\frac{\partial V}{\partial S} - (r + h)V + h\,R\,\text{Par} + c = 0
$$

where $q$ is the dividend yield, $h$ is the default intensity, $R$ is the recovery rate, and $c$ is the continuous coupon. Boundary conditions: $V \geq S \cdot CR$ (conversion floor) and $V \leq \text{Call Price}$ (call ceiling) when applicable. See [[partial-differential-equations]] for numerical methods.

### Reduced-Form Credit Model

Default is modelled as the first jump of a Poisson process with intensity $\lambda$. On default, the holder recovers $R \cdot \text{Par}$. The risk-neutral expectation:

$$
V_0 = \mathbb{E}^{\mathbb{Q}}\!\left[e^{-\int_0^{\tau}(r+\lambda)\,ds}\,\text{Payoff}(\tau)\right]
$$

where $\tau$ is the conversion/call/maturity time, whichever comes first.

## The Credit-Equity Correlation Problem

A fundamental modelling challenge: the stock price $S$ and the credit spread $h$ are correlated. When $S$ drops, credit risk rises and $h$ widens. This creates a feedback loop: lower $S$ reduces the option value but simultaneously increases the credit discount, further depressing $V$. Structural models (Merton-type) naturally capture this by linking default to $S$ breaching a barrier.

## Convertible Regimes

The convertible's behaviour depends on moneyness:

- **Equity-like** ($S \gg CP$): parity dominates, CB trades near $S \cdot CR$, delta $\approx CR$, credit spread irrelevant.
- **Balanced** ($S \approx CP$): maximum gamma and convexity; most interesting for arb.
- **Busted** ($S \ll CP$): conversion option is deep OTM; CB trades like a risky corporate bond, valued primarily on credit fundamentals.

## Greeks

| Greek | Sensitivity | Behaviour |
|:------|:-----------|:----------|
| **Delta** | $\partial V / \partial S$ | Ranges from $\approx 0$ (busted) to $CR$ (deep ITM) |
| **Gamma** | $\partial^2 V / \partial S^2$ | Peaks near $CP$; source of convexity |
| **Rho** | $\partial V / \partial r$ | Positive (higher $r$ reduces PV of coupons, increases option value) |
| **Credit Spread** | $\partial V / \partial h$ | Negative; wider spread reduces bond floor |
| **Vega** | $\partial V / \partial \sigma$ | Positive; higher vol increases option component |

## Dilution Effect

Upon conversion, the company issues $CR$ new shares per bond, diluting existing shareholders:

$$
S_{\text{diluted}} = \frac{n \cdot S + m \cdot CP}{n + m \cdot CR}
$$

where $n$ is shares outstanding before conversion and $m$ is the number of bonds converted. Dilution is typically modelled by adjusting the strike or the underlying in the tree.

## Convertible Arbitrage

The classic hedge fund strategy: **long the convertible, short $\Delta$ shares** of the underlying. The position profits from:
- **Gamma**: convexity means the CB outperforms the linear short in large moves.
- **Carry**: CB coupon income exceeds the short rebate cost.
- **Credit mispricing**: if the CB is cheap relative to the credit curve plus the equity option.

Risk: a credit blowup collapses the bond floor while the short stock position profits insufficiently.

## Python: Binomial Tree Pricing

```python
import numpy as np

def price_convertible(S0: float, par: float, CR: float, T: float,
                      r: float, sigma: float, h: float, R: float,
                      coupon: float, steps: int = 200) -> float:
    """Binomial tree pricing for a convertible bond with credit risk."""
    dt = T / steps
    u = np.exp(sigma * np.sqrt(dt))
    d = 1 / u
    p = (np.exp(r * dt) - d) / (u - d)
    disc = np.exp(-(r + h) * dt)

    # Terminal payoff
    S = S0 * u ** np.arange(steps, -1, -1) * d ** np.arange(0, steps + 1)
    V = np.maximum(par, S * CR)

    # Backward induction
    for i in range(steps - 1, -1, -1):
        S_node = S0 * u ** np.arange(i, -1, -1) * d ** np.arange(0, i + 1)
        hold = disc * (p * V[:i+1] + (1 - p) * V[1:i+2])
        hold += h * dt * R * par   # expected recovery on default
        hold += coupon * dt         # continuous coupon accrual
        convert = S_node * CR
        V = np.maximum(hold, convert)

    return V[0]

cb_price = price_convertible(
    S0=50, par=1000, CR=20, T=5, r=0.03,
    sigma=0.30, h=0.02, R=0.40, coupon=40
)
```

## Applications

1. **Corporate funding**: issuers pay a lower coupon than straight debt in exchange for granting the conversion option.
2. **Hedge fund strategies**: convertible arbitrage exploits the gamma, carry, and credit mispricing embedded in CBs.
3. **Credit-equity relative value**: CBs provide a natural link between credit and equity markets.
4. **Structured products**: mandatory convertibles, CoCo bonds (contingent convertibles) extend the framework to bank capital instruments.

## Related Topics
- [[black-scholes]]
- [[partial-differential-equations]]
- [[xva]]
- [[heston-model]]
- [[monte-carlo-method]]
- [[longstaff-schwartz]]

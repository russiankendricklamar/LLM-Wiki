---
slug: "/finance/blacks-model"
title: "Black's Model (1976)"
category: "Pricing Models"
order: 154
lang: "en"
---
# Black's Model (1976)

**Black's model**, published by Fischer Black in 1976, adapts the [[black-scholes]] framework to price options on **futures and forward contracts**. By replacing the spot price $S$ with the forward price $F$, the model eliminates the need to model dividends, storage costs, or convenience yields — all of which are already embedded in $F$. Black's model is the market standard for pricing interest rate caplets, swaptions, and commodity options.

## The Black Formula

For a European call on a forward/futures contract with strike $K$ and expiry $T$:

$$
C = e^{-rT}\bigl[F\,N(d_1) - K\,N(d_2)\bigr]
$$

$$
P = e^{-rT}\bigl[K\,N(-d_2) - F\,N(-d_1)\bigr]
$$

where:

$$
d_1 = \frac{\ln(F/K) + \frac{1}{2}\sigma^2 T}{\sigma\sqrt{T}}, \qquad d_2 = d_1 - \sigma\sqrt{T}
$$

Compare with [[black-scholes]]: the spot $S$ is replaced by $F$, and the drift term $(r + \sigma^2/2)$ reduces to $\sigma^2/2$ because the forward price is already a martingale under the $T$-forward measure.

## Derivation Under the Forward Measure

Under the $T$-forward measure $\mathbb{Q}^T$ (numeraire = zero-coupon bond $P(t,T)$), the forward price $F(t,T) = S_t / P(t,T)$ is a martingale (see [[change-of-numeraire]]):

$$
\frac{dF}{F} = \sigma\,dW_t^T
$$

No drift term — this is the key simplification. At expiry, $F(T,T) = S_T$, and the forward is lognormally distributed:

$$
\ln F_T \sim \mathcal{N}\!\left(\ln F_0 - \tfrac{1}{2}\sigma^2 T,\;\sigma^2 T\right)
$$

The call price under the forward measure is $P(0,T)\,\mathbb{E}^{\mathbb{Q}^T}[\max(F_T - K, 0)]$, which gives the Black formula directly.

## Black's Model for Caplets

An interest rate **caplet** pays $\delta\,\max(L(T_i, T_{i+1}) - K, 0)$ at $T_{i+1}$, where $L$ is the forward LIBOR/SOFR rate, $\delta$ is the day-count fraction, and $K$ is the cap strike. Under Black's model, the forward rate is assumed lognormal:

$$
\text{Caplet} = \delta\,P(0, T_{i+1})\bigl[F_L\,N(d_1) - K\,N(d_2)\bigr]
$$

$$
d_1 = \frac{\ln(F_L/K) + \frac{1}{2}\sigma_{\text{Black}}^2 T_i}{\sigma_{\text{Black}}\sqrt{T_i}}, \quad d_2 = d_1 - \sigma_{\text{Black}}\sqrt{T_i}
$$

A **cap** is a strip of caplets; its price is the sum of individual caplet prices. See [[caps-floors-swaptions]] for details.

## Black's Model for Swaptions

A **payer swaption** gives the right to enter a swap paying fixed rate $K$. Under Black's model, the forward swap rate $S_0$ is lognormal:

$$
\text{Swaption} = A(0)\bigl[S_0\,N(d_1) - K\,N(d_2)\bigr]
$$

where $A(0) = \sum_{i=1}^n \delta_i P(0, T_i)$ is the annuity factor (present value of a basis point stream), and $d_1, d_2$ use the swaption volatility $\sigma_{\text{swap}}$ and the option expiry $T_0$.

## Normal (Bachelier) Variant

When rates can be negative (post-2014 reality), the lognormal assumption fails. The **normal** (Bachelier) model assumes $F$ follows arithmetic Brownian motion:

$$
dF = \sigma_n\,dW_t^T
$$

The normal call price:

$$
C = e^{-rT}\bigl[(F - K)\,N(d) + \sigma_n\sqrt{T}\,\varphi(d)\bigr], \quad d = \frac{F - K}{\sigma_n\sqrt{T}}
$$

where $\varphi$ is the standard normal PDF. Normal vol $\sigma_n$ is quoted in basis points per annum. See [[bachelier-formula]] for the full treatment.

## Shifted Lognormal Model

A practical hybrid: apply Black's formula to a **shifted** forward $(F + s)$ with shifted strike $(K + s)$, where $s > 0$ ensures the argument stays positive:

$$
C = e^{-rT}\bigl[(F+s)\,N(d_1) - (K+s)\,N(d_2)\bigr]
$$

This accommodates mildly negative rates while preserving the lognormal machinery. The shift $s$ is a market convention (e.g., $s = 1\%$ or $3\%$).

## Implied Volatility Conventions

| Product | Standard Quote | Model |
|:--------|:---:|:---|
| Equity options | Lognormal (Black) | Percentage vol |
| IR caps/floors | Normal or Lognormal | bps/annum or % |
| Swaptions | Normal (post-2014) | bps/annum |
| Commodity options | Lognormal (Black) | Percentage vol |

Converting between Black vol $\sigma_{\text{LN}}$ and normal vol $\sigma_N$ at the money:

$$
\sigma_N \approx \sigma_{\text{LN}} \cdot F
$$

This approximation breaks down far from the money; exact conversion requires numerical inversion.

## Python Implementation

```python
import numpy as np
from scipy.stats import norm

def black76(F: float, K: float, T: float, r: float,
            sigma: float, option_type: str = 'call') -> float:
    """Black (1976) option price on a forward/futures contract."""
    d1 = (np.log(F / K) + 0.5 * sigma**2 * T) / (sigma * np.sqrt(T))
    d2 = d1 - sigma * np.sqrt(T)
    df = np.exp(-r * T)
    if option_type == 'call':
        return df * (F * norm.cdf(d1) - K * norm.cdf(d2))
    return df * (K * norm.cdf(-d2) - F * norm.cdf(-d1))

def bachelier(F: float, K: float, T: float, r: float,
              sigma_n: float, option_type: str = 'call') -> float:
    """Normal (Bachelier) model for options on forwards."""
    d = (F - K) / (sigma_n * np.sqrt(T))
    df = np.exp(-r * T)
    intrinsic = (F - K) if option_type == 'call' else (K - F)
    sign = 1 if option_type == 'call' else -1
    return df * (sign * (F - K) * norm.cdf(sign * d)
                 + sigma_n * np.sqrt(T) * norm.pdf(d))

# Caplet pricing example
F_L = 0.035        # 3.5% forward LIBOR
K_cap = 0.030      # 3.0% cap strike
T_fix = 1.0        # fixing in 1 year
delta = 0.25        # quarterly accrual
P_T = 0.96          # discount factor to payment date
sigma_black = 0.25  # 25% Black vol

d1 = (np.log(F_L / K_cap) + 0.5 * sigma_black**2 * T_fix) / (sigma_black * np.sqrt(T_fix))
d2 = d1 - sigma_black * np.sqrt(T_fix)
caplet = delta * P_T * (F_L * norm.cdf(d1) - K_cap * norm.cdf(d2))
```

## Applications

1. **Interest rate derivatives**: caplets, floorlets, and swaptions are universally priced with Black's model or its normal variant — see [[caps-floors-swaptions]], [[swaps]].
2. **Commodity options**: options on oil, gas, metals futures use Black 76 directly, avoiding cost-of-carry modelling.
3. **Energy markets**: European-style spark spreads and crack spreads priced via Black on the relevant forward.
4. **Volatility quoting**: Black implied vol is the lingua franca for IR and commodity option markets.
5. **Calibration input**: Black vols feed into more sophisticated models ([[heston-model]], [[sabr-model]], [[volatility-surface]]).

## Related Topics
- [[black-scholes]]
- [[change-of-numeraire]]
- [[caps-floors-swaptions]]
- [[bachelier-formula]]
- [[sabr-model]]
- [[volatility-surface]]

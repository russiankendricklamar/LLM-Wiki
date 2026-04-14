---
title: "Black-Scholes Model"
category: "Pricing Models"
order: 7
lang: "en"
---
# Black-Scholes Model

The **Black-Scholes model**, also known as the Black-Scholes-Merton model, is a mathematical model for the dynamics of a financial market containing derivative investment instruments. It remains the foundational framework for option pricing and the language through which traders communicate implied volatility.

## Overview & Background

Fischer Black and Myron Scholes published their celebrated formula in 1973, the same year the Chicago Board Options Exchange opened. Robert Merton, who extended the framework using continuous-time stochastic calculus, shared the 1997 Nobel Prize in Economics with Scholes (Black had died in 1995). The model was a breakthrough for three reasons: it provided the first no-arbitrage pricing formula for options, it introduced the concept of delta hedging as a mechanism for replicating derivative payoffs, and it connected derivative pricing to the heat equation from physics.

The model's assumptions — constant volatility, log-normal prices, continuous trading, no dividends, no transaction costs — are all violated in practice. Yet the Black-Scholes formula persists as the market convention for quoting option prices via **implied volatility**: traders quote not prices but the $\sigma$ that, when plugged into Black-Scholes, reproduces the observed market price.

## Mathematical Framework

### Geometric Brownian Motion

The model assumes the underlying asset price $S_t$ follows **Geometric Brownian Motion** under the real-world measure $\mathbb{P}$:

$$
dS_t = \mu S_t \, dt + \sigma S_t \, dW_t
$$

Under the risk-neutral measure $\mathbb{Q}$ (obtained by replacing $\mu$ with $r$ via Girsanov's theorem):

$$
dS_t = r S_t \, dt + \sigma S_t \, d\tilde{W}_t
$$

By Itô's lemma applied to $\ln S_t$:

$$
d(\ln S_t) = \left(r - \frac{\sigma^2}{2}\right)dt + \sigma \, d\tilde{W}_t
$$

so $\ln(S_T/S_t) \sim \mathcal{N}\left(\left(r - \frac{\sigma^2}{2}\right)(T-t),\; \sigma^2(T-t)\right)$.

### The Black-Scholes PDE

By constructing a delta-hedged portfolio $\Pi = V - \Delta S$ and invoking no-arbitrage, Black and Scholes derived:

$$
\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + rS \frac{\partial V}{\partial S} - rV = 0
$$

This is a parabolic PDE equivalent (via a change of variables) to the **heat equation** $\frac{\partial u}{\partial \tau} = \frac{\partial^2 u}{\partial x^2}$, which has known analytical solutions.

### Closed-Form Pricing Formulas

The European call and put prices are:

$$
C(S, t) = S \cdot N(d_1) - K e^{-r(T-t)} \cdot N(d_2)
$$

$$
P(S, t) = K e^{-r(T-t)} \cdot N(-d_2) - S \cdot N(-d_1)
$$

where:

$$
d_1 = \frac{\ln(S/K) + \left(r + \frac{\sigma^2}{2}\right)(T-t)}{\sigma\sqrt{T-t}}, \qquad d_2 = d_1 - \sigma\sqrt{T-t}
$$

and $N(\cdot)$ is the standard normal CDF. The term $N(d_2)$ is the risk-neutral probability that the option expires in-the-money; $N(d_1)$ is the delta of the call.

### The Greeks

The **Greeks** measure sensitivity of the option price to model parameters:

$$
\Delta = \frac{\partial C}{\partial S} = N(d_1), \qquad \Gamma = \frac{\partial^2 C}{\partial S^2} = \frac{N'(d_1)}{S\sigma\sqrt{T-t}}
$$

$$
\Theta = -\frac{\partial C}{\partial t} = -\frac{SN'(d_1)\sigma}{2\sqrt{T-t}} - rKe^{-r(T-t)}N(d_2)
$$

$$
\mathcal{V} = \frac{\partial C}{\partial \sigma} = S\sqrt{T-t} \cdot N'(d_1), \qquad \rho = \frac{\partial C}{\partial r} = K(T-t)e^{-r(T-t)}N(d_2)
$$

The **Gamma-Theta tradeoff** is central to options trading: long gamma earns from large moves, but pays theta (time decay) continuously.

**Put-Call Parity** (model-independent):

$$
C - P = S - K e^{-r(T-t)}
$$

## Key Properties & Assumptions

- **Log-normality**: Returns over any interval are normally distributed, preventing negative prices. Empirically, returns have fat tails and negative skew.
- **Constant volatility**: $\sigma$ is fixed. In reality, volatility smiles and term structures reflect that $\sigma$ varies with strike and expiry — motivating models like [[heston-model]] and [[sabr-model]].
- **Continuous hedging**: Perfect delta hedging requires continuous trading with no transaction costs. Discrete rebalancing introduces hedging error.
- **No dividends**: Merton's extension adds continuous dividends: replace $r$ with $r - q$ where $q$ is the continuous dividend yield.
- **European exercise**: The formula applies to European options. American options require numerical methods (binomial trees, finite differences, LSM Monte Carlo).

## Python Implementation

```python
import numpy as np
from scipy.stats import norm

def black_scholes(
    S: float, K: float, T: float, r: float, sigma: float,
    option_type: str = 'call', q: float = 0.0
) -> float:
    """
    Black-Scholes-Merton option price including continuous dividend yield q.
    """
    d1 = (np.log(S / K) + (r - q + 0.5 * sigma**2) * T) / (sigma * np.sqrt(T))
    d2 = d1 - sigma * np.sqrt(T)

    if option_type == 'call':
        return S * np.exp(-q * T) * norm.cdf(d1) - K * np.exp(-r * T) * norm.cdf(d2)
    elif option_type == 'put':
        return K * np.exp(-r * T) * norm.cdf(-d2) - S * np.exp(-q * T) * norm.cdf(-d1)
    else:
        raise ValueError("option_type must be 'call' or 'put'")

def bs_greeks(S: float, K: float, T: float, r: float, sigma: float, q: float = 0.0) -> dict:
    """Compute all first-order Greeks for a call option."""
    d1 = (np.log(S / K) + (r - q + 0.5 * sigma**2) * T) / (sigma * np.sqrt(T))
    d2 = d1 - sigma * np.sqrt(T)
    n_d1 = norm.pdf(d1)

    delta = np.exp(-q * T) * norm.cdf(d1)
    gamma = np.exp(-q * T) * n_d1 / (S * sigma * np.sqrt(T))
    vega  = S * np.exp(-q * T) * np.sqrt(T) * n_d1 / 100   # per 1 vol point
    theta = (-(S * np.exp(-q * T) * n_d1 * sigma / (2 * np.sqrt(T)))
             - r * K * np.exp(-r * T) * norm.cdf(d2)
             + q * S * np.exp(-q * T) * norm.cdf(d1)) / 365
    rho   = K * T * np.exp(-r * T) * norm.cdf(d2) / 100

    return {'delta': delta, 'gamma': gamma, 'vega': vega, 'theta': theta, 'rho': rho}

def implied_volatility(
    market_price: float, S: float, K: float, T: float, r: float,
    option_type: str = 'call', tol: float = 1e-6, max_iter: int = 200
) -> float:
    """
    Newton-Raphson implied volatility solver.
    """
    sigma = 0.2  # Initial guess
    for _ in range(max_iter):
        price = black_scholes(S, K, T, r, sigma, option_type)
        vega = bs_greeks(S, K, T, r, sigma)['vega'] * 100  # Un-scale
        diff = price - market_price
        if abs(diff) < tol:
            return sigma
        if abs(vega) < 1e-10:
            break
        sigma -= diff / vega
        sigma = max(sigma, 1e-6)
    return sigma

# Implied volatility surface generation
strikes = np.linspace(80, 120, 9)
maturities = [0.25, 0.5, 1.0]
S, r = 100.0, 0.05

for T in maturities:
    for K in strikes:
        price = black_scholes(S, K, T, r, 0.20)  # True vol = 20%
        iv = implied_volatility(price, S, K, T, r)
```

## Option Price vs Spot Price

```chart
{
  "type": "line",
  "xAxis": "spot",
  "data": [
    {"spot": "80", "call": 2.8, "put": 18.0},
    {"spot": "90", "call": 6.5, "put": 11.5},
    {"spot": "100", "call": 12.3, "put": 7.4},
    {"spot": "110", "call": 19.8, "put": 4.5},
    {"spot": "120", "call": 28.4, "put": 2.6}
  ],
  "lines": [
    {"dataKey": "call", "stroke": "#10b981", "name": "Call Price"},
    {"dataKey": "put", "stroke": "#ef4444", "name": "Put Price"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---:|:---|:---|
| $S$ | Spot Price | Current price of the underlying | Any positive |
| $K$ | Strike Price | Exercise price of the option | Any positive |
| $T$ | Time to Maturity | Years until expiry | 0.01 – 5.0 |
| $r$ | Risk-free Rate | Continuously compounded rate | 0% – 10% |
| $\sigma$ | Volatility | Annualized return standard deviation | 5% – 150% |
| $q$ | Dividend Yield | Continuous dividend yield | 0% – 10% |

## Limitations & Extensions

**Limitations:**
- **Volatility smile/skew**: Observed market implied volatilities vary across strikes and maturities, violating the constant-$\sigma$ assumption. The smile is most pronounced for equity indices (protective put demand creates negative skew) and FX options.
- **Jump risk**: Asset prices exhibit jumps (earnings releases, macro surprises) not captured by continuous GBM. Merton (1976) jump-diffusion extends Black-Scholes.
- **Stochastic volatility**: Volatility itself is random and mean-reverting. [[heston-model]] (CIR-driven variance) and [[sabr-model]] (forward-rate applications) are the dominant extensions.
- **Interest rate risk**: Using a constant $r$ ignores yield curve dynamics; this matters for long-dated options.

**Extensions:**
- **[[heston-model]]**: Stochastic volatility with mean reversion; produces implied vol smiles analytically.
- **[[sabr-model]]**: Stochastic-alpha-beta-rho model for interest rate swaptions and caps/floors.
- **Local volatility (Dupire, 1994)**: $\sigma(S, t)$ calibrated to fit the full implied volatility surface exactly.
- **[[monte-carlo-method]]**: Numerical pricing for path-dependent payoffs (barriers, Asians, lookbacks) that lack closed-form solutions.

## Practical Applications

1. **Vanilla Options Trading**: Traders use Black-Scholes to convert between price and implied volatility; the entire options market quotes in implied vol terms.
2. **Delta Hedging**: The delta $N(d_1)$ gives the hedge ratio; options desks continuously rebalance their underlying hedge as $S$ and $t$ evolve.
3. **Vol Surface Construction**: Implied volatilities across strikes and maturities are interpolated to build a consistent surface for exotics pricing.
4. **Risk Management**: The Greeks (Delta, Gamma, Vega, Theta) form the standard risk decomposition for options books; limits are set on each Greek independently.
5. **Convertible Bond Pricing**: The equity option embedded in a convertible bond is priced using Black-Scholes as a component of the full instrument valuation.

## Related Topics
- [[heston-model]]
- [[sabr-model]]
- [[monte-carlo-method]]
- [[brownian-motion]]
- [[geometric-brownian-motion]]

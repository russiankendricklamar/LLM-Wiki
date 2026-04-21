---
title: "Stochastic Volatility Inspired (SVI) Model"
category: "Pricing"
order: 10
lang: "en"
slug: "svi-model"
---

# Stochastic Volatility Inspired (SVI) Model

The **Stochastic Volatility Inspired (SVI)** parameterization, developed by Jim Gatheral in 2004, is the industry standard for interpolating and extrapolating the implied volatility surface. It provides a closed-form algebraic formula that fits market data exceptionally well while guaranteeing the absence of static arbitrage (like negative butterfly spreads).

## Why Parameterize the Surface?

In options trading, market quotes only provide implied volatility for discrete, liquid strikes ($K$) and expirations ($T$). To price exotic options or calculate continuous risk sensitivities (Greeks), traders need a smooth, continuous volatility surface $w(k, \tau) = \sigma_{imp}^2(k, \tau) \cdot \tau$, where $k = \ln(K/F)$ is the log-moneyness.

Standard polynomials (like cubic splines) are dangerous because they extrapolate poorly, often leading to negative variances or arbitrage violations deep out-of-the-money.

## The Raw SVI Formula

The total variance $w(k)$ for a fixed time to maturity slice is parameterized as a hyperbola:

$$w(k) = a + b \left( \rho (k - m) + \sqrt{(k - m)^2 + \sigma^2} \right)$$

Where the 5 parameters have clear geometric meanings:
- **$a$**: Overall level of variance (vertical shift).
- **$b$**: Slope of the wings (determines how fast variance grows at the extremes).
- **$\rho \in [-1, 1]$**: Skew or asymmetry. A negative $\rho$ makes the left wing steeper (the "equity smile").
- **$m$**: Translation of the smile minimum (horizontal shift).
- **$\sigma > 0$**: Smoothness of the vertex (how rounded the bottom of the smile is).

## Eliminating Arbitrage

A major breakthrough for SVI was the discovery of necessary and sufficient conditions to prevent **Butterfly Arbitrage** (the requirement that the implied probability density of the underlying asset must be everywhere positive). 

To ensure the density is positive, the function $g(k) = \left( 1 - \frac{k w'(k)}{2w(k)} \right)^2 - \frac{w'(k)^2}{4} \left( \frac{1}{w(k)} + \frac{1}{4} \right) + \frac{w''(k)}{2}$ must be $\geq 0$ for all $k$. By fitting SVI parameters with this constraint, banks can ensure their pricing engines never quote nonsensical prices.

## SSVI: Surface SVI

While raw SVI fits a single expiration slice, **Surface SVI (SSVI)** extends the model across time to guarantee the absence of **Calendar Arbitrage** (the variance must increase monotonically with time to expiration: $\partial_\tau w(k, \tau) \geq 0$).

SSVI defines the total variance slice as:
$$w(k, \theta_t) = \frac{\theta_t}{2} \left( 1 + \rho \phi(\theta_t) k + \sqrt{(\phi(\theta_t) k + \rho)^2 + (1 - \rho^2)} \right)$$
where $\theta_t$ is the at-the-money total variance, and $\phi(\theta_t)$ is a function controlling how the wings behave across time.

## Visualization: The Hyperbolic Smile

```chart
{
  "type": "line",
  "xAxis": "log_moneyness",
  "data": [
    {"log_moneyness": -0.5, "svi": 0.12, "spline": 0.25},
    {"log_moneyness": -0.2, "svi": 0.06, "spline": 0.05},
    {"log_moneyness": 0.0,  "svi": 0.04, "spline": 0.04},
    {"log_moneyness": 0.2,  "svi": 0.05, "spline": 0.05},
    {"log_moneyness": 0.5,  "svi": 0.08, "spline": -0.02}
  ],
  "lines": [
    {"dataKey": "svi", "stroke": "#10b981", "name": "SVI Model (Safe Asymptotics)"},
    {"dataKey": "spline", "stroke": "#ef4444", "name": "Polynomial Spline (Arbitrage Danger)"}
  ]
}
```
*Notice how the polynomial spline (red) drops below zero deep out-of-the-money, which implies a negative probability density (an arbitrage). SVI (green) approaches linear asymptotes, ensuring the volatility stays positive and well-behaved.*

## Related Topics

[[black-scholes]] — the foundation of implied volatility  
[[heston-model]] — the stochastic model that inspired the SVI shape  
[[variance-gamma]] — alternative models for smiles with jumps
---

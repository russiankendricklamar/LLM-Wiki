---
title: "Black-Scholes Model"
category: "Pricing Models"
order: 1
lang: "en"
---
# Black-Scholes Model

The **Black-Scholes model**, also known as the Black-Scholes-Merton model, is a mathematical model for the dynamics of a financial market containing derivative investment instruments.

## The Black-Scholes Equation

The Black-Scholes equation is a parabolic partial differential equation, which describes the price of the option over time. The equation is:

$$
\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + rS \frac{\partial V}{\partial S} - rV = 0
$$

Where:
- $V$ is the price of the option as a function of stock price $S$ and time $t$
- $r$ is the risk-free interest rate
- $\sigma$ is the volatility of the stock's returns

## The Black-Scholes Formula

The formula for a European call option $C$ and put option $P$ are:

$$
\begin{aligned}
C(S, t) &= N(d_1)S - N(d_2)Ke^{-r(T-t)} \\
P(S, t) &= N(-d_2)Ke^{-r(T-t)} - N(-d_1)S
\end{aligned}
$$

Where $d_1$ and $d_2$ are given by:

$$
\begin{aligned}
d_1 &= \frac{\ln(S/K) + (r + \sigma^2/2)(T-t)}{\sigma\sqrt{T-t}} \\
d_2 &= d_1 - \sigma\sqrt{T-t}
\end{aligned}
$$

And $N(x)$ is the cumulative distribution function of the standard normal distribution.

## Python Implementation

Here is a Python implementation to calculate the European call and put option prices using the Black-Scholes formula:

```python
import numpy as np
from scipy.stats import norm

def black_scholes(S, K, T, r, sigma, option_type='call'):
    """
    Calculate the Black-Scholes option price.
    """
    d1 = (np.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * np.sqrt(T))
    d2 = d1 - sigma * np.sqrt(T)
    
    if option_type == 'call':
        price = S * norm.cdf(d1) - K * np.exp(-r * T) * norm.cdf(d2)
    elif option_type == 'put':
        price = K * np.exp(-r * T) * norm.cdf(-d2) - S * norm.cdf(-d1)
    else:
        raise ValueError("option_type must be 'call' or 'put'")
        
    return price
```

## Option Price Visualization

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

## Model Parameters

The table below summarizes the key parameters used in the Black-Scholes model:

| Parameter | Symbol | Description |
| :--- | :---: | :--- |
| Spot Price | $S$ | Current price of the underlying asset |
| Strike Price | $K$ | Price at which the option can be exercised |
| Time to Maturity | $T$ | Time remaining until the option expires |
| Risk-free Rate | $r$ | Constant interest rate |
| Volatility | $\sigma$ | Measure of the asset's price variation |


## Related Topics
- [[heston-model]]
- [[sabr-model]]
- [[monte-carlo-method]]

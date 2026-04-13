---
title: "SABR Model"
category: "Quantitative Finance"
order: 4
lang: "en"
---
# SABR Model

The **SABR model** (Stochastic Alpha, Beta, Rho) is a stochastic volatility model widely used in interest rate derivatives markets. It was developed by Patrick Hagan and others to capture the "volatility smile" or "skew" observed in market prices.

## Dynamics (SDEs)

The model describes the evolution of a forward price $F_t$ and its instantaneous volatility $\alpha_t$:

$$
\begin{aligned}
dF_t &= \alpha_t F_t^\beta dW_t^1 \\
d\alpha_t &= \nu \alpha_t dW_t^2
\end{aligned}
$$

Where the two Wiener processes are correlated: $d[W^1, W^2]_t = \rho dt$.

### Parameters:
- $\alpha$: Initial volatility level (the "Alpha").
- $\beta$: Exponent for the forward price (the "Beta"). $\beta=1$ corresponds to a log-normal model, $\beta=0$ to a normal model.
- $\rho$: Correlation between price and volatility (the "Rho"). Affects the skew.
- $\nu$: Volatility of volatility (the "Vol-of-vol"). Affects the convexity (smile).

## Hagan's Implied Volatility Formula

One of the main advantages of the SABR model is the existence of an accurate asymptotic formula for the Black-Scholes implied volatility $\sigma_{impl}$:

$$
\sigma_{impl}(K, F) \approx \frac{\alpha}{(FK)^{(1-\beta)/2} [1 + \frac{(1-\beta)^2}{24} \ln^2(F/K) + \dots]} \cdot \frac{z}{x(z)} \cdot [1 + (\dots)T]
$$

(Note: The full formula is complex but allows for extremely fast calibration to market smiles.)

## Python: Implied Volatility Calculation

```python
import numpy as np

def sabr_vol(K, F, T, alpha, beta, rho, nu):
    if F == K: # At-the-money
        return alpha / (F**(1-beta)) * (1 + ((1-beta)**2/24 * alpha**2/(F**(2-2*beta)) + 0.25*rho*beta*nu*alpha/(F**(1-beta)) + (2-3*rho**2)/24 * nu**2)*T)
    
    # Simplified version for visualization
    logFK = np.log(F/K)
    z = (nu/alpha) * (F*K)**((1-beta)/2) * logFK
    xz = np.log((np.sqrt(1 - 2*rho*z + z**2) + z - rho) / (1 - rho))
    
    vol = (alpha / ((F*K)**((1-beta)/2) * (1 + (1-beta)**2/24 * logFK**2 + (1-beta)**4/1920 * logFK**4))) * (z/xz)
    return vol
```

## Volatility Smile Visualization

```chart
{
  "type": "line",
  "xAxis": "strike",
  "data": [
    {"strike": "80", "vol": 0.28},
    {"strike": "90", "vol": 0.24},
    {"strike": "100", "vol": 0.22},
    {"strike": "110", "vol": 0.23},
    {"strike": "120", "vol": 0.26}
  ],
  "lines": [
    {"dataKey": "vol", "stroke": "#8b5cf6", "name": "Implied Volatility (Smile)"}
  ]
}
```

## Parameter Sensitivities

- **Increase $\rho$**: Increases the skew (tilts the smile).
- **Increase $\nu$**: Increases the "smile" effect (curvature).
- **Change $\beta$**: Controls the backbone of the model (how the smile moves with the forward price).

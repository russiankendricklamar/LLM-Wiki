---
title: "Ornstein-Uhlenbeck Process"
category: "Stochastic Processes"
order: 151
lang: "en"
slug: "ornstein-uhlenbeck-process"
---
# Ornstein-Uhlenbeck Process

The **Ornstein-Uhlenbeck (OU) process** is a stochastic process that describes the velocity of a massive Brownian particle under the influence of friction. In finance, it is the standard model for **mean-reverting** behavior.

## Mean-Reverting Property

Unlike a Standard Brownian Motion, which has no tendency to return to a central value, the OU process is pulled back towards a long-term mean. The further the process drifts from the mean, the stronger the pull.

## Stochastic Differential Equation (SDE)

The OU process $X_t$ is defined by the following SDE:

$$
dX_t = \theta(\mu - X_t)dt + \sigma dW_t
$$

Where:
- $\theta > 0$ is the **rate of mean reversion** (speed of adjustment).
- $\mu$ is the **long-term mean** (level to which the process reverts).
- $\sigma > 0$ is the **volatility** (degree of randomness).
- $W_t$ is a standard Wiener process.

## Analytical Solution

By using the integrating factor $e^{\theta t}$, the SDE can be solved explicitly:

$$
X_t = X_0 e^{-\theta t} + \mu(1 - e^{-\theta t}) + \sigma \int_0^t e^{-\theta(t-s)} dW_s
$$

As $t \to \infty$, the expectation $E[X_t] \to \mu$ and the variance $Var(X_t) \to \frac{\sigma^2}{2\theta}$, showing that the process is stationary in the long run.

## Transition Density

The transition density $p(X_t | X_0)$ is Gaussian:

$$
X_t \sim \mathcal{N}\left( X_0 e^{-\theta t} + \mu(1 - e^{-\theta t}), \frac{\sigma^2}{2\theta}(1 - e^{-2\theta t}) \right)
$$

## Applications in Finance

### Pairs Trading
In pairs trading, the spread between two cointegrated assets is often modeled as an OU process. A high **Z-score** (normalized distance from the mean $\mu$) indicates a trading opportunity, betting that the spread will revert to its mean.

### Interest Rate Modeling
The **Vasicek model**, used for modeling interest rates, is mathematically identical to the OU process. It assumes that interest rates cannot drift off to infinity but are tied to a long-term economic equilibrium.

## Python Implementation: Euler-Maruyama Simulation

```python
import numpy as np

def simulate_ou(X0, mu, theta, sigma, T, dt):
    n_steps = int(T / dt)
    t = np.linspace(0, T, n_steps)
    X = np.zeros(n_steps)
    X[0] = X0
    
    for i in range(1, n_steps):
        # Euler-Maruyama step
        drift = theta * (mu - X[i-1]) * dt
        diffusion = sigma * np.sqrt(dt) * np.random.normal()
        X[i] = X[i-1] + drift + diffusion
        
    return t, X

# Parameters
X0, mu, theta, sigma = 0, 0.5, 0.7, 0.2
T, dt = 10, 0.01

t, X = simulate_ou(X0, mu, theta, sigma, T, dt)
print(f"Final Value: {X[-1]:.4f}")
```

## Related Topics
- [[levy-processes]]
- [[pairs-trading-strategy]]
- [[monte-carlo-method]]
- [[value-at-risk]]
- [[heston-model]]
- [[black-scholes]]

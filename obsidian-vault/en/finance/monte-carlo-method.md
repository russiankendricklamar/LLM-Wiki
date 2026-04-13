---
title: "Monte Carlo Method"
category: "Algorithms and ML"
order: 13
lang: "en"
---
# Monte Carlo Method

The **Monte Carlo Method** is a computational technique that uses random sampling to obtain numerical results. In quantitative finance, it is a cornerstone for pricing complex derivatives and calculating risk metrics (like VaR and ES) when analytical solutions are unavailable.

## Core Concept

Based on the Law of Large Numbers, the average of a large number of independent simulations converges to the expected value. In asset pricing, the value today is the discounted expected value of future payoffs:

$$
V_0 = e^{-rT} E[f(S_T)] \approx e^{-rT} \frac{1}{N} \sum_{i=1}^{N} f(S_T^{(i)})
$$

Where:
- $S_T^{(i)}$ is the simulated asset price at maturity $T$ in the $i$-th scenario.
- $f(S_T)$ is the payoff function of the option.
- $r$ is the risk-free rate.

## Steps in Option Pricing

1.  **Generate Random Paths**: Simulate the price evolution of the underlying asset (e.g., using Geometric Brownian Motion).
2.  **Calculate Payoffs**: Determine the option's value for each simulated path at maturity.
3.  **Average**: Find the arithmetic mean of all simulated payoffs.
4.  **Discount**: Bring the average value back to the present using the risk-free rate.

## Accuracy and Convergence

The error in a Monte Carlo simulation typically decreases at a rate of $O(1/\sqrt{N})$. To reduce the error by a factor of 10, you need 100 times more simulations. Variance reduction techniques (e.g., Antithetic Variates, Control Variates) are often used to speed up convergence.

## Python: Pricing a European Call Option

```python
import numpy as np

def monte_carlo_call(S, K, T, r, sigma, iterations=100000):
    # Generate terminal prices using GBM
    z = np.random.standard_normal(iterations)
    ST = S * np.exp((r - 0.5 * sigma**2) * T + sigma * np.sqrt(T) * z)
    
    # Calculate payoffs
    payoffs = np.maximum(ST - K, 0)
    
    # Average and discount
    price = np.exp(-r * T) * np.mean(payoffs)
    return price

S, K, T, r, sigma = 100, 105, 1, 0.05, 0.2
price = monte_carlo_call(S, K, T, r, sigma)
print(f"Option Price (Monte Carlo): ${price:.2f}")
```

## Convergence Visualization

```chart
{
  "type": "line",
  "xAxis": "simulations",
  "data": [
    {"simulations": "100", "price": 8.42},
    {"simulations": "500", "price": 7.95},
    {"simulations": "1000", "price": 8.12},
    {"simulations": "5000", "price": 8.05},
    {"simulations": "10000", "price": 8.02},
    {"simulations": "50000", "price": 8.02}
  ],
  "lines": [
    {"dataKey": "price", "stroke": "#3b82f6", "name": "Price Estimate"}
  ]
}
```

## Pros and Cons

| Feature | Pros | Cons |
| :--- | :--- | :--- |
| **Flexibility** | Handles any complex payoff function | High computational cost |
| **Multidimensionality** | Efficient for path-dependent or multi-asset options | Slow convergence rate ($1/\sqrt{N}$) |
| **Simplicity** | Easy to parallelize across multiple CPUs/GPUs | Hard to value American-style (early exercise) options |


## Related Topics
- [[longstaff-schwartz]]
- [[value-at-risk]]
- [[black-scholes]]

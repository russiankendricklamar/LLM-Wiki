---
title: "Longstaff-Schwartz Method (LSM)"
category: "Quantitative Finance"
order: 17
lang: "en"
---
# Longstaff-Schwartz Method (LSM)

The **Longstaff-Schwartz Method** (also known as Least Squares Monte Carlo or LSM) is a powerful algorithm used to price American options and other path-dependent financial derivatives with early exercise features using Monte Carlo simulation.

## The Challenge of American Options

Standard Monte Carlo simulation is inherently "forward-looking," making it easy to price European options by simulating asset prices until maturity. However, an American option can be exercised at any time $t$. At each step, the holder must decide:
1.  **Exercise Now**: Receive the immediate intrinsic value.
2.  **Continue Holding**: Wait for a potentially higher future payoff (Continuation Value).

The difficulty lies in the fact that the continuation value is an expectation of future payoffs, which is not directly available in a forward-running simulation.

## The LSM Intuition

Longstaff and Schwartz (2001) solved this by combining **backward induction** with **least squares regression**:
- First, we simulate $N$ price paths forward to maturity.
- Then, we work backward from maturity to the start.
- At each step, we use a linear regression (typically using basis functions like Laguerre polynomials or simple powers of $S$) to estimate the continuation value for paths that are "In-the-Money" (ITM).

$$
E[V_{t+1} | S_t] \approx \sum_{j=0}^k \beta_j \cdot \phi_j(S_t)
$$

Where $\phi_j$ are the basis functions.

## LSM Algorithm Steps

1.  **Forward Pass**: Simulate $N$ asset price paths.
2.  **Terminal Value**: At maturity $T$, the option value is simply its immediate payoff.
3.  **Backward Induction**: For each time step $t = T-1, \dots, 1$:
    - Identify paths where the option is ITM.
    - Regress the discounted future values from step $t+1$ onto the current asset price $S_t$.
    - Compare the immediate exercise value with the fitted continuation value.
    - If exercise value $>$ continuation value, update the path's payoff to the exercise value and mark it as exercised.
4.  **Final Pricing**: Discount all final payoffs back to time $t=0$ and average them.

## Python: Pricing an American Put Option

```python
import numpy as np

def lsm_american_put(S0, K, T, r, sigma, steps, paths):
    dt = T / steps
    df = np.exp(-r * dt)
    
    # 1. Forward simulation
    S = np.zeros((steps + 1, paths))
    S[0] = S0
    for t in range(1, steps + 1):
        z = np.random.standard_normal(paths)
        S[t] = S[t-1] * np.exp((r - 0.5 * sigma**2) * dt + sigma * np.sqrt(dt) * z)
    
    # 2. Terminal payoffs
    payoffs = np.maximum(K - S[-1], 0)
    
    # 3. Backward induction
    for t in range(steps - 1, 0, -1):
        itm = S[t] < K
        if not np.any(itm): continue
        
        # Regression on ITM paths
        X = S[t, itm]
        Y = payoffs[itm] * df
        coeffs = np.polyfit(X, Y, 2)
        continuation_value = np.polyval(coeffs, X)
        
        # Exercise decision
        exercise_value = K - X
        payoffs[itm] = np.where(exercise_value > continuation_value, 
                                exercise_value, payoffs[itm] * df)
        payoffs[~itm] *= df
        
    return np.mean(payoffs * df)
```

## Visualization: Exercise vs. Continuation

```chart
{
  "type": "scatter",
  "xAxis": "spot",
  "data": [
    {"spot": 90, "exercise": 10, "continuation": 8.5},
    {"spot": 95, "exercise": 5, "continuation": 5.2},
    {"spot": 100, "exercise": 0, "continuation": 2.5},
    {"spot": 105, "exercise": 0, "continuation": 1.1}
  ],
  "lines": [
    {"dataKey": "exercise", "stroke": "#ef4444", "name": "Exercise Now"},
    {"dataKey": "continuation", "stroke": "#3b82f6", "name": "Continue Holding"}
  ]
}
```

## Advantages

- **Dimensionality**: Unlike Finite Difference methods, LSM scales well to multi-asset options (e.g., American basket options).
- **Flexibility**: Can be applied to almost any underlying stochastic process (not just Black-Scholes).
- **Simplicity**: Relatively easy to implement compared to complex PDE solvers for early exercise boundaries.

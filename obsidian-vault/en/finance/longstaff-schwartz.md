---
title: "Longstaff-Schwartz Method (LSM)"
category: "Algorithms and ML"
order: 17
lang: "en"
---
# Longstaff-Schwartz Method (LSM)

The **Longstaff-Schwartz Method** (also known as Least Squares Monte Carlo or LSM) is a powerful algorithm used to price American options and other path-dependent financial derivatives with early exercise features using Monte Carlo simulation.

## Background

Pricing American options analytically is intractable for most underlying processes beyond the simple Black-Scholes case. The early exercise boundary must satisfy a free-boundary PDE, and closed-form solutions exist only for perpetual options. Finite difference methods and binomial trees solve the PDE numerically but scale poorly with the number of state variables.

Longstaff and Schwartz (2001) in their paper "Valuing American Options by Simulation: A Simple Least-Squares Approach" introduced an elegant solution combining backward induction with regression, making Monte Carlo applicable to early exercise problems. The method is now standard in derivatives desks for pricing Bermudan swaptions, callable bonds, and exotic equity structures.

## The Challenge of American Options

Standard Monte Carlo simulation is inherently "forward-looking," making it easy to price European options by simulating asset prices until maturity. However, an American option can be exercised at any time $t$. At each step, the holder must decide:
1. **Exercise Now**: Receive the immediate intrinsic value.
2. **Continue Holding**: Wait for a potentially higher future payoff (Continuation Value).

The difficulty lies in the fact that the continuation value is an expectation of future payoffs, which is not directly available in a forward-running simulation.

## Mathematical Framework

At each exercise date $t_k$, the optimal exercise rule compares:
- **Intrinsic value**: $g(S_{t_k}) = \max(K - S_{t_k}, 0)$ for a put
- **Continuation value**: $C(t_k, S_{t_k}) = e^{-r\Delta t} \mathbb{E}[V_{t_{k+1}} | \mathcal{F}_{t_k}]$

The LSM approximates the continuation value as a linear combination of basis functions:

$$
C(t_k, S_{t_k}) \approx \sum_{j=0}^{M} \beta_j^k \cdot \phi_j(S_{t_k})
$$

Where $\phi_j$ are basis functions (e.g., Laguerre polynomials, monomials $\{1, S, S^2\}$) and $\beta_j^k$ are estimated by OLS regression of the discounted continuation values from step $k+1$ onto the current stock price.

The option value satisfies the dynamic programming recursion:

$$
V_{t_k} = \max\left( g(S_{t_k}),\; e^{-r\Delta t} \mathbb{E}[V_{t_{k+1}} | S_{t_k}] \right)
$$

## LSM Algorithm Steps

1. **Forward Pass**: Simulate $N$ asset price paths using GBM (or any process).
2. **Terminal Value**: At maturity $T$, the option value is simply its immediate payoff: $V_T = \max(K - S_T, 0)$.
3. **Backward Induction**: For each time step $t = T-1, \dots, 1$:
   - Identify paths where the option is ITM (intrinsic value > 0).
   - Regress the discounted continuation values $e^{-r\Delta t} V_{t+1}$ onto basis functions of $S_t$ for ITM paths only.
   - Compare the exercise value with the fitted continuation value.
   - If exercise value $>$ fitted continuation value, update the path's value to the exercise value.
4. **Final Pricing**: Average all path values discounted to $t=0$.

## Python: Pricing an American Put Option

```python
import numpy as np

def lsm_american_put(S0, K, T, r, sigma, steps, paths, seed=42):
    """
    Price an American put using Least Squares Monte Carlo.
    Returns (price, std_error).
    """
    np.random.seed(seed)
    dt = T / steps
    df = np.exp(-r * dt)

    # 1. Forward simulation using antithetic variates for variance reduction
    z = np.random.standard_normal((steps, paths // 2))
    z = np.concatenate([z, -z], axis=1)
    S = np.zeros((steps + 1, paths))
    S[0] = S0
    for t in range(1, steps + 1):
        S[t] = S[t-1] * np.exp((r - 0.5 * sigma**2) * dt + sigma * np.sqrt(dt) * z[t-1])

    # 2. Terminal payoffs
    payoffs = np.maximum(K - S[-1], 0)

    # 3. Backward induction
    for t in range(steps - 1, 0, -1):
        itm = S[t] < K
        if not np.any(itm):
            payoffs *= df
            continue

        X = S[t, itm]
        Y = payoffs[itm] * df

        # Laguerre polynomial basis functions: [1, L1(x), L2(x)]
        x_scaled = X / K
        A = np.column_stack([
            np.ones(len(X)),
            np.exp(-x_scaled / 2),
            np.exp(-x_scaled / 2) * (1 - x_scaled),
            np.exp(-x_scaled / 2) * (1 - 2 * x_scaled + 0.5 * x_scaled**2)
        ])
        coeffs, _, _, _ = np.linalg.lstsq(A, Y, rcond=None)
        continuation_value = A @ coeffs

        exercise_value = K - X
        exercise_now = exercise_value > continuation_value

        payoffs[itm] = np.where(exercise_now, exercise_value, payoffs[itm] * df)
        payoffs[~itm] *= df

    price = np.mean(payoffs * df)
    std_err = np.std(payoffs * df) / np.sqrt(paths)
    return price, std_err


# Example: ATM American put, 1-year maturity
price, se = lsm_american_put(
    S0=100, K=100, T=1.0, r=0.05, sigma=0.20,
    steps=50, paths=10000
)
print(f"American Put Price: ${price:.4f} ± {1.96 * se:.4f} (95% CI)")
```

## Multi-Asset Extension

For basket options or spread options on correlated underlyings, the state space is $\mathbf{S}_t = (S_t^1, \dots, S_t^d)$. Correlated paths are generated via Cholesky decomposition:

$$
\mathbf{S}_{t+1}^{(i)} = \mathbf{S}_t^{(i)} \odot \exp\left(\mu \Delta t + \sqrt{\Delta t}\, L \mathbf{z}_t \right)
$$

Where $L$ is the Cholesky factor of the correlation matrix $\Sigma = LL^\top$ and $\mathbf{z}_t \sim \mathcal{N}(\mathbf{0}, I)$. The regression basis functions then include cross-terms of $S_t^i$.

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

## Parameter Table

| Parameter | Description | Typical Value |
|:---|:---|:---|
| $N$ | Number of simulated paths | $10{,}000 – 100{,}000$ |
| $M$ | Number of time steps | $50 – 250$ |
| $K$ | Strike price | Asset-dependent |
| $M$ | Number of basis functions | $3 – 6$ |
| df | Discount factor per step | $e^{-r \Delta t}$ |

## Advantages

- **Dimensionality**: Unlike Finite Difference methods, LSM scales well to multi-asset options (e.g., American basket options).
- **Flexibility**: Can be applied to almost any underlying stochastic process (not just Black-Scholes).
- **Simplicity**: Relatively easy to implement compared to complex PDE solvers for early exercise boundaries.

## Limitations and Extensions

- **Regression bias**: The OLS estimate of the continuation value is biased downward, leading to a slight underestimation of option prices. Using more basis functions or cross-validation helps.
- **Variance**: With finite paths $N$, the price estimate has standard error $O(N^{-1/2})$. Variance reduction (antithetic variates, control variates) is essential for practical accuracy.
- **Optimal stopping boundaries**: LSM gives a price estimate but not the explicit exercise boundary. Extracting the boundary requires post-processing the exercise decisions across paths.
- **Stochastic rates/volatility**: Extending to Heston or Vasicek underlyings simply adds more state variables to the regression — at some computational cost.

## Related Topics
- [[monte-carlo-method]]
- [[black-scholes]]
- [[heston-model]]
- [[ornstein-uhlenbeck-process]]

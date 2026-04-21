---
slug: "/finance/monte-carlo-method"
title: "Monte Carlo Method"
category: "Algorithms and ML"
order: 24
lang: "en"
---
# Monte Carlo Method

The **Monte Carlo Method** is a computational technique that uses random sampling to obtain numerical results. In quantitative finance, it is a cornerstone for pricing complex derivatives and calculating risk metrics (like VaR and ES) when analytical solutions are unavailable.

## Background and History

The Monte Carlo method was formalized by Stanislaw Ulam and John von Neumann during the Manhattan Project in the 1940s — the name was coined by Nicholas Metropolis in reference to the Monte Carlo Casino. Its application to option pricing was pioneered by Phelim Boyle in 1977, who showed that simulating thousands of GBM paths and averaging discounted payoffs converges to the Black-Scholes price.

Modern finance relies on Monte Carlo for problems where analytical tractability fails: path-dependent options (Asian, lookback, barrier), multi-asset structures (basket options, CDO tranches), and risk measures over complex portfolios. The method's generality comes at a cost — the canonical convergence rate of $O(N^{-1/2})$ means halving the error requires quadrupling the number of paths.

## Core Concept

Based on the Law of Large Numbers, the average of a large number of independent simulations converges to the expected value. In asset pricing under the risk-neutral measure $\mathbb{Q}$, the value today is the discounted expected value of future payoffs:

$$
V_0 = e^{-rT} \mathbb{E}^{\mathbb{Q}}[f(S_T)] \approx e^{-rT} \frac{1}{N} \sum_{i=1}^{N} f(S_T^{(i)})
$$

Where:
- $S_T^{(i)}$ is the simulated asset price at maturity $T$ in the $i$-th scenario.
- $f(S_T)$ is the payoff function of the option.
- $r$ is the risk-free rate.

## Steps in Option Pricing

1. **Generate Random Paths**: Simulate the price evolution using a stochastic process (GBM, Heston, jump-diffusion, etc.).
2. **Calculate Payoffs**: Determine the option's value for each simulated path at maturity.
3. **Average**: Find the arithmetic mean of all simulated payoffs.
4. **Discount**: Bring the average value back to the present using the risk-free rate.

## Accuracy and Convergence

The standard error of the Monte Carlo estimator is:

$$
\text{SE} = \frac{\hat{\sigma}_f}{\sqrt{N}} \sim O(N^{-1/2})
$$

where $\hat{\sigma}_f$ is the sample standard deviation of the payoffs. This dimension-independent convergence rate is the key advantage over finite-difference methods for high-dimensional problems.

**Quasi-Monte Carlo** (QMC) replaces pseudo-random numbers with low-discrepancy sequences (Sobol, Halton), achieving an effective convergence rate of $O(N^{-1}(\log N)^d)$ — dramatically faster in low-to-moderate dimensions $d$.

## Variance Reduction Techniques

### 1. Antithetic Variates
For every path driven by $z \sim \mathcal{N}(0,1)$, generate a paired path with $-z$:
$$
\hat{V}_{AV} = \frac{1}{2N} \sum_{i=1}^N \left[ f(S_T(z_i)) + f(S_T(-z_i)) \right]
$$
Reduces variance by exploiting negative correlation between paired payoffs.

### 2. Control Variates
Use a related quantity $C$ with known expectation $\mu_C$:
$$
\hat{V}_{CV} = \hat{V} - b(C - \mu_C), \quad b^* = \frac{\text{Cov}(f, C)}{\text{Var}(C)}
$$
A European call is often used as a control variate when pricing an Asian call — both depend on the same underlying path.

### 3. Importance Sampling
Tilt the sampling distribution $p(x)$ toward $q(x)$ to oversample rare but important events (tail losses, deep OTM options):
$$
\hat{V}_{IS} = \frac{1}{N} \sum_{i=1}^N f(x_i) \frac{p(x_i)}{q(x_i)}, \quad x_i \sim q
$$

### 4. Stratified Sampling
Divide $[0,1]$ into $K$ equal strata and sample one uniform from each — ensures coverage of the full distribution and eliminates clustering.

## Multi-Asset Correlation via Cholesky Decomposition

For $d$ correlated assets with correlation matrix $\Sigma$, decompose $\Sigma = LL^\top$ (Cholesky) and simulate:

$$
\mathbf{S}_{t+1} = \mathbf{S}_t \odot \exp\left(\mu \Delta t + \sqrt{\Delta t}\, L\, \mathbf{z}_t\right), \quad \mathbf{z}_t \sim \mathcal{N}(\mathbf{0}, I_d)
$$

This ensures the simulated returns have the correct correlation structure.

## Python: Vectorized Asian Option Pricing with Variance Reduction

```python
import numpy as np

def monte_carlo_asian_call(S0, K, T, r, sigma, N=100_000, steps=252, seed=42):
    """
    Price an Asian (arithmetic average) call option using Monte Carlo
    with antithetic variates for variance reduction.

    Returns (price, std_error, price_AV, se_AV).
    """
    np.random.seed(seed)
    dt = T / steps
    discount = np.exp(-r * T)

    # Generate standard normals: shape (steps, N//2)
    Z = np.random.standard_normal((steps, N // 2))
    Z_anti = -Z  # antithetic

    def simulate_paths(z_matrix):
        log_returns = (r - 0.5 * sigma**2) * dt + sigma * np.sqrt(dt) * z_matrix
        log_S = np.log(S0) + np.cumsum(log_returns, axis=0)
        return np.exp(log_S)  # shape (steps, N//2)

    paths = simulate_paths(Z)       # (steps, N//2)
    paths_anti = simulate_paths(Z_anti)

    # Asian payoff: average of all time steps
    avg_price = np.mean(paths, axis=0)
    avg_price_anti = np.mean(paths_anti, axis=0)

    payoffs = np.maximum(avg_price - K, 0)
    payoffs_anti = np.maximum(avg_price_anti - K, 0)

    # Standard estimator (double paths)
    all_payoffs = np.concatenate([payoffs, payoffs_anti])
    price = discount * np.mean(all_payoffs)
    se = discount * np.std(all_payoffs) / np.sqrt(N)

    # Antithetic estimator
    av_payoffs = 0.5 * (payoffs + payoffs_anti)
    price_av = discount * np.mean(av_payoffs)
    se_av = discount * np.std(av_payoffs) / np.sqrt(N // 2)

    return price, se, price_av, se_av


def monte_carlo_call_control_variate(S0, K, T, r, sigma, N=100_000, seed=42):
    """
    European call pricing using control variate (exact Black-Scholes price).
    """
    from scipy.stats import norm as sp_norm
    np.random.seed(seed)

    z = np.random.standard_normal(N)
    ST = S0 * np.exp((r - 0.5 * sigma**2) * T + sigma * np.sqrt(T) * z)
    payoffs = np.maximum(ST - K, 0)

    # Control variate: E[S_T] = S0 * exp(r*T) is known
    b_star = np.cov(payoffs, ST)[0, 1] / np.var(ST)
    payoffs_cv = payoffs - b_star * (ST - S0 * np.exp(r * T))

    price_cv = np.exp(-r * T) * np.mean(payoffs_cv)
    se_cv = np.exp(-r * T) * np.std(payoffs_cv) / np.sqrt(N)
    return price_cv, se_cv


# Example
S, K, T, r, sigma = 100, 105, 1, 0.05, 0.2
p, se, p_av, se_av = monte_carlo_asian_call(S, K, T, r, sigma)
print(f"Asian Call (standard):   ${p:.4f} ± {1.96*se:.4f}")
print(f"Asian Call (antithetic): ${p_av:.4f} ± {1.96*se_av:.4f}")
print(f"Variance reduction: {(se/se_av)**2:.1f}x")
```

## Convergence Visualization

```chart
{
  "type": "line",
  "xAxis": "simulations",
  "data": [
    {"simulations": "100", "price": 8.42, "qmc": 8.18},
    {"simulations": "500", "price": 7.95, "qmc": 8.04},
    {"simulations": "1000", "price": 8.12, "qmc": 8.02},
    {"simulations": "5000", "price": 8.05, "qmc": 8.02},
    {"simulations": "10000", "price": 8.02, "qmc": 8.02},
    {"simulations": "50000", "price": 8.02, "qmc": 8.02}
  ],
  "lines": [
    {"dataKey": "price", "stroke": "#3b82f6", "name": "Standard MC"},
    {"dataKey": "qmc", "stroke": "#10b981", "name": "Quasi-MC (Sobol)"}
  ]
}
```

## Parameter Table

| Parameter | Description | Typical Value |
|:---|:---|:---|
| $N$ | Number of simulated paths | $10{,}000 – 1{,}000{,}000$ |
| Steps | Time discretization steps | $52 – 252$ per year |
| $r$ | Risk-free rate | Current rate curve |
| $\sigma$ | Volatility | Implied vol surface |
| VR method | Variance reduction technique | Antithetic for speed |

## Pros and Cons

| Feature | Pros | Cons |
| :--- | :--- | :--- |
| **Flexibility** | Handles any complex payoff function | High computational cost |
| **Multidimensionality** | Efficient for path-dependent or multi-asset options | Slow convergence rate ($1/\sqrt{N}$) |
| **Simplicity** | Easy to parallelize across multiple CPUs/GPUs | Hard to value American-style (early exercise) options |
| **Quasi-MC** | Near $O(N^{-1})$ convergence in low dim | Less effective in very high dimensions |

## Limitations and Extensions

- **American options**: Standard MC cannot directly handle early exercise. [[longstaff-schwartz]] solves this via least-squares regression on simulated paths.
- **Greeks computation**: Finite-difference bumping of parameters is expensive. Pathwise derivatives and likelihood ratio methods allow efficient gradient computation within the MC framework.
- **[[inference-serving|GPU]] acceleration**: Vectorized MC in NumPy/CuPy scales near-linearly with GPU cores, making million-path simulations feasible in seconds.

## Related Topics
- [[longstaff-schwartz]]
- [[value-at-risk]]
- [[black-scholes]]
- [[qft-basic]]
- [[mcmc]]
- [[particle-filter]]
- [[quasi-monte-carlo]] — low-discrepancy sequences for faster convergence

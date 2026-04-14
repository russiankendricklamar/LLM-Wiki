---
title: "Brownian Motion"
category: "Stochastic Processes"
order: 170
lang: "en"
slug: "brownian-motion"
---
# Brownian Motion

**Brownian Motion**, also known as a Wiener Process, is a continuous-time stochastic process that is a limit of both random walks and various other stochastic processes. It is the foundational building block of modern stochastic calculus and the driving noise in nearly every continuous-time model in quantitative finance.

## Overview & Background

The phenomenon was first observed by botanist Robert Brown in 1827, who noticed that pollen grains suspended in water moved erratically. The mathematical explanation came from Albert Einstein in 1905, who derived the diffusion equation governing the motion. Norbert Wiener rigorously constructed the mathematical object in 1923, and it now bears both names: Brownian motion and the Wiener process.

Louis Bachelier used Brownian motion in his 1900 doctoral thesis to model stock prices — predating Einstein and arguably founding mathematical finance. The modern stochastic calculus framework, built by Kiyosi Itô in the 1940s–50s, turned Wiener's construction into a practical tool for deriving SDEs, computing expectations, and solving PDEs — all indispensable for derivative pricing, portfolio theory, and risk management.

## Mathematical Framework

### Axiomatic Definition

A stochastic process $\{W_t\}_{t \geq 0}$ defined on a probability space $(\Omega, \mathcal{F}, \mathbb{P})$ is a **standard Wiener process** if:

1. $W_0 = 0$ almost surely
2. **Independent increments**: For $0 \leq s < t \leq u < v$, the increments $W_t - W_s$ and $W_v - W_u$ are independent
3. **Stationary Gaussian increments**: $W_t - W_s \sim \mathcal{N}(0, t-s)$ for all $0 \leq s < t$
4. **Continuous paths**: $t \mapsto W_t$ is continuous almost surely

These four properties uniquely characterize the Wiener process among all continuous-time processes with stationary independent increments.

### Quadratic Variation

A key property distinguishing Brownian motion from differentiable functions is its **quadratic variation**:

$$
[W, W]_t = \lim_{\|\Pi\| \to 0} \sum_{i} (W_{t_{i+1}} - W_{t_i})^2 = t
$$

This is non-zero — unlike smooth functions whose quadratic variation is zero — and leads to the non-standard chain rule in Itô calculus. In shorthand: $dW_t^2 = dt$.

The **total variation** of Brownian motion is infinite almost surely, which means standard Riemann-Stieltjes integration against $W_t$ is undefined, requiring the Itô or Stratonovich integral.

### Itô's Lemma

For a twice continuously differentiable function $f(t, x)$ and $X_t = W_t$:

$$
df(t, W_t) = \frac{\partial f}{\partial t} dt + \frac{\partial f}{\partial x} dW_t + \frac{1}{2} \frac{\partial^2 f}{\partial x^2} dt
$$

The extra term $\frac{1}{2}\frac{\partial^2 f}{\partial x^2} dt$ arises from quadratic variation and is the hallmark of stochastic calculus. Applied to $f = \ln S$ with $dS = \mu S\, dt + \sigma S\, dW$:

$$
d\ln S_t = \left(\mu - \frac{\sigma^2}{2}\right) dt + \sigma \, dW_t
$$

This is the origin of the $-\sigma^2/2$ drift correction in the Black-Scholes formula.

### Reflection Principle and Hitting Times

The **reflection principle** states that the maximum $M_t = \max_{0 \leq s \leq t} W_s$ has the same distribution as $|W_t|$:

$$
\mathbb{P}(M_t \geq a) = 2\mathbb{P}(W_t \geq a) = 2(1 - N(a/\sqrt{t}))
$$

The **first passage time** $\tau_a = \inf\{t : W_t = a\}$ has distribution:

$$
f_{\tau_a}(t) = \frac{a}{\sqrt{2\pi t^3}} \exp\left(-\frac{a^2}{2t}\right), \quad t > 0
$$

This is the inverse Gaussian distribution and is used in barrier option pricing and credit default timing.

### Multidimensional Brownian Motion

A $d$-dimensional Brownian motion $\mathbf{W}_t = (W_t^1, \dots, W_t^d)^T$ has correlated components when the instantaneous covariance is:

$$
d\langle W^i, W^j \rangle_t = \rho_{ij} \, dt
$$

where $\rho_{ij}$ is the correlation matrix. Constructing correlated Brownian motions uses the Cholesky decomposition: $\mathbf{W}_t = L \mathbf{Z}_t$ where $L L^T = \Sigma$ and $\mathbf{Z}_t$ has independent standard components.

### Connection to PDEs

By the Feynman-Kac theorem, the expectation $u(t, x) = \mathbb{E}[g(W_T) | W_t = x]$ satisfies the **heat equation**:

$$
\frac{\partial u}{\partial t} + \frac{1}{2} \frac{\partial^2 u}{\partial x^2} = 0, \quad u(T, x) = g(x)
$$

This connection between SDEs and PDEs is fundamental to option pricing: the Black-Scholes PDE is exactly the heat equation after a change of variables.

## Key Properties

- **Nowhere differentiable**: Brownian paths are continuous but nowhere differentiable with probability 1 (Paley, Wiener & Zygmund, 1933).
- **Fractal dimension**: The Hausdorff dimension of a Brownian path in $\mathbb{R}^d$ is $\min(2, d)$.
- **Self-similarity**: For any $c > 0$, $\{c^{-1/2} W_{ct}\}$ has the same distribution as $\{W_t\}$ — Brownian motion is scale-invariant.
- **Markov property**: $W_t$ is a Markov process: $\mathbb{E}[f(W_t) | \mathcal{F}_s] = \mathbb{E}[f(W_t) | W_s]$ for $s \leq t$.
- **Martingale**: $W_t$ is a martingale: $\mathbb{E}[W_t | \mathcal{F}_s] = W_s$.
- **Strong Markov**: The Markov property holds at stopping times, not just fixed times.

## Python Implementation

```python
import numpy as np
import pandas as pd

def simulate_brownian_motion(
    T: float, n_steps: int, n_paths: int = 1, seed: int = 42
) -> np.ndarray:
    """
    Simulate Wiener process paths.

    Parameters
    ----------
    T       : total time horizon
    n_steps : number of time steps
    n_paths : number of independent sample paths
    seed    : random seed for reproducibility

    Returns
    -------
    Array of shape (n_steps+1, n_paths) with W_0 = 0
    """
    np.random.seed(seed)
    dt = T / n_steps
    increments = np.random.normal(0, np.sqrt(dt), (n_steps, n_paths))
    paths = np.vstack([np.zeros((1, n_paths)), np.cumsum(increments, axis=0)])
    return paths

def simulate_correlated_brownian(
    T: float, n_steps: int, corr_matrix: np.ndarray, seed: int = 42
) -> np.ndarray:
    """
    Simulate correlated d-dimensional Brownian motion via Cholesky decomposition.
    corr_matrix: (d,d) correlation matrix
    Returns: array of shape (n_steps+1, d)
    """
    np.random.seed(seed)
    d = corr_matrix.shape[0]
    dt = T / n_steps
    L = np.linalg.cholesky(corr_matrix)
    Z = np.random.normal(0, np.sqrt(dt), (n_steps, d))
    corr_increments = Z @ L.T
    paths = np.vstack([np.zeros((1, d)), np.cumsum(corr_increments, axis=0)])
    return paths

def quadratic_variation(path: np.ndarray) -> float:
    """
    Empirical quadratic variation of a discretized path.
    Should converge to T as n_steps -> infinity.
    """
    return np.sum(np.diff(path) ** 2)

def first_passage_time(path: np.ndarray, level: float, dt: float) -> float:
    """
    Estimate first passage time to a given level.
    Returns NaN if never reached.
    """
    crossings = np.where(path >= level)[0]
    if len(crossings) == 0:
        return float('nan')
    return crossings[0] * dt

# Simulate 5 paths and compute quadratic variation
paths = simulate_brownian_motion(T=1.0, n_steps=1000, n_paths=5)
qv_estimates = [quadratic_variation(paths[:, i]) for i in range(5)]

# Correlated 2D Brownian motion (e.g., equity + FX)
rho = np.array([[1.0, 0.6], [0.6, 1.0]])
corr_paths = simulate_correlated_brownian(T=1.0, n_steps=500, corr_matrix=rho)
```

## Sample Brownian Paths

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": "0.0", "path1": 0.0, "path2": 0.0, "path3": 0.0},
    {"t": "0.2", "path1": 0.18, "path2": -0.12, "path3": 0.31},
    {"t": "0.4", "path1": 0.35, "path2": -0.08, "path3": 0.19},
    {"t": "0.6", "path1": 0.21, "path2": 0.15, "path3": 0.44},
    {"t": "0.8", "path1": 0.48, "path2": -0.03, "path3": 0.27},
    {"t": "1.0", "path1": 0.62, "path2": -0.29, "path3": 0.51}
  ],
  "lines": [
    {"dataKey": "path1", "stroke": "#3b82f6", "name": "Path 1"},
    {"dataKey": "path2", "stroke": "#ef4444", "name": "Path 2"},
    {"dataKey": "path3", "stroke": "#10b981", "name": "Path 3"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---:|:---|:---|
| $W_t$ | Wiener process | Standard Brownian motion | $\mathbb{R}$ |
| $dt$ | Time step | Discretization interval | $10^{-4}$ to $10^{-2}$ |
| $\rho_{ij}$ | Correlation | Instantaneous covariance rate between components | $[-1, 1]$ |
| $[W,W]_t$ | Quadratic variation | Equals $t$ for standard BM | $= t$ |
| $\tau_a$ | First passage time | Time to reach level $a$ | Inverse Gaussian |

## Limitations & Extensions

**Limitations:**
- **Infinite variation**: Standard calculus (Riemann-Stieltjes) cannot define integrals against $W_t$ — Itô or Stratonovich integrals must be used instead.
- **Continuous paths**: Real markets exhibit jumps (earnings, central bank decisions). Brownian motion alone cannot model discontinuities; [[levy-processes]] (Poisson jumps, variance gamma) extend the framework.
- **Normal increments**: The Gaussian distribution has thin tails relative to observed financial returns. Replacing Brownian noise with fractional Brownian motion (Hurst exponent $H \neq 0.5$) or $\alpha$-stable processes addresses tail risk.
- **Constant diffusion coefficient**: Financial volatility is time-varying. Itô SDEs with state-dependent diffusion $\sigma(S_t, t)$ (local volatility) generalize standard GBM.

**Extensions:**
- **Geometric Brownian Motion** ([[geometric-brownian-motion]]): $dS = \mu S\, dt + \sigma S\, dW$ — the standard equity price model.
- **Ornstein-Uhlenbeck**: $dX = \kappa(\theta - X)\, dt + \sigma\, dW$ — mean-reverting process for rates and spreads.
- **Fractional Brownian Motion**: Replace $W_t$ with $W_t^H$ (Hurst parameter $H$) to model long-range dependence.
- **[[levy-processes]]**: Add jump component: $dX = \mu\, dt + \sigma\, dW + dJ$ where $J_t$ is a compound Poisson process.

## Practical Applications

1. **Derivative Pricing**: Every option pricing model (Black-Scholes, Heston, SABR) uses Brownian motion as the fundamental noise source for the underlying asset.
2. **Interest Rate Models**: Vasicek, Hull-White, and HJM models all drive rate dynamics with Brownian motion; multi-factor models use correlated Brownian motions.
3. **Portfolio Simulation**: Monte Carlo portfolio simulations generate correlated asset paths using multi-dimensional Brownian motion with Cholesky-decomposed covariance.
4. **Risk Management**: VaR and CVaR calculations under geometric Brownian dynamics provide the analytical benchmark against which fat-tail models are compared.
5. **Optimal Execution**: Almgren-Chriss and Avellaneda-Stoikov models assume Brownian price dynamics to derive optimal trading strategies.

## Related Topics
- [[geometric-brownian-motion]]
- [[levy-processes]]
- [[black-scholes]]
- [[mcmc]]
- [[schrodinger-equation]]
- [[avellaneda-stoikov]]

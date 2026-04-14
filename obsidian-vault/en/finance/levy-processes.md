---
title: "Lévy Processes"
category: "Stochastic Processes"
order: 2
lang: "en"
featured: true
image: "/featured/levy.jpg"
growth: "evergreen"
---
# Lévy Processes

A **Lévy process** is a stochastic process with independent and stationary increments. It represents the continuous-time analog of a random walk. Lévy processes are fundamental in quantitative finance for modeling asset prices that exhibit jumps and "fat tails."

## Background and Motivation

The ubiquitous geometric Brownian motion (GBM) assumption underlying Black-Scholes produces log-returns that are normally distributed — a property empirically violated by virtually every financial asset. Real log-return distributions exhibit excess kurtosis (fat tails) and skewness, and asset prices occasionally jump discontinuously in response to earnings announcements, geopolitical events, or liquidity shocks.

Paul Lévy developed the general theory of processes with independent and stationary increments in the 1930s. The Lévy-Khintchine theorem (1937) provides a complete characterization of all such processes through a triplet: drift, diffusion, and a jump measure. This framework unifies Brownian motion, Poisson processes, and all models in between into a single coherent class.

## Definition and Properties

A stochastic process $X = \{X_t : t \ge 0\}$ is a Lévy process if:
1. $X_0 = 0$ almost surely.
2. **Independent increments**: For any $s < t$, $X_t - X_s$ is independent of $\{X_u : u \le s\}$.
3. **Stationary increments**: For any $s < t$, $X_t - X_s$ is equal in distribution to $X_{t-s}$.
4. **Continuity in probability**: For any $\epsilon > 0$, $\lim_{h \to 0} P(|X_{t+h} - X_t| > \epsilon) = 0$.

## The Lévy-Khintchine Representation

Every Lévy process is uniquely determined by its characteristic exponent $\psi(\theta)$, defined by $E[e^{i\theta X_t}] = e^{t\psi(\theta)}$. The Lévy-Khintchine formula states:

$$
\psi(\theta) = i\gamma\theta - \frac{1}{2}\sigma^2\theta^2 + \int_{\mathbb{R}\setminus\{0\}} (e^{i\theta x} - 1 - i\theta x \mathbf{1}_{|x|<1}) \nu(dx)
$$

Where:
- $\gamma$ is the drift parameter.
- $\sigma^2$ is the Gaussian (diffusion) variance.
- $\nu$ is the Lévy measure, describing the jump intensity and size.

The triplet $(\gamma, \sigma^2, \nu)$ is called the **Lévy triplet** or **characteristic triplet** and uniquely identifies the process.

## Key Examples

- **Wiener Process (Brownian Motion)**: $\nu = 0$. The only continuous Lévy process.
- **Poisson Process**: $\sigma = 0$, $\nu = \lambda \delta_1$. Represents counting events.
- **Compound Poisson Process**: Jumps occur at Poisson-distributed times with random sizes.
- **Variance Gamma (VG) Process**: Brownian motion subordinated to a Gamma process. Finite variation, no diffusion component, analytically tractable for option pricing.
- **Normal Inverse Gaussian (NIG)**: Brownian motion subordinated to an Inverse Gaussian process. Captures both skewness and excess kurtosis observed in equity returns.
- **CGMY / KoBoL Process**: Generalizes the VG; controls the heaviness of jump tails separately for positive and negative jumps via parameters $C, G, M, Y$.

## Mathematical Framework: The Lévy-Itô Decomposition

Every Lévy process can be decomposed as:

$$
X_t = \gamma t + \sigma W_t + \int_{|x|<1} x \tilde{N}(dt, dx) + \int_{|x|\ge 1} x N(dt, dx)
$$

Where $N(dt, dx)$ is the Poisson random measure on $\mathbb{R}_+ \times \mathbb{R}$ with intensity $dt \cdot \nu(dx)$, and $\tilde{N} = N - dt\,\nu(dx)$ is the compensated measure. This decomposition separates:
1. The deterministic drift $\gamma t$
2. The continuous diffusion component $\sigma W_t$
3. Small jumps (compensated) contributing to a martingale
4. Large jumps (a compound Poisson process)

## Key Properties

- **Infinite divisibility**: The distribution of $X_t$ at any fixed $t$ is infinitely divisible.
- **Martingale condition**: $X_t - X_0 - E[X_t - X_0]$ is a martingale.
- **Scaling**: For the stable sub-family, $X_{ct} \overset{d}{=} c^{1/\alpha} X_t$ where $\alpha \in (0, 2]$ is the stability index.
- **Skewness and kurtosis**: The Lévy measure $\nu$ directly controls the higher moments — heavier tails of $\nu$ produce larger excess kurtosis in returns.

## Python: Jump-Diffusion Simulation

Lévy processes are often simulated using the Merton Jump-Diffusion model:

```python
import numpy as np

def simulate_jump_diffusion(S0, T, r, sigma, lamb, mu_j, sigma_j, steps):
    dt = T / steps
    t = np.linspace(0, T, steps)

    # Brownian component
    W = np.random.standard_normal(steps)

    # Jump component (Compound Poisson)
    N = np.random.poisson(lamb * dt, steps)
    J = np.where(N > 0, np.random.normal(mu_j, sigma_j, steps), 0)

    # Log-return calculation
    log_S = np.zeros(steps)
    log_S[0] = np.log(S0)

    # Compensated drift: adjust for the expected jump size
    kappa = np.exp(mu_j + 0.5 * sigma_j**2) - 1
    for i in range(1, steps):
        drift = (r - 0.5 * sigma**2 - lamb * kappa) * dt
        diffusion = sigma * np.sqrt(dt) * W[i]
        jumps = N[i] * J[i]
        log_S[i] = log_S[i-1] + drift + diffusion + jumps

    return t, np.exp(log_S)


def simulate_variance_gamma(S0, T, r, sigma, nu, theta, steps):
    """
    Variance Gamma process: Brownian motion with drift subordinated to Gamma.
    nu: variance of Gamma subordinator per unit time
    theta: drift of the subordinated Brownian motion
    sigma: volatility of the subordinated Brownian motion
    """
    dt = T / steps
    # Gamma subordinator increments
    gamma_shape = dt / nu
    gamma_scale = nu
    dg = np.random.gamma(gamma_shape, gamma_scale, steps)

    # VG increments
    dX = theta * dg + sigma * np.sqrt(dg) * np.random.standard_normal(steps)

    # Risk-neutral drift correction
    omega = (1 / nu) * np.log(1 - theta * nu - 0.5 * sigma**2 * nu)
    log_S = np.zeros(steps + 1)
    log_S[0] = np.log(S0)
    for i in range(steps):
        log_S[i + 1] = log_S[i] + (r + omega) * dt + dX[i]

    return np.exp(log_S)


# Example usage
np.random.seed(42)
t, S_merton = simulate_jump_diffusion(100, 1.0, 0.05, 0.2, 3.0, -0.05, 0.1, 252)
S_vg = simulate_variance_gamma(100, 1.0, 0.05, 0.15, 0.1, -0.1, 252)

print(f"Merton model final price: {S_merton[-1]:.2f}")
print(f"Variance Gamma final price: {S_vg[-1]:.2f}")
```

## Jump Process Visualization

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "0.0", "price": 100.0},
    {"time": "0.1", "price": 101.2},
    {"time": "0.2", "price": 99.8},
    {"time": "0.3", "price": 100.5},
    {"time": "0.4", "price": 106.2},
    {"time": "0.5", "price": 105.4},
    {"time": "0.6", "price": 104.1},
    {"time": "0.7", "price": 95.8},
    {"time": "0.8", "price": 96.5},
    {"time": "0.9", "price": 97.2},
    {"time": "1.0", "price": 98.0}
  ],
  "lines": [
    {"dataKey": "price", "stroke": "#3b82f6", "name": "Asset Price (with Jumps)"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---|:---|:---|
| $\gamma$ | Drift | Deterministic trend component | $[-0.5, 0.5]$ |
| $\sigma^2$ | Diffusion variance | Continuous volatility | $[0, 1]$ |
| $\nu(dx)$ | Lévy measure | Jump intensity and size distribution | Model-specific |
| $\lambda$ | Jump intensity (Merton) | Expected number of jumps per year | $[0.5, 10]$ |
| $\mu_j$ | Mean jump size | Average log-jump magnitude | $[-0.2, 0.1]$ |
| $\sigma_j$ | Jump volatility | Standard deviation of log-jump | $[0.05, 0.3]$ |
| $\nu$ (VG) | VG variance rate | Controls kurtosis of VG process | $[0.01, 0.5]$ |

## Model Parameters

| Component | Description | Financial Impact |
| :--- | :--- | :--- |
| **Diffusion** | Continuous price movement | Normal market volatility |
| **Jumps** | Sudden price discontinuities | Market shocks / news |
| **Drift** | Average rate of return | Expected growth |

## Limitations and Extensions

- **Calibration complexity**: The Lévy triplet has infinite-dimensional freedom (the full measure $\nu$). Parameterric families (Merton, VG, NIG, CGMY) restrict this to 3-5 parameters, but calibration to option surfaces remains non-trivial.
- **Time-inhomogeneity**: Standard Lévy processes have stationary increments — volatility clustering (GARCH effects) is not captured. Time-changed Lévy processes or Lévy-driven stochastic volatility models address this.
- **No path continuity**: Models with infinite jump activity (e.g., NIG) have infinitely many jumps in any finite interval. Simulation requires special algorithms (series representation, Asmussen-Rosinski approximation).
- **Correlation structure**: Building multivariate Lévy models that capture realistic cross-asset dependence (beyond linear correlation) requires Lévy copulas.

## Practical Applications

Lévy processes are used in options market-making desks to build more accurate volatility surfaces than Black-Scholes. The NIG and VG models are standard in energy and FX derivatives pricing. In credit risk, Lévy-driven intensity models (extending the Cox process) capture jump-to-default risk that pure diffusion models miss.

## Related Topics
- [[fractional-fokker-planck]]
- [[cox-process]]
- [[heston-model]]
- [[monte-carlo-method]]
- [[ornstein-uhlenbeck-process]]

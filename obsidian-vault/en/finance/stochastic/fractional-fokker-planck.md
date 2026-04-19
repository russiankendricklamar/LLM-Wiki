---
slug: "/finance/fractional-fokker-planck"
title: "Fractional Fokker-Planck Equation"
category: "Stochastic Processes"
order: 38
lang: "en"
---
# Fractional Fokker-Planck Equation (FFPE)

The **Fractional Fokker-Planck Equation (FFPE)** is a generalization of the classical Fokker-Planck equation (also known as the Kolmogorov forward equation) used to describe the time evolution of the probability density function of a physical or financial system. By incorporating fractional-order derivatives, the FFPE provides a framework for modeling **anomalous diffusion** — processes where variance does not grow linearly with time, as observed empirically in many financial markets.

## Prerequisites

[[brownian-motion]], [[hurst-exponent]], [[mcmc]]

## Background

The classical Fokker-Planck equation (FPE) was developed independently by Fokker (1914) and Planck (1917) to describe Brownian motion and its generalizations. Its solution is a Gaussian density propagating in time, which corresponds to the log-normal price model of Black-Scholes. Fractional generalizations were studied by Metzler and Klafter (2000) and others, who showed that CTRW (Continuous Time Random Walk) models with heavy-tailed waiting times and/or jump sizes converge in a scaling limit to the FFPE.

## Anomalous Diffusion in Markets

In the standard Black-Scholes world (based on Brownian Motion), the variance of asset returns grows linearly with time: $\text{Var}(x) \sim t$. Real-world financial data, however, often exhibits non-linear variance scaling:

- **Sub-diffusion** ($\text{Var} \sim t^\alpha,\ \alpha < 1$): Processes that spread slower than Brownian motion, associated with strong mean reversion, long waiting times between trades, or illiquid markets.
- **Super-diffusion** ($\text{Var} \sim t^\alpha,\ \alpha > 1$): Processes that spread faster, characteristic of trending markets with "long memory," Lévy flights, or persistent autocorrelations.
- **Normal diffusion** ($\alpha = 1$): The standard Brownian case, consistent with efficient markets in the Fama sense.

## Mathematical Formulation

The classical FPE for the probability density $p(x,t)$ of a particle with drift $A(x)$ and diffusion coefficient $B(x)$ is:

$$
\frac{\partial p(x,t)}{\partial t} = -\frac{\partial}{\partial x}[A(x)\,p(x,t)] + \frac{\partial^2}{\partial x^2}[B(x)\,p(x,t)]
$$

The **fractional generalization** using the Riemann-Liouville fractional derivative of order $\alpha \in (0,1]$ in time is:

$$
\frac{\partial p(x, t)}{\partial t} = {}_0D_t^{1-\alpha} \left[ -\frac{\partial}{\partial x} (A(x) p(x, t)) + \frac{\partial^2}{\partial x^2} (B(x) p(x, t)) \right]
$$

Where the Riemann-Liouville operator is:

$$
{}_0D_t^{1-\alpha} f(t) = \frac{1}{\Gamma(\alpha)} \frac{d}{dt} \int_0^t (t-s)^{\alpha-1} f(s)\, ds
$$

This convolution integral embeds the **entire history** of the process into the current rate of change — the defining feature that produces memory effects and non-Markovian dynamics.

## Space-Fractional FPE (Lévy Flights)

A separate class of FFPE replaces the spatial second derivative with a fractional Laplacian of order $\mu \in (0,2]$:

$$
\frac{\partial p(x,t)}{\partial t} = -A \frac{\partial p}{\partial x} + D_\mu (-\Delta)^{\mu/2} p(x,t)
$$

This models **Lévy flights** — processes where jump sizes follow a power-law distribution. Solutions have algebraic tails $p(x,t) \sim |x|^{-(1+\mu)}$ for large $|x|$, directly modeling fat-tailed return distributions.

## Connection to the Hurst Exponent

The fractional order $\alpha$ is intrinsically linked to the Hurst exponent $H$. For subdiffusive CTRW processes, the variance scales as:

$$
\langle x^2(t) \rangle \sim t^\alpha \quad \Rightarrow \quad H = \alpha/2
$$

For fractional Brownian motion (fBm) with Hurst exponent $H$, the corresponding FFPE has $\alpha = 2H$. This links the observable $H$ (estimable from price data) to the fractional order of the underlying evolution equation.

## Key Properties

- Solutions to the FFPE are **non-Gaussian** and exhibit power-law tails when $\alpha < 1$ (temporal) or $\mu < 2$ (spatial).
- The process is **non-Markovian**: the future state depends on the full history, captured by the convolution in the fractional derivative.
- **Stationarity** is not guaranteed — sub-diffusive processes may exhibit aging (dependence on when observation starts).
- The mean displacement is zero for symmetric drift, but the variance grows as $t^\alpha$, slower or faster than the standard $t$.

## Python: Numerical Concept (CTRW Simulation)

Numerical solutions often rely on simulating **Continuous Time Random Walks (CTRW)**, which converge to the FFPE in the limit.

```python
import numpy as np
import matplotlib.pyplot as plt

def simulate_ctrw(n_steps: int, alpha: float, seed: int = 42) -> tuple:
    """
    Simulate a CTRW that converges to the FFPE solution.

    alpha < 1: sub-diffusive (heavy-tailed waiting times)
    alpha > 1: super-diffusive (heavy-tailed jump sizes, use Lévy approach)
    """
    rng = np.random.default_rng(seed)

    # Waiting times from a Pareto distribution (alpha < 1 → heavy tail)
    waiting_times = rng.pareto(alpha, n_steps)
    # Gaussian jump sizes
    jumps = rng.normal(0, 1, n_steps)

    operational_time = np.cumsum(waiting_times)
    position = np.cumsum(jumps)
    return operational_time, position

def estimate_diffusion_exponent(times: np.ndarray, positions: np.ndarray, n_bins: int = 20) -> float:
    """Estimate alpha from the log-log slope of MSD vs time."""
    max_t = times[-1]
    t_bins = np.logspace(0, np.log10(max_t), n_bins)
    msd = []
    for t_bin in t_bins:
        idx = np.searchsorted(times, t_bin)
        if idx > 0:
            msd.append(np.mean(positions[:idx] ** 2))
    log_t = np.log(t_bins[:len(msd)])
    log_msd = np.log(msd)
    slope, _ = np.polyfit(log_t, log_msd, 1)
    return slope  # should equal alpha

# Sub-diffusive: alpha=0.6
t_sub, x_sub = simulate_ctrw(5000, alpha=0.6)
# Near-normal: alpha=0.9
t_norm, x_norm = simulate_ctrw(5000, alpha=0.9)

print(f"Sub-diffusive alpha estimate:  {estimate_diffusion_exponent(t_sub, x_sub):.3f}")
print(f"Near-normal alpha estimate:    {estimate_diffusion_exponent(t_norm, x_norm):.3f}")
```

## Visualization: Standard vs. Fractional Variance Scaling

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "0", "standard": 0, "subdiffusion": 0, "superdiffusion": 0},
    {"time": "1", "standard": 1.0, "subdiffusion": 0.7, "superdiffusion": 1.4},
    {"time": "2", "standard": 2.0, "subdiffusion": 1.1, "superdiffusion": 3.2},
    {"time": "3", "standard": 3.0, "subdiffusion": 1.5, "superdiffusion": 5.8},
    {"time": "4", "standard": 4.0, "subdiffusion": 1.8, "superdiffusion": 9.2}
  ],
  "lines": [
    {"dataKey": "standard", "stroke": "#94a3b8", "name": "Normal Diffusion (α=1)"},
    {"dataKey": "subdiffusion", "stroke": "#ef4444", "name": "Sub-diffusion (α=0.6)"},
    {"dataKey": "superdiffusion", "stroke": "#8b5cf6", "name": "Super-diffusion (α=1.5)"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Range |
|--------|------|-------------|---------------|
| $\alpha$ | Fractional order | Controls anomaly strength | $(0, 1]$ for subdiffusion |
| $H$ | Hurst exponent | Memory measure; $H = \alpha/2$ | $(0, 1)$ |
| $\mu$ | Lévy index | Spatial jump distribution tail | $(0, 2]$ |
| $A(x)$ | Drift coefficient | Deterministic force | Model-specific |
| $B(x)$ | Diffusion coefficient | Local volatility | $B > 0$ |

## Limitations and Extensions

- **Computational cost**: Numerical solutions of the FFPE require discretizing the fractional operator, which involves $O(N^2)$ memory for $N$ time steps due to non-locality.
- **Parameter identification**: Distinguishing sub-diffusion from mean reversion in observed data is non-trivial; R/S analysis and DFA (Detrended Fluctuation Analysis) are needed.
- **Non-stationarity**: The FFPE framework assumes a fixed $\alpha$ over time; real markets exhibit time-varying memory properties.
- **Tempered Lévy processes**: A modern extension replaces pure power-law jump distributions with tempered (exponentially truncated) distributions to ensure finite moments while retaining heavy-tail behavior at intermediate scales.
- **Multiscaling**: Some financial time series exhibit different $H$ at different scales; multifractal models (e.g., MMAR) generalize the single-$\alpha$ FFPE.

## Practical Applications in Quant Finance

1. **Option pricing under anomalous diffusion**: Replacing the standard diffusion operator with a fractional one yields option pricing PDEs whose solutions produce implied volatility smiles absent in Black-Scholes.
2. **VaR with memory**: Incorporating fractional dynamics into risk models captures the persistence of large losses better than standard GARCH; relevant for regulatory capital under stress scenarios.
3. **Liquidity modeling**: In thinly traded markets, the waiting time between transactions follows a heavy-tailed distribution — exactly the subdiffusive regime of the FFPE.
4. **Crypto and emerging markets**: Empirical Hurst exponents well above 0.5 in these assets motivate fractional models over standard GBM for simulation and hedging.

## Related Topics
- [[hurst-exponent]]
- [[levy-processes]]
- [[geometric-brownian-motion]]
- [[garch-models]]

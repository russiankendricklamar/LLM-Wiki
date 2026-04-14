---
title: "Cox Process (Doubly Stochastic)"
category: "Stochastic Processes"
order: 18
lang: "en"
---
# Cox Process (Doubly Stochastic)

A **Cox process**, also known as a **doubly stochastic Poisson process**, is an extension of the Poisson process where the intensity (lambda) is itself a stochastic process. It is the canonical model for credit default timing, high-frequency order flow, and any event-driven process whose arrival rate is driven by an unobservable stochastic environment.

## Overview & Background

The Cox process was introduced by Sir David Cox in his 1955 paper "Some Statistical Methods Connected with Series of Events." The key conceptual advance over the homogeneous Poisson process is the introduction of **stochastic randomness at two levels**: first, the intensity $\lambda(t)$ is drawn from a probability distribution; second, conditional on the intensity path, events arrive as an inhomogeneous Poisson process.

In finance, the framework gained prominence through the **intensity-based (reduced-form) credit risk models** of Lando (1994, 1998) and Duffie & Singleton (1999). These models treat default as the first event of a Cox process, with intensity $\lambda(t)$ representing the instantaneous default hazard rate. The stochastic intensity captures the empirical observation that default risk is itself uncertain and time-varying — it spikes during recessions and tightens in expansions.

In high-frequency trading, Hawkes processes (a self-exciting variant of Cox processes) have become the standard model for order flow, capturing the clustering of trades and quote updates throughout the trading day.

## Mathematical Framework

### Formal Definition

Let $(\lambda(t))_{t \geq 0}$ be a non-negative stochastic process (the **intensity** or **hazard rate**) defined on a probability space. A point process $N(t)$ is a **Cox process** driven by $\lambda$ if:

$$
N(t) \mid (\lambda(s))_{0 \leq s \leq t} \sim \text{Poisson}\left(\int_0^t \lambda(s)\, ds\right)
$$

That is, conditional on the entire path of $\lambda$, the count $N(t)$ is Poisson with mean equal to the cumulative intensity $\Lambda(t) = \int_0^t \lambda(s)\, ds$.

The conditional probability of exactly $k$ events in $(s, t]$:

$$
\mathbb{P}(N_t - N_s = k \mid (\lambda_u)_{s \leq u \leq t}) = \frac{\left(\int_s^t \lambda_u\, du\right)^k}{k!} \exp\left(-\int_s^t \lambda_u\, du\right)
$$

### Unconditional Distribution

By the law of total expectation:

$$
\mathbb{E}[N(t)] = \mathbb{E}[\Lambda(t)] = \int_0^t \mathbb{E}[\lambda(s)]\, ds
$$

$$
\text{Var}[N(t)] = \mathbb{E}[\Lambda(t)] + \text{Var}[\Lambda(t)] > \mathbb{E}[N(t)]
$$

This **overdispersion** — variance exceeding the mean — is the key distinguishing feature of Cox processes and is ubiquitous in financial data (trade counts, default counts per period are overdispersed relative to Poisson predictions).

### Survival Probability (Credit Risk)

The probability of no default by time $T$ (conditional on surviving to $t=0$):

$$
\mathbb{P}(\tau > T) = \mathbb{E}\left[\exp\left(-\int_0^T \lambda(s)\, ds\right)\right]
$$

This is an **exponential functional** of the intensity process — computationally tractable when $\lambda$ follows an affine process (CIR, OU).

### CIR Intensity Model

A popular choice for $\lambda(t)$ is the **Cox-Ingersoll-Ross (CIR)** process:

$$
d\lambda_t = \kappa(\theta - \lambda_t)\, dt + \xi\sqrt{\lambda_t}\, dW_t
$$

where:
- $\kappa > 0$: mean-reversion speed
- $\theta > 0$: long-run mean intensity
- $\xi > 0$: volatility of intensity
- **Feller condition** $2\kappa\theta > \xi^2$ ensures $\lambda_t > 0$ a.s.

Under the CIR model, the survival probability has the closed-form **affine expression**:

$$
\mathbb{P}(\tau > T \mid \lambda_0) = A(T) \exp(-B(T)\lambda_0)
$$

where $A(T)$ and $B(T)$ are deterministic functions of $\kappa, \theta, \xi$ and $T$.

### Vasicek (OU) Intensity

For modeling signed quantities (e.g., credit spread innovations), the Ornstein-Uhlenbeck process:

$$
d\lambda_t = \kappa(\theta - \lambda_t)\, dt + \xi\, dW_t
$$

can go negative, requiring a floor at zero: $\lambda_t^+ = \max(\lambda_t, 0)$.

## Key Properties

- **Overdispersion**: $\text{Var}[N(t)] > \mathbb{E}[N(t)]$ — the hallmark of Cox processes in data.
- **Clustering**: High $\lambda$ periods generate bursts of events; low $\lambda$ periods are quiet. This matches empirical volatility clustering in trade arrivals.
- **No memory given intensity**: Conditional on $\lambda$, the process is Poisson — the only memory is through the intensity process itself.
- **Marked Cox process**: Events can carry marks (trade sizes, recovery rates) whose distribution can depend on $\lambda$, modeling wrong-way risk.
- **Filtering**: The intensity $\lambda_t$ is typically unobservable; Bayesian filtering (Kalman-Bucy or particle filter) estimates it from the observed event history.

## Python Implementation

```python
import numpy as np
import pandas as pd

def simulate_cir(
    kappa: float, theta: float, xi: float, lambda0: float,
    T: float, n_steps: int, seed: int = 42
) -> np.ndarray:
    """
    Simulate CIR intensity process using Euler-Maruyama discretization.
    Returns array of intensity values at each time step.
    """
    np.random.seed(seed)
    dt = T / n_steps
    lambdas = np.zeros(n_steps + 1)
    lambdas[0] = lambda0

    for t in range(1, n_steps + 1):
        dW = np.random.normal(0, np.sqrt(dt))
        drift = kappa * (theta - lambdas[t-1]) * dt
        diffusion = xi * np.sqrt(max(lambdas[t-1], 0)) * dW
        lambdas[t] = max(lambdas[t-1] + drift + diffusion, 0)

    return lambdas

def simulate_cox_process(
    intensity: np.ndarray, dt: float
) -> dict:
    """
    Simulate event arrivals from a Cox process given a discretized intensity path.

    Returns event times and cumulative event count.
    """
    n_steps = len(intensity) - 1
    event_indicators = np.random.poisson(intensity[:-1] * dt)
    arrival_times = np.repeat(np.arange(n_steps) * dt, event_indicators)
    cumulative = np.cumsum(event_indicators)
    return {
        'arrival_times': arrival_times,
        'n_events': int(event_indicators.sum()),
        'cumulative': cumulative,
        'overdispersion': event_indicators.var() / (event_indicators.mean() + 1e-10)
    }

def cir_survival_probability(
    lambda0: float, kappa: float, theta: float, xi: float, T: float
) -> float:
    """
    Closed-form survival probability P(tau > T | lambda_0) under CIR intensity.
    Uses affine bond pricing formula.
    """
    gamma = np.sqrt(kappa**2 + 2 * xi**2)
    exp_gt = np.exp(gamma * T)

    B = 2 * (exp_gt - 1) / ((gamma + kappa) * (exp_gt - 1) + 2 * gamma)
    A = ((2 * gamma * np.exp((kappa + gamma) * T / 2))
         / ((gamma + kappa) * (exp_gt - 1) + 2 * gamma)) ** (2 * kappa * theta / xi**2)

    return A * np.exp(-B * lambda0)

def default_intensity_calibration(
    cds_spreads: np.ndarray, maturities: np.ndarray,
    recovery_rate: float = 0.40
) -> np.ndarray:
    """
    Bootstrap piecewise-constant intensity from CDS spread curve.
    Approximation: lambda ≈ spread / (1 - recovery_rate).
    """
    return cds_spreads / (1 - recovery_rate)

# Example: Credit risk simulation
np.random.seed(42)
T, n_steps = 5.0, 5000
dt = T / n_steps

intensity = simulate_cir(kappa=2.0, theta=0.03, xi=0.1, lambda0=0.02, T=T, n_steps=n_steps)
cox_result = simulate_cox_process(intensity, dt)
surv_prob = cir_survival_probability(lambda0=0.02, kappa=2.0, theta=0.03, xi=0.1, T=1.0)

# CDS spread curve bootstrap
cds_spreads = np.array([0.005, 0.008, 0.012, 0.015, 0.018])
maturities = np.array([1, 2, 3, 5, 7])
boot_intensity = default_intensity_calibration(cds_spreads, maturities)
```

## CIR Intensity Path and Event Arrivals

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "0.0", "lambda": 0.020, "events": 0},
    {"time": "0.5", "lambda": 0.035, "events": 2},
    {"time": "1.0", "lambda": 0.028, "events": 3},
    {"time": "1.5", "lambda": 0.052, "events": 6},
    {"time": "2.0", "lambda": 0.041, "events": 8},
    {"time": "2.5", "lambda": 0.025, "events": 9},
    {"time": "3.0", "lambda": 0.018, "events": 9},
    {"time": "3.5", "lambda": 0.031, "events": 11},
    {"time": "4.0", "lambda": 0.022, "events": 12}
  ],
  "lines": [
    {"dataKey": "lambda", "stroke": "#3b82f6", "name": "Intensity λ(t)"},
    {"dataKey": "events", "stroke": "#ef4444", "name": "Cumulative Events N(t)"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---:|:---|:---|
| $\kappa$ | Mean reversion speed | Rate at which $\lambda$ reverts to $\theta$ | 0.5 – 5.0 |
| $\theta$ | Long-run mean | Equilibrium intensity level | 0.01 – 0.10 |
| $\xi$ | Vol of intensity | Stochastic variability of $\lambda$ | 0.01 – 0.50 |
| $\lambda_0$ | Initial intensity | Starting hazard rate | 0.001 – 0.05 |
| $\Lambda(T)$ | Cumulative intensity | $\int_0^T \lambda(s)\, ds$ | > 0 |
| $R$ | Recovery rate | Fraction recovered at default | 0.20 – 0.60 |

## Comparison: Poisson vs Cox Process

| Property | Poisson Process | Cox Process |
|:---|:---|:---|
| **Intensity** | Constant / Deterministic | Stochastic process |
| **Var / Mean** | = 1 (equidispersion) | > 1 (overdispersion) |
| **Event clustering** | None | Strong (driven by $\lambda$ dynamics) |
| **Use Case** | Simple queuing, rare events | Credit risk, HFT order flow, insurance |
| **Calibration** | Rate $\lambda$ from history | $\kappa, \theta, \xi$ from spread curve / MLE |

## Limitations & Extensions

**Limitations:**
- **Intensity unobservability**: $\lambda(t)$ is latent; estimation requires filtering algorithms (Kalman filter for Gaussian dynamics, particle filter for CIR).
- **CIR negativity**: Numerical discretization of CIR can produce negative values; use the exact non-central chi-squared transition density or the Milstein scheme.
- **Independence assumption**: Standard Cox processes assume the intensity is independent of the Poisson randomness conditional on the filtration — violated in some correlated market models.
- **Jump intensity**: CIR-driven intensity cannot model sudden spikes in default risk (e.g., Lehman Brothers); adding jumps to $\lambda$ improves realism.

**Extensions:**
- **Hawkes process**: Self-exciting variant where each event temporarily raises the intensity — ideal for modeling order flow clustering and volatility contagion.
- **Affine jump-diffusion intensity**: $d\lambda = \kappa(\theta - \lambda)\, dt + \xi\sqrt{\lambda}\, dW + dJ$ where $J$ is a compound Poisson jump process.
- **Marked Cox process**: Attach trade sizes or loss-given-default as marks whose distribution depends on $\lambda$ (wrong-way risk modeling).

## Practical Applications

1. **Credit Default Swaps**: CDS pricing requires $\mathbb{P}(\tau > T)$ for various maturities; CIR Cox processes provide closed-form survival curves calibrated to the spread curve.
2. **CDO Tranche Pricing**: Correlated Cox processes (via common factor intensity) model joint default clustering; combined with [[copula-models]] for cross-sectional dependence.
3. **High-Frequency Order Flow**: Hawkes-Cox models fit the empirical overdispersion and clustering of trade arrivals in equity and FX markets.
4. **Loan Default Modeling**: Bank loan portfolios use stochastic intensity models for PD (probability of default) term structure estimation under IFRS 9.
5. **Insurance Catastrophe**: Claims arrival driven by a storm-severity intensity process; Cox framework accommodates seasonal and regime-dependent intensity.

## Related Topics
- [[levy-processes]]
- [[cs01]]
- [[copula-models]]
- [[brownian-motion]]
- [[avellaneda-stoikov]]

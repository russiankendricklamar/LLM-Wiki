---
title: "Hawkes Process"
category: "Stochastic Processes"
order: 101
lang: "en"
---
# Hawkes Process

A **Hawkes process** is a class of self-exciting point processes where the occurrence of an event increases the probability of future events in the short term. Unlike a standard Poisson process where events are independent, Hawkes processes capture the "clustering" behavior often observed in financial markets, such as trade arrivals, volatility bursts, and credit default cascades. The process was introduced by Alan Hawkes in 1971.

## Background

Market microstructure data — tick-by-tick trade arrivals, order book events, default notices — does not arrive at a constant rate. Events cluster: a large trade triggers further trades, a default provokes contagion. The Hawkes process provides a tractable probabilistic model for this self-exciting behavior, bridging point process theory and practical finance applications.

## Mathematical Definition

The intensity function $\lambda(t)$ of a univariate Hawkes process is:

$$
\lambda(t) = \mu + \int_{-\infty}^t \phi(t-s)\, dN(s) = \mu + \sum_{T_i < t} \phi(t - T_i)
$$

Where:
- $\mu > 0$ is the **baseline intensity** (exogenous, background event rate).
- $\phi(\tau) \geq 0$ is the **excitation kernel** — the contribution of a past event at lag $\tau$.
- $T_i$ are the timestamps of all previous events.

The exponential kernel is the most common choice:

$$
\phi(\tau) = \alpha e^{-\beta \tau}, \quad \alpha, \beta > 0
$$

giving a simple recursive update: $\lambda(t^+) = \lambda(t^-) + \alpha$ at each event, then decaying at rate $\beta$.

## Stationarity Condition

For a stationary Hawkes process, the **branching ratio** must satisfy:

$$
n = \int_0^\infty \phi(\tau)\, d\tau = \frac{\alpha}{\beta} < 1
$$

The branching ratio $n$ is the expected number of secondary events triggered by each primary event. When $n \geq 1$, the process is non-stationary (supercritical) and events accumulate without bound — a model for financial contagion or market instability.

The stationary mean intensity is:

$$
\bar{\lambda} = \frac{\mu}{1 - n} = \frac{\mu}{1 - \alpha/\beta}
$$

## Multivariate Extension

For $M$ interacting event types (e.g., buy orders, sell orders, cancellations), the multivariate Hawkes process has intensity vector:

$$
\lambda_i(t) = \mu_i + \sum_{j=1}^M \int_{-\infty}^t \phi_{ij}(t-s)\, dN_j(s)
$$

The $M \times M$ kernel matrix $\Phi$ captures cross-excitation: a sell order may excite future sell orders ($\phi_{22}$) but also inhibit buy orders ($\phi_{12}$, if negative — though standard Hawkes requires $\phi \geq 0$; inhibition requires Hawkes with inhibition extensions).

## Compensator and Likelihood

The **compensator** (expected number of events up to $t$) is:

$$
\Lambda(t) = \int_0^t \lambda(s)\, ds
$$

The log-likelihood for observed event times $\{T_1, \dots, T_n\}$ on $[0, T]$ is:

$$
\ell = \sum_{i=1}^n \ln \lambda(T_i) - \Lambda(T)
$$

For the exponential kernel, $\Lambda(T)$ has a closed form, making MLE tractable via standard optimisation routines.

## Python: Simulating a Hawkes Process

```python
import numpy as np
from typing import Tuple

def simulate_hawkes(
    mu: float,
    alpha: float,
    beta: float,
    T: float,
    seed: int = 42,
) -> np.ndarray:
    """
    Simulate a univariate Hawkes process using Ogata's thinning algorithm.

    Args:
        mu:    baseline intensity
        alpha: jump size at each event
        beta:  decay rate of excitation
        T:     time horizon

    Returns:
        array of event timestamps
    """
    rng = np.random.default_rng(seed)
    t = 0.0
    events = []
    lambda_star = mu          # current upper bound on intensity

    while t < T:
        # Draw next candidate time from homogeneous Poisson with rate lambda_star
        t += rng.exponential(1.0 / lambda_star)
        if t > T:
            break

        # Recompute actual intensity at t
        past = np.array(events)
        lambda_t = mu + np.sum(alpha * np.exp(-beta * (t - past))) if len(past) > 0 else mu

        # Accept/reject (thinning)
        if rng.random() <= lambda_t / lambda_star:
            events.append(t)
            lambda_star = lambda_t + alpha   # intensity jumps at accepted event
        else:
            lambda_star = lambda_t           # update upper bound

    return np.array(events)


def estimate_branching_ratio(events: np.ndarray, alpha: float, beta: float) -> float:
    return alpha / beta


# Simulate and summarise
events = simulate_hawkes(mu=0.5, alpha=0.6, beta=1.2, T=100.0)
n = estimate_branching_ratio(events, alpha=0.6, beta=1.2)
print(f"Events simulated:  {len(events)}")
print(f"Branching ratio n: {n:.3f}  ({'stationary' if n < 1 else 'supercritical'})")
print(f"Mean inter-event:  {np.diff(events).mean():.3f}")
```

## Event Intensity Over Time

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "0",  "intensity": 0.5},
    {"time": "2",  "intensity": 0.5},
    {"time": "2",  "intensity": 1.1},
    {"time": "4",  "intensity": 0.7},
    {"time": "4",  "intensity": 1.3},
    {"time": "5",  "intensity": 1.8},
    {"time": "6",  "intensity": 1.2},
    {"time": "8",  "intensity": 0.7},
    {"time": "10", "intensity": 0.5}
  ],
  "lines": [
    {"dataKey": "intensity", "stroke": "#8b5cf6", "name": "λ(t) — Hawkes Intensity"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Range |
|--------|------|-------------|---------------|
| $\mu$ | Baseline intensity | Background event rate | 0.01–1.0 |
| $\alpha$ | Jump size | Intensity increase per event | 0.1–0.9 |
| $\beta$ | Decay rate | Speed of excitation decay | 1–50 (in minutes) |
| $n = \alpha/\beta$ | Branching ratio | Sub-critical: $<1$; critical: $=1$ | $<1$ for stationarity |
| $\bar{\lambda}$ | Mean intensity | Long-run average event rate | $\mu/(1-n)$ |

## Calibration

MLE on tick data:
1. Collect event timestamps $\{T_i\}$ from exchange feed.
2. Maximise log-likelihood $\ell(\mu, \alpha, \beta)$ using `scipy.optimize.minimize` with gradient computed analytically or via automatic differentiation.
3. Validate: residual inter-arrival times $\{\Lambda(T_{i+1}) - \Lambda(T_i)\}$ should be i.i.d. Exp(1) under the fitted model (Papangelou's conditional intensity theorem).

## Limitations and Extensions

- **Exponential kernel assumption**: Real excitation may decay slower (power-law kernel); the **Zumbach effect** in equity markets shows long-memory excitation requiring fractional kernels.
- **Stationarity requirement**: Financial crises push $n$ above 1 temporarily; non-stationary Hawkes models or regime-switching specifications are needed.
- **Hawkes with inhibition**: Standard formulation forbids $\phi < 0$; extensions allow negative kernels to model market-making behaviour where large orders temporarily suppress further activity.
- **Neural Hawkes**: Deep learning parameterizations of the intensity function (e.g., LSTM-based intensity) capture complex non-linear excitation patterns in high-frequency data.

## Financial Applications

1. **Order book dynamics**: Model limit and market order arrivals; estimate the self-excitation in aggressive order flow to infer short-term price impact.
2. **Flash crashes**: A supercritical episode ($n \to 1$) as a model for feedback loops in automated trading; Hawkes provides early-warning signals.
3. **Volatility clustering**: Since events beget events, the Hawkes process naturally generates burst activity consistent with GARCH-like volatility in continuous time.
4. **Credit default cascades**: Multivariate Hawkes models the network contagion of defaults across counterparties in an interbank network.
5. **News impact**: Model the cluster of trades following an earnings announcement; $\mu$ jumps at news time, then excitation decays.

## Related Topics
- [[monte-carlo-method]]
- [[cox-process]]
- [[garch-models]]
- [[geometric-brownian-motion]]

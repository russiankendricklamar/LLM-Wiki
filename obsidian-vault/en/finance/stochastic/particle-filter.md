---
slug: "/finance/particle-filter"
title: "Particle Filter (SMC)"
category: "Algorithms and ML"
order: 26
lang: "en"
---
# Particle Filter (SMC)

A **Particle Filter**, also known as **Sequential Monte Carlo** (SMC), is a sophisticated signal processing algorithm that uses a set of "particles" (random samples) to represent the posterior distribution of a system's hidden state.

Unlike the classical Kalman Filter, the Particle Filter does not require the system to be linear or the noise to be Gaussian. This flexibility makes it ideal for modeling complex financial processes such as stochastic volatility, regime switching, or non-linear asset dynamics.

## Prerequisites

[[monte-carlo-method]], [[hidden-markov-models]]

## Background and Motivation

The Kalman filter (1960) provides the optimal linear estimator for Gaussian linear state-space models — but financial systems are neither linear nor Gaussian. Volatility clustering, fat-tailed distributions, and regime shifts all violate Kalman assumptions. The particle filter, developed systematically by Gordon, Salmond, and Smith (1993) and extended by Doucet et al. (2000), solves the general nonlinear non-Gaussian filtering problem by approximating the posterior distribution with a weighted set of samples.

In finance, particle filters are used to track latent volatility in stochastic volatility models (Heston, SABR), estimate hidden Markov regimes, and perform online Bayesian parameter learning as market conditions evolve.

## State-Space Formulation

The general state-space model consists of:

**Transition equation** (hidden state dynamics):
$$
x_t = f(x_{t-1}, v_t), \quad v_t \sim p_v
$$

**Observation equation** (observable data given hidden state):
$$
y_t = h(x_t, w_t), \quad w_t \sim p_w
$$

The goal is to compute the filtering distribution $p(x_t | y_{1:t})$ recursively as new observations $y_t$ arrive.

## Mathematical Framework

The posterior density $p(x_t | y_{1:t})$ is approximated by $N$ weighted particles:

$$
p(x_t | y_{1:t}) \approx \sum_{i=1}^{N} w_t^{(i)}\, \delta(x_t - x_t^{(i)})
$$

Where $x_t^{(i)}$ is the state of the $i$-th particle and $w_t^{(i)}$ is its normalized weight.

### Importance Weight Update

When a new observation $y_t$ arrives, particle weights are updated by the likelihood:

$$
w_t^{(i)} \propto w_{t-1}^{(i)} \cdot p(y_t | x_t^{(i)})
$$

After normalization: $\tilde{w}_t^{(i)} = w_t^{(i)} / \sum_j w_t^{(j)}$.

### Effective Sample Size

Weight degeneracy is monitored via the effective sample size:

$$
\text{ESS}_t = \frac{1}{\sum_{i=1}^N (\tilde{w}_t^{(i)})^2}
$$

When $\text{ESS}_t < N/2$, resampling is triggered.

## Algorithm: Bootstrap Particle Filter

1. **Initialize**: Sample $x_0^{(i)} \sim p(x_0)$, set $w_0^{(i)} = 1/N$.
2. **For each time step $t = 1, 2, \ldots$:**
   - **Predict**: Propagate each particle: $x_t^{(i)} \sim p(x_t | x_{t-1}^{(i)})$
   - **Update**: Compute likelihood weights: $w_t^{(i)} \propto p(y_t | x_t^{(i)})$
   - **Normalize**: $\tilde{w}_t^{(i)} = w_t^{(i)} / \sum_j w_t^{(j)}$
   - **Resample** if $\text{ESS}_t < N/2$: draw $N$ indices from the discrete distribution $\{\tilde{w}_t^{(i)}\}$

## Applications in Finance

- **Volatility Estimation**: Inferring instantaneous volatility (as in the Heston model) from observed market prices.
- **Hidden State Tracking**: Estimating latent macroeconomic variables or unobserved interest rate factors.
- **Regime Detection**: Tracking hidden market regimes (bull/bear, high/low vol) in real time as new price data arrives.
- **Risk Management**: Pricing and risk-adjusting portfolios with non-linear instruments (options) under non-Gaussian fat-tailed distributions.
- **Online Parameter Estimation**: Using SMC² (particle filter over both states and parameters) for continuous model recalibration.

## Python: Stochastic Volatility Tracking

```python
import numpy as np


def bootstrap_particle_filter(observations, n_particles=2000,
                               phi=0.98, sigma_v=0.15, mu_v=-0.5, seed=42):
    """
    Track log-volatility in a discrete stochastic volatility model:
        v_t = phi * v_{t-1} + sigma_v * eta_t,  eta_t ~ N(0,1)
        y_t = exp(v_t / 2) * epsilon_t,          epsilon_t ~ N(0,1)

    phi: persistence of log-volatility
    sigma_v: volatility of log-volatility
    mu_v: long-run mean of log-volatility
    Returns (filtered_vol_mean, filtered_vol_std) arrays.
    """
    np.random.seed(seed)
    T = len(observations)

    # Initialize particles from stationary distribution of log-vol
    stationary_std = sigma_v / np.sqrt(1 - phi**2)
    particles = np.random.normal(mu_v, stationary_std, n_particles)
    weights = np.ones(n_particles) / n_particles

    filtered_mean = np.zeros(T)
    filtered_std = np.zeros(T)

    for t in range(T):
        # 1. Predict: propagate log-volatility
        particles = phi * (particles - mu_v) + mu_v + \
                    sigma_v * np.random.standard_normal(n_particles)

        # 2. Update: likelihood of observed return given log-vol
        inst_vol = np.exp(particles / 2)
        log_likelihood = -0.5 * (observations[t] / inst_vol)**2 - np.log(inst_vol)
        # Numerically stable weight update
        log_weights = np.log(weights + 1e-300) + log_likelihood
        log_weights -= np.max(log_weights)
        weights = np.exp(log_weights)
        weights /= weights.sum()

        # 3. Compute filtered estimate
        filtered_mean[t] = np.dot(weights, np.exp(particles / 2))
        filtered_std[t] = np.sqrt(
            np.dot(weights, np.exp(particles)) - filtered_mean[t]**2
        )

        # 4. Resample if ESS too low
        ess = 1.0 / np.sum(weights**2)
        if ess < n_particles / 2:
            indices = np.random.choice(n_particles, size=n_particles, p=weights)
            particles = particles[indices]
            weights = np.ones(n_particles) / n_particles

    return filtered_mean, filtered_std


# Generate synthetic stochastic volatility data
np.random.seed(42)
T = 500
true_log_vol = np.zeros(T)
true_log_vol[0] = -0.5
for t in range(1, T):
    true_log_vol[t] = 0.98 * true_log_vol[t-1] + 0.15 * np.random.normal()

returns = np.exp(true_log_vol / 2) * np.random.standard_normal(T)

# Run particle filter
vol_est, vol_std = bootstrap_particle_filter(returns)

# Evaluate tracking quality
true_vol = np.exp(true_log_vol / 2)
rmse = np.sqrt(np.mean((vol_est - true_vol)**2))
print(f"Particle filter RMSE: {rmse:.4f}")
print(f"Mean estimated vol: {vol_est.mean():.4f}")
print(f"Mean true vol: {true_vol.mean():.4f}")
```

## Particle Cloud Visualization

```chart
{
  "type": "scatter",
  "xAxis": "state",
  "data": [
    {"state": 98.5, "weight": 0.05},
    {"state": 99.2, "weight": 0.15},
    {"state": 100.1, "weight": 0.45},
    {"state": 100.8, "weight": 0.25},
    {"state": 101.5, "weight": 0.10}
  ],
  "lines": [
    {"dataKey": "weight", "stroke": "#10b981", "name": "Particle Weight"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Value |
|:---|:---|:---|:---|
| $N$ | Number of particles | More particles = better approximation | $1{,}000 – 10{,}000$ |
| ESS threshold | Resampling trigger | Fraction of $N$ | $N/2$ |
| $\phi$ | Vol persistence | AR(1) coefficient for log-vol | $0.95 – 0.99$ |
| $\sigma_v$ | Vol-of-vol | Diffusion of log-volatility | $0.10 – 0.30$ |

## Comparison

| Feature | Particle Filter | Kalman Filter |
| :--- | :--- | :--- |
| **Linearity** | Any (Non-linear) | Strictly Linear |
| **Distributions** | Any (Non-Gaussian) | Strictly Gaussian |
| **Computation** | High (Scales with N) | Very Low |
| **Accuracy** | Asymptotically Optimal | Optimal only for Linear/Gaussian |
| **Degeneracy** | Resampling required | Not applicable |

## Limitations and Extensions

- **Curse of dimensionality**: Particle filters degrade rapidly as the state dimension grows — in $d > 10$ dimensions, an exponentially large number of particles is needed.
- **Sample impoverishment**: After many resampling steps, particle diversity collapses. MCMC move steps (PMCMC) after resampling help rejuvenate the particle cloud.
- **SMC²**: A nested particle filter that simultaneously estimates both latent states and model parameters online, enabling continuous Bayesian recalibration as market conditions evolve.
- **Auxiliary particle filter**: Improves efficiency by looking ahead at the observation before propagating, dramatically reducing weight variance.

## Related Topics
- [[heston-model]]
- [[monte-carlo-method]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[ornstein-uhlenbeck-process]]

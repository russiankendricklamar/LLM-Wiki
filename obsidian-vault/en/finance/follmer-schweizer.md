---
title: "Quadratic Hedging and the Föllmer-Schweizer Approach"
category: "Pricing Models"
order: 85
lang: "en"
---

# Quadratic Hedging and the Föllmer-Schweizer Approach

**Quadratic hedging** is the family of pricing and hedging methods for **incomplete markets** that minimise mean-squared replication error. The Föllmer-Schweizer (1989–1991) framework identifies the *locally risk-minimising* strategy and its associated **Minimal Martingale Measure (MMM)** — an alternative to the Black-Scholes risk-neutral measure when perfect replication is impossible.

## Motivation: Incomplete Markets

In the Black-Scholes world every payoff is perfectly replicated. In practice:
- **Stochastic volatility** (Heston) — no liquid vol market to complete it
- **Jumps** — cannot hedge instantaneous jump
- **Discrete trading** — continuous delta-hedge is infeasible

In incomplete markets there is a continuum of equivalent martingale measures (EMMs), each giving a different "fair" price.

## Local Risk-Minimisation (Schweizer 1991)

**Cost process** of strategy $(\theta_t, \eta_t)$:

$$
C_t = V_t - \int_0^t \theta_s \, dS_s
$$

A strategy *locally minimises risk* if $C_t$ is a martingale and $\theta_t$ minimises:

$$
E\!\left[(dC_t)^2 \mid \mathcal{F}_t\right]
$$

at every $t$.

## Föllmer-Schweizer Decomposition

For any square-integrable claim $H$:

$$
H = H_0 + \int_0^T \xi_t^H \, dS_t + L_T^H
$$

where:
- $H_0 = E^{\tilde{P}}[H]$ — initial value under the MMM $\tilde{P}$
- $\xi_t^H$ — optimal (predictable) hedging strategy
- $L_T^H$ — orthogonal residual: $\langle L^H, S \rangle = 0$

## Minimal Martingale Measure

For $dS_t = \mu_t S_t \, dt + \sigma_t S_t \, dW_t$, the MMM $\tilde{P}$ is defined by:

$$
\frac{d\tilde{P}}{dP}\bigg|_T = \exp\!\left(-\int_0^T \lambda_t \, dW_t - \frac{1}{2}\int_0^T \lambda_t^2 \, dt\right), \quad \lambda_t = \frac{\mu_t}{\sigma_t}
$$

**Key property**: under $\tilde{P}$, $S_t/B_t$ is a martingale, and orthogonal components remain martingales. No additional "distortion" of the probability structure is introduced beyond what is necessary for risk-neutrality.

## Mean-Variance Hedging

An alternative global criterion:

$$
\min_{V_0,\theta}\; E\!\left[\!\left(H - V_0 - \int_0^T \theta_t \, dS_t\right)^{\!2}\right]
$$

The solution uses the **variance-optimal martingale measure** $\hat{P}$ — a different EMM, generally distinct from the MMM.

## Discrete Approximation

```python
import numpy as np

def mean_variance_hedge_discrete(
    S_paths: np.ndarray,
    payoffs: np.ndarray
) -> tuple[float, np.ndarray]:
    """
    Mean-variance hedge via per-step OLS.

    S_paths : (n_sims, T+1) — asset price scenarios
    payoffs : (n_sims,)     — terminal payoffs

    Returns: (V0_optimal, theta_per_step: (T,))
    """
    n_sims, T1 = S_paths.shape
    T = T1 - 1
    dS = np.diff(S_paths, axis=1)   # (n_sims, T)

    thetas = np.zeros(T)
    for t in range(T):
        X = np.column_stack([np.ones(n_sims), dS[:, t]])
        y = payoffs if t == T-1 else dS[:, t]
        coeffs, *_ = np.linalg.lstsq(X, y, rcond=None)
        thetas[t] = coeffs[1]

    V0 = np.mean(payoffs) - np.dot(thetas, dS.mean(axis=0))
    return float(V0), thetas


def local_risk_minimising_delta(
    S_path: np.ndarray,
    payoff_fn,
    sigma: float,
    dt: float,
) -> np.ndarray:
    """
    Finite-difference approximation to the FS optimal hedge.
    payoff_fn: function (price -> payoff value at that node)
    """
    T = len(S_path) - 1
    eps_frac = 0.01
    theta = np.zeros(T)
    for t in range(T):
        eps = S_path[t] * eps_frac
        theta[t] = (payoff_fn(S_path[t] + eps) -
                    payoff_fn(S_path[t] - eps)) / (2 * eps)
    return theta
```

## Methods Comparison

| Approach | Criterion | Measure | Market |
|----------|-----------|---------|--------|
| Black-Scholes | Zero replication error | Unique $Q^*$ | Complete |
| Local risk-min (FS) | Minimum instantaneous residual risk | MMM $\tilde{P}$ | SV, jumps |
| Mean-variance hedge | Minimum global $E[(H-\hat H)^2]$ | Variance-optimal $\hat P$ | Discrete trading |
| Superhedging | Guaranteed coverage | Sup of EMMs | Conservative |
| Utility indifference | Maximum expected utility | Depends on $U$ | General incomplete |

## Related Articles

- [[heston-model|Heston Model]] — stochastic vol; MMM ≠ risk-neutral measure
- [[black-scholes|Black-Scholes Model]] — complete market baseline
- [[numeraire-invariant-hedging|Numéraire-Invariant Hedging]] — change-of-numéraire generalisation
- [[monte-carlo-method|Monte Carlo Method]] — simulate FS strategies
- [[longstaff-schwartz|Longstaff-Schwartz Algorithm]] — American options in incomplete markets

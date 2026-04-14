---
title: "Adversarial Stress Testing"
category: "Risk Management"
order: 69
lang: "en"
---
# Adversarial Stress Testing via Generative Models

**Adversarial Stress Testing** is a modern risk management technique that uses generative models (like GANs or VAEs) to identify the "worst-case" scenarios that are both plausible and damaging to a specific portfolio. Unlike traditional stress tests (e.g., "replaying 2008"), adversarial tests adapt to the portfolio's specific vulnerabilities.

## Prerequisites

[[value-at-risk]], [[monte-carlo-method]], [[extreme-value-theory]]

## Overview & Background

Traditional stress testing involves applying historical scenarios (e.g., the 2008 financial crisis, the 1987 Black Monday crash, or the COVID-19 selloff) to a portfolio and measuring losses. While useful, historical scenarios are backward-looking and cannot anticipate novel market configurations that could be particularly damaging to a given portfolio's specific exposures.

Adversarial stress testing emerged from the confluence of adversarial machine learning — initially developed for robust computer vision — and quantitative risk management. The core insight is that a portfolio has "hidden vulnerabilities": combinations of factor moves that are statistically plausible but have never occurred historically, yet would produce catastrophic losses. Generative AI can search this high-dimensional space efficiently.

The framework gained regulatory attention after Basel III recognized that internal model validation must go beyond back-testing. The European Banking Authority (EBA) and the Federal Reserve's CCAR (Comprehensive Capital Analysis and Review) have both moved toward requiring institutions to demonstrate scenario discovery capabilities, not just scenario application.

## Mathematical Framework

The adversarial stress test is formulated as a constrained optimization problem. Let $\mathcal{H}$ denote the empirical distribution of historical market returns and $P$ the current portfolio. The adversarial scenario $s^*$ solves:

$$
s^* = \arg\max_{s \in \mathcal{S}} \; \mathcal{L}(P, s)
$$

subject to the plausibility constraint:

$$
\mathcal{D}(s, \mathcal{H}) \leq \epsilon
$$

Where:
- $\mathcal{L}(P, s)$ is the portfolio loss function under scenario $s$
- $\mathcal{S}$ is the feasible scenario space (e.g., $\mathbb{R}^d$ for $d$ risk factors)
- $\mathcal{D}$ is a divergence or distance metric between the scenario distribution and history
- $\epsilon$ controls the "plausibility budget" — how far the adversarial scenario can deviate from history

The **Wasserstein distance** (earth-mover's distance) is the preferred metric for $\mathcal{D}$ because it metrizes the space of probability distributions and has geometric meaning:

$$
W_1(\mu, \nu) = \inf_{\gamma \in \Gamma(\mu, \nu)} \int \|x - y\| \, d\gamma(x, y)
$$

This replaces the simpler KL-divergence $D_{KL}(\mu \| \nu) = \int \mu \log \frac{\mu}{\nu}$ which cannot handle distributions with disjoint supports.

For a portfolio with weights $w \in \mathbb{R}^n$, the loss under scenario $s \in \mathbb{R}^n$ is:

$$
\mathcal{L}(P, s) = -w^T s = -\sum_{i=1}^n w_i s_i
$$

The gradient of $\mathcal{L}$ with respect to scenario $s$ is simply $-w$, meaning the locally worst scenario always moves against the portfolio weights — a useful initialization for gradient-based search.

## GAN-Based Scenario Generation

Generative Adversarial Networks ([[gan]]) provide a natural architecture for adversarial stress testing. The **Generator** $G(z; \theta_G)$ maps latent noise $z \sim \mathcal{N}(0, I)$ to synthetic market scenarios. The **Discriminator** $D(s; \theta_D)$ distinguishes real historical scenarios from generated ones.

The adversarial stress testing loss modifies the standard GAN objective:

$$
\mathcal{L}_{stress} = \underbrace{\mathbb{E}[\log D(s_{real})] + \mathbb{E}[\log(1 - D(G(z)))]}_{\text{standard GAN}} - \lambda \underbrace{\mathbb{E}[\mathcal{L}(P, G(z))]}_{\text{portfolio damage term}}
$$

The hyperparameter $\lambda$ balances realism (Discriminator guidance) against adversarial potency (portfolio damage). High $\lambda$ generates maximally damaging scenarios that may not be realistic; low $\lambda$ generates realistic scenarios that are not particularly adversarial.

## Key Properties & Assumptions

- **Portfolio-specificity**: Adversarial scenarios are tailored to the current portfolio's exposures, not generic market crashes. A long-tech, short-energy portfolio requires a different adversarial scenario than a long-credit, short-rates portfolio.
- **Plausibility constraint**: Without the constraint $\mathcal{D}(s, \mathcal{H}) \leq \epsilon$, the optimizer trivially finds infinite-loss scenarios (e.g., all stocks drop 100%). The constraint is the critical ingredient.
- **Stationarity assumption**: The historical distribution $\mathcal{H}$ is assumed to span the relevant risk regimes. If the market has undergone a structural break, the adversarial search space may be miscalibrated.
- **Convexity**: If $\mathcal{L}(P, s)$ is convex in $s$ and $\mathcal{D}$ defines a convex feasible set, the optimization has global optima; otherwise, gradient-based methods find local optima.
- **Dimensionality**: In high-dimensional factor spaces ($d > 100$), the curse of dimensionality makes it difficult to estimate $\mathcal{D}$ from limited historical data.

## Python Implementation

```python
import numpy as np
from scipy.optimize import minimize
from scipy.spatial.distance import cdist

def portfolio_loss(scenario: np.ndarray, weights: np.ndarray) -> float:
    """Negative portfolio return under a market scenario."""
    return -np.dot(scenario, weights)

def wasserstein_approx(scenario: np.ndarray, history: np.ndarray) -> float:
    """
    Approximate 1-Wasserstein distance between scenario and history.
    Uses nearest-neighbor heuristic: min distance to any historical point.
    """
    dists = cdist(scenario.reshape(1, -1), history, metric='euclidean')
    return float(dists.min())

def adversarial_stress_test(
    weights: np.ndarray,
    history: np.ndarray,
    epsilon: float = 0.05,
    n_restarts: int = 10
) -> dict:
    """
    Find the worst-case plausible scenario for a given portfolio.

    Returns scenario, loss, and distance from history.
    """
    n_assets = len(weights)
    best_result = None

    for _ in range(n_restarts):
        # Initialize from a random historical scenario
        idx = np.random.randint(len(history))
        x0 = history[idx].copy()

        def objective(s):
            return portfolio_loss(s, weights)

        def constraint(s):
            return epsilon - wasserstein_approx(s, history)

        result = minimize(
            objective,
            x0,
            method='SLSQP',
            constraints={'type': 'ineq', 'fun': constraint},
            options={'ftol': 1e-8, 'maxiter': 500}
        )

        if best_result is None or result.fun < best_result.fun:
            best_result = result

    return {
        'scenario': best_result.x,
        'loss': -best_result.fun,  # Convert back to loss (positive = bad)
        'distance': wasserstein_approx(best_result.x, history)
    }

# Example: 3-asset portfolio
np.random.seed(42)
history = np.random.multivariate_normal(
    mean=[0.001, 0.0005, 0.002],
    cov=[[0.04, 0.02, 0.01],
         [0.02, 0.03, 0.015],
         [0.01, 0.015, 0.025]],
    size=500
)

weights = np.array([0.5, 0.3, 0.2])
result = adversarial_stress_test(weights, history, epsilon=0.1)
```

## Stress Loss Comparison

```chart
{
  "type": "bar",
  "xAxis": "scenario",
  "data": [
    {"scenario": "Historical 5th %ile", "loss": 2.1},
    {"scenario": "Historical 1st %ile", "loss": 3.8},
    {"scenario": "2008 Replay", "loss": 5.2},
    {"scenario": "Adversarial (ε=0.05)", "loss": 7.4},
    {"scenario": "Adversarial (ε=0.10)", "loss": 9.1}
  ],
  "bars": [
    {"dataKey": "loss", "fill": "#ef4444", "name": "Portfolio Loss (%)"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---:|:---|:---|
| $\epsilon$ | Plausibility budget | Max distance from historical distribution | 0.01 – 0.20 |
| $\lambda$ | Adversarial weight | Balance between realism and damage | 0.1 – 10.0 |
| $d$ | Factor dimension | Number of risk factors / assets | 10 – 500 |
| $\mathcal{D}$ | Distance metric | Wasserstein, KL, or Maximum Mean Discrepancy | — |
| $n_{restart}$ | Optimization restarts | Guards against local optima | 10 – 50 |

## Limitations & Extensions

**Limitations:**
- Computational cost scales poorly with portfolio dimension and history size.
- The choice of distance metric $\mathcal{D}$ significantly affects which scenarios are "plausible."
- Adversarial scenarios may be plausible in a statistical sense but economically nonsensical (e.g., all assets move in ways that violate no-arbitrage).
- If the generator lacks capacity to represent all tail events, the search is blind to catastrophic but statistically rare scenarios.

**Extensions:**
- **Conditional adversarial testing**: Condition on a specific macro shock (e.g., "given a 25 bp Fed hike, what is the worst correlated equity scenario?").
- **Sequential adversarial testing**: Model multi-day scenarios where each day's adversarial scenario conditions on the previous day's moves.
- **Distributional robustness**: Instead of a single worst scenario, find the worst-case distribution over scenarios (DRO — Distributionally Robust Optimization).

## Practical Applications

1. **Portfolio Robustness Testing**: A hedge fund can identify whether its risk limits (stop-losses, VaR constraints) are sufficient under adversarial conditions that fall within the plausibility budget.
2. **Regulatory Compliance**: Going beyond standard Basel III/IV stress tests to demonstrate proactive, portfolio-specific risk management capabilities to regulators.
3. **Model Validation**: Testing if a trading algorithm's stop-losses and risk limits actually trigger in unprecedented but statistically realistic market regimes — rather than only on replayed historical scenarios.
4. **Counterparty Risk**: Identifying adversarial scenarios under which multiple counterparties simultaneously default, testing XVA calculations beyond standard wrong-way risk assumptions.
5. **Concentrated Position Management**: For investors with large single-stock positions, adversarial search reveals what correlated market moves would most impair portfolio value given the concentration.

## Related Topics
- [[gan]]
- [[value-at-risk]]
- [[extreme-value-theory]]
- [[copula-models]]
- [[convex-optimization-trading]]

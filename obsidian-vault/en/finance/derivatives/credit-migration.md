---
slug: "/finance/credit-migration"
title: "Credit Migration and Rating Transitions"
category: "Risk Management"
order: 82
lang: "en"
---
# Credit Migration and Rating Transitions

**Credit migration** describes the movement of obligors across rating categories over time. The **transition matrix** $\mathbf{P}$ captures these dynamics: entry $P_{ij}$ gives the probability of migrating from rating $i$ to rating $j$ over one period. Default is an absorbing state — once entered, no recovery of rating is possible. Transition matrices are foundational to credit portfolio models, regulatory capital (IFRS 9 staging, Basel IRB), and economic capital allocation.

## Transition Matrix Framework

### Discrete-Time Matrix

For $K$ rating grades (including default $D$), the one-year transition matrix is $K \times K$:

$$
\mathbf{P} = \begin{pmatrix} P_{AA,AA} & P_{AA,A} & \cdots & P_{AA,D} \\ P_{A,AA} & P_{A,A} & \cdots & P_{A,D} \\ \vdots & & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \end{pmatrix}
$$

Each row sums to one: $\sum_{j=1}^K P_{ij} = 1$. The last row reflects the absorbing state: $P_{D,D} = 1$.

Multi-year transitions are obtained by matrix powers:

$$
\mathbf{P}(n) = \mathbf{P}^n
$$

so $P_{ij}^{(n)}$ gives the $n$-year probability of migrating from $i$ to $j$.

### Continuous-Time Generator Matrix

For continuous-time modeling, the transition matrix is expressed via a **generator matrix** $\mathbf{Q}$:

$$
\mathbf{P}(t) = e^{\mathbf{Q}t}
$$

where $Q_{ij} \geq 0$ for $i \neq j$ are transition intensities and $Q_{ii} = -\sum_{j \neq i} Q_{ij}$. The generator allows computing transition probabilities for arbitrary horizons and avoids the problem of negative probabilities that can arise from naive matrix logarithms.

## CreditMetrics Framework

J.P. Morgan's **CreditMetrics** (1997) combines migration analysis with portfolio correlation to generate a full loss distribution.

### Asset Value Model

For each obligor $i$, the standardized asset return is:

$$
X_i = \sqrt{\rho}\, M + \sqrt{1-\rho}\, Z_i
$$

where $M \sim \mathcal{N}(0,1)$ is the systematic factor, $Z_i \sim \mathcal{N}(0,1)$ is idiosyncratic, and $\rho$ is the asset correlation. Rating migration occurs when $X_i$ crosses thresholds $\{c_{i,k}\}$ derived from the transition matrix:

$$
c_{i,k} = \Phi^{-1}\!\left(\sum_{j=1}^{k} P_{ij}\right)
$$

If $c_{i,k-1} < X_i \leq c_{i,k}$, obligor $i$ migrates to rating $k$.

### Bond Revaluation

At the horizon, each obligor is assigned its new rating. The bond is revalued using the forward spread curve for the new rating:

$$
V_{\text{new}} = \sum_{t=1}^{T} \frac{C}{(1 + r_t + s_t^{(\text{new})})^t} + \frac{F}{(1 + r_T + s_T^{(\text{new})})^T}
$$

For defaulted obligors, $V_{\text{new}} = R \cdot F$ where $R$ is the recovery rate. The portfolio loss distribution is built by Monte Carlo simulation over the correlated asset returns.

## Estimation Methods

### Cohort Method

Group obligors by rating at the start of each year. Count transitions:

$$
\hat{P}_{ij} = \frac{N_{ij}}{\sum_j N_{ij}}
$$

Simple and widely used (Moody's, S&P annual studies). Biased if obligors enter/leave mid-year.

### Duration (Hazard Rate) Method

Treats observation time continuously. The transition intensity:

$$
\hat{Q}_{ij} = \frac{N_{ij}}{\int_0^T n_i(t)\,dt}
$$

where $n_i(t)$ is the number of obligors in state $i$ at time $t$. Then $\mathbf{P}(t) = e^{\hat{\mathbf{Q}}t}$. Handles right-censoring and varying exposure periods correctly.

## Through-the-Cycle vs Point-in-Time

**Through-the-cycle (TTC)** ratings reflect long-run average default risk, smoothing over the business cycle. **Point-in-time (PIT)** ratings capture current conditions. Implications:

$$
PD_{\text{PIT}}(t) = PD_{\text{TTC}} \cdot \exp(\beta \cdot \text{cycle}(t))
$$

TTC matrices are more stable but lag reality; PIT matrices are responsive but volatile. Basel IRB uses TTC PDs for capital; IFRS 9 requires PIT PDs for expected credit loss (ECL) provisioning.

## Rating Momentum

Empirical evidence shows that recently downgraded obligors face higher subsequent downgrade probability than rating-stable peers at the same level — the **momentum** or **drift** effect. This violates the Markov assumption and can be modeled via:

- Expanded state space: separate states for "A-stable" vs "A-recently-downgraded"
- Duration-dependent hazard rates
- Hidden Markov models with latent credit quality

## IFRS 9 Staging Application

IFRS 9 classifies assets into three stages based on credit deterioration since origination:

| Stage | Criterion | ECL Measurement |
|:------|:----------|:----------------|
| 1 | No significant increase in credit risk | 12-month ECL |
| 2 | Significant increase (e.g., 2+ notch downgrade) | Lifetime ECL |
| 3 | Credit-impaired (default) | Lifetime ECL |

Migration matrices drive staging transitions and lifetime PD curves for ECL calculation.

## Python Implementation

```python
import numpy as np
from scipy.linalg import expm, logm

def multi_year_transition(P: np.ndarray, n: int) -> np.ndarray:
    """Compute n-year transition matrix via matrix power."""
    return np.linalg.matrix_power(P, n)

def generator_from_transition(P: np.ndarray) -> np.ndarray:
    """Extract generator matrix Q from one-year P (may need regularization)."""
    Q = logm(P).real
    np.fill_diagonal(Q, 0)
    Q = np.maximum(Q, 0)
    np.fill_diagonal(Q, -Q.sum(axis=1))
    return Q

def credit_metrics_simulate(
    P: np.ndarray, rho: float, n_obligors: int,
    n_simulations: int = 50_000
) -> np.ndarray:
    """Simulate terminal ratings via CreditMetrics one-factor model."""
    K = P.shape[0]
    thresholds = np.zeros((K, K))
    for i in range(K):
        thresholds[i] = np.concatenate([
            [-np.inf],
            [float(x) for x in np.quantile(
                np.random.normal(size=100_000),
                np.cumsum(P[i, :-1])
            )],
        ])[:K]

    ratings = np.zeros((n_simulations, n_obligors), dtype=int)
    for s in range(n_simulations):
        M = np.random.normal()
        Z = np.random.normal(size=n_obligors)
        X = np.sqrt(rho) * M + np.sqrt(1 - rho) * Z
        for ob in range(n_obligors):
            init_rating = 0  # assume all start at top rating
            for k in range(K - 1, -1, -1):
                if X[ob] <= thresholds[init_rating, k]:
                    ratings[s, ob] = k
    return ratings
```

## Typical One-Year Transition Probabilities (%)

```chart
{
  "type": "bar",
  "xAxis": "from_rating",
  "data": [
    {"from_rating": "AAA", "upgrade": 0.0, "stable": 87.4, "downgrade": 12.3, "default": 0.0},
    {"from_rating": "AA", "upgrade": 0.6, "stable": 86.8, "downgrade": 12.1, "default": 0.02},
    {"from_rating": "A", "upgrade": 2.0, "stable": 86.9, "downgrade": 10.5, "default": 0.05},
    {"from_rating": "BBB", "upgrade": 3.8, "stable": 84.2, "downgrade": 11.0, "default": 0.18},
    {"from_rating": "BB", "upgrade": 5.5, "stable": 76.4, "downgrade": 16.0, "default": 1.06},
    {"from_rating": "B", "upgrade": 4.8, "stable": 73.1, "downgrade": 17.2, "default": 5.20}
  ],
  "lines": [
    {"dataKey": "stable", "stroke": "#3b82f6", "name": "Stable (%)"},
    {"dataKey": "downgrade", "stroke": "#ef4444", "name": "Downgrade (%)"},
    {"dataKey": "default", "stroke": "#1e1e1e", "name": "Default (%)"}
  ]
}
```

## Related Topics
- [[credit-derivatives-cds]]
- [[value-at-risk]]
- [[copula-models]]
- [[survival-risk-prediction]]
- [[hidden-markov-models]]

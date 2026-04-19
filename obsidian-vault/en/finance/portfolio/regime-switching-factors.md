---
title: "Regime-Switching Factor Strategies"
category: "Algorithms and ML"
order: 68
lang: "en"
slug: "regime-switching-factors"
---
# Regime-Switching Factor Strategies

Financial markets undergo structural shifts — called **regimes** — where the statistical properties of returns, correlations, and factor premia change dramatically. A factor strategy that performs well in a "Bull" regime (e.g., Momentum) may severely underperform or reverse in a "Crisis" regime. Regime-switching models use latent state variables to adapt factor exposures dynamically, producing more robust all-weather performance.

## Background

The seminal Hamilton (1989) regime-switching model applied to business cycles demonstrated that macro time series exhibit distinct states with different means and variances. Ang and Bekaert (2002) extended this to asset returns, showing that correlations spike during bear markets — precisely when diversification is most needed. Modern factor investing uses regime detection as a meta-layer on top of standard factor tilts.

## Mathematical Framework

### Hidden Markov Model (HMM) for Regimes

We assume the market occupies one of $K$ hidden states $S_t \in \{1, \dots, K\}$ at each time $t$. The state transition follows a first-order Markov chain:

$$
P(S_{t+1} = j \mid S_t = i) = p_{ij}, \quad \sum_{j=1}^K p_{ij} = 1
$$

The full transition matrix for $K = 3$ (Bear, Neutral, Bull):

$$
\mathbf{P} = \begin{pmatrix} p_{11} & p_{12} & p_{13} \\ p_{21} & p_{22} & p_{23} \\ p_{31} & p_{32} & p_{33} \end{pmatrix}
$$

Conditional on state $k$, observed factor returns follow:
$$
R_t \mid S_t = k \sim \mathcal{N}(\boldsymbol{\mu}_k, \boldsymbol{\Sigma}_k)
$$

### Filtering and Smoothing

The **filtered probability** $\xi_{t|t} = P(S_t = k \mid \mathcal{F}_t)$ is computed via the forward algorithm (Hamilton filter):

$$
\xi_{t|t} \propto \boldsymbol{\eta}_t \odot (\mathbf{P}^T \xi_{t-1|t-1})
$$

where $\boldsymbol{\eta}_t = [f(R_t \mid S_t=1, \theta), \dots, f(R_t \mid S_t=K, \theta)]^T$ is the vector of state-conditional likelihoods and $\odot$ denotes element-wise multiplication.

The **smoothed probability** $\xi_{t|T} = P(S_t = k \mid \mathcal{F}_T)$ uses all data via the backward pass (Kim 1994):

$$
\xi_{t|T} = \xi_{t|t} \odot \left(\mathbf{P} \frac{\xi_{t+1|T}}{\mathbf{P}^T \xi_{t|t}}\right)
$$

Parameters $\theta = \{\boldsymbol{\mu}_k, \boldsymbol{\Sigma}_k, \mathbf{P}\}$ are estimated by EM (Baum-Welch algorithm).

### Regime-Conditional Factor Betas

In a static factor model, $\mathbb{E}[R_{i,t}] = \alpha_i + \beta_i F_t$. In a regime-switching model, betas and alphas become state-dependent:

$$
R_{i,t} = \alpha_{i, S_t} + \beta_{i, S_t} F_t + \epsilon_{i,t}, \quad \epsilon_{i,t} \sim \mathcal{N}(0, \sigma_{i,S_t}^2)
$$

The optimal factor allocation uses the current filtered regime probability $\hat{\pi}_{k,t} = P(S_t = k \mid \mathcal{F}_t)$:

$$
\hat{\beta}_{i,t} = \sum_{k=1}^K \hat{\pi}_{k,t} \cdot \beta_{i,k}
$$

### Regime Persistence and Steady-State

The **expected duration** of regime $k$ is:
$$
d_k = \frac{1}{1 - p_{kk}}
$$

The **stationary distribution** $\boldsymbol{\pi}^* $ satisfies $\boldsymbol{\pi}^* = \mathbf{P}^T \boldsymbol{\pi}^*$ and gives the unconditional fraction of time spent in each regime.

## Key Properties

- **Identifiability**: States are identified by their emission distributions; label-switching is a common problem in MCMC estimation, requiring post-processing constraints (e.g., $\mu_1 < \mu_2 < \mu_3$).
- **Persistence**: Financial regimes are highly persistent ($p_{kk} \approx 0.90$–$0.98$), meaning the expected duration is 10–50 months for monthly data.
- **Correlation regimes**: Bear states exhibit significantly higher inter-asset correlations (contagion), making diversification less effective precisely when most needed.
- **Factor reversals**: Momentum factors exhibit negative expected returns in crisis regimes (momentum crashes); Low-Vol and Quality factors outperform.

## Python Implementation

```python
import numpy as np
from scipy.stats import multivariate_normal
from typing import Optional

class GaussianHMM:
    """
    Simple Gaussian HMM with EM (Baum-Welch) estimation.
    Suitable for univariate or multivariate financial return regimes.
    """

    def __init__(self, n_states: int = 3, n_iter: int = 100, tol: float = 1e-6):
        self.n_states = n_states
        self.n_iter = n_iter
        self.tol = tol

    def _init_params(self, X: np.ndarray) -> None:
        T, d = X.shape if X.ndim > 1 else (len(X), 1)
        X2 = X.reshape(T, d)
        K = self.n_states

        # Random initialization using k-means-like split
        idx = np.random.choice(T, K, replace=False)
        self.means_ = X2[idx].copy()
        self.covs_ = np.array([np.eye(d) * X2.var(axis=0).mean() for _ in range(K)])
        self.transmat_ = np.ones((K, K)) / K
        self.startprob_ = np.ones(K) / K

    def _emission_probs(self, X: np.ndarray) -> np.ndarray:
        T = len(X)
        X2 = X.reshape(T, -1)
        B = np.zeros((T, self.n_states))
        for k in range(self.n_states):
            B[:, k] = multivariate_normal.pdf(X2, mean=self.means_[k], cov=self.covs_[k])
        return np.clip(B, 1e-300, None)

    def _forward(self, B: np.ndarray) -> tuple:
        T, K = B.shape
        alpha = np.zeros((T, K))
        scale = np.zeros(T)
        alpha[0] = self.startprob_ * B[0]
        scale[0] = alpha[0].sum()
        alpha[0] /= scale[0]
        for t in range(1, T):
            alpha[t] = (alpha[t-1] @ self.transmat_) * B[t]
            scale[t] = alpha[t].sum()
            alpha[t] /= scale[t]
        return alpha, scale

    def _backward(self, B: np.ndarray, scale: np.ndarray) -> np.ndarray:
        T, K = B.shape
        beta = np.ones((T, K))
        for t in range(T - 2, -1, -1):
            beta[t] = (self.transmat_ * B[t+1] * beta[t+1]).sum(axis=1)
            beta[t] /= scale[t+1]
        return beta

    def fit(self, X: np.ndarray) -> "GaussianHMM":
        np.random.seed(42)
        self._init_params(X)
        X2 = X.reshape(len(X), -1)
        T, d = X2.shape
        prev_ll = -np.inf

        for _ in range(self.n_iter):
            B = self._emission_probs(X2)
            alpha, scale = self._forward(B)
            beta = self._backward(B, scale)
            gamma = alpha * beta
            gamma /= gamma.sum(axis=1, keepdims=True)

            xi = np.zeros((T-1, self.n_states, self.n_states))
            for t in range(T - 1):
                xi[t] = (alpha[t:t+1].T * self.transmat_ * B[t+1] * beta[t+1])
                xi[t] /= xi[t].sum()

            # M-step
            self.startprob_ = gamma[0]
            self.transmat_ = xi.sum(axis=0)
            self.transmat_ /= self.transmat_.sum(axis=1, keepdims=True)
            for k in range(self.n_states):
                w = gamma[:, k]
                self.means_[k] = (w @ X2) / w.sum()
                diff = X2 - self.means_[k]
                self.covs_[k] = (w[:, None] * diff).T @ diff / w.sum()
                self.covs_[k] += np.eye(d) * 1e-6

            ll = np.sum(np.log(scale))
            if abs(ll - prev_ll) < self.tol:
                break
            prev_ll = ll
        return self

    def predict_proba(self, X: np.ndarray) -> np.ndarray:
        B = self._emission_probs(X.reshape(len(X), -1))
        alpha, _ = self._forward(B)
        return alpha

    def decode(self, X: np.ndarray) -> np.ndarray:
        """Viterbi decoding for most likely state sequence."""
        B = self._emission_probs(X.reshape(len(X), -1))
        T, K = B.shape
        delta = np.log(self.startprob_) + np.log(B[0])
        psi = np.zeros((T, K), dtype=int)
        for t in range(1, T):
            trans = delta[:, None] + np.log(self.transmat_)
            psi[t] = trans.argmax(axis=0)
            delta = trans.max(axis=0) + np.log(B[t])
        states = np.zeros(T, dtype=int)
        states[-1] = delta.argmax()
        for t in range(T - 2, -1, -1):
            states[t] = psi[t+1, states[t+1]]
        return states


# ---- Example ----
np.random.seed(0)
T = 500
# Simulate 3-regime returns: Bear (-1% mu, 3% vol), Neutral (0.5%, 1.5%), Bull (1.5%, 1%)
true_states = np.random.choice([0, 1, 2], T, p=[0.2, 0.5, 0.3])
params = [(-0.01, 0.03), (0.005, 0.015), (0.015, 0.010)]
returns = np.array([np.random.normal(params[s][0], params[s][1]) for s in true_states])

model = GaussianHMM(n_states=3, n_iter=200)
model.fit(returns.reshape(-1, 1))
probs = model.predict_proba(returns.reshape(-1, 1))

print("State means (sorted by mu):")
order = np.argsort(model.means_.flatten())
for k in order:
    print(f"  State {k}: mu={model.means_[k,0]:.4f}, sigma={np.sqrt(model.covs_[k,0,0]):.4f}")
print(f"\nTransition matrix:\n{model.transmat_.round(3)}")
print(f"Regime durations: {[f'{1/(1-model.transmat_[k,k]):.1f} periods' for k in range(3)]}")
```

## Regime-Dependent Factor Returns

```chart
{
  "type": "bar",
  "xAxis": "factor",
  "data": [
    {"factor": "Momentum",  "bear": -0.8, "neutral": 0.4, "bull": 1.2},
    {"factor": "Value",     "bear": -0.3, "neutral": 0.3, "bull": 0.6},
    {"factor": "Quality",   "bear":  0.5, "neutral": 0.2, "bull": 0.3},
    {"factor": "Low-Vol",   "bear":  0.4, "neutral": 0.1, "bull": 0.1},
    {"factor": "Growth",    "bear": -0.6, "neutral": 0.5, "bull": 1.0}
  ],
  "bars": [
    {"dataKey": "bear",    "fill": "#ef4444", "name": "Bear Regime"},
    {"dataKey": "neutral", "fill": "#f59e0b", "name": "Neutral Regime"},
    {"dataKey": "bull",    "fill": "#10b981", "name": "Bull Regime"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Range |
| :--- | :--- | :--- | :--- |
| $K$ | States | Number of distinct market regimes | 2 – 4 |
| $p_{kk}$ | Self-transition | Persistence of regime $k$ | 0.90 – 0.98 |
| $d_k$ | Duration | Expected time in regime $k$ | 5 – 50 months |
| $\boldsymbol{\mu}_k$ | State mean | Expected return in regime $k$ | $-2\%$ – $+2\%$/month |
| $\boldsymbol{\Sigma}_k$ | State covariance | Volatility/correlation in regime $k$ | Varies |
| $\hat{\pi}_{k,t}$ | Filtered prob. | Current probability of being in state $k$ | 0 – 1 |

## Limitations and Extensions

- **Over-fitting**: More states increase in-sample likelihood but may not generalize; BIC/AIC model selection or cross-validated log-likelihood should guide $K$.
- **Lag in detection**: Filtered probabilities switch regimes with a lag (2–4 weeks for monthly data); predictive models (macro indicators, VIX levels) can lead rather than lag.
- **Non-Gaussian emissions**: Student-$t$ or skewed distributions capture fat tails better than Gaussian; GARCH-HMM combines conditional heteroskedasticity with regime switching.
- **Continuous-time extensions**: Markov-switching diffusions and regime-dependent jump processes (Naik 1993) embed switching into option pricing models.
- **Regime-conditional optimization**: Black-Litterman combined with HMM regime views produces regime-aware optimal portfolios.

## Practical Applications

1. **Dynamic factor allocation**: Increase Quality/Low-Vol exposure when bear-state probability exceeds 60%; shift to Momentum/Growth in confirmed bull regimes.
2. **Risk management**: Scale down gross exposure proportionally to bear-state probability to implement a regime-aware volatility target.
3. **Macro timing**: Map HMM states to macro regimes (expansion, contraction) using industrial production and credit spread features for interpretable regime labels.
4. **Options market making**: Use regime-conditional vol estimates ($\boldsymbol{\Sigma}_k$) rather than rolling historical vol for short-dated options pricing.
5. **Credit risk**: Regime-switching hazard rate models capture the business-cycle dependence of corporate default rates for portfolio CVA.

## Related Topics
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]
- [[random-matrix-theory]]

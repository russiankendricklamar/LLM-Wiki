---
title: "Regime-Switching Factor Strategies"
category: "Algorithms and ML"
order: 147
lang: "en"
slug: "regime-switching-factors"
---
# Regime-Switching Factor Strategies

Financial markets undergo structural shifts, often called **Regimes**. A factor that performs well in a "Bull" regime (e.g., Momentum) may significantly underperform in a "Crisis" regime. **Regime-Switching Models** use latent variables to adapt factor exposures dynamically.

## Hidden Markov Models (HMM) for States

We assume the market exists in one of $K$ hidden states $S_t \in \{1, \dots, K\}$. The transition between states is governed by a transition matrix $P$:

$$
P = \begin{pmatrix} p_{11} & p_{12} \\ p_{21} & p_{22} \end{pmatrix}
$$

where $p_{ij} = P(S_{t+1} = j | S_t = i)$.

The observed factor returns $R_t$ follow a distribution dependent on the state:
$$
R_t | S_t = k \sim N(\mu_k, \Sigma_k)
$$

## Adaptive Beta

Instead of a static beta, we use a regime-contingent beta $\beta_{S_t}$. The expected return of an asset becomes:

$$
E[R_{i,t}] = \alpha_{S_t} + \beta_{i, S_t} F_t
$$

This allows the strategy to "tilt" towards defensive factors (Low Volatility, Quality) when the probability of a "Bear" regime $P(S_t = \text{Bear})$ exceeds a threshold.

## Python: Regime Detection with hmmlearn

```python
from hmmlearn import hmm
import numpy as np

# Factor returns data
returns = np.random.randn(1000, 1)

# Fit HMM with 3 regimes: Bear, Neutral, Bull
model = hmm.GaussianHMM(n_components=3, covariance_type="full")
model.fit(returns)

# Get current regime probability
curr_state_probs = model.predict_proba(returns[-1].reshape(1, -1))
print(f"Probabilities of regimes: {curr_state_probs}")

# Transition matrix analysis
print("Transition Matrix:")
print(model.transmat_)
```

## Strategy Validation

Regime-switching strategies are highly sensitive to the number of states and the lookback period. To avoid overfitting, it is essential to use [[probability-of-backtest-overfitting]] analysis and cross-validate using [[mcmc]] for parameter uncertainty estimation.

---
## Related Topics
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]

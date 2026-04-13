---
title: "Bayesian Black-Litterman Portfolio Optimization"
category: "Risk Management"
order: 140
lang: "en"
slug: "bayesian-black-litterman"
---
# Bayesian Black-Litterman Portfolio Optimization

The **Black-Litterman (BL) model** is a sophisticated portfolio construction method that overcomes the sensitivity of Markowitz's mean-variance optimization to input estimates. By combining an **Equilibrium Market Prior** with **Subjective Investor Views**, it produces stable, diversified portfolios.

## Theil-Goldberger Mixed Estimation

The model treats investor views as additional data points in a Bayesian framework. The equilibrium prior assumes that the market portfolio is optimal. We assume the expected returns $\Pi$ follow a distribution centered around the market equilibrium:

$$
\Pi = \delta \Sigma w_{mkt}
$$

where $\delta$ is the risk aversion coefficient, $\Sigma$ is the covariance matrix, and $w_{mkt}$ are the market capitalization weights.

## Posterior Distribution

The Black-Litterman formula for the combined expected returns $E[R]$ is derived from the properties of the multivariate normal distribution:

$$
E[R] = [(\tau\Sigma)^{-1} + P^T \Omega^{-1} P]^{-1} [(\tau\Sigma)^{-1} \Pi + P^T \Omega^{-1} Q]
$$

Where:
- $\tau$: Scalar indicating the uncertainty of the prior.
- $P$: Picking matrix that maps views to assets.
- $Q$: Vector of expressed views.
- $\Omega$: Diagonal covariance matrix of view uncertainties.

The posterior covariance matrix $\Sigma_{post}$ is:
$$
\Sigma_{post} = \Sigma + [(\tau\Sigma)^{-1} + P^T \Omega^{-1} P]^{-1}
$$

## Python: Implementation with PyPortfolioOpt

```python
from pypfopt import black_litterman, risk_models
from pypfopt.black_litterman import BlackLittermanModel
import pandas as pd
import numpy as np

# Market prior (Equilibrium returns)
cov_matrix = risk_models.sample_cov(prices)
delta = 2.5 # Risk aversion
prior = black_litterman.market_implied_prior_returns(mcaps, delta, cov_matrix)

# Investor views
viewdict = {"AAPL": 0.10, "GOOGL": -0.05}
confidences = [0.6, 0.4]

bl = BlackLittermanModel(cov_matrix, pi=prior, absolute_views=viewdict, omega="idzorev")
ret_bl = bl.bl_returns()
cov_bl = bl.bl_covariance()

# Get optimized weights
from pypfopt.efficient_frontier import EfficientFrontier
ef = EfficientFrontier(ret_bl, cov_bl)
weights = ef.max_sharpe()
```

## Advanced Considerations

The BL model is often integrated with [[hierarchical-risk-parity]] to handle estimation error in the covariance matrix $\Sigma$. Furthermore, when views are non-linear or non-Gaussian, [[mcmc]] methods can be used to sample from the posterior distribution instead of using the closed-form identity.

---
## Related Topics
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]

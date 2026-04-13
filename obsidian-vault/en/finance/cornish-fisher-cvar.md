---
title: "Cornish-Fisher CVaR"
category: "Risk Management"
order: 161
lang: "en"
slug: "cornish-fisher-cvar"
---
# Cornish-Fisher CVaR

The **Cornish-Fisher expansion** is used to adjust the Value-at-Risk (VaR) and Conditional Value-at-Risk (CVaR) for non-normal distributions by accounting for skewness and kurtosis.

## Cornish-Fisher Expansion

The expansion provides an adjustment to the standard normal $z$-score. For a given confidence level $\alpha$, the adjusted $z$-score $z_{cf}$ is:

$$
z_{cf} = z_\alpha + \frac{1}{6}(z_\alpha^2 - 1)S + \frac{1}{24}(z_\alpha^3 - 3z_\alpha)K - \frac{1}{36}(2z_\alpha^3 - 5z_\alpha)S^2
$$

Where:
- $z_\alpha$ is the $\alpha$-quantile of the standard normal distribution
- $S$ is the skewness of the distribution
- $K$ is the excess kurtosis of the distribution

## Modified VaR and CVaR

The Modified VaR (mVaR) is then calculated as:

$$
\text{mVaR} = \mu + z_{cf} \sigma
$$

Modified CVaR (mCVaR) extends this by integrating the tail of the Cornish-Fisher adjusted distribution, providing a more robust risk measure for assets with "fat tails" or asymmetric return distributions.

## Python Implementation

Using `scipy` to calculate the Cornish-Fisher quantile:

```python
import numpy as np
from scipy.stats import norm

def cornish_fisher_quantile(alpha, skew, kurtosis):
    z = norm.ppf(alpha)
    return (z + (z**2 - 1) * skew / 6 + 
            (z**3 - 3*z) * kurtosis / 24 - 
            (2*z**3 - 5*z) * skew**2 / 36)

def modified_var(mu, sigma, skew, kurtosis, alpha=0.05):
    z_cf = cornish_fisher_quantile(alpha, skew, kurtosis)
    return mu + z_cf * sigma
```

## Related Topics
- [[value-at-risk]]
- [[volatility-forecasting]]
- [[mcmc]]
- [[levy-processes]]

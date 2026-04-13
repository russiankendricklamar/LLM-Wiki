---
title: "Statistics of Sharpe Ratios"
category: "Risk Management"
order: 143
lang: "en"
slug: "sharpe-ratio-statistics"
---
# Statistics of Sharpe Ratios

The **Sharpe Ratio (SR)** is the most ubiquitous measure of risk-adjusted return. However, it is a point estimate subject to significant sampling error. Understanding its statistical properties is crucial for distinguishing skill from luck.

## Distribution and Asymptotic Normality

Under the assumption of IID (Independent and Identically Distributed) returns, the estimator $\widehat{SR}$ is asymptotically normal:

$$
\sqrt{T}(\widehat{SR} - SR) \xrightarrow{d} N(0, V)
$$

For normally distributed returns, the asymptotic variance $V$ is:
$$
V = 1 + \frac{1}{2}SR^2
$$

If returns exhibit skewness ($\gamma_3$) and kurtosis ($\gamma_4$), the standard error expands (Mertens' correction):
$$
SE(\widehat{SR}) = \sqrt{\frac{1}{T} \left( 1 + \frac{1}{2}SR^2 - \gamma_3 SR + \frac{\gamma_4 - 3}{4}SR^2 \right)}
$$

## Jobson-Korkie Test

To compare two Sharpe ratios $SR_1$ and $SR_2$ from dependent portfolios, we use the Jobson-Korkie test (modified by Memmel). The test statistic is:

$$
z = \frac{\widehat{SR}_1 - \widehat{SR}_2}{\sqrt{\theta}}
$$

where $\theta$ accounts for the correlation between the two strategies' returns.

## Python: Calculating SE and Confidence Intervals

```python
import numpy as np
from scipy import stats

def sharpe_standard_error(returns, sr_annualized):
    T = len(returns)
    sr_daily = sr_annualized / np.sqrt(252)
    skew = stats.skew(returns)
    kurt = stats.kurtosis(returns, fisher=False)
    
    # Mertens' correction for non-normal returns
    v = (1 + 0.5 * sr_daily**2 - skew * sr_daily + (kurt - 3)/4 * sr_daily**2)
    return np.sqrt(v / T) * np.sqrt(252)

# Usage
returns = np.random.normal(0.0005, 0.01, 1000)
sr = np.mean(returns) / np.std(returns) * np.sqrt(252)
se = sharpe_standard_error(returns, sr)

print(f"Sharpe Ratio: {sr:.2f} +/- {1.96*se:.2f} (95% CI)")
```

## Backtest Overfitting

When multiple strategies are tested, the maximum observed Sharpe ratio follows a distribution that shifts to the right, leading to inflated performance expectations. This is the "Multiple Testing Problem" in finance, addressed by the [[probability-of-backtest-overfitting]] framework.

---
## Related Topics
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]

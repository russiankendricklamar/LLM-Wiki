---
title: "CVaR Корниша-Фишера"
category: "Управление рисками"
order: 161
lang: "ru"
slug: "cornish-fisher-cvar"
---
# CVaR Корниша-Фишера

**Разложение Корниша-Фишера** используется для корректировки показателей Value-at-Risk (VaR) и Conditional Value-at-Risk (CVaR) для ненормальных распределений путем учета асимметрии (skewness) и эксцесса (kurtosis).

## Разложение Корниша-Фишера

Разложение обеспечивает корректировку стандартного нормального $z$-показателя. Для заданного уровня доверия $\alpha$ скорректированный $z$-показатель $z_{cf}$ равен:

$$
z_{cf} = z_\alpha + \frac{1}{6}(z_\alpha^2 - 1)S + \frac{1}{24}(z_\alpha^3 - 3z_\alpha)K - \frac{1}{36}(2z_\alpha^3 - 5z_\alpha)S^2
$$

Где:
- $z_\alpha$ — $\alpha$-квантиль стандартного нормального распределения
- $S$ — асимметрия распределения
- $K$ — избыточный эксцесс распределения

## Модифицированные VaR и CVaR

Модифицированный VaR (mVaR) рассчитывается как:

$$
\text{mVaR} = \mu + z_{cf} \sigma
$$

Модифицированный CVaR (mCVaR) расширяет этот подход, интегрируя хвост распределения, скорректированного по методу Корниша-Фишера, что обеспечивает более надежную меру риска для активов с «толстыми хвостами» или асимметричным распределением доходности.

## Реализация на Python

Использование `scipy` для расчета квантиля Корниша-Фишера:

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

## Связанные темы
- [[value-at-risk]]
- [[volatility-forecasting]]
- [[mcmc]]
- [[levy-processes]]

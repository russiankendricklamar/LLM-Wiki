---
title: "Модели GARCH"
category: "Стохастические процессы"
order: 169
lang: "ru"
slug: "garch-models"
---
# Модели GARCH

**Обобщенная авторегрессионная модель с условной гетероскедастичностью (GARCH)** представляет собой расширение ARCH, которое позволяет более экономно представлять волатильность за счет включения лаговых значений условной дисперсии.

## Математическое определение

Модель $GARCH(p, q)$ определяется как:

$$
\sigma_t^2 = \omega + \sum_{i=1}^q \alpha_i \epsilon_{t-i}^2 + \sum_{j=1}^p \beta_j \sigma_{t-j}^2
$$

Где:
- $\omega > 0, \alpha_i \ge 0, \beta_j \ge 0$
- Персистентность измеряется суммой $\sum \alpha_i + \sum \beta_j$.

## Персистентность и возврат к среднему
Если сумма коэффициентов меньше 1, процесс является стационарным и демонстрирует возврат к долгосрочной дисперсии $\sigma^2 = \omega / (1 - \sum \alpha_i - \sum \beta_j)$.

## Реализация на Python

```python
from arch import arch_model

def fit_garch_model(returns, p=1, q=1):
    model = arch_model(returns, vol='Garch', p=p, q=q)
    res = model.fit(disp='off')
    return res.conditional_volatility
```

## Связанные темы
- [[volatility-forecasting]]
- [[arch-models]]
- [[black-scholes]]
- [[mcmc]]

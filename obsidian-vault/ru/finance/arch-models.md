---
title: "Модели ARCH"
category: "Стохастические процессы"
order: 168
lang: "ru"
slug: "arch-models"
---
# Модели ARCH

**Авторегрессионная модель с условной гетероскедастичностью (ARCH)** используется для моделирования временных рядов, которые демонстрируют изменяющуюся во времени кластеризацию волатильности.

## Математическое определение

Модель $ARCH(q)$ для дисперсии остатков $\epsilon_t$ имеет вид:

$$
\epsilon_t = \sigma_t z_t
$$
$$
\sigma_t^2 = \alpha_0 + \sum_{i=1}^q \alpha_i \epsilon_{t-i}^2
$$

Где:
- $z_t \sim N(0, 1)$
- $\alpha_0 > 0$ и $\alpha_i \ge 0$ для обеспечения положительной дисперсии.

## Кластеризация волатильности
Модели ARCH улавливают феномен, при котором за большими шоками обычно следуют большие шоки, а за малыми — малые.

## Реализация на Python

Использование библиотеки `arch`:

```python
from arch import arch_model

def fit_arch_model(returns, p=1):
    model = arch_model(returns, vol='ARCH', p=p)
    res = model.fit(disp='off')
    return res.summary()
```

## Связанные темы
- [[volatility-forecasting]]
- [[garch-models]]
- [[mcmc]]
- [[levy-processes]]

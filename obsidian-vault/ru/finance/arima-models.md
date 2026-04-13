---
title: "Модели ARIMA"
category: "Анализ сигналов"
order: 167
lang: "ru"
slug: "arima-models"
---
# Модели ARIMA

Модель **авторегрессии интегрированного скользящего среднего (ARIMA)** является обобщением модели ARMA, которая применяется в тех случаях, когда данные демонстрируют признаки нестационарности.

## Математическое определение

Модель $ARIMA(p, d, q)$ характеризуется следующими параметрами:
- $p$: порядок авторегрессионной части
- $d$: степень первой разности
- $q$: порядок части скользящего среднего

Продифференцированный ряд $Y_t = (1-L)^d X_t$ моделируется как процесс $ARMA(p, q)$.

$$
\phi(L)(1-L)^d X_t = \theta(L)\epsilon_t
$$

## Идентификация
Нестационарные данные часто преобразуются в стационарные путем взятия разностей перед применением структуры ARMA.

## Реализация на Python

```python
from statsmodels.tsa.arima.model import ARIMA

def fit_arima_model(data, p=1, d=1, q=1):
    model = ARIMA(data, order=(p, d, q))
    model_fit = model.fit()
    return model_fit.forecast(steps=5)
```

## Связанные темы
- [[volatility-forecasting]]
- [[hurst-exponent]]
- [[mcmc]]
- [[levy-processes]]

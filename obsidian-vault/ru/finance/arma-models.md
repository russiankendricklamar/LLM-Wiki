---
title: "Модели ARMA"
category: "Анализ сигналов"
order: 166
lang: "ru"
slug: "arma-models"
---
# Модели ARMA

Модель **авторегрессии — скользящего среднего (ARMA)** обеспечивает экономное описание стационарного стохастического процесса с помощью двух полиномов: одного для авторегрессии (AR) и второго для скользящего среднего (MA).

## Математическое определение

Модель $ARMA(p, q)$ задается формулой:

$$
X_t = c + \epsilon_t + \sum_{i=1}^p \phi_i X_{t-i} + \sum_{j=1}^q \theta_j \epsilon_{t-j}
$$

С использованием оператора лага $L$:

$$
(1 - \sum_{i=1}^p \phi_i L^i) X_t = c + (1 + \sum_{j=1}^q \theta_j L^j) \epsilon_t
$$

## Методология Бокса-Дженкинса
Идентификация, оценка и диагностическая проверка моделей ARMA занимают центральное место в подходе Бокса-Дженкинса к анализу временных рядов.

## Реализация на Python

```python
from statsmodels.tsa.arima.model import ARIMA
import numpy as np

def fit_arma_model(data, p=1, q=1):
    # ARIMA(p, 0, q) эквивалентно ARMA(p, q)
    model = ARIMA(data, order=(p, 0, q))
    model_fit = model.fit()
    return model_fit.summary()
```

## Связанные темы
- [[volatility-forecasting]]
- [[spectral-analysis]]
- [[mcmc]]
- [[black-scholes]]

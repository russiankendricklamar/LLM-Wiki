---
title: "Модели AR (авторегрессия)"
category: "Анализ сигналов"
order: 165
lang: "ru"
slug: "ar-models"
---
# Модели AR (авторегрессия)

**Авторегрессионная модель (AR)** представляет собой тип случайного процесса, в котором выходная переменная линейно зависит от своих собственных предыдущих значений и стохастического члена.

## Математическое определение

Модель $AR(p)$ определяется как:

$$
X_t = c + \sum_{i=1}^p \phi_i X_{t-i} + \epsilon_t
$$

Где:
- $\phi_1, \dots, \phi_p$ — параметры модели
- $c$ — константа
- $\epsilon_t$ — белый шум

## Стационарность
Для того чтобы процесс $AR(p)$ был стационарным, корни характеристического уравнения $1 - \sum_{i=1}^p \phi_i z^i = 0$ должны лежать вне единичного круга в комплексной плоскости.

## Реализация на Python

```python
from statsmodels.tsa.ar_model import AutoReg
import numpy as np

def fit_ar_model(data, lags=1):
    model = AutoReg(data, lags=lags)
    model_fit = model.fit()
    return model_fit.params
```

## Связанные темы
- [[spectral-analysis]]
- [[volatility-forecasting]]
- [[mcmc]]
- [[levy-processes]]

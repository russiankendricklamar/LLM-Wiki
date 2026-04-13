---
title: "Геометрическое броуновское движение"
category: "Стохастические процессы"
order: 171
lang: "ru"
slug: "geometric-brownian-motion"
---
# Геометрическое броуновское движение

**Геометрическое броуновское движение (GBM)** — это стохастический процесс с непрерывным временем, в котором логарифм случайно меняющейся величины следует броуновскому движению с дрейфом.

## СДУ

Динамика цены актива $S_t$, следующего GBM, описывается уравнением:

$$
dS_t = \mu S_t dt + \sigma S_t dW_t
$$

Где:
- $\mu$ — коэффициент дрейфа (ожидаемая доходность)
- $\sigma$ — волатильность
- $W_t$ — стандартное броуновское движение

## Решение по лемме Ито
С использованием леммы Ито решение СДУ имеет вид:

$$
S_t = S_0 \exp\left( (\mu - \frac{1}{2}\sigma^2)t + \sigma W_t \right)
$$

Это решение гарантирует, что цена $S_t$ остается положительной, что делает его фундаментальной моделью для цен акций в рамках структуры **Блэка-Шоулза**.

## Реализация на Python

```python
import numpy as np

def simulate_gbm(S0, mu, sigma, T, n_steps):
    dt = T / n_steps
    W = np.random.normal(0, np.sqrt(dt), n_steps)
    W = np.cumsum(W)
    t = np.linspace(dt, T, n_steps)
    
    S = S0 * np.exp((mu - 0.5 * sigma**2) * t + sigma * W)
    return np.concatenate([[S0], S])
```

## Связанные темы
- [[brownian-motion]]
- [[black-scholes]]
- [[volatility-forecasting]]
- [[levy-processes]]

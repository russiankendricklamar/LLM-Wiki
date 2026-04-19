---
slug: "/finance/variance-gamma"
title: "Процесс Вариационной Гаммы (Variance Gamma)"
category: "Стохастические процессы"
order: 97
lang: "ru"
---

# Процесс Вариационной Гаммы

**Variance Gamma (VG)** — процесс с бесконечным числом малых прыжков и конечной вариацией, предложенный Мадан и Сенетой (1990). Получается как броуновское движение с дрейфом, оцениваемое по случайному гамма-времени. Позволяет моделировать асимметрию и эксцесс доходностей без тяжёлых хвостов типа $\alpha$-стабильных процессов.

## Определение

Пусть $\gamma(t; \mu_\gamma, \nu)$ — гамма-процесс с параметрами $\mu_\gamma = 1$ и дисперсией $\nu$ на единицу времени. Тогда:

$$
X_t^{VG} = \theta \gamma_t + \sigma W_{\gamma_t}
$$

- $\theta$ — дрейф (контролирует асимметрию)
- $\sigma$ — волатильность диффузии
- $\nu$ — дисперсия гамма-времени (кластеризация скачков)

**Характеристическая функция**:

$$
\phi_{VG}(u; \sigma, \nu, \theta) = \left(1 - iu\theta\nu + \frac{\sigma^2\nu}{2}u^2\right)^{-t/\nu}
$$

## Цена опциона (FFT)

```python
import numpy as np
from scipy.fft import fft

def vg_char_func(u: np.ndarray, T: float, sigma: float,
                 nu: float, theta: float, r: float) -> np.ndarray:
    omega = (1/nu) * np.log(1 - theta*nu - 0.5*sigma**2*nu)
    exp_term = (1 - 1j*u*theta*nu + 0.5*sigma**2*nu*u**2) ** (-T/nu)
    return np.exp(1j*u*(np.log(1) + (r + omega)*T)) * exp_term

def price_vg_fft(S0: float, K: float, T: float, r: float,
                 sigma: float, nu: float, theta: float,
                 N: int = 4096, eta: float = 0.25) -> float:
    """Цена колл-опциона через FFT (Carr-Madan)."""
    lam = 2*np.pi / (N*eta)
    b   = N*lam/2
    u   = np.arange(N) * eta
    k_grid = -b + lam * np.arange(N)

    alpha = 1.5
    psi = np.exp(-r*T) * vg_char_func(u - 1j*(alpha+1), T, sigma, nu, theta, r)
    psi /= (alpha**2 + alpha - u**2 + 1j*(2*alpha+1)*u)

    x = eta * np.exp(1j*b*u) * psi
    x[0] /= 2
    prices = np.real(np.exp(-alpha*k_grid) / np.pi * fft(x) * eta)

    target_k = np.log(K/S0)
    idx = np.argmin(np.abs(k_grid - target_k))
    return float(S0 * prices[idx])

def simulate_vg(S0: float, T: float, n_steps: int, n_paths: int,
                sigma: float, nu: float, theta: float,
                r: float = 0.0) -> np.ndarray:
    rng = np.random.default_rng(42)
    dt = T / n_steps
    S = np.full((n_paths, n_steps+1), S0)
    omega = (1/nu)*np.log(1 - theta*nu - 0.5*sigma**2*nu)
    for i in range(n_steps):
        dg = rng.gamma(dt/nu, nu, n_paths)  # гамма-шаг
        dW = rng.normal(0, 1, n_paths)
        S[:, i+1] = S[:, i]*np.exp((r+omega)*dt + theta*dg + sigma*np.sqrt(dg)*dW)
    return S
```

## Параметры и их эффект

| Параметр | Эффект при увеличении |
|---------|----------------------|
| $\sigma$ | Больше волатильность |
| $\nu$ | Больше эксцесс (тяжелее хвосты) |
| $\theta < 0$ | Левый skew (типично для акций) |

## Связанные статьи

- [[levy-processes|Процессы Леви]] — VG — частный случай
- [[merton-jump-diffusion|Модель Мертона]] — конечное число прыжков vs. бесконечное у VG
- [[heston-model|Модель Хестона]] — SV-альтернатива

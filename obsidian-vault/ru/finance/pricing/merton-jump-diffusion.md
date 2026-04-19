---
slug: "/finance/merton-jump-diffusion"
title: "Модель Мертона с прыжками (Jump-Diffusion)"
category: "Стохастические процессы"
order: 95
lang: "ru"
---

# Модель Мертона с прыжками (Jump-Diffusion)

**Модель Мертона (1976)** — первое расширение Блэка-Шоулза, добавляющее **прыжки** в динамику цены актива. Она признаёт, что реальные ценовые движения включают не только непрерывную диффузию, но и внезапные разрывы — корпоративные события, макроновости, кризисы. Модель объясняет характерный для рынков **перекос улыбки волатильности** при коротких сроках.

## Динамика цены

$$
\frac{dS_t}{S_{t-}} = (\mu - \lambda \bar{k}) \, dt + \sigma \, dW_t + (J_t - 1) \, dN_t
$$

где:
- $W_t$ — стандартное броуновское движение
- $N_t$ — пуассоновский процесс с интенсивностью $\lambda$ (ср. число прыжков в год)
- $J_t - 1$ — относительный размер прыжка: $\ln J \sim \mathcal{N}(\mu_J, \sigma_J^2)$
- $\bar{k} = E[J - 1] = e^{\mu_J + \sigma_J^2/2} - 1$ — средний размер прыжка

**Логарифм цены**:

$$
\ln S_T = \ln S_0 + \left(\mu - \frac{\sigma^2}{2} - \lambda\bar{k}\right)T + \sigma W_T + \sum_{i=1}^{N_T} \ln J_i
$$

Это сумма гауссовой части и случайного числа гауссовых прыжков.

## Формула ценообразования европейских опционов

В риск-нейтральной мере $Q$ ($\mu \to r - \lambda\bar{k}$):

$$
C(S, K, T) = \sum_{n=0}^{\infty} \frac{e^{-\lambda' T} (\lambda' T)^n}{n!} C_{\text{BS}}(S, K, T, r_n, \sigma_n)
$$

где $\lambda' = \lambda(1 + \bar{k})$ — скорректированная интенсивность, а для портфеля с $n$ прыжками:

$$
\sigma_n^2 = \sigma^2 + \frac{n \sigma_J^2}{T}, \quad r_n = r - \lambda\bar{k} + \frac{n(\mu_J + \sigma_J^2/2)}{T}
$$

На практике сумму обрезают при $n \leq 20$–$30$.

## Параметры и калибровка

| Параметр | Типичный диапазон | Смысл |
|---------|------------------|-------|
| $\lambda$ | 1–10 в год | Частота прыжков |
| $\mu_J$ | -0.05 до -0.01 | Средний логарифм прыжка (обычно отрицателен) |
| $\sigma_J$ | 0.05–0.15 | Разброс размеров прыжков |
| $\sigma$ | 0.10–0.30 | Диффузионная волатильность |

```python
import numpy as np
from scipy.stats import norm, poisson
from scipy.optimize import minimize
from dataclasses import dataclass

@dataclass
class MertonParams:
    sigma: float     # диффузионная волатильность
    lam: float       # интенсивность прыжков (в год)
    mu_j: float      # среднее лог-прыжка
    sigma_j: float   # стд лог-прыжка
    r: float = 0.05  # безрисковая ставка


def merton_call(S: float, K: float, T: float,
                p: MertonParams, n_terms: int = 30) -> float:
    """
    Цена call-опциона по формуле Мертона.
    """
    k_bar = np.exp(p.mu_j + 0.5 * p.sigma_j**2) - 1
    lam_prime = p.lam * (1 + k_bar)

    price = 0.0
    for n in range(n_terms):
        w = np.exp(-lam_prime * T) * (lam_prime * T)**n / np.math.factorial(n)
        sigma_n = np.sqrt(p.sigma**2 + n * p.sigma_j**2 / T)
        r_n = p.r - p.lam * k_bar + n * (p.mu_j + 0.5 * p.sigma_j**2) / T

        if sigma_n < 1e-10:
            payoff = max(S - K * np.exp(-r_n * T), 0)
            price += w * payoff
        else:
            d1 = (np.log(S / K) + (r_n + 0.5 * sigma_n**2) * T) / (sigma_n * np.sqrt(T))
            d2 = d1 - sigma_n * np.sqrt(T)
            bs = S * norm.cdf(d1) - K * np.exp(-r_n * T) * norm.cdf(d2)
            price += w * bs
    return price


def simulate_merton(S0: float, T: float, n_steps: int, n_paths: int,
                    p: MertonParams) -> np.ndarray:
    """
    Монте-Карло симуляция модели Мертона.
    Возвращает матрицу цен (n_paths, n_steps+1).
    """
    dt = T / n_steps
    rng = np.random.default_rng(42)
    k_bar = np.exp(p.mu_j + 0.5 * p.sigma_j**2) - 1
    drift = (p.r - 0.5 * p.sigma**2 - p.lam * k_bar) * dt

    S = np.full((n_paths, n_steps + 1), S0, dtype=float)
    for i in range(n_steps):
        # Диффузионная часть
        dW = rng.normal(0, np.sqrt(dt), n_paths)
        diffusion = drift + p.sigma * dW

        # Прыжковая часть: число прыжков из Пуассона
        n_jumps = rng.poisson(p.lam * dt, n_paths)
        log_jump = np.zeros(n_paths)
        for path in range(n_paths):
            if n_jumps[path] > 0:
                jumps = rng.normal(p.mu_j, p.sigma_j, n_jumps[path])
                log_jump[path] = jumps.sum()

        S[:, i+1] = S[:, i] * np.exp(diffusion + log_jump)
    return S


def calibrate_merton(market_calls: np.ndarray, strikes: np.ndarray,
                     T: float, S: float, r: float) -> MertonParams:
    """
    Калибровка параметров Мертона по рыночным ценам опционов.
    """
    def loss(x: np.ndarray) -> float:
        sigma, lam, mu_j, sigma_j = x
        if sigma <= 0 or lam < 0 or sigma_j <= 0:
            return 1e10
        p = MertonParams(sigma=sigma, lam=lam, mu_j=mu_j,
                         sigma_j=sigma_j, r=r)
        model_prices = np.array([
            merton_call(S, K, T, p) for K in strikes
        ])
        return float(np.sum((market_calls - model_prices)**2))

    x0 = np.array([0.20, 3.0, -0.03, 0.08])
    bounds = [(0.01, 1.0), (0.01, 20.0), (-0.5, 0.2), (0.01, 0.5)]
    res = minimize(loss, x0, method='L-BFGS-B', bounds=bounds)
    sigma, lam, mu_j, sigma_j = res.x
    return MertonParams(sigma=sigma, lam=lam, mu_j=mu_j, sigma_j=sigma_j, r=r)
```

## Улыбка волатильности: влияние параметров

**Наклон (skew)**: отрицательный $\mu_J$ создаёт downside skew — пут-опционы «in-the-money» переоценены относительно BS.

**Кривизна (smile)**: $\sigma_J > 0$ создаёт wings — далёкие OTM опционы дороже, чем в BS.

**Схождение к BS**: при $T \to \infty$ или $\lambda \to 0$ улыбка уплощается до BS-константы.

| $T$ | Форма улыбки |
|-----|-------------|
| Короткие (< 1 мес) | Резкий skew/smile |
| Средние (1–6 мес) | Умеренный skew |
| Длинные (> 1 года) | Почти плоская |

## Расширения

- **Kou (2002)**: прыжки из двустороннего экспоненциального распределения (аналитическое решение)
- **Kou-Wang**: асимметричное распределение прыжков
- **Bates (1996)**: модель Мертона + стохастическая волатильность (Heston + прыжки)

## Связанные статьи

- [[levy-processes|Процессы Леви]] — обобщение: бесконечное число малых прыжков
- [[black-scholes|Модель Блэка-Шоулза]] — предельный случай при $\lambda = 0$
- [[heston-model|Модель Хестона]] — SV без прыжков; Bates = Heston + Merton
- [[bipower-variation|Двухмощная вариация]] — оценка вклада прыжков в реализованную волатильность
- [[monte-carlo-method|Метод Монте-Карло]] — симуляция траекторий

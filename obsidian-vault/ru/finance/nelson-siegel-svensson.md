---
title: "Модель Нельсона-Зигеля-Свенссона"
category: "Модели ценообразования"
order: 84
lang: "ru"
---

# Модель Нельсона-Зигеля-Свенссона

**Модель Нельсона-Зигеля-Свенссона (NSS)** — параметрическая аппроксимация кривой доходности, расширяющая оригинальную модель Нельсона-Зигеля (1987) дополнительным «горбом» для точной подгонки форвардной кривой. NSS используется центральными банками (в том числе ФРС, Бундесбанком, Банком России) для официальной публикации кривых доходности.

## Модель Нельсона-Зигеля (1987)

Спот-ставка со сроком $\tau$:

$$
y(\tau) = \beta_0 + \beta_1 \cdot \frac{1 - e^{-\tau/\lambda_1}}{\tau/\lambda_1} + \beta_2 \cdot \left(\frac{1 - e^{-\tau/\lambda_1}}{\tau/\lambda_1} - e^{-\tau/\lambda_1}\right)
$$

### Интерпретация параметров

| Параметр | Роль | Компонента |
|---------|------|-----------|
| $\beta_0$ | долгосрочный уровень ($\tau \to \infty$) | **Уровень (Level)** |
| $\beta_1$ | кратко-долгосрочный спред | **Наклон (Slope)** |
| $\beta_2$ | горб в среднесрочной зоне | **Кривизна (Curvature)** |
| $\lambda_1$ | скорость затухания | определяет положение горба |

**Граничные условия:**
- $y(0) = \beta_0 + \beta_1$ — мгновенная ставка
- $y(\infty) = \beta_0$ — долгосрочная ставка

## Расширение Свенссона (1994)

Для улучшения подгонки добавляется второй горб:

$$
\boxed{y(\tau) = \beta_0 + \beta_1 \frac{1-e^{-\tau/\lambda_1}}{\tau/\lambda_1} + \beta_2\!\left(\frac{1-e^{-\tau/\lambda_1}}{\tau/\lambda_1} - e^{-\tau/\lambda_1}\right) + \beta_3\!\left(\frac{1-e^{-\tau/\lambda_2}}{\tau/\lambda_2} - e^{-\tau/\lambda_2}\right)}
$$

Шесть параметров: $(\beta_0, \beta_1, \beta_2, \beta_3, \lambda_1, \lambda_2)$.

- $\beta_3$ — амплитуда второго горба
- $\lambda_2$ — его положение по сроку (обычно меньше $\lambda_1$ для более короткой зоны)

## Форвардная кривая

Мгновенная форвардная ставка:

$$
f(\tau) = \beta_0 + \beta_1 e^{-\tau/\lambda_1} + \beta_2 \frac{\tau}{\lambda_1} e^{-\tau/\lambda_1} + \beta_3 \frac{\tau}{\lambda_2} e^{-\tau/\lambda_2}
$$

В отличие от спот-ставки $y(\tau)$, форвардная кривая даёт прямое представление о рыночных ожиданиях будущих ставок.

## Калибровка: нелинейная МНК

Параметры подбираются минимизацией взвешенного остатка:

$$
\min_{\theta} \sum_{i=1}^{N} w_i \left(y^{\text{obs}}(\tau_i) - y(\tau_i; \theta)\right)^2
$$

Типичная весовая схема: $w_i \propto D(\tau_i)$ — дюрация облигации (большая дюрация → большая цена ошибки).

```python
import numpy as np
from scipy.optimize import minimize
from dataclasses import dataclass
from typing import Optional

@dataclass
class NSSParams:
    beta0: float   # долгосрочный уровень, > 0
    beta1: float   # наклон
    beta2: float   # первый горб
    beta3: float   # второй горб
    lambda1: float # > 0
    lambda2: float # > 0

    def to_array(self) -> np.ndarray:
        return np.array([self.beta0, self.beta1, self.beta2,
                         self.beta3, self.lambda1, self.lambda2])

    @classmethod
    def from_array(cls, x: np.ndarray) -> "NSSParams":
        return cls(*x)


def nss_yield(tau: np.ndarray, p: NSSParams) -> np.ndarray:
    """Спот-ставка NSS для массива сроков tau (в годах)."""
    tau = np.asarray(tau, dtype=float)
    eps = 1e-8

    exp1 = np.exp(-tau / p.lambda1)
    factor1 = np.where(tau > eps,
                       (1 - exp1) / (tau / p.lambda1),
                       1.0)
    curve1 = factor1 - exp1

    exp2 = np.exp(-tau / p.lambda2)
    factor2 = np.where(tau > eps,
                       (1 - exp2) / (tau / p.lambda2),
                       1.0)
    curve2 = factor2 - exp2

    return p.beta0 + p.beta1 * factor1 + p.beta2 * curve1 + p.beta3 * curve2


def fit_nss(maturities: np.ndarray,
            yields: np.ndarray,
            weights: Optional[np.ndarray] = None,
            n_starts: int = 20) -> NSSParams:
    """
    Калибровка NSS методом МНК с несколькими начальными точками.

    maturities: сроки до погашения в годах
    yields: наблюдаемые доходности (в долях, например 0.05 для 5%)
    weights: опциональные веса для каждой точки
    n_starts: число случайных стартов для глобальной оптимизации
    """
    if weights is None:
        weights = np.ones(len(yields))

    def loss(x: np.ndarray) -> float:
        try:
            p = NSSParams(*x)
            if p.lambda1 <= 0 or p.lambda2 <= 0 or p.beta0 <= 0:
                return 1e10
            y_hat = nss_yield(maturities, p)
            return float(np.sum(weights * (yields - y_hat)**2))
        except Exception:
            return 1e10

    bounds = [
        (0.001, 0.20),    # beta0
        (-0.15, 0.15),    # beta1
        (-0.15, 0.15),    # beta2
        (-0.15, 0.15),    # beta3
        (0.1, 10.0),      # lambda1
        (0.1, 10.0),      # lambda2
    ]

    best_result = None
    rng = np.random.default_rng(0)

    for _ in range(n_starts):
        x0 = np.array([
            rng.uniform(0.02, 0.06),
            rng.uniform(-0.04, 0.04),
            rng.uniform(-0.04, 0.04),
            rng.uniform(-0.02, 0.02),
            rng.uniform(0.5, 5.0),
            rng.uniform(0.5, 5.0),
        ])
        res = minimize(loss, x0, method='L-BFGS-B', bounds=bounds,
                       options={'maxiter': 500, 'ftol': 1e-12})
        if best_result is None or res.fun < best_result.fun:
            best_result = res

    return NSSParams.from_array(best_result.x)


def forward_rate(tau: np.ndarray, p: NSSParams) -> np.ndarray:
    """Мгновенная форвардная ставка NSS."""
    tau = np.asarray(tau, dtype=float)
    exp1 = np.exp(-tau / p.lambda1)
    exp2 = np.exp(-tau / p.lambda2)
    return (p.beta0
            + p.beta1 * exp1
            + p.beta2 * (tau / p.lambda1) * exp1
            + p.beta3 * (tau / p.lambda2) * exp2)
```

### Пример использования

```python
# Калибровка на реальных данных OFZ (пример)
maturities = np.array([0.25, 0.5, 1, 2, 3, 5, 7, 10, 15, 20])  # лет
yields = np.array([0.075, 0.078, 0.082, 0.087, 0.089, 0.091, 0.092, 0.093, 0.094, 0.094])

params = fit_nss(maturities, yields)
print(f"β₀={params.beta0:.4f}, β₁={params.beta1:.4f}, "
      f"β₂={params.beta2:.4f}, β₃={params.beta3:.4f}")
print(f"λ₁={params.lambda1:.2f}, λ₂={params.lambda2:.2f}")

# Полная кривая
tau_grid = np.linspace(0.1, 25, 500)
y_curve = nss_yield(tau_grid, params)
f_curve = forward_rate(tau_grid, params)
```

## Типичные формы кривой

| Форма | $\beta_1$ | $\beta_2$ | Описание |
|-------|-----------|-----------|----------|
| Нормальная (растущая) | < 0 | > 0 | Стандартный рост к длинному концу |
| Инвертированная | > 0 | | Ожидание снижения ставок |
| Горбатая | | $\beta_2$ велика | Пик в среднесрочной зоне |
| Плоская | ≈ 0 | ≈ 0 | Переходное состояние |

## Применения

- **Ценообразование облигаций**: вычисление дисконтных факторов из непрерывной $y(\tau)$
- **Управление дюрацией**: анализ чувствительности к движениям $\beta_0$, $\beta_1$, $\beta_2$
- **XVA**: дисконтирование денежных потоков деривативов
- **Центральные банки**: Бундесбанк публикует NSS-параметры ежедневно с 1972 года

## Связанные статьи

- [[black-scholes|Модель Блэка-Шоулза]] — ценообразование в нейтральной мере
- [[heston-model|Модель Хестона]] — стохастическая волатильность
- [[xva|XVA: корректировки оценки]] — применение кривых доходности
- [[oas|OAS: опционно-скорректированный спред]] — спред над безрисковой кривой
- [[swaps|Процентные свопы]] — FRA и дисконтирование через NSS-кривую

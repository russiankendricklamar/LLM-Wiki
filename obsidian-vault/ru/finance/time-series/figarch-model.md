---
title: "Модель FIGARCH: Дробно-интегрированная волатильность"
category: "finance/time-series"
order: 255
lang: "ru"
slug: "figarch-model"
---

# Модель FIGARCH (Fractionally Integrated GARCH)

**FIGARCH (Baillie, Bollerslev, Mikkelsen, 1996)** — это эконометрическая модель временных рядов, предназначенная для моделирования эффекта **долгой памяти (Long Memory)** и гиперболического затухания волатильности финансовых активов.

В отличие от стандартной модели GARCH(1,1), где автокорреляция квадратных доходностей затухает экспоненциально быстро ($d=0$), и модели IGARCH, где шоки волатильности вечны ($d=1$), модель FIGARCH вводит промежуточный параметр дробного интегрирования $0 < d < 1$.

---

## 1. Математическая формулировка FIGARCH(p, d, q)

Пусть $\varepsilon_t = \sigma_t z_t$ — инновации доходностей, где $z_t \sim \mathcal{N}(0, 1)$.

Уравнение условной дисперсии FIGARCH(1, d, 1):

$$\sigma_t^2 = \omega + \left[ 1 - \beta(L) - \phi(L)(1 - L)^d \right] \varepsilon_t^2 + \beta \sigma_{t-1}^2$$

где $(1 - L)^d$ — **оператор дробного разностного сдвига (Fractional Difference Operator)**, определяемый через разложение в ряд Тейлора:

$$(1 - L)^d = \sum_{k=0}^\infty \pi_k L^k = 1 - d L - \frac{d(1-d)}{2!} L^2 - \frac{d(1-d)(2-d)}{3!} L^3 - \dots$$

Коэффициенты биномиального разложения $\pi_k$:

$$\pi_k = \frac{\Gamma(k - d)}{\Gamma(-d) \cdot \Gamma(k + 1)}$$

---

## 2. Сравнение затухания шоков волатильности

1. **GARCH($d=0$):** Память короткая. Автокорреляция затухает **экспоненциально**: $\rho(k) \propto \lambda^k$.
2. **IGARCH($d=1$):** Память бесконечная. Шоки никогда не забываются.
3. **FIGARCH($0 < d < 1$):** Память длинная (Long Memory). Шоки волатильности затухают **гиперболически**: $\rho(k) \propto k^{-d-1}$.

---

## 3. Оценка модели на Python (`arch` библиотека)

```python
import numpy as np
import pandas as pd
from arch import arch_model

# Генерация синтетического ряда с долгой памятью волатильности
np.random.seed(42)
returns = np.random.normal(0, 1, 2000)

# Настройка и фитирование модели FIGARCH(1, d, 1)
model = arch_model(returns, vol='FIGARCH', p=1, q=1, power=2.0)
results = model.fit(disp='off')

print(results.summary())

# Извлечение параметра дробного интегрирования d
d_param = results.params['d']
print(f"\nОцененный параметр дробного интегрирования d: {d_param:.4f}")
```

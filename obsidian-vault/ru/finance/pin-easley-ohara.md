---
title: "PIN: Вероятность информированной торговли"
category: "Микроструктура рынка"
order: 111
lang: "ru"
---

# PIN: Вероятность информированной торговли

**PIN (Probability of Informed Trading)** — структурная модель Easley, Kiefer, O'Hara и Paperman (1996) для оценки доли информированных торговцев на рынке. PIN извлекается из потоков ордеров на покупку и продажу, предшественник VPIN.

## EKOP-модель

**Структура игры:**
- С вероятностью $\alpha$ в день поступает «событие» (информация): хорошее (prob. $\delta$) или плохое ($1-\delta$)
- Информированные трейдеры торгуют со скоростью $\mu$ (только в информационный день)
- Неинформированные: покупки $\varepsilon_b$, продажи $\varepsilon_s$ (Пуассон)

**Правдоподобие за один день** ($B$ покупок, $S$ продаж):

$$
L(B, S|\Theta) = (1-\alpha) e^{-\varepsilon_b}\frac{\varepsilon_b^B}{B!} \cdot e^{-\varepsilon_s}\frac{\varepsilon_s^S}{S!}
$$
$$
+ \alpha\delta \cdot e^{-(\varepsilon_b+\mu)}\frac{(\varepsilon_b+\mu)^B}{B!} \cdot e^{-\varepsilon_s}\frac{\varepsilon_s^S}{S!}
$$
$$
+ \alpha(1-\delta) \cdot e^{-\varepsilon_b}\frac{\varepsilon_b^B}{B!} \cdot e^{-(\varepsilon_s+\mu)}\frac{(\varepsilon_s+\mu)^S}{S!}
$$

**PIN**:

$$
\text{PIN} = \frac{\alpha\mu}{\alpha\mu + \varepsilon_b + \varepsilon_s}
$$

## Реализация

```python
import numpy as np
from scipy.optimize import minimize
from scipy.special import gammaln
from dataclasses import dataclass

@dataclass
class PINParams:
    alpha: float   # P(информационный день)
    delta: float   # P(хорошая новость | информ. день)
    mu:    float   # интенсивность информированных
    eps_b: float   # интенсивность uninformed buy
    eps_s: float   # интенсивность uninformed sell

    @property
    def pin(self) -> float:
        return self.alpha * self.mu / (self.alpha * self.mu + self.eps_b + self.eps_s)


def _log_likelihood(params, B_days, S_days):
    alpha, delta, mu, eps_b, eps_s = params
    if any(p <= 0 for p in [alpha, mu, eps_b, eps_s]) or not 0 < alpha < 1 or not 0 < delta < 1:
        return 1e10

    ll = 0.0
    for B, S in zip(B_days, S_days):
        # log-правдоподобие через gammaln для стабильности
        def lp(lam_b, lam_s):
            return (-lam_b + B*np.log(lam_b) - gammaln(B+1)
                    -lam_s + S*np.log(lam_s) - gammaln(S+1))

        l0 = (1 - alpha) * np.exp(lp(eps_b, eps_s))
        lg = alpha * delta * np.exp(lp(eps_b + mu, eps_s))
        lb = alpha * (1 - delta) * np.exp(lp(eps_b, eps_s + mu))
        ll += np.log(l0 + lg + lb + 1e-300)

    return -ll


def fit_pin(B_days: list[int], S_days: list[int],
            n_starts: int = 10) -> PINParams:
    """
    MLE оценка PIN из ежедневных потоков ордеров.
    B_days, S_days: число покупок/продаж за каждый день.
    """
    best = None
    rng = np.random.default_rng(42)
    for _ in range(n_starts):
        x0 = [rng.uniform(0.1, 0.9),  # alpha
              rng.uniform(0.1, 0.9),  # delta
              rng.uniform(10, 200),   # mu
              rng.uniform(10, 200),   # eps_b
              rng.uniform(10, 200)]   # eps_s
        res = minimize(_log_likelihood, x0, args=(B_days, S_days),
                       method='Nelder-Mead',
                       options={'maxiter': 5000, 'xatol': 1e-6})
        if best is None or res.fun < best.fun:
            best = res

    a, d, m, eb, es = best.x
    return PINParams(alpha=a, delta=d, mu=m, eps_b=eb, eps_s=es)


def rolling_pin(B_days: list[int], S_days: list[int],
                window: int = 60) -> list[float]:
    """PIN на скользящем окне (мониторинг токсичности потока)."""
    pins = []
    for i in range(window, len(B_days)):
        b = B_days[i-window:i]
        s = S_days[i-window:i]
        try:
            p = fit_pin(b, s, n_starts=5)
            pins.append(p.pin)
        except Exception:
            pins.append(float('nan'))
    return pins
```

## PIN vs VPIN

| Метрика | PIN | VPIN |
|---------|-----|------|
| Метод | MLE структурной модели | Объём-синхронный BVC |
| Скорость | Медленно (оптимизация) | Быстро (real-time) |
| Данные | Ежедневные | Тиковые |
| Применение | Исследование | HFT-мониторинг |

## Связанные статьи

- [[vpin|VPIN]] — высокочастотная альтернатива PIN
- [[roll-model|Модель Ролла]] — простая оценка спреда
- [[kyle-lambda|Лямбда Кайла]] — линейный ценовой импакт

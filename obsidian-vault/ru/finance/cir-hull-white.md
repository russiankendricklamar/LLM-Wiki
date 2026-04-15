---
title: "Модели CIR и Hull-White для процентных ставок"
category: "Стохастические процессы"
order: 96
lang: "ru"
---

# Модели CIR и Hull-White для процентных ставок

Модели **CIR (Cox-Ingersoll-Ross, 1985)** и **Hull-White (1990)** описывают динамику короткой процентной ставки $r_t$ и используются для ценообразования облигаций, свопов и процентных опционов.

## Модель CIR

$$
dr_t = \kappa(\theta - r_t)\,dt + \sigma\sqrt{r_t}\,dW_t
$$

- $\kappa$ — скорость возврата к среднему
- $\theta$ — долгосрочное среднее
- $\sigma$ — волатильность
- **Условие Феллера** $2\kappa\theta > \sigma^2$: ставка всегда остаётся положительной

### Аналитическая цена облигации

$$
P(t, T) = A(t,T)\,e^{-B(t,T)\,r_t}
$$

$$
B(t,T) = \frac{2(e^{\gamma\tau}-1)}{(\kappa+\gamma)(e^{\gamma\tau}-1)+2\gamma}, \quad \tau = T-t, \quad \gamma = \sqrt{\kappa^2+2\sigma^2}
$$

$$
A(t,T) = \left[\frac{2\gamma e^{(\kappa+\gamma)\tau/2}}{(\kappa+\gamma)(e^{\gamma\tau}-1)+2\gamma}\right]^{2\kappa\theta/\sigma^2}
$$

## Модель Hull-White (Extended Vasicek)

$$
dr_t = [\theta(t) - \kappa r_t]\,dt + \sigma\,dW_t
$$

$\theta(t)$ выбирается так, чтобы модель точно воспроизводила наблюдаемую кривую доходности:

$$
\theta(t) = \frac{\partial f^M(0,t)}{\partial t} + \kappa f^M(0,t) + \frac{\sigma^2}{2\kappa}(1 - e^{-2\kappa t})
$$

где $f^M(0,t)$ — рыночная форвардная ставка.

### Цена облигации (Hull-White)

$$
P(t,T) = \frac{P^M(0,T)}{P^M(0,t)}\exp\!\left(B(t,T)f^M(0,t) - \frac{\sigma^2}{4\kappa}B^2(t,T)(1-e^{-2\kappa t})\right)
$$

$$
B(t,T) = \frac{1-e^{-\kappa(T-t)}}{\kappa}
$$

## Реализация

```python
import numpy as np
from scipy.integrate import quad

def cir_bond_price(r: float, kappa: float, theta: float,
                   sigma: float, tau: float) -> float:
    gamma = np.sqrt(kappa**2 + 2*sigma**2)
    exp_gt = np.exp(gamma * tau)
    denom = (kappa + gamma)*(exp_gt - 1) + 2*gamma
    B = 2*(exp_gt - 1) / denom
    log_A = (2*kappa*theta/sigma**2) * np.log(
        2*gamma*np.exp((kappa+gamma)*tau/2) / denom
    )
    return np.exp(log_A - B*r)


def simulate_cir(r0: float, kappa: float, theta: float, sigma: float,
                 T: float, n_steps: int, n_paths: int) -> np.ndarray:
    dt = T / n_steps
    rng = np.random.default_rng(42)
    r = np.full((n_paths, n_steps+1), r0)
    for i in range(n_steps):
        z = rng.normal(0, 1, n_paths)
        dr = kappa*(theta - r[:,i])*dt + sigma*np.sqrt(np.maximum(r[:,i],0)*dt)*z
        r[:,i+1] = np.maximum(r[:,i] + dr, 0)
    return r


class HullWhite:
    def __init__(self, kappa: float, sigma: float,
                 market_fwd: callable, market_bond: callable):
        """
        kappa: mean reversion
        sigma: vol
        market_fwd: f(t) → forward rate
        market_bond: P(t) → discount factor
        """
        self.kappa = kappa
        self.sigma = sigma
        self.f = market_fwd
        self.P = market_bond

    def B(self, t: float, T: float) -> float:
        return (1 - np.exp(-self.kappa*(T-t))) / self.kappa

    def bond_price(self, t: float, T: float, r_t: float) -> float:
        B = self.B(t, T)
        A = (self.P(T)/self.P(t) *
             np.exp(B*self.f(t) -
                    self.sigma**2/(4*self.kappa)*B**2*(1-np.exp(-2*self.kappa*t))))
        return A * np.exp(-B*r_t)
```

## Сравнение

| Свойство | CIR | Hull-White |
|---------|-----|-----------|
| Ставка всегда ≥ 0 | Да (Феллер) | Нет |
| Подгонка рыночной кривой | Нет | Да |
| Аналитические формулы | Да | Да |
| Реализм при отрицательных ставках | Нет | Да |

## Связанные статьи

- [[nelson-siegel-svensson|Нельсон-Зигель-Свенссон]] — параметрическая кривая доходности
- [[swaps|Процентные свопы]] — применение HW для оценки
- [[ornstein-uhlenbeck-process|Процесс Орнштейна-Уленбека]] — $\sigma_J=0$ случай CIR
- [[black-scholes|Модель Блэка-Шоулза]] — аналог для опционов на облигации (модель Блэка)

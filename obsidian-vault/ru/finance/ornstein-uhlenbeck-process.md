---
title: "Процесс Орнштейна-Уленбека"
category: "Стохастические процессы"
order: 3
lang: "ru"
slug: "ornstein-uhlenbeck-process"
---
# Процесс Орнштейна-Уленбека

**Процесс Орнштейна-Уленбека (OU)** — это стохастический процесс, описывающий скорость массивной броуновской частицы под влиянием трения. В финансах это стандартная модель для **возвратного (mean-reverting)** поведения спредов, процентных ставок и факторов.

## История и мотивация

Орнштейн и Уленбек (1930) вывели процесс как физически более корректную альтернативу броуновскому движению для описания скоростей частиц. В финансах модель Васичека (1977) применила OU к процентным ставкам, заложив основу всех последующих аффинных моделей. Широкое применение в статистическом арбитраже связано с тем, что коинтегрированные спреды эмпирически хорошо аппроксимируются OU-процессом.

## Стохастическое дифференциальное уравнение

$$
dX_t = \theta(\mu - X_t)\,dt + \sigma\,dW_t
$$

- $\theta > 0$ — скорость возврата к среднему,
- $\mu$ — долгосрочное среднее,
- $\sigma > 0$ — волатильность,
- $W_t$ — стандартный винеровский процесс.

## Точное аналитическое решение

Умножим обе части на интегрирующий множитель $e^{\theta t}$:

$$
d(e^{\theta t} X_t) = \theta\mu e^{\theta t}\,dt + \sigma e^{\theta t}\,dW_t
$$

Интегрируя от $0$ до $t$:

$$
X_t = X_0\,e^{-\theta t} + \mu(1 - e^{-\theta t}) + \sigma \int_0^t e^{-\theta(t-s)}\,dW_s
$$

Переходная плотность — гауссовская:

$$
X_t \mid X_0 \sim \mathcal{N}\!\left(X_0 e^{-\theta t} + \mu(1 - e^{-\theta t}),\; \frac{\sigma^2}{2\theta}(1 - e^{-2\theta t})\right)
$$

## Стационарное распределение и автокорреляция

При $t \to \infty$ процесс достигает стационарного распределения:

$$
X_\infty \sim \mathcal{N}\!\left(\mu,\; \frac{\sigma^2}{2\theta}\right)
$$

Автокорреляционная функция стационарного процесса:

$$
\text{ACF}(\tau) = \text{Corr}(X_t, X_{t+\tau}) = e^{-\theta|\tau|}
$$

**Период полураспада** — среднее время возврата к $\mu$:

$$
t_{1/2} = \frac{\ln 2}{\theta}
$$

## Оценка параметров (замкнутая форма МНК/MLE)

При дискретизации с шагом $\Delta t$ точные замкнутые формулы MLE:

$$
\hat{\mu} = \frac{S_y S_{xx} - S_x S_{xy}}{n(S_{xx} - S_{xy}) - (S_x^2 - S_x S_y)}
$$

$$
\hat{\theta} = -\frac{1}{\Delta t}\ln\left(\frac{S_{xy} - \hat{\mu} S_x}{S_{xx} - \hat{\mu} S_x}\right)
$$

где $S_x = \sum X_{t-1}$, $S_y = \sum X_t$, $S_{xx} = \sum X_{t-1}^2$, $S_{xy} = \sum X_{t-1}X_t$.

## Python: Точная симуляция и MLE

```python
import numpy as np


def simulate_ou_exact(X0: float, mu: float, theta: float, sigma: float,
                      T: float, steps: int, seed: int = 42) -> np.ndarray:
    """Точная (не Эйлер-Маруяма) симуляция OU-процесса."""
    np.random.seed(seed)
    dt = T / steps
    e = np.exp(-theta * dt)
    std_cond = sigma * np.sqrt((1 - e ** 2) / (2 * theta))

    X = np.zeros(steps + 1)
    X[0] = X0
    for t in range(steps):
        X[t + 1] = mu + (X[t] - mu) * e + std_cond * np.random.standard_normal()
    return X


def estimate_ou_mle(X: np.ndarray, dt: float) -> tuple[float, float, float]:
    """
    Замкнутая формула MLE для параметров OU-процесса.
    Возвращает (theta, mu, sigma).
    """
    n = len(X) - 1
    Sx = np.sum(X[:-1])
    Sy = np.sum(X[1:])
    Sxx = np.sum(X[:-1] ** 2)
    Syy = np.sum(X[1:] ** 2)
    Sxy = np.sum(X[:-1] * X[1:])

    mu = (Sy * Sxx - Sx * Sxy) / (n * (Sxx - Sxy) - (Sx ** 2 - Sx * Sy))
    phi = (Sxy - mu * Sx - mu * Sy + n * mu ** 2) / (Sxx - 2 * mu * Sx + n * mu ** 2)
    theta = -np.log(phi) / dt

    resid = X[1:] - mu - phi * (X[:-1] - mu)
    sigma_sq = np.var(resid) * 2 * theta / (1 - phi ** 2)
    sigma = np.sqrt(max(sigma_sq, 1e-12))

    return float(theta), float(mu), float(sigma)


# Пример: генерация и оценка
true = {"theta": 2.0, "mu": 0.5, "sigma": 0.3}
X = simulate_ou_exact(X0=1.0, steps=500, T=2.0, **true)
dt = 2.0 / 500

theta_hat, mu_hat, sigma_hat = estimate_ou_mle(X, dt)
half_life = np.log(2) / theta_hat

print(f"Оценки MLE:")
print(f"  theta = {theta_hat:.4f}  (истинное: {true['theta']})")
print(f"  mu    = {mu_hat:.4f}  (истинное: {true['mu']})")
print(f"  sigma = {sigma_hat:.4f}  (истинное: {true['sigma']})")
print(f"  Период полураспада: {half_life:.2f} единиц времени")
```

## Таблица параметров

| Символ | Описание | Финансовая интерпретация |
|:---|:---|:---|
| $\theta$ | Скорость возврата к среднему | Высокий $\theta$ = быстрый возврат |
| $\mu$ | Долгосрочное среднее | Равновесный уровень спреда |
| $\sigma$ | Диффузионная волатильность | Краткосрочная изменчивость |
| $t_{1/2}$ | Период полураспада | Ожидаемое время удержания позиции |
| $\sigma^2/(2\theta)$ | Дисперсия стационарного распределения | Ширина торгового диапазона |

## Применение в финансах

### Парный трейдинг

Спред $S_t = \ln P_A - \beta \ln P_B$ моделируется как OU. Z-score для входа в позицию:

$$
z_t = \frac{S_t - \mu}{\sigma/\sqrt{2\theta}}
$$

Вход при $|z_t| > z_{\text{enter}}$, выход при $|z_t| < z_{\text{exit}}$.

### Модель Васичека

Процесс Васичека для краткой ставки $r_t$ математически тождествен OU: $dr_t = \kappa(\bar{r} - r_t)dt + \sigma_r dW_t$. Цены облигаций вычисляются аналитически.

## Ограничения и расширения

- **Отрицательные значения**: OU может стать отрицательным — неприемлемо для цен и ставок. Процесс CIR ($dX = \kappa(\mu-X)dt + \sigma\sqrt{X}dW$) решает эту проблему.
- **Нестационарность параметров**: $\theta$, $\mu$ могут изменяться со временем; фильтр Калмана или MCMC позволяют оценивать динамические параметры.
- **Многомерное обобщение**: матричный процесс OU используется для моделирования спредов между несколькими активами одновременно.

## Связанные темы
- [[levy-processes]]
- [[pairs-trading]]
- [[monte-carlo-method]]
- [[value-at-risk]]
- [[heston-model]]
- [[black-scholes]]
- [[mcmc]]

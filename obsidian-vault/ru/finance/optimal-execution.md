---
title: "Кросс-импакт и оптимальное исполнение"
category: "Алгоритмы и ML"
order: 43
lang: "ru"
---
# Кросс-импакт и оптимальное исполнение (Almgren-Chriss)

**Оптимальное исполнение (Optimal Execution)** — это процесс выполнения крупного торгового поручения с минимальными суммарными издержками, включающими постоянное и временное воздействие на рынок (market impact), а также риск изменения цены. Модель **Алмгрена–Крисса** является отраслевым стандартом для определения оптимальной траектории торговли.

## История и мотивация

Алмгрен и Крисс (2001) формализовали задачу ликвидации как задачу оптимального управления. До этой работы трейдеры полагались на эмпирические правила TWAP/VWAP без теоретического обоснования компромисса «издержки vs риск». Последующие работы Гасерио и Ройтера (2013) распространили фреймворк на мультиактивные портфели с кросс-импактом.

## Математический фреймворк Алмгрена–Крисса

### Динамика цены

Цена актива при исполнении $n_k$ акций в шаг $k$:

$$
P_k = P_{k-1} + \sigma\sqrt{\tau}\,\varepsilon_k - \tau \cdot g\!\left(\frac{n_k}{\tau}\right)
$$

$$
\tilde{P}_k = P_k - h\!\left(\frac{n_k}{\tau}\right)
$$

где $g(\cdot)$ — постоянный (permanent) импакт, $h(\cdot)$ — временный (temporary) импакт, $\tau = T/N$ — размер шага.

### Целевая функция

Для линейного рыночного импакта ($g(v) = \gamma v$, $h(v) = \eta v$) ожидаемые издержки и дисперсия:

$$
E[C] = \frac{1}{2}\gamma X^2 + \eta \sum_{k=1}^{N} \left(\frac{n_k}{\tau}\right)^2 \tau
$$

$$
V[C] = \sigma^2 \sum_{k=1}^{N} x_k^2 \, \tau
$$

Оптимальная стратегия минимизирует $U = E[C] + \lambda V[C]$.

### Оптимальная траектория

Аналитическое решение для оставшейся позиции $x_j = X - \sum_{k=1}^j n_k$:

$$
x_j = X \cdot \frac{\sinh\!\left(\kappa(T - t_j)\right)}{\sinh(\kappa T)}, \quad \kappa = \sqrt{\frac{\lambda\sigma^2}{\eta}}
$$

При $\kappa \to 0$ решение вырождается в равномерное TWAP. При $\kappa \to \infty$ — в немедленную ликвидацию.

## Python: Эффективная граница исполнения

```python
import numpy as np


def execution_efficient_frontier(
    X: float, sigma: float, gamma: float, eta: float,
    T: float, N: int = 20, n_lambdas: int = 40
) -> dict:
    """
    Строит эффективную границу оптимального исполнения Алмгрена-Крисса.
    Возвращает (список ожидаемых издержек, список дисперсий, список траекторий).
    """
    lambdas = np.logspace(-6, 1, n_lambdas)
    tau = T / N
    times = np.arange(N + 1) * tau

    results = {"cost": [], "variance": [], "trajectories": []}

    for lam in lambdas:
        kappa = np.sqrt(lam * sigma ** 2 / eta)
        if kappa < 1e-8:
            holdings = X * (1 - times / T)
        else:
            holdings = X * np.sinh(kappa * (T - times)) / np.sinh(kappa * T)

        trades = -np.diff(holdings)
        trade_rates = trades / tau

        exp_cost = 0.5 * gamma * X ** 2 + eta * np.sum(trade_rates ** 2) * tau
        variance = sigma ** 2 * np.sum(holdings[:-1] ** 2) * tau

        results["cost"].append(float(exp_cost))
        results["variance"].append(float(variance))
        results["trajectories"].append(holdings)

    return results


def twap_trajectory(X: float, N: int) -> np.ndarray:
    return X * np.linspace(1, 0, N + 1)


# Параметры
X, sigma, gamma, eta, T, N = 1_000_000, 0.02, 2e-7, 5e-6, 1.0, 20

frontier = execution_efficient_frontier(X, sigma, gamma, eta, T, N)
twap = twap_trajectory(X, N)
kappa_med = np.sqrt(1e-3 * sigma ** 2 / eta)
ac_traj = X * np.sinh(kappa_med * (T - np.arange(N + 1) * T / N)) / np.sinh(kappa_med * T)

print(f"{'Лямбда':>10}  {'E[Cost] ($)':>12}  {'Std[Cost] ($)':>14}")
for i in range(0, len(frontier["cost"]), 8):
    c = frontier["cost"][i]
    v = np.sqrt(frontier["variance"][i])
    print(f"{10 ** (np.log10(1e-6) + i * 7 / 39):>10.2e}  {c:>12,.0f}  {v:>14,.0f}")

print(f"\nTWAP E[Cost] ≈ ${0.5*gamma*X**2 + eta*np.sum((np.diff(-twap)/T*N)**2)*T/N:,.0f}")
```

## Таблица параметров

| Символ | Описание | Типичное значение |
|:---|:---|:---|
| $X$ | Общий объём к ликвидации | $10^5$–$10^7$ акций |
| $\sigma$ | Волатильность актива | 1%–3% в день |
| $\gamma$ | Постоянный импакт | $10^{-7}$ –$10^{-6}$ |
| $\eta$ | Временный импакт | $5 \times 10^{-6}$–$10^{-5}$ |
| $\lambda$ | Параметр неприятия риска | $10^{-6}$–$10^{-2}$ |
| $\kappa$ | Параметр срочности | $\sqrt{\lambda\sigma^2/\eta}$ |

## Кросс-импакт в мультиактивных портфелях

В мультиактивных портфелях торговля активом $i$ влияет на цену актива $j$. Матрица кросс-импакта $\Omega$ вводится как:

$$
\Delta P_i = \sum_j \Omega_{ij} \cdot \text{sign}(v_j) \cdot |v_j|^\delta
$$

где $v_j$ — объём торговли активом $j$, $\delta \approx 0.5$ (квадратный корень). Оптимизационная задача при кросс-импакте:

$$
\min_{\{n_k\}} \sum_i \left[\frac{1}{2}\gamma_i X_i^2 + \sum_{j} \Omega_{ij} n_i^\top n_j \tau\right] + \lambda \sum_i \sigma_i^2 \sum_k x_{i,k}^2 \tau
$$

## VWAP и участие в объёме

Стратегия участия в объёме (POV): $n_k = p \cdot V_k$, где $V_k$ — рыночный объём в период $k$, $p$ — целевая доля. При предсказуемом внутридневном профиле объёма POV сближается с VWAP по издержкам, обеспечивая бо́льшую адаптивность к рыночным условиям.

## Ограничения и расширения

- **Нелинейный импакт**: квадратный корень импакта $h(v) \propto v^{1/2}$ приводит к нелинейному ОДУ без аналитического решения; необходимо численное решение.
- **Стохастическая ликвидность**: при разрыве ликвидности (кризис) параметры $\eta$, $\gamma$ резко возрастают; адаптивные алгоритмы требуют онлайн-оценки.
- **Ограничения на позицию**: при регуляторных лимитах задача становится задачей квадратичного программирования.
- **Временная структура**: объём $V_k$ предсказуем внутри дня (U-образный паттерн); его предсказание улучшает качество VWAP.

## Связанные темы
- [[avellaneda-stoikov]]
- [[monte-carlo-method]]
- [[market-impact-scaling]]
- [[nash-equilibrium]]
- [[value-at-risk]]

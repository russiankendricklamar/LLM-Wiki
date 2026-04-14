---
title: "Временной vs Кросс-секционный факторный анализ"
category: "Алгоритмы и ML"
order: 51
lang: "ru"
slug: "ts-cs-factor-analysis"
---
# Временной vs Кросс-секционный факторный анализ

В эмпирическом ценообразовании активов существует два ключевых подхода к оценке факторных нагрузок и премий за риск: **регрессия временных рядов (TS)** и **кросс-секционная регрессия (CS)**. Понимание их различий критически важно для построения и валидации факторных моделей.

## Математический аппарат

### Регрессия временных рядов (TS)

Для каждого актива $i$ регрессируем избыточную доходность на факторы во времени:

$$
R_{i,t} - R_{f,t} = \alpha_i + \sum_{k=1}^K \beta_{ik}\,F_{k,t} + \epsilon_{i,t}
$$

$\hat{\beta}_{ik}$ — оценка факторной нагрузки актива $i$ на фактор $k$. $\hat{\alpha}_i$ — неверная оценка (mispricing): при хорошо специфицированной модели $\alpha_i \approx 0$.

### Кросс-секционная регрессия (CS)

На каждом шаге $t$ регрессируем доходности активов на их нагрузки:

$$
R_{i,t} = \gamma_{0,t} + \sum_{k=1}^K \gamma_{k,t}\,\hat{\beta}_{ik} + \eta_{i,t}
$$

**Процедура Фамы-Макбета:**
1. TS-регрессия → оценить $\hat{\beta}_{ik}$ для каждого актива.
2. CS-регрессия на каждом $t$ → получить временной ряд $\{\hat{\gamma}_{k,t}\}$.
3. Средняя премия за риск: $\bar{\gamma}_k = \frac{1}{T}\sum_t \hat{\gamma}_{k,t}$.
4. Стандартная ошибка с поправкой Ньюи-Уэста (учёт автокорреляции $\hat{\gamma}_{k,t}$).

### Тест GRS

**Тест Гиббонса-Росса-Шанкена (1989)** проверяет совместную гипотезу $H_0: \alpha_i = 0$ для всех $N$ активов:

$$
\text{GRS} = \frac{T - N - K}{N}\left(1 + \bar{\mathbf{F}}^T\hat{\boldsymbol{\Sigma}}_F^{-1}\bar{\mathbf{F}}\right)^{-1}\hat{\boldsymbol{\alpha}}^T\hat{\boldsymbol{\Sigma}}^{-1}\hat{\boldsymbol{\alpha}} \sim F(N,\, T-N-K)
$$

где $\hat{\boldsymbol{\Sigma}}$ — ковариационная матрица остатков, $\bar{\mathbf{F}}$ — средние доходности факторов.

### Поправка Шанкена (EIV)

Нагрузки $\hat{\beta}_{ik}$ оцениваются с ошибкой (EIV). Истинная дисперсия CS-оценок:

$$
\text{Var}(\bar{\gamma}_k)^{Shanken} = \text{Var}(\bar{\gamma}_k)^{FM} \cdot (1 + \boldsymbol{\gamma}^T\hat{\boldsymbol{\Sigma}}_F^{-1}\boldsymbol{\gamma})
$$

Множитель $(1 + \boldsymbol{\gamma}^T\hat{\boldsymbol{\Sigma}}_F^{-1}\boldsymbol{\gamma})$ — поправка Шанкена; при высоком SR факторов может быть значительным.

## Python-реализация

```python
import numpy as np
from scipy import stats

def time_series_regression(
    returns: np.ndarray,
    factors: np.ndarray
) -> dict:
    """
    TS-регрессия для каждого актива.

    Args:
        returns: (T × N) матрица избыточных доходностей активов
        factors: (T × K) матрица факторных доходностей

    Returns:
        dict с 'alphas' (N,), 'betas' (N × K), 'residuals' (T × N), 't_stats'
    """
    T, N = returns.shape
    _, K = factors.shape
    X = np.column_stack([np.ones(T), factors])

    alphas  = np.zeros(N)
    betas   = np.zeros((N, K))
    resids  = np.zeros((T, N))
    t_stats = np.zeros((N, K + 1))

    for i in range(N):
        y   = returns[:, i]
        coef, _, _, _ = np.linalg.lstsq(X, y, rcond=None)
        y_hat = X @ coef
        res   = y - y_hat
        s2    = res.var(ddof=K+1)
        se    = np.sqrt(np.diag(s2 * np.linalg.inv(X.T @ X)))

        alphas[i]    = coef[0]
        betas[i]     = coef[1:]
        resids[:, i] = res
        t_stats[i]   = coef / (se + 1e-300)

    return {"alphas": alphas, "betas": betas,
            "residuals": resids, "t_stats": t_stats}

def fama_macbeth_regression(
    returns: np.ndarray,
    betas: np.ndarray,
    lags: int = 4
) -> dict:
    """
    Процедура Фамы-Макбета с поправкой Ньюи-Уэста.

    Args:
        returns: (T × N) матрица доходностей
        betas: (N × K) факторные нагрузки
        lags: лагов для НУ-коррекции автокорреляции

    Returns:
        dict с 'risk_premia' (K,), 'se_nw' (K,), 't_stats' (K,)
    """
    T, N = returns.shape
    K    = betas.shape[1]
    X    = np.column_stack([np.ones(N), betas])

    gammas = np.zeros((T, K + 1))
    for t in range(T):
        y = returns[t]
        coef, _, _, _ = np.linalg.lstsq(X, y, rcond=None)
        gammas[t] = coef

    gamma_mean = gammas.mean(axis=0)

    # Ньюи-Уэст HAC оценка дисперсии
    u = gammas - gamma_mean
    S = u.T @ u / T
    for l in range(1, lags + 1):
        w = 1 - l / (lags + 1)
        S += w * (u[l:].T @ u[:-l] + u[:-l].T @ u[l:]) / T
    se_nw = np.sqrt(np.diag(S / T))

    return {
        "risk_premia":  gamma_mean[1:],
        "intercept":    gamma_mean[0],
        "se_nw":        se_nw[1:],
        "t_stats":      gamma_mean[1:] / (se_nw[1:] + 1e-300)
    }

def grs_test(
    alphas: np.ndarray,
    residuals: np.ndarray,
    factor_returns: np.ndarray
) -> dict:
    """
    Тест GRS: H0: все альфы = 0.

    Returns:
        dict с 'grs_stat', 'p_value', 'mean_abs_alpha'
    """
    T, N = residuals.shape
    K    = factor_returns.shape[1]
    Sigma_hat = residuals.T @ residuals / T
    mu_F = factor_returns.mean(axis=0)
    Sigma_F = np.cov(factor_returns.T)

    shrinkage = 1 + mu_F @ np.linalg.solve(Sigma_F, mu_F)
    try:
        grs = ((T - N - K) / N / shrinkage *
               alphas @ np.linalg.solve(Sigma_hat, alphas))
    except np.linalg.LinAlgError:
        return {"grs_stat": np.nan, "p_value": np.nan}

    p_val = 1 - stats.f.cdf(grs, N, T - N - K)
    return {"grs_stat": float(grs), "p_value": float(p_val),
            "mean_abs_alpha": float(np.abs(alphas).mean())}

# ---- Пример ----
np.random.seed(42)
T, N, K = 300, 25, 3
true_beta = np.random.randn(N, K) * 0.5
factors   = np.random.randn(T, K) * 0.01
true_premia = np.array([0.005, 0.003, 0.002])
returns = factors @ true_beta.T + np.random.randn(T, N) * 0.02

ts = time_series_regression(returns, factors)
fm = fama_macbeth_regression(returns, ts["betas"])
grs = grs_test(ts["alphas"], ts["residuals"], factors)

print("Премии за риск (Фама-Макбет):")
for k, (rp, se, t) in enumerate(zip(fm["risk_premia"], fm["se_nw"], fm["t_stats"])):
    print(f"  F{k+1}: {rp*10000:.1f} б.п.  SE={se*10000:.1f}  t={t:.2f}")
print(f"\nGRS: stat={grs['grs_stat']:.2f}, p={grs['p_value']:.3f}")
print(f"|ᾱ| = {grs['mean_abs_alpha']*10000:.2f} б.п.")
```

## Сравнение подходов

| Характеристика | Временные ряды (TS) | Кросс-секции (CS) |
| :--- | :--- | :--- |
| **Фокус** | Риск конкретного актива | Премия за факторный риск |
| **Входные данные** | Доходности факторов | Факторные нагрузки (β) |
| **Оценивает** | Нагрузки β и α | Премии λ = E[γ] |
| **Тест модели** | GRS F-тест по α | Размер α в CS |
| **Ошибка** | Смещение от EIV | Поправка Шанкена |

## Справочник параметров

| Символ | Название | Описание | Типичный диапазон |
| :--- | :--- | :--- | :--- |
| $\alpha_i$ | Альфа актива | Неверная оценка (mispricing) | −0,5% – 0,5% в год |
| $\beta_{ik}$ | Факторная нагрузка | Чувствительность к фактору $k$ | −2 – 2 |
| $\bar{\gamma}_k$ | Премия за риск | Среднее вознаграждение за β | 0% – 8% годовых |
| $T$ | Длина выборки | Число временных периодов | 60 – 600 месяцев |

## Ограничения и расширения

- **Look-ahead bias:** Нагрузки, оцениваемые за весь период, создают смещение; скользящие 60-месячные β устраняют его.
- **Множественное тестирование:** При $N > 100$ факторов высок риск ложных открытий; поправка Бенджамини-Хохберга контролирует FDR.
- **SDF-формулировка:** Стохастический дисконтирующий фактор $M_t = 1 - \boldsymbol{\lambda}^T(\mathbf{F}_t - \boldsymbol{\mu}_F)$ объединяет TS и CS в единую рамку.

## Практические применения

1. **Smart-beta стратегии:** CS Фамы-Макбета верифицирует, что фактор несёт значимую положительную γ после транзакционных издержек.
2. **Атрибуция доходности:** TS-декомпозиция разделяет доходность портфеля на факторные нагрузки и специфическую альфу.
3. **Риск-менеджмент:** Матрица β-нагрузок позволяет вычислить факторные VaR и CVaR для многофакторного портфеля.

## Связанные темы
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]

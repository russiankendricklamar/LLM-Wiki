---
title: "Прогнозирование рисков на основе анализа выживаемости"
category: "Управление рисками"
order: 70
lang: "ru"
slug: "survival-risk-prediction"
---
# Прогнозирование рисков на основе анализа выживаемости

**Анализ выживаемости** моделирует данные «время до события»: дефолт корпорации, просрочка кредита, исполнение лимитного ордера. Ключевое преимущество перед стандартной классификацией — явный учёт **цензурирования**: наблюдение ещё не испытало события к концу периода наблюдения.

## Математический аппарат

### Функции выживания и риска

Пусть $T$ — случайное время события. Три эквивалентных представления:

$$
S(t) = P(T > t), \quad
\lambda(t) = \lim_{\Delta t\to 0}\frac{P(t \le T < t+\Delta t \mid T \ge t)}{\Delta t}, \quad
\Lambda(t) = \int_0^t \lambda(u)\,du
$$

Связь: $S(t) = \exp(-\Lambda(t))$. В кредитном риске $\lambda(t)$ — интенсивность дефолта (hazard rate).

### Оценка Каплана-Мейера

Непараметрическая оценка $S(t)$ из данных с цензурированием. Пусть $t_1 < t_2 < \dots$ — упорядоченные моменты событий, $d_i$ — число событий в $t_i$, $n_i$ — число «под риском»:

$$
\hat{S}(t) = \prod_{t_i \le t} \left(1 - \frac{d_i}{n_i}\right)
$$

### Модель пропорциональных рисков Кокса

Мультипликативное воздействие ковариат $\mathbf{x}$ на базовый риск $\lambda_0(t)$:

$$
\lambda(t \mid \mathbf{x}) = \lambda_0(t)\,\exp(\boldsymbol{\beta}^T\mathbf{x})
$$

Параметры $\boldsymbol{\beta}$ оцениваются максимизацией **частичного правдоподобия** (без оценки $\lambda_0$):

$$
L(\boldsymbol{\beta}) = \prod_{i:\,C_i=1} \frac{\exp(\boldsymbol{\beta}^T\mathbf{x}_i)}{\sum_{j \in \mathcal{R}(t_i)} \exp(\boldsymbol{\beta}^T\mathbf{x}_j)}
$$

где $\mathcal{R}(t_i)$ — множество риска (субъекты, ещё не испытавшие событие и не цензурированные к $t_i$).

### Модель ускоренного отказа (AFT)

Логарифм времени события — линейная функция ковариат:

$$
\ln T_i = \boldsymbol{\beta}^T\mathbf{x}_i + \sigma\,\epsilon_i
$$

где $\epsilon_i$ следует параметрическому распределению (Вейбулл, лог-нормальное). Интерпретация: $e^{\beta_k}$ — мультипликатор времени до события при увеличении $x_k$ на 1.

### Конкурирующие риски

При нескольких конкурирующих событиях $j = 1, \dots, J$ (дефолт vs. досрочное погашение):

$$
F_j(t) = \int_0^t S(u)\,\lambda_j(u)\,du, \quad S(t) = \exp\!\left(-\sum_j \Lambda_j(t)\right)
$$

### Дискретно-временная модель опасности

Для банковских данных с ежемесячной частотой — логистическая регрессия на каждом временном шаге:

$$
P(T = t \mid T \ge t, \mathbf{x}) = \frac{1}{1 + \exp(-\alpha_t - \boldsymbol{\beta}^T\mathbf{x})}
$$

## Python-реализация

```python
import numpy as np
from scipy.optimize import minimize

def fit_kaplan_meier(
    durations: np.ndarray,
    events: np.ndarray
) -> dict:
    """
    Оценка Каплана-Мейера функции выживания.

    Args:
        durations: время наблюдения (до события или цензурирования)
        events: 1 = событие произошло, 0 = цензурировано

    Returns:
        dict с 'times', 'survival', 'n_at_risk', 'n_events'
    """
    order = np.argsort(durations)
    dur   = durations[order]
    ev    = events[order]

    unique_times = np.unique(dur[ev == 1])
    n = len(dur)
    S = 1.0
    times_out, surv_out, risk_out, ev_out = [], [], [], []

    for t in unique_times:
        at_risk = int(np.sum(dur >= t))
        n_ev    = int(np.sum((dur == t) & (ev == 1)))
        S *= (1 - n_ev / at_risk)
        times_out.append(t)
        surv_out.append(S)
        risk_out.append(at_risk)
        ev_out.append(n_ev)

    return {"times": np.array(times_out), "survival": np.array(surv_out),
            "n_at_risk": np.array(risk_out), "n_events": np.array(ev_out)}

def fit_cox_model(
    X: np.ndarray,
    durations: np.ndarray,
    events: np.ndarray,
    max_iter: int = 200
) -> dict:
    """
    Модель Кокса: оценка бета через частичное правдоподобие (Ньютон-Рафсон).

    Args:
        X: матрица ковариат (N × p)
        durations, events: как в KM

    Returns:
        dict с 'coefs', 'log_likelihood', 'convergence'
    """
    order = np.argsort(durations)[::-1]
    X_s   = X[order]
    ev_s  = events[order]
    N, p  = X.shape

    def neg_partial_ll(beta: np.ndarray) -> float:
        eta = X_s @ beta
        log_lik = 0.0
        log_cum = np.logaddexp.accumulate(eta[::-1])[::-1]
        for i in range(N):
            if ev_s[i] == 1:
                log_lik += eta[i] - log_cum[i]
        return -log_lik

    def grad(beta: np.ndarray) -> np.ndarray:
        eta  = X_s @ beta
        exp_eta = np.exp(eta - eta.max())
        g = np.zeros(p)
        cum_exp = np.cumsum(exp_eta[::-1])[::-1]
        cum_X   = (exp_eta[:, None] * X_s).cumsum(axis=0)[::-1].cumsum(axis=0)[::-1]
        for i in range(N):
            if ev_s[i] == 1:
                g -= X_s[i] - cum_X[i] / (cum_exp[i] + 1e-300)
        return g

    beta0 = np.zeros(p)
    res = minimize(neg_partial_ll, beta0, jac=grad, method="L-BFGS-B",
                   options={"maxiter": max_iter})
    return {"coefs": res.x, "log_likelihood": -res.fun, "convergence": res.success}

def discrete_time_hazard(
    X: np.ndarray,
    durations: np.ndarray,
    events: np.ndarray,
    max_time: int | None = None
) -> dict:
    """
    Дискретно-временная логистическая модель опасности.
    Расширяет каждое наблюдение в панельные данные (один ряд на период).
    """
    from scipy.special import expit
    if max_time is None:
        max_time = int(durations.max())

    rows_X, rows_t, rows_y = [], [], []
    for i, (d, e) in enumerate(zip(durations, events)):
        d_int = int(d)
        for t in range(1, d_int + 1):
            rows_X.append(X[i])
            rows_t.append(t / max_time)
            rows_y.append(1 if (t == d_int and e == 1) else 0)

    Xp = np.column_stack([rows_X, rows_t])
    yp = np.array(rows_y)

    def neg_ll(beta):
        p = expit(Xp @ beta)
        return -float(np.sum(yp * np.log(p + 1e-300) + (1-yp) * np.log(1-p + 1e-300)))

    res = minimize(neg_ll, np.zeros(Xp.shape[1]), method="L-BFGS-B")
    return {"coefs": res.x, "convergence": res.success}

def survival_concordance(
    risk_scores: np.ndarray,
    durations: np.ndarray,
    events: np.ndarray
) -> float:
    """C-статистика (аналог AUC для выживаемости)."""
    concordant = discordant = 0
    n = len(durations)
    for i in range(n):
        for j in range(i+1, n):
            if events[i] == 0 and events[j] == 0:
                continue
            if durations[i] < durations[j] and events[i] == 1:
                concordant += (risk_scores[i] > risk_scores[j])
                discordant += (risk_scores[i] < risk_scores[j])
            elif durations[j] < durations[i] and events[j] == 1:
                concordant += (risk_scores[j] > risk_scores[i])
                discordant += (risk_scores[j] < risk_scores[i])
    total = concordant + discordant
    return concordant / total if total > 0 else 0.5

# ---- Пример ----
np.random.seed(42)
N = 200
X = np.random.randn(N, 2)
true_beta = np.array([0.8, -0.5])
T_true = np.random.exponential(np.exp(-X @ true_beta))
C = np.random.exponential(5, N)
durations = np.minimum(T_true, C)
events = (T_true <= C).astype(int)

km = fit_kaplan_meier(durations, events)
cox = fit_cox_model(X, durations, events)
c_stat = survival_concordance(-X @ cox["coefs"], durations, events)

print(f"Оценки Кокса: {cox['coefs'].round(3)}")
print(f"C-статистика: {c_stat:.3f}")
print(f"KM S(2.0) ≈ {np.interp(2.0, km['times'], km['survival']):.3f}")
```

## Функция выживания (КМ)

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "0",  "survival": 1.00, "lower": 1.00},
    {"time": "1",  "survival": 0.92, "lower": 0.88},
    {"time": "2",  "survival": 0.84, "lower": 0.79},
    {"time": "3",  "survival": 0.75, "lower": 0.69},
    {"time": "5",  "survival": 0.61, "lower": 0.54},
    {"time": "7",  "survival": 0.48, "lower": 0.41},
    {"time": "10", "survival": 0.32, "lower": 0.25}
  ],
  "lines": [
    {"dataKey": "survival", "stroke": "#3b82f6", "name": "КМ S(t)"},
    {"dataKey": "lower",    "stroke": "#ef4444", "name": "95% нижняя граница"}
  ]
}
```

## Справочник параметров

| Символ | Название | Описание | Типичный диапазон |
| :--- | :--- | :--- | :--- |
| $\lambda(t)$ | Интенсивность риска | Мгновенная вероятность события | 0 – $\infty$ |
| $\boldsymbol{\beta}$ | Коэффициенты Кокса | Log hazard ratio на единицу ковариаты | −3 – 3 |
| $e^{\beta_k}$ | Hazard ratio | Множитель риска при изменении $x_k$ на 1 | 0,1 – 10 |
| $C$ | C-статистика | Дискриминационная способность модели | 0,5 – 1,0 |

## Ограничения и расширения

- **Пропорциональные риски:** Модель Кокса предполагает постоянство $e^{\boldsymbol{\beta}^T\mathbf{x}}$ во времени; тест Шонфельда проверяет это.
- **Временно-зависимые ковариаты:** Долг/капитал меняется со временем; расширенная модель Кокса допускает TV-ковариаты.
- **Режимо-зависимые интенсивности:** HMM со скрытыми состояниями и режимо-зависимым $\lambda_k(t)$ моделирует систематические изменения среды.
- **Глубокое обучение:** DeepHit и DeepSurv обобщают модели выживаемости нейросетями, захватывая нелинейные взаимодействия.

## Практические применения

1. **Кредитный скоринг:** Оценка PD на 3–5-летнем горизонте через модель Кокса с финансовыми ковариатами.
2. **Жизненный цикл клиента (CLV):** Прогнозирование отказа от подписки (churn) методами выживаемости.
3. **HFT:** Анализ времени жизни лимитного ордера — когда он будет исполнен или отменён.
4. **Стресс-тестирование:** Оценка вероятности дефолта корпоративных облигаций при различных макросценариях.

## Связанные темы
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]

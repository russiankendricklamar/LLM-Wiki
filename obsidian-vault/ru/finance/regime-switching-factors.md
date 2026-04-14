---
title: "Факторные стратегии со сменой режимов"
category: "Алгоритмы и ML"
order: 68
lang: "ru"
slug: "regime-switching-factors"
---
# Факторные стратегии со сменой режимов

Финансовые рынки подвержены структурным сдвигам — **режимам**. Фактор, превосходящий бенчмарк в бычьем рынке (Momentum), может катастрофически проигрывать в кризис. **Модели смены режимов** на основе скрытых марковских цепей (HMM) идентифицируют латентные состояния рынка и динамически адаптируют факторные экспозиции.

## Математический аппарат

### Скрытые марковские модели (HMM)

Рынок находится в скрытом состоянии $S_t \in \{1, \dots, K\}$. Переходы управляются матрицей $\mathbf{P}$ с элементами $p_{ij} = P(S_{t+1}=j \mid S_t=i)$. Наблюдаемые доходности:

$$
R_t \mid S_t = k \sim \mathcal{N}(\mu_k, \Sigma_k)
$$

### Алгоритм Баума-Велша

Параметры $\theta = (\mathbf{P}, \{\mu_k\}, \{\Sigma_k\})$ оцениваются EM-алгоритмом:

**E-шаг** (алгоритм прямого-обратного хода):
$$
\alpha_t(k) = p(R_1,\dots,R_t, S_t=k),\quad
\beta_t(k)  = p(R_{t+1},\dots,R_T \mid S_t=k)
$$
$$
\gamma_t(k) = \frac{\alpha_t(k)\,\beta_t(k)}{\sum_j \alpha_t(j)\,\beta_t(j)}, \quad
\xi_t(i,j) = \frac{\alpha_t(i)\,p_{ij}\,b_j(R_{t+1})\,\beta_{t+1}(j)}{\sum_{i,j}}
$$

**M-шаг:**
$$
\hat{p}_{ij} = \frac{\sum_t \xi_t(i,j)}{\sum_t \gamma_t(i)}, \quad
\hat{\mu}_k = \frac{\sum_t \gamma_t(k)\,R_t}{\sum_t \gamma_t(k)}
$$

### Адаптивная бета и ожидаемая продолжительность режима

Режимо-условный коэффициент бета:

$$
\mathbb{E}[R_{i,t}] = \alpha_{S_t} + \sum_k \gamma_t(k)\,\beta_{i,k}\,F_t
$$

Ожидаемая продолжительность режима $k$: $d_k = \frac{1}{1-p_{kk}}$.

При $p_{kk} = 0{,}95$ режим длится в среднем 20 периодов — достаточно для ребалансировки.

### Алгоритм Витерби

Оптимальная последовательность скрытых состояний находится динамическим программированием:

$$
\delta_t(k) = \max_{s_{1:t-1}} p(S_t=k, s_{1:t-1}, R_{1:t})
$$

$$
\delta_t(j) = \max_i\bigl[\delta_{t-1}(i)\,p_{ij}\bigr]\,b_j(R_t)
$$

## Python-реализация

```python
import numpy as np
from scipy.stats import multivariate_normal

class GaussianHMM:
    """Скрытая марковская модель с гауссовыми эмиссиями."""

    def __init__(self, n_states: int = 2, n_iter: int = 100, tol: float = 1e-4):
        self.K = n_states
        self.n_iter = n_iter
        self.tol = tol

    def fit(self, X: np.ndarray) -> "GaussianHMM":
        """EM (Баум-Велш) для оценки параметров HMM."""
        T, d = X.shape
        K = self.K
        np.random.seed(42)
        idx = np.random.choice(T, K, replace=False)
        self.mu    = X[idx].copy()
        self.sigma = np.array([np.eye(d) for _ in range(K)])
        self.A     = np.ones((K, K)) / K
        self.pi    = np.ones(K) / K

        prev_ll = -np.inf
        for _ in range(self.n_iter):
            # E-шаг
            log_b = np.array([
                multivariate_normal.logpdf(X, self.mu[k], self.sigma[k])
                for k in range(K)
            ]).T   # (T, K)

            alpha = self._forward(log_b)
            beta  = self._backward(log_b)
            gamma = alpha + beta
            gamma -= gamma.max(axis=1, keepdims=True)
            gamma = np.exp(gamma)
            gamma /= gamma.sum(axis=1, keepdims=True)

            xi = np.zeros((T-1, K, K))
            for t in range(T - 1):
                for i in range(K):
                    for j in range(K):
                        xi[t, i, j] = (np.exp(alpha[t, i])
                                       * self.A[i, j]
                                       * np.exp(log_b[t+1, j])
                                       * np.exp(beta[t+1, j]))
                xi[t] /= xi[t].sum() + 1e-300

            # M-шаг
            self.pi = gamma[0] / gamma[0].sum()
            self.A  = xi.sum(axis=0) / xi.sum(axis=0).sum(axis=1, keepdims=True)
            for k in range(K):
                w = gamma[:, k]
                self.mu[k]    = (w[:, None] * X).sum(axis=0) / w.sum()
                diff = X - self.mu[k]
                self.sigma[k] = (w[:, None, None] * diff[:, :, None] *
                                 diff[:, None, :]).sum(axis=0) / w.sum()
                self.sigma[k] += 1e-6 * np.eye(d)

            ll = (log_b * gamma).sum()
            if abs(ll - prev_ll) < self.tol:
                break
            prev_ll = ll
        return self

    def _forward(self, log_b: np.ndarray) -> np.ndarray:
        T, K = log_b.shape
        alpha = np.zeros((T, K))
        alpha[0] = np.log(self.pi + 1e-300) + log_b[0]
        for t in range(1, T):
            for j in range(K):
                alpha[t, j] = (np.log(np.exp(alpha[t-1]) @ self.A[:, j] + 1e-300)
                                + log_b[t, j])
        return alpha

    def _backward(self, log_b: np.ndarray) -> np.ndarray:
        T, K = log_b.shape
        beta = np.zeros((T, K))
        for t in range(T-2, -1, -1):
            for i in range(K):
                beta[t, i] = np.log(np.sum(
                    self.A[i] * np.exp(log_b[t+1] + beta[t+1])
                ) + 1e-300)
        return beta

    def predict_proba(self, X: np.ndarray) -> np.ndarray:
        """Апостериорные вероятности режимов."""
        log_b = np.array([
            multivariate_normal.logpdf(X, self.mu[k], self.sigma[k])
            for k in range(self.K)
        ]).T
        alpha = self._forward(log_b)
        beta  = self._backward(log_b)
        gamma = np.exp(alpha + beta)
        return gamma / gamma.sum(axis=1, keepdims=True)

# ---- Пример ----
np.random.seed(42)
T = 500
bear = np.random.multivariate_normal([-0.01], [[0.04**2]], 200)
bull = np.random.multivariate_normal([0.008], [[0.015**2]], 300)
X = np.vstack([bear, bull])
np.random.shuffle(X)

model = GaussianHMM(n_states=2, n_iter=50)
model.fit(X)
probs = model.predict_proba(X)

for k in range(model.K):
    print(f"Режим {k}: μ={model.mu[k][0]*100:.3f}%  "
          f"σ={np.sqrt(model.sigma[k][0,0])*100:.2f}%  "
          f"d={1/(1-model.A[k,k]):.1f} периодов")
```

## Вероятности режимов

```chart
{
  "type": "line",
  "xAxis": "period",
  "data": [
    {"period": "T1",  "bull": 0.90, "bear": 0.10},
    {"period": "T50", "bull": 0.85, "bear": 0.15},
    {"period": "T100","bull": 0.30, "bear": 0.70},
    {"period": "T150","bull": 0.10, "bear": 0.90},
    {"period": "T200","bull": 0.60, "bear": 0.40},
    {"period": "T250","bull": 0.88, "bear": 0.12}
  ],
  "lines": [
    {"dataKey": "bull", "stroke": "#10b981", "name": "P(Бычий режим)"},
    {"dataKey": "bear", "stroke": "#ef4444", "name": "P(Медвежий режим)"}
  ]
}
```

## Справочник параметров

| Символ | Название | Описание | Типичный диапазон |
| :--- | :--- | :--- | :--- |
| $K$ | Число режимов | Скрытых состояний | 2 – 4 |
| $p_{kk}$ | Вероятность удержания | Персистентность режима | 0,90 – 0,99 |
| $d_k$ | Ожидаемая продолжительность | $1/(1-p_{kk})$ периодов | 10 – 100 |
| $\mu_k$ | Средняя доходность режима $k$ | Бычий/медвежий | −2% – +2% в день |
| $\Sigma_k$ | Ковариационная матрица режима | Уровень волатильности | Зависит от актива |

## Ограничения и расширения

- **Выбор числа состояний:** AIC/BIC или LR-тест помогают выбрать $K$; слишком большое $K$ приводит к переобучению.
- **Нестационарность:** Вероятности переходов меняются во времени; режимо-switching модель с TV-матрицей переходов (Filardo 1994) учитывает это.
- **Скрытые полумарковские модели:** HSMM моделируют явное распределение продолжительности режимов, преодолевая ограничение геометрического распределения HMM.

## Практические применения

1. **Динамическое распределение по факторам:** При высокой $P(S_t=\text{Bear})$ стратегия наклоняется в сторону Low-Vol и Quality, снижая Momentum.
2. **Риск-менеджмент:** HMM-режим используется как условное распределение в stress-VaR и CVaR для сценарного анализа.
3. **Управление целевой волатильностью:** Масштабирование позиции пропорционально $1/\sigma_{S_t}$ снижает максимальную просадку.

## Связанные темы
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]

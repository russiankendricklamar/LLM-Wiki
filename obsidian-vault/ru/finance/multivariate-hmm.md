---
title: "Многомерные скрытые марковские модели"
category: "Алгоритмы и ML"
order: 82
lang: "ru"
---

# Многомерные скрытые марковские модели

**Многомерная скрытая марковская модель (Multivariate HMM)** обобщает классическую HMM на случай, когда наблюдения — это векторы из $\mathbb{R}^d$, а не скалярные значения. В финансах это позволяет одновременно учитывать несколько активов или факторов при определении рыночного режима: «бычий», «медвежий», «кризисный».

## Напоминание: скалярная HMM

Скрытое состояние $z_t \in \{1, \ldots, K\}$, наблюдение $x_t$.

- **Начальное распределение**: $\pi_k = P(z_1 = k)$
- **Матрица переходов**: $A_{kl} = P(z_t = l \mid z_{t-1} = k)$
- **Эмиссионное распределение**: $B_k(x_t) = p(x_t \mid z_t = k)$

## Многомерный случай: гауссова смесь

Наблюдение $\mathbf{x}_t \in \mathbb{R}^d$ (например, доходности $d$ активов). Эмиссия для состояния $k$:

$$
p(\mathbf{x}_t \mid z_t = k) = \mathcal{N}(\mathbf{x}_t \mid \boldsymbol{\mu}_k, \boldsymbol{\Sigma}_k)
$$

Параметры:
- $\boldsymbol{\mu}_k \in \mathbb{R}^d$ — средняя доходность в режиме $k$
- $\boldsymbol{\Sigma}_k \in \mathbb{R}^{d \times d}$ — ковариационная матрица в режиме $k$

**Ключевое преимущество**: в режиме «кризис» $\boldsymbol{\Sigma}_k$ захватывает рост корреляций между активами — явление, которое недоступно скалярным моделям.

## Алгоритм Баума-Велча (многомерный EM)

### E-шаг: прямо-обратный алгоритм

**Прямые переменные** (forward):

$$
\alpha_t(k) = p(\mathbf{x}_{1:t}, z_t = k) = \mathcal{N}(\mathbf{x}_t; \boldsymbol{\mu}_k, \boldsymbol{\Sigma}_k) \sum_l A_{lk} \alpha_{t-1}(l)
$$

**Обратные переменные** (backward):

$$
\beta_t(k) = p(\mathbf{x}_{t+1:T} \mid z_t = k) = \sum_l A_{kl} \mathcal{N}(\mathbf{x}_{t+1}; \boldsymbol{\mu}_l, \boldsymbol{\Sigma}_l) \beta_{t+1}(l)
$$

**Апостериорные вероятности**:

$$
\gamma_t(k) = P(z_t = k \mid \mathbf{x}_{1:T}) = \frac{\alpha_t(k) \beta_t(k)}{\sum_l \alpha_t(l) \beta_t(l)}
$$

$$
\xi_t(k, l) = P(z_t = k, z_{t+1} = l \mid \mathbf{x}_{1:T}) \propto \alpha_t(k) A_{kl} \mathcal{N}(\mathbf{x}_{t+1}; \boldsymbol{\mu}_l, \boldsymbol{\Sigma}_l) \beta_{t+1}(l)
$$

### M-шаг: обновление параметров

$$
A_{kl}^{\text{new}} = \frac{\sum_{t=1}^{T-1} \xi_t(k,l)}{\sum_{t=1}^{T-1} \gamma_t(k)}
$$

$$
\boldsymbol{\mu}_k^{\text{new}} = \frac{\sum_t \gamma_t(k) \mathbf{x}_t}{\sum_t \gamma_t(k)}
$$

$$
\boldsymbol{\Sigma}_k^{\text{new}} = \frac{\sum_t \gamma_t(k) (\mathbf{x}_t - \boldsymbol{\mu}_k^{\text{new}})(\mathbf{x}_t - \boldsymbol{\mu}_k^{\text{new}})^\top}{\sum_t \gamma_t(k)}
$$

## Практическая реализация

```python
import numpy as np
from scipy.stats import multivariate_normal
from typing import Optional

class MultivariateHMM:
    """
    Гауссова многомерная HMM с обучением через EM (Baum-Welch).
    """
    def __init__(self, n_states: int, n_features: int,
                 n_iter: int = 100, tol: float = 1e-4,
                 random_state: Optional[int] = None):
        self.K = n_states
        self.d = n_features
        self.n_iter = n_iter
        self.tol = tol
        self.rng = np.random.default_rng(random_state)

        # Инициализация параметров
        self.pi = np.full(self.K, 1.0 / self.K)
        self.A = self.rng.dirichlet(np.ones(self.K), size=self.K)
        self.mu = self.rng.randn(self.K, self.d) * 0.01
        self.sigma = np.stack([np.eye(self.d)] * self.K)

    def _emission(self, X: np.ndarray) -> np.ndarray:
        """Матрица правдоподобий: shape (T, K)."""
        T = len(X)
        logB = np.zeros((T, self.K))
        for k in range(self.K):
            try:
                logB[:, k] = multivariate_normal.logpdf(
                    X, mean=self.mu[k], cov=self.sigma[k]
                )
            except np.linalg.LinAlgError:
                logB[:, k] = -1e10
        # Нормировка для численной стабильности
        B = np.exp(logB - logB.max(axis=1, keepdims=True))
        return B

    def _forward_backward(self, X: np.ndarray) -> tuple:
        T = len(X)
        B = self._emission(X)

        # Forward
        alpha = np.zeros((T, self.K))
        alpha[0] = self.pi * B[0]
        scale = np.zeros(T)
        scale[0] = alpha[0].sum()
        alpha[0] /= scale[0] + 1e-300

        for t in range(1, T):
            alpha[t] = (alpha[t-1] @ self.A) * B[t]
            scale[t] = alpha[t].sum()
            alpha[t] /= scale[t] + 1e-300

        # Backward
        beta = np.zeros((T, self.K))
        beta[-1] = 1.0
        for t in range(T-2, -1, -1):
            beta[t] = (self.A * B[t+1] * beta[t+1]).sum(axis=1)
            beta[t] /= scale[t+1] + 1e-300

        log_likelihood = np.sum(np.log(scale + 1e-300))
        return alpha, beta, B, log_likelihood

    def fit(self, X: np.ndarray) -> "MultivariateHMM":
        """X: shape (T, d)"""
        prev_ll = -np.inf
        for iteration in range(self.n_iter):
            alpha, beta, B, ll = self._forward_backward(X)
            T = len(X)

            # Gamma
            gamma = alpha * beta
            gamma /= gamma.sum(axis=1, keepdims=True) + 1e-300

            # Xi (T-1, K, K)
            xi = np.zeros((T-1, self.K, self.K))
            for t in range(T-1):
                xi[t] = (alpha[t, :, None] * self.A
                         * B[t+1] * beta[t+1])
                xi[t] /= xi[t].sum() + 1e-300

            # M-step
            self.pi = gamma[0]
            self.A = xi.sum(axis=0)
            self.A /= self.A.sum(axis=1, keepdims=True) + 1e-300

            gamma_sum = gamma.sum(axis=0)  # (K,)
            self.mu = (gamma.T @ X) / (gamma_sum[:, None] + 1e-300)
            for k in range(self.K):
                diff = X - self.mu[k]
                self.sigma[k] = (gamma[:, k, None] * diff).T @ diff
                self.sigma[k] /= gamma_sum[k] + 1e-300
                self.sigma[k] += 1e-6 * np.eye(self.d)  # регуляризация

            if abs(ll - prev_ll) < self.tol:
                break
            prev_ll = ll
        return self

    def predict(self, X: np.ndarray) -> np.ndarray:
        """Алгоритм Витерби: наиболее вероятная последовательность состояний."""
        T = len(X)
        B = self._emission(X)

        delta = np.zeros((T, self.K))
        psi = np.zeros((T, self.K), dtype=int)

        delta[0] = np.log(self.pi + 1e-300) + np.log(B[0] + 1e-300)
        for t in range(1, T):
            trans = delta[t-1, :, None] + np.log(self.A + 1e-300)
            psi[t] = trans.argmax(axis=0)
            delta[t] = trans.max(axis=0) + np.log(B[t] + 1e-300)

        # Backtrack
        states = np.zeros(T, dtype=int)
        states[-1] = delta[-1].argmax()
        for t in range(T-2, -1, -1):
            states[t] = psi[t+1, states[t+1]]
        return states

    def predict_proba(self, X: np.ndarray) -> np.ndarray:
        """Апостериорные вероятности состояний: shape (T, K)."""
        alpha, beta, _, _ = self._forward_backward(X)
        gamma = alpha * beta
        gamma /= gamma.sum(axis=1, keepdims=True) + 1e-300
        return gamma
```

### Применение к акциям

```python
import pandas as pd

# X: дневные доходности 3 активов (SPY, TLT, GLD)
# X.shape = (T, 3)

model = MultivariateHMM(n_states=3, n_features=3, n_iter=200, random_state=42)
model.fit(X)

regimes = model.predict(X)
proba = model.predict_proba(X)

# Интерпретация режимов по средним доходностям
for k in range(3):
    print(f"Режим {k}: μ={model.mu[k].round(4)}, "
          f"corr_12={model.sigma[k][0,1]/(np.sqrt(model.sigma[k][0,0]*model.sigma[k][1,1])):.2f}")
```

## Выбор числа состояний

| Критерий | Формула | Штраф за сложность |
|---------|---------|-------------------|
| AIC | $-2\ln L + 2p$ | Мягкий |
| BIC | $-2\ln L + p\ln T$ | Умеренный |
| HQC | $-2\ln L + 2p\ln\ln T$ | Между AIC и BIC |

Для $K=3$ состояний и $d=5$ активов: $p = K(K-1) + Kd + Kd(d+1)/2 = 6 + 15 + 75 = 96$ параметров.

## Связанные статьи

- [[hidden-markov-models|Скрытые марковские модели]] — скалярная версия
- [[regime-switching-factors|Режимы переключения факторов]] — применение HMM в факторных моделях
- [[kalman-filter|Фильтр Калмана]] — линейная альтернатива для непрерывных состояний
- [[copula-models|Копульные модели]] — альтернативный способ задать кризисные корреляции
- [[volatility-forecasting|Прогнозирование волатильности]] — HMM как вспомогательный модуль

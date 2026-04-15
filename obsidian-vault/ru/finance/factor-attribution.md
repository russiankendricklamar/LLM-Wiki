---
title: "Факторная атрибуция и декомпозиция риска"
category: "Управление рисками"
order: 116
lang: "ru"
---

# Факторная атрибуция и декомпозиция риска

**Факторная атрибуция** разбивает доходность и риск портфеля по источникам: рыночные факторы (рынок, стоимость, моментум) и специфический риск. Обязательна для объяснения результатов клиентам и управляющим.

## Модель Бринсона-Худа-Бибауэра (BHB)

Классическая декомпозиция избыточной доходности портфеля против бенчмарка:

$$
R_P - R_B = \underbrace{\sum_i (w_i^P - w_i^B) R_i^B}_{\text{Allocation}} + \underbrace{\sum_i w_i^B (R_i^P - R_i^B)}_{\text{Selection}} + \underbrace{\sum_i (w_i^P - w_i^B)(R_i^P - R_i^B)}_{\text{Interaction}}
$$

## Факторный риск (многофакторная модель)

Для портфеля $\mathbf{w}$ с факторными нагрузками $B$ (матрица $N\times K$):

$$
\sigma_P^2 = \mathbf{w}^\top \underbrace{B F B^\top}_{\Sigma_{\text{factor}}} \mathbf{w} + \mathbf{w}^\top \underbrace{D}_{\text{idio}} \mathbf{w}
$$

**Маргинальный вклад в риск (MCTR)**:

$$
\text{MCTR}_i = \frac{\partial \sigma_P}{\partial w_i} = \frac{(\Sigma \mathbf{w})_i}{\sigma_P}
$$

**Процентный вклад в риск**:

$$
\text{PCTR}_i = \frac{w_i \cdot \text{MCTR}_i}{\sigma_P}
$$

```python
import numpy as np
import pandas as pd
from dataclasses import dataclass

@dataclass
class FactorModel:
    """Многофакторная модель для атрибуции риска."""
    factor_returns: pd.DataFrame    # (T, K): факторные доходности
    factor_loadings: pd.DataFrame   # (N, K): нагрузки активов
    specific_var: pd.Series         # (N,): специфическая дисперсия

    @property
    def factor_cov(self) -> np.ndarray:
        return self.factor_returns.cov().values

    def total_cov(self) -> np.ndarray:
        B = self.factor_loadings.values
        F = self.factor_cov
        D = np.diag(self.specific_var.values)
        return B @ F @ B.T + D

    def portfolio_risk(self, weights: np.ndarray) -> float:
        Sigma = self.total_cov()
        return np.sqrt(weights @ Sigma @ weights)

    def risk_attribution(self, weights: np.ndarray) -> pd.DataFrame:
        """Декомпозиция риска по факторам и специфическому риску."""
        B = self.factor_loadings.values
        F = self.factor_cov
        D = np.diag(self.specific_var.values)
        sigma_p = self.portfolio_risk(weights)

        # Факторный вклад
        factor_contrib = {}
        factor_exp = weights @ B   # (K,): экспозиция к факторам
        for k, fname in enumerate(self.factor_returns.columns):
            f_k = np.zeros(len(self.factor_returns.columns))
            f_k[k] = 1.0
            contrib = factor_exp[k] * (F @ factor_exp)[k] / sigma_p**2
            factor_contrib[fname] = contrib * sigma_p

        # Специфический вклад
        specific = float(weights @ D @ weights / sigma_p)
        factor_contrib['Specific'] = specific

        result = pd.Series(factor_contrib, name='risk_attribution')
        result /= result.sum()  # в процентах
        return result


def brinson_attribution(portfolio_weights: pd.Series,
                          benchmark_weights: pd.Series,
                          portfolio_returns: pd.Series,
                          benchmark_returns: pd.Series) -> pd.DataFrame:
    """
    BHB-декомпозиция по секторам.
    Все серии индексированы по секторам.
    """
    wp = portfolio_weights.reindex(benchmark_weights.index, fill_value=0)
    wb = benchmark_weights
    rp = portfolio_returns.reindex(benchmark_weights.index, fill_value=0)
    rb = benchmark_returns

    allocation = (wp - wb) * rb
    selection  = wb * (rp - rb)
    interaction = (wp - wb) * (rp - rb)

    result = pd.DataFrame({
        'allocation':  allocation,
        'selection':   selection,
        'interaction': interaction,
    })
    result['total'] = result.sum(axis=1)
    return result


def tracking_error_decomposition(active_weights: np.ndarray,
                                   cov_matrix: np.ndarray) -> dict:
    """
    Разложение tracking error по активным позициям.
    active_weights = portfolio_weights - benchmark_weights
    """
    te_var = active_weights @ cov_matrix @ active_weights
    te = np.sqrt(te_var)
    mctr = (cov_matrix @ active_weights) / te
    pctr = active_weights * mctr / te
    return {
        'tracking_error_annualized': te * np.sqrt(252),
        'mctr': mctr,
        'pctr': pctr,
        'top_contributors': pd.Series(pctr).nlargest(5).to_dict()
    }
```

## Атрибуция Шарпа vs Аpriori

| Подход | Когда | Формула |
|--------|-------|---------|
| Ex-post | Анализ результатов | Реализованные доходности и факторы |
| Ex-ante | Управление риском | Ожидаемые факторные нагрузки |
| Risk-budgeting | Конструкция портфеля | PCTR → равные вклады |

## Связанные статьи

- [[fama-macbeth-regression|Регрессия Фамы-МакБета]] — факторные нагрузки
- [[hierarchical-risk-parity|HRP]] — альтернатива risk budgeting
- [[ts-cs-factor-analysis|Факторный анализ TS/CS]] — временная vs. поперечная
- [[eigenportfolio-rmt|Eigenportfolio и RMT]] — очищение ковариационной матрицы

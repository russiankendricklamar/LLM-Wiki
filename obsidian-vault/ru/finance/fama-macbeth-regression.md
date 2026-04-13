---
title: "Регрессия Фама-Макбета"
category: "Алгоритмы и ML"
order: 162
lang: "ru"
slug: "fama-macbeth-regression"
---
# Регрессия Фама-Макбета

**Регрессия Фама-Макбета** — это двухэтапная процедура, используемая для оценки премий за риск при ценообразовании активов. Она особенно эффективна для работы с кросс-секционными корреляциями в панельных данных.

## Двухэтапная процедура

### Этап 1: Регрессии временных рядов
Для каждого актива $i$ проводится регрессия его избыточной доходности $R_{i,t}$ на доходность одного или нескольких факторов $F_t$ для оценки факторных нагрузок (бета):

$$
R_{i,t} = \alpha_i + \beta_{i,F} F_t + \epsilon_{i,t} \quad \text{для } t=1, \dots, T
$$

### Этап 2: Кросс-секционные регрессии
На каждом шаге во времени $t$ проводится регрессия кросс-секции доходностей активов на оцененные беты из Этапа 1 для оценки премии за риск $\lambda_t$:

$$
R_{i,t} = \gamma_{0,t} + \gamma_{1,t} \hat{\beta}_{i,F} + \eta_{i,t} \quad \text{для } i=1, \dots, N
$$

Итоговая оценка премии за риск представляет собой среднее значение временного ряда $\hat{\gamma}_{1,t}$:

$$
\hat{\lambda} = \frac{1}{T} \sum_{t=1}^T \hat{\gamma}_{1,t}
$$

## Преимущества
- Легко справляется с большими кросс-секциями.
- Обеспечивает стандартные ошибки, учитывающие кросс-секционную корреляцию в остатках.

## Реализация на Python

Использование `statsmodels` для кросс-секционных регрессий:

```python
import pandas as pd
import statsmodels.api as sm

def fama_macbeth(returns, factors):
    # returns: DataFrame (T x N), factors: DataFrame (T x K)
    # Этап 1: Регрессии временных рядов для получения бет
    betas = []
    for col in returns.columns:
        model = sm.OLS(returns[col], sm.add_constant(factors)).fit()
        betas.append(model.params[1:])
    betas = pd.DataFrame(betas, index=returns.columns)

    # Этап 2: Кросс-секционные регрессии
    lambdas = []
    for t in returns.index:
        model = sm.OLS(returns.loc[t], sm.add_constant(betas)).fit()
        lambdas.append(model.params)
    
    return pd.DataFrame(lambdas).mean()
```

## Связанные темы
- [[ts-cs-factor-analysis]]
- [[portfolio-optimization-ml]]
- [[mcmc]]
- [[black-scholes]]

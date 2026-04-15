---
title: "SHAP и интерпретируемость ML-моделей"
category: "Алгоритмы и ML"
order: 108
lang: "ru"
---

# SHAP и интерпретируемость ML-моделей

**SHAP (SHapley Additive exPlanations)** — теоретически обоснованный фреймворк для объяснения прогнозов любых ML-моделей, основанный на значениях Шепли из теории кооперативных игр. В финансах SHAP обязателен для объяснения кредитных решений (GDPR, SR 11-7), понимания факторного вклада и выявления утечек данных.

## Значения Шепли

Вклад признака $j$ в прогноз для объекта $x$:

$$
\phi_j(f, x) = \sum_{S \subseteq F \setminus \{j\}} \frac{|S|!\,(|F|-|S|-1)!}{|F|!} \left[f(S \cup \{j\}) - f(S)\right]
$$

где $F$ — множество всех признаков, $f(S)$ — ожидаемое значение модели при известных признаках $S$ (остальные маргинализированы).

**Свойства**:
- **Эффективность**: $\sum_j \phi_j = f(x) - E[f(X)]$
- **Симметрия**: одинаково вносящие вклад признаки имеют равные $\phi_j$
- **Пустой игрок**: признак, не влияющий на прогноз, имеет $\phi_j = 0$

## TreeSHAP (для деревьев)

Точный алгоритм за $O(TLD^2)$, где $T$ — число деревьев, $L$ — листья, $D$ — глубина:

```python
import shap
import lightgbm as lgb
import numpy as np
import pandas as pd

def compute_shap_values(model: lgb.Booster,
                         X: pd.DataFrame,
                         background_size: int = 100) -> pd.DataFrame:
    """
    Вычисление SHAP-значений для LightGBM / XGBoost.
    Возвращает DataFrame с SHAP-значениями shape (n_samples, n_features).
    """
    explainer = shap.TreeExplainer(model)
    shap_vals = explainer.shap_values(X)
    if isinstance(shap_vals, list):
        shap_vals = shap_vals[1]  # для бинарной классификации
    return pd.DataFrame(shap_vals, columns=X.columns, index=X.index)


def shap_feature_importance(shap_df: pd.DataFrame) -> pd.Series:
    """Глобальная важность = mean |SHAP|."""
    return shap_df.abs().mean().sort_values(ascending=False)


def shap_interaction_matrix(model: lgb.Booster,
                              X: pd.DataFrame) -> pd.DataFrame:
    """
    SHAP interaction values — вклад пар признаков.
    Дорого по памяти: O(n * p^2).
    """
    explainer = shap.TreeExplainer(model)
    interactions = explainer.shap_interaction_values(X)
    # interactions shape: (n, p, p)
    # диагональ = основной эффект признака
    main_effects = np.diagonal(interactions, axis1=1, axis2=2)
    inter_sum = interactions.mean(axis=0)
    return pd.DataFrame(inter_sum, index=X.columns, columns=X.columns)


def detect_data_leakage(shap_df: pd.DataFrame,
                         suspicious_features: list[str],
                         threshold: float = 0.1) -> list[str]:
    """
    Признак подозрителен, если его |SHAP| непропорционально велик.
    """
    total_importance = shap_df.abs().mean().sum()
    leaked = []
    for feat in suspicious_features:
        if feat in shap_df.columns:
            share = shap_df[feat].abs().mean() / total_importance
            if share > threshold:
                leaked.append(feat)
    return leaked


def rolling_shap(model: lgb.Booster, X: pd.DataFrame,
                  window: int = 60) -> pd.DataFrame:
    """
    SHAP-значения на скользящем окне — отслеживание дрейфа признаков.
    """
    results = []
    explainer = shap.TreeExplainer(model)
    for i in range(window, len(X)):
        subset = X.iloc[i-window:i]
        sv = explainer.shap_values(subset)
        if isinstance(sv, list): sv = sv[1]
        mean_abs = pd.Series(np.abs(sv).mean(axis=0), index=X.columns)
        mean_abs.name = X.index[i]
        results.append(mean_abs)
    return pd.DataFrame(results)
```

## Финансовые применения

| Применение | Что смотрим |
|-----------|------------|
| Кредитный скоринг | Объяснение отказа клиенту (GDPR Art.22) |
| Факторная модель | Какие факторы движут прогнозом сегодня |
| Детектор утечки | Признак с SHAP >> ожидаемого |
| Мониторинг дрейфа | Изменение важности признаков во времени |
| Регуляторный отчёт | SR 11-7 требует объяснимости моделей |

## SHAP vs LIME vs Permutation Importance

| Метод | Точность | Скорость | Согласованность |
|-------|---------|---------|----------------|
| SHAP (TreeSHAP) | Точный | Быстро для деревьев | Полная |
| LIME | Аппроксимация | Быстро | Нестабильный |
| Permutation | Глобальный | Средне | Только global |

## Связанные статьи

- [[lightgbm-xgboost|LightGBM/XGBoost]] — модели, для которых TreeSHAP точен
- [[probability-of-backtest-overfitting|Вероятность переобучения]] — валидация перед деплоем
- [[alpha-factor-discovery|Поиск альфа-факторов]] — SHAP как инструмент отбора признаков
- [[fraud-detection|Обнаружение мошенничества]] — SHAP для объяснения аномалий

---
title: "SHAP and ML Model Interpretability"
category: "Algorithms and ML"
order: 108
lang: "en"
---

# SHAP and ML Model Interpretability

**SHAP (SHapley Additive exPlanations)** is a theoretically grounded framework for explaining predictions of any ML model, based on Shapley values from cooperative game theory. In finance, SHAP is mandatory for explaining credit decisions (GDPR, SR 11-7), understanding factor contributions, and detecting data leakage.

## Shapley Values

The contribution of feature $j$ to prediction for instance $x$:

$$
\phi_j(f, x) = \sum_{S \subseteq F \setminus \{j\}} \frac{|S|!\,(|F|-|S|-1)!}{|F|!} \left[f(S \cup \{j\}) - f(S)\right]
$$

where $F$ is the full feature set, $f(S)$ is the expected model output when only features $S$ are known.

**Properties**:
- **Efficiency**: $\sum_j \phi_j = f(x) - \mathbb{E}[f(X)]$
- **Symmetry**: equally contributing features have equal $\phi_j$
- **Null player**: feature with no effect has $\phi_j = 0$

## TreeSHAP

Exact algorithm in $O(TLD^2)$ — trees $T$, leaves $L$, depth $D$:

```python
import shap
import lightgbm as lgb
import numpy as np
import pandas as pd

def compute_shap_values(model: lgb.Booster,
                         X: pd.DataFrame) -> pd.DataFrame:
    """SHAP values for LightGBM/XGBoost. Returns (n_samples, n_features)."""
    explainer = shap.TreeExplainer(model)
    shap_vals = explainer.shap_values(X)
    if isinstance(shap_vals, list):
        shap_vals = shap_vals[1]  # binary classification
    return pd.DataFrame(shap_vals, columns=X.columns, index=X.index)


def shap_feature_importance(shap_df: pd.DataFrame) -> pd.Series:
    """Global importance = mean |SHAP|."""
    return shap_df.abs().mean().sort_values(ascending=False)


def shap_interaction_matrix(model: lgb.Booster,
                              X: pd.DataFrame) -> pd.DataFrame:
    """SHAP interaction values — pairwise feature contributions. O(n * p^2) memory."""
    explainer = shap.TreeExplainer(model)
    interactions = explainer.shap_interaction_values(X)
    inter_sum = interactions.mean(axis=0)
    return pd.DataFrame(inter_sum, index=X.columns, columns=X.columns)


def detect_data_leakage(shap_df: pd.DataFrame,
                         suspicious_features: list[str],
                         threshold: float = 0.1) -> list[str]:
    """Flag features whose |SHAP| share exceeds threshold — likely leakage."""
    total = shap_df.abs().mean().sum()
    leaked = []
    for feat in suspicious_features:
        if feat in shap_df.columns:
            share = shap_df[feat].abs().mean() / total
            if share > threshold:
                leaked.append(feat)
    return leaked


def rolling_shap(model: lgb.Booster, X: pd.DataFrame,
                  window: int = 60) -> pd.DataFrame:
    """Rolling SHAP importance — monitors feature drift over time."""
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

## Financial Use Cases

| Use Case | What to Examine |
|----------|----------------|
| Credit scoring | Per-customer rejection explanation (GDPR Art.22) |
| Factor model | Which factors drive today's forecast |
| Leakage detection | Feature with SHAP >> expected |
| Drift monitoring | Changing feature importance over time |
| Regulatory report | SR 11-7 model explainability |

## SHAP vs LIME vs Permutation Importance

| Method | Accuracy | Speed | Consistency |
|--------|---------|-------|-------------|
| SHAP (TreeSHAP) | Exact | Fast for trees | Full |
| LIME | Approximation | Fast | Unstable |
| Permutation | Global only | Medium | Global only |

## Related Articles

- [[lightgbm-xgboost|LightGBM/XGBoost]] — models TreeSHAP is exact for
- [[probability-of-backtest-overfitting|Backtest Overfitting]] — validation before deploy
- [[alpha-factor-discovery|Alpha Factor Discovery]] — SHAP for feature selection
- [[fraud-detection|Fraud Detection]] — SHAP for anomaly explanations

---
title: "LightGBM and XGBoost for Factor Signals"
category: "Algorithms and ML"
order: 109
lang: "en"
---

# LightGBM and XGBoost for Factor Signals

**Gradient Boosting** is the primary tool for quant traders building nonlinear factor signals. XGBoost (Chen & Guestrin, 2016) and LightGBM (Microsoft, 2017) dominate 70%+ of Kaggle financial data competition wins.

## Gradient Boosting

Each tree $f_t$ minimizes pseudo-residuals:

$$
r_{ti} = -\left[\frac{\partial L(y_i, F(x_i))}{\partial F(x_i)}\right]_{F=F_{t-1}}
$$

Final model: $F_T(x) = \sum_{t=1}^T \eta f_t(x)$, where $\eta$ is the learning rate.

**XGBoost** adds L2 regularization on leaf weights.
**LightGBM** uses GOSS (Gradient-based One-Side Sampling) and EFB (Exclusive Feature Bundling) for faster training on large datasets.

## Financial Data Challenges

- **Temporality**: no future information → `TimeSeriesSplit`
- **Non-stationarity**: factor relationships change; walk-forward validation required
- **Class imbalance**: bull/bear signals are often asymmetric

## Implementation

```python
import numpy as np
import pandas as pd
import lightgbm as lgb
from sklearn.model_selection import TimeSeriesSplit
from sklearn.metrics import roc_auc_score

def build_features(prices: pd.DataFrame, returns: pd.DataFrame) -> pd.DataFrame:
    feats = {}
    for col in returns.columns:
        r = returns[col]
        feats[f'{col}_ret_1d']  = r
        feats[f'{col}_ret_5d']  = r.rolling(5).sum()
        feats[f'{col}_ret_20d'] = r.rolling(20).sum()
        feats[f'{col}_vol_20d'] = r.rolling(20).std()
        feats[f'{col}_mom_1m']  = r.rolling(21).sum() / (r.rolling(21).std() + 1e-8)
        feats[f'{col}_rsi_14']  = _rsi(r, 14)
    return pd.DataFrame(feats).dropna()

def _rsi(r: pd.Series, n: int) -> pd.Series:
    gain = r.clip(lower=0).rolling(n).mean()
    loss = (-r.clip(upper=0)).rolling(n).mean()
    rs = gain / (loss + 1e-8)
    return 100 - 100/(1+rs)


def walk_forward_lgbm(X: pd.DataFrame, y: pd.Series,
                       n_splits: int = 5) -> dict:
    """Walk-forward validation for LightGBM. y: binary target (1=up next day)."""
    tscv = TimeSeriesSplit(n_splits=n_splits)
    params = {
        'objective': 'binary', 'metric': 'auc',
        'learning_rate': 0.05, 'num_leaves': 31,
        'min_child_samples': 50, 'feature_fraction': 0.8,
        'bagging_fraction': 0.8, 'bagging_freq': 5,
        'reg_alpha': 0.1, 'reg_lambda': 0.1, 'verbose': -1,
    }
    aucs, importances = [], []
    for train_idx, val_idx in tscv.split(X):
        X_tr, X_val = X.iloc[train_idx], X.iloc[val_idx]
        y_tr, y_val = y.iloc[train_idx], y.iloc[val_idx]
        train_ds = lgb.Dataset(X_tr, label=y_tr)
        val_ds = lgb.Dataset(X_val, label=y_val, reference=train_ds)
        model = lgb.train(params, train_ds, num_boost_round=300,
                          valid_sets=[val_ds],
                          callbacks=[lgb.early_stopping(30), lgb.log_evaluation(0)])
        pred = model.predict(X_val)
        aucs.append(roc_auc_score(y_val, pred))
        importances.append(dict(zip(X.columns, model.feature_importance('gain'))))

    feat_imp = pd.DataFrame(importances).mean().sort_values(ascending=False)
    return {'mean_auc': np.mean(aucs), 'aucs': aucs, 'feature_importance': feat_imp}


def purged_cv_split(dates, n_splits: int = 5, embargo_days: int = 5):
    """Purged + Embargoed CV splits for financial time series."""
    fold_size = len(dates) // (n_splits + 1)
    for i in range(n_splits):
        val_start = fold_size * (i + 1)
        val_end = val_start + fold_size
        embargo_end = min(val_end + embargo_days, len(dates))
        yield list(range(0, val_start)), list(range(val_end, embargo_end))
```

## Overfitting Controls

| Technique | LightGBM Parameter | Effect |
|-----------|-------------------|--------|
| Limit leaves | `num_leaves` | Primary complexity control |
| Min leaf samples | `min_child_samples` | Prevents overfit on small clusters |
| Feature sampling | `feature_fraction` | Ensembling effect |
| L1/L2 | `reg_alpha`, `reg_lambda` | Weight sparsity |
| Early stopping | `early_stopping` | By OOS metric |

## Related Articles

- [[shap-interpretability|SHAP Interpretability]] — explaining boosting predictions
- [[probability-of-backtest-overfitting|Probability of Backtest Overfitting]] — strategy validation
- [[alpha-factor-discovery|Alpha Factor Discovery]] — feature factory
- [[transformer-timeseries|Transformers for Time Series]] — neural alternative

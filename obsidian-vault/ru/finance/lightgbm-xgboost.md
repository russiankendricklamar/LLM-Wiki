---
title: "LightGBM и XGBoost для факторных сигналов"
category: "Алгоритмы и ML"
order: 109
lang: "ru"
---

# LightGBM и XGBoost для факторных сигналов

**Gradient Boosting** — основной инструмент количественных трейдеров для построения нелинейных факторных сигналов. XGBoost (Chen & Guestrin, 2016) и LightGBM (Microsoft, 2017) — два главных фреймворка, которые используются в 70%+ Kaggle-победных решений на финансовых данных.

## Градиентный бустинг: идея

Последовательно строятся деревья $f_t$, каждое из которых минимизирует псевдо-остатки:

$$
r_{ti} = -\left[\frac{\partial L(y_i, F(x_i))}{\partial F(x_i)}\right]_{F=F_{t-1}}
$$

Итоговая модель: $F_T(x) = \sum_{t=1}^T \eta f_t(x)$, где $\eta$ — learning rate.

**XGBoost** добавляет L2-регуляризацию весов листьев.  
**LightGBM** использует GOSS (Gradient-based One-Side Sampling) и EFB (Exclusive Feature Bundling) — работает быстрее на больших выборках.

## Применение в квант-финансах

### Особенности финансовых данных

- **Temporality**: нельзя использовать будущее для обучения → `TimeSeriesSplit`
- **Нестационарность**: реакция на факторы меняется; нужна walk-forward валидация
- **Класс дисбаланса**: бычьи/медвежьи сигналы часто несимметричны

```python
import numpy as np
import pandas as pd
import lightgbm as lgb
from sklearn.model_selection import TimeSeriesSplit
from sklearn.metrics import roc_auc_score

def build_features(prices: pd.DataFrame, returns: pd.DataFrame) -> pd.DataFrame:
    """
    Построение стандартного набора факторных признаков.
    prices, returns: (T, n_assets)
    """
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
    rs   = gain / (loss + 1e-8)
    return 100 - 100/(1+rs)


def walk_forward_lgbm(X: pd.DataFrame, y: pd.Series,
                       n_splits: int = 5) -> dict:
    """
    Walk-forward валидация LightGBM.
    y: бинарный таргет (1 = рост на следующий день)
    """
    tscv = TimeSeriesSplit(n_splits=n_splits)
    params = {
        'objective': 'binary',
        'metric': 'auc',
        'learning_rate': 0.05,
        'num_leaves': 31,
        'min_child_samples': 50,
        'feature_fraction': 0.8,
        'bagging_fraction': 0.8,
        'bagging_freq': 5,
        'reg_alpha': 0.1,
        'reg_lambda': 0.1,
        'verbose': -1,
    }

    aucs, importances = [], []
    for fold, (train_idx, val_idx) in enumerate(tscv.split(X)):
        X_tr, X_val = X.iloc[train_idx], X.iloc[val_idx]
        y_tr, y_val = y.iloc[train_idx], y.iloc[val_idx]

        train_ds = lgb.Dataset(X_tr, label=y_tr)
        val_ds   = lgb.Dataset(X_val, label=y_val, reference=train_ds)

        model = lgb.train(params, train_ds, num_boost_round=300,
                           valid_sets=[val_ds],
                           callbacks=[lgb.early_stopping(30), lgb.log_evaluation(0)])

        pred = model.predict(X_val)
        auc  = roc_auc_score(y_val, pred)
        aucs.append(auc)
        importances.append(dict(zip(X.columns, model.feature_importance('gain'))))

    feat_imp = pd.DataFrame(importances).mean().sort_values(ascending=False)
    return {'mean_auc': np.mean(aucs), 'aucs': aucs, 'feature_importance': feat_imp}


def purged_cv_split(dates: pd.DatetimeIndex,
                    n_splits: int = 5,
                    embargo_days: int = 5):
    """
    Purged + Embargoed splits для финансовых временных рядов.
    Удаляет embargo_days после каждого трейн-периода из валидации.
    """
    fold_size = len(dates) // (n_splits + 1)
    for i in range(n_splits):
        val_start = fold_size * (i + 1)
        val_end   = val_start + fold_size
        embargo_end = min(val_end + embargo_days, len(dates))
        train_idx = list(range(0, val_start))
        val_idx   = list(range(val_end, embargo_end))
        yield train_idx, val_idx
```

## Борьба с переобучением

| Техника | Параметр LightGBM | Эффект |
|--------|-------------------|-------|
| Ограничение листьев | `num_leaves` | Главный контроль сложности |
| Мин. объём листа | `min_child_samples` | Против переобучения на малых кластерах |
| Случайные признаки | `feature_fraction` | Ансамблирование |
| L1/L2 регуляризация | `reg_alpha`, `reg_lambda` | Разреженность весов |
| Ранняя остановка | `early_stopping` | По OOS метрике |

## Связанные статьи

- [[shap-interpretability|SHAP и интерпретируемость]] — объяснение прогнозов бустинга
- [[probability-of-backtest-overfitting|Вероятность переобучения бэктеста]] — валидация стратегий
- [[alpha-factor-discovery|Поиск альфа-факторов]] — фабрика признаков
- [[transformer-timeseries|Трансформеры для временных рядов]] — нейросетевая альтернатива

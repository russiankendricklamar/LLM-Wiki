---
title: "Alpha Factor Research"
category: "AI Finance"
order: 7
lang: "en"
slug: "alpha-factor-research"
growth: "seedling"
---
# Alpha Factor Research

## Overview

A factor is a quantifiable characteristic of a security that explains a portion of its expected return above the risk-free rate. The zoo of proposed factors has exploded: by 2020, Harvey, Liu and Zhu catalogued over 400 factors published in top academic journals. The **factor zoo problem** is the recognition that the majority of these factors are either data-mined noise or proxies for a small number of underlying economic risks.

Machine learning transforms factor research in two ways. First, it enables construction of **non-linear, interaction-rich factors** from high-dimensional raw data — price history, balance sheet items, alternative data — that classical linear models miss. Second, tools from causal inference (double ML, instrumental variables) allow distinguishing factors that causally predict returns from those that are merely correlated due to omitted variables.

## Mathematical Framework

### The Factor Model

Returns decompose as:

$$
r_t = \alpha + \sum_{k=1}^{K} \beta_k f_{k,t} + \varepsilon_t
$$

where $f_{k,t}$ are factor realisations and $\beta_k$ are exposures. Alpha is the return unexplained by risk factors. The goal of factor research is to identify robust $f_{k,t}$ with statistically significant and economically persistent predictive power.

### Information Coefficient

The **Information Coefficient (IC)** measures the cross-sectional rank correlation between a factor signal $z_t$ and forward returns $r_{t+1}$:

$$
\text{IC}_t = \text{Corr}_{\text{rank}}\bigl(z_t,\; r_{t+1}\bigr)
$$

Annualised IC > 0.05 is considered meaningful for a single factor. The **Information Ratio** (IR) captures consistency:

$$
\text{IR} = \frac{\overline{\text{IC}}}{\text{std}(\text{IC})} \cdot \sqrt{252}
$$

Higher IR means the factor delivers alpha more consistently across market conditions, less sensitive to regime changes.

### Double Machine Learning for Causal Factors

Naive regression of returns on a candidate factor $W$ is confounded by controls $X$ (sector, market cap, momentum):

$$
r = \theta W + \gamma^{\top} X + \varepsilon
$$

The OLS estimate $\hat{\theta}$ is biased when $W$ and $X$ are correlated. Double ML (Chernozhukov et al., 2018) removes confounding via partial-out residuals:

$$
\tilde{r} = r - \hat{m}(X), \quad \tilde{W} = W - \hat{\ell}(X)
$$

$$
\hat{\theta}^{\text{DML}} = \frac{\sum_i \tilde{W}_i \tilde{r}_i}{\sum_i \tilde{W}_i^2}
$$

where $\hat{m}$ and $\hat{\ell}$ are ML models (gradient boosting, random forests) fit in cross-fit folds. This yields a $\sqrt{N}$-consistent, asymptotically normal estimate of the causal effect $\theta$, even when the nuisance models are complex and high-dimensional.

### Factor Decay

Factor predictability decays over time as signals become crowded or arbed away. The IC half-life measures decay:

$$
\text{IC}(\Delta) = \text{IC}_0 \cdot e^{-\lambda \Delta}
$$

where $\Delta$ is holding period in days and $\lambda$ is the decay rate. Short-horizon price-based factors (1-day reversal) decay within hours; fundamental value factors can persist for months.

### Turnover vs Alpha Trade-off

Gross alpha $\alpha_{\text{gross}}$ must exceed transaction costs from turnover $\tau$:

$$
\alpha_{\text{net}} = \alpha_{\text{gross}} - \tau \cdot \text{TC}_{\text{per turn}}
$$

where $\text{TC}_{\text{per turn}} \approx \frac{1}{2}\text{spread} + \text{impact}$. High-IC short-lived factors often have poor net alpha after costs. Optimal factor holding period balances the decay curve against transaction costs.

## IC Decay by Factor Type

```chart
{
  "type": "line",
  "xAxis": "days",
  "data": [
    {"days": "1", "momentum": 0.04, "value": 0.06, "ml_factor": 0.07, "reversal": 0.05},
    {"days": "5", "momentum": 0.05, "value": 0.06, "ml_factor": 0.06, "reversal": 0.02},
    {"days": "10", "momentum": 0.055, "value": 0.059, "ml_factor": 0.055, "reversal": 0.01},
    {"days": "21", "momentum": 0.05, "value": 0.058, "ml_factor": 0.045, "reversal": 0.003},
    {"days": "63", "momentum": 0.035, "value": 0.055, "ml_factor": 0.03, "reversal": 0.001},
    {"days": "126", "momentum": 0.02, "value": 0.05, "ml_factor": 0.018, "reversal": 0.0},
    {"days": "252", "momentum": 0.01, "value": 0.045, "ml_factor": 0.01, "reversal": 0.0}
  ],
  "lines": [
    {"dataKey": "momentum", "stroke": "#3b82f6", "name": "Price Momentum IC"},
    {"dataKey": "value", "stroke": "#10b981", "name": "Value (B/P) IC"},
    {"dataKey": "ml_factor", "stroke": "#8b5cf6", "name": "ML Deep Factor IC"},
    {"dataKey": "reversal", "stroke": "#dc2626", "name": "Short-term Reversal IC"}
  ]
}
```

## ML-Based Factor Construction

### Gradient Boosting Factors

XGBoost/LightGBM trained on a feature matrix of raw accounting ratios, price history, and macro variables can construct a composite factor that captures non-linear interactions:

$$
\hat{\alpha}_i = f_{\text{GBDT}}\!\bigl(\text{P/E}_i,\; \text{ROE}_i,\; \text{mom}_{12M,i},\; \text{vol}_{60d,i},\; \ldots\bigr)
$$

SHAP values decompose the prediction into per-feature contributions, giving interpretable factor attribution even for a complex ensemble.

### Deep Factor Models

Gu, Kelly & Xiu (2020) train a neural network on 94 firm characteristics and 30,000 US stocks (1957–2016). A 3-layer network achieves out-of-sample $R^2$ of 0.40% monthly, more than double the 0.17% achieved by linear PCA. Key finding: non-linear interactions between characteristics — particularly between momentum and volatility — account for most of the gain over linear models.

### Auto-Encoder Latent Factors

An auto-encoder compresses the cross-section of returns into $K$ latent factors:

$$
z_t = \text{Encoder}(r_t^{\text{cross-section}}), \quad \hat{r}_t = \text{Decoder}(z_t)
$$

The latent $z_t$ serves as a learned factor model; loadings $\beta_i = \partial \hat{r}_i / \partial z_t$ replace PCA factor exposures.

## Python Implementation

```python
import numpy as np
import lightgbm as lgb
import shap
from sklearn.model_selection import TimeSeriesSplit

def compute_ic(signals: np.ndarray, forward_returns: np.ndarray) -> np.ndarray:
    """Compute cross-sectional rank IC for each time period."""
    T = signals.shape[0]
    ics = np.empty(T)
    for t in range(T):
        sig = signals[t]
        ret = forward_returns[t]
        mask = np.isfinite(sig) & np.isfinite(ret)
        if mask.sum() < 10:
            ics[t] = np.nan
            continue
        from scipy.stats import spearmanr
        ics[t], _ = spearmanr(sig[mask], ret[mask])
    return ics


def train_ml_factor(
    features: np.ndarray,          # shape (T*N, F) — panel features
    forward_returns: np.ndarray,   # shape (T*N,)
    dates: np.ndarray,             # shape (T*N,)
    n_splits: int = 5,
) -> tuple[lgb.Booster, np.ndarray]:
    """Train gradient-boosted factor with time-series cross-validation."""
    params = {
        "objective": "regression",
        "metric": "rmse",
        "learning_rate": 0.05,
        "num_leaves": 31,
        "min_child_samples": 100,
        "subsample": 0.8,
        "colsample_bytree": 0.8,
        "n_estimators": 500,
        "early_stopping_rounds": 30,
        "verbose": -1,
    }

    tscv = TimeSeriesSplit(n_splits=n_splits)
    unique_dates = np.unique(dates)
    oos_preds = np.zeros(len(forward_returns))

    final_model: lgb.Booster | None = None
    for train_idx, val_idx in tscv.split(unique_dates):
        train_dates = set(unique_dates[train_idx])
        val_dates = set(unique_dates[val_idx])
        train_mask = np.array([d in train_dates for d in dates])
        val_mask = np.array([d in val_dates for d in dates])

        dtrain = lgb.Dataset(features[train_mask], label=forward_returns[train_mask])
        dval = lgb.Dataset(features[val_mask], label=forward_returns[val_mask])

        model = lgb.train(
            params,
            dtrain,
            valid_sets=[dval],
            callbacks=[lgb.early_stopping(30), lgb.log_evaluation(period=0)],
        )
        oos_preds[val_mask] = model.predict(features[val_mask])
        final_model = model

    return final_model, oos_preds


def factor_analytics(
    model: lgb.Booster,
    features: np.ndarray,
    feature_names: list[str],
) -> dict[str, np.ndarray]:
    """Compute SHAP-based feature importance and factor exposures."""
    explainer = shap.TreeExplainer(model)
    shap_values = explainer.shap_values(features)
    mean_abs_shap = np.abs(shap_values).mean(axis=0)
    return {
        "feature_names": np.array(feature_names),
        "mean_abs_shap": mean_abs_shap,
        "shap_values": shap_values,
    }
```

## Key Results

**Gu, Kelly & Xiu (2020)**: Neural network factors achieve monthly out-of-sample $R^2 = 0.40\%$, versus 0.17% for linear PCA and 0.27% for gradient boosted trees. The annualised Sharpe of a long-short portfolio based on neural network signals reaches 2.0, vs 1.2 for the PCA benchmark.

**Double ML for Fama-French factors (Oprescu et al., 2023)**: Applying double ML reveals that the value premium's causal effect on returns is roughly 60% of the naive OLS estimate once controlling for quality, profitability, and momentum non-parametrically.

**Factor decay study (Hansis et al., 2022)**: ML composite factors constructed from 50+ raw features show IC half-life of approximately 15 trading days, compared to 40+ days for traditional book-to-market, reflecting faster arbitrage due to crowding.

## Limitations

**Multiple testing / overfitting**: With 400+ published factors and data mining on shared datasets, most published alphas are likely false discoveries. Bayesian multiple testing correction (Harvey & Liu, 2015) raises the required t-statistic threshold to around 3.0.

**Regime sensitivity**: ML factors trained on one market regime (e.g., low-rate growth) can lose their predictive power rapidly in a new regime (e.g., inflation shock). Out-of-sample testing across multiple economic cycles is essential.

**Capacity constraints**: High-IC factors are often in small-cap, illiquid stocks. Transaction costs and market impact erode net alpha when capacity is scaled, making many ML factors undeployable at institutional scale.

## Related Topics

[[temporal-fusion-transformer]] — multi-horizon return forecasting that can serve as a factor signal

[[deep-rl-execution]] — execution of factor-based strategies while controlling for market impact

[[llm-financial-analysis]] — alternative data extraction that feeds ML factor construction

generative-models-scenario — scenario simulation for factor stress testing

---
slug: "/finance/meta-labeling"
title: "Meta-Labeling Framework"
category: "Algorithms and ML"
order: 57
lang: "en"
---
# Meta-Labeling Framework (Marcos Lopez de Prado)

**Meta-Labeling** is a machine learning technique introduced by Marcos Lopez de Prado to improve the performance of financial models. It decouples the decision of **side** (buy/sell) from the decision of **size** (bet/no-bet), allowing for better risk management and reduced false positives.

## Prerequisites

[[alpha-factor-discovery]]

## Visualization

```chart
{
  "type": "bar",
  "xAxis": "threshold",
  "data": [
    {"threshold": "No filter", "precision": 0.51, "recall": 0.98, "f1": 0.67},
    {"threshold": "τ = 0.50",  "precision": 0.54, "recall": 0.91, "f1": 0.68},
    {"threshold": "τ = 0.55",  "precision": 0.61, "recall": 0.82, "f1": 0.70},
    {"threshold": "τ = 0.60",  "precision": 0.68, "recall": 0.71, "f1": 0.70},
    {"threshold": "τ = 0.65",  "precision": 0.74, "recall": 0.60, "f1": 0.66},
    {"threshold": "τ = 0.70",  "precision": 0.81, "recall": 0.46, "f1": 0.59}
  ],
  "lines": [
    {"dataKey": "precision", "stroke": "#3b82f6", "name": "Precision"},
    {"dataKey": "recall",    "stroke": "#ef4444", "name": "Recall"},
    {"dataKey": "f1",        "stroke": "#10b981", "name": "F1 Score"}
  ]
}
```

## Background and Motivation

Traditional supervised learning in finance combines direction prediction and position sizing into a single model. This conflation creates problems: a model optimized for directional accuracy may generate many small, correct predictions alongside a few large, wrong ones that dominate the P&L. Lopez de Prado introduced meta-labeling in "Advances in Financial Machine Learning" (2018) to address this by separating the two concerns.

The key insight is that side prediction (trend following, mean reversion, etc.) benefits from domain knowledge and interpretable signals, while size prediction (filtering noise from signal) benefits from machine learning's ability to detect complex regime-dependent patterns. Combining a simple primary model with a learned secondary filter consistently outperforms either alone.

## How It Works

1. **Primary Model**: A standard model (e.g., a simple moving average crossover or a deep learning model) decides the direction of the trade ($y \in \{-1, 1\}$).
2. **Meta-Labeling**: We create a secondary "meta-label" $z \in \{0, 1\}$:
   - $z=1$ if the primary model's prediction was correct (profitable).
   - $z=0$ if the primary model's prediction was incorrect (loss-making).
3. **Secondary Model**: A machine learning model is trained to predict $z$. If the secondary model predicts $z=0$, the trade is discarded, even if the primary model suggests a trade.

## Mathematical Framework

Let $\hat{y}_t \in \{-1, +1\}$ be the primary model's directional prediction at time $t$, and let $y_t$ be the realized label (sign of the forward return). The meta-label is:

$$
z_t = \mathbf{1}[\hat{y}_t = y_t]
$$

The secondary model $f_\phi$ learns $P(z_t = 1 | \mathbf{x}_t)$ — the probability that the primary model is correct given observable features $\mathbf{x}_t$. The final trading signal combines both:

$$
\text{Trade at } t \iff \hat{y}_t \neq 0 \;\text{ and }\; f_\phi(\mathbf{x}_t) > \tau
$$

where $\tau$ is a confidence threshold tuned for the desired precision-recall trade-off.

**Position sizing**: The meta-model's probability output can directly inform position size:

$$
\text{Size}_t = \text{BaseSize} \cdot (2 \cdot f_\phi(\mathbf{x}_t) - 1)
$$

This scales from zero (when $f_\phi = 0.5$, maximum uncertainty) to full size (when $f_\phi = 1$, maximum confidence).

## Benefits

- **Addresses Overfitting**: The secondary model filters out signals that occur in regimes where the primary model is known to fail.
- **Improved F1-Score**: By reducing false positives, meta-labeling often significantly increases the precision of a strategy without sacrificing too much recall.
- **Sizing**: The probability output of the secondary model can be used to determine the optimal position size.
- **Interpretability**: Keeping the primary model simple (e.g., a moving average rule) preserves interpretability and regulatory explainability.

## Financial Application

1. **Trend Following**: Filtering out "whipsaw" trades in sideways markets using regime indicators (VIX level, realized vol ratio) as features for the meta-model.
2. **Arbitrage**: Only executing arbitrage trades when market conditions (e.g., volatility, liquidity, time to close) suggest a high probability of convergence.
3. **Credit Scoring**: Adding a secondary layer to verify if a primary "high-risk" classification is likely to result in an actual default.
4. **Earnings Plays**: Primary model signals based on analyst estimate revisions; meta-model filters based on option implied vol, liquidity, and recent earnings surprise history.

## Python: Full Meta-Labeling Pipeline

```python
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, f1_score
from sklearn.model_selection import TimeSeriesSplit


def generate_meta_labels(primary_predictions, actual_outcomes):
    """Create meta-labels: 1 if primary prediction matches realized outcome."""
    return (primary_predictions == actual_outcomes).astype(int)


def apply_meta_labeling(X_train, X_test, primary_preds_train, primary_preds_test,
                        y_train, y_test, threshold=0.5):
    """
    Full meta-labeling pipeline.

    X_*: Feature matrices (regime indicators, vol metrics, etc.)
    primary_preds_*: Directional predictions from primary model
    y_*: Realized outcomes (+1 or -1)
    threshold: Confidence threshold for accepting trade
    """
    # Build meta-labels on training set
    z_train = generate_meta_labels(primary_preds_train, y_train)

    # Train secondary model on features + meta-labels
    meta_model = RandomForestClassifier(
        n_estimators=200,
        max_depth=4,
        min_samples_leaf=20,
        random_state=42
    )
    meta_model.fit(X_train, z_train)

    # Out-of-sample probability estimates
    prob_correct = meta_model.predict_proba(X_test)[:, 1]

    # Combined signal: only trade when meta-model confident
    filtered_preds = np.where(prob_correct >= threshold, primary_preds_test, 0)

    # Evaluate before and after filtering
    mask = filtered_preds != 0
    print("=== Before Meta-Labeling ===")
    active_primary = primary_preds_test != 0
    if active_primary.sum() > 0:
        f1_primary = f1_score(y_test[active_primary], primary_preds_test[active_primary],
                              average='macro')
        print(f"F1 Score: {f1_primary:.4f}, Trades: {active_primary.sum()}")

    print("\n=== After Meta-Labeling ===")
    if mask.sum() > 0:
        f1_meta = f1_score(y_test[mask], filtered_preds[mask], average='macro')
        print(f"F1 Score: {f1_meta:.4f}, Trades: {mask.sum()} "
              f"({mask.sum() / len(y_test):.1%} of signals kept)")

    return filtered_preds, prob_correct


# Synthetic example
np.random.seed(42)
n = 500
X = np.random.randn(n, 5)  # Features: vol regime, trend strength, etc.
true_signal = (X[:, 0] + X[:, 1] > 0).astype(int) * 2 - 1  # True direction

# Primary model: slightly noisy directional prediction
noise = np.random.choice([-1, 1], n, p=[0.3, 0.7])
primary = np.sign(true_signal * noise)

# Split train/test
split = int(0.7 * n)
filtered, probs = apply_meta_labeling(
    X[:split], X[split:],
    primary[:split], primary[split:],
    true_signal[:split], true_signal[split:]
)
```

## Parameter Table

| Parameter | Description | Typical Value |
|:---|:---|:---|
| $\tau$ | Confidence threshold | $0.55 – 0.70$ |
| Meta-model depth | Max tree depth in RF | $3 – 6$ |
| Min samples leaf | RF min samples per leaf | $10 – 50$ |
| Training window | Lookback for meta-labels | $252 – 504$ days |
| Features | Regime/vol/liquidity indicators | Asset-specific |

## Limitations and Extensions

- **Look-ahead bias**: Meta-labels are constructed from realized outcomes. Care must be taken to ensure the training set does not leak future information into feature construction.
- **Imbalanced classes**: In trending markets, the primary model may be correct most of the time, creating a class imbalance problem (few $z=0$ examples). SMOTE or class weighting addresses this.
- **Triple barrier labeling**: Often combined with the triple-barrier method (also from Lopez de Prado), which defines outcomes based on reaching a profit-take, stop-loss, or time-exit — replacing the simple sign-of-return label.
- **Stacking**: Meta-labeling is a form of model stacking. Multiple primary models can be combined with a single meta-learner.

## Related Topics
- [[random-matrix-theory]]
- [[hierarchical-risk-parity]]
- [[probability-of-backtest-overfitting]]
- [[monte-carlo-method]]

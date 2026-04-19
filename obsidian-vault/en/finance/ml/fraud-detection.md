---
title: "Fraud Detection for Transactions"
category: "Risk Management"
order: 63
lang: "en"
slug: "fraud-detection"
---
# Fraud Detection for Transactions

**Fraud Detection** is a critical component of risk management in banking and payments. It involves identifying unauthorized or suspicious transactions in real-time to prevent financial loss. Modern systems use a layered architecture of rule-based engines, supervised ML models, and unsupervised anomaly detectors — each operating on different signal timescales and feature spaces.

## Background

Global payment card fraud exceeded $32 billion in losses in 2022 (Nilson Report). The challenge is fundamentally asymmetric: fraud rates are typically under 0.1% of transactions, making direct model training on raw labels prone to trivial majority-class prediction. The cost asymmetry is also extreme: a missed fraud costs 10–100× more than a false alert. This shapes both model selection and the loss functions used.

## Feature Engineering

Feature engineering is the highest-leverage step. Key feature families:

- **Velocity features**: Transaction count in the last 1h, 6h, 24h, 7d per card/merchant/IP.
- **Amount features**: Ratio of current amount to historical average; deviation from usual spend pattern.
- **Geographic features**: Distance (km) between current and previous transaction location; country mismatch.
- **Temporal features**: Hour-of-day, day-of-week encoding; time since last transaction.
- **Merchant features**: MCC (Merchant Category Code) risk score; first-time merchant flag.
- **Device/channel features**: Device fingerprint; new device flag; browser agent anomaly.
- **Graph features**: Betweenness centrality of the cardholder node in a transaction graph; shared device or IP across multiple cards.

## Handling Class Imbalance

Fraud is rare (often < 0.1%). Naive training maximizes accuracy by predicting "not fraud" always. Solutions:

- **SMOTE (Synthetic Minority Over-sampling Technique)**: Generate synthetic minority samples by interpolating between nearest neighbors in feature space.
- **Cost-sensitive learning**: Assign asymmetric misclassification costs in the loss function; equivalent to upweighting minority class samples by `scale_pos_weight` in XGBoost.
- **Threshold calibration**: Default 0.5 probability threshold is inappropriate; optimize on the precision-recall curve for the operational FPR/recall target.
- **Undersampling**: Randomly drop majority class instances; fast but discards information.

## Model Selection

| Model | Pros | Cons |
|-------|------|------|
| **Isolation Forest** | No labels needed, fast | Limited precision at low FPR |
| **XGBoost / LightGBM** | State-of-the-art tabular, fast inference | Needs labels, feature engineering intensive |
| **Neural Networks (MLP, LSTM)** | Captures sequential patterns | High data hunger, slower to deploy |
| **Graph Neural Networks** | Detects fraud rings via network topology | Complex pipeline, expensive training |
| **Bayesian Online Learning** | Updates in real-time | Requires prior specification |

## Mathematical Formulation

Fraud detection is a binary classification problem:

$$
P(Y=1 \mid X) = \sigma(W^T X + b) = \frac{1}{1 + e^{-(W^T X + b)}}
$$

where $Y=1$ denotes fraud. The expected loss under asymmetric costs $c_{FN}$ (cost of missed fraud) and $c_{FP}$ (cost of false alert):

$$
\mathcal{L}(f) = c_{FN} \cdot \mathbb{E}[\mathbf{1}(f(X)=0, Y=1)] + c_{FP} \cdot \mathbb{E}[\mathbf{1}(f(X)=1, Y=0)]
$$

The optimal decision threshold $\tau^*$ shifts from 0.5 to:

$$
\tau^* = \frac{c_{FP}}{c_{FP} + c_{FN}}
$$

so a $c_{FN}/c_{FP} = 10$ ratio sets $\tau^* \approx 0.09$, catching more fraud at the cost of more false positives.

To account for uncertainty in model parameters, [[mcmc]] can be used to estimate the posterior distribution of weights. Additionally, [[gan]] can be employed to generate synthetic fraud samples to train classifiers on rare attack vectors.

## Key Metrics

- **Recall (Sensitivity)**: $\text{TP}/(\text{TP}+\text{FN})$ — fraction of actual fraud caught.
- **Precision**: $\text{TP}/(\text{TP}+\text{FP})$ — fraction of flagged transactions that are genuine fraud.
- **F1-Score**: Harmonic mean of precision and recall; useful single metric for imbalanced classes.
- **False Positive Rate (FPR)**: $\text{FP}/(\text{FP}+\text{TN})$ — operational friction on legitimate customers.
- **KS Statistic**: Maximum separation between fraud and non-fraud score distributions.
- **AUC-ROC / AUC-PR**: Area under ROC curve (overall discrimination); AUC-PR preferred for imbalanced data.

## Python: Anomaly Detection with Isolation Forest

```python
import numpy as np
from sklearn.ensemble import IsolationForest
from sklearn.metrics import classification_report, roc_auc_score
from sklearn.preprocessing import StandardScaler

def build_fraud_detector(
    X_train: np.ndarray,
    contamination: float = 0.01,
    n_estimators: int = 200,
):
    """
    Fit an Isolation Forest for unsupervised fraud detection.
    contamination: expected fraction of outliers in training data.
    """
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X_train)

    clf = IsolationForest(
        n_estimators=n_estimators,
        contamination=contamination,
        random_state=42,
        n_jobs=-1,
    )
    clf.fit(X_scaled)
    return clf, scaler

def score_transactions(clf, scaler, X_new: np.ndarray) -> np.ndarray:
    """Return anomaly scores; more negative = more anomalous."""
    return clf.score_samples(scaler.transform(X_new))

# --- Simulate data ---
np.random.seed(42)
n_normal, n_fraud = 9500, 500
X_normal = np.random.multivariate_normal([0, 0, 0], np.eye(3), n_normal)
X_fraud  = np.random.multivariate_normal([3, -2, 2], np.eye(3), n_fraud)
X_all    = np.vstack([X_normal, X_fraud])
y_all    = np.array([0] * n_normal + [1] * n_fraud)

clf, scaler = build_fraud_detector(X_all, contamination=0.05)
scores = score_transactions(clf, scaler, X_all)

# Convert to binary predictions at threshold
preds = (scores < np.percentile(scores, 5)).astype(int)
print(classification_report(y_all, preds, target_names=["Legit", "Fraud"]))
print(f"AUC-ROC: {roc_auc_score(y_all, -scores):.3f}")
```

## Precision-Recall Trade-off Chart

```chart
{
  "type": "line",
  "xAxis": "threshold",
  "data": [
    {"threshold": "0.05", "precision": 0.15, "recall": 0.98},
    {"threshold": "0.10", "precision": 0.22, "recall": 0.92},
    {"threshold": "0.20", "precision": 0.38, "recall": 0.81},
    {"threshold": "0.35", "precision": 0.55, "recall": 0.65},
    {"threshold": "0.50", "precision": 0.70, "recall": 0.48},
    {"threshold": "0.65", "precision": 0.82, "recall": 0.31},
    {"threshold": "0.80", "precision": 0.91, "recall": 0.15}
  ],
  "lines": [
    {"dataKey": "precision", "stroke": "#3b82f6", "name": "Precision"},
    {"dataKey": "recall", "stroke": "#ef4444", "name": "Recall"}
  ]
}
```

## Parameter Reference

| Parameter | Name | Description | Typical Value |
|-----------|------|-------------|---------------|
| `contamination` | Expected fraud rate | Used to calibrate IF threshold | 0.001–0.05 |
| `scale_pos_weight` | Class weight (XGBoost) | Upweight fraud class | $N_{\text{neg}}/N_{\text{pos}}$ |
| $\tau^*$ | Decision threshold | Probability cutoff for alarm | 0.05–0.20 |
| `n_estimators` | Forest size | Number of isolation trees | 100–500 |

## Limitations and Extensions

- **Concept drift**: Fraud patterns evolve rapidly (adversarial adaptation); models require frequent retraining or online learning components.
- **Adversarial attacks**: Sophisticated fraudsters reverse-engineer decision boundaries; adversarial robustness and GAN-based data augmentation help.
- **Real-time latency**: Inference must complete in <100ms at card-present POS terminals; lightweight models (LightGBM, shallow MLP) are preferred over deep networks.
- **Explainability**: Regulators (GDPR, SR 11-7) require explanation of adverse decisions; SHAP values on XGBoost provide feature-level attributions.
- **Graph fraud rings**: Isolated transaction models miss coordinated ring fraud; GNN-based systems modeling cardholder-merchant-IP networks dramatically improve detection of organized schemes.

## Practical Applications

1. **Card-not-present (CNP) fraud**: E-commerce transactions where the card is not physically present are the largest fraud vector; velocity and device fingerprint features dominate.
2. **Account takeover (ATO)**: Anomaly detection on login behavior and session patterns detects unauthorized account access before financial damage occurs.
3. **Money laundering (AML)**: Graph analytics on transaction networks identify structuring (smurfing) and layering — patterns invisible to per-transaction classifiers.
4. **Insurance fraud**: Similar methodology applied to claims data, with network analysis to detect provider fraud rings.

## Related Topics
- [[value-at-risk]]
- [[mcmc]]
- [[gan]]
- [[monte-carlo-method]]

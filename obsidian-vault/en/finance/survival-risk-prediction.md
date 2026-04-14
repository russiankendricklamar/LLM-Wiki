---
title: "Survival-Based Risk Prediction"
category: "Risk Management"
order: 141
lang: "en"
slug: "survival-risk-prediction"
---
# Survival-Based Risk Prediction

**Survival Analysis** models the time until an event of interest occurs — corporate default, loan delinquency, order cancellation, or fund liquidation. Unlike standard binary classification, survival models handle **censoring** (the event has not yet occurred by the end of observation) and time-varying covariates, producing richer predictions: not just "will this firm default?" but "what is its probability of surviving another 3 years?"

## Background

Survival analysis originated in biostatistics (Kaplan-Meier 1958, Cox 1972) and entered credit risk modeling via Shumway (2001), who showed that hazard models outperform static logistic regression for bankruptcy prediction because they use the full history of covariate evolution rather than a single snapshot. Modern applications span from corporate default modeling (Duffie et al. 2007) to high-frequency order book analytics.

## Mathematical Framework

### Survival and Hazard Functions

Let $T$ be the random time-to-event. The **survival function** $S(t)$ is:
$$
S(t) = P(T > t) = 1 - F(t)
$$

The **hazard function** (instantaneous event rate given survival to time $t$):
$$
\lambda(t) = \lim_{\Delta t \to 0} \frac{P(t \le T < t + \Delta t \mid T \ge t)}{\Delta t} = \frac{f(t)}{S(t)}
$$

The **cumulative hazard function**:
$$
\Lambda(t) = \int_0^t \lambda(s)\, ds = -\ln S(t)
$$

Key identity linking all three:
$$
S(t) = \exp\!\left(-\Lambda(t)\right) = \exp\!\left(-\int_0^t \lambda(s)\,ds\right)
$$

### Kaplan-Meier Estimator

The non-parametric KM estimator of $S(t)$ from censored data:
$$
\hat{S}(t) = \prod_{t_i \le t} \left(1 - \frac{d_i}{n_i}\right)
$$

where $d_i$ is the number of events at time $t_i$ and $n_i$ is the number at risk just before $t_i$.

### Cox Proportional Hazards Model

The **Cox model** (semi-parametric) factorizes the hazard into a baseline hazard $\lambda_0(t)$ and a covariate-dependent multiplier:

$$
\lambda(t \mid \mathbf{X}) = \lambda_0(t) \exp(\boldsymbol{\beta}^T \mathbf{X})
$$

The baseline hazard $\lambda_0(t)$ is left unspecified (nonparametric), while $\boldsymbol{\beta}$ is estimated by maximizing the **partial likelihood**:

$$
L(\boldsymbol{\beta}) = \prod_{i:\, C_i = 1} \frac{\exp(\boldsymbol{\beta}^T \mathbf{X}_i)}{\sum_{j \in \mathcal{R}(t_i)} \exp(\boldsymbol{\beta}^T \mathbf{X}_j)}
$$

where $\mathcal{R}(t_i) = \{j : T_j \ge t_i\}$ is the **risk set** at time $t_i$. The partial likelihood eliminates $\lambda_0(t)$, allowing $\boldsymbol{\beta}$ to be estimated without modeling the baseline.

### Accelerated Failure Time (AFT) Models

Instead of modeling the hazard, AFT models the log-event time directly:
$$
\ln T = \boldsymbol{\beta}^T \mathbf{X} + \sigma \epsilon
$$

where $\epsilon$ follows a parametric distribution (Weibull, log-normal, log-logistic). AFT models are more interpretable (covariates accelerate or decelerate time) and better suited for short-horizon credit risk.

### Time-Varying Covariates

Cox models extend naturally to covariates that change over time. For a firm $i$ with covariate history $\mathbf{X}_i(t)$:
$$
\lambda(t \mid \mathbf{X}_i(t)) = \lambda_0(t) \exp(\boldsymbol{\beta}^T \mathbf{X}_i(t))
$$

This is implemented via the counting process formulation, where each firm contributes multiple rows (one per observation period) to the partial likelihood.

### Competing Risks

When multiple mutually exclusive events can occur (default vs. acquisition vs. voluntary delisting), the **cause-specific hazard** for event type $k$ is:
$$
\lambda_k(t) = \lim_{\Delta t \to 0} \frac{P(t \le T < t+\Delta t,\, \text{event}=k \mid T \ge t)}{\Delta t}
$$

The **cumulative incidence function** $F_k(t) = P(T \le t, \text{event}=k)$ accounts for the competing event probability:
$$
F_k(t) = \int_0^t S(s^-) \lambda_k(s)\, ds
$$

### Discrete-Time Hazard Models

For annual or quarterly panel data, the **discrete-time logistic hazard model** (Shumway 2001) is:
$$
P(\text{default at } t \mid \text{survived to } t) = \frac{1}{1 + \exp(-\boldsymbol{\beta}^T \mathbf{X}_t)}
$$

This reduces survival analysis to pooled logistic regression on an expanded dataset, enabling the use of any binary classifier as a building block for survival prediction.

## Key Properties

- **Censoring types**: Right-censoring (observation ends before event) is most common; left-censoring (event occurred before observation began) and interval-censoring also arise in credit data.
- **Proportional hazards assumption**: Cox's PH assumption requires the hazard ratio between any two covariate patterns to be constant over time; violation leads to biased estimates. Test via Schoenfeld residuals.
- **Concordance (C-statistic)**: The primary discrimination metric for survival models; analogous to AUC but accounts for censoring and the ordering of event times.
- **Breslow estimator**: The non-parametric maximum likelihood estimate of $\Lambda_0(t)$ under the Cox model, used to compute absolute survival probabilities.

## Python Implementation

```python
import numpy as np
import pandas as pd
from lifelines import CoxPHFitter, KaplanMeierFitter, WeibullAFTFitter
from lifelines.statistics import logrank_test

def fit_kaplan_meier(
    durations: np.ndarray,
    events: np.ndarray,
    label: str = "KM"
) -> KaplanMeierFitter:
    """Fit and return a Kaplan-Meier estimator."""
    kmf = KaplanMeierFitter(label=label)
    kmf.fit(durations, event_observed=events)
    return kmf

def fit_cox_model(df: pd.DataFrame, duration_col: str, event_col: str) -> CoxPHFitter:
    """
    Fit a Cox Proportional Hazards model.

    Args:
        df: DataFrame with duration, event indicator, and covariates
        duration_col: name of duration column
        event_col: name of event indicator column (1=event, 0=censored)

    Returns:
        Fitted CoxPHFitter with .summary, .concordance_index_, .predict_survival_function()
    """
    cph = CoxPHFitter(penalizer=0.1)   # L2 regularization for stability
    cph.fit(df, duration_col=duration_col, event_col=event_col)
    return cph

def discrete_time_hazard(
    durations: np.ndarray,
    events: np.ndarray,
    X: np.ndarray,
    max_time: int | None = None
) -> dict:
    """
    Shumway (2001) discrete-time hazard model via logistic regression.
    Expands panel data: one row per firm-period.

    Returns fitted sklearn logistic model and expansion metadata.
    """
    from sklearn.linear_model import LogisticRegression

    if max_time is None:
        max_time = int(durations.max())

    rows_X, rows_y = [], []
    for i, (dur, evt) in enumerate(zip(durations, events)):
        for t in range(1, int(dur) + 1):
            rows_X.append(np.append(X[i], t / max_time))  # add time as feature
            if t == int(dur) and evt == 1:
                rows_y.append(1)
            else:
                rows_y.append(0)

    X_panel = np.array(rows_X)
    y_panel = np.array(rows_y)

    model = LogisticRegression(max_iter=1000, C=1.0)
    model.fit(X_panel, y_panel)

    return {"model": model, "n_obs": len(y_panel), "event_rate": y_panel.mean()}


def survival_concordance(
    predicted_risk: np.ndarray,
    durations: np.ndarray,
    events: np.ndarray
) -> float:
    """
    Compute Harrell's C-statistic (concordance index) for survival models.
    C = P(risk_i > risk_j | T_i < T_j, event_i = 1)
    """
    from lifelines.utils import concordance_index
    return float(concordance_index(durations, -predicted_risk, events))


# ---- Example ----
np.random.seed(42)
n = 200

# Simulate corporate survival data
debt_equity = np.random.uniform(0.2, 3.0, n)
volatility  = np.random.uniform(0.10, 0.50, n)
# Higher D/E and vol -> shorter survival, more defaults
log_hazard = -2.0 + 0.5 * debt_equity + 3.0 * volatility
true_hazard = np.exp(log_hazard)
durations = np.random.exponential(1.0 / true_hazard)
durations = np.clip(durations, 0.1, 10.0)
events = (durations < 10.0).astype(int)   # censored at 10 years

df = pd.DataFrame({
    "duration":      durations,
    "default":       events,
    "debt_to_equity": debt_equity,
    "volatility":    volatility
})

# Cox model
cph = fit_cox_model(df, "duration", "default")
print("Cox PH Model Summary:")
print(cph.summary[["coef", "exp(coef)", "p"]].round(4))
print(f"Concordance index: {cph.concordance_index_:.4f}")

# Kaplan-Meier by risk group
high_risk = df["debt_to_equity"] > df["debt_to_equity"].median()
kmf_high = fit_kaplan_meier(durations[high_risk],  events[high_risk],  "High D/E")
kmf_low  = fit_kaplan_meier(durations[~high_risk], events[~high_risk], "Low D/E")

lr = logrank_test(durations[high_risk], durations[~high_risk],
                  events[high_risk], events[~high_risk])
print(f"\nLog-rank test p-value: {lr.p_value:.4f}")

# Predict 3-year survival for a new firm
new_firm = pd.DataFrame({"debt_to_equity": [2.0], "volatility": [0.35]})
surv_fn = cph.predict_survival_function(new_firm)
s3 = float(surv_fn.loc[surv_fn.index <= 3].iloc[-1])
print(f"3-year survival probability (D/E=2.0, vol=0.35): {s3:.3f}")
```

## Survival Curves by Risk Group

```chart
{
  "type": "line",
  "xAxis": "years",
  "data": [
    {"years": "0",  "high_risk": 1.00, "low_risk": 1.00},
    {"years": "1",  "high_risk": 0.78, "low_risk": 0.92},
    {"years": "2",  "high_risk": 0.61, "low_risk": 0.85},
    {"years": "3",  "high_risk": 0.47, "low_risk": 0.79},
    {"years": "5",  "high_risk": 0.28, "low_risk": 0.68},
    {"years": "7",  "high_risk": 0.16, "low_risk": 0.57},
    {"years": "10", "high_risk": 0.07, "low_risk": 0.44}
  ],
  "lines": [
    {"dataKey": "high_risk", "stroke": "#ef4444", "name": "High Risk (High D/E)"},
    {"dataKey": "low_risk",  "stroke": "#3b82f6", "name": "Low Risk (Low D/E)"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Range |
| :--- | :--- | :--- | :--- |
| $\lambda(t)$ | Hazard rate | Instantaneous default intensity | 0.001 – 0.20 /year |
| $S(t)$ | Survival function | Probability of surviving past $t$ | 0 – 1 |
| $\Lambda(t)$ | Cumulative hazard | Integrated hazard up to $t$ | 0 – $\infty$ |
| $\boldsymbol{\beta}$ | Cox coefficients | Log-hazard ratios for covariates | Calibrated |
| $C$ | Concordance index | Discrimination metric (AUC analog) | 0.5 – 1.0 |
| $\sigma$ | AFT scale | Spread of log-time distribution | 0.1 – 2.0 |

## Limitations and Extensions

- **Proportional hazards violation**: If covariates interact with time (e.g., leverage becomes more dangerous in recessions), stratified Cox models or time-varying coefficient models are needed.
- **Machine learning extensions**: Random survival forests (Ishwaran 2008) and DeepHit (Lee et al. 2018) relax linearity and PH assumptions; they outperform Cox on complex credit datasets.
- **Frailty models**: Shared frailty terms capture unobserved heterogeneity (e.g., industry-level default clustering) via random effects in the hazard.
- **Multi-state models**: Firms can transition through states (investment grade → high yield → default); multi-state survival models generalize the single-event framework to capture migration dynamics.

## Practical Applications

1. **PD term structure**: Cox models produce the full probability of default curve $PD(t)$ over 1–10 year horizons, feeding directly into IFRS 9 expected credit loss calculations.
2. **Loan pricing**: Hazard rate estimates translate to credit spreads via $s(t) \approx \lambda(t)(1-R)$, enabling risk-based loan pricing that accounts for full term structure.
3. **Limit order survival**: Hazard models of order cancellation/fill rates at each price level inform optimal quote placement in algorithmic market-making strategies.
4. **Fund liquidation risk**: Survival models on hedge fund performance data estimate the probability of fund closure, relevant for investor due diligence and gating policy design.
5. **Portfolio credit risk**: Multi-name survival models with copula-based dependence generate correlated default scenarios for CDO tranche pricing and CVA computation.

## Related Topics
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]
- [[copula-models]]

---
title: "Survival-Based Risk Prediction"
category: "Risk Management"
order: 141
lang: "en"
slug: "survival-risk-prediction"
---
# Survival-Based Risk Prediction

**Survival Analysis** in finance is used to model the "time-to-event" data, such as the time until a corporate default, a credit card delinquency, or a limit order execution. Unlike standard classification, survival models account for **censoring**, where the event has not occurred by the end of the observation period.

## Hazard Functions and Default Risk

The core of survival analysis is the **Hazard Function** $\lambda(t)$, which represents the instantaneous rate of occurrence of the event at time $t$, given that it has not occurred yet:

$$
\lambda(t) = \lim_{\Delta t \to 0} \frac{P(t \le T < t + \Delta t | T \ge t)}{\Delta t}
$$

In credit risk, this is interpreted as the conditional probability of default in the next infinitesimal interval.

## Cox Proportional Hazards Model

The Cox model assumes that covariates $X$ have a multiplicative effect on the baseline hazard $\lambda_0(t)$:

$$
\lambda(t | X) = \lambda_0(t) \exp(\beta^T X)
$$

The parameters $\beta$ are estimated by maximizing the **Partial Likelihood**:

$$
L(\beta) = \prod_{i: C_i=1} \frac{\exp(\beta^T X_i)}{\sum_{j \in R(t_i)} \exp(\beta^T X_j)}
$$

where $R(t_i)$ is the risk set (subjects who have not experienced the event or been censored) at time $t_i$.

## Python: Estimating Default Risk with Lifelines

```python
from lifelines import CoxPHFitter
import pandas as pd

# Data: duration (time to default/censoring), event (1 if default), features
df = pd.DataFrame({
    'duration': [10, 5, 20, 15, 25],
    'default': [1, 0, 1, 1, 0],
    'debt_to_equity': [1.2, 0.5, 2.1, 1.8, 0.8],
    'volatility': [0.15, 0.10, 0.30, 0.25, 0.12]
})

cph = CoxPHFitter()
cph.fit(df, duration_col='duration', event_col='default')

cph.print_summary()
# Predict survival function for a new firm
survival_fn = cph.predict_survival_function(new_firm_data)
```

## Quantitative Applications

1.  **Credit Scoring**: Estimating the Probability of Default (PD) over a multi-year horizon.
2.  **LGD Modeling**: Modeling the time to recovery after a default event.
3.  **HFT**: Analyzing the survival time of a limit order at a specific price level before it is cancelled or filled.

Survival models can be further extended using [[hidden-markov-models]] to account for regime-dependent hazard rates.

---
## Related Topics
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]

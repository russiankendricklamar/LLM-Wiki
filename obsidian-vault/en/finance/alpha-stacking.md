---
title: "Orthogonal Alpha Stacking"
category: "Algorithms and ML"
order: 106
lang: "en"
---
# Orthogonal Alpha Stacking & Residualization

**Orthogonal Alpha Stacking** is a technique used in quantitative portfolio management to combine multiple predictive signals (alphas) such that they provide incremental value. If two signals are highly correlated, adding the second signal provides no new information; residualization ensures each signal is "unique."

## Mathematical Formulation

Given a set of alpha signals $A_1, A_2, \dots, A_n$, we want to ensure that each new signal $A_{new}$ is orthogonal to the existing set. This is achieved via **Gram-Schmidt Orthogonalization** or **Residualization**.

### Residualization via Regression

To make signal $Y$ (Alpha 2) orthogonal to signal $X$ (Alpha 1):
$$
Y = \beta X + \epsilon
$$
The residual $\epsilon = Y - \hat{\beta} X$ is the part of Alpha 2 that is uncorrelated with Alpha 1. The stacked alpha is then:
$$
\alpha_{stacked} = w_1 A_1 + w_2 \epsilon
$$

## Signal Decay and Residualization

Residualization is often applied to remove common risk factors (e.g., Market, Industry) from a signal. If $f$ is a vector of factor exposures:
$$
\alpha_{clean} = \alpha - f(f^T f)^{-1} f^T \alpha
$$
This ensures the alpha signal is **market-neutral** or **sector-neutral**.

## Financial Application

1. **Multi-Factor Models**: Combining Momentum, Value, and Quality signals without "double counting" the same underlying effect.
2. **Proprietary Trading**: Ensuring a new strategy is actually adding alpha relative to the existing portfolio of strategies.
3. **Risk Management**: Identifying if a portfolio's returns are truly due to skill or just hidden exposure to a standard risk factor.

## Python: Signal Residualization

```python
import numpy as np
from sklearn.linear_model import LinearRegression

def residualize_signal(target_alpha, basis_alphas):
    """
    Returns the part of target_alpha that is orthogonal to basis_alphas.
    """
    model = LinearRegression()
    model.fit(basis_alphas, target_alpha)
    residuals = target_alpha - model.predict(basis_alphas)
    return residuals

# Example: Two correlated signals
alpha1 = np.random.normal(0, 1, 100).reshape(-1, 1)
alpha2 = alpha1 * 0.8 + np.random.normal(0, 0.2, 100).reshape(-1, 1)

unique_alpha2 = residualize_signal(alpha2, alpha1)
correlation = np.corrcoef(alpha1.flatten(), unique_alpha2.flatten())[0, 1]

print(f"Correlation after residualization: {correlation:.10f}")
```

## Related Topics
- [[random-matrix-theory]]
- [[hierarchical-risk-parity]]
---

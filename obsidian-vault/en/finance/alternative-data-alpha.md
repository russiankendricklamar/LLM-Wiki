---
title: "Alternative Data Alpha"
category: "Algorithms and ML"
order: 129
lang: "en"
slug: "alternative-data-alpha"
---
# Alternative Data Alpha

**Alternative Data Alpha** refers to investment signals derived from non-traditional sources. In an era where traditional financial data (prices, volume, earnings) is analyzed by millions, alpha is increasingly found in unconventional datasets like satellite imagery, credit card transactions, and geolocation data.

## Practical Implementation Guide

1.  **Sourcing**: Identifying vendors for specialized data (e.g., Orbital Insight for satellite, Eagle Alpha for general alternative datasets).
2.  **Entity Mapping**: The hardest part of alt-data. Linking a "shopping mall parking lot" in a satellite image to the correct publicly traded REIT or retailer ticker.
3.  **Normalization & Cleaning**: Alternative data is often unstructured and "noisy." For instance, foot traffic data must be adjusted for weather and holidays.
4.  **Signal Integration**: Combining alt-data signals with traditional factors using [[alpha-stacking]] or machine learning models.

## Mathematical Formulation

Let $X_{alt}$ be the alternative data signal (e.g., number of cars in Walmart parking lots). The predictive model is:
$$
R_{t+1} = \beta_0 + \beta_{alt} X_{alt, t} + \sum \beta_i F_{i, t} + \epsilon
$$
where $F_i$ are traditional factors (Size, Value). To ensure the signal is not just noise, one can use [[mcmc]] to estimate the probability that the relationship $\beta_{alt} \neq 0$ is statistically significant. If the data is sparse, [[gan]] can be used to augment the training set with synthetic yet realistic alternative data patterns.

## Key Metrics
- **Exclusivity**: How many other market participants have access to the same data?
- **Sparsity**: How much of the time/universe is covered by the data?
- **Lead Time**: How far in advance of official earnings reports does the alt-data provide a signal?
- **Information Decay**: The speed at which the alpha from the data is arbitraged away.

## Python: Simple foot traffic signal simulation

```python
import numpy as np
import pandas as pd

def simulate_alt_signal(actual_revenue):
    """
    Simulates a 'foot traffic' signal that leads revenue.
    """
    # Signal is actual revenue + noise, shifted forward
    noise = np.random.normal(0, 0.1, len(actual_revenue))
    signal = actual_revenue + noise
    return pd.Series(signal).rolling(3).mean()

# Dummy data: Revenue growth
revenue = np.cumsum(np.random.normal(0.01, 0.05, 100))
alt_signal = simulate_alt_signal(revenue)

correlation = np.corrcoef(alt_signal[3:], revenue[3:])[0, 1]
print(f"Alt-Data vs Revenue Correlation: {correlation:.4f}")
```

## Financial Context

Alternative data is the primary driver of **Quantamental** investing, which combines quantitative models with fundamental insights. For example, counting oil tankers in satellite images can provide a leading indicator for global supply before official reports. Risk managers use [[value-at-risk]] to model the impact of "broken" signals (e.g., when a change in credit card reporting laws makes an alt-dataset obsolete).

## Related Topics
- [[news-sentiment-trading]]
- [[alpha-factor-discovery]]
- [[mcmc]]
- [[value-at-risk]]
---

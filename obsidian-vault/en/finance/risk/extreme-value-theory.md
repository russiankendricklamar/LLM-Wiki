---
slug: "/finance/extreme-value-theory"
title: "Extreme Value Theory (EVT)"
category: "Risk Management"
order: 18
lang: "en"
---
# Extreme Value Theory (EVT)

**Extreme Value Theory (EVT)** is a branch of statistics dealing with the extreme deviations from the median of probability distributions. In finance, EVT is often called the "mathematics of Black Swans," as it provides tools to estimate the probability of rare but catastrophic events that normal distributions fail to capture. The field was pioneered by Fisher and Tippett (1928), and the key results later formalised by Gnedenko (1943) and Pickands-Balkema-de Haan (1974).

## Motivation

Standard VaR models based on normal distributions dramatically underestimate tail risk. The 2008 financial crisis, the 1987 Black Monday crash, and the 2020 COVID-19 drawdown all involved tail realisations that were "10-sigma" events under Gaussian assumptions. EVT provides a principled framework that focuses exclusively on the tail of the distribution, rather than fitting a single parametric model to the full dataset.

## Fundamental Approaches

There are two primary methods for identifying and modelling extreme values:

1. **Block Maxima**: Partition the data into non-overlapping blocks of equal size (e.g., monthly or yearly) and extract the maximum from each block. The limiting distribution is the **Generalized Extreme Value (GEV)** distribution. Requires many blocks to be statistically reliable, making it data-intensive.
2. **Peaks Over Threshold (POT)**: Select all observations exceeding a high threshold $u$. The excess distribution converges to the **Generalized Pareto Distribution (GPD)**. More data-efficient and generally preferred in practice.

## Generalized Extreme Value Distribution

The GEV encompasses three families via shape parameter $\xi$:

$$
G_{\xi, \mu, \sigma}(x) = \exp\left\{-\left[1 + \xi\frac{x-\mu}{\sigma}\right]^{-1/\xi}\right\}
$$

- $\xi > 0$: Fréchet (heavy-tailed, power law) — characteristic of equity returns.
- $\xi = 0$: Gumbel (exponential tail) — limiting case.
- $\xi < 0$: Weibull (bounded tail) — uncommon in finance.

## Generalized Pareto Distribution (GPD)

The POT method is generally preferred in finance due to its efficient use of data. According to the Pickands-Balkema-de Haan theorem, the distribution of excesses $Y = X - u$ over a sufficiently high threshold $u$ converges to a GPD:

$$
G_{\xi, \beta}(y) =
\begin{cases}
1 - \left(1 + \xi y / \beta\right)^{-1/\xi} & \text{if } \xi \neq 0 \\
1 - e^{-y/\beta} & \text{if } \xi = 0
\end{cases}
$$

Where:
- $y = x - u$ is the excess over threshold.
- $\xi$ is the shape (tail index); higher $\xi$ means fatter tail.
- $\beta$ is the scale parameter.

## Threshold Selection

Choosing $u$ involves a bias-variance trade-off. Too low: the GPD approximation is inaccurate. Too high: too few exceedances, high variance of estimates.

Practical methods:
- **Mean Excess Plot**: Plot $e(u) = \mathbb{E}[X - u \mid X > u]$ against $u$; GPD predicts a linear mean excess function, so look for the onset of linearity.
- **Hill Plot**: Plot Hill estimator of $\xi$ as a function of the number of order statistics used; stability indicates a suitable threshold.
- Typical choices: 90th–99th percentile of the dataset.

## Tail Risk Measures via EVT

Once GPD parameters $(\hat{\xi}, \hat{\beta})$ are estimated with $n_u$ exceedances out of $n$ total observations:

**Value-at-Risk at confidence level $p$:**
$$
\text{VaR}_p = u + \frac{\hat{\beta}}{\hat{\xi}}\left[\left(\frac{n}{n_u}(1-p)\right)^{-\hat{\xi}} - 1\right]
$$

**Expected Shortfall (Conditional VaR):**
$$
\text{ES}_p = \frac{\text{VaR}_p}{1 - \hat{\xi}} + \frac{\hat{\beta} - \hat{\xi} u}{1 - \hat{\xi}}
$$

Both measures are only valid when $\hat{\xi} < 1$ (finite mean of exceedances).

## Key Properties

- EVT results are **non-parametric** in the sense that they hold for any distribution in the domain of attraction of the GEV — a very broad class.
- The tail index $\xi$ determines all higher-moment existence: moments of order $k$ exist only if $k < 1/\xi$.
- For equity returns, empirical estimates of $\xi$ typically lie in $[0.2, 0.5]$, implying heavy tails but finite variance.
- GPD parameters can be estimated by Maximum Likelihood or Probability-Weighted Moments (PWM).

## Python: Tail Fitting with GPD

```python
import numpy as np
from scipy.stats import genpareto

def fit_gpd_tail(data: np.ndarray, threshold_quantile: float = 0.95):
    """
    Fit a GPD to the tail exceedances and compute EVT-based VaR and ES.
    Returns xi, beta, VaR_99, ES_99.
    """
    threshold = np.quantile(data, threshold_quantile)
    excesses = data[data > threshold] - threshold

    # Maximum Likelihood Estimation
    xi, loc, beta = genpareto.fit(excesses, floc=0)

    n = len(data)
    n_u = len(excesses)

    def var_evt(p: float) -> float:
        return threshold + (beta / xi) * (((n / n_u) * (1 - p)) ** (-xi) - 1)

    def es_evt(p: float) -> float:
        v = var_evt(p)
        return (v + beta - xi * threshold) / (1 - xi)

    return {
        "xi": xi,
        "beta": beta,
        "n_exceedances": n_u,
        "VaR_99": var_evt(0.99),
        "ES_99": es_evt(0.99),
    }

# Generate heavy-tailed data (Student t with 3 degrees of freedom)
np.random.seed(42)
data = np.random.standard_t(df=3, size=5000)

result = fit_gpd_tail(data, threshold_quantile=0.95)
print(f"Shape (xi):  {result['xi']:.4f}")
print(f"Scale (beta): {result['beta']:.4f}")
print(f"EVT VaR 99%:  {result['VaR_99']:.4f}")
print(f"EVT ES 99%:   {result['ES_99']:.4f}")
```

## Tail Survival Function Comparison

```chart
{
  "type": "line",
  "xAxis": "return",
  "data": [
    {"return": "0%", "norm": 1.0, "evt": 1.0},
    {"return": "1%", "norm": 0.5, "evt": 0.6},
    {"return": "2%", "norm": 0.1, "evt": 0.3},
    {"return": "3%", "norm": 0.01, "evt": 0.15},
    {"return": "4%", "norm": 0.001, "evt": 0.08},
    {"return": "5%", "norm": 0.0001, "evt": 0.05}
  ],
  "lines": [
    {"dataKey": "norm", "stroke": "#94a3b8", "name": "Normal (Underestimates)"},
    {"dataKey": "evt", "stroke": "#ef4444", "name": "EVT (Fat Tail)"}
  ]
}
```

## Method Comparison

| Method | What is analysed | Limiting Distribution | Data Efficiency |
|:---|:---|:---|:---|
| **Block Maxima** | Maxima of fixed periods | GEV (Gumbel, Fréchet, Weibull) | Low |
| **POT** | All values above $u$ | GPD (Generalized Pareto) | High |
| **Normal Dist** | Entire dataset | Gaussian (fails in tails) | High |
| **Hill Estimator** | Tail behaviour | Power Law | Medium |

## Limitations and Extensions

- **Threshold instability**: Results can be sensitive to threshold choice; diagnostic plots (mean excess, Hill) are essential.
- **Univariate only**: Standard EVT does not capture joint tail dependence between assets; multivariate EVT and copula-based approaches (e.g., extreme value copulas) are needed for portfolio tail risk.
- **Non-stationarity**: Financial volatility clusters, violating the i.i.d. assumption. The GARCH-EVT hybrid (McNeil & Frey 2000) first fits a GARCH to filter volatility, then applies EVT to standardised residuals.
- **Small samples**: Extreme tail estimates have high variance with fewer than ~100 exceedances; confidence intervals via profile likelihood or bootstrap are mandatory.

## Practical Applications

1. **Regulatory Capital**: Basel III/IV internal models require ES at 97.5% — EVT provides more reliable estimates than parametric VaR in the far tail.
2. **Stress Testing**: Calibrating stress scenarios by inverting the GPD to obtain return levels for given recurrence periods (e.g., "a loss exceeded once in 100 years").
3. **Reinsurance Pricing**: Excess-of-loss reinsurance contracts pay when losses exceed a retention; EVT directly models the distribution of claim excess.
4. **Operational Risk**: Modelling large individual losses in credit card fraud, cyber events, or legal liabilities where the tail dominates.

## Related Topics
- [[value-at-risk]]
- [[garch-models]]
- [[copula-models]]
- [[monte-carlo-method]]

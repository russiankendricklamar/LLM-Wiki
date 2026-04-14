---
title: "Probability of Backtest Overfitting"
category: "Algorithms and ML"
order: 55
lang: "en"
---
# Probability of Backtest Overfitting (PBO)

The **Probability of Backtest Overfitting (PBO)** is a statistical framework used to quantify the likelihood that a strategy's performance is the result of selection bias during the optimization process rather than true alpha. It was popularized by Marcos Lopez de Prado and David Bailey to address the "reproducibility crisis" in quantitative finance.

## Visualization

As the number of strategy trials grows, the best in-sample Sharpe rises by pure luck while the Deflated Sharpe Ratio (DSR) falls toward zero — illustrating that selection bias inflates apparent alpha. PBO correspondingly rises above 0.5, signaling that the chosen strategy is most likely overfit.

```chart
{
  "type": "line",
  "xAxis": "trials",
  "data": [
    {"trials": "1",    "Best IS Sharpe": 0.52, "DSR": 0.82, "PBO": 0.22},
    {"trials": "5",    "Best IS Sharpe": 0.88, "DSR": 0.65, "PBO": 0.31},
    {"trials": "10",   "Best IS Sharpe": 1.05, "DSR": 0.54, "PBO": 0.38},
    {"trials": "25",   "Best IS Sharpe": 1.28, "DSR": 0.41, "PBO": 0.47},
    {"trials": "50",   "Best IS Sharpe": 1.47, "DSR": 0.29, "PBO": 0.55},
    {"trials": "100",  "Best IS Sharpe": 1.66, "DSR": 0.19, "PBO": 0.62},
    {"trials": "250",  "Best IS Sharpe": 1.91, "DSR": 0.10, "PBO": 0.71},
    {"trials": "500",  "Best IS Sharpe": 2.10, "DSR": 0.05, "PBO": 0.78},
    {"trials": "1000", "Best IS Sharpe": 2.30, "DSR": 0.02, "PBO": 0.84},
    {"trials": "5000", "Best IS Sharpe": 2.71, "DSR": 0.00, "PBO": 0.93}
  ],
  "lines": [
    {"dataKey": "Best IS Sharpe", "stroke": "#f59e0b", "name": "Best IS Sharpe (luck)"},
    {"dataKey": "DSR",            "stroke": "#10b981", "name": "Deflated Sharpe Ratio"},
    {"dataKey": "PBO",            "stroke": "#ef4444", "name": "PBO (overfitting prob.)"}
  ]
}
```

## Background and Motivation

The quant finance research process typically involves testing many variations of a strategy — different lookback windows, signal thresholds, rebalancing frequencies — and selecting the best-performing configuration based on a historical backtest. This process of trial and selection inflates the apparent performance of the chosen strategy, often dramatically.

Bailey and Lopez de Prado (2014) formalized this problem in "The Deflated Sharpe Ratio: Correcting for Selection Bias, Backtest Overfitting, and Non-Normality," introducing both the PBO framework and the Deflated Sharpe Ratio. Their work showed that for a typical institutional strategy development process testing 300+ variations, a backtest Sharpe ratio of 1.0 should be discounted to near zero after correcting for selection bias.

## Selection Bias under Multiple Testing (SBM)

SBM occurs when a researcher tests $N$ variations of a strategy on the same dataset and picks the one with the highest Sharpe Ratio. As $N$ increases, the probability of finding a "profitable" strategy by pure chance approaches 1. This is the **Selection Bias under Multiple Testing**.

- **In-Sample (IS)**: The performance on the data used to select/optimize the parameters.
- **Out-of-Sample (OOS)**: The performance on unseen data.

Backtest overfitting happens when the gap between IS and OOS performance is large, often leading to significant losses when the strategy is deployed live.

## The Deflated Sharpe Ratio

The **Deflated Sharpe Ratio (DSR)** corrects the observed Sharpe ratio for the number of trials, non-normality of returns, and backtest length:

$$
\text{DSR}(\widehat{SR}^*) = \Phi\!\left(\frac{(\widehat{SR}^* - \widehat{SR}_0)\sqrt{T-1}}{\sqrt{1 - \hat{\gamma}_3 \widehat{SR}^* + \frac{\hat{\gamma}_4 - 1}{4}(\widehat{SR}^*)^2}}\right)
$$

Where:
- $\widehat{SR}^*$ is the maximum observed Sharpe ratio across all trials.
- $\widehat{SR}_0 = \sqrt{\text{Var}[\max SR]} \cdot \left((1-\gamma)z_{1-1/N} + \gamma z_{1-1/(Ne)}\right)$ is the expected maximum Sharpe under the null.
- $\hat{\gamma}_3, \hat{\gamma}_4$ are the skewness and excess kurtosis of returns.
- $T$ is the number of observations in the backtest.

A DSR close to 0.5 indicates the observed Sharpe is likely pure luck; DSR > 0.95 indicates genuine alpha.

## Combinatorially Symmetric Cross-Validation (CSCV)

Standard $k$-fold cross-validation is often insufficient for time-series data due to leakage and small sample sizes. **CSCV** addresses this by:
1. Dividing the historical returns of $N$ strategies into $S$ even sub-periods.
2. Generating all $\binom{S}{S/2}$ combinations of $S/2$ periods to form a training set (IS).
3. The remaining $S/2$ periods form the corresponding testing set (OOS).
4. For each combination, identify the strategy that maximizes the Sharpe Ratio in IS and observe its rank in OOS.

### The PBO Formula

The PBO measures the probability that the strategy with the best IS Sharpe Ratio has an OOS rank below the median:

Let $R$ be a matrix of returns for $N$ strategies over $T$ time steps. After partitioning into $S$ blocks, for each combination $c$:

1. Determine $n^* = \arg \max_{n} \{ \text{SR}_{n, IS}^c \}$
2. Calculate the relative rank of $n^*$ in the OOS set:
   $$ \omega_c = \frac{\text{rank}(\text{SR}_{n^*, OOS}^c)}{N + 1} $$
3. The PBO is the logit-transformed frequency of below-median OOS performance:
   $$ \text{PBO} = \frac{1}{C} \sum_{c=1}^C \mathbf{1}[\omega_c < 0.5] $$
   Where $C$ is the total number of combinations.

A PBO $> 0.5$ is a strong signal of overfitting; PBO $> 0.75$ indicates severe selection bias.

## The "Silent Killer" of Quant Funds

Backtest overfitting is often called the **silent killer** because it doesn't show up in standard performance reports. A fund may present a backtest with a Sharpe of 3.0, but if that result was selected from 1,000,000 trials, the **Haircut Sharpe Ratio** might be closer to 0.5 or even negative. This leads to the "backtest-to-live" performance gap that can be catastrophic for systematic firms.

## Python: Full PBO Calculation with CSCV

```python
import numpy as np
import pandas as pd
from itertools import combinations


def sharpe_ratio(returns):
    """Annualized Sharpe ratio (assuming daily returns)."""
    mean = returns.mean()
    std = returns.std()
    if std < 1e-10:
        return 0.0
    return mean / std * np.sqrt(252)


def calculate_pbo(matrix_returns, S=16):
    """
    CSCV-based PBO calculation.

    matrix_returns: DataFrame (T x N) where N is number of strategy variations.
    S: Number of blocks (must be even, typically 8-16).
    Returns (pbo, oos_ranks, logit_distribution).
    """
    T, N = matrix_returns.shape
    block_size = T // S
    blocks = [matrix_returns.iloc[i*block_size:(i+1)*block_size]
              for i in range(S)]

    indices = np.arange(S)
    combos = list(combinations(indices, S // 2))

    oos_ranks = []

    for train_idx in combos:
        test_idx = tuple(i for i in indices if i not in train_idx)

        is_set = pd.concat([blocks[i] for i in train_idx])
        oos_set = pd.concat([blocks[i] for i in test_idx])

        is_sharpe = is_set.apply(sharpe_ratio)
        oos_sharpe = oos_set.apply(sharpe_ratio)

        best_n = is_sharpe.idxmax()
        rank = oos_sharpe.rank(pct=True)[best_n]
        oos_ranks.append(rank)

    oos_ranks = np.array(oos_ranks)
    pbo = np.mean(oos_ranks < 0.5)

    # Logit of OAS ranks for distribution analysis
    eps = 1e-6
    logit_ranks = np.log(oos_ranks / (1 - oos_ranks + eps) + eps)

    return pbo, oos_ranks, logit_ranks


def deflated_sharpe_ratio(sr_observed, n_trials, T, skew=0.0, kurt=3.0):
    """
    Compute the Deflated Sharpe Ratio.

    sr_observed: Best observed Sharpe ratio across n_trials
    n_trials: Total number of strategy variations tested
    T: Number of return observations
    skew, kurt: Sample skewness and excess kurtosis of returns
    """
    from scipy.stats import norm

    # Expected max Sharpe under null hypothesis (iid Gaussian trials)
    gamma = 0.5772156649  # Euler-Mascheroni constant
    sr_benchmark = (
        (1 - gamma) * norm.ppf(1 - 1.0/n_trials) +
        gamma * norm.ppf(1 - 1.0/(n_trials * np.e))
    )

    # Variance adjustment for non-normality
    sr_var = (1 - skew * sr_observed +
              (kurt - 1) / 4.0 * sr_observed**2) / (T - 1)

    if sr_var <= 0:
        return 0.0

    z = (sr_observed - sr_benchmark) / np.sqrt(sr_var)
    return float(norm.cdf(z))


# Example: 50 strategy variations, 5 years daily data
np.random.seed(42)
n_strategies = 50
n_days = 1260  # 5 years

# Generate returns: all noise, no alpha
returns_matrix = pd.DataFrame(
    np.random.normal(0, 0.01, (n_days, n_strategies)),
    columns=[f'Strat_{i}' for i in range(n_strategies)]
)

# Add slight alpha to one strategy (to test detection)
returns_matrix['Strat_0'] += 0.0002  # ~5% annual alpha

pbo, oos_ranks, logit_ranks = calculate_pbo(returns_matrix, S=8)
best_sr = returns_matrix.apply(sharpe_ratio).max()
dsr = deflated_sharpe_ratio(best_sr, n_strategies, n_days)

print(f"Best IS Sharpe:          {best_sr:.3f}")
print(f"PBO:                     {pbo:.2%}")
print(f"Deflated Sharpe Ratio:   {dsr:.4f}")
print(f"Median OOS rank:         {np.median(oos_ranks):.3f}")
print(f"\nInterpretation:")
if pbo > 0.5:
    print("  PBO > 50%: Strong evidence of backtest overfitting.")
else:
    print("  PBO < 50%: Strategy may have genuine OOS performance.")
if dsr < 0.5:
    print("  DSR < 0.5: Observed Sharpe likely due to selection bias.")
```

## Haircut Sharpe Ratio

The **Haircut Sharpe Ratio** adjusts the observed IS Sharpe for the number of independent tests:

$$
\widehat{SR}_{\text{haircut}} = \widehat{SR}^* \cdot \left(1 - \frac{\ln N}{\sqrt{T}}\right)^{1/2}
$$

As the number of trials $N$ grows, the haircut grows logarithmically. For $N = 1{,}000$ trials and $T = 1{,}260$ daily observations, the haircut reduces a Sharpe of 2.0 to approximately 1.3.

## Parameter Table

| Parameter | Description | Typical Value |
|:---|:---|:---|
| $N$ | Number of strategy variations tested | $10 – 10{,}000$ |
| $S$ | Number of CSCV blocks | $8 – 16$ |
| $T$ | Backtest length (observations) | $252 – 5{,}040$ |
| PBO threshold | Decision boundary | $0.5$ |
| DSR threshold | Significance level | $0.95$ |

## Limitations and Extensions

- **Dependent strategies**: CSCV assumes strategies are approximately independent. Highly correlated strategy variations (same logic, different parameters) produce misleading PBO estimates. Clustering similar strategies first improves robustness.
- **Non-stationarity**: The block structure assumes stationarity within blocks. In practice, earlier blocks may have fundamentally different market dynamics than later blocks.
- **Walk-forward validation**: For production strategy development, out-of-sample periods should be strictly forward in time. CSCV mixes past and future blocks, which can be misleading for strategies with regime-dependent behavior.
- **Minimum backtest length**: Bailey et al. derive a minimum backtest length as a function of $N$ and desired DSR confidence — for 300 trials and DSR > 0.95, at least 5 years of daily data is required.

## Related Topics
- [[meta-labeling]]
- [[monte-carlo-method]]
- [[value-at-risk]]
- [[model-free-rl-factors]]

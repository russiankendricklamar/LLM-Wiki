---
title: "Probability of Backtest Overfitting"
category: "Algorithms and ML"
order: 115
lang: "en"
---
# Probability of Backtest Overfitting (PBO)

The **Probability of Backtest Overfitting (PBO)** is a statistical framework used to quantify the likelihood that a strategy's performance is the result of selection bias during the optimization process rather than true alpha. It was popularized by Marcos Lopez de Prado and David Bailey to address the "reproducibility crisis" in quantitative finance.

## Selection Bias under Multiple Testing (SBM)

SBM occurs when a researcher tests $N$ variations of a strategy on the same dataset and picks the one with the highest Sharpe Ratio. As $N$ increases, the probability of finding a "profitable" strategy by pure chance approaches 1. This is the **Selection Bias under Multiple Testing**.

- **In-Sample (IS)**: The performance on the data used to select/optimize the parameters.
- **Out-of-Sample (OOS)**: The performance on unseen data.

Backtest overfitting happens when the gap between IS and OOS performance is large, often leading to significant losses when the strategy is deployed live.

## Combinatorially Symmetric Cross-Validation (CSCV)

Standard $k$-fold cross-validation is often insufficient for time-series data due to leakage and small sample sizes. **CSCV** addresses this by:
1. Dividing the historical returns of $N$ strategies into $S$ even sub-periods.
2. Generating all possible combinations of $S/2$ periods to form a training set (IS).
3. The remaining $S/2$ periods form the corresponding testing set (OOS).
4. For each combination, we identify the strategy that maximizes the Sharpe Ratio in the training set and observe its rank in the testing set.

### The Sharpe Ratio Distribution
The PBO measures the probability that the strategy with the best IS Sharpe Ratio has an OOS rank below the median. If $PBO > 0.5$, the selection process is likely overfitted.

## Mathematical Logic

Let $R$ be a matrix of returns for $N$ strategies over $T$ time steps. After partitioning into $S$ blocks, for each combination $c$:
1. Determine $n^* = \arg \max_{n} \{ \text{Sharpe}_{n, IS}^c \}$
2. Calculate the relative rank of $n^*$ in the OOS set:
   $$ \omega_c = \text{rank}( \text{Sharpe}_{n^*, OOS}^c ) / (N + 1) $$
3. The PBO is defined as the frequency of cases where the OOS performance is below the median:
   $$ PBO = \frac{1}{C} \sum_{c=1}^C I[\omega_c < 0.5] $$
   Where $C$ is the total number of combinations and $I$ is the indicator function.

## The "Silent Killer" of Quant Funds

Backtest overfitting is often called the **silent killer** because it doesn't show up in standard performance reports. A fund may present a backtest with a Sharpe of 3.0, but if that result was selected from 1,000,000 trials, the **Haircut Sharpe Ratio** might be closer to 0.5 or even negative. This leads to the "backtest-to-live" performance gap that can be catastrophic for systematic firms.

## Python: Simplified PBO Calculation

```python
import numpy as np
import pandas as pd
from itertools import combinations

def calculate_pbo(matrix_returns, S=16):
    """
    Simplified CSCV-based PBO calculation
    matrix_returns: DataFrame (T x N) where N is number of strategy variations
    S: Number of blocks (must be even)
    """
    T, N = matrix_returns.shape
    block_size = T // S
    blocks = [matrix_returns.iloc[i*block_size:(i+1)*block_size] for i in range(S)]
    
    indices = np.arange(S)
    combos = list(combinations(indices, S // 2))
    
    oos_ranks = []
    
    for train_idx in combos:
        test_idx = [i for i in indices if i not in train_idx]
        
        # Form IS and OOS sets
        is_set = pd.concat([blocks[i] for i in train_idx])
        oos_set = pd.concat([blocks[i] for i in test_idx])
        
        # Calculate Sharpe Ratios
        is_sharpe = is_set.mean() / is_set.std()
        oos_sharpe = oos_set.mean() / oos_set.std()
        
        # Best strategy IS
        best_n = is_sharpe.idxmax()
        
        # Rank of best_n in OOS (relative to other strategies)
        rank = oos_sharpe.rank(pct=True)[best_n]
        oos_ranks.append(rank)
        
    pbo = np.mean(np.array(oos_ranks) < 0.5)
    return pbo

# Example usage:
# returns = pd.DataFrame(np.random.normal(0, 0.01, (1000, 50)))
# pbo_val = calculate_pbo(returns)
# print(f"Probability of Backtest Overfitting: {pbo_val:.2%}")
```

## Related Topics
- [[meta-labeling]]
- [[monte-carlo-method]]
- [[value-at-risk]]

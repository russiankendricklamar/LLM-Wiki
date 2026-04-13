---
title: "Amihud Illiquidity Ratio"
category: "Risk Management"
order: 163
lang: "en"
slug: "amihud-illiquidity"
---
# Amihud Illiquidity Ratio

The **Amihud illiquidity ratio** is a widely used measure for estimating the price impact of trading volume. It captures the relationship between absolute returns and dollar volume.

## The Formula

The ratio $I_t$ for a given period is defined as:

$$
\text{Illiquidity}_{i,T} = \frac{1}{D_{i,T}} \sum_{t=1}^{D_{i,T}} \frac{|R_{i,t}|}{\text{Volume}_{i,t} \times P_{i,t}}
$$

Where:
- $R_{i,t}$ is the return of asset $i$ on day $t$
- $\text{Volume}_{i,t} \times P_{i,t}$ is the dollar volume (value traded)
- $D_{i,T}$ is the number of days in the period

A higher value indicates that the asset is more illiquid, as it takes less volume to move the price by a certain percentage.

## Liquidity Risk Premium
Research shows that assets with higher Amihud ratios tend to have higher expected returns, reflecting a premium for bearing liquidity risk.

## Python Implementation

```python
import pandas as pd

def amihud_ratio(returns, dollar_volume):
    """
    Calculate the Amihud illiquidity ratio.
    returns: Series of daily returns
    dollar_volume: Series of daily dollar volume
    """
    illiquidity = (returns.abs() / dollar_volume).mean()
    return illiquidity
```

## Related Topics
- [[market-impact-scaling]]
- [[optimal-execution]]
- [[volatility-forecasting]]
- [[levy-processes]]

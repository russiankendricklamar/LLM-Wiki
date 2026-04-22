---
title: "StatArb with PCA (Avellaneda-Lee)"
category: "Algorithms and ML"
order: 31
lang: "en"
slug: "pca-statarb"
---

# Statistical Arbitrage with PCA (Avellaneda-Lee)

The Avellaneda-Lee (2010) framework is the industry standard for **Statistical Arbitrage** in equities. While simple [[pairs-trading]] looks for cointegration between two stocks, this model uses **Principal Component Analysis (PCA)** to extract mean-reverting signals across an entire universe of thousands of stocks simultaneously.

## The Problem with Pairs

If you trade Exxon vs. Chevron, you assume their spread is stationary. But what if the entire oil sector shifts due to a macro event? A simple pair is noisy. A better approach is to trade a stock against the **synthetic market factors** that drive it.

## The PCA Approach

1.  **Extract Factors**: Run PCA on the correlation matrix of daily stock returns. 
    - The 1st eigenvector is the "Market Factor."
    - The 2nd-15th eigenvectors represent "Sector Factors" or "Style Factors" (without explicitly naming them).
2.  **Factor Regression**: For each stock $i$, run a linear regression against the top $K$ principal components (factors):
    $$R_i = \beta_{i,1}F_1 + \beta_{i,2}F_2 + \dots + \beta_{i,K}F_K + \tilde{R}_i$$
3.  **The Residual ($\tilde{R}_i$)**: This is the idiosyncratic, stock-specific return—cleared of all broad market and sector movements.

## Modeling the Residual (The Trade)

Avellaneda and Lee assume the cumulative residual $\tilde{X}_i = \int \tilde{R}_i dt$ follows a stationary [[ornstein-uhlenbeck-process|Ornstein-Uhlenbeck (OU) process]]:
$$d\tilde{X}_i = \kappa (\mu - \tilde{X}_i) dt + \sigma dW_t$$

- **The Signal (S-score)**: We calculate the dimensionless Z-score of the residual: $S = \frac{\tilde{X}_i - \mu}{\sigma_{eq}}$.
- **Execution**: 
  - If $S > 1.25$ (Stock is overpriced relative to its synthetic factors), we **Short** the stock and **Buy** the basket of PCA factors to hedge the beta.
  - If $S < -1.25$ (Underpriced), we **Buy** the stock and **Short** the PCA basket.

## Why it Dominates

By trading the residual against a PCA-derived basket, the portfolio becomes mathematically **Beta-neutral and Sector-neutral** by construction. The algorithm isolates pure idiosyncratic mispricing. If the whole market crashes, the long and short legs of the PCA basket perfectly cancel out the market risk.

## Visualization: The S-Score

```chart
{
  "type": "line",
  "xAxis": "days",
  "data": [
    {"days": 1, "sscore": 0.2, "upper": 1.25, "lower": -1.25},
    {"days": 2, "sscore": 0.8, "upper": 1.25, "lower": -1.25},
    {"days": 3, "sscore": 1.4, "upper": 1.25, "lower": -1.25},
    {"days": 4, "sscore": 0.5, "upper": 1.25, "lower": -1.25},
    {"days": 5, "sscore": -1.3, "upper": 1.25, "lower": -1.25},
    {"days": 6, "sscore": 0.0, "upper": 1.25, "lower": -1.25}
  ],
  "lines": [
    {"dataKey": "sscore", "stroke": "#3b82f6", "name": "Stock S-Score (Residual)"},
    {"dataKey": "upper", "stroke": "#ef4444", "name": "Short Threshold"},
    {"dataKey": "lower", "stroke": "#10b981", "name": "Buy Threshold"}
  ]
}
```
*The algorithm buys on Day 5 and shorts on Day 3, capturing the mean-reversion of the noise.*

## Related Topics

[[pca]] — the math behind extracting the factors  
[[alpha-orthogonalization]] — clearing the alpha from beta  
[[fastest-mean-reversion]] — an alternative optimization approach
---

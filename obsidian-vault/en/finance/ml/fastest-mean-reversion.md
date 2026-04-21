---
title: "Portfolios of Fastest Mean Reversion"
category: "Machine Learning in Finance"
order: 17
lang: "en"
slug: "fastest-mean-reversion"
---

# Portfolios of Fastest Mean Reversion

In statistical arbitrage, traditional [[pairs-trading|Pairs Trading]] uses cointegration to find two assets whose spread is stationary. However, top-tier quantitative funds (like Citadel) generalize this to $N$ assets. The goal is not just to find a stationary combination, but to find the portfolio vector that exhibits the **Fastest Mean Reversion**, allowing for higher turnover and massive risk-adjusted returns.

## The Mathematical Objective

We want to find a portfolio weight vector $w \in \mathbb{R}^N$ such that the portfolio value $Y_t = w^\top X_t$ (where $X_t$ is the vector of asset prices) is modeled as a stationary **Ornstein-Uhlenbeck (OU) process**:
$$dY_t = \lambda (\mu - Y_t) dt + \sigma dW_t$$

Here, $\lambda > 0$ is the **speed of mean reversion**. A higher $\lambda$ means the portfolio spread collapses back to its mean very quickly, allowing the algorithm to execute many profitable trades per day instead of waiting months.

Our objective is to maximize predictability, which mathematically translates to minimizing the autocorrelation at lag 1 (or maximizing the reversion speed).

## The Box-Tiao / Generalized Eigenvalue Approach

Box and Tiao (1977) formulated this as finding the linear combination that minimizes predictability from the past. 
Let $X_t$ follow a Vector Autoregression VAR(1) model:
$$X_t = A X_{t-1} + \epsilon_t$$

We want to find $w$ that minimizes the predictability ratio:
$$\nu = \frac{\text{Var}(\mathbb{E}[w^\top X_t \mid X_{t-1}])}{\text{Var}(w^\top X_t)} = \frac{w^\top (A \Gamma A^\top) w}{w^\top \Gamma w}$$
where $\Gamma = \text{Cov}(X_t)$.

This is a **Rayleigh Quotient**. The solution $w$ is the eigenvector corresponding to the **smallest generalized eigenvalue** of the pair $(A \Gamma A^\top, \Gamma)$.

## Sparse Mean-Reverting Portfolios

In practice, if you find a combination of 500 stocks that reverts quickly, transaction costs will destroy the alpha. You need a **Sparse Portfolio** (e.g., using only 5 to 10 stocks).

Quants apply **$L_1$-regularization (LASSO)** or **Sparse PCA** techniques to the generalized eigenvalue problem:
$$\max_w \quad \text{Reversion Speed}(w) \quad \text{s.t.} \quad \|w\|_0 \leq K$$

This yields a tight, highly liquid basket of assets (e.g., AAPL, MSFT, and a semiconductor ETF) whose residual spread is intensely mean-reverting.

## Visualization: Reversion Speed

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": 0, "standard_pair": 2.0, "fast_portfolio": 2.0},
    {"time": 1, "standard_pair": 1.8, "fast_portfolio": 0.5},
    {"time": 2, "standard_pair": 1.5, "fast_portfolio": -0.2},
    {"time": 3, "standard_pair": 1.2, "fast_portfolio": 1.8},
    {"time": 4, "standard_pair": 0.9, "fast_portfolio": -0.5},
    {"time": 5, "standard_pair": 0.5, "fast_portfolio": 0.1}
  ],
  "lines": [
    {"dataKey": "standard_pair", "stroke": "#94a3b8", "name": "Standard Cointegration (Slow)"},
    {"dataKey": "fast_portfolio", "stroke": "#10b981", "name": "Optimized Fast Reversion"}
  ]
}
```
*The optimized multi-asset portfolio (green) whipsaws back and forth across the zero-mean line, generating multiple entry and exit signals (trading opportunities) in the same time it takes the standard pair (grey) to revert once.*

## Related Topics

[[pairs-trading]] — the simple 2-asset version  
[[ornstein-uhlenbeck-process]] — the stochastic model of the spread  
[[pca]] — the base tool for eigen-problems
---

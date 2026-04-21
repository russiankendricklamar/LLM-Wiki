---
title: "Rank-based Tests"
category: "Asymptotic Statistics"
order: 25
lang: "en"
slug: "rank-tests"
---

# Rank-based Tests: Robust Non-parametrics

Rank-based tests are a class of statistical procedures that replace raw data values $X_i$ with their **Ranks** (1st, 2nd, ..., $n$-th). They are the primary tools for **Robust Statistics**, as they are completely immune to outliers and do not assume that the data follows a normal distribution.

## 1. The Core Idea: Symmetry and Invariance

If you have a set of data $\{1.2, 5.8, 1000.0\}$, the average is heavily pulled by the outlier ($1000.0$).
If you replace them with ranks $\{1, 2, 3\}$, the outlier has no more power than any other point.
- **Distribution-Free**: The distribution of ranks is the same regardless of whether the original data was Gaussian, Cauchy, or uniform. This allows for exact p-values without distributional assumptions.

## 2. Famous Rank Tests

### A. Wilcoxon Signed-Rank Test
The non-parametric alternative to the paired t-test. It tests whether the median of the differences between pairs is zero.
- **AI Use**: Comparing the performance of two LLM versions on a benchmark where scores are non-normal.

### B. Mann-Whitney U Test (Wilcoxon Rank-Sum)
Tests whether two independent samples come from the same distribution. It essentially counts how many times a value from Sample A precedes a value from Sample B in the sorted combined list.

### C. Spearman's Rank Correlation ($\rho$)
Measures the **Monotonic relationship** between two variables. Unlike Pearson correlation (which looks for a straight line), Spearman captures any relationship where $Y$ increases as $X$ increases (e.g., an exponential curve).
- **Finance**: Used to find relationships between alternative data (like satellite imagery) and stock returns, where the relationship is strong but highly non-linear.

## 3. Asymptotic Relative Efficiency (ARE)

A common myth is that rank tests are "weaker" than parametric tests. However, the **ARE** of the Wilcoxon test compared to the t-test is:
- **0.955** for normal data (you only lose 4.5% efficiency).
- **$\infty$** for heavy-tailed data (the rank test is infinitely better because the t-test fails to converge).
This makes rank tests the "safer" choice for real-world messy data.

## 4. Why Tier-1 Hedge Funds use them

In HFT and StatArb, price returns have extreme outliers ("Jumps"). 
A simple moving average or Pearson correlation will be ruined by a single flash crash. Quants use **Rank-based Alphas**: they rank stocks by their signals and trade the ranks. This ensures the portfolio doesn't take massive, concentrated bets on a single "noisy" stock that happens to have a 10-sigma return by luck.

## Related Topics

[[order-statistics]] — the math of sorting  
[[robust-statistics]] — the broader field of outlier-resistant math  
[[asymptotic-stats/mle]] — the parametric alternative
---
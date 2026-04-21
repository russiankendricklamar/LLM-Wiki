---
title: "UMVUE and Completeness"
category: "Asymptotic Statistics"
order: 20
lang: "en"
slug: "umvue-completeness"
---

# UMVUE and Completeness: The Theory of Optimal Estimation

In point estimation, we seek an estimator that is both unbiased and has the minimum possible variance. The **Uniformly Minimum Variance Unbiased Estimator (UMVUE)** is the "best" estimator in this class. Finding it requires the deep tools of **Sufficient Statistics** and **Completeness**.

## 1. Sufficiency and Data Compression

A statistic $T(X)$ is **Sufficient** for a parameter $\theta$ if the conditional distribution of the data $X$ given $T(X)$ does not depend on $\theta$. 
- *Intuition*: $T(X)$ contains all the information about $\theta$ present in the data. Any further detail in $X$ is just random noise.
- **Factorization Theorem**: $f(x \mid \theta) = h(x) \cdot g(T(x), \theta)$.

## 2. Rao-Blackwell Theorem: Improving Estimators

The Rao-Blackwell theorem provides a way to improve any unbiased estimator $\hat{\theta}$. If $T$ is a sufficient statistic, then the conditional expectation:
$$\theta^* = \mathbb{E}[\hat{\theta} \mid T]$$
is an unbiased estimator with a variance that is always **less than or equal to** the variance of $\hat{\theta}$.
- *Moral*: To find the best estimator, you should always start with a sufficient statistic.

## 3. Completeness and Uniqueness

Sufficiency is not enough to guarantee a *unique* best estimator. For that, we need **Completeness**.
A statistic $T$ is complete if for any function $g$, $\mathbb{E}_\theta[g(T)] = 0$ for all $\theta$ implies $g(T) = 0$ with probability 1.
- *Intuition*: A complete statistic has no "redundant" functions that are zero on average. It is "minimally sufficient."

## 4. Lehmann-Scheffé Theorem: Finding the UMVUE

This is the crowning result of the theory. It states:
If $T$ is a **Complete Sufficient Statistic**, then any function of $T$ that is an unbiased estimator of $\theta$ is the **unique UMVUE**.

**Steps to find the UMVUE**:
1.  Find a sufficient statistic $T$ (usually via the Factorization theorem).
2.  Prove $T$ is complete (usually by showing it belongs to the Exponential Family).
3.  Find a function $g(T)$ such that $\mathbb{E}[g(T)] = \theta$.
4.  By Lehmann-Scheffé, $g(T)$ is the best possible unbiased estimator.

## 5. Why Tier-1 Quants care

In high-frequency trading (HFT), we estimate parameters (like the spread or the jump intensity) from millions of noisy data points.
- **MLE vs UMVUE**: MLE is often biased in small samples (see [[asymptotic-stats/mle]]). 
- **Efficiency**: For critical risk parameters, quants use UMVUEs to ensure that the risk capital is not based on an estimator that is "accidentally" too low or has unnecessary variance, which could lead to regulatory penalties.

## Related Topics

[[asymptotic-stats/mle]] — the large-sample alternative  
[[asymptotic-stats/cramer-rao-bound]] — the lower bound on variance  
[[asymptotic-stats/delta-method]] — finding distributions of UMVUE functions
---
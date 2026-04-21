---
title: "Slutsky's Theorem"
category: "Asymptotic Statistics"
order: 10
lang: "en"
slug: "slutsky-theorem"
---

# Slutsky's Theorem: The Algebra of Limits

Slutsky's Theorem is a fundamental result in probability theory and asymptotic statistics. It allows us to perform algebraic operations (addition, multiplication, division) on sequences of random variables that converge in different ways. It is the "glue" that allows us to prove the **Asymptotic Normality** of complex estimators like [[mle|Maximum Likelihood]].

## 1. The Theorem

Let $\{X_n\}$ and $\{Y_n\}$ be sequences of scalar random variables.
If $X_n$ converges in **distribution** to $X$ ($X_n \xrightarrow{d} X$), and $Y_n$ converges in **probability** to a constant $c$ ($Y_n \xrightarrow{p} c$), then:

1.  **Addition**: $X_n + Y_n \xrightarrow{d} X + c$
2.  **Multiplication**: $X_n Y_n \xrightarrow{d} cX$
3.  **Division**: $X_n / Y_n \xrightarrow{d} X/c$ (if $c \neq 0$)

## 2. Why the Difference in Convergence Matters?

You cannot generally say that if $X_n \xrightarrow{d} X$ and $Y_n \xrightarrow{d} Y$, then $X_n + Y_n \xrightarrow{d} X + Y$. Convergence in distribution is "weak"—it only says the shapes of the histograms match, but it says nothing about the dependence between $X_n$ and $Y_n$. For example, if $X_n$ and $Y_n$ are both standard normal but perfectly negatively correlated, their sum is always zero (not a normal distribution).

Slutsky's "magic" is that if one of the sequences converges to a **constant**, the dependency doesn't matter. The constant $c$ effectively "pins down" the joint distribution, allowing the algebraic operations to work.

## 3. Application: The t-statistic and Wald Tests

The most famous application of Slutsky's theorem is the justification of the **Z-test** when the variance is estimated.
Consider the standardized sample mean:
$$Z_n = \frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}}$$
By the [[central-limit-theorem|CLT]], $Z_n \xrightarrow{d} \mathcal{N}(0, 1)$.
But in real life, we don't know $\sigma$. We use the sample standard deviation $s_n$.
The statistic is $T_n = \frac{\bar{X}_n - \mu}{s_n/\sqrt{n}}$.
We can write this as $T_n = Z_n \cdot (\sigma / s_n)$.
Since $s_n \xrightarrow{p} \sigma$ (by the Law of Large Numbers), then $(\sigma / s_n) \xrightarrow{p} 1$.
**By Slutsky's Theorem**, $T_n \xrightarrow{d} \mathcal{N}(0, 1) \cdot 1 = \mathcal{N}(0, 1)$.
This proves that for large samples, we can use the Normal distribution even if the variance is estimated.

## 4. Continuous Mapping Theorem (CMT)

Slutsky's theorem is a special case of the **Continuous Mapping Theorem**, which states that if $X_n \xrightarrow{d} X$, then for any continuous function $g$, $g(X_n) \xrightarrow{d} g(X)$. This is the engine behind the [[delta-method]], allowing us to find the distribution of non-linear functions of our data (like the Log-Return or the Sharpe Ratio).

## Related Topics

[[asymptotic-stats/mle]] — using Slutsky to prove MLE normality  
[[central-limit-theorem]] — providing the $X_n \xrightarrow{d} X$ part  
[[law-of-large-numbers]] — providing the $Y_n \xrightarrow{p} c$ part  
[[delta-method]] — the functional extension of Slutsky
---
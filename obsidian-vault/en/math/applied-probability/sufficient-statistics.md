---
title: "Sufficient Statistics & Factorization Theorem"
category: "Applied Probability"
order: 36
lang: "en"
slug: "sufficient-statistics"
---

# Sufficient Statistics & Factorization Theorem

A sufficient statistic captures all the information in a sample needed to estimate a parameter. Once the statistic is known, the individual data points provide no additional information about the parameter.

## 1. Definition

A statistic $T(X)$ is **sufficient** for $\theta$ if the conditional distribution of the sample $X$ given $T(X)$ does not depend on $\theta$:
$$P(X=x | T(X)=t; \theta) = P(X=x | T(X)=t)$$

## 2. Fisher-Neyman Factorization Theorem

A necessary and sufficient condition for $T(X)$ to be sufficient for $\theta$ is that the likelihood function $f(x; \theta)$ can be factored as:
$$f(x; \theta) = g(T(x); \theta) \cdot h(x)$$
where:
- $g(T(x); \theta)$ depends on $x$ only through $T(x)$.
- $h(x)$ does not depend on $\theta$.

## 3. Minimal Sufficiency and Completeness

- **Minimal Sufficient Statistic**: A sufficient statistic that is a function of any other sufficient statistic. It provides the greatest possible data compression.
- **Completeness**: A property ensuring that only one unbiased function of the statistic exists.

## 4. Rao-Blackwell Theorem

If $\hat{\theta}$ is an unbiased estimator of $\theta$, and $T$ is a sufficient statistic, then the conditional expectation $\mathbb{E}[\hat{\theta} | T]$ is also unbiased and has a variance less than or equal to that of $\hat{\theta}$:
$$\text{Var}(\mathbb{E}[\hat{\theta} | T]) \leq \text{Var}(\hat{\theta})$$
This process of improving an estimator using a sufficient statistic is called **Rao-Blackwellization**.

## Related Topics
[[statistical-inference]]
[[mle-estimation]]
[[estimator-properties]]
[[cramer-rao-bound]]

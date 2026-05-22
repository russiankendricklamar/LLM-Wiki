---
title: 'Econometrics: Instrumental Variables'
category: Advanced Math and Stats
order: 175
lang: en
slug: instrumental-variables
---

In regression analysis, omitted variable bias or simultaneous causality causes endogeneity: the explanatory variable $X$ correlates with the error term $\epsilon$ ($Cov(X, \epsilon) \neq 0$).

### The IV Estimator
An Instrumental Variable (IV) $Z$ must satisfy two conditions:
1. **Relevance:** $Cov(Z, X) \neq 0$.
2. **Exogeneity (Exclusion Restriction):** $Cov(Z, \epsilon) = 0$.
The basic IV estimator for a single variable is:
$\hat{\beta}_{IV} = \frac{Cov(Z, Y)}{Cov(Z, X)}$

### 2SLS
Two-Stage Least Squares (2SLS) extends IV to multiple variables. 
Stage 1: Regress $X$ on $Z$ to find the "fitted" endogenous variables $\hat{X}$.
Stage 2: Regress $Y$ on $\hat{X}$ to get consistent parameter estimates.

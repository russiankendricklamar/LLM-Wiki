---
title: 'Statistics: Generalized Method of Moments (GMM)'
category: Advanced Math and Stats
order: 176
lang: en
slug: gmm-estimation
---

GMM is a robust econometric framework for estimating parameters without fully specifying the data generating process (no strict distributional assumptions).

### Moment Conditions
Let the true parameter $\theta_0$ satisfy population moment conditions:
$\mathbb{E}[g(x_i, \theta_0)] = 0$
For sample data, the empirical moments are $\bar{g}(\theta) = \frac{1}{N} \sum_{i=1}^N g(x_i, \theta)$.

### The GMM Objective
If there are more moment conditions than parameters (over-identified), we cannot set $\bar{g}(\theta)$ exactly to zero. GMM minimizes a quadratic form:
$\hat{\theta}_{GMM} = \arg\min_\theta \bar{g}(\theta)^T W \bar{g}(\theta)$
where $W$ is a positive-definite weighting matrix. The optimal $W$ is the inverse of the covariance matrix of the moment conditions, yielding the most efficient estimator in the class.

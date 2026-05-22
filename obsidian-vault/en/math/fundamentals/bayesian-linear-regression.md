---
title: "Bayesian Linear Regression"
category: "Math Foundations"
order: 63
lang: "en"
slug: "bayesian-linear-regression"
---

# Bayesian Linear Regression

Unlike frequentist linear regression (which produces point estimates for weights), Bayesian Linear Regression treats the weights as random variables and computes a full posterior distribution over them using Bayes' theorem.

## The Model
Given data $(X, y)$, we assume a linear model with Gaussian noise:
$$ y | X, w \sim \mathcal{N}(Xw, \sigma^2 I) $$
This provides the **likelihood** $p(y | X, w)$.

We specify a Gaussian **prior** on the weights:
$$ p(w) = \mathcal{N}(w | 0, \tau^2 I) $$

## The Posterior Distribution
By Bayes' theorem, the posterior is proportional to the likelihood times the prior:
$$ p(w | X, y) \propto p(y | X, w) p(w) $$
Because both the prior and likelihood are Gaussian, the prior is **conjugate**, meaning the posterior is also Gaussian: $p(w | X, y) = \mathcal{N}(w | \mu_N, \Sigma_N)$, where:
$$ \Sigma_N^{-1} = \frac{1}{\tau^2}I + \frac{1}{\sigma^2} X^T X $$
$$ \mu_N = \Sigma_N \left( \frac{1}{\sigma^2} X^T y \right) $$

Notice that the MAP (Maximum A Posteriori) estimate (the mean $\mu_N$) exactly matches Ridge Regression (L2 regularization) where the regularization penalty $\lambda = \frac{\sigma^2}{\tau^2}$.

## Predictive Distribution
To predict a new target $y_*$ for a new input $x_*$, we marginalize over the uncertainty in $w$:
$$ p(y_* | x_*, X, y) = \int p(y_* | x_*, w) p(w | X, y) dw $$
This integral yields a Gaussian predictive distribution:
$$ p(y_* | x_*, X, y) = \mathcal{N}(y_* | \mu_N^T x_*, \sigma^2 + x_*^T \Sigma_N x_*) $$
The predictive variance incorporates both the inherent noise ($\sigma^2$) and the epistemic uncertainty in the weights ($x_*^T \Sigma_N x_*$).

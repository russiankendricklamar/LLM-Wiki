---
title: "Point Estimation: Maximum A Posteriori (MAP) & Bayesian Inference"
category: "Applied Probability"
order: 34
lang: "en"
slug: "map-estimation"
---

# Point Estimation: Maximum A Posteriori (MAP) & Bayesian Inference

Maximum A Posteriori (MAP) estimation is a Bayesian method for estimating unknown parameters. It incorporates prior knowledge about the parameter distribution, acting as a bridge between Frequentist and Bayesian statistics.

## 1. Bayesian Framework

In Bayesian inference, we treat the parameter $\theta$ as a random variable. By Bayes' Theorem:
$$p(\theta | X) = \frac{p(X | \theta) p(\theta)}{p(X)} \propto p(X | \theta) p(\theta)$$
- **Posterior** $\propto$ **Likelihood** $\times$ **Prior**

## 2. MAP Derivation

The MAP estimator is the mode of the posterior distribution:
$$\hat{\theta}_{MAP} = \arg \max_{\theta} p(\theta | X) = \arg \max_{\theta} [\log p(X | \theta) + \log p(\theta)]$$

## 3. Relation to MLE and Regularization

If the prior $p(\theta)$ is uniform, the MAP estimator reduces to the [[mle-estimation|MLE estimator]].
When the prior is Gaussian or Laplacian, MAP estimation is equivalent to adding a penalty term (regularization) to the MLE:

- **Gaussian Prior**: $p(\theta) \sim \mathcal{N}(0, \tau^2) \implies \text{L2 Regularization (Ridge Regression)}$.
- **Laplacian Prior**: $p(\theta) \propto e^{-\lambda |\theta|} \implies \text{L1 Regularization (LASSO)}$.

## 4. Bayesian Credible Intervals

Unlike Frequentist confidence intervals, Bayesian inference provides **Credible Intervals**, which represent the probability that the parameter lies within a certain range given the observed data:
$$P(\theta \in [a, b] | X) = 1 - \alpha$$

## Related Topics
[[bayes-theorem]]
[[mle-estimation]]
[[linear-regression-ols]]
[[statistical-inference]]

---
title: "Linear Regression and Gauss-Markov"
category: "Statistical Learning"
order: 9
lang: "en"
slug: "linear-regression"
---

# Linear Regression and the Gauss-Markov Theorem

Linear Regression is the most fundamental algorithm in statistical learning. It models the relationship between a scalar response $y$ and one or more explanatory variables (features) $X$ by fitting a linear equation to observed data.

## The Model

The true data generating process is assumed to be:
$$y_i = x_i^\top \beta + \epsilon_i$$
Where:
- $x_i \in \mathbb{R}^d$ is the feature vector.
- $\beta \in \mathbb{R}^d$ is the unknown parameter vector.
- $\epsilon_i$ is the random error term (noise).

## Ordinary Least Squares (OLS)

The standard way to estimate $\beta$ is Ordinary Least Squares (OLS), which minimizes the Sum of Squared Residuals (SSR):
$$SSR(\hat{\beta}) = \sum_{i=1}^n (y_i - x_i^\top \hat{\beta})^2 = \| y - X\hat{\beta} \|_2^2$$

Setting the gradient to zero yields the **Normal Equation**, which gives the closed-form analytical solution:
$$\hat{\beta}_{OLS} = (X^\top X)^{-1} X^\top y$$

## The Gauss-Markov Theorem

Why use OLS? The **Gauss-Markov Theorem** states that if the errors satisfy three conditions:
1.  **Zero Mean**: $\mathbb{E}[\epsilon_i] = 0$
2.  **Homoscedasticity** (constant variance): $\text{Var}(\epsilon_i) = \sigma^2$
3.  **No Autocorrelation**: $\text{Cov}(\epsilon_i, \epsilon_j) = 0$ for $i \neq j$

Then the OLS estimator is **BLUE (Best Linear Unbiased Estimator)**. This means out of *all* possible linear unbiased estimators, OLS has the lowest possible variance. 
*(Note: It does not assume the errors are normally distributed!)*

## Regularization (Ridge and Lasso)

If $X^\top X$ is not invertible (e.g., $d > n$ or features are highly correlated), OLS fails or explodes. We fix this by adding a penalty to the size of $\beta$:

### 1. Ridge Regression (L2 Penalty)
$$\hat{\beta}_{Ridge} = \arg\min_\beta \| y - X\beta \|_2^2 + \lambda \|\beta\|_2^2$$
Solution: $\hat{\beta}_{Ridge} = (X^\top X + \lambda I)^{-1} X^\top y$. It shrinks all weights continuously. Equivalent to [[bayesian-inference|MAP estimation]] with a Gaussian prior.

### 2. Lasso Regression (L1 Penalty)
$$\hat{\beta}_{Lasso} = \arg\min_\beta \| y - X\beta \|_2^2 + \lambda \|\beta\|_1$$
No closed-form solution. It forces some weights to become **exactly zero**, acting as an automatic feature selector. Equivalent to MAP with a Laplace prior.

## Visualization: The Bias-Variance Trade-off

```chart
{
  "type": "line",
  "xAxis": "complexity",
  "data": [
    {"complexity": "High Bias (Underfit)", "error_train": 10, "error_test": 12},
    {"complexity": "Optimal Capacity", "error_train": 5, "error_test": 5.5},
    {"complexity": "High Variance (Overfit)", "error_train": 0.5, "error_test": 20}
  ],
  "lines": [
    {"dataKey": "error_train", "stroke": "#3b82f6", "name": "Training Error"},
    {"dataKey": "error_test", "stroke": "#ef4444", "name": "Testing Error"}
  ]
}
```
*OLS on highly correlated data often lands in the "High Variance" zone. Regularization pushes the model back towards the "Optimal Capacity" zone by deliberately introducing a small bias to drastically reduce variance.*

## Related Topics

[[logistic-regression]] — the classification counterpart  
[[mle]] — OLS is equivalent to MLE under Gaussian noise  
matrix-calculus — derivation of the Normal Equation
---

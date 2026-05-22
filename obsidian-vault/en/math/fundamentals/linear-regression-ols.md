---
title: "Linear Regression & OLS"
category: "Math Fundamentals"
order: 6
lang: "en"
slug: "linear-regression-ols"
---

# Linear Regression & OLS: The Foundation of Predictive Modeling

Linear regression is the simplest and most interpretable form of regression. It assumes a linear relationship between the input variables ($X$) and the single output variable ($y$). **Ordinary Least Squares (OLS)** is the method used to estimate the parameters that minimize the sum of the squared differences between the observed and predicted values.

## 1. The Model Equation

For a set of $n$ observations, the model is:
$$y = X\beta + \epsilon$$
- $y$: Vector of target values ($n \times 1$).
- $X$: Matrix of input features ($n \times p$), with a column of ones for the intercept.
- $\beta$: Vector of coefficients (parameters) to be learned.
- $\epsilon$: Error term (noise).

## 2. Ordinary Least Squares (OLS)

We want to find $\beta$ that minimizes the **Residual Sum of Squares (RSS)**:
$$RSS(\beta) = \sum_{i=1}^n (y_i - x_i^T\beta)^2 = \|y - X\beta\|^2$$

### The Normal Equation
By setting the derivative of RSS to zero, we obtain the analytical solution:
$$\hat{\beta} = (X^T X)^{-1} X^T y$$

**Geometric Interpretation**: The predicted values $\hat{y} = X\hat{\beta}$ are the **orthogonal projection** of the target vector $y$ onto the subspace spanned by the columns of $X$. The residuals $e = y - \hat{y}$ are orthogonal to the feature space.

## 3. Assumptions of OLS (Gauss-Markov)

For OLS to be the Best Linear Unbiased Estimator (BLUE):
1. **Linearity**: The relationship is linear in parameters.
2. **Exogeneity**: $E[\epsilon | X] = 0$ (No correlation between error and features).
3. **Homoscedasticity**: Constant variance of errors.
4. **No Multicollinearity**: Columns of $X$ must be linearly independent.

## 4. Evaluation Metrics

- **R-squared ($R^2$)**: The proportion of variance in $y$ explained by $X$.
- **Mean Squared Error (MSE)**: The average of the squared residuals.
- **t-statistic**: Testing if a specific coefficient $\beta_j$ is significantly different from zero.

## 5. Beyond OLS: Regularization

When $X^T X$ is not invertible (due to multicollinearity) or to prevent overfitting:
- **Ridge Regression**: Adds an $L_2$ penalty $\|\beta\|^2$.
- **Lasso Regression**: Adds an $L_1$ penalty $|\beta|$, leading to sparse solutions (feature selection).

## Related Topics
[[vector-spaces-orthogonality|Vector Spaces & Projections]] — The geometry behind the Normal Equation  
[[matrix-decompositions|Matrix Decompositions]] — Solving OLS via QR or SVD  
[[statistical-inference|Statistical Inference]] — Testing the significance of $\beta$

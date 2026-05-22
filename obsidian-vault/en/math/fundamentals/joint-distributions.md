---
title: "Joint, Marginal, and Conditional Distributions"
category: "Math Foundations"
order: 24
lang: "en"
slug: "joint-distributions"
---

# Joint, Marginal, and Conditional Distributions

In multivariate probability, we deal with vectors of random variables. Understanding how these variables interact requires the study of joint, marginal, and conditional distributions.

## 1. Joint Distributions

For two random variables $X$ and $Y$, the **Joint CDF** is:
$$ F_{X,Y}(x, y) = P(X \leq x, Y \leq y) $$

### 1.1 Discrete Case: Joint PMF
$$ p_{X,Y}(x, y) = P(X = x, Y = y) $$
Must satisfy $\sum_x \sum_y p_{X,Y}(x, y) = 1$.

### 1.2 Continuous Case: Joint PDF
If $X$ and $Y$ are jointly continuous, there exists a function $f_{X,Y}(x, y)$ such that:
$$ P((X, Y) \in A) = \iint_A f_{X,Y}(x, y) \, dx \, dy $$
Must satisfy $\int_{-\infty}^\infty \int_{-\infty}^\infty f_{X,Y}(x, y) \, dx \, dy = 1$.

## 2. Marginal Distributions

Marginal distributions describe the behavior of a single variable while ignoring the others.

- **Discrete**: $p_X(x) = \sum_y p_{X,Y}(x, y)$
- **Continuous**: $f_X(x) = \int_{-\infty}^\infty f_{X,Y}(x, y) \, dy$

This process is called "marginalizing out" the variable $Y$.

## 3. Conditional Distributions

Conditional distributions describe the behavior of one variable given that another variable has taken a specific value.

- **Discrete**: $p_{X|Y}(x|y) = \frac{p_{X,Y}(x, y)}{p_Y(y)}$
- **Continuous**: $f_{X|Y}(x|y) = \frac{f_{X,Y}(x, y)}{f_Y(y)}$

### 3.1 Conditional Expectation
The expected value of $X$ given $Y=y$ is a function of $y$:
$$ \mathbb{E}[X|Y=y] = \int_{-\infty}^\infty x f_{X|Y}(x|y) \, dx $$
**Law of Iterated Expectations**: $\mathbb{E}[X] = \mathbb{E}[\mathbb{E}[X|Y]]$.

## 4. Independence

$X$ and $Y$ are **independent** if and only if their joint distribution factors into the product of their marginals:
$$ f_{X,Y}(x, y) = f_X(x) f_Y(y) $$
Equivalently: $f_{X|Y}(x|y) = f_X(x)$ and $f_{Y|X}(y|x) = f_Y(y)$.

## 5. Multivariate Calculus Foundation

Calculating probabilities and moments in multivariate settings often requires:
- **Double Integrals**: For computing $P((X,Y) \in A)$.
- **Jacobians**: For transformation of random vectors $\mathbf{Y} = \mathbf{g}(\mathbf{X})$:
  $$ f_{\mathbf{Y}}(\mathbf{y}) = f_{\mathbf{X}}(\mathbf{x}) | \det(J) |^{-1} $$
  where $J$ is the Jacobian matrix of the transformation.

## Related Topics

[[covariance-correlation]] — measures of linear relationship  
[[multivariate-normal]] — the most important joint distribution  
[[copulas]] — modeling dependence structures
---

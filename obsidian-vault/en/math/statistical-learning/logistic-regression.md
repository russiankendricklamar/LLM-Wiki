---
title: "Logistic Regression"
category: "Statistical Learning"
order: 10
lang: "en"
slug: "logistic-regression"
---

# Logistic Regression: The Link Between Stats and Neural Networks

Logistic Regression is the foundational algorithm for binary classification. Despite its name, it is a classification model, not a regression model. It is the "grandfather" of modern deep learning—a single-layer neural network with a **Sigmoid activation** is exactly a logistic regression.

## 1. The Logistic Model

Instead of modeling the output $y$ directly as a linear combination of inputs (which could result in values from $-\infty$ to $+\infty$), we model the **Log-Odds** (Logit):
$$\ln \left( \frac{p}{1-p} \right) = \beta_0 + \beta_1 x_1 + \dots + \beta_n x_n$$
Solving for the probability $p$ gives the **Logistic Function** (Sigmoid):
$$p = \sigma(z) = \frac{1}{1 + e^{-z}}$$
where $z = w^\top x + b$.

## 2. Estimation: Cross-[[shannon-entropy|Entropy]] Loss

We cannot solve Logistic Regression using Ordinary Least Squares because the output is non-linear. Instead, we use **[[asymptotic-stats/mle|Maximum Likelihood Estimation (MLE)]]**.
The loss function we minimize is the **Binary Cross-Entropy**:
$$\mathcal{L} = -\sum [y_i \ln p_i + (1-y_i) \ln(1-p_i)]$$
- **Convexity**: This loss function is strictly [[convexity|Convex]]. This means optimization algorithms like [[convex-optimization|Gradient Descent]] are guaranteed to find the global minimum.

## 3. Interpretation: Odds and Ratios

- **Odds Ratio**: For every unit increase in $x_i$, the odds of the positive class ($y=1$) change by a factor of $e^{\beta_i}$.
- **Decision Boundary**: The point where $p=0.5$ (or $z=0$) defines a **Linear Hyperplane** in the feature space. Logistic regression is a linear classifier.

## 4. Modern Scaling

1.  **Regularization (LASSO/Ridge)**: Adding $\|\beta\|_1$ or $\|\beta\|_2$ to the loss function prevents the weights from exploding, which is essential for high-dimensional data (e.g., predicting click-through rates).
2.  **Multinomial (Softmax)**: Extending the binary model to $K$ classes leads to the **Softmax** layer, which is the final layer of every Large Language Model ([[transformer-architecture|Transformer]]).
3.  **Online Learning**: Using Stochastic Gradient Descent (SGD), logistic regression can be trained on infinite data streams (e.g., high-frequency trading data) without storing the dataset in memory.

## Related Topics

[[asymptotic-stats/mle]] — the math of how it is trained  
[[transformer-architecture]] — where Softmax (multi-class logistic) lives  
[[convexity]] — why it is easy to solve  
[[linear-regression]] — the simpler, non-probabilistic ancestor
---
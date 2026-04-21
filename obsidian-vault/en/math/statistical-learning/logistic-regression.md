---
title: "Logistic Regression and GLMs"
category: "Statistical Learning"
order: 10
lang: "en"
slug: "logistic-regression"
---

# Logistic Regression and GLMs

Despite its name, Logistic Regression is a **classification** algorithm. It is part of a broader family of models called **Generalized Linear Models (GLMs)**, which extend linear regression to handle response variables that are not normally distributed (e.g., binary outcomes, counts).

## The Logistic Model

In binary classification ($y \in \{0, 1\}$), a standard linear model $x^\top \beta$ can predict values outside the $[0, 1]$ range, which makes no sense for probabilities. 

Logistic regression solves this by passing the linear output through the **Sigmoid (Logistic) function**:
$$p(y=1 \mid x) = \sigma(x^\top \beta) = \frac{1}{1 + e^{-x^\top \beta}}$$

This guarantees the output is a valid probability.

## Log-Odds (Logit)

If we rearrange the equation, we get the **Logit function**:
$$\log \left( \frac{p}{1-p} \right) = x^\top \beta$$
This means logistic regression assumes that the **log-odds** of the positive class depend linearly on the features.

## Loss Function: Cross-Entropy

Unlike linear regression, we cannot use Mean Squared Error (MSE) to train logistic regression because it creates a non-convex loss landscape. Instead, we use **Maximum Likelihood Estimation (MLE)**.

The negative log-likelihood for a Bernoulli distribution leads to the **Binary Cross-Entropy (Log-Loss)**:
$$\mathcal{L}(\beta) = -\frac{1}{n} \sum_{i=1}^n \left[ y_i \log(\hat{y}_i) + (1-y_i)\log(1-\hat{y}_i) \right]$$
This loss function is **convex**, guaranteeing that gradient descent will find the global minimum. There is no closed-form solution like the Normal Equation; it must be solved iteratively.

## Generalized Linear Models (GLMs)

Logistic regression is just one instance of a GLM. A GLM consists of three components:
1.  **Random Component**: The probability distribution of the response $y$ (from the [[exponential-families|Exponential Family]]).
2.  **Systematic Component**: The linear predictor $\eta = x^\top \beta$.
3.  **Link Function**: A monotonic function $g$ that links the expected value of $y$ to the linear predictor: $g(\mathbb{E}[y]) = \eta$.

### Common GLMs
| Model | Distribution | Link Function $g(\mu)$ | Use Case |
|---|---|---|---|
| Linear Regression | Gaussian | Identity ($\mu$) | Continuous Data |
| Logistic Regression | Bernoulli | Logit ($\log \frac{\mu}{1-\mu}$) | Binary Classification |
| Poisson Regression | Poisson | Log ($\log \mu$) | Count Data (e.g., website clicks) |

## Related Topics

[[linear-regression]] — the continuous counterpart  
[[exponential-families]] — the theoretical foundation of GLMs  
[[mle]] — the optimization target
---

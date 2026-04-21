---
title: "Delta Method"
category: "Asymptotic Statistics"
order: 5
lang: "en"
slug: "delta-method"
---

# The Delta Method: Propagation of Errors

The Delta Method is a fundamental tool in statistics used to find the **asymptotic distribution** of a function of an estimator. If you know that your estimator $\hat{\theta}$ is normally distributed, the Delta Method tells you the distribution of $g(\hat{\theta})$ for any smooth function $g$.

## 1. The Core Idea: Linearization

The method relies on a first-order **Taylor expansion** of the function $g$. 
Near the true parameter $\theta$, we approximate:
$$g(\hat{\theta}) \approx g(\theta) + g'(\theta)(\hat{\theta} - \theta)$$

If $\sqrt{n}(\hat{\theta} - \theta)$ converges to a normal distribution $\mathcal{N}(0, \sigma^2)$, then:
$$\sqrt{n}(g(\hat{\theta}) - g(\theta)) \xrightarrow{d} \mathcal{N}(0, \sigma^2 \cdot [g'(\theta)]^2)$$

## 2. Multivariate Delta Method

In high-dimensional settings (like AI), $\theta$ is a vector and $g$ is a vector-valued function. The variance is now scaled by the **[[gradient-hessian-jacobian|Jacobian]]** matrix $J$:
$$\Sigma_g = J \Sigma_\theta J^\top$$

This formula is the statistical version of **Error Propagation**. It tells you how the uncertainty in your model weights ($ \Sigma_\theta $) flows through your activation functions to create uncertainty in the final output.

## 3. Applications in Finance and AI

1.  **Log-Returns**: If stock prices are normally distributed (rare), the Delta Method helps find the distribution of log-returns ($g(x) = \ln x$).
2.  **Sharpe Ratio Statistics**: We can calculate the standard error of the Sharpe Ratio by applying the Delta Method to the ratio of mean and standard deviation.
3.  **Inference in Neural Networks**: Used to construct confidence intervals for predictions. If we know the uncertainty of the weights (via [[bayesian-inference]]), we use the Delta Method (Jacobians) to find the uncertainty of the result.

## 4. Limitations

- **Non-smoothness**: The function $g$ must be differentiable at $\theta$. It fails for functions like $|x|$ at the origin.
- **Second-order terms**: If $g'(\theta) = 0$ (e.g., at a local minimum), the first-order Delta Method gives a variance of zero. In this case, we must use the **Second-order Delta Method**, which results in a non-central Chi-squared distribution.

## Related Topics

[[asymptotic-stats/mle]] — where the initial normal distribution usually comes from  
[[gradient-hessian-jacobian]] — the mathematical engine (Jacobians)  
[[central-limit-theorem]] — the reason why $\hat{\theta}$ is often normal
---

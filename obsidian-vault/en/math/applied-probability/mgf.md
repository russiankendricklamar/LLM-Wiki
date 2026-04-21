---
title: "Moment Generating Functions"
category: "Applied Probability"
order: 41
lang: "en"
slug: "mgf"
---

# Moment Generating Functions (MGF)

A Moment Generating Function (MGF) is a mathematical representation of a probability distribution that allows for easy calculation of its **moments** (mean, variance, skewness, etc.) and provides a unique "fingerprint" for identifying distributions.

## Definition

The MGF of a random variable $X$ is defined as the expected value of $e^{tX}$:

$$M_X(t) = \mathbb{E}[e^{tX}]$$

It is defined for all $t$ for which this expectation exists. For a continuous variable with PDF $f(x)$, it is the Laplace transform of the density: $M_X(t) = \int e^{tx} f(x) dx$.

## The Power of the MGF

### 1. Generating Moments
The name comes from the fact that the $n$-th moment $\mathbb{E}[X^n]$ is exactly the $n$-th derivative of the MGF evaluated at $t=0$:

$$\mathbb{E}[X^n] = \frac{d^n}{dt^n} M_X(t) \Big|_{t=0}$$

This is much easier than computing integrals like $\int x^n f(x) dx$ for every $n$.

### 2. Unique Identification
If two random variables have the same MGF in some interval around $t=0$, they have the **same distribution**. This property is used to prove that the sum of independent Gaussians is also Gaussian.

### 3. Sums of Variables
If $X$ and $Y$ are independent, the MGF of their sum is simply the **product** of their individual MGFs:
$$M_{X+Y}(t) = M_X(t) \cdot M_Y(t)$$

## Relation to Characteristic Functions

If the MGF doesn't exist (because the integral diverges, e.g., for the Cauchy distribution), we use the **Characteristic Function** $\phi_X(t) = \mathbb{E}[e^{itX}]$, which uses complex numbers and always exists for any distribution.

## Comparison Table

| Distribution | MGF $M(t)$ | Mean $\mu$ |
|---|---|---|
| **Bernoulli($p$)** | $1 - p + pe^t$ | $p$ |
| **Poisson($\lambda$)** | $\exp(\lambda(e^t - 1))$ | $\lambda$ |
| **Normal($\mu, \sigma^2$)** | $\exp(\mu t + \frac{\sigma^2 t^2}{2})$ | $\mu$ |

## Visualization: MGF Shape

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": -1.0, "normal": 0.60, "poisson": 0.36},
    {"t": -0.5, "normal": 0.88, "poisson": 0.61},
    {"t": 0.0,  "normal": 1.00, "poisson": 1.00},
    {"t": 0.5,  "normal": 1.28, "poisson": 1.64},
    {"t": 1.0,  "normal": 2.71, "poisson": 2.71}
  ],
  "lines": [
    {"dataKey": "normal", "stroke": "#3b82f6", "name": "Normal MGF"},
    {"dataKey": "poisson", "stroke": "#10b981", "name": "Poisson MGF"}
  ]
}
```
*All MGFs pass through (0, 1) because $M(0) = \mathbb{E}[e^0] = 1$. The slope at zero is the mean, and the curvature (2nd derivative) relates to the variance.*

## Related Topics

[[characteristic-functions]] — the always-existent alternative  
[[central-limit-theorem]] — proven using MGFs or Characteristic Functions  
[[exponential-families]] — where MGFs have a simple closed form
---

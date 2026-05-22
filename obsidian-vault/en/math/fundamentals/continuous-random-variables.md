---
title: "Continuous Random Variables"
category: "Math Foundations"
order: 23
lang: "en"
slug: "continuous-random-variables"
---

# Continuous Random Variables

A **Continuous Random Variable** is a random variable whose range is an uncountable set (typically $\mathbb{R}$ or an interval). Unlike discrete variables, the probability of a continuous variable taking any single exact value is zero.

## 1. Probability Density Function (PDF)

The distribution of a continuous random variable $X$ is described by its **PDF**, $f_X(x)$.
The probability that $X$ falls in an interval $[a, b]$ is the area under the PDF curve:
$$ P(a \leq X \leq b) = \int_a^b f_X(x) \, dx $$

### 1.1 Properties of the PDF
1.  $f_X(x) \geq 0$ for all $x$.
2.  $\int_{-\infty}^\infty f_X(x) \, dx = 1$ (Normalization).
3.  $P(X = x) = \int_x^x f_X(t) \, dt = 0$.

## 2. Cumulative Distribution Function (CDF)

The **CDF**, $F_X(x)$, is the integral of the PDF from $-\infty$ to $x$:
$$ F_X(x) = P(X \leq x) = \int_{-\infty}^x f_X(t) \, dt $$
By the Fundamental Theorem of Calculus:
$$ f_X(x) = \frac{d}{dx} F_X(x) $$

## 3. Expected Value and Variance

The definitions for mean and variance parallel the discrete case, replacing sums with integrals:
$$ \mathbb{E}[X] = \int_{-\infty}^\infty x f_X(x) \, dx $$
$$ \text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2 = \int_{-\infty}^\infty x^2 f_X(x) \, dx - \mu^2 $$

## 4. Transformation of Variables

If $Y = g(X)$ and $g$ is a strictly monotonic differentiable function, the PDF of $Y$ is:
$$ f_Y(y) = f_X(x) \left| \frac{dx}{dy} \right| = f_X(g^{-1}(y)) \left| \frac{d}{dy} g^{-1}(y) \right| $$
- **Intuition**: This ensures that the probability mass is conserved: $f_Y(y) dy = f_X(x) dx$.

## 5. Common Continuous Distributions

| Distribution | PDF: $f(x)$ | $\mathbb{E}[X]$ | $\text{Var}(X)$ |
|---|---|---|---|
| **Uniform($a, b$)** | $\frac{1}{b-a}$, $x \in [a, b]$ | $\frac{a+b}{2}$ | $\frac{(b-a)^2}{12}$ |
| **Normal($\mu, \sigma^2$)** | $\frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ | $\mu$ | $\sigma^2$ |
| **Exponential($\lambda$)** | $\lambda e^{-\lambda x}$, $x \geq 0$ | $1/\lambda$ | $1/\lambda^2$ |
| **Cauchy($x_0, \gamma$)** | $\frac{1}{\pi\gamma [1 + (\frac{x-x_0}{\gamma})^2]}$ | Undefined | Undefined |

## Related Topics

[[discrete-random-variables]] — when the range is countable  
[[joint-distributions]] — multivariate continuous variables  
[[measure-theory]] — rigorous foundation for PDFs
---

---
title: "Characteristic Functions"
category: "Applied Probability"
order: 42
lang: "en"
slug: "characteristic-functions"
---

# Characteristic Functions

The Characteristic Function is the Fourier transform of the probability distribution of a random variable. Unlike the [[mgf|Moment Generating Function]], the characteristic function **always exists** for any random variable, making it the most powerful analytical tool in probability theory.

## Definition

The characteristic function of a random variable $X$ is defined as the expected value of $e^{itX}$:

$$\varphi_X(t) = \mathbb{E}[e^{itX}] = \int_{-\infty}^{\infty} e^{itx} dF_X(x)$$

Where:
- $t \in \mathbb{R}$ is the argument.
- $i$ is the imaginary unit.
- $F_X(x)$ is the cumulative distribution function.

## Key Properties

### 1. Existence and Boundedness
Since $|e^{itx}| = 1$ for all real $t$ and $x$, the integral always converges. Furthermore, $|\varphi_X(t)| \leq \varphi_X(0) = 1$.

### 2. Uniqueness (Inversion Theorem)
There is a one-to-one correspondence between distributions and characteristic functions. If we know $\varphi_X(t)$, we can uniquely reconstruct the density $f(x)$:
$$f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-itx} \varphi_X(t) dt$$

### 3. Sums of Independent Variables
If $X$ and $Y$ are independent, the characteristic function of their sum is the product of their functions:
$$\varphi_{X+Y}(t) = \varphi_X(t) \cdot \varphi_Y(t)$$
This property turns the complex operation of **convolution** in the spatial domain into simple **multiplication** in the frequency domain.

## Proving the Central Limit Theorem (CLT)

The most famous application of characteristic functions is proving the CLT. By Taylor expanding $\varphi_X(t)$ around zero and taking the limit of the product of $n$ such functions, one can show that the result converges to $\exp(-t^2/2)$, which is the characteristic function of the **Standard Normal Distribution**.

## Comparison Table

| Distribution | Characteristic Function $\varphi(t)$ |
|---|---|
| **Degenerate** ($\delta_a$) | $e^{ita}$ |
| **Poisson** ($\lambda$) | $\exp(\lambda(e^{it} - 1))$ |
| **Normal** ($\mu, \sigma^2$) | $\exp(i\mu t - \frac{\sigma^2 t^2}{2})$ |
| **Cauchy** ($x_0, \gamma$) | $\exp(ix_0 t - \gamma |t|)$ |

## Visualization: Frequency Domain

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": -5, "real": 0.05, "imag": 0.0},
    {"t": -2, "real": 0.50, "imag": 0.0},
    {"t": 0,  "real": 1.00, "imag": 0.0},
    {"t": 2,  "real": 0.50, "imag": 0.0},
    {"t": 5,  "real": 0.05, "imag": 0.0}
  ],
  "lines": [
    {"dataKey": "real", "stroke": "#3b82f6", "name": "Re(φ) - Real Part"}
  ]
}
```
*The real part of a characteristic function is symmetric. For a symmetric distribution around zero, the imaginary part is zero.*

## Related Topics

[[mgf]] — the real-valued restricted version  
[[central-limit-theorem]] — the primary theoretical application  
[[infinitely-divisible-distributions]] — studied via their characteristic functions
---

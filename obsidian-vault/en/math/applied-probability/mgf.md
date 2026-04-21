---
title: "Moment Generating Functions (MGF)"
category: "Applied Probability"
order: 4
lang: "en"
slug: "mgf"
---

# Moment Generating Functions (MGF)

The **Moment Generating Function (MGF)** is a powerful tool that transforms a probability distribution into a function of a dummy variable $t$. It is the probabilistic equivalent of the [[fourier-transform|Laplace Transform]]. The MGF completely uniquely identifies a distribution and simplifies the calculation of moments (mean, variance, skewness).

## 1. Definition

The MGF of a random variable $X$ is defined as:
$$M_X(t) = \mathbb{E}[e^{tX}]$$
For a continuous variable with PDF $f(x)$, this is $\int e^{tx} f(x) dx$.

## 2. The Power of MGFs

### A. Generating Moments
The reason for its name: to find the $n$-th moment of $X$ ($\mathbb{E}[X^n]$), you simply take the $n$-th derivative of the MGF and evaluate it at $t=0$:
$$\mathbb{E}[X^n] = M_X^{(n)}(0)$$
- **Why it's useful**: Integrating $x^n f(x)$ can be extremely hard. Differentiating $M_X(t)$ is usually easy.

### B. Sums of Independent Variables
If $X$ and $Y$ are independent, the MGF of their sum is the **product** of their MGFs:
$$M_{X+Y}(t) = M_X(t) \cdot M_Y(t)$$
This makes MGFs the primary tool for proving the **[[central-limit-theorem|Central Limit Theorem]]**. By multiplying MGFs and taking the limit, we can see the Gaussian distribution emerge mathematically.

### C. Uniqueness
If two random variables have the same MGF in an open interval around zero, they have the **exact same distribution**. This is why MGFs are often used as "fingerprints" for random processes.

## 3. Relationship to Other Transforms

- **Characteristic Function**: $\phi_X(t) = \mathbb{E}[e^{itX}]$. Unlike the MGF, the characteristic function **always exists** for any distribution (because $e^{itX}$ is bounded). It is the [[fourier-transform|Fourier Transform]] of the PDF.
- **Probability Generating Function (PGF)**: Used for discrete variables (like Poisson). $G_X(z) = \mathbb{E}[z^X]$.

## 4. Application in Finance: Portfolio Tail Risk

In quantitative risk management, we use MGFs to calculate **Cramér's Bound** for large deviations. 
If we want to know the probability that a portfolio loss exceeds a very high threshold $a$, we use the **Chernoff Bound**, which is derived directly from the MGF:
$$P(X \geq a) \leq e^{-ta} M_X(t) \quad \text{for any } t > 0$$
By optimizing over $t$, we get the tightest possible exponential bound on "Black Swan" events.

## Visualization: MGF of a Gaussian

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": -2, "mgf": 7.3},
    {"t": -1, "mgf": 1.6},
    {"t": 0,  "mgf": 1.0},
    {"t": 1,  "mgf": 1.6},
    {"t": 2,  "mgf": 7.3}
  ],
  "lines": [
    {"dataKey": "mgf", "stroke": "#3b82f6", "name": "MGF of Normal(0, 1)"}
  ]
}
```
*The MGF of a Normal distribution is itself an exponential of a quadratic ($e^{t^2/2}$), reflecting the perfect symmetry and rapidly decaying tails of the Gaussian world.*

## Related Topics

[[fourier-transform]] — the complex-valued cousin  
[[central-limit-theorem]] — proven via MGF multiplication  
[[large-deviations-cramer]] — using MGFs to bound extreme risks
---
---
title: "Characteristic Functions"
category: "Applied Probability"
order: 4
lang: "en"
slug: "characteristic-functions"
---

# Characteristic Functions: The Fourier View of Probability

The **Characteristic Function** ($\phi_X(t)$) is a complex-valued function that provides a complete description of a probability distribution. It is the probabilistic equivalent of the **[[fourier-transform|Fourier Transform]]**. Unlike the [[mgf|Moment Generating Function]], the characteristic function **always exists** for any random variable, making it the most powerful tool for proving limit theorems.

## 1. Definition

For a random variable $X$ with PDF $f(x)$, the characteristic function is:
$$\phi_X(t) = \mathbb{E}[e^{itX}] = \int_{-\infty}^{\infty} e^{itx} f(x) dx$$
Where $i$ is the imaginary unit.

- **Universal Existence**: Since $|e^{itx}| = 1$, the integral is always bounded. Every distribution has a unique "fingerprint" in the complex plane.

## 2. Fundamental Properties

### A. Uniqueness (Lévy's Inversion Theorem)
Two random variables have the same distribution if and only if they have the same characteristic function. We can reconstruct the density $f(x)$ from $\phi(t)$ using the inverse Fourier transform.

### B. Sums of Variables
If $X$ and $Y$ are independent:
$$\phi_{X+Y}(t) = \phi_X(t) \cdot \phi_Y(t)$$
This makes the math of summing independent risks (like in a portfolio) simple multiplication.

### C. Moment Generation
If the $n$-th moment exists, it can be found by differentiating $\phi$ at the origin:
$$\mathbb{E}[X^n] = \frac{1}{i^n} \phi_X^{(n)}(0)$$

## 3. The Lévy Continuity Theorem

This is the bridge to the **[[central-limit-theorem|Central Limit Theorem]]**. It states that a sequence of distributions $F_n$ converges to $F$ if and only if their characteristic functions $\phi_n(t)$ converge pointwise to $\phi(t)$. 
By showing that the product of many characteristic functions converges to $e^{-t^2/2}$, we rigorously prove that everything eventually becomes Gaussian.

## 4. Application in Quantitative Finance

### A. Fast Option Pricing (FFT)
In models like [[merton-jump-diffusion|Merton Jump-Diffusion]] or **Variance Gamma**, the PDF of the stock price is unknown, but the characteristic function is easy to write down. 
Using the **Carr-Madan method** and the **Fast Fourier Transform (FFT)**, quants can price thousands of options in milliseconds by integrating the characteristic function directly.

### B. Infinite Divisibility
A distribution is infinitely divisible (like the Normal, Poisson, or [[levy-processes|Lévy]]) if its characteristic function can be written as $[\phi_n(t)]^n$ for any $n$. This property is the definition of a continuous-time stochastic process with independent increments.

## Related Topics

[[fourier-transform]] — the mathematical engine  
[[mgf]] — the real-valued restricted version  
[[clt]] — the most famous use of $\phi(t)$  
[[levy-processes]] — defined by the Lévy-Khintchine formula for $\phi(t)$
---
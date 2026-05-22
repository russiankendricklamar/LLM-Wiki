---
title: "Fundamental Inequalities: Markov & Chebyshev"
category: "Math Foundations"
order: 31
lang: "en"
slug: "fundamental-inequalities"
---

# Fundamental Inequalities: Markov & Chebyshev

In probability theory, tail bounds allow us to constrain the probability that a random variable deviates significantly from its mean or expected value.

## 1. Markov's Inequality

For a non-negative random variable $X$ and any constant $a > 0$:
$$P(X \geq a) \leq \frac{\mathbb{E}[X]}{a}$$

### Proof
Let $I_{X \geq a}$ be an indicator function. Since $X \geq 0$:
$$X \geq a I_{X \geq a}$$
Taking expectations on both sides:
$$\mathbb{E}[X] \geq a \mathbb{E}[I_{X \geq a}] = a P(X \geq a)$$
Rearranging gives the inequality.

## 2. Chebyshev's Inequality

For any random variable $X$ with mean $\mu$ and variance $\sigma^2$:
$$P(|X - \mu| \geq k\sigma) \leq \frac{1}{k^2}$$
Or more generally, for any $\epsilon > 0$:
$$P(|X - \mu| \geq \epsilon) \leq \frac{\sigma^2}{\epsilon^2}$$

### Proof
Apply Markov's Inequality to the non-negative random variable $Y = (X - \mu)^2$:
$$P(|X - \mu| \geq \epsilon) = P((X - \mu)^2 \geq \epsilon^2) \leq \frac{\mathbb{E}[(X - \mu)^2]}{\epsilon^2} = \frac{\sigma^2}{\epsilon^2}$$

## 3. Tightness and Bounds

- **Sharpness**: Markov's inequality is sharp for certain distributions (e.g., a point mass at $a$).
- **Chernoff Bounds**: By applying Markov to $e^{tX}$, we get exponentially tighter bounds:
  $$P(X \geq a) \leq \inf_{t>0} e^{-ta} M_X(t)$$

## Related Topics
[[lln-clt]]
[[concentration-inequalities]]
[[jensen-inequality]]

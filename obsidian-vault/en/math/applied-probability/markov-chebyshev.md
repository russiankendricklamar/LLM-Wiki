---
title: "Markov and Chebyshev Inequalities"
category: "Applied Probability"
order: 2
lang: "en"
slug: "markov-chebyshev"
---

# Markov and Chebyshev Inequalities

These inequalities are the primary tools for bounding the probability that a random variable deviates significantly from its expected value. They are "universal" because they require very few assumptions about the underlying distribution.

## 1. Markov's Inequality

Markov's inequality provides a loose upper bound for the probability that a **non-negative** random variable $X$ exceeds a certain value $a > 0$.

$$P(X \geq a) \leq \frac{\mathbb{E}[X]}{a}$$

*Intuition*: If the average height in a room is 170cm, then no more than 1/2 of the people can be taller than 340cm. It is a crude but powerful result that only requires the existence of the mean.

## 2. Chebyshev's Inequality

Chebyshev's inequality is a more powerful bound that uses the **variance** to measure deviations from the mean. It applies to any random variable with a finite mean $\mu$ and variance $\sigma^2$:

$$P(|X - \mu| \geq k\sigma) \leq \frac{1}{k^2}$$

*Example*: For any distribution, at least 75% of the data must lie within 2 standard deviations ($k=2$) of the mean. 

## Why They Matter

1.  **Guarantees without Distributions**: In AI or Engineering, we often don't know if our error is Gaussian. These inequalities give us "worst-case" safety guarantees.
2.  **Proving the Law of Large Numbers**: Chebyshev's inequality is the key step in proving the **Weak Law of Large Numbers**, showing that the sample mean converges to the true mean.
3.  **Convergence Analysis**: They are used to prove that algorithms (like SGD) will eventually settle near the optimum with high probability.

## Visualization: The Tail Bounds

```chart
{
  "type": "line",
  "xAxis": "k",
  "data": [
    {"k": 1.1, "gaussian": 0.27, "chebyshev": 0.82},
    {"k": 2.0, "gaussian": 0.05, "chebyshev": 0.25},
    {"k": 3.0, "gaussian": 0.003,"chebyshev": 0.11},
    {"k": 4.0, "gaussian": 0.000,"chebyshev": 0.06},
    {"k": 5.0, "gaussian": 0.000,"chebyshev": 0.04}
  ],
  "lines": [
    {"dataKey": "gaussian", "stroke": "#10b981", "name": "True Gaussian Tail"},
    {"dataKey": "chebyshev", "stroke": "#ef4444", "name": "Chebyshev Bound (Universal)"}
  ]
}
```
*The Chebyshev bound is much looser than the Gaussian tail (red vs. green), but it is **always true**, regardless of the shape of the distribution, whereas the green line is only true for normal data.*

## Related Topics

[[concentration-inequalities]] — tighter bounds for sums of variables (Chernoff, Hoeffding)  
[[law-of-large-numbers]] — proven via Chebyshev  
[[statistical-decision-theory]] — evaluating risk using tail bounds
---

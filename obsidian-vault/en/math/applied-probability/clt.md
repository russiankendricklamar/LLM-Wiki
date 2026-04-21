---
title: "Central Limit Theorem (CLT)"
category: "Applied Probability"
order: 5
lang: "en"
slug: "clt"
---

# Central Limit Theorem (CLT): The Law of Cosmic Order

The Central Limit Theorem (CLT) is arguably the most important theorem in all of science. It explains why the **Normal Distribution** (Gaussian) appears everywhere in nature, from the height of humans to the noise in electronic sensors and the returns of diversified stock portfolios.

## 1. The Classical CLT (Lindeberg–Lévy)

If you have a sequence of independent and identically distributed (i.i.d.) random variables $X_1, X_2, \dots$ with finite mean $\mu$ and finite variance $\sigma^2$, then as $n \to \infty$, the sample mean $\bar{X}_n$ converges in distribution to a Normal distribution:
$$\frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \xrightarrow{d} \mathcal{N}(0, 1)$$

- **The Miracle**: It doesn't matter what the original distribution of $X$ was (it could be Uniform, Poisson, or even a Coin Flip). Once you sum many of them, the result is **always Gaussian**.

## 2. When Does it Fail? (Lindeberg-Feller)

The CLT is not a magic wand. For it to hold, no single variable can dominate the sum.
- **Lindeberg Condition**: Formally requires that the "tails" of the individual distributions contribute negligibly to the total variance.
- **Fat Tails**: If the variables follow a **Lévy Distribution** or a power law with infinite variance, the CLT fails. Instead of a Gaussian, the sum converges to a [[levy-processes|Stable Distribution]]. This is why individual stock returns are often "non-normal."

## 3. Rate of Convergence: Berry–Esseen Theorem

How many samples do you need for the CLT to be "accurate"?
The **Berry–Esseen Theorem** provides the upper bound on the error:
$$|\text{Error}| \leq \frac{C \cdot \mathbb{E}[|X-\mu|^3]}{\sigma^3 \sqrt{n}}$$
- If the data is highly skewed, you need millions of samples. If the data is symmetric, a few dozen might suffice.

## 4. Role in Modern Systems

- **Deep Learning**: The initialization of neural networks (like Xavier or Kaiming init) is based on the CLT to ensure that the variance of signals doesn't explode or vanish as they pass through layers.
- **Finance**: The CLT justifies the use of the **Standard Deviation** as a proxy for risk in well-diversified portfolios. However, during a market crash, correlations jump to 1, and the CLT's assumption of independence vanishes, leading to the "Black Swan" failure of VaR models.

## Visualization: Convergence to Gaussian

```chart
{
  "type": "bar",
  "xAxis": "bin",
  "data": [
    {"bin": "-3", "n2": 0.05, "n100": 0.01},
    {"bin": "-1", "n2": 0.20, "n100": 0.24},
    {"bin": "0",  "n2": 0.50, "n100": 0.40},
    {"bin": "1",  "n2": 0.20, "n100": 0.24},
    {"bin": "3",  "n2": 0.05, "n100": 0.01}
  ],
  "lines": [
    {"dataKey": "n100", "stroke": "#10b981", "name": "Sum of 100 vars (Gaussian)"},
    {"dataKey": "n2", "stroke": "#ef4444", "name": "Sum of 2 vars (Uniform)"}
  ]
}
```

## Related Topics

[[asymptotic-stats/mle]] — the basis of MLE's normality  
[[levy-processes]] — what happens when CLT fails  
[[frtb-es]] — measuring the non-normal tails
---

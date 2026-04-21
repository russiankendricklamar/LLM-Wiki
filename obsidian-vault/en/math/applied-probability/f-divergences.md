---
title: "Information Divergences (f-divergences)"
category: "Applied Probability"
order: 45
lang: "en"
slug: "f-divergences"
---

# Information Divergences (f-divergences)

An $f$-divergence is a broad class of functions that measure the "distance" or difference between two probability distributions $P$ and $Q$. While they are not metrics in the strict mathematical sense (often lacking symmetry), they are the primary tools for evaluating the quality of models in AI and Information Theory.

## General Definition

For a convex function $f$ such that $f(1) = 0$, the $f$-divergence of $Q$ from $P$ is:

$$D_f(P \| Q) = \int f\left( \frac{p(x)}{q(x)} \right) q(x) dx$$

By **Jensen's Inequality**, since $f$ is convex, $D_f(P \| Q) \geq f(\int p/q \cdot q) = f(1) = 0$. This ensures the divergence is always non-negative.

## Common f-divergences

Different choices of $f(t)$ lead to famous measures:

| Name | $f(t)$ | Formula | Use Case |
|---|---|---|---|
| **KL Divergence** | $t \log t$ | $\int p \log(p/q)$ | Variational Inference, MLE |
| **Reverse KL** | $-\log t$ | $\int q \log(q/p)$ | Reinforcement Learning |
| **Total Variation** | $\frac{1}{2}|t - 1|$ | $\frac{1}{2} \int |p - q|$ | Theoretical bounds |
| **Hellinger Distance** | $(\sqrt{t} - 1)^2$ | $\int (\sqrt{p} - \sqrt{q})^2$ | Robust Statistics |
| **Pearson $\chi^2$** | $(t-1)^2$ | $\int \frac{(p-q)^2}{q}$ | Goodness-of-fit tests |

## Jensen-Shannon Divergence (JSD)

The JSD is a symmetric and bounded version of the KL divergence:
$$JSD(P \| Q) = \frac{1}{2} D_{KL}(P \| M) + \frac{1}{2} D_{KL}(Q \| M)$$
where $M = \frac{1}{2}(P+Q)$. 
**GAN connection**: The original Generative Adversarial Network objective is mathematically equivalent to minimizing the JSD between the data and the generator.

## Visualization: Divergence Profiles

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": 0.1, "kl": 2.3, "tv": 0.45, "chi2": 0.81},
    {"t": 0.5, "kl": 0.3, "tv": 0.25, "chi2": 0.25},
    {"t": 1.0, "kl": 0.0, "tv": 0.00, "chi2": 0.00},
    {"t": 2.0, "kl": 0.7, "tv": 0.50, "chi2": 1.00},
    {"t": 5.0, "kl": 8.0, "tv": 2.00, "chi2": 16.0}
  ],
  "lines": [
    {"dataKey": "kl", "stroke": "#3b82f6", "name": "KL (Logarithmic)"},
    {"dataKey": "chi2", "stroke": "#ef4444", "name": "Pearson (Quadratic)"}
  ]
}
```
*Different divergences penalize differences between $P$ and $Q$ at different rates. $\chi^2$ is very sensitive to outliers, while KL is more focused on the central mass.*

## Related Topics

[[kullback-leibler-divergence]] — the most common member  
[[jensens-inequality]] — the proof of non-negativity  
[[information-geometry]] — studying the local differential form of divergences
---

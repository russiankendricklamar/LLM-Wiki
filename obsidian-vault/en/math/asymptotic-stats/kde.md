---
title: "Kernel Density Estimation (KDE)"
category: "Asymptotic Statistics"
order: 15
lang: "en"
slug: "kde"
---

# Kernel Density Estimation (KDE)

Kernel Density Estimation (KDE) is a non-parametric way to estimate the probability density function (PDF) of a random variable. Unlike a histogram (which is discrete and depends on bin locations), KDE produces a smooth, continuous estimate of the distribution.

## The Estimator

Given a sample $x_1, \dots, x_n$, the KDE estimate for the density at point $x$ is:

$$\hat{f}_h(x) = \frac{1}{nh} \sum_{i=1}^n K\left(\frac{x - x_i}{h}\right)$$

Where:
- **$K$ (Kernel)**: A non-negative function that integrates to one (usually a Gaussian).
- **$h$ (Bandwidth)**: A smoothing parameter that controls the width of the kernels.

## The Role of Bandwidth ($h$)

The bandwidth is the most critical parameter in KDE. 
- **Small $h$ (Under-smoothing)**: The estimate becomes too "spiky" and picks up random noise in the sample. High Variance.
- **Large $h$ (Over-smoothing)**: The estimate becomes too flat and hides the actual structure of the data (e.g., merging two peaks into one). High Bias.

Optimal bandwidth selection is typically done using **Silverman's rule of thumb** or **Cross-validation**.

## Why Use KDE instead of Histograms?

1.  **Continuity**: KDE provides a differentiable function, which is necessary for many optimization tasks.
2.  **No Bin Sensitivity**: Histograms can change drastically if you shift the bin edges by a small amount. KDE is invariant to such shifts.
3.  **Convergence**: KDE converges to the true density much faster than histograms as sample size increases.

## Visualization: Bandwidth Impact

```chart
{
  "type": "line",
  "xAxis": "x",
  "data": [
    {"x": -2, "spiky": 0.01, "smooth": 0.05, "true": 0.05},
    {"x": -1, "spiky": 0.40, "smooth": 0.20, "true": 0.24},
    {"x": 0,  "spiky": 0.05, "smooth": 0.40, "true": 0.40},
    {"x": 1,  "spiky": 0.45, "smooth": 0.20, "true": 0.24},
    {"x": 2,  "spiky": 0.01, "smooth": 0.05, "true": 0.05}
  ],
  "lines": [
    {"dataKey": "spiky", "stroke": "#ef4444", "name": "Small h (Noisy)"},
    {"dataKey": "smooth", "stroke": "#10b981", "name": "Optimal h"},
    {"dataKey": "true", "stroke": "#94a3b8", "name": "True Density"}
  ]
}
```
*The choice of $h$ determines whether we see the "forest" (the general shape) or the "trees" (individual data points).*

## Related Topics

[[kernel-methods-rkhs]] — the mathematical family of kernels  
[[mean-shift]] — an algorithm for finding modes of a KDE  
[[nonparametric-regression]] — extending KDE to conditional expectations
---

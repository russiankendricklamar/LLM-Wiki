---
title: "Kernel Density Estimation"
category: "Asymptotic Statistics"
order: 15
lang: "en"
slug: "/math/kernel-density-estimation"
growth: "seedling"
---

## Overview

**Kernel Density Estimation (KDE)** is a fundamental nonparametric method for estimating the probability density function of a continuous random variable from a sample. Unlike parametric approaches that assume a fixed functional form (e.g., Gaussian), KDE places a smooth "kernel" function at each observation and averages these kernels to obtain a flexible density estimate. This approach balances between interpolating the data and over-smoothing, with the bandwidth parameter controlling the trade-off.

## Parzen–Rosenblatt Estimator

Given $n$ iid observations $X_1, \ldots, X_n$ from an unknown density $f$, the **kernel density estimator** is defined as:

$$\hat{f}_h(x) = \frac{1}{nh} \sum_{i=1}^{n} K\left(\frac{x - X_i}{h}\right)$$

where $K : \mathbb{R} \to [0, \infty)$ is a **kernel function** and $h > 0$ is the **bandwidth** parameter. The kernel acts as a weighting function, decreasing in influence as the distance from $x$ to $X_i$ increases. The bandwidth $h$ controls the effective neighborhood size: smaller $h$ yields rougher estimates, larger $h$ produces smoother estimates.

### Kernel Conditions

A valid kernel must satisfy:

1. **Normalization**: $\int K(u) \, du = 1$ (or equivalently, $\int K(x/h) \cdot \frac{1}{h} \, dx = 1$)
2. **Symmetry**: $K(u) = K(-u)$
3. **Boundedness**: $K$ is bounded, often with support $[-1, 1]$

Common kernels include:
- **Gaussian**: $K(u) = \frac{1}{\sqrt{2\pi}} e^{-u^2/2}$
- **Epanechnikov**: $K(u) = \frac{3}{4}(1 - u^2) \mathbf{1}_{|u| \leq 1}$ (optimal in minimax sense)
- **Uniform**: $K(u) = \frac{1}{2} \mathbf{1}_{|u| \leq 1}$
- **Triangular**: $K(u) = (1 - |u|) \mathbf{1}_{|u| \leq 1}$

Define the **second moment** $\mu_2(K) = \int u^2 K(u) \, du$ and the **$L^2$ norm** $\|K\|_2^2 = \int K^2(u) \, du$.

## Pointwise Asymptotics

At a point $x$ where $f$ is twice continuously differentiable, the KDE admits a decomposition into bias and variance:

### Bias

$$\mathbb{E}[\hat{f}_h(x)] = \int K(u) f(x - hu) \, du$$

Under regularity conditions, Taylor expansion yields:

$$\mathbb{E}[\hat{f}_h(x)] = f(x) + \frac{h^2}{2} \mu_2(K) f''(x) + O(h^4)$$

Thus the **pointwise bias** is:

$$\text{Bias}(\hat{f}_h(x)) = \frac{h^2}{2} \mu_2(K) f''(x) + O(h^4)$$

### Variance

By independence of the observations:

$$\text{Var}(\hat{f}_h(x)) = \frac{1}{n} \left[ \mathbb{E}[\hat{f}_h^2(x)] - (\mathbb{E}[\hat{f}_h(x)])^2 \right]$$

Since $\mathbb{E}[\hat{f}_h^2(x)] = \frac{1}{nh^2} \int K^2(u) f(x - hu) \, du + O(n^{-1})$, we obtain:

$$\text{Var}(\hat{f}_h(x)) = \frac{f(x) \|K\|_2^2}{nh} + O((nh)^{-2})$$

### Pointwise MSE and MISE

The pointwise **Mean Squared Error** is:

$$\text{MSE}(\hat{f}_h(x)) = \left[\frac{h^2}{2} \mu_2(K) f''(x)\right]^2 + \frac{f(x) \|K\|_2^2}{nh} + O(h^4 + (nh)^{-1})$$

The **Mean Integrated Squared Error** (MISE) integrates MSE over $x$:

$$\text{MISE}(h) = \int \text{MSE}(\hat{f}_h(x)) \, dx = \frac{h^4}{4} \mu_2^2(K) R(f'') + \frac{\|K\|_2^2}{nh} + o(h^4 + (nh)^{-1})$$

where $R(f'') = \int [f''(x)]^2 \, dx$.

## Optimal Bandwidth

Minimizing MISE with respect to $h$ balances the bias and variance terms:

$$\frac{\partial \text{MISE}}{\partial h} = h \mu_2^2(K) R(f'') - \frac{\|K\|_2^2}{nh^2} = 0$$

Solving for $h$:

$$h^* = \left[\frac{\|K\|_2^2}{\mu_2^2(K) R(f'') \cdot n}\right]^{1/5}$$

This gives the fundamental result that **optimal bandwidth scales as $h^* \sim n^{-1/5}$**, yielding:

$$\text{MISE}(h^*) \sim n^{-4/5}$$

This $n^{-4/5}$ rate is **minimax optimal** over sufficiently smooth density classes and cannot be improved by any estimator.

## Bandwidth Selection

Since $h^*$ depends on the unknown $f''$, practitioners use data-driven methods:

### Cross-Validation

**Least Squares Cross-Validation** (LSCV) minimizes an unbiased estimator of MISE:

$$\text{CV}(h) = \int \hat{f}_{-h}(x)^2 \, dx - 2 \int \hat{f}_h(x) \hat{f}_{h, -i}(x) \, dx + \text{const}$$

where $\hat{f}_{-i,h}$ omits observation $i$. This has no closed form but is computed efficiently and adapts automatically to the data.

### Silverman's Rule of Thumb

For approximately Gaussian data, **Silverman's rule-of-thumb** provides:

$$h_{\text{ROT}} = \left(\frac{4 \sigma^5}{3n}\right)^{1/5} \approx 1.06 \sigma n^{-1/5}$$

where $\sigma = \min(\text{sd}(X), \text{IQR}(X)/1.35)$ estimates the spread. This is computationally trivial and often surprisingly effective in practice, though it undersmooths for multimodal densities.

### Plug-in and Diffusion Methods

**Plug-in methods** estimate $R(f'')$ from a preliminary bandwidth and refine iteratively. **Diffusion methods** exploit the connection between KDE and the heat equation to solve for optimal $h$ via Fourier inversion. These are more sophisticated but computationally intensive.

## Multivariate Kernel Density Estimation

In $d$ dimensions with observations $X_i \in \mathbb{R}^d$:

$$\hat{f}_H(\mathbf{x}) = \frac{1}{n} \sum_{i=1}^{n} K_H(\mathbf{x} - X_i)$$

where $K_H(\mathbf{u}) = |\mathbf{H}|^{-1/2} K(\mathbf{H}^{-1/2} \mathbf{u})$ and $\mathbf{H}$ is a **bandwidth matrix** (usually diagonal or full positive definite). The optimal bandwidth now scales as:

$$\text{MISE}(H) \sim n^{-4/(d+4)}$$

This **curse of dimensionality** shows that as $d$ increases, more data is needed to maintain fixed estimation accuracy, since the volume grows exponentially.

## Adaptive Bandwidth

Rather than a fixed $h$, **adaptive KDE** uses $h_i$ that depends on the local density:

$$\hat{f}_{\text{adap}}(x) = \frac{1}{n} \sum_{i=1}^{n} K_{h_i}\left(\frac{x - X_i}{h_i}\right)$$

Regions with sparse data use larger kernels (less detail), while dense regions use smaller kernels (more detail). This preserves features while reducing noise. The pilot estimate $\hat{f}_{h_0}$ determines the local bandwidth:

$$h_i = h_0 \left[\frac{\hat{f}_{h_0}(X_i)}{G}\right]^{-\lambda}, \quad \lambda \in [0, 1]$$

where $G$ is the geometric mean of $\hat{f}_{h_0}(X_i)$.

## Minimax Theory and Sobolev Classes

The convergence rate $n^{-4/5}$ holds over the **Sobolev space** $W^{2,2}$, consisting of twice-differentiable densities with square-integrable second derivative. More precisely, for the ball:

$$\mathcal{F}_\beta = \left\{ f : \int [f^{(\beta)}(x)]^2 \, dx \leq L, \int f = 1 \right\}, \quad \beta \geq 1$$

the **minimax risk** is:

$$\inf_{\hat{f}} \sup_{f \in \mathcal{F}_\beta} \mathbb{E}[\|\hat{f} - f\|_2^2] \asymp n^{-2\beta/(2\beta + 1)}$$

KDE with appropriately chosen $h$ achieves this rate, confirming its optimality. For smoother classes ($\beta > 2$), higher-order kernels and wavelets can be beneficial.

## Connection to Nonparametric Regression Smoothing

KDE is the special case of **local polynomial regression** where the response is constant. More generally, the **Nadaraya–Watson estimator** applies kernel smoothing to estimate conditional means $m(x) = \mathbb{E}[Y|X = x]$:

$$\hat{m}_h(x) = \frac{\sum_{i=1}^{n} K_h(x - X_i) Y_i}{\sum_{i=1}^{n} K_h(x - X_i)}$$

The theory is analogous: bandwidth selection, bias-variance decomposition, and minimax rates follow the same principles. This unifies [[empirical-processes]] and kernel methods as instances of the broader [[local-asymptotic-normality]] framework.

## References and Related Concepts

- The [[cramer-rao-bound]] sets a lower bound on variance for unbiased estimators, applicable when comparing KDE variants.
- [[glivenko-cantelli]] and [[concentration-inequalities]] provide uniform convergence guarantees.
- [[u-statistics]] generalize density estimation to functional parameters.

KDE remains central to statistics, machine learning, and computational science, serving as a bridge between parametric and fully nonparametric inference.

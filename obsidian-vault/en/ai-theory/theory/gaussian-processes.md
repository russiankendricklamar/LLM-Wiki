---
title: "Gaussian Processes"
category: "AI Theory"
order: 20
lang: "en"
slug: "gaussian-processes"
growth: "seedling"
---

# Gaussian Processes

A Gaussian Process (GP) is a nonparametric Bayesian model that defines a probability distribution over functions. Unlike parametric approaches that fix the number of parameters, GPs let the parameter count grow with data volume, offering flexibility and built-in uncertainty quantification.

Formally, $f \sim \text{GP}(m, k)$ means that for any finite collection of points $\mathbf{x} = (x_1, \ldots, x_n)$, the joint distribution of values $(f(x_1), \ldots, f(x_n))$ is multivariate Gaussian with mean $\mathbf{m} = (m(x_1), \ldots, m(x_n))$ and covariance matrix $K_{ij} = k(x_i, x_j)$, where $k$ is the kernel (covariance function). This infinite-dimensional consistency is the defining property of a GP.

## Kernels and Positive Semidefiniteness

The kernel $k(\mathbf{x}, \mathbf{x}')$ encodes prior assumptions about smoothness and similarity. A kernel *must* be positive semidefinite: for any finite point set and scalars $c_i$,
$$\sum_{i,j} c_i c_j k(x_i, x_j) \geq 0$$

**RBF (squared exponential) kernel:**
$$k(\mathbf{x}, \mathbf{x}') = \sigma^2 \exp\left(-\frac{\|\mathbf{x} - \mathbf{x}'\|^2}{2l^2}\right)$$

where $\sigma$ is amplitude and $l$ is lengthscale. The workhorse choice.

**Matérn kernel:**
$$k(\mathbf{x}, \mathbf{x}') = \sigma^2 \frac{2^{1-\nu}}{\Gamma(\nu)} \left(\sqrt{2\nu} \frac{\|\mathbf{x} - \mathbf{x}'\|}{l}\right)^\nu K_\nu\left(\sqrt{2\nu} \frac{\|\mathbf{x} - \mathbf{x}'\|}{l}\right)$$

This kernel controls differentiability: at $\nu = 1/2$ functions are piecewise smooth; as $\nu \to \infty$ it approaches RBF.

## GP Regression and Posterior

Standard setup: observe $\mathbf{y} = f(\mathbf{X}) + \boldsymbol{\epsilon}$ where $\boldsymbol{\epsilon} \sim \mathcal{N}(\mathbf{0}, \sigma_\text{noise}^2 \mathbf{I})$ is observation noise. The posterior at test point $\mathbf{x}_*$ is also Gaussian:

$$f_* | \mathbf{X}, \mathbf{y}, \mathbf{x}_* \sim \mathcal{N}(\mu_*, \sigma_*^2)$$

where:
$$\mu_* = \mathbf{k}_* (\mathbf{K} + \sigma_\text{noise}^2 \mathbf{I})^{-1} \mathbf{y}$$
$$\sigma_*^2 = k(\mathbf{x}_*, \mathbf{x}_*) - \mathbf{k}_*^T (\mathbf{K} + \sigma_\text{noise}^2 \mathbf{I})^{-1} \mathbf{k}_*$$

Here $\mathbf{K}$ is the covariance matrix between training points and $\mathbf{k}_*$ is the covariance vector between the test point and training data.

The posterior is *closed-form* and automatically captures uncertainty: far from observations, $\sigma_*^2 \to k(\mathbf{x}_*, \mathbf{x}_*)$ (we revert to the prior).

## Marginal Likelihood and Hyperparameter Learning

The log marginal likelihood (evidence):
$$\log p(\mathbf{y}|\mathbf{X}) = -\frac{1}{2}\mathbf{y}^T(\mathbf{K} + \sigma_\text{noise}^2 \mathbf{I})^{-1}\mathbf{y} - \frac{1}{2}\log|\mathbf{K} + \sigma_\text{noise}^2 \mathbf{I}| - \frac{n}{2}\log(2\pi)$$

Three terms: the first penalizes fit error, the second penalizes model complexity (log determinant acts as Occam's razor), the third is normalization. Optimizing this over hyperparameters (lengthscale $l$, amplitude $\sigma$, noise level) achieves *automatic model selection*—GP avoids overfitting without cross-validation.

## Computational Bottlenecks and Sparse Approximations

Matrix inversion costs $O(n^3)$ operations and $O(n^2)$ memory. For large datasets this becomes a bottleneck. **Sparse GP approximations** use $m \ll n$ inducing variables:

- **Inducing points**: compact representation with $O(nm^2)$ complexity.
- **Nyström approximation**: $\mathbf{K} \approx \mathbf{K}_{nm}\mathbf{K}_{mm}^{-1}\mathbf{K}_{mn}$.
- **Variational inference**: minimize KL divergence between full and sparse posteriors.

These methods scale to millions of datapoints while preserving uncertainty.

## Kernel Engineering and Knowledge Encoding

Kernels are additive: $k = k_1 + k_2$ sums independent sources of variation. Periodic kernels encode seasonality. **ARD (Automatic Relevance Determination)**:
$$k(\mathbf{x}, \mathbf{x}') = \sigma^2 \exp\left(-\frac{1}{2}\sum_d \frac{(x_d - x'_d)^2}{l_d^2}\right)$$

automatically learns feature importance: $l_d \to \infty$ suppresses irrelevant dimensions. **Deep kernels** compose neural network feature maps $\mathbf{x} \mapsto \phi(\mathbf{x})$ with classical kernels, blending learning and structure.

## Classification and Approximate Posteriors

For classification the Gaussian likelihood doesn't apply; we use logistic instead. The posterior no longer has closed form. **Laplace approximation** locally Gaussianizes the posterior; **expectation propagation** iteratively refines Gaussian moments. Both methods preserve efficiency and uncertainty but require approximation.

## Connection to Neural Networks

Neal's theorem (1995): an infinitely-wide neural network (in the limit of width $\to \infty$) becomes a GP with a kernel determined by the architecture. **Neural Tangent Kernel (NTK)** describes training dynamics: the network moves slowly through weight space but the function stays close to its initialization. Deep kernels close the loop: explicit nonlinear features from a network become the kernel for a GP.

## Applications

**Bayesian optimization**: GP serves as a surrogate model for expensive objective functions; acquisition functions (expected improvement, upper confidence bound) select the next evaluation point. Beats grid search and random search for low-budget problems.

**Geostatistics and kriging**: spatial prediction with built-in uncertainty, standard in mining and environmental science.

**Financial volatility**: GP captures latent volatility surfaces from noisy price data.

**Scientific ML**: [[pinns|PINNs]] and other methods embed physical knowledge through kernel choice and boundary conditions.

**Uncertainty quantification**: in any regression task where predictive intervals matter.

## Further Reading

- Rasmussen & Williams (2006)—definitive textbook.
- Connection to [[kolmogorov-probability-axioms|Kolmogorov axioms]] via [[statistical-mechanics]].
- Extends to [[bayesian-deep-learning|Bayesian deep learning]].
- Relates to [[neural-scaling-laws|neural scaling laws]] through NTK.
- Computational tricks via [[monte-carlo-method|Monte Carlo methods]].

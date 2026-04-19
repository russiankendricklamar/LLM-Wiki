---
title: "Nonparametric Regression"
category: "Asymptotic Statistics"
order: 24
lang: "en"
slug: "/math/nonparametric-regression"
growth: "seedling"
---

# Nonparametric Regression

Nonparametric regression addresses the fundamental problem of estimating a smooth function $f$ from noisy observations without assuming a parametric model. Given data $(x_1, Y_1), \ldots, (x_n, Y_n)$ following the model
$$Y_i = f(x_i) + \varepsilon_i,$$
where $f: \mathbb{R} \to \mathbb{R}$ is an unknown smooth function and $\varepsilon_i$ are i.i.d. noise, the goal is to construct $\hat{f}_n$ that adapts to unknown smoothness while controlling bias–variance tradeoff.

## The Bias–Variance Tradeoff

Suppose $f \in C^{p+1}(\mathbb{R})$ with $\|f^{(p+1)}\|_\infty \leq L$. Any local estimator must balance two competing objectives:
- **Bias**: Using a small neighborhood (small bandwidth $h$) captures fine structure but introduces variability.
- **Variance**: Averaging over larger neighborhoods reduces noise but blurs high-frequency features.

For an estimator with bias $B(h) = O(h^{p+1})$ and variance $V(h) = O(1/(nh))$, optimal bandwidth satisfies
$$h_{\text{opt}} \sim n^{-1/(2p+3)},$$
yielding minimax rate $n^{-(p+1)/(2p+3)}$ (in $L^2$ risk under appropriate regularity). This fundamental rate characterizes the interplay between sample size, dimension, and smoothness.

## Nadaraya–Watson Kernel Estimator

The **Nadaraya–Watson (NW) estimator** is the canonical local averaging estimator:
$$\hat{f}(x) = \frac{\sum_{i=1}^n Y_i K_h(x - x_i)}{\sum_{i=1}^n K_h(x - x_i)},$$
where $K$ is a kernel satisfying $\int K(u) \, du = 1$, $\int u K(u) \, du = 0$, $\int u^2 K(u) \, du = \kappa_2 > 0$, and $K_h(u) = K(u/h)/h$ is the rescaled kernel with bandwidth $h > 0$.

**Bias–variance decomposition** at $x$ in the interior of the support:
$$\mathbb{E}[\hat{f}(x)] - f(x) = \frac{\kappa_2 h^2}{2} f''(x) + O(h^3), \quad \text{Var}(\hat{f}(x)) = \frac{\sigma^2 \int K^2(u) \, du}{nh} + o(1/nh).$$

The MSE at $x$ is minimized by $h_{\text{opt}} \sim n^{-1/5}$ (for $p=1$), yielding rate $n^{-4/5}$. The NW estimator converges in $L^2$ at rate $n^{-4/5}$ when $f \in C^2$ and the design is dense.

## Local Polynomial Regression

**Local polynomial regression** generalizes kernel smoothing by fitting a polynomial of degree $p$ locally around each evaluation point. At $x$, we solve
$$\min_{\beta_0, \ldots, \beta_p} \sum_{i=1}^n \left( Y_i - \sum_{j=0}^p \beta_j (x_i - x)^j \right)^2 K_h(x - x_i),$$
and estimate $f(x)$ as $\hat{\beta}_0$.

**Key advantages**:
- **Bias reduction**: Bias decays as $O(h^{p+1})$ instead of $O(h^2)$, allowing larger bandwidths.
- **Automatic boundary correction**: Unlike kernel methods, polynomial fits near boundaries automatically adapt without special treatment.
- **Higher-order rates**: Under $f \in C^{p+1}$, the optimal rate is $n^{-(p+1)/(2p+3)}$, which approaches $n^{-1}$ as $p$ increases.

The bias is $\mathbb{E}[\hat{f}(x)] - f(x) = \frac{1}{(p+1)!} f^{(p+1)}(\xi_x) h^{p+1}$ for some $\xi_x$ near $x$, and variance is $O(1/(nh))$ uniformly.

## Regression Splines

**Splines** are piecewise polynomials with continuity constraints. Partition the domain $[a, b]$ into intervals via knots $a = t_0 < t_1 < \cdots < t_K < t_{K+1} = b$. A **cubic spline** has degree 3 polynomials on each interval with continuous first and second derivatives.

The estimator minimizes a penalized loss:
$$\hat{f} = \arg\min_f \sum_{i=1}^n (Y_i - f(x_i))^2 + \lambda \int_a^b (f''(u))^2 \, du,$$
where $\lambda > 0$ is the smoothing parameter. This problem has a closed-form solution: **smoothing spline** with $f$ being the minimizer. The solution lies in the span of a **B-spline basis** (piecewise polynomials with compact support), reducing computation to solving a banded linear system.

**Statistical properties**: If knots are placed at quantiles of $X_1, \ldots, X_n$ with $K \sim n^\alpha$ for $\alpha \in (0, 1)$, spline estimators achieve the minimax rate $n^{-(p+1)/(2p+3)}$.

## Smoothing Splines and RKHS

The smoothing spline problem is equivalent to minimizing over a **Reproducing Kernel Hilbert Space (RKHS)**:
$$\hat{f} = \arg\min_{f \in \mathcal{H}} \sum_{i=1}^n (Y_i - f(x_i))^2 + \lambda \|f\|_{\mathcal{H}}^2.$$

The minimizer is unique and admits the representation
$$\hat{f}(x) = \sum_{i=1}^n \alpha_i K(x, x_i),$$
where $K$ is the reproducing kernel of $\mathcal{H}$ and $\alpha = (A + \lambda I)^{-1} Y$ with $A_{ij} = K(x_i, x_j)$.

For the cubic spline, the RKHS is a subspace of the Sobolev space $H^2([a,b])$ with norm $\|f\|^2 = f(a)^2 + f'(a)^2 + \int_a^b (f''(u))^2 \, du$. The connection to **Green's functions** yields the explicit kernel:
$$K(x, y) = 1 + xy + \frac{1}{12} \int_a^b (x - \max(u,x))_+^2 (y - \max(u,y))_+^2 \, du.$$

## Gaussian Process Regression

Gaussian process regression provides a Bayesian nonparametric perspective. Assume a priori $f \sim \text{GP}(\mu_0, K)$, where $\mu_0$ is a mean function and $K$ is a covariance kernel. Given observations $Y = (Y_1, \ldots, Y_n)^T$ with $Y_i = f(x_i) + \varepsilon_i$ and $\varepsilon_i \sim \mathcal{N}(0, \sigma^2)$ independent, the posterior is
$$f | Y \sim \text{GP}(\mu_{\text{post}}, K_{\text{post}}),$$
with posterior mean
$$\mu_{\text{post}}(x) = \mu_0(x) + k(x)^T (K_n + \sigma^2 I)^{-1} (Y - \mu_0(X)),$$
where $k(x) = (K(x, x_1), \ldots, K(x, x_n))^T$ and $K_n$ is the $n \times n$ kernel matrix.

The **choice of kernel** determines the sample path properties of the GP: the Matérn kernel with smoothness $\nu$ has paths in Sobolev space $H^\nu$ almost surely. The posterior variance at $x$ is
$$K_{\text{post}}(x, x) = K(x, x) - k(x)^T (K_n + \sigma^2 I)^{-1} k(x),$$
which decreases with sample size and is zero at training points (in the noiseless limit).

Notably, **smoothing splines are equivalent to GP regression** with a specific kernel (related to the Green's function of the differential operator $D^2$), establishing a bridge between frequentist and Bayesian perspectives.

## Bandwidth and Smoothness Selection

The quality of all methods above critically depends on the bandwidth $h$ (or equivalent: number of spline knots $K$, or GP kernel parameter). **Leave-one-out cross-validation** selects
$$h_{\text{CV}} = \arg\min_h \sum_{i=1}^n (Y_i - \hat{f}_{-i}(x_i; h))^2,$$
where $\hat{f}_{-i}(x_i; h)$ is the leave-one-out residual. Cross-validation is computationally efficient (using the Sherman–Morrison formula for splines and smoothing splines) and adapts to unknown smoothness.

**Generalized cross-validation (GCV)** replaces exact leave-one-out with a trace-based approximation:
$$\text{GCV}(h) = \frac{1}{n} \sum_{i=1}^n \frac{(Y_i - \hat{f}(x_i; h))^2}{(1 - \text{tr}(S_h)/n)^2},$$
where $S_h$ is the smoothing matrix (e.g., $S_h = X(X^T X + \lambda I)^{-1} X^T$ for splines).

## Oracle Inequalities and Adaptive Rates

The **Lepski method** (or blockwise Stein unbiased risk estimate) constructs a data-driven bandwidth that achieves near-optimal rates **adaptively** without knowledge of the regularity class of $f$. The estimator
$$\hat{h} = \max\{ h : \hat{B}(h) \leq C \hat{V}(h) \},$$
where $\hat{B}$ and $\hat{V}$ are data-driven estimates of bias and variance, ensures
$$\mathbb{E}\|f - \hat{f}_{-\hat{h}}\|^2 \lesssim \inf_{h} \left( B(h)^2 + V(h) \right) + n^{-1}.$$

This oracle inequality shows that the Lepski-selected estimator performs nearly as well as the oracle that knows the optimal $h$ in advance, with only polynomial in $\log n$ overhead.

## Conclusion

Nonparametric regression methods—from kernel smoothing to splines to Gaussian processes—all address the same fundamental problem through different lenses. They succeed by imposing structural constraints (smoothness, continuity) while maintaining flexibility. The minimax rates $n^{-(p+1)/(2p+3)}$ reflect an inherent curse of dimensionality in higher dimensions, but in one dimension, these rates approach $n^{-1}$ with polynomial smoothness. Cross-validation and adaptive selection methods make these tools practical without requiring prior knowledge of the smoothness class.

---

## References & Wikilinks

- [[kernel-density-estimation]] — Foundation for local averaging and bandwidth selection
- [[minimax-estimation]] — Theoretical framework for rates and information-theoretic lower bounds
- [[gaussian-process-sample-paths]] — Sobolev regularity and kernel-induced function spaces
- [[functional-analysis]] — RKHS theory and operator norm bounds
- [[sobolev-spaces]] — Function smoothness classes and embedding theory
- [[high-dimensional-statistics]] — Curse of dimensionality in multivariate regression
- [[bootstrap]] — Resampling for bandwidth selection and confidence bands

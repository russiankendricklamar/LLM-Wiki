---
title: "High-Dimensional Statistics"
category: "Asymptotic Statistics"
order: 20
lang: "en"
slug: "/math/high-dimensional-statistics"
growth: "seedling"
---

# High-Dimensional Statistics

High-dimensional statistics studies estimation and prediction in the regime $p \gg n$, where the number of features vastly exceeds the number of observations. In this setting, classical methods—OLS, maximum likelihood—fail catastrophically; standard consistency conditions collapse, overfitting dominates, and fundamentally new regularization approaches become necessary. The theory of high-dimensional statistics builds on [[concentration-inequalities|concentration inequalities]], [[convex-analysis|convex analysis]], and [[minimax-estimation|minimax estimation theory]].

## Failure of Classical Methods and Regularization

Consider the linear regression model:
$$y = X\beta^* + \varepsilon,$$
where $X \in \mathbb{R}^{n \times p}$ and $\varepsilon \sim N(0, \sigma^2 I_n)$. When $p \gg n$, the Gram matrix $X^\top X$ becomes singular, and the OLS estimator either does not exist or exhibits exponentially large variance.

The cornerstone assumption in high-dimensional statistics is **sparsity**: the true coefficient vector $\beta^* \in \mathbb{R}^p$ contains only $s \ll p$ nonzero coordinates. Under this assumption, efficient estimation becomes possible with sample size $n \approx s \log p$, dramatically fewer observations than the ambient dimension suggests.

## LASSO and the Restricted Eigenvalue Condition

**LASSO** (Least Absolute Shrinkage and Selection Operator) minimizes:
$$\hat{\beta} = \arg\min_{\beta \in \mathbb{R}^p} \left\{ \|y - X\beta\|_2^2 + 2\lambda \|\beta\|_1 \right\}.$$

LASSO simultaneously estimates coefficients and performs feature selection through the $\ell_1$ penalty. Its theoretical analysis hinges on the **Restricted Eigenvalue Condition (REC)** of Bickel–Ritov–Tsybakov: there exists $\kappa > 0$ such that for all $\delta \in \mathbb{R}^p$ satisfying $\|\delta_{S^c}\|_1 \leq 3\|\delta_S\|_1$,
$$\|X\delta\|_2^2 \geq \kappa \|\delta_S\|_2^2,$$
where $S$ is the support of $\beta^*$.

**Theorem (Bickel–Ritov–Tsybakov, 2009).** Suppose REC holds with parameter $\kappa$ and let $\lambda = C\sigma\sqrt{\log p}$ for a suitable constant $C > 0$. Then with high probability,
$$\|\hat{\beta}_{LASSO} - \beta^*\|_2 = O\left(\sigma\sqrt{\frac{s \log p}{n}}\right).$$

This result demonstrates that LASSO attains the [[cramer-rao-bound|Fano lower bound]] for sparse estimation up to logarithmic factors, establishing its minimax optimality.

## Restricted Isometry Property and Compressed Sensing

In **compressed sensing**, the goal is to recover a sparse signal $\beta^* \in \mathbb{R}^p$ from $n \ll p$ linear measurements $y = X\beta^* + \varepsilon$. The essential tool is the **Restricted Isometry Property (RIP)**: a matrix $X$ satisfies RIP of order $2s$ with constant $\delta_{2s}$ if
$$\left(1 - \delta_{2s}\right) \|\beta\|_2^2 \leq \|X\beta\|_2^2 \leq \left(1 + \delta_{2s}\right) \|\beta\|_2^2$$
for all $\beta$ with $\|\beta\|_0 \leq 2s$.

Random Gaussian matrices and submatrices of random projections satisfy RIP with high probability. When RIP holds with $\delta_{2s} < 1/2$, LASSO recovers $s$-sparse signals with provable accuracy, providing a foundational principle for signal acquisition and recovery.

## Matrix Estimation and Nuclear Norm Minimization

The theory of high-dimensional statistics extends naturally to matrix-valued estimation. Suppose we observe noisy linear projections of a low-rank matrix $\Theta^* \in \mathbb{R}^{p \times q}$ with rank $r$. **Nuclear norm minimization** solves:
$$\hat{\Theta} = \arg\min_\Theta \left\{ \|A(\Theta) - y\|_2^2 + 2\lambda \|\Theta\|_* \right\},$$
where $\|\Theta\|_* = \sum_i \sigma_i(\Theta)$ is the nuclear norm (sum of singular values), the matrix analogue of the $\ell_1$ norm.

Theory shows that under appropriate conditions on the linear operator $A$—for instance, RIP in the nuclear norm—the estimator achieves
$$\|\hat{\Theta} - \Theta^*\|_F = O\left(\sigma\sqrt{\frac{r(p+q) \log(p+q)}{n}}\right),$$
generalizing LASSO guarantees to the matrix setting with only logarithmic penalty for dimension.

## Gaussian Width and Gordon's Theorem

The **Gaussian width** of a convex set $T \subseteq \mathbb{R}^p$ is defined as
$$w(T) = \mathbb{E}_{g \sim N(0,I_p)} \left[ \max_{t \in T} \langle g, t \rangle \right].$$

Gaussian width governs [[empirical-processes|Rademacher radii]] and determines the accuracy of empirical risk minimization. **Gordon's Theorem** connects solutions of convex optimization problems to the geometry of constraint sets via Gaussian width, yielding non-asymptotic recovery guarantees even when the number of samples approaches $n \approx w(T)$. This is a canonical result linking geometry and statistical complexity.

## Multiple Testing Control: Knockoffs

High-dimensional feature selection faces a multiple testing burden. The **knockoffs** method (Barber–Candès) controls the **False Discovery Rate (FDR)** in structured sparse model selection. The construction introduces "fake" features—knockoff copies—for each true feature, and selection occurs when a feature's signal exceeds that of its knockoff.

FDR control remains valid as $p \to \infty$, providing statistically rigorous feature selection among $p \gg n$ candidates without requiring strong distributional assumptions.

## Minimax Lower Bounds and Information Theory

Minimax lower bounds for sparse estimation derive from the **Fano information-theoretic criterion** and combinatorial packing arguments. One constructs $\beta_1^*, \ldots, \beta_M^* \in \mathbb{R}^p$ with pairwise separation $\|\beta_i^* - \beta_j^*\|_2 \geq \Delta$ such that the distributions $(X\beta_i^* + \varepsilon)$ are close in Kullback–Leibler divergence. Fano's inequality then yields
$$\inf_{\hat{\beta}} \sup_{\beta^*: \|\beta^*\|_0 \leq s} \mathbb{E} \|\hat{\beta} - \beta^*\|_2^2 \geq c \sigma^2 \frac{s \log(p/s)}{n}.$$

This lower bound proves the fundamental optimality of LASSO and related estimators, up to constants and logarithmic factors.

## The Gaussian Sequence Model

The canonical problem in high-dimensional statistics is the **Gaussian sequence model**:
$$Y_i = \beta_i^* + \frac{\sigma}{\sqrt{n}} Z_i, \quad i = 1, \ldots, p,$$
where $Z_i \overset{i.i.d.}{\sim} N(0, 1)$. This model captures the asymptotic behavior of estimators in linear regression for large $p$ and simplifies analysis by abstracting away design matrix technicalities.

Within the Gaussian sequence framework, LASSO, thresholding estimators, and other procedures are studied in full generality. Results then transfer to linear observations satisfying REC and related conditions, making the sequence model a universal reference point for understanding high-dimensional phenomena.

## Connection to Convex Optimization

LASSO and its variants are formulated as convex optimization problems. Understanding the difficulty of estimation requires tools from [[convex-analysis|convex analysis]]: Lagrange duality, proximal methods, strong convexity conditions. LASSO is solved via coordinate descent, proximal gradient methods, and specialized algorithms (LARS, FISTA, screening rules).

Deriving non-asymptotic estimation guarantees often requires simultaneous analysis of **optimization error** (how well an algorithm solves the convex problem) and **statistical error** (error due to noise and finite samples). In high-dimensional regimes, the interplay between these errors determines overall performance.

High-dimensional statistics has reshaped modern statistical science, establishing the principles of sparsity, regularization, and compressed sensing that underpin contemporary machine learning, signal processing, [[random-graphs|methods for random structures]], and the broader use of [[lp-spaces|Lp norms]] in estimation and inference.

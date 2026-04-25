---
title: "Multivariate Normal Distribution"
category: "Applied Probability"
order: 44
lang: "en"
slug: "multivariate-normal"
growth: "evergreen"
---

# Multivariate Normal Distribution

The Multivariate Normal (MVN) is the only distribution that is simultaneously **closed under affine transformations, under conditioning, and under independent products**. This triple closure makes it the backbone of Gaussian processes, Kalman filters, PCA, factor analysis, LDA, variational inference, and diffusion models.

## 1. Definition

A random vector $\mathbf{X} \in \mathbb{R}^k$ is **normal** if every linear combination $\mathbf{a}^\top \mathbf{X}$ is univariate normal. When the covariance is non-degenerate the density is

$$
f(\mathbf{x}) = \frac{1}{\sqrt{(2\pi)^k |\boldsymbol{\Sigma}|}}\, \exp\!\left(-\tfrac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^\top \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\right),
$$

where $\boldsymbol{\mu} = \mathbb{E}[\mathbf{X}]$ and $\boldsymbol{\Sigma} = \operatorname{Cov}(\mathbf{X}) \succ 0$.

When $\boldsymbol{\Sigma}$ is rank-deficient, no Lebesgue density exists; one works with the density on an affine subspace or with the characteristic function:

$$
\varphi_{\mathbf{X}}(\mathbf{t}) = \mathbb{E}[e^{i\mathbf{t}^\top \mathbf{X}}] = \exp\!\left(i\mathbf{t}^\top \boldsymbol{\mu} - \tfrac{1}{2} \mathbf{t}^\top \boldsymbol{\Sigma}\,\mathbf{t}\right).
$$

The characteristic-function definition is universal and covers the degenerate case.

## 2. Geometry: Mahalanobis ellipsoids

The quadratic form in the exponent,

$$
d_M^2(\mathbf{x}) = (\mathbf{x}-\boldsymbol{\mu})^\top \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu}),
$$

is the **squared Mahalanobis distance**. Level sets $d_M^2 = c$ are ellipsoids centred at $\boldsymbol{\mu}$; their principal axes are the eigenvectors of $\boldsymbol{\Sigma}$ with semi-axis lengths $\sqrt{c\,\lambda_i}$.

**Fact.** $d_M^2(\mathbf{X}) \sim \chi^2_k$. Consequently $\Pr(d_M^2 \leq c_\alpha) = \alpha$ for the $\alpha$-quantile of $\chi^2_k$, giving **exact confidence ellipsoids** for $\boldsymbol{\mu}$.

## 3. Affine closure

**Theorem.** If $\mathbf{X} \sim \mathcal{N}(\boldsymbol{\mu},\boldsymbol{\Sigma})$ and $\mathbf{Y} = A\mathbf{X} + \mathbf{b}$, then

$$
\mathbf{Y} \sim \mathcal{N}(A\boldsymbol{\mu} + \mathbf{b},\; A\boldsymbol{\Sigma} A^\top).
$$

*Proof:* evaluate the characteristic function.

$$
\varphi_{\mathbf{Y}}(\mathbf{t}) = e^{i\mathbf{t}^\top \mathbf{b}}\, \varphi_{\mathbf{X}}(A^\top \mathbf{t}) = \exp\!\left(i\mathbf{t}^\top(A\boldsymbol{\mu}+\mathbf{b}) - \tfrac{1}{2}\mathbf{t}^\top A\boldsymbol{\Sigma} A^\top \mathbf{t}\right).
$$

### Consequences

- **Standardisation.** If $\boldsymbol{\Sigma} = LL^\top$ (Cholesky), $L^{-1}(\mathbf{X}-\boldsymbol{\mu}) \sim \mathcal{N}(0, I_k)$.
- **Sampling.** $\mathbf{X} = \boldsymbol{\mu} + L\mathbf{Z}$ for $\mathbf{Z} \sim \mathcal{N}(0, I_k)$.
- **Marginals.** Any subvector of $\mathbf{X}$ is again normal.

## 4. Conditional distribution

Partition $\mathbf{X} = (\mathbf{X}_1, \mathbf{X}_2)$ with block structure

$$
\boldsymbol{\mu} = \begin{pmatrix}\boldsymbol{\mu}_1\\\boldsymbol{\mu}_2\end{pmatrix},\qquad \boldsymbol{\Sigma} = \begin{pmatrix}\boldsymbol{\Sigma}_{11}&\boldsymbol{\Sigma}_{12}\\\boldsymbol{\Sigma}_{21}&\boldsymbol{\Sigma}_{22}\end{pmatrix}.
$$

**Theorem.** $\mathbf{X}_1 \mid \mathbf{X}_2 = \mathbf{x}_2 \sim \mathcal{N}(\boldsymbol{\mu}_{1|2}, \boldsymbol{\Sigma}_{1|2})$, with

$$
\boldsymbol{\mu}_{1|2} = \boldsymbol{\mu}_1 + \boldsymbol{\Sigma}_{12}\boldsymbol{\Sigma}_{22}^{-1}(\mathbf{x}_2 - \boldsymbol{\mu}_2),\qquad
\boldsymbol{\Sigma}_{1|2} = \boldsymbol{\Sigma}_{11} - \boldsymbol{\Sigma}_{12}\boldsymbol{\Sigma}_{22}^{-1}\boldsymbol{\Sigma}_{21}.
$$

Key observations:

1. The **conditional mean is a linear function** of the observed data — the basis of **Bayesian linear regression** and **Gaussian processes**.
2. The **conditional covariance does not depend on $\mathbf{x}_2$** — a property unique to the normal.
3. $\boldsymbol{\Sigma}_{1|2}$ is the **Schur complement** of $\boldsymbol{\Sigma}_{22}$ in $\boldsymbol{\Sigma}$.

The same formalism powers the **Kalman filter**: the prediction step maps the prior covariance to $\boldsymbol{\Sigma}_{1|2}$.

## 5. Precision matrix and conditional independence

Let $\boldsymbol{\Omega} = \boldsymbol{\Sigma}^{-1}$ be the **precision matrix**.

**Theorem (Lauritzen).** In an MVN, $X_i \perp X_j \mid X_{V\setminus\{i,j\}}$ if and only if $\boldsymbol{\Omega}_{ij} = 0$.

Thus the sparsity pattern of $\boldsymbol{\Omega}$ encodes a **Gaussian graphical model** — the line of work that produced graphical LASSO and modern Bayesian networks.

## 6. [[shannon-entropy|Entropy]]

$$
H(\mathbf{X}) = -\int f(\mathbf{x})\log f(\mathbf{x})\, d\mathbf{x} = \tfrac{1}{2}\log\bigl((2\pi e)^k |\boldsymbol{\Sigma}|\bigr).
$$

**Maximum-entropy principle:** among all distributions on $\mathbb{R}^k$ with fixed $\boldsymbol{\mu},\boldsymbol{\Sigma}$, the entropy maximiser is exactly the Gaussian. This is why MaxEnt returns a Gaussian whenever the constraints fix only the first two moments.

## 7. KL divergence between normals

For $p = \mathcal{N}(\boldsymbol{\mu}_1,\boldsymbol{\Sigma}_1)$ and $q = \mathcal{N}(\boldsymbol{\mu}_2,\boldsymbol{\Sigma}_2)$:

$$
D_{\mathrm{KL}}(p\,\|\,q) = \tfrac{1}{2}\!\left[\operatorname{tr}(\boldsymbol{\Sigma}_2^{-1}\boldsymbol{\Sigma}_1) + (\boldsymbol{\mu}_2-\boldsymbol{\mu}_1)^\top\boldsymbol{\Sigma}_2^{-1}(\boldsymbol{\mu}_2-\boldsymbol{\mu}_1) - k + \log\frac{|\boldsymbol{\Sigma}_2|}{|\boldsymbol{\Sigma}_1|}\right].
$$

This closed form is the key building block of **ELBO** in variational autoencoders.

## 8. The multivariate CLT

**Theorem (Cramér-Wold).** Let $\mathbf{X}_1,\dots,\mathbf{X}_n$ be i.i.d. in $\mathbb{R}^k$ with $\mathbb{E}[\mathbf{X}_1] = \boldsymbol{\mu}$ and $\operatorname{Cov}(\mathbf{X}_1) = \boldsymbol{\Sigma}$. Then

$$
\sqrt{n}(\bar{\mathbf{X}}_n - \boldsymbol{\mu}) \xrightarrow{d} \mathcal{N}(0, \boldsymbol{\Sigma}).
$$

Proof idea: reduce to the 1-D CLT on every linear combination $\mathbf{a}^\top(\bar{\mathbf{X}}_n - \boldsymbol{\mu})$.

## 9. Density from the characteristic function

For standard $\mathbf{Z} \sim \mathcal{N}(0, I_k)$ the components are independent, so the density factorises:

$$
f_{\mathbf{Z}}(\mathbf{z}) = \prod_{i=1}^k (2\pi)^{-1/2} e^{-z_i^2/2} = (2\pi)^{-k/2} e^{-\|\mathbf{z}\|^2/2}.
$$

For $\mathbf{X} = \boldsymbol{\mu} + L\mathbf{Z}$ with $LL^\top = \boldsymbol{\Sigma}$, change of variables (Jacobian $|L| = |\boldsymbol{\Sigma}|^{1/2}$) gives

$$
f_{\mathbf{X}}(\mathbf{x}) = (2\pi)^{-k/2} |\boldsymbol{\Sigma}|^{-1/2} \exp\!\bigl(-\tfrac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^\top \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\bigr).
$$

## 10. Applications

- **Gaussian processes.** The conditional of a finite set of GP points is exactly the section-4 formula. Predictive mean / variance are $\boldsymbol{\mu}_{1|2}$ / $\boldsymbol{\Sigma}_{1|2}$.
- **Kalman filter.** A linear state-space model with Gaussian noise keeps all posteriors Gaussian. Prediction and update steps use the identities of Section 4.
- **VAE / diffusion models.** Reparameterisation trick: $\mathbf{X} = \boldsymbol{\mu}(\theta) + \operatorname{diag}(\boldsymbol{\sigma}(\theta))\odot\mathbf{Z}$ for $\mathbf{Z} \sim \mathcal{N}(0, I)$.
- **PCA.** Eigenvectors of $\boldsymbol{\Sigma}$ are the principal axes of the density ellipsoid; PCA is equivalent to MLE for a low-rank model $\mathbf{X} = W\mathbf{Z} + \boldsymbol{\epsilon}$.
- **LDA.** Fisher's linear discriminant assumes an MVN class-conditional with shared $\boldsymbol{\Sigma}$.

## 11. Correlation visualisation

```chart
{
  "type": "line",
  "xAxis": "t",
  "data": [
    {"t": 0, "rho_0": 0, "rho_0_5": 0, "rho_0_9": 0},
    {"t": 1, "rho_0": 0.8, "rho_0_5": 0.6, "rho_0_9": 0.4},
    {"t": 2, "rho_0": 1.0, "rho_0_5": 1.0, "rho_0_9": 1.0},
    {"t": 3, "rho_0": 0.8, "rho_0_5": 0.6, "rho_0_9": 0.4},
    {"t": 4, "rho_0": 0, "rho_0_5": 0, "rho_0_9": 0}
  ],
  "lines": [
    {"dataKey": "rho_0", "stroke": "#94a3b8", "name": "ρ = 0 (circular density)"},
    {"dataKey": "rho_0_5", "stroke": "#3b82f6", "name": "ρ = 0.5"},
    {"dataKey": "rho_0_9", "stroke": "#ef4444", "name": "ρ = 0.9 (thin ellipse)"}
  ]
}
```

## 12. Related topics

- [[multivariate-clt|Multivariate CLT]] — why the MVN is ubiquitous.
- [[gaussian-processes|Gaussian processes]] — infinite-dimensional MVN.
- [[pca|PCA]] — diagonalising $\boldsymbol{\Sigma}$.
- [[fisher-information|Fisher information]] — block form of the FIM for an MVN.
- [[hmm|Hidden Markov models]] — linear-Gaussian HMM → Kalman filter.
- [[f-divergences|f-divergences]] — all closed-form between two MVNs.

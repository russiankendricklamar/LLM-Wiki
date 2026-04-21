---
title: "Random Matrix Theory"
category: "Applied Probability"
order: 27
lang: "en"
slug: "random-matrices"
growth: "seedling"
---

# Random Matrix Theory (RMT)

Random Matrix Theory studies the spectral properties of matrices with random entries. It reveals universal patterns that are independent of the specific distribution of the entries, a phenomenon known as **universality**.

## Gaussian Ensembles

The fundamental objects are:
- **GOE (Orthogonal)**: Symmetric matrices with real Gaussian entries. $\beta = 1$.
- **GUE (Unitary)**: Hermitian matrices with complex Gaussian entries. $\beta = 2$.

The joint density of [[spectral-theory-operators|eigenvalues]] $\lambda_1, \dots, \lambda_n$ is:
$$P(\lambda_1, \ldots, \lambda_n) \propto \prod_{i < j} |\lambda_i - \lambda_j|^\beta \exp\left(-\frac{\beta}{4} \sum \lambda_i^2\right)$$

## Wigner Semicircle Law

For GOE/GUE matrices scaled by $1/\sqrt{n}$, the empirical distribution of eigenvalues converges to the **semicircle distribution**:
$$\rho_{sc}(x) = \frac{1}{2\pi}\sqrt{4 - x^2} \mathbf{1}_{|x| \leq 2}$$
as $n \to \infty$. This is the RMT analogue of the Law of Large Numbers.

## Marchenko-Pastur Law

For sample covariance matrices $\Sigma = \frac{1}{n}XX^T$ where $p/n \to \gamma$, the eigenvalues follow the **Marchenko-Pastur distribution**:
$$\mu_{MP}(x) = \frac{\sqrt{(b-x)(x-a)}}{2\pi \gamma x}$$
where $a, b = (1 \pm \sqrt{\gamma})^2$. This is critical for [[high-dimensional-statistics]].

## Tracy-Widom Distribution

While the semicircle law describes the "bulk" of the spectrum, the **Tracy-Widom distribution** describes the fluctuations of the largest eigenvalue $\lambda_{\max}$ at the edge of the spectrum.

## Free Probability

Developed by Voiculescu, **free probability** is a non-commutative analogue of probability theory. Two matrices are **freely independent** if their eigenvectors are in "generic" relative positions. The **R-transform** allows for the computation of the spectrum of sums of free matrices, similar to how logarithms of characteristic functions work for sums of independent variables.

## Applications

- **Finance**: Cleaning correlation matrices by removing "noise" eigenvalues outside the Marchenko-Pastur bulk.
- **Machine Learning**: Analyzing the spectra of weight matrices and Hessians in deep neural networks.
- **Signal Processing**: Detecting weak signals in high-dimensional noise.

## Related Topics

- [[extreme-value-theory]] — fluctuations of the largest eigenvalue (Tracy-Widom)
- [[high-dimensional-statistics]] — covariance estimation and PCA
- [[concentration-inequalities]] — bounds on spectral norms

---
title: "Random Matrix Theory"
category: "Applied Probability"
order: 27
lang: "en"
slug: "random-matrices"
growth: "seedling"
---

Random Matrix Theory (RMT) studies the spectral properties of matrices with random entries and reveals universal patterns that do not depend on the specific distribution of the entries. This field of mathematics emerged from the work of nuclear physicists in the 1950s and later found numerous applications in statistics, machine learning, and combinatorics.

## Gaussian Orthogonal and Unitary Ensembles

The fundamental objects of RMT are the **Gaussian Orthogonal Ensemble (GOE)** and the **Gaussian Unitary Ensemble (GUE)**.

**GOE** consists of random symmetric $n \times n$ matrices $H$ with independent Gaussian entries:
- Diagonal entries: $H_{ii} \sim \mathcal{N}(0, 2)$
- Off-diagonal entries: $H_{ij} \sim \mathcal{N}(0, 1)$ for $i < j$
- $H_{ij} = H_{ji}$

**GUE** consists of random Hermitian matrices with independent Gaussian complex entries:
- Diagonal entries: $H_{ii} \sim \mathcal{N}(0, 2)$ (real)
- Off-diagonal entries: $H_{ij} \sim \mathcal{N}(0, 1) + i\mathcal{N}(0, 1)$ for $i < j$
- $H_{ij} = \overline{H_{ji}}$

The joint probability density of the [[spectral-theory-operators|eigenvalues]] $\lambda_1, \ldots, \lambda_n$ of a matrix from GOE/GUE is given by:

$$P(\lambda_1, \ldots, \lambda_n) = C_n \prod_{i < j} |\lambda_i - \lambda_j|^\beta \exp\left(-\frac{\beta}{4} \sum_{i=1}^n \lambda_i^2\right)$$

where $\beta = 1$ for GOE, $\beta = 2$ for GUE, and $C_n$ is a normalization constant. The parameter $\beta$ is interpreted as the inverse temperature in the context of the logarithmic gas of point processes.

## Wigner Semi-Circle Law

One of the central theorems of RMT is the **Wigner Semi-Circle Law**. For matrices from GOE/GUE normalized by dividing by $\sqrt{n}$, the limiting distribution of eigenvalues at point $x$ is given by:

$$\rho_{sc}(x) = \frac{1}{2\pi}\sqrt{4 - x^2} \mathbf{1}_{|x| \leq 2}$$

The empirical spectral measure $\mu_n = \frac{1}{n}\sum_{i=1}^n \delta_{\lambda_i/\sqrt{n}}$ converges weakly to $\rho_{sc}$ with probability 1 as $n \to \infty$. The support of this distribution is the interval $[-2, 2]$.

The semi-circle law demonstrates **universality**: the limiting spectral density does not depend on the specific distribution of the matrix entries, but is determined only by the normalization and independence conditions.

## Marchenko-Pastur Law

In statistical applications, sample covariance matrices of the form $\Sigma = \frac{1}{n}XX^T$ are frequent, where $X$ is an $n \times p$ matrix (observations in rows, variables in columns). When $n, p \to \infty$ with $p/n \to \gamma > 0$, the empirical spectral measure converges to the **Marchenko-Pastur distribution**:

$$\mu_{MP}(x) = \frac{\sqrt{(b-x)(x-a)}}{2\pi \gamma x} \mathbf{1}_{a \leq x \leq b}$$

where $a = (1-\sqrt{\gamma})^2$ and $b = (1+\sqrt{\gamma})^2$ are the support boundaries. As $\gamma \to 0$, this distribution degenerates into a Dirac distribution at point 1.

The Marchenko-Pastur law plays a critical role in signal detection in [[high-dimensional-statistics]]: when a structured signal is added to the data, its eigenvalues move beyond the Marchenko-Pastur boundaries, allowing the signal to be distinguished from noise.

## Stieltjes Transform and Self-Consistent Equations

A powerful tool for analyzing limiting spectral distributions is the **Stieltjes transform** (resolvent):

$$m(z) = \int \frac{1}{\lambda - z} d\rho(\lambda) = \mathbb{E}[\text{tr}(H - zI)^{-1}]/n$$

where $z \in \mathbb{C} \setminus \mathbb{R}$. The transform $m(z)$ uniquely determines the measure $\rho$ through the Stieltjes inversion formula:

$$\rho(dx) = -\frac{1}{\pi} \lim_{\epsilon \to 0^+} \text{Im}\, m(x + i\epsilon) dx$$

For self-consistent models (e.g., random graphs or covariance matrices), the measure $\rho$ satisfies a **self-consistent equation**, which allows for determining the shape of the limiting distribution without explicit integration.

## Tracy-Widom Distribution

While the semi-circle law describes the behavior of most eigenvalues in the center of the spectrum, eigenvalues at the boundaries of the support behave differently. The **Tracy-Widom distribution** $F_\beta$ describes the fluctuations of the maximum eigenvalue $\lambda_{\max}$ under appropriate normalization:

$$\Pr\left(n^{2/3}(\lambda_{\max} - 2) \leq x\right) \to F_\beta(x), \quad n \to \infty$$

The distribution function $F_\beta$ is expressed through the solution of the Painlevé II equation and has asymptotics:
- as $x \to -\infty$: $F_\beta(x) \sim \exp(-c_\beta|x|^{3/2})$
- as $x \to +\infty$: $1 - F_\beta(x) \sim \exp(-c_\beta' x^{3/2})$

The Tracy-Widom distribution appears universally at the edges of the spectrum of various random matrix ensembles.

## Universality and Altland-Zirnbauer Classification

One of the deepest ideas in RMT is **universality**: eigenvalue statistics depend mainly on the symmetry properties of the matrix (presence of time reversal, spin conservation, etc.), rather than the specific distribution of the entries.

The Altland-Zirnbauer classification identifies **10 symmetry classes** in RMT, including orthogonal, unitary, and symplectic groups. Each class corresponds to its own value of the parameter $\beta$ (1, 2, or 4) and characteristic eigenvalue statistics.

## Free Probability

**Free Probability** was developed by Voiculescu as a non-commutative analog of classical probability theory. Two random matrices are considered **freely independent** if their spectra are asymptotically uncorrelated as the dimension grows.

A key object in free probability is the **R-transform**:

$$R(z) = m^{-1}(z) - 1/z$$

where $m(z)$ is the Stieltjes transform. For freely independent variables, the R-transform of their sum equals the sum of their R-transforms:

$$R_{X+Y}(z) = R_X(z) + R_Y(z)$$

This property allows for computing limiting spectral distributions of compositions and products of freely independent matrices through the so-called **free convolution** $\mu_X \boxplus \mu_Y$.

The **free central limit theorem** states that the sum of freely independent identically distributed matrices, properly normalized, has a Wigner semi-circle distribution — regardless of the distribution of the summands.

## Applications in Statistics and Machine Learning

### High-Dimensional Principal Component Analysis

When analyzing [[high-dimensional-statistics|high-dimensional data]], standard PCA methods face the "curse of dimensionality." RMT shows that the sample eigenvalues of the matrix $XX^T/n$ deviate from the true eigenvalues of the population covariance matrix. The Marchenko-Pastur law allows for correcting estimation biases and correctly recovering the data structure.

### Covariance Matrix Estimation

The classical **Ledoit-Wolf shrinkage** result applies RMT ideas to improve covariance matrix estimates. Instead of the sample matrix $\hat{\Sigma} = XX^T/n$, a convex combination $\alpha \hat{\Sigma} + (1-\alpha)I$ is used, where the shrinkage parameter is chosen based on the limiting spectral measure.

### Neural Network Spectra

The spectra of weight matrices and Jacobians of deep neural networks demonstrate behavior predicted by RMT. The empirical distribution of Jacobian eigenvalues during the training stage approaches the Wigner semi-circle, which is related to the training stability and generalization ability of the network.

### Signal Detection and Information Theory

In [[information-theory|weak signal detection]] tasks in high dimensions, the Marchenko-Pastur law defines a fundamental threshold: if the signal power is below a critical value, the eigenvalues of the signal matrix are submerged in the noise spectrum and are indistinguishable.

## [[Concentration-inequalities|Concentration of Measure]] and Spectral Regularization

Large deviation theory in the context of the spectrum of random matrices established that the empirical spectral measure concentrates around the limiting distribution at an exponential rate. This provides control over the spectral norm and other characteristics.

Spectral regularization, based on RMT results, is used to stabilize numerical algorithms and improve matrix conditioning in practical applications.

## Current Research Directions

Active areas of development include:
- **Sparse and structured matrices**: extending the theory to matrices with [[lp-spaces|sparse structure]]
- **Non-linear models**: spectral analysis for matrices derived from neural networks
- **Local characteristics**: asymptotics of spacings between adjacent eigenvalues
- **Non-symmetric matrices**: circular law theory and applications to graphs

Random Matrix Theory is a deep and rapidly developing field of mathematics that provides both fundamental understanding of the structure of high-dimensional data and practical tools for [[minimax-estimation|statistical inference and estimation]] in modern applications.

## Literature and Further Study

Classical monographs:
- Mehta, M. L. *Random matrices* (3rd ed.)
- Tao, T. *Topics in random matrix theory*
- Anderson, G. W., Guionnet, A., Zeitouni, O. *An introduction to random matrices*

Applications:
- Bouchaud, J.-P., Potters, M. *Financial applications of random matrix theory*
- [[empirical-processes|Empirical processes]] and U-statistics in the context of random matrices

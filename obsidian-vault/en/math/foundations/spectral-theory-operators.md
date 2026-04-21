---
title: "Spectral Theory of Operators"
category: "Mathematical Foundations"
order: 13
lang: "en"
slug: "/math/spectral-theory-operators"
growth: "seedling"
---

# Spectral Theory of Operators

Spectral theory of operators is a branch of functional analysis that studies the properties of the spectrum of linear operators acting on Hilbert and Banach spaces. It extends classical eigenvalue and eigenvector theory from finite-dimensional matrices to infinite-dimensional spaces, providing a powerful framework for analyzing differential operators, integral equations, and stochastic processes.

## Spectrum and Resolvent

For a bounded operator $T: X \to X$ on a Banach space $X$, the **spectrum** is defined as the set of all $\lambda \in \mathbb{C}$ for which $T - \lambda I$ is not invertible:

$$\sigma(T) = \{\lambda \in \mathbb{C} : (T - \lambda I)^{-1} \text{ does not exist}\}$$

The complement of the spectrum is called the **resolvent set** $\rho(T) = \mathbb{C} \setminus \sigma(T)$. On the resolvent set, we define the **resolvent**:

$$R(\lambda) = R_T(\lambda) = (T - \lambda I)^{-1}$$

The resolvent is an analytic function on $\rho(T)$ and satisfies the **resolvent identity**:

$$R(\lambda) - R(\mu) = (\mu - \lambda) R(\lambda) R(\mu)$$

The spectrum always forms a nonempty compact subset of $\mathbb{C}$ contained in the disk $|\lambda| \le \|T\|$.

### Classification of Spectrum

The spectrum $\sigma(T)$ classically decomposes into three disjoint parts:

- **Point spectrum** $\sigma_p(T)$ — the set of eigenvalues $\lambda$ such that $\ker(T - \lambda I) \neq \{0\}$.
- **Continuous spectrum** $\sigma_c(T)$ — values $\lambda$ for which $T - \lambda I$ has dense range but is not invertible.
- **Residual spectrum** $\sigma_r(T)$ — values $\lambda$ for which the range of $T - \lambda I$ is not dense.

## Spectral Theorem

The **spectral theorem** is the central result of the theory, allowing us to represent self-adjoint operators as integrals over their spectrum.

### Compact Self-Adjoint Operators

For a compact self-adjoint operator $T$ on a Hilbert space $H$, the spectral theorem asserts the existence of an orthonormal system of eigenvectors $\{e_n\}_{n=1}^{\infty}$ with eigenvalues $\{\lambda_n\}$ such that:

$$T = \sum_{n=1}^{\infty} \lambda_n \langle \cdot, e_n \rangle e_n$$

with $\lambda_n \to 0$ as $n \to \infty$. This spectral decomposition shows that a compact self-adjoint operator is completely determined by its spectrum and eigenspaces.

### Bounded Self-Adjoint Operators

For a bounded self-adjoint operator $T$, the spectral theorem represents it via a **projection-valued measure** $E(\lambda)$:

$$T = \int_{\sigma(T)} \lambda \, dE(\lambda)$$

The family of projectors $\{E(\lambda)\}_{\lambda \in \mathbb{R}}$ forms a resolution of the identity: $E(\lambda)$ is a nondecreasing family of projectors with $E(-\infty) = 0$ and $E(+\infty) = I$.

## Functional Calculus

The spectral theorem naturally gives rise to a functional calculus. For a Borel function $f$ and a self-adjoint operator $T$, we define:

$$f(T) = \int_{\sigma(T)} f(\lambda) \, dE(\lambda)$$

Functional calculus has the following properties:

- $(f + g)(T) = f(T) + g(T)$
- $(fg)(T) = f(T)g(T)$
- If $f(T)$ and $g(T)$ commute with $T$, they commute with each other

Functional calculus has direct applications in defining operators such as $e^{tT}$ (semigroups) and $\sqrt{T}$ (square root of an operator).

## Fredholm Alternative

The **Fredholm alternative** describes the structure of solutions for compact operators. For a compact operator $T: X \to X$ and arbitrary $y \in X$, the equation:

$$Tx = y$$

has the following dichotomy:

1. Either the equation $Tx = 0$ has only the trivial solution, in which case $Tx = y$ has a unique solution for each $y$.
2. Or the equation $Tx = 0$ has nontrivial solutions, in which case $Tx = y$ is solvable only for $y$ orthogonal to all solutions of the adjoint equation $T^*\psi = 0$.

The Fredholm alternative applies to Fredholm integral equations of the second kind and forms the basis for analyzing boundary value problems for differential operators.

## Sturm–Liouville Theory

The classical Sturm–Liouville problem:

$$-\frac{d}{dx}\left(p(x)\frac{du}{dx}\right) + q(x)u = \lambda w(x)u, \quad x \in [a,b]$$

with boundary conditions naturally reformulates as an eigenvalue problem for a differential operator. Spectral theory guarantees the existence of a countable spectrum of eigenvalues $\{\lambda_n\}$ with corresponding orthogonal eigenfunctions $\{u_n\}$, and any sufficiently smooth function can be expanded in a Fourier series relative to these eigenfunctions.

## Spectrum of Markov Operators

For a Markov operator (stochastic matrix or its continuum generalization), the spectrum is contained in the unit disk $|\lambda| \le 1$. The **spectral gap** $\gamma = 1 - |\lambda_2|$, where $\lambda_2$ is the second-largest eigenvalue, controls convergence rate:

$$\|P^n - \pi\| \lesssim C(1-\gamma)^n$$

where $\pi$ is the invariant distribution. The spectral gap is a key parameter for analyzing the mixing time of Markov chains.

## Applications

Spectral theory has fundamental applications across diverse fields:

- **Quantum mechanics**: the Schrödinger equation $i\hbar \frac{\partial\psi}{\partial t} = H\psi$ depends on the spectrum of the Hamiltonian $H$. Discrete spectrum corresponds to bound states, continuous spectrum to scattering states.
- **Principal Component Analysis (PCA)**: principal components are eigenvectors of the covariance matrix, ordered by decreasing eigenvalues.
- **Spectral clustering**: uses the spectrum of the graph [[spectral-graph-theory|Laplacian]] to detect communities in network data.
- **Singular Value Decomposition (SVD)**: spectral decomposition applied to $A^*A$ yields singular vectors and values.
- **Stability of dynamical systems**: the spectrum of the Jacobian determines local stability of equilibrium solutions.

## References

[[functional-analysis]] | [[lp-spaces]] | [[sobolev-spaces]] | [[markov-chain-mixing]] | [[partial-differential-equations]] | [[schrodinger-equation]] | [[spectral-representation-processes]]

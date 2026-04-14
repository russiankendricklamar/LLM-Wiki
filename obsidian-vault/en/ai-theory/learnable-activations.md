---
title: "Learnable Activations and B-splines"
category: "AI Theory"
order: 8
lang: "en"
slug: "learnable-activations"
---

# Learnable Activations and B-splines

**Learnable activation functions** are an architectural pattern in which the nonlinearities traditionally fixed (ReLU, $\tanh$, GELU) are replaced with parametrised families trained jointly with the weights. The idea dates back to the 1990s (Turkel's adaptive sigmoids, 1998), but interest exploded in the 2020s — first with Swish and KAF, then with **Kolmogorov-Arnold Networks (KANs)**, which moved learnable activations from the nodes to the edges and tied them to the [[kolmogorov-arnold-theorem|Kolmogorov-Arnold theorem]].

## Why not fixed activations

Standard MLPs use fixed activations: ReLU, $\tanh$, GELU. They yield **universal approximation** — any continuous function can be approximated by a sufficiently wide two-layer network (Cybenko 1989, Hornik 1991). But universality does not imply efficiency: complex dependencies often require many neurons.

**Learnable activations** shift some of the work from weights to nonlinearities. Instead of constructing a complex function by combining ReLU and linear layers, the network can learn a suitable nonlinearity directly for each component. This often yields more compact and interpretable networks.

## Parametrisations

**Polynomial activations.** $\sigma(x) = \sum_{k=0}^K a_k x^k$ with learnable coefficients. Simple but numerically unstable at large $|x|$.

**Parametric ReLU (PReLU).** $\sigma(x) = \max(0, x) + \alpha \min(0, x)$ with learnable $\alpha$. A minimal extension of ReLU.

**Swish.** $\sigma(x) = x \cdot \text{sigmoid}(\beta x)$ with learnable $\beta$. Smooth and bounded, discovered by automated search (Ramachandran, Zoph, Le, 2017).

**Kernel activation function (KAF).** $\sigma(x) = \sum_{k=1}^K a_k \cdot \kappa(x, c_k)$ with fixed centres $c_k$ and learnable $a_k$. A kernel-method analogue.

**Rational activations.** $\sigma(x) = P(x)/Q(x)$ with polynomial $P, Q$. Flexible but require care with the denominator.

**B-spline activations.** The most general flexible parametrisation for monotone or arbitrary 1D functions. This is the form used in KANs.

## B-splines: essence

A B-spline of order $k$ is a piecewise polynomial of degree $k$ glued smoothly at grid knots. For $G+1$ knots there are $G+k$ basis functions $B_i(x)$, and any function of the form

$$
\phi(x) = \sum_{i=1}^{G+k} c_i B_i(x)
$$

is a cubic ($k=3$) spline. The coefficients $c_i$ are the learnable parameters.

Key properties:

- **Local support.** Each $B_i$ is nonzero only on $k+1$ neighbouring intervals — computationally efficient.
- **Smoothness.** $C^{k-1}$-continuity at grid knots by construction.
- **Shape-preserving.** Monotone coefficients yield a monotone spline (useful for CDF modelling).
- **Adaptive refinement.** $G$ can be increased during training, adding knots where the function varies rapidly.

## KAN: activations on edges

[[kan|Kolmogorov-Arnold Networks]] move learnable activations from nodes to edges. Formally, a KAN layer computes

$$
(\text{KAN layer})_j(x_1, \ldots, x_n) = \sum_{i=1}^{n} \phi_{i,j}(x_i),
$$

where each $\phi_{i,j}$ is a learnable univariate function parametrised by a B-spline:

$$
\phi(x) = w_b \cdot b(x) + w_s \cdot \sum_k c_k B_k(x),
$$

with base $b(x) = x / (1 + e^{-x})$ (SiLU) plus a spline component. Unlike MLPs, there is no fixed nonlinear node; all nonlinearity lives on edges.

This structure **directly matches the representation in the [[kolmogorov-arnold-theorem|Kolmogorov-Arnold theorem]]**: a depth-2 KAN of width $[n, 2n+1, 1]$ realises exactly the sum of univariate functions that the theorem guarantees.

## Practical considerations

**Initialisation.** Spline coefficients start at small values so the initial activation is close to the base SiLU. Without this training is often unstable.

**Regularisation.** L1 on $\{c_k\}$ gives sparse splines and smoother activations. L2 bounds the amplitude.

**Grid refinement.** A KAN is first trained on a coarse grid ($G \approx 5$), which is then extended to $G \approx 50$ by projecting onto a finer basis. This is analogous to $h$-refinement in FEM.

**Computational cost.** B-spline activations are 10-100× slower than ReLU due to local sums. Modern implementations (torch-kan, efficient-kan) speed them up via batching and pre-computation.

## Applications

- **Symbolic regression.** After training, the smooth splines can be visualised and automatically fitted to symbolic expressions ($\sin$, $\exp$, polynomials). KANs outperform MLPs on Feynman benchmarks.
- **Scientific tasks.** Equations of state, equations of motion, spectral relations — all take the form of compositions of univariate functions, which fits KANs naturally.
- **Interpretability.** L1 regularisation yields sparse networks where one can read off which inputs are connected to which outputs through which nonlinearities.
- **Normalising flows.** Monotone B-splines are used as building blocks in spline flows (Durkan et al., 2019).
- **Bayesian neural networks.** Learnable activations provide an extra degree of freedom for parameter posteriors.

## Limitations

**Speed.** Learnable activations are orders of magnitude slower than fixed ones. For large models this is critical.

**High-dimensional tasks.** The number of KAN edges grows as $\prod_\ell n_\ell$. For images or language models, the KA decomposition is impractical.

**Hyperparameter choices.** Spline order $k$, grid size $G$, and refinement strategy are additional parameters that require tuning.

**Ecosystem maturity.** Architectures with learnable activations are young; tools are less developed than for MLP/Transformer stacks.

## Related Topics

- [[kan]] — the most famous architecture with edge-level learnable activations
- [[kolmogorov-arnold-theorem]] — mathematical foundation of the KAN decomposition
- [[neural-scaling-laws]] — how KAN architectures relate to scaling laws
- [[pinns]] — PINN networks can be built from KAN blocks (KAN-PINNs)
- [[sparse-autoencoders]] — another route to interpretability via sparsity

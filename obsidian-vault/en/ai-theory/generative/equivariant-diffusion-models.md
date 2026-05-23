---
title: "Equivariant Diffusion Models"
category: "AI Theory"
order: 110
lang: "en"
slug: "equivariant-diffusion-models"
---

# Equivariant Diffusion Models

**Equivariant Diffusion Models (EDMs)** are a class of generative models that incorporate geometric symmetries (such as rotation, translation, and reflection) into the [[diffusion-models|diffusion framework]]. By ensuring that the denoising process respects the fundamental symmetries of the data, EDMs achieve significantly higher sample efficiency and better generalisation, particularly in domains like molecular docking, protein design, and 3D point cloud generation.

## Symmetry in Generative Modelling

A function $f: \mathcal{X} \to \mathcal{Y}$ is **equivariant** with respect to a group $G$ if transforming the input results in a corresponding transformation of the output:
$$
f(g \cdot x) = g \cdot f(x) \quad \forall g \in G, x \in \mathcal{X}
$$
In the context of [[diffusion-models|diffusion models]], we want the score function (or noise predictor) $s_\theta(x_t, t)$ to be equivariant. For physical systems, $G$ is typically the **Euclidean group** $E(n)$ or the **Special Euclidean group** $SE(n)$, consisting of rotations, translations, and (for $E(n)$) reflections.

## Equivariant [[stochastic-differential-equations|SDE]] Framework

Equivariant diffusion can be formalised using [[stochastic-differential-equations|Stochastic Differential Equations (SDEs)]]. Consider the forward SDE:
$$
dx = f(x, t) dt + g(t) dW_t
$$
For the distribution to remain equivariant throughout the diffusion process, the drift coefficient $f(x, t)$ must be equivariant and the diffusion coefficient $g(t)$ must be invariant. If the initial distribution $p_0(x)$ is $G$-invariant, then all marginal distributions $p_t(x)$ will also be $G$-invariant.

The **reverse SDE** involves the score $\nabla_x \log p_t(x)$. A crucial property is that the gradient of an invariant scalar field is an equivariant vector field:
$$
\nabla_{g \cdot x} \log p_t(g \cdot x) = g \cdot \nabla_x \log p_t(x)
$$
Thus, if $p_t(x)$ is invariant, the optimal score function is naturally equivariant.

## Euclidean Equivariant Diffusion (E(n)-Diffusion)

For 3D objects like molecules, we represent the state as a set of coordinates $Z = [x, h]$, where $x \in \mathbb{R}^{M \times 3}$ are atom positions and $h \in \mathbb{R}^{M \times d}$ are invariant features (e.g., atom types).

An **Equivariant Graph Neural Network (EGNN)** is typically used as the noise predictor $\epsilon_\theta(Z_t, t)$. The update rules for an EGNN are designed to be $E(n)$-equivariant:
1. **Message passing:** $m_{ij} = \phi_m(h_i^l, h_j^l, \|x_i^l - x_j^l\|^2, a_{ij})$
2. **Position update:** $x_i^{l+1} = x_i^l + \sum_{j \neq i} (x_i^l - x_j^l) \phi_x(m_{ij})$
3. **Feature update:** $h_i^{l+1} = \phi_h(h_i^l, \sum_{j \neq i} m_{ij})$

The use of relative distances $\|x_i - x_j\|^2$ ensures invariance of messages, while the weighted sum of relative positions ensures equivariance of the coordinate updates.

## Diffusion on Manifolds and Lie Groups

Some applications require diffusion on non-Euclidean spaces, such as [[lie-groups|Lie groups]] (e.g., $SO(3)$ for rotations).
1. **Riemannian Diffusion:** The SDE is defined using the [[laplacian|Laplace-Beltrami operator]] $\Delta_{\mathcal{M}}$ on the [[manifold-learning|manifold]] $\mathcal{M}$.
2. **Geodesic Random Walks:** Transitions are defined via exponential maps $\exp_x(v)$, where $v$ is sampled from the tangent space $T_x \mathcal{M}$.

For $SO(3)$, the "noise" is typically a concentrated distribution like the **Isotropic Gaussian** on the sphere, and the denoising network predicts the rotation gradient in the corresponding [[lie-algebras-physics|Lie algebra]] $\mathfrak{so}(3)$.

## Applications

- **Molecular Generation:** Generating stable 3D molecular conformations (e.g., EDM, GeoLDM).
- **Protein Folding and Design:** Sampling backbone geometries and side-chain orientations (e.g., FrameDiff, RFdiffusion).
- **Robotics:** Learning equivariant policy representations for object manipulation.
- **Computer Vision:** Generative modelling of 3D point clouds and shapes.

## Advantages and Challenges

**Advantages:**
- **Sample Efficiency:** The model does not need to learn that a rotated molecule is the same as the original; the symmetry is baked into the architecture.
- **Physical Consistency:** Generated structures respect fundamental geometric constraints.
- **Robustness:** Better generalisation to unseen orientations and scales.

**Challenges:**
- **Computational Complexity:** Equivariant layers (like EGNNs or Spherical Harmonics) are often more expensive than standard convolutions or [[attention-mechanisms|attention]].
- **Invariant Schedulers:** Ensuring that the noise schedule itself doesn't break symmetry (e.g., centering the center of mass).
- **Non-compact Groups:** Handling translation invariance often requires working in the subspace of zero-mean coordinates.

## Related Topics

- [[equivariant-gnn]] — the architectural backbone of many EDMs
- [[diffusion-models]] — the general framework for denoising-based generation
- [[stochastic-differential-equations]] — the mathematical basis for continuous-time diffusion
- [[lie-groups]] — for diffusion on rotation groups
- [[manifold-learning]] — for understanding the data geometry

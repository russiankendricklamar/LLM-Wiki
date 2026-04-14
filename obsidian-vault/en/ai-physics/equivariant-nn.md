---
title: "Equivariant Neural Networks"
category: "AI × Physics"
order: 2
lang: "en"
slug: "equivariant-nn"
---

# Equivariant Neural Networks

## Prerequisites

[[pinns]]

## Overview

Equivariant neural networks encode symmetry constraints directly into their architecture. When the input undergoes a symmetry transformation (rotation, reflection, permutation), the network output transforms in a corresponding, predictable way — rather than requiring the network to re-learn the symmetry from data.

This is in contrast to data augmentation, which teaches a network to be approximately invariant by showing many rotated copies of training examples. Equivariance provides an exact, built-in guarantee. The practical payoff is dramatic: equivariant networks achieve state-of-the-art results on molecular property prediction, protein structure, and particle physics tasks with orders of magnitude fewer parameters and training examples than non-equivariant baselines.

## Mathematical Framework

Let $G$ be a group and $\rho_{\text{in}}: G \to GL(V_{\text{in}})$, $\rho_{\text{out}}: G \to GL(V_{\text{out}})$ be linear representations. A map $f: V_{\text{in}} \to V_{\text{out}}$ is **$G$-equivariant** if:

$$f(\rho_{\text{in}}(g) \cdot x) = \rho_{\text{out}}(g) \cdot f(x), \quad \forall g \in G, x \in V_{\text{in}}$$

As a special case, when $\rho_{\text{out}}$ is the trivial representation (all $g$ map to the identity), $f$ is **$G$-invariant**:

$$f(\rho_{\text{in}}(g) \cdot x) = f(x)$$

For 3D Euclidean space, the relevant groups are:
- $O(3)$: orthogonal group (rotations + reflections)
- $SO(3)$: special orthogonal group (proper rotations only)
- $E(3)$: Euclidean group $= O(3) \ltimes \mathbb{R}^3$ (rotations, reflections, translations)
- $SE(3)$: special Euclidean group (rotations + translations)

The irreducible representations (irreps) of $SO(3)$ are the **Wigner D-matrices** $D^{(\ell)}(R)$ for each angular momentum order $\ell = 0, 1, 2, \ldots$. Features transforming as degree-$\ell$ irreps are called **type-$\ell$ features** or **spherical tensors**:
- $\ell = 0$: scalars (invariant under rotation)
- $\ell = 1$: vectors (rotate with the standard 3D rotation matrix)
- $\ell = 2$: rank-2 symmetric traceless tensors
- $\ell \geq 3$: higher-order tensors

## How It Works

**Tensor product layers.** The fundamental building block for $E(3)$-equivariant networks is the Clebsch-Gordan tensor product. For two features of types $\ell_1$ and $\ell_2$, the equivariant product outputs features of types $|\ell_1 - \ell_2|, \ldots, \ell_1 + \ell_2$:

$$(\mathbf{u}^{(\ell_1)} \otimes_{\text{CG}} \mathbf{v}^{(\ell_2)})_m^{(\ell)} = \sum_{m_1, m_2} C_{\ell_1 m_1 \ell_2 m_2}^{\ell m} \, u_{m_1}^{(\ell_1)} v_{m_2}^{(\ell_2)}$$

where $C_{\ell_1 m_1 \ell_2 m_2}^{\ell m}$ are Clebsch-Gordan coefficients.

**Message passing on point clouds.** In molecular graphs, atoms are nodes with 3D positions $\mathbf{r}_i$. Messages between atoms $i$ and $j$ use the relative displacement $\hat{\mathbf{r}}_{ij} = (\mathbf{r}_j - \mathbf{r}_i)/|\mathbf{r}_j - \mathbf{r}_i|$ projected onto spherical harmonics $Y_m^{(\ell)}(\hat{\mathbf{r}}_{ij})$, which themselves transform as type-$\ell$ features. The node update:

$$\mathbf{h}_i^{\text{new}} = \mathbf{h}_i + \sum_{j \in \mathcal{N}(i)} W(|\mathbf{r}_{ij}|) \left( \mathbf{h}_j \otimes_{\text{CG}} Y^{(\ell)}(\hat{\mathbf{r}}_{ij}) \right)$$

**Key architectures:**
- **SchNet (2017):** Invariant; uses radial basis functions, no tensor products.
- **SE(3)-Transformer (2020):** Equivariant attention over point clouds with tensor product keys/queries.
- **SEGNN (2021):** Steerable E(3)-equivariant graph neural network.
- **NequIP (2022):** E(3)-equivariant interatomic potential; achieves DFT accuracy with few-shot data.
- **MACE (2022):** Higher-order equivariant message passing; current state-of-the-art for molecular dynamics.

## Python Implementation

```python
# Minimal E(3)-equivariant layer using the e3nn library
# pip install e3nn

import torch
from e3nn import o3
from e3nn.nn import FullyConnectedNet

# Define irreps: 1 scalar (l=0), 1 vector (l=1), 1 rank-2 tensor (l=2)
irreps_in = o3.Irreps("1x0e + 1x1o + 1x2e")   # e=even parity, o=odd parity
irreps_sh = o3.Irreps.spherical_harmonics(lmax=2)
irreps_out = o3.Irreps("2x0e + 2x1o")

# Tensor product: combines node features with edge spherical harmonics
tp = o3.FullyConnectedTensorProduct(
    irreps_in,
    irreps_sh,
    irreps_out,
    shared_weights=False,
)

# Radial network: produces weights for the tensor product
radial_net = FullyConnectedNet(
    [1, 64, 64, tp.weight_numel],
    act=torch.nn.functional.silu,
)

# Forward pass for a single edge
def equivariant_message(h_j, r_vec):
    """h_j: source node features, r_vec: displacement vector (3,)"""
    r_norm = r_vec.norm(dim=-1, keepdim=True)
    r_hat = r_vec / r_norm.clamp(min=1e-8)
    # Spherical harmonics of the unit displacement (equivariant!)
    sh = o3.spherical_harmonics(irreps_sh, r_hat, normalize=True)
    # Radial weights depend only on distance (invariant)
    weights = radial_net(r_norm)
    # Equivariant tensor product
    return tp(h_j, sh, weights)


# Verify equivariance
x = torch.randn(irreps_in.dim)
r = torch.randn(3)

# Random rotation
R = o3.rand_matrix()
rot_in = irreps_in.D_from_matrix(R)
rot_out = irreps_out.D_from_matrix(R)

msg_original = equivariant_message(x, r)
msg_rotated = equivariant_message(rot_in @ x, R @ r)

error = (msg_rotated - rot_out @ msg_original).norm()
print(f"Equivariance error: {error.item():.2e}")  # Should be ~1e-6
```

## Key Results & Properties

- **Sample efficiency:** NequIP achieves DFT-quality force field accuracy with 1000x fewer data points than non-equivariant baselines (Batzner et al. 2022).
- **Exact symmetry:** Rotation error is zero by construction (unlike data-augmented networks which have residual asymmetry).
- **Physical consistency:** Energy-conserving force fields require $\mathbf{F}_i = -\nabla_{\mathbf{r}_i} E$; equivariant networks ensure this automatically.
- **AlphaFold insight:** The SE(3)-equivariant frame update ("invariant point attention") in AlphaFold2 is a key architectural component enabling accurate protein structure prediction.
- **Particle physics:** Lorentz-equivariant networks for jet tagging surpass non-equivariant alternatives with far fewer parameters.

## Limitations

**Computational cost.** Clebsch-Gordan tensor products are expensive: $O(L^6)$ for max angular momentum $L$. High-$\ell$ features provide more expressiveness but make training slow.

**Parity subtleties.** Distinguishing pseudo-scalars ($\ell=0$, odd parity) from scalars requires tracking parity throughout the network. Chirality-sensitive tasks (e.g., drug design) require careful handling.

**Message-passing bottleneck.** Like all GNNs, equivariant networks can suffer from over-squashing: information from distant atoms is compressed through bottleneck edges.

**Non-compact groups.** Lorentz group $SO(1,3)$ has only infinite-dimensional unitary representations; building practical Lorentz-equivariant networks requires truncation or alternative approaches.

## Applications

- **Molecular dynamics:** Equivariant force fields (NequIP, MACE) for simulation of biomolecules at ab initio accuracy.
- **Protein structure prediction:** SE(3)-equivariant attention in AlphaFold2 and RoseTTAFold.
- **Drug discovery:** Predicting molecular properties (binding affinity, solubility) from 3D structures.
- **Particle physics:** Jet classification, event reconstruction in LHC detectors with Lorentz-equivariant networks.
- **Crystal property prediction:** Equivariant GNNs for bandgap and formation energy prediction.
- **Robotics:** SE(3)-equivariant policies for manipulation tasks that must generalise across object orientations.

## Related Topics

- [[group-theory]] — mathematical foundation of symmetry groups and representations
- [[scattering-amplitudes]] — Lorentz symmetry and on-shell methods in particle physics
- [[qft-basic]] — quantum field theory, where symmetries define particle content
- [[pinns]] — complementary physics-constrained networks using PDE residuals
- [[hamiltonian-nn]] — another physics-structured architecture

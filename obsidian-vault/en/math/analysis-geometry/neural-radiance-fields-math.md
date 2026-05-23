---
title: "Mathematical Foundations of NeRF"
category: "Analysis & Geometry"
order: 120
lang: "en"
slug: "neural-radiance-fields-math"
---

# Mathematical Foundations of NeRF

**Neural Radiance Fields (NeRF)** represent a breakthrough in computer vision and graphics, allowing for the synthesis of novel views of complex 3D scenes from a sparse set of 2D images. At its core, NeRF parameterises a continuous scene as a volumetric function, using the principles of **volume rendering** and **harmonic analysis** to bridge the gap between 3D geometry and 2D projections.

## The Radiance Field Function

A Neural Radiance Field is a continuous function $F_\theta$ that maps a 3D location $\mathbf{x} = (x, y, z)$ and a 2D viewing direction $\mathbf{d} = (\theta, \phi)$ to an emitted color $\mathbf{c} = (r, g, b)$ and a volume density $\sigma$:
$$
F_\theta: (\mathbf{x}, \mathbf{d}) \to (\mathbf{c}, \sigma)
$$
In practice, direction $\mathbf{d}$ is represented as a 3D unit vector. To preserve multiview consistency, the density $\sigma$ is predicted only from the position $\mathbf{x}$, while the color $\mathbf{c}$ depends on both position and viewing direction (to capture view-dependent effects like specularities).

## Volume Rendering Equation

To render a pixel, NeRF uses the classical **volume rendering equation** from radiative transfer. Consider a camera ray $\mathbf{r}(t) = \mathbf{o} + t\mathbf{d}$ from near bound $t_n$ to far bound $t_f$. The expected color $C(\mathbf{r})$ is the integral of the radiance along the ray, weighted by the probability that the ray is absorbed or reflected at that point:
$$
C(\mathbf{r}) = \int_{t_n}^{t_f} T(t) \sigma(\mathbf{r}(t)) \mathbf{c}(\mathbf{r}(t), \mathbf{d}) dt
$$
where $T(t)$ is the **accumulated transmittance** along the ray from $t_n$ to $t$:
$$
T(t) = \exp \left( -\int_{t_n}^t \sigma(\mathbf{r}(s)) ds \right)
$$
In discrete implementation, this integral is approximated using **quadrature**. The ray is partitioned into $N$ bins $[t_i, t_{i+1}]$, and a point $t_i$ is sampled from each bin:
$$
\hat{C}(\mathbf{r}) = \sum_{i=1}^N T_i (1 - \exp(-\sigma_i \delta_i)) \mathbf{c}_i, \quad T_i = \exp \left( -\sum_{j=1}^{i-1} \sigma_j \delta_j \right)
$$
where $\delta_i = t_{i+1} - t_i$.

## Positional Encoding and Harmonic Analysis

Standard coordinate-based MLPs struggle to learn high-frequency details (the "spectral bias" of neural networks). NeRF overcomes this by applying a **positional encoding** $\gamma(\cdot)$ to the input coordinates, mapping them to a higher-dimensional space:
$$
\gamma(p) = \left( \sin(2^0 \pi p), \cos(2^0 \pi p), \dots, \sin(2^{L-1} \pi p), \cos(2^{L-1} \pi p) \right)
$$
This encoding is equivalent to projecting the input onto a set of basis functions (Fourier features). Mathematically, this allows the network to approximate functions with higher bandwidth, which corresponds to sharper edges and finer textures in the reconstructed scene. This connection is deeply rooted in the [[neural-tangent-kernel|Neural Tangent Kernel (NTK)]] theory.

## Differential Geometry and Inverse Rendering

From the perspective of **differential geometry**, NeRF reconstructs a surface as a level set of a density field, although it represents the scene as a participating medium rather than a hard boundary.
The optimisation of NeRF is an **inverse problem**:
$$
\min_\theta \sum_{\mathbf{r} \in \mathcal{R}} \| \hat{C}(\mathbf{r}; \theta) - C_{\text{gt}}(\mathbf{r}) \|^2_2
$$
The gradient of the loss with respect to the network parameters flows through the rendering equation, which is differentiable with respect to both $\sigma$ and $\mathbf{c}$.

## Relationship to Other Techniques

- **[[gaussian-splatting|Gaussian Splatting]]:** Replaces the continuous [[transformer-architecture|MLP]] with a discrete set of 3D Gaussians, allowing for faster rasterisation but losing the continuous coordinate-based representation.
- **[[manifold-learning|Manifold Learning]]:** NeRF can be viewed as learning a 2D [[manifold-learning|manifold]] (the image plane) as a projection of a 3D volumetric manifold.
- **[[pdes|Partial Differential Equations]]:** The volume rendering equation is a solution to the simplified **Radiative Transfer Equation (RTE)** in a non-scattering medium.

## Extensions and Generalisations

1. **Mip-NeRF:** Replaces rays with cones and uses **Integrated Positional Encoding (IPE)** to handle multi-scale rendering and prevent aliasing.
2. **NeuS / VolSDF:** Replaces the density $\sigma$ with a **Signed Distance Function (SDF)**, enabling higher-quality surface reconstruction.
3. **Plenoxels / Instant NGP:** Uses sparse voxel grids or hash tables to accelerate training and inference by orders of magnitude.

## Related Topics

- [[nerf]] — general overview and applications
- [[gaussian-splatting]] — the main alternative to volumetric rendering
- [[manifold-learning]] — geometry of the scene representation
- [[neural-tangent-kernel]] — explaining the effectiveness of positional encoding
- [[integration]] — the basis of the volume rendering equation

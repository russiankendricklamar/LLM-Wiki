---
title: "Neural Operators"
category: "Scientific ML"
order: 5
lang: "en"
slug: "neural-operators"
growth: "seedling"
---

Neural operators represent a fundamental shift in how neural networks approximate solution mappings: rather than learning functions $\mathbb{R}^n \to \mathbb{R}^m$, they learn operators $\mathcal{G}: U \to V$ between infinite-dimensional function spaces. This capability makes them ideal for approximating the solution operator of [[partial-differential-equations|PDEs]], enabling mesh-invariant, resolution-agnostic learning of physical systems that once required classical numerical solvers.

## The Operator Approximation Problem

A PDE encodes a continuous map from initial conditions or boundary data to solutions. Traditionally, we discretize on a grid and learn finite-dimensional approximations. Neural operators invert this: learn the *infinite-dimensional* map directly, then evaluate it at arbitrary resolution.

Formally, given a PDE with solution operator $\mathcal{G}$:

$$u(y) = \mathcal{G}(a)(y), \quad y \in \Omega$$

where $a \in U$ is an input function (initial condition, coefficient field, forcing) and $u \in V$ is the solution field. The goal is to approximate $\mathcal{G}$ so that for any $a$, we can compute $u$ at any query location $y$ without rerunning a classical solver.

## Universal Approximation for Operators

Chen & Chen (1995) proved that any continuous operator $\mathcal{G}: C(\Omega) \to C(\Omega')$ can be approximated arbitrarily well by a network that:

1. Evaluates input $a$ at $m$ sensor locations: $a(x_1), \ldots, a(x_m)$
2. Applies a learned function $\phi: \mathbb{R}^m \to \mathbb{R}^k$
3. Combines outputs via basis functions

This foundation motivates **DeepONet**, which makes the encoding and decoding steps explicit.

## DeepONet: Branch and Trunk Decomposition

DeepONet (Lu et al. 2021) splits operator approximation into two sub-networks:

**Branch network:** encodes the input function $a$ at $m$ sensor points into a latent representation:

$$T_b(a) = [T_b^{(1)}(a(x_1), \ldots, a(x_m)), \ldots, T_b^{(k)}(a(x_1), \ldots, a(x_m))]$$

**Trunk network:** processes the query location $y$ to produce $k$ basis vectors:

$$T_t(y) = [T_t^{(1)}(y), \ldots, T_t^{(k)}(y)]$$

**Output:** the operator evaluation at query $y$ is a bilinear form:

$$\mathcal{G}(a)(y) \approx \sum_{j=1}^{k} T_b^{(j)}(a) \cdot T_t^{(j)}(y) + b$$

This decouples input encoding (branch) from spatial position (trunk), making DeepONet flexible for scattered sensor data and varying output resolution. It works with any grid, unstructured meshes, or point clouds.

## Fourier Neural Operators (FNO)

FNO (Li et al. 2021) replaces the convolution kernel in neural networks with multiplication in Fourier space, achieving both efficiency and resolution-invariance for problems on periodic or uniformly gridded domains.

**Key operation:** A Fourier layer applies:

$$v_{t+1}(x) = \sigma\left(W \cdot v_t(x) + \mathcal{F}^{-1}(R_\phi \cdot \mathcal{F}(v_t))(x)\right)$$

where:
- $\mathcal{F}$ is the FFT
- $R_\phi$ is a learnable complex multiplication operator with weights $\phi$ on the first $J$ Fourier modes (truncated for efficiency)
- $W$ is a learnable linear transformation on the spatial domain
- $\sigma$ is a pointwise activation (e.g., ReLU or GELU)

The learnable operator $R_\phi$ applies element-wise scaling in Fourier space:

$$R_\phi(\hat{v}_k) = \phi_k \cdot \hat{v}_k, \quad k = 1, \ldots, J$$

**Complexity:** FFT is $O(N \log N)$, where $N$ is grid resolution. The mode truncation $J \ll N$ further reduces cost. FNO avoids the dense kernel matrix of standard convolution ($O(N^2)$ parameters per layer).

**Resolution invariance:** FNO is trained on one resolution but evaluates on any resolution — the Fourier basis generalizes. This critical property enables transfer across discretizations.

## FNO Architecture in Practice

A complete FNO for a PDE solver stacks $d$ Fourier layers:

$$\text{Input} \xrightarrow{P} v_0 \xrightarrow{\text{Fourier layers}} v_d \xrightarrow{Q} \text{Output}$$

- **Lift:** $P: a(x) \mapsto v_0$ (dense layers or embedding)
- **Fourier layers:** $d$ iterations of the operator above
- **Project:** $Q: v_d \mapsto u(x)$ (dense layers to output)

Typical hyperparameters:
- $d = 4$ layers
- Mode truncation $J = 32$ (on a $128 \times 128$ grid, keeping top 32 Fourier modes in each dimension)
- Activation: GELU
- Width: 64–128 channels

## Comparison: DeepONet vs. FNO vs. Graph Neural Operators

| Property | DeepONet | FNO | Graph Neural Operator |
|----------|----------|-----|----------------------|
| **Grid type** | Any (scattered sensors) | Uniform/periodic | Unstructured meshes |
| **Complexity** | $O(m \cdot k \cdot d)$ (sensor-dependent) | $O(N \log N)$ | $O(E \cdot d)$ (edge-dependent) |
| **Resolution transfer** | Limited | Exact | Limited |
| **Training data** | Point evaluations | Full fields | Node/edge features |
| **Best for** | Sparse measurements | PDEs on grids | Mesh-varying problems |

FNO dominates on uniform grids for computational speed; DeepONet excels in inverse problems and scattered data; Graph Neural Operators handle adaptively refined meshes.

## Training and Data Generation

Neural operators are trained *supervised*: solutions from a classical solver (finite element, spectral, or finite difference method) serve as ground truth.

**Workflow:**
1. Generate $N_{\text{train}}$ input functions $\{a_i\}$ (e.g., random initial conditions, parameter fields)
2. Solve PDE for each: $u_i = \mathcal{G}^*_{\text{classical}}(a_i)$
3. Train neural operator $\mathcal{G}_\theta$ to minimize:

$$\mathcal{L}(\theta) = \frac{1}{N_{\text{train}}} \sum_{i=1}^{N_{\text{train}}} \|u_i - \mathcal{G}_\theta(a_i)\|_V^2$$

(e.g., $L^2$ Sobolev norm, $H^1$, or relative error)

4. Evaluate on held-out test PDEs with different parameters or initial conditions

FNO on Navier-Stokes achieves 1000× speedup over classical CFD solvers at comparable accuracy.

## Applications

**Weather & climate:** Pathways weather model uses neural operators for fast, differentiable forward propagation, enabling ensemble forecasting at unprecedented scale.

**Fluid dynamics:** Predict channel flow, turbulence closures, and aerodynamic fields at interactive speeds.

**Option pricing:** Solve the Black-Scholes PDE or calibrated local-volatility models for multiple strikes and maturities simultaneously, replacing grid-based PDE solvers.

**Material science:** Learn crystal structure evolution, material degradation, and phase transitions from simulation data.

**Inverse problems:** Combined with [[pinns|PINNs]], neural operators enable real-time parameter inference from sparse observations.

## Limitations and Outlook

**Extrapolation:** Neural operators fail when pushed beyond training parameter regimes (e.g., Reynolds numbers, time horizons, initial condition magnitudes). Theoretical understanding of extrapolation bounds remains open.

**Accumulation of error:** Long-time integration ($t \gg T_{\text{train}}$) causes error to compound; autoregressive rollout degrades quickly.

**Data hunger:** Training requires expensive ground-truth solutions. [[equivariant-nn|Equivariant]] and [[hamiltonian-nn|Hamiltonian-preserving]] operators reduce this cost.

**Limited to smooth regimes:** Shocks and discontinuities (e.g., hyperbolic conservation laws) are challenging; classical methods remain more reliable there.

Future directions include operator basis adaptation, learned preconditioners for inverse problems, and hybrid schemes coupling neural operators with classical solvers at shocks.

## See Also

- [[partial-differential-equations|Partial Differential Equations]]
- [[pinns|Physics-Informed Neural Networks (PINNs)]]
- [[stochastic-differential-equations|Stochastic Differential Equations]]
- [[numerical-pde-finance|Numerical PDE Methods in Finance]]
- [[hamiltonian-nn|Hamiltonian Neural Networks]]
- [[equivariant-nn|Equivariant Neural Networks]]
- [[fokker-planck-equation|Fokker-Planck Equation]]

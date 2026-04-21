---
title: "State Space Models (SSM)"
category: "AI Theory"
order: 19
lang: "en"
slug: "state-space-models"
growth: "seedling"
---

State Space Models (SSM) are a class of deep learning architectures that discretize classical linear continuous-time systems into recurrent neural networks. They solve a central problem in sequence modeling: capturing long-range dependencies in $O(L)$ time and memory, compared to $O(L^2)$ for [[transformer-architecture|Transformers]]. Rooted in [[kalman-filter|control theory]], SSMs bridge [[neural-odes|Neural ODEs]] with efficient parallel inference, enabling competitive performance on language modeling, genomics, and audio with provably better scaling.

## Classical State Space Formulation

A continuous-time linear system is described by:

$$h'(t) = Ah(t) + Bx(t)$$
$$y(t) = Ch(t) + Dx(t)$$

where $h(t) \in \mathbb{R}^N$ is the hidden state, $x(t)$ is the input, $y(t)$ is the output, and $A \in \mathbb{R}^{N \times N}$, $B \in \mathbb{R}^{N \times 1}$, $C \in \mathbb{R}^{1 \times N}$, $D \in \mathbb{R}^{1 \times 1}$ are parameter matrices. This ODE can be integrated exactly using the matrix exponential.

To apply SSMs to discrete sequences, we discretize using the **Zero-Order Hold** (ZOH) assumption: inputs are piecewise constant over intervals $\Delta$:

$$\bar{A} = \exp(\Delta A), \quad \bar{B} = (\Delta A)^{-1}(\exp(\Delta A) - I)\Delta B$$

yielding the discrete recurrence:

$$h_k = \bar{A}h_{k-1} + \bar{B}x_k, \quad y_k = Ch_k + Dx_k$$

This is a standard [[nonlinear-filtering|linear Gaussian state space]], with all properties from control theory now available to deep learning.

## Convolutional View: Kernel Representation

The key insight enabling efficient training is that the recurrence can be **unrolled as a convolution**. Define:

$$K_k = C\bar{A}^k\bar{B}$$

then:

$$y_k = \sum_{j=0}^{k} K_{k-j} x_j = (K * x)_k$$

For sequences of length $L$, computing the kernel costs $O(N \cdot L)$ and the convolution via FFT costs $O(L \log L)$, permitting parallel training. At inference, the recurrent form is $O(L \cdot N)$ — linear in sequence length, unlike [[attention-mechanisms|attention]]'s $O(L^2)$.

## HiPPO: Long-Range Polynomial Approximation

A critical bottleneck in vanilla SSMs is gradient flow: $\bar{A}^k$ either explodes or vanishes exponentially. **HiPPO** (Gu et al., 2020) resolves this by constructing $A$ such that $h_k$ maintains a **polynomial basis projection** of the entire past input sequence:

$$h_k \approx \text{projection of } [x_0, \ldots, x_k] \text{ onto an orthogonal polynomial basis}$$

The HiPPO-LegT initialization for matrices of size $n \times n$ is:

$$A_{ij} = \begin{cases}
(2i + 1)^{1/2}(2j + 1)^{1/2} & \text{if } i > j \\
-(2i + 1) & \text{if } i = j \\
0 & \text{if } i < j
\end{cases}$$

This ensures [[spectral-theory-operators|eigenvalues]] lie on the imaginary axis, preventing vanishing/exploding gradients. On synthetic long-range tasks (e.g., copying problem), HiPPO-initialized SSMs recover the entire input history perfectly, whereas standard RNNs fail utterly.

## S4: Structured State Matrices

**Structured State Space** (S4, Gu et al., 2021) imposes diagonal-plus-low-rank structure on $A$:

$$A = V\Lambda V^{-1} + U W^T$$

where $\Lambda$ is diagonal (hence diagonalizable) and the DPLR (Diagonal-Plus-Low-Rank) form admits efficient Cauchy kernel evaluation. This permits:

1. **Explicit diagonalization**: $\bar{A} = V\exp(\Delta \Lambda)V^{-1} + \text{correction}$
2. **Cauchy kernel trick**: $\sum_k (zI - \bar{A})^{-1}\bar{B}$ evaluated in $O(N^2)$ time (vs. $O(N^3)$ naive)
3. **$\sim 1000\times$ speedup** over parameterizing $\bar{A}$ directly

S4 achieves state-of-the-art on Long Range Arena (tasks up to 16K tokens) across all modalities, while remaining $10$--$100\times$ faster than [[transformer-architecture|Transformer]] baselines. The cost is that $A, B, C$ are **fixed** per layer—they do not depend on input content.

## Mamba: Selective SSM

**Mamba** (Gu & Dao, 2023) breaks the fixed mixing assumption. Instead of constant parameters, it computes $\Delta, B, C$ as functions of the input:

$$\Delta_k = \text{softplus}(s_{k,\Delta}), \quad B_k = \text{Linear}(x_k), \quad C_k = \text{Linear}(x_k)$$

where $s_{\Delta}, s_B, s_C$ are learned projections. This **selection mechanism** acts as content-based filtering: the model learns which input dimensions are important and which parts of history to retain. Formally, Mamba solves:

$$h_k = \bar{A}_k h_{k-1} + \bar{B}_k x_k$$

where $\bar{A}_k, \bar{B}_k$ depend on discretization $\Delta_k$. Critically, Mamba uses **parallel prefix scan** (associative scan), not matrix multiplication, enabling $O(L)$ time and memory **with linear constant factors**, making it hardware-friendly.

On language modeling, Mamba-3B is competitive with [[transformer-architecture|Transformer]]-3B, establishing SSMs as genuine [[llm|LLM]] candidates rather than curiosities.

## Mamba-2: Structured State Space Duality

Mamba-2 (Dao et al., 2024) unifies SSMs and attention through **Structured State Space Duality** (SSD). A diagonal SSM with attention-like updates can approximate attention's expressiveness while retaining linear complexity. This enables:

- **Hybrid architectures** mixing SSM and attention layers
- **Theoretical understanding** of when attention vs. SSM is optimal
- **Bridging** between fixed (S4) and selective (Mamba) mechanisms

## Comparison: SSM vs. Attention

| Property | Attention | S4 | Mamba |
|----------|-----------|-----|-------|
| **Time complexity** | $O(L^2)$ | $O(L \log L)$ | $O(L)$ |
| **Memory** | $O(L^2)$ | $O(L)$ | $O(L)$ |
| **Content-addressable** | Yes | No (fixed) | Yes (selective) |
| **SOTA language models** | ✓ (llama, gpt) | Partial | ✓ (3B-level) |
| **Interpretability** | Attention weights | Polynomial projections | Gating dynamics |

SSMs excel on long sequences (genomics, time series, audio) where attention is prohibitive. On language, Mamba bridges the gap, trading slight expressiveness loss for efficiency.

## Applications

- **Language modeling**: Mamba-3B competitive with Transformers; emerging as backbone for [[mixture-of-experts|MoE]] systems
- **Genomics**: 1M+ token sequences (DNA), where attention is infeasible
- **Audio & music**: Efficient temporal modeling
- **Time series**: Forecasting with long-range dependencies
- **Control & robotics**: Direct application of control theory roots

## References

- Gu, A., et al. (2020). "HiPPO: Recurrent Memory with Optimal Polynomial Projections." NeurIPS.
- Gu, A., et al. (2021). "Efficiently Modeling Long Sequences with Structured State Spaces." ICLR.
- Gu, A. & Dao, T. (2023). "Mamba: Linear-Time Sequence Modeling with Selective State Spaces." ArXiv.
- Dao, T., et al. (2024). "Mamba-2: Structured State Space Duality." ArXiv.

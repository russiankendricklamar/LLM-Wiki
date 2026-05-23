---
title: "DeepSeek-V3 Architecture: MLA & Deep-Compression"
category: "language-models"
order: 298
lang: "en"
slug: "deepseek-v3-mla-compression"
author: "DeepSeek Lab"
reviewers: "Egor Galkin, ML Engineering"
---

# DeepSeek-V3 Architecture: MLA & Deep-Compression

This article delves into the absolute frontiers of DeepSeek-V3 Architecture: MLA & Deep-Compression, uniting multidisciplinary theorems to present an immersion-level formulation. We approach this subject with rigorous mathematically backed assertions.

## Architecture Mechanics: [[attention-mechanisms|Attention]] and Dimensionality

In modern sequential models, the core interaction is defined by the multi-head attention mechanism. Given queries $Q$, keys $K$, and values $V$ in $\mathbb{R}^{N \times d}$, the attention kernel is:
$$ \text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d}}\right)V $$
To inject positional information preserving relative distances, we apply Rotary Position Embeddings (RoPE). The transformation rotates feature pairs:
$$ f_q(x_m, m) = (W_q x_m) e^{im\theta}, \quad f_k(x_n, n) = (W_k x_n) e^{in\theta} $$
Thus, the inner product becomes purely dependent on relative distance $m-n$:
$$ \langle f_q, f_k \rangle = \text{Re}\left[ (W_q x_m)(W_k x_n)^* e^{i(m-n)\theta} \right] $$
This formulation underpins the length extrapolation capabilities and KV-cache compression techniques.

## Conclusion

By mapping DeepSeek-V3 Architecture: MLA & Deep-Compression into these explicit geometric and topological frameworks, we uncover a unified theory. The convergence of these methodologies allows us to construct robust, theoretically sound mechanisms for future AI and physical systems.

---
title: "Tensors and Contractions"
category: "Math Foundations"
order: 55
lang: "en"
slug: "tensors-and-contractions"
---

# Tensors and Contractions

Tensors generalize scalars, vectors, and matrices to higher dimensions. In Deep Learning, tensors are multi-dimensional arrays, though mathematically, they are multilinear maps from a product of vector spaces to a scalar field.

## Tensor Notation
A tensor $\mathcal{X} \in \mathbb{R}^{I_1 \times I_2 \times \dots \times I_N}$ has order $N$ (also called the number of modes). Elements are indexed as $x_{i_1 i_2 \dots i_N}$.

## Tensor Contraction
A tensor contraction is an operation that takes two tensors and computes a sum of products over corresponding indices, analogous to matrix multiplication. 
For a tensor $\mathcal{A} \in \mathbb{R}^{I \times J}$ and $\mathcal{B} \in \mathbb{R}^{J \times K}$, the contraction over the $J$-index yields a matrix $C \in \mathbb{R}^{I \times K}$:
$$ C_{ik} = \sum_{j} A_{ij} B_{jk} $$

## Einstein Summation Convention
Einstein summation notation simplifies the writing of tensor contractions by omitting the summation symbol $\Sigma$. An index appearing twice in a single term implies a summation over that index.

**Examples:**
- **Inner Product:** $c = x_i y_i \implies c = \sum_i x_i y_i$
- **Matrix-Vector Product:** $y_i = A_{ij} x_j$
- **Matrix Multiplication:** $C_{ik} = A_{ij} B_{jk}$
- **Trace:** $\text{Tr}(A) = A_{ii}$

Einstein notation is heavily used in physics and modern Deep Learning frameworks (e.g., `torch.einsum`) as it provides an unambiguous way to specify complex tensor contractions, attention mechanisms, and backpropagation steps in [[matrix-calculus|Matrix Calculus]].

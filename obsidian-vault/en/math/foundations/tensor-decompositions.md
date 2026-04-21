---
title: "Tensor Decompositions"
category: "Foundations"
order: 20
lang: "en"
slug: "tensor-decompositions"
---

# Tensor Decompositions

Tensor decompositions are generalizations of matrix factorizations (like SVD) to higher-dimensional arrays. As Large Language Models become increasingly massive, tensor methods are becoming essential for **model compression**, **speeding up training**, and **interpreting hidden weights**.

## Core Decompositions

### 1. CP Decomposition (CANDECOMP/PARAFAC)
CP decomposition factorizes a tensor into a sum of a minimum number of rank-1 tensors:
$$\mathcal{X} \approx \sum_{r=1}^R a_r \circ b_r \circ c_r$$
It is the direct analog of SVD but, unlike matrices, finding the rank of a tensor is NP-hard.

### 2. Tucker Decomposition
Often called "Higher-Order SVD" (HOSVD). It factorizes a tensor into a **core tensor** and a set of factor matrices:
$$\mathcal{X} = \mathcal{G} \times_1 A \times_2 B \times_3 C$$
It provides a powerful way to compress multidimensional data by reducing the core size while keeping the factor matrices orthogonal.

### 3. Tensor Train (TT) Decomposition
The **Tensor Train** format (Oseledets, 2011) represents a high-dimensional tensor as a product of 3D tensors (cores).
$$\mathcal{X}_{i_1 i_2 \dots i_d} \approx G_1[i_1] G_2[i_2] \dots G_d[i_d]$$
TT avoids the **exponential complexity** of high dimensions, making it possible to store a tensor with $10^{100}$ elements in just a few megabytes.

## Applications in Deep Learning

1.  **Weight Compression**: Representing a giant weight matrix $W \in \mathbb{R}^{M \times N}$ as a product of smaller tensors. This can reduce model size by 10-100x with minimal quality loss.
2.  **Fast Convolutions**: Using CP decomposition to speed up 3D convolutions in vision models.
3.  **Parameter-Efficient Fine-Tuning (PEFT)**: Techniques like **LoRA** are essentially rank-1 tensor updates. Advanced versions use Tucker or TT to update higher-order weights.

## Visualization: Compression Ratio

```chart
{
  "type": "bar",
  "xAxis": "method",
  "data": [
    {"method": "Dense Matrix", "params": 100},
    {"method": "CP Decomposition", "params": 15},
    {"method": "Tucker", "params": 10},
    {"method": "Tensor Train (TT)", "params": 2}
  ],
  "lines": [
    {"dataKey": "params", "stroke": "#ef4444", "name": "Storage Cost (%)"}
  ]
}
```
*Tensor Train is the most effective format for high-dimensional arrays, virtually eliminating the "curse of dimensionality" in storage and computation.*

## Related Topics

[[linear-algebra]] — the 2D foundation  
[[quantization]] — another approach to compression  
[[superposition]] — interpreting weight structures
---

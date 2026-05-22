---
title: Mathematical Error Analysis in Model Quantization
category: AI Theory
order: 50
lang: en
slug: quantization-error-math
---

# Mathematical Error Analysis in Model Quantization

Model quantization reduces the precision of weights and activations from 32-bit floats to lower bit-widths (e.g., 8-bit, 4-bit). The mathematical analysis of this process involves understanding the propagation of quantization noise through deep networks.

## Uniform Quantization

A uniform quantizer maps a real value $x \in [lpha, eta]$ to a discrete set of $2^b$ levels, where $b$ is the bit-width. The scale factor is $\Delta = rac{eta - lpha}{2^b - 1}$. The quantization function is:

$$
Q(x) = \Delta \lfloor rac{x - lpha}{\Delta} ceil + lpha
$$

The quantization error is $e = Q(x) - x$. For large enough $b$ and smooth input distributions, $e$ is modeled as uniform white noise: $e \sim \mathcal{U}(-\Delta/2, \Delta/2)$. 

The variance of the quantization noise is:

$$
	ext{Var}(e) = rac{\Delta^2}{12} \propto rac{(eta - lpha)^2}{4^b}
$$

## Error Propagation in Linear Layers

Consider a linear layer $y = Wx$. Let the quantized weights be $\hat{W} = W + E_W$ and quantized inputs be $\hat{x} = x + e_x$. The output is:

$$
\hat{y} = \hat{W}\hat{x} = Wx + W e_x + E_W x + E_W e_x
$$

Assuming independence and zero mean for $E_W$ and $e_x$, the output error variance for a single neuron is approximated by:

$$
	ext{Var}(\hat{y} - y) pprox \|W\|_2^2 	ext{Var}(e_x) + \|x\|_2^2 	ext{Var}(E_W)
$$

This shows that error amplifies with the $L_2$ norm of the weights. Consequently, weight normalization and outlier clipping are mathematically essential before quantization.

## Stochastic Rounding

In low-precision training, deterministic nearest-neighbor rounding causes gradients to stagnate because updates are smaller than $\Delta$. Stochastic rounding resolves this by ensuring the quantizer is unbiased: $\mathbb{E}[Q(x)] = x$.

For $x \in [q_i, q_{i+1}]$ where $q_i$ are quantization levels:

$$
Q(x) = egin{cases} q_{i+1} & 	ext{with prob } rac{x - q_i}{\Delta} \ q_i & 	ext{with prob } rac{q_{i+1} - x}{\Delta} \end{cases}
$$

This unbiasedness is crucial for convergence in quantized SGD, ensuring that accumulated small gradient updates eventually cross the quantization threshold in expectation.

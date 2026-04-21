---
title: "BitNet & Ternary LLMs"
category: "AI Theory"
order: 17
lang: "en"
slug: "bitnet"
---

# BitNet and Ternary LLMs

## What Is It

**BitNet** and the follow-up **BitNet b1.58** (Microsoft Research, 2024) are a new class of [[llm]] architectures where every parameter is **ternary**, meaning it can only take one of three values: $\{-1, 0, 1\}$.

Unlike traditional LLMs that use 16-bit or 8-bit floating-point numbers (FP16/INT8) for weights, BitNet reduces the precision to just **1.58 bits** ($\log_2 3$ values). This shift moves the computational bottleneck from high-energy **Floating-Point Multiplications** to simple **Integer Additions**, potentially revolutionizing the efficiency of AI hardware.

## Why "1.58 bits"?

While a 1-bit model (Binary) can only store $\{ -1, 1 \}$, a 1.58-bit model adds the value $0$. The inclusion of zero is critical because it allows the model to "filter" information (feature selection), which significantly improves performance compared to pure binary models.

## Architecture: The BitLinear Layer

In a BitNet, the standard Linear layer $y = Wx + b$ is replaced by a **BitLinear** layer.
- **Weights**: Quantized to $\{-1, 0, 1\}$.
- **Activations**: Quantized to 8-bit (INT8) for precision during calculation.
- **Operations**: Since weights are $\{-1, 0, 1\}$, multiplying a weight by an activation $w_i \cdot x_i$ is equivalent to:
    - If $w_i = 1$: $x_i$
    - If $w_i = -1$: $-x_i$
    - If $w_i = 0$: $0$
    
This eliminates the need for expensive matrix multiplication units on chips, relying instead on addition/subtraction.

## Performance vs. Efficiency

The shocking result of the BitNet b1.58 paper is that these models achieve **the same perplexity** as standard FP16 Llama-style models at the same parameter count, but with:
- **70-90% less latency**.
- **Significant energy savings** (multiplication is orders of magnitude more expensive than addition in hardware).
- **Reduced memory footprint** (up to 10x smaller).

## Visualization: Energy Efficiency

```chart
{
  "type": "bar",
  "xAxis": "precision",
  "data": [
    {"precision": "FP16 (standard)", "energy": 100, "performance": 100},
    {"precision": "INT8 (quantized)", "energy": 25, "performance": 98},
    {"precision": "BitNet (1.58-bit)", "energy": 5, "performance": 99}
  ],
  "lines": [
    {"dataKey": "energy", "stroke": "#ef4444", "name": "Energy per Operation (%)"},
    {"dataKey": "performance", "stroke": "#10b981", "name": "Relative Reasoning Score"}
  ]
}
```

## The Future: LPUs and Hardware

Current GPUs (Nvidia A100/H100) are designed for massive floating-point throughput. BitNet is "inefficient" on these chips because the specialized hardware for additions is underutilized compared to Tensor Cores. 

However, BitNet paves the way for new hardware, such as **LPUs (Language Processing Units)** or specialized ASICs, that could run trillion-parameter models on a smartphone or with 100x less power in the cloud.

## Related Topics

[[quantization]] — the field of reducing precision  
[[transformer-architecture]] — the base architecture being modified  
[[neural-scaling-laws]] — why efficiency is the new frontier for scaling

---
title: "Modern Quantization Formats"
category: "LLM Infrastructure"
order: 17
lang: "en"
slug: "modern-quantization"
---

# Modern Quantization: AWQ, GGUF, and FP8

As Large Language Models grow, standard INT8 quantization is often not enough. Modern deployment requires formats that balance aggressive compression with the preservation of complex reasoning capabilities.

## 1. AWQ (Activation-aware Weight Quantization)

Standard quantization treats all weights equally. **AWQ** (Lin et al., 2023) realizes that not all weights are important.
- **The Insight**: Some weights (corresponding to "salient" activations) are critical for the model's performance.
- **The Method**: Instead of quantizing everything blindly, AWQ scales the important weights to protect them from quantization noise. This allows for **4-bit quantization** that matches or exceeds the performance of 8-bit models.

## 2. GGUF (GPT-Generated Unified Format)

Developed by the `llama.cpp` community, **GGUF** is the successor to GGML. It is designed for **CPU/Apple Silicon inference**.
- **Extensibility**: It allows adding new metadata (architecture, version) without breaking compatibility.
- **Quantization Methods**: Supports k-quants (e.g., Q4_K_M, Q5_K_S), which use different bit-widths for different layers to optimize the accuracy-size trade-off.

## 3. FP8 (8-bit Floating Point)

FP8 is the new industry standard introduced with the **Nvidia Hopper (H100)** architecture.
- **E4M3 vs E5M2**: It offers two variants. One with more precision (mantissa) for weights, and one with more dynamic range (exponent) for gradients/activations.
- **Native Hardware Support**: Unlike INT4, FP8 is natively supported by modern Tensor Cores, allowing for 2x faster training and inference without the complicated de-quantization steps required by integer formats.

## Visualization: The "Efficient Frontier"

```chart
{
  "type": "scatter",
  "xAxis": "size_gb",
  "data": [
    {"size_gb": 14.0, "accuracy": 99.9, "label": "FP16 (Base)"},
    {"size_gb": 8.0,  "accuracy": 99.5, "label": "FP8 (SOTA)"},
    {"size_gb": 7.2,  "accuracy": 99.2, "label": "INT8"},
    {"size_gb": 4.5,  "accuracy": 97.5, "label": "AWQ 4-bit"},
    {"size_gb": 3.8,  "accuracy": 94.0, "label": "GGUF Q4_K"}
  ],
  "lines": [
    {"dataKey": "accuracy", "stroke": "#10b981", "name": "Accuracy-Size Frontier"}
  ]
}
```
*Modern formats like AWQ and FP8 allow models to stay near the "ideal" accuracy of FP16 while occupying 2-4x less memory.*

## Related Topics

[[quantization]] — the fundamental principles  
[[inference-serving]] — why deployment formats matter  
[[bitnet]] — the logical conclusion (1.58-bit)
---

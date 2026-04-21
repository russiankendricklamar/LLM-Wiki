---
title: "Modern Quantization"
category: "LLM Infrastructure"
order: 20
lang: "en"
slug: "modern-quantization"
---

# Modern Quantization: NF4, GPTQ, and AWQ

Quantization is the process of reducing the precision of neural network weights (e.g., from 16-bit to 4-bit) to save VRAM and increase speed. Without modern quantization, running a 70B parameter model would require a server rack; with it, it fits on a single consumer GPU.

## 1. The Challenge of Low Precision

When you round a weight from `0.123456` to `0.1`, you introduce **Quantization Error**. In a deep model, these errors accumulate across 80+ layers, causing the model's intelligence to collapse. Modern techniques minimize this error using smart statistical priors.

## 2. NormalFloat4 (NF4): Quantization for All

Used in **bitsandbytes** (QLoRA), NF4 is a non-linear data type based on the fact that neural network weights usually follow a **Normal (Gaussian) Distribution**.
- Instead of spacing quantization levels evenly (0, 1, 2, 3), NF4 places more levels near zero, where most weights reside.
- This results in much higher information density than standard 4-bit integers.

## 3. GPTQ: Post-Training Quantization (PTQ)

GPTQ treats quantization as an **Inversion Problem**.
For each layer, it finds a set of 4-bit weights that produce the *exact same output* as the original 16-bit weights for a given set of calibration data.
- It uses the **Hessian** of the loss function to decide which weights can be rounded crudely and which must remain precise.
- **Result**: Models quantized with GPTQ lose almost zero accuracy compared to the original FP16.

## 4. AWQ: Activation-aware Quantization

AWQ discovered that not all weights are equal. About **1% of weights** (the "Salient Weights") are responsible for most of the model's intelligence.
- **Mechanism**: AWQ identifies these weights by looking at the activations during inference. It then applies a per-channel scaling to protect these important weights from being rounded too aggressively.
- AWQ is generally faster for inference than GPTQ because it doesn't require a complex decompression step.

## 5. FP8 and the Future

Nvidia's **Hopper (H100)** architecture introduces native hardware support for **FP8** (8-bit floating point).
- Unlike 4-bit quantization, FP8 allows for **Training** in low precision, not just inference. 
- This halves the memory and energy required for the next generation of foundation models.

## Visualization: Distribution-Aware Binning

```chart
{
  "type": "bar",
  "xAxis": "bin",
  "data": [
    {"bin": "-2.0", "normal_density": 0.05, "nf4_levels": 1},
    {"bin": "-1.0", "normal_density": 0.20, "nf4_levels": 2},
    {"bin": "0.0",  "normal_density": 0.50, "nf4_levels": 10},
    {"bin": "1.0",  "normal_density": 0.20, "nf4_levels": 2},
    {"bin": "2.0",  "normal_density": 0.05, "nf4_levels": 1}
  ],
  "lines": [
    {"dataKey": "nf4_levels", "stroke": "#10b981", "name": "Precision (NF4)"}
  ]
}
```
*NF4 allocates the most precision (bins) to the center of the Gaussian weight distribution, where the "knowledge" of the model is most concentrated.*

## Related Topics

[[llm-infra/training/fine-tuning]] — QLoRA context  
[[gpu-architecture]] — how hardware supports these formats  
[[inference-serving]] — why quantization is necessary for throughput
---

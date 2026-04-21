---
title: "Quantization-Aware Training (QAT)"
category: "LLM Infrastructure"
order: 23
lang: "en"
slug: "qat"
---

# Quantization-Aware Training (QAT)

Quantization-Aware Training (QAT) is a method where a model is trained or fine-tuned with the effects of quantization simulated during the forward pass. This allows the model to "adapt" to the low-precision representation (like 4-bit or 8-bit), resulting in much higher accuracy compared to Post-Training Quantization (PTQ).

## PTQ vs. QAT

- **PTQ (Post-Training)**: You take a pre-trained FP16 model and squish its weights to 4-bit. This often introduces "quantization noise" that can break complex reasoning.
- **QAT (Aware Training)**: During training, the model "sees" the errors caused by rounding. It adjusts its weights so that the final low-precision version is optimal.

## The Challenge: Non-differentiability

Quantization (rounding) is a step function. Its derivative is zero almost everywhere and undefined at the step, which makes standard backpropagation impossible. 

### The Solution: Straight-Through Estimator (STE)
To solve this, we use the **STE**. During the forward pass, we round the weights:
$$w_{quant} = \text{round}(w / \Delta) \cdot \Delta$$
During the backward pass, we **pretend the rounding never happened** and pass the gradient through as if it were a linear function ($f(x)=x$):
$$\frac{\partial L}{\partial w} \approx \frac{\partial L}{\partial w_{quant}}$$

## Why QAT is the Future of Edge AI

1.  **Lower Precision**: QAT makes **2-bit and 3-bit** models viable, which would completely collapse under PTQ.
2.  **Specialized Hardware**: Models trained with QAT can be deployed on specialized NPU chips (like in phones or cars) that don't even support floating-point math.
3.  **BitNet Connection**: Models like [[bitnet|BitNet 1.58b]] are essentially the extreme limit of QAT, where the model is born and raised in a ternary world.

## Visualization: Accuracy Recovery

```chart
{
  "type": "line",
  "xAxis": "bits",
  "data": [
    {"bits": 16, "ptq": 99, "qat": 99},
    {"bits": 8,  "ptq": 98.5, "qat": 98.9},
    {"bits": 4,  "ptq": 92.0, "qat": 97.5},
    {"bits": 2,  "ptq": 30.0, "qat": 88.0}
  ],
  "lines": [
    {"dataKey": "ptq", "stroke": "#ef4444", "name": "Post-Training (PTQ)"},
    {"dataKey": "qat", "stroke": "#10b981", "name": "Quantization-Aware (QAT)"}
  ]
}
```
*QAT significantly closes the gap between full precision and compressed models, especially at ultra-low bit-widths (2-4 bits).*

## Related Topics

[[quantization]] — the base concept  
[[modern-quantization]] — PTQ formats like AWQ  
[[bitnet]] — ternary models (QAT taken to the limit)
---

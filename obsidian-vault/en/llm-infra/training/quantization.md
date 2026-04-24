---
title: "Model Quantization"
category: "LLM Infrastructure"
order: 7
lang: "en"
slug: "quantization"
growth: "seedling"
---

Quantization reduces the memory footprint and computational cost of [[llm|large language models]] by representing weights and activations in lower bit-width integer formats. The core trade-off is accepting small accuracy degradation to enable inference on consumer GPUs and mobile devices. A 7B parameter model occupies 14 GB in FP16 precision; quantizing to INT4 reduces this to 3.5 GB—a 4× reduction that makes on-device inference tractable.

## Absmax Quantization

The simplest quantization scheme maps real numbers $x \in [-127, 127]$ for INT8:

$$S = \frac{\max |x|}{127}$$

$$x_q = \text{round}\left(\frac{x}{S}\right)$$

$$\hat{x} = S \cdot x_q$$

where $S$ is the scale factor, $x_q$ is the quantized integer, and $\hat{x}$ is the dequantized approximation. The error is bounded by $|\hat{x} - x| \leq \frac{S}{2}$. Absmax quantization is **symmetric** (ranges are centered at zero) and **uniform** (quantization levels are evenly spaced). For INT4, the same formula applies with $S = \frac{\max |x|}{7}$.

## Weight vs. Activation Quantization

**Weight quantization** is applied post-training and remains static. The scale factors $S_w$ are computed once per layer (or per channel) and stored alongside quantized weights. Since weights do not vary per input, this is computationally cheap.

**Activation quantization** is dynamic: scale factors $S_a$ depend on input statistics and must be recomputed at inference time. A batch of tokens may have different activation ranges than another batch, complicating low-precision formats. In practice, INT8 activations are common, while INT4 activations remain rare due to noise amplification through successive layers.

## Post-Training Quantization: GPTQ

GPTQ (Gradient Quantization) quantizes weights to INT4 without retraining. The key insight is **second-order optimization**: rather than naively rounding weights to the nearest quantization level, GPTQ minimizes layer-wise reconstruction error using the inverse [[transformer-architecture|Hessian]] matrix.

For a layer with weight matrix $W$ and activations $X$, the output is $Y = WX$. Quantization introduces error $\Delta Y = \Delta W \cdot X$. GPTQ solves for each row $w_i$ of $W$:

$$w_i^* = \arg\min_{w_i^q} \|W^q X - WX\|_F^2$$

where $W^q$ is the partially quantized weight matrix. Using the Hessian approximation $H = XX^T$, this reduces to a scalar optimization per weight. Each layer is quantized independently and sequentially, which makes the algorithm efficient and enables single-[[inference-serving|GPU]] quantization of even 70B models.

The typical workflow: (1) load the model and a small calibration set (~100 samples); (2) quantize layer-by-layer, solving for optimal per-channel scales; (3) output quantized model in a format like GGUF. Perplexity degradation from FP16 to GPTQ INT4 is typically 1–3 points on standard benchmarks.

## Activation-Aware Weight Quantization: AWQ

Not all weights are equally important. AWQ observes that a small fraction of weights—those with large **activation scales**—account for most model expressiveness. By protecting these salient weights from aggressive quantization, AWQ achieves INT4 quality competitive with INT8 naive quantization.

The activation scale for weight $w_j$ is:

$$\alpha_j = \max_i |a_i[j]|$$

where $a_i[j]$ is the activation of the $i$-th token at dimension $j$. AWQ sorts weights by $\alpha_j$ and applies mixed-precision quantization: high-$\alpha$ weights stay in INT8 or remain at higher precision, while low-$\alpha$ weights are aggressively quantized to INT4 or INT2. This typically protects 10–100× fewer weights than the naive approach while maintaining accuracy.

## NF4: 4-Bit Normal Float

Standard INT4 uses uniform quantization: 16 equally-spaced levels. **NF4** is a 4-bit floating-point format optimized for normally-distributed weights (which is typical in initialized neural networks). Instead of linear spacing, NF4 uses **equal quantile spacing**:

$$\text{Quantiles: } \left\{ Q_k \mid \Phi^{-1}\left(\frac{k}{16}\right) \right\}_{k=0}^{15}$$

where $\Phi^{-1}$ is the inverse standard normal CDF. This allocates more precision to the center of the weight distribution (where most weights cluster) and coarser precision to the tails. NF4 is the default format in [[fine-tuning|QLoRA]], where adapter weights are trained in FP32 while the base model remains frozen in NF4.

## GGUF Format and Local Inference

GGUF (formerly GGML) is a file format widely adopted by **llama.cpp** for efficient local inference. It supports mixed-precision per-layer or per-tensor quantization profiles:

- **Q4_K_M** (medium): 4-bit weights with learned per-channel scales; ~4.6 bits effective; typical for balanced quality/speed
- **Q5_K_M** (medium): 5-bit weights; ~5.6 bits effective; higher quality than Q4
- **Q8_0** (8-bit): per-block INT8; negligible loss; used for performance-critical layers

A GGUF file specifies the quantization profile in the tensor metadata, enabling heterogeneous precision: critical [[attention-mechanisms|attention]] layers remain at Q8, while feed-forward layers drop to Q4. This granular control is why GGUF became the de facto standard for consumer GPU and CPU inference.

## Memory Footprint Calculations

For a 7B parameter model in different formats:

| Format | Bits/param | Total size | Reduction |
|--------|-----------|-----------|-----------|
| FP32 | 32 | 28 GB | — |
| FP16 | 16 | 14 GB | 2× |
| INT8 | 8 | 7 GB | 4× |
| INT4 | 4 | 3.5 GB | 8× |
| INT2 | 2 | 1.75 GB | 16× |

With INT8 quantization, a 7B model fits in a 16 GB VRAM GPU with room for KV cache (roughly $2 \cdot \text{seq\_len} \cdot 7B \cdot 2 \text{ bytes}$ per sequence). At INT4, even 13B models fit in consumer GPUs.

## Accuracy Trade-offs

Perplexity degradation (evaluated on WikiText) increases sharply as precision drops. This nonlinearity reflects the **signal-to-noise ratio**: with fewer bits, weight initialization variance and rounding error become significant relative to weight magnitudes. 

```chart
{
  "type": "line",
  "xAxis": "bits",
  "data": [
    {"bits": 16, "accuracy": 99.9, "error": 0.1},
    {"bits": 8, "accuracy": 99.5, "error": 0.5},
    {"bits": 6, "accuracy": 98.8, "error": 1.2},
    {"bits": 4, "accuracy": 96.5, "error": 3.5},
    {"bits": 3, "accuracy": 85.0, "error": 15.0},
    {"bits": 2, "accuracy": 40.0, "error": 60.0},
    {"bits": 1.58, "accuracy": 94.0, "error": 6.0}
  ],
  "lines": [
    {"dataKey": "accuracy", "stroke": "#10b981", "name": "Model Accuracy (%)"},
    {"dataKey": "error", "stroke": "#ef4444", "name": "Perplexity Increase (%)"}
  ]
}
```
*Note: BitNet (1.58-bit) is an outlier because it is trained from scratch with quantization in mind, unlike post-training quantization methods which collapse at such low precision.*


## Integration with Inference Pipelines

Quantized models are commonly used in conjunction with [[speculative-decoding]], where a small INT4 draft model generates candidate tokens in parallel, and a full-precision (or less-aggressive INT8) target model verifies and corrects them. This combination reduces end-to-end latency while maintaining quality.

For [[mixture-of-experts|mixture-of-experts]] [[llm|models]], quantization can be applied selectively: expert layers (which are sparsely activated) remain at higher precision, while shared attention and routing logic are aggressively quantized.

## See Also

- [[transformer-architecture|Transformer Architecture]]
- [[neural-scaling-laws|Neural Scaling Laws]]
- [[fine-tuning|Fine-Tuning]] (QLoRA uses NF4)
- [[speculative-decoding|Speculative Decoding]]

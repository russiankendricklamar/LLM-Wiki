---
title: "LLM Fine-Tuning"
category: "LLM Infrastructure"
order: 6
lang: "en"
slug: "fine-tuning"
growth: "seedling"
---

Fine-tuning adapts a pretrained language model to a specialized domain or style by training further on target data. Unlike zero-shot prompting, fine-tuning updates model parameters, capturing the statistics of the target distribution. The core tradeoff is between compute cost, risk of catastrophic forgetting, and dataset size. Modern techniques like [[quantization|LoRA]] and QLoRA have made fine-tuning tractable on consumer hardware.

## Full Fine-Tuning

Full fine-tuning updates all parameters of a model on target data. For a model with $N$ parameters:

- Gradient computation: $O(N)$ FLOPs per token
- Gradient storage: $O(N)$ memory
- Optimization: stochastic [[convex-optimization|gradient descent]] or Adam with momentum

Full fine-tuning has compute cost comparable to pretraining and is employed when target datasets are large and high-value (e.g., proprietary corpora). A critical hazard is **catastrophic forgetting**: the model degrades on pretraining knowledge when the target distribution diverges sharply or the dataset is small. Mitigation uses low learning rates ($10^{-5}$ or below) and early stopping on a held-out validation set.

## Supervised Fine-Tuning (SFT)

SFT structures fine-tuning as training on (instruction, response) pairs. Data is formatted as:

$$\text{loss} = -\sum_{t} \log p_\theta(y_t \mid y_{<t}, x)$$

where $x$ is the prompt and $y_t$ are response tokens. Critically, loss is computed **only on response tokens**, not the prompt, to avoid overwriting instruction-following ability.

SFT yields sharp gains in instruction-following without expensive [[rlhf|RLHF]]. Success hinges on data quality and diversity: 10k high-quality examples outperform 1M low-quality ones. In practice, SFT commonly precedes [[rlhf]], aligning model behavior before reinforcement learning from human feedback.

## LoRA: Low-Rank Adaptation

LoRA freezes pretrained weights $W \in \mathbb{R}^{d \times k}$ and adds a low-rank update:

$$\Delta W = BA, \quad A \in \mathbb{R}^{r \times k}, \quad B \in \mathbb{R}^{d \times r}, \quad r \ll \min(d, k)$$

The forward pass becomes:

$$h = (W + BA)x = Wx + B(Ax)$$

Only $A$ and $B$ are trained; frozen weights $W$ accumulate no gradients. In practice:

- Initialize $A \sim \mathcal{N}(0, 0.01)$, $B = 0$, so $\Delta W = 0$ at the start
- Scale output: $h = Wx + \frac{\alpha}{r}(BA)x$, where $\alpha$ is a hyperparameter (typically 16)
- Use $r = 8$ or $16$ for most layers

**Parameter reduction:** full fine-tuning needs $d \cdot k$ trainable parameters per layer. LoRA uses $d \cdot r + r \cdot k$ trainable parameters. For $d = k = 4096$ and $r = 8$:

$$\text{Reduction} = \frac{d \cdot k}{d \cdot r + r \cdot k} = \frac{4096 \cdot 4096}{4096 \cdot 8 + 8 \cdot 4096} = \frac{16\text{M}}{65\text{k}} \approx 244\times$$

The hypothesis underlying LoRA: weight updates during task adaptation reside in a low-dimensional subspace. Empirical validation confirms this; even $r = 1$ is sometimes viable, though $r = 8$–$16$ is standard.

LoRA is typically applied to [[attention-mechanisms|attention]] projection matrices ($W_Q, W_K, W_V, W_O$) and optionally to dense layers. Quick calculation: a 13B model with full LoRA requires $\sim 100$M trainable parameters instead of 13B.

## QLoRA: Quantized LoRA

QLoRA extends LoRA by [[quantization|quantizing]] the frozen backbone to 4-bit NF4 (Normal Float 4) while keeping LoRA adapters in bf16:

1. Load pretrained weights in NF4: $W_{\text{frozen}} \in \text{NF4}^{d \times k}$
2. Train adapters: $A, B \in \text{bf16}$
3. Forward pass: decompress needed weight blocks on-the-fly

Advantage: fit a 65B model into a 48GB [[inference-serving|GPU]] (e.g., A100). LLaMA-65B ordinarily requires $130$GB for full bf16 fine-tuning; in NF4 it occupies $\sim 32$GB plus $\sim 4$GB for adapters.

[[quantization]] fidelity (NF4 vs. INT8 vs. INT4) trades precision against memory. In practice, NF4 with proper calibration incurs minimal quality loss.

## Instruction Tuning vs. [[rlhf]]

**Instruction tuning** is SFT on datasets of (instruction, high-quality response) pairs, often manually curated. This awakens instruction-following ability already latent in the pretrained model, without the overhead of [[rlhf|RLHF]].

**RLHF** adds a reinforcement learning stage where the model optimizes against a reward model trained on human preferences. RLHF is costlier and requires careful tuning, but can improve alignment beyond SFT alone.

In practice: plain instruction tuning often suffices and offers better quality-to-cost ratio.

## PEFT: Parameter-Efficient Fine-Tuning

PEFT is an umbrella for all methods training a minority of parameters:

- **LoRA**: low-rank adapters to weight matrices (above)
- **Prefix Tuning**: appends a learnable prefix to the hidden states of each [[transformer-architecture|transformer]] layer
- **Adapter Layers**: inserts small dense modules between layers
- **Prompt Tuning**: optimizes continuous embeddings (soft tokens) in the prompt

LoRA dominates in practice due to simplicity and throughput. Other methods (adapters, prefix tuning) require architectural changes or introduce more hyperparameters.

## When to Fine-Tune

**Fine-tune if:**
- Target domain is far from pretraining (specialized terminology, format)
- A specific style or tone is essential
- Latency is critical (fine-tuned model beats prompting + retrieval)
- Dataset is substantial ($\geq 1000$ examples, ideally $10k+$)

**Prompting / [[rag]] if:**
- Data is heterogeneous or changes frequently
- Knowledge exists outside the model (internal documents, proprietary facts)
- Resources for fine-tuning are unavailable
- Task is broad and does not warrant retraining

In practice, a hybrid works well: [[rag]] for knowledge synthesis + light LoRA fine-tuning for style.

## Practical Guidelines

1. **Data**: remove duplicates, validate annotation quality, use stratified train/val split
2. **Learning rate**: start with $5 \times 10^{-4}$ for LoRA, $10^{-5}$ for full fine-tuning
3. **Epochs**: 1–3 epochs usually suffice (red flag: validation loss worsens after epoch 1)
4. **LoRA rank**: default $r = 8$ or $16$; go lower ($r = 4$) if memory is tight, higher ($r = 32$) if dataset is very large
5. **Monitoring**: track validation perplexity at fixed intervals; use early stopping

Fine-tuning is a powerful tool for alignment and specialization. LoRA made it accessible; QLoRA democratized it.

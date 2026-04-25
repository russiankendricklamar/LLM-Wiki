---
title: "Large Language Models (LLMs)"
category: "Language Models"
order: 1
lang: "en"
slug: "llm"
---

# Large Language Models (LLMs)

## What Is It

A large language model is a neural network trained on text at a scale where qualitatively new capabilities emerge that are absent in smaller models. "Large" is a moving target — it describes a regime, not a fixed parameter count — but the defining properties are threefold: billions of parameters, training on hundreds of billions to trillions of tokens, and a compute budget in the range of $10^{22}$–$10^{25}$ FLOPs.

What makes scale consequential is the phenomenon of **emergent abilities**: capabilities that appear abruptly at certain scales and are essentially absent below a threshold. These include in-context learning (performing a task from a few examples in the prompt without gradient updates), multi-step chain-of-thought reasoning, instruction following, and code synthesis. None of these are explicitly optimized for — they arise from the single objective of predicting the next token.

## Visualization

```chart
{
  "type": "line",
  "xAxis": "params_B",
  "data": [
    {"params_B": 0.1, "loss": 3.92},
    {"params_B": 0.3, "loss": 3.61},
    {"params_B": 1, "loss": 3.27},
    {"params_B": 3, "loss": 3.02},
    {"params_B": 7, "loss": 2.84},
    {"params_B": 13, "loss": 2.71},
    {"params_B": 30, "loss": 2.58},
    {"params_B": 70, "loss": 2.47},
    {"params_B": 175, "loss": 2.36},
    {"params_B": 540, "loss": 2.24},
    {"params_B": 1000, "loss": 2.17}
  ],
  "lines": [
    {"dataKey": "loss", "stroke": "#3b82f6", "name": "Validation loss (Chinchilla-optimal)"}
  ]
}
```

## Architecture

Modern LLMs are built on the **decoder-only [[transformer-architecture|transformer]]**, a stack of $L$ identical blocks each containing:

1. **Masked multi-head self-[[attention-mechanisms|attention]]** — each token attends only to tokens at earlier positions (causal mask).
2. **Feed-forward network (FFN)** — a two-layer [[transformer-architecture|MLP]] with a nonlinearity, typically SwiGLU: $\text{FFN}(x) = (\text{SiLU}(xW_1) \odot xW_3) W_2$.
3. **Layer normalization** — applied before each sub-layer (pre-norm), with RMSNorm increasingly preferred over LayerNorm.
4. **Residual connections** — standard around both sub-layers.

**Positional encoding** has moved from absolute sinusoidal embeddings to learnable relative encodings. The dominant approach is **Rotary Position Embedding (RoPE)**, which encodes position by rotating query and key vectors:

$$q_m = R_m q, \quad k_n = R_n k$$

where $R_\theta$ is a block-diagonal rotation matrix. RoPE enables the model to generalize to context lengths beyond those seen during training. ALiBi ([[attention-mechanisms|Attention]] with Linear Biases) is an alternative that subtracts a linear bias proportional to distance directly in the attention logits.

**Grouped Query Attention (GQA)** reduces the key-value cache footprint: multiple query heads share a single key-value head, reducing memory bandwidth by a factor equal to the number of groups.

## Mathematical Framework

The attention mechanism at the heart of every [[transformer-architecture|transformer]] block:

$$\text{Attention}(Q, K, V) = \text{softmax}\!\left(\frac{QK^T}{\sqrt{d_k}}\right) V$$

where $Q = XW_Q$, $K = XW_K$, $V = XW_V \in \mathbb{R}^{n \times d_k}$ and $\sqrt{d_k}$ prevents the dot products from growing into saturation regions of softmax.

Multi-head attention runs $H$ attention heads in parallel:

$$\text{MHA}(X) = \text{Concat}(\text{head}_1, \ldots, \text{head}_H) W_O$$

**Pre-training objective** — next-token prediction via maximum likelihood over a sequence $x_1, \ldots, x_T$:

$$\mathcal{L}_{\text{LM}} = -\sum_{t=1}^{T} \log p_\theta(x_t \mid x_{<t})$$

**Chinchilla scaling law** (Hoffmann et al., 2022) — optimal token count given a compute budget $C$ scales as $D^* \approx C^{0.5}$, or equivalently the number of tokens should be roughly 20× the number of parameters:

$$N^* \approx \frac{D^*}{20}, \quad \mathcal{L}(N, D) \approx E + \frac{A}{N^\alpha} + \frac{B}{D^\beta}$$

## Training Paradigm

LLM training proceeds in three stages:

**1. Pre-training.** Autoregressive next-token prediction on a large, diverse text corpus (web crawl, books, code, scientific papers). This phase consumes the bulk of compute. Mixed-precision training with BF16 weights and FP32 master weights is standard. Gradient clipping and careful learning rate scheduling (warmup + cosine decay) are essential for stability.

**2. Supervised [[fine-tuning]] (SFT).** The pre-trained model is fine-tuned on a curated dataset of (instruction, response) pairs. This shapes the model's output format and tone, teaching it to follow instructions.

**3. Alignment via [[rlhf]] or [[dpo]].** Reinforcement Learning from Human Feedback trains a reward model on human preference rankings, then uses PPO to maximize reward. Direct Preference Optimization ([[dpo]]) eliminates the separate reward model by reparameterizing the RL objective as a classification loss directly on preference pairs:

$$\mathcal{L}_{\text{DPO}} = -\mathbb{E}\!\left[\log \sigma\!\left(\beta \log \frac{\pi_\theta(y_w \mid x)}{\pi_{\text{ref}}(y_w \mid x)} - \beta \log \frac{\pi_\theta(y_l \mid x)}{\pi_{\text{ref}}(y_l \mid x)}\right)\right]$$

## Key Properties & Capabilities

- **In-context learning**: adapts to new tasks from a handful of examples in the prompt without weight updates.
- **Chain-of-thought reasoning**: produces intermediate reasoning steps when prompted, dramatically improving multi-step problem performance.
- **Instruction following**: generalizes to novel instructions not seen during SFT.
- **Autoregressive generation**: produces text one token at a time; the KV cache stores past key-value pairs to avoid recomputation.
- **Context window**: from 2K tokens (GPT-2 era) to 128K–1M+ tokens in current models, enabled by efficient attention variants (FlashAttention, ring attention) and positional encoding extrapolation.
- **Knowledge**: encodes world knowledge from pre-training data into weights; this knowledge has a training cutoff and can hallucinate.

## Trade-offs vs Other Types

| Dimension | LLM | SLM | MoE LLM |
|---|---|---|---|
| Parameter count | 7B–700B+ | 0.5B–7B | 8×7B style (sparse) |
| FLOP per token | High | Low | Moderate (only active experts) |
| Latency | High | Low | Moderate |
| Deployment | Cloud/data center | Edge/on-device | Distributed |
| Reasoning depth | Strong | Moderate | Strong |
| Cost per token | High | Low | Moderate |

## Python Usage Pattern

```python
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

model_id = "meta-llama/Llama-3.1-8B-Instruct"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.bfloat16,
    device_map="auto",
)

messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Explain attention in transformers."},
]

input_ids = tokenizer.apply_chat_template(
    messages,
    add_generation_prompt=True,
    return_tensors="pt",
).to(model.device)

with torch.no_grad():
    output_ids = model.generate(
        input_ids,
        max_new_tokens=512,
        temperature=0.7,
        do_sample=True,
    )

response = tokenizer.decode(
    output_ids[0][input_ids.shape[-1]:],
    skip_special_tokens=True,
)
print(response)
```

## Limitations

- **Hallucination**: the model confidently generates plausible but false information because the pre-training objective rewards fluency, not factual accuracy.
- **Reasoning gaps**: multi-step arithmetic and formal logical deduction remain brittle without chain-of-thought scaffolding or tool use.
- **Context compression**: as context length grows, models lose track of information in the middle of long contexts ("lost in the middle" phenomenon).
- **Static knowledge**: weights encode a snapshot of the world at training time; the model has no intrinsic mechanism to update or verify beliefs.
- **Compute cost**: inference scales linearly with output tokens; the KV cache scales with context length × batch size, creating memory bottlenecks.
- **Prompt sensitivity**: output quality and behavior can vary significantly with small changes in prompt wording.

## Related Topics

[[slm]] — small language models, the efficient counterpart  
[[reasoning-models]] — models capable of multi-step chain-of-thought (e.g., OpenAI o1)  
[[prm]] — Process Reward Models for fine-grained supervision  
[[dpo]] — Direct Preference Optimization for alignment  
[[preference-optimization|KTO]] — Kahneman-Tversky Optimization (KTO) for simpler alignment  
[[model-merging]] — combining multiple models without training  
[[mixture-of-experts]] — sparse routing as a scale multiplier  
[[embedding-models]] — models that map text to vectors rather than generating tokens  
[[neural-scaling-laws]] — the mathematical framework predicting LLM behavior at scale  
[[mechanistic-interpretability]] — understanding what LLMs learn internally

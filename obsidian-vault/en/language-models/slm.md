---
title: "Small Language Models (SLMs)"
category: "Language Models"
order: 2
lang: "en"
slug: "slm"
---

# Small Language Models (SLMs)

## Prerequisites

[[llm]]

## What Is It

A small language model occupies the regime below approximately 7 billion parameters — typically 0.5B to 7B — where the model can run inference on consumer hardware, mobile devices, or at the edge without requiring a data center. The boundary is not fixed; it shifts as hardware improves. What defines an SLM is not a parameter count but a set of deployment constraints: it must be fast enough for interactive use on a laptop or phone, small enough to fit in memory without specialized infrastructure, and economical enough for individual developers to run.

The central question for SLMs is how to get as much capability as possible out of a small parameter budget. The answer involves rethinking the entire pipeline: what data the model trains on, how it is distilled from larger models, how [[attention-mechanisms|attention]] is made efficient, and how weights are compressed.

## Visualization

```chart
{
  "type": "scatter",
  "xAxis": "params_B",
  "data": [
    {"params_B": 0.5, "mmlu": 43.2, "model": "Phi-1.5"},
    {"params_B": 1.3, "mmlu": 56.1, "model": "Phi-1"},
    {"params_B": 2.7, "mmlu": 59.3, "model": "Phi-2"},
    {"params_B": 3.8, "mmlu": 69.9, "model": "Phi-3-mini"},
    {"params_B": 7, "mmlu": 68.4, "model": "Llama-3.2-7B"},
    {"params_B": 7, "mmlu": 71.9, "model": "Mistral-7B"},
    {"params_B": 7, "mmlu": 74.3, "model": "Qwen2.5-7B"},
    {"params_B": 1.5, "mmlu": 66.5, "model": "Qwen2.5-1.5B"},
    {"params_B": 3, "mmlu": 65.6, "model": "Gemma-2-2B"}
  ],
  "lines": [
    {"dataKey": "mmlu", "stroke": "#10b981", "name": "MMLU score (%)"}
  ]
}
```

## Architecture

SLMs use the same decoder-only [[transformer-architecture|transformer]] backbone as LLMs but with architectural modifications that reduce memory and compute:

**Grouped Query Attention (GQA)**: instead of $H$ independent key-value heads for $H$ query heads, GQA uses $G < H$ shared key-value heads. Each group of $H/G$ query heads shares one KV head, cutting the KV cache size by $H/G$ and reducing memory bandwidth proportionally.

**Sliding Window Attention (SWA)**: tokens attend only within a window of $w$ past tokens rather than the full context, reducing attention complexity from $O(n^2)$ to $O(nw)$. Long-range context is handled by having higher layers see earlier content through the residual stream.

**Tied embeddings**: the input embedding matrix and the output projection (unembedding) matrix share weights. This halves the parameter count of the embedding table, which can be a substantial fraction of total parameters in small models with large vocabularies.

**Smaller hidden dimensions with more layers vs. fewer layers**: SLMs often use narrower hidden dimensions relative to depth compared to large models, prioritizing parameter efficiency over raw capacity.

## Mathematical Framework

**Knowledge distillation** transfers the learned distributions of a large teacher model to a smaller student. The student minimizes a combination of the ground-truth cross-[[shannon-entropy|entropy]] and the KL divergence from the teacher's soft probability distribution:

$$\mathcal{L}_{KD} = \alpha \mathcal{L}_{CE}(y, p_{\text{student}}) + (1 - \alpha) \cdot T^2 \cdot \mathcal{L}_{KL}\!\left(\frac{p_{\text{teacher}}}{T} \,\Big\|\, \frac{p_{\text{student}}}{T}\right)$$

where $T > 1$ is the temperature that softens both distributions, making the student learn from the full probability vector rather than just the argmax. The $T^2$ factor corrects for the rescaling of gradients that temperature introduces.

**LoRA [[fine-tuning]]** adapts a pre-trained weight matrix $W_0 \in \mathbb{R}^{d \times k}$ by learning a low-rank residual:

$$W = W_0 + \Delta W = W_0 + BA$$

where $B \in \mathbb{R}^{d \times r}$, $A \in \mathbb{R}^{r \times k}$, and $r \ll \min(d, k)$. Only $A$ and $B$ are updated during fine-tuning; $W_0$ is frozen. The total additional parameters are $r(d + k)$, typically 0.1–1% of the original weight count.

**QLoRA** extends LoRA by loading $W_0$ in 4-bit NormalFloat (NF4) [[quantization]], reducing the [[inference-serving|GPU]] memory required to fine-tune a large base model from which the small model is distilled.

## Training Paradigm

SLMs achieve competitive quality through data quality rather than data quantity. The "textbooks are all you need" insight (Phi series, Microsoft) showed that training a 1.3B model on filtered, high-quality synthetic educational text can match the reasoning performance of much larger models trained on raw web crawl.

Key training choices:

- **Curated pre-training data**: filtering CommonCrawl and web data to retain high-education-value text, code with docstrings, and synthetic problem-solution pairs. Quality per token matters more than token count.
- **Curriculum training**: ordering training data from simpler to more complex content can improve sample efficiency.
- **Distillation from a strong teacher**: training the small model to mimic the token-level probability distribution of a larger model, not just the argmax labels.
- **Quantization-aware training**: fine-tuning with simulated quantization noise prepares the model for INT8 or INT4 inference without significant quality loss.

## Key Properties & Capabilities

- **On-device deployment**: 4-bit quantized 7B models can run at interactive speeds on recent mobile chips (Apple Neural Engine, Snapdragon) and consumer CPUs with frameworks like llama.cpp and MLX.
- **Latency**: first-token latency under 100ms is achievable on device, making SLMs suitable for real-time applications.
- **Privacy**: data never leaves the device; inference is local.
- **Domain specialization**: a small model fine-tuned on a specific domain (medical, legal, customer service) can match a general large model on that domain at a fraction of the inference cost.
- **Weaker multi-step reasoning**: SLMs lag on tasks requiring sustained chains of inference, complex math, and novel problem composition, because the capacity to build and maintain intermediate representations is limited.
- **Smaller knowledge base**: fewer parameters encode less world knowledge; SLMs benefit more from retrieval augmentation ([[rag]]) than LLMs.

## Trade-offs vs Other Types

| Dimension | SLM (≤7B) | [[llm]] (≥70B) | Quantized LLM |
|---|---|---|---|
| Parameters active | All | All | All (compressed) |
| RAM required | 4–16 GB | 40–160 GB | 8–40 GB |
| Inference speed | Fast | Slow | Moderate |
| Reasoning quality | Moderate | High | High |
| Fine-tuning cost | Low (LoRA) | High | High |
| Deployment target | Edge / local | Cloud | Cloud / high-end GPU |

## Python Usage Pattern

```python
# On-device inference with llama.cpp Python bindings
from llama_cpp import Llama

# Load a GGUF-quantized model (Q4_K_M quantization)
llm = Llama(
    model_path="phi-3-mini-4k-instruct.Q4_K_M.gguf",
    n_ctx=4096,
    n_threads=8,
    n_gpu_layers=0,  # set > 0 to offload layers to GPU
)

response = llm.create_chat_completion(
    messages=[
        {"role": "user", "content": "Solve: if x^2 - 5x + 6 = 0, find x."}
    ],
    max_tokens=256,
    temperature=0.1,
)
print(response["choices"][0]["message"]["content"])

# LoRA fine-tuning with PEFT
from peft import LoraConfig, get_peft_model
from transformers import AutoModelForCausalLM

base = AutoModelForCausalLM.from_pretrained("microsoft/phi-3-mini-4k-instruct")
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05,
    task_type="CAUSAL_LM",
)
model = get_peft_model(base, lora_config)
model.print_trainable_parameters()
# trainable params: 8,388,608 || all params: 3,830,784,000 || trainable%: 0.219
```

## Limitations

- **Reasoning ceiling**: multi-step mathematical reasoning and formal logic are fundamentally harder when the model has fewer layers to build up intermediate representations.
- **Knowledge breadth**: smaller parameter count means less memorized knowledge; SLMs require retrieval augmentation for knowledge-intensive tasks.
- **Context length**: GQA and sliding window attention reduce the effective context budget; very long-document tasks are less reliable.
- **Prompt sensitivity**: small models are more sensitive to prompt phrasing than large models, which have enough capacity to be robust to minor variations.
- **Distillation ceiling**: a student cannot exceed the capability ceiling of its teacher on the training distribution; SLMs distilled from mediocre teachers inherit their weaknesses.

## Related Topics

[[llm]] — the large-model counterpart  
[[mixture-of-experts]] — an alternative approach to scaling that keeps inference cost low  
[[embedding-models]] — small models optimized for semantic representation rather than generation  
[[neural-scaling-laws]] — why capability scales predictably with parameters and data  
[[mechanistic-interpretability]] — studying what small models learn is tractable in ways large models are not

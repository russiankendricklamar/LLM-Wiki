---
title: "Vision-Language Models (VLMs)"
category: "Language Models"
order: 3
lang: "en"
slug: "vlm"
---

# Vision-Language Models (VLMs)

## Prerequisites

[[llm]]

## What Is It

A vision-language model processes both visual and textual inputs within a unified framework, producing text outputs that require understanding the relationship between the two modalities. The defining capability is not simply recognizing objects in images — it is grounding language in visual perception: answering questions about image content, describing scenes in natural language, reading text in documents, interpreting charts and diagrams, and reasoning about spatial relationships.

VLMs span two fundamentally different paradigms. **Contrastive VLMs** (CLIP, SigLIP) learn a shared embedding space where semantically matching image-text pairs cluster together; they are not generative but produce powerful representations. **Generative VLMs** (LLaVA, InternVL, Qwen-VL) extend a language model decoder to accept visual tokens as part of its input, enabling open-ended text generation conditioned on images.

## Architecture

**Visual encoder (ViT)** — images are divided into fixed-size patches (typically 14×14 or 16×16 pixels) and projected into a sequence of patch embeddings. A learnable `[CLS]` token is prepended:

$$z_0 = [v_{\text{cls}};\, v_1;\, \ldots;\, v_N] + E_{\text{pos}}$$

where $v_i = x_i W_E$ with $x_i$ being a flattened patch and $E_{\text{pos}}$ a learned positional embedding. This sequence is passed through a standard [[transformer-architecture|transformer]] encoder.

**Cross-modal connector** — the bridge between the visual encoder and the language decoder takes several forms:

- **Linear projector**: a single linear layer maps visual features from $\mathbb{R}^{N \times d_v}$ to $\mathbb{R}^{N \times d_l}$, matching the language model's hidden dimension. Simple but effective (LLaVA-1.5).
- **[[transformer-architecture|MLP]] projector**: two-layer [[transformer-architecture|MLP]] with a nonlinearity, providing more capacity to transform visual representations.
- **Q-Former** (BLIP-2): a small [[transformer-architecture|transformer]] with a fixed set of learned query tokens that cross-attend to visual features, compressing $N$ visual tokens to $K \ll N$ query embeddings.
- **Cross-[[attention-mechanisms|attention]] layers**: interleaved cross-[[attention-mechanisms|attention]] in the language decoder attends to visual features at each layer.

**Language decoder** — a pre-trained [[llm]] (decoder-only transformer) that receives visual tokens prepended to or interleaved with text tokens. The visual tokens are treated as a special prefix; the autoregressive generation applies only to text tokens.

## Mathematical Framework

**Contrastive objective (CLIP)** — given a batch of $N$ (image, text) pairs, the model maximizes the similarity of matching pairs and minimizes similarity of non-matching pairs:

$$\mathcal{L}_{\text{CLIP}} = -\frac{1}{N}\sum_{i=1}^{N} \log \frac{\exp(s(v_i, t_i) / \tau)}{\sum_{j=1}^{N} \exp(s(v_i, t_j) / \tau)}$$

where $s(v, t) = \frac{f_v(v)^\top f_t(t)}{\|f_v(v)\| \|f_t(t)\|}$ is the cosine similarity between the normalized image and text embeddings, and $\tau$ is a learnable temperature. The symmetric loss averages image-to-text and text-to-image directions.

**Generative objective** — after the visual prefix, standard next-token prediction applies only to the text tokens:

$$\mathcal{L}_{\text{gen}} = -\sum_{t=1}^{T} \log p_\theta(y_t \mid v_{\text{tokens}},\, y_{<t})$$

where $v_{\text{tokens}}$ are the projected visual tokens fixed in the prefix.

**SigLIP loss** replaces CLIP's softmax-based contrastive loss with a sigmoid pairwise loss, enabling more stable training and better performance with smaller batch sizes:

$$\mathcal{L}_{\text{SigLIP}} = -\frac{1}{N^2}\sum_{i,j} \log \sigma\!\left(z_{ij} (2 \mathbb{1}[i=j] - 1)\right)$$

where $z_{ij} = s(v_i, t_j) / \tau - b$ and $\sigma$ is the sigmoid function.

## Training Paradigm

Generative VLMs typically train in two stages:

**Stage 1 — Visual-language alignment.** Only the cross-modal connector is trained while the visual encoder and language decoder are frozen. The model learns to map image features into the token space the [[llm]] understands, using image-caption data at scale (LAION, CC3M, etc.). Loss is the standard autoregressive captioning loss.

**Stage 2 — Visual instruction tuning.** The connector and the language decoder (or LoRA adapters on the LLM) are fine-tuned jointly on visual instruction-following data: VQA pairs, image-description dialogues, chart understanding, and document reading tasks. The visual encoder often remains frozen because it was pre-trained on a large contrastive corpus and generalizes well.

## Key Properties & Capabilities

- **Visual question answering (VQA)**: answers factual questions about image content with high accuracy on standard benchmarks (VQAv2, GQA).
- **Document and chart understanding**: reads text in images (OCR-free), interprets bar charts, scatter plots, and tables.
- **Spatial reasoning**: locates objects relative to each other — though this remains a weakness compared to text-only reasoning.
- **Image captioning**: generates detailed natural language descriptions.
- **Multi-image and video**: newer architectures extend to sequences of frames, enabling temporal reasoning.
- **Hallucination**: a significant failure mode — the model generates text that is inconsistent with the actual image content, especially for objects with low visual saliency.

## Trade-offs vs Other Types

| Dimension | Contrastive VLM | Generative VLM | Text-only LLM |
|---|---|---|---|
| Modality | Image + text | Image + text | Text only |
| Output | Embedding | Text | Text |
| Use case | Retrieval, classification | Captioning, VQA, chat | NLU, NLG |
| Training data | Image-text pairs | Image-instruction pairs | Text corpus |
| Inference cost | Low | High | Moderate |
| Hallucination risk | N/A | High | High |

## Python Usage Pattern

```python
from transformers import AutoProcessor, AutoModelForVision2Seq
from PIL import Image
import requests
import torch

# Load a generative VLM (LLaVA-style)
model_id = "llava-hf/llava-1.5-7b-hf"
processor = AutoProcessor.from_pretrained(model_id)
model = AutoModelForVision2Seq.from_pretrained(
    model_id,
    torch_dtype=torch.bfloat16,
    device_map="auto",
)

# Load an image from URL
image = Image.open(requests.get(
    "https://example.com/chart.png", stream=True
).raw)

# Build a chat prompt with image
messages = [
    {
        "role": "user",
        "content": [
            {"type": "image"},
            {"type": "text", "text": "What trend does this chart show?"},
        ],
    }
]
prompt = processor.apply_chat_template(messages, add_generation_prompt=True)
inputs = processor(text=prompt, images=image, return_tensors="pt").to(model.device)

with torch.no_grad():
    output_ids = model.generate(**inputs, max_new_tokens=256)

response = processor.decode(output_ids[0], skip_special_tokens=True)
print(response)
```

## Limitations

- **Spatial reasoning**: models often confuse left/right, above/below, and relative sizes. The ViT patch representation discards absolute spatial structure that humans use intuitively.
- **Visual hallucination**: the language model component can generate descriptions of objects not present in the image, extrapolating from statistical patterns in training text.
- **High-resolution details**: standard ViT processes images at fixed low resolution (224×224 or 336×336); fine-grained details (small text, subtle chart features) are often missed unless the model uses dynamic resolution tiling.
- **Video temporal reasoning**: processing video as independent frames loses motion information; true temporal understanding requires specialized architectures.
- **Compositional generalization**: the model may fail on novel combinations of objects and spatial relationships not seen during training.

## Related Topics

[[llm]] — the language model backbone underlying generative VLMs  
[[embedding-models]] — contrastive VLMs produce embeddings; the geometry of embedding spaces is the same  
[[pac-learning]] — theoretical framework for studying when multi-modal learning generalizes

---
title: "Vision Transformers (ViT)"
category: "AI Theory"
order: 16
lang: "en"
slug: "vision-transformers"
---

# Vision Transformers (ViT)

## What Is It

The Vision [[transformer-architecture|Transformer]] (ViT) represents a paradigm shift in computer vision, proving that the **Transformer architecture**—originally designed for NLP—can outperform Convolutional Neural Networks (CNNs) when scaled to large datasets. 

The core philosophy of ViT is: **"An Image is Worth 16x16 Words."** Instead of using local filters (convolutions) to extract features, ViT treats an image as a sequence of flattened patches and applies the same self-[[attention-mechanisms|attention]] mechanism used in BERT or GPT.

## Architecture

The ViT pipeline consists of several key steps:

1. **Patch Partitioning**: Divide an image of size $H \times W \times C$ into $N$ square patches of size $P \times P$.
2. **Linear Projection**: Flatten each patch and project it into a $D$-dimensional embedding space.
3. **Learnable Embeddings**:
    - **Position Embeddings**: Since Transformers are permutation-invariant, 1D learnable position embeddings are added to the patch embeddings to retain spatial information.
    - **[CLS] Token**: A special learnable token is prepended to the sequence. Its state at the output of the Transformer serves as the global image representation for classification.
4. **Transformer Encoder**: A stack of standard Transformer blocks (Multi-head Self-Attention + [[transformer-architecture|MLP]] + LayerNorm).

## Mathematical Framework

Given an input image $x \in \mathbb{R}^{H \times W \times C}$, we reshape it into $N = (HW)/P^2$ patches $x_p \in \mathbb{R}^{N \times (P^2 \cdot C)}$.

The projection and token prepending can be written as:
$$z_0 = [x_{\text{class}}; x_p^1 E; x_p^2 E; \dots; x_p^N E] + E_{pos}$$

where $E \in \mathbb{R}^{(P^2 C) \times D}$ is the patch embedding matrix and $E_{pos} \in \mathbb{R}^{(N+1) \times D}$ is the position embedding.

The self-attention allows every patch to "look" at every other patch:
$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

## ViT vs. CNNs

| Feature | CNN (e.g., ResNet) | Vision Transformer (ViT) |
|---|---|---|
| **Inductive Bias** | Strong (Translation invariance, locality) | Weak (Must learn spatial structure from scratch) |
| **Data Requirement** | Efficient on small datasets | Needs large-scale pre-training (JFT-300M, ImageNet-21K) |
| **Receptive Field** | Local (grows with depth) | Global (every layer sees the whole image) |
| **Scaling** | Diminishing returns | Scales exceptionally well with compute and data |

## Python Implementation (Conceptual)

```python
import torch
import torch.nn as nn

class PatchEmbedding(nn.Module):
    def __init__(self, img_size=224, patch_size=16, in_chans=3, embed_dim=768):
        super().__init__()
        self.proj = nn.Conv2d(in_chans, embed_dim, kernel_size=patch_size, stride=patch_size)

    def forward(self, x):
        # x: [B, 3, 224, 224] -> [B, 768, 14, 14] -> [B, 768, 196] -> [B, 196, 768]
        x = self.proj(x).flatten(2).transpose(1, 2)
        return x

class ViT(nn.Module):
    def __init__(self, num_classes=1000):
        super().__init__()
        self.patch_embed = PatchEmbedding()
        self.cls_token = nn.Parameter(torch.zeros(1, 1, 768))
        self.pos_embed = nn.Parameter(torch.zeros(1, 197, 768))
        self.transformer = nn.TransformerEncoder(
            nn.TransformerEncoderLayer(d_model=768, nhead=12), num_layers=12
        )
        self.head = nn.Linear(768, num_classes)

    def forward(self, x):
        x = self.patch_embed(x)
        cls_tokens = self.cls_token.expand(x.shape[0], -1, -1)
        x = torch.cat((cls_tokens, x), dim=1)
        x = x + self.pos_embed
        x = self.transformer(x)
        return self.head(x[:, 0])
```

## Related Topics

[[transformer-architecture]] — the foundation  
[[contrastive-learning]] — used in CLIP to connect ViT with Text  
[[vlm]] — Vision-Language Models using ViT backbones

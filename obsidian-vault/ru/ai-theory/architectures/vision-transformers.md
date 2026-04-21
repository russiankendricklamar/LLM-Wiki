---
title: "Vision Transformers (ViT)"
category: "AI Theory"
order: 16
lang: "ru"
slug: "vision-transformers"
---

# Vision Transformers (ViT)

## Что это такое

Vision [[transformer-architecture|Transformer]] (ViT) представляет собой смену парадигмы в компьютерном зрении, доказывая, что архитектура **Transformer**, изначально разработанная для NLP, может превзойти сверточные нейронные сети (CNN) при масштабировании на больших наборах данных.

Основная философия ViT: **«Изображение стоит 16x16 слов»**. Вместо использования локальных фильтров (сверток) для извлечения признаков, ViT рассматривает изображение как последовательность плоских патчей и применяет тот же механизм self-attention, что и в BERT или GPT.

## Архитектура

Конвейер ViT состоит из нескольких ключевых этапов:

1. **Patch Partitioning**: Разделение изображения размера $H \times W \times C$ на $N$ квадратных патчей размера $P \times P$.
2. **Linear Projection**: Сплющивание каждого патча и его проекция в $D$-мерное пространство эмбеддингов.
3. **Обучаемые эмбеддинги**:
    - **Position Embeddings**: Поскольку трансформеры инвариантны к перестановкам, добавляются 1D обучаемые позиционные эмбеддинги, чтобы сохранить пространственную информацию.
    - **[CLS] Token**: В начало последовательности добавляется специальный обучаемый токен. Его состояние на выходе трансформера служит глобальным представлением изображения для классификации.
4. **Transformer Encoder**: Стек стандартных блоков Transformer (Multi-head Self-[[attention-mechanisms|Attention]] + [[transformer-architecture|MLP]] + LayerNorm).

## Математический аппарат

Для входного изображения $x \in \mathbb{R}^{H \times W \times C}$ мы формируем $N = (HW)/P^2$ патчей $x_p \in \mathbb{R}^{N \times (P^2 \cdot C)}$.

Проекцию и добавление токена можно записать как:
$$z_0 = [x_{\text{class}}; x_p^1 E; x_p^2 E; \dots; x_p^N E] + E_{pos}$$

где $E \in \mathbb{R}^{(P^2 C) \times D}$ — матрица проекции патчей, а $E_{pos} \in \mathbb{R}^{(N+1) \times D}$ — позиционные эмбеддинги.

Self-attention позволяет каждому патчу «смотреть» на любой другой патч:
$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

## ViT vs. CNN

| Характеристика | CNN (например, ResNet) | Vision Transformer (ViT) |
|---|---|---|
| **Индуктивное смещение** | Сильное (инвариантность к сдвигу, локальность) | Слабое (должен выучивать структуру с нуля) |
| **Требования к данным** | Эффективны на малых данных | Требует масштабного предобучения (JFT-300M) |
| **Поле зрения** | Локальное (растет с глубиной) | Глобальное (каждый слой видит всё фото) |
| **Масштабируемость** | Затухающая отдача | Отлично масштабируется с ростом данных и compute |

## Пример реализации на Python (Концептуально)

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

## Родственные темы

[[transformer-architecture|Архитектура Transformer]] — фундамент  
[[contrastive-learning|Contrastive Learning]] — используется в CLIP для связи ViT с текстом  
[[vlm|VLM]] — мультимодальные модели на базе ViT

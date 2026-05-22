---
title: "DoRA: Weight-Decomposed Low-Rank Adaptation"
category: "language-models"
order: 192
lang: "en"
slug: "dora"
---

# DoRA: Weight-Decomposed Low-Rank Adaptation

[[DoRA]] decomposes pre-trained weights into magnitude $m$ and direction $V$: $W = m \frac{V}{||V||}$. Only the directional component is updated via low-rank matrices $BA$, enhancing fine-tuning capacity over [[LoRA]].

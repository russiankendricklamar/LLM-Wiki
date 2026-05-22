---
title: "QLoRA"
category: "language-models"
order: 193
lang: "en"
slug: "qlora"
---

# QLoRA

[[QLoRA]] enables fine-tuning of 4-bit quantized models. It introduces 4-bit NormalFloat (NF4) and Double Quantization, updating only low-rank adapters. Memory is optimized while matching 16-bit fine-tuning performance: $Y = XW^{NF4} + X L_1 L_2$.

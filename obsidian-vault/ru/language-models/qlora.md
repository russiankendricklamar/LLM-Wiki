---
title: "QLoRA"
category: "language-models"
order: 193
lang: "ru"
slug: "qlora"
---

# QLoRA

[[QLoRA]] позволяет дообучать 4-битные квантованные модели. Используется 4-bit NormalFloat (NF4) и двойное квантование. Обновляются только адаптеры низкого ранга: $Y = XW^{NF4} + X L_1 L_2$.

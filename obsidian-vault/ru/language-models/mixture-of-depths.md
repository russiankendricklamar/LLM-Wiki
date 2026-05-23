---
title: "Mixture of Depths"
category: "language-models"
order: 190
lang: "ru"
slug: "mixture-of-depths"
---

# Mixture of Depths

[[Mixture of Depths]] (MoD) динамически распределяет вычисления, определяя, какие токены участвуют в слоях self-attention и [[transformer-architecture|MLP]]. Токены маршрутизируются с помощью механизма top-k на основе скаляра $r_i = W_r x_i$.

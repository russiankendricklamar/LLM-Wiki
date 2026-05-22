---
title: "Vision Mamba"
category: "ai-theory/architectures"
order: 191
lang: "en"
slug: "vision-mamba"
---

# Vision Mamba

[[Vision Mamba]] adapts State Space Models (SSMs) like [[Mamba SSM]] to image tasks. By treating image patches as sequences and applying bidirectional processing, it achieves $O(N)$ complexity. The state evolution is $h_t = \bar{A}h_{t-1} + \bar{B}x_t$.

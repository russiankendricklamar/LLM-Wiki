---
title: "Decision Transformers"
category: "ai-theory/rl"
order: 195
lang: "en"
slug: "decision-transformers"
---

# Decision Transformers

[[Decision Transformers]] cast reinforcement learning as conditional sequence modeling. By feeding trajectories $\tau = (\hat{R}_1, s_1, a_1, \dots, \hat{R}_T, s_T, a_T)$, an autoregressive [[transformer-architecture|Transformer]] predicts optimal actions without temporal difference learning.

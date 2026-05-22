---
title: "DreamerV3"
category: "ai-theory/rl"
order: 196
lang: "en"
slug: "dreamerv3"
---

# DreamerV3

[[DreamerV3]] is a general RL algorithm based on world models. It uses a Recurrent State Space Model (RSSM) with symlog predictions: $f(x) = \text{sgn}(x)\ln(|x|+1)$, enabling robust learning across scales and environments without tuning.

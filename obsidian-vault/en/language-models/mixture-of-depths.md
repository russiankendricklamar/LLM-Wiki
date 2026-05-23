---
title: "Mixture of Depths"
category: "language-models"
order: 190
lang: "en"
slug: "mixture-of-depths"
---

# Mixture of Depths

[[Mixture of Depths]] (MoD) dynamically allocates compute by determining which tokens participate in self-[[attention-mechanisms|attention]] and [[transformer-architecture|MLP]] layers. Tokens are routed using a top-k mechanism based on a router scalar $r_i = W_r x_i$. This bounds compute while maintaining performance.

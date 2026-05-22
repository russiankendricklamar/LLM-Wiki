---
title: "SDEs with Jumps"
category: "finance/stochastic"
order: 231
lang: "en"
slug: "jump-diffusions"
---

# SDEs with Jumps

[[Jump-Diffusion Models]] combine continuous Brownian paths with discrete Poisson-driven jumps: $dS_t = \mu S_t dt + \sigma S_t dW_t + S_{t-}(J dq_t)$. This captures sudden market crashes violating normal return assumptions.

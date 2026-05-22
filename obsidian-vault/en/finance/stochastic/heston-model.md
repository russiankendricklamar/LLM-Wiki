---
title: "Heston Model"
category: "finance/stochastic"
order: 209
lang: "en"
slug: "heston-model"
---

# Heston Model

The [[Heston Model]] posits stochastic volatility: $dS_t = \mu S_t dt + \sqrt{v_t} S_t dW_1^t$ and $dv_t = \kappa(\theta - v_t) dt + \xi \sqrt{v_t} dW_2^t$, with correlation $d\langle W_1, W_2 \rangle_t = \rho dt$. It admits a semi-analytical pricing formula via characteristic functions.

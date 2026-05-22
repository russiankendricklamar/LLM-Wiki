---
title: "FIGARCH"
category: "finance/time-series"
order: 207
lang: "en"
slug: "figarch"
---

# FIGARCH

[[FIGARCH]] (Fractionally Integrated GARCH) models long memory in volatility. The conditional variance involves the fractional differencing operator $(1-L)^d$, allowing slow hyperbolic decay of shocks: $\phi(L)(1-L)^d \epsilon_t^2 = \omega + [1-\beta(L)]v_t$.

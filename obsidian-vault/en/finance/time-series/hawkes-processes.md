---
title: "Hawkes Processes"
category: "finance/time-series"
order: 233
lang: "en"
slug: "hawkes-processes"
---

# Hawkes Processes

[[Hawkes Processes]] are self-exciting point processes where past events increase the probability of future events. The intensity is $\lambda(t) = \mu + \sum_{t_i < t} \alpha e^{-\beta(t-t_i)}$, modeling order book microstructure.

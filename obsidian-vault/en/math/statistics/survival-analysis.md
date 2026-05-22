---
title: Survival Analysis Basics
category: Statistics
order: 105
lang: en
slug: survival-analysis
---

## Overview
Survival analysis is a branch of statistics for analyzing the expected duration of time until one or more events happen (e.g., death, mechanical failure).

## Key Functions
- **Survival Function $S(t)$:** Probability that the event has not occurred by time $t$. $S(t) = P(T > t)$.
- **Hazard Function $h(t)$:** The instantaneous rate of occurrence of the event at time $t$, given survival up to time $t$.
$$ h(t) = \lim_{\Delta t \to 0} \frac{P(t \leq T < t + \Delta t \mid T \geq t)}{\Delta t} $$
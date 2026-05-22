---
title: Nyquist-Shannon Theorem
category: Signal Processing
order: 136
lang: en
slug: nyquist-shannon
---

## Overview
The Nyquist-Shannon sampling theorem bridges continuous-time and discrete-time signals.

## Formulation
It states that a continuous-time signal with frequencies no higher than $B$ hertz can be perfectly reconstructed from its samples if the sampling rate $f_s$ is strictly greater than $2B$ samples per second:
$$ f_s > 2B $$
Failure to satisfy this condition leads to [[sampling-aliasing]].
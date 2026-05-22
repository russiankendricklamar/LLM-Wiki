---
title: Sampling & Aliasing
category: Signal Processing
order: 138
lang: en
slug: sampling-aliasing
---

## Overview
Sampling converts a continuous signal into a discrete sequence. Aliasing occurs when the sampling rate is too low, causing high-frequency components to become indistinguishable from low-frequency components.

## Anti-Aliasing
To prevent aliasing, signals are passed through an anti-aliasing low-pass filter before sampling to remove frequencies above the Nyquist rate ($f_s / 2$).
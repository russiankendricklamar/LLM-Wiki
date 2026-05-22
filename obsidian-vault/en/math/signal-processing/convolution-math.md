---
title: Convolution
category: Signal Processing
order: 137
lang: en
slug: convolution-math
---

## Overview
Convolution is a mathematical operation on two functions that expresses how the shape of one is modified by the other.

## Continuous and Discrete
For continuous signals:
$$ (f * g)(t) = \int_{-\infty}^{\infty} f(\tau) g(t - \tau) \, d\tau $$
For discrete signals:
$$ (f * g)[n] = \sum_{m=-\infty}^{\infty} f[m] g[n - m] $$
By the Convolution Theorem, convolution in the time domain is equivalent to point-wise multiplication in the frequency domain.
---
title: Characteristic Functions
category: Probability
order: 125
lang: en
slug: characteristic-functions
---

## Overview
The characteristic function uniquely defines a probability distribution and is defined as the expected value of $e^{itX}$.

## Definition
For a random variable $X$:
$$ \varphi_X(t) = \mathbb{E}[e^{itX}] = \int_{-\infty}^{\infty} e^{itx} f_X(x) \, dx $$
It is closely related to the [[fft-math]] (Fourier Transform) of the probability density function. It always exists and simplifies the analysis of sums of independent variables:
$$ \varphi_{X+Y}(t) = \varphi_X(t) \varphi_Y(t) $$